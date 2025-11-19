---
title: 'Azure: No current subscription has been designated'
date: Fri, 17 Apr 2015 12:40:42 +0000
draft: false
tags: ['DevOps', 'Sys Admin', 'Azure', 'Powershell']
---

Somethings a process doesn’t go to plan, this isn't unusual by any stretch of the imagination. However we can all feel a little lost when the instructions set out before us just don't seem to work. That was how I was feeling today when I got the following message while trying to use the [Azure Resource Manager API through PowerShell](https://powershellmagazine.com/2014/12/24/using-azure-resource-management-rest-api-in-powershell/ "Using Windows PowerShell with Resource Manager"):

```
Get-AzureLocation : No current subscription has been designated. Use Select-AzureSubscription -Current to set the current subscription.
At line:1 char:1
+ Get-AzureLocation
+ ~~~~~~~~~~~~~~~~~
    + CategoryInfo          : CloseError: (:) [Get-AzureLocation], ApplicationException
    + FullyQualifiedErrorId : Microsoft.Azure.Commands.Resources.GetAzureLocationCommand 
```

As it turns out the error message is less than helpful as there were no subscriptions defined at all, tracking this all the way back through my process I noticed this warning message:

```
C:\Source> Add-AzureAccount
WARNING: There is no subscription associated with account powershell@richardslaterasos.onmicrosoft.com.

Id                             Type       Subscriptions      Tenants
--                             ----       -------------      -------
powershell@amido.com           User                          12ab34cd-f113-49c7-8f5f-e998ff53b7c1
```

I thought this was a little odd, that is until I logged into the [Azure Management Portal](https://manage.windowsazure.com) to find out that indeed there were no subscriptions. As it turns out I had forgotten to add the service account as a Co-Administrator through the Azure Management Portal (Settings -> Administrators), once I had done this everything worked as expected.