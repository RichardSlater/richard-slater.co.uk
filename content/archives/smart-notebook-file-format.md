---
title: 'SMART Notebook File Format'
date: Tue, 22 Jul 2008 12:48:09 +0000
draft: false
tags: ['Inkscape', 'Notebook', 'SMART', 'SVG', 'Sys Admin', 'Things You Find', 'XML']
---

The [SMART .notebook](http://www.smarttech.com/notebook) format is simply a zipped set of XML and SVG files, This may be common knowledge but it is certainly the first time I have come across it. To test it you can create a file in SMART Notebook rename the extension from .notebook to .zip, double click to open, you will be presented with several files named page_n_.svg where _n_ is a number, as well as a series of other files and folders including settings.xml, preview.png and metadata.xml. The XML and SVG files can be edited in notepad, or perhaps more useful for the SVG files in a program such as [Inkscape](http://www.inkscape.org/).