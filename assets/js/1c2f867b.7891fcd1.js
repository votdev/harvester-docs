"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7118],{72379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});a(67294);var n=a(3905);const r={sidebar_position:8,sidebar_label:"Install Harvester Binaries Only",title:"Install Harvester Binaries Only",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],description:"To get the Harvester ISO, download it from the GitHub releases. During the installation, you can choose to install the binaries only."},i=void 0,s={unversionedId:"install/install-binaries-mode",id:"version-v1.2/install/install-binaries-mode",title:"Install Harvester Binaries Only",description:"To get the Harvester ISO, download it from the GitHub releases. During the installation, you can choose to install the binaries only.",source:"@site/versioned_docs/version-v1.2/install/install-binaries-mode.md",sourceDirName:"install",slug:"/install/install-binaries-mode",permalink:"/v1.2/install/install-binaries-mode",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/install/install-binaries-mode.md",tags:[],version:"v1.2",lastUpdatedAt:1723091497,formattedLastUpdatedAt:"Aug 8, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Install Harvester Binaries Only",title:"Install Harvester Binaries Only",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],description:"To get the Harvester ISO, download it from the GitHub releases. During the installation, you can choose to install the binaries only."},sidebar:"api",previous:{title:"Management Address",permalink:"/v1.2/install/management-address"},next:{title:"Air Gapped Environment",permalink:"/v1.2/airgap"}},o={},l=[{value:"Background",id:"background",level:3},{value:"Stream disk mode",id:"stream-disk-mode",level:3}],d={toc:l},h="wrapper";function m({components:e,...t}){return(0,n.kt)(h,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/install/install-binaries-mode"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Install Harvester binaries only")," mode allows you to install and configure binaries only, making it ideal for cloud and edge use cases."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"choose-installation-mode.png",src:a(68123).Z,width:"1152",height:"216"})),(0,n.kt)("h3",{id:"background"},"Background"),(0,n.kt)("p",null,"Currently when a new Harvester node is launched it needs to be the first node in the cluster or join an existing cluster.\nThese two modes are useful when you already know enough about the environment to install the Harvester node.\nHowever, for use cases such as bare-metal cloud providers and the edge, these installation modes load the OS and Harvester content to the node without letting you configure the network. Moreover, the K8s and networking configuration will not be applied."),(0,n.kt)("p",null,"If you choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Install Harvester binaries only"),", you will need to perform additional configuration after the first bootup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create/Join option for Harvester"),(0,n.kt)("li",{parentName:"ul"},"Management network interface details"),(0,n.kt)("li",{parentName:"ul"},"Cluster token"),(0,n.kt)("li",{parentName:"ul"},"Node password")),(0,n.kt)("p",null,"Then, the installer will apply the endpoint configuration and boot Harvester. No further reboots will be required."),(0,n.kt)("h3",{id:"stream-disk-mode"},"Stream disk mode"),(0,n.kt)("p",null,"Harvester has published a raw image artifact for pre-installed Harvester. The Harvester installer now allows streaming a pre-installed image directly to disk to support better integration with cloud providers."),(0,n.kt)("p",null,"On ",(0,n.kt)("inlineCode",{parentName:"p"},"Equinix Metal"),", you can use the following kernel arguments to use the streaming mode:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl root=live:http://${artifactEndpoint}/harvester-v1.2.0-rootfs-amd64.squashfs harvester.install.automatic=true harvester.scheme_version=1 harvester.install.device=/dev/vda  harvester.os.password=password harvester.install.raw_disk_image_path=http://${artifactEndpoint}/harvester-v1.2.0-amd64.raw harvester.install.mode=install console=tty1 harvester.install.tty=tty1 harvester.install.config_url=https://metadata.platformequinix.com/userdata harvester.install.management_interface.interfaces="name:enp1s0" harvester.install.management_interface.method=dhcp harvester.install.management_interface.bond_options.mode=balance-tlb harvester.install.management_interface.bond_options.miimon=100\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When streaming to disk, it is recommended to host the raw disk artifact closer to the targets, as the raw disk artifact is nearly 16G in size.")))}m.isMDXComponent=!0},68123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose-installation-mode-5940cde59cb99d8eb4368bc58a5fb434.png"}}]);