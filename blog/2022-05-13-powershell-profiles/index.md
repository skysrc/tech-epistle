---
slug: powershell-profiles
title: Use Profiles for PowerShell
authors: [sky]
tags: [profiles, powershell]
---

We can set variables, aliases, function and modules in a PowerShell session. With PowerShell profile, it let us configure all these in a file and save us from typing on each new PowerShell session.  

To create a PowerShell profile :    
1. Launch your PowerShell
2. Create PowerShell profile, command below will create a profile file when it's not created before

        if (!(Test-Path -Path $PROFILE ))
            { New-Item -Type File -Path $PROFILE -Force }

3. To edit the profile
        
        notepad $PROFILE  

4. To start each PowerShell session in a spcific directory path, add in this entry to the file

        Set-Location C:\Any\Directory\You\Want

5. To add in aliases, example below we add in 'll' to work as 'ls' which is for listing the directory

        Set-Alias ll ls
6. Save and exit the Notepad

7. Launch a new PowerShell session. You will see the starting directory path is what we had configured and inpupt 'll' command will list our directory.

8. We can do more fun stuff with profile by specifying function and module to be loaded for the session.

Resource : [How to Use Profiles in Windows PowerShell ISE](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/ise/how-to-use-profiles-in-windows-powershell-ise?view=powershell-7.2)
