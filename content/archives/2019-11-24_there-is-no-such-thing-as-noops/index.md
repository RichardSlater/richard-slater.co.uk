---
title: "There is no such thing as NoOps!"
author: "Richard Slater"
date: 2019-11-24T08:59:50.779Z
lastmod: 2022-05-09T21:20:34+01:00
description: ""
subtitle: "Another rant about that NoOps thing that people keep talking about but no one can define"
image: "images/1.jpg" 
images:
 - "images/1.jpg"
aliases:
    - "/there-is-no-such-thing-as-noops-a8f18df1d953"
---

![image](images/1.jpg)
Photo by [Carl Cerstrand](https://unsplash.com/@cerstrand?utm_source=medium&amp;utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&amp;utm_medium=referral)

Apologies for the click-bait title, I do stand by my statement though. There is no such thing a NoOps, or DevOps, Production Engineering or DevSecOps for that matter! They are all words that describe our aspirations, passions and desire to innovate and identify as part of a tribe. The problem with all these “words” is they mean different things to different people; it’s a sad truism that:

> If you go to a DevOps Conference and ask ten people what DevOps is you will get twelve answers.

It’s not because people haven’t tried to codify DevOps and make it something more concrete. Look to the work of Gene Kim ([The Phoenix Project](https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B078Y98RG8/)), Nicole Forsgren ([Accelerate](https://www.amazon.co.uk/Accelerate-Software-Performing-Technology-Organizations-ebook/dp/B07B9F83WM/)) and the Google SRE team ([Site Reliability Engineering](https://www.amazon.co.uk/Site-Reliability-Engineering-Production-Systems-ebook/dp/B01DCPXKZ6)). These authors have done a fantastic job of describing the movement they espouse.

The problem is that each of these “movements” is not a template for 100% success, nor should they be. Organisations are messy, complicated, confusing, different and ever-changing. Complex organisations are fine; it’s great actually because it promotes diversity.

> NoOps is another portmanteau that says we try and automate everything.

It’s less important to adopt a “methodology”, such as DevOps, NoOps, SRE or even SAfE. It’s more important to understand where your organisation is, where it wants to be. Then pick the ideas, ways of working, technology and process that might help achieve that goal.

Whenever we say: “We do NoOps” or “We are a DevOps shop” what we are saying is, we align with the principles of “this thing”. When we identify as dutiful adherents to our chosen way of working, we are being our best selves. Yet, that doesn’t mean we are the finished article. The business you are part of hasn’t stopped evolving, so what works now might not work next year.

Articulating your preferred “approach” has some wisdom to it. In some circumstances, it helps to be brief, for example, when an investor asks if you’re doing DevOps. Sometimes people ask a closed question for a reason; they want a short response. But, brevity has its limitations; it hides the excellent work you are doing to enable the business to operate. If an investor asks if you what, you do, and you say ‘NoOps’ you better prepare to explain what that means.

The other issue with single-word answers is that it kills the conversation. Your peers won’t want to admit that they might do DevOps in a completely different way.

Instead, when someone asks me if we “do DevOps”, I try and explain the principles we follow:

*   Infrastructure as Code using Terraform to automate the creation of environments,
*   Configuration as Code using Skaffold to reduce human error and drift,
*   Continuous Deployment to deliver value.

I also sometimes explain that we don’t do everything. As a consultant, most clients don’t expect to pay consultancy rates to operate what I build in production. My advice to teams is to make it like you are going to be on call 24/7. While this doesn’t provide the same motivation and create the same conditions as “you build it, you run it”. Empathising with future operators provide some motivation in the right direction.

Intellectual honesty and willingness to open yourself up to criticism stimulates conversation and fosters trust. You open up your book and show the writing on the page, rather than pointing at the “DevOps Manual” on the bookshelf. Doing this, you create an environment that encourages discussion and cross-pollination of ideas rather than hiding behind an assumption.

Iwill finish this article with two questions:

1.  Next time someone asks you how their company “does infrastructure” or “operates in production”. Will you give the stock response, or will you explain what you do?

2.  If you do NoOps, would you be willing to write a Medium article explaining what that practice means to you? Open your book, and I guarantee that we learn something from the experience
