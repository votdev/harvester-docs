"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[17462],{65522:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>k,default:()=>N,frontMatter:()=>y,metadata:()=>h,toc:()=>g});t(67294);var s=t(3905),i=t(54734),m=t(90238),n=t.n(m),l=t(36765),p=t(99473),r=t(50690),c=t(88337),o=t(48951),d=t(50551);const y={id:"patch-namespaced-key-pair",title:"Patch a Namespaced Key Pair",description:"Patch a KeyPair object.",sidebar_label:"Patch a Namespaced Key Pair",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/iucPfUBSXanh5Y329MZZzytNbHdi6zDilyJiEkAAUAliob/PbMA9LIktnGiCyFgH9++dw0eFw7yCTw83GZ3tHIwFVCSK6w0XmoFOYzRF1WG/DpGaTM9+0CFH4IAbcgiU70rIQfDdP9gQ85gQWUiBwGWPrbk/LUuV5CvodDKk/J8RGNqWQQRow9Oq0GQ8Ssf+dkVFTXIJ78yBDlE1SDAS1/zxcsfbij1cHk5DCih68SB0Ibsgn6A1C5aIS2VkHvbUrhwRitHjkX9dnHBn0PP3d+B6DO3H81O4QTQyH/JOhYr4EWqEgQ4QwVHy1iOg5cRyB7lTqbzVqoFdIn31ENDHkv0GK2YY1szZHZnXd/PIZ/0A1TY0DGYcHtKm9qkyYnX7lQg7oPSv8kjdNMuGf82qKad1bK4o9Ux3t3TESyxUwUHGCu0S3KebFXICHZGHi+HKf8fGGiE7NG37htAH2IrtColp47bA4fW4goESE/Nt4je90fCJSLRkU9qdP7RonJB+aM8E1EmezIlejpL0pBzuDj9ZgndmZTd+a0vIgn+98ftZuNnjlonYC7VguzYyljD55P1vxIhmhGF/k8e7jydgN8vLo+by5PC1lfayi9UvqHNbA0IGgxabMiTdSFdYt3GjwCpYnev4PVo4G6f6XnmK8osOd3aguB1qxRnlbNe78myqAkOvlwM/pym7/PzYPoLu/cATGwZfYhin8iYOENVZuyjzBXakMhcy3PMZXNtM0/YuEBhrGYW92NxT0NHrfR2MEamCnIYoZFu9CryoxT50dZMN1pvz93ohVYGpU2XHbd/Klor/eqBQcZSvUYniz24lfcGkhn8fxbeOwHXhJZsH2Uk4NTgDHq/m+B/fcbGcO5yg5FqroOUlM63G6Oyq/E79uhyM4og2cfajXa+QbUbENsVY7c98LaRpf3hIMJ7+0PPZpLM8vTZj0yNUrHe1tahyYcwhJnKEF8FgkEnqHtjignz/QzcxGNzz32z0s6z4PV6ho6ebN11fP2xJbuCfDIVsEQrccaumqyhlI7PJeRzrB312PnT+5SYP2dnKu6kvZsZoXhCLLFu+V/Evilurq834fiuOnsj2uj7MEsrwpITeLJO7zcR5OCRpez4+xZMtj0yXxUFGd/DBgf1PL56vLkFAbO00Da6ZCaLn7iH4CfI4RmeISzI24Ed7nmaqkUbhiBEwfz7Crjj82w=",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},k=void 0,h={unversionedId:"api/patch-namespaced-key-pair",id:"version-v1.3/api/patch-namespaced-key-pair",title:"Patch a Namespaced Key Pair",description:"Patch a KeyPair object.",source:"@site/versioned_docs/version-v1.3/api/patch-namespaced-key-pair.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-key-pair",permalink:"/v1.3/api/patch-namespaced-key-pair",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"patch-namespaced-key-pair",title:"Patch a Namespaced Key Pair",description:"Patch a KeyPair object.",sidebar_label:"Patch a Namespaced Key Pair",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/iucPfUBSXanh5Y329MZZzytNbHdi6zDilyJiEkAAUAliob/PbMA9LIktnGiCyFgH9++dw0eFw7yCTw83GZ3tHIwFVCSK6w0XmoFOYzRF1WG/DpGaTM9+0CFH4IAbcgiU70rIQfDdP9gQ85gQWUiBwGWPrbk/LUuV5CvodDKk/J8RGNqWQQRow9Oq0GQ8Ssf+dkVFTXIJ78yBDlE1SDAS1/zxcsfbij1cHk5DCih68SB0Ibsgn6A1C5aIS2VkHvbUrhwRitHjkX9dnHBn0PP3d+B6DO3H81O4QTQyH/JOhYr4EWqEgQ4QwVHy1iOg5cRyB7lTqbzVqoFdIn31ENDHkv0GK2YY1szZHZnXd/PIZ/0A1TY0DGYcHtKm9qkyYnX7lQg7oPSv8kjdNMuGf82qKad1bK4o9Ux3t3TESyxUwUHGCu0S3KebFXICHZGHi+HKf8fGGiE7NG37htAH2IrtColp47bA4fW4goESE/Nt4je90fCJSLRkU9qdP7RonJB+aM8E1EmezIlejpL0pBzuDj9ZgndmZTd+a0vIgn+98ftZuNnjlonYC7VguzYyljD55P1vxIhmhGF/k8e7jydgN8vLo+by5PC1lfayi9UvqHNbA0IGgxabMiTdSFdYt3GjwCpYnev4PVo4G6f6XnmK8osOd3aguB1qxRnlbNe78myqAkOvlwM/pym7/PzYPoLu/cATGwZfYhin8iYOENVZuyjzBXakMhcy3PMZXNtM0/YuEBhrGYW92NxT0NHrfR2MEamCnIYoZFu9CryoxT50dZMN1pvz93ohVYGpU2XHbd/Klor/eqBQcZSvUYniz24lfcGkhn8fxbeOwHXhJZsH2Uk4NTgDHq/m+B/fcbGcO5yg5FqroOUlM63G6Oyq/E79uhyM4og2cfajXa+QbUbENsVY7c98LaRpf3hIMJ7+0PPZpLM8vTZj0yNUrHe1tahyYcwhJnKEF8FgkEnqHtjignz/QzcxGNzz32z0s6z4PV6ho6ebN11fP2xJbuCfDIVsEQrccaumqyhlI7PJeRzrB312PnT+5SYP2dnKu6kvZsZoXhCLLFu+V/Evilurq834fiuOnsj2uj7MEsrwpITeLJO7zcR5OCRpez4+xZMtj0yXxUFGd/DBgf1PL56vLkFAbO00Da6ZCaLn7iH4CfI4RmeISzI24Ed7nmaqkUbhiBEwfz7Crjj82w=",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Namespaced Cluster Network",permalink:"/v1.3/api/patch-namespaced-cluster-network"},next:{title:"Patch a Namespaced Network Attachment Definition",permalink:"/v1.3/api/patch-namespaced-network-attachment-definition"}},u={},g=[{value:"Request",id:"request",level:2}],b={toc:g},f="wrapper";function N({components:e,...a}){return(0,s.kt)(f,{...b,...a,components:e,mdxType:"MDXLayout"},(0,s.kt)("h1",{className:"openapi__heading"},"Patch a Namespaced Key Pair"),(0,s.kt)(n(),{method:"patch",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace}/keypairs/{name}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Patch a KeyPair object."),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object"))))),(0,s.kt)(d.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("span",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"object")))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"publicKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"status"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!1,name:"fingerPrint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "publicKey": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "fingerPrint": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);