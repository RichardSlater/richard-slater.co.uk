---
title: 'ASP.net 3.5 GridView RowCommand event fired twice'
date: Thu, 01 Apr 2010 15:25:27 +0000
draft: false
tags: ['.NET', 'ASP.net', 'C#', 'Programming', 'Programming', 'Sys Admin']
---

I am writing this up to hopefully save someone else time in the future, this particular problem took up six hours of my day yesterday causing quite a bit of frustration for me, as the developer, and the users of the application. If you are searching for the solution scroll down to the bottom of the page where I will outline the solution I used to resolve the problem. It is also worth pointing out that this does appear to be fixed in .NET 4. Certainly I was able to consistently reproduce the problem with VS2008/.NET 3.5 on multiple different computers. However after converting the project to VS2010/.NET 5 I haven't seen the issue.

Explanation of the problem
==========================

I wrote and maintain an application that publishes a list of courses and allows users to book onto these courses, what I have listed below is a simplified version of this application. The administration console contains two lists:

*   **Published Courses** - courses visible to all employees.
*   **Unpublished Courses** \- courses waiting to be published, only visible from the administration console.

Courses can be freely published (i.e. moved from Unpublished to Published) by clicking green tick. Courses that have not had any bookings made can be unpublished by clicking the red cross. The cross and the tick are implemented as [GridView](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.gridview.aspx) [ButtonFields](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.buttonfield.aspx):

```
`<asp:ButtonField ButtonType="Image" CommandName="UnpublishCourse" 
` `ImageUrl="~/images/unpublish.png" InsertVisible="False" Text="Unpublish" />` 
```[![](/uploads/2010/04/CourseBookings1-300x114.png "CourseBookings")](/uploads/2010/04/CourseBookings1.png) This application has been running for six months, the issue had not been observed up until yesterday. The user explained to me that when they were publishing courses they were always published in pairs, equally when unpublishing courses it was being done in pairs, concealingly unpublishing a course with bookings.

Investigating the problem
=========================

Initially I tried to reproduce this on my local machine, backed up and subsequently restored the database locally made sure I was running the same revision as the server and fired it up. Couldn't reproduce the problem, no matter how fast I clicked it wouldn't happen. Tried various permutations of code and database but could only reproduce on the server. Refreshed the binaries on the server with the HEAD from subversion, problem was still happening most of the time. I confirmed that it wasn't an issue with the stored procedures by running them manually through LinqPad. I started putting debug statements at the entry points to the critical parts of the code, this yielded an interesting output on my development machine, each time the cross or the tick was clicked UnpublishedGridView\_RowCommand was fired twice. This gave me something to search for, seems I am not the only one to have this problem, [Microsoft tried to reproduce it in 2006](https://connect.microsoft.com/VisualStudio/feedback/details/102115/gridview-rowcommand-event-firing-twice) but couldn't.

Solving the problem
===================

As it turns out there are several ways of fixing the problem, several people have used timers to ["debounce"](http://www.labbookpages.co.uk/electronics/debounce.html) the RowCommand event, assuming that the event is always going to be fired twice a session variable can be used to filter out the second event. Because the event is only fired twice when ButtonType="Image" not when ButtonType="Link" you can set the text property to the HTML to render your image. This resulted in the code above becomming:

```
`<asp:ButtonField ButtonType="Link" CommandName="UnpublishCourse" 
` `InsertVisible="False" Text="<img src=images/unpublish.png />" />` 
```This proved to be the simplest possible solution, Visual Studio 2008 throws a warning about ASP.net validation, but I can live with that as long as the application works. In addition to the simplicity of the solution it also continues to work in ASP.net 4 (which doesn't exhibit the double event behaviour).