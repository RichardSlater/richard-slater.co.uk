---
title: "Oracle Cloud Infrastructure (OCI) SSH Connection Timeout"
date: 2026-01-26T21:12:00+00:00
draft: false
summary: "Understanding and Resolving SSH Connection Failures on OCI ARM64 Instances"
tags:
  [
    "Rust",
    "Go",
    "Software Engineering",
    "Profile",
    "RISC-V",
    "riscv64",
    "Git",
    "DevEnv",
    "Chezmoi",
    "NeoVim",
    "VSCodium",
  ]
---

{{< notice info >}}
This document is provided as-is for educational purposes. Oracle Cloud Infrastructure is a trademark of Oracle Corporation. This document is not affiliated with or endorsed by Oracle.
{{< /notice >}}

## Executive Summary

Here we find ouself in a common but poorly documented issue affecting SSH connections to Oracle Cloud Infrastructure (OCI) instances, particularly on ARM64 (Ampere) shapes. After a small number of SSH connections from a single source IP address, subsequent connection attempts timeout completely while ICMP (ping) continues to work normally.

**Root Cause:** OCI implements network-level SSH rate limiting as an anti-abuse measure. This rate limiting operates at the infrastructure level, outside the instance, and cannot be disabled by users.

**Solution:** Use SSH connection multiplexing to maintain persistent connections and avoid repeated authentication attempts.

## Table of Contents

1. [Problem Description](#problem-description)
2. [Symptoms and Diagnosis](#symptoms-and-diagnosis)
3. [Root Cause Analysis](#root-cause-analysis)
4. [Testing Methodology](#testing-methodology)
5. [Solutions](#solutions)
   - [SSH Configuration](#ssh-configuration)
   - [Ansible Configuration](#ansible-configuration)
   - [Other Tools](#other-tools)
6. [Best Practices](#best-practices)
7. [Frequently Asked Questions](#frequently-asked-questions)

## Problem Description

### The Issue

When connecting to OCI instances via SSH, connections work normally for the first 3-4 attempts, then all subsequent connections timeout completely. The instance remains running and responsive to ICMP ping, but TCP port 22 becomes unreachable from your IP address.

### Common Search Terms

Users experiencing this issue often search for:

- "OCI SSH connection timed out"
- "Oracle Cloud SSH not working after first connection"
- "OCI ARM64 SSH intermittent failure"
- "Ansible timeout OCI Oracle Cloud"
- "SSH works then stops OCI"
- "OCI Free Tier SSH connection refused"
- "Oracle Cloud firewall blocking SSH"
- "OCI instance SSH unreachable but ping works"

### Who Is Affected

This issue particularly affects:

- **DevOps engineers** using automation tools (Ansible, Terraform provisioners, shell scripts)
- **Developers** making frequent SSH connections during development
- **Users with multiple SSH keys** loaded in their SSH agent
- **OCI Free Tier users** (ARM64 Ampere instances)
- **Anyone running configuration management** against OCI instances

## Symptoms and Diagnosis

### Primary Symptoms

1. **SSH works initially, then fails completely**

   ```bash
   $ ssh opc@<instance-ip>  # Works (attempt 1)
   $ ssh opc@<instance-ip>  # Works (attempt 2)
   $ ssh opc@<instance-ip>  # Works (attempt 3)
   $ ssh opc@<instance-ip>  # Timeout (attempt 4+)
   ssh: connect to host <ip> port 22: Connection timed out
   ```

2. **ICMP (ping) continues to work**

   ```bash
   $ ping <instance-ip>
   64 bytes from <ip>: icmp_seq=1 ttl=53 time=22.3 ms  # Always works
   ```

3. **TCP port 22 becomes unreachable**

   ```bash
   $ nc -zv -w5 <instance-ip> 22
   nc: connect to port 22 (tcp) timed out: Operation now in progress
   ```

4. **Instance logs show no incoming connections during failure period**
   - SSHD is running normally
   - iptables shows no drops
   - No firewall blocks in instance logs

### Diagnostic Commands

```bash
# Test SSH with verbose output
ssh -vvv opc@<instance-ip>

# Check if port 22 is reachable
nc -zv -w10 <instance-ip> 22

# Verify instance is otherwise reachable
ping -c 3 <instance-ip>

# Check how many keys your SSH agent has
ssh-add -l
```

### Key Diagnostic Indicators

| Test                   | During Normal Operation | During Rate Limit |
| ---------------------- | ----------------------- | ----------------- |
| SSH connection         | Succeeds                | Timeout           |
| Ping (ICMP)            | Succeeds                | Succeeds          |
| Port 22 check (netcat) | Succeeds                | Timeout           |
| Instance console       | Accessible              | Accessible        |
| SSHD service status    | Running                 | Running           |

## Root Cause Analysis

### The Rate Limiting Mechanism

Through systematic testing, I identified that OCI implements rate limiting with the following characteristics:

1. **Trigger Threshold:** Approximately 4 SSH authentication attempts within a short time window (~30 seconds)

2. **Scope:** Per source IP address, not per destination instance
   - Changing the destination instance IP does not reset the limit
   - The block applies to your source IP connecting to ANY OCI instance

3. **Duration:** Rate limit block persists for approximately 5 minutes

4. **Level:** Network infrastructure, outside the instance
   - Cannot be disabled via iptables, firewalld, or Security Lists
   - Operates before traffic reaches the instance

5. **Multiple SSH Keys:** If you have multiple SSH keys loaded in your SSH agent, each connection attempt tries ALL keys, multiplying your authentication attempts
   - 2 keys = 2 auth attempts per connection
   - With 2 keys, you hit the limit after only 2 successful connections

### Why This Exists

OCI implements this as an anti-abuse measure to:

- Prevent SSH brute-force attacks
- Protect the platform from credential stuffing
- Limit reconnaissance by attackers
- Reduce load on the network infrastructure

This is common among cloud providers, though OCI's implementation is notably aggressive compared to Azure, AWS or GCP.

## Testing Methodology

### Test Environment

The following tests were conducted on 2026-01-26 to isolate and verify the root cause:

- **Instance Type:** VM.Standard.A1.Flex (ARM64)
- **Shape:** 1 OCPU, 6GB RAM
- **Region:** uk-london-1
- **Image:** Oracle Linux 8 (aarch64)
- **Network:** VCN with NSG allowing SSH from 0.0.0.0/0

### Test Cases Performed

#### Test 1: Baseline Instance (No Cloud-Init)

- **Configuration:** Minimal instance with no custom cloud-init
- **Result:** SSH failed after 3-4 connections
- **Conclusion:** Issue is not caused by cloud-init

#### Test 2: Disabled Firewalld

- **Configuration:** firewalld stopped, disabled, and masked in cloud-init bootcmd
- **Result:** SSH still failed after 3-4 connections
- **Conclusion:** Issue is not caused by firewalld

#### Test 3: Flushed All iptables Rules

- **Configuration:** All iptables rules flushed, policies set to ACCEPT
- **Result:** SSH still failed after 3-4 connections
- **Conclusion:** Issue is not caused by iptables

#### Test 4: Network Security Groups vs Security Lists

- **Configuration:** Tested with NSG instead of Security List
- **Result:** Identical failure pattern
- **Conclusion:** Issue is not caused by OCI security rules

#### Test 5: Interval Testing

| Interval Between Connections | Result                         |
| ---------------------------- | ------------------------------ |
| 2 seconds                    | 3 successes, then blocked      |
| 5 seconds                    | 4 successes, then blocked      |
| 10 seconds                   | 4 successes, then blocked      |
| 15 seconds                   | 4 successes, then blocked      |
| 30 seconds                   | **All connections successful** |

#### Test 6: Rate Limit Recovery Time

- After triggering rate limit, tested recovery at intervals
- **Result:** Access restored after approximately 5 minutes

#### Test 7: Serial Console Verification

Using OCI Console Connection to access instance during SSH block:

- Verified SSHD running normally
- Verified iptables not blocking
- Verified incoming connections were NOT reaching the instance
- Observed successful connections from OTHER IP addresses during block

### Key Evidence

From instance system logs during rate limiting:

```
# Our IP (81.97.107.123) - last seen BEFORE rate limit triggered
Jan 26 19:29:40 sshd[15424]: Accepted publickey for opc from 81.97.107.123 port 61225

# During rate limit - NO entries from our IP, but other IPs work:
Jan 26 19:34:58 sshd[42388]: authentication failure... rhost=161.153.28.229 user=root
```

This proves:

- SSHD was accepting connections (from other IPs)
- Our packets never reached the instance
- The block was at the network level

## Solutions

### SSH Configuration

#### Option 1: SSH Multiplexing (Recommended)

Add to `~/.ssh/config`:

```ssh-config
# OCI instances - use connection multiplexing to avoid rate limiting
Host oci-* 132.145.* 152.67.* 129.213.* 140.238.* 141.147.* 144.24.* 150.136.* 158.101.* 168.138.* 192.29.*
    # Reuse connections - avoids repeated authentication
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h-%p
    ControlPersist 600

    # Only use specified key, don't try all keys in agent
    IdentitiesOnly yes

    # Faster authentication
    PreferredAuthentications publickey

    # Reasonable timeouts
    ConnectTimeout 30
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

Create the socket directory:

```bash
mkdir -p ~/.ssh/sockets
chmod 700 ~/.ssh/sockets
```

#### Option 2: Limit SSH Keys

If you have multiple keys loaded in your SSH agent:

```bash
# Check loaded keys
ssh-add -l

# Option A: Use IdentitiesOnly in ssh command
ssh -o IdentitiesOnly=yes -i ~/.ssh/oci_key opc@<instance-ip>

# Option B: Temporarily remove extra keys
ssh-add -D                     # Remove all keys
ssh-add ~/.ssh/oci_key         # Add only the OCI key
```

#### Option 3: Connection Retry Script

For scripts that need to handle rate limiting gracefully:

```bash
#!/bin/bash
# ssh-with-retry.sh - SSH with exponential backoff for OCI

MAX_ATTEMPTS=5
BASE_DELAY=30
HOST="$1"
shift

for attempt in $(seq 1 $MAX_ATTEMPTS); do
    echo "SSH attempt $attempt of $MAX_ATTEMPTS..."

    if ssh -o ConnectTimeout=30 -o ControlMaster=auto \
           -o ControlPath=/tmp/ssh-%r@%h-%p \
           -o ControlPersist=600 "$HOST" "$@"; then
        exit 0
    fi

    if [ $attempt -lt $MAX_ATTEMPTS ]; then
        delay=$((BASE_DELAY * attempt))
        echo "Connection failed. Waiting ${delay}s before retry..."
        sleep $delay
    fi
done

echo "Failed after $MAX_ATTEMPTS attempts"
exit 1
```

### Ansible Configuration

For Ansible playbooks targeting OCI instances, use this configuration:

#### ansible.cfg

```ini
[defaults]
# Keep forks low to avoid parallel connections triggering rate limits
forks = 1
pipelining = True
timeout = 120

[ssh_connection]
# SSH multiplexing - reuse connections to avoid rate limiting
ssh_args = -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=60 -o ControlMaster=auto -o ControlPersist=600s -o ControlPath=/tmp/ansible-ssh-%%h-%%p-%%r -o IdentitiesOnly=yes -o PreferredAuthentications=publickey

# Enable pipelining for performance (reduces SSH operations)
pipelining = True

# Connection timeout - allow time for rate limit recovery
timeout = 120

# Retry logic - if connection fails, back off and retry
retries = 5

# Control path for SSH multiplexing
control_path = /tmp/ansible-ssh-%%h-%%p-%%r
```

#### Key Configuration Explained

| Setting               | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| `ControlMaster=auto`  | Enable SSH connection reuse                              |
| `ControlPersist=600s` | Keep connection open for 10 minutes                      |
| `ControlPath=...`     | Socket file for multiplexed connection                   |
| `IdentitiesOnly=yes`  | Only use specified key, don't try all agent keys         |
| `forks=1`             | Sequential execution prevents parallel connection storms |
| `retries=5`           | Automatic retry on connection failure                    |
| `pipelining=True`     | Reduce number of SSH operations                          |

### Terraform Provisioner Configuration

If using Terraform provisioners with SSH:

```hcl
resource "null_resource" "provision" {
  connection {
    type        = "ssh"
    user        = "opc"
    private_key = file("~/.ssh/oci_key")
    host        = oci_core_instance.example.public_ip
    timeout     = "5m"
  }

  # Use a single provisioner with multiple commands
  # instead of multiple provisioners
  provisioner "remote-exec" {
    inline = [
      "echo 'Starting configuration...'",
      "sudo dnf update -y",
      "sudo dnf install -y docker",
      "echo 'Configuration complete'"
    ]
  }
}
```

### Other Tools

#### SCP/SFTP

Use the same multiplexing configuration:

```bash
# Uses existing multiplexed connection if available
scp -o ControlPath=~/.ssh/sockets/%r@%h-%p file.txt opc@<instance>:/tmp/
```

#### rsync

```bash
rsync -avz -e "ssh -o ControlMaster=auto -o ControlPath=~/.ssh/sockets/%r@%h-%p -o ControlPersist=600" \
    ./local-dir/ opc@<instance>:/remote-dir/
```

#### Fabric/Paramiko (Python)

```python
import fabric

# Configure connection with keepalive
conn = fabric.Connection(
    host='<instance-ip>',
    user='opc',
    connect_kwargs={
        'key_filename': '~/.ssh/oci_key',
        'timeout': 60,
        'banner_timeout': 60,
    },
    connect_timeout=60,
)

# Reuse the same connection for multiple operations
conn.open()
try:
    conn.run('command1')
    conn.run('command2')
    conn.run('command3')
finally:
    conn.close()
```

## Best Practices

### Do's

1. **Use SSH multiplexing** for all OCI connections
2. **Limit SSH keys** to only what's needed for OCI
3. **Set appropriate timeouts** (30-60 seconds for connect)
4. **Implement retry logic** with exponential backoff
5. **Use pipelining** in Ansible to reduce connection overhead
6. **Keep connections alive** with ServerAliveInterval
7. **Use sequential execution** (forks=1) for critical provisioning

### Don'ts

1. **Don't run parallel SSH connections** to multiple OCI instances simultaneously
2. **Don't use short retry intervals** (minimum 30 seconds between attempts)
3. **Don't load multiple SSH keys** in your agent unnecessarily
4. **Don't disable rate limit protections** (you can't anyway - they're at OCI's network level)
5. **Don't assume the instance is broken** when SSH times out - check with ping first

### Connection Budget

Think of OCI SSH as having a "connection budget":

| With 1 SSH Key | With 2 SSH Keys | With 3 SSH Keys |
| -------------- | --------------- | --------------- |
| ~4 connections | ~2 connections  | ~1 connection   |

Per ~30 second window before rate limiting triggers.

## Frequently Asked Questions

### Q: Is this a bug or intentional?

**A:** This is intentional security behavior by OCI. It protects against SSH brute-force attacks and platform abuse.

### Q: Can I request OCI to disable rate limiting for my account?

**A:** No. This is infrastructure-level protection that cannot be disabled per-tenant.

### Q: Does this affect OCI paid tiers or only Free Tier?

**A:** The rate limiting applies to all OCI tiers, though Free Tier users report more aggressive limits.

### Q: Why does ping work but SSH doesn't?

**A:** The rate limiting specifically targets TCP port 22. ICMP is not rate limited.

### Q: My Ansible playbook was working yesterday, why does it fail today?

**A:** If you ran multiple playbooks or made manual SSH connections, you may have hit the rate limit. Wait 5 minutes and retry with multiplexing enabled.

### Q: Does using a VPN help?

**A:** Yes, a VPN gives you a different source IP. If your main IP is rate-limited, connecting via VPN will work. However, this is a workaround, not a solution.

### Q: How do I know if I'm being rate limited vs having another issue?

**A:** Check these indicators:

- Ping works: ✓ (rate limited) / ✗ (other issue)
- Other IPs can connect: ✓ (rate limited) / ✗ (other issue)
- Instance console accessible: ✓ (rate limited) / ✗ (other issue)
- Works after 5 minutes: ✓ (rate limited) / ✗ (other issue)

### Q: Does this affect OCI Cloud Shell?

**A:** No. Cloud Shell connections come from OCI's internal network and are not subject to the same rate limiting.

## Additional Resources

- [OCI Documentation - Connecting to an Instance](https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/accessinginstance.htm)
- [OpenSSH ControlMaster Documentation](https://man.openbsd.org/ssh_config#ControlMaster)
- [Ansible SSH Connection Plugin](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/ssh_connection.html)
