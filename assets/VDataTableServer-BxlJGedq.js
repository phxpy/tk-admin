import{V as De}from"./VDivider-D2ozgvGd.js";import{aF as Mt,r as E,aG as Rt,a7 as _,ak as O,aH as Nt,ai as Ke,aI as We,aJ as Et,am as Ht,aK as Gt,aj as ze,an as qe,aL as jt,a9 as G,aa as Q,aq as ae,aM as Kt,aN as Ue,aO as be,aP as Wt,aQ as oe,aR as zt,Y as p,aS as se,Z as T,ac as W,b as i,a4 as U,p as F,aT as Me,aC as Re,o as qt,c as Ut,d as Ne,t as Qe,m as Y,aU as Ve,M as X,Q as Z,aV as Xe,w as Ye,aW as we,aX as Qt,aY as H,aZ as Xt,a_ as Yt,a$ as Ze,b0 as te,b1 as de,b2 as ie,b3 as Te,b4 as Zt,b5 as Jt,ao as ea,b6 as ta,F as K,$ as Ee,s as He,b7 as ke,a3 as Ge,b8 as aa,b9 as ee,ba as Je}from"./index-CuWvZGrl.js";import{V as et}from"./AppSelect-D0v2Srq_.js";import{V as Fe}from"./VCheckboxBtn-DmbjUnDf.js";import{V as la}from"./VChip-CF135qOe.js";function je(e,l,a){return Object.keys(e).filter(t=>Mt(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}const na=(e,l)=>{const a=(e.page-1)*e.itemsPerPage+1,t=Math.min(e.page*e.itemsPerPage,l);return`Showing ${l===0?0:a} to ${t} of ${l} entries`};function ra(){const e=E([]);Rt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const ua=_({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:O,default:"$first"},prevIcon:{type:O,default:"$prev"},nextIcon:{type:O,default:"$next"},lastIcon:{type:O,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Nt(),...Ke(),...We(),...Et(),...Ht(),...Gt(),...ze({tag:"nav"}),...qe(),...jt({variant:"text"})},"VPagination"),pe=G()({name:"VPagination",props:ua(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=Q(e,"modelValue"),{t:r,n:s}=ae(),{isRtl:u}=Kt(),{themeClasses:o}=Ue(e),{width:d}=be(),m=Wt(-1);oe(void 0,{scoped:!0});const{resizeRef:h}=zt(x=>{if(!x.length)return;const{target:v,contentRect:w}=x[0],k=v.querySelector(".v-pagination__list > *");if(!k)return;const V=w.width,B=k.offsetWidth+parseFloat(getComputedStyle(k).marginRight)*2;m.value=S(V,B)}),c=p(()=>parseInt(e.length,10)),y=p(()=>parseInt(e.start,10)),g=p(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):m.value>=0?m.value:S(d.value,58));function S(x,v){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((x-v*w)/v).toFixed(2)))}const b=p(()=>{if(c.value<=0||isNaN(c.value)||c.value>Number.MAX_SAFE_INTEGER)return[];if(g.value<=0)return[];if(g.value===1)return[n.value];if(c.value<=g.value)return se(c.value,y.value);const x=g.value%2===0,v=x?g.value/2:Math.floor(g.value/2),w=x?v:v+1,k=c.value-v;if(w-n.value>=0)return[...se(Math.max(1,g.value-1),y.value),e.ellipsis,c.value];if(n.value-k>=(x?1:0)){const V=g.value-1,B=c.value-V+y.value;return[y.value,e.ellipsis,...se(V,B)]}else{const V=Math.max(1,g.value-3),B=V===1?n.value:n.value-Math.ceil(V/2)+y.value;return[y.value,e.ellipsis,...se(V,B),e.ellipsis,c.value]}});function P(x,v,w){x.preventDefault(),n.value=v,w&&t(w,v)}const{refs:f,updateRef:D}=ra();oe({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const L=p(()=>b.value.map((x,v)=>{const w=k=>D(k,v);if(typeof x=="string")return{isActive:!1,key:`ellipsis-${v}`,page:x,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const k=x===n.value;return{isActive:k,key:x,page:s(x),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:k?e.activeColor:e.color,"aria-current":k,"aria-label":r(k?e.currentPageAriaLabel:e.pageAriaLabel,x),onClick:V=>P(V,x)}}}})),I=p(()=>{const x=!!e.disabled||n.value<=y.value,v=!!e.disabled||n.value>=y.value+c.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:w=>P(w,y.value,"first"),disabled:x,"aria-label":r(e.firstAriaLabel),"aria-disabled":x}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:w=>P(w,n.value-1,"prev"),disabled:x,"aria-label":r(e.previousAriaLabel),"aria-disabled":x},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:w=>P(w,n.value+1,"next"),disabled:v,"aria-label":r(e.nextAriaLabel),"aria-disabled":v},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:w=>P(w,y.value+c.value-1,"last"),disabled:v,"aria-label":r(e.lastAriaLabel),"aria-disabled":v}:void 0}});function $(){var v;const x=n.value-y.value;(v=f.value[x])==null||v.$el.focus()}function M(x){x.key===Me.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Re($)):x.key===Me.right&&!e.disabled&&n.value<y.value+c.value-1&&(n.value=n.value+1,Re($))}return W(()=>i(e.tag,{ref:h,class:["v-pagination",o.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:M,"data-test":"v-pagination-root"},{default:()=>[i("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&i("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(I.value.first):i(U,F({_as:"VPaginationBtn"},I.value.first),null)]),i("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(I.value.prev):i(U,F({_as:"VPaginationBtn"},I.value.prev),null)]),L.value.map((x,v)=>i("li",{key:x.key,class:["v-pagination__item",{"v-pagination__item--is-active":x.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(x):i(U,F({_as:"VPaginationBtn"},x.props),{default:()=>[x.page]})])),i("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(I.value.next):i(U,F({_as:"VPaginationBtn"},I.value.next),null)]),e.showFirstLastPage&&i("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(I.value.last):i(U,F({_as:"VPaginationBtn"},I.value.last),null)])])]})),{}}}),sa={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 px-6 py-3"},ia={class:"text-disabled mb-0"},ja={__name:"TablePagination",props:{page:{type:Number,required:!0},itemsPerPage:{type:Number,required:!0},totalItems:{type:Number,required:!0}},emits:["update:page"],setup(e,{emit:l}){const a=l,t=n=>{a("update:page",n)};return(n,r)=>(qt(),Ut("div",null,[i(De),Ne("div",sa,[Ne("p",ia,Qe(("paginationMeta"in n?n.paginationMeta:Y(na))({page:e.page,itemsPerPage:e.itemsPerPage},e.totalItems)),1),i(pe,{"model-value":e.page,"active-color":"primary",length:Math.ceil(e.totalItems/e.itemsPerPage),"total-visible":n.$vuetify.display.xs?1:Math.min(Math.ceil(e.totalItems/e.itemsPerPage),5),"onUpdate:modelValue":t},null,8,["model-value","length","total-visible"])])]))}},tt=_({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),at=Symbol.for("vuetify:data-table-pagination");function lt(e){const l=Q(e,"page",void 0,t=>+(t??1)),a=Q(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function nt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=p(()=>a.value===-1?0:a.value*(l.value-1)),r=p(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),s=p(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));Ve(()=>{l.value>s.value&&(l.value=s.value)});function u(c){a.value=c,l.value=1}function o(){l.value=we(l.value+1,1,s.value)}function d(){l.value=we(l.value-1,1,s.value)}function m(c){l.value=we(c,1,s.value)}const h={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:s,itemsLength:t,nextPage:o,prevPage:d,setPage:m,setItemsPerPage:u};return X(at,h),h}function oa(){const e=Z(at);if(!e)throw new Error("Missing pagination!");return e}function da(e){const l=Xe("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,s=p(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Ye(s,u=>{l.emit("update:currentItems",u)}),{paginatedItems:s}}const _e=_({prevIcon:{type:O,default:"$prev"},nextIcon:{type:O,default:"$next"},firstIcon:{type:O,default:"$first"},lastIcon:{type:O,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),ce=G()({name:"VDataTableFooter",props:_e(),setup(e,l){let{slots:a}=l;const{t}=ae(),{page:n,pageCount:r,startIndex:s,stopIndex:u,itemsLength:o,itemsPerPage:d,setItemsPerPage:m}=oa(),h=p(()=>e.itemsPerPageOptions.map(c=>typeof c=="number"?{value:c,title:c===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(c)}:{...c,title:isNaN(Number(c.title))?t(c.title):c.title}));return W(()=>{var y;const c=pe.filterProps(e);return i("div",{class:"v-data-table-footer"},[(y=a.prepend)==null?void 0:y.call(a),i("div",{class:"v-data-table-footer__items-per-page"},[i("span",null,[t(e.itemsPerPageText)]),i(et,{items:h.value,modelValue:d.value,"onUpdate:modelValue":g=>m(Number(g)),density:"compact",variant:"outlined","hide-details":!0},null)]),i("div",{class:"v-data-table-footer__info"},[i("div",null,[t(e.pageText,o.value?s.value+1:0,u.value,o.value)])]),i("div",{class:"v-data-table-footer__pagination"},[i(pe,F({modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},c),null)])])}),{}}}),fe=Qt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return i(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:H(e.height),width:H(e.width),maxWidth:H(e.maxWidth),left:H(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),ca=_({headers:Array},"DataTable-header"),rt=Symbol.for("vuetify:data-table-headers"),ut={title:"",sortable:!1},fa={...ut,width:48};function va(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function Ie(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)Ie(a,l);return l}function st(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&st(a.children,l);return l}function ga(e){if(e.key){if(e.key==="data-table-group")return ut;if(["data-table-expand","data-table-select"].includes(e.key))return fa}}function Be(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>Be(a,l+1))):l}function ma(e){let l=!1;function a(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(s&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u],!0);else l?isNaN(+r.width)&&Yt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)a(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return s;if(r.children){r.fixedOffset=s;for(const u of r.children)s=t(u,s)}else r.fixed&&(r.fixedOffset=s,s+=parseFloat(r.width||"0")||0);return s}let n=0;for(const r of e)n=t(r,n)}function ba(e,l){const a=[];let t=0;const n=va(e);for(;n.size()>0;){let s=n.count();const u=[];let o=1;for(;s>0;){const{element:d,priority:m}=n.dequeue(),h=l-t-Be(d);if(u.push({...d,rowspan:h??1,colspan:d.children?Ie(d).length:1}),d.children)for(const c of d.children){const y=m%1+o/Math.pow(10,t+2);n.enqueue(c,t+h+y)}o+=1,s-=1}t+=1,a.push(u)}return{columns:e.map(s=>Ie(s)).flat(),headers:a}}function it(e){const l=[];for(const a of e){const t={...ga(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,s={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?it(t.children):void 0};l.push(s)}return l}function ot(e,l){const a=E([]),t=E([]),n=E({}),r=E({}),s=E({});Ve(()=>{var S,b,P;const d=(e.headers||Object.keys(e.items[0]??{}).map(f=>({key:f,title:Xt(f)}))).slice(),m=st(d);(S=l==null?void 0:l.groupBy)!=null&&S.value.length&&!m.has("data-table-group")&&d.unshift({key:"data-table-group",title:"Group"}),(b=l==null?void 0:l.showSelect)!=null&&b.value&&!m.has("data-table-select")&&d.unshift({key:"data-table-select"}),(P=l==null?void 0:l.showExpand)!=null&&P.value&&!m.has("data-table-expand")&&d.push({key:"data-table-expand"});const h=it(d);ma(h);const c=Math.max(...h.map(f=>Be(f)))+1,y=ba(h,c);a.value=y.headers,t.value=y.columns;const g=y.headers.flat(1);for(const f of g)f.key&&(f.sortable&&(f.sort&&(n.value[f.key]=f.sort),f.sortRaw&&(r.value[f.key]=f.sortRaw)),f.filter&&(s.value[f.key]=f.filter))});const u={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:s};return X(rt,u),u}function he(){const e=Z(rt);if(!e)throw new Error("Missing headers!");return e}const ha={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},dt={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return dt.select({items:a,value:l,selected:t})}},ct={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return ct.select({items:a,value:l,selected:t})}},ya=_({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ze}},"DataTable-select"),ft=Symbol.for("vuetify:data-table-selection");function vt(e,l){let{allItems:a,currentPage:t}=l;const n=Q(e,"modelValue",e.modelValue,P=>new Set(te(P).map(f=>{var D;return((D=a.value.find(L=>e.valueComparator(f,L.value)))==null?void 0:D.value)??f})),P=>[...P.values()]),r=p(()=>a.value.filter(P=>P.selectable)),s=p(()=>t.value.filter(P=>P.selectable)),u=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ha;case"all":return ct;case"page":default:return dt}});function o(P){return te(P).every(f=>n.value.has(f.value))}function d(P){return te(P).some(f=>n.value.has(f.value))}function m(P,f){const D=u.value.select({items:P,value:f,selected:new Set(n.value)});n.value=D}function h(P){m([P],!o([P]))}function c(P){const f=u.value.selectAll({value:P,allItems:r.value,currentPage:s.value,selected:new Set(n.value)});n.value=f}const y=p(()=>n.value.size>0),g=p(()=>{const P=u.value.allSelected({allItems:r.value,currentPage:s.value});return!!P.length&&o(P)}),S=p(()=>u.value.showSelectAll),b={toggleSelect:h,select:m,selectAll:c,isSelected:o,isSomeSelected:d,someSelected:y,allSelected:g,showSelectAll:S};return X(ft,b),b}function ye(){const e=Z(ft);if(!e)throw new Error("Missing selection!");return e}const Pa=_({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),gt=Symbol.for("vuetify:data-table-sort");function mt(e){const l=Q(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function bt(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=o=>{if(o.key==null)return;let d=l.value.map(h=>({...h}))??[];const m=d.find(h=>h.key===o.key);m?m.order==="desc"?a.value?m.order="asc":d=d.filter(h=>h.key!==o.key):m.order="desc":t.value?d=[...d,{key:o.key,order:"asc"}]:d=[{key:o.key,order:"asc"}],l.value=d,n&&(n.value=1)};function s(o){return!!l.value.find(d=>d.key===o.key)}const u={sortBy:l,toggleSort:r,isSorted:s};return X(gt,u),u}function ht(){const e=Z(gt);if(!e)throw new Error("Missing sort!");return e}function xa(e,l,a,t){const n=ae();return{sortedItems:p(()=>{var s,u;return a.value.length?Sa(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(s=t==null?void 0:t.sortFunctions)==null?void 0:s.value},sortRawFunctions:(u=t==null?void 0:t.sortRawFunctions)==null?void 0:u.value}):l.value})}}function Sa(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(s=>[s,t!=null&&t.transform?t.transform(s):s]).sort((s,u)=>{var o,d;for(let m=0;m<l.length;m++){let h=!1;const c=l[m].key,y=l[m].order??"asc";if(y===!1)continue;let g=de(s[1],c),S=de(u[1],c),b=s[0].raw,P=u[0].raw;if(y==="desc"&&([g,S]=[S,g],[b,P]=[P,b]),(o=t==null?void 0:t.sortRawFunctions)!=null&&o[c]){const f=t.sortRawFunctions[c](b,P);if(f==null)continue;if(h=!0,f)return f}if((d=t==null?void 0:t.sortFunctions)!=null&&d[c]){const f=t.sortFunctions[c](g,S);if(f==null)continue;if(h=!0,f)return f}if(!h){if(g instanceof Date&&S instanceof Date)return g.getTime()-S.getTime();if([g,S]=[g,S].map(f=>f!=null?f.toString().toLocaleLowerCase():f),g!==S)return ie(g)&&ie(S)?0:ie(g)?-1:ie(S)?1:!isNaN(g)&&!isNaN(S)?Number(g)-Number(S):n.compare(g,S)}}return 0}).map(s=>{let[u]=s;return u})}const yt=_({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:O,default:"$sortAsc"},sortDescIcon:{type:O,default:"$sortDesc"},headerProps:{type:Object},...Te(),...Zt()},"VDataTableHeaders"),ve=G()({name:"VDataTableHeaders",props:yt(),setup(e,l){let{slots:a}=l;const{t}=ae(),{toggleSort:n,sortBy:r,isSorted:s}=ht(),{someSelected:u,allSelected:o,selectAll:d,showSelectAll:m}=ye(),{columns:h,headers:c}=he(),{loaderClasses:y}=Jt(e);function g(x,v){if(!(!e.sticky&&!x.fixed))return{position:"sticky",left:x.fixed?H(x.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${v})`:void 0}}function S(x){const v=r.value.find(w=>w.key===x.key);return v?v.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:b,backgroundColorStyles:P}=ea(e,"color"),{displayClasses:f,mobile:D}=be(e),L=p(()=>({headers:c.value,columns:h.value,toggleSort:n,isSorted:s,sortBy:r.value,someSelected:u.value,allSelected:o.value,selectAll:d,getSortIcon:S})),I=p(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},f.value,y.value]),$=x=>{let{column:v,x:w,y:k}=x;const V=v.key==="data-table-select"||v.key==="data-table-expand",B=F(e.headerProps??{},v.headerProps??{});return i(fe,F({tag:"th",align:v.align,class:[{"v-data-table__th--sortable":v.sortable&&!e.disableSort,"v-data-table__th--sorted":s(v),"v-data-table__th--fixed":v.fixed},...I.value],style:{width:H(v.width),minWidth:H(v.minWidth),maxWidth:H(v.maxWidth),...g(v,k)},colspan:v.colspan,rowspan:v.rowspan,onClick:v.sortable?()=>n(v):void 0,fixed:v.fixed,nowrap:v.nowrap,lastFixed:v.lastFixed,noPadding:V},B),{default:()=>{var C;const R=`header.${v.key}`,z={column:v,selectAll:d,isSorted:s,toggleSort:n,sortBy:r.value,someSelected:u.value,allSelected:o.value,getSortIcon:S};return a[R]?a[R](z):v.key==="data-table-select"?((C=a["header.data-table-select"])==null?void 0:C.call(a,z))??(m.value&&i(Fe,{modelValue:o.value,indeterminate:u.value&&!o.value,"onUpdate:modelValue":d},null)):i("div",{class:"v-data-table-header__content"},[i("span",null,[v.title]),v.sortable&&!e.disableSort&&i(Ee,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(v)},null),e.multiSort&&s(v)&&i("div",{key:"badge",class:["v-data-table-header__sort-badge",...b.value],style:P.value},[r.value.findIndex(N=>N.key===v.key)+1])])}})},M=()=>{const x=F(e.headerProps??{}??{}),v=p(()=>h.value.filter(k=>(k==null?void 0:k.sortable)&&!e.disableSort)),w=p(()=>{if(h.value.find(V=>V.key==="data-table-select")!=null)return o.value?"$checkboxOn":u.value?"$checkboxIndeterminate":"$checkboxOff"});return i(fe,F({tag:"th",class:[...I.value],colspan:c.value.length+1},x),{default:()=>[i("div",{class:"v-data-table-header__content"},[i(et,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:v.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:w.value,"onClick:append":()=>d(!o.value)},{...a,chip:k=>{var V;return i(la,{onClick:(V=k.item.raw)!=null&&V.sortable?()=>n(k.item.raw):void 0,onMousedown:B=>{B.preventDefault(),B.stopPropagation()}},{default:()=>[k.item.title,i(Ee,{class:["v-data-table__td-sort-icon",s(k.item.raw)&&"v-data-table__td-sort-icon-active"],icon:S(k.item.raw),size:"small"},null)]})}})])]})};W(()=>D.value?i("tr",null,[i(M,null,null)]):i(K,null,[a.headers?a.headers(L.value):c.value.map((x,v)=>i("tr",null,[x.map((w,k)=>i($,{column:w,x:k,y:v},null))])),e.loading&&i("tr",{class:"v-data-table-progress"},[i("th",{colspan:h.value.length},[i(ta,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),wa=_({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Pt=Symbol.for("vuetify:data-table-group");function xt(e){return{groupBy:Q(e,"groupBy")}}function St(e){const{disableSort:l,groupBy:a,sortBy:t}=e,n=E(new Set),r=p(()=>a.value.map(m=>({...m,order:m.order??!1})).concat(l!=null&&l.value?[]:t.value));function s(m){return n.value.has(m.id)}function u(m){const h=new Set(n.value);s(m)?h.delete(m.id):h.add(m.id),n.value=h}function o(m){function h(c){const y=[];for(const g of c.items)"type"in g&&g.type==="group"?y.push(...h(g)):y.push(g);return y}return h({type:"group",items:m,id:"dummy",key:"dummy",value:"dummy",depth:0})}const d={sortByWithGroups:r,toggleGroup:u,opened:n,groupBy:a,extractRows:o,isGroupOpen:s};return X(Pt,d),d}function wt(){const e=Z(Pt);if(!e)throw new Error("Missing group!");return e}function ka(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=de(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function kt(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=ka(e,l[0]),r=[],s=l.slice(1);return n.forEach((u,o)=>{const d=l[0],m=`${t}_${d}_${o}`;r.push({depth:a,id:m,key:d,value:o,items:s.length?kt(u,s,a+1,m):u,type:"group"})}),r}function pt(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...pt(t.items,l))):a.push(t);return a}function It(e,l,a){return{flatItems:p(()=>{if(!l.value.length)return e.value;const n=kt(e.value,l.value.map(r=>r.key));return pt(n,a.value)})}}const pa=_({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Ia=G()({name:"VDataTableGroupHeaderRow",props:pa(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=wt(),{isSelected:s,isSomeSelected:u,select:o}=ye(),{columns:d}=he(),m=p(()=>r([e.item]));return()=>i("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map(h=>{var c,y;if(h.key==="data-table-group"){const g=t(e.item)?"$expand":"$next",S=()=>n(e.item);return((c=a["data-table-group"])==null?void 0:c.call(a,{item:e.item,count:m.value.length,props:{icon:g,onClick:S}}))??i(fe,{class:"v-data-table-group-header-row__column"},{default:()=>[i(U,{size:"small",variant:"text",icon:g,onClick:S},null),i("span",null,[e.item.value]),i("span",null,[He("("),m.value.length,He(")")])]})}if(h.key==="data-table-select"){const g=s(m.value),S=u(m.value)&&!g,b=P=>o(m.value,P);return((y=a["data-table-select"])==null?void 0:y.call(a,{props:{modelValue:g,indeterminate:S,"onUpdate:modelValue":b}}))??i("td",null,[i(Fe,{modelValue:g,indeterminate:S,"onUpdate:modelValue":b},null)])}return i("td",null,null)})])}}),Da=_({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Dt=Symbol.for("vuetify:datatable:expanded");function Vt(e){const l=T(e,"expandOnClick"),a=Q(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function t(u,o){const d=new Set(a.value);o?d.add(u.value):d.delete(u.value),a.value=d}function n(u){return a.value.has(u.value)}function r(u){t(u,!n(u))}const s={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return X(Dt,s),s}function Tt(){const e=Z(Dt);if(!e)throw new Error("foo");return e}const Va=_({index:Number,item:Object,cellProps:[Object,Function],onClick:ke(),onContextmenu:ke(),onDblclick:ke(),...Te()},"VDataTableRow"),Ta=G()({name:"VDataTableRow",props:Va(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=be(e,"v-data-table__tr"),{isSelected:r,toggleSelect:s,someSelected:u,allSelected:o,selectAll:d}=ye(),{isExpanded:m,toggleExpand:h}=Tt(),{toggleSort:c,sortBy:y,isSorted:g}=ht(),{columns:S}=he();W(()=>i("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&S.value.map((b,P)=>{const f=e.item,D=`item.${b.key}`,L=`header.${b.key}`,I={index:e.index,item:f.raw,internalItem:f,value:de(f.columns,b.key),column:b,isSelected:r,toggleSelect:s,isExpanded:m,toggleExpand:h},$={column:b,selectAll:d,isSorted:g,toggleSort:c,sortBy:y.value,someSelected:u.value,allSelected:o.value,getSortIcon:()=>""},M=typeof e.cellProps=="function"?e.cellProps({index:I.index,item:I.item,internalItem:I.internalItem,value:I.value,column:b}):e.cellProps,x=typeof b.cellProps=="function"?b.cellProps({index:I.index,item:I.item,internalItem:I.internalItem,value:I.value}):b.cellProps;return i(fe,F({align:b.align,class:{"v-data-table__td--expanded-row":b.key==="data-table-expand","v-data-table__td--select-row":b.key==="data-table-select"},fixed:b.fixed,fixedOffset:b.fixedOffset,lastFixed:b.lastFixed,maxWidth:n.value?void 0:b.maxWidth,noPadding:b.key==="data-table-select"||b.key==="data-table-expand",nowrap:b.nowrap,width:n.value?void 0:b.width},M,x),{default:()=>{var w,k,V,B,R;if(a[D]&&!n.value)return(w=a[D])==null?void 0:w.call(a,I);if(b.key==="data-table-select")return((k=a["item.data-table-select"])==null?void 0:k.call(a,I))??i(Fe,{disabled:!f.selectable,modelValue:r([f]),onClick:Ge(()=>s(f),["stop"])},null);if(b.key==="data-table-expand")return((V=a["item.data-table-expand"])==null?void 0:V.call(a,I))??i(U,{icon:m(f)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ge(()=>h(f),["stop"])},null);const v=Qe(I.value);return n.value?i(K,null,[i("div",{class:"v-data-table__td-title"},[((B=a[L])==null?void 0:B.call(a,$))??b.title]),i("div",{class:"v-data-table__td-value"},[((R=a[D])==null?void 0:R.call(a,I))??v])]):v}})})]))}}),Ft=_({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...Te()},"VDataTableRows"),ge=G()({name:"VDataTableRows",inheritAttrs:!1,props:Ft(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=he(),{expandOnClick:r,toggleExpand:s,isExpanded:u}=Tt(),{isSelected:o,toggleSelect:d}=ye(),{toggleGroup:m,isGroupOpen:h}=wt(),{t:c}=ae(),{mobile:y}=be(e);return W(()=>{var g,S;return e.loading&&(!e.items.length||t.loading)?i("tr",{class:"v-data-table-rows-loading",key:"loading"},[i("td",{colspan:n.value.length},[((g=t.loading)==null?void 0:g.call(t))??c(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?i("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[i("td",{colspan:n.value.length},[((S=t["no-data"])==null?void 0:S.call(t))??c(e.noDataText)])]):i(K,null,[e.items.map((b,P)=>{var L;if(b.type==="group"){const I={index:P,item:b,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:o,toggleSelect:d,toggleGroup:m,isGroupOpen:h};return t["group-header"]?t["group-header"](I):i(Ia,F({key:`group-header_${b.id}`,item:b},je(a,":group-header",()=>I)),t)}const f={index:P,item:b.raw,internalItem:b,columns:n.value,isExpanded:u,toggleExpand:s,isSelected:o,toggleSelect:d},D={...f,props:F({key:`item_${b.key??b.index}`,onClick:r.value?()=>{s(b)}:void 0,index:P,item:b,cellProps:e.cellProps,mobile:y.value},je(a,":row",()=>f),typeof e.rowProps=="function"?e.rowProps({item:f.item,index:f.index,internalItem:f.internalItem}):e.rowProps)};return i(K,{key:D.props.key},[t.item?t.item(D):i(Ta,D.props,t),u(b)&&((L=t["expanded-row"])==null?void 0:L.call(t,f))])})])}),{}}}),_t=_({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Ke(),...We(),...ze(),...qe()},"VTable"),me=G()({name:"VTable",props:_t(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=Ue(e),{densityClasses:r}=aa(e);return W(()=>i(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var s,u,o;return[(s=a.top)==null?void 0:s.call(a),a.default?i("div",{class:"v-table__wrapper",style:{height:H(e.height)}},[i("table",null,[a.default()])]):(u=a.wrapper)==null?void 0:u.call(a),(o=a.bottom)==null?void 0:o.call(a)]}})),{}}}),Fa=_({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function _a(e,l,a,t){const n=e.returnObject?l:ee(l,e.itemValue),r=ee(l,e.itemSelectable,!0),s=t.reduce((u,o)=>(o.key!=null&&(u[o.key]=ee(l,o.value)),u),{});return{type:"item",key:e.returnObject?ee(l,e.itemValue):n,index:a,value:n,selectable:r,columns:s,raw:l}}function Ba(e,l,a){return l.map((t,n)=>_a(e,t,n,a))}function Bt(e,l){return{items:p(()=>Ba(e,e.items,l.value))}}function Ct(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const s=Xe("VDataTable"),u=p(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let o=null;Ye(u,()=>{Ze(o,u.value)||(o&&o.search!==u.value.search&&(l.value=1),s.emit("update:options",u.value),o=u.value)},{deep:!0,immediate:!0})}const Ca=(e,l,a)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),La=_({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Aa(e,l,a){var u;const t=[],n=(a==null?void 0:a.default)??Ca,r=a!=null&&a.filterKeys?te(a.filterKeys):!1,s=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let o=0;o<e.length;o++){const[d,m=d]=te(e[o]),h={},c={};let y=-1;if((l||s>0)&&!(a!=null&&a.noFilter)){if(typeof d=="object"){const b=r||Object.keys(m);for(const P of b){const f=ee(m,P),D=(u=a==null?void 0:a.customKeyFilter)==null?void 0:u[P];if(y=D?D(f,l,d):n(f,l,d),y!==-1&&y!==!1)D?h[P]=y:c[P]=y;else if((a==null?void 0:a.filterMode)==="every")continue e}}else y=n(d,l,d),y!==-1&&y!==!1&&(c.title=y);const g=Object.keys(c).length,S=Object.keys(h).length;if(!g&&!S||(a==null?void 0:a.filterMode)==="union"&&S!==s&&!g||(a==null?void 0:a.filterMode)==="intersection"&&(S!==s||!g))continue}t.push({index:o,matches:{...c,...h}})}return t}function $a(e,l,a,t){const n=E([]),r=E(new Map),s=p(()=>t!=null&&t.transform?Y(l).map(o=>[o,t.transform(o)]):Y(l));Ve(()=>{const o=typeof a=="function"?a():Y(a),d=typeof o!="string"&&typeof o!="number"?"":String(o),m=Aa(s.value,d,{customKeyFilter:{...e.customKeyFilter,...Y(t==null?void 0:t.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),h=Y(l),c=[],y=new Map;m.forEach(g=>{let{index:S,matches:b}=g;const P=h[S];c.push(P),y.set(P.value,b)}),n.value=c,r.value=y});function u(o){return r.value.get(o.value)}return{filteredItems:n,filteredMatches:r,getMatches:u}}const Lt=_({...Ft(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...Da(),...wa(),...ca(),...Fa(),...ya(),...Pa(),...yt(),..._t()},"DataTable"),Oa=_({...tt(),...Lt(),...La(),..._e()},"VDataTable");G()({name:"VDataTable",props:Oa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=xt(e),{sortBy:r,multiSort:s,mustSort:u}=mt(e),{page:o,itemsPerPage:d}=lt(e),{disableSort:m}=Je(e),{columns:h,headers:c,sortFunctions:y,sortRawFunctions:g,filterFunctions:S}=ot(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:b}=Bt(e,h),P=T(e,"search"),{filteredItems:f}=$a(e,b,P,{transform:j=>j.columns,customKeyFilter:S}),{toggleSort:D}=bt({sortBy:r,multiSort:s,mustSort:u,page:o}),{sortByWithGroups:L,opened:I,extractRows:$,isGroupOpen:M,toggleGroup:x}=St({groupBy:n,sortBy:r,disableSort:m}),{sortedItems:v}=xa(e,f,L,{transform:j=>({...j.raw,...j.columns}),sortFunctions:y,sortRawFunctions:g}),{flatItems:w}=It(v,n,I),k=p(()=>w.value.length),{startIndex:V,stopIndex:B,pageCount:R,setItemsPerPage:z}=nt({page:o,itemsPerPage:d,itemsLength:k}),{paginatedItems:C}=da({items:w,startIndex:V,stopIndex:B,itemsPerPage:d}),N=p(()=>$(C.value)),{isSelected:Pe,select:xe,selectAll:Se,toggleSelect:q,someSelected:le,allSelected:ne}=vt(e,{allItems:b,currentPage:N}),{isExpanded:re,toggleExpand:ue}=Vt(e);Ct({page:o,itemsPerPage:d,sortBy:r,groupBy:n,search:P}),oe({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const A=p(()=>({page:o.value,itemsPerPage:d.value,sortBy:r.value,pageCount:R.value,toggleSort:D,setItemsPerPage:z,someSelected:le.value,allSelected:ne.value,isSelected:Pe,select:xe,selectAll:Se,toggleSelect:q,isExpanded:re,toggleExpand:ue,isGroupOpen:M,toggleGroup:x,items:N.value.map(j=>j.raw),internalItems:N.value,groupedItems:C.value,columns:h.value,headers:c.value}));return W(()=>{const j=ce.filterProps(e),At=ve.filterProps(e),$t=ge.filterProps(e),Ot=me.filterProps(e);return i(me,F({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Ot),{top:()=>{var J;return(J=t.top)==null?void 0:J.call(t,A.value)},default:()=>{var J,Ce,Le,Ae,$e,Oe;return t.default?t.default(A.value):i(K,null,[(J=t.colgroup)==null?void 0:J.call(t,A.value),!e.hideDefaultHeader&&i("thead",{key:"thead"},[i(ve,At,t)]),(Ce=t.thead)==null?void 0:Ce.call(t,A.value),!e.hideDefaultBody&&i("tbody",null,[(Le=t["body.prepend"])==null?void 0:Le.call(t,A.value),t.body?t.body(A.value):i(ge,F(a,$t,{items:C.value}),t),(Ae=t["body.append"])==null?void 0:Ae.call(t,A.value)]),($e=t.tbody)==null?void 0:$e.call(t,A.value),(Oe=t.tfoot)==null?void 0:Oe.call(t,A.value)])},bottom:()=>t.bottom?t.bottom(A.value):!e.hideDefaultFooter&&i(K,null,[i(De,null,null),i(ce,j,{prepend:t["footer.prepend"]})])})}),{}}});const Ma=_({itemsLength:{type:[Number,String],required:!0},...tt(),...Lt(),..._e()},"VDataTableServer"),Ka=G()({name:"VDataTableServer",props:Ma(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=xt(e),{sortBy:r,multiSort:s,mustSort:u}=mt(e),{page:o,itemsPerPage:d}=lt(e),{disableSort:m}=Je(e),h=p(()=>parseInt(e.itemsLength,10)),{columns:c,headers:y}=ot(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:g}=Bt(e,c),{toggleSort:S}=bt({sortBy:r,multiSort:s,mustSort:u,page:o}),{opened:b,isGroupOpen:P,toggleGroup:f,extractRows:D}=St({groupBy:n,sortBy:r,disableSort:m}),{pageCount:L,setItemsPerPage:I}=nt({page:o,itemsPerPage:d,itemsLength:h}),{flatItems:$}=It(g,n,b),{isSelected:M,select:x,selectAll:v,toggleSelect:w,someSelected:k,allSelected:V}=vt(e,{allItems:g,currentPage:g}),{isExpanded:B,toggleExpand:R}=Vt(e),z=p(()=>D(g.value));Ct({page:o,itemsPerPage:d,sortBy:r,groupBy:n,search:T(e,"search")}),X("v-data-table",{toggleSort:S,sortBy:r}),oe({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const C=p(()=>({page:o.value,itemsPerPage:d.value,sortBy:r.value,pageCount:L.value,toggleSort:S,setItemsPerPage:I,someSelected:k.value,allSelected:V.value,isSelected:M,select:x,selectAll:v,toggleSelect:w,isExpanded:B,toggleExpand:R,isGroupOpen:P,toggleGroup:f,items:z.value.map(N=>N.raw),internalItems:z.value,groupedItems:$.value,columns:c.value,headers:y.value}));W(()=>{const N=ce.filterProps(e),Pe=ve.filterProps(e),xe=ge.filterProps(e),Se=me.filterProps(e);return i(me,F({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},Se),{top:()=>{var q;return(q=t.top)==null?void 0:q.call(t,C.value)},default:()=>{var q,le,ne,re,ue,A;return t.default?t.default(C.value):i(K,null,[(q=t.colgroup)==null?void 0:q.call(t,C.value),!e.hideDefaultHeader&&i("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[i(ve,F(Pe,{sticky:e.fixedHeader}),t)]),(le=t.thead)==null?void 0:le.call(t,C.value),!e.hideDefaultBody&&i("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(ne=t["body.prepend"])==null?void 0:ne.call(t,C.value),t.body?t.body(C.value):i(ge,F(a,xe,{items:$.value}),t),(re=t["body.append"])==null?void 0:re.call(t,C.value)]),(ue=t.tbody)==null?void 0:ue.call(t,C.value),(A=t.tfoot)==null?void 0:A.call(t,C.value)])},bottom:()=>t.bottom?t.bottom(C.value):!e.hideDefaultFooter&&i(K,null,[i(De,null,null),i(ce,N,{prepend:t["footer.prepend"]})])})})}});export{Ka as V,ja as _};
