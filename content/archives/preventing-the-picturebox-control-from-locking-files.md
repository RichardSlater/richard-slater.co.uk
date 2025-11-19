---
title: 'Preventing the PictureBox control from locking files'
date: Sun, 28 Feb 2010 20:18:58 +0000
draft: false
tags: ['.NET', 'C#', 'EVEMon', 'EVEMon', 'Programming', 'Programming']
---

One of our more regular contributors to [EVEMon](http://evemon.battleclinic.com/) posted on our forums showing that the application was incapable of updating cached files (specifically images), after a bit testing I discovered the following Exception was being thrown when trying to overwrite the file in question:```
System.IO.IOException: The process cannot access the file 'path\\filename' because it is being used by another process.
   at System.IO.\_\_Error.WinIOError(Int32 errorCode, String maybeFullPath)
   at System.IO.File.InternalCopy(String sourceFileName, String destFileName, Boolean overwrite)
   at System.IO.File.Copy(String sourceFileName, String destFileName, Boolean overwrite)
   at EVEMon.Common.FileHelper.OverwriteOrWarnTheUser(String srcFileName, String destFileName) in EVEMon.Common\\FileHelper.cs:line 108
   at EVEMon.Common.FileHelper.OverwriteOrWarnTheUser(String destFileName, Func\`2 writeContentFunc) in EVEMon.Common\\FileHelper.cs:line 82
   at EVEMon.Common.Controls.CharacterPortrait.SavePortraitToCache(Image newImage) in EVEMon.Common\\Controls\\CharacterPortrait.cs:line 248
```After a bit of searching around I discovered a [post on StackOverflow](http://stackoverflow.com/questions/2188464/net-app-locks-file) identifying that System.Drawing.Bitmap(string filename) would lock the filename until the Bitmap was disposed of. The post presented a solution but no code, A bit of further searching confirmed my expectation that [Image.FromFile(string filename)](http://msdn.microsoft.com/en-us/library/4sahykhd.aspx) was subject to the same locking behaviour:

> The file remains locked until the [Image](http://msdn.microsoft.com/en-us/library/system.drawing.image.aspx) is disposed.

A bit more searching identified another [post on StackOverflow](http://stackoverflow.com/questions/542217/load-a-bitmapsource-and-save-using-the-same-name-in-wpf-ioexception) which gave me the basic syntax and structure for the code I was going to need to implement this in EVEMon. The final code looks like this:```
MemoryStream stream = new MemoryStream();

byte\[\] imageBytes = File.ReadAllBytes(cacheFileName);
stream.Write(imageBytes, 0, imageBytes.Length);
stream.Position = 0;

var image = Image.FromStream(stream);
return image;
```It appears that GDI+ will lock any image that is loaded into a control in WinForms and WPF, several comments on StackOverflow and byte.com suggested that even disposing of the control and the FileStream was not a reliable way of being able to write to the file so the above method is seems to be be the best solution all round.