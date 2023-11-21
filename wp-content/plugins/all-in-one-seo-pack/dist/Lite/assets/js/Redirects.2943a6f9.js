import{e as $}from"./links.28fcc512.js";import{C as b}from"./Index.aca71511.js";import{C as y}from"./Blur.f4710b2c.js";import{C as k}from"./Card.3daf7a6f.js";import{C as S}from"./Table.7a6ebda7.js";import{r as n,o as l,c as g,b as _,w as o,d as s,f as p,D as h,z as m,n as x}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_ as C}from"./_plugin-vue_export-helper.a6f24833.js";import{C as A}from"./Index.6783501d.js";import{R as E}from"./RequiredPlans.4ffe01e2.js";const U={components:{CoreAddRedirection:b,CoreBlur:y,CoreCard:k,CoreWpTable:S},props:{noCoreCard:Boolean},data(){return{strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td),searchUrls:this.$t.__("Search URLs",this.$td)},bulkOptions:[{label:"",value:""}]}},computed:{columns(){return[{slug:"source_url",label:this.$t.__("Source URL",this.$td)},{slug:"target_url",label:this.$t.__("Target URL",this.$td)},{slug:"hits",label:this.$t.__("Hits",this.$td),width:"97px"},{slug:"type",label:this.$t.__("Type",this.$td),width:"100px"},{slug:"group",label:this.$t.__("Group",this.$td),width:"150px"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"80px"}]},additionalFilters(){return[{label:this.$t.__("Filter by Group",this.$td),name:"group",options:[{label:this.$t.__("All Groups",this.$td),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]}}},v={class:"aioseo-redirects-blur"};function T(e,R,r,d,t,c){const a=n("core-add-redirection"),i=n("core-blur"),u=n("core-card"),f=n("core-wp-table");return l(),g("div",v,[r.noCoreCard?p("",!0):(l(),_(u,{key:0,slug:"addNewRedirection","header-text":t.strings.addNewRedirection,noSlide:!0},{default:o(()=>[s(i,null,{default:o(()=>[s(a,{type:e.$constants.REDIRECT_TYPES[0].value,query:e.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})]),_:1},8,["header-text"])),r.noCoreCard?(l(),_(i,{key:1},{default:o(()=>[s(a,{type:e.$constants.REDIRECT_TYPES[0].value,query:e.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0},null,8,["type","query"])]),_:1})):p("",!0),s(i,null,{default:o(()=>[s(f,{filters:[],totals:{total:0,pages:0,page:1},columns:c.columns,rows:[],"search-label":t.strings.searchUrls,"bulk-options":t.bulkOptions,"additional-filters":c.additionalFilters},null,8,["columns","search-label","bulk-options","additional-filters"])]),_:1})])}const w=C(U,[["render",T]]),B={setup(){return{licenseStore:$()}},components:{Blur:w,Cta:A,RequiredPlans:E},props:{noCoreCard:Boolean,parentComponentContext:String},data(){return{strings:{ctaButtonText:this.$t.__("Unlock Redirects",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Redirects is a %1$s Feature",this.$td),"PRO"),serverRedirects:this.$t.__("Fast Server Redirects",this.$td),automaticRedirects:this.$t.__("Automatic Redirects",this.$td),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$td),monitoring404:this.$t.__("404 Monitoring",this.$td),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$td),siteAliases:this.$t.__("Site Aliases",this.$td),redirectsDescription:this.$t.__("Our Redirection Manager lets you easily create and manage redirects for broken links to avoid confusing search engines and users and prevents losing backlinks.",this.$td)}}}};function P(e,R,r,d,t,c){const a=n("blur"),i=n("required-plans"),u=n("cta");return l(),g("div",{class:x({"aioseo-redirects":!0,"core-card":!r.noCoreCard})},[s(a,{noCoreCard:r.noCoreCard},null,8,["noCoreCard"]),s(u,{"cta-link":e.$links.getPricingUrl("redirects","redirects-upsell",r.parentComponentContext?r.parentComponentContext:null),"button-text":t.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("redirects",r.parentComponentContext?r.parentComponentContext:null,e.$isPro?"pricing":"liteUpgrade"),"feature-list":[t.strings.serverRedirects,t.strings.automaticRedirects,t.strings.redirectMonitoring,t.strings.monitoring404,t.strings.fullSiteRedirects,t.strings.siteAliases],"hide-bonus":!d.licenseStore.isUnlicensed},{"header-text":o(()=>[h(m(t.strings.ctaHeader),1)]),description:o(()=>[s(i,{addon:"aioseo-redirects"}),h(" "+m(t.strings.redirectsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])],2)}const Y=C(B,[["render",P]]);export{Y as R};
