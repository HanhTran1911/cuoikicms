import{e as a}from"./links.28fcc512.js";import{a as n}from"./addons.87e6a98a.js";import{R as c,a as m}from"./RequiresUpdate.2dc75f61.js";const p={methods:{getExcludedActivationTabs(r){if(!a().isUnlicensed&&n.isActive(r)&&!n.requiresUpgrade(r))return[];const t=[];return this.$router.options.routes.forEach(e=>{if(!e.meta||!e.meta.middleware)return;(Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware]).some(s=>s===c)&&t.push(e.name)}),t}}},f={methods:{getExcludedUpdateTabs(r){if(!a().isUnlicensed&&n.hasMinimumVersion(r)&&!n.requiresUpgrade(r))return[];const t=[];return this.$router.options.routes.forEach(e=>{if(!e.meta||!e.meta.middleware)return;(Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware]).some(s=>s===m)&&t.push(e.name)}),t}}};export{p as R,f as a};
