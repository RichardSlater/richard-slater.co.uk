---
title: 'Changing code accessibility modifiers quickly'
date: Tue, 12 Oct 2010 20:20:48 +0000
draft: false
tags: ['dotnet', 'C#', 'CodeRush', 'CodeRush', 'Programming', 'Programming']
---

I have two hints today both of them involving changing accessibility modifiers. The first is a feature of CodeRush that I accidentally discovered while testing out the [Visual Studio 2010 Productivity Power Tools](http://visualstudiogallery.msdn.microsoft.com/en-us/d0d33361-18e2-46c0-8ff2-4adea1e34fef?SRC=VSIDE) the second is a great new feature of Visual Studio 2010. For those who don't know what I mean by [accessibility modifiers](http://msdn.microsoft.com/en-us/library/ms173121(v=VS.100).aspx), those are the keywords you put before blocks of code that define how that code can be accessed, this is all enforced by the compiler giving you nice compiler error messages if you violate these rules. To provide an example the following auto-properties are all have the accessibility modifier "public":

```
[Column] public string Name { get; set; }
[Column] public string Description { get; set; }
[Column] public decimal Price { get; set; }
[Column] public string Category { get; set; }
```

CodeRush gives you a handy way to change the User interface by clicking the icon to the left of the code block, you then get a set of actions you can perform upon the that block of code. [![Code Rush Code Context Menu](/uploads/2010/10/CodeRushCodeContextMenu.png "Code Rush Code Context Menu")](/uploads/2010/10/CodeRushCodeContextMenu.png) As with most everything in CodeRush you can access this functionality from the keyboard anywhere within the scope of that code block by pressing Alt + Up or Alt + Down to cycle through the five possibilities:

*   public
*   internal
*   protected internal
*   protected
*   private

This means that if you need to change access modifiers, either to tighten up or relax the access points into your code you can do it by pressing a hand full of keys (between two and six to be exact), much faster than navigating to the top of the method highlighting and replacing the keyword. My second hint is something that I have been using quite regularly, lets take the above example again:

```
[Column] public string Name { get; set; }
[Column] public string Description { get; set; }
[Column] public decimal Price { get; set; }
[Column] public string Category { get; set; }
```

I want to change all four fields to "be internal", I could go in and change each one manually or better still use the above keyboard shortcuts (Alt + Down, Down, Alt + Down, etc.) the faster alternative would be to hold down the Alt key then select from the first character of the first "public" to the last character of the last "public" keyword. While holding down Alt traditional selection behaviour is not followed and only the "public" keywords are selected on all four lines: [![VS2010 Line Select](/uploads/2010/10/VS2010LineSelect.jpg "VS2010 Line Select")](/uploads/2010/10/VS2010LineSelect.jpg) You can then type your new visibility modifier overwriting the selected components of all four lines in one fell swoop:

```
[Column] internal string Name { get; set; }
[Column] internal string Description { get; set; }
[Column] internal decimal Price { get; set; }
[Column] internal string Category { get; set; }
```

I think that is neat!