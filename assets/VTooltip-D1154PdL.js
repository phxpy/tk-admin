import{m as p,u as S,V as u}from"./VOverlay-80caD29p.js";import{f as h}from"./forwardRefs-DWGaNmQL.js";import{a7 as O,a8 as x,a9 as T,aa as k,ab as w,Y as e,r as A,p as d,ac as C,b as I}from"./index-CuWvZGrl.js";const R=O({id:String,text:String,...x(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),G=T()({name:"VTooltip",props:R(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=k(t,"modelValue"),{scopeId:m}=S(),f=w(),r=e(()=>t.id||`v-tooltip-${f}`),l=A(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),b=e(()=>d({"aria-describedby":r.value},t.activatorProps));return C(()=>{const y=u.filterProps(t);return I(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},y,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},m),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),h({},l)}});export{G as V};
