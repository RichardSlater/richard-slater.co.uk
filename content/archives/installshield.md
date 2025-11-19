---
title: 'InstallShield'
date: Wed, 13 Apr 2005 20:15:21 +0000
draft: false
tags: ['Sys Admin']
---

I have discovered a serious gripe, I have been trying to deploy all sorts of applications via [GPSI](https://docs.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software) into a Windows XP domain. For the most part I have had great sucess, old executables with a setup.exe I have been able to extract the files and install them manualy, or take an instalation image. Some new installs I have just been able to copy the install MSI files.

However there is a certain company who creates a product called [InstallSheild](http://www.installshield.com/), that produces the most convolute, screwy, malformed MSI packages you could imagine. Why? I don't know, everyone else manages it perfectly well, maybe it is so that we all have to use their AdminStudio package to re-package our software, who knows.

Anyway, if you value your systems administrators don't use this software, you could be causing them a nightmare.