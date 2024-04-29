function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.B9XbiFP9.js","../chunks/13.D5uV4OiT.js","../chunks/index.DzC80FCd.js","../nodes/1.CubymaOL.js","../chunks/stores.0Nh5DP9u.js","../chunks/entry.Dke5LpT8.js","../nodes/2.BfOnVf7-.js","../chunks/db.D-woo9e5.js","../chunks/team-table.Be7UlVNv.js","../chunks/table.BgyHQI6K.js","../chunks/SoftRoute.B5raiJQt.js","../chunks/user-table.CvB35din.js","../chunks/tall-avatar-chip.Dnxh1IFI.js","../assets/tall-avatar-chip.C7haArWG.css","../chunks/modal.Bk4piVl0.js","../assets/modal.BcF2yT3k.css","../chunks/work-table.FQZPpz2I.js","../assets/2.Bu74UUc9.css","../nodes/3.D2HUbBiv.js","../chunks/post-task-form.CHlsUlGf.js","../assets/post-task-form.CCy8Qj3J.css","../chunks/dashboard.7FtuPdSt.js","../assets/dashboard.90vw-YYx.css","../chunks/update-hours-form.CamLSpgo.js","../assets/update-hours-form.hqr97NXS.css","../assets/3.eycFV3nn.css","../nodes/4.BOCTUIMv.js","../assets/4.PEX5aeBa.css","../nodes/5.DdcVTuVm.js","../nodes/6.BwHQOswi.js","../nodes/7.B3lgtVh1.js","../assets/7.7Xc-FAWA.css","../nodes/8.lTLe1qHS.js","../nodes/9.BIXIVHDK.js","../nodes/10.BIXIVHDK.js","../nodes/11.vYO_Z2jT.js","../nodes/12.DvUKd4XF.js","../assets/12.N3OeN2RR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as U,h as j,o as F,d as O,t as W}from"../chunks/13.D5uV4OiT.js";import{S as z,i as G,s as H,C as d,h as J,j as b,a as h,D as A,t as g,g as w,e as K,c as Q,d as X,r as V,y as P,b as Y,f as Z,l as M,E as D,F as E,m as k,n as T,o as v,p as R}from"../chunks/index.DzC80FCd.js";const x="modulepreload",ee=function(a,e){return new URL(a,e).href},y={},p=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=ee(i,s),i in y)return;y[i]=!0;const _=i.endsWith(".css"),l=_?'[rel="stylesheet"]':"";if(!!s)for(let L=c.length-1;L>=0;L--){const I=c[L];if(I.href===i&&(!_||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":x,_||(u.as="script",u.crossOrigin=""),u.href=i,o&&u.setAttribute("nonce",o),document.head.appendChild(u),_)return new Promise((L,I)=>{u.addEventListener("load",L),u.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},ce={};function te(a){let e,n,s;var r=a[1][0];function c(t,o){return{props:{data:t[3],form:t[2]}}}return r&&(e=E(r,c(a)),a[15](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,c(t)),t[15](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&8&&(i.data=t[3]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[15](null),e&&R(e,t)}}}function ne(a){let e,n,s;var r=a[1][0];function c(t,o){return{props:{data:t[3],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return r&&(e=E(r,c(a)),a[14](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,c(t)),t[14](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&8&&(i.data=t[3]),o&65591&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[14](null),e&&R(e,t)}}}function ie(a){let e,n,s;var r=a[1][1];function c(t,o){return{props:{data:t[4],form:t[2]}}}return r&&(e=E(r,c(a)),a[13](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][1])){if(e){D();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,c(t)),t[13](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&16&&(i.data=t[4]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[13](null),e&&R(e,t)}}}function re(a){let e,n,s;var r=a[1][1];function c(t,o){return{props:{data:t[4],$$slots:{default:[se]},$$scope:{ctx:t}}}}return r&&(e=E(r,c(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][1])){if(e){D();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,c(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&16&&(i.data=t[4]),o&65575&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[12](null),e&&R(e,t)}}}function se(a){let e,n,s;var r=a[1][2];function c(t,o){return{props:{data:t[5],form:t[2]}}}return r&&(e=E(r,c(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&T(e.$$.fragment,t),n=d()},m(t,o){e&&v(e,t,o),b(t,n,o),s=!0},p(t,o){if(o&2&&r!==(r=t[1][2])){if(e){D();const i=e;h(i.$$.fragment,1,0,()=>{R(i,1)}),A()}r?(e=E(r,c(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else if(r){const i={};o&32&&(i.data=t[5]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),a[11](null),e&&R(e,t)}}}function oe(a){let e,n,s,r;const c=[re,ie],t=[];function o(i,_){return i[1][2]?0:1}return e=o(a),n=t[e]=c[e](a),{c(){n.c(),s=d()},l(i){n.l(i),s=d()},m(i,_){t[e].m(i,_),b(i,s,_),r=!0},p(i,_){let l=e;e=o(i),e===l?t[e].p(i,_):(D(),h(t[l],1,1,()=>{t[l]=null}),A(),n=t[e],n?n.p(i,_):(n=t[e]=c[e](i),n.c()),g(n,1),n.m(s.parentNode,s))},i(i){r||(g(n),r=!0)},o(i){h(n),r=!1},d(i){i&&w(s),t[e].d(i)}}}function $(a){let e,n=a[7]&&N(a);return{c(){e=K("div"),n&&n.c(),this.h()},l(s){e=Q(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=X(e);n&&n.l(r),r.forEach(w),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),P(e,"position","absolute"),P(e,"left","0"),P(e,"top","0"),P(e,"clip","rect(0 0 0 0)"),P(e,"clip-path","inset(50%)"),P(e,"overflow","hidden"),P(e,"white-space","nowrap"),P(e,"width","1px"),P(e,"height","1px")},m(s,r){b(s,e,r),n&&n.m(e,null)},p(s,r){s[7]?n?n.p(s,r):(n=N(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&w(e),n&&n.d()}}}function N(a){let e;return{c(){e=Y(a[8])},l(n){e=Z(n,a[8])},m(n,s){b(n,e,s)},p(n,s){s&256&&M(e,n[8])},d(n){n&&w(e)}}}function ae(a){let e,n,s,r,c;const t=[ne,te],o=[];function i(l,m){return l[1][1]?0:1}e=i(a),n=o[e]=t[e](a);let _=a[6]&&$(a);return{c(){n.c(),s=H(),_&&_.c(),r=d()},l(l){n.l(l),s=J(l),_&&_.l(l),r=d()},m(l,m){o[e].m(l,m),b(l,s,m),_&&_.m(l,m),b(l,r,m),c=!0},p(l,[m]){let u=e;e=i(l),e===u?o[e].p(l,m):(D(),h(o[u],1,1,()=>{o[u]=null}),A(),n=o[e],n?n.p(l,m):(n=o[e]=t[e](l),n.c()),g(n,1),n.m(s.parentNode,s)),l[6]?_?_.p(l,m):(_=$(l),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(l){c||(g(n),c=!0)},o(l){h(n),c=!1},d(l){l&&(w(s),w(r)),o[e].d(l),_&&_.d(l)}}}function le(a,e,n){let{stores:s}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:o}=e,{data_0:i=null}=e,{data_1:_=null}=e,{data_2:l=null}=e;j(s.page.notify);let m=!1,u=!1,L=null;F(()=>{const f=s.page.subscribe(()=>{m&&(n(7,u=!0),W().then(()=>{n(8,L=document.title||"untitled page")}))});return n(6,m=!0),f});function I(f){O[f?"unshift":"push"](()=>{t[2]=f,n(0,t)})}function S(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function C(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function q(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(9,s=f.stores),"page"in f&&n(10,r=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,o=f.form),"data_0"in f&&n(3,i=f.data_0),"data_1"in f&&n(4,_=f.data_1),"data_2"in f&&n(5,l=f.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&s.page.set(r)},[t,c,o,i,_,l,m,u,L,s,r,I,S,C,q,B]}class ue extends z{constructor(e){super(),G(this,e,le,ae,U,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const me=[()=>p(()=>import("../nodes/0.B9XbiFP9.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>p(()=>import("../nodes/1.CubymaOL.js"),__vite__mapDeps([3,1,2,4,5]),import.meta.url),()=>p(()=>import("../nodes/2.BfOnVf7-.js"),__vite__mapDeps([6,1,2,7,5,4,8,9,10,11,12,13,14,15,16,17]),import.meta.url),()=>p(()=>import("../nodes/3.D2HUbBiv.js"),__vite__mapDeps([18,1,2,7,5,10,12,13,19,14,15,20,21,22,23,24,25]),import.meta.url),()=>p(()=>import("../nodes/4.BOCTUIMv.js"),__vite__mapDeps([26,1,2,7,5,21,22,8,9,10,27]),import.meta.url),()=>p(()=>import("../nodes/5.DdcVTuVm.js"),__vite__mapDeps([28,1,2,7,5,21,22,23,14,15,24,16,9,10,27]),import.meta.url),()=>p(()=>import("../nodes/6.BwHQOswi.js"),__vite__mapDeps([29,1,2,7,5,21,22,11,9,10,27]),import.meta.url),()=>p(()=>import("../nodes/7.B3lgtVh1.js"),__vite__mapDeps([30,1,2,7,5,21,22,19,10,14,15,20,16,9,31]),import.meta.url),()=>p(()=>import("../nodes/8.lTLe1qHS.js"),__vite__mapDeps([32,1,2]),import.meta.url),()=>p(()=>import("../nodes/9.BIXIVHDK.js"),__vite__mapDeps([33,1,2,5,7]),import.meta.url),()=>p(()=>import("../nodes/10.BIXIVHDK.js"),__vite__mapDeps([34,1,2,5,7]),import.meta.url),()=>p(()=>import("../nodes/11.vYO_Z2jT.js"),__vite__mapDeps([35,1,2,5,7]),import.meta.url),()=>p(()=>import("../nodes/12.DvUKd4XF.js"),__vite__mapDeps([36,1,2,37]),import.meta.url),()=>p(()=>import("../chunks/13.D5uV4OiT.js").then(a=>a._),[],import.meta.url)],pe=[2],de={"/(authed)":[-4,[2]],"/(authed)/connected-teams":[4,[2]],"/(authed)/get-work":[5,[2]],"/login":[12],"/logout":[-14],"/(authed)/my-team":[6,[2]],"/(authed)/post-work":[7,[2]],"/(authed)/profile":[8,[2]],"/(authed)/team/[slug]":[9,[2]],"/(authed)/user/[slug]":[10,[2]],"/(authed)/work/[slug]":[11,[2]]},he={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{de as dictionary,he as hooks,ce as matchers,me as nodes,ue as root,pe as server_loads};
