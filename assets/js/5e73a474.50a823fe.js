"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[20889],{29075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>o});a(67294);var i=a(3905);const n={sidebar_position:2,sidebar_label:"PCI Devices",title:"PCI Devices"},s=void 0,r={unversionedId:"advanced/addons/pcidevices",id:"advanced/addons/pcidevices",title:"PCI Devices",description:"Available as of v1.1.0",source:"@site/docs/advanced/addons/pcidevices.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/pcidevices",permalink:"/v1.4/advanced/addons/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/pcidevices.md",tags:[],version:"current",lastUpdatedAt:1727228763,formattedLastUpdatedAt:"Sep 25, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"PCI Devices",title:"PCI Devices"},sidebar:"api",previous:{title:"Addons",permalink:"/v1.4/advanced/addons"},next:{title:"VM Import",permalink:"/v1.4/advanced/addons/vmimport"}},c={},o=[{value:"Enabling Passthrough on a PCI Device",id:"enabling-passthrough-on-a-pci-device",level:2},{value:"Attaching PCI Devices to a VM",id:"attaching-pci-devices-to-a-vm",level:2},{value:"Using a passed-through PCI Device inside the VM",id:"using-a-passed-through-pci-device-inside-the-vm",level:2},{value:"Installing drivers for your PCI device inside the VM",id:"installing-drivers-for-your-pci-device-inside-the-vm",level:2},{value:"SRIOV Network Devices",id:"sriov-network-devices",level:2},{value:"USB Devices",id:"usb-devices",level:2},{value:"Enable Passthrough on a USB Device",id:"enable-passthrough-on-a-usb-device",level:3},{value:"Attach a USB Device to a Virtual Machine",id:"attach-a-usb-device-to-a-virtual-machine",level:3},{value:"View USB Devices Attached to a Virtual Machine",id:"view-usb-devices-attached-to-a-virtual-machine",level:3},{value:"Limitations",id:"limitations",level:3}],d={toc:o},l="wrapper";function p({components:e,...t}){return(0,i.kt)(l,{...d,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/pcidevices"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"PCIDevice")," in Harvester represents a host device with a PCI address.\nThe devices can be passed through the hypervisor to a VM by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim")," resource,\nor by using the UI to enable passthrough. Passing a device through the hypervisor means that\nthe VM can directly access the device, and effectively owns the device. A VM can even install\nits own drivers for that device."),(0,i.kt)("p",null,"This is accomplished by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon."),(0,i.kt)("p",null,"To use the PCI devices feature, users need to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon first."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(21161).Z,width:"1039",height:"577"})),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon is deployed successfully, it can take a few minutes for it to scan and the PCIDevice CRDs to become available.\n",(0,i.kt)("img",{src:a(63926).Z,width:"1854",height:"650"})),(0,i.kt)("h2",{id:"enabling-passthrough-on-a-pci-device"},"Enabling Passthrough on a PCI Device"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced -> PCI Devices")," page:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(10910).Z,width:"1440",height:"810"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search for your device by vendor name (e.g. NVIDIA, Intel, etc.) or device name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(73566).Z,width:"1440",height:"810"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the devices you want to enable for passthrough:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(51390).Z,width:"1440",height:"810"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then click ",(0,i.kt)("strong",{parentName:"p"},"Enable Passthrough")," and read the warning message. If you still want to enable these devices, click ",(0,i.kt)("strong",{parentName:"p"},"Enable")," and wait for all devices to be ",(0,i.kt)("inlineCode",{parentName:"p"},"Enabled"),"."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please do not use ",(0,i.kt)("inlineCode",{parentName:"p"},"host-owned")," PCI devices (e.g., management and VLAN NICs). Incorrect device allocation may cause damage to your cluster, including node failure.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(4432).Z,width:"1440",height:"810"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(17113).Z,width:"1440",height:"810"})))),(0,i.kt)("h2",{id:"attaching-pci-devices-to-a-vm"},"Attaching PCI Devices to a VM"),(0,i.kt)("p",null,"After enabling these PCI devices, you can navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Virtual Machines")," page and select ",(0,i.kt)("strong",{parentName:"p"},"Edit Config")," to pass these devices."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(14015).Z,width:"1440",height:"810"})),(0,i.kt)("p",null,"Select ",(0,i.kt)("strong",{parentName:"p"},"PCI Devices")," and use the ",(0,i.kt)("strong",{parentName:"p"},"Available PCI Devices")," drop-down. Select the devices you want to attach from the list displayed and then click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(66027).Z,width:"1440",height:"810"})),(0,i.kt)("h2",{id:"using-a-passed-through-pci-device-inside-the-vm"},"Using a passed-through PCI Device inside the VM"),(0,i.kt)("p",null,"Boot the VM up, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"lspci")," inside the VM, the attached PCI devices will show up, although the PCI address in the VM won't necessarily match the PCI address in the host. "),(0,i.kt)("h2",{id:"installing-drivers-for-your-pci-device-inside-the-vm"},"Installing drivers for your PCI device inside the VM"),(0,i.kt)("p",null,"This is just like installing drivers in the host. The PCI passthrough feature will bind the host device to the ",(0,i.kt)("inlineCode",{parentName:"p"},"vfio-pci")," driver, which gives VMs the ability to use their own drivers. ",(0,i.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"Here is a screenshot")," of NVIDIA drivers being installed in a VM. It includes a CUDA example that proves that the device drivers work."),(0,i.kt)("h2",{id:"sriov-network-devices"},"SRIOV Network Devices"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(16225).Z,width:"302",height:"318"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon can now scan network interfaces on the underlying hosts and check if they support SRIOV Virtual Functions (VFs). If a valid device is found, ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will generate a new ",(0,i.kt)("inlineCode",{parentName:"p"},"SRIOVNetworkDevice")," object."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(59369).Z,width:"2313",height:"357"})),(0,i.kt)("p",null,"To create VFs on a SriovNetworkDevice, you can click ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Enable")," and then define the ",(0,i.kt)("strong",{parentName:"p"},"Number of Virtual Functions"),".\n",(0,i.kt)("img",{src:a(14845).Z,width:"614",height:"309"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(63979).Z,width:"668",height:"289"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will define the VFs on the network interface and report the new PCI device status for the newly created VFs."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(45219).Z,width:"2319",height:"152"})),(0,i.kt)("p",null,"On the next re-scan, the ",(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will create the PCIDevices for VFs. This can take up to 1 minute."),(0,i.kt)("p",null,"You can now navigate to the ",(0,i.kt)("strong",{parentName:"p"},"PCI Devices")," page to view the new devices."),(0,i.kt)("p",null,"We have also introduced a new filter to help you filter PCI devices by the underlying network interface."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(60681).Z,width:"2326",height:"228"})),(0,i.kt)("p",null,"The newly created PCI device can be passed through to virtual machines like any other PCI device.\n",(0,i.kt)("img",{src:a(43621).Z,width:"2311",height:"442"})),(0,i.kt)("h2",{id:"usb-devices"},"USB Devices"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.4.0")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"USBDevice"),' resource in Harvester represents a USB device on the node. USB devices can be "passed through" by the hypervisor to allow direct access from VMs. This is accomplished through the ',(0,i.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," add-on. To use USB passthrough, you can either create a ",(0,i.kt)("inlineCode",{parentName:"p"},"USBDeviceClaim")," resource or enable the feature on the Harvester UI. "),(0,i.kt)("p",null,"USB passthrough is slightly different from PCI passthrough. For example, you can fully control a USB controller with four USB ports by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim"),". However, you can also create a ",(0,i.kt)("inlineCode",{parentName:"p"},"USBDeviceClaim")," to control only one USB port. The other three USB ports remain available to the node."),(0,i.kt)("h3",{id:"enable-passthrough-on-a-usb-device"},"Enable Passthrough on a USB Device"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,i.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,i.kt)("strong",{parentName:"p"},"USB Devices"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(43456).Z,width:"2221",height:"1279"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the device in the list."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(23149).Z,width:"2222",height:"1282"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the target device, and then select ",(0,i.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,i.kt)("strong",{parentName:"p"},"Enable Passthrough"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(45716).Z,width:"2209",height:"1283"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Read the confirmation message, and then click ",(0,i.kt)("strong",{parentName:"p"},"Enable"),". Allow some time for the device state to change to ",(0,i.kt)("strong",{parentName:"p"},"Enabled"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(41752).Z,width:"2216",height:"1282"})))),(0,i.kt)("h3",{id:"attach-a-usb-device-to-a-virtual-machine"},"Attach a USB Device to a Virtual Machine"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that passthrough is enabled on the target device.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Virtual Machines"),", and then create a virtual machine or edit the configuration of an existing virtual machine.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the virtual machine configuration screen, go to the ",(0,i.kt)("strong",{parentName:"p"},"USB Devices")," tab and then select a device from the ",(0,i.kt)("strong",{parentName:"p"},"Available USB Devices")," list. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(82964).Z,width:"2211",height:"1281"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create")," or ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("h3",{id:"view-usb-devices-attached-to-a-virtual-machine"},"View USB Devices Attached to a Virtual Machine"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start and then access the virtual machine.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"lsusb"),". This utility displays information about USB buses and attached devices."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:a(38537).Z,width:"600",height:"230"})))),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Virtual machines with attached USB devices cannot be live-migrated because the devices are bound to a specific node.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hot-plugging and replugging of USB devices is not supported. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubevirt/kubevirt/issues/11979"},"KubeVirt Issue #11979"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the device path changes when you reattach the device or reboot the node, you must create a new USBDeviceClaim to enable the device."))))}p.isMDXComponent=!0},63926:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/PcideviceEnabled-0360b54035ff09b417de7c295741b17d.png"},14845:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkDeviceEnable-da813b9d6089e04a7db22e8e854f01f0.png"},60681:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkDevicesFilter-64ec6f52634a226ff04c54d8d4dccd2e.png"},43621:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkDevicesFilterResult-59c6772dc178318eb91ab186f558ecd5.png"},16225:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkDevicesLink-fe6f72a776c8716d3500963f4def615c.png"},59369:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkDevicesList-07aa1c1929ed631a33a44fda291a5d63.png"},45219:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkDevicesVFStatus-056a48920d22af72bff4217c434bf4e6.png"},63979:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/SriovNetworkVFDefinition-df67600dbe4ac7119ff1099b631c130c.png"},10910:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},17113:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},4432:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},73566:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},51390:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},66027:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},14015:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},21161:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"},82964:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/attach-vm-efe92331ed377296293e5146d4353d31.png"},41752:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/enable-done-9f3e6f42166cb5acdc2e5548ac16141d.png"},43456:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/index-9467dd5cb71437bc518b7301c84f2446.png"},23149:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/search-1958186d420d6ddb960f38dab877ad59.png"},45716:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select-6e4072ee3d3fe43cadd2fdcae5bef9f3.png"},38537:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/usb-in-vm-6a6d9ff5bde0c90db71ec3ef9f6071f4.png"}}]);