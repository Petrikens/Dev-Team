import{_ as m,r,o as u,c as g,a,b as e,w as h,d as f,F as w,e as v,p as b,f as x}from"./index-cefbbf40.js";const y={name:"LoginPage",data(){return{handleEmail:"",handlePassword:"",errorMessage:""}},methods:{async doLogin(){try{await this.$store.dispatch("authModule/login",{email:this.handleEmail,password:this.handlePassword})}catch(o){switch(o.code){case"auth/user-not-found":this.errorMessage="User not found";break;case"auth/wrong-password":this.errorMessage="Wrong password";break;default:this.errorMessage="Something went wrong"}this.$toast.add({severity:"warn",summary:"Warning",detail:this.errorMessage,life:3e3})}}}},l=o=>(b("data-v-da64a47b"),o=o(),x(),o),P=l(()=>e("div",{class:"nav_top_login_form_t"},"Sign In",-1)),S={class:"nav_top_login_form_line"},V={class:"p-float-label"},I=l(()=>e("label",{for:"login"},"Email",-1)),M={class:"nav_top_login_form_line"},k={class:"p-float-label"},E=l(()=>e("label",{for:"pasword"},"Password",-1)),L={class:"nav_top_login_form_line"};function T(o,s,B,U,n,d){const _=r("Toast"),i=r("InputText"),p=r("Button"),c=r("router-link");return u(),g(w,null,[a(_),P,e("form",{class:"lf",onSubmit:s[2]||(s[2]=h((...t)=>d.doLogin&&d.doLogin(...t),["prevent"])),method:"POST"},[e("div",S,[e("span",V,[a(i,{id:"login",type:"text",modelValue:n.handleEmail,"onUpdate:modelValue":s[0]||(s[0]=t=>n.handleEmail=t)},null,8,["modelValue"]),I])]),e("div",M,[e("span",k,[a(i,{id:"pasword",type:"password",modelValue:n.handlePassword,"onUpdate:modelValue":s[1]||(s[1]=t=>n.handlePassword=t)},null,8,["modelValue"]),E])]),e("div",L,[a(p,{type:"submit",label:"Sign In"})])],32),a(c,{to:"/register"},{default:f(()=>[v("Sign Up")]),_:1})],64)}const C=m(y,[["render",T],["__scopeId","data-v-da64a47b"]]);export{C as default};