---
title: "2020 Weekly Update 44: Cyber Skills, Healthcare Attacks, North Korea, Machine Learning and Threat…"
author: "Richard Slater"
date: 2020-11-07T11:08:20.004Z
lastmod: 2022-05-09T21:20:46+01:00
description: ""
subtitle: "Round up of Information and Cyber Security news from the 31st of October to the 6th November."
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
    - "/2020-weekly-update-44-cyber-skills-healthcare-attacks-north-korea-machine-learning-and-threat-a1395585c518"
---

![ENIGMA machine in a display case.](images/1.jpg)
Photo by [Mauro Sbicego](https://unsplash.com/@maurosbicego?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

I was due to be going away this weekend so I had planned to delay publishing this until Monday; however due to a new national lockdown in the UK, I am no longer able to travel. The bright side is I have time to publish this at the weekend, small mercies.

## Google’s Project Zero discloses a vulnerability in the Windows Kernel

October felt like a busy month for anyone dealing with Windows on their network; and was certainly a reminder of the value of a Defence in Depth strategy is key. To round off the month [Google Disclosed a zero-day vulnerability](https://bugs.chromium.org/p/project-zero/issues/detail?id=2104) in the kernel Cryptographic Driver that was being exploited in the wild.

What was unusual about this disclosure was that it was only reported to Microsoft on October 22nd meaning there was a little more than a week before public disclosure. This would normally be a faux pas on the part of Google, however given it was observed in the wild, via a Chrome exploit, it makes sense to disclose it. Never the less, Microsoft are planning on patching this next week.

- [Windows kernel zero-day disclosed by Google&#39;s Project Zero after bug exploited in the wild by…](https://www.theregister.com/2020/10/30/windows_kernel_zeroday/)

- [Windows 10 Users Beware-New Hacker Attack Confirmed By Google, Microsoft](https://www.forbes.com/sites/daveywinder/2020/11/01/windows-10-users-beware-new-hacker-attack-confirmed-by-google-microsoft/?sh=2e0075113b0a)

- [Windows Zero-Day Used with Chrome Flaw in Targeted Attacks](https://www.darkreading.com/threat-intelligence/windows-zero-day-used-with-chrome-flaw-in-targeted-attacks/d/d-id/1339350?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## Plugging the CyberSecurity Skills Gap

The information and cyber security industry has a real problem with talent; and it only gets worse when you consider the need for the same skills in non-cyber security roles. The industry simply doesn’t have enough people graduating with relevant skills to sustain the growth in demand.

Fortunately this recognised and many organisations are leading the charge to reduce the skills gap and encourage more people, and greater diversity, into the industry as a whole.

- [Cybersecurity Talent Initiative aims to shrink cyber skills gap, student debt](https://www.scmagazine.com/home/security-news/network-security/cybersecurity-talent-initiative-resolves-to-shrink-cyber-skills-gap-student-debt/)

Our very own National Cyber Security Centre in the UK has a entire programme to encourage 11–17 year olds to consider cyber security as a profession. NCSC take this a step further by having a related programme focusing on encouraging girls from Year 8 and upwards to develop skills relevant to Cyber Security.

- [CyberFirst overview](https://www.ncsc.gov.uk/cyberfirst/overview)

The work doesn’t stop with the UK or even when students finish school, talent management is about systems thinking so creating a world class onboarding and continuous professional development programmes are key to recruiting and retaining professionals:

- [From Surviving to Thriving | A SANS Institute Webcast for Junior Cybersecurity Professionals](https://www.sans.org/blog/junior-cybersecurity-professionals-from-surviving-to-thriving/)

## Continued Attacks on Healthcare Services

It shouldn’t be surprising to see that criminals gladly take advantage of Coronavirus. I would have hoped people would see the bigger picture here and consider the human cost of targeting Healthcare services during a global pandemic — however I suspect there is a expectation that all a global pandemic means is a higher chance that someone will pay out.

- [Hospitals Targeted in Rising Wave of Ryuk Ransomware Attacks - Check Point Software](https://blog.checkpoint.com/2020/10/29/hospitals-targeted-in-rising-wave-of-ryuk-ransomware-attacks/)

It’s not all doom and gloom, NCSC have been supporting the NHS during this time according to their annual report:

- [Protecting the NHS: NCSC fended off lots of meddling aimed at UK health orgs while ransomware…](https://www.theregister.com/2020/11/03/ncsc_annual_report_nhs_ransomware/)

## How a SOC Analyst handles a potentially malicious Office document.

I’ve been enjoying the SANS InfoSec Handlers Diary of late; solid practical advice on how to respond to threats to your organisation. In this instalment [Didier Stevens](https://isc.sans.edu/handler_list.html#didier-stevens) describes the use of his [Oledump](https://blog.didierstevens.com/programs/oledump-py/) tool to investigate a malicious document; for bonus points we find out how an Anti-virus vendor “cleans” the file.

- [InfoSec Handlers Diary Blog](https://isc.sans.edu/diary/rss/26744)

## North Korea’s cyber offensive capability levels up

North Korea’s Cyber Offensive capability has grown steadily in the last couple of years; the US Department of Homeland Security has identified that recently they have upped their game with new attack and evasion tools potentially giving them an upper hand against high value US targets. I do wonder how long before North Korea extends their sights beyond the US and we start running into attacks in the UK.

- [New Tools Make North Korea&#39;s Kimsuky Group More Dangerous](https://www.darkreading.com/threat-intelligence/new-tools-make-north-koreas-kimsuky-group-more-dangerous/d/d-id/1339353?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

Another author goes on to say that it’s probably not just North Korea that is upping the ante:

- [APT Groups Get Innovative -- and More Dangerous -- in 3Q](https://www.darkreading.com/attacks-breaches/apt-groups-get-innovative----and-more-dangerous----in-3q/d/d-id/1339368?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

Subsequently it emerged that attacks against defence workers were more clandestine than had originally been understood:

- [North Korea attacks targeting defense workers more covert than previously thought | SC Media](https://www.scmagazine.com/home/security-news/north-korea-attacks-targeting-defense-workers-more-covert-than-previously-thought/)

## Attacks on Machine Learning on the rise

Microsoft and friends [released](https://www.microsoft.com/security/blog/2020/10/22/cyberattacks-against-machine-learning-systems-are-more-common-than-you-think/) their [Adversarial Machine Learning Threat Matrix](https://www.microsoft.com/security/blog/2020/10/22/cyberattacks-against-machine-learning-systems-are-more-common-than-you-think/) which Dark Reading have broken down further. In a world where the quantity of data exceeds any reasonable human comprehension, we are turning to Machine Learning to manage this volume; however with new technologies comes new responsibilities and it’s good to see Microsoft taking the charge.

- [Microsoft &amp; Others Catalog Threats to Machine Learning Systems](https://www.darkreading.com/vulnerabilities---threats/advanced-threats/microsoft-and-others-catalog-threats-to-machine-learning-systems/d/d-id/1339354?_mc=rss_x_drr_edt_aud_dr_x_x-rss-simple)

## Seth Adler makes the case for ‘actionable threat inteligence’

One of the hardest alerts to respond to is the confusing and unhelpful: “something went wrong”. Actionability is essential, in the alerting world, threat intelligence is no different — actionable threat intelligence is at the core of MITRE’s ATT&amp;CK framework so this is where the industry is going.

- [5 Questions On Threat Intelligence](https://www.cshub.com/executive-decisions/articles/5-questions-on-threat-intelligence)

## Marketeering in the Information Security world

In 2014 [pointed out](https://amido.com/blog/heartbleed-the-internet-is-not-coming-to-an-end/) that many new flaws, vulnerabilities and exploits now had catchy names; rolling forward six years this has become a bit of a problem with every vulnerability having a catchy nickname, logo and brand — as it turns out making it easy to market vulnerabilities creates a great deal of fear. We absolutely have a responsibility to protect and inform those we are charged with defending, but equally we need to defend them from undue psychological stress.

- [CERT/CC: &#39;Sensational&#39; bug names spark fear, hype - so we&#39;ll give flaws our own labels... like…](https://www.theregister.com/2020/11/03/cert_bug_names/)

## IoT on home networks poses a security threat to employers

With everyone working from home there is concern that the Internet of Things devices on home networks could represent a threat to the information security of corporate networks.

There is something to be said here for not relying on a “ring of steel” to protect your resources, there is a lot of value in not trusting any client regardless of it’s origin and protecting every asset following the principles of zero trust as suggested by [Google in their BeyondCorp Paper](https://cloud.google.com/beyondcorp).

- [New data shows just how badly home users overestimate IoT security | SC Media](https://www.scmagazine.com/home/security-news/with-work-from-home-booming-new-data-shows-just-how-badly-home-users-overestimate-iot-security/)

## GitHub’s source was not leaked (this time)

A site claimed this week that a copy of the GitHub source code had been leaked, turns out that this time it was a fake; although GitHub did admit that the source code had accidently been released to customers in the past.

- [No, GitHub&#39;s source code wasn&#39;t hacked and posted on GitHub, says GitHub CEO](https://www.theregister.com/2020/11/05/github_not_hacked_and_cloned/)
That’s it for this week, do let me know via comments or twitter what you liked, disliked or want to see more of; share your stories too it’s an interesting journey we are all on.
