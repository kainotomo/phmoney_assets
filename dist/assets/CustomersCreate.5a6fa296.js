var _=Object.defineProperty,u=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var a=(s,e,t)=>e in s?_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e)=>{for(var t in e||(e={}))l.call(e,t)&&a(s,t,e[t]);if(o)for(var t of o(e))C.call(e,t)&&a(s,t,e[t]);return s},m=(s,e)=>u(s,p(e));import{_ as d,d as h,r as f,o as n,c,w,a as v,i as y}from"./main.a1aec73c.js";import{C as k}from"./CustomersEdit.7c383a5c.js";const x={class:"bg-white shadow mt-4 prose max-w-none"},b={async created(){await this.store.get("http://phmoney_local.kainotomo.localhost/phmoney/business/customers/create")}},g=h(m(r({},b),{name:"CustomersCreate",setup(s){return(e,t)=>{const i=f("FormLayout");return n(),c(i,{title:"Create Customer"},{default:w(()=>[v("div",x,[e.store.processing?y("v-if",!0):(n(),c(k,{key:0}))])]),_:1})}}}));var N=d(g,[["__file","/var/www/html/src/views/business/customers/CustomersCreate.vue"]]);export{N as default};