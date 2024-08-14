"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[78937],{354:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>g,contentTitle:()=>k,default:()=>T,frontMatter:()=>u,metadata:()=>y,toc:()=>h});s(67294);var t=s(3905),m=s(54734),i=s(90238),n=s.n(i),l=s(36765),r=s(99473),p=s(50690),c=s(88337),d=s(48951),o=s(50551);const u={id:"read-namespaced-support-bundle",title:"Read a Namespaced Support Bundle",description:"Get a SupportBundle object.",sidebar_label:"Read a Namespaced Support Bundle",hide_title:!0,hide_table_of_contents:!0,api:"eJztmEtz2zYQx78KBpe0HVqy00ynVaeHuJNJM32k40cvjg4rcCUiJgkEu3Qta/jdO0tQEvW05aSXjE6UuAvgt7vAn+TONMOE9OBGX1beu8DqvCrTHEkPE50imWA9W1fqgX6LrEC1btFLudFHNNzTiXYeA4jnu1QPdEBI/4ICyYPBdGWMTrSHAAUyBll4pksoUA803oNhnWgri32qMEz1OsJl5qo8VZyhwvuGdiS/wHBPvZHL/HYBtmSwJSmTV8QYTsijsWNr1NhinpLK7S2qFwvGFxIDmQwL0IOZ5qkXpJFzOUKp6zrpYMoKT+S0pO4grzByykBMBbWBJA7W0xyIM5D8VoRBGShV6VhF6OmT2ZpLS+aBsw0wiVe5cZPBgOSqYGRAwE+VDZjqAYcKtywmqOWkKR0zBpnqBk4eTk9+GrbXDx9Oht9twDS53Uv0vtlBSpwVlKmCijNFxnlMFFUmU0Bq7IJihIIaDx+cDKEvyz2U2ci7kpBkgpenp3JZg/1dJ9q4krFksYL3uTXNtu9/JHGZbTLEM7JCe6PB238wkEyb6FtbplJij0aOnQ9ymNhGkI7nRlx1O3aboUCGFBhiFGOockGuEw15/n7cHLx9gE0RN2Biabestiz2prVONFvO5dbtj9Szrnd31ot1/xMZdD2s2+Cfh9qt0QbxSgE398ViOS1RWKIKry/+eMyzE1EG4Q5FYTJjY2gjZDjrrWjepQQXw2Tgig4IdDUa48rUSizUQYQQQDTIMhaHTN3NYcuVRKeNLOZAfBWgpGbxK7tjF4jbtU+BcadLgUQw2W4LCLRjmy/ztr+C0frZ1ft1nmepWp3osc1x594XI9mHrtGWjBMMOtFjFwrgeOuHV+Lug5sEJHrU/fuX88gfOVVP24MxgzGeg0Y2a61L3c/EAaH45V9gkx1176h7R9076t5XrntTKPKj1B2l7ih1R6n76qROxrw6Pdv86L0u5ZvcBfuA6TM+fzvBHP4OuWPwTiFe+DfhFMiZk3bUBDn2ADI90H3wlvpraem3aekvVI76s8Xvuk8xW6PYHIumWgQdTRUsTy+FJB6kcyBrOkwZs583cJrGTWOvE32OEDDs84wOEootx67xbKv62xxfvf77nRzqu/kDRLeRNPvQERdQLmVdXyCkCtSyN6dW+37r/ZnZst6PNADbGBjvue9zsKUAVKGpU8x880gU1rXcC33L3HnKiOOg20NaLcHcKkKWOWKZfjYbAeF1yOtabsfenMhiaglGucjgGHLCPTH+zx3GrUm6xWmn/dn0C6PUPQv8y7Uc98K2TdAl7VD+BCu4B+b8m4v2KfWt2tGf3EoyfzSW0y7HnLDZG4elsMPxWV3JZ9LGfd68QmQIqSjDzay1vzYGfTffG9Ir+V/o3ds3V7qu/wPIVkFb",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},k=void 0,y={unversionedId:"api/read-namespaced-support-bundle",id:"api/read-namespaced-support-bundle",title:"Read a Namespaced Support Bundle",description:"Get a SupportBundle object.",source:"@site/docs/api/read-namespaced-support-bundle.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-support-bundle",permalink:"/v1.4/api/read-namespaced-support-bundle",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"read-namespaced-support-bundle",title:"Read a Namespaced Support Bundle",description:"Get a SupportBundle object.",sidebar_label:"Read a Namespaced Support Bundle",hide_title:!0,hide_table_of_contents:!0,api:"eJztmEtz2zYQx78KBpe0HVqy00ynVaeHuJNJM32k40cvjg4rcCUiJgkEu3Qta/jdO0tQEvW05aSXjE6UuAvgt7vAn+TONMOE9OBGX1beu8DqvCrTHEkPE50imWA9W1fqgX6LrEC1btFLudFHNNzTiXYeA4jnu1QPdEBI/4ICyYPBdGWMTrSHAAUyBll4pksoUA803oNhnWgri32qMEz1OsJl5qo8VZyhwvuGdiS/wHBPvZHL/HYBtmSwJSmTV8QYTsijsWNr1NhinpLK7S2qFwvGFxIDmQwL0IOZ5qkXpJFzOUKp6zrpYMoKT+S0pO4grzByykBMBbWBJA7W0xyIM5D8VoRBGShV6VhF6OmT2ZpLS+aBsw0wiVe5cZPBgOSqYGRAwE+VDZjqAYcKtywmqOWkKR0zBpnqBk4eTk9+GrbXDx9Oht9twDS53Uv0vtlBSpwVlKmCijNFxnlMFFUmU0Bq7IJihIIaDx+cDKEvyz2U2ci7kpBkgpenp3JZg/1dJ9q4krFksYL3uTXNtu9/JHGZbTLEM7JCe6PB238wkEyb6FtbplJij0aOnQ9ymNhGkI7nRlx1O3aboUCGFBhiFGOockGuEw15/n7cHLx9gE0RN2Biabestiz2prVONFvO5dbtj9Szrnd31ot1/xMZdD2s2+Cfh9qt0QbxSgE398ViOS1RWKIKry/+eMyzE1EG4Q5FYTJjY2gjZDjrrWjepQQXw2Tgig4IdDUa48rUSizUQYQQQDTIMhaHTN3NYcuVRKeNLOZAfBWgpGbxK7tjF4jbtU+BcadLgUQw2W4LCLRjmy/ztr+C0frZ1ft1nmepWp3osc1x594XI9mHrtGWjBMMOtFjFwrgeOuHV+Lug5sEJHrU/fuX88gfOVVP24MxgzGeg0Y2a61L3c/EAaH45V9gkx1176h7R9076t5XrntTKPKj1B2l7ih1R6n76qROxrw6Pdv86L0u5ZvcBfuA6TM+fzvBHP4OuWPwTiFe+DfhFMiZk3bUBDn2ADI90H3wlvpraem3aekvVI76s8Xvuk8xW6PYHIumWgQdTRUsTy+FJB6kcyBrOkwZs583cJrGTWOvE32OEDDs84wOEootx67xbKv62xxfvf77nRzqu/kDRLeRNPvQERdQLmVdXyCkCtSyN6dW+37r/ZnZst6PNADbGBjvue9zsKUAVKGpU8x880gU1rXcC33L3HnKiOOg20NaLcHcKkKWOWKZfjYbAeF1yOtabsfenMhiaglGucjgGHLCPTH+zx3GrUm6xWmn/dn0C6PUPQv8y7Uc98K2TdAl7VD+BCu4B+b8m4v2KfWt2tGf3EoyfzSW0y7HnLDZG4elsMPxWV3JZ9LGfd68QmQIqSjDzay1vzYGfTffG9Ir+V/o3ds3V7qu/wPIVkFb",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Namespaced Persistent Volume Claim",permalink:"/v1.4/api/read-namespaced-persistent-volume-claim"},next:{title:"Read a Namespaced Upgrade",permalink:"/v1.4/api/read-namespaced-upgrade"}},g={},h=[{value:"Request",id:"request",level:2}],f={toc:h},b="wrapper";function T({components:e,...a}){return(0,t.kt)(b,{...f,...a,components:e,mdxType:"MDXLayout"},(0,t.kt)("h1",{className:"openapi__heading"},"Read a Namespaced Support Bundle"),(0,t.kt)(n(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace}/supportbundles/{name}",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"Get a SupportBundle object."),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"}),(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"exact",in:"query",description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"export",in:"query",description:"Should this value be exported. Export strips fields that a user can not specify.",schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.kt)(o.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"OK")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(o.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(o.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(o.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(o.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,t.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(o.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(o.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(o.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(o.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(o.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(o.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Unauthorized")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(o.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(o.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(o.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,t.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(o.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(o.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(o.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))))))))))}T.isMDXComponent=!0}}]);