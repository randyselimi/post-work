import{s as Ze,n as Dt,r as wt,d as et,e as Pt,b as Nt,A as Vt,l as Ht}from"./13.D5uV4OiT.js";import{S as tt,i as lt,e as o,b as Bt,c as r,d as T,f as Ft,g,r as p,j as Ce,k as t,l as zt,s as k,h as C,z as M,u as ge,A as Ut,t as ke,E as $t,D as qt,a as ye,q as Rt,m as nt,n as it,o as at,p as st,w as Ot,v as b,y as be}from"./index.DzC80FCd.js";import{a as Gt,i as Jt,b as Yt}from"./entry.Dke5LpT8.js";import{e as It}from"./SoftRoute.B5raiJQt.js";import{l as Kt,a as Qt}from"./db.D-woo9e5.js";import{M as Wt}from"./modal.Bk4piVl0.js";function Xt(i){let e,l;return{c(){e=o("span"),l=Bt(i[0]),this.h()},l(n){e=r(n,"SPAN",{class:!0});var a=T(e);l=Ft(a,i[0]),a.forEach(g),this.h()},h(){p(e,"class","skill-chip svelte-1gxhhge")},m(n,a){Ce(n,e,a),t(e,l)},p(n,[a]){a&1&&zt(l,n[0])},i:Dt,o:Dt,d(n){n&&g(e)}}}function Zt(i,e,l){let{skill:n}=e,{size:a=5}=e;return i.$$set=_=>{"skill"in _&&l(0,n=_.skill),"size"in _&&l(1,a=_.size)},[n,a]}class el extends tt{constructor(e){super(),lt(this,e,Zt,Xt,Ze,{skill:0,size:1})}}function tl(i){const e=JSON.parse(i);return e.data&&(e.data=Gt(e.data)),e}function Mt(i){return HTMLElement.prototype.cloneNode.call(i)}function ll(i,e=()=>{}){const l=async({action:a,result:_,reset:h=!0,invalidateAll:u=!0})=>{_.type==="success"&&(h&&HTMLFormElement.prototype.reset.call(i),u&&await Jt()),(location.origin+location.pathname===a.origin+a.pathname||_.type==="redirect"||_.type==="error")&&Yt(_)};async function n(a){var E,L,X,m;if(((E=a.submitter)!=null&&E.hasAttribute("formmethod")?a.submitter.formMethod:Mt(i).method)!=="post")return;a.preventDefault();const h=new URL((L=a.submitter)!=null&&L.hasAttribute("formaction")?a.submitter.formAction:Mt(i).action),u=new FormData(i),d=(X=a.submitter)==null?void 0:X.getAttribute("name");d&&u.append(d,((m=a.submitter)==null?void 0:m.getAttribute("value"))??"");const S=new AbortController;let f=!1;const c=await e({action:h,cancel:()=>f=!0,controller:S,formData:u,formElement:i,submitter:a.submitter})??l;if(f)return;let y;try{const v=await fetch(h,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:u,signal:S.signal});y=tl(await v.text()),y.type==="error"&&(y.status=v.status)}catch(v){if((v==null?void 0:v.name)==="AbortError")return;y={type:"error",error:v}}c({action:h,formData:u,formElement:i,update:v=>l({action:h,result:y,reset:v==null?void 0:v.reset,invalidateAll:v==null?void 0:v.invalidateAll}),result:y})}return HTMLFormElement.prototype.addEventListener.call(i,"submit",n),{destroy(){HTMLFormElement.prototype.removeEventListener.call(i,"submit",n)}}}function St(i,e,l){const n=i.slice();return n[4]=e[l],n}function At(i){let e,l;return e=new el({props:{skill:i[4]}}),{c(){nt(e.$$.fragment)},l(n){it(e.$$.fragment,n)},m(n,a){at(e,n,a),l=!0},p(n,a){const _={};a&1&&(_.skill=n[4]),e.$set(_)},i(n){l||(ke(e.$$.fragment,n),l=!0)},o(n){ye(e.$$.fragment,n),l=!1},d(n){st(e,n)}}}function nl(i){let e,l,n,a,_,h,u=It(i[0]),d=[];for(let f=0;f<u.length;f+=1)d[f]=At(St(i,u,f));const S=f=>ye(d[f],1,1,()=>{d[f]=null});return{c(){e=o("label"),l=o("input"),n=k();for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=r(f,"LABEL",{for:!0,class:!0});var s=T(e);l=r(s,"INPUT",{type:!0,id:!0,class:!0}),n=C(s);for(let c=0;c<d.length;c+=1)d[c].l(s);s.forEach(g),this.h()},h(){p(l,"type","text"),p(l,"id","chips-input"),p(l,"class","svelte-gbsk9l"),p(e,"for","chips-input"),p(e,"class","chips svelte-gbsk9l")},m(f,s){Ce(f,e,s),t(e,l),M(l,i[1]),t(e,n);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(e,null);a=!0,_||(h=[ge(l,"input",i[2]),ge(l,"keyup",Ut(i[3]))],_=!0)},p(f,[s]){if(s&2&&l.value!==f[1]&&M(l,f[1]),s&1){u=It(f[0]);let c;for(c=0;c<u.length;c+=1){const y=St(f,u,c);d[c]?(d[c].p(y,s),ke(d[c],1)):(d[c]=At(y),d[c].c(),ke(d[c],1),d[c].m(e,null))}for($t(),c=u.length;c<d.length;c+=1)S(c);qt()}},i(f){if(!a){for(let s=0;s<u.length;s+=1)ke(d[s]);a=!0}},o(f){d=d.filter(Boolean);for(let s=0;s<d.length;s+=1)ye(d[s]);a=!1},d(f){f&&g(e),Rt(d,f),_=!1,wt(h)}}}function il(i,e,l){let{skills:n=[]}=e,a="";function _(){a=this.value,l(1,a)}const h=u=>{u.preventDefault(),u.stopPropagation(),u.key==="Enter"&&(l(0,n=[...n,a]),l(1,a=""))};return i.$$set=u=>{"skills"in u&&l(0,n=u.skills)},[n,a,_,h]}class al extends tt{constructor(e){super(),lt(this,e,il,nl,Ze,{skills:0})}}function sl(i){let e,l,n,a="Post Task",_,h,u,d,S='<label for="description">Description</label> <textarea id="description" name="description"></textarea>',f,s,c='<label for="title">Title</label> <input id="title" name="title"/>',y,E,L,X="Role",m,v,P,ot="Associate",O,rt="Senior Associate",j,ut="Supervisor",N,dt="Manager",V,ct="Senior Manager",H,ft="Director",Oe,B,Z,pt="Skills",je,F,Ne,z,Ve,He,G,J,Y,ht='<label for="hours">Hours</label> <input value="0" style="width: 3rem;" type="number" id="hours" name="hours"/>',Be,U,ee,_t="Billable",Fe,A,ze,$,te,le,vt="Billing Type",Ue,w,q,mt="SolidBill",R,bt="RSSupport",xe,$e,ne,ie,gt="Project Folder",qe,ae,Te,Re,se,oe,kt="Project Code",Ge,re,Ee,Je,D,fe,Ct='<label for="startDate">Start Date</label> <input type="date" value="2024-04-22" id="startDate" name="startDate"/>',Ye,pe,yt='<label for="endDate">Due Date</label> <input type="date" id="endDate" name="endDate"/>',Ke,he,xt='<fieldset class="form-container svelte-h3yb4y"><legend>Posting Type</legend> <div style="display: flex; flex-direction: column; margin-right: .5rem"><label style="font-size: .8rem" for="radio1">Instant</label> <input checked="" id="radio1" name="radio" type="radio"/></div> <div style="display: flex; flex-direction: column; margin-left: .5rem"><label style="font-size: .8rem" for="radio2">Request</label> <input disabled="" id="radio2" name="radio" type="radio"/></div></fieldset>',Qe,K,Tt="Submit",Le,ue,We,Et;function jt(x){i[7](x)}let Lt={};return i[1]!==void 0&&(Lt.skills=i[1]),z=new al({props:Lt}),et.push(()=>Ot(z,"skills",jt)),{c(){e=o("form"),l=o("fieldset"),n=o("legend"),n.textContent=a,_=k(),h=o("div"),u=o("div"),d=o("div"),d.innerHTML=S,f=k(),s=o("div"),s.innerHTML=c,y=k(),E=o("div"),L=o("label"),L.textContent=X,m=k(),v=o("select"),P=o("option"),P.textContent=ot,O=o("option"),O.textContent=rt,j=o("option"),j.textContent=ut,N=o("option"),N.textContent=dt,V=o("option"),V.textContent=ct,H=o("option"),H.textContent=ft,Oe=k(),B=o("div"),Z=o("label"),Z.textContent=pt,je=k(),F=o("input"),Ne=k(),nt(z.$$.fragment),He=k(),G=o("div"),J=o("div"),Y=o("div"),Y.innerHTML=ht,Be=k(),U=o("div"),ee=o("label"),ee.textContent=_t,Fe=k(),A=o("input"),ze=k(),$=o("div"),te=o("div"),le=o("label"),le.textContent=vt,Ue=k(),w=o("select"),q=o("option"),q.textContent=mt,R=o("option"),R.textContent=bt,$e=k(),ne=o("div"),ie=o("label"),ie.textContent=gt,qe=k(),ae=o("input"),Re=k(),se=o("div"),oe=o("label"),oe.textContent=kt,Ge=k(),re=o("input"),Je=k(),D=o("div"),fe=o("div"),fe.innerHTML=Ct,Ye=k(),pe=o("div"),pe.innerHTML=yt,Ke=k(),he=o("div"),he.innerHTML=xt,Qe=k(),K=o("button"),K.textContent=Tt,this.h()},l(x){e=r(x,"FORM",{method:!0});var I=T(e);l=r(I,"FIELDSET",{id:!0});var de=T(l);n=r(de,"LEGEND",{"data-svelte-h":!0}),b(n)!=="svelte-vq5kjz"&&(n.textContent=a),_=C(de),h=r(de,"DIV",{class:!0});var _e=T(h);u=r(_e,"DIV",{class:!0});var Q=T(u);d=r(Q,"DIV",{"data-svelte-h":!0}),b(d)!=="svelte-1dt0okb"&&(d.innerHTML=S),f=C(Q),s=r(Q,"DIV",{"data-svelte-h":!0}),b(s)!=="svelte-7jdl1f"&&(s.innerHTML=c),y=C(Q),E=r(Q,"DIV",{});var De=T(E);L=r(De,"LABEL",{for:!0,"data-svelte-h":!0}),b(L)!=="svelte-thaj42"&&(L.textContent=X),m=C(De),v=r(De,"SELECT",{id:!0,name:!0});var ce=T(v);P=r(ce,"OPTION",{"data-svelte-h":!0}),b(P)!=="svelte-191ms4u"&&(P.textContent=ot),O=r(ce,"OPTION",{"data-svelte-h":!0}),b(O)!=="svelte-10mi7bu"&&(O.textContent=rt),j=r(ce,"OPTION",{"data-svelte-h":!0}),b(j)!=="svelte-30x86a"&&(j.textContent=ut),N=r(ce,"OPTION",{"data-svelte-h":!0}),b(N)!=="svelte-1c0d6gg"&&(N.textContent=dt),V=r(ce,"OPTION",{"data-svelte-h":!0}),b(V)!=="svelte-13w8ygq"&&(V.textContent=ct),H=r(ce,"OPTION",{"data-svelte-h":!0}),b(H)!=="svelte-137yaum"&&(H.textContent=ft),ce.forEach(g),De.forEach(g),Oe=C(Q),B=r(Q,"DIV",{});var ve=T(B);Z=r(ve,"LABEL",{for:!0,"data-svelte-h":!0}),b(Z)!=="svelte-1phw9ze"&&(Z.textContent=pt),je=C(ve),F=r(ve,"INPUT",{type:!0,id:!0,name:!0}),Ne=C(ve),it(z.$$.fragment,ve),ve.forEach(g),Q.forEach(g),He=C(_e),G=r(_e,"DIV",{class:!0});var Ie=T(G);J=r(Ie,"DIV",{class:!0});var Me=T(J);Y=r(Me,"DIV",{style:!0,"data-svelte-h":!0}),b(Y)!=="svelte-1bbrojq"&&(Y.innerHTML=ht),Be=C(Me),U=r(Me,"DIV",{style:!0});var Se=T(U);ee=r(Se,"LABEL",{for:!0,"data-svelte-h":!0}),b(ee)!=="svelte-mu58z6"&&(ee.textContent=_t),Fe=C(Se),A=r(Se,"INPUT",{style:!0,type:!0,id:!0,name:!0}),Se.forEach(g),Me.forEach(g),ze=C(Ie),$=r(Ie,"DIV",{});var me=T($);te=r(me,"DIV",{});var Ae=T(te);le=r(Ae,"LABEL",{for:!0,"data-svelte-h":!0}),b(le)!=="svelte-cbbxd8"&&(le.textContent=vt),Ue=C(Ae),w=r(Ae,"SELECT",{id:!0,name:!0});var Xe=T(w);q=r(Xe,"OPTION",{"data-svelte-h":!0}),b(q)!=="svelte-11maeby"&&(q.textContent=mt),R=r(Xe,"OPTION",{"data-svelte-h":!0}),b(R)!=="svelte-1p44i6"&&(R.textContent=bt),Xe.forEach(g),Ae.forEach(g),$e=C(me),ne=r(me,"DIV",{});var we=T(ne);ie=r(we,"LABEL",{for:!0,"data-svelte-h":!0}),b(ie)!=="svelte-cxz0ao"&&(ie.textContent=gt),qe=C(we),ae=r(we,"INPUT",{id:!0,name:!0}),we.forEach(g),Re=C(me),se=r(me,"DIV",{});var Pe=T(se);oe=r(Pe,"LABEL",{for:!0,"data-svelte-h":!0}),b(oe)!=="svelte-wmcbp0"&&(oe.textContent=kt),Ge=C(Pe),re=r(Pe,"INPUT",{id:!0,name:!0}),Pe.forEach(g),me.forEach(g),Ie.forEach(g),Je=C(_e),D=r(_e,"DIV",{class:!0});var W=T(D);fe=r(W,"DIV",{"data-svelte-h":!0}),b(fe)!=="svelte-159djw0"&&(fe.innerHTML=Ct),Ye=C(W),pe=r(W,"DIV",{"data-svelte-h":!0}),b(pe)!=="svelte-700gcb"&&(pe.innerHTML=yt),Ke=C(W),he=r(W,"DIV",{"data-svelte-h":!0}),b(he)!=="svelte-1jimd45"&&(he.innerHTML=xt),Qe=C(W),K=r(W,"BUTTON",{type:!0,"data-svelte-h":!0}),b(K)!=="svelte-jv0u2b"&&(K.textContent=Tt),W.forEach(g),_e.forEach(g),de.forEach(g),I.forEach(g),this.h()},h(){p(L,"for","role"),P.__value="Associate",M(P,P.__value),O.__value="Senior Associate",M(O,O.__value),j.__value="Supervisor",M(j,j.__value),N.__value="Manager",M(N,N.__value),V.__value="Senior Manager",M(V,V.__value),H.__value="Director",M(H,H.__value),p(v,"id","role"),p(v,"name","role"),p(Z,"for","skills"),p(F,"type","hidden"),p(F,"id","skills"),p(F,"name","skills"),p(u,"class","column svelte-h3yb4y"),be(Y,"display","flex"),be(Y,"flex-direction","column"),p(ee,"for","billable"),be(A,"margin-top",".3rem"),be(A,"height",".8rem"),p(A,"type","checkbox"),p(A,"id","billable"),p(A,"name","billable"),be(U,"display","flex"),be(U,"flex-direction","column"),p(J,"class","form-container svelte-h3yb4y"),p(le,"for","billingType"),q.__value="SolidBill",M(q,q.__value),R.__value="RSSupport",M(R,R.__value),w.disabled=xe=!i[2],p(w,"id","billingType"),p(w,"name","billingType"),p(ie,"for","projectFolder"),ae.disabled=Te=!i[2],p(ae,"id","projectFolder"),p(ae,"name","projectFolder"),p(oe,"for","projectCode"),re.disabled=Ee=!i[2],p(re,"id","projectCode"),p(re,"name","projectCode"),p(G,"class","column svelte-h3yb4y"),p(K,"type","button"),p(D,"class","column svelte-h3yb4y"),p(h,"class","row svelte-h3yb4y"),p(l,"id","post-task"),p(e,"method","POST")},m(x,I){Ce(x,e,I),t(e,l),t(l,n),t(l,_),t(l,h),t(h,u),t(u,d),t(u,f),t(u,s),t(u,y),t(u,E),t(E,L),t(E,m),t(E,v),t(v,P),t(v,O),t(v,j),t(v,N),t(v,V),t(v,H),t(u,Oe),t(u,B),t(B,Z),t(B,je),t(B,F),M(F,i[1]),t(B,Ne),at(z,B,null),t(h,He),t(h,G),t(G,J),t(J,Y),t(J,Be),t(J,U),t(U,ee),t(U,Fe),t(U,A),A.checked=i[2],t(G,ze),t(G,$),t($,te),t(te,le),t(te,Ue),t(te,w),t(w,q),t(w,R),t($,$e),t($,ne),t(ne,ie),t(ne,qe),t(ne,ae),t($,Re),t($,se),t(se,oe),t(se,Ge),t(se,re),t(h,Je),t(h,D),t(D,fe),t(D,Ye),t(D,pe),t(D,Ke),t(D,he),t(D,Qe),t(D,K),i[10](e),ue=!0,We||(Et=[ge(F,"input",i[6]),ge(A,"change",i[8]),ge(K,"click",i[9]),Vt(Le=ll.call(null,e,i[11]))],We=!0)},p(x,I){I&2&&M(F,x[1]);const de={};!Ve&&I&2&&(Ve=!0,de.skills=x[1],Pt(()=>Ve=!1)),z.$set(de),I&4&&(A.checked=x[2]),(!ue||I&4&&xe!==(xe=!x[2]))&&(w.disabled=xe),(!ue||I&4&&Te!==(Te=!x[2]))&&(ae.disabled=Te),(!ue||I&4&&Ee!==(Ee=!x[2]))&&(re.disabled=Ee),Le&&Ht(Le.update)&&I&16&&Le.update.call(null,x[11])},i(x){ue||(ke(z.$$.fragment,x),ue=!0)},o(x){ye(z.$$.fragment,x),ue=!1},d(x){x&&g(e),st(z),i[10](null),We=!1,wt(Et)}}}function ol(i){let e,l="Post Task",n,a,_,h,u,d;function S(s){i[12](s)}let f={$$slots:{default:[sl]},$$scope:{ctx:i}};return i[3]!==void 0&&(f.showModal=i[3]),a=new Wt({props:f}),et.push(()=>Ot(a,"showModal",S)),{c(){e=o("button"),e.textContent=l,n=k(),nt(a.$$.fragment)},l(s){e=r(s,"BUTTON",{"data-svelte-h":!0}),b(e)!=="svelte-1k6yybn"&&(e.textContent=l),n=C(s),it(a.$$.fragment,s)},m(s,c){Ce(s,e,c),Ce(s,n,c),at(a,s,c),h=!0,u||(d=ge(e,"click",i[5]),u=!0)},p(s,[c]){const y={};c&32799&&(y.$$scope={dirty:c,ctx:s}),!_&&c&8&&(_=!0,y.showModal=s[3],Pt(()=>_=!1)),a.$set(y)},i(s){h||(ke(a.$$.fragment,s),h=!0)},o(s){ye(a.$$.fragment,s),h=!1},d(s){s&&(g(e),g(n)),st(a,s),u=!1,d()}}}function rl(i,e,l){let n,a,_;Nt(i,Kt,m=>l(4,_=m));let h,u=[];const d=new Date;d.getMonth()+1,`${d.getDate()}${d.getFullYear()}`;const S=()=>l(3,n=!0);function f(){u=this.value,l(1,u)}function s(m){u=m,l(1,u)}function c(){a=this.checked,l(2,a)}const y=m=>{h.requestSubmit(),l(3,n=!1)};function E(m){et[m?"unshift":"push"](()=>{h=m,l(0,h)})}const L=({formData:m})=>{const v={id:2e3+Math.floor(Math.random()*1e3),title:m.get("title"),description:m.get("description"),skills:m.get("skills").split(","),role:m.get("role"),hours:Number(m.get("hours")),billable:m.get("billable")==="true",billingInfo:{billingType:m.get("billingType"),projectFolder:m.get("projectFolder"),projectCode:m.get("projectCode")},postedBy:_.id,assignedTo:null,applicants:[],status:"Pending",startDate:m.get("startDate"),endDate:m.get("endDate")};Qt(v)};function X(m){n=m,l(3,n)}return l(3,n=!1),l(2,a=!1),[h,u,a,n,_,S,f,s,c,y,E,L,X]}class _l extends tt{constructor(e){super(),lt(this,e,rl,ol,Ze,{})}}export{_l as P,el as S};
