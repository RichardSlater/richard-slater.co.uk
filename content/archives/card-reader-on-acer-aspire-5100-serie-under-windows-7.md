---
title: 'Card Reader on Acer Aspire 5100 Series Under Windows 7'
date: Mon, 26 Oct 2009 20:24:56 +0000
draft: false
tags: ['Driver', 'Laptop', 'Sys Admin']
---

**Update (15/11/2010): the drivers listed in this post are out of date and may cause a BSOD, several alternatives are listed in the comments; however Microsoft appear to have approved 64-bit drivers on Windows Update.**

I am typing this on my Acer Aspire 5102WLMi which is one of the popular (if flawed) Acer Aspire 5100 series; I rescued this one from the Balconi Test by putting a bit of rubber (it was a cut down rubber foot) on top of the South Bridge chip set, that however is not the story I am telling today. I never bothered to install the Card Reader driver on this laptop while I was running the Windows 7 Beta, mainly because I am lazy, but also I didn't have a need for it so it never came up. With the release of Windows 7 I wanted to get the system perfect, seeing as hopefully it will last a good year in it's present state, and I wanted to be able to re-arrange the SD card from my Acer PDA. Windows 7 x64 was unable to identify a driver for this particular card reader, this left me with three unknown devices in Device Manager: ![Missing Drivers Acer 5100](/uploads/2009/10/MissingDriversAcer5100.png "Missing Drivers Acer 5100") The Acer website was a bust, as far as Acer are concerned this laptop won't even run Vista x64, so I had to dig deeper. From past experience of looking for drivers without using Windows Update I knew that I could probably identify the manufacturer from the Hardware and Device ID's available through Device Manager. If you want to follow along here are the steps:

1.  Open up Device Manager (Right Click "Computer", Choose "Manage", Select "Device Manager")
2.  Identify your unknown devices (They will look similar to the image above, although the text will differ)
3.  Right click one of them and select "Properties"
4.  Switch to the "Details" tab
5.  Change the property drop down box to read "Hardware Ids"

What that will give you is one or more strings looking something like this

```
PCI\VEN_1524&DEV_0530&SUBSYS_009F1025&REV_01
```

I have marked the two important parts in bold, the four digits after "VEN_" tell you the PCI Vendor number, the four digits after "DEV_" tells you device number these two numbers should uniquely identify the driver. There are several sites that allow you to lookup these numbers, I tend to use the publicly available PCI Vendor and Device Lists at [PCI Lookup](https://www.pcilookup.com/). Which has always given me good results with minimum fuss and adverts. Armed with the above I identified the manufacturer of the Card Reader was ENE Technologies, sometimes this is all you need to find the driver. You can Google/Bing the name and click the download or support links and get the latest drivers. This isn't always the way, as some OEMs don't offer drivers leaving that down to the system integrator to offer that service. So some time with Bing, I found some drivers for various ENE Devices, however the drivers were available from [VersionTracker](http://www.versiontracker.com/dyn/moreinfo/win/115639) seemed promising. After downloading and unzipping the contents of the file to a folder on my Desktop, I was able to point Device Manager at these files for each of the unknown devices I was left with three working devices and a fully operational Card Reader. ![ENECardReaderDriversAcer5100](/uploads/2009/10/ENECardReaderDriversAcer5100.png "ENECardReaderDriversAcer5100") Hope this helps some other people with similar laptops or Card Readers, post in the comments with your experiences, please include the manufacturer and model of the laptop/netbook you have succeeded with and hopefully you will help someone else with the same devices.