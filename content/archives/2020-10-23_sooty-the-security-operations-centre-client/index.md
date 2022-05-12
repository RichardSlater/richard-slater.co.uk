---
title: "Sooty the Security Operations Centre Client"
author: "Richard Slater"
date: 2020-10-23T17:55:54.620Z
lastmod: 2022-05-09T21:20:41+01:00
description: ""
subtitle: "I spotted an article on the SANS InfoSec Handlers Diary Blog where the author described a tool for Security Operations Engineers named…"
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
    - "/sooty-the-security-operations-centre-client-e985465f1035"
---

![image](images/1.jpg)
Photo by [Dmitry Ratushny](https://unsplash.com/@ratushny?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

I spotted an article on the [SANS InfoSec Handlers Diary Blog](https://isc.sans.edu/diary/rss/26714) where the author described a tool for Security Operations Engineers named Sooty:

[TheresAFewConors/Sooty](https://github.com/TheresAFewConors/Sooty)

It’s a command line tool predominantly seeking to put the day to day tasks of analysing attacks and enterprise defence at the fingertips of the analyst.

As a tool it is very task oriented, when you run it you are presented with a list of options:

You then select your options and answer the prompts and away you go. It took a little more effort to install that I wanted to I have documented my findings here in this article.

### Installation on WSL2

My primary shell is Ubuntu on WSL2 running on my Windows 10 laptop:

The recommended install process is to clone the repository:

You will also need to make sure that `python3` and `python3-tk0` is installed:

You will then need to install Sooty dependencies are installed:

Then configure sooty by copying `example_config.yaml` to `config.yaml` and copying in your API keys:

*   **Virus Total API**—****click on your profile in the top right hand corner then select API Key.
*   **AbuseIPDB**— visit [APIv2 in your profile](https://www.abuseipdb.com/account/api)
*   **UrlScan**— visit your [UrlScan profile](https://urlscan.io/user/profile/)
*   [**HaveIBeenPwned**](https://haveibeenpwned.com/API/v3) — sign up to [the API](https://haveibeenpwned.com/API/v3) on the site (USD $3.5/month)
*   **EmailRep.io** — [Request a key](https://emailrep.io/key)
*   **PhishTank**— [Create an application](https://www.phishtank.com/api_register.php)

Most of these services have free-tiers which will get you started and even if you don’t add any API Keys there is still a lot of functionality you will find useful.

Once you are done you can run `python3 Sooty.py` to test everything works; I have also setup an alias in my profile so I only need to type `sooty`:

Once you’re done try and integrate it into your workflow, if you are anything like me you will find yourself far more productive in a few hours.
