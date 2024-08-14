"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[10880],{79153:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>n,toc:()=>s});t(67294);var i=t(3905);const a={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},o=void 0,n={unversionedId:"terraform/terraform-provider",id:"version-v0.3/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"Requirements",source:"@site/versioned_docs/version-v0.3/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/v0.3/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/terraform/terraform-provider.md",tags:[],version:"v0.3",lastUpdatedAt:1723091497,formattedLastUpdatedAt:"Aug 8, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"api",previous:{title:"Harvester CSI Driver",permalink:"/v0.3/rancher/csi-driver"},next:{title:"Installation",permalink:"/v0.3/troubleshooting/installation"}},l={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Provider",id:"install-the-provider",level:2},{value:"<strong>Option 1:</strong> Download and install the provider from the Terraform registry.",id:"option-1-download-and-install-the-provider-from-the-terraform-registry",level:3},{value:"<strong>Option 2:</strong> Build and install the provider manually.",id:"option-2-build-and-install-the-provider-manually",level:3},{value:"<strong>Building the provider:</strong>",id:"building-the-provider",level:4},{value:"<strong>Installing the provider:</strong>",id:"installing-the-provider",level:4},{value:"Using the provider",id:"using-the-provider",level:2}],d={toc:s},p="wrapper";function v({components:r,...e}){return(0,i.kt)(p,{...d,...e,components:r,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/terraform/terraform-provider"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.16 to build the provider plugin")),(0,i.kt)("h2",{id:"install-the-provider"},"Install the Provider"),(0,i.kt)("h3",{id:"option-1-download-and-install-the-provider-from-the-terraform-registry"},(0,i.kt)("strong",{parentName:"h3"},"Option 1:")," Download and install the provider from the Terraform ",(0,i.kt)("a",{parentName:"h3",href:"https://registry.terraform.io/providers/harvester/harvester/latest"},"registry"),"."),(0,i.kt)("p",null,"To install this provider, copy and paste this code into your Terraform configuration. Then, run terraform init."),(0,i.kt)("p",null,"Terraform 0.13+"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "0.2.8"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,i.kt)("p",null,"For more details, please refer to the Harvester provider ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"documentation"),"."),(0,i.kt)("h3",{id:"option-2-build-and-install-the-provider-manually"},(0,i.kt)("strong",{parentName:"h3"},"Option 2:")," Build and install the provider manually."),(0,i.kt)("h4",{id:"building-the-provider"},(0,i.kt)("strong",{parentName:"h4"},"Building the provider:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clone the repository using the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"git clone git@github.com:harvester/terraform-provider-harvester\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter the provider directory and build the provider; this will build the provider and put the provider binary in ",(0,i.kt)("inlineCode",{parentName:"p"},"./bin"),". Use the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd terraform-provider-harvester\nmake\n")))),(0,i.kt)("h4",{id:"installing-the-provider"},(0,i.kt)("strong",{parentName:"h4"},"Installing the provider:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The expected location for the Harvester provider for the target platform within one of the local search directories is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"registry.terraform.io/harvester/harvester/0.2.8/linux_amd64/terraform-provider-harvester_v0.2.8\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The default location for locally-installed providers will be one of the following, depending on the operating system under which you are running Terraform:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Windows: ",(0,i.kt)("inlineCode",{parentName:"li"},"%APPDATA%\\terraform.d\\plugins")),(0,i.kt)("li",{parentName:"ul"},"All other systems: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.terraform.d/plugins"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Place the provider into the plugin directory as in the following example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'version=0.2.8\narch=linux_amd64\nterraform_harvester_provider_bin=./bin/terraform-provider-harvester\n\nterraform_harvester_provider_dir="${HOME}/.terraform.d/plugins/registry.terraform.io/harvester/harvester/${version}/${arch}/"\nmkdir -p "${terraform_harvester_provider_dir}"\ncp ${terraform_harvester_provider_bin} "${terraform_harvester_provider_dir}/terraform-provider-harvester_v${version}"}\n')))),(0,i.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,i.kt)("p",null,"After placing the provider into your plugins directory,  run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it.\nMore information about provider-specific configuration options can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs directory")))}v.isMDXComponent=!0}}]);