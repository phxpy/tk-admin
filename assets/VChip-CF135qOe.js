import{a7 as Q,ak as O,ai as U,b3 as ge,aj as J,bk as ue,a9 as X,aM as Se,aO as Ce,bl as re,aP as F,Y as m,aR as ee,bm as Ie,bd as le,w as xe,ac as de,b as i,bn as te,$ as w,bo as Ve,a$ as Pe,an as ve,aL as fe,aN as pe,aQ as ze,Z as L,p as he,b7 as ae,aH as Ae,aI as we,aJ as Re,bp as _e,am as Ee,bq as Te,aK as Fe,br as Oe,aq as Be,bs as Ge,bt as Me,b8 as De,bu as Le,ap as We,bv as He,aa as $e,bw as qe,bx as Ke,H as ne,by as Ne,bz as je,bA as Qe,bi as W,I as Ue,F as se}from"./index-CuWvZGrl.js";import{V as ie}from"./VAvatar-DDZ-b-Un.js";function Je(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const b=B(o,a),c=be(o,u,a),y=B(o,n),v=ye(o,n),k=y*.4;return c>v?v-k:c+b<v+y?v-b+y+k:c}function Xe(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=B(u,a),b=ye(u,n),c=B(u,n);return b-o/2+c/2}function oe(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ye(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function be(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:b}=a;return e?n?b-o+u:u:a.scrollTop}function B(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ye(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ze=Symbol.for("vuetify:v-slide-group"),me=Q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:O,default:"$next"},prevIcon:{type:O,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...U(),...ge({mobile:null}),...J(),...ue({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ce=X()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:b}=Ce(e),c=re(e,e.symbol),y=F(!1),v=F(0),k=F(0),I=F(0),d=m(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:R}=ee(),{resizeRef:p,contentRect:V}=ee(),s=Ie(),g=m(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),H=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=m(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(le){let l=-1;xe(()=>[c.selected.value,R.value,V.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(R.value&&V.value){const t=d.value?"width":"height";k.value=R.value[t],I.value=V.value[t],y.value=k.value+1<I.value}if(H.value>=0&&p.el){const t=p.el.children[S.value];_(t,e.centerActive)}})})}const P=F(!1);function _(l,t){let r=0;t?r=Xe({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Je({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),G(r)}function G(l){if(!le||!f.el)return;const t=B(d.value,f.el),r=be(d.value,u.value,f.el);if(!(oe(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:D,offsetWidth:j}=f.el;l=D-j-l}d.value?s.horizontal(l,g.value):s(l,g.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function x(l){if(P.value=!0,!(!y.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){_(r);return}}}function $(l){P.value=!1}let E=!1;function M(l){var t;!E&&!P.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),E=!1}function T(){E=!0}function q(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,A;if(!p.el)return;let t;if(!l)t=Ve(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(A=p.el.querySelector(":focus"))==null?void 0:A.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function z(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*k.value;let A=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:D,offsetWidth:j}=f.el;A+=D-j}G(A)}const K=m(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),N=m(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return b.value||y.value||Math.abs(v.value)>0;default:return!b.value&&(y.value||Math.abs(v.value)>0)}}),Y=m(()=>Math.abs(v.value)>1),Z=m(()=>{if(!f.value)return!1;const l=oe(d.value,f.el),t=Ye(d.value,f.el);return l-t-Math.abs(v.value)>1});return de(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:M},{default:()=>{var l,t,r;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Y.value}],onMousedown:T,onClick:()=>Y.value&&z("prev")},[((l=a.prev)==null?void 0:l.call(a,K.value))??i(te,null,{default:()=>[i(w,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:x,onFocusout:$,onKeydown:q},[(t=a.default)==null?void 0:t.call(a,K.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onMousedown:T,onClick:()=>Z.value&&z("next")},[((r=a.next)==null?void 0:r.call(a,K.value))??i(te,null,{default:()=>[i(w,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C}}}),ke=Symbol.for("vuetify:v-chip-group"),el=Q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...me(),...U(),...ue({selectedClass:"v-chip--selected"}),...J(),...ve(),...fe({variant:"tonal"})},"VChipGroup");X()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=pe(e),{isSelected:o,select:b,next:c,prev:y,selected:v}=re(e,ke);return ze({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),de(()=>{const k=ce.filterProps(e);return i(ce,he(k,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=a.default)==null?void 0:I.call(a,{isSelected:o,select:b,next:c,prev:y,selected:v.value})]}})}),{}}});const ll=Q({activeClass:String,appendAvatar:String,appendIcon:O,closable:Boolean,closeIcon:{type:O,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ae(),onClickOnce:ae(),...Ae(),...U(),...we(),...Re(),..._e(),...Ee(),...Te(),...Fe(),...J({tag:"span"}),...ve(),...fe({variant:"tonal"})},"VChip"),nl=X()({name:"VChip",directives:{Ripple:Oe},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:b}=Be(),{borderClasses:c}=Ge(e),{colorClasses:y,colorStyles:v,variantClasses:k}=Me(e),{densityClasses:I}=De(e),{elevationClasses:d}=Le(e),{roundedClasses:f}=We(e),{sizeClasses:R}=He(e),{themeClasses:p}=pe(e),V=$e(e,"modelValue"),s=qe(e,ke,!1),g=Ke(e,a),H=m(()=>e.link!==!1&&g.isLink.value),S=m(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||g.isClickable.value)),P=m(()=>({"aria-label":b(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),V.value=!1,u("click:close",h)}}));function _(h){var x;u("click",h),S.value&&((x=g.navigate)==null||x.call(g,h),s==null||s.toggle())}function G(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),_(h))}return()=>{const h=g.isLink.value?"a":e.tag,x=!!(e.appendIcon||e.appendAvatar),$=!!(x||o.append),E=!!(o.close||e.closable),M=!!(o.filter||e.filter)&&s,T=!!(e.prependIcon||e.prependAvatar),q=!!(T||o.prepend),C=!s||s.isSelected.value;return V.value&&ne(i(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":M,"v-chip--pill":e.pill},p.value,c.value,C?y.value:void 0,I.value,d.value,f.value,R.value,k.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:S.value?0:void 0,onClick:_,onKeydown:S.value&&!H.value&&G},{default:()=>{var z;return[je(S.value,"v-chip"),M&&i(Qe,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[o.filter?i(W,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(w,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ue,s.isSelected.value]])]}),q&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(W,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(se,null,[e.prependIcon&&i(w,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((z=o.default)==null?void 0:z.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),$&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(W,{key:"append-defaults",disabled:!x,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(se,null,[e.appendIcon&&i(w,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),E&&i("button",he({key:"close",class:"v-chip__close",type:"button"},P.value),[o.close?i(W,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(w,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ne("ripple"),S.value&&e.ripple,null]])}}});export{nl as V};
