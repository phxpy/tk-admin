import{r as c,u as L}from"./validators-DD8u1gFa.js";import{_ as B}from"./AppTextField-CL8XetUb.js";import{j as F,az as R,r as s,G as S,ay as O,a0 as E,o as z,f as A,e,b as l,m as t,ao as f,t as j,am as D}from"./index-BjDmxniD.js";import{_ as N}from"./DemoSelectBasic-w9srx1K7.js";import{_ as w}from"./DemoSelectChips-BGsNLBPM.js";import{V,a as i}from"./VRow-CKTj_i92.js";import{V as n}from"./VCard-B4EcrHoo.js";import{V as r}from"./VCardText-C0Om0SY7.js";import"./VTextField-DUW-qATq.js";import"./VImg-C0T_JZIO.js";import"./forwardRefs-DWGaNmQL.js";import"./AppSelect-BB50_Zry.js";import"./VList-CP8erqy4.js";import"./VAvatar-B9QNh2DP.js";import"./VDivider-DvZ5B2S5.js";import"./VOverlay-C5gyJjQH.js";import"./VMenu-BktcBYzx.js";import"./VChip-CH3huRg8.js";/* empty css              */const sl={__name:"newcampaign",setup(I){const P=F(),m=R(),C=s({}),g=s(""),q=s(""),_=s([]),v=s([]),y=s([]),h=s("No"),b=s(""),U=s([]),k=s(""),T=s(!1);S(async()=>{const a=await O("https://tg-adsnet-api-proxy.goourl.ru/api/campaign/tasks/",{method:"GET"});C.value=a;for(const u in Object.keys(a))U.value.push(a[u])});const $=E(()=>g.value&&_.value.length>0&&v.value.length>0&&y.value.length>0&&b.value&&k.value),G=async()=>{const a=[];for(let d in m.platforms)y.value.includes(m.platforms[d])&&a.push(d);const u=[];for(let d in m.countries)_.value.includes(m.countries[d])&&u.push(d);const p=[];for(let d in m.languages)v.value.includes(m.languages[d])&&p.push(d);let o="";for(const d in Object.keys(C.value))k.value===C.value[d]&&(o=d);try{T.value=!0;const d=await O("https://tg-adsnet-api-proxy.goourl.ru/api/campaign/add/",{method:"POST",body:{title:g.value,description:q.value,target_url:b.value,category:4,cpc:1,scf:1,daily_views_limit:1e4,total_budget:"100",telegram_premium:"true",motivated_traffic:"true",task_type:`${o}`,platform:a,country:u,language:p}});await O(`https://tg-adsnet-api-proxy.goourl.ru/api/campaign/${d.created.id}/to_moderate/`,{method:"POST"}),P.push({path:"/creatives",query:{id:d.created.id}})}catch(d){console.error(d)}finally{T.value=!1}};return(a,u)=>{const p=B;return z(),A(V,null,{default:e(()=>[l(i,{cols:"9",md:"9"},{default:e(()=>[l(n,{class:"mb-6",title:"New campaing"},{default:e(()=>[l(r,null,{default:e(()=>[l(p,{modelValue:t(g),"onUpdate:modelValue":u[0]||(u[0]=o=>f(g)?g.value=o:null),label:"Name",placeholder:"Campaing name",rules:["requiredValidator"in a?a.requiredValidator:t(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,null,{default:e(()=>[l(p,{modelValue:t(q),"onUpdate:modelValue":u[1]||(u[1]=o=>f(q)?q.value=o:null),label:"Campaing description",placeholder:"Campaing description",rules:["requiredValidator"in a?a.requiredValidator:t(c)]},null,8,["modelValue","rules"])]),_:1}),l(r,null,{default:e(()=>[l(V,null,{default:e(()=>[l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,{title:"GEO"},{default:e(()=>[l(r,null,{default:e(()=>[l(w,{modelValue:t(_),"onUpdate:modelValue":u[2]||(u[2]=o=>f(_)?_.value=o:null),items:Object.values(t(m).countries),rules:["requiredValidator"in a?a.requiredValidator:t(c)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1}),l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,{title:"Language"},{default:e(()=>[l(r,null,{default:e(()=>[l(w,{modelValue:t(v),"onUpdate:modelValue":u[3]||(u[3]=o=>f(v)?v.value=o:null),items:Object.values(t(m).languages),rules:["requiredValidator"in a?a.requiredValidator:t(c)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(V,null,{default:e(()=>[l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,{title:"OS"},{default:e(()=>[l(r,null,{default:e(()=>[l(w,{modelValue:t(y),"onUpdate:modelValue":u[4]||(u[4]=o=>f(y)?y.value=o:null),items:Object.values(t(m).platforms),rules:["requiredValidator"in a?a.requiredValidator:t(c)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1}),l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,{title:"Premium"},{default:e(()=>[l(r,null,{default:e(()=>[l(N,{modelValue:t(h),"onUpdate:modelValue":u[5]||(u[5]=o=>f(h)?h.value=o:null),items:["Yes","No"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(n,{class:"mb-6",title:"Task settings"},{default:e(()=>[l(r,null,{default:e(()=>[l(V,null,{default:e(()=>[l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,null,{default:e(()=>[l(r,null,{default:e(()=>[l(N,{modelValue:t(k),"onUpdate:modelValue":u[6]||(u[6]=o=>f(k)?k.value=o:null),label:"Task type",items:t(U),rules:["requiredValidator"in a?a.requiredValidator:t(c)]},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1}),l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,null,{default:e(()=>[l(r,null,{default:e(()=>[l(p,{modelValue:t(b),"onUpdate:modelValue":u[7]||(u[7]=o=>f(b)?b.value=o:null),label:"Target link",type:"text",rules:["requiredValidator"in a?a.requiredValidator:t(c),"urlValidator"in a?a.urlValidator:t(L)]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(r,null,{default:e(()=>[l(V,null,{default:e(()=>[l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,null,{default:e(()=>[l(r,null,{default:e(()=>[j(" Information about system macros ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(n,{class:"mb-6",title:"Finance settings"},{default:e(()=>[l(r,null,{default:e(()=>[l(V,null,{default:e(()=>[l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,null,{default:e(()=>[l(r,null,{default:e(()=>[l(p,{label:"Task price","prepend-inner-icon":"tabler-currency-dollar",placeholder:"0.00"})]),_:1})]),_:1})]),_:1}),l(i,{cols:"6",md:"6"},{default:e(()=>[l(n,null,{default:e(()=>[l(r,null,{default:e(()=>[l(p,{label:"Campaign limit","prepend-inner-icon":"tabler-currency-dollar",placeholder:"0.00"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(i,{cols:"3",md:"3"},{default:e(()=>[l(n,{class:"campaing-btn-card"},{default:e(()=>[l(r,null,{default:e(()=>[l(D,{loading:t(T),color:"primary",disabled:!t($)||t(T),block:"",onClick:G},{default:e(()=>[j(" Create ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{sl as default};
