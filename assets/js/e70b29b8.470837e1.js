"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[78530],{79186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});r(67294);var n=r(3905);const a={sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"Creating an RKE1 Kubernetes Cluster",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE1"],description:"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},l=void 0,s={unversionedId:"rancher/node/rke1-cluster",id:"version-v0.3/rancher/node/rke1-cluster",title:"Creating an RKE1 Kubernetes Cluster",description:"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v0.3/rancher/node/rke1-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke1-cluster",permalink:"/v0.3/rancher/node/rke1-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/node/rke1-cluster.md",tags:[],version:"v0.3",lastUpdatedAt:1724398153,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"Creating an RKE1 Kubernetes Cluster",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE1"],description:"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},sidebar:"api",previous:{title:"Harvester Node Driver",permalink:"/v0.3/rancher/node/node-driver"},next:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v0.3/rancher/node/rke2-cluster"}},i={},o=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create Node Template",id:"create-node-template",level:3},{value:"Create RKE1 Kubernetes Cluster",id:"create-rke1-kubernetes-cluster",level:3}],c={toc:o},d="wrapper";function u({components:e,...t}){return(0,n.kt)(d,{...c,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/rke1-cluster"})),(0,n.kt)("p",null,"Users can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1+")," using the built-in Harvester node driver."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rke1-cluster",src:r(55239).Z,width:"3570",height:"1554"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Harvester RKE1 node driver is in tech preview."),(0,n.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."))),(0,n.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your cloud credential name."),(0,n.kt)("li",{parentName:"ol"},'Select "Imported Harvester" or "External Harvester".'),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(97650).Z,width:"3582",height:"1406"})),(0,n.kt)("h3",{id:"create-node-template"},"Create Node Template"),(0,n.kt)("p",null,"You can use the Harvester node driver to create node templates and eventually node pools for your Kubernetes cluster."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Configure the  ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure ",(0,n.kt)("strong",{parentName:"li"},"Instance Options"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Configure the CPU, memory, and disk"),(0,n.kt)("li",{parentName:"ul"},"Select an OS image that is compatible with the ",(0,n.kt)("inlineCode",{parentName:"li"},"cloud-init")," config."),(0,n.kt)("li",{parentName:"ul"},"Select a network that the node driver is able to connect to; currently, only ",(0,n.kt)("inlineCode",{parentName:"li"},"VLAN")," is supported."),(0,n.kt)("li",{parentName:"ul"},"Enter the SSH User; the username will be used to ssh to nodes. For example, a default user of the Ubuntu cloud image will be ",(0,n.kt)("inlineCode",{parentName:"li"},"ubuntu"),"."))),(0,n.kt)("li",{parentName:"ol"},"Enter a ",(0,n.kt)("strong",{parentName:"li"},"RANCHER TEMPLATE")," name.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(64616).Z,width:"3120",height:"1848"})),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/cluster-provisioning/rke-clusters/node-pools/"},"nodes hosted by an infrastructure provider")," for more information."),(0,n.kt)("h3",{id:"create-rke1-kubernetes-cluster"},"Create RKE1 Kubernetes Cluster"),(0,n.kt)("p",null,"Users can create an RKE1 Kubernetes cluster from the ",(0,n.kt)("strong",{parentName:"p"},"Cluster Management")," page via the Harvester RKE1 node driver."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create")," button."),(0,n.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,n.kt)("strong",{parentName:"li"},"RKE1"),"."),(0,n.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Name Prefix")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Template")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"etcd")," and ",(0,n.kt)("strong",{parentName:"li"},"Control Plane")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-rke-harvester-cluster",src:r(23219).Z,width:"1919",height:"970"})))}u.isMDXComponent=!0},23219:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke-harvester-cluster-d8038687882cd19796516efe89c597c6.png"},97650:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-create-cloud-credentials-aff4e94b5cc164cc67fa7c67803db099.png"},64616:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-template-4d4e88bf75025e0eede053c1d57c1814.png"},55239:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-node-driver-e6038ae5d3644dc2e6cb75cbf31d903c.png"}}]);