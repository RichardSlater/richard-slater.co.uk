---
title: 'Using EVEMon Data with LINQPad'
date: Sat, 31 Jul 2010 21:52:17 +0000
draft: false
tags: ['.NET', 'C#', 'EVE Online', 'EVEMon', 'EVEMon', 'LINQPad', 'Programming', 'Programming', 'Visual Studio']
---

[LINQPad](http://www.linqpad.net) is an awesome aide to .NET Developers. Written by Joseph Albahari of [LinqBridge](http://www.albahari.com/nutshell/linqbridge.aspx) and the [C# In a Nutshell](http://www.albahari.com/nutshell) series fame. LINQPad allows the developer to write, compile and run C# or VB.NET Expressions, Statements of Programs outside of Visual Studio. Everything I am going to show you in this post can be done with Visual Studio simply by wrapping the text in a new console application, and adding references to the DLLs. However I strongly encourage you to download LINQPad and give it a go. In the event you are using 64-bit windows and are still using LINQPad 2 you will need to download the [x86 version](http://www.linqpad.net/Beta.aspx) of LINQPad 2, as all of the EVEMon assemblies are compiled for x86. If you have LINQPad 4 you don't need to worry about. Assuming you have [EVEMon](https://evemondevteam.github.io/evemon/) installed, the first step is to load the EVEMon.Common.dll assembly into LINQPad:

1.  Go ahead and fire up LINQPad ensure you have a new query window open
2.  Press F4 (Query -> Query Properties).
3.  Click the "Browse..." button at the bottom of the properties window.
4.  Navigate to the EVEMon install directory.
5.  Select "EVEMon.Common.dll"

[![](/uploads/2010/07/LINQPadQueryProperties.png "LINQPadQueryProperties")](/uploads/2010/07/LINQPadQueryProperties.png) While you have "Query Properties" open go to the "Additional Namespace Import" tab and add the following two lines:

```
EVEMon.Common.Data
EVEMon.Common
```

EVEMon.Common was designed to work as part of a long running process, namely the EVEMon application sitting in your system tray from when you turn your computer on until you turn it off, as such we need load the static data from the data files.

```
EveClient.Initialize();
```

Now we get to do some LINQ,

```
var allItems = from item in StaticItems.AllItems
	       where item.Family == ItemFamily.Ship
	       select new
	       {
	           item.Name,
	           item.Race,
	           CPU = item.Properties[DBConstants.CPUOutputPropertyID].Value.Value,
	           PG = item.Properties[DBConstants.PGOutputPropertyID].Value.Value,
	           item.Description
	       };
```

I could start to explain the above line by line, but there are lots of really good LINQ articles on the Internet, including one by [Joseph Albahari](http://www.linqpad.net/WhyLINQBeatsSQL.aspx). We will just say that the above pulls all of the ships out of EVEMon's Items data file and selects the Name, Race, CPU, PowerGrid and Description property for each one. Now we see my favorite aspect of LINQPad, the .Dump() extension method, simply running the following command:

```
allItems.Dump();
```

Will output the data we have just queried as a nice HTML Table: [![](/uploads/2010/07/LINQPadDumpShips.png "LINQPadDumpShips")](/uploads/2010/07/LINQPadDumpShips.png) That is all I have for you for now, I am working on a project that uses this data outside of EVEMon, keep an eye on [Twitter](https://twitter.com/richardslater) where I will hopefully be providing a link for testing in the not too far distant future.