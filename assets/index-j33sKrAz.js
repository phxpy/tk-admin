import{V as U,_ as E}from"./VDataTableServer-0BzrJire.js";import{_ as O}from"./AppSelect--aqTbLEB.js";import{u as G}from"./global-WZiHz5PV.js";import{r as m,G as q,$ as S,a as M,o as C,f as k,e as l,ax as h,b as o,d as w,al as j,t as u,v,m as z,a1 as y,y as D,Q as F,R as Q}from"./index-6Kuk09Zh.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VCard-Dsacibq4.js";import{V as J}from"./VCardText-Czx6R45Y.js";import{V as K}from"./VDivider-DEsrFhC6.js";import"./VCheckboxBtn-BUm1c0FN.js";import"./VTextField-DQte6wKW.js";import"./VImg-AojW6SG2.js";import"./forwardRefs-DWGaNmQL.js";import"./VChip-CW3JuaGU.js";import"./VAvatar-ChgDgRNH.js";import"./VList-C6wb6hOa.js";import"./VOverlay-Cdvk3JE3.js";import"./VMenu-DSsTKTlm.js";const W=f=>(F("data-v-45fb8ab6"),f=f(),Q(),f),X={class:"d-flex gap-4 align-center flex-wrap"},Y={class:"d-flex align-center gap-2"},Z=W(()=>w("span",null,"Show on page",-1)),ee={__name:"index",setup(f){const I=G(),i=m([]),p=m([]),c=m(1),d=m(10),$=[{title:"CAMPAING ID",key:"id",sortable:!0},{title:"Status",key:"status",sortable:!0},{title:"Name",key:"title",sortable:!0},{title:"budget",key:"total_budget",sortable:!0},{title:"Date",key:"date",sortable:!0},{title:"Total spend",key:"spend_budget",sortable:!0},{title:"Action",key:"actions",sortable:!1}],r=m({}),s=m({}),B=t=>{!t||!t.sortBy.length?p.value=i.value:t.sortBy[0].key==="date"?p.value=i.value.toSorted((a,g)=>{const n=+new Date(a.created_at),b=+new Date(g.created_at);if(t.sortBy.length&&t.sortBy[0].order==="asc")return n>b;if(t.sortBy.length&&t.sortBy[0].order==="desc")return n<b}):p.value=i.value.toSorted((a,g)=>{if(t.sortBy.length&&t.sortBy[0].order==="asc")return a[t.sortBy[0].key]>g[t.sortBy[0].key];if(t.sortBy.length&&t.sortBy[0].order==="desc")return a[t.sortBy[0].key]<g[t.sortBy[0].key]})},T=t=>B(t),_=async()=>{const t=await h("https://tg-adsnet-api-proxy.goourl.ru/api/campaign/",{method:"GET"});i.value=t,B()},P=async t=>{r.value[t]=!0;try{await h(`https://tg-adsnet-api-proxy.goourl.ru/api/campaign/${t}/delete/`,{method:"DELETE"}),_()}catch(a){console.log(a)}finally{r.value[t]=!1}},N=async t=>{try{s.value[t]=!0,await h(`https://tg-adsnet-api-proxy.goourl.ru/api/campaign/${t}/start/`,{method:"POST"}),_()}catch(a){console.log(a)}finally{s.value[t]=!1}},A=async t=>{try{s.value[t]=!0,await h(`https://tg-adsnet-api-proxy.goourl.ru/api/campaign/${t}/stop/`,{method:"POST"}),_()}catch(a){console.log(a)}finally{s.value[t]=!1}};q(async()=>{_()});const L=S(()=>!p.value||!p.value.length?[]:p.value.slice((c.value-1)*d.value,c.value*d.value)),x=S(()=>!i.value||!i.value.length?0:i.value.length);return(t,a)=>{const g=O,n=M("IconBtn"),b=E;return C(),k(H,null,{default:l(()=>[o(J,{class:"d-flex justify-space-between align-center flex-wrap gap-4"},{default:l(()=>[w("div",X,[w("div",Y,[Z,o(g,{"model-value":d.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:1e3,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=parseInt(e,10))},null,8,["model-value"])]),o(j,{"prepend-icon":"tabler-plus",to:{name:"newcampaign"}},{default:l(()=>[u(" New campaing ")]),_:1})])]),_:1}),o(K),o(U,{"items-per-page":d.value,"onUpdate:itemsPerPage":a[2]||(a[2]=e=>d.value=e),page:c.value,"onUpdate:page":a[3]||(a[3]=e=>c.value=e),headers:$,items:L.value,"items-length":x.value,class:"text-no-wrap","onUpdate:options":T},{"item.id":l(({item:e})=>[u(v(e.id),1)]),"item.status":l(({item:e})=>[u(v(e.status),1)]),"item.title":l(({item:e})=>[u(v(e.title),1)]),"item.total_budget":l(({item:e})=>[u(v(e.total_budget),1)]),"item.date":l(({item:e})=>[u(v(z(I).timeFormatter.format(new Date(e.created_at))),1)]),"item.spend_budget":l(({item:e})=>[u(v(e.spend_budget),1)]),"item.actions":l(({item:e})=>[e.status.toLowerCase()!=="started"?(C(),k(n,{key:0,disabled:r.value[e.id]||s.value[e.id]||e.status.toLowerCase()==="draft"||e.status.toLowerCase()==="moderating",loading:s.value[e.id],onClick:V=>N(e.id)},{default:l(()=>[o(y,{icon:"tabler-play"})]),_:2},1032,["disabled","loading","onClick"])):D("",!0),e.status.toLowerCase()==="started"?(C(),k(n,{key:1,disabled:r.value[e.id],loading:s.value[e.id],onClick:V=>A(e.id)},{default:l(()=>[o(y,{icon:"tabler-pause"})]),_:2},1032,["disabled","loading","onClick"])):D("",!0),o(n,{to:{name:"creatives",query:{id:e.id}},disabled:r.value[e.id]||s.value[e.id]},{default:l(()=>[o(y,{icon:"tabler-eye"})]),_:2},1032,["to","disabled"]),o(n,{to:{name:"editcampaign",query:{id:e.id}},disabled:r.value[e.id]||s.value[e.id]},{default:l(()=>[o(y,{icon:"tabler-edit"})]),_:2},1032,["to","disabled"]),o(n,{loading:r.value[e.id],disabled:r.value[e.id]||s.value[e.id],onClick:V=>P(e.id)},{default:l(()=>[o(y,{icon:"tabler-trash"})]),_:2},1032,["loading","disabled","onClick"])]),bottom:l(()=>[o(b,{page:c.value,"onUpdate:page":a[1]||(a[1]=e=>c.value=e),"items-per-page":d.value,"total-items":x.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})}}},_e=R(ee,[["__scopeId","data-v-45fb8ab6"]]);export{_e as default};
