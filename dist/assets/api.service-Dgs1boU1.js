import{B as y,d as b,c as a,o as r,t as n,z as $,m as s,a as o,u as v,p as k,w as g,x as A,aw as B,P as w,ax as C,ay as T}from"./index-DOh3iN_U.js";import{a as z,c as f,A as P}from"./auth.service-BxJEy6Ur.js";var S=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,E={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},L=y.extend({name:"card",style:S,classes:E}),U={name:"BaseCard",extends:b,style:L,provide:function(){return{$pcCard:this,$parentInstance:this}}},m={name:"Card",extends:U,inheritAttrs:!1};function j(e,t,c,d,i,p){return r(),a("div",s({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(r(),a("div",s({key:0,class:e.cx("header")},e.ptm("header")),[o(e.$slots,"header")],16)):n("",!0),$("div",s({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(r(),a("div",s({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(r(),a("div",s({key:0,class:e.cx("title")},e.ptm("title")),[o(e.$slots,"title")],16)):n("",!0),e.$slots.subtitle?(r(),a("div",s({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[o(e.$slots,"subtitle")],16)):n("",!0)],16)):n("",!0),$("div",s({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"content")],16),e.$slots.footer?(r(),a("div",s({key:1,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):n("",!0)],16)],16)}m.render=j;const W=v({__name:"Card",props:{pt:{}},setup(e){const t=e;return(c,d)=>(r(),k(A(m),{pt:t.pt},{content:g(()=>[o(c.$slots,"default")]),_:3},8,["pt"]))}}),I=f.mode==="development"?"http://localhost:3000":f.apiURL,l=z.create({baseURL:`${I}/api/v1/`,headers:{"Content-Type":"application/json"}});l.interceptors.request.use(e=>{const t=B();return t&&(e.headers.Authorization=`Bearer ${t}`),e});l.interceptors.response.use(e=>e,async e=>{var d,i,p;const t=e.config;console.log("Interceptor blocked on URL:",t.url);const c=((d=t==null?void 0:t.url)==null?void 0:d.startsWith("/api/v1/auth/login"))||((i=t==null?void 0:t.url)==null?void 0:i.startsWith("/api/v1/auth/refresh"));if(((p=e.response)==null?void 0:p.status)===401&&!t._retry&&!c){t._retry=!0;try{const h=(await P.refresh()).data.data.accessToken;return w(h),t.headers.Authorization=`Bearer ${h}`,l(t)}catch(u){return C(),T.push("/auth/login"),Promise.reject(u)}}return Promise.reject(e)});export{l as A,W as _};
