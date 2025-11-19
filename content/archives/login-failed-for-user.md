---
title: 'Login failed for user '''''
date: Mon, 25 Jan 2010 13:51:41 +0000
draft: false
tags: ['Sys Admin', 'Things You Find']
---

There is an [excellent post](https://web.archive.org/web/20150815074026/http://blogs.msdn.com/b/sql_protocols/archive/2008/05/03/understanding-the-error-message-login-failed-for-user-the-user-is-not-associated-with-a-trusted-sql-server-connection.aspx) on the SQL Protocols blog about diagnosing the:

```
Login failed for user ''. The user is not associated with a trusted SQL Server connection.
```

message displayed by SQL Management Studio and other applications which use the same API; Notice the blank username ''. I believe there is one possibility missing from the above post: that is the Group Policy setting "Deny access to this computer from the network". Which can be found in both Domain Group Policy and Local Security Policy in the following path: 

 - Computer Configuration
   - Windows Settings
     - Security Settings
       - Local Policies
         - User Rights Assignment.

I have been using this policy more and more to lockdown access to site systems in accordance with our security and access policy. It pays to be cautious when applying User Rights Assignment policies to a machine, as in Windows 2003/XP they are not very granular.