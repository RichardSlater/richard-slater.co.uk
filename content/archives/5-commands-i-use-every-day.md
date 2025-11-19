---
title: '5 Commands I Use Every Day'
date: Mon, 08 Sep 2008 17:07:48 +0000
draft: false
tags: ['Active Directory', 'command', 'Misc', 'Server', 'Sys Admin', 'Windows 2003', 'Windows 2008', 'Windows Vista', 'Windows XP']
---

For my regular day job I am a Systems Administrator, my team and I manage a network with 7 servers and approximately 600 workstations, 200 laptops and 2500 users. All clients are Windows XP SP2 or SP3 and all servers are Windows 2003 SP2 or Windows 2003 R2 SP2. I am sure I am not alone in knowing least 5 commands that I use day in and day out to manage workstations or servers on the network. I thought I would take the time to share some of these with you now. 

 - **dirquota** _Windows 2003 R2 Only_ dirquota is part of Windows 2003 R2 File Server Resource Manager ("FSRM") which I use to manage quotas on home areas and shared folders. dirquota is the command line mechanism for managing the quota portion of FSRM, with the number of users we have it is important that we can modify quotas quickly, something the FSRM Quota GUI is not good at. There I two basic forms I use every day: _dirquota quota list /path:{{< angle "path" >}}_ Simply enough this will create a report for the path including peak usage, current usage and quota limit along with dates and times useful when determining what to do with the quota. Usefully the verbs _quota_ and _list_ can be abbreviated to _q_ and _l_ respectively, which saves a bit of typing. The second form is to modify quotas: _dirquota quota modify /path:{{< angle "path" >}} /limit:{{< angle "limit" >}}_ The command does what is expected; modifies the quota on the path to the specific limit. Again the verbs _quota_ and _modify_ can be abbreviated to _q_ and _m_, in addition the limit parameter can be expressed in units, f.ex, 50MB, 500MB, 1G, 20G.
 - **robocopy** _All Windows Platforms_ Robocopy (or Robust Copy) is the Swiss Army Knife of file copy tools while it doesn't have a GUI it is more than capable of doing taking on any copy job. Originally part of the Windows Server Resource Kit it is not a standard command in Windows Vista and \[\[Wikipedia:Windows 2008 Server\]\]. Typing "robocopy /?" at the command line might be slightly overwhelming however there is one boiler plate command that will do the job. _robocopy {{< angle "source" >}} {{< angle "destination" >}} /E /ZB /COPY:DAT /R:3 /W:10 /XJ /XF \*.tmp ~$\*.doc_ {{< angle "source" >}} and {{< angle "destination" >}} can be local paths, mapped drives or UNC paths.

    *   _/E_ - copies files and folders recursively including empty folders, if you want to exclude empty folders replace /E with /S.
    *   _/ZB_ - copies files in restartable mode, if that fails due to an access denied error then use backup mode, this will require administrator access to work, use /Z if you are not running as an administrator.
    *   _/COPY:DAT_ - copies only **D**ata, **A**ttributes and **T**imestamps useful when taking a copy to move to a new file system and re-apply permissions from scratch. Check the help pages for information about other options.
    *   _/R:3 /W:10_ - Retry three times, wait 10 seconds between tries. Important if you have an Anti-Virus product configured to scan on access as you may get System Error messages when trying to access these files.
    *   _/XJ_ - Exclude Junction Points. Very important for Windows Vista as the user profile "Application Data" folder points to itself causing recursive and eventually failing copy operations.
    *   _/XF {{< angle "filespec" >}}_ - Exclude Files. There is rarely any point in copying temporary.

 - **wuauclt /detectnow** _All Windows Platforms_ wuauclt stands for **W**indows **U**pdate **A**utomatic **U**pdate **Cl**ien**t**, yes it is a bit of a mouth full, /detectnow is a simple operation to kick off the Windows Update client to detect if updates are required rather than relying on the detection schedule. 
 
 - **dsquery, dsmove** The Active Directory Users and Computers (ADUC) Microsoft Management Console Add-on is sufficient for the majority of Active Directory operations. There are situations where it is useful to be able to script an operation, for example the mass moves of objects from one location to another. I tend to use Microsoft Excel to to transform a text file report to a list of directory commands, most recently I moved all laptops that had not accessed the domain for the past six weeks to an "Lost Computers" OU. At which point I disabled the computer account through ADUC. _dsquery computer -name LTA3-44 | dsmove -newparent "ou=Lost Computers,dc=domain,dc=co,dc=uk"_
 
 - **icacls** _Windows Vista, Windows 2003 SP2 and Windows 2008 Only_ icacls is the long awaited replacement to cacls and xcacls providing command line access to modifying Windows NTFS Access Control Lists. icacls provides more flexibility that cacls and xcacls making it a essential skill to learn for manageing mass permission changes on disks with many different users. _icacls /grant DOMAIN\\rslater:(OI)(CI)F /T_

    *   /grant DOMAIN\\username - grants the specified permission to this user, /deny is also an option however one to be careful of.
    *   :(OI)(CI) - not some strange smiley, but means **O**bject **I**nherit, **C**ontainer **I**nherit, applies only to directories and means files and folders within the folder will inherit permissions from the folder.
    *   /T - recurse directories.

## Final Thought

Every Systems Administrator, Programmer, Hacker, Scripter and Helpdesk Operator must have at least 5 commands that make their life easier, if you have posted about these commands on your blog please do leave a link in the comments. Equally if you think of a command while reading this blog entry feel free to post it in the comments.