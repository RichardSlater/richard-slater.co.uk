---
title: 'New Server'
date: Wed, 29 Aug 2007 10:30:42 +0000
draft: false
tags: ['HP', 'ProLiant DL320s', 'Server', 'Sys Admin']
---

Recently purchaced and installed a new [HP ProLiant DL320s](https://web.archive.org/web/20080105053817/http://h10010.www1.hp.com/wwpc/uk/en/sm/WF05a/521-525-358263-358263-12083449-12843976.html) to run as the site primary file server, had some issues with Windows 2003 R2 32-bit as it repeatedly BSODed before getting into graphical setup, tried the drivers for the SAS controller also tried the disc on a different computer to no avail. After chatting with a few people someone asked why I wasn't going for 2k3 R2 64-bit, the main reason for not using it was it I had not had a chance to test it out in a test environment and wasn't overly happy putting it into a live environment, looked at the software that was going on the File Server and all seemed ok, installed the ProLiant Support Pack migrated files, setup file screening and quotas. All was well, server running very fast and very happy.

Came to install BackupExec 10d yesterday, **BIG** mistake seeminly when I checked to see if BackupExec supported Windows 2003 R2 64-bit on a x64 Architecture I got confused, yes remote agents are supported on that architecture and the media server is supported on IA64 Architectures, however the media server is not supported on Windows 2003 R2 64-bit (x64)... wooops.

Fortunatly it seems that all is not lost as BackupExec 11d looks like it will work and the options from 10d can be upgraded to 11d, now all I have to do is cost it all up. Note to self and other system Administrators read Symantecs compatability lists **VERY** carefuly.