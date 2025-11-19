---
title: 'Debugging "Just My Code"'
date: Sat, 05 Dec 2009 15:59:19 +0000
draft: false
tags: ['EVE Online', 'EVEMon', 'Programming']
---

Within [EVEMon](https://web.archive.org/web/20140702024802/http://evemon.battleclinic.com/) we have started making heavy use of [LINQBridge](http://www.albahari.com/nutshell/linqbridge.aspx) which uses Visual Studio 2008's [Multi-Targeting capabilities](http://weblogs.asp.net/scottgu/archive/2007/06/20/vs-2008-multi-targeting-support.aspx) to allow a .NET 2.0 applications to use the compiler functionality of C# 3.0.

This reduces our need to push EVEMon towards .NET 3.5, and simplifies our dependency stack for the end user (.NET 2.0 is pre-installed on Vista and above, .NET 3.5 is pre-installed in Windows 7 and above). One of the annoyances I have run into is every time there is a problem with a LINQ statement the debugger will stop in the LINQBridge project rather than EVEMon's code; this usually tells you nothing useful forcing you to dig into the exception to find the stack trace to find out which line caused the exception.

I found a natty attribute in [DebuggerNonUserCode](http://msdn.microsoft.com/en-us/library/system.diagnostics.debuggernonusercodeattribute.aspx) that allows you to tell the debugger to treat a class as Non-User Code:

```
[System.Diagnostics.DebuggerNonUserCode]

```

So far, I have not found a disadvantage in doing this. I am being conservative with my use in case I find some glaring problem, however LINQBridge has proven a stable project, and quite frankly I would much rather be looking at my own broken code when something goes wrong, rather than LINQBridges working code.