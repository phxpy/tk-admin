import{a4 as j,a5 as B,a6 as Q,b9 as ge,a9 as X,bq as ue,ab as J,aS as Se,aU as Ce,br as re,aV as F,$ as m,aX as ee,bs as xe,bj as le,w as Ve,ai as de,b as i,bt as te,a1 as w,bu as Ie,b5 as Pe,aa as ve,aR as fe,aT as pe,aW as ze,a0 as W,q as he,bd as ae,aN as Ae,aO as we,aP as Ee,bv as Re,a8 as _e,bw as Te,aQ as Fe,bx as Be,ae as Ge,by as Oe,bz as De,be as Me,bA as We,ad as Le,bB as He,ap as qe,bC as $e,bD as Ke,J as ne,bE as Ne,bF as Ue,bG as je,bo as L,K as Qe,F as se}from"./index-mUf8a7pm.js";import{V as ie}from"./VAvatar-Cw3es8BT.js";function Xe(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const b=G(o,a),c=be(o,u,a),y=G(o,n),v=ye(o,n),k=y*.4;return c>v?v-k:c+b<v+y?v-b+y+k:c}function Je(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=G(u,a),b=ye(u,n),c=G(u,n);return b-o/2+c/2}function oe(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ye(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function be(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:b}=a;return e?n?b-o+u:u:a.scrollTop}function G(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ye(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ze=Symbol.for("vuetify:v-slide-group"),me=j({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:B,default:"$next"},prevIcon:{type:B,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Q(),...ge({mobile:null}),...X(),...ue({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ce=J()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:b}=Ce(e),c=re(e,e.symbol),y=F(!1),v=F(0),k=F(0),x=F(0),d=m(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:E}=ee(),{resizeRef:p,contentRect:I}=ee(),s=xe(),g=m(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),H=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(le){let l=-1;Ve(()=>[c.selected.value,E.value,I.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(E.value&&I.value){const t=d.value?"width":"height";k.value=E.value[t],x.value=I.value[t],y.value=k.value+1<x.value}if(H.value>=0&&p.el){const t=p.el.children[S.value];R(t,e.centerActive)}})})}const P=F(!1);function R(l,t){let r=0;t?r=Je({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),O(r)}function O(l){if(!le||!f.el)return;const t=G(d.value,f.el),r=be(d.value,u.value,f.el);if(!(oe(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:M,offsetWidth:U}=f.el;l=M-U-l}d.value?s.horizontal(l,g.value):s(l,g.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function V(l){if(P.value=!0,!(!y.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){R(r);return}}}function q(l){P.value=!1}let _=!1;function D(l){var t;!_&&!P.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),_=!1}function T(){_=!0}function $(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,A;if(!p.el)return;let t;if(!l)t=Ie(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(A=p.el.querySelector(":focus"))==null?void 0:A.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function z(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*k.value;let A=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:M,offsetWidth:U}=f.el;A+=M-U}O(A)}const K=m(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),N=m(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return b.value||y.value||Math.abs(v.value)>0;default:return!b.value&&(y.value||Math.abs(v.value)>0)}}),Y=m(()=>Math.abs(v.value)>1),Z=m(()=>{if(!f.value)return!1;const l=oe(d.value,f.el),t=Ye(d.value,f.el);return l-t-Math.abs(v.value)>1});return de(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:D},{default:()=>{var l,t,r;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Y.value}],onMousedown:T,onClick:()=>Y.value&&z("prev")},[((l=a.prev)==null?void 0:l.call(a,K.value))??i(te,null,{default:()=>[i(w,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:V,onFocusout:q,onKeydown:$},[(t=a.default)==null?void 0:t.call(a,K.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onMousedown:T,onClick:()=>Z.value&&z("next")},[((r=a.next)==null?void 0:r.call(a,K.value))??i(te,null,{default:()=>[i(w,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C}}}),ke=Symbol.for("vuetify:v-chip-group"),el=j({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...me(),...Q(),...ue({selectedClass:"v-chip--selected"}),...X(),...ve(),...fe({variant:"tonal"})},"VChipGroup");J()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=pe(e),{isSelected:o,select:b,next:c,prev:y,selected:v}=re(e,ke);return ze({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),de(()=>{const k=ce.filterProps(e);return i(ce,he(k,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var x;return[(x=a.default)==null?void 0:x.call(a,{isSelected:o,select:b,next:c,prev:y,selected:v.value})]}})}),{}}});const ll=j({activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ae(),onClickOnce:ae(),...Ae(),...Q(),...we(),...Ee(),...Re(),..._e(),...Te(),...Fe(),...X({tag:"span"}),...ve(),...fe({variant:"tonal"})},"VChip"),nl=J()({name:"VChip",directives:{Ripple:Be},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:b}=Ge(),{borderClasses:c}=Oe(e),{colorClasses:y,colorStyles:v,variantClasses:k}=De(e),{densityClasses:x}=Me(e),{elevationClasses:d}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:E}=He(e),{themeClasses:p}=pe(e),I=qe(e,"modelValue"),s=$e(e,ke,!1),g=Ke(e,a),H=m(()=>e.link!==!1&&g.isLink.value),S=m(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||g.isClickable.value)),P=m(()=>({"aria-label":b(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),I.value=!1,u("click:close",h)}}));function R(h){var V;u("click",h),S.value&&((V=g.navigate)==null||V.call(g,h),s==null||s.toggle())}function O(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),R(h))}return()=>{const h=g.isLink.value?"a":e.tag,V=!!(e.appendIcon||e.appendAvatar),q=!!(V||o.append),_=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&s,T=!!(e.prependIcon||e.prependAvatar),$=!!(T||o.prepend),C=!s||s.isSelected.value;return I.value&&ne(i(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":D,"v-chip--pill":e.pill},p.value,c.value,C?y.value:void 0,x.value,d.value,f.value,E.value,k.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:S.value?0:void 0,onClick:R,onKeydown:S.value&&!H.value&&O},{default:()=>{var z;return[Ue(S.value,"v-chip"),D&&i(je,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[o.filter?i(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(w,{key:"filter-icon",icon:e.filterIcon},null)]),[[Qe,s.isSelected.value]])]}),$&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(L,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(se,null,[e.prependIcon&&i(w,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((z=o.default)==null?void 0:z.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),q&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(L,{key:"append-defaults",disabled:!V,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(se,null,[e.appendIcon&&i(w,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),_&&i("button",he({key:"close",class:"v-chip__close",type:"button"},P.value),[o.close?i(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(w,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ne("ripple"),S.value&&e.ripple,null]])}}});export{nl as V};
