var w=Object.defineProperty,g=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,p=(t,e)=>{for(var o in e||(e={}))y.call(e,o)&&f(t,o,e[o]);if(c)for(var o of c(e))k.call(e,o)&&f(t,o,e[o]);return t},_=(t,e)=>g(t,v(e));import{_ as V,d as x,r as l,o as L,c as A,w as n,a,b as s,n as C,e as B,f as m}from"./main.a1aec73c.js";import{A as N}from"./AuthLayout.917b9da0.js";const R={class:"mt-4"},U={class:"block mt-4"},j={class:"flex items-center"},q=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),$={class:"flex items-center justify-end mt-4"},z=m(" Forgot your password? "),D=m(" Log in "),E={class:"flex items-center justify-begin mt-4"},F=m(" Don't have an account? "),M={data(){return{form:{email:"",password:"",remember:!1}}},methods:{async submit(){await this.store.post("http://phmoney_local.kainotomo.localhost/phmoney/login",this.form),this.store.errors===null&&this.$router.push({name:"dashboard"})}}},P=x(_(p({},M),{name:"AuthLogin",setup(t){return(e,o)=>{const i=l("form-label"),d=l("form-input"),h=l("form-checkbox"),u=l("RouterLink"),b=l("form-button");return L(),A(N,null,{default:n(()=>[a("form",{onSubmit:o[3]||(o[3]=B((...r)=>e.submit&&e.submit(...r),["prevent"]))},[a("div",null,[s(i,{for:"email",value:"Email"}),s(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":o[0]||(o[0]=r=>e.form.email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),a("div",R,[s(i,{for:"password",value:"Password"}),s(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":o[1]||(o[1]=r=>e.form.password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",U,[a("label",j,[s(h,{name:"remember",checked:e.form.remember,"onUpdate:checked":o[2]||(o[2]=r=>e.form.remember=r)},null,8,["checked"]),q])]),a("div",$,[s(u,{to:{name:"auth.forgot_password"},class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[z]),_:1},8,["to"]),s(b,{class:C(["ml-4",{"opacity-25":e.store.processing}]),disabled:e.store.processing},{default:n(()=>[D]),_:1},8,["class","disabled"])]),a("div",E,[s(u,{to:{name:"auth.register"},class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[F]),_:1},8,["to"])])],32)]),_:1})}}}));var H=V(P,[["__file","/var/www/html/src/views/auth/AuthLogin.vue"]]);export{H as default};