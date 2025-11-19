---
title: "Privacy vs. the Government, Trickbot disrupted, and more (2020: Week 42)"
author: "Richard Slater"
date: 2020-10-17T11:17:13.878Z
lastmod: 2022-05-09T21:20:38+01:00
description: ""
subtitle: "… bad neighbours causing blue screens, Facebook bales out Bletchley Park, Intel creates secure CPUs for the cloud and SANS talks…"
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
 - "/privacy-vs-the-government-trickbot-disrupted-and-more-2020-week-42-47264c01a2c8"
tags: ['Privacy', 'Information Security', 'Cybersecurity']
---

![image](images/1.jpg)
Photo by [Sergiu Nista](https://unsplash.com/@sergiunista?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

### National Security vs. Privacy: Round 3 (Monday)

T
he battle between national security and privacy continues as the “Five Eyes”, plus India and Japan, reach out to technology firms pleading for ways to protect public safety. In the [face of end-to-end encryption](https://www.theregister.com/2020/10/15/zoom_end_to_end_security/) and other technologies nation states increasingly hitting brick walls when criminals use these services putting public safety at risk. This is an ongoing debate, and personally I tend to sit on the side of privacy and the personal protections it affords; however I think everyone recognises the need for public safety to some degree — I doubt this will get resolved any time soon.

[Five Eyes nations plus Japan and India call for Big Tech to bake backdoors into everything](https://www.theregister.com/2020/10/11/international_statementon_end_to_end_encryption_and_public_safety/)

[US Department of Justice reignites the Battle to Break Encryption](https://nakedsecurity.sophos.com/2020/10/16/us-department-of-justice-reignites-the-battle-to-break-encryption/)
### Microsoft Disrupted Botnet Command and Control using Trademark Law (Tuesday)

M
icrosoft and the US Cyber Command has used it’s trademarks for good this week by obtaining a court order to take over a number of servers in the internet that both provided Command and Control Infrastructure for the Trickbot Botnet. It’s good to see Microsoft using the tools at it’s disposal to continue the fight against the threat actors.

[Microsoft Uses Trademark Law to Disrupt Trickbot Botnet](https://krebsonsecurity.com/2020/10/microsoft-uses-copyright-law-to-disrupt-trickbot-botnet/) —

[Microsoft on the counter­attack! Trickbot malware network takes a hit](https://nakedsecurity.sophos.com/2020/10/12/microsoft-on-the-counterattack-trickbot-malware-network-takes-a-hit/)

[Microsoft and chums use US trademark law to trash Trickbot malware network](https://www.theregister.com/2020/10/12/trickbot_c2_takedown_microsoft/)

[US Cyber Command and Microsoft Are Both Disrupting TrickBot](https://www.schneier.com/blog/archives/2020/10/us-cyber-command-and-microsoft-are-both-disrupting-trickbot.html)
### Bad neighbours may ping you to death (Wednesday)

M
icrosoft released a fix to [CVE-2020–16898](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-16898) which hit a 9.8 in terms of CVSS, pretty much as nasty as it gets. Of course security vendors and the media have more delightful names for it such as McAfee’s Bad Neighbour and Sophos’ Ping of Death. Microsoft has released both the patch and [a workaround](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-16898), the workaround in this case is disabling either IPv6 or RDNSS, in addition if you run Network Intrusion Detection/Prevention Systems there are [rulesets available](https://github.com/advanced-threat-research/CVE-2020-16898).

[Managing and Mitigating CVE-2020–16898 (Bad Neighbour/Ping of Death)](https://medium.com/@richardslaterinthecloud/managing-and-mitigating-cve-2020-16898-bad-neighbour-ping-of-death-4a42a7fb30d0)

### Facebook throws a £1m lifeline (Wednesday)

B
letchley Park is quite literally the birthplace of GCHQ, modern computer science and cyber security; Facebook recognised this by reaching out a hand in the form of a £1m grant to support the site through Coronavirus:

[&#39;Facebook simply would not exist today if not for Bletchley Park,&#39; says social network - but don&#39;t…](https://www.theregister.com/2020/10/14/facebook_bletchley_park/)

### Intel has created a (more) secure CPU (Thursday)

Processor development is long cycles, so it’s not entirely surprising that six years after Heartbleed Intel started shouting about security features in their new third-gen Xeon Ice Lake CPUs. It’s way more than security fixes though, these CPUs are designed-for-the cloud to enable cloud providers a robust security solution for workloads in-use.

[Intel&#39;s Ice Lake Beefs Up CPU Security for Cloud Workloads](https://www.darkreading.com/cloud/intels-ice-lake-beefs-up-cpu-security-for-cloud-workloads/d/d-id/1339180?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

[Intel celebrates security of Ice Lake Xeon processors, so far impervious to any threat due to their…](https://www.theregister.com/2020/10/14/intel_ice_lake_xeon_security/)

### SANS Released Part II of their Vulnerability Management Maturity Model

[Jonathan Risto](https://www.sans.org/profiles/jonathan-risto?msc=blog-author) takes us through an immensely entertaining journey through implementing vulnerability management through using the Vulnerability Management Maturity model. Just commit to reading both [Part I](https://www.sans.org/blog/vulnerability-management-maturity-model/) and [Part II] (https://www.sans.org/blog/vulnerability-management-maturity-model-part-ii/) at the very least you will smile, and you might just get break the back of vulnerability management within your organisation.

[Vulnerability Management Maturity Model Part I](https://www.sans.org/blog/vulnerability-management-maturity-model/)

[Vulnerability Management Maturity Model Part II](https://www.sans.org/blog/vulnerability-management-maturity-model-part-ii/)

### Other News

The British Government found them selves in hot water after a poorly timed advert went out over social channels:

[A brief explainer on the government&#39;s dystopian Fatima cyber ad](https://www.dazeddigital.com/politics/article/50747/1/a-brief-explainer-on-the-government-dystopian-fatima-cyber-ad)

The Irish Government learnt a tough lesson about SMS:

[&#39;You&#39;ve got the old cheeky Corona&#39;: Ireland&#39;s pandemic advice SMS service can be spoofed, warns…](https://www.theregister.com/2020/10/12/ireland_covid_advice_sms_spoofable/)
