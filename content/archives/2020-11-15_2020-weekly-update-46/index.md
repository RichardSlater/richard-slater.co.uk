---
title: "2020 Weekly Update 46:"
author: "Richard Slater"
date: 2020-11-15T16:00:47.637Z
lastmod: 2022-05-09T21:20:49+01:00
description: ""
subtitle: "Round up of Information and Cyber Security news from the 7th of November to the 13th November."
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
    - "/2020-weekly-update-46-a92ea43df38b"
tags: ['Weekly Update', 'Information Security', 'Cybersecurity']
---

![image](images/1.jpg)
Photo by [Andrey Trusov](https://unsplash.com/@andreytrusov?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

## Victim Blaming in Information Security

Starting off this week on a low note, in my opinion, is the disturbing revelation that in 2020 we still think shaming people is an effective strategy to defend against phishing attacks. A paper published on the 29th October seems to suggest that after doing a study of 142 employees in New Zealand that a name and shame approach would work.

This, unfortunately, is flawed thinking for two reasons:

1.  [**Psychological Safety**](https://medium.com/@johnpcutler/of-course-psychological-safety-but-how-21adb8d97ba7): Even the threat of being shamed is sufficient to reduce the likelihood that an affected individual would raise a concern after becoming a victim. We can only foster a culture of collaboration and learning if people are able to make mistakes and **learn from them**.
2.  **Scope**: I strongly suspect there are two types of people in the world, those that have been phished and those that **will be phished**. Frankly, phishing is becoming so common that it’s only a matter of time before even the most savvy user has a bad day and clicks a link without considering the context or content fully.

At the end of the day, blaming the victim, is never an approach and not one the information security community should tolerate.

- [Security training vital to promoting anti-phishing behavior, says study](https://www.scmagazine.com/home/security-news/phishing/you-clicked-on-what-shaming-among-the-most-effective-deterrents-phishing-scams/)

## Legacy Device Timebomb

Scott Helme originally [wrote about this in June](https://scotthelme.co.uk/impending-doom-root-ca-expiring-legacy-clients/), essentially there are a large number of Android phones out in the wild that have not been updated, and likely never will do. These devices are no longer going to be able to access a good proportion of the internet — depending on how you calculate it anywhere between 2% to 18% of sites use Let’s Encrypt which is no small number.

- [Let&#39;s Encrypt warns about a third of Android devices will from next year stumble over sites that…](https://www.theregister.com/2020/11/06/android_encryption_certs/)

- [Android User Alert-How To Stop 220 Million Websites From Breaking In 2021](https://www.forbes.com/sites/daveywinder/2020/11/08/android-user-alert-how-to-stop-220-million-websites-from-breaking-in-2021/?sh=17ea19bfc0a0)

## Exfiltrating passwords over a video conversation

Just when you thought you had got ahead of the curve when a bunch of researchers point out that they can use your shoulders and upper arms to infer your passwords. Probably best to use a password manager, or if not, don’t type your password while on Video Chat.

- [Hackers Can Grab Passwords By Watching Your Shoulders Move On Zoom](https://www.forbes.com/sites/daveywinder/2020/11/07/surprising-new-zoom-hacking-threat-revealed-what-users-need-to-know/)

## Ransomware on Linux

- [Davey Winder](https://medium.com/u/f28add31aaec) has been on fire this week with article upon article with news from the Information Security Industry. This time he points out that ransomware isn’t just a concern for Windows users. With the prevalence of Linux in the enterprise services space it probably isn’t surprising that bad actors would eventually jump on Linux as attack vector.

- [New Ransomware Threat Jumps From Windows To Linux-What You Need To Know](https://www.forbes.com/sites/daveywinder/2020/11/08/new-ransomware-threat-jumps-from-windows-to-linux-what-you-need-to-know/?sh=62b9f2003265)

## UK on the Cyber Offensive Disrupting Propaganda

Seems that the UK intelligence community has gone on the cyber offensive, not only it’s it sufficient to [actively issue takedown notices](https://www.ncsc.gov.uk/news/public-urged-to-flag-covid-19-threats-new-campaign); not GCHQ (technically NCSC at a guess) is now using encryption to attack propaganda sites, which feels very much like a ransomware attack without actually asking for any money.

- [Somebody&#39;s Russian to meddle with UK coronavirus vaccine efforts, but GCHQ won&#39;t take it lying down](https://www.theregister.com/2020/11/09/gchq_hacks_russia_vaccine_disinfo/)

## TP-Link Takeover with a USB Key

- [Chris Lyne](https://medium.com/u/f73d48b47782) over at the [Tenable](https://medium.com/u/24ef8c56d6a1) Tech Blog posted a brilliant attack on TP-Link WiFi routers/switches that leverages the USB port and symbolic links to exfiltrate information from the device. Given that these switches are based upon OpenWRT I suspect other vendors are affected too.

- [TP-Link Takeover with a Flash Drive](https://medium.com/tenable-techblog/tp-link-takeover-with-a-flash-drive-d493666f6b39)

## Tim Berners-Lee Fixing the Internet

Tim Berners-Lee gave us the internet, he would be the first to admit that he made some mistakes. What I respect most about him is he admits this and is trying to fix it — he might not be able to get rid of `www` or the `//` but privacy is solvable.

- [Tim Berners-Lee asks everyone to do new biz a Solid and let him have another crack at fixing the…](https://www.theregister.com/2020/11/10/inrupt_server_bernereslee/)

## The downward spiral of Cyber Insurance

Cyber Insurance is a big industry; unfortunately it suffers from the same problems that “kidnapping” and “ransom” insurance has. If the policy will pay out, it actively increases the probability of the policyholder being targeted by the bad guys.

- [The Edge](https://www.darkreading.com/edge/theedge/the-double-edged-sword-of-cybersecurity-insurance/b/d-id/1339412?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

- [Ransomware Group Turns to Facebook Ads](https://krebsonsecurity.com/2020/11/ransomware-group-turns-to-facebook-ads/)

## More sidechannel attacks against physical processors

Intel isn’t having a great time; not only are they struggling to manage supply and demand, but another sidechannel attack has been identified in their platform.

- [One more reason for Apple to dump Intel processors: Another SGX, kernel data-leak flaw unearthed by…](https://www.theregister.com/2020/11/10/intel_sgx_side_channel/)

## SMS phishing attacks continue to rise

Phishing is profitable, sadly, SMS phishing is no different; with the prevalence of SMS it represents an easy target. The only way we are going to get past it is to stop using SMS for legitimate purposes. The aspect of this that makes me laugh is the fact that SMS was not designed for person to person communication, it’s a part of the specification for technical messaging to devices.

- [Smishing attack tells you &#34;mobile payment problem&#34; - don&#39;t fall for it!](https://nakedsecurity.sophos.com/2020/11/10/smishing-attack-tells-you-mobile-payment-problem-dont-fall-for-it/)

There are signs though that SMS is falling out of favour with CISOs:

- [Cloud Usage, Biometrics Surge As Remote Work Grows Permanent](https://www.darkreading.com/threat-intelligence/cloud-usage-biometrics-surge-as-remote-work-grows-permanent/d/d-id/1339413?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

- [Microsoft warns against SMS, voice calls for multi-factor authentication: Try something that can&#39;t…](https://www.theregister.com/2020/11/11/microsoft_mfa_warning/)

Sophos went on to point out that SMS phishing which lead to compromise of an mobile (cellular) account could lead to much more serious fraud:

- [&#34;Instant bank fraud&#34; hoax is back - don&#39;t spread fake news!](https://nakedsecurity.sophos.com/2020/11/11/instant-bank-fraud-hoax-is-back-dont-spread-fake-news/)

## Microsoft Patch Tuesday

If Coronavirus hadn’t killed your corporate VPN there is a pretty good chance that [this weeks Patch Tuesday will](https://www.scmagazine.com/home/security-news/vulnerabilities/microsoft-pushes-112-patches-which-may-cause-management-tools-to-buckle-under-pressure/); with 112 patches in total links will become saturated.

It’s a bumper crop of patches, however there is nothing hugely concerning in there. It’s good to see Microsoft becoming increasingly pro-active about patching vulnerabilities — corporates need to catch up with the world though and start provisioning vulnerability management over the internet rather than VPNs.

- [Patch Tuesday, November 2020 Edition](https://krebsonsecurity.com/2020/11/patch-tuesday-november-2020-edition/)

## Exposed Blob Storage in Azure

The SANS blog reminded us this week that vulnerability classes don’t care which cloud you use; this goes for Azure users laughing at AWS users when they have customer data exposed in S3 accounts — just because the most recent company used S3 doesn’t mean any other platform is immune.

- [InfoSec Handlers Diary Blog](https://isc.sans.edu/diary/rss/26784)

## New Threat-as-a-Service APT observed by Blackberry

This has been an interesting one; Blackberry posted a public service announcement describing their experiences with a new APT that appear to be operating in the “hacker for hire” space — this is a concern as Advanced Persistent Threats are harder to track and defend against if their “services” can be applied across industries and natation.

- [Blackberry identifies mystery APT, calls upon researchers to start &#39;picking up breadcrumbs&#39; | SC…](https://www.scmagazine.com/home/security-news/apts-cyberespionage/blackberry-identifies-mystery-apt-calls-upon-researchers-to-start-picking-up-breadcrumbs/)

- [New &#39;CostaRicto&#39; Hack-for-Hire Group Targets Global Businesses](https://www.darkreading.com/attacks-breaches/new-costaricto-hack-for-hire-group-targets-global-businesses/d/d-id/1339434)

## Security Awareness during the holiday season

It’s that time of the year where people are hitting the shops; due to COVID-19 we are mostly shopping on line; GreatHorn posted some great advice on how to stay safe online by being aware of these scams:

- [4 Phishing Scams to Beware of this Holiday Season - GreatHorn](https://www.greathorn.com/blog-4-phishing-scams-you-need-to-beware-of-this-holiday-season/)

## Pay2Key developing into a serious threat

The threat of not just losing access to your data but having some or all of it exfiltrated is a one-two punch to victims; it’s proving to increase the number of victims who are willing to pay out to regain access to their data and to avoid embarrassment.

- [Pay2Key - The Plot Thickens - Check Point Research](https://research.checkpoint.com/2020/pay2key-the-plot-thickens/)

## Retailers will be targeted during the holiday season

Finally a warning to retailers, with many more people shopping online this Christmas bad actors will target you even further Dark Reading has good advice on how to avoid it, and the ICO provides a stark warning on the consequences of an attack.

- [A Hacker&#39;s Holiday: How Retailers Can Avoid Black Friday Cyber Threats](https://www.darkreading.com/attacks-breaches/a-hackers-holiday-how-retailers-can-avoid-black-friday-cyber-threats/a/d-id/1339423?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

- [Ticketmaster cops £1.25m ICO fine for 2018 Magecart breach, blames someone else and vows to appeal](https://www.theregister.com/2020/11/13/ticketmaster_fined_1_25m_magecart_breach/)
