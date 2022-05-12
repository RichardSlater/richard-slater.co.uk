---
title: "Integral Crypto FIPS 197: “failed to initialize secure device”"
author: "Richard Slater"
date: 2021-03-31T19:23:55.373Z
lastmod: 2022-05-09T21:21:04+01:00
description: ""
subtitle: "I had an unusual experience when using an Integral Crypto FIPS 197 device on a new laptop. This particular device uses TotalLock.exe on a…"
image: "images/4.png" 
images:
 - "images/1.png"
 - "images/2.png"
 - "images/3.png"
 - "images/4.png"
aliases:
    - "/integral-crypto-fips-197-failed-to-initialize-secure-device-ccedced05b9e"
---

I had an unusual experience when using an Integral Crypto FIPS 197 device on a new laptop. This particular device uses `TotalLock.exe` on a read-only CDFS partition to enter the decryption key (password) to mount a hidden partition.

When I went to access the device, i.e. run `TotalLock.exe` from the D: drive, the message:
> Failed to initialize secure device

After investing the system event logs with minimal information, and checking the executable wasn’t blocked from explorer, I considered how Windows Defender might be affecting the device.

As it turns out there is Ransomware protection built into Windows Defender, which you could access by **pressing Start** the typing “**Virus**” to open “Virus and Threat Protection”:

![image](images/1.png)
Virus and Threat Protection from the Start Menu

From there scroll down and select **Ransomware protection**:

![image](images/2.png)
Scroll down to find Ransomware Protection

Click on Block history, then select the most recent blocked action:

![image](images/3.png)

You will be asked to allow the app to make changes to the device, via User Account Control. However once approved you will likely see that `TOTALLOCK.EXE` was blocked:

![image](images/4.png)

From there you are able to allow access to the “protected folder” by that executable.

Alternatively you can select “Allow an app through controlled folder access” in the preceding screen which then select `TotalLock.exe` from the `D:` drive approve access.
