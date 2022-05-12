---
title: "2020 Weekly Update 47: Inbox Shenanigans, Unpatched Vulns, Big Sur OCSP, Cyber Insurance and…"
author: "Richard Slater"
date: 2020-11-23T08:23:26.185Z
lastmod: 2022-05-09T21:20:53+01:00
description: ""
subtitle: "Round up of Information and Cyber Security news from the 14th of November to the 20th November."
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
    - "/2020-weekly-update-47-inbox-shenanigans-unpatched-vulns-big-sur-ocsp-cyber-insurance-and-7bb50bd3cd0"
---

![image](images/1.jpg)
Photo by [Efe Kurnaz](https://unsplash.com/@efekurnaz?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

## I’ll just sneak this into your in-tray

Crafty sellers on the dark web have found a way to sneak e-mails into your inbox without sending them across the internet. This renders tools like Mimecast ineffective against this kind of attack; all is not lost however as the user would need to be phished before this could work.

- [Tool sneakily implants malicious emails into inboxes, but it can be thwarted](https://www.scmagazine.com/home/email-security/appender-tool-sneakily-implants-malicious-emails-into-inboxes-using-legacy-protocol/)

Innovation has been rife this year within the cybercrime community, The Register called this out in their article on Monday Morning:

- [This year&#39;s biggest innovators? Hackers and cybercriminals. Again](https://www.theregister.com/2020/11/16/learn_to_think_like_an_attacker/)

## Overview of phishing

GreatHorn posted a good overview of the different types of phishing accessible in the wild, along with some tips on how to create a good phishing module in your Security Awareness training programme.

- [9 Ways to Conduct Effective Phishing Training at Work - GreatHorn](https://www.greathorn.com/blog-best-ways-to-conduct-effective-phishing-training-with-employees/)

## What is still hanging around

SANS came up with a handy reminder that just because we don’t talk about certain vulnerabilities any more doesn’t mean that they don’t exist. Many servers are still vulnerable to Heartbleed and BlueKeep, a fact that rarely gets a mention in the news.

- [InfoSec Handlers Diary Blog](https://isc.sans.edu/diary/rss/26798)

## Cyberspace code of conduct

The Global Commission on the Stability of Cyberspace has completed and published their final report in an attempt to get both state-sponsored and non-state sponsored threat actors on board to protect the confidentiality, integrity and availability of cyberspace. Not sure how well that’s going to go down with parties involved, but I appreciate the attempt at a common code of conduct.

- [International infosec rules delivered to make nations and non-state actors behave themselves online](https://www.theregister.com/2020/11/16/gcsc_final_report/)

## Apple’s Big Sur OCSPpocalypse

Articles have been flying recently about Apple’s use of the online certificate stapling protocol as a potential for leaking privacy. [Scott Helme](https://medium.com/u/ad99d83a2484) has again written a good technical article on what is actually going on here, and equally what Apple (or any other vendor) could do about it.

- [Déjà vu - macOS hits OCSP hurdles](https://scotthelme.co.uk/deja-vu-macos-hits-ocsp-hurdles/)

As it turns out Apple is going to do something about it; although I’m still to be convinced that inventing a new protocol is the way forwards:

- [Apple&#39;s privacy pledges: We sent dev checks over plain HTTP, logged IP addresses. We bypass…](https://www.theregister.com/2020/11/17/apple_big_sur_privacy/)

## Coil.com in To: line faux pas

In an attempt to update it’s customers on the privacy policy; Coil.com managed to violate their own Privacy Policy by including a long list of customers on the `to` line.

- [Micropayments company Coil distributes new privacy policy with email that puts users&#39; addresses in…](https://www.theregister.com/2020/11/17/coil_email_data_breach/)

## Brave response in the face of ransomware

Capcom could have have paid the ransom; however they did everyone a favour by standing firm and not paying out — the ramifications on their operation are still to be felt, but it discourages bad actors from targeting them in the future. Right decision Capcom, thank you.

- [Cult videogame company Capcom pays a big round $0.00 to ransomware crooks](https://nakedsecurity.sophos.com/2020/11/16/cult-videogame-company-capcom-pays-a-big-round-0-00-to-ransomware-crooks/)

Capcom have certainly separated themselves from the rest of the pack as new data from Dark Reading shows that there has been an increase in Cyber Insurance payouts:

- [Chart: Undisputed Increase in Paid Claims](https://www.darkreading.com/edge/theedge/chart-undisputed-increase-in-paid-claims/b/d-id/1339464?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

Dark Reading (again) posted a Lawyer’s perspective on paying Ransomware and the negative legal consequences that are not necessarily obvious:

- [To Pay or Not to Pay: Responding to Ransomware From a Lawyer&#39;s Perspective](https://www.darkreading.com/risk/to-pay-or-not-to-pay-responding-to-ransomware-from-a-lawyers-perspective-/a/d-id/1339367?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## The Agile CISO Manifesto

The 68 words in the [Agile Manifesto](https://agilemanifesto.org/) literally changed Software Engineering forever; many have attempted to emulate it’s success and info sec is no different. Personally I think it’s a good step, although the content is less important than the list of names of those onboard to make it part of their life.

- [New manifesto offers CISOs an agile guide to threat modeling | SC Media](https://www.scmagazine.com/home/security-news/vulnerabilities/new-manifesto-offers-cisos-an-agile-guide-to-threat-modeling/)

## Distributed Storage platform for Ransomware-as-a-Service

The as-a-service model has become prevalent with the advent of cloud; it’s not limited to cloud though — even Ransomware providers are developing commodity storage, just on the off chance you need an inexpensive way to host your ill-gotten gains.

- [Ransomware Operator Promotes Distributed Storage for Stolen Data](https://www.darkreading.com/attacks-breaches/ransomware-operator-promotes-distributed-storage-for-stolen-data/d/d-id/1339457?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## Warning about Site Notifications from Brian Krebs

Brian Krebs has noticed something that has annoyed me for a while; sites requesting permissions to notify me in the browser. Krebs points out it’s more than annoying, as there are sites out there that are using the facility to push malicious content.

- [Be Very Sparing in Allowing Site Notifications](https://krebsonsecurity.com/2020/11/be-very-sparing-in-allowing-site-notifications/)

## Firefox for Android can be used to steal all the things

Having access to cookies in the browser pretty much means game over; there is very little you as a website operator or end-user would defend against all of your cookies being picked up and used elsewhere — fortunately it’s been fixed.

- [A visit to a crafted webpage would have been enough for a bad guy to munch all your Firefox for…](https://www.theregister.com/2020/11/17/firefox_cookie_theft/)

## Technical Debt in DevSecOps

David Habusha at Dark Reading points out that DevSecOps unlike other aspects of software engineering accrues technical debt in the form of a mounting list of vulnerabilities. The article also demonstrates the need to incorporate management these vulnerabilities needs to be a priority for DevSecOps teams and CISOs.

- [Vulnerability Prioritization Tops Security Pros&#39; Challenges](https://www.darkreading.com/vulnerabilities---threats/vulnerability-prioritization-tops-security-pros-challenges/a/d-id/1339318?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## AWS APIs vulnerable to abuse

Researches have identified that multiple Amazon Web Services offerings are vulnerable to abuse; with the prevalence of AWS in the enterprise and SaaS vendors this represents a sizable attack surface area.

- [Nearly Two Dozen AWS APIs Are Vulnerable to Abuse](https://www.darkreading.com/cloud/nearly-two-dozen-aws-apis-are-vulnerable-to-abuse/d/d-id/1339471?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

Abuse of cloud services isn’t unique to AWS; cloud services from both Microsoft and Google are vulnerable, albeit on a slightly different vector:

- [Cybercriminals Get Creative With Google Services](https://www.darkreading.com/threat-intelligence/cybercriminals-get-creative-with-google-services/d/d-id/1339496?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## Using BeEF to exploit the browser

- [Michael Whittle](https://medium.com/u/9065144dc262) brings us a great article on using BeEF, “Browser Exploitation Framework”, as a pen testing tool.

- [Ethical Hacking (Part 12): Browser Exploitation Framework (BeEF)](https://levelup.gitconnected.com/ethical-hacking-part-12-browser-exploitation-framework-beef-b5a45ccef1bc)

## Attacks on Japanese interests linked to APT10/Circada

The register called out research from Symantec/Broadcom linking APT10/Circada to attacks on Japanese countries across the world. The working assumption that this group is operating out of China, the interesting aspect is that they also appear to operate on-shore in China — which is unusual as it would expose the group to higher risk of prosecution.

- [China-linked hacking gang &#39;APT10&#39; named as probable actor behind extended attacks on Japanese…](https://www.theregister.com/2020/11/19/apt_10_china_japan_attack/)

## Sophos 2021 Threat Report

Sophos published their threat report calling out, amongst other things, that bad actors are leveraging COVID-19 as a force multiplier; something that has been called out on this blog a couple of times — good news, I’m not paranoid.

- [2021 Sophos Security Threat Report.](https://www.sophos.com/en-us/labs/security-threat-report.aspx)

Dark Reading has tips on how to spend the cash you get next year too:

- [2021 Cybersecurity Spending: How to Maximize Value](https://www.darkreading.com/operations/2021-cybersecurity-spending-how-to-maximize-value-/a/d-id/1339334?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## The new perimeter isn’t a big wall

Those familiar with BeyondCorp and Defence in Depth in general won’t be surprised to find out that the “big wall” mentality for cyber defending has fallen — Dark Reading have a great article about how Identity, Edge and Endpoint represent the new perimeter, or more accurately perimeters.

- [Out With the Old Perimeter, in With the New Perimeters](https://www.darkreading.com/perimeter/out-with-the-old-perimeter-in-with-the-new-perimeters/a/d-id/1339309?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## Troy Hunt loading more pwned accounts into HIBP

Troy Hunt has been doing his thing and loading accounts and passwords into HIBP; we got a bit more insight into his process here, it’s a fascinating read.

- [Inside the Cit0Day Breach Collection](https://www.troyhunt.com/inside-the-cit0day-breach-collection/)

## InfoSec professionals fear of falling foul of the Computer Misuse Act

Unless your chosen career is armed robber, would wouldn’t think that you could end up in prison for doing your job — unfortunately outdated laws here in the UK make Information Security Professional think that this could be in their future. Fortunately the are groups on hand to try and change these laws to be more compatible with the information age.

- [Cyberup campaign: 80% of infosec pros fear they might fall foul of UK&#39;s outdated Computer Misuse…](https://www.theregister.com/2020/11/19/computer_misuse_act_reform_cyberup/)

## Build a ARP Spoofing tool

- [Dharmil Chhadva](https://medium.com/u/9a0050c16170) wrote a great article for [gitconnected](https://medium.com/u/7c701b439582) covering how ARP Spoofing works and how to use it to act as a bad actor intermediary:

- [Man In The Middle Attack (MITM) Part 1 — ARP Spoofing](https://levelup.gitconnected.com/man-in-the-middle-attack-part-1-arp-spoofing-6f5b174dec59)

## New AWS Network Firewall uses Suricata

The new [AWS Network Firewall] (https://aws.amazon.com/blogs/aws/aws-network-firewall-new-managed-firewall-service-in-vpc/)product appears to be based around Suricata, the same Network Intrusion Detection/Presentation System used in Ubiquiti’s range of [Security Gateways (USGs)](https://www.ui.com/unifi-routing/usg/)) this is great news as many security researchers will publish Suricata based rulesets when they find network level vulnerabilities. The really nice thing about this is it enables policy as code, rather than relying on detection rulesets from vendors as Zip files.

- [AWS includes open-source Suricata for stateful inspection with Network Firewall service](https://www.theregister.com/2020/11/19/aws_adopts_open_source_suricata/)

## There is a lot of work still to do to realise true DevSecOps mindsets

SC Media points out that while frameworks such as [STIX/TAXII](https://medium.com/sekoia-io-blog/stix-and-taxii-c1f596866384) and [MITRE ATT&amp;CK](https://attack.mitre.org/) go a long way to automating the activities and interactions within Security Operations. As an example simply knowing a service is vulnerable doesn’t reduce the risk, analysis, response, quality assurance and deployment processes need to be engaged to close the gap.

- [Before automation can realize promise, companies have ground-level work to do | SC Media](https://www.scmagazine.com/home/security-news/before-automation-can-realize-promise-companies-have-ground-level-work-to-do/)

## New ACME CA on the market

For a long time there was only Let’s Encrypt, then there was Buypass, and now there is ZeroSSL — diversity in the market is excellent as it reduces our reliance on a single provider.

- [Introducing another free CA as an alternative to Let&#39;s Encrypt](https://scotthelme.co.uk/introducing-another-free-ca-as-an-alternative-to-lets-encrypt/)
