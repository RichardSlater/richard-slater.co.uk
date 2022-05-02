---
title: 'LINQPad Crash'
date: Tue, 02 Mar 2010 21:48:18 +0000
draft: false
tags: ['C#', 'Crash', 'Exception', 'LINQ', 'LINQPad', 'Programming', 'Programming']
---

**Update: I never did "fix" this problem, installing .NET 4 then using LINQPad 4 seems to work well.** I found myself using [LINQPad](http://www.linqpad.net/) more often than creating console applications, so much so I dicided to make the small but worth while investment in the optional "Autocompletion" (Intelisense-like) component. The licence is great because I can have it installed on all three of my PCs without having to buy extra licences. I was figuring out the limits of the Math.Pow function a few days ago on the laptop when the LINQPad upgrade message appeared, not sure what happened next because LINQPad crashed with the following exception. **System Specification:**

*   Windows 7 Home Premium x64
*   .NET v2.0.50727 (+3.0 & 3.5)
*   .NET v4.0.20506
*   VisualStudio 2010 Beta1

```
System.AccessViolationException: Attempted to read or write protected memory. This is often an indication that other memory is corrupt.

   at System.Windows.Forms.UnsafeNativeMethods.DispatchMessageW(MSG& msg)
   at System.Windows.Forms.Application.ComponentManager.System.Windows.Forms.UnsafeNativeMethods.IMsoComponentManager.FPushMessageLoop(Int32 dwComponentID, Int32 reason, Int32 pvLoopData)
   at System.Windows.Forms.Application.ThreadContext.RunMessageLoopInner(Int32 reason, ApplicationContext context)
   at System.Windows.Forms.Application.ThreadContext.RunMessageLoop(Int32 reason, ApplicationContext context)
   at System.Windows.Forms.Form.ShowDialog(IWin32Window owner)
   at LINQPad.Program.ProcessException(Exception ex)
   at LINQPad.Program.Start(String\[\] args)
   at LINQPad.ProgramStarter.Run(String\[\] args)
   at LINQPad.Loader.Main(String\[\] args)
```If anyone has any theories as to how this can be fixed I would be very apprecitive if you could post in the comments. So far I have tried:

*   Reinstalling from the latest (2.10.1)  from the LINQPad website.
*   Restarted the computer.
*   Removing LINQPad through Add/Remove Programs.
*   Remove LINQPAD manually.
*   Rename %APPDATA%\\LINQPad.
*   Looked for Native Images in C:\\Windows\\assembly - None there

It seems to me that LINQPad throws some exception, which it's built in exception handler tries to handle then fails, this probably means that the above stack trace is probably not indicative of what is causing the problem. Not that I think it will make a difference but I am going to try upgrading to Visual Studio 2010 RC tomorrow then at least I wll be able to use LINQPad for .NET 4.