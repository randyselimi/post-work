function y(){}function j(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function P(){return Object.create(null)}function v(t){t.forEach(E)}function O(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function B(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function F(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function T(t){let n;return m(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(m(n,e))}function C(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function D(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function G(t,n,e,r,o,a){if(o){const _=k(n,e,r,a);t.p(_,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){return t&&O(t.destroy)?t.destroy:y}let f;function d(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){x().$$.on_mount.push(t)}function K(t){x().$$.after_update.push(t)}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const l=[],g=[];let u=[];const p=[],w=Promise.resolve();let b=!1;function q(){b||(b=!0,w.then(M))}function N(){return q(),w}function z(t){u.push(t)}function Q(t){p.push(t)}const h=new Set;let c=0;function M(){if(c!==0)return;const t=f;do{try{for(;c<l.length;){const n=l[c];c++,d(n),S(n.$$)}}catch(n){throw l.length=0,c=0,n}for(d(null),l.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(l.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function S(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function R(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}const V=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{I as A,B,V as _,D as a,U as b,C as c,g as d,Q as e,L as f,H as g,K as h,T as i,P as j,M as k,O as l,F as m,y as n,J as o,z as p,R as q,v as r,A as s,N as t,G as u,f as v,d as w,E as x,l as y,q as z};
