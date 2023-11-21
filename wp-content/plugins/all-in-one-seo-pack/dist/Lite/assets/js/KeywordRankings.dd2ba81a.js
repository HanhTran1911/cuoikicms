import{A as x,e as B,d as O}from"./links.28fcc512.js";import{C as N}from"./Blur.f4710b2c.js";import{C as E}from"./Card.3daf7a6f.js";import{G as q,a as G}from"./Row.256ac4c7.js";import{G as j,S as V}from"./SeoStatisticsOverview.98ebd5cc.js";import{r as n,o as d,c as k,d as c,f as b,b as S,w as i,a as g,g as D,z as p,D as w,e as R,n as W}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_ as C}from"./_plugin-vue_export-helper.a6f24833.js";import{K as z}from"./KeywordsGraph.0803837e.js";import{n as L}from"./numbers.c7cb4085.js";import{d as K}from"./isArrayLikeObject.10b615a9.js";import"./index.c39be324.js";import{C as U}from"./Index.6783501d.js";import"./default-i18n.3881921e.js";import"./constants.44daa6bb.js";import"./TruSeoHighlighter.4503f163.js";/* empty css                                              */import{W as J}from"./WpTable.922ac963.js";import{P as A}from"./PostTypes.797a4244.js";import{S as H,T as Q,c as X,L as Y}from"./Table.22fad4d0.js";import{C as Z}from"./Tooltip.0e57efe0.js";import{C as M}from"./Table.7a6ebda7.js";import{C as tt,a as et}from"./Caret.4d98c50a.js";import{R as st}from"./RequiredPlans.4ffe01e2.js";/* empty css                                            *//* empty css                                              */import"./Slide.5fb4a175.js";import"./postContent.025728d5.js";import"./cleanForSlug.a67f7e84.js";import"./_stringToArray.a4422725.js";import"./Ellipse.60ee808e.js";import"./toFinite.c2274946.js";import"./_arrayEach.56a9f647.js";import"./_getAllKeys.4291a623.js";import"./_getTag.4ca3d6f0.js";import"./license.5c282403.js";import"./upperFirst.d65414ba.js";import"./vue.runtime.esm-bundler.49781f74.js";import"./addons.87e6a98a.js";const it={setup(){return{searchStatisticsStore:x()}},components:{Graph:j},computed:{series(){var h,r;if(!((r=(h=this.searchStatisticsStore.data)==null?void 0:h.keywords)!=null&&r.distribution))return[];const t=this.searchStatisticsStore.data.keywords.distribution;return[{name:this.$t.__("Keywords",this.$td),data:[{x:this.$t.__("Top 3 Position",this.$td),y:t.top3,fillColor:"#005AE0"},{x:this.$t.__("4-10 Position",this.$td),y:t.top10,fillColor:"#00AA63"},{x:this.$t.__("11-50 Position",this.$td),y:t.top50,fillColor:"#F18200"},{x:this.$t.__("50-100 Position",this.$td),y:t.top100,fillColor:"#DF2A4A"}]}]}}},ot={class:"aioseo-search-statistics-keywords-distribution-graph"};function rt(t,h,r,l,e,a){const u=n("graph");return d(),k("div",ot,[c(u,{series:a.series,loading:l.searchStatisticsStore.loading.keywords,preset:"keywordsDistribution"},null,8,["series","loading"])])}const nt=C(it,[["render",rt]]);const at={setup(){return{searchStatisticsStore:x()}},components:{CoreLoader:tt,CoreWpTable:M,Statistic:H},mixins:[A],props:{index:{type:Number,required:!0},postDetail:{type:Boolean,required:!1,default:!1}},data(){return{numbers:L,loading:!1}},computed:{postColumns(){return[{slug:"post_title",label:this.$t.__("Title",this.$td),width:"100%"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"120px"},{slug:"ctr",label:this.$t.__("Avg. CTR",this.$td),width:"120px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"120px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"120px"}]},keywords(){return this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows:this.searchStatisticsStore.data.keywords.paginated.rows},row(){return this.keywords[this.index]}},methods:{openPostDetail(t){this.$router.push({path:"/post-detail",query:{postId:t.postId,previousRoute:this.$route.name}})}},mounted(){var t,h;!this.row||(h=(t=this.row)==null?void 0:t.pages)!=null&&h.length||(this.loading=!0,this.searchStatisticsStore.getPagesByKeywords([this.row.keyword]).then(r=>{this.loading=!1;const l=r[this.row.keyword];l&&(this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows[this.index].pages=Object.values(l).slice(0,10):this.searchStatisticsStore.data.keywords.paginated.rows[this.index].pages=Object.values(l).slice(0,10))}))}},lt={class:"keyword-inner"},ct={key:0,class:"keyword-inner-loading"},dt={class:"post-title"},ht=["onClick"],pt={key:1,class:"post-title"},ut={key:0,class:"row-actions"},_t=["href"],ft=["href"];function gt(t,h,r,l,e,a){const u=n("core-loader"),f=n("statistic"),m=n("core-wp-table");return d(),k("div",lt,[e.loading?(d(),k("div",ct,[c(u,{dark:""})])):b("",!0),a.row.pages&&!e.loading?(d(),S(m,{ref:"table",class:"posts-table",key:1,columns:a.postColumns,rows:a.row.pages,"show-header":!1,"show-bulk-actions":!1,"show-table-footer":!1},{post_title:i(({row:s})=>[g("div",dt,[s.postId?(d(),k("a",{key:0,href:"#",onClick:D(P=>a.openPostDetail(s),["prevent"])},p(s.postTitle),9,ht)):(d(),k("span",pt,p(s.postTitle),1))]),s.postId?(d(),k("div",ut,[g("span",null,[g("a",{class:"view",href:s.context.permalink,target:"_blank"},[g("span",null,p(t.viewPost(s.context.postType.singular)),1)],8,_t),w(" | ")]),g("span",null,[g("a",{class:"edit",href:s.context.editLink,target:"_blank"},[g("span",null,p(t.editPost(s.context.postType.singular)),1)],8,ft)])])):b("",!0)]),clicks:i(({row:s})=>[w(p(e.numbers.compactNumber(s.clicks)),1)]),ctr:i(({row:s})=>[w(p(s.ctr)+"% ",1)]),impressions:i(({row:s})=>[w(p(e.numbers.compactNumber(s.impressions)),1)]),position:i(({row:s})=>[s.difference.comparison?(d(),S(f,{key:0,type:"position",total:s.position,difference:s.difference.position},null,8,["total","difference"])):b("",!0)]),_:1},8,["columns","rows"])):b("",!0)])}const mt=C(at,[["render",gt]]);const wt={setup(){return{licenseStore:B(),searchStatisticsStore:x(),settingsStore:O()}},components:{CoreTooltip:Z,CoreWpTable:M,Cta:U,KeywordInner:mt,Statistic:H,SvgCaret:et},mixins:[A,J,Q],data(){return{numbers:L,tableId:"aioseo-search-statistics-keywords-table",activeRow:-1,showUpsell:!1,isPreloading:!1,isFetching:!1,interval:null,sortableColumns:[],strings:{position:this.$t.__("Position",this.$td),ctaButtonText:this.$t.__("Unlock Keyword Tracking",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Keyword Tracking is a %1$s Feature",this.$td),"PRO")}}},props:{keywords:Object,loading:{type:Boolean,default(){return!1}},showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,columns:{type:Array,default(){return["keyword","clicks","ctr","impressions","position","diffPosition","buttons"]}},appendColumns:{type:Object,default(){return{}}},postDetail:{type:Boolean,default(){return!1}},refreshOnLoad:{type:Boolean,default(){return!0}},page:{type:String,default(){return""}}},computed:{changeItemsPerPageSlug(){return this.postDetail?"searchStatisticsPostDetailKeywords":"searchStatisticsKeywordRankings"},allColumns(){var r,l;const t=X(this.columns),h=((l=(r=this.keywords)==null?void 0:r.filters)==null?void 0:l.find(e=>e.active))||{};return this.appendColumns[h.slug||"all"]&&t.push(this.appendColumns[h.slug||"all"]),t.map(e=>(e.endsWith("Sortable")&&(e=e.replace("Sortable",""),this.sortableColumns.push(e)),e))},tableColumns(){return[{slug:"keyword",label:this.$t.__("Keyword",this.$td)},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px"},{slug:"ctr",label:this.$t.__("Avg. CTR",this.$td),width:"100px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"120px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"85px"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"},{slug:"buttons",label:"",width:this.hasSlot("buttons")?"240px":"40px"}].filter(t=>this.allColumns.includes(t.slug)).map(t=>(t.sortable=this.isSortable&&this.sortableColumns.includes(t.slug),t.sortable&&(t.sortDir=t.slug===this.orderBy?this.orderDir:"asc",t.sorted=t.slug===this.orderBy),t))},isSortable(){return this.filter==="all"&&this.$isPro&&!this.licenseStore.isUnlicensed}},methods:{decodeHTMLEntities:K,isRowActive(t){return t===this.activeRow},toggleRow(t){if(this.activeRow===t){this.activeRow=-1;return}this.activeRow=t},fetchData(t){return this.isPreloading=!1,this.isFetching=!0,this.page!==""&&(t={...t,page:this.page}),this.postDetail?this.searchStatisticsStore.updatePostDetailKeywords(t).finally(()=>{this.isFetching=!1}):this.searchStatisticsStore.updateKeywords(t).finally(()=>{this.isFetching=!1})},hasSlot(t="default"){return!!this.$slots[t]},shouldLimitText(t){return 120<K(t).length},maybePreloadPages(){if(!(!this.searchStatisticsStore.isConnected||this.isPreloading)){if(this.isFetching&&!this.interval){this.interval=setInterval(()=>{this.isFetching||(clearInterval(this.interval),this.maybePreloadPages())},100);return}this.isPreloading=!0,this.preloadPages().then(()=>{this.isPreloading=!1})}},preloadPages(){var e,a,u,f,m;let t=((a=(e=this.searchStatisticsStore.data.keywords)==null?void 0:e.paginated)==null?void 0:a.rows)||[];this.postDetail&&(t=((m=(f=(u=this.searchStatisticsStore.data.postDetail)==null?void 0:u.keywords)==null?void 0:f.paginated)==null?void 0:m.rows)||[]);const h=[];t.forEach(s=>{s.pages||h.push(s.keyword)});const r=[];for(let s=0;s<h.length;s+=10)r.push(h.slice(s,s+10));const l=[];return r.forEach(s=>{l.push(new Promise(P=>{this.searchStatisticsStore.getPagesByKeywords(s).then($=>{Object.entries($).forEach(T=>{const[o,_]=T,y=t.findIndex(I=>I.keyword===o);if(y===-1)return;const v=Object.values(_).slice(0,10);this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows[y].pages=v:this.searchStatisticsStore.data.keywords.paginated.rows[y].pages=v})}).finally(()=>{P()})}))}),Promise.all(l)}},mounted(){this.maybePreloadPages()},updated(){this.maybePreloadPages()}},yt={class:"aioseo-search-statistics-keywords-table"},kt={class:"keyword"},bt=["onClick"],St=["onClick"],Pt={class:""};function $t(t,h,r,l,e,a){const u=n("core-tooltip"),f=n("statistic"),m=n("svg-caret"),s=n("base-button"),P=n("keyword-inner"),$=n("cta"),T=n("core-wp-table");return d(),k("div",yt,[c(T,{ref:"table",class:"keywords-table",id:e.tableId,columns:a.tableColumns,rows:Object.values(r.keywords.rows),totals:r.keywords.totals,filters:r.keywords.filters,"additional-filters":r.keywords.additionalFilters,loading:r.loading,"initial-page-number":t.pageNumber,"initial-search-term":t.searchTerm,"initial-items-per-page":l.settingsStore.settings.tablePagination[a.changeItemsPerPageSlug],"show-header":r.showHeader,"show-bulk-actions":!1,"show-table-footer":r.showTableFooter,"show-items-per-page":r.showItemsPerPage,"show-pagination":"","blur-rows":e.showUpsell,onFilterTable:t.processFilter,onProcessAdditionalFilters:t.processAdditionalFilters,onPaginate:t.processPagination,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:t.processSearch,onSortColumn:t.processSort},{keyword:i(({row:o,index:_,editRow:y})=>[g("div",kt,[a.shouldLimitText(o.keyword)?(d(),S(u,{key:0},{tooltip:i(()=>[w(p(a.decodeHTMLEntities(o.keyword)),1)]),default:i(()=>[g("a",{class:"limit-line",href:"#",onClick:D(v=>{y(_),a.toggleRow(_)},["prevent"])},p(a.decodeHTMLEntities(o.keyword)),9,bt)]),_:2},1024)):(d(),k("a",{key:1,href:"#",onClick:D(v=>{y(_),a.toggleRow(_)},["prevent"])},p(a.decodeHTMLEntities(o.keyword)),9,St))])]),clicks:i(({row:o})=>[w(p(o.clicks),1)]),ctr:i(({row:o})=>[w(p(e.numbers.compactNumber(o.ctr))+"% ",1)]),impressions:i(({row:o})=>[w(p(e.numbers.compactNumber(o.impressions)),1)]),position:i(({row:o})=>[w(p(Math.round(o.position).toFixed(0)),1)]),diffPosition:i(({row:o})=>[o.difference.comparison?(d(),S(f,{key:0,type:"position",difference:o.difference.position,showCurrent:!1,"tooltip-offset":"-100px,0"},null,8,["difference"])):b("",!0)]),diffDecay:i(({row:o})=>[o.difference.comparison?(d(),S(f,{key:0,type:"decay",difference:o.difference.decay,showCurrent:!1,"tooltip-offset":"-100px,0"},null,8,["difference"])):b("",!0)]),buttons:i(({row:o,index:_,column:y,editRow:v})=>[g("div",Pt,[R(t.$slots,"buttons",{row:o,column:y,index:_}),c(s,{type:"gray",class:W(["toggle-row-button",{active:a.isRowActive(_)}]),onClick:I=>{v(_),a.toggleRow(_)}},{default:i(()=>[c(m)]),_:2},1032,["class","onClick"])])]),"edit-row":i(({index:o})=>[c(P,{index:o,postDetail:r.postDetail},null,8,["index","postDetail"])]),cta:i(()=>[e.showUpsell?(d(),S($,{key:0,"cta-link":t.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("search-statistics","search-statistics-upsell",t.$isPro?"pricing":"liteUpgrade"),"hide-bonus":!l.licenseStore.isUnlicensed},{"header-text":i(()=>[w(p(e.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link","hide-bonus"])):b("",!0)]),tablenav:i(()=>[R(t.$slots,"tablenav")]),_:3},8,["id","columns","rows","totals","filters","additional-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const vt=C(wt,[["render",$t]]),Ct={setup(){return{searchStatisticsStore:x()}},components:{CoreBlur:N,CoreCard:E,GridColumn:q,GridRow:G,KeywordsDistributionGraph:nt,KeywordsGraph:z,KeywordsTable:vt,SeoStatisticsOverview:V},data(){return{strings:{keywordPositionsCard:this.$t.__("Keyword Positions",this.$td),keywordPositionsTooltip:this.$t.__("This graph is a visual representation of how well <strong>keywords are ranking in search results over time</strong> based on their position and average CTR. This can help you understand the performance of keywords and identify any trends or fluctuations.",this.$td),keywordPerformanceCard:this.$t.__("Keyword Performance",this.$td),keywordPerformanceTooltip:this.$t.__("This table displays the performance of keywords that your site ranks for over time, including metrics such as impressions, click-through rate, and average position in search results. It allows for easy analysis of how keywords are performing and identification of any underperforming keywords that may need to be optimized or replaced.",this.$td)},defaultKeywords:{rows:[],totals:{page:0,pages:0,total:0}}}}},Tt={class:"aioseo-search-statistics-dashboard"},xt=["innerHTML"],Dt=["innerHTML"];function It(t,h,r,l,e,a){const u=n("seo-statistics-overview"),f=n("keywords-graph"),m=n("grid-column"),s=n("keywords-distribution-graph"),P=n("grid-row"),$=n("core-card"),T=n("keywords-table"),o=n("core-blur");return d(),S(o,null,{default:i(()=>[g("div",Tt,[c(P,null,{default:i(()=>[c(m,null,{default:i(()=>[c($,{slug:"keywordPositions","header-text":e.strings.keywordPositionsCard,toggles:!1,"no-slide":""},{tooltip:i(()=>[g("span",{innerHTML:e.strings.keywordPositionsTooltip},null,8,xt)]),default:i(()=>[c(u,{statistics:["keywords","impressions","position"],"show-graph":!1,view:"side-by-side"}),c(P,null,{default:i(()=>[c(m,{md:"6"},{default:i(()=>[c(f,{"legend-style":"simple"})]),_:1}),c(m,{md:"6"},{default:i(()=>[c(s)]),_:1})]),_:1})]),_:1},8,["header-text"]),c($,{slug:"keywordPerformance","header-text":e.strings.keywordPerformanceCard,toggles:!1,"no-slide":""},{tooltip:i(()=>[g("span",{innerHTML:e.strings.keywordPerformanceTooltip},null,8,Dt)]),default:i(()=>{var _,y;return[c(T,{keywords:((y=(_=l.searchStatisticsStore.data)==null?void 0:_.keywords)==null?void 0:y.paginated)||e.defaultKeywords,ref:"table","show-items-per-page":"","show-table-footer":""},null,8,["keywords"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])]),_:1})}const Rt=C(Ct,[["render",It]]);const Kt={setup(){return{licenseStore:B()}},components:{Blur:Rt,Cta:U,RequiredPlans:st},data(){return{strings:{ctaButtonText:this.$t.__("Unlock Search Statistics",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Search Statistics is a %1$s Feature",this.$td),"PRO"),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Track page rankings",this.$td),feature3:this.$t.__("Track keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}}},Ft={class:"aioseo-search-statistics-keyword-rankings"};function Bt(t,h,r,l,e,a){const u=n("blur"),f=n("required-plans"),m=n("cta");return d(),k("div",Ft,[c(u),c(m,{"cta-link":t.$links.getPricingUrl("search-statistics","search-statistics-upsell","keyword-rankings"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("search-statistics","keyword-rankings",t.$isPro?"pricing":"liteUpgrade"),"feature-list":[e.strings.feature1,e.strings.feature2,e.strings.feature3,e.strings.feature4],"align-top":"","hide-bonus":!l.licenseStore.isUnlicensed},{"header-text":i(()=>[w(p(e.strings.ctaHeader),1)]),description:i(()=>[c(f,{"core-feature":["search-statistics","keyword-rankings"]}),w(" "+p(e.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])])}const F=C(Kt,[["render",Bt]]),Lt={mixins:[Y],components:{KeywordRankings:F,Lite:F}},Ut={class:"aioseo-search-statistics-keyword-rankings"};function At(t,h,r,l,e,a){const u=n("keyword-rankings",!0),f=n("lite");return d(),k("div",Ut,[t.shouldShowMain("search-statistics","keyword-rankings")?(d(),S(u,{key:0})):b("",!0),t.shouldShowUpgrade("search-statistics","keyword-rankings")||t.shouldShowLite?(d(),S(f,{key:1})):b("",!0)])}const Se=C(Lt,[["render",At]]);export{Se as default};
