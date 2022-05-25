"use strict";(self.webpackChunkblog_site=self.webpackChunkblog_site||[]).push([[714],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,h=f["".concat(s,".").concat(m)]||f[m]||u[m]||l;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9210:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={slug:"powershell-profiles",title:"Use Profiles for PowerShell",authors:["sky"],tags:["profiles","powershell"]},s=void 0,p={permalink:"/tech-epistle/powershell-profiles",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-13-powershell-profiles/index.md",source:"@site/blog/2022-05-13-powershell-profiles/index.md",title:"Use Profiles for PowerShell",description:"We can set variables, aliases, function and modules in a PowerShell session. With PowerShell profile, it let us configure all these in a file and save us from typing on each new PowerShell session.",date:"2022-05-13T00:00:00.000Z",formattedDate:"May 13, 2022",tags:[{label:"profiles",permalink:"/tech-epistle/tags/profiles"},{label:"powershell",permalink:"/tech-epistle/tags/powershell"}],readingTime:.93,truncated:!1,authors:[{name:"Sky",url:"https://github.com/skysrc",key:"sky"}],frontMatter:{slug:"powershell-profiles",title:"Use Profiles for PowerShell",authors:["sky"],tags:["profiles","powershell"]},prevItem:{title:"Color for PowerShell",permalink:"/tech-epistle/powershell-color-scheme"},nextItem:{title:"Customize Windows Terminal Font Face",permalink:"/tech-epistle/windows-terminal-font"}},c={authorsImageUrls:[void 0]},u=[],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We can set variables, aliases, function and modules in a PowerShell session. With PowerShell profile, it let us configure all these in a file and save us from typing on each new PowerShell session.  "),(0,l.kt)("p",null,"To create a PowerShell profile :    "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launch your PowerShell")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create PowerShell profile, command below will create a profile file when it's not created before"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"if (!(Test-Path -Path $PROFILE ))\n    { New-Item -Type File -Path $PROFILE -Force }\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To edit the profile"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"notepad $PROFILE  \n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To start each PowerShell session in a spcific directory path, add in this entry to the file"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Set-Location C:\\Any\\Directory\\You\\Want\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To add in aliases, example below we add in 'll' to work as 'ls' which is for listing the directory"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Set-Alias ll ls\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Save and exit the Notepad")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launch a new PowerShell session. You will see the starting directory path is what we had configured and inpupt 'll' command will list our directory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"We can do more fun stuff with profile by specifying function and module to be loaded for the session."))),(0,l.kt)("p",null,"Resource : ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/ise/how-to-use-profiles-in-windows-powershell-ise?view=powershell-7.2"},"How to Use Profiles in Windows PowerShell ISE")))}m.isMDXComponent=!0}}]);