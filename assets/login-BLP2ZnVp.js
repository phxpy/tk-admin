import{ay as v,af as F,ae as T,r as w,i as O,j as B,a as U,o as D,c as N,b as p,e as f,d as g,m as a,E as _,t as R,s as E,a3 as L,a4 as z,F as H,az as M}from"./index-Car6FPgr.js";import{_ as J}from"./AppTextField-B0aOtF_Q.js";import{V as I}from"./VNodeRenderer-BNLRw9jg.js";import{a as G,w as W}from"./index-DMgXl1JY.js";import{a as q,V as S}from"./VRow-CJhPTw19.js";import{V as K}from"./VCard-WWKoxtJJ.js";import{V as A}from"./VCardText-Ch3g-EZv.js";import{V as Q}from"./VForm-CAxOC1cU.js";import"./VTextField-Cc95G1i6.js";import"./VImg-Dv3a-w8A.js";import"./forwardRefs-DWGaNmQL.js";/* empty css              */import"./VAvatar-HosJX2Qb.js";const X=o=>o==null||o===""?!0:!!(Array.isArray(o)&&o.length===0),Y=o=>o==null,Z=o=>Array.isArray(o)&&o.length===0,k=o=>Y(o)||Z(o)||o===!1?"This field is required":!!String(o).trim().length||"This field is required",x=o=>{if(X(o))return!0;const r=/^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i;return Array.isArray(o)?o.every(n=>r.test(String(n)))||"The Email field must be a valid email":r.test(String(o))||"The Email field must be a valid email"},ee=()=>v();class oe extends Error{constructor(r,n){super(r,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function re(o){var m,u,e,t,y;const r=((m=o.error)==null?void 0:m.message)||((u=o.error)==null?void 0:u.toString())||"",n=((e=o.request)==null?void 0:e.method)||((t=o.options)==null?void 0:t.method)||"GET",d=((y=o.request)==null?void 0:y.url)||String(o.request)||"/",b=`[${n}] ${JSON.stringify(d)}`,c=o.response?`${o.response.status} ${o.response.statusText}`:"<no response>",h=`${b}: ${c}${r?` ${r}`:""}`,s=new oe(h,o.error?{cause:o.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(s,l,{get(){return o[l]}});for(const[l,i]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(s,l,{get(){return o.response&&o.response[i]}});return s}const se=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function C(o="GET"){return se.has(o.toUpperCase())}function te(o){if(o===void 0)return!1;const r=typeof o;return r==="string"||r==="number"||r==="boolean"||r===null?!0:r!=="object"?!1:Array.isArray(o)?!0:o.buffer?!1:o.constructor&&o.constructor.name==="Object"||typeof o.toJSON=="function"}const ne=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ae=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function ie(o=""){if(!o)return"json";const r=o.split(";").shift()||"";return ae.test(r)?"json":ne.has(r)||r.startsWith("text/")?"text":"blob"}function le(o,r,n=globalThis.Headers){const d={...r,...o};if(r!=null&&r.params&&(o!=null&&o.params)&&(d.params={...r==null?void 0:r.params,...o==null?void 0:o.params}),r!=null&&r.query&&(o!=null&&o.query)&&(d.query={...r==null?void 0:r.query,...o==null?void 0:o.query}),r!=null&&r.headers&&(o!=null&&o.headers)){d.headers=new n((r==null?void 0:r.headers)||{});for(const[b,c]of new n((o==null?void 0:o.headers)||{}))d.headers.set(b,c)}return d}const pe=new Set([408,409,425,429,500,502,503,504]),ce=new Set([101,204,205,304]);function $(o={}){const{fetch:r=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:d=globalThis.AbortController}=o;async function b(s){const m=s.error&&s.error.name==="AbortError"&&!s.options.timeout||!1;if(s.options.retry!==!1&&!m){let e;typeof s.options.retry=="number"?e=s.options.retry:e=C(s.options.method)?0:1;const t=s.response&&s.response.status||500;if(e>0&&(Array.isArray(s.options.retryStatusCodes)?s.options.retryStatusCodes.includes(t):pe.has(t))){const y=s.options.retryDelay||0;return y>0&&await new Promise(l=>setTimeout(l,y)),c(s.request,{...s.options,retry:e-1})}}const u=re(s);throw Error.captureStackTrace&&Error.captureStackTrace(u,c),u}const c=async function(m,u={}){var l;const e={request:m,options:le(u,o.defaults,n),response:void 0,error:void 0};e.options.method=(l=e.options.method)==null?void 0:l.toUpperCase(),e.options.onRequest&&await e.options.onRequest(e),typeof e.request=="string"&&(e.options.baseURL&&(e.request=G(e.request,e.options.baseURL)),(e.options.query||e.options.params)&&(e.request=W(e.request,{...e.options.params,...e.options.query}))),e.options.body&&C(e.options.method)&&(te(e.options.body)?(e.options.body=typeof e.options.body=="string"?e.options.body:JSON.stringify(e.options.body),e.options.headers=new n(e.options.headers||{}),e.options.headers.has("content-type")||e.options.headers.set("content-type","application/json"),e.options.headers.has("accept")||e.options.headers.set("accept","application/json")):("pipeTo"in e.options.body&&typeof e.options.body.pipeTo=="function"||typeof e.options.body.pipe=="function")&&("duplex"in e.options||(e.options.duplex="half")));let t;if(!e.options.signal&&e.options.timeout){const i=new d;t=setTimeout(()=>i.abort(),e.options.timeout),e.options.signal=i.signal}try{e.response=await r(e.request,e.options)}catch(i){return e.error=i,e.options.onRequestError&&await e.options.onRequestError(e),await b(e)}finally{t&&clearTimeout(t)}if(e.response.body&&!ce.has(e.response.status)&&e.options.method!=="HEAD"){const i=(e.options.parseResponse?"json":e.options.responseType)||ie(e.response.headers.get("content-type")||"");switch(i){case"json":{const j=await e.response.text(),P=e.options.parseResponse||F;e.response._data=P(j);break}case"stream":{e.response._data=e.response.body;break}default:e.response._data=await e.response[i]()}}return e.options.onResponse&&await e.options.onResponse(e),!e.options.ignoreResponseError&&e.response.status>=400&&e.response.status<600?(e.options.onResponseError&&await e.options.onResponseError(e),await b(e)):e.response},h=async function(m,u){return(await c(m,u))._data};return h.raw=c,h.native=(...s)=>r(...s),h.create=(s={})=>$({...o,defaults:{...o.defaults,...s}}),h}const V=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),de=V.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),ue=V.Headers,fe=V.AbortController,me=$({fetch:de,Headers:ue,AbortController:fe});var ye={BASE_URL:"/tk-admin/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const he=me.create({baseURL:ye.VITE_API_BASE_URL||"/api",async onRequest({options:o}){const r=T("accessToken").value;r&&(o.headers={...o.headers,Authorization:`Bearer ${r}`})}}),be={class:"auth-logo d-flex align-center gap-x-3"},ge={class:"auth-title"},we={class:"text-h4 mb-1"},Te={class:"text-capitalize"},_e=g("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),Oe={__name:"login",setup(o){const r=w(!1),n=O(),d=B(),b=ee(),c=w({email:void 0,password:void 0}),h=w(),s=w({email:"admin@demo.com",password:"admin"}),m=async()=>{try{const e=await he("http://tg-adsnet-api-proxy.goourl.ru/api/auth/token/",{method:"POST",body:{email:s.value.email,password:s.value.password},onResponseError({response:i}){c.value=i._data.errors}}),{accessToken:t,userData:y,userAbilityRules:l}=e;T("userAbilityRules").value=l,b.update(l),T("userData").value=y,T("accessToken").value=t,await M(()=>{d.replace(n.query.to?String(n.query.to):"/")})}catch(e){console.error(e)}},u=()=>{var e;(e=h.value)==null||e.validate().then(({valid:t})=>{t&&m()})};return(e,t)=>{const y=U("RouterLink"),l=J;return D(),N(H,null,[p(y,{to:"/"},{default:f(()=>[g("div",be,[p(a(I),{nodes:a(_).app.logo},null,8,["nodes"]),g("h1",ge,R(a(_).app.title),1)])]),_:1}),p(S,{class:"auth-wrapper"},{default:f(()=>[p(q,{cols:"12",md:"12",class:"auth-card-v2 d-flex align-center justify-center"},{default:f(()=>[p(K,{"max-width":460,class:"my-sm-16"},{default:f(()=>[p(A,null,{default:f(()=>[g("h4",we,[E(" Welcome to "),g("span",Te,R(a(_).app.title),1),E("! 👋🏻 ")]),_e]),_:1}),p(A,null,{default:f(()=>[p(a(Q),{ref_key:"refVForm",ref:h,onSubmit:L(u,["prevent"])},{default:f(()=>[p(S,null,{default:f(()=>[p(q,{cols:"12"},{default:f(()=>[p(l,{modelValue:a(s).email,"onUpdate:modelValue":t[0]||(t[0]=i=>a(s).email=i),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in e?e.requiredValidator:a(k),"emailValidator"in e?e.emailValidator:a(x)],"error-messages":a(c).email},null,8,["modelValue","rules","error-messages"])]),_:1}),p(q,{cols:"12"},{default:f(()=>[p(l,{modelValue:a(s).password,"onUpdate:modelValue":t[1]||(t[1]=i=>a(s).password=i),label:"Password",placeholder:"············",rules:["requiredValidator"in e?e.requiredValidator:a(k)],type:a(r)?"text":"password","error-messages":a(c).password,"append-inner-icon":a(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[2]||(t[2]=i=>r.value=!a(r))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),p(z,{block:"",type:"submit",class:"mt-6"},{default:f(()=>[E(" Login ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Oe as default};
