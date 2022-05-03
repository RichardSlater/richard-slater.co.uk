---
title: 'Find Files in CodeRush Xpress'
date: Mon, 12 Oct 2009 12:27:41 +0000
draft: false
tags: ['C#', 'CodeRush', 'CodeRush', 'DevExpress', 'Programming', 'Resharper', 'Visual Studio']
---

As I mentioned in my previous entry I have started using [DevExpress's CodeRush Xpress](http://www.devexpress.com/Products/Visual_Studio_Add-in/CodeRushX/Index.xml). It is a free cut down version of [CodeRush](http://www.devexpress.com/Products/Visual_Studio_Add-in/Coding_Assistance/) that I heard about in an episode of [.NET Rocks](http://www.dotnetrocks.com/). I have wanted add something to my Visual Studio development experience and I can't justify the cost of either Resharper or CodeRush at the moment. There has been quite a bit of discussion about [Resharper vs. CodeRush](http://www.hanselman.com/blog/ReSharperVsCodeRush.aspx) and in my experience most people I have spoken to love one and hate the other. I hope to be able to write a series of posts about some of the features found in CodeRush Xpress which I hope will clarify their purpose and use in my mind and maybe help someone find the function they are looking for. ![QuickFileNavigationAbou](/uploads/2009/10/QuickFileNavigationAbou.png "QuickFileNavigationAbou")First off "Quick File Navigation", this is a search function for locating a file by file name, I am finding it increasingly useful when looking through patches as it allows me to very quickly jump to a file name. Particularly as I am trying to move my projects to a one class per file so if I can remember the class name I can find the code file very quickly. The "Quick File Navigation" dialog is accessible through the keyboard short cut Ctrl+Alt+F. Typing will filter the list box by the name of the file matching anywhere in the filename including the extension. An additional feature for those who like me use CamelCase in their file names; if you enter your filter terms in capital letters it will search for capitalized words, in order within file names. Thus entering "AW" into the search box will also bring up the AboutWindow.cs in the above solution. Combining the above with the Ctrl-G keyboard shortcut in Visual Studio 2008 to go to a specific line we can do the following to go to `line 162` in `ShipLoadoutSelectWindow.cs`:

`Ctrl+Alt+F`  →  `S,L,S,W`  →  `Ctrl+G` →  `1,6,2`

DevExpress have a great [training video](http://tv.devexpress.com/CodeRushXpress06Navigation.movie) on their tv.devexpress.com sub site.

Ctrl+Alt+F → S,L,S,W → Ctrl+G → 1,6,2