"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[15645],{50511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});r(67294);var a=r(3905);const n={sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},i=void 0,s={unversionedId:"index",id:"version-v1.3/index",title:"Harvester Overview",description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix.",source:"@site/versioned_docs/version-v1.3/index.md",sourceDirName:".",slug:"/",permalink:"/v1.3/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/index.md",tags:[],version:"v1.3",lastUpdatedAt:1723091497,formattedLastUpdatedAt:"Aug 8, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},sidebar:"api",next:{title:"Deploy a High-Availability Cluster",permalink:"/v1.3/getting-started/deploy-ha-cluster"}},o={},l=[{value:"Harvester Architecture",id:"harvester-architecture",level:2},{value:"Harvester Features",id:"harvester-features",level:2},{value:"Harvester UI",id:"harvester-ui",level:2}],u={toc:l},c="wrapper";function d({components:e,...t}){return(0,a.kt)(c,{...u,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://harvesterhci.io/"},"Harvester")," is a modern, open, interoperable, ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"hyperconverged infrastructure (HCI)")," solution built on Kubernetes. It is an open-source alternative designed for operators seeking a ",(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/topics/cloud-native/"},"cloud-native")," HCI solution. Harvester runs on bare metal servers and provides integrated virtualization and distributed storage capabilities. In addition to traditional virtual machines (VMs), Harvester supports containerized environments automatically through integration with ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/integrations-in-rancher/harvester"},"Rancher"),". It offers a solution that unifies legacy virtualized infrastructure while enabling the adoption of containers from core to edge locations."),(0,a.kt)("h2",{id:"harvester-architecture"},"Harvester Architecture"),(0,a.kt)("p",null,"The Harvester architecture consists of cutting-edge open-source technologies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linux OS.")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/elemental-toolkit"},"Elemental")," for SUSE Linux Enterprise Micro 5.4 is at the core of Harvester and is an immutable Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Built on top of Kubernetes.")," ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," has become the predominant infrastructure language across all form factors, and Harvester is an HCI solution with Kubernetes under the hood."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Virtualization management with KubeVirt.")," ",(0,a.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"KubeVirt")," provides virtualization management using KVM on top of Kubernetes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage management with Longhorn.")," ",(0,a.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," provides distributed block storage and tiering."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Observability with Grafana and Prometheus.")," ",(0,a.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," and ",(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," provide robust monitoring and logging.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(76781).Z,width:"943",height:"486"})),(0,a.kt)("h2",{id:"harvester-features"},"Harvester Features"),(0,a.kt)("p",null,"Harvester is an enterprise-ready, easy-to-use infrastructure platform that leverages local, direct attached storage instead of complex external SANs. It utilizes Kubernetes API as a unified automation language across container and VM workloads. Some key features of Harvester include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy to get started.")," Since Harvester ships as a bootable appliance image, you can install it directly on a bare metal server with the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/releases"},"ISO image")," or automatically install it using ",(0,a.kt)("a",{parentName:"li",href:"/v1.3/install/pxe-boot-install"},"iPXE")," scripts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VM lifecycle management.")," Easily create, edit, clone, and delete VMs, including SSH-Key injection, cloud-init, and graphic and serial port console."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VM live migration.")," Move a VM to a different host or node with zero downtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VM backup, snapshot, and restore.")," Back up your VMs from NFS, S3 servers, or NAS devices. Use your backup to restore a failed VM or create a new VM on a different cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage management.")," Harvester supports distributed block storage and tiering. Volumes represent storage; you can easily create, edit, clone, or export a volume."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network management.")," Supports using a virtual IP (VIP) and multiple Network Interface Cards (NICs). If your VMs need to connect to the external network, create a VLAN or untagged network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Integration with Rancher.")," Access Harvester directly within Rancher through Rancher\u2019s Virtualization Management page and manage your VM workloads alongside your Kubernetes clusters.")),(0,a.kt)("h2",{id:"harvester-ui"},"Harvester UI"),(0,a.kt)("p",null,"Harvester provides a powerful and easy-to-use web-based interface for visualizing and managing your infrastructure. Once you install Harvester, you can access the IP address for the Harvester UI from the node's terminal."),(0,a.kt)("div",{class:"text-center"},(0,a.kt)("iframe",{width:"99%",height:"450",src:"https://www.youtube.com/embed/Ngsk7m6NYf4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}d.isMDXComponent=!0},76781:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"}}]);