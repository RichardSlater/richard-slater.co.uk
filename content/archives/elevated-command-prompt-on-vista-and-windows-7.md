---
title: 'Elevated Command Prompt on Vista and Windows 7'
date: Thu, 07 Oct 2010 12:32:40 +0000
draft: false
tags: ['Command Prompt', 'Elevated', 'Run as Administrator', 'Sys Admin']
---

_I explained how to get an elevated Command Prompt to perform system tasks in the comments of my post about setting the [MTU in Windows 7](/archives/2009/10/23/change-your-mtu-under-vista-windows-7-or-windows-8/), I am writing the up a bit clearer and linking it from that post. I have a [blog post for Windows 8](/archives/2013/03/12/elevated-command-prompt-on-windows-8/) if you have already made the move._ In Vista and Windows 7 applications don't automatically get administrator privilege, they either need to request it or the user needs to explicitly start the application as an Administrator. The way to do this with the Command Prompt is as follows:

1.  Press the "Start" button.
2.  Type "Command".
3.  "Command Prompt" will be shown in the search results. [![](/uploads/2010/10/SearchStartForCommandPrompt-221x300.png "SearchStartForCommandPrompt")](/uploads/2010/10/SearchStartForCommandPrompt.png)
4.  Right Click "Command Prompt" and select "Run as Administrator" (it will have a blue and yellow shield beside it). [![](/uploads/2010/10/RunAsAdministrator.jpg "RunAsAdministrator")](/uploads/2010/10/RunAsAdministrator.jpg)
5.  When prompted click "Yes" to allow Command Prompt to start as Administrator.
6.  You will know it has worked because the title bar will start with "Administrator:" [![](/uploads/2010/10/AdministratorCommandPrompt.jpg "AdministratorCommandPrompt")](/uploads/2010/10/AdministratorCommandPrompt.jpg)