"use strict";(self.webpackChunkblog_site=self.webpackChunkblog_site||[]).push([[28],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,f=m["".concat(i,".").concat(h)]||m[h]||u[h]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5489:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return h}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],c={slug:"powershell-color-scheme",title:"Color for PowerShell",authors:["sky"],tags:["color","powershell"]},i=void 0,s={permalink:"/tech-epistle/powershell-color-scheme",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-25-powershell-color-scheme/index.md",source:"@site/blog/2022-05-25-powershell-color-scheme/index.md",title:"Color for PowerShell",description:"You can set choose color scheme for your Powershell either by switching to a preloaded schemes or create your own.",date:"2022-05-25T00:00:00.000Z",formattedDate:"May 25, 2022",tags:[{label:"color",permalink:"/tech-epistle/tags/color"},{label:"powershell",permalink:"/tech-epistle/tags/powershell"}],readingTime:1.17,truncated:!1,authors:[{name:"Sky",url:"https://github.com/skysrc",key:"sky"}],frontMatter:{slug:"powershell-color-scheme",title:"Color for PowerShell",authors:["sky"],tags:["color","powershell"]},nextItem:{title:"Use Profiles for PowerShell",permalink:"/tech-epistle/powershell-profiles"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can set choose color scheme for your Powershell either by switching to a preloaded schemes or create your own.  "),(0,l.kt)("p",null,"To add in a new cutomized color and set it as our choice of scheme :    "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launch your PowerShell")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launch Settings"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Ctrl + ,\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the side menu bar, click on 'Open JSON file'. This will launch editor on this 'settings.json' file.\n")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Scroll all the way down till you see entry for \"schemes\" and right after the bracket '[' put in json text below. Then click save and close the editor."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},' {\n    "background": "#282C34",\n    "black": "#000000",\n    "blue": "#007ACC",\n    "brightBlack": "#75715E",\n    "brightBlue": "#11A8CD",\n    "brightCyan": "#11A8CD",\n    "brightGreen": "#0DBC79",\n    "brightPurple": "#AE81FF",\n    "brightRed": "#DD6B65",\n    "brightWhite": "#F8F8F2",\n    "brightYellow": "#E6DB74",\n    "cursorColor": "#FFFFFF",\n    "cyan": "#11A8CD",\n    "foreground": "#D4D4D4",\n    "green": "#0DBC79",\n    "name": "myCustomScheme",\n    "purple": "#BC3FBC",\n    "red": "#F4423A",\n    "selectionBackground": "#FFFFFF",\n    "white": "#F8F8F2",\n    "yellow": "#E5E510"\n},\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now back to the Windows Terminal with the side bar, click on 'Defaults'.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On 'Additional settings' -> 'Appearance' -> 'Text' -> 'Color scheme'. Click on the drop down.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the drop down list you can select different scheme and you can see the preview of the selected scheme. For our case we will select 'myCustomScheme' then click 'Save' button on the bottom.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Done, now the terminal will display accord to your custom scheme. :)"))),(0,l.kt)("p",null,"Resource : ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes"},"Color schemes in Windows Terminal"),", ",(0,l.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/windows-terminal-themes-color-schemes-powershell-customize/"},"How to Design your Color Scheme in PowerShell Windows Terminal")))}h.isMDXComponent=!0}}]);