var v=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(a,e,o)=>e in a?v(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,p=(a,e)=>{for(var o in e||(e={}))g.call(e,o)&&f(a,o,e[o]);if(u)for(var o of u(e))k.call(e,o)&&f(a,o,e[o]);return a},c=(a,e)=>b(a,y(e));import{_ as V,d as A,r as m,o as R,c as x,w as i,a as r,b as s,n as C,e as U,f as d}from"./main.a1aec73c.js";import{A as q}from"./AuthLayout.917b9da0.js";const N={class:"mt-4"},P={class:"mt-4"},B={class:"mt-4"},L={class:"mt-4"},S={class:"flex items-center"},T=r("div",{class:"ml-2"},[d(" I agree to the "),r("a",{target:"_blank",href:"route('terms.show')",class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service"),d(" and "),r("a",{target:"_blank",href:"route('policy.show')",class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy")],-1),$={class:"flex items-center justify-end mt-4"},j=d(" Already registered? "),z=d(" Register "),E={data(){return{form:{name:"",email:"",password:"",password_confirmation:"",terms:!1,captcha_token:""}}},methods:{async submit(){await this.store.post("http://phmoney_local.kainotomo.localhost/phmoney/register",this.form),console.log(this.store.errors),this.store.errors===null&&this.$router.push({name:"dashboard"})}}},I=A(c(p({},E),{name:"AuthRegister",setup(a){return(e,o)=>{const l=m("form-label"),n=m("form-input"),_=m("form-checkbox"),h=m("RouterLink"),w=m("form-button");return R(),x(q,null,{default:i(()=>[r("form",{onSubmit:o[5]||(o[5]=U((...t)=>e.submit&&e.submit(...t),["prevent"]))},[r("div",null,[s(l,{for:"name",value:"Name"}),s(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.name=t),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),r("div",N,[s(l,{for:"email",value:"Email"}),s(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.email=t),required:"",autocomplete:"username"},null,8,["modelValue"])]),r("div",P,[s(l,{for:"password",value:"Password"}),s(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",B,[s(l,{for:"password_confirmation",value:"Confirm Password"}),s(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e.form.password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",L,[s(l,{for:"terms"},{default:i(()=>[r("div",S,[s(_,{name:"terms",id:"terms",checked:e.form.terms,"onUpdate:checked":o[4]||(o[4]=t=>e.form.terms=t)},null,8,["checked"]),T])]),_:1})]),r("div",$,[s(h,{href:"login",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[j]),_:1}),s(w,{class:C(["ml-4",{"opacity-25":e.store.processing}]),disabled:e.store.processing},{default:i(()=>[z]),_:1},8,["class","disabled"])])],32)]),_:1})}}}));var G=V(I,[["__file","/var/www/html/src/views/auth/AuthRegister.vue"]]);export{G as default};
