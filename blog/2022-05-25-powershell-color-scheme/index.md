---
slug: powershell-color-scheme
title: Color for PowerShell
authors: [sky]
tags: [color, powershell]
---

You can set choose color scheme for your Powershell either by switching to a preloaded schemes or create your own.  

To add in a new cutomized color and set it as our choice of scheme :    
1. Launch your PowerShell
2. Launch Settings

        Ctrl + ,

3. On the side menu bar, click on 'Open JSON file'. This will launch editor on this 'settings.json' file.
        
4. Scroll all the way down till you see entry for "schemes" and right after the bracket '[' put in json text below. Then click save and close the editor.

         {
            "background": "#282C34",
            "black": "#000000",
            "blue": "#007ACC",
            "brightBlack": "#75715E",
            "brightBlue": "#11A8CD",
            "brightCyan": "#11A8CD",
            "brightGreen": "#0DBC79",
            "brightPurple": "#AE81FF",
            "brightRed": "#DD6B65",
            "brightWhite": "#F8F8F2",
            "brightYellow": "#E6DB74",
            "cursorColor": "#FFFFFF",
            "cyan": "#11A8CD",
            "foreground": "#D4D4D4",
            "green": "#0DBC79",
            "name": "myCustomScheme",
            "purple": "#BC3FBC",
            "red": "#F4423A",
            "selectionBackground": "#FFFFFF",
            "white": "#F8F8F2",
            "yellow": "#E5E510"
        },

5. Now back to the Windows Terminal with the side bar, click on 'Defaults'.

6. On 'Additional settings' -> 'Appearance' -> 'Text' -> 'Color scheme'. Click on the drop down.

7. From the drop down list you can select different scheme and you can see the preview of the selected scheme. For our case we will select 'myCustomScheme' then click 'Save' button on the bottom.

8. Done, now the terminal will display accord to your custom scheme. :)

Resource : [Color schemes in Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes), [How to Design your Color Scheme in PowerShell Windows Terminal](https://www.freecodecamp.org/news/windows-terminal-themes-color-schemes-powershell-customize/)
