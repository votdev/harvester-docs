"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[53301],{38289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});a(67294);var n=a(3905);const r={sidebar_position:5,sidebar_label:"Rancher Manager",title:"Rancher Manager (Experimental)"},s=void 0,l={unversionedId:"advanced/addons/rancher-vcluster",id:"advanced/addons/rancher-vcluster",title:"Rancher Manager (Experimental)",description:"Available as of v1.2.0",source:"@site/docs/advanced/addons/rancher-vcluster.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/rancher-vcluster",permalink:"/v1.4/advanced/addons/rancher-vcluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/rancher-vcluster.md",tags:[],version:"current",lastUpdatedAt:1724398153,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Rancher Manager",title:"Rancher Manager (Experimental)"},sidebar:"api",previous:{title:"Harvester Seeder",permalink:"/v1.4/advanced/addons/seeder"},next:{title:"Managed DHCP",permalink:"/v1.4/advanced/addons/managed-dhcp"}},i={},d=[{value:"Installing rancher-vcluster",id:"installing-rancher-vcluster",level:2},{value:"Configuring rancher-vcluster",id:"configuring-rancher-vcluster",level:2}],o={toc:d},c="wrapper";function h({components:e,...t}){return(0,n.kt)(c,{...o,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/rancher-vcluster"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," addon allows you to run Rancher Manager as a workload on the underlying Harvester cluster and is implemented using ",(0,n.kt)("a",{parentName:"p",href:"https://www.vcluster.com/"},"vcluster"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(21161).Z,width:"1039",height:"577"})),(0,n.kt)("p",null,"The addon runs a nested K3s cluster in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," namespace and deploys Rancher to this cluster."),(0,n.kt)("p",null,"During the installation, the ingress for Rancher is synced to the Harvester cluster, allowing end users to access Rancher."),(0,n.kt)("h2",{id:"installing-rancher-vcluster"},"Installing rancher-vcluster"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," addon is not packaged with Harvester, but you can find it in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/experimental-addons"},"experimental-addons repo"),"."),(0,n.kt)("p",null,"Assuming you are using the Harvester kubeconfig, you can run the following commands to install the addon:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/harvester/experimental-addons/main/rancher-vcluster/rancher-vcluster.yaml\n")),(0,n.kt)("h2",{id:"configuring-rancher-vcluster"},"Configuring rancher-vcluster"),(0,n.kt)("p",null,"After installing the addon, you need to configure it from the Harvester UI as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,n.kt)("strong",{parentName:"li"},"Addons"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-vcluster")," addon and select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"li"},"Edit Config"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(18770).Z,width:"1212",height:"455"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Hostname")," field, enter a valid DNS record pointing to the Harvester VIP. This is essential as the vcluster ingress is synced to the parent Harvester cluster. A valid hostname is used to filter ingress traffic to the vcluster workload."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Bootstrap Password")," field, enter the bootstrap password for the new Rancher deployed on the vcluster.")),(0,n.kt)("p",null,"Once the addon is deployed, Rancher can take a few minutes to become available. "),(0,n.kt)("p",null,"You can then access Rancher via the hostname DNS record that you provided."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/v1.4/rancher/virtualization-management"},"Rancher Integration")," for more information."),(0,n.kt)("admonition",{title:"Disabling rancher-vcluster",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," addon is deployed on a ",(0,n.kt)("inlineCode",{parentName:"p"},"vcluster")," Statefulset that uses a Longhorn PVC."),(0,n.kt)("p",{parentName:"admonition"},"When ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," is disabled, the PVC ",(0,n.kt)("inlineCode",{parentName:"p"},"data-rancher-vcluster-0")," will remain in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," namespace."),(0,n.kt)("p",{parentName:"admonition"},"If you enable the addon again, the PVC is re-used, and Rancher will have the old state available again."),(0,n.kt)("p",{parentName:"admonition"},"If you want to wipe the data, ensure that the PVC is deleted.")))}h.isMDXComponent=!0},18770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VclusterConfig-56058fcc87dd56f9fcff7d6d92d2484b.png"},21161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);