import{o as y,c as F,F as $t,h as Bt,f as R,g as P,i as Vt,j as ee,k as yt,r as Z,w as mt,l as ne,m as f,e as N,d as b,n as $,p as j,q as Mt,s as zt,t as wt,v as tt,x as xt,y as B,b as I,z as oe,A as ie,B as se,C as re,D as le,E as _,G as dt,H as Lt,I as Et,T as ae,a as ce}from"./index-CuWvZGrl.js";import ue from"./Footer-D-gFNUm-.js";import fe from"./NavbarThemeSwitcher-DI99sl27.js";import de from"./UserProfile-42hPb0kF.js";import{c as pe,a as me,_ as he}from"./I18n-D1UO04oX.js";import{V as ge}from"./VNodeRenderer-53BF3PCK.js";import{V as ve}from"./VSpacer-4T2PjWBe.js";import"./plugin-vue_export-helper-DlAUqK2U.js";import"./VTooltip-D1154PdL.js";import"./VOverlay-80caD29p.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-FhUImhWv.js";import"./VMenu-BhTD-thM.js";import"./VList-CZuRPWLW.js";import"./VAvatar-DDZ-b-Un.js";import"./VDivider-D2ozgvGd.js";import"./VBadge-CeUuTryr.js";/* empty css              */const ye={class:"nav-items"},we={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=o=>"children"in o?be:Ht;return(o,n)=>(y(),F("ul",ye,[(y(!0),F($t,null,Bt(t.navItems,(i,r)=>(y(),R(P(e(i)),{key:r,item:i},null,8,["item"]))),128))]))}},xe={class:"nav-group-label"},be=Object.assign({name:"HorizontalNavGroup"},{__name:"HorizontalNavGroup",props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,o=Vt(),n=ee(),i=yt(),r=Z(!1);return mt(()=>o.path,()=>{const s=ne(e.item.children,n);r.value=s},{immediate:!0}),(s,l)=>f(pe)(t.item)?(y(),R(f(un),{key:0,"is-rtl":f(i).isAppRTL,class:tt(["nav-group",[{active:f(r),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:N(()=>[(y(!0),F($t,null,Bt(t.item.children,a=>(y(),R(P("children"in a?"HorizontalNavGroup":f(Ht)),{key:a.title,item:a,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:N(()=>[b("div",xe,[(y(),R(P(f($).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||f($).verticalNav.defaultNavItemIconProps),null,16)),(y(),R(P(f($).app.i18n.enable?"i18n-t":"span"),j(f(Mt)(t.item.title,"span"),{class:"nav-item-title"}),{default:N(()=>[zt(wt(t.item.title),1)]),_:1},16)),(y(),R(P(f($).app.iconRenderer||"div"),j(f($).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):xt("",!0)}}),Ce={class:"layout-navbar"},Ae={class:"navbar-content-container"},Re={class:"layout-horizontal-nav"},ke={class:"horizontal-nav-content-container"},Se={class:"layout-page-content"},Ne={class:"layout-footer"},Le={class:"footer-content-container"},Ee={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const e=yt();return(o,n)=>(y(),F("div",{class:tt(["layout-wrapper",f(e)._layoutClasses])},[b("div",{class:tt(["layout-navbar-and-nav-container",f(e).isNavbarBlurEnabled&&"header-blur"])},[b("div",Ce,[b("div",Ae,[B(o.$slots,"navbar")])]),b("div",Re,[b("div",ke,[I(f(we),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),b("main",Se,[B(o.$slots,"default")]),b("footer",Ne,[b("div",Le,[B(o.$slots,"footer")])])],2))}},Ht={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;return(o,n)=>f(me)(t.item.action,t.item.subject)?(y(),F("li",{key:0,class:tt(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(y(),R(P(t.item.to?"RouterLink":"a"),j(f(ie)(t.item),{class:{"router-link-active router-link-exact-active":f(oe)(t.item,o.$router)}}),{default:N(()=>[(y(),R(P(f($).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||f($).verticalNav.defaultNavItemIconProps),null,16)),(y(),R(P(f($).app.i18n.enable?"i18n-t":"span"),j({class:"nav-item-title"},f(Mt)(t.item.title,"span")),{default:N(()=>[zt(wt(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):xt("",!0)}},ht=Math.min,G=Math.max,it=Math.round,V=t=>({x:t,y:t}),Te={left:"right",right:"left",bottom:"top",top:"bottom"},_e={start:"end",end:"start"};function Tt(t,e,o){return G(t,ht(e,o))}function lt(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function It(t){return t==="x"?"y":"x"}function Ft(t){return t==="y"?"height":"width"}function Y(t){return["top","bottom"].includes(W(t))?"y":"x"}function Wt(t){return It(Y(t))}function Pe(t,e,o){o===void 0&&(o=!1);const n=at(t),i=Wt(t),r=Ft(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function Oe(t){const e=st(t);return[gt(t),e,gt(e)]}function gt(t){return t.replace(/start|end/g,e=>_e[e])}function De(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function $e(t,e,o,n){const i=at(t);let r=De(W(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(gt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>Te[e])}function Be(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ve(t){return typeof t!="number"?Be(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function _t(t,e,o){let{reference:n,floating:i}=t;const r=Y(e),s=Wt(e),l=Ft(s),a=W(e),c=r==="y",d=n.x+n.width/2-i.width/2,u=n.y+n.height/2-i.height/2,m=n[l]/2-i[l]/2;let p;switch(a){case"top":p={x:d,y:n.y-i.height};break;case"bottom":p={x:d,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:u};break;case"left":p={x:n.x-i.width,y:u};break;default:p={x:n.x,y:n.y}}switch(at(e)){case"start":p[s]-=m*(o&&c?-1:1);break;case"end":p[s]+=m*(o&&c?-1:1);break}return p}const Me=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=_t(c,n,a),m=n,p={},h=0;for(let g=0;g<l.length;g++){const{name:v,fn:w}=l[g],{x,y:A,data:S,reset:C}=await w({x:d,y:u,initialPlacement:n,placement:m,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:t,floating:e}});d=x??d,u=A??u,p={...p,[v]:{...p[v],...S}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:d,y:u}=_t(c,m,a)),g=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:p}};async function qt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:p=0}=lt(e,t),h=Ve(p),v=l[m?u==="floating"?"reference":"floating":u],w=rt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),x=u==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),S=await(r.isElement==null?void 0:r.isElement(A))?await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1}:{x:1,y:1},C=rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:A,strategy:a}):x);return{top:(w.top-C.top+h.top)/S.y,bottom:(C.bottom-w.bottom+h.bottom)/S.y,left:(w.left-C.left+h.left)/S.x,right:(C.right-w.right+h.right)/S.x}}const ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...v}=lt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=W(i),x=Y(l),A=W(l)===l,S=await(a.isRTL==null?void 0:a.isRTL(c.floating)),C=m||(A||!g?[st(l)]:Oe(l)),At=h!=="none";!m&&At&&C.push(...$e(l,g,h,S));const Zt=[l,...C],ft=await qt(e,v),ot=[];let Q=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&ot.push(ft[w]),u){const H=Pe(i,s,S);ot.push(ft[H[0]],ft[H[1]])}if(Q=[...Q,{placement:i,overflows:ot}],!ot.every(H=>H<=0)){var Rt,kt;const H=(((Rt=r.flip)==null?void 0:Rt.index)||0)+1,Nt=Zt[H];if(Nt)return{data:{index:H,overflows:Q},reset:{placement:Nt}};let U=(kt=Q.filter(q=>q.overflows[0]<=0).sort((q,O)=>q.overflows[1]-O.overflows[1])[0])==null?void 0:kt.placement;if(!U)switch(p){case"bestFit":{var St;const q=(St=Q.filter(O=>{if(At){const D=Y(O.placement);return D===x||D==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(D=>D>0).reduce((D,te)=>D+te,0)]).sort((O,D)=>O[1]-D[1])[0])==null?void 0:St[0];q&&(U=q);break}case"initialPlacement":U=l;break}if(i!==U)return{reset:{placement:U}}}return{}}}};async function He(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=W(o),l=at(o),a=Y(o)==="y",c=["left","top"].includes(s)?-1:1,d=r&&a?-1:1,u=lt(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof h=="number"&&(p=l==="end"?h*-1:h),a?{x:p*d,y:m*c}:{x:m*c,y:p*d}}const Ie=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:l}=e,a=await He(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}},Fe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:w,y:x}=v;return{x:w,y:x}}},...a}=lt(t,e),c={x:o,y:n},d=await qt(e,a),u=Y(W(i)),m=It(u);let p=c[m],h=c[u];if(r){const v=m==="y"?"top":"left",w=m==="y"?"bottom":"right",x=p+d[v],A=p-d[w];p=Tt(x,p,A)}if(s){const v=u==="y"?"top":"left",w=u==="y"?"bottom":"right",x=h+d[v],A=h-d[w];h=Tt(x,h,A)}const g=l.fn({...e,[m]:p,[u]:h});return{...g,data:{x:g.x-o,y:g.y-n}}}}};function J(t){return jt(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jt(t){return t instanceof Node||t instanceof k(t).Node}function L(t){return t instanceof Element||t instanceof k(t).Element}function T(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function Pt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function We(t){return["table","td","th"].includes(J(t))}function ct(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function bt(t){const e=Ct(),o=L(t)?E(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function qe(t){let e=M(t);for(;T(e)&&!K(e);){if(bt(e))return e;if(ct(e))return null;e=M(e)}return null}function Ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function E(t){return k(t).getComputedStyle(t)}function ut(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function M(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Pt(t)&&t.host||z(t);return Pt(e)?e.host:e}function Gt(t){const e=M(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&nt(e)?e:Gt(e)}function vt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Gt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=k(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&o?vt(s.frameElement):[]):e.concat(i,vt(i,[],o))}function Xt(t){const e=E(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=T(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,l=it(o)!==r||it(n)!==s;return l&&(o=r,n=s),{width:o,height:n,$:l}}function Yt(t){return L(t)?t:t.contextElement}function X(t){const e=Yt(t);if(!T(e))return V(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Xt(e);let s=(r?it(o.width):o.width)/n,l=(r?it(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const je=V(0);function Kt(t){const e=k(t);return!Ct()||!e.visualViewport?je:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ge(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==k(t)?!1:e}function et(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=Yt(t);let s=V(1);e&&(n?L(n)&&(s=X(n)):s=X(t));const l=Ge(r,o,n)?Kt(r):V(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=k(r),p=n&&L(n)?k(n):n;let h=m,g=h.frameElement;for(;g&&n&&p!==h;){const v=X(g),w=g.getBoundingClientRect(),x=E(g),A=w.left+(g.clientLeft+parseFloat(x.paddingLeft))*v.x,S=w.top+(g.clientTop+parseFloat(x.paddingTop))*v.y;a*=v.x,c*=v.y,d*=v.x,u*=v.y,a+=A,c+=S,h=k(g),g=h.frameElement}}return rt({width:d,height:u,x:a,y:c})}function Xe(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=z(n),l=e?ct(e.floating):!1;if(n===s||l&&r)return o;let a={scrollLeft:0,scrollTop:0},c=V(1);const d=V(0),u=T(n);if((u||!u&&!r)&&((J(n)!=="body"||nt(s))&&(a=ut(n)),T(n))){const m=et(n);c=X(n),d.x=m.x+n.clientLeft,d.y=m.y+n.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+d.x,y:o.y*c.y-a.scrollTop*c.y+d.y}}function Ye(t){return Array.from(t.getClientRects())}function Jt(t){return et(z(t)).left+ut(t).scrollLeft}function Ke(t){const e=z(t),o=ut(t),n=t.ownerDocument.body,i=G(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=G(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Jt(t);const l=-o.scrollTop;return E(n).direction==="rtl"&&(s+=G(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Je(t,e){const o=k(t),n=z(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const c=Ct();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}function Qe(t,e){const o=et(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=T(t)?X(t):V(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,a=i*r.x,c=n*r.y;return{width:s,height:l,x:a,y:c}}function Ot(t,e,o){let n;if(e==="viewport")n=Je(t,o);else if(e==="document")n=Ke(z(t));else if(L(e))n=Qe(e,o);else{const i=Kt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return rt(n)}function Qt(t,e){const o=M(t);return o===e||!L(o)||K(o)?!1:E(o).position==="fixed"||Qt(o,e)}function Ue(t,e){const o=e.get(t);if(o)return o;let n=vt(t,[],!1).filter(l=>L(l)&&J(l)!=="body"),i=null;const r=E(t).position==="fixed";let s=r?M(t):t;for(;L(s)&&!K(s);){const l=E(s),a=bt(s);!a&&l.position==="fixed"&&(i=null),(r?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!a&&Qt(t,s))?n=n.filter(d=>d!==s):i=l,s=M(s)}return e.set(t,n),n}function Ze(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?ct(e)?[]:Ue(e,this._c):[].concat(o),n],l=s[0],a=s.reduce((c,d)=>{const u=Ot(e,d,i);return c.top=G(u.top,c.top),c.right=ht(u.right,c.right),c.bottom=ht(u.bottom,c.bottom),c.left=G(u.left,c.left),c},Ot(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function tn(t){const{width:e,height:o}=Xt(t);return{width:e,height:o}}function en(t,e,o){const n=T(e),i=z(e),r=o==="fixed",s=et(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=V(0);if(n||!n&&!r)if((J(e)!=="body"||nt(i))&&(l=ut(e)),n){const u=et(e,!0,r,e);a.x=u.x+e.clientLeft,a.y=u.y+e.clientTop}else i&&(a.x=Jt(i));const c=s.left+l.scrollLeft-a.x,d=s.top+l.scrollTop-a.y;return{x:c,y:d,width:s.width,height:s.height}}function pt(t){return E(t).position==="static"}function Dt(t,e){return!T(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ut(t,e){const o=k(t);if(ct(t))return o;if(!T(t)){let i=M(t);for(;i&&!K(i);){if(L(i)&&!pt(i))return i;i=M(i)}return o}let n=Dt(t,e);for(;n&&We(n)&&pt(n);)n=Dt(n,e);return n&&K(n)&&pt(n)&&!bt(n)?o:n||qe(t)||o}const nn=async function(t){const e=this.getOffsetParent||Ut,o=this.getDimensions,n=await o(t.floating);return{reference:en(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function on(t){return E(t).direction==="rtl"}const sn={convertOffsetParentRelativeRectToViewportRelativeRect:Xe,getDocumentElement:z,getClippingRect:Ze,getOffsetParent:Ut,getElementRects:nn,getClientRects:Ye,getDimensions:tn,getScale:X,isElement:L,isRTL:on},rn=Ie,ln=Fe,an=ze,cn=(t,e,o)=>{const n=new Map,i={platform:sn,...o},r={...i.platform,_c:n};return Me(t,e,{...i,platform:r})},un={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,o=yt(),n=Z(),i=Z(),r=Z({left:"0px",top:"0px"}),s=async()=>{if(n.value!==void 0&&i.value!==void 0){const{x:u,y:m}=await cn(n.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[...o.horizontalNavPopoverOffset?[rn(o.horizontalNavPopoverOffset)]:[],an({boundary:document.querySelector("body"),padding:{bottom:16}}),ln({boundary:document.querySelector("body"),padding:{bottom:16}})]});r.value.left=`${u}px`,r.value.top=`${m}px`}};se(()=>o.horizontalNavType).toMatch(u=>u==="static").then(()=>{re("scroll",s)});const l=Z(!1),a=()=>{l.value=!0,s()},c=()=>{l.value=!1};le(s),mt([()=>o.isAppRTL,()=>o.appContentWidth],s);const d=Vt();return mt(()=>d.fullPath,c),(u,m)=>(y(),F("div",{class:tt(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":f(l)}]])},[b("div",{ref_key:"refPopperContainer",ref:n,class:"popper-triggerer",onMouseenter:a,onMouseleave:c},[B(u.$slots,"default")],544),f(_).horizontalNav.transition?typeof f(_).horizontalNav.transition=="string"?(y(),R(ae,{key:1,name:f(_).horizontalNav.transition},{default:N(()=>[Lt(b("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(f(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(u.$slots,"content")])],36),[[Et,f(l)]])]),_:3},8,["name"])):(y(),R(P(f(_).horizontalNav.transition),{key:2},{default:N(()=>[Lt(b("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(f(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(u.$slots,"content")])],36),[[Et,f(l)]])]),_:3})):(y(),F("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:dt(f(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(u.$slots,"content")])],36))],2))}},fn=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],dn={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},_n={__name:"DefaultLayoutWithHorizontalNav",setup(t){return(e,o)=>{const n=ce("RouterLink");return y(),R(f(Ee),{"nav-items":f(fn)},{navbar:N(()=>{var i;return[I(n,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:N(()=>[I(f(ge),{nodes:f(_).app.logo},null,8,["nodes"]),b("h1",dn,wt(f(_).app.title),1)]),_:1}),I(ve),f(_).app.i18n.enable&&((i=f(_).app.i18n.langConfig)!=null&&i.length)?(y(),R(he,{key:0,languages:f(_).app.i18n.langConfig},null,8,["languages"])):xt("",!0),I(fe,{class:"me-2"}),I(de)]}),footer:N(()=>[I(ue)]),default:N(()=>[B(e.$slots,"default")]),_:3},8,["nav-items"])}}};export{_n as default};
