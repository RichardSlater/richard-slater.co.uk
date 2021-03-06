---
title: 'Visual Studio 2005 Web Development under Vista'
date: Mon, 21 Jul 2008 13:27:08 +0000
draft: false
tags: ['hosts', 'localhost', 'Programming', 'Vista', 'Visual Studio']
---

I have had an issue today with Visual Studio 2005 and Vista today, specificly I have been unable to use the built in mini-web server that is used for debugging web projects. When you run a project from within the development environment it starts WebDev.WebServer.exe and then points an instance of Internet Explorer at `http://localhost:port/path/to/default.aspx`.

Now I remember this working well in the past, and indeed if I replace localhost with `127.0.0.1` it worked fine, I didn’t fancy having to type this every time I went to build and run a program. I could not find any way of configuring Visual Studio to point to the IP address rather than the host name.

Upon trying to ping localhost (fairly futile I understand but I was getting desperate) I noticed that packets were being returned over IPv6 (`::1:`) rather than IPv4 (`127.0.0.1`), my first port of call was to disable IPv6 on the NIC – which unsurprisingly didn’t work as anything to do with localhost shouldn’t use the NIC, and unlike Linux; Windows does not appear to expose the loopback adapter to the end user.

The soloution as it turns out was to remove the IPv6 record for localhost from `%WINDIR%\etc\drivers\hosts`. Editing this file requires an instance of notepad.exe to be running as a local administrator (i.e. press the windows key, type “cmd”, right click cmd.exe in the list and choose “Run as Administrator”. I realised had this before, in the time between then and now all trace of the problem occuring was wiped from my memory leaving only the soloution in my head. Never mind all working now!