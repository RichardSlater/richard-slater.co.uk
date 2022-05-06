---
title: 'Software Update Services (SUS) Problems'
date: Thu, 28 Apr 2005 12:44:10 +0000
draft: false
tags: ['Sys Admin']
---

We have been having a couple of problems with the soon to be replaced Software Update Services (SUS):

First and formost, large files do not syncronise between the Master SUS Server and the Slave at a satalite site. The two that have caused us the most problems have been Windows XP SP2 (266MB) and Windows 2003 SP1 (337MB). The error message is the rather criptic "0x80072EFE: The connection to the server was lost". The soloution, however, is a simple one. Simply take the files from the Master SUS server on USB key or CD and dump them on the Slave SUS Server.

Second problem, was Active Server Pages EventID 5 messages in the application log, seemingly caused by SUS in the Default Application Pool. What it turns out is permissions on the IIS directorys were preventing the SUS application (or any other application for that matter) from writing fairly meaningless information to disk. The steps for resolving this message are found at [this KB Article (842493)](https://web.archive.org/web/20050318091836/http://support.microsoft.com/?kbid=842493)

However! put up with SUS for the time being, WSUS is on its way soon™