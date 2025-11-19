---
title: 'Finding Code Issues'
date: Fri, 01 Oct 2010 21:02:28 +0000
draft: false
tags: ['.NET', 'CodeRush', 'Programming']
---

As programmers we are well known for writing bug free perfectly formed code first time round, as such I don't really understand why DevExpress implemented the code issues feature... no wait... that should be the other way round.

CodeRush has several ways to access the Code Issues user interface, first off there is the thin file overview down the right hand side of the viewport. In the code itself there are handy contextual hints too. [![Code Rush Issue In Context](/uploads/2010/10/CodeRushIssueInContext.png "Code Rush Issue In Context")](/uploads/2010/10/CodeRushIssueInContext.png) In this example, `this.` is redundant and has been greyed out, if you hover over it it will tell you more about the issue and how to resolve it. 

Different issues have different notation so code that is to be transformed will have a coloured underline. In the process of going though a file created by someone else the code style was a bit off - I was able to quickly bring it in line with the project preferences by using the shortcut keys `Alt` + `PageDown` to skip between the issues then `Ctrl` + `'` to fix the issues quickly.

Great feature for spotting mistakes as you code, and also for learning new language features as they are introduced into the specification.