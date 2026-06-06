---
title: "Miasma / Mini Shai-Hulud Threat Hunting & IoC Sweeping Playbook"
date: 2026-06-06T19:38:00+01:00
draft: false
summary: "A series of commands to find IoCs left by the Miasma Wave of MiniShaiHulud"
tags:
  [
    "Miasma",
    "MiniShaiHulud",
    "Worm",
    "GitHub",
    "NPM",
    "VSCode",
    "Claude",
    "Gemini"
  ]
---

## The Threat

This specific campaign seems to have come in three waves in very short order:

- **Wave 1 (June 1st 2026)** - targeted `npm` preinstall hooks and began by compromising `@redhat-cloud-services` namespace. The attackers bypassed trusted publishing via a compromised employee account.
- **Wave 2 (June 3rd and 4th 2026)** - abused `binding.gyp` - a file normally used to complie C/C++ native add ons and again would be triggered during `npm install`.
- **Wave 3 (June 5th 2026)** - abused auto-run capabilities in Claude Code, Gemini, Cursor and VSCode (and by extension Antigravity, Kiro, and anything else based on VSCode).

## Threat Hunting

### Wave 1: Preinstall Hooks & Droppers (June 1)

The initial burst compromised the npm registry, abusing standard lifecycle scripts to download payloads.

#### 1. Compromised Namespace Check

Sweeps package manifests for the explicitly compromised Red Hat cloud services scope.

```bash
find ~ -type f -name "package.json" -exec grep -Hni "@redhat-cloud-services" {} + 2>/dev/null

```

{{< notice info >}}
These commands use `2>/dev/null` to avoid errors caused by podman permissions, you may want to run without the stderr redirection and investigate permission issues.
{{< /notice >}}

### 2. Malicious Preinstall Discovery (Filtered)

Hunts for active preinstall hooks, while explicitly filtering out benign developer no-ops (like the ones used by `@google/genai`) to prevent false positives.

```bash
find ~ -type f -name "package.json" -exec grep -Hni "preinstall" {} + 2>/dev/null | grep -v "echo 'preinstall: no-op'"

```

### 3. Known Wave 1 Dropper Files

Searches the filesystem for the physical execution files dropped during the TanStack and OpenSearch repository compromises.

```bash
find ~ -type f \( -name "router_init.js" -o -name "setup.mjs" -o -name "transformers.pyz" \) 2>/dev/null

```

### Wave 2: "Phantom Gyp" Execution (June 3-4)

The campaign pivoted to bypass `--ignore-scripts` by abusing native C/C++ compilation steps during `node-gyp rebuild`, reading runner memory for GitHub secrets.

#### 1. binding.gyp Command Substitution

Searches specifically for the malicious command substitution string (`<!(node`) hidden inside native addon build configurations.

```bash
find ~ -type f -name "binding.gyp" -exec grep -HniE '<\!\(node.*(child_process|exec|spawn|curl|wget|fetch|bun|sh|bash)' {} + 2>/dev/null

```

{{< notice warning >}}
This command has a very high probability of false-positives, all you can really do is investigate the packages identified and compare to known vulnerable packages from StepSecurity, Snyk, etc.
{{< /notice >}}

### Wave 3: AI Agent & IDE Poisoning (June 5)

The worm bypassed the npm registry entirely, using stolen PATs to directly commit payloads to source repositories (including 73 Microsoft/Azure repos). It triggers when opened in standard IDEs or AI coding assistants.

#### 1. Agent Configuration Triggers

Hunts through Claude Code, Gemini CLI, Cursor, and VS Code local configurations for the injected payload execution command.

```bash
find ~ -type f \( -path "*/.claude/settings.json" -o -path "*/.gemini/settings.json" -o -path "*/.cursor/rules/setup.mdc" -o -path "*/.vscode/tasks.json" \) -exec grep -Hni "setup.js" {} + 2>/dev/null

```

#### 2. Malicious Dropper Identification

Locates the 4.3 MB obfuscated JavaScript worm dropped into repositories disguised as a GitHub Action setup file.

```bash
find ~ -type f -name "setup.js" -path "*/.github/*" 2>/dev/null

```

### 3. Forged Commit Audit

Steps into every local Git repository and scans the previous 100 commits to identify the exact forged commit message used by the worm to bypass CI pipelines.

```bash
find ~ -name ".git" -type d -execdir git log -100 --oneline \; 2>/dev/null | grep "chore: update dependencies \[skip ci\]"

```
