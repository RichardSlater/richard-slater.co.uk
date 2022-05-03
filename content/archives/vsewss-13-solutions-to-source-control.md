---
title: 'Adding VSeWSS 1.3 Solutions to Source Control'
slug: vsewss-13-solutions-to-source-control
date: Thu, 05 Feb 2009 10:35:12 +0000
draft: false
tags: ['Programming', 'Sharepoint', 'Sys Admin', 'Visual Studio']
---

Having done a little experimenting with Visual Studio Extensions for WSS (VSeWSS), I wanted to start actually developing features for our intranet site. I try and add everything that is even slightly important into source control (Subversion). VSeWSS creates normal looking solutions, however when you deploy your project to a SharePoint site it created an additional directory alongside "bin" and "obj" called "pkg". 

This "pkg" folder contains the manifest.xml, soloution.xml and feature.xml files that are used to create the feature to be deployed into SharePoint. Initially I was including this folder in my commits however, I noticed that any tweaks made to feature.xml were overwritten when you deployed the package again. After some searching around I came across an article that suggests [deleting the "pkg" folder under certain circumstances](https://web.archive.org/web/20110203143445/http://msmvps.com/blogs/brianmadsen/archive/2008/07/10/error-on-subsequent-deployment-of-web-part-for-vs2008-and-vsewss-1-2.aspx). From this I assume that the contents of the "pkg" folder is generated each and every time you package and deploy your solution (or indeed project), thus it does not need to be added to source control.

While writing this post I did come across another blog that [suggests adding the "pkg" folder to source control](http://oidatsmyleg.wordpress.com/2008/05/20/adding-required-files-vsewss-projects/). There does appear to be little advice out there regarding VSeWSS and Source Control. I would be interested to hear others experiences on the subject.