import{r as c}from"./validators-DD8u1gFa.js";import{_ as y}from"./AppTextField-2TGch0Rc.js";import{i as q,j as v,r as u,$ as C,o as h,f as T,e as a,b as e,m as t,an as f,al as W,t as k,ax as x}from"./index-BS23A-8V.js";import{V as R,a as V}from"./VRow-C5_PvRA-.js";import{V as g}from"./VCard-Bl_1nObG.js";import{V as n}from"./VCardText-Dupa1F-9.js";import"./VTextField-BBIv_7GE.js";import"./VImg-CEGqANsG.js";import"./forwardRefs-DWGaNmQL.js";/* empty css              */import"./VAvatar-C3Dh_S9l.js";const z={__name:"addwidget",setup(B){const m=q(),_=v(),r=u(""),o=u(""),d=u(!1),w=C(()=>r.value),b=async()=>{d.value=!0;try{await x("https://tg-adsnet-api-proxy.goourl.ru/api/widget/add/",{method:"POST",body:{name:r.value,description:o.value,site:m.query.siteId}}),_.push({path:"/widgets",query:{id:m.query.siteId}})}catch(l){console.error(l)}finally{d.value=!1}};return(l,i)=>{const p=y;return h(),T(R,null,{default:a(()=>[e(V,{cols:"9",md:"9"},{default:a(()=>[e(g,{class:"mb-6",title:"New widget"},{default:a(()=>[e(n,null,{default:a(()=>[e(p,{modelValue:t(r),"onUpdate:modelValue":i[0]||(i[0]=s=>f(r)?r.value=s:null),label:"Widget name",placeholder:"Widget name",rules:["requiredValidator"in l?l.requiredValidator:t(c)]},null,8,["modelValue","rules"])]),_:1}),e(n,null,{default:a(()=>[e(p,{modelValue:t(o),"onUpdate:modelValue":i[1]||(i[1]=s=>f(o)?o.value=s:null),label:"Widget description",placeholder:"Widget description",rules:["requiredValidator"in l?l.requiredValidator:t(c)]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}),e(V,{cols:"3",md:"3"},{default:a(()=>[e(g,{class:"campaing-btn-card"},{default:a(()=>[e(n,null,{default:a(()=>[e(W,{loading:t(d),color:"primary",disabled:!t(w)||t(d),block:"",onClick:b},{default:a(()=>[k(" Create Widget ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{z as default};
