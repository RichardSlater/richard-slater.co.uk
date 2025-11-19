---
title: 'Adjusting Selections in CodeRush Xpress'
date: Fri, 16 Oct 2009 19:30:24 +0000
draft: false
tags: ['C#', 'CodeRush', 'CodeRush', 'DevExpress', 'Programming', 'Resharper', 'Visual Studio']
---

I found this function totally accidentally when I knocked my mouse into a key when something interesting popped up on Twitter. I happened to have a variable selected like so: ![Variable Selected in Visual Studio](/img/archive/2009/10/VariableSelected.JPG "Variable Selected") The key that I knocked was the Number Pad "+" key, and it expanded the selection like this: ![VariableSelectedPlus1](/img/archive/2009/10/VariableSelectedPlus1.JPG "VariableSelectedPlus1") As any self respecting Systems Administrator would do I wondered if doing exactly the same thing repeatedly would have equal or compound effects. ![VariableSelectedAgainAgain](/img/archive/2009/10/VariableSelectedAgainAgain.JPG "VariableSelectedAgainAgain") Strangely enough it worked, the selection will continue to expand selecting increasingly larger sections of code. The reverse works as well if you press the Number Pad "-" key the selection will be reduced.

![WhatHappened](/img/archive/2009/10/WhatHappened.png "WhatHappened")

As I was looking for [documentation](http://www.devexpress.com/Products/Visual_Studio_Add-in/CodeRushX/selection.xml) on this function; I found that you could use the CamelCase select function to start selections off using Ctrl+Shift+Left (or Ctrl+Shift+Right) this will take your selection from the current cursor position to the next upper case character to the left (or right). This can be coupled with the Number Pad "+" to expand your selection from a variable to an expression, to a line then a block. Neat! Each of these discoveries was announced with a handy little popup in the bottom right hand corner of the viewport telling me what happened, and if relevant what function was suppressed. I am going to make a concerted effort to spend my lunch break watching some more videos on DevExpress' training site. I got 10 minutes today and watched what appeared to be footage from a launch event or a conference which was interesting but didn't really teach me anything specifically.