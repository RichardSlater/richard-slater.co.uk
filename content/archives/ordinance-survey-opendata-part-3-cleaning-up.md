---
title: 'Ordinance Survey OpenData (Part 3 - Cleaning Up)'
date: Fri, 17 Dec 2010 15:55:38 +0000
draft: false
tags: ['OpenData', 'Ordinance Survey', 'OS', 'Programming', 'SQL', 'SQL Server', 'Sys Admin']
---

If you look through the schema of the table we imported in [Part 2](/archives/2010/12/10/ordinance-survey-opendata-part-2-importing-the-data/) there are a number of unused fields and some of the data appears to be missing.

Cleaning up the Schema
----------------------

1.  You can go right ahead and remove the fields that start with "Unused" as far as I can tell the full version of Code-Point uses these fields.
2.  Remove the nullable attributes from all of the fields, this will prevent us from doing something silly at a later date, and will avoid Object Relational Mappers such as Entity Framework from creating nullable data types.
3.  Many of the fields contain codes not data itself but codes that describe other data, so lets prepend code on the end of those fields for the time being.

Cleaning up the Data
--------------------

The quality column in Code-Point Open describes the source and reliability of the data, it ranges from the most accurate 10 through to no data 90, when building a system around this data you need to decide at what data is important to your use case. The following query will give you an idea of the quality of the dataset as a whole, I have annotated it based upon the [OS Code-Point documentation](http://www.ordnancesurvey.co.uk/oswebsite/products/code-point-open/).

```
SELECT Quality, COUNT(*) As Count
FROM [OSOpenData].[dbo].[CodePointOpenCombined]
GROUP BY Quality
ORDER BY Quality
```

| Quality | Count | Description |
| ------- | ----- | ----------- |
| 10 | 1683975 | Within the building of the matched address closest to the postcode mean determined automatically by Ordnance Survey. |
| 20 | 73 | As above, but determined to visual inspection by GROS (General Register Office for Scotland). |
| 30 | 1086 | Approximate to within 50 m of true position. |
| 40 | 52 | The mean of the positions of addresses previously matched in ADDRESS-POINT but which have subsequently been deleted or recoded. |
| 50 | 4395 | Estimated position based on surrounding postcode coordinates, usually to 100 m resolution, but 10 min Scotland. |
| 60 | 93 | Postcode sector mean (direct copy from ADDRESS-POINT). |
| 90 | 6361 | No coordinates available. |


For my purposes I want to use the coordinate data stored in the Eastings and Northings columns, which makes postcodes with no data useless to me, I can remove these with the following SQL script:

```
DELETE FROM [CodePointOpenCombined]
WHERE [Quality] = 90
```