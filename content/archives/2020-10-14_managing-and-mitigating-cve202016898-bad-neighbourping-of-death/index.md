---
title: "Managing and Mitigating CVE-2020–16898 (Bad Neighbour/Ping of Death)"
author: "Richard Slater"
date: 2020-10-14T12:25:19.125Z
lastmod: 2022-05-09T21:20:37+01:00

description: ""

subtitle: "Many IT administrators, DevOps, TechOps and SecOps in the UK woke up this morning, to a particularly nasty looking Patch Tuesday."

image: "/archives/2020-10-14_managing-and-mitigating-cve202016898-bad-neighbourping-of-death/images/1.png" 
images:
 - "/archives/2020-10-14_managing-and-mitigating-cve202016898-bad-neighbourping-of-death/images/1.png"


aliases:
    - "/managing-and-mitigating-cve-2020-16898-bad-neighbour-ping-of-death-4a42a7fb30d0"

---

#### On Security

#### There is a really good reason to run your Windows Update patches in October, and it’s because not all neighbours are good friends.

![image](/archives/2020-10-14_managing-and-mitigating-cve202016898-bad-neighbourping-of-death/images/1.png#layoutTextWidth)
Blue Screen of Death from Wikipedia




M
any IT administrators, DevOps, TechOps and SecOps in the UK woke up this morning, to a particularly nasty looking Patch Tuesday. Top of the chat is [CVE-2020–16898](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-16898) which has been dubbed [Bad Neighbour by McAfee] (https://www.mcafee.com/blogs/other-blogs/mcafee-labs/cve-2020-16898-bad-neighbor)and [Ping of Death by Sophos](https://news.sophos.com/en-us/2020/10/13/top-reason-to-apply-october-2020s-microsoft-patches-ping-of-death-redux/).

### Reality Check


I
t’s worth realising that this particular CVE has no _known_ exploits, however best case scenario a threat actor _could_ craft a ICMPv6 packet to exploit the RDNSS component of the IPv6 stack built in `tcp.sys`; the net result a threat actor could cause a Blue Screen of Death (BSOD). There is a worst case scenario of course in that a threat actor could craft a packet that didn’t cause a BSOD, but did allow the actor to execute code against the target system, known as Remote Code Execution (RCE). In reality the worst case scenario is unlikely to happen anytime soon, or even ever as it requires a failure of many lines of defence.

### Mitigating the Threat


T
he best course of action at this stage is to install the update on affected Windows 10 and Windows Server 2019, the [full list](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-16898) is available from Microsoft and the updates are now available on Windows Update. This is no less important because there is a [also a vulnerability in Microsoft Outlook](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-16947) which may result in Remote Code Execution.

As a quick reference here are the Affected Versions of Windows and the Hotfix that patches the vulnerability:
`Windows Version and Release Id        HotFix  
------------------------------        ------  
Windows 10 1709                       KB4580328  
Windows 10 1803                       KB4580330  
Windows 10 1809/Windows Server 2019   KB4577668  
Windows 10/Server 1903                KB4577671  
Windows 10/Server 1909                KB4577671  
Windows 10/Server 2004                KB4579311`

If you’re not sure what Release ID is, you can get it using the following PowerShell command:




If you want to know if the Hotfix is applied to your machine you can run the following PowerShell command:




This will either return an error message (in red) or will tell you specifically who and when it was installed:




### Managing the Threat


If
 for some reason you are unable to mitigate the threat by applying Windows Updates, for example if you are running a mission critical system preventing machine restarts, then there are still mitigation options open to you.

#### Disable RDNSS

The component that is vulnerable is part of the IPv6 stack is called RDNSS, or Recursive DNS Service, this can trivially be disabled in Windows 10 or Windows Server without requiring a restart. First find out which interfaces you need to configure with the `netsh`:




This will give you a list of interfaces, and their index in the `idx` column:




Then for each **externally facing** interface run the following command, using your `idx` from the previous command in place of the `3` in my command below:




The change can be reversed with the following command:




#### Disable IPv6

Disabling IPv6 might be throwing the baby out with the bathwater, I would discourage anyone from doing this, although who knows there might be use cases where it makes more sense:

[Disabling IPv6 on Network Adapter Windows 10](https://medium.com/@JockDaRock/disabling-ipv6-on-network-adapter-windows-10-5fad010bca75)


#### Block Bad Actors

In the [McAfee Security blog post] (https://www.mcafee.com/blogs/other-blogs/mcafee-labs/cve-2020-16898-bad-neighbor/)they kindly included a set of [Suricata](https://suricata-ids.org/) rules to block the bad actors from sending malicious packets:

[advanced-threat-research/CVE-2020-16898](https://github.com/advanced-threat-research/CVE-2020-16898)

[advanced-threat-research/CVE-2020-16899](https://github.com/advanced-threat-research/CVE-2020-16899)


### Conclusion


As
 with any incident, **don’t panic**, stop the bleeding and then repair the damage. There will likely be lots of questions in IT teams today about this vulnerability, as it stands however there are no known exploits, proactive maintenance today will go a long way to protecting your organisation from attacks.
