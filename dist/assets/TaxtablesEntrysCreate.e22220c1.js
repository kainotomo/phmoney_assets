var p=Object.defineProperty,_=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,r=(a,e)=>{for(var t in e||(e={}))d.call(e,t)&&o(a,t,e[t]);if(s)for(var t of s(e))u.call(e,t)&&o(a,t,e[t]);return a},n=(a,e)=>_(a,l(e));import{T as x}from"./TaxtablesEntrysEdit.7b8f3991.js";import{d as y,r as b,o as c,c as m,w as h,a as f,i as w}from"./main.d1319642.js";const C={class:"bg-white shadow mt-4 prose max-w-none"},T={async created(){await this.store.get(`/phmoney/business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/create`)}},B=y(n(r({},T),{name:"TaxtablesEntrysCreate",setup(a){return(e,t)=>{const i=b("FormLayout");return c(),m(i,{title:"Create Tax Table Entry"},{default:h(()=>[f("div",C,[e.store.processing?w("",!0):(c(),m(x,{key:0}))])]),_:1})}}}));export{B as default};
