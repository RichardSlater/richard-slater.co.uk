---
title: "Configuring a SSH Client on Windows 10"
author: "Richard Slater"
date: 2020-10-12T19:48:53.797Z
lastmod: 2022-05-09T21:20:35+01:00
description: ""
subtitle: "The first step is identifying the versions of the OpenSSH components we want to install, for this guide we will only be installing the SSH…"
image: "/archives/2020-10-12_configuring-a-ssh-client-on-windows-10/images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
 - "/configuring-a-ssh-client-on-windows-10-4436c16c3469"
---

![image](images/1.jpg)
Photo by [Tadas Sar](https://unsplash.com/@stadsa?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

The first step is identifying the versions of the OpenSSH components we want to install, for this guide we will only be installing **the SSH Agent, not the server**. All of the following will need to be executed from a _Elevated PowerShell Prompt_.

```
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
```

This will spit out two capabilities, we want the client:

```
Name  : OpenSSH.Client~~~~0.0.1.0
State : NotPresent

Name  : OpenSSH.Server~~~~0.0.1.0
State : NotPresent
```

Which we can install with the following command:

```
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

This will result in the terse, but explanatory:

```
Path          :
Online        : True
RestartNeeded : False
```

If you’re like me you might assume you can start the service and get on with your day (I did). However this isn’t Unix my dude, this is Windows and it has to be a bit harder, but hey that’s why we earn the big bucks:

```
Start-Service ssh-agent
```

Will fail with the unhelpful “Service ‘OpenSSH Authentication Agent (ssh-agent)’ cannot be started due to the following error” and the error “Cannot start service ssh-agent on computer ‘.’.” — thanks Windows.

You can do a bit of poking about with PowerShell:

```
Get-Service ssh-agent
```

Only to find out that the service is indeed stopped:

```
Status   Name               DisplayName
Stopped  ssh-agent          OpenSSH Authentication Agent
```

To find out why we need to dig a bit deeper:

```
Get-Service ssh-agent | Select StartType
```

Which tells us the service is disabled:

```
StartType
---------
 Disabled
```

Now we can change that quite easily:

```
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
```

Now we can start the service:

```
Start-Service ssh-agent
```

And check it works with ssh-add:

```
ssh-add -L
```

Which now tells us the agent has no identities:

```
The agent has no identities.
```

It’s not the smoothest of experiences, but at least I didn’t have to compile OpenSSH from source this time.
