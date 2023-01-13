(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gs(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function fi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=ye(i)?bu(i):fi(i);if(r)for(const s in r)t[s]=r[s]}return t}else{if(ye(e))return e;if(he(e))return e}}const pu=/;(?![^(]*\))/g,mu=/:([^]+)/,gu=/\/\*.*?\*\//gs;function bu(e){const t={};return e.replace(gu,"").split(pu).forEach(n=>{if(n){const i=n.split(mu);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function we(e){let t="";if(ye(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const i=we(e[n]);i&&(t+=i+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const yu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vu=gs(yu);function Ba(e){return!!e||e===""}const bt=e=>ye(e)?e:e==null?"":H(e)||he(e)&&(e.toString===za||!K(e.toString))?JSON.stringify(e,Ua,2):String(e),Ua=(e,t)=>t&&t.__v_isRef?Ua(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Ha(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!H(t)&&!Wa(t)?String(t):t,fe={},bn=[],Je=()=>{},_u=()=>!1,wu=/^on[^a-z]/,er=e=>wu.test(e),bs=e=>e.startsWith("onUpdate:"),Ie=Object.assign,ys=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Eu=Object.prototype.hasOwnProperty,Z=(e,t)=>Eu.call(e,t),H=Array.isArray,yn=e=>tr(e)==="[object Map]",Ha=e=>tr(e)==="[object Set]",K=e=>typeof e=="function",ye=e=>typeof e=="string",vs=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",ja=e=>he(e)&&K(e.then)&&K(e.catch),za=Object.prototype.toString,tr=e=>za.call(e),Iu=e=>tr(e).slice(8,-1),Wa=e=>tr(e)==="[object Object]",_s=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pi=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tu=/-(\w)/g,at=nr(e=>e.replace(Tu,(t,n)=>n?n.toUpperCase():"")),Cu=/\B([A-Z])/g,Pn=nr(e=>e.replace(Cu,"-$1").toLowerCase()),ir=nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ir=nr(e=>e?`on${ir(e)}`:""),Xn=(e,t)=>!Object.is(e,t),Tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ws=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fo;const Su=()=>fo||(fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let nt;class ku{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!t&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=nt;try{return nt=this,t()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(t){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function xu(e,t=nt){t&&t.active&&t.effects.push(e)}const Es=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Va=e=>(e.w&Bt)>0,Ka=e=>(e.n&Bt)>0,Au=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Bt},Ru=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];Va(r)&&!Ka(r)?r.delete(e):t[n++]=r,r.w&=~Bt,r.n&=~Bt}t.length=n}},zr=new WeakMap;let Un=0,Bt=1;const Wr=30;let Ge;const Zt=Symbol(""),Vr=Symbol("");class Is{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xu(this,i)}run(){if(!this.active)return this.fn();let t=Ge,n=Nt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ge,Ge=this,Nt=!0,Bt=1<<++Un,Un<=Wr?Au(this):ho(this),this.fn()}finally{Un<=Wr&&Ru(this),Bt=1<<--Un,Ge=this.parent,Nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(ho(this),this.onStop&&this.onStop(),this.active=!1)}}function ho(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Nt=!0;const qa=[];function Ln(){qa.push(Nt),Nt=!1}function Dn(){const e=qa.pop();Nt=e===void 0?!0:e}function Ue(e,t,n){if(Nt&&Ge){let i=zr.get(e);i||zr.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=Es()),Ga(r)}}function Ga(e,t){let n=!1;Un<=Wr?Ka(e)||(e.n|=Bt,n=!Va(e)):n=!e.has(Ge),n&&(e.add(Ge),Ge.deps.push(e))}function yt(e,t,n,i,r,s){const o=zr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const l=ws(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?_s(n)&&a.push(o.get("length")):(a.push(o.get(Zt)),yn(e)&&a.push(o.get(Vr)));break;case"delete":H(e)||(a.push(o.get(Zt)),yn(e)&&a.push(o.get(Vr)));break;case"set":yn(e)&&a.push(o.get(Zt));break}if(a.length===1)a[0]&&Kr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Kr(Es(l))}}function Kr(e,t){const n=H(e)?e:[...e];for(const i of n)i.computed&&po(i);for(const i of n)i.computed||po(i)}function po(e,t){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ou=gs("__proto__,__v_isRef,__isVue"),Ya=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vs)),Pu=Ts(),Lu=Ts(!1,!0),Du=Ts(!0),mo=Nu();function Nu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=ee(this);for(let s=0,o=this.length;s<o;s++)Ue(i,"get",s+"");const r=i[t](...n);return r===-1||r===!1?i[t](...n.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ln();const i=ee(this)[t].apply(this,n);return Dn(),i}}),e}function Ts(e=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?Xu:el:t?Za:Qa).get(i))return i;const o=H(i);if(!e&&o&&Z(mo,r))return Reflect.get(mo,r,s);const a=Reflect.get(i,r,s);return(vs(r)?Ya.has(r):Ou(r))||(e||Ue(i,"get",r),t)?a:Ae(a)?o&&_s(r)?a:a.value:he(a)?e?tl(a):an(a):a}}const Mu=Ja(),$u=Ja(!0);function Ja(e=!1){return function(n,i,r,s){let o=n[i];if(Sn(o)&&Ae(o)&&!Ae(r))return!1;if(!e&&(!ji(r)&&!Sn(r)&&(o=ee(o),r=ee(r)),!H(n)&&Ae(o)&&!Ae(r)))return o.value=r,!0;const a=H(n)&&_s(i)?Number(i)<n.length:Z(n,i),l=Reflect.set(n,i,r,s);return n===ee(s)&&(a?Xn(r,o)&&yt(n,"set",i,r):yt(n,"add",i,r)),l}}function Fu(e,t){const n=Z(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&yt(e,"delete",t,void 0),i}function Bu(e,t){const n=Reflect.has(e,t);return(!vs(t)||!Ya.has(t))&&Ue(e,"has",t),n}function Uu(e){return Ue(e,"iterate",H(e)?"length":Zt),Reflect.ownKeys(e)}const Xa={get:Pu,set:Mu,deleteProperty:Fu,has:Bu,ownKeys:Uu},Hu={get:Du,set(e,t){return!0},deleteProperty(e,t){return!0}},ju=Ie({},Xa,{get:Lu,set:$u}),Cs=e=>e,rr=e=>Reflect.getPrototypeOf(e);function Ii(e,t,n=!1,i=!1){e=e.__v_raw;const r=ee(e),s=ee(t);n||(t!==s&&Ue(r,"get",t),Ue(r,"get",s));const{has:o}=rr(r),a=i?Cs:n?As:Qn;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Ti(e,t=!1){const n=this.__v_raw,i=ee(n),r=ee(e);return t||(e!==r&&Ue(i,"has",e),Ue(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Ci(e,t=!1){return e=e.__v_raw,!t&&Ue(ee(e),"iterate",Zt),Reflect.get(e,"size",e)}function go(e){e=ee(e);const t=ee(this);return rr(t).has.call(t,e)||(t.add(e),yt(t,"add",e,e)),this}function bo(e,t){t=ee(t);const n=ee(this),{has:i,get:r}=rr(n);let s=i.call(n,e);s||(e=ee(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?Xn(t,o)&&yt(n,"set",e,t):yt(n,"add",e,t),this}function yo(e){const t=ee(this),{has:n,get:i}=rr(t);let r=n.call(t,e);r||(e=ee(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&yt(t,"delete",e,void 0),s}function vo(){const e=ee(this),t=e.size!==0,n=e.clear();return t&&yt(e,"clear",void 0,void 0),n}function Si(e,t){return function(i,r){const s=this,o=s.__v_raw,a=ee(o),l=t?Cs:e?As:Qn;return!e&&Ue(a,"iterate",Zt),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ki(e,t,n){return function(...i){const r=this.__v_raw,s=ee(r),o=yn(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...i),u=n?Cs:t?As:Qn;return!t&&Ue(s,"iterate",l?Vr:Zt),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Et(e){return function(...t){return e==="delete"?!1:this}}function zu(){const e={get(s){return Ii(this,s)},get size(){return Ci(this)},has:Ti,add:go,set:bo,delete:yo,clear:vo,forEach:Si(!1,!1)},t={get(s){return Ii(this,s,!1,!0)},get size(){return Ci(this)},has:Ti,add:go,set:bo,delete:yo,clear:vo,forEach:Si(!1,!0)},n={get(s){return Ii(this,s,!0)},get size(){return Ci(this,!0)},has(s){return Ti.call(this,s,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Si(!0,!1)},i={get(s){return Ii(this,s,!0,!0)},get size(){return Ci(this,!0)},has(s){return Ti.call(this,s,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ki(s,!1,!1),n[s]=ki(s,!0,!1),t[s]=ki(s,!1,!0),i[s]=ki(s,!0,!0)}),[e,n,t,i]}const[Wu,Vu,Ku,qu]=zu();function Ss(e,t){const n=t?e?qu:Ku:e?Vu:Wu;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(Z(n,r)&&r in i?n:i,r,s)}const Gu={get:Ss(!1,!1)},Yu={get:Ss(!1,!0)},Ju={get:Ss(!0,!1)},Qa=new WeakMap,Za=new WeakMap,el=new WeakMap,Xu=new WeakMap;function Qu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zu(e){return e.__v_skip||!Object.isExtensible(e)?0:Qu(Iu(e))}function an(e){return Sn(e)?e:ks(e,!1,Xa,Gu,Qa)}function ed(e){return ks(e,!1,ju,Yu,Za)}function tl(e){return ks(e,!0,Hu,Ju,el)}function ks(e,t,n,i,r){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=Zu(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function vn(e){return Sn(e)?vn(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function ji(e){return!!(e&&e.__v_isShallow)}function nl(e){return vn(e)||Sn(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function xs(e){return Hi(e,"__v_skip",!0),e}const Qn=e=>he(e)?an(e):e,As=e=>he(e)?tl(e):e;function il(e){Nt&&Ge&&(e=ee(e),Ga(e.dep||(e.dep=Es())))}function rl(e,t){e=ee(e),e.dep&&Kr(e.dep)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function td(e){return sl(e,!1)}function nd(e){return sl(e,!0)}function sl(e,t){return Ae(e)?e:new id(e,t)}class id{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ee(t),this._value=n?t:Qn(t)}get value(){return il(this),this._value}set value(t){const n=this.__v_isShallow||ji(t)||Sn(t);t=n?t:ee(t),Xn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Qn(t),rl(this))}}function _n(e){return Ae(e)?e.value:e}const rd={get:(e,t,n)=>_n(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function ol(e){return vn(e)?e:new Proxy(e,rd)}var al;class sd{constructor(t,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[al]=!1,this._dirty=!0,this.effect=new Is(t,()=>{this._dirty||(this._dirty=!0,rl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=ee(this);return il(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}al="__v_isReadonly";function od(e,t,n=!1){let i,r;const s=K(e);return s?(i=e,r=Je):(i=e.get,r=e.set),new sd(i,r,s||!r,n)}function Mt(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){sr(s,t,n)}return r}function je(e,t,n,i){if(K(e)){const s=Mt(e,t,n,i);return s&&ja(s)&&s.catch(o=>{sr(o,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(je(e[s],t,n,i));return r}function sr(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Mt(l,null,10,[e,o,a]);return}}ad(e,n,r,i)}function ad(e,t,n,i=!0){console.error(e)}let Zn=!1,qr=!1;const xe=[];let rt=0;const wn=[];let ut=null,Yt=0;const ll=Promise.resolve();let Rs=null;function cl(e){const t=Rs||ll;return e?t.then(this?e.bind(this):e):t}function ld(e){let t=rt+1,n=xe.length;for(;t<n;){const i=t+n>>>1;ei(xe[i])<e?t=i+1:n=i}return t}function Os(e){(!xe.length||!xe.includes(e,Zn&&e.allowRecurse?rt+1:rt))&&(e.id==null?xe.push(e):xe.splice(ld(e.id),0,e),ul())}function ul(){!Zn&&!qr&&(qr=!0,Rs=ll.then(fl))}function cd(e){const t=xe.indexOf(e);t>rt&&xe.splice(t,1)}function ud(e){H(e)?wn.push(...e):(!ut||!ut.includes(e,e.allowRecurse?Yt+1:Yt))&&wn.push(e),ul()}function _o(e,t=Zn?rt+1:0){for(;t<xe.length;t++){const n=xe[t];n&&n.pre&&(xe.splice(t,1),t--,n())}}function dl(e){if(wn.length){const t=[...new Set(wn)];if(wn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,i)=>ei(n)-ei(i)),Yt=0;Yt<ut.length;Yt++)ut[Yt]();ut=null,Yt=0}}const ei=e=>e.id==null?1/0:e.id,dd=(e,t)=>{const n=ei(e)-ei(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function fl(e){qr=!1,Zn=!0,xe.sort(dd);const t=Je;try{for(rt=0;rt<xe.length;rt++){const n=xe[rt];n&&n.active!==!1&&Mt(n,null,14)}}finally{rt=0,xe.length=0,dl(),Zn=!1,Rs=null,(xe.length||wn.length)&&fl()}}function fd(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||fe;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||fe;h&&(r=n.map(m=>ye(m)?m.trim():m)),f&&(r=n.map(ws))}let a,l=i[a=Ir(t)]||i[a=Ir(at(t))];!l&&s&&(l=i[a=Ir(Pn(t))]),l&&je(l,e,6,r);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,je(c,e,6,r)}}function hl(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!K(e)){const l=c=>{const u=hl(c,t,!0);u&&(a=!0,Ie(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(he(e)&&i.set(e,null),null):(H(s)?s.forEach(l=>o[l]=null):Ie(o,s),he(e)&&i.set(e,o),o)}function or(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Pn(t))||Z(e,t))}let Ce=null,ar=null;function zi(e){const t=Ce;return Ce=e,ar=e&&e.type.__scopeId||null,t}function hd(e){ar=e}function pd(){ar=null}function ze(e,t=Ce,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&Oo(-1);const s=zi(t);let o;try{o=e(...r)}finally{zi(s),i._d&&Oo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Cr(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:w,inheritAttrs:C}=e;let F,k;const N=zi(e);try{if(n.shapeFlag&4){const z=r||i;F=it(u.call(z,z,f,s,m,h,w)),k=l}else{const z=t;F=it(z.length>1?z(s,{attrs:l,slots:a,emit:c}):z(s,null)),k=t.props?l:md(l)}}catch(z){qn.length=0,sr(z,e,1),F=oe(We)}let R=F;if(k&&C!==!1){const z=Object.keys(k),{shapeFlag:J}=R;z.length&&J&7&&(o&&z.some(bs)&&(k=gd(k,o)),R=Ut(R,k))}return n.dirs&&(R=Ut(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),F=R,zi(N),F}const md=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},gd=(e,t)=>{const n={};for(const i in e)(!bs(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function bd(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?wo(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!or(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wo(i,o,c):!0:!!o;return!1}function wo(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!or(n,s))return!0}return!1}function yd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const vd=e=>e.__isSuspense;function _d(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):ud(e)}function Li(e,t){if(Ee){let n=Ee.provides;const i=Ee.parent&&Ee.parent.provides;i===n&&(n=Ee.provides=Object.create(i)),n[e]=t}}function pt(e,t,n=!1){const i=Ee||Ce;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&K(t)?t.call(i.proxy):t}}function wd(e,t){return Ps(e,null,{flush:"post"})}const xi={};function En(e,t,n){return Ps(e,t,n)}function Ps(e,t,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=fe){const a=Ee;let l,c=!1,u=!1;if(Ae(e)?(l=()=>e.value,c=ji(e)):vn(e)?(l=()=>e,i=!0):H(e)?(u=!0,c=e.some(R=>vn(R)||ji(R)),l=()=>e.map(R=>{if(Ae(R))return R.value;if(vn(R))return Qt(R);if(K(R))return Mt(R,a,2)})):K(e)?t?l=()=>Mt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),je(e,a,3,[h])}:l=Je,t&&i){const R=l;l=()=>Qt(R())}let f,h=R=>{f=k.onStop=()=>{Mt(R,a,4)}},m;if(ri)if(h=Je,t?n&&je(t,a,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const R=mf();m=R.__watcherHandles||(R.__watcherHandles=[])}else return Je;let w=u?new Array(e.length).fill(xi):xi;const C=()=>{if(k.active)if(t){const R=k.run();(i||c||(u?R.some((z,J)=>Xn(z,w[J])):Xn(R,w)))&&(f&&f(),je(t,a,3,[R,w===xi?void 0:u&&w[0]===xi?[]:w,h]),w=R)}else k.run()};C.allowRecurse=!!t;let F;r==="sync"?F=C:r==="post"?F=()=>De(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),F=()=>Os(C));const k=new Is(l,F);t?n?C():w=k.run():r==="post"?De(k.run.bind(k),a&&a.suspense):k.run();const N=()=>{k.stop(),a&&a.scope&&ys(a.scope.effects,k)};return m&&m.push(N),N}function Ed(e,t,n){const i=this.proxy,r=ye(e)?e.includes(".")?pl(i,e):()=>i[e]:e.bind(i,i);let s;K(t)?s=t:(s=t.handler,n=t);const o=Ee;xn(this);const a=Ps(r,s.bind(i),n);return o?xn(o):tn(),a}function pl(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Qt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))Qt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Qt(e[n],t);else if(Ha(e)||yn(e))e.forEach(n=>{Qt(n,t)});else if(Wa(e))for(const n in e)Qt(e[n],t);return e}function ml(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ds(()=>{e.isMounted=!0}),wl(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],Id={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(e,{slots:t}){const n=zs(),i=ml();let r;return()=>{const s=t.default&&Ls(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==We){o=C;break}}const a=ee(e),{mode:l}=a;if(i.isLeaving)return Sr(o);const c=Eo(o);if(!c)return Sr(o);const u=ti(c,a,i,n);ni(c,u);const f=n.subTree,h=f&&Eo(f);let m=!1;const{getTransitionKey:w}=c.type;if(w){const C=w();r===void 0?r=C:C!==r&&(r=C,m=!0)}if(h&&h.type!==We&&(!Jt(c,h)||m)){const C=ti(h,a,i,n);if(ni(h,C),l==="out-in")return i.isLeaving=!0,C.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Sr(o);l==="in-out"&&c.type!==We&&(C.delayLeave=(F,k,N)=>{const R=bl(i,h);R[String(h.key)]=h,F._leaveCb=()=>{k(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},gl=Id;function bl(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function ti(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:C,onAppear:F,onAfterAppear:k,onAppearCancelled:N}=t,R=String(e.key),z=bl(n,e),J=(B,Y)=>{B&&je(B,i,9,Y)},te=(B,Y)=>{const X=Y[1];J(B,Y),H(B)?B.every(pe=>pe.length<=1)&&X():B.length<=1&&X()},ie={mode:s,persisted:o,beforeEnter(B){let Y=a;if(!n.isMounted)if(r)Y=C||a;else return;B._leaveCb&&B._leaveCb(!0);const X=z[R];X&&Jt(e,X)&&X.el._leaveCb&&X.el._leaveCb(),J(Y,[B])},enter(B){let Y=l,X=c,pe=u;if(!n.isMounted)if(r)Y=F||l,X=k||c,pe=N||u;else return;let O=!1;const de=B._enterCb=Te=>{O||(O=!0,Te?J(pe,[B]):J(X,[B]),ie.delayedLeave&&ie.delayedLeave(),B._enterCb=void 0)};Y?te(Y,[B,de]):de()},leave(B,Y){const X=String(e.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Y();J(f,[B]);let pe=!1;const O=B._leaveCb=de=>{pe||(pe=!0,Y(),de?J(w,[B]):J(m,[B]),B._leaveCb=void 0,z[X]===e&&delete z[X])};z[X]=e,h?te(h,[B,O]):O()},clone(B){return ti(B,t,n,i)}};return ie}function Sr(e){if(lr(e))return e=Ut(e),e.children=null,e}function Eo(e){return lr(e)?e.children?e.children[0]:void 0:e}function ni(e,t){e.shapeFlag&6&&e.component?ni(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ls(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===_e?(o.patchFlag&128&&r++,i=i.concat(Ls(o.children,t,a))):(t||o.type!==We)&&i.push(a!=null?Ut(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function yl(e){return K(e)?{setup:e,name:e.name}:e}const zn=e=>!!e.type.__asyncLoader,lr=e=>e.type.__isKeepAlive;function Td(e,t){vl(e,"a",t)}function Cd(e,t){vl(e,"da",t)}function vl(e,t,n=Ee){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(cr(t,i,n),n){let r=n.parent;for(;r&&r.parent;)lr(r.parent.vnode)&&Sd(i,t,n,r),r=r.parent}}function Sd(e,t,n,i){const r=cr(t,e,i,!0);Ns(()=>{ys(i[t],r)},n)}function cr(e,t,n=Ee,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ln(),xn(n);const a=je(t,n,e,o);return tn(),Dn(),a});return i?r.unshift(s):r.push(s),s}}const _t=e=>(t,n=Ee)=>(!ri||e==="sp")&&cr(e,(...i)=>t(...i),n),kd=_t("bm"),Ds=_t("m"),xd=_t("bu"),_l=_t("u"),wl=_t("bum"),Ns=_t("um"),Ad=_t("sp"),Rd=_t("rtg"),Od=_t("rtc");function Pd(e,t=Ee){cr("ec",e,t)}function en(e,t){const n=Ce;if(n===null)return e;const i=fr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,l,c=fe]=t[s];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Wt(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ln(),je(l,n,8,[e.el,a,e,t]),Dn())}}const Ms="components",Ld="directives";function Ne(e,t){return $s(Ms,e,!0,t)||e}const El=Symbol();function Wn(e){return ye(e)?$s(Ms,e,!1)||e:e||El}function kn(e){return $s(Ld,e)}function $s(e,t,n=!0,i=!1){const r=Ce||Ee;if(r){const s=r.type;if(e===Ms){const a=ff(s,!1);if(a&&(a===t||a===at(t)||a===ir(at(t))))return s}const o=Io(r[e]||s[e],t)||Io(r.appContext[e],t);return!o&&i?s:o}}function Io(e,t){return e&&(e[t]||e[at(t)]||e[ir(at(t))])}function Di(e,t,n,i){let r;const s=n&&n[i];if(H(e)||ye(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,s&&s[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s&&s[o])}else if(he(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(e[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function Dd(e,t){for(let n=0;n<t.length;n++){const i=t[n];if(H(i))for(let r=0;r<i.length;r++)e[i[r].name]=i[r].fn;else i&&(e[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return e}function Pe(e,t,n={},i,r){if(Ce.isCE||Ce.parent&&zn(Ce.parent)&&Ce.parent.isCE)return t!=="default"&&(n.name=t),oe("slot",n,i&&i());let s=e[t];s&&s._c&&(s._d=!1),L();const o=s&&Il(s(n)),a=Be(_e,{key:n.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Il(e){return e.some(t=>Vi(t)?!(t.type===We||t.type===_e&&!Il(t.children)):!0)?e:null}const Gr=e=>e?Dl(e)?fr(e)||e.proxy:Gr(e.parent):null,Vn=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>Fs(e),$forceUpdate:e=>e.f||(e.f=()=>Os(e.update)),$nextTick:e=>e.n||(e.n=cl.bind(e.proxy)),$watch:e=>Ed.bind(e)}),kr=(e,t)=>e!==fe&&!e.__isScriptSetup&&Z(e,t),Nd={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(kr(i,t))return o[t]=1,i[t];if(r!==fe&&Z(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&Z(c,t))return o[t]=3,s[t];if(n!==fe&&Z(n,t))return o[t]=4,n[t];Yr&&(o[t]=0)}}const u=Vn[t];let f,h;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==fe&&Z(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Z(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return kr(r,t)?(r[t]=n,!0):i!==fe&&Z(i,t)?(i[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==fe&&Z(e,o)||kr(t,o)||(a=s[0])&&Z(a,o)||Z(i,o)||Z(Vn,o)||Z(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Yr=!0;function Md(e){const t=Fs(e),n=e.proxy,i=e.ctx;Yr=!1,t.beforeCreate&&To(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:w,activated:C,deactivated:F,beforeDestroy:k,beforeUnmount:N,destroyed:R,unmounted:z,render:J,renderTracked:te,renderTriggered:ie,errorCaptured:B,serverPrefetch:Y,expose:X,inheritAttrs:pe,components:O,directives:de,filters:Te}=t;if(c&&$d(c,i,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const re=o[ae];K(re)&&(i[ae]=re.bind(n))}if(r){const ae=r.call(n,n);he(ae)&&(e.data=an(ae))}if(Yr=!0,s)for(const ae in s){const re=s[ae],Ve=K(re)?re.bind(n,n):K(re.get)?re.get.bind(n,n):Je,zt=!K(re)&&K(re.set)?re.set.bind(n):Je,Ke=Fe({get:Ve,set:zt});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Le=>Ke.value=Le})}if(a)for(const ae in a)Tl(a[ae],i,n,ae);if(l){const ae=K(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(re=>{Li(re,ae[re])})}u&&To(u,e,"c");function me(ae,re){H(re)?re.forEach(Ve=>ae(Ve.bind(n))):re&&ae(re.bind(n))}if(me(kd,f),me(Ds,h),me(xd,m),me(_l,w),me(Td,C),me(Cd,F),me(Pd,B),me(Od,te),me(Rd,ie),me(wl,N),me(Ns,z),me(Ad,Y),H(X))if(X.length){const ae=e.exposed||(e.exposed={});X.forEach(re=>{Object.defineProperty(ae,re,{get:()=>n[re],set:Ve=>n[re]=Ve})})}else e.exposed||(e.exposed={});J&&e.render===Je&&(e.render=J),pe!=null&&(e.inheritAttrs=pe),O&&(e.components=O),de&&(e.directives=de)}function $d(e,t,n=Je,i=!1){H(e)&&(e=Jr(e));for(const r in e){const s=e[r];let o;he(s)?"default"in s?o=pt(s.from||r,s.default,!0):o=pt(s.from||r):o=pt(s),Ae(o)&&i?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function To(e,t,n){je(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tl(e,t,n,i){const r=i.includes(".")?pl(n,i):()=>n[i];if(ye(e)){const s=t[e];K(s)&&En(r,s)}else if(K(e))En(r,e.bind(n));else if(he(e))if(H(e))e.forEach(s=>Tl(s,t,n,i));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&En(r,s,e)}}function Fs(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(c=>Wi(l,c,o,!0)),Wi(l,t,o)),he(t)&&s.set(t,l),l}function Wi(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Wi(e,s,n,!0),r&&r.forEach(o=>Wi(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Fd[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Fd={data:Co,props:qt,emits:qt,methods:qt,computed:qt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:qt,directives:qt,watch:Ud,provide:Co,inject:Bd};function Co(e,t){return t?e?function(){return Ie(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Bd(e,t){return qt(Jr(e),Jr(t))}function Jr(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?Ie(Ie(Object.create(null),e),t):t}function Ud(e,t){if(!e)return t;if(!t)return e;const n=Ie(Object.create(null),e);for(const i in t)n[i]=Oe(e[i],t[i]);return n}function Hd(e,t,n,i=!1){const r={},s={};Hi(s,dr,1),e.propsDefaults=Object.create(null),Cl(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:ed(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function jd(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=ee(r),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(or(e.emitsOptions,h))continue;const m=t[h];if(l)if(Z(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const w=at(h);r[w]=Xr(l,a,w,m,e,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Cl(e,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=Pn(f))===f||!Z(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Xr(l,a,f,void 0,e,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!Z(t,f))&&(delete s[f],c=!0)}c&&yt(e,"set","$attrs")}function Cl(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Pi(l))continue;const c=t[l];let u;r&&Z(r,u=at(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:or(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ee(n),c=a||fe;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Xr(r,l,f,c[f],e,!Z(c,f))}}return o}function Xr(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(xn(r),i=c[n]=l.call(null,t),tn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Pn(n))&&(i=!0))}return i}function Sl(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!K(e)){const u=f=>{l=!0;const[h,m]=Sl(f,t,!0);Ie(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return he(e)&&i.set(e,bn),bn;if(H(s))for(let u=0;u<s.length;u++){const f=at(s[u]);So(f)&&(o[f]=fe)}else if(s)for(const u in s){const f=at(u);if(So(f)){const h=s[u],m=o[f]=H(h)||K(h)?{type:h}:Object.assign({},h);if(m){const w=Ao(Boolean,m.type),C=Ao(String,m.type);m[0]=w>-1,m[1]=C<0||w<C,(w>-1||Z(m,"default"))&&a.push(f)}}}const c=[o,a];return he(e)&&i.set(e,c),c}function So(e){return e[0]!=="$"}function ko(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function xo(e,t){return ko(e)===ko(t)}function Ao(e,t){return H(t)?t.findIndex(n=>xo(n,e)):K(t)&&xo(t,e)?0:-1}const kl=e=>e[0]==="_"||e==="$stable",Bs=e=>H(e)?e.map(it):[it(e)],zd=(e,t,n)=>{if(t._n)return t;const i=ze((...r)=>Bs(t(...r)),n);return i._c=!1,i},xl=(e,t,n)=>{const i=e._ctx;for(const r in e){if(kl(r))continue;const s=e[r];if(K(s))t[r]=zd(r,s,i);else if(s!=null){const o=Bs(s);t[r]=()=>o}}},Al=(e,t)=>{const n=Bs(t);e.slots.default=()=>n},Wd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ee(t),Hi(t,"_",n)):xl(t,e.slots={})}else e.slots={},t&&Al(e,t);Hi(e.slots,dr,1)},Vd=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=fe;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Ie(r,t),!n&&a===1&&delete r._):(s=!t.$stable,xl(t,r)),o=t}else t&&(Al(e,t),o={default:1});if(s)for(const a in r)!kl(a)&&!(a in o)&&delete r[a]};function Rl(){return{app:null,config:{isNativeTag:_u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kd=0;function qd(e,t){return function(i,r=null){K(i)||(i=Object.assign({},i)),r!=null&&!he(r)&&(r=null);const s=Rl(),o=new Set;let a=!1;const l=s.app={_uid:Kd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gf,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=oe(i,r);return h.appContext=s,u&&t?t(h,c):e(h,c,f),a=!0,l._container=c,c.__vue_app__=l,fr(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Qr(e,t,n,i,r=!1){if(H(e)){e.forEach((h,m)=>Qr(h,t&&(H(t)?t[m]:t),n,i,r));return}if(zn(i)&&!r)return;const s=i.shapeFlag&4?fr(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,Z(f,c)&&(f[c]=null)):Ae(c)&&(c.value=null)),K(l))Mt(l,a,12,[o,u]);else{const h=ye(l),m=Ae(l);if(h||m){const w=()=>{if(e.f){const C=h?Z(f,l)?f[l]:u[l]:l.value;r?H(C)&&ys(C,s):H(C)?C.includes(s)||C.push(s):h?(u[l]=[s],Z(f,l)&&(f[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,Z(f,l)&&(f[l]=o)):m&&(l.value=o,e.k&&(u[e.k]=o))};o?(w.id=-1,De(w,n)):w()}}}const De=_d;function Gd(e){return Yd(e)}function Yd(e,t){const n=Su();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Je,insertStaticContent:w}=e,C=(d,p,g,b=null,v=null,I=null,x=!1,E=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jt(d,p)&&(b=S(d),Le(d,v,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:_,ref:M,shapeFlag:P}=p;switch(_){case ur:F(d,p,g,b);break;case We:k(d,p,g,b);break;case Ni:d==null&&N(p,g,b,x);break;case _e:O(d,p,g,b,v,I,x,E,T);break;default:P&1?J(d,p,g,b,v,I,x,E,T):P&6?de(d,p,g,b,v,I,x,E,T):(P&64||P&128)&&_.process(d,p,g,b,v,I,x,E,T,Q)}M!=null&&v&&Qr(M,d&&d.ref,I,p||d,!p)},F=(d,p,g,b)=>{if(d==null)i(p.el=a(p.children),g,b);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},k=(d,p,g,b)=>{d==null?i(p.el=l(p.children||""),g,b):p.el=d.el},N=(d,p,g,b)=>{[d.el,d.anchor]=w(d.children,p,g,b,d.el,d.anchor)},R=({el:d,anchor:p},g,b)=>{let v;for(;d&&d!==p;)v=h(d),i(d,g,b),d=v;i(p,g,b)},z=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),r(d),d=g;r(p)},J=(d,p,g,b,v,I,x,E,T)=>{x=x||p.type==="svg",d==null?te(p,g,b,v,I,x,E,T):Y(d,p,v,I,x,E,T)},te=(d,p,g,b,v,I,x,E)=>{let T,_;const{type:M,props:P,shapeFlag:$,transition:j,dirs:G}=d;if(T=d.el=o(d.type,I,P&&P.is,P),$&8?u(T,d.children):$&16&&B(d.children,T,null,b,v,I&&M!=="foreignObject",x,E),G&&Wt(d,null,b,"created"),P){for(const se in P)se!=="value"&&!Pi(se)&&s(T,se,null,P[se],I,d.children,b,v,A);"value"in P&&s(T,"value",null,P.value),(_=P.onVnodeBeforeMount)&&tt(_,b,d)}ie(T,d,d.scopeId,x,b),G&&Wt(d,null,b,"beforeMount");const le=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;le&&j.beforeEnter(T),i(T,p,g),((_=P&&P.onVnodeMounted)||le||G)&&De(()=>{_&&tt(_,b,d),le&&j.enter(T),G&&Wt(d,null,b,"mounted")},v)},ie=(d,p,g,b,v)=>{if(g&&m(d,g),b)for(let I=0;I<b.length;I++)m(d,b[I]);if(v){let I=v.subTree;if(p===I){const x=v.vnode;ie(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},B=(d,p,g,b,v,I,x,E,T=0)=>{for(let _=T;_<d.length;_++){const M=d[_]=E?kt(d[_]):it(d[_]);C(null,M,p,g,b,v,I,x,E)}},Y=(d,p,g,b,v,I,x)=>{const E=p.el=d.el;let{patchFlag:T,dynamicChildren:_,dirs:M}=p;T|=d.patchFlag&16;const P=d.props||fe,$=p.props||fe;let j;g&&Vt(g,!1),(j=$.onVnodeBeforeUpdate)&&tt(j,g,p,d),M&&Wt(p,d,g,"beforeUpdate"),g&&Vt(g,!0);const G=v&&p.type!=="foreignObject";if(_?X(d.dynamicChildren,_,E,g,b,G,I):x||re(d,p,E,null,g,b,G,I,!1),T>0){if(T&16)pe(E,p,P,$,g,b,v);else if(T&2&&P.class!==$.class&&s(E,"class",null,$.class,v),T&4&&s(E,"style",P.style,$.style,v),T&8){const le=p.dynamicProps;for(let se=0;se<le.length;se++){const ve=le[se],qe=P[ve],un=$[ve];(un!==qe||ve==="value")&&s(E,ve,qe,un,v,d.children,g,b,A)}}T&1&&d.children!==p.children&&u(E,p.children)}else!x&&_==null&&pe(E,p,P,$,g,b,v);((j=$.onVnodeUpdated)||M)&&De(()=>{j&&tt(j,g,p,d),M&&Wt(p,d,g,"updated")},b)},X=(d,p,g,b,v,I,x)=>{for(let E=0;E<p.length;E++){const T=d[E],_=p[E],M=T.el&&(T.type===_e||!Jt(T,_)||T.shapeFlag&70)?f(T.el):g;C(T,_,M,null,b,v,I,x,!0)}},pe=(d,p,g,b,v,I,x)=>{if(g!==b){if(g!==fe)for(const E in g)!Pi(E)&&!(E in b)&&s(d,E,g[E],null,x,p.children,v,I,A);for(const E in b){if(Pi(E))continue;const T=b[E],_=g[E];T!==_&&E!=="value"&&s(d,E,_,T,x,p.children,v,I,A)}"value"in b&&s(d,"value",g.value,b.value)}},O=(d,p,g,b,v,I,x,E,T)=>{const _=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:$,slotScopeIds:j}=p;j&&(E=E?E.concat(j):j),d==null?(i(_,g,b),i(M,g,b),B(p.children,g,M,v,I,x,E,T)):P>0&&P&64&&$&&d.dynamicChildren?(X(d.dynamicChildren,$,g,v,I,x,E),(p.key!=null||v&&p===v.subTree)&&Us(d,p,!0)):re(d,p,g,M,v,I,x,E,T)},de=(d,p,g,b,v,I,x,E,T)=>{p.slotScopeIds=E,d==null?p.shapeFlag&512?v.ctx.activate(p,g,b,x,T):Te(p,g,b,v,I,x,T):wt(d,p,T)},Te=(d,p,g,b,v,I,x)=>{const E=d.component=af(d,b,v);if(lr(d)&&(E.ctx.renderer=Q),lf(E),E.asyncDep){if(v&&v.registerDep(E,me),!d.el){const T=E.subTree=oe(We);k(null,T,p,g)}return}me(E,d,p,g,v,I,x)},wt=(d,p,g)=>{const b=p.component=d.component;if(bd(d,p,g))if(b.asyncDep&&!b.asyncResolved){ae(b,p,g);return}else b.next=p,cd(b.update),b.update();else p.el=d.el,b.vnode=p},me=(d,p,g,b,v,I,x)=>{const E=()=>{if(d.isMounted){let{next:M,bu:P,u:$,parent:j,vnode:G}=d,le=M,se;Vt(d,!1),M?(M.el=G.el,ae(d,M,x)):M=G,P&&Tr(P),(se=M.props&&M.props.onVnodeBeforeUpdate)&&tt(se,j,M,G),Vt(d,!0);const ve=Cr(d),qe=d.subTree;d.subTree=ve,C(qe,ve,f(qe.el),S(qe),d,v,I),M.el=ve.el,le===null&&yd(d,ve.el),$&&De($,v),(se=M.props&&M.props.onVnodeUpdated)&&De(()=>tt(se,j,M,G),v)}else{let M;const{el:P,props:$}=p,{bm:j,m:G,parent:le}=d,se=zn(p);if(Vt(d,!1),j&&Tr(j),!se&&(M=$&&$.onVnodeBeforeMount)&&tt(M,le,p),Vt(d,!0),P&&q){const ve=()=>{d.subTree=Cr(d),q(P,d.subTree,d,v,null)};se?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ve()):ve()}else{const ve=d.subTree=Cr(d);C(null,ve,g,b,d,v,I),p.el=ve.el}if(G&&De(G,v),!se&&(M=$&&$.onVnodeMounted)){const ve=p;De(()=>tt(M,le,ve),v)}(p.shapeFlag&256||le&&zn(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&De(d.a,v),d.isMounted=!0,p=g=b=null}},T=d.effect=new Is(E,()=>Os(_),d.scope),_=d.update=()=>T.run();_.id=d.uid,Vt(d,!0),_()},ae=(d,p,g)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,jd(d,p.props,b,g),Vd(d,p.children,g),Ln(),_o(),Dn()},re=(d,p,g,b,v,I,x,E,T=!1)=>{const _=d&&d.children,M=d?d.shapeFlag:0,P=p.children,{patchFlag:$,shapeFlag:j}=p;if($>0){if($&128){zt(_,P,g,b,v,I,x,E,T);return}else if($&256){Ve(_,P,g,b,v,I,x,E,T);return}}j&8?(M&16&&A(_,v,I),P!==_&&u(g,P)):M&16?j&16?zt(_,P,g,b,v,I,x,E,T):A(_,v,I,!0):(M&8&&u(g,""),j&16&&B(P,g,b,v,I,x,E,T))},Ve=(d,p,g,b,v,I,x,E,T)=>{d=d||bn,p=p||bn;const _=d.length,M=p.length,P=Math.min(_,M);let $;for($=0;$<P;$++){const j=p[$]=T?kt(p[$]):it(p[$]);C(d[$],j,g,null,v,I,x,E,T)}_>M?A(d,v,I,!0,!1,P):B(p,g,b,v,I,x,E,T,P)},zt=(d,p,g,b,v,I,x,E,T)=>{let _=0;const M=p.length;let P=d.length-1,$=M-1;for(;_<=P&&_<=$;){const j=d[_],G=p[_]=T?kt(p[_]):it(p[_]);if(Jt(j,G))C(j,G,g,null,v,I,x,E,T);else break;_++}for(;_<=P&&_<=$;){const j=d[P],G=p[$]=T?kt(p[$]):it(p[$]);if(Jt(j,G))C(j,G,g,null,v,I,x,E,T);else break;P--,$--}if(_>P){if(_<=$){const j=$+1,G=j<M?p[j].el:b;for(;_<=$;)C(null,p[_]=T?kt(p[_]):it(p[_]),g,G,v,I,x,E,T),_++}}else if(_>$)for(;_<=P;)Le(d[_],v,I,!0),_++;else{const j=_,G=_,le=new Map;for(_=G;_<=$;_++){const $e=p[_]=T?kt(p[_]):it(p[_]);$e.key!=null&&le.set($e.key,_)}let se,ve=0;const qe=$-G+1;let un=!1,lo=0;const $n=new Array(qe);for(_=0;_<qe;_++)$n[_]=0;for(_=j;_<=P;_++){const $e=d[_];if(ve>=qe){Le($e,v,I,!0);continue}let et;if($e.key!=null)et=le.get($e.key);else for(se=G;se<=$;se++)if($n[se-G]===0&&Jt($e,p[se])){et=se;break}et===void 0?Le($e,v,I,!0):($n[et-G]=_+1,et>=lo?lo=et:un=!0,C($e,p[et],g,null,v,I,x,E,T),ve++)}const co=un?Jd($n):bn;for(se=co.length-1,_=qe-1;_>=0;_--){const $e=G+_,et=p[$e],uo=$e+1<M?p[$e+1].el:b;$n[_]===0?C(null,et,g,uo,v,I,x,E,T):un&&(se<0||_!==co[se]?Ke(et,g,uo,2):se--)}}},Ke=(d,p,g,b,v=null)=>{const{el:I,type:x,transition:E,children:T,shapeFlag:_}=d;if(_&6){Ke(d.component.subTree,p,g,b);return}if(_&128){d.suspense.move(p,g,b);return}if(_&64){x.move(d,p,g,Q);return}if(x===_e){i(I,p,g);for(let P=0;P<T.length;P++)Ke(T[P],p,g,b);i(d.anchor,p,g);return}if(x===Ni){R(d,p,g);return}if(b!==2&&_&1&&E)if(b===0)E.beforeEnter(I),i(I,p,g),De(()=>E.enter(I),v);else{const{leave:P,delayLeave:$,afterLeave:j}=E,G=()=>i(I,p,g),le=()=>{P(I,()=>{G(),j&&j()})};$?$(I,G,le):le()}else i(I,p,g)},Le=(d,p,g,b=!1,v=!1)=>{const{type:I,props:x,ref:E,children:T,dynamicChildren:_,shapeFlag:M,patchFlag:P,dirs:$}=d;if(E!=null&&Qr(E,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const j=M&1&&$,G=!zn(d);let le;if(G&&(le=x&&x.onVnodeBeforeUnmount)&&tt(le,p,d),M&6)y(d.component,g,b);else{if(M&128){d.suspense.unmount(g,b);return}j&&Wt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,v,Q,b):_&&(I!==_e||P>0&&P&64)?A(_,p,g,!1,!0):(I===_e&&P&384||!v&&M&16)&&A(T,p,g),b&&cn(d)}(G&&(le=x&&x.onVnodeUnmounted)||j)&&De(()=>{le&&tt(le,p,d),j&&Wt(d,null,p,"unmounted")},g)},cn=d=>{const{type:p,el:g,anchor:b,transition:v}=d;if(p===_e){Ei(g,b);return}if(p===Ni){z(d);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:E}=v,T=()=>x(g,I);E?E(d.el,I,T):T()}else I()},Ei=(d,p)=>{let g;for(;d!==p;)g=h(d),r(d),d=g;r(p)},y=(d,p,g)=>{const{bum:b,scope:v,update:I,subTree:x,um:E}=d;b&&Tr(b),v.stop(),I&&(I.active=!1,Le(x,d,p,g)),E&&De(E,p),De(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(d,p,g,b=!1,v=!1,I=0)=>{for(let x=I;x<d.length;x++)Le(d[x],p,g,b,v)},S=d=>d.shapeFlag&6?S(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),D=(d,p,g)=>{d==null?p._vnode&&Le(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),_o(),dl(),p._vnode=d},Q={p:C,um:Le,m:Ke,r:cn,mt:Te,mc:B,pc:re,pbc:X,n:S,o:e};let ge,q;return t&&([ge,q]=t(Q)),{render:D,hydrate:ge,createApp:qd(D,ge)}}function Vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Us(e,t,n=!1){const i=e.children,r=t.children;if(H(i)&&H(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=kt(r[s]),a.el=o.el),n||Us(o,a)),a.type===ur&&(a.el=o.el)}}function Jd(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const Xd=e=>e.__isTeleport,Kn=e=>e&&(e.disabled||e.disabled===""),Ro=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Zr=(e,t)=>{const n=e&&e.to;return ye(n)?t?t(n):null:n},Qd={__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:m,querySelector:w,createText:C,createComment:F}}=c,k=Kn(t.props);let{shapeFlag:N,children:R,dynamicChildren:z}=t;if(e==null){const J=t.el=C(""),te=t.anchor=C("");m(J,n,i),m(te,n,i);const ie=t.target=Zr(t.props,w),B=t.targetAnchor=C("");ie&&(m(B,ie),o=o||Ro(ie));const Y=(X,pe)=>{N&16&&u(R,X,pe,r,s,o,a,l)};k?Y(n,te):ie&&Y(ie,B)}else{t.el=e.el;const J=t.anchor=e.anchor,te=t.target=e.target,ie=t.targetAnchor=e.targetAnchor,B=Kn(e.props),Y=B?n:te,X=B?J:ie;if(o=o||Ro(te),z?(h(e.dynamicChildren,z,Y,r,s,o,a),Us(e,t,!0)):l||f(e,t,Y,X,r,s,o,a,!1),k)B||Ai(t,n,J,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const pe=t.target=Zr(t.props,w);pe&&Ai(t,pe,null,c,0)}else B&&Ai(t,te,ie,c,1)}Ol(t)},remove(e,t,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:h}=e;if(f&&s(u),(o||!Kn(h))&&(s(c),a&16))for(let m=0;m<l.length;m++){const w=l[m];r(w,t,n,!0,!!w.dynamicChildren)}},move:Ai,hydrate:Zd};function Ai(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,f=s===2;if(f&&i(o,t,n),(!f||Kn(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],t,n,2);f&&i(a,t,n)}function Zd(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=t.target=Zr(t.props,l);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Kn(t.props))t.anchor=c(o(e),t,a(e),n,i,r,s),t.targetAnchor=f;else{t.anchor=o(e);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(f,t,u,n,i,r,s)}Ol(t)}return t.anchor&&o(t.anchor)}const ef=Qd;function Ol(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const _e=Symbol(void 0),ur=Symbol(void 0),We=Symbol(void 0),Ni=Symbol(void 0),qn=[];let Ye=null;function L(e=!1){qn.push(Ye=e?null:[])}function tf(){qn.pop(),Ye=qn[qn.length-1]||null}let ii=1;function Oo(e){ii+=e}function Pl(e){return e.dynamicChildren=ii>0?Ye||bn:null,tf(),ii>0&&Ye&&Ye.push(e),e}function W(e,t,n,i,r,s){return Pl(ue(e,t,n,i,r,s,!0))}function Be(e,t,n,i,r){return Pl(oe(e,t,n,i,r,!0))}function Vi(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const dr="__vInternal",Ll=({key:e})=>e??null,Mi=({ref:e,ref_key:t,ref_for:n})=>e!=null?ye(e)||Ae(e)||K(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function ue(e,t=null,n=null,i=0,r=null,s=e===_e?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ll(t),ref:t&&Mi(t),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ce};return a?(js(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),ii>0&&!o&&Ye&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ye.push(l),l}const oe=nf;function nf(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===El)&&(e=We),Vi(e)){const a=Ut(e,t,!0);return n&&js(a,n),ii>0&&!s&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(e)]=a:Ye.push(a)),a.patchFlag|=-2,a}if(hf(e)&&(e=e.__vccOpts),t){t=rf(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=we(a)),he(l)&&(nl(l)&&!H(l)&&(l=Ie({},l)),t.style=fi(l))}const o=ye(e)?1:vd(e)?128:Xd(e)?64:he(e)?4:K(e)?2:0;return ue(e,t,n,i,r,o,s,!0)}function rf(e){return e?nl(e)||dr in e?Ie({},e):e:null}function Ut(e,t,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=e,a=t?mt(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ll(a),ref:t&&t.ref?n&&r?H(r)?r.concat(Mi(t)):[r,Mi(t)]:Mi(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Hs(e=" ",t=0){return oe(ur,null,e,t)}function be(e="",t=!1){return t?(L(),Be(We,null,e)):oe(We,null,e)}function it(e){return e==null||typeof e=="boolean"?oe(We):H(e)?oe(_e,null,e.slice()):typeof e=="object"?kt(e):oe(ur,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function js(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),js(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(dr in t)?t._ctx=Ce:r===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),i&64?(n=16,t=[Hs(t)]):n=8);e.children=t,e.shapeFlag|=n}function mt(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=we([t.class,i.class]));else if(r==="style")t.style=fi([t.style,i.style]);else if(er(r)){const s=t[r],o=i[r];o&&s!==o&&!(H(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function tt(e,t,n,i=null){je(e,t,7,[n,i])}const sf=Rl();let of=0;function af(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||sf,s={uid:of++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sl(i,r),emitsOptions:hl(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=fd.bind(null,s),e.ce&&e.ce(s),s}let Ee=null;const zs=()=>Ee||Ce,xn=e=>{Ee=e,e.scope.on()},tn=()=>{Ee&&Ee.scope.off(),Ee=null};function Dl(e){return e.vnode.shapeFlag&4}let ri=!1;function lf(e,t=!1){ri=t;const{props:n,children:i}=e.vnode,r=Dl(e);Hd(e,n,r,t),Wd(e,i);const s=r?cf(e,t):void 0;return ri=!1,s}function cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xs(new Proxy(e.ctx,Nd));const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?df(e):null;xn(e),Ln();const s=Mt(i,e,0,[e.props,r]);if(Dn(),tn(),ja(s)){if(s.then(tn,tn),t)return s.then(o=>{Po(e,o,t)}).catch(o=>{sr(o,e,0)});e.asyncDep=s}else Po(e,s,t)}else Nl(e,t)}function Po(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ol(t)),Nl(e,n)}let Lo;function Nl(e,t,n){const i=e.type;if(!e.render){if(!t&&Lo&&!i.render){const r=i.template||Fs(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ie(Ie({isCustomElement:s,delimiters:a},o),l);i.render=Lo(r,c)}}e.render=i.render||Je}xn(e),Ln(),Md(e),Dn(),tn()}function uf(e){return new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}})}function df(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=uf(e))},slots:e.slots,emit:e.emit,expose:t}}function fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ol(xs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vn)return Vn[n](e)},has(t,n){return n in t||n in Vn}}))}function ff(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function hf(e){return K(e)&&"__vccOpts"in e}const Fe=(e,t)=>od(e,t,ri);function Ws(e,t,n){const i=arguments.length;return i===2?he(t)&&!H(t)?Vi(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Vi(n)&&(n=[n]),oe(e,t,n))}const pf=Symbol(""),mf=()=>pt(pf),gf="3.2.45",bf="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,Do=Xt&&Xt.createElement("template"),yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?Xt.createElementNS(bf,e):Xt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Do.innerHTML=i?`<svg>${e}</svg>`:e;const a=Do.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _f(e,t,n){const i=e.style,r=ye(n);if(n&&!r){for(const s in n)es(i,s,n[s]);if(t&&!ye(t))for(const s in t)n[s]==null&&es(i,s,"")}else{const s=i.display;r?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=s)}}const No=/\s*!important$/;function es(e,t,n){if(H(n))n.forEach(i=>es(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=wf(e,t);No.test(n)?e.setProperty(Pn(i),n.replace(No,""),"important"):e[i]=n}}const Mo=["Webkit","Moz","ms"],xr={};function wf(e,t){const n=xr[t];if(n)return n;let i=at(t);if(i!=="filter"&&i in e)return xr[t]=i;i=ir(i);for(let r=0;r<Mo.length;r++){const s=Mo[r]+i;if(s in e)return xr[t]=s}return t}const $o="http://www.w3.org/1999/xlink";function Ef(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($o,t.slice(6,t.length)):e.setAttributeNS($o,t,n);else{const s=vu(t);n==null||s&&!Ba(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function If(e,t,n,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ba(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Tf(e,t,n,i){e.addEventListener(t,n,i)}function Cf(e,t,n,i){e.removeEventListener(t,n,i)}function Sf(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=kf(t);if(i){const c=s[t]=Rf(i,r);Tf(e,a,c,l)}else o&&(Cf(e,a,o,l),s[t]=void 0)}}const Fo=/(?:Once|Passive|Capture)$/;function kf(e){let t;if(Fo.test(e)){t={};let i;for(;i=e.match(Fo);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pn(e.slice(2)),t]}let Ar=0;const xf=Promise.resolve(),Af=()=>Ar||(xf.then(()=>Ar=0),Ar=Date.now());function Rf(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;je(Of(i,n.value),t,5,[i])};return n.value=e,n.attached=Af(),n}function Of(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Bo=/^on[a-z]/,Pf=(e,t,n,i,r=!1,s,o,a,l)=>{t==="class"?vf(e,i,r):t==="style"?_f(e,n,i):er(t)?bs(t)||Sf(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,i,r))?If(e,t,i,s,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Ef(e,t,i,r))};function Lf(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Bo.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Bo.test(t)&&ye(n)?!1:t in e}function u_(e){const t=zs();if(!t)return;const n=t.ut=(r=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s=>ns(s,r))},i=()=>{const r=e(t.proxy);ts(t.subTree,r),n(r)};wd(i),Ds(()=>{const r=new MutationObserver(i);r.observe(t.subTree.el.parentNode,{childList:!0}),Ns(()=>r.disconnect())})}function ts(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ts(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ns(e.el,t);else if(e.type===_e)e.children.forEach(n=>ts(n,t));else if(e.type===Ni){let{el:n,anchor:i}=e;for(;n&&(ns(n,t),n!==i);)n=n.nextSibling}}function ns(e,t){if(e.nodeType===1){const n=e.style;for(const i in t)n.setProperty(`--${i}`,t[i])}}const It="transition",Fn="animation",hr=(e,{slots:t})=>Ws(gl,$l(e),t);hr.displayName="Transition";const Ml={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Df=hr.props=Ie({},gl.props,Ml),Kt=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},Uo=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function $l(e){const t={};for(const O in e)O in Ml||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,w=Nf(r),C=w&&w[0],F=w&&w[1],{onBeforeEnter:k,onEnter:N,onEnterCancelled:R,onLeave:z,onLeaveCancelled:J,onBeforeAppear:te=k,onAppear:ie=N,onAppearCancelled:B=R}=t,Y=(O,de,Te)=>{St(O,de?u:a),St(O,de?c:o),Te&&Te()},X=(O,de)=>{O._isLeaving=!1,St(O,f),St(O,m),St(O,h),de&&de()},pe=O=>(de,Te)=>{const wt=O?ie:N,me=()=>Y(de,O,Te);Kt(wt,[de,me]),Ho(()=>{St(de,O?l:s),ct(de,O?u:a),Uo(wt)||jo(de,i,C,me)})};return Ie(t,{onBeforeEnter(O){Kt(k,[O]),ct(O,s),ct(O,o)},onBeforeAppear(O){Kt(te,[O]),ct(O,l),ct(O,c)},onEnter:pe(!1),onAppear:pe(!0),onLeave(O,de){O._isLeaving=!0;const Te=()=>X(O,de);ct(O,f),Bl(),ct(O,h),Ho(()=>{O._isLeaving&&(St(O,f),ct(O,m),Uo(z)||jo(O,i,F,Te))}),Kt(z,[O,Te])},onEnterCancelled(O){Y(O,!1),Kt(R,[O])},onAppearCancelled(O){Y(O,!0),Kt(B,[O])},onLeaveCancelled(O){X(O),Kt(J,[O])}})}function Nf(e){if(e==null)return null;if(he(e))return[Rr(e.enter),Rr(e.leave)];{const t=Rr(e);return[t,t]}}function Rr(e){return ws(e)}function ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function St(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ho(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Mf=0;function jo(e,t,n,i){const r=e._endId=++Mf,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Fl(e,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{e.removeEventListener(c,h),s()},h=m=>{m.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),e.addEventListener(c,h)}function Fl(e,t){const n=window.getComputedStyle(e),i=w=>(n[w]||"").split(", "),r=i(`${It}Delay`),s=i(`${It}Duration`),o=zo(r,s),a=i(`${Fn}Delay`),l=i(`${Fn}Duration`),c=zo(a,l);let u=null,f=0,h=0;t===It?o>0&&(u=It,f=o,h=s.length):t===Fn?c>0&&(u=Fn,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?It:Fn:null,h=u?u===It?s.length:l.length:0);const m=u===It&&/\b(transform|all)(,|$)/.test(i(`${It}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function zo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Wo(n)+Wo(e[i])))}function Wo(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Bl(){return document.body.offsetHeight}const Ul=new WeakMap,Hl=new WeakMap,$f={name:"TransitionGroup",props:Ie({},Df,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=zs(),i=ml();let r,s;return _l(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!jf(r[0].el,n.vnode.el,o))return;r.forEach(Bf),r.forEach(Uf);const a=r.filter(Hf);Bl(),a.forEach(l=>{const c=l.el,u=c.style;ct(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,St(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=ee(e),a=$l(o);let l=o.tag||_e;r=s,s=t.default?Ls(t.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&ni(u,ti(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];ni(u,ti(u,a,i,n)),Ul.set(u,u.el.getBoundingClientRect())}return oe(l,null,s)}}},Ff=$f;function Bf(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Uf(e){Hl.set(e,e.el.getBoundingClientRect())}function Hf(e){const t=Ul.get(e),n=Hl.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function jf(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(i);const{hasTransform:s}=Fl(i);return r.removeChild(i),s}const zf=["ctrl","shift","alt","meta"],Wf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>zf.some(n=>e[`${n}Key`]&&!t.includes(n))},d_=(e,t)=>(n,...i)=>{for(let r=0;r<t.length;r++){const s=Wf[t[r]];if(s&&s(n,t))return}return e(n,...i)},Vf=Ie({patchProp:Pf},yf);let Vo;function Kf(){return Vo||(Vo=Gd(Vf))}const qf=(...e)=>{const t=Kf().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=Gf(i);if(!r)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Gf(e){return ye(e)?document.querySelector(e):e}var V={innerWidth(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t}return 0},width(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t}return 0},getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth(e,t){if(e){let n=e.offsetWidth;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}return 0},getOuterHeight(e,t){if(e){let n=e.offsetHeight;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getClientHeight(e,t){if(e){let n=e.clientHeight;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getViewport(){let e=window,t=document,n=t.documentElement,i=t.getElementsByTagName("body")[0],r=e.innerWidth||n.clientWidth||i.clientWidth,s=e.innerHeight||n.clientHeight||i.clientHeight;return{width:r,height:s}},getOffset(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index(e){if(e){let t=e.parentNode.childNodes,n=0;for(let i=0;i<t.length;i++){if(t[i]===e)return n;t[i].nodeType===1&&n++}}return-1},addMultipleClasses(e,t){if(e&&t)if(e.classList){let n=t.split(" ");for(let i=0;i<n.length;i++)e.classList.add(n[i])}else{let n=t.split(" ");for(let i=0;i<n.length;i++)e.className+=" "+n[i]}},addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1},find(e,t){return this.isElement(e)?e.querySelectorAll(t):[]},findSingle(e,t){return this.isElement(e)?e.querySelector(t):null},getHeight(e){if(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t}return 0},getWidth(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t}return 0},absolutePosition(e,t){if(e){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=n.height,r=n.width,s=t.offsetHeight,o=t.offsetWidth,a=t.getBoundingClientRect(),l=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),u=this.getViewport(),f,h;a.top+s+i>u.height?(f=a.top+l-i,e.style.transformOrigin="bottom",f<0&&(f=l)):(f=s+a.top+l,e.style.transformOrigin="top"),a.left+r>u.width?h=Math.max(0,a.left+c+o-r):h=a.left+c,e.style.top=f+"px",e.style.left=h+"px"}},relativePosition(e,t){if(e){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e);const i=t.offsetHeight,r=t.getBoundingClientRect(),s=this.getViewport();let o,a;r.top+i+n.height>s.height?(o=-1*n.height,e.style.transformOrigin="bottom",r.top+o<0&&(o=-1*r.top)):(o=i,e.style.transformOrigin="top"),n.width>s.width?a=r.left*-1:r.left+n.width>s.width?a=(r.left+n.width-s.width)*-1:a=0,e.style.top=o+"px",e.style.left=a+"px"}},getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))},getScrollableParents(e){let t=[];if(e){let n=this.getParents(e);const i=/(auto|scroll)/,r=s=>{let o=window.getComputedStyle(s,null);return i.test(o.getPropertyValue("overflow"))||i.test(o.getPropertyValue("overflowX"))||i.test(o.getPropertyValue("overflowY"))};for(let s of n){let o=s.nodeType===1&&s.dataset.scrollselectors;if(o){let a=o.split(",");for(let l of a){let c=this.findSingle(s,l);c&&r(c)&&t.push(c)}}s.nodeType!==9&&r(s)&&t.push(s)}}return t},getHiddenElementOuterHeight(e){if(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementOuterWidth(e){if(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementDimensions(e){if(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}return 0},fadeIn(e,t){if(e){e.style.opacity=0;let n=+new Date,i=0,r=function(){i=+e.style.opacity+(new Date().getTime()-n)/t,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}},fadeOut(e,t){if(e){let n=1,i=50,r=t,s=i/r,o=setInterval(()=>{n-=s,n<=0&&(n=0,clearInterval(o)),e.style.opacity=n},i)}},getUserAgent(){return navigator.userAgent},appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.elElement)t.elElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)},isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView(e,t){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),s=r?parseFloat(r):0,o=e.getBoundingClientRect(),l=t.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-i-s,c=e.scrollTop,u=e.clientHeight,f=this.getOuterHeight(t);l<0?e.scrollTop=c+l:l+f>u&&(e.scrollTop=c+l-u+f)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible(e){return e&&e.offsetParent!=null},invokeElementMethod(e,t,n){e[t].apply(e,n)},isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode},isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus(e,t){e&&document.activeElement!==e&&e.focus(t)},isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1},getFocusableElements(e,t=""){let n=this.find(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`),i=[];for(let r of n)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&i.push(r);return i},getFirstFocusableElement(e,t){const n=this.getFocusableElements(e,t);return n.length>0?n[0]:null},getLastFocusableElement(e,t){const n=this.getFocusableElements(e,t);return n.length>0?n[n.length-1]:null},getNextFocusableElement(e,t,n){const i=this.getFocusableElements(e,n),r=i.length>0?i.findIndex(o=>o===t):-1,s=r>-1&&i.length>=r+1?r+1:-1;return s>-1?i[s]:null},isClickable(e){const t=e.nodeName,n=e.parentElement&&e.parentElement.nodeName;return t=="INPUT"||t=="BUTTON"||t=="A"||n=="INPUT"||n=="BUTTON"||n=="A"||this.hasClass(e,"p-button")||this.hasClass(e.parentElement,"p-button")||this.hasClass(e.parentElement,"p-checkbox")||this.hasClass(e.parentElement,"p-radiobutton")},applyStyle(e,t){if(typeof t=="string")e.style.cssText=t;else for(let n in t)e.style[n]=t[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(e,t){let n=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,t+".csv");else{let i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(n)),i.setAttribute("download",t+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}};class Yf{constructor(t,n=()=>{}){this.element=t,this.listener=n}bindScrollListener(){this.scrollableParents=V.getScrollableParents(this.element);for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}var jl={equals(e,t,n){return n?this.resolveFieldData(e,n)===this.resolveFieldData(t,n):this.deepEquals(e,t)},deepEquals(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Array.isArray(e),i=Array.isArray(t),r,s,o;if(n&&i){if(s=e.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(e[r],t[r]))return!1;return!0}if(n!=i)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return e.toString()==t.toString();var f=Object.keys(e);if(s=f.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,f[r]))return!1;for(r=s;r--!==0;)if(o=f[r],!this.deepEquals(e[o],t[o]))return!1;return!0}return e!==e&&t!==t},resolveFieldData(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(t.indexOf(".")===-1)return e[t];{let r=t.split("."),s=e;for(var n=0,i=r.length;n<i;++n){if(s==null)return null;s=s[r[n]]}return s}}else return null},isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)},getItemValue(e,...t){return this.isFunction(e)?e(...t):e},filter(e,t,n){var i=[];if(e){for(let r of e)for(let s of t)if(String(this.resolveFieldData(r,s)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(r);break}}return i},reorderArray(e,t,n){let i;if(e&&t!==n){if(n>=e.length)for(i=n-e.length;i--+1;)e.push(void 0);e.splice(n,0,e.splice(t,1)[0])}},findIndexInList(e,t){let n=-1;if(t){for(let i=0;i<t.length;i++)if(t[i]===e){n=i;break}}return n},contains(e,t){if(e!=null&&t&&t.length){for(let n of t)if(this.equals(e,n))return!0}return!1},insertIntoOrderedArray(e,t,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>t){n.splice(s,0,e),r=!0;break}r||n.push(e)}else n.push(e)},removeAccents(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp(e,t){let n=e.props;if(n){let i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=Object.prototype.hasOwnProperty.call(n,i)?i:t;return e.type.props[t].type===Boolean&&n[r]===""?!0:n[r]}return null},isEmpty(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0},isNotEmpty(e){return!this.isEmpty(e)},isPrintableCharacter(e=""){return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast(e,t){let n;if(this.isNotEmpty(e))try{n=e.findLast(t)}catch{n=[...e].reverse().find(t)}return n},findLastIndex(e,t){let n=-1;if(this.isNotEmpty(e))try{n=e.findLastIndex(t)}catch{n=e.lastIndexOf([...e].reverse().find(t))}return n}};function Jf(){let e=[];const t=(s,o)=>{let a=e.length>0?e[e.length-1]:{key:s,value:o},l=a.value+(a.key===s?0:o)+1;return e.push({key:s,value:l}),l},n=s=>{e=e.filter(o=>o.value!==s)},i=()=>e.length>0?e[e.length-1].value:0,r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,o,a)=>{o&&(o.style.zIndex=String(t(s,a)))},clear:s=>{s&&(n(r(s)),s.style.zIndex="")},getCurrent:()=>i()}}var gt=Jf(),Ko=0;function si(e="pv_id_"){return Ko++,`${e}${Ko}`}function Vs(){const e=new Map;return{on(t,n){let i=e.get(t);i?i.push(n):i=[n],e.set(t,i)},off(t,n){let i=e.get(t);i&&i.splice(i.indexOf(n)>>>0,1)},emit(t,n){let i=e.get(t);i&&i.slice().map(r=>{r(n)})}}}const ke={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},qo={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[ke.STARTS_WITH,ke.CONTAINS,ke.NOT_CONTAINS,ke.ENDS_WITH,ke.EQUALS,ke.NOT_EQUALS],numeric:[ke.EQUALS,ke.NOT_EQUALS,ke.LESS_THAN,ke.LESS_THAN_OR_EQUAL_TO,ke.GREATER_THAN,ke.GREATER_THAN_OR_EQUAL_TO],date:[ke.DATE_IS,ke.DATE_IS_NOT,ke.DATE_BEFORE,ke.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},Xf=Symbol();var Qf={install:(e,t)=>{let n=t?{...qo,...t}:{...qo};const i={config:an(n)};e.config.globalProperties.$primevue=i,e.provide(Xf,i)}};const pr=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n},Zf={},eh={class:"content_login_component"},th={class:"nav_top_login_form"};function nh(e,t,n,i,r,s){const o=Ne("router-view");return L(),W("div",eh,[ue("div",th,[oe(o)])])}const ih=pr(Zf,[["render",nh],["__scopeId","data-v-f5237ba9"]]),rh="/Dev-Team/assets/logo-437c9ab5.png";const sh={name:"HeaderBar",methods:{handleSignOut(){this.$store.dispatch("authModule/logout",null,{root:!0})},toggle(e){this.$refs.op.toggle(e)}}},oh=e=>(hd("data-v-ef26290d"),e=e(),pd(),e),ah={class:"header_wrapper"},lh=oh(()=>ue("div",{class:"header_logo"},[ue("img",{src:rh,alt:"logo"})],-1));function ch(e,t,n,i,r,s){const o=Ne("InputText"),a=Ne("Avatar"),l=Ne("Button"),c=Ne("OverlayPanel");return L(),W("div",ah,[lh,oe(o,{type:"text",placeholder:"Search by name"}),oe(a,{icon:"pi pi-user",class:"mr-2",size:"large",style:{"background-color":"#2196f3",color:"#ffffff"},onClick:s.toggle},null,8,["onClick"]),oe(c,{ref:"op",id:"overlay_panel"},{default:ze(()=>[oe(l,{label:"Logout",class:"p-button-warning",onClick:s.handleSignOut},null,8,["onClick"])]),_:1},512)])}const uh=pr(sh,[["render",ch],["__scopeId","data-v-ef26290d"]]);const dh={components:{HeaderBar:uh}},fh={class:"main_wrapper"},hh={class:"content"};function ph(e,t,n,i,r,s){const o=Ne("Toast"),a=Ne("header-bar"),l=Ne("router-view");return L(),W(_e,null,[oe(o),ue("div",fh,[oe(a),ue("div",hh,[oe(l)])])],64)}const mh=pr(dh,[["render",ph],["__scopeId","data-v-ddf445b8"]]);function gh(){return zl().__VUE_DEVTOOLS_GLOBAL_HOOK__}function zl(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const bh=typeof Proxy=="function",yh="devtools-plugin:setup",vh="plugin:settings:set";let dn,is;function _h(){var e;return dn!==void 0||(typeof window<"u"&&window.performance?(dn=!0,is=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(dn=!0,is=global.perf_hooks.performance):dn=!1),dn}function wh(){return _h()?is.now():Date.now()}class Eh{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const i={};if(t.settings)for(const o in t.settings){const a=t.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return wh()}},n&&n.on(vh,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ih(e,t){const n=e,i=zl(),r=gh(),s=bh&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(yh,e,t);else{const o=s?new Eh(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Th="store";function Nn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function Wl(e){return e!==null&&typeof e=="object"}function Ch(e){return e&&typeof e.then=="function"}function Sh(e,t){return function(){return e(t)}}function Vl(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var i=t.indexOf(e);i>-1&&t.splice(i,1)}}function Kl(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;mr(e,n,[],e._modules.root,!0),Ks(e,n,t)}function Ks(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,s={};Nn(r,function(o,a){s[a]=Sh(o,e),Object.defineProperty(e.getters,a,{get:function(){return s[a]()},enumerable:!0})}),e._state=an({data:t}),e.strict&&Oh(e),i&&n&&e._withCommit(function(){i.data=null})}function mr(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=qs(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit(function(){a[l]=i.state})}var c=i.context=kh(e,o,n);i.forEachMutation(function(u,f){var h=o+f;xh(e,h,u,c)}),i.forEachAction(function(u,f){var h=u.root?f:o+f,m=u.handler||u;Ah(e,h,m,c)}),i.forEachGetter(function(u,f){var h=o+f;Rh(e,h,u,c)}),i.forEachChild(function(u,f){mr(e,t,n.concat(f),u,r)})}function kh(e,t,n){var i=t==="",r={dispatch:i?e.dispatch:function(s,o,a){var l=Ki(s,o,a),c=l.payload,u=l.options,f=l.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,c)},commit:i?e.commit:function(s,o,a){var l=Ki(s,o,a),c=l.payload,u=l.options,f=l.type;(!u||!u.root)&&(f=t+f),e.commit(f,c,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return ql(e,t)}},state:{get:function(){return qs(e.state,n)}}}),r}function ql(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach(function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function xh(e,t,n,i){var r=e._mutations[t]||(e._mutations[t]=[]);r.push(function(o){n.call(e,i.state,o)})}function Ah(e,t,n,i){var r=e._actions[t]||(e._actions[t]=[]);r.push(function(o){var a=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},o);return Ch(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):a})}function Rh(e,t,n,i){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function Oh(e){En(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function qs(e,t){return t.reduce(function(n,i){return n[i]},e)}function Ki(e,t,n){return Wl(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Ph="vuex bindings",Go="vuex:mutations",Or="vuex:actions",fn="vuex",Lh=0;function Dh(e,t){Ih({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Ph]},function(n){n.addTimelineLayer({id:Go,label:"Vuex Mutations",color:Yo}),n.addTimelineLayer({id:Or,label:"Vuex Actions",color:Yo}),n.addInspector({id:fn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===e&&i.inspectorId===fn)if(i.filter){var r=[];Xl(r,t._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Jl(t._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===e&&i.inspectorId===fn){var r=i.nodeId;ql(t,r),i.state=$h(Bh(t._modules,r),r==="root"?t.getters:t._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===e&&i.inspectorId===fn){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit(function(){i.set(t._state.data,s,i.state.value)})}}),t.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(fn),n.sendInspectorState(fn),n.addTimelineEvent({layerId:Go,event:{time:Date.now(),title:i.type,data:s}})}),t.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=Lh++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:Or,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:Or,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var Yo=8702998,Nh=6710886,Mh=16777215,Gl={label:"namespaced",textColor:Mh,backgroundColor:Nh};function Yl(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Jl(e,t){return{id:t||"root",label:Yl(t),tags:e.namespaced?[Gl]:[],children:Object.keys(e._children).map(function(n){return Jl(e._children[n],t+n+"/")})}}function Xl(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[Gl]:[]}),Object.keys(t._children).forEach(function(r){Xl(e,t._children[r],n,i+r+"/")})}function $h(e,t,n){t=n==="root"?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(i.length){var s=Fh(t);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Yl(o):o,editable:!1,value:rs(function(){return s[o]})}})}return r}function Fh(e){var t={};return Object.keys(e).forEach(function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=rs(function(){return e[n]})}else t[n]=rs(function(){return e[n]})}),t}function Bh(e,t){var n=t.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return s===n.length-1?o:o._children},t==="root"?e:e.root._children)}function rs(e){try{return e()}catch(t){return t}}var Ze=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=(typeof i=="function"?i():i)||{}},Ql={namespaced:{configurable:!0}};Ql.namespaced.get=function(){return!!this._rawModule.namespaced};Ze.prototype.addChild=function(t,n){this._children[t]=n};Ze.prototype.removeChild=function(t){delete this._children[t]};Ze.prototype.getChild=function(t){return this._children[t]};Ze.prototype.hasChild=function(t){return t in this._children};Ze.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Ze.prototype.forEachChild=function(t){Nn(this._children,t)};Ze.prototype.forEachGetter=function(t){this._rawModule.getters&&Nn(this._rawModule.getters,t)};Ze.prototype.forEachAction=function(t){this._rawModule.actions&&Nn(this._rawModule.actions,t)};Ze.prototype.forEachMutation=function(t){this._rawModule.mutations&&Nn(this._rawModule.mutations,t)};Object.defineProperties(Ze.prototype,Ql);var ln=function(t){this.register([],t,!1)};ln.prototype.get=function(t){return t.reduce(function(n,i){return n.getChild(i)},this.root)};ln.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};ln.prototype.update=function(t){Zl([],this.root,t)};ln.prototype.register=function(t,n,i){var r=this;i===void 0&&(i=!0);var s=new Ze(n,i);if(t.length===0)this.root=s;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],s)}n.modules&&Nn(n.modules,function(a,l){r.register(t.concat(l),a,i)})};ln.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),i=t[t.length-1],r=n.getChild(i);r&&r.runtime&&n.removeChild(i)};ln.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),i=t[t.length-1];return n?n.hasChild(i):!1};function Zl(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return;Zl(e.concat(i),t.getChild(i),n.modules[i])}}function Uh(e){return new Me(e)}var Me=function(t){var n=this;t===void 0&&(t={});var i=t.plugins;i===void 0&&(i=[]);var r=t.strict;r===void 0&&(r=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ln(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,m){return l.call(o,h,m)},this.commit=function(h,m,w){return c.call(o,h,m,w)},this.strict=r;var u=this._modules.root.state;mr(this,u,[],this._modules.root),Ks(this,u),i.forEach(function(f){return f(n)})},Gs={state:{configurable:!0}};Me.prototype.install=function(t,n){t.provide(n||Th,this),t.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&Dh(t,this)};Gs.state.get=function(){return this._state.data};Gs.state.set=function(e){};Me.prototype.commit=function(t,n,i){var r=this,s=Ki(t,n,i),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};Me.prototype.dispatch=function(t,n){var i=this,r=Ki(t,n),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,f){c.then(function(h){try{i._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(a,i.state)})}catch{}u(h)},function(h){try{i._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(a,i.state,h)})}catch{}f(h)})})}};Me.prototype.subscribe=function(t,n){return Vl(t,this._subscribers,n)};Me.prototype.subscribeAction=function(t,n){var i=typeof t=="function"?{before:t}:t;return Vl(i,this._actionSubscribers,n)};Me.prototype.watch=function(t,n,i){var r=this;return En(function(){return t(r.state,r.getters)},n,Object.assign({},i))};Me.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Me.prototype.registerModule=function(t,n,i){i===void 0&&(i={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),mr(this,this.state,t,this._modules.get(t),i.preserveState),Ks(this,this.state)};Me.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var i=qs(n.state,t.slice(0,-1));delete i[t[t.length-1]]}),Kl(this)};Me.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Me.prototype.hotUpdate=function(t){this._modules.update(t),Kl(this,!0)};Me.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Me.prototype,Gs);var Hh=Wh(function(e,t){var n={};return jh(t).forEach(function(i){var r=i.key,s=i.val;s=e+s,n[r]=function(){if(!(e&&!Vh(this.$store,"mapGetters",e)))return this.$store.getters[s]},n[r].vuex=!0}),n});function jh(e){return zh(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function zh(e){return Array.isArray(e)||Wl(e)}function Wh(e){return function(t,n){return typeof t!="string"?(n=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,n)}}function Vh(e,t,n){var i=e._modulesNamespaceMap[n];return i}const Kh={beforeMount(){this.$store.dispatch("authModule/fetchUser",null,{root:!0})},computed:{layout(){return this.getUser?this.$route.meta.layout+"-layout":"empty-layout"},...Hh("authModule",["getUser"])},components:{EmptyLayout:ih,MainLayout:mh}};function qh(e,t,n,i,r,s){const o=Ne("router-view");return L(),W("div",null,[(L(),Be(Wn(s.layout),null,{default:ze(()=>[oe(o)]),_:1}))])}const Gh=pr(Kh,[["render",qh]]),Yh="modulepreload",Jh=function(e){return"/Dev-Team/"+e},Jo={},Pr=function(t,n,i){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Jh(s),s in Jo)return;Jo[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Yh,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof window<"u";function Xh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Lr(e,t){const n={};for(const i in t){const r=t[i];n[i]=Xe(r)?r.map(e):e(r)}return n}const Gn=()=>{},Xe=Array.isArray,Qh=/\/$/,Zh=e=>e.replace(Qh,"");function Dr(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=ip(i??t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function ep(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Xo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function tp(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&An(t.matched[i],n.matched[r])&&ec(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function An(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ec(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!np(e[n],t[n]))return!1;return!0}function np(e,t){return Xe(e)?Qo(e,t):Xe(t)?Qo(t,e):e===t}function Qo(e,t){return Xe(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function ip(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var oi;(function(e){e.pop="pop",e.push="push"})(oi||(oi={}));var Yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yn||(Yn={}));function rp(e){if(!e)if(pn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zh(e)}const sp=/^[^#]+#/;function op(e,t){return e.replace(sp,"#")+t}function ap(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function lp(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=ap(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Zo(e,t){return(history.state?history.state.position-t:-1)+e}const ss=new Map;function cp(e,t){ss.set(e,t)}function up(e){const t=ss.get(e);return ss.delete(e),t}let dp=()=>location.protocol+"//"+location.host;function tc(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Xo(l,"")}return Xo(n,e)+i+r}function fp(e,t,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=tc(e,location),w=n.value,C=t.value;let F=0;if(h){if(n.value=m,t.value=h,o&&o===w){o=null;return}F=C?h.position-C.position:0}else i(m);r.forEach(k=>{k(n.value,w,{delta:F,type:oi.pop,direction:F?F>0?Yn.forward:Yn.back:Yn.unknown})})};function l(){o=n.value}function c(h){r.push(h);const m=()=>{const w=r.indexOf(h);w>-1&&r.splice(w,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(ne({},h.state,{scroll:gr()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function ea(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?gr():null}}function hp(e){const{history:t,location:n}=window,i={value:tc(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:dp()+e+l;try{t[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=ne({},t.state,ea(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ne({},r.value,t.state,{forward:l,scroll:gr()});s(u.current,u,!0);const f=ne({},ea(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function pp(e){e=rp(e);const t=hp(e),n=fp(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ne({location:"",base:e,go:i,createHref:op.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function mp(e){return typeof e=="string"||e&&typeof e=="object"}function nc(e){return typeof e=="string"||typeof e=="symbol"}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ic=Symbol("");var ta;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ta||(ta={}));function Rn(e,t){return ne(new Error,{type:e,[ic]:!0},t)}function lt(e,t){return e instanceof Error&&ic in e&&(t==null||!!(e.type&t))}const na="[^/]+?",gp={sensitive:!1,strict:!1,start:!0,end:!0},bp=/[.+*?^${}()[\]/\\]/g;function yp(e,t){const n=ne({},gp,t),i=[];let r=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(bp,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:C,optional:F,regexp:k}=h;s.push({name:w,repeatable:C,optional:F});const N=k||na;if(N!==na){m+=10;try{new RegExp(`(${N})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${w}" (${N}): `+z.message)}}let R=C?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(R=F&&c.length<2?`(?:/${R})`:"/"+R),F&&(R+="?"),r+=R,m+=20,F&&(m+=-8),C&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",w=s[h-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:C,optional:F}=m,k=w in c?c[w]:"";if(Xe(k)&&!C)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const N=Xe(k)?k.join("/"):k;if(!N)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=N}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function vp(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _p(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=vp(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(ia(i))return 1;if(ia(r))return-1}return r.length-i.length}function ia(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const wp={type:0,value:""},Ep=/[a-zA-Z0-9_]/;function Ip(e){if(!e)return[[]];if(e==="/")return[[wp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:Ep.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Tp(e,t,n){const i=yp(Ip(e.path),n),r=ne(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Cp(e,t){const n=[],i=new Map;t=oa({strict:!1,end:!0,sensitive:!1},t);function r(u){return i.get(u)}function s(u,f,h){const m=!h,w=Sp(u);w.aliasOf=h&&h.record;const C=oa(t,u),F=[w];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of R)F.push(ne({},w,{components:h?h.record.components:w.components,path:z,aliasOf:h?h.record:w}))}let k,N;for(const R of F){const{path:z}=R;if(f&&z[0]!=="/"){const J=f.record.path,te=J[J.length-1]==="/"?"":"/";R.path=f.record.path+(z&&te+z)}if(k=Tp(R,f,C),h?h.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),m&&u.name&&!sa(k)&&o(u.name)),w.children){const J=w.children;for(let te=0;te<J.length;te++)s(J[te],k,h&&h.children[te])}h=h||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return N?()=>{o(N)}:Gn}function o(u){if(nc(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&_p(u,n[f])>=0&&(u.record.path!==n[f].record.path||!rc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!sa(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},w,C;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Rn(1,{location:u});C=h.record.name,m=ne(ra(f.params,h.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&ra(u.params,h.keys.map(N=>N.name))),w=h.stringify(m)}else if("path"in u)w=u.path,h=n.find(N=>N.re.test(w)),h&&(m=h.parse(w),C=h.record.name);else{if(h=f.name?i.get(f.name):n.find(N=>N.re.test(f.path)),!h)throw Rn(1,{location:u,currentLocation:f});C=h.record.name,m=ne({},f.params,u.params),w=h.stringify(m)}const F=[];let k=h;for(;k;)F.unshift(k.record),k=k.parent;return{name:C,path:w,params:m,matched:F,meta:xp(F)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ra(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Sp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:kp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function kp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function sa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xp(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function oa(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function rc(e,t){return t.children.some(n=>n===e||rc(e,n))}const sc=/#/g,Ap=/&/g,Rp=/\//g,Op=/=/g,Pp=/\?/g,oc=/\+/g,Lp=/%5B/g,Dp=/%5D/g,ac=/%5E/g,Np=/%60/g,lc=/%7B/g,Mp=/%7C/g,cc=/%7D/g,$p=/%20/g;function Ys(e){return encodeURI(""+e).replace(Mp,"|").replace(Lp,"[").replace(Dp,"]")}function Fp(e){return Ys(e).replace(lc,"{").replace(cc,"}").replace(ac,"^")}function os(e){return Ys(e).replace(oc,"%2B").replace($p,"+").replace(sc,"%23").replace(Ap,"%26").replace(Np,"`").replace(lc,"{").replace(cc,"}").replace(ac,"^")}function Bp(e){return os(e).replace(Op,"%3D")}function Up(e){return Ys(e).replace(sc,"%23").replace(Pp,"%3F")}function Hp(e){return e==null?"":Up(e).replace(Rp,"%2F")}function qi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function jp(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(oc," "),o=s.indexOf("="),a=qi(o<0?s:s.slice(0,o)),l=o<0?null:qi(s.slice(o+1));if(a in t){let c=t[a];Xe(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function aa(e){let t="";for(let n in e){const i=e[n];if(n=Bp(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(i)?i.map(s=>s&&os(s)):[i&&os(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function zp(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Xe(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const Wp=Symbol(""),la=Symbol(""),Js=Symbol(""),uc=Symbol(""),as=Symbol("");function Bn(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function xt(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Rn(4,{from:n,to:t})):f instanceof Error?a(f):mp(f)?a(Rn(2,{from:t,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=e.call(i&&i.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Nr(e,t,n,i){const r=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(Vp(a)){const c=(a.__vccOpts||a)[t];c&&r.push(xt(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Xh(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&xt(h,n,i,s,o)()}))}}return r}function Vp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ca(e){const t=pt(Js),n=pt(uc),i=Fe(()=>t.resolve(_n(e.to))),r=Fe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(An.bind(null,u));if(h>-1)return h;const m=ua(l[c-2]);return c>1&&ua(u)===m&&f[f.length-1].path!==m?f.findIndex(An.bind(null,l[c-2])):h}),s=Fe(()=>r.value>-1&&Yp(n.params,i.value.params)),o=Fe(()=>r.value>-1&&r.value===n.matched.length-1&&ec(n.params,i.value.params));function a(l={}){return Gp(l)?t[_n(e.replace)?"replace":"push"](_n(e.to)).catch(Gn):Promise.resolve()}return{route:i,href:Fe(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Kp=yl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ca,setup(e,{slots:t}){const n=an(ca(e)),{options:i}=pt(Js),r=Fe(()=>({[da(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[da(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Ws("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),qp=Kp;function Gp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Yp(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Xe(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function ua(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const da=(e,t,n)=>e??t??n,Jp=yl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=pt(as),r=Fe(()=>e.route||i.value),s=pt(la,0),o=Fe(()=>{let c=_n(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Fe(()=>r.value.matched[o.value]);Li(la,Fe(()=>o.value+1)),Li(Wp,a),Li(as,r);const l=td();return En(()=>[l.value,a.value,e.name],([c,u,f],[h,m,w])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!An(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=r.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return fa(n.default,{Component:h,route:c});const m=f.props[u],w=m?m===!0?c.params:typeof m=="function"?m(c):m:null,F=Ws(h,ne({},w,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return fa(n.default,{Component:F,route:c})||F}}});function fa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Xp=Jp;function Qp(e){const t=Cp(e.routes,e),n=e.parseQuery||jp,i=e.stringifyQuery||aa,r=e.history,s=Bn(),o=Bn(),a=Bn(),l=nd(Tt);let c=Tt;pn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lr.bind(null,y=>""+y),f=Lr.bind(null,Hp),h=Lr.bind(null,qi);function m(y,A){let S,D;return nc(y)?(S=t.getRecordMatcher(y),D=A):D=y,t.addRoute(D,S)}function w(y){const A=t.getRecordMatcher(y);A&&t.removeRoute(A)}function C(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function k(y,A){if(A=ne({},A||l.value),typeof y=="string"){const d=Dr(n,y,A.path),p=t.resolve({path:d.path},A),g=r.createHref(d.fullPath);return ne(d,p,{params:h(p.params),hash:qi(d.hash),redirectedFrom:void 0,href:g})}let S;if("path"in y)S=ne({},y,{path:Dr(n,y.path,A.path).path});else{const d=ne({},y.params);for(const p in d)d[p]==null&&delete d[p];S=ne({},y,{params:f(y.params)}),A.params=f(A.params)}const D=t.resolve(S,A),Q=y.hash||"";D.params=u(h(D.params));const ge=ep(i,ne({},y,{hash:Fp(Q),path:D.path})),q=r.createHref(ge);return ne({fullPath:ge,hash:Q,query:i===aa?zp(y.query):y.query||{}},D,{redirectedFrom:void 0,href:q})}function N(y){return typeof y=="string"?Dr(n,y,l.value.path):ne({},y)}function R(y,A){if(c!==y)return Rn(8,{from:A,to:y})}function z(y){return ie(y)}function J(y){return z(ne(N(y),{replace:!0}))}function te(y){const A=y.matched[y.matched.length-1];if(A&&A.redirect){const{redirect:S}=A;let D=typeof S=="function"?S(y):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=N(D):{path:D},D.params={}),ne({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function ie(y,A){const S=c=k(y),D=l.value,Q=y.state,ge=y.force,q=y.replace===!0,d=te(S);if(d)return ie(ne(N(d),{state:typeof d=="object"?ne({},Q,d.state):Q,force:ge,replace:q}),A||S);const p=S;p.redirectedFrom=A;let g;return!ge&&tp(i,D,S)&&(g=Rn(16,{to:p,from:D}),zt(D,D,!0,!1)),(g?Promise.resolve(g):Y(p,D)).catch(b=>lt(b)?lt(b,2)?b:Ve(b):ae(b,p,D)).then(b=>{if(b){if(lt(b,2))return ie(ne({replace:q},N(b.to),{state:typeof b.to=="object"?ne({},Q,b.to.state):Q,force:ge}),A||p)}else b=pe(p,D,!0,q,Q);return X(p,D,b),b})}function B(y,A){const S=R(y,A);return S?Promise.reject(S):Promise.resolve()}function Y(y,A){let S;const[D,Q,ge]=Zp(y,A);S=Nr(D.reverse(),"beforeRouteLeave",y,A);for(const d of D)d.leaveGuards.forEach(p=>{S.push(xt(p,y,A))});const q=B.bind(null,y,A);return S.push(q),hn(S).then(()=>{S=[];for(const d of s.list())S.push(xt(d,y,A));return S.push(q),hn(S)}).then(()=>{S=Nr(Q,"beforeRouteUpdate",y,A);for(const d of Q)d.updateGuards.forEach(p=>{S.push(xt(p,y,A))});return S.push(q),hn(S)}).then(()=>{S=[];for(const d of y.matched)if(d.beforeEnter&&!A.matched.includes(d))if(Xe(d.beforeEnter))for(const p of d.beforeEnter)S.push(xt(p,y,A));else S.push(xt(d.beforeEnter,y,A));return S.push(q),hn(S)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),S=Nr(ge,"beforeRouteEnter",y,A),S.push(q),hn(S))).then(()=>{S=[];for(const d of o.list())S.push(xt(d,y,A));return S.push(q),hn(S)}).catch(d=>lt(d,8)?d:Promise.reject(d))}function X(y,A,S){for(const D of a.list())D(y,A,S)}function pe(y,A,S,D,Q){const ge=R(y,A);if(ge)return ge;const q=A===Tt,d=pn?history.state:{};S&&(D||q?r.replace(y.fullPath,ne({scroll:q&&d&&d.scroll},Q)):r.push(y.fullPath,Q)),l.value=y,zt(y,A,S,q),Ve()}let O;function de(){O||(O=r.listen((y,A,S)=>{if(!Ei.listening)return;const D=k(y),Q=te(D);if(Q){ie(ne(Q,{replace:!0}),D).catch(Gn);return}c=D;const ge=l.value;pn&&cp(Zo(ge.fullPath,S.delta),gr()),Y(D,ge).catch(q=>lt(q,12)?q:lt(q,2)?(ie(q.to,D).then(d=>{lt(d,20)&&!S.delta&&S.type===oi.pop&&r.go(-1,!1)}).catch(Gn),Promise.reject()):(S.delta&&r.go(-S.delta,!1),ae(q,D,ge))).then(q=>{q=q||pe(D,ge,!1),q&&(S.delta&&!lt(q,8)?r.go(-S.delta,!1):S.type===oi.pop&&lt(q,20)&&r.go(-1,!1)),X(D,ge,q)}).catch(Gn)}))}let Te=Bn(),wt=Bn(),me;function ae(y,A,S){Ve(y);const D=wt.list();return D.length?D.forEach(Q=>Q(y,A,S)):console.error(y),Promise.reject(y)}function re(){return me&&l.value!==Tt?Promise.resolve():new Promise((y,A)=>{Te.add([y,A])})}function Ve(y){return me||(me=!y,de(),Te.list().forEach(([A,S])=>y?S(y):A()),Te.reset()),y}function zt(y,A,S,D){const{scrollBehavior:Q}=e;if(!pn||!Q)return Promise.resolve();const ge=!S&&up(Zo(y.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return cl().then(()=>Q(y,A,ge)).then(q=>q&&lp(q)).catch(q=>ae(q,y,A))}const Ke=y=>r.go(y);let Le;const cn=new Set,Ei={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,hasRoute:F,getRoutes:C,resolve:k,options:e,push:z,replace:J,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:wt.add,isReady:re,install(y){const A=this;y.component("RouterLink",qp),y.component("RouterView",Xp),y.config.globalProperties.$router=A,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(l)}),pn&&!Le&&l.value===Tt&&(Le=!0,z(r.location).catch(Q=>{}));const S={};for(const Q in Tt)S[Q]=Fe(()=>l.value[Q]);y.provide(Js,A),y.provide(uc,an(S)),y.provide(as,l);const D=y.unmount;cn.add(y),y.unmount=function(){cn.delete(y),cn.size<1&&(c=Tt,O&&O(),O=null,l.value=Tt,Le=!1,me=!1),D()}}};return Ei}function hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Zp(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(c=>An(c,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>An(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},em=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[f],n[h],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):em(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw Error();const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const w=c<<6&192|f;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},tm=function(e){const t=dc(e);return fc.encodeByteArray(t,!0)},hc=function(e){return tm(e).replace(/\./g,"")},pc=function(e){try{return fc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function im(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sm(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function om(){try{return typeof indexedDB=="object"}catch{return!1}}function am(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=()=>lm().__FIREBASE_DEFAULTS__,um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pc(e[1]);return t&&JSON.parse(t)},Xs=()=>{try{return cm()||um()||dm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fm=e=>{var t,n;return(n=(t=Xs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hm=()=>{var e;return(e=Xs())===null||e===void 0?void 0:e.config},mc=e=>{var t;return(t=Xs())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="FirebaseError";class Ht extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=mm,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?gm(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ht(r,a,i)}}function gm(e,t){return e.replace(bm,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const bm=/\{\$([^}]+)}/g;function ym(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Gi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(ha(s)&&ha(o)){if(!Gi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ha(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Hn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function jn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function vm(e,t){const n=new _m(e,t);return n.subscribe.bind(n)}class _m{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");wm(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Mr),r.error===void 0&&(r.error=Mr),r.complete===void 0&&(r.complete=Mr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Mr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return e&&e._delegate?e._delegate:e}class On{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new pm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tm(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Im(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Im(e){return e===Gt?void 0:e}function Tm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Em(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const Sm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},km=ce.INFO,xm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Am=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=xm[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gc{constructor(t){this.name=t,this._logLevel=km,this._logHandler=Am,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const Rm=(e,t)=>t.some(n=>e instanceof n);let pa,ma;function Om(){return pa||(pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pm(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bc=new WeakMap,ls=new WeakMap,yc=new WeakMap,$r=new WeakMap,Qs=new WeakMap;function Lm(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n($t(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&bc.set(n,e)}).catch(()=>{}),Qs.set(t,e),t}function Dm(e){if(ls.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ls.set(e,t)}let cs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ls.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Nm(e){cs=e(cs)}function Mm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Fr(this),t,...n);return yc.set(i,t.sort?t.sort():[t]),$t(i)}:Pm().includes(e)?function(...t){return e.apply(Fr(this),t),$t(bc.get(this))}:function(...t){return $t(e.apply(Fr(this),t))}}function $m(e){return typeof e=="function"?Mm(e):(e instanceof IDBTransaction&&Dm(e),Rm(e,Om())?new Proxy(e,cs):e)}function $t(e){if(e instanceof IDBRequest)return Lm(e);if($r.has(e))return $r.get(e);const t=$m(e);return t!==e&&($r.set(e,t),Qs.set(t,e)),t}const Fr=e=>Qs.get(e);function Fm(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=$t(o);return i&&o.addEventListener("upgradeneeded",l=>{i($t(o.result),l.oldVersion,l.newVersion,$t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Bm=["get","getKey","getAll","getAllKeys","count"],Um=["put","add","delete","clear"],Br=new Map;function ga(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Br.get(t))return Br.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Um.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Bm.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Br.set(t,s),s}Nm(e=>({...e,get:(t,n,i)=>ga(t,n)||e.get(t,n,i),has:(t,n)=>!!ga(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const us="@firebase/app",ba="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new gc("@firebase/app"),zm="@firebase/app-compat",Wm="@firebase/analytics-compat",Vm="@firebase/analytics",Km="@firebase/app-check-compat",qm="@firebase/app-check",Gm="@firebase/auth",Ym="@firebase/auth-compat",Jm="@firebase/database",Xm="@firebase/database-compat",Qm="@firebase/functions",Zm="@firebase/functions-compat",eg="@firebase/installations",tg="@firebase/installations-compat",ng="@firebase/messaging",ig="@firebase/messaging-compat",rg="@firebase/performance",sg="@firebase/performance-compat",og="@firebase/remote-config",ag="@firebase/remote-config-compat",lg="@firebase/storage",cg="@firebase/storage-compat",ug="@firebase/firestore",dg="@firebase/firestore-compat",fg="firebase",hg="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",pg={[us]:"fire-core",[zm]:"fire-core-compat",[Vm]:"fire-analytics",[Wm]:"fire-analytics-compat",[qm]:"fire-app-check",[Km]:"fire-app-check-compat",[Gm]:"fire-auth",[Ym]:"fire-auth-compat",[Jm]:"fire-rtdb",[Xm]:"fire-rtdb-compat",[Qm]:"fire-fn",[Zm]:"fire-fn-compat",[eg]:"fire-iid",[tg]:"fire-iid-compat",[ng]:"fire-fcm",[ig]:"fire-fcm-compat",[rg]:"fire-perf",[sg]:"fire-perf-compat",[og]:"fire-rc",[ag]:"fire-rc-compat",[lg]:"fire-gcs",[cg]:"fire-gcs-compat",[ug]:"fire-fst",[dg]:"fire-fst-compat","fire-js":"fire-js",[fg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Map,fs=new Map;function mg(e,t){try{e.container.addComponent(t)}catch(n){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ai(e){const t=e.name;if(fs.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;fs.set(t,e);for(const n of Yi.values())mg(n,e);return!0}function vc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new hi("app","Firebase",gg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=hg;function _c(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:ds,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Ft.create("bad-app-name",{appName:String(r)});if(n||(n=hm()),!n)throw Ft.create("no-options");const s=Yi.get(r);if(s){if(Gi(n,s.options)&&Gi(i,s.config))return s;throw Ft.create("duplicate-app",{appName:r})}const o=new Cm(r);for(const l of fs.values())o.addComponent(l);const a=new bg(n,i,o);return Yi.set(r,a),a}function yg(e=ds){const t=Yi.get(e);if(!t&&e===ds)return _c();if(!t)throw Ft.create("no-app",{appName:e});return t}function In(e,t,n){var i;let r=(i=pg[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}ai(new On(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="firebase-heartbeat-database",_g=1,li="firebase-heartbeat-store";let Ur=null;function wc(){return Ur||(Ur=Fm(vg,_g,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(li)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Ur}async function wg(e){try{return(await wc()).transaction(li).objectStore(li).get(Ec(e))}catch(t){if(t instanceof Ht)rn.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rn.warn(n.message)}}}async function ya(e,t){try{const i=(await wc()).transaction(li,"readwrite");return await i.objectStore(li).put(t,Ec(e)),i.done}catch(n){if(n instanceof Ht)rn.warn(n.message);else{const i=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(i.message)}}}function Ec(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=1024,Ig=30*24*60*60*1e3;class Tg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=va();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Ig}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=va(),{heartbeatsToSend:n,unsentEntries:i}=Cg(this._heartbeatsCache.heartbeats),r=hc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function va(){return new Date().toISOString().substring(0,10)}function Cg(e,t=Eg){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),_a(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_a(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Sg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return om()?am().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function _a(e){return hc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e){ai(new On("platform-logger",t=>new Hm(t),"PRIVATE")),ai(new On("heartbeat",t=>new Tg(t),"PRIVATE")),In(us,ba,e),In(us,ba,"esm2017"),In("fire-js","")}kg("");var xg="firebase",Ag="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(xg,Ag,"app");function Zs(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function Ic(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rg=Ic,Tc=new hi("auth","Firebase",Ic());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new gc("@firebase/auth");function $i(e,...t){wa.logLevel<=ce.ERROR&&wa.error(`Auth (${br}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,...t){throw eo(e,...t)}function st(e,...t){return eo(e,...t)}function Og(e,t,n){const i=Object.assign(Object.assign({},Rg()),{[t]:n});return new hi("auth","Firebase",i).create(t,{appName:e.name})}function eo(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Tc.create(e,...t)}function U(e,t,...n){if(!e)throw eo(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $i(t),new Error(t)}function vt(e,t){e||ft(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;function ht(e){vt(e instanceof Function,"Expected a class definition");let t=Ea.get(e);return t?(vt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ea.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(e,t){const n=vc(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Gi(s,t??{}))return r;Qe(r,"already-initialized")}return n.initialize({options:t})}function Lg(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Dg(){return Ia()==="http:"||Ia()==="https:"}function Ia(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dg()||im()||"connection"in navigator)?navigator.onLine:!0}function Mg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,n){this.shortDelay=t,this.longDelay=n,vt(n>t,"Short delay should be less than long delay!"),this.isMobile=nm()||rm()}get(){return Ng()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e,t){vt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new mi(3e4,6e4);function gi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bi(e,t,n,i,r={}){return Sc(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=pi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Cc.fetch()(kc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Sc(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},$g),t);try{const r=new Bg(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ri(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ri(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ri(e,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Og(e,u,c);Qe(e,u)}}catch(r){if(r instanceof Ht)throw r;Qe(e,"network-request-failed")}}async function yi(e,t,n,i,r={}){const s=await bi(e,t,n,i,r);return"mfaPendingCredential"in s&&Qe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function kc(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?to(e.config,r):`${e.config.apiScheme}://${r}`}class Bg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(st(this.auth,"network-request-failed")),Fg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ri(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=st(e,t,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(e,t){return bi(e,"POST","/v1/accounts:delete",t)}async function Hg(e,t){return bi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function jg(e,t=!1){const n=jt(e),i=await n.getIdToken(t),r=no(i);U(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Jn(Hr(r.auth_time)),issuedAtTime:Jn(Hr(r.iat)),expirationTime:Jn(Hr(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hr(e){return Number(e)*1e3}function no(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const r=pc(n);return r?JSON.parse(r):($i("Failed to decode base64 JWT payload"),null)}catch(r){return $i("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zg(e){const t=no(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Ht&&Wg(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Wg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ci(e,Hg(n,{idToken:i}));U(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Gg(s.providerUserInfo):[],a=qg(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Kg(e){const t=jt(e);await Ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function qg(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function Gg(e){return e.map(t=>{var{providerId:n}=t,i=Zs(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(e,t){const n=await Sc(e,{},async()=>{const i=pi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=kc(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Yg(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ui;return i&&(U(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(U(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(U(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class nn{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=Zs(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ci(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return jg(this,t)}reload(){return Kg(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Ji(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ci(this,Ug(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,c,u;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:z,isAnonymous:J,providerData:te,stsTokenManager:ie}=n;U(R&&ie,t,"internal-error");const B=ui.fromJSON(this.name,ie);U(typeof R=="string",t,"internal-error"),Ct(f,t.name),Ct(h,t.name),U(typeof z=="boolean",t,"internal-error"),U(typeof J=="boolean",t,"internal-error"),Ct(m,t.name),Ct(w,t.name),Ct(C,t.name),Ct(F,t.name),Ct(k,t.name),Ct(N,t.name);const Y=new nn({uid:R,auth:t,email:h,emailVerified:z,displayName:f,isAnonymous:J,photoURL:w,phoneNumber:m,tenantId:C,stsTokenManager:B,createdAt:k,lastLoginAt:N});return te&&Array.isArray(te)&&(Y.providerData=te.map(X=>Object.assign({},X))),F&&(Y._redirectEventId=F),Y}static async _fromIdTokenResponse(t,n,i=!1){const r=new ui;r.updateFromServerResponse(n);const s=new nn({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await Ji(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ac.type="NONE";const Ta=Ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e,t,n){return`firebase:${e}:${t}:${n}`}class Tn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Fi(this.userKey,r.apiKey,s),this.fullPersistenceKey=Fi("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Tn(ht(Ta),t,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||ht(Ta);const o=Fi(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=nn._fromJSON(t,u);c!==s&&(a=f),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Tn(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Tn(s,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dc(t))return"Blackberry";if(Nc(t))return"Webos";if(io(t))return"Safari";if((t.includes("chrome/")||Oc(t))&&!t.includes("edge/"))return"Chrome";if(Lc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rc(e=Re()){return/firefox\//i.test(e)}function io(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Oc(e=Re()){return/crios\//i.test(e)}function Pc(e=Re()){return/iemobile/i.test(e)}function Lc(e=Re()){return/android/i.test(e)}function Dc(e=Re()){return/blackberry/i.test(e)}function Nc(e=Re()){return/webos/i.test(e)}function yr(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Jg(e=Re()){var t;return yr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Xg(){return sm()&&document.documentMode===10}function Mc(e=Re()){return yr(e)||Lc(e)||Nc(e)||Dc(e)||/windows phone/i.test(e)||Pc(e)}function Qg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e,t=[]){let n;switch(e){case"Browser":n=Ca(Re());break;case"Worker":n=`${Ca(Re())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(t,n,i){this.app=t,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sa(this),this.idTokenSubscription=new Sa(this),this.beforeStateQueue=new Zg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ji(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Mg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?jt(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new hi("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,i,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function vi(e){return jt(e)}class Sa{constructor(t){this.auth=t,this.observer=null,this.addObserver=vm(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tb(e,t,n){const i=vi(e);U(i._canInitEmulator,i,"emulator-config-failed"),U(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Fc(t),{host:o,port:a}=nb(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ib()}function Fc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nb(e){const t=Fc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ka(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:ka(o)}}}function ka(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ib(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}async function rb(e,t){return bi(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(e,t){return yi(e,"POST","/v1/accounts:signInWithPassword",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(e,t){return yi(e,"POST","/v1/accounts:signInWithEmailLink",gi(e,t))}async function ab(e,t){return yi(e,"POST","/v1/accounts:signInWithEmailLink",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ro{constructor(t,n,i,r=null){super("password",i),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new di(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new di(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return sb(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ob(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return rb(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ab(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t){return yi(e,"POST","/v1/accounts:signInWithIdp",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="http://localhost";class sn extends ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=Zs(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new sn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Cn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Cn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Cn(t,n)}buildRequest(){const t={requestUri:lb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=pi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ub(e){const t=Hn(jn(e)).link,n=t?Hn(jn(t)).deep_link_id:null,i=Hn(jn(e)).deep_link_id;return(i?Hn(jn(i)).link:null)||i||n||t||e}class so{constructor(t){var n,i,r,s,o,a;const l=Hn(jn(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,f=cb((r=l.mode)!==null&&r!==void 0?r:null);U(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=ub(t);try{return new so(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(t,n){return di._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=so.parseLink(n);return U(i,"argument-error"),di._fromEmailAndCode(t,i.code,i.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Bc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends _i{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return sn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Pt.credential(n,i)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends _i{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lt.credential(t.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends _i{constructor(){super("twitter.com")}static credential(t,n){return sn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Dt.credential(n,i)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(e,t){return yi(e,"POST","/v1/accounts:signUp",gi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await nn._fromIdTokenResponse(t,i,r),o=xa(i);return new on({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=xa(i);return new on({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function xa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ht{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new Xi(t,n,i,r)}}function Uc(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(e,s,t,i):s})}async function fb(e,t,n=!1){const i=await ci(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return on._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await ci(e,Uc(i,r,t,e),n);U(s.idToken,i,"internal-error");const o=no(s.idToken);U(o,i,"internal-error");const{sub:a}=o;return U(e.uid===a,i,"user-mismatch"),on._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(e,t,n=!1){const i="signIn",r=await Uc(e,i,t),s=await on._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function pb(e,t){return Hc(vi(e),t)}async function mb(e,t,n){const i=vi(e),r=await db(i,{returnSecureToken:!0,email:t,password:n}),s=await on._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function gb(e,t,n){return pb(jt(e),Mn.credential(t,n))}function bb(e,t,n,i){return jt(e).onIdTokenChanged(t,n,i)}function yb(e,t,n){return jt(e).beforeAuthStateChanged(t,n)}function vb(e){return jt(e).signOut()}const Qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qi,"1"),this.storage.removeItem(Qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){const e=Re();return io(e)||yr(e)}const wb=1e3,Eb=10;class zc extends jc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_b()&&Qg(),this.fallbackToPolling=Mc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Xg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Eb):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}zc.type="LOCAL";const Ib=zc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends jc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Wc.type="SESSION";const Vc=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new vr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Tb(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=oo("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function Sb(e){ot().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function kb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ab(){return Kc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="firebaseLocalStorageDb",Rb=1,Zi="firebaseLocalStorage",Gc="fbase_key";class wi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _r(e,t){return e.transaction([Zi],t?"readwrite":"readonly").objectStore(Zi)}function Ob(){const e=indexedDB.deleteDatabase(qc);return new wi(e).toPromise()}function ps(){const e=indexedDB.open(qc,Rb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(Zi,{keyPath:Gc})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(Zi)?t(i):(i.close(),await Ob(),t(await ps()))})})}async function Aa(e,t,n){const i=_r(e,!0).put({[Gc]:t,value:n});return new wi(i).toPromise()}async function Pb(e,t){const n=_r(e,!1).get(t),i=await new wi(n).toPromise();return i===void 0?null:i.value}function Ra(e,t){const n=_r(e,!0).delete(t);return new wi(n).toPromise()}const Lb=800,Db=3;class Yc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ps(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>Db)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vr._getInstance(Ab()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kb(),!this.activeServiceWorker)return;this.sender=new Cb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||xb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ps();return await Aa(t,Qi,"1"),await Ra(t,Qi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Aa(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>Pb(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ra(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=_r(r,!1).getAll();return new wi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yc.type="LOCAL";const Nb=Yc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function $b(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=st("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Mb().appendChild(i)})}function Fb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(e,t){return t?ht(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends ro{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Cn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Cn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Cn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ub(e){return Hc(e.auth,new ao(e),e.bypassAuthState)}function Hb(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),hb(n,new ao(e),e.bypassAuthState)}async function jb(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),fb(n,new ao(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ub;case"linkViaPopup":case"linkViaRedirect":return jb;case"reauthViaPopup":case"reauthViaRedirect":return Hb;default:Qe(this.auth,"internal-error")}}resolve(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new mi(2e3,1e4);class mn extends Jc{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const t=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,zb.get())};t()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="pendingRedirect",Bi=new Map;class Vb extends Jc{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Bi.get(this.auth._key());if(!t){try{const i=await Kb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Bi.set(this.auth._key(),t)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kb(e,t){const n=Yb(t),i=Gb(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function qb(e,t){Bi.set(e._key(),t)}function Gb(e){return ht(e._redirectPersistence)}function Yb(e){return Fi(Wb,e.config.apiKey,e.name)}async function Jb(e,t,n=!1){const i=vi(e),r=Bb(i,t),o=await new Vb(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=10*60*1e3;class Qb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Zb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Xc(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(st(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oa(t))}saveEventToCache(t){this.cachedEventUids.add(Oa(t)),this.lastProcessedEventTime=Date.now()}}function Oa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Xc({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Zb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xc(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(e,t={}){return bi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ny=/^https?/;async function iy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ey(e);for(const n of t)try{if(ry(n))return}catch{}Qe(e,"unauthorized-domain")}function ry(e){const t=hs(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!ny.test(n))return!1;if(ty.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new mi(3e4,6e4);function Pa(){const e=ot().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function oy(e){return new Promise((t,n)=>{var i,r,s;function o(){Pa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pa(),n(st(e,"network-request-failed"))},timeout:sy.get()})}if(!((r=(i=ot().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=ot().gapi)===null||s===void 0)&&s.load)o();else{const a=Fb("iframefcb");return ot()[a]=()=>{gapi.load?o():n(st(e,"network-request-failed"))},$b(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ui=null,t})}let Ui=null;function ay(e){return Ui=Ui||oy(e),Ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new mi(5e3,15e3),cy="__/auth/iframe",uy="emulator/auth/iframe",dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hy(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?to(t,uy):`https://${e.config.authDomain}/${cy}`,i={apiKey:t.apiKey,appName:e.name,v:br},r=fy.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${pi(i).slice(1)}`}async function py(e){const t=await ay(e),n=ot().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:hy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dy,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=st(e,"network-request-failed"),a=ot().setTimeout(()=>{s(o)},ly.get());function l(){ot().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gy=500,by=600,yy="_blank",vy="http://localhost";class La{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _y(e,t,n,i=gy,r=by){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},my),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Re().toLowerCase();n&&(a=Oc(c)?yy:n),Rc(c)&&(t=t||vy,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if(Jg(c)&&a!=="_self")return wy(t||"",a),new La(null);const f=window.open(t||"",a,u);U(f,e,"popup-blocked");try{f.focus()}catch{}return new La(f)}function wy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="__/auth/handler",Iy="emulator/auth/handler";function Da(e,t,n,i,r,s){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:br,eventId:r};if(t instanceof Bc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ym(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(t instanceof _i){const l=t.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Ty(e)}?${pi(a).slice(1)}`}function Ty({config:e}){return e.emulator?to(e,Iy):`https://${e.authDomain}/${Ey}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="webStorageSupport";class Cy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vc,this._completeRedirectFn=Jb,this._overrideRedirectResult=qb}async _openPopup(t,n,i,r){var s;vt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Da(t,n,i,hs(),r);return _y(t,o,oo())}async _openRedirect(t,n,i,r){return await this._originValidation(t),Sb(Da(t,n,i,hs(),r)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(vt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await py(t),i=new Qb(t);return n.register("authEvent",r=>(U(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(jr,{type:jr},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[jr];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mc()||io()||yr()}}const Sy=Cy;var Na="@firebase/auth",Ma="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ay(e){ai(new On("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,l)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(e)},u=new eb(a,l,c);return Lg(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),ai(new On("auth-internal",t=>{const n=vi(t.getProvider("auth").getImmediate());return(i=>new ky(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Na,Ma,xy(e)),In(Na,Ma,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=5*60,Oy=mc("authIdTokenMaxAge")||Ry;let $a=null;const Py=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Oy)return;const r=n==null?void 0:n.token;$a!==r&&($a=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ly(e=yg()){const t=vc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Pg(e,{popupRedirectResolver:Sy,persistence:[Nb,Ib,Vc]}),i=mc("authTokenSyncURL");if(i){const s=Py(i);yb(n,s,()=>s(n.currentUser)),bb(n,o=>s(o))}const r=fm("auth");return r&&tb(n,`http://${r}`),n}Ay("Browser");const Dy={apiKey:"AIzaSyA_EdaXKzEQ_Yg1YnAl8ikzQDooFirlTis",authDomain:"interview-5ac2c.firebaseapp.com",databaseURL:"https://interview-5ac2c.firebaseapp.com",projectId:"interview-5ac2c",storageBucket:"interview-5ac2c.appspot.com"},Ny=_c(Dy),At=Ly(Ny),My=[{path:"/login",name:"login",meta:{layout:"empty"},component:()=>Pr(()=>import("./LoginPage-0400e73f.js"),["assets/LoginPage-0400e73f.js","assets/LoginPage-c8eedc6d.css"])},{path:"/register",name:"register",meta:{layout:"empty"},component:()=>Pr(()=>import("./RegisterPage-a2a0d27c.js"),["assets/RegisterPage-a2a0d27c.js","assets/RegisterPage-77c191e5.css"])},{path:"/Dev-Team",name:"main",meta:{layout:"main",requiresAuth:!0},component:()=>Pr(()=>import("./MainPage-4abe52d8.js"),["assets/MainPage-4abe52d8.js","assets/MainPage-260d2423.css"])}],Rt=Qp({linkExactActiveClass:"active",routes:My,history:pp()});Rt.beforeEach((e,t,n)=>{if(e.path==="/login"&&At.currentUser){n("/Dev-Team");return}if(e.matched.some(i=>i.meta.requiresAuth)&&!At.currentUser){n("/login");return}n()});const $y={state(){return{user:null}},getters:{getUser:e=>e.user},mutations:{SET_USER(e,t){e.user=t},CLEAR_USER(e){e.user=null}},actions:{async login({commit:e},t){const{email:n,password:i}=t;try{await gb(At,n,i),e("SET_USER",At.currentUser),Rt.push("/Dev-Team")}catch(r){throw r}},async register({commit:e},t){const{email:n,password:i}=t;try{await mb(At,n,i),e("SET_USER",At.currentUser),Rt.push("/Dev-Team")}catch(r){throw r}},async logout({commit:e}){await vb(At),e("CLEAR_USER"),Rt.push("/login")},fetchUser({commit:e}){At.onAuthStateChanged(t=>{t===null?e("CLEAR_USER"):(e("SET_USER",t),Rt.isReady()&&Rt.currentRoute.value.path==="/login"&&Rt.push("/Dev-Team"))})}},namespaced:!0},Fy=Uh({modules:{authModule:$y}}),By={mounted(e,t){const n={rootMargin:"0px",threshold:1};let i=(s,o)=>{s[0].isIntersecting&&t.value()};new IntersectionObserver(i,n).observe(e)}};let ms;function Uy(e){e.addEventListener("mousedown",Qc)}function Hy(e){e.removeEventListener("mousedown",Qc)}function jy(e){let t=document.createElement("span");t.className="p-ink",t.setAttribute("role","presentation"),t.setAttribute("aria-hidden","true"),e.appendChild(t),t.addEventListener("animationend",Zc)}function zy(e){let t=eu(e);t&&(Hy(e),t.removeEventListener("animationend",Zc),t.remove())}function Qc(e){let t=e.currentTarget,n=eu(t);if(!n||getComputedStyle(n,null).display==="none")return;if(V.removeClass(n,"p-ink-active"),!V.getHeight(n)&&!V.getWidth(n)){let o=Math.max(V.getOuterWidth(t),V.getOuterHeight(t));n.style.height=o+"px",n.style.width=o+"px"}let i=V.getOffset(t),r=e.pageX-i.left+document.body.scrollTop-V.getWidth(n)/2,s=e.pageY-i.top+document.body.scrollLeft-V.getHeight(n)/2;n.style.top=s+"px",n.style.left=r+"px",V.addClass(n,"p-ink-active"),ms=setTimeout(()=>{n&&V.removeClass(n,"p-ink-active")},401)}function Zc(e){ms&&clearTimeout(ms),V.removeClass(e.currentTarget,"p-ink-active")}function eu(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const wr={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(jy(e),Uy(e))},unmounted(e){zy(e)}};var tu={name:"Button",props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconStyleClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]}},directives:{ripple:wr}};const Wy=["aria-label","disabled"],Vy={class:"p-button-label"};function Ky(e,t,n,i,r,s){const o=kn("ripple");return en((L(),W("button",{class:we(s.buttonClass),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},[Pe(e.$slots,"default",{},()=>[n.loading&&!n.icon?(L(),W("span",{key:0,class:we(s.iconStyleClass)},null,2)):be("",!0),n.icon?(L(),W("span",{key:1,class:we(s.iconStyleClass)},null,2)):be("",!0),ue("span",Vy,bt(n.label||" "),1),n.badge?(L(),W("span",{key:2,class:we(s.badgeStyleClass)},bt(n.badge),3)):be("",!0)])],10,Wy)),[[o]])}tu.render=Ky;var nu={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const qy=["value"];function Gy(e,t,n,i,r,s){return L(),W("input",{class:we(["p-inputtext p-component",{"p-filled":s.filled}]),value:n.modelValue,onInput:t[0]||(t[0]=(...o)=>s.onInput&&s.onInput(...o))},null,42,qy)}nu.render=Gy;var dt=Vs();const Yy=Symbol();var Jy={install:e=>{const t={add:n=>{dt.emit("add",n)},removeGroup:n=>{dt.emit("remove-group",n)},removeAllGroups:()=>{dt.emit("remove-all-groups")}};e.config.globalProperties.$toast=t,e.provide(Yy,t)}},Er={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=V.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function Xy(e,t,n,i,r,s){return s.inline?Pe(e.$slots,"default",{key:0}):r.mounted?(L(),Be(ef,{key:1,to:n.appendTo},[Pe(e.$slots,"default")],8,["to"])):be("",!0)}Er.render=Xy;var iu={name:"ToastMessage",emits:["close"],props:{message:{type:null,default:null},template:{type:null,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close()},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconClass(){return["p-toast-message-icon",{[this.infoIcon]:this.message.severity==="info",[this.warnIcon]:this.message.severity==="warn",[this.errorIcon]:this.message.severity==="error",[this.successIcon]:this.message.severity==="success"}]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:wr}};const Qy={class:"p-toast-message-text"},Zy={class:"p-toast-summary"},ev={class:"p-toast-detail"},tv={key:2},nv=["aria-label"];function iv(e,t,n,i,r,s){const o=kn("ripple");return L(),W("div",{class:we(s.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[ue("div",{class:we(["p-toast-message-content",n.message.contentStyleClass])},[n.template?(L(),Be(Wn(n.template),{key:1,message:n.message},null,8,["message"])):(L(),W(_e,{key:0},[ue("span",{class:we(s.iconClass)},null,2),ue("div",Qy,[ue("span",Zy,bt(n.message.summary),1),ue("div",ev,bt(n.message.detail),1)])],64)),n.message.closable!==!1?(L(),W("div",tv,[en((L(),W("button",mt({class:"p-toast-icon-close p-link",type:"button","aria-label":s.closeAriaLabel,onClick:t[0]||(t[0]=(...a)=>s.onCloseClick&&s.onCloseClick(...a)),autofocus:""},n.closeButtonProps),[ue("span",{class:we(["p-toast-icon-close-icon",n.closeIcon])},null,2)],16,nv)),[[o]])])):be("",!0)],2)],2)}iu.render=iv;var rv=0,ru={name:"Toast",inheritAttrs:!1,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:"pi pi-times"},infoIcon:{type:String,default:"pi pi-info-circle"},warnIcon:{type:String,default:"pi pi-exclamation-triangle"},errorIcon:{type:String,default:"pi pi-times"},successIcon:{type:String,default:"pi pi-check"},closeButtonProps:{type:null,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){dt.on("add",this.onAdd),dt.on("remove-group",this.onRemoveGroup),dt.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&gt.clear(this.$refs.container),dt.off("add",this.onAdd),dt.off("remove-group",this.onRemoveGroup),dt.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(e){e.id==null&&(e.id=rv++),this.messages=[...this.messages,e]},remove(e){let t=-1;for(let n=0;n<this.messages.length;n++)if(this.messages[n]===e){t=n;break}this.messages.splice(t,1)},onAdd(e){this.group==e.group&&this.add(e)},onRemoveGroup(e){this.group===e&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&gt.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&jl.isEmpty(this.messages)&&setTimeout(()=>{gt.clear(this.$refs.container)},200)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints){let n="";for(let i in this.breakpoints[t])n+=i+":"+this.breakpoints[t][i]+"!important;";e+=`
                        @media screen and (max-width: ${t}) {
                            .p-toast[${this.attributeSelector}] {
                                ${n}
                            }
                        }
                    `}this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return si()}},components:{ToastMessage:iu,Portal:Er}};function sv(e,t,n,i,r,s){const o=Ne("ToastMessage"),a=Ne("Portal");return L(),Be(a,null,{default:ze(()=>[ue("div",mt({ref:"container",class:s.containerClass},e.$attrs),[oe(Ff,{name:"p-toast-message",tag:"div",onEnter:s.onEnter,onLeave:s.onLeave},{default:ze(()=>[(L(!0),W(_e,null,Di(r.messages,l=>(L(),Be(o,{key:l.id,message:l,template:e.$slots.message,closeIcon:n.closeIcon,infoIcon:n.infoIcon,warnIcon:n.warnIcon,errorIcon:n.errorIcon,successIcon:n.successIcon,closeButtonProps:n.closeButtonProps,onClose:t[0]||(t[0]=c=>s.remove(c))},null,8,["message","template","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps"]))),128))]),_:1},8,["onEnter","onLeave"])],16)]),_:1})}function ov(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var av=`
.p-toast {
    position: fixed;
    width: 25rem;
}
.p-toast-message-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-toast-message-text {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-toast-top-right {
    top: 20px;
    right: 20px;
}
.p-toast-top-left {
    top: 20px;
    left: 20px;
}
.p-toast-bottom-left {
    bottom: 20px;
    left: 20px;
}
.p-toast-bottom-right {
    bottom: 20px;
    right: 20px;
}
.p-toast-top-center {
    top: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-bottom-center {
    bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.p-toast-center {
    left: 50%;
    top: 50%;
    min-width: 20vw;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
}
.p-toast-icon-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-toast-icon-close.p-link {
    cursor: pointer;
}

/* Animations */
.p-toast-message-enter-from {
    opacity: 0;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
}
.p-toast-message-leave-from {
    max-height: 1000px;
}
.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}
.p-toast-message-enter-active {
    -webkit-transition: transform 0.3s, opacity 0.3s;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;
}
.p-toast-message-leave-active {
    -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;ov(av);ru.render=sv;var su={name:"ProgressSpinner",props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle(){return{"animation-duration":this.animationDuration}}}};const lv={class:"p-progress-spinner",role:"progressbar"},cv=["fill","stroke-width"];function uv(e,t,n,i,r,s){return L(),W("div",lv,[(L(),W("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:fi(s.svgStyle)},[ue("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},null,8,cv)],4))])}function dv(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var fv=`
.p-progress-spinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}
.p-progress-spinner::before {
    content: '';
    display: block;
    padding-top: 100%;
}
.p-progress-spinner-svg {
    -webkit-animation: p-progress-spinner-rotate 2s linear infinite;
            animation: p-progress-spinner-rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
            transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.p-progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: #d62d20;
    -webkit-animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}
@-webkit-keyframes p-progress-spinner-rotate {
100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
}
}
@keyframes p-progress-spinner-rotate {
100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
}
}
@-webkit-keyframes p-progress-spinner-dash {
0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
}
50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
}
100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
}
}
@keyframes p-progress-spinner-dash {
0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
}
50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
}
100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
}
}
@-webkit-keyframes p-progress-spinner-color {
100%,
    0% {
        stroke: #d62d20;
}
40% {
        stroke: #0057e7;
}
66% {
        stroke: #008744;
}
80%,
    90% {
        stroke: #ffa700;
}
}
@keyframes p-progress-spinner-color {
100%,
    0% {
        stroke: #d62d20;
}
40% {
        stroke: #0057e7;
}
66% {
        stroke: #008744;
}
80%,
    90% {
        stroke: #ffa700;
}
}
`;dv(fv);su.render=uv;var ou={name:"Card"};const hv={class:"p-card p-component"},pv={key:0,class:"p-card-header"},mv={class:"p-card-body"},gv={key:0,class:"p-card-title"},bv={key:1,class:"p-card-subtitle"},yv={class:"p-card-content"},vv={key:2,class:"p-card-footer"};function _v(e,t,n,i,r,s){return L(),W("div",hv,[e.$slots.header?(L(),W("div",pv,[Pe(e.$slots,"header")])):be("",!0),ue("div",mv,[e.$slots.title?(L(),W("div",gv,[Pe(e.$slots,"title")])):be("",!0),e.$slots.subtitle?(L(),W("div",bv,[Pe(e.$slots,"subtitle")])):be("",!0),ue("div",yv,[Pe(e.$slots,"content")]),e.$slots.footer?(L(),W("div",vv,[Pe(e.$slots,"footer")])):be("",!0)])])}function wv(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Ev=`
.p-card-header img {
    width: 100%;
}
`;wv(Ev);ou.render=_v;var au={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const Iv=["aria-valuenow"],Tv={key:0,class:"p-progressbar-label"},Cv={key:1,class:"p-progressbar-indeterminate-container"},Sv=ue("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),kv=[Sv];function xv(e,t,n,i,r,s){return L(),W("div",{role:"progressbar",class:we(s.containerClass),"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},[s.determinate?(L(),W("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:fi(s.progressStyle)},[n.value!=null&&n.value!==0&&n.showValue?(L(),W("div",Tv,[Pe(e.$slots,"default",{},()=>[Hs(bt(n.value+"%"),1)])])):be("",!0)],4)):be("",!0),s.indeterminate?(L(),W("div",Cv,kv)):be("",!0)],10,Iv)}function Av(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Rv=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-label {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-progressbar-determinate .p-progressbar-value-animate {
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-progressbar-indeterminate .p-progressbar-value::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
@keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
`;Av(Rv);au.render=xv;var lu={name:"Tag",props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}};const Ov={class:"p-tag-value"};function Pv(e,t,n,i,r,s){return L(),W("span",mt({class:s.containerClass},e.$attrs),[n.icon?(L(),W("span",{key:0,class:we(s.iconClass)},null,2)):be("",!0),Pe(e.$slots,"default",{},()=>[ue("span",Ov,bt(n.value),1)])],16)}function Lv(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Dv=`
.p-tag {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}
.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
`;Lv(Dv);lu.render=Pv;const Nv=Symbol();var gn=Vs(),Mv={install:e=>{const t={open:(n,i)=>{const r={content:n&&xs(n),options:i||{},data:i&&i.data,close:s=>{gn.emit("close",{instance:r,params:s})}};return gn.emit("open",{instance:r}),r}};e.config.unwrapInjectedRef=!0,e.config.globalProperties.$dialog=t,e.provide(Nv,t)}};function $v(e,t){const{onFocusIn:n,onFocusOut:i}=t.value||{};e.$_pfocustrap_mutationobserver=new MutationObserver(r=>{r.forEach(s=>{if(s.type==="childList"&&!e.contains(document.activeElement)){const o=a=>{const l=V.isFocusableElement(a)?a:V.getFirstFocusableElement(a);return jl.isNotEmpty(l)?l:o(a.nextSibling)};V.focus(o(s.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=r=>n&&n(r),e.$_pfocustrap_focusoutlistener=r=>i&&i(r),e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)}function Fa(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)}function Fv(e,t){const{autoFocusSelector:n="",firstFocusableSelector:i="",autoFocus:r=!1}=t.value||{};let s=V.getFirstFocusableElement(e,`[autofocus]:not(.p-hidden-focusable)${n}`);r&&!s&&(s=V.getFirstFocusableElement(e,`:not(.p-hidden-focusable)${i}`)),V.focus(s)}function Bv(e){const{currentTarget:t,relatedTarget:n}=e,i=n===t.$_pfocustrap_lasthiddenfocusableelement?V.getFirstFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_lasthiddenfocusableelement;V.focus(i)}function Uv(e){const{currentTarget:t,relatedTarget:n}=e,i=n===t.$_pfocustrap_firsthiddenfocusableelement?V.getLastFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_firsthiddenfocusableelement;V.focus(i)}function Hv(e,t){const{tabIndex:n=0,firstFocusableSelector:i="",lastFocusableSelector:r=""}=t.value||{},s=l=>{const c=document.createElement("span");return c.classList="p-hidden-accessible p-hidden-focusable",c.tabIndex=n,c.setAttribute("aria-hidden","true"),c.setAttribute("role","presentation"),c.addEventListener("focus",l),c},o=s(Bv),a=s(Uv);o.$_pfocustrap_lasthiddenfocusableelement=a,o.$_pfocustrap_focusableselector=i,a.$_pfocustrap_firsthiddenfocusableelement=o,a.$_pfocustrap_focusableselector=r,e.prepend(o),e.append(a)}const cu={mounted(e,t){const{disabled:n}=t.value||{};n||(Hv(e,t),$v(e,t),Fv(e,t))},updated(e,t){const{disabled:n}=t.value||{};n&&Fa(e)},unmounted(e){Fa(e)}};var uu={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:Fe(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusable:!1}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&gt.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&gt.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&V.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusable=!1},onAfterLeave(){this.autoZIndex&&gt.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=n=>n.querySelector("[autofocus]");let t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(t=e(this.container)))),t&&(this.focusable=!0,t.focus())},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?V.addClass(document.body,"p-overflow-hidden"):V.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&V.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&V.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){V.hasClass(e.target,"p-dialog-header-icon")||V.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",V.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=V.getOuterWidth(this.container),n=V.getOuterHeight(this.container),i=e.pageX-this.lastPageX,r=e.pageY-this.lastPageY,s=this.container.getBoundingClientRect(),o=s.left+i,a=s.top+r,l=V.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+t<l.width&&(this.lastPageX=e.pageX,this.container.style.left=o+"px"),a>=this.minY&&a+n<l.height&&(this.lastPageY=e.pageY,this.container.style.top=a+"px")):(this.lastPageX=e.pageX,this.container.style.left=o+"px",this.lastPageY=e.pageY,this.container.style.top=a+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,V.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return si()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return si()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:wr,focustrap:cu},components:{Portal:Er}};const jv=["aria-labelledby","aria-modal"],zv=["id"],Wv={class:"p-dialog-header-icons"},Vv=["autofocus","tabindex"],Kv=["autofocus","aria-label"];function qv(e,t,n,i,r,s){const o=Ne("Portal"),a=kn("ripple"),l=kn("focustrap");return L(),Be(o,{appendTo:n.appendTo},{default:ze(()=>[r.containerVisible?(L(),W("div",{key:0,ref:s.maskRef,class:we(s.maskClass),onClick:t[3]||(t[3]=(...c)=>s.onMaskClick&&s.onMaskClick(...c))},[oe(hr,{name:"p-dialog",onBeforeEnter:s.onBeforeEnter,onEnter:s.onEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},{default:ze(()=>[n.visible?en((L(),W("div",mt({key:0,ref:s.containerRef,class:s.dialogClass,role:"dialog","aria-labelledby":s.ariaLabelledById,"aria-modal":n.modal},e.$attrs),[n.showHeader?(L(),W("div",{key:0,ref:s.headerContainerRef,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...c)=>s.initDrag&&s.initDrag(...c))},[Pe(e.$slots,"header",{},()=>[n.header?(L(),W("span",{key:0,id:s.ariaLabelledById,class:"p-dialog-title"},bt(n.header),9,zv)):be("",!0)]),ue("div",Wv,[n.maximizable?en((L(),W("button",{key:0,ref:s.maximizableRef,autofocus:r.focusable,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...c)=>s.maximize&&s.maximize(...c)),type:"button",tabindex:n.maximizable?"0":"-1"},[ue("span",{class:we(s.maximizeIconClass)},null,2)],8,Vv)),[[a]]):be("",!0),n.closable?en((L(),W("button",mt({key:1,ref:s.closeButtonRef,autofocus:r.focusable,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...c)=>s.close&&s.close(...c)),"aria-label":s.closeAriaLabel,type:"button"},n.closeButtonProps),[ue("span",{class:we(["p-dialog-header-close-icon",n.closeIcon])},null,2)],16,Kv)),[[a]]):be("",!0)])],544)):be("",!0),ue("div",mt({ref:s.contentRef,class:s.contentStyleClass,style:n.contentStyle},n.contentProps),[Pe(e.$slots,"default")],16),n.footer||e.$slots.footer?(L(),W("div",{key:1,ref:s.footerContainerRef,class:"p-dialog-footer"},[Pe(e.$slots,"footer",{},()=>[Hs(bt(n.footer),1)])],512)):be("",!0)],16,jv)),[[l,{disabled:!n.modal}]]):be("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):be("",!0)]),_:3},8,["appendTo"])}function Gv(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Yv=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;Gv(Yv);uu.render=qv;var du={name:"DynamicDialog",inheritAttrs:!1,data(){return{instanceMap:{}}},openListener:null,closeListener:null,currentInstance:null,mounted(){this.openListener=({instance:e})=>{const t=si()+"_dynamic_dialog";e.visible=!0,e.key=t,this.instanceMap[t]=e},this.closeListener=({instance:e,params:t})=>{const n=e.key,i=this.instanceMap[n];i&&(i.visible=!1,i.options.onClose&&i.options.onClose({data:t,type:"config-close"}),this.currentInstance=i)},gn.on("open",this.openListener),gn.on("close",this.closeListener)},beforeUnmount(){gn.off("open",this.openListener),gn.off("close",this.closeListener)},methods:{onDialogHide(e){!this.currentInstance&&e.options.onClose&&e.options.onClose({type:"dialog-close"})},onDialogAfterHide(){this.currentInstance&&delete this.currentInstance,this.currentInstance=null},getTemplateItems(e){return Array.isArray(e)?e:[e]}},components:{DDialog:uu}};function Jv(e,t,n,i,r,s){const o=Ne("DDialog");return L(!0),W(_e,null,Di(r.instanceMap,(a,l)=>(L(),Be(o,mt({key:l,visible:a.visible,"onUpdate:visible":c=>a.visible=c,_instance:a},a.options.props,{onHide:c=>s.onDialogHide(a),onAfterHide:s.onDialogAfterHide}),Dd({default:ze(()=>[(L(),Be(Wn(a.content)))]),_:2},[a.options.templates&&a.options.templates.header?{name:"header",fn:ze(()=>[(L(!0),W(_e,null,Di(s.getTemplateItems(a.options.templates.header),(c,u)=>(L(),Be(Wn(c),{key:u+"_header"}))),128))]),key:"0"}:void 0,a.options.templates&&a.options.templates.footer?{name:"footer",fn:ze(()=>[(L(!0),W(_e,null,Di(s.getTemplateItems(a.options.templates.footer),(c,u)=>(L(),Be(Wn(c),{key:u+"_footer"}))),128))]),key:"1"}:void 0]),1040,["visible","onUpdate:visible","_instance","onHide","onAfterHide"]))),128)}du.render=Jv;var Oi=Vs(),fu={name:"OverlayPanel",inheritAttrs:!1,emits:["show","hide"],props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:String,default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null}},data(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,beforeUnmount(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&gt.clear(this.container),this.overlayEventListener&&(Oi.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{toggle(e,t){this.visible?this.hide():this.show(e,t)},show(e,t){this.visible=!0,this.eventTarget=e.currentTarget,this.target=t||e.currentTarget},hide(){this.visible=!1,V.focus(this.target)},onContentClick(){this.selfClick=!0},onEnter(e){this.container.setAttribute(this.attributeSelector,""),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&gt.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=t=>{this.container.contains(t.target)&&(this.selfClick=!0)},this.focus(),Oi.on("overlay-click",this.overlayEventListener),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),Oi.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&gt.clear(e)},alignOverlay(){V.absolutePosition(this.container,this.target);const e=V.getOffset(this.container),t=V.getOffset(this.target);let n=0;e.left<t.left&&(n=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${n}px`),e.top<t.top&&V.addClass(this.container,"p-overlaypanel-flipped")},onContentKeydown(e){e.code==="Escape"&&this.hide()},onButtonKeydown(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},bindOutsideClickListener(){!this.outsideClickListener&&V.isClient()&&(this.outsideClickListener=e=>{this.visible&&!this.selfClick&&!this.isTargetClicked(e)&&(this.visible=!1),this.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Yf(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!V.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef(e){this.container=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-overlaypanel[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick(e){Oi.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-overlaypanel p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return si()},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:cu,ripple:wr},components:{Portal:Er}};const Xv=["aria-modal"],Qv=["aria-label"],Zv=ue("span",{class:"p-overlaypanel-close-icon pi pi-times"},null,-1),e_=[Zv];function t_(e,t,n,i,r,s){const o=Ne("Portal"),a=kn("ripple"),l=kn("focustrap");return L(),Be(o,{appendTo:n.appendTo},{default:ze(()=>[oe(hr,{name:"p-overlaypanel",onEnter:s.onEnter,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave},{default:ze(()=>[r.visible?en((L(),W("div",mt({key:0,ref:s.containerRef,role:"dialog",class:s.containerClass,"aria-modal":r.visible,onClick:t[5]||(t[5]=(...c)=>s.onOverlayClick&&s.onOverlayClick(...c))},e.$attrs),[ue("div",{class:"p-overlaypanel-content",onClick:t[0]||(t[0]=(...c)=>s.onContentClick&&s.onContentClick(...c)),onMousedown:t[1]||(t[1]=(...c)=>s.onContentClick&&s.onContentClick(...c)),onKeydown:t[2]||(t[2]=(...c)=>s.onContentKeydown&&s.onContentKeydown(...c))},[Pe(e.$slots,"default")],32),n.showCloseIcon?en((L(),W("button",{key:0,class:"p-overlaypanel-close p-link","aria-label":s.closeAriaLabel,type:"button",autofocus:"",onClick:t[3]||(t[3]=(...c)=>s.hide&&s.hide(...c)),onKeydown:t[4]||(t[4]=(...c)=>s.onButtonKeydown&&s.onButtonKeydown(...c))},e_,40,Qv)),[[a]]):be("",!0)],16,Xv)),[[l]]):be("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])}function n_(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var i_=`
.p-overlaypanel {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}
.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}
.p-overlaypanel-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    overflow: hidden;
    position: relative;
}

/* Animation */
.p-overlaypanel-enter-from {
    opacity: 0;
    -webkit-transform: scaleY(0.8);
            transform: scaleY(0.8);
}
.p-overlaypanel-leave-to {
    opacity: 0;
}
.p-overlaypanel-enter-active {
    -webkit-transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-overlaypanel-leave-active {
    -webkit-transition: opacity 0.1s linear;
    transition: opacity 0.1s linear;
}
.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
}
.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
}
.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}
.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
}
.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
}
`;n_(i_);fu.render=t_;var hu={name:"Avatar",emits:["error"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},methods:{onError(){this.$emit("error")}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]},iconClass(){return["p-avatar-icon",this.icon]}}};const r_=["aria-labelledby","aria-label"],s_={key:0,class:"p-avatar-text"},o_=["src"];function a_(e,t,n,i,r,s){return L(),W("div",{class:we(s.containerClass),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},[Pe(e.$slots,"default",{},()=>[n.label?(L(),W("span",s_,bt(n.label),1)):n.icon?(L(),W("span",{key:1,class:we(s.iconClass)},null,2)):n.image?(L(),W("img",{key:2,src:n.image,onError:t[0]||(t[0]=(...o)=>s.onError&&s.onError(...o))},null,40,o_)):be("",!0)])],10,r_)}function l_(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var c_=`
.p-avatar {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}
.p-avatar.p-avatar-image {
    background-color: transparent;
}
.p-avatar.p-avatar-circle {
    border-radius: 50%;
}
.p-avatar-circle img {
    border-radius: 50%;
}
.p-avatar .p-avatar-icon {
    font-size: 1rem;
}
.p-avatar img {
    width: 100%;
    height: 100%;
}
`;l_(c_);hu.render=a_;const Se=qf(Gh);Se.use(Rt);Se.use(Fy);Se.mount("#app");Se.use(Qf);Se.use(Jy);Se.use(Mv);Se.directive("intersection",By);Se.component("Button",tu);Se.component("InputText",nu);Se.component("Toast",ru);Se.component("ProgressSpinner",su);Se.component("Card",ou);Se.component("ProgressBar",au);Se.component("Tag",lu);Se.component("DynamicDialog",du);Se.component("OverlayPanel",fu);Se.component("Avatar",hu);export{_e as F,pr as _,oe as a,ue as b,W as c,ze as d,Hs as e,pd as f,Di as g,Be as h,kn as i,en as j,Hh as m,fi as n,L as o,hd as p,Ne as r,bt as t,u_ as u,d_ as w};
