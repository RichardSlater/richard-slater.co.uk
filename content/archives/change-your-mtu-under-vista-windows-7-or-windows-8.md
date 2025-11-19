---
title: 'Change your MTU under Vista, Windows 7 or Windows 8'
date: Fri, 23 Oct 2009 20:11:31 +0000
draft: false
tags: ['MTU', 'Netsh', 'Sys Admin', 'TCP/IP', 'Windows', 'Windows 7', 'Windows Vista']
---

_I have been updating this blog post over the years since I first discovered the issue with my computer in Windows Vista, now I am on Windows 8 and also on \[\[Wikipedia:Fiber\_to\_the\_x|FTTC broadband\]\]; \[\[Wikipedia:Path\_MTU\_discovery|Path MTU Discovery\]\] seems to just work. I have tested the process so the approach and the commands still work in Windows 8, I however no longer need to use this process personally._ For some reason that has escaped me \[\[Wikipedia:Path\_MTU\_discovery|Path MTU Discovery\]\] (PMTUD) in Windows just doesn't seem to figure out the MTU for a given path (something to do with routers being poorly configured to not respond to \[\[Wikipedia:Internet\_Control\_Message\_Protocol|ICMP\]\] requests). So Windows uses the default. For the most part this doesn't affect anyone, however if it does affect you, it really annoys you. Failure of PMTUD will result in some websites not loading correctly, having trouble connecting to normally reliable online services and general Internet weirdness. The resolution is to set your default MTU to one lower than the \[\[Wikipedia:Ethernet\]\] default of 1500. Here is how: **Step 1: Find your MTU** From an [elevated Command Prompt in Vista/Windows 7](/archives/2010/10/07/elevated-command-prompt-on-vista-and-windows-7/) or [the same elevated Command Prompt in Windows 8](/archives/2013/03/10/elevated-command-prompt-on-windows-8/) enter the following command:```
netsh interface ipv4 show subinterfaces
```You should get something like this```
MTU         MediaSenseState  Bytes In    Bytes Out  Interface
----------  ---------------  ---------   ---------  -------------
4294967295  1                0           13487914   Loopback Pseudo-Interface 1
1500        1                3734493902  282497358  Local Area Connection
```If you are using Ethernet cable you will be looking for "Local Area Connection" or "Ethernet". If you are using Wireless you will be looking for "Wireless Network Connection". The MTU is in the first column. **Step 2: Find out what it should be** In the Command Prompt type:```
ping www.cantreachthissite.com -f -l 1472
```The host name should be a site you **can not** reach, -f marks the packet as one that should not be fragmented the -l 1472 sets the size of the packet (1472 = Ethernet Default MTU - Packet Header, where the Ethernet Default MTU is 1500 and the Packet Header is 28 bytes) If the packet can't be sent because it would need to be fragmented you will get something similar to this:```
Packet needs to be fragmented but DF set.
```Keep trying lower packet sizes by 10 (i.e. -l 1460, 1450, 1440, etc.) until you get a successful ping request. Raise your packet sizes by one until you get a "Packet needs to be fragmented but DF set.". The last successful value plus 28 will be your MTU value. In my case a packet size of 1430 succeeds but 1431 fails, so 1430 + 28 = 1458. **Step 3: Set your MTU** Now you have identified the interface you need to change and the ideal MTU for you, now it is time to make the change. Again from an elevated Command Prompt type the following replacing my MTU of 1458 with your own value:```
netsh interface ipv4 set subinterface "Local Area Connection" mtu=1458 store=persistent
```Or if you are using a Wireless connection:```
netsh interface ipv4 set subinterface "Wireless Network Connection" mtu=1458 store=persistent
```If all has gone well you should have a perfectly working internet connection.