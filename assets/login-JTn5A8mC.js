import{af as v,ae as T,r as w,i as F,j as O,a as B,o as U,c as D,b as l,e as f,d as g,m as a,E as _,t as R,s as E,a3 as N,a4 as L,F as z,ay as H}from"./index-6qhbcl8C.js";import{_ as M}from"./AppTextField-_W1RYwHf.js";import{V as J}from"./VNodeRenderer-C36qzV16.js";import{a as I,w as G}from"./index-DMgXl1JY.js";import{a as q,V as S}from"./VRow-BvXC9lWQ.js";import{V as W}from"./VCard-vGhulb_L.js";import{V as A}from"./VCardText-DwthTsTm.js";import{V as K}from"./VForm-DIhwRQCR.js";import"./VTextField-BkUaSmbg.js";import"./VImg-UJP3gswu.js";import"./forwardRefs-DWGaNmQL.js";/* empty css              */import"./VAvatar-CbXgK7BC.js";const Q=o=>o==null||o===""?!0:!!(Array.isArray(o)&&o.length===0),X=o=>o==null,Y=o=>Array.isArray(o)&&o.length===0,k=o=>X(o)||Y(o)||o===!1?"This field is required":!!String(o).trim().length||"This field is required",Z=o=>{if(Q(o))return!0;const r=/^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i;return Array.isArray(o)?o.every(n=>r.test(String(n)))||"The Email field must be a valid email":r.test(String(o))||"The Email field must be a valid email"};class x extends Error{constructor(r,n){super(r,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function ee(o){var m,u,e,t,y;const r=((m=o.error)==null?void 0:m.message)||((u=o.error)==null?void 0:u.toString())||"",n=((e=o.request)==null?void 0:e.method)||((t=o.options)==null?void 0:t.method)||"GET",c=((y=o.request)==null?void 0:y.url)||String(o.request)||"/",b=`[${n}] ${JSON.stringify(c)}`,d=o.response?`${o.response.status} ${o.response.statusText}`:"<no response>",h=`${b}: ${d}${r?` ${r}`:""}`,s=new x(h,o.error?{cause:o.error}:void 0);for(const p of["request","options","response"])Object.defineProperty(s,p,{get(){return o[p]}});for(const[p,i]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(s,p,{get(){return o.response&&o.response[i]}});return s}const oe=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function C(o="GET"){return oe.has(o.toUpperCase())}function re(o){if(o===void 0)return!1;const r=typeof o;return r==="string"||r==="number"||r==="boolean"||r===null?!0:r!=="object"?!1:Array.isArray(o)?!0:o.buffer?!1:o.constructor&&o.constructor.name==="Object"||typeof o.toJSON=="function"}const se=new Set(["image/svg","application/xml","application/xhtml","application/html"]),te=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function ne(o=""){if(!o)return"json";const r=o.split(";").shift()||"";return te.test(r)?"json":se.has(r)||r.startsWith("text/")?"text":"blob"}function ae(o,r,n=globalThis.Headers){const c={...r,...o};if(r!=null&&r.params&&(o!=null&&o.params)&&(c.params={...r==null?void 0:r.params,...o==null?void 0:o.params}),r!=null&&r.query&&(o!=null&&o.query)&&(c.query={...r==null?void 0:r.query,...o==null?void 0:o.query}),r!=null&&r.headers&&(o!=null&&o.headers)){c.headers=new n((r==null?void 0:r.headers)||{});for(const[b,d]of new n((o==null?void 0:o.headers)||{}))c.headers.set(b,d)}return c}const ie=new Set([408,409,425,429,500,502,503,504]),pe=new Set([101,204,205,304]);function $(o={}){const{fetch:r=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:c=globalThis.AbortController}=o;async function b(s){const m=s.error&&s.error.name==="AbortError"&&!s.options.timeout||!1;if(s.options.retry!==!1&&!m){let e;typeof s.options.retry=="number"?e=s.options.retry:e=C(s.options.method)?0:1;const t=s.response&&s.response.status||500;if(e>0&&(Array.isArray(s.options.retryStatusCodes)?s.options.retryStatusCodes.includes(t):ie.has(t))){const y=s.options.retryDelay||0;return y>0&&await new Promise(p=>setTimeout(p,y)),d(s.request,{...s.options,retry:e-1})}}const u=ee(s);throw Error.captureStackTrace&&Error.captureStackTrace(u,d),u}const d=async function(m,u={}){var p;const e={request:m,options:ae(u,o.defaults,n),response:void 0,error:void 0};e.options.method=(p=e.options.method)==null?void 0:p.toUpperCase(),e.options.onRequest&&await e.options.onRequest(e),typeof e.request=="string"&&(e.options.baseURL&&(e.request=I(e.request,e.options.baseURL)),(e.options.query||e.options.params)&&(e.request=G(e.request,{...e.options.params,...e.options.query}))),e.options.body&&C(e.options.method)&&(re(e.options.body)?(e.options.body=typeof e.options.body=="string"?e.options.body:JSON.stringify(e.options.body),e.options.headers=new n(e.options.headers||{}),e.options.headers.has("content-type")||e.options.headers.set("content-type","application/json"),e.options.headers.has("accept")||e.options.headers.set("accept","application/json")):("pipeTo"in e.options.body&&typeof e.options.body.pipeTo=="function"||typeof e.options.body.pipe=="function")&&("duplex"in e.options||(e.options.duplex="half")));let t;if(!e.options.signal&&e.options.timeout){const i=new c;t=setTimeout(()=>i.abort(),e.options.timeout),e.options.signal=i.signal}try{e.response=await r(e.request,e.options)}catch(i){return e.error=i,e.options.onRequestError&&await e.options.onRequestError(e),await b(e)}finally{t&&clearTimeout(t)}if(e.response.body&&!pe.has(e.response.status)&&e.options.method!=="HEAD"){const i=(e.options.parseResponse?"json":e.options.responseType)||ne(e.response.headers.get("content-type")||"");switch(i){case"json":{const j=await e.response.text(),P=e.options.parseResponse||v;e.response._data=P(j);break}case"stream":{e.response._data=e.response.body;break}default:e.response._data=await e.response[i]()}}return e.options.onResponse&&await e.options.onResponse(e),!e.options.ignoreResponseError&&e.response.status>=400&&e.response.status<600?(e.options.onResponseError&&await e.options.onResponseError(e),await b(e)):e.response},h=async function(m,u){return(await d(m,u))._data};return h.raw=d,h.native=(...s)=>r(...s),h.create=(s={})=>$({...o,defaults:{...o.defaults,...s}}),h}const V=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),le=V.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),de=V.Headers,ce=V.AbortController,ue=$({fetch:le,Headers:de,AbortController:ce});var fe={BASE_URL:"/tk-admin/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const me=ue.create({baseURL:fe.VITE_API_BASE_URL||"/api",async onRequest({options:o}){const r=T("accessToken").value;r&&(o.headers={...o.headers,Authorization:`Bearer ${r}`})}}),ye={class:"auth-logo d-flex align-center gap-x-3"},he={class:"auth-title"},be={class:"text-h4 mb-1"},ge={class:"text-capitalize"},we=g("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),ve={__name:"login",setup(o){const r=w(!1),n=F(),c=O(),b=useAbility(),d=w({email:void 0,password:void 0}),h=w(),s=w({email:"admin@demo.com",password:"admin"}),m=async()=>{try{const e=await me("http://tg-adsnet-api-proxy.goourl.ru/api/auth/token/",{method:"POST",body:{email:s.value.email,password:s.value.password},onResponseError({response:i}){d.value=i._data.errors}}),{accessToken:t,userData:y,userAbilityRules:p}=e;T("userAbilityRules").value=p,b.update(p),T("userData").value=y,T("accessToken").value=t,await H(()=>{c.replace(n.query.to?String(n.query.to):"/")})}catch(e){console.error(e)}},u=()=>{var e;(e=h.value)==null||e.validate().then(({valid:t})=>{t&&m()})};return(e,t)=>{const y=B("RouterLink"),p=M;return U(),D(z,null,[l(y,{to:"/"},{default:f(()=>[g("div",ye,[l(a(J),{nodes:a(_).app.logo},null,8,["nodes"]),g("h1",he,R(a(_).app.title),1)])]),_:1}),l(S,{class:"auth-wrapper"},{default:f(()=>[l(q,{cols:"12",md:"12",class:"auth-card-v2 d-flex align-center justify-center"},{default:f(()=>[l(W,{"max-width":460,class:"my-sm-16"},{default:f(()=>[l(A,null,{default:f(()=>[g("h4",be,[E(" Welcome to "),g("span",ge,R(a(_).app.title),1),E("! 👋🏻 ")]),we]),_:1}),l(A,null,{default:f(()=>[l(a(K),{ref_key:"refVForm",ref:h,onSubmit:N(u,["prevent"])},{default:f(()=>[l(S,null,{default:f(()=>[l(q,{cols:"12"},{default:f(()=>[l(p,{modelValue:a(s).email,"onUpdate:modelValue":t[0]||(t[0]=i=>a(s).email=i),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in e?e.requiredValidator:a(k),"emailValidator"in e?e.emailValidator:a(Z)],"error-messages":a(d).email},null,8,["modelValue","rules","error-messages"])]),_:1}),l(q,{cols:"12"},{default:f(()=>[l(p,{modelValue:a(s).password,"onUpdate:modelValue":t[1]||(t[1]=i=>a(s).password=i),label:"Password",placeholder:"············",rules:["requiredValidator"in e?e.requiredValidator:a(k)],type:a(r)?"text":"password","error-messages":a(d).password,"append-inner-icon":a(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[2]||(t[2]=i=>r.value=!a(r))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),l(L,{block:"",type:"submit",class:"mt-6"},{default:f(()=>[E(" Login ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{ve as default};
