---
title: 'Spot The Mistake 1'
slug: 'spot-the-mistake-one'
date: Sat, 21 Aug 2010 17:30:29 +0000
draft: false
tags: ['Programming', 'Spot the Mistake']
---

This one had me puzzled for about an hour, I shall endeavour to post the answer in the comments in short order.

```
foreach (var id in CharacterIdentities)
{
  QueryMethodAsync(
    APIMethods.CharacterSkillInTraining,
    m_userId,
    m_apiKey,
    id.CharacterID,
    (x) => OnSkillInTrainingUpdated(x, id));
}
```