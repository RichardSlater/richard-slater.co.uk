---
title: 'Listing Table Sizes'
date: Fri, 24 Dec 2010 10:20:09 +0000
draft: false
tags: ['Programming', 'SQL', 'SQL Server', 'Sys Admin']
---

Databases are a pain in the neck to look after, poorly designed models and processes that don't remove temporary data can cause a database to grow in size. A database that is allowed to grow large beyond its requirements becomes a burden on the nightly backup, takes longer to restore in the event of a recovery scenario and slows down the development process by preventing developers from testing things out on "live" data. More often than not I have found that the problem lies with log or analytic tables sometimes this information is liberally logged (which it should be) and then totally ignored without a thought for trimming the data on a regular basis. SQL Server Management Studio provides a way of looking at the storage usage of tables individually from the properties context menu item of the table.

[![SSMS Storage Properties](/uploads/2010/11/SSMSStorageProperties.png "SSMS Storage Properties")](/uploads/2010/11/SSMSStorageProperties.png)

In large databases this can be laborious, I found [a script](http://www.cryer.co.uk/brian/sqlserver/howto_list_table_sizes.htm) that will collect this information and present it as a table. I have adapted it a little so that I can see the total size of the table and sort by each column to drill down to the problem tables.

```
SET NOCOUNT ON
CREATE TABLE #spaceused (
  name nvarchar(120),
  rows char(11),
  reserved varchar(18),
  data varchar(18),
  index\_size varchar(18),
  unused varchar(18)
)

DECLARE TablesFromSysObjects CURSOR FOR
  SELECT name
  FROM sysobjects WHERE type='U'
  ORDER BY name ASC

OPEN TablesFromSysObjects
DECLARE @table varchar(128)

FETCH NEXT FROM TablesFromSysObjects INTO @table

WHILE @@FETCH\_STATUS = 0
BEGIN
  INSERT INTO #spaceused EXEC sp\_spaceused @table
  FETCH NEXT FROM TablesFromSysObjects INTO @table
END

CLOSE TablesFromSysObjects
DEALLOCATE TablesFromSysObjects 

SELECT	name as TableName,
		rows as Rows,
		CAST(LEFT(reserved, LEN(reserved) - 3) as int) as Reserved,
		CAST(LEFT(data, LEN(data) - 3) as int) as Data,
		CAST(LEFT(index\_size, LEN(index\_size) - 3) as int) as IndexSize,
		CAST(LEFT(unused, LEN(unused) - 3) as int) as Unused,
		(CAST(LEFT(reserved, LEN(reserved) - 3) as int) + CAST(LEFT(data, LEN(data) - 3) as int) + CAST(LEFT(index\_size, LEN(index\_size) - 3) as int) + CAST(LEFT(unused, LEN(unused) - 3) as int)) AS Total
FROM #spaceused
ORDER BY Total DESC
DROP TABLE #spaceused
```