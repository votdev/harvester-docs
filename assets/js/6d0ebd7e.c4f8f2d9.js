"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[26111],{28373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>i});a(67294);var s=a(3905);const r={sidebar_position:13,sidebar_label:"FAQ",title:"FAQ"},o=void 0,n={unversionedId:"faq",id:"version-v0.3/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.",source:"@site/versioned_docs/version-v0.3/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v0.3/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/faq.md",tags:[],version:"v0.3",lastUpdatedAt:1724398153,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"FAQ",title:"FAQ"},sidebar:"api",previous:{title:"Operating System",permalink:"/v0.3/troubleshooting/os"},next:{title:"Glossary",permalink:"/v0.3/glossary"}},l={},i=[],d={toc:i},c="wrapper";function h({components:e,...t}){return(0,s.kt)(c,{...d,...t,components:e,mdxType:"MDXLayout"},(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/faq"})),(0,s.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"How can I ssh login to the Harvester node?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"What is the default login username and password of the Harvester dashboard?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # you will be promoted to set the default password when logging in for the first time\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"How can I access the kubeconfig file of the Harvester cluster?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# You can either download the kubeconfig file from the Harvester \n# dashboard or access it via one of the Harvester management nodes. E.g.,\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"harvester-kubeconfig.png",src:a(15538).Z,width:"2558",height:"631"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"How do I access the embedded Rancher dashboard?"),(0,s.kt)("p",{parentName:"li"},"Please refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v0.3/troubleshooting/harvester#access-embedded-rancher"},"troubleshooting section"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"How to install the qemu-guest-agent of a running VM."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init will only be executed once, reboot it after add the cloud-init config with the following command.\n$ cloud-init clean --logs --reboot\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean")))}h.isMDXComponent=!0},15538:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/harvester-kubeconfig-fa12690736b2f582146c8d26b60c3c02.png"}}]);