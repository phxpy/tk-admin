import{am as f,r as v,w as V,a as y,o as c,f as i,e as a,b as s,a1 as g,m as n,d as k,v as d,an as x,c as b,F as w,h as B,t as I}from"./index-mUf8a7pm.js";import{V as S}from"./VTooltip-XCkPKiMf.js";import{V as T}from"./VMenu-DXtwuv6u.js";import{V as C,a as L,b as N}from"./VList-C9BtVZpC.js";import"./VOverlay-D99F2MpR.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-DQOj4B0x.js";import"./VAvatar-Cw3es8BT.js";import"./VDivider-DaIEAETc.js";const z={class:"text-capitalize"},F={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(m){const r=m,t=f(),o=v([t.theme]);return V(()=>t.theme,()=>{o.value=[t.theme]},{deep:!0}),(l,p)=>{const h=y("IconBtn");return c(),i(h,{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"},{default:a(()=>{var u;return[s(g,{icon:(u=r.themes.find(e=>e.name===n(t).theme))==null?void 0:u.icon},null,8,["icon"]),s(S,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:a(()=>[k("span",z,d(n(t).theme),1)]),_:1}),s(T,{activator:"parent",offset:"12px",width:180},{default:a(()=>[s(C,{selected:n(o),"onUpdate:selected":p[0]||(p[0]=e=>x(o)?o.value=e:null),mandatory:""},{default:a(()=>[(c(!0),b(w,null,B(r.themes,({name:e,icon:_})=>(c(),i(L,{key:e,value:e,"prepend-icon":_,color:"primary",onClick:()=>{n(t).theme=e}},{default:a(()=>[s(N,{class:"text-capitalize"},{default:a(()=>[I(d(e),1)]),_:2},1024)]),_:2},1032,["value","prepend-icon","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]}),_:1})}}},G={__name:"NavbarThemeSwitcher",setup(m){const r=[{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon-stars"},{name:"system",icon:"tabler-device-desktop-analytics"}];return(t,o)=>{const l=F;return c(),i(l,{themes:r})}}};export{G as default};
