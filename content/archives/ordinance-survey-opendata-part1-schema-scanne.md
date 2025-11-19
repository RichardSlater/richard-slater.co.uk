---
title: 'Ordinance Survey OpenData (Part 1 - Schema Scanner)'
date: Fri, 03 Dec 2010 15:49:32 +0000
draft: false
tags: ['Data', 'OpenData', 'Ordinance Survey', 'OS', 'Programming', 'SQL', 'SQL Server', 'Sys Admin']
---

In April 2010 the Ordinance Survey released certain parts of their data under special licence which allows for commercial use without cost. All the types of data made available are outside the scope of this post although I hope that the techniques described could be applied to any data set not limited to Ordinance Survey data. In this post I am going to look at [Code-Point Open](http://www.ordnancesurvey.co.uk/oswebsite/products/code-point-open/), a list of all UK postcodes with their corresponding spatial positions. 

Unlike many other OS OpenData downloads the ZIP file does not contain the User Guide or the Schema Data, this can be found on the website, I spent a good 10 minutes searching for this data. The term for what we are doing in this post is Extract-Transform -Load (ETL), a process in which we take data in one format and covert it for use in another format. Generally ETL is used to take a flat file format and load it for use in a relational database, although technically any format or database could be used. SQL Server offers two built-in mechanisms to perform ETL; the "Import Export Wizard" and SQL Server Integration Services (SSIS). The "Import Export Wizard" actually creates a SSIS package in the background and is available to all versions of SQL Server, SSIS  is not available in SQL Express.

Before we create a table in a SQL Server Database we need to know something about the data we are importing, the documentation for Code-Point Open tells us the data contains the following fields:
 - **Postcode**,
 - **Quality**,
 - Unused1,
 - Unused2,
 - Unused3,
 - Unused4,
 - Unused5,
 - Unused6,
 - Unused7,
 - Unused8,
 - **Eastings**,
 - **Northings**,
 - **CountryCode**,
 - **RegionalHealthAuthority**,
 - **HealthAuthority**,
 - **AdminCounty**,
 - **AdminDistrict**,
 - **AdminWard**,
 - Unused10 
 
 A number of the fields are not used, the fields and the dummy data held within them will be weeded out at a later date, we know the fields but we don't know the format of the data it contains, it could be numeric, strings, decimals, telephone numbers? I created a PowerShell script which scans through all of these files to work out what type of field it is and the range of data held within it, be warned it will take a few hours to run!

```
# Schema Scanner v1.0
# ©2010 Richard Slater

# Create an empty hash table
$columns = @{}

# Loop through every file that matches this pattern
foreach ($file in Get-ChildItem -Path "D:\\OSOpenData\\Code-Point Open\\data\\ze.csv")
{
	Write-Host "Processing $file"

	# PowerShell Import-Csv cmdlet is pretty powerful, but if there is no header row you must feed it in
	$PostCodeData = Import-Csv $file -Header "Postcode","Quality","Unused1","Unused2","Unused3","Unused4","Unused5","Unused6","Unused7","Unused8","Eastings","Northings","CountryCode","RegionalHealthAuthority","HealthAuthority","AdminCounty","AdminDistrict","AdminWard","Unused10"

	# Go through each row in the file
	foreach($row in $PostCodeData)
    {
		# Go through each column in the row
		foreach ($attr in (Get-Member -InputObject $PostCodeData\[0\] -MemberType NoteProperty))
		{
			$key = $attr.Name

			# Ignore unused columns
			if ($key.StartsWith("Unused"))
				{ continue }

			# Construct an object to store the meta data, store it in the hash table to retreive next loop
			$column = New-Object PSObject
			if (!$columns.ContainsKey($key))
			{
				$column | Add-Member -Type NoteProperty -Name StringLength -Value 0
				$column | Add-Member -Type NoteProperty -Name MaxValue -Value (\[System.Int32\]::MinValue)
				$column | Add-Member -Type NoteProperty -Name MinValue -Value (\[System.Int32\]::MaxValue)
				$columns.Add($key, $column)
			}
			else
				{ $column = $columns.Get\_Item($key) }

			$isInt = $false
			$value = 0;

			# Work out if this is an integer type
			if (\[System.Int32\]::TryParse($row.($key), \[ref\] $value))
            	{ $isInt = $true }

			if (!$isInt)
            {
				# it is not an integer how many characters is the string
            	if (($row.($key)).Length -gt $column.StringLength)
                	{ $column.StringLength = ($row.($key)).Length }

				continue
            }

			# it is an integer start working out the maximum and minimum values
			if ( $value -gt $column.MaxValue ) { $column.MaxValue = $value }
			if ( $value -lt $column.MinValue ) { $column.MinValue = $value }

			$columns.Set\_Item($key, $column)
		}
	}
}

# Print a report of all of the fields
foreach ($field in $columns.Keys)
{
	$stringLength = $columns\[$field\].StringLength
	$numericMax = $columns\[$field\].MaxValue
	$numericMin = $columns\[$field\].MinValue

	if ($stringLength -gt 0)
	{
		Write-Host "$field (String) : Length =" $columns\[$field\].StringLength
	}
	elseif (($numericMax -gt (\[System.Int32\]::MinValue)) -and ($numericMin -lt (\[System.Int32\]::MaxValue)))
	{
		Write-Host "$field (Numeric) : MaxValue =" $numericMax ", MinValue =" $numericMin
	}
	else
	{
		Write-Host "$field (Empty)"
	}
}
```

The output from the script should give you enough information to construct a nice tight schema to import the data:

```
AdminWard (String) : Length = 2
AdminDistrict (String) : Length = 2
AdminCounty (Numeric) : MinValue = 0 , MaxValue = 47
Quality (Numeric) :  MinValue = 10 , MaxValue = 90
RegionalHealthAuthority (String) : Length = 3
Postcode (String) : Length = 7
Eastings (Numeric) : MinValue = 0 , MaxValue = 655448
Northings (Numeric) : MinValue = 0 , MaxValue = 1213660
CountryCode (Numeric) : = 64 ,  MaxValue   = 220
HealthAuthority (String) : Length = 3
```

In a future post I am going to take it to the next stage; create a table and complete the import with the Import Export Wizard. I would also like to improve the performance of the schema scanner by converting the code into C#.

[SchemaScanner](/img/archive/2010/12/SchemaScanner.zip)