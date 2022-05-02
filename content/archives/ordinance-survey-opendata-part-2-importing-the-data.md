---
title: 'Ordinance Survey OpenData (Part 2 - Importing The Data)'
date: Fri, 10 Dec 2010 14:26:53 +0000
draft: false
tags: ['OpenData', 'Ordinance Survey', 'OS', 'Programming', 'SQL', 'SQL Server', 'Sys Admin']
---

All of the data is in different files; SSIS is capable of extracting data from multiple files however for the purposes of this article I am going to stick to the Import Export Wizard. To combine all of the files into one (big) file a quick switch to the command prompt is required:

```
type data\*.csv > .\CodePointOpenCombined.csv
```

Because none of the data files have headers this works fine, if they did have headers some work would be needed to strip those out. Create a new database in SQL Server then follow these steps:

1.  Right Click the Database select "Tasks" - "Import Data".
2.  In the Data Source step change the drop down to "Flat File Source".
3.  Select the combined file we created above (you may have to change the filter).
4.  Check the Columns page if Quotation Marks (") appear in some of the columns change the Text qualifier field on the General Page to a ".
5.  On the Advanced page click Suggest Types.
6.  Set the number of rows to 1000 (the maximum), then click OK.
7.  Go through each column and update the name and DataType to match those we discovered in the [previous post](/archives/2010/12/03/ordinance-survey-opendata-part-1-schema-scanner/).
8.  Check the correct database and table are selected on the next two steps.
9.  Click Next then Next again, then check over the data type mappings.
10.  Click Next then ensure Run immediately is checked then click finish.
11.  All being well, all of the data will be imported successfully.

If there are problems importing the data you can go back and make changes to the configuration, typically the issue is incorrect data types (too small) or incorrect text delimiters. You may be asking why we went to tall that trouble, and time, only to let the Import Data Wizard suggest the data types. The reason I wrote the script was the wizard is limited to checking the first 1,000 lines; even if you set the value to 2,000,000 it will default down to 1000 after you move your focus away. The result being if your data is naturally sorted on a specific column as some of the Ordinance Survey data appears to be the import will fail. Running the schema scanner allows you to scan through all of the data so that you can modify the suggested data types to match the maximum values.