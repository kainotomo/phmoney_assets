var c=Object.defineProperty,_=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,r=(o,e)=>{for(var t in e||(e={}))h.call(e,t)&&a(o,t,e[t]);if(s)for(var t of s(e))d.call(e,t)&&a(o,t,e[t]);return o},m=(o,e)=>_(o,p(e));import{_ as u,d as f,r as B,o as n,c as i,w as y,a as C,i as w}from"./main.e034665e.js";import{B as k}from"./BilltermsEdit.89f81614.js";const v={class:"bg-white shadow mt-4 prose max-w-none"},b={async created(){await this.store.get("http://phmoney_app.kainotomo.localhost/phmoney/business/billterms/create")}},x=f(m(r({},b),{name:"BilltermsCreate",setup(o){return(e,t)=>{const l=B("FormLayout");return n(),i(l,{title:"Create Bill Term"},{default:y(()=>[C("div",v,[e.store.processing?w("v-if",!0):(n(),i(k,{key:0}))])]),_:1})}}}));var N=u(x,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/business/billterms/BilltermsCreate.vue"]]);export{N as default};
