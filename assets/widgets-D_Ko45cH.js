import { _ as B } from "./AppSelect-BB50_Zry.js";
import "./forwardRefs-DWGaNmQL.js";
import { o as $, e as a, R as A, i as C, v as c, r as d, G as D, m as E, d as g, f as N, b as o, am as P, t as p, Q as q, a as T, a2 as U, a0 as w, ay as y } from "./index-BjDmxniD.js";
import { _ as W } from "./plugin-vue_export-helper-DlAUqK2U.js";
import "./VAvatar-B9QNh2DP.js";
import { V as G } from "./VCard-B4EcrHoo.js";
import { V as R } from "./VCardText-C0Om0SY7.js";
import "./VChip-CH3huRg8.js";
import { V as k, _ as S } from "./VDataTableServer-CM2JVaBU.js";
import { V as j } from "./VDivider-DvZ5B2S5.js";
import "./VImg-C0T_JZIO.js";
import "./VList-CP8erqy4.js";
import "./VMenu-BktcBYzx.js";
import "./VOverlay-C5gyJjQH.js";
import "./VTextField-DUW-qATq.js";
const z=n=>(q("data-v-cd1f4724"),n=n(),A(),n),L={class:"d-flex gap-4 align-center flex-wrap"},M={class:"d-flex align-center gap-2"},O=z(()=>g("span",null,"Show",-1)),Q={__name:"widgets",setup(n){const v=C(),r=d({}),x=[{title:"Widget Id",key:"id",sortable:!1},{title:"Name",key:"name",sortable:!1},{title:"Description",key:"description",sortable:!1},{title:"Action",key:"actions",sortable:!1}],u=d([]),f=async()=>{const l=await y(`https://tg-adsnet-api-proxy.goourl.ru/api/site/${v.query.id}/widgets/`,{method:"GET"});u.value=l.toSorted((t,m)=>m.id-t.id)};D(async()=>{f()});const i=d(1),s=d(10),V=w(()=>u.value.slice((i.value-1)*s.value,i.value*s.value)),_=w(()=>u.value.length),b=async l=>{r.value[l]=!0;try{await y(`https://tg-adsnet-api-proxy.goourl.ru/api/widget/${l}/delete/`,{method:"DELETE"}),f()}catch(t){console.log(t)}finally{r.value[l]=!1}};return(l,t)=>{const m=B,h=T("IconBtn"),I=S;return $(),N(G,null,{default:a(()=>[o(R,{class:"d-flex justify-space-between align-center flex-wrap gap-4"},{default:a(()=>[g("div",L,[g("div",M,[O,o(m,{"model-value":s.value,items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=parseInt(e,10))},null,8,["model-value"])]),o(P,{"prepend-icon":"tabler-plus",to:{name:"addwidget",query:{siteId:E(v).query.id}}},{default:a(()=>[p(" New widget ")]),_:1},8,["to"])])]),_:1}),o(j),o(k,{"items-per-page":s.value,"onUpdate:itemsPerPage":t[2]||(t[2]=e=>s.value=e),page:i.value,"onUpdate:page":t[3]||(t[3]=e=>i.value=e),headers:x,items:V.value,"items-length":_.value,class:"text-no-wrap"},{"item.id":a(({item:e})=>[p(c(e.id),1)]),"item.name":a(({item:e})=>[p(c(e.name),1)]),"item.desctiption":a(({item:e})=>[p(c(e.description),1)]),"item.actions":a(({item:e})=>[o(h,{loading:r.value[e.id],disabled:r.value[e.id],onClick:F=>b(e.id)},{default:a(()=>[o(U,{icon:"tabler-trash"})]),_:2},1032,["loading","disabled","onClick"])]),bottom:a(()=>[o(I,{page:i.value,"onUpdate:page":t[1]||(t[1]=e=>i.value=e),"items-per-page":s.value,"total-items":_.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})}}},de=W(Q,[["__scopeId","data-v-cd1f4724"]]);export { de as default };

