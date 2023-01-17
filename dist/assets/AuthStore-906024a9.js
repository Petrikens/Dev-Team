function Fs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Bs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?hl(r):Bs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ge(t))return t;if(le(t))return t}}const ul=/;(?![^(]*\))/g,fl=/:([^]+)/,dl=/\/\*.*?\*\//gs;function hl(t){const e={};return t.replace(dl,"").split(ul).forEach(n=>{if(n){const r=n.split(fl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $s(t){let e="";if(ge(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=$s(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=Fs(pl);function ea(t){return!!t||t===""}const Bm=t=>ge(t)?t:t==null?"":H(t)||le(t)&&(t.toString===sa||!K(t.toString))?JSON.stringify(t,ta,2):String(t),ta=(t,e)=>e&&e.__v_isRef?ta(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!H(e)&&!ia(e)?String(e):e,ce={},Jt=[],Be=()=>{},ml=()=>!1,_l=/^on[^a-z]/,Rr=t=>_l.test(t),Hs=t=>t.startsWith("onUpdate:"),ve=Object.assign,js=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vl=Object.prototype.hasOwnProperty,Q=(t,e)=>vl.call(t,e),H=Array.isArray,Yt=t=>Ar(t)==="[object Map]",na=t=>Ar(t)==="[object Set]",K=t=>typeof t=="function",ge=t=>typeof t=="string",Ws=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ra=t=>le(t)&&K(t.then)&&K(t.catch),sa=Object.prototype.toString,Ar=t=>sa.call(t),yl=t=>Ar(t).slice(8,-1),ia=t=>Ar(t)==="[object Object]",Vs=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ar=Fs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bl=/-(\w)/g,Je=Or(t=>t.replace(bl,(e,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,ln=Or(t=>t.replace(El,"-$1").toLowerCase()),kr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),qr=Or(t=>t?`on${kr(t)}`:""),On=(t,e)=>!Object.is(t,e),Gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ki;const Il=()=>ki||(ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class oa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function aa(t){return new oa(t)}function wl(t,e=Ae){e&&e.active&&e.effects.push(t)}function Tl(){return Ae}function Cl(t){Ae&&Ae.cleanups.push(t)}const Ks=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ca=t=>(t.w&It)>0,la=t=>(t.n&It)>0,Sl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=It},Rl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ca(s)&&!la(s)?s.delete(t):e[n++]=s,s.w&=~It,s.n&=~It}e.length=n}},ds=new WeakMap;let _n=0,It=1;const hs=30;let Ue;const Ut=Symbol(""),ps=Symbol("");class qs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wl(this,r)}run(){if(!this.active)return this.fn();let e=Ue,n=_t;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ue,Ue=this,_t=!0,It=1<<++_n,_n<=hs?Sl(this):Pi(this),this.fn()}finally{_n<=hs&&Rl(this),It=1<<--_n,Ue=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Pi(this),this.onStop&&this.onStop(),this.active=!1)}}function Pi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _t=!0;const ua=[];function un(){ua.push(_t),_t=!1}function fn(){const t=ua.pop();_t=t===void 0?!0:t}function ke(t,e,n){if(_t&&Ue){let r=ds.get(t);r||ds.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ks()),fa(s)}}function fa(t,e){let n=!1;_n<=hs?la(t)||(t.n|=It,n=!ca(t)):n=!t.has(Ue),n&&(t.add(Ue),Ue.deps.push(t))}function tt(t,e,n,r,s,i){const o=ds.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=zs(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Vs(n)&&a.push(o.get("length")):(a.push(o.get(Ut)),Yt(t)&&a.push(o.get(ps)));break;case"delete":H(t)||(a.push(o.get(Ut)),Yt(t)&&a.push(o.get(ps)));break;case"set":Yt(t)&&a.push(o.get(Ut));break}if(a.length===1)a[0]&&gs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);gs(Ks(c))}}function gs(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Di(r);for(const r of n)r.computed||Di(r)}function Di(t,e){(t!==Ue||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Al=Fs("__proto__,__v_isRef,__isVue"),da=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ws)),Ol=Gs(),kl=Gs(!1,!0),Pl=Gs(!0),Ni=Dl();function Dl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Z(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){un();const r=Z(this)[e].apply(this,n);return fn(),r}}),t}function Gs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Gl:_a:e?ma:ga).get(r))return r;const o=H(r);if(!t&&o&&Q(Ni,s))return Reflect.get(Ni,s,i);const a=Reflect.get(r,s,i);return(Ws(s)?da.has(s):Al(s))||(t||ke(r,"get",s),e)?a:pe(a)?o&&Vs(s)?a:a.value:le(a)?t?va(a):dn(a):a}}const Nl=ha(),Ml=ha(!0);function ha(t=!1){return function(n,r,s,i){let o=n[r];if(nn(o)&&pe(o)&&!pe(s))return!1;if(!t&&(!mr(s)&&!nn(s)&&(o=Z(o),s=Z(s)),!H(n)&&pe(o)&&!pe(s)))return o.value=s,!0;const a=H(n)&&Vs(r)?Number(r)<n.length:Q(n,r),c=Reflect.set(n,r,s,i);return n===Z(i)&&(a?On(s,o)&&tt(n,"set",r,s):tt(n,"add",r,s)),c}}function Ll(t,e){const n=Q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&tt(t,"delete",e,void 0),r}function xl(t,e){const n=Reflect.has(t,e);return(!Ws(e)||!da.has(e))&&ke(t,"has",e),n}function Ul(t){return ke(t,"iterate",H(t)?"length":Ut),Reflect.ownKeys(t)}const pa={get:Ol,set:Nl,deleteProperty:Ll,has:xl,ownKeys:Ul},Fl={get:Pl,set(t,e){return!0},deleteProperty(t,e){return!0}},Bl=ve({},pa,{get:kl,set:Ml}),Js=t=>t,Pr=t=>Reflect.getPrototypeOf(t);function Zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=Z(t),i=Z(e);n||(e!==i&&ke(s,"get",e),ke(s,"get",i));const{has:o}=Pr(s),a=r?Js:n?Qs:kn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function er(t,e=!1){const n=this.__v_raw,r=Z(n),s=Z(t);return e||(t!==s&&ke(r,"has",t),ke(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function tr(t,e=!1){return t=t.__v_raw,!e&&ke(Z(t),"iterate",Ut),Reflect.get(t,"size",t)}function Mi(t){t=Z(t);const e=Z(this);return Pr(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Li(t,e){e=Z(e);const n=Z(this),{has:r,get:s}=Pr(n);let i=r.call(n,t);i||(t=Z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?On(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function xi(t){const e=Z(this),{has:n,get:r}=Pr(e);let s=n.call(e,t);s||(t=Z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tt(e,"delete",t,void 0),i}function Ui(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function nr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Z(o),c=e?Js:t?Qs:kn;return!t&&ke(a,"iterate",Ut),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function rr(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=Yt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Js:e?Qs:kn;return!e&&ke(i,"iterate",c?ps:Ut),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return t==="delete"?!1:this}}function $l(){const t={get(i){return Zn(this,i)},get size(){return tr(this)},has:er,add:Mi,set:Li,delete:xi,clear:Ui,forEach:nr(!1,!1)},e={get(i){return Zn(this,i,!1,!0)},get size(){return tr(this)},has:er,add:Mi,set:Li,delete:xi,clear:Ui,forEach:nr(!1,!0)},n={get(i){return Zn(this,i,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nr(!0,!1)},r={get(i){return Zn(this,i,!0,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=rr(i,!1,!1),n[i]=rr(i,!0,!1),e[i]=rr(i,!1,!0),r[i]=rr(i,!0,!0)}),[t,n,e,r]}const[Hl,jl,Wl,Vl]=$l();function Ys(t,e){const n=e?t?Vl:Wl:t?jl:Hl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const zl={get:Ys(!1,!1)},Kl={get:Ys(!1,!0)},ql={get:Ys(!0,!1)},ga=new WeakMap,ma=new WeakMap,_a=new WeakMap,Gl=new WeakMap;function Jl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yl(t){return t.__v_skip||!Object.isExtensible(t)?0:Jl(yl(t))}function dn(t){return nn(t)?t:Xs(t,!1,pa,zl,ga)}function Xl(t){return Xs(t,!1,Bl,Kl,ma)}function va(t){return Xs(t,!0,Fl,ql,_a)}function Xs(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Yl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function vt(t){return nn(t)?vt(t.__v_raw):!!(t&&t.__v_isReactive)}function nn(t){return!!(t&&t.__v_isReadonly)}function mr(t){return!!(t&&t.__v_isShallow)}function ya(t){return vt(t)||nn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function rn(t){return gr(t,"__v_skip",!0),t}const kn=t=>le(t)?dn(t):t,Qs=t=>le(t)?va(t):t;function ba(t){_t&&Ue&&(t=Z(t),fa(t.dep||(t.dep=Ks())))}function Ea(t,e){t=Z(t),t.dep&&gs(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Zs(t){return Ia(t,!1)}function Ql(t){return Ia(t,!0)}function Ia(t,e){return pe(t)?t:new Zl(t,e)}class Zl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:kn(e)}get value(){return ba(this),this._value}set value(e){const n=this.__v_isShallow||mr(e)||nn(e);e=n?e:Z(e),On(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kn(e),Ea(this))}}function Xt(t){return pe(t)?t.value:t}const eu={get:(t,e,n)=>Xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function wa(t){return vt(t)?t:new Proxy(t,eu)}function tu(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=ru(t,n);return e}class nu{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ru(t,e,n){const r=t[e];return pe(r)?r:new nu(t,e,n)}var Ta;class su{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ta]=!1,this._dirty=!0,this.effect=new qs(e,()=>{this._dirty||(this._dirty=!0,Ea(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Z(this);return ba(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ta="__v_isReadonly";function iu(t,e,n=!1){let r,s;const i=K(t);return i?(r=t,s=Be):(r=t.get,s=t.set),new su(r,s,i||!s,n)}function yt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Dr(i,e,n)}return s}function De(t,e,n,r){if(K(t)){const i=yt(t,e,n,r);return i&&ra(i)&&i.catch(o=>{Dr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}function Dr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yt(c,null,10,[t,o,a]);return}}ou(t,n,s,r)}function ou(t,e,n,r=!0){console.error(t)}let Pn=!1,ms=!1;const be=[];let ze=0;const Qt=[];let Qe=null,Nt=0;const Ca=Promise.resolve();let ei=null;function ti(t){const e=ei||Ca;return t?e.then(this?t.bind(this):t):e}function au(t){let e=ze+1,n=be.length;for(;e<n;){const r=e+n>>>1;Dn(be[r])<t?e=r+1:n=r}return e}function ni(t){(!be.length||!be.includes(t,Pn&&t.allowRecurse?ze+1:ze))&&(t.id==null?be.push(t):be.splice(au(t.id),0,t),Sa())}function Sa(){!Pn&&!ms&&(ms=!0,ei=Ca.then(Aa))}function cu(t){const e=be.indexOf(t);e>ze&&be.splice(e,1)}function lu(t){H(t)?Qt.push(...t):(!Qe||!Qe.includes(t,t.allowRecurse?Nt+1:Nt))&&Qt.push(t),Sa()}function Fi(t,e=Pn?ze+1:0){for(;e<be.length;e++){const n=be[e];n&&n.pre&&(be.splice(e,1),e--,n())}}function Ra(t){if(Qt.length){const e=[...new Set(Qt)];if(Qt.length=0,Qe){Qe.push(...e);return}for(Qe=e,Qe.sort((n,r)=>Dn(n)-Dn(r)),Nt=0;Nt<Qe.length;Nt++)Qe[Nt]();Qe=null,Nt=0}}const Dn=t=>t.id==null?1/0:t.id,uu=(t,e)=>{const n=Dn(t)-Dn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Aa(t){ms=!1,Pn=!0,be.sort(uu);const e=Be;try{for(ze=0;ze<be.length;ze++){const n=be[ze];n&&n.active!==!1&&yt(n,null,14)}}finally{ze=0,be.length=0,Ra(),Pn=!1,ei=null,(be.length||Qt.length)&&Aa()}}function fu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||ce;h&&(s=n.map(g=>ge(g)?g.trim():g)),d&&(s=n.map(zs))}let a,c=r[a=qr(e)]||r[a=qr(Je(e))];!c&&i&&(c=r[a=qr(ln(e))]),c&&De(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,De(l,t,6,s)}}function Oa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=Oa(l,e,!0);u&&(a=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):ve(o,i),le(t)&&r.set(t,o),o)}function Nr(t,e){return!t||!Rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,ln(e))||Q(t,e))}let ye=null,Mr=null;function _r(t){const e=ye;return ye=t,Mr=t&&t.type.__scopeId||null,e}function $m(t){Mr=t}function Hm(){Mr=null}function du(t,e=ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ji(-1);const i=_r(e);let o;try{o=t(...s)}finally{_r(i),r._d&&Ji(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Jr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:g,ctx:E,inheritAttrs:T}=t;let L,R;const M=_r(t);try{if(n.shapeFlag&4){const j=s||r;L=Ve(u.call(j,j,d,i,g,h,E)),R=c}else{const j=e;L=Ve(j.length>1?j(i,{attrs:c,slots:a,emit:l}):j(i,null)),R=e.props?c:hu(c)}}catch(j){Tn.length=0,Dr(j,t,1),L=we(Ne)}let P=L;if(R&&T!==!1){const j=Object.keys(R),{shapeFlag:W}=P;j.length&&W&7&&(o&&j.some(Hs)&&(R=pu(R,o)),P=wt(P,R))}return n.dirs&&(P=wt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),L=P,_r(M),L}const hu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rr(n))&&((e||(e={}))[n]=t[n]);return e},pu=(t,e)=>{const n={};for(const r in t)(!Hs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!Nr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bi(r,o,l):!0:!!o;return!1}function Bi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Nr(n,i))return!0}return!1}function mu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _u=t=>t.__isSuspense;function vu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):lu(t)}function cr(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=_e||ye;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&K(e)?e.call(r.proxy):e}}function yu(t,e){return ri(t,null,{flush:"post"})}const sr={};function bn(t,e,n){return ri(t,e,n)}function ri(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ce){const a=_e;let c,l=!1,u=!1;if(pe(t)?(c=()=>t.value,l=mr(t)):vt(t)?(c=()=>t,r=!0):H(t)?(u=!0,l=t.some(P=>vt(P)||mr(P)),c=()=>t.map(P=>{if(pe(P))return P.value;if(vt(P))return xt(P);if(K(P))return yt(P,a,2)})):K(t)?e?c=()=>yt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),De(t,a,3,[h])}:c=Be,e&&r){const P=c;c=()=>xt(P())}let d,h=P=>{d=R.onStop=()=>{yt(P,a,4)}},g;if(xn)if(h=Be,e?n&&De(e,a,3,[c(),u?[]:void 0,h]):c(),s==="sync"){const P=hf();g=P.__watcherHandles||(P.__watcherHandles=[])}else return Be;let E=u?new Array(t.length).fill(sr):sr;const T=()=>{if(R.active)if(e){const P=R.run();(r||l||(u?P.some((j,W)=>On(j,E[W])):On(P,E)))&&(d&&d(),De(e,a,3,[P,E===sr?void 0:u&&E[0]===sr?[]:E,h]),E=P)}else R.run()};T.allowRecurse=!!e;let L;s==="sync"?L=T:s==="post"?L=()=>Ce(T,a&&a.suspense):(T.pre=!0,a&&(T.id=a.uid),L=()=>ni(T));const R=new qs(c,L);e?n?T():E=R.run():s==="post"?Ce(R.run.bind(R),a&&a.suspense):R.run();const M=()=>{R.stop(),a&&a.scope&&js(a.scope.effects,R)};return g&&g.push(M),M}function bu(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?ka(r,t):()=>r[t]:t.bind(r,r);let i;K(e)?i=e:(i=e.handler,n=e);const o=_e;sn(this);const a=ri(s,i.bind(r),n);return o?sn(o):Ft(),a}function ka(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function xt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))xt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)xt(t[n],e);else if(na(t)||Yt(t))t.forEach(n=>{xt(n,e)});else if(ia(t))for(const n in t)xt(t[n],e);return t}function Pa(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ii(()=>{t.isMounted=!0}),Ua(()=>{t.isUnmounting=!0}),t}const Pe=[Function,Array],Eu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},setup(t,{slots:e}){const n=Br(),r=Pa();let s;return()=>{const i=e.default&&si(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Ne){o=T;break}}const a=Z(t),{mode:c}=a;if(r.isLeaving)return Yr(o);const l=$i(o);if(!l)return Yr(o);const u=Nn(l,a,r,n);Mn(l,u);const d=n.subTree,h=d&&$i(d);let g=!1;const{getTransitionKey:E}=l.type;if(E){const T=E();s===void 0?s=T:T!==s&&(s=T,g=!0)}if(h&&h.type!==Ne&&(!Mt(l,h)||g)){const T=Nn(h,a,r,n);if(Mn(h,T),c==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Yr(o);c==="in-out"&&l.type!==Ne&&(T.delayLeave=(L,R,M)=>{const P=Na(r,h);P[String(h.key)]=h,L._leaveCb=()=>{R(),L._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},Da=Eu;function Na(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Nn(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:T,onAppear:L,onAfterAppear:R,onAppearCancelled:M}=e,P=String(t.key),j=Na(n,t),W=(S,V)=>{S&&De(S,r,9,V)},Y=(S,V)=>{const q=V[1];W(S,V),H(S)?S.every(ee=>ee.length<=1)&&q():S.length<=1&&q()},B={mode:i,persisted:o,beforeEnter(S){let V=a;if(!n.isMounted)if(s)V=T||a;else return;S._leaveCb&&S._leaveCb(!0);const q=j[P];q&&Mt(t,q)&&q.el._leaveCb&&q.el._leaveCb(),W(V,[S])},enter(S){let V=c,q=l,ee=u;if(!n.isMounted)if(s)V=L||c,q=R||l,ee=M||u;else return;let D=!1;const se=S._enterCb=ue=>{D||(D=!0,ue?W(ee,[S]):W(q,[S]),B.delayedLeave&&B.delayedLeave(),S._enterCb=void 0)};V?Y(V,[S,se]):se()},leave(S,V){const q=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return V();W(d,[S]);let ee=!1;const D=S._leaveCb=se=>{ee||(ee=!0,V(),se?W(E,[S]):W(g,[S]),S._leaveCb=void 0,j[q]===t&&delete j[q])};j[q]=t,h?Y(h,[S,D]):D()},clone(S){return Nn(S,e,n,r)}};return B}function Yr(t){if(Lr(t))return t=wt(t),t.children=null,t}function $i(t){return Lr(t)?t.children?t.children[0]:void 0:t}function Mn(t,e){t.shapeFlag&6&&t.component?Mn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function si(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Se?(o.patchFlag&128&&s++,r=r.concat(si(o.children,e,a))):(e||o.type!==Ne)&&r.push(a!=null?wt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ma(t){return K(t)?{setup:t,name:t.name}:t}const En=t=>!!t.type.__asyncLoader,Lr=t=>t.type.__isKeepAlive;function Iu(t,e){La(t,"a",e)}function wu(t,e){La(t,"da",e)}function La(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lr(s.parent.vnode)&&Tu(r,e,n,s),s=s.parent}}function Tu(t,e,n,r){const s=xr(e,t,r,!0);oi(()=>{js(r[e],s)},n)}function xr(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;un(),sn(n);const a=De(e,n,t,o);return Ft(),fn(),a});return r?s.unshift(i):s.push(i),i}}const rt=t=>(e,n=_e)=>(!xn||t==="sp")&&xr(t,(...r)=>e(...r),n),Cu=rt("bm"),ii=rt("m"),Su=rt("bu"),xa=rt("u"),Ua=rt("bum"),oi=rt("um"),Ru=rt("sp"),Au=rt("rtg"),Ou=rt("rtc");function ku(t,e=_e){xr("ec",t,e)}function jm(t,e){const n=ye;if(n===null)return t;const r=$r(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ce]=e[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&xt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(un(),De(c,n,8,[t.el,a,t,e]),fn())}}const ai="components",Pu="directives";function Wm(t,e){return ci(ai,t,!0,e)||t}const Fa=Symbol();function Vm(t){return ge(t)?ci(ai,t,!1)||t:t||Fa}function zm(t){return ci(Pu,t)}function ci(t,e,n=!0,r=!1){const s=ye||_e;if(s){const i=s.type;if(t===ai){const a=uf(i,!1);if(a&&(a===e||a===Je(e)||a===kr(Je(e))))return i}const o=Hi(s[t]||i[t],e)||Hi(s.appContext[t],e);return!o&&r?i:o}}function Hi(t,e){return t&&(t[e]||t[Je(e)]||t[kr(Je(e))])}function Km(t,e,n,r){let s;const i=n&&n[r];if(H(t)||ge(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function qm(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(H(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function Gm(t,e,n={},r,s){if(ye.isCE||ye.parent&&En(ye.parent)&&ye.parent.isCE)return e!=="default"&&(n.name=e),we("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ga();const o=i&&Ba(i(n)),a=Ya(Se,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ba(t){return t.some(e=>yr(e)?!(e.type===Ne||e.type===Se&&!Ba(e.children)):!0)?t:null}const _s=t=>t?Za(t)?$r(t)||t.proxy:_s(t.parent):null,In=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_s(t.parent),$root:t=>_s(t.root),$emit:t=>t.emit,$options:t=>li(t),$forceUpdate:t=>t.f||(t.f=()=>ni(t.update)),$nextTick:t=>t.n||(t.n=ti.bind(t.proxy)),$watch:t=>bu.bind(t)}),Xr=(t,e)=>t!==ce&&!t.__isScriptSetup&&Q(t,e),Du={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xr(r,e))return o[e]=1,r[e];if(s!==ce&&Q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==ce&&Q(n,e))return o[e]=4,n[e];vs&&(o[e]=0)}}const u=In[e];let d,h;if(u)return e==="$attrs"&&ke(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ce&&Q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xr(s,e)?(s[e]=n,!0):r!==ce&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&Q(t,o)||Xr(e,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(In,o)||Q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vs=!0;function Nu(t){const e=li(t),n=t.proxy,r=t.ctx;vs=!1,e.beforeCreate&&ji(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:E,activated:T,deactivated:L,beforeDestroy:R,beforeUnmount:M,destroyed:P,unmounted:j,render:W,renderTracked:Y,renderTriggered:B,errorCaptured:S,serverPrefetch:V,expose:q,inheritAttrs:ee,components:D,directives:se,filters:ue}=e;if(l&&Mu(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ne=o[ie];K(ne)&&(r[ie]=ne.bind(n))}if(s){const ie=s.call(n,n);le(ie)&&(t.data=dn(ie))}if(vs=!0,i)for(const ie in i){const ne=i[ie],Me=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):Be,St=!K(ne)&&K(ne.set)?ne.set.bind(n):Be,Le=Oe({get:Me,set:St});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Te=>Le.value=Te})}if(a)for(const ie in a)$a(a[ie],r,n,ie);if(c){const ie=K(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(ne=>{cr(ne,ie[ne])})}u&&ji(u,t,"c");function fe(ie,ne){H(ne)?ne.forEach(Me=>ie(Me.bind(n))):ne&&ie(ne.bind(n))}if(fe(Cu,d),fe(ii,h),fe(Su,g),fe(xa,E),fe(Iu,T),fe(wu,L),fe(ku,S),fe(Ou,Y),fe(Au,B),fe(Ua,M),fe(oi,j),fe(Ru,V),H(q))if(q.length){const ie=t.exposed||(t.exposed={});q.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:Me=>n[ne]=Me})})}else t.exposed||(t.exposed={});W&&t.render===Be&&(t.render=W),ee!=null&&(t.inheritAttrs=ee),D&&(t.components=D),se&&(t.directives=se)}function Mu(t,e,n=Be,r=!1){H(t)&&(t=ys(t));for(const s in t){const i=t[s];let o;le(i)?"default"in i?o=Ke(i.from||s,i.default,!0):o=Ke(i.from||s):o=Ke(i),pe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ji(t,e,n){De(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $a(t,e,n,r){const s=r.includes(".")?ka(n,r):()=>n[r];if(ge(t)){const i=e[t];K(i)&&bn(s,i)}else if(K(t))bn(s,t.bind(n));else if(le(t))if(H(t))t.forEach(i=>$a(i,e,n,r));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&bn(s,i,t)}}function li(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>vr(c,l,o,!0)),vr(c,e,o)),le(e)&&i.set(e,c),c}function vr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vr(t,i,n,!0),s&&s.forEach(o=>vr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Lu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lu={data:Wi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:kt,directives:kt,watch:Uu,provide:Wi,inject:xu};function Wi(t,e){return e?t?function(){return ve(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function xu(t,e){return kt(ys(t),ys(e))}function ys(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function kt(t,e){return t?ve(ve(Object.create(null),t),e):e}function Uu(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function Fu(t,e,n,r=!1){const s={},i={};gr(i,Fr,1),t.propsDefaults=Object.create(null),Ha(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Bu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Nr(t.emitsOptions,h))continue;const g=e[h];if(c)if(Q(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const E=Je(h);s[E]=bs(c,a,E,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Ha(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!Q(e,d)&&((u=ln(d))===d||!Q(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=bs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Q(e,d))&&(delete i[d],l=!0)}l&&tt(t,"set","$attrs")}function Ha(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ar(c))continue;const l=e[c];let u;s&&Q(s,u=Je(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Nr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||ce;for(let u=0;u<i.length;u++){const d=i[u];n[d]=bs(s,c,d,l[d],t,!Q(l,d))}}return o}function bs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(sn(s),r=l[n]=c.call(null,e),Ft())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}function ja(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=d=>{c=!0;const[h,g]=ja(d,e,!0);ve(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&r.set(t,Jt),Jt;if(H(i))for(let u=0;u<i.length;u++){const d=Je(i[u]);Vi(d)&&(o[d]=ce)}else if(i)for(const u in i){const d=Je(u);if(Vi(d)){const h=i[u],g=o[d]=H(h)||K(h)?{type:h}:Object.assign({},h);if(g){const E=qi(Boolean,g.type),T=qi(String,g.type);g[0]=E>-1,g[1]=T<0||E<T,(E>-1||Q(g,"default"))&&a.push(d)}}}const l=[o,a];return le(t)&&r.set(t,l),l}function Vi(t){return t[0]!=="$"}function zi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ki(t,e){return zi(t)===zi(e)}function qi(t,e){return H(e)?e.findIndex(n=>Ki(n,t)):K(e)&&Ki(e,t)?0:-1}const Wa=t=>t[0]==="_"||t==="$stable",ui=t=>H(t)?t.map(Ve):[Ve(t)],$u=(t,e,n)=>{if(e._n)return e;const r=du((...s)=>ui(e(...s)),n);return r._c=!1,r},Va=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wa(s))continue;const i=t[s];if(K(i))e[s]=$u(s,i,r);else if(i!=null){const o=ui(i);e[s]=()=>o}}},za=(t,e)=>{const n=ui(e);t.slots.default=()=>n},Hu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),gr(e,"_",n)):Va(e,t.slots={})}else t.slots={},e&&za(t,e);gr(t.slots,Fr,1)},ju=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Va(e,s)),o=e}else e&&(za(t,e),o={default:1});if(i)for(const a in s)!Wa(a)&&!(a in o)&&delete s[a]};function Ka(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wu=0;function Vu(t,e){return function(r,s=null){K(r)||(r=Object.assign({},r)),s!=null&&!le(s)&&(s=null);const i=Ka(),o=new Set;let a=!1;const c=i.app={_uid:Wu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=we(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,$r(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Es(t,e,n,r,s=!1){if(H(t)){t.forEach((h,g)=>Es(h,e&&(H(e)?e[g]:e),n,r,s));return}if(En(r)&&!s)return;const i=r.shapeFlag&4?$r(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,Q(d,l)&&(d[l]=null)):pe(l)&&(l.value=null)),K(c))yt(c,a,12,[o,u]);else{const h=ge(c),g=pe(c);if(h||g){const E=()=>{if(t.f){const T=h?Q(d,c)?d[c]:u[c]:c.value;s?H(T)&&js(T,i):H(T)?T.includes(i)||T.push(i):h?(u[c]=[i],Q(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,Q(d,c)&&(d[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ce(E,n)):E()}}}const Ce=vu;function zu(t){return Ku(t)}function Ku(t,e){const n=Il();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=Be,insertStaticContent:E}=t,T=(f,p,m,_=null,y=null,w=null,O=!1,I=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!Mt(f,p)&&(_=A(f),Te(f,y,w,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:b,ref:U,shapeFlag:N}=p;switch(b){case Ur:L(f,p,m,_);break;case Ne:R(f,p,m,_);break;case lr:f==null&&M(p,m,_,O);break;case Se:D(f,p,m,_,y,w,O,I,C);break;default:N&1?W(f,p,m,_,y,w,O,I,C):N&6?se(f,p,m,_,y,w,O,I,C):(N&64||N&128)&&b.process(f,p,m,_,y,w,O,I,C,X)}U!=null&&y&&Es(U,f&&f.ref,w,p||f,!p)},L=(f,p,m,_)=>{if(f==null)r(p.el=a(p.children),m,_);else{const y=p.el=f.el;p.children!==f.children&&l(y,p.children)}},R=(f,p,m,_)=>{f==null?r(p.el=c(p.children||""),m,_):p.el=f.el},M=(f,p,m,_)=>{[f.el,f.anchor]=E(f.children,p,m,_,f.el,f.anchor)},P=({el:f,anchor:p},m,_)=>{let y;for(;f&&f!==p;)y=h(f),r(f,m,_),f=y;r(p,m,_)},j=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),s(f),f=m;s(p)},W=(f,p,m,_,y,w,O,I,C)=>{O=O||p.type==="svg",f==null?Y(p,m,_,y,w,O,I,C):V(f,p,y,w,O,I,C)},Y=(f,p,m,_,y,w,O,I)=>{let C,b;const{type:U,props:N,shapeFlag:F,transition:z,dirs:J}=f;if(C=f.el=o(f.type,w,N&&N.is,N),F&8?u(C,f.children):F&16&&S(f.children,C,null,_,y,w&&U!=="foreignObject",O,I),J&&Rt(f,null,_,"created"),N){for(const re in N)re!=="value"&&!ar(re)&&i(C,re,null,N[re],w,f.children,_,y,k);"value"in N&&i(C,"value",null,N.value),(b=N.onVnodeBeforeMount)&&We(b,_,f)}B(C,f,f.scopeId,O,_),J&&Rt(f,null,_,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&z&&!z.persisted;oe&&z.beforeEnter(C),r(C,p,m),((b=N&&N.onVnodeMounted)||oe||J)&&Ce(()=>{b&&We(b,_,f),oe&&z.enter(C),J&&Rt(f,null,_,"mounted")},y)},B=(f,p,m,_,y)=>{if(m&&g(f,m),_)for(let w=0;w<_.length;w++)g(f,_[w]);if(y){let w=y.subTree;if(p===w){const O=y.vnode;B(f,O,O.scopeId,O.slotScopeIds,y.parent)}}},S=(f,p,m,_,y,w,O,I,C=0)=>{for(let b=C;b<f.length;b++){const U=f[b]=I?lt(f[b]):Ve(f[b]);T(null,U,p,m,_,y,w,O,I)}},V=(f,p,m,_,y,w,O)=>{const I=p.el=f.el;let{patchFlag:C,dynamicChildren:b,dirs:U}=p;C|=f.patchFlag&16;const N=f.props||ce,F=p.props||ce;let z;m&&At(m,!1),(z=F.onVnodeBeforeUpdate)&&We(z,m,p,f),U&&Rt(p,f,m,"beforeUpdate"),m&&At(m,!0);const J=y&&p.type!=="foreignObject";if(b?q(f.dynamicChildren,b,I,m,_,J,w):O||ne(f,p,I,null,m,_,J,w,!1),C>0){if(C&16)ee(I,p,N,F,m,_,y);else if(C&2&&N.class!==F.class&&i(I,"class",null,F.class,y),C&4&&i(I,"style",N.style,F.style,y),C&8){const oe=p.dynamicProps;for(let re=0;re<oe.length;re++){const me=oe[re],xe=N[me],Vt=F[me];(Vt!==xe||me==="value")&&i(I,me,xe,Vt,y,f.children,m,_,k)}}C&1&&f.children!==p.children&&u(I,p.children)}else!O&&b==null&&ee(I,p,N,F,m,_,y);((z=F.onVnodeUpdated)||U)&&Ce(()=>{z&&We(z,m,p,f),U&&Rt(p,f,m,"updated")},_)},q=(f,p,m,_,y,w,O)=>{for(let I=0;I<p.length;I++){const C=f[I],b=p[I],U=C.el&&(C.type===Se||!Mt(C,b)||C.shapeFlag&70)?d(C.el):m;T(C,b,U,null,_,y,w,O,!0)}},ee=(f,p,m,_,y,w,O)=>{if(m!==_){if(m!==ce)for(const I in m)!ar(I)&&!(I in _)&&i(f,I,m[I],null,O,p.children,y,w,k);for(const I in _){if(ar(I))continue;const C=_[I],b=m[I];C!==b&&I!=="value"&&i(f,I,b,C,O,p.children,y,w,k)}"value"in _&&i(f,"value",m.value,_.value)}},D=(f,p,m,_,y,w,O,I,C)=>{const b=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:z}=p;z&&(I=I?I.concat(z):z),f==null?(r(b,m,_),r(U,m,_),S(p.children,m,U,y,w,O,I,C)):N>0&&N&64&&F&&f.dynamicChildren?(q(f.dynamicChildren,F,m,y,w,O,I),(p.key!=null||y&&p===y.subTree)&&fi(f,p,!0)):ne(f,p,m,U,y,w,O,I,C)},se=(f,p,m,_,y,w,O,I,C)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?y.ctx.activate(p,m,_,O,C):ue(p,m,_,y,w,O,C):he(f,p,C)},ue=(f,p,m,_,y,w,O)=>{const I=f.component=sf(f,_,y);if(Lr(f)&&(I.ctx.renderer=X),of(I),I.asyncDep){if(y&&y.registerDep(I,fe),!f.el){const C=I.subTree=we(Ne);R(null,C,p,m)}return}fe(I,f,p,m,y,w,O)},he=(f,p,m)=>{const _=p.component=f.component;if(gu(f,p,m))if(_.asyncDep&&!_.asyncResolved){ie(_,p,m);return}else _.next=p,cu(_.update),_.update();else p.el=f.el,_.vnode=p},fe=(f,p,m,_,y,w,O)=>{const I=()=>{if(f.isMounted){let{next:U,bu:N,u:F,parent:z,vnode:J}=f,oe=U,re;At(f,!1),U?(U.el=J.el,ie(f,U,O)):U=J,N&&Gr(N),(re=U.props&&U.props.onVnodeBeforeUpdate)&&We(re,z,U,J),At(f,!0);const me=Jr(f),xe=f.subTree;f.subTree=me,T(xe,me,d(xe.el),A(xe),f,y,w),U.el=me.el,oe===null&&mu(f,me.el),F&&Ce(F,y),(re=U.props&&U.props.onVnodeUpdated)&&Ce(()=>We(re,z,U,J),y)}else{let U;const{el:N,props:F}=p,{bm:z,m:J,parent:oe}=f,re=En(p);if(At(f,!1),z&&Gr(z),!re&&(U=F&&F.onVnodeBeforeMount)&&We(U,oe,p),At(f,!0),N&&G){const me=()=>{f.subTree=Jr(f),G(N,f.subTree,f,y,null)};re?p.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=Jr(f);T(null,me,m,_,f,y,w),p.el=me.el}if(J&&Ce(J,y),!re&&(U=F&&F.onVnodeMounted)){const me=p;Ce(()=>We(U,oe,me),y)}(p.shapeFlag&256||oe&&En(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&Ce(f.a,y),f.isMounted=!0,p=m=_=null}},C=f.effect=new qs(I,()=>ni(b),f.scope),b=f.update=()=>C.run();b.id=f.uid,At(f,!0),b()},ie=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Bu(f,p.props,_,m),ju(f,p.children,m),un(),Fi(),fn()},ne=(f,p,m,_,y,w,O,I,C=!1)=>{const b=f&&f.children,U=f?f.shapeFlag:0,N=p.children,{patchFlag:F,shapeFlag:z}=p;if(F>0){if(F&128){St(b,N,m,_,y,w,O,I,C);return}else if(F&256){Me(b,N,m,_,y,w,O,I,C);return}}z&8?(U&16&&k(b,y,w),N!==b&&u(m,N)):U&16?z&16?St(b,N,m,_,y,w,O,I,C):k(b,y,w,!0):(U&8&&u(m,""),z&16&&S(N,m,_,y,w,O,I,C))},Me=(f,p,m,_,y,w,O,I,C)=>{f=f||Jt,p=p||Jt;const b=f.length,U=p.length,N=Math.min(b,U);let F;for(F=0;F<N;F++){const z=p[F]=C?lt(p[F]):Ve(p[F]);T(f[F],z,m,null,y,w,O,I,C)}b>U?k(f,y,w,!0,!1,N):S(p,m,_,y,w,O,I,C,N)},St=(f,p,m,_,y,w,O,I,C)=>{let b=0;const U=p.length;let N=f.length-1,F=U-1;for(;b<=N&&b<=F;){const z=f[b],J=p[b]=C?lt(p[b]):Ve(p[b]);if(Mt(z,J))T(z,J,m,null,y,w,O,I,C);else break;b++}for(;b<=N&&b<=F;){const z=f[N],J=p[F]=C?lt(p[F]):Ve(p[F]);if(Mt(z,J))T(z,J,m,null,y,w,O,I,C);else break;N--,F--}if(b>N){if(b<=F){const z=F+1,J=z<U?p[z].el:_;for(;b<=F;)T(null,p[b]=C?lt(p[b]):Ve(p[b]),m,J,y,w,O,I,C),b++}}else if(b>F)for(;b<=N;)Te(f[b],y,w,!0),b++;else{const z=b,J=b,oe=new Map;for(b=J;b<=F;b++){const Re=p[b]=C?lt(p[b]):Ve(p[b]);Re.key!=null&&oe.set(Re.key,b)}let re,me=0;const xe=F-J+1;let Vt=!1,Ri=0;const pn=new Array(xe);for(b=0;b<xe;b++)pn[b]=0;for(b=z;b<=N;b++){const Re=f[b];if(me>=xe){Te(Re,y,w,!0);continue}let je;if(Re.key!=null)je=oe.get(Re.key);else for(re=J;re<=F;re++)if(pn[re-J]===0&&Mt(Re,p[re])){je=re;break}je===void 0?Te(Re,y,w,!0):(pn[je-J]=b+1,je>=Ri?Ri=je:Vt=!0,T(Re,p[je],m,null,y,w,O,I,C),me++)}const Ai=Vt?qu(pn):Jt;for(re=Ai.length-1,b=xe-1;b>=0;b--){const Re=J+b,je=p[Re],Oi=Re+1<U?p[Re+1].el:_;pn[b]===0?T(null,je,m,Oi,y,w,O,I,C):Vt&&(re<0||b!==Ai[re]?Le(je,m,Oi,2):re--)}}},Le=(f,p,m,_,y=null)=>{const{el:w,type:O,transition:I,children:C,shapeFlag:b}=f;if(b&6){Le(f.component.subTree,p,m,_);return}if(b&128){f.suspense.move(p,m,_);return}if(b&64){O.move(f,p,m,X);return}if(O===Se){r(w,p,m);for(let N=0;N<C.length;N++)Le(C[N],p,m,_);r(f.anchor,p,m);return}if(O===lr){P(f,p,m);return}if(_!==2&&b&1&&I)if(_===0)I.beforeEnter(w),r(w,p,m),Ce(()=>I.enter(w),y);else{const{leave:N,delayLeave:F,afterLeave:z}=I,J=()=>r(w,p,m),oe=()=>{N(w,()=>{J(),z&&z()})};F?F(w,J,oe):oe()}else r(w,p,m)},Te=(f,p,m,_=!1,y=!1)=>{const{type:w,props:O,ref:I,children:C,dynamicChildren:b,shapeFlag:U,patchFlag:N,dirs:F}=f;if(I!=null&&Es(I,null,m,f,!0),U&256){p.ctx.deactivate(f);return}const z=U&1&&F,J=!En(f);let oe;if(J&&(oe=O&&O.onVnodeBeforeUnmount)&&We(oe,p,f),U&6)v(f.component,m,_);else{if(U&128){f.suspense.unmount(m,_);return}z&&Rt(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,m,y,X,_):b&&(w!==Se||N>0&&N&64)?k(b,p,m,!1,!0):(w===Se&&N&384||!y&&U&16)&&k(C,p,m),_&&Wt(f)}(J&&(oe=O&&O.onVnodeUnmounted)||z)&&Ce(()=>{oe&&We(oe,p,f),z&&Rt(f,null,p,"unmounted")},m)},Wt=f=>{const{type:p,el:m,anchor:_,transition:y}=f;if(p===Se){Qn(m,_);return}if(p===lr){j(f);return}const w=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:O,delayLeave:I}=y,C=()=>O(m,w);I?I(f.el,w,C):C()}else w()},Qn=(f,p)=>{let m;for(;f!==p;)m=h(f),s(f),f=m;s(p)},v=(f,p,m)=>{const{bum:_,scope:y,update:w,subTree:O,um:I}=f;_&&Gr(_),y.stop(),w&&(w.active=!1,Te(O,f,p,m)),I&&Ce(I,p),Ce(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(f,p,m,_=!1,y=!1,w=0)=>{for(let O=w;O<f.length;O++)Te(f[O],p,m,_,y)},A=f=>f.shapeFlag&6?A(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),x=(f,p,m)=>{f==null?p._vnode&&Te(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),Fi(),Ra(),p._vnode=f},X={p:T,um:Te,m:Le,r:Wt,mt:ue,mc:S,pc:ne,pbc:q,n:A,o:t};let de,G;return e&&([de,G]=e(X)),{render:x,hydrate:de,createApp:Vu(x,de)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fi(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=lt(s[i]),a.el=o.el),n||fi(o,a)),a.type===Ur&&(a.el=o.el)}}function qu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Gu=t=>t.__isTeleport,wn=t=>t&&(t.disabled||t.disabled===""),Gi=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Is=(t,e)=>{const n=t&&t.to;return ge(n)?e?e(n):null:n},Ju={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:g,querySelector:E,createText:T,createComment:L}}=l,R=wn(e.props);let{shapeFlag:M,children:P,dynamicChildren:j}=e;if(t==null){const W=e.el=T(""),Y=e.anchor=T("");g(W,n,r),g(Y,n,r);const B=e.target=Is(e.props,E),S=e.targetAnchor=T("");B&&(g(S,B),o=o||Gi(B));const V=(q,ee)=>{M&16&&u(P,q,ee,s,i,o,a,c)};R?V(n,Y):B&&V(B,S)}else{e.el=t.el;const W=e.anchor=t.anchor,Y=e.target=t.target,B=e.targetAnchor=t.targetAnchor,S=wn(t.props),V=S?n:Y,q=S?W:B;if(o=o||Gi(Y),j?(h(t.dynamicChildren,j,V,s,i,o,a),fi(t,e,!0)):c||d(t,e,V,q,s,i,o,a,!1),R)S||ir(e,n,W,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ee=e.target=Is(e.props,E);ee&&ir(e,ee,null,l,0)}else S&&ir(e,Y,B,l,1)}qa(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=t;if(d&&i(u),(o||!wn(h))&&(i(l),a&16))for(let g=0;g<c.length;g++){const E=c[g];s(E,e,n,!0,!!E.dynamicChildren)}},move:ir,hydrate:Yu};function ir(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||wn(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);d&&r(a,e,n)}function Yu(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Is(e.props,c);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(wn(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=d;else{e.anchor=o(t);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(d,e,u,n,r,s,i)}qa(e)}return e.anchor&&o(e.anchor)}const Jm=Ju;function qa(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Se=Symbol(void 0),Ur=Symbol(void 0),Ne=Symbol(void 0),lr=Symbol(void 0),Tn=[];let Fe=null;function Ga(t=!1){Tn.push(Fe=t?null:[])}function Xu(){Tn.pop(),Fe=Tn[Tn.length-1]||null}let Ln=1;function Ji(t){Ln+=t}function Ja(t){return t.dynamicChildren=Ln>0?Fe||Jt:null,Xu(),Ln>0&&Fe&&Fe.push(t),t}function Ym(t,e,n,r,s,i){return Ja(Qa(t,e,n,r,s,i,!0))}function Ya(t,e,n,r,s){return Ja(we(t,e,n,r,s,!0))}function yr(t){return t?t.__v_isVNode===!0:!1}function Mt(t,e){return t.type===e.type&&t.key===e.key}const Fr="__vInternal",Xa=({key:t})=>t??null,ur=({ref:t,ref_key:e,ref_for:n})=>t!=null?ge(t)||pe(t)||K(t)?{i:ye,r:t,k:e,f:!!n}:t:null;function Qa(t,e=null,n=null,r=0,s=null,i=t===Se?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xa(e),ref:e&&ur(e),scopeId:Mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ye};return a?(di(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Ln>0&&!o&&Fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Fe.push(c),c}const we=Qu;function Qu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Fa)&&(t=Ne),yr(t)){const a=wt(t,e,!0);return n&&di(a,n),Ln>0&&!i&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(t)]=a:Fe.push(a)),a.patchFlag|=-2,a}if(ff(t)&&(t=t.__vccOpts),e){e=Zu(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=$s(a)),le(c)&&(ya(c)&&!H(c)&&(c=ve({},c)),e.style=Bs(c))}const o=ge(t)?1:_u(t)?128:Gu(t)?64:le(t)?4:K(t)?2:0;return Qa(t,e,n,r,s,o,i,!0)}function Zu(t){return t?ya(t)||Fr in t?ve({},t):t:null}function wt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?tf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Xa(a),ref:e&&e.ref?n&&s?H(s)?s.concat(ur(e)):[s,ur(e)]:ur(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wt(t.ssContent),ssFallback:t.ssFallback&&wt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ef(t=" ",e=0){return we(Ur,null,t,e)}function Xm(t="",e=!1){return e?(Ga(),Ya(Ne,null,t)):we(Ne,null,t)}function Ve(t){return t==null||typeof t=="boolean"?we(Ne):H(t)?we(Se,null,t.slice()):typeof t=="object"?lt(t):we(Ur,null,String(t))}function lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wt(t)}function di(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),di(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Fr in e)?e._ctx=ye:s===3&&ye&&(ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:ye},n=32):(e=String(e),r&64?(n=16,e=[ef(e)]):n=8);t.children=e,t.shapeFlag|=n}function tf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$s([e.class,r.class]));else if(s==="style")e.style=Bs([e.style,r.style]);else if(Rr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function We(t,e,n,r=null){De(t,e,7,[n,r])}const nf=Ka();let rf=0;function sf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nf,i={uid:rf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new oa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(r,s),emitsOptions:Oa(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fu.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const Br=()=>_e||ye,sn=t=>{_e=t,t.scope.on()},Ft=()=>{_e&&_e.scope.off(),_e=null};function Za(t){return t.vnode.shapeFlag&4}let xn=!1;function of(t,e=!1){xn=e;const{props:n,children:r}=t.vnode,s=Za(t);Fu(t,n,s,e),Hu(t,r);const i=s?af(t,e):void 0;return xn=!1,i}function af(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rn(new Proxy(t.ctx,Du));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?lf(t):null;sn(t),un();const i=yt(r,t,0,[t.props,s]);if(fn(),Ft(),ra(i)){if(i.then(Ft,Ft),e)return i.then(o=>{Yi(t,o,e)}).catch(o=>{Dr(o,t,0)});t.asyncDep=i}else Yi(t,i,e)}else ec(t,e)}function Yi(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=wa(e)),ec(t,n)}let Xi;function ec(t,e,n){const r=t.type;if(!t.render){if(!e&&Xi&&!r.render){const s=r.template||li(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Xi(s,l)}}t.render=r.render||Be}sn(t),un(),Nu(t),fn(),Ft()}function cf(t){return new Proxy(t.attrs,{get(e,n){return ke(t,"get","$attrs"),e[n]}})}function lf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=cf(t))},slots:t.slots,emit:t.emit,expose:e}}function $r(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wa(rn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in In)return In[n](t)},has(e,n){return n in e||n in In}}))}function uf(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function ff(t){return K(t)&&"__vccOpts"in t}const Oe=(t,e)=>iu(t,e,xn);function hi(t,e,n){const r=arguments.length;return r===2?le(e)&&!H(e)?yr(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yr(n)&&(n=[n]),we(t,e,n))}const df=Symbol(""),hf=()=>Ke(df),pf="3.2.45",gf="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,Qi=Lt&&Lt.createElement("template"),mf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Lt.createElementNS(gf,t):Lt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Qi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Qi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _f(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vf(t,e,n){const r=t.style,s=ge(n);if(n&&!s){for(const i in n)ws(r,i,n[i]);if(e&&!ge(e))for(const i in e)n[i]==null&&ws(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Zi=/\s*!important$/;function ws(t,e,n){if(H(n))n.forEach(r=>ws(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yf(t,e);Zi.test(n)?t.setProperty(ln(r),n.replace(Zi,""),"important"):t[r]=n}}const eo=["Webkit","Moz","ms"],Qr={};function yf(t,e){const n=Qr[e];if(n)return n;let r=Je(e);if(r!=="filter"&&r in t)return Qr[e]=r;r=kr(r);for(let s=0;s<eo.length;s++){const i=eo[s]+r;if(i in t)return Qr[e]=i}return e}const to="http://www.w3.org/1999/xlink";function bf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(to,e.slice(6,e.length)):t.setAttributeNS(to,e,n);else{const i=gl(e);n==null||i&&!ea(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ef(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ea(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function If(t,e,n,r){t.addEventListener(e,n,r)}function wf(t,e,n,r){t.removeEventListener(e,n,r)}function Tf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Cf(e);if(r){const l=i[e]=Af(r,s);If(t,a,l,c)}else o&&(wf(t,a,o,c),i[e]=void 0)}}const no=/(?:Once|Passive|Capture)$/;function Cf(t){let e;if(no.test(t)){e={};let r;for(;r=t.match(no);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let Zr=0;const Sf=Promise.resolve(),Rf=()=>Zr||(Sf.then(()=>Zr=0),Zr=Date.now());function Af(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(Of(r,n.value),e,5,[r])};return n.value=t,n.attached=Rf(),n}function Of(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ro=/^on[a-z]/,kf=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?_f(t,r,s):e==="style"?vf(t,n,r):Rr(e)?Hs(e)||Tf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pf(t,e,r,s))?Ef(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bf(t,e,r,s))};function Pf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ro.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ro.test(e)&&ge(n)?!1:e in t}function Qm(t){const e=Br();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>Cs(i,s))},r=()=>{const s=t(e.proxy);Ts(e.subTree,s),n(s)};yu(r),ii(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),oi(()=>s.disconnect())})}function Ts(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Ts(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Cs(t.el,e);else if(t.type===Se)t.children.forEach(n=>Ts(n,e));else if(t.type===lr){let{el:n,anchor:r}=t;for(;n&&(Cs(n,e),n!==r);)n=n.nextSibling}}function Cs(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const it="transition",gn="animation",tc=(t,{slots:e})=>hi(Da,rc(t),e);tc.displayName="Transition";const nc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Df=tc.props=ve({},Da.props,nc),Ot=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},so=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function rc(t){const e={};for(const D in t)D in nc||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,E=Nf(s),T=E&&E[0],L=E&&E[1],{onBeforeEnter:R,onEnter:M,onEnterCancelled:P,onLeave:j,onLeaveCancelled:W,onBeforeAppear:Y=R,onAppear:B=M,onAppearCancelled:S=P}=e,V=(D,se,ue)=>{ct(D,se?u:a),ct(D,se?l:o),ue&&ue()},q=(D,se)=>{D._isLeaving=!1,ct(D,d),ct(D,g),ct(D,h),se&&se()},ee=D=>(se,ue)=>{const he=D?B:M,fe=()=>V(se,D,ue);Ot(he,[se,fe]),io(()=>{ct(se,D?c:i),Xe(se,D?u:a),so(he)||oo(se,r,T,fe)})};return ve(e,{onBeforeEnter(D){Ot(R,[D]),Xe(D,i),Xe(D,o)},onBeforeAppear(D){Ot(Y,[D]),Xe(D,c),Xe(D,l)},onEnter:ee(!1),onAppear:ee(!0),onLeave(D,se){D._isLeaving=!0;const ue=()=>q(D,se);Xe(D,d),ic(),Xe(D,h),io(()=>{D._isLeaving&&(ct(D,d),Xe(D,g),so(j)||oo(D,r,L,ue))}),Ot(j,[D,ue])},onEnterCancelled(D){V(D,!1),Ot(P,[D])},onAppearCancelled(D){V(D,!0),Ot(S,[D])},onLeaveCancelled(D){q(D),Ot(W,[D])}})}function Nf(t){if(t==null)return null;if(le(t))return[es(t.enter),es(t.leave)];{const e=es(t);return[e,e]}}function es(t){return zs(t)}function Xe(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ct(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function io(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Mf=0;function oo(t,e,n,r){const s=t._endId=++Mf,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=sc(t,e);if(!o)return r();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,h),i()},h=g=>{g.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,h)}function sc(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${it}Delay`),i=r(`${it}Duration`),o=ao(s,i),a=r(`${gn}Delay`),c=r(`${gn}Duration`),l=ao(a,c);let u=null,d=0,h=0;e===it?o>0&&(u=it,d=o,h=i.length):e===gn?l>0&&(u=gn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?it:gn:null,h=u?u===it?i.length:c.length:0);const g=u===it&&/\b(transform|all)(,|$)/.test(r(`${it}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:g}}function ao(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>co(n)+co(t[r])))}function co(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ic(){return document.body.offsetHeight}const oc=new WeakMap,ac=new WeakMap,Lf={name:"TransitionGroup",props:ve({},Df,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Br(),r=Pa();let s,i;return xa(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Bf(s[0].el,n.vnode.el,o))return;s.forEach(xf),s.forEach(Uf);const a=s.filter(Ff);ic(),a.forEach(c=>{const l=c.el,u=l.style;Xe(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",d),l._moveCb=null,ct(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=Z(t),a=rc(o);let c=o.tag||Se;s=i,i=e.default?si(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Mn(u,Nn(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];Mn(u,Nn(u,a,r,n)),oc.set(u,u.el.getBoundingClientRect())}return we(c,null,i)}}},Zm=Lf;function xf(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Uf(t){ac.set(t,t.el.getBoundingClientRect())}function Ff(t){const e=oc.get(t),n=ac.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Bf(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=sc(r);return s.removeChild(r),i}const $f=["ctrl","shift","alt","meta"],Hf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$f.some(n=>t[`${n}Key`]&&!e.includes(n))},e_=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Hf[e[s]];if(i&&i(n,e))return}return t(n,...r)},jf=ve({patchProp:kf},mf);let lo;function Wf(){return lo||(lo=zu(jf))}const t_=(...t)=>{const e=Wf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vf(r);if(!s)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vf(t){return ge(t)?document.querySelector(t):t}const n_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};var zf=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let cc;const Hr=t=>cc=t,lc=Symbol();function Ss(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Cn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cn||(Cn={}));function r_(){const t=aa(!0),e=t.run(()=>Zs({}));let n=[],r=[];const s=rn({install(i){Hr(s),s._a=i,i.provide(lc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!zf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const uc=()=>{};function uo(t,e,n,r=uc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Tl()&&Cl(s),s}function zt(t,...e){t.slice().forEach(n=>{n(...e)})}function Rs(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ss(s)&&Ss(r)&&t.hasOwnProperty(n)&&!pe(r)&&!vt(r)?t[n]=Rs(s,r):t[n]=r}return t}const Kf=Symbol();function qf(t){return!Ss(t)||!t.hasOwnProperty(Kf)}const{assign:ut}=Object;function Gf(t){return!!(pe(t)&&t.effect)}function Jf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=tu(n.state.value[t]);return ut(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=rn(Oe(()=>{Hr(n);const g=n._s.get(t);return o[h].call(g,g)})),d),{}))}return c=fc(t,l,e,n,r,!0),c.$reset=function(){const d=s?s():{};this.$patch(h=>{ut(h,d)})},c}function fc(t,e,n={},r,s,i){let o;const a=ut({actions:{}},n),c={deep:!0};let l,u,d=rn([]),h=rn([]),g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Zs({});let T;function L(B){let S;l=u=!1,typeof B=="function"?(B(r.state.value[t]),S={type:Cn.patchFunction,storeId:t,events:g}):(Rs(r.state.value[t],B),S={type:Cn.patchObject,payload:B,storeId:t,events:g});const V=T=Symbol();ti().then(()=>{T===V&&(l=!0)}),u=!0,zt(d,S,r.state.value[t])}const R=uc;function M(){o.stop(),d=[],h=[],r._s.delete(t)}function P(B,S){return function(){Hr(r);const V=Array.from(arguments),q=[],ee=[];function D(he){q.push(he)}function se(he){ee.push(he)}zt(h,{args:V,name:B,store:W,after:D,onError:se});let ue;try{ue=S.apply(this&&this.$id===t?this:W,V)}catch(he){throw zt(ee,he),he}return ue instanceof Promise?ue.then(he=>(zt(q,he),he)).catch(he=>(zt(ee,he),Promise.reject(he))):(zt(q,ue),ue)}}const j={_p:r,$id:t,$onAction:uo.bind(null,h),$patch:L,$reset:R,$subscribe(B,S={}){const V=uo(d,B,S.detached,()=>q()),q=o.run(()=>bn(()=>r.state.value[t],ee=>{(S.flush==="sync"?u:l)&&B({storeId:t,type:Cn.direct,events:g},ee)},ut({},c,S)));return V},$dispose:M},W=dn(j);r._s.set(t,W);const Y=r._e.run(()=>(o=aa(),o.run(()=>e())));for(const B in Y){const S=Y[B];if(pe(S)&&!Gf(S)||vt(S))i||(E&&qf(S)&&(pe(S)?S.value=E[B]:Rs(S,E[B])),r.state.value[t][B]=S);else if(typeof S=="function"){const V=P(B,S);Y[B]=V,a.actions[B]=S}}return ut(W,Y),ut(Z(W),Y),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:B=>{L(S=>{ut(S,B)})}}),r._p.forEach(B=>{ut(W,o.run(()=>B({store:W,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(W.$state,E),l=!0,u=!0,W}function Yf(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Br();return a=a||l&&Ke(lc,null),a&&Hr(a),a=cc,a._s.has(r)||(i?fc(r,e,s,a):Jf(r,s,a)),a._s.get(r)}return o.$id=r,o}function s_(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function i_(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}/**
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
 */const dc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),d!==64){const E=l<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qf=function(t){const e=dc(t);return hc.encodeByteArray(e,!0)},pc=function(t){return Qf(t).replace(/\./g,"")},gc=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ed(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nd(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rd(){try{return typeof indexedDB=="object"}catch{return!1}}function sd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const od=()=>id().__FIREBASE_DEFAULTS__,ad=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gc(t[1]);return e&&JSON.parse(e)},pi=()=>{try{return od()||ad()||cd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ld=t=>{var e,n;return(n=(e=pi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ud=()=>{var t;return(t=pi())===null||t===void 0?void 0:t.config},mc=t=>{var e;return(e=pi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */const dd="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dd,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,a,r)}}function hd(t,e){return t.replace(pd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pd=/\{\$([^}]+)}/g;function gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fo(i)&&fo(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fo(t){return t!==null&&typeof t=="object"}/**
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
 */function Vn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function md(t,e){const n=new _d(t,e);return n.subscribe.bind(n)}class _d{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ts),s.error===void 0&&(s.error=ts),s.complete===void 0&&(s.complete=ts);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ts(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pt="[DEFAULT]";/**
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
 */class yd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ed(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bd(t){return t===Pt?void 0:t}function Ed(t){return t.instantiationMode==="EAGER"}/**
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
 */class Id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const wd={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Td=ae.INFO,Cd={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Sd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Cd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=Td,this._logHandler=Sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Rd=(t,e)=>e.some(n=>t instanceof n);let ho,po;function Ad(){return ho||(ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Od(){return po||(po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vc=new WeakMap,As=new WeakMap,yc=new WeakMap,ns=new WeakMap,gi=new WeakMap;function kd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vc.set(n,t)}).catch(()=>{}),gi.set(e,t),e}function Pd(t){if(As.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});As.set(t,e)}let Os={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return As.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dd(t){Os=t(Os)}function Nd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rs(this),e,...n);return yc.set(r,e.sort?e.sort():[e]),bt(r)}:Od().includes(t)?function(...e){return t.apply(rs(this),e),bt(vc.get(this))}:function(...e){return bt(t.apply(rs(this),e))}}function Md(t){return typeof t=="function"?Nd(t):(t instanceof IDBTransaction&&Pd(t),Rd(t,Ad())?new Proxy(t,Os):t)}function bt(t){if(t instanceof IDBRequest)return kd(t);if(ns.has(t))return ns.get(t);const e=Md(t);return e!==t&&(ns.set(t,e),gi.set(e,t)),e}const rs=t=>gi.get(t);function Ld(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const xd=["get","getKey","getAll","getAllKeys","count"],Ud=["put","add","delete","clear"],ss=new Map;function go(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ss.get(e))return ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ud.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ss.set(e,i),i}Dd(t=>({...t,get:(e,n,r)=>go(e,n)||t.get(e,n,r),has:(e,n)=>!!go(e,n)||t.has(e,n)}));/**
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
 */class Fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",mo="0.9.0";/**
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
 */const $t=new _c("@firebase/app"),$d="@firebase/app-compat",Hd="@firebase/analytics-compat",jd="@firebase/analytics",Wd="@firebase/app-check-compat",Vd="@firebase/app-check",zd="@firebase/auth",Kd="@firebase/auth-compat",qd="@firebase/database",Gd="@firebase/database-compat",Jd="@firebase/functions",Yd="@firebase/functions-compat",Xd="@firebase/installations",Qd="@firebase/installations-compat",Zd="@firebase/messaging",eh="@firebase/messaging-compat",th="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",sh="@firebase/remote-config-compat",ih="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",ch="@firebase/firestore-compat",lh="firebase",uh="9.15.0";/**
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
 */const Ps="[DEFAULT]",fh={[ks]:"fire-core",[$d]:"fire-core-compat",[jd]:"fire-analytics",[Hd]:"fire-analytics-compat",[Vd]:"fire-app-check",[Wd]:"fire-app-check-compat",[zd]:"fire-auth",[Kd]:"fire-auth-compat",[qd]:"fire-rtdb",[Gd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Yd]:"fire-fn-compat",[Xd]:"fire-iid",[Qd]:"fire-iid-compat",[Zd]:"fire-fcm",[eh]:"fire-fcm-compat",[th]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[sh]:"fire-rc-compat",[ih]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[ch]:"fire-fst-compat","fire-js":"fire-js",[lh]:"fire-js-all"};/**
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
 */const Er=new Map,Ds=new Map;function dh(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Ds.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,t);for(const n of Er.values())dh(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Et=new Wn("app","Firebase",hh);/**
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
 */class ph{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=uh;function Ec(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ps,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Et.create("bad-app-name",{appName:String(s)});if(n||(n=ud()),!n)throw Et.create("no-options");const i=Er.get(s);if(i){if(br(n,i.options)&&br(r,i.config))return i;throw Et.create("duplicate-app",{appName:s})}const o=new Id(s);for(const c of Ds.values())o.addComponent(c);const a=new ph(n,r,o);return Er.set(s,a),a}function gh(t=Ps){const e=Er.get(t);if(!e&&t===Ps)return Ec();if(!e)throw Et.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=fh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}Un(new on(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mh="firebase-heartbeat-database",_h=1,Fn="firebase-heartbeat-store";let is=null;function Ic(){return is||(is=Ld(mh,_h,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fn)}}}).catch(t=>{throw Et.create("idb-open",{originalErrorMessage:t.message})})),is}async function vh(t){try{return(await Ic()).transaction(Fn).objectStore(Fn).get(wc(t))}catch(e){if(e instanceof Tt)$t.warn(e.message);else{const n=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function _o(t,e){try{const r=(await Ic()).transaction(Fn,"readwrite");return await r.objectStore(Fn).put(e,wc(t)),r.done}catch(n){if(n instanceof Tt)$t.warn(n.message);else{const r=Et.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function wc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yh=1024,bh=30*24*60*60*1e3;class Eh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=bh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:n,unsentEntries:r}=Ih(this._heartbeatsCache.heartbeats),s=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vo(){return new Date().toISOString().substring(0,10)}function Ih(t,e=yh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?sd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yo(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Th(t){Un(new on("platform-logger",e=>new Fd(e),"PRIVATE")),Un(new on("heartbeat",e=>new Eh(e),"PRIVATE")),Zt(ks,mo,t),Zt(ks,mo,"esm2017"),Zt("fire-js","")}Th("");var Ch="firebase",Sh="9.15.0";/**
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
 */Zt(Ch,Sh,"app");function mi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=Tc,Cc=new Wn("auth","Firebase",Tc());/**
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
 */const bo=new _c("@firebase/auth");function fr(t,...e){bo.logLevel<=ae.ERROR&&bo.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function $e(t,...e){throw _i(t,...e)}function qe(t,...e){return _i(t,...e)}function Ah(t,e,n){const r=Object.assign(Object.assign({},Rh()),{[e]:n});return new Wn("auth","Firebase",r).create(e,{appName:t.name})}function _i(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cc.create(t,...e)}function $(t,e,...n){if(!t)throw _i(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fr(e),new Error(e)}function nt(t,e){t||Ze(e)}/**
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
 */const Eo=new Map;function et(t){nt(t instanceof Function,"Expected a class definition");let e=Eo.get(t);return e?(nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eo.set(t,e),e)}/**
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
 */function Oh(t,e){const n=bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e??{}))return s;$e(s,"already-initialized")}return n.initialize({options:e})}function kh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ns(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ph(){return Io()==="http:"||Io()==="https:"}function Io(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ph()||ed()||"connection"in navigator)?navigator.onLine:!0}function Nh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,nt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||td()}get(){return Dh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vi(t,e){nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Mh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Lh=new zn(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,s={}){return Rc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Sc.fetch()(Ac(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mh),e);try{const s=new xh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ah(t,u,l);$e(t,u)}}catch(s){if(s instanceof Tt)throw s;$e(t,"network-request-failed")}}async function Gn(t,e,n,r,s={}){const i=await qn(t,e,n,r,s);return"mfaPendingCredential"in i&&$e(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ac(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vi(t.config,s):`${t.config.apiScheme}://${s}`}class xh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Lh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Uh(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function Fh(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bh(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),s=yi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Sn(os(s.auth_time)),issuedAtTime:Sn(os(s.iat)),expirationTime:Sn(os(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function os(t){return Number(t)*1e3}function yi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fr("JWT malformed, contained fewer than 3 sections"),null;try{const s=gc(n);return s?JSON.parse(s):(fr("Failed to decode base64 JWT payload"),null)}catch(s){return fr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $h(t){const e=yi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&Hh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ir(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bn(t,Fh(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zh(i.providerUserInfo):[],a=Vh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Wh(t){const e=Ct(t);await Ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zh(t){return t.map(e=>{var{providerId:n}=e,r=mi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Kh(t,e){const n=await Rc(t,{},async()=>{const r=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ac(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$h(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $n;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function ot(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bh(this,e)}reload(){return Wh(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ir(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bn(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:j,isAnonymous:W,providerData:Y,stsTokenManager:B}=n;$(P&&B,e,"internal-error");const S=$n.fromJSON(this.name,B);$(typeof P=="string",e,"internal-error"),ot(d,e.name),ot(h,e.name),$(typeof j=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),ot(g,e.name),ot(E,e.name),ot(T,e.name),ot(L,e.name),ot(R,e.name),ot(M,e.name);const V=new Bt({uid:P,auth:e,email:h,emailVerified:j,displayName:d,isAnonymous:W,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:S,createdAt:R,lastLoginAt:M});return Y&&Array.isArray(Y)&&(V.providerData=Y.map(q=>Object.assign({},q))),L&&(V._redirectEventId=L),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new $n;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ir(i),i}}/**
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
 */class kc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kc.type="NONE";const wo=kc;/**
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
 */function dr(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,i),this.fullPersistenceKey=dr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(et(wo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(wo);const o=dr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Bt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new en(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new en(i,e,r))}}/**
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
 */function To(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lc(e))return"Blackberry";if(xc(e))return"Webos";if(bi(e))return"Safari";if((e.includes("chrome/")||Dc(e))&&!e.includes("edge/"))return"Chrome";if(Mc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pc(t=Ee()){return/firefox\//i.test(t)}function bi(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dc(t=Ee()){return/crios\//i.test(t)}function Nc(t=Ee()){return/iemobile/i.test(t)}function Mc(t=Ee()){return/android/i.test(t)}function Lc(t=Ee()){return/blackberry/i.test(t)}function xc(t=Ee()){return/webos/i.test(t)}function Wr(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qh(t=Ee()){var e;return Wr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gh(){return nd()&&document.documentMode===10}function Uc(t=Ee()){return Wr(t)||Mc(t)||xc(t)||Lc(t)||/windows phone/i.test(t)||Nc(t)}function Jh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=To(Ee());break;case"Worker":n=`${To(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class Yh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Xh{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Co(this),this.idTokenSubscription=new Co(this),this.beforeStateQueue=new Yh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ir(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ct(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Jn(t){return Ct(t)}class Co{constructor(e){this.auth=e,this.observer=null,this.addObserver=md(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Qh(t,e,n){const r=Jn(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Bc(e),{host:o,port:a}=Zh(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ep()}function Bc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zh(t){const e=Bc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:So(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:So(o)}}}function So(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ep(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ei{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function tp(t,e){return qn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function np(t,e){return Gn(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
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
 */async function rp(t,e){return Gn(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function sp(t,e){return Gn(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
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
 */class Hn extends Ei{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return np(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rp(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sp(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function tn(t,e){return Gn(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
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
 */const ip="http://localhost";class Ht extends Ei{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:ip,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}}/**
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
 */function op(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ap(t){const e=vn(yn(t)).link,n=e?vn(yn(e)).deep_link_id:null,r=vn(yn(t)).deep_link_id;return(r?vn(yn(r)).link:null)||r||n||e||t}class Ii{constructor(e){var n,r,s,i,o,a;const c=vn(yn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=op((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ap(e);try{return new Ii(n)}catch{return null}}}/**
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
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Hn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ii.parseLink(n);return $(r,"argument-error"),Hn._fromEmailAndCode(e,r.code,r.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yn extends $c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends Yn{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends Yn{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends Yn{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */async function cp(t,e){return Gn(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=Ro(r);return new jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ro(r);return new jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ro(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wr extends Tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wr(e,n,r,s)}}function Hc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wr._fromErrorAndOperation(t,i,e,r):i})}async function lp(t,e,n=!1){const r=await Bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}/**
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
 */async function up(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Bn(t,Hc(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=yi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),jt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
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
 */async function jc(t,e,n=!1){const r="signIn",s=await Hc(t,r,e),i=await jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fp(t,e){return jc(Jn(t),e)}async function dp(t,e,n){const r=Jn(t),s=await cp(r,{returnSecureToken:!0,email:e,password:n}),i=await jt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function hp(t,e,n){return fp(Ct(t),hn.credential(e,n))}function pp(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function gp(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function mp(t){return Ct(t).signOut()}const Tr="__sak";/**
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
 */class Wc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _p(){const t=Ee();return bi(t)||Wr(t)}const vp=1e3,yp=10;class Vc extends Wc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_p()&&Jh(),this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vc.type="LOCAL";const bp=Vc;/**
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
 */class zc extends Wc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zc.type="SESSION";const Kc=zc;/**
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
 */function Ep(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ep(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
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
 */function wi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ip{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=wi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function wp(t){Ge().location.href=t}/**
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
 */function qc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sp(){return qc()?self:null}/**
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
 */const Gc="firebaseLocalStorageDb",Rp=1,Cr="firebaseLocalStorage",Jc="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zr(t,e){return t.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function Ap(){const t=indexedDB.deleteDatabase(Gc);return new Xn(t).toPromise()}function Ms(){const t=indexedDB.open(Gc,Rp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cr,{keyPath:Jc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cr)?e(r):(r.close(),await Ap(),e(await Ms()))})})}async function Ao(t,e,n){const r=zr(t,!0).put({[Jc]:e,value:n});return new Xn(r).toPromise()}async function Op(t,e){const n=zr(t,!1).get(e),r=await new Xn(n).toPromise();return r===void 0?null:r.value}function Oo(t,e){const n=zr(t,!0).delete(e);return new Xn(n).toPromise()}const kp=800,Pp=3;class Yc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(Sp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tp(),!this.activeServiceWorker)return;this.sender=new Ip(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ms();return await Ao(e,Tr,"1"),await Oo(e,Tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ao(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Op(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=zr(s,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yc.type="LOCAL";const Dp=Yc;/**
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
 */function Np(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Np().appendChild(r)})}function Lp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zn(3e4,6e4);/**
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
 */function xp(t,e){return e?et(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ti extends Ei{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Up(t){return jc(t.auth,new Ti(t),t.bypassAuthState)}function Fp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),up(n,new Ti(t),t.bypassAuthState)}async function Bp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),lp(n,new Ti(t),t.bypassAuthState)}/**
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
 */class Xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Up;case"linkViaPopup":case"linkViaRedirect":return Bp;case"reauthViaPopup":case"reauthViaRedirect":return Fp;default:$e(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $p=new zn(2e3,1e4);class Gt extends Xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=wi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$p.get())};e()}}Gt.currentPopupAction=null;/**
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
 */const Hp="pendingRedirect",hr=new Map;class jp extends Xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const r=await Wp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wp(t,e){const n=Kp(e),r=zp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vp(t,e){hr.set(t._key(),e)}function zp(t){return et(t._redirectPersistence)}function Kp(t){return dr(Hp,t.config.apiKey,t.name)}async function qp(t,e,n=!1){const r=Jn(t),s=xp(r,e),o=await new jp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gp=10*60*1e3;class Jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gp&&this.cachedEventUids.clear(),this.cachedEventUids.has(ko(e))}saveEventToCache(e){this.cachedEventUids.add(ko(e)),this.lastProcessedEventTime=Date.now()}}function ko(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qc(t);default:return!1}}/**
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
 */async function Xp(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const Qp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zp=/^https?/;async function eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xp(t);for(const n of e)try{if(tg(n))return}catch{}$e(t,"unauthorized-domain")}function tg(t){const e=Ns(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zp.test(n))return!1;if(Qp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ng=new zn(3e4,6e4);function Po(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rg(t){return new Promise((e,n)=>{var r,s,i;function o(){Po(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Po(),n(qe(t,"network-request-failed"))},timeout:ng.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const a=Lp("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},Mp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw pr=null,e})}let pr=null;function sg(t){return pr=pr||rg(t),pr}/**
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
 */const ig=new zn(5e3,15e3),og="__/auth/iframe",ag="emulator/auth/iframe",cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ug(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vi(e,ag):`https://${t.config.authDomain}/${og}`,r={apiKey:e.apiKey,appName:t.name,v:jr},s=lg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vn(r).slice(1)}`}async function fg(t){const e=await sg(t),n=Ge().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:ug(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=Ge().setTimeout(()=>{i(o)},ig.get());function c(){Ge().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hg=500,pg=600,gg="_blank",mg="http://localhost";class Do{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _g(t,e,n,r=hg,s=pg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=Dc(l)?gg:n),Pc(l)&&(e=e||mg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,E])=>`${h}${g}=${E},`,"");if(qh(l)&&a!=="_self")return vg(e||"",a),new Do(null);const d=window.open(e||"",a,u);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Do(d)}function vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yg="__/auth/handler",bg="emulator/auth/handler";function No(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:s};if(e instanceof $c){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Yn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Eg(t)}?${Vn(a).slice(1)}`}function Eg({config:t}){return t.emulator?vi(t,bg):`https://${t.authDomain}/${yg}`}/**
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
 */const as="webStorageSupport";class Ig{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=qp,this._overrideRedirectResult=Vp}async _openPopup(e,n,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=No(e,n,r,Ns(),s);return _g(e,o,wi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),wp(No(e,n,r,Ns(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fg(e),r=new Jp(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(as,{type:as},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[as];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uc()||bi()||Wr()}}const wg=Ig;var Mo="@firebase/auth",Lo="0.21.0";/**
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
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sg(t){Un(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},u=new Xh(a,c,l);return kh(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new on("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Mo,Lo,Cg(t)),Zt(Mo,Lo,"esm2017")}/**
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
 */const Rg=5*60,Ag=mc("authIdTokenMaxAge")||Rg;let xo=null;const Og=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ag)return;const s=n==null?void 0:n.token;xo!==s&&(xo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kg(t=gh()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Oh(t,{popupRedirectResolver:wg,persistence:[Dp,bp,Kc]}),r=mc("authTokenSyncURL");if(r){const i=Og(r);gp(n,i,()=>i(n.currentUser)),pp(n,o=>i(o))}const s=ld("auth");return s&&Qh(n,`http://${s}`),n}Sg("Browser");const Pg={apiKey:"AIzaSyA_EdaXKzEQ_Yg1YnAl8ikzQDooFirlTis",authDomain:"interview-5ac2c.firebaseapp.com",databaseURL:"https://interview-5ac2c.firebaseapp.com",projectId:"interview-5ac2c",storageBucket:"interview-5ac2c.appspot.com"},Dg=Ec(Pg),ft=kg(Dg),Ng="modulepreload",Mg=function(t){return"/Dev-Team/"+t},Uo={},cs=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Mg(i),i in Uo)return;Uo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Ng,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qt=typeof window<"u";function Lg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function ls(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const Rn=()=>{},He=Array.isArray,xg=/\/$/,Ug=t=>t.replace(xg,"");function us(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Hg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Fg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&an(e.matched[r],n.matched[s])&&Zc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function an(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$g(t[n],e[n]))return!1;return!0}function $g(t,e){return He(t)?Bo(t,e):He(e)?Bo(e,t):t===e}function Bo(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Hg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var An;(function(t){t.back="back",t.forward="forward",t.unknown=""})(An||(An={}));function jg(t){if(!t)if(qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ug(t)}const Wg=/^[^#]+#/;function Vg(t,e){return t.replace(Wg,"#")+e}function zg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Kr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function $o(t,e){return(history.state?history.state.position-e:-1)+t}const Ls=new Map;function qg(t,e){Ls.set(t,e)}function Gg(t){const e=Ls.get(t);return Ls.delete(t),e}let Jg=()=>location.protocol+"//"+location.host;function el(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Fo(c,"")}return Fo(n,t)+r+s}function Yg(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=el(t,location),E=n.value,T=e.value;let L=0;if(h){if(n.value=g,e.value=h,o&&o===E){o=null;return}L=T?h.position-T.position:0}else r(g);s.forEach(R=>{R(n.value,E,{delta:L,type:jn.pop,direction:L?L>0?An.forward:An.back:An.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const E=s.indexOf(h);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(te({},h.state,{scroll:Kr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function Ho(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Kr():null}}function Xg(t){const{history:e,location:n}=window,r={value:el(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Jg()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=te({},e.state,Ho(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=te({},s.value,e.state,{forward:c,scroll:Kr()});i(u.current,u,!0);const d=te({},Ho(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Qg(t){t=jg(t);const e=Xg(t),n=Yg(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:Vg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Zg(t){return typeof t=="string"||t&&typeof t=="object"}function tl(t){return typeof t=="string"||typeof t=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nl=Symbol("");var jo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jo||(jo={}));function cn(t,e){return te(new Error,{type:t,[nl]:!0},e)}function Ye(t,e){return t instanceof Error&&nl in t&&(e==null||!!(t.type&e))}const Wo="[^/]+?",em={sensitive:!1,strict:!1,start:!0,end:!0},tm=/[.+*?^${}()[\]/\\]/g;function nm(t,e){const n=te({},em,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(tm,"\\$&"),g+=40;else if(h.type===1){const{value:E,repeatable:T,optional:L,regexp:R}=h;i.push({name:E,repeatable:T,optional:L});const M=R||Wo;if(M!==Wo){g+=10;try{new RegExp(`(${M})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+j.message)}}let P=T?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(P=L&&l.length<2?`(?:/${P})`:"/"+P),L&&(P+="?"),s+=P,g+=20,L&&(g+=-8),T&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",E=i[h-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:T,optional:L}=g,R=E in l?l[E]:"";if(He(R)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=He(R)?R.join("/"):R;if(!M)if(L)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function rm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vo(r))return 1;if(Vo(s))return-1}return s.length-r.length}function Vo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const im={type:0,value:""},om=/[a-zA-Z0-9_]/;function am(t){if(!t)return[[]];if(t==="/")return[[im]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:om.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function cm(t,e,n){const r=nm(am(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lm(t,e){const n=[],r=new Map;e=qo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,h){const g=!h,E=um(u);E.aliasOf=h&&h.record;const T=qo(e,u),L=[E];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of P)L.push(te({},E,{components:h?h.record.components:E.components,path:j,aliasOf:h?h.record:E}))}let R,M;for(const P of L){const{path:j}=P;if(d&&j[0]!=="/"){const W=d.record.path,Y=W[W.length-1]==="/"?"":"/";P.path=d.record.path+(j&&Y+j)}if(R=cm(P,d,T),h?h.alias.push(R):(M=M||R,M!==R&&M.alias.push(R),g&&u.name&&!Ko(R)&&o(u.name)),E.children){const W=E.children;for(let Y=0;Y<W.length;Y++)i(W[Y],R,h&&h.children[Y])}h=h||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return M?()=>{o(M)}:Rn}function o(u){if(tl(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&sm(u,n[d])>=0&&(u.record.path!==n[d].record.path||!rl(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ko(u)&&r.set(u.record.name,u)}function l(u,d){let h,g={},E,T;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw cn(1,{location:u});T=h.record.name,g=te(zo(d.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&zo(u.params,h.keys.map(M=>M.name))),E=h.stringify(g)}else if("path"in u)E=u.path,h=n.find(M=>M.re.test(E)),h&&(g=h.parse(E),T=h.record.name);else{if(h=d.name?r.get(d.name):n.find(M=>M.re.test(d.path)),!h)throw cn(1,{location:u,currentLocation:d});T=h.record.name,g=te({},d.params,u.params),E=h.stringify(g)}const L=[];let R=h;for(;R;)L.unshift(R.record),R=R.parent;return{name:T,path:E,params:g,matched:L,meta:dm(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function zo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function um(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ko(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dm(t){return t.reduce((e,n)=>te(e,n.meta),{})}function qo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rl(t,e){return e.children.some(n=>n===t||rl(t,n))}const sl=/#/g,hm=/&/g,pm=/\//g,gm=/=/g,mm=/\?/g,il=/\+/g,_m=/%5B/g,vm=/%5D/g,ol=/%5E/g,ym=/%60/g,al=/%7B/g,bm=/%7C/g,cl=/%7D/g,Em=/%20/g;function Ci(t){return encodeURI(""+t).replace(bm,"|").replace(_m,"[").replace(vm,"]")}function Im(t){return Ci(t).replace(al,"{").replace(cl,"}").replace(ol,"^")}function xs(t){return Ci(t).replace(il,"%2B").replace(Em,"+").replace(sl,"%23").replace(hm,"%26").replace(ym,"`").replace(al,"{").replace(cl,"}").replace(ol,"^")}function wm(t){return xs(t).replace(gm,"%3D")}function Tm(t){return Ci(t).replace(sl,"%23").replace(mm,"%3F")}function Cm(t){return t==null?"":Tm(t).replace(pm,"%2F")}function Sr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(il," "),o=i.indexOf("="),a=Sr(o<0?i:i.slice(0,o)),c=o<0?null:Sr(i.slice(o+1));if(a in e){let l=e[a];He(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Go(t){let e="";for(let n in t){const r=t[n];if(n=wm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&xs(i)):[r&&xs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Rm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Am=Symbol(""),Jo=Symbol(""),Si=Symbol(""),ll=Symbol(""),Us=Symbol("");function mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(cn(4,{from:n,to:e})):d instanceof Error?a(d):Zg(d)?a(cn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function fs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Om(a)){const l=(a.__vccOpts||a)[e];l&&s.push(dt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Lg(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&dt(h,n,r,i,o)()}))}}return s}function Om(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yo(t){const e=Ke(Si),n=Ke(ll),r=Oe(()=>e.resolve(Xt(t.to))),s=Oe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(an.bind(null,u));if(h>-1)return h;const g=Xo(c[l-2]);return l>1&&Xo(u)===g&&d[d.length-1].path!==g?d.findIndex(an.bind(null,c[l-2])):h}),i=Oe(()=>s.value>-1&&Nm(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Zc(n.params,r.value.params));function a(c={}){return Dm(c)?e[Xt(t.replace)?"replace":"push"](Xt(t.to)).catch(Rn):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const km=Ma({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yo,setup(t,{slots:e}){const n=dn(Yo(t)),{options:r}=Ke(Si),s=Oe(()=>({[Qo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:hi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pm=km;function Dm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qo=(t,e,n)=>t??e??n,Mm=Ma({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(Us),s=Oe(()=>t.route||r.value),i=Ke(Jo,0),o=Oe(()=>{let l=Xt(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Oe(()=>s.value.matched[o.value]);cr(Jo,Oe(()=>o.value+1)),cr(Am,a),cr(Us,s);const c=Zs();return bn(()=>[c.value,a.value,t.name],([l,u,d],[h,g,E])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!an(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Zo(n.default,{Component:h,route:l});const g=d.props[u],E=g?g===!0?l.params:typeof g=="function"?g(l):g:null,L=hi(h,te({},E,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Zo(n.default,{Component:L,route:l})||L}}});function Zo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lm=Mm;function xm(t){const e=lm(t.routes,t),n=t.parseQuery||Sm,r=t.stringifyQuery||Go,s=t.history,i=mn(),o=mn(),a=mn(),c=Ql(at);let l=at;qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ls.bind(null,v=>""+v),d=ls.bind(null,Cm),h=ls.bind(null,Sr);function g(v,k){let A,x;return tl(v)?(A=e.getRecordMatcher(v),x=k):x=v,e.addRoute(x,A)}function E(v){const k=e.getRecordMatcher(v);k&&e.removeRoute(k)}function T(){return e.getRoutes().map(v=>v.record)}function L(v){return!!e.getRecordMatcher(v)}function R(v,k){if(k=te({},k||c.value),typeof v=="string"){const f=us(n,v,k.path),p=e.resolve({path:f.path},k),m=s.createHref(f.fullPath);return te(f,p,{params:h(p.params),hash:Sr(f.hash),redirectedFrom:void 0,href:m})}let A;if("path"in v)A=te({},v,{path:us(n,v.path,k.path).path});else{const f=te({},v.params);for(const p in f)f[p]==null&&delete f[p];A=te({},v,{params:d(v.params)}),k.params=d(k.params)}const x=e.resolve(A,k),X=v.hash||"";x.params=u(h(x.params));const de=Fg(r,te({},v,{hash:Im(X),path:x.path})),G=s.createHref(de);return te({fullPath:de,hash:X,query:r===Go?Rm(v.query):v.query||{}},x,{redirectedFrom:void 0,href:G})}function M(v){return typeof v=="string"?us(n,v,c.value.path):te({},v)}function P(v,k){if(l!==v)return cn(8,{from:k,to:v})}function j(v){return B(v)}function W(v){return j(te(M(v),{replace:!0}))}function Y(v){const k=v.matched[v.matched.length-1];if(k&&k.redirect){const{redirect:A}=k;let x=typeof A=="function"?A(v):A;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=M(x):{path:x},x.params={}),te({query:v.query,hash:v.hash,params:"path"in x?{}:v.params},x)}}function B(v,k){const A=l=R(v),x=c.value,X=v.state,de=v.force,G=v.replace===!0,f=Y(A);if(f)return B(te(M(f),{state:typeof f=="object"?te({},X,f.state):X,force:de,replace:G}),k||A);const p=A;p.redirectedFrom=k;let m;return!de&&Bg(r,x,A)&&(m=cn(16,{to:p,from:x}),St(x,x,!0,!1)),(m?Promise.resolve(m):V(p,x)).catch(_=>Ye(_)?Ye(_,2)?_:Me(_):ie(_,p,x)).then(_=>{if(_){if(Ye(_,2))return B(te({replace:G},M(_.to),{state:typeof _.to=="object"?te({},X,_.to.state):X,force:de}),k||p)}else _=ee(p,x,!0,G,X);return q(p,x,_),_})}function S(v,k){const A=P(v,k);return A?Promise.reject(A):Promise.resolve()}function V(v,k){let A;const[x,X,de]=Um(v,k);A=fs(x.reverse(),"beforeRouteLeave",v,k);for(const f of x)f.leaveGuards.forEach(p=>{A.push(dt(p,v,k))});const G=S.bind(null,v,k);return A.push(G),Kt(A).then(()=>{A=[];for(const f of i.list())A.push(dt(f,v,k));return A.push(G),Kt(A)}).then(()=>{A=fs(X,"beforeRouteUpdate",v,k);for(const f of X)f.updateGuards.forEach(p=>{A.push(dt(p,v,k))});return A.push(G),Kt(A)}).then(()=>{A=[];for(const f of v.matched)if(f.beforeEnter&&!k.matched.includes(f))if(He(f.beforeEnter))for(const p of f.beforeEnter)A.push(dt(p,v,k));else A.push(dt(f.beforeEnter,v,k));return A.push(G),Kt(A)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),A=fs(de,"beforeRouteEnter",v,k),A.push(G),Kt(A))).then(()=>{A=[];for(const f of o.list())A.push(dt(f,v,k));return A.push(G),Kt(A)}).catch(f=>Ye(f,8)?f:Promise.reject(f))}function q(v,k,A){for(const x of a.list())x(v,k,A)}function ee(v,k,A,x,X){const de=P(v,k);if(de)return de;const G=k===at,f=qt?history.state:{};A&&(x||G?s.replace(v.fullPath,te({scroll:G&&f&&f.scroll},X)):s.push(v.fullPath,X)),c.value=v,St(v,k,A,G),Me()}let D;function se(){D||(D=s.listen((v,k,A)=>{if(!Qn.listening)return;const x=R(v),X=Y(x);if(X){B(te(X,{replace:!0}),x).catch(Rn);return}l=x;const de=c.value;qt&&qg($o(de.fullPath,A.delta),Kr()),V(x,de).catch(G=>Ye(G,12)?G:Ye(G,2)?(B(G.to,x).then(f=>{Ye(f,20)&&!A.delta&&A.type===jn.pop&&s.go(-1,!1)}).catch(Rn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ie(G,x,de))).then(G=>{G=G||ee(x,de,!1),G&&(A.delta&&!Ye(G,8)?s.go(-A.delta,!1):A.type===jn.pop&&Ye(G,20)&&s.go(-1,!1)),q(x,de,G)}).catch(Rn)}))}let ue=mn(),he=mn(),fe;function ie(v,k,A){Me(v);const x=he.list();return x.length?x.forEach(X=>X(v,k,A)):console.error(v),Promise.reject(v)}function ne(){return fe&&c.value!==at?Promise.resolve():new Promise((v,k)=>{ue.add([v,k])})}function Me(v){return fe||(fe=!v,se(),ue.list().forEach(([k,A])=>v?A(v):k()),ue.reset()),v}function St(v,k,A,x){const{scrollBehavior:X}=t;if(!qt||!X)return Promise.resolve();const de=!A&&Gg($o(v.fullPath,0))||(x||!A)&&history.state&&history.state.scroll||null;return ti().then(()=>X(v,k,de)).then(G=>G&&Kg(G)).catch(G=>ie(G,v,k))}const Le=v=>s.go(v);let Te;const Wt=new Set,Qn={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:L,getRoutes:T,resolve:R,options:t,push:j,replace:W,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:ne,install(v){const k=this;v.component("RouterLink",Pm),v.component("RouterView",Lm),v.config.globalProperties.$router=k,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Xt(c)}),qt&&!Te&&c.value===at&&(Te=!0,j(s.location).catch(X=>{}));const A={};for(const X in at)A[X]=Oe(()=>c.value[X]);v.provide(Si,k),v.provide(ll,dn(A)),v.provide(Us,c);const x=v.unmount;Wt.add(v),v.unmount=function(){Wt.delete(v),Wt.size<1&&(l=at,D&&D(),D=null,c.value=at,Te=!1,fe=!1),x()}}};return Qn}function Kt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Um(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>an(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>an(l,c))||s.push(c))}return[n,r,s]}const Fm=[{path:"/Dev-Team/login",name:"login",meta:{layout:"empty"},component:()=>cs(()=>import("./LoginPage-2561d745.js"),[])},{path:"/Dev-Team/register",name:"register",meta:{layout:"empty"},component:()=>cs(()=>import("./RegisterPage-a4d570cb.js"),[])},{path:"/Dev-Team",name:"main",meta:{layout:"main",requiresAuth:!0},component:()=>cs(()=>import("./MainPage-f3e87076.js"),["assets/MainPage-f3e87076.js","assets/MainPage-94bf1039.css"])}],Dt=xm({linkExactActiveClass:"active",routes:Fm,history:Qg()});Dt.beforeEach((t,e,n)=>{if(t.path==="/login"&&ft.currentUser){n("/Dev-Team");return}if(t.matched.some(r=>r.meta.requiresAuth)&&!ft.currentUser){n("/Dev-Team/login");return}n()});const o_=Yf("authStore",{state:()=>({userInfo:null,errorMessage:null}),actions:{async login(t){const{email:e,password:n}=t;try{await hp(ft,e,n),this.userInfo=ft.currentUser,Dt.push("/Dev-Team")}catch(r){switch(r.code){case"auth/user-not-found":this.errorMessage="User not found";break;case"auth/wrong-password":this.errorMessage="Wrong password";break;default:this.errorMessage="Something went wrong"}setTimeout(()=>{this.errorMessage=null},3e3)}},async register(t){const{email:e,password:n}=t;try{await dp(ft,e,n),this.userInfo=ft.currentUser,Dt.push("/Dev-Team")}catch(r){switch(r.code){case"auth/email-already-in-use":this.errorMessage="Email already in use";break;case"auth/invalid-email":this.errorMessage="Invalid email";break;case"auth/operation-not-allowed":this.errorMessage="Operation not allowed";break;case"auth/weak-password":this.errorMessage="Weak password";break;default:this.errorMessage="Something went wrong"}setTimeout(()=>{this.errorMessage=null},3e3)}},async logout(){await mp(ft),this.userInfo=null,Dt.push("/Dev-Team/login")},fetchUser(){ft.onAuthStateChanged(t=>{t===null?this.userInfo=null:(this.userInfo=t,Dt.isReady()&&Dt.currentRoute.value.path==="/Dev-Team/login"&&Dt.push("/Dev-Team"))})}}});export{qm as A,t_ as B,r_ as C,Dt as D,e_ as E,Se as F,Qm as G,$m as H,Hm as I,Yf as J,Jm as T,n_ as _,Wm as a,Qa as b,Ym as c,we as d,s_ as e,Ya as f,Vm as g,zm as h,jm as i,Gm as j,Xm as k,tf as l,i_ as m,$s as n,Ga as o,Km as p,Zm as q,dn as r,Bs as s,Bm as t,o_ as u,ef as v,du as w,rn as x,Oe as y,tc as z};
