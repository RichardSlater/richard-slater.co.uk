---
title: "The need for BeyondCorp-type organisations; Threat Models and Breaches (2020: Week 44)"
author: "Richard Slater"
date: 2020-11-02T20:09:56.370Z
lastmod: 2022-05-09T21:20:44+01:00
description: ""
subtitle: "Round up of Information and Cyber Security news for Week 44 of 2020."
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
    - "/the-need-for-beyondcorp-type-organisations-threat-models-and-breaches-2020-week-44-461281298542"
---

![image](images/1.jpg)
Photo by [marcos mayer](https://unsplash.com/@mmayyer?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

### IT moves to a zero-trust, decentralised model (Saturday)

Looks like Google were on the right track with BeyondCorp as Coronavirus has very succinctly put the “impenetrable border” approach to IT Security on notice. With millions of knowledge workers able to be productive from home, but failing to get access to resources as VPNs and Identity and Access Managements solutions struggle.

- [Threat automation, decentralized architecture among emerging post-COVID cyber trends | SC Media](https://www.scmagazine.com/home/security-news/threat-automation-decentralized-architecture-among-emerging-post-covid-cyber-trends/)

Checkpoint followed up a few days later with a series on videos on how their products could secure a remote workforce:

- [8-Part Video Guide: How to Secure your Remote Workforce - Check Point Software](https://blog.checkpoint.com/2020/10/26/8-part-video-guide-how-to-secure-your-remote-workforce-7/)

### Gaps in Microsoft’s Threat Matrix (Monday)

- [Gadi Naor](https://www.darkreading.com/author-bio.asp?author_id=5398) of Dark Reading called out that the Threat Matrix that Microsoft Published in April 2020 was missing a key aspect of operating Kubernetes on Azure:
> One notable component Azure’s threat matrix leaves out is the “Command &amp; Control” (C2) threat category

The threat model is invaluable to someone who does actually operate Kubernetes on Azure (AKS) in Production, the analysis even more so. Goes to show the value of peer review in the technology sector is critical.

- [Microsoft&#39;s Kubernetes Threat Matrix: Here&#39;s What&#39;s Missing](https://www.darkreading.com/threat-intelligence/microsofts-kubernetes-threat-matrix-heres-whats-missing/a/d-id/1339106)

### Psychotherapy Clinic Hack Victims Blackmailed (Monday)

Despite an apparent armistice between the hacker community and healthcare providers, a Finnish Psychotherapy Clinic was hacked last week resulting in exfiltration of about 40,000 records pertaining to individuals. A subset of these users have subsequently be approached with attempts to blackmail them.

- [Hackers rummaged about in Finnish psychotherapy clinic - now patients extorted with public data…](https://www.theregister.com/2020/10/26/finland_psychotherapy_clinic_ransom_attack/)

This is another example of how much damaged a small data loss may represent, and surely calls for more industry specific data protection advice and assistance for the Healthcare sector in general. Unfortunatly it doesn’t appear to be an isolated case:

- [Dr. Reddy Labs discloses cyberattack soon after getting ok for final COVID vaccine trial | SC Media](https://www.scmagazine.com/home/security-news/dr-reddy-labs-discloses-cyberattack-soon-after-getting-ok-for-final-covid-vaccine-trial/)

### Reverse Engineering Redacted Text (Tuesday)

_via_ [_Schneier on Security_](https://www.schneier.com/blog/archives/2020/10/reverse-engineering-the-redactions-in-the-ghislaine-maxwell-deposition.html)

Fortunately we have come a long way from redactions simply being black shapes layered on top of text, allowing the redacted text to trivially be extracted with any PDF editor. Never under estimate how clever a suitably motivated person can be, as an example slate.com reverse engineered text of a deposition published in the US to reveal sensitive names:

- [We Cracked the Redactions in the Ghislaine Maxwell Deposition](https://slate.com/news-and-politics/2020/10/ghislaine-maxwell-deposition-redactions-epstein-how-to-crack.html)

### Amazon faces the consequences of a malicious insider (Tuesday)

Amazon recently experienced one of the biggest fears of an employer, the fact that an employee, or worse multiple employees, would abuse their position for personal gain. It appears that the employees in question disclosed e-mail addresses to a third party resulting in Amazon making a statutory disclosure and informing customers.

- [Amazon Discloses Security Incident Involving Customers&#39; Email Addresses](https://www.tripwire.com/state-of-security/security-data-protection/amazon-discloses-security-incident-involving-customers-email-addresses/?utm_source=feedotter&amp;utm_medium=email&amp;utm_campaign=FO-10-27-2020&amp;utm_content=httpswwwtripwirecomstateofsecuritysecuritydataprotectionamazondisclosessecurityincidentinvolvingcustomersemailaddresses&amp;mkt_tok=eyJpIjoiTkdFeU5XTXhNalZsTkRBeSIsInQiOiJuTWkrQ245SUREQXI4amc4MFViSkw2cThWOVpiTG9GbzVTS0Q4RHNXRHFOYmpnMk9cL0w2Zit5Y0lsSStsYTZ0bnlzZUlFVkVWNDliS2Y4YW9LTEZvV21OKzIreFNWcUFrdWlVUlwvbjJDd2FDTkNlWkVKSTFORmMrVW1LOXJIRzI1In0%3D)

It’s not just Amazon though, it’s also BAE Systems, dealing with fall out from rogue employees:

- [Software engineer leaked UK missile system secrets and refused to hand cops his passwords, Old…](https://www.theregister.com/2020/10/28/simon_finch_official_secrets_passwords_trial/)

### Don’t blame the font (Wednesday)

Troy Hunt started a small twitter conflict but then called out that it’s easy to blame developers, typeface designers, UX engineers or even end users (victims) for malicious users but at the end of the day you can’t fix everything.

- [Humans are Bad at URLs and Fonts Don&#39;t Matter](https://www.troyhunt.com/humans-are-bad-at-urls-and-fonts-dont-matter/)

Scott Helme summed the response to “training users” very well:

> [](https://twitter.com/Scott_Helme/status/1320447408325726209)

### Unusually large number of unpatched Windows machines in the wild (Wednesday)

In a odd turn of events there seems to be an unusually large number of hosts on the internet vulnerable to the Critical and Wormable SMBGhost. There doesn’t seem to be an obvious reason why though:

- [InfoSec Handlers Diary Blog](https://isc.sans.edu/diary/rss/26732)

### Security and Defence Data Loss (Thursday)

There has been a few of these recently, combination of GDPR and increase threat landscape recently.

- [Security Blueprints of Many Companies Leaked in Hack of Swedish Firm Gunnebo](https://krebsonsecurity.com/2020/10/security-blueprints-of-many-companies-leaked-in-hack-of-swedish-firm-gunnebo/)

### Tracking Waze Users (Thursday)

Given the user base of Waze this has quite an impact on consumers, good news is given Waze’s platform fixing the issue was less of a problem than, for example, if a in-car system was vulnerable.

- [Tracking Users on Waze](https://www.schneier.com/blog/archives/2020/10/tracking-users-on-waze.html)

### Do you have a “Act of War” Clause? (Friday)

As it turns out Cyber Insurance often has an “Act of War” clause, which is perfectly normal. It’s not so normal that an attack against your business could be considered an act of war if perpetrated by a nation state actor.

- [&#39;Act of War&#39; Clause Could Nix Cyber Insurance Payouts](https://www.darkreading.com/attacks-breaches/act-of-war-clause-could-nix-cyber-insurance-payouts/d/d-id/1339317?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

### Company Name XSS (Friday)

Almost unbelievably it’s possible to register a company name in the UK that contains characters that could be used as a XSS attack. In this case someone tried it, but in the name of science, not crime:

- [Why, yes, you can register an XSS attack as a UK company name. How do we know that? Someone…](https://www.theregister.com/2020/10/30/companies_house_xss_silliness/)

### New Let’s Encrypt intermediary (Friday)

Scott Helme (again) has posted a rundown on the new intermediate certificates in use by Let’s Encrypt; which are now cleaner and smaller, thanks to common sense and Elliptic-Curve Cryptography:

- [Let&#39;s Encrypt issues new Root and Intermediate Certificates](https://scotthelme.co.uk/lets-encrypts-new-root-and-intermediate-certificates/)

### Marriot fined (Friday)

The Information Commissioner’s Office slapped Marriot Group with a fine representing just 5p per customer. This isn’t exactly a win for data security, but hopefully “in-economy of scale” will make companies think twice about data security in the future.

- [Marriott fined £0.05 for each of the 339 million hotel guests whose data crooks were stealing for…](https://www.theregister.com/2020/10/30/marriott_starwood_hack_fine_just_18_4bn/)

- [Marriott International Inc](https://ico.org.uk/action-weve-taken/enforcement/marriott-international-inc/)
