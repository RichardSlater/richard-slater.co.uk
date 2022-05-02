---
title: 'Strange SPQuery Behaviour'
date: Fri, 13 Feb 2009 12:31:43 +0000
draft: false
tags: ['C#', 'CAML', 'Diary', 'Programming', 'Sharepoint', 'WebParts']
---

I have been working on a very simple web part for a long time, the actual code for the web part takes less than an hour to write and merely displays a colour coded letter based on a query from a SharePoint list taking the date as a parameter. It has taken a long time because of some strange behaviour with the [SPQuery](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spquery.aspx) object, initially there was a problem with every row in the table being returned irrespective of the query, the odd thing was that if you ran the query in [U2U CAML Query Builder](http://www.u2u.info/Blogs/Patrick/Lists/Posts/Post.aspx?ID=1315) it worked and the [SPListItemCollection.count](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splistitemcollection.count.aspx) method would return 1 suggesting the query was working. After adding a copious number of debugging command, I built up a pattern of what was happening and why. However no matter what I changed it either threw an exception as expected or returned all of the rows. I started commenting out lines of code one at a time trying to find the culprit, eventually moving on to commenting out the [Debug.WriteLine](http://msdn.microsoft.com/en-us/library/system.diagnostics.debug.writeline.aspx) statements, until I hit this line:```
Debug.WriteLine(fetchCurrentWeek.ViewXml);
```After commenting out this line the whole thing worked perfectly, I can put the date forward on the server and it will update I can change the source table and it reflects the changes after the cache has been cleared. I have looked over the Microsoft Documentation on [SPQuery.ViewXml](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spquery.viewxml.aspx) and can't find any reference to it actually affecting the functionality of the object. I have included my code at the end of this post for anyone to see, feel free to experiment with it. If you figure it out please do let me know.```
using (SPWeb site = SPControl.GetContextSite(Context).OpenWeb())
{
 SPList weekList = site.GetList(this.SourceList);
 // sharepoint requires that we use a ISO8601 DateTime string,
 // generate it and insert it into the query
 string mondayOfCurrentWeek = SPUtility.CreateISO8601DateTimeFromSystemDateTime(GetMondayOfCurrentWeek().Date);
 StringBuilder camlBuilder = new StringBuilder();
 camlBuilder.AppendLine  ("<Where>");
 camlBuilder.AppendLine  ("  <Eq>");
 camlBuilder.AppendLine  ("    <FieldRef Name='WeekCommencing'/>");
 camlBuilder.AppendFormat("    <Value Type='DateTime'>{0}</Value>\\r\\n", mondayOfCurrentWeek);
 camlBuilder.AppendLine  ("  </Eq>");
 camlBuilder.AppendLine  ("</Where>");

 string getWeekCAML = camlBuilder.ToString();
 SPQuery fetchCurrentWeek = new SPQuery(weekList.DefaultView);
 // fetch all of the matching weeks from the table
 fetchCurrentWeek.Query = getWeekCAML;
 SPListItemCollection matchingWeeks = weekList.GetItems(fetchCurrentWeek); // the results of the query should only ever equal 1 if it dosn't something is wrong
 if (matchingWeeks.Count == 1)
 {
  SPListItem week = (SPListItem)matchingWeeks\[0\];
  WeekType = week\["Week Type"\].ToString();
  WeekType = SPEncode.HtmlEncode(WeekType); // HtmlEncode the result to make sure it dosn't contain any nastys
  String WeekNumber = week\["Week Number"\].ToString();
  WeekNumber = SPEncode.HtmlEncode(WeekNumber);
  Debug.WriteLine(String.Format(CultureInfo.InvariantCulture, "\[WeekWidget\] Found record for {0} as Week {1} - Number {2}", mondayOfCurrentWeek, WeekType, WeekNumber));
  // cache the WeekType for 7 days from midnight on Monday as this is when the changeover between weeks happenswou
  Context.Cache.Insert(CACHE\_WEEKTYPE, WeekType, null, GetMondayOfCurrentWeek().AddDays(7), TimeSpan.Zero);
 } // end if matchingWeeks count equal to 1
 else
 {
  // more than one week matched, we can not determine the output correctly
  ErrorText.Text = "More than one week matched in the table, please check the table.";
  LogEvent("More than one week (" + matchingWeeks.Count.ToString() + ") matched in the table, please check the table.");
 } // end else
```Happy Hunting