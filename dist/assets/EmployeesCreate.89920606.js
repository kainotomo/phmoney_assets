var _=Object.defineProperty,i=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(s,e,o)=>e in s?_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,r=(s,e)=>{for(var o in e||(e={}))y.call(e,o)&&a(s,o,e[o]);if(t)for(var o of t(e))h.call(e,o)&&a(s,o,e[o]);return s},m=(s,e)=>i(s,l(e));import{_ as d,d as u,r as f,o as n,c as p,w as C,a as w,i as E}from"./main.e034665e.js";import{E as k}from"./EmployeesEdit.cb322b8b.js";const v={class:"bg-white shadow mt-4 prose max-w-none"},x={async created(){await this.store.get("http://phmoney_app.kainotomo.localhost/phmoney/business/employees/create")}},b=u(m(r({},x),{name:"EmployeesCreate",setup(s){return(e,o)=>{const c=f("FormLayout");return n(),p(c,{title:"Create Employee"},{default:C(()=>[w("div",v,[e.store.processing?E("v-if",!0):(n(),p(k,{key:0}))])]),_:1})}}}));var L=d(b,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/business/employees/EmployeesCreate.vue"]]);export{L as default};
