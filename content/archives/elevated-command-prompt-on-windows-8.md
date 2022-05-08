---
title: 'Elevated Command Prompt on Windows 8'
date: Tue, 12 Mar 2013 11:00:27 +0000
draft: false
tags: ['Command Prompt', 'Elevated', 'Sys Admin', 'UAC', 'Windows 8']
---

Two and a half years ago I posted about openening an [elevated command prompt on Windows Vista and Windows 7](/archives/2010/10/07/elevated-command-prompt-on-vista-and-windows-7/). The process has changed slightly in Windows 8 as we have lost the traditional start menu. In Windows 8, applications don’t automatically get administrator privileges, they either need to request it or the user needs to explicitly start the application as an Administrator. The way to do this with the Command Prompt is as follows:

1.  Press the “Start” button.
2.  Type “Command”.
3.  The list of all applications will be filtered by the search term:  
    [![elevated-command-prompt-on-windows-8-type-command](/img/archive/2013/03/elevated-command-prompt-on-windows-8-type-command.png)](/img/archive/2013/03/elevated-command-prompt-on-windows-8-type-command.png)
[![elevated-command-prompt-on-windows-8-select-command-prompt](/img/archive/2013/03/elevated-command-prompt-on-windows-8-select-command-prompt.png)](/img/archive/2013/03/elevated-command-prompt-on-windows-8-select-command-prompt.png)5.  Right click or press the menu key on the keyboard:  
    [![elevated-command-prompt-on-windows-8-right-click-command-prompt](/img/archive/2013/03/elevated-command-prompt-on-windows-8-right-click-command-prompt.png)](/img/archive/2013/03/elevated-command-prompt-on-windows-8-right-click-command-prompt.png)
6.  Select "Run as Administrator" from the bottom of the screen:  
    [![elevated-command-prompt-on-windows-8-click-run-as-administrator](/img/archive/2013/03/elevated-command-prompt-on-windows-8-click-run-as-administrator.png)](/img/archive/2013/03/elevated-command-prompt-on-windows-8-click-run-as-administrator.png)
7.  Click "yes" when prompted to confirm:  
    [![elevated-command-prompt-on-windows-8-uac](/img/archive/2013/03/elevated-command-prompt-on-windows-8-uac.png)](/img/archive/2013/03/elevated-command-prompt-on-windows-8-uac.png)

The Command Prompt running as an administrator will appear in much the same way as Windows 7 or Vista: [![elevated-command-prompt-on-windows-8-command-prompt](/img/archive/2013/03/elevated-command-prompt-on-windows-8-command-prompt.png)](/img/archive/2013/03/elevated-command-prompt-on-windows-8-command-prompt.png)