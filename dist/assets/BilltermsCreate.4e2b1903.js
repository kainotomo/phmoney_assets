var c=Object.defineProperty,_=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var a=(s,e,t)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e)=>{for(var t in e||(e={}))d.call(e,t)&&a(s,t,e[t]);if(o)for(var t of o(e))u.call(e,t)&&a(s,t,e[t]);return s},l=(s,e)=>_(s,p(e));import{_ as h,d as f,r as w,o as i,c as m,w as B,a as C,i as v}from"./main.a1aec73c.js";import{B as y}from"./BilltermsEdit.5e862466.js";const b={class:"bg-white shadow mt-4 prose max-w-none"},k={async created(){await this.store.get("http://phmoney_local.kainotomo.localhost/phmoney/business/billterms/create")}},x=f(l(r({},k),{name:"BilltermsCreate",setup(s){return(e,t)=>{const n=w("FormLayout");return i(),m(n,{title:"Create Bill Term"},{default:B(()=>[C("div",b,[e.store.processing?v("v-if",!0):(i(),m(y,{key:0}))])]),_:1})}}}));var N=h(x,[["__file","/var/www/html/src/views/business/billterms/BilltermsCreate.vue"]]);export{N as default};