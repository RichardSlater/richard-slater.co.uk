---
title: 'Wikipedia Plugins for Wordpress'
date: Tue, 28 Aug 2007 11:53:49 +0000
draft: false
tags: ['Activelink', 'WikiLinks', 'Wikipedia']
---

I have great faith that Wikipedia can make a great day to day resource for personal reasearch, and be a starting point for academic research (not that I would recomend using Wikipedia as a reference for anything remotely important). As I tend to like linking to Wikipedia from blog posts I am looking for a plugin that allows me to do so quickly. I have found two plugins that seem to contain the features I want.

 - [ActiveLink](http://henning.imaginemore.de/activelink/ "ActiveLink") - Found this one through the Official WordPress plugins database it seemed to do more than I needed (i.e. Multi-Language) however I seem to of discovered a bug in either my style or in the plugin itself as pages on the front page show the markup rather than the link. 

 - [WP-WikiLinks](http://www.kitten-technologies.co.uk/project.php?project=wpwl "WP-WikiLinks") - Again this does more than I need, as it also does Amazon, ISBN numbers and more. It also has the advantage of being more "Wiki-Like" than ActiveLink. Not having tried this one yet I don't know if there are any pitfalls.
 
 I am going to experement with WP-WikiLinks later in the day to see if it is an improvement or if it suffers the same issues as ActiveLink.
 
 **Update** After taking a look at this it appears that neither ActiveLink or WP-WikiLinks process the text output through `the_content_rss()`, however strangely enough no markup or anchor is output on the RSS pages.