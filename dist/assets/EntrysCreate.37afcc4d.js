var m=Object.defineProperty,l=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(o,e,t)=>e in o?m(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,c=(o,e)=>{for(var t in e||(e={}))u.call(e,t)&&i(o,t,e[t]);if(n)for(var t of n(e))_.call(e,t)&&i(o,t,e[t]);return o},p=(o,e)=>l(o,v(e));import{_ as d,d as h,r as f,o as s,c as r,w as E,a as w,i as a}from"./main.a1aec73c.js";import{E as C,a as k,b as g}from"./EntrysEditVoucher.ed504179.js";const I={class:"bg-white shadow mt-4 prose max-w-none"},B={async created(){await this.store.get(`http://phmoney_local.kainotomo.localhost/phmoney/business/invoices/${this.$route.params.invoice_pk}/entrys/create`)}},b=h(p(c({},B),{name:"EntrysCreate",setup(o){return(e,t)=>{const y=f("FormLayout");return s(),r(y,{title:`Create ${e.store.props.invoice?e.store.getInvoiceType()+" Entry":"..."}`},{default:E(()=>[w("div",I,[e.store.getInvoiceType()==="Invoice"?(s(),r(C,{key:0})):a("v-if",!0),e.store.getInvoiceType()==="Bill"?(s(),r(k,{key:1})):a("v-if",!0),e.store.getInvoiceType()==="Voucher"?(s(),r(g,{key:2})):a("v-if",!0)])]),_:1},8,["title"])}}}));var F=d(b,[["__file","/var/www/html/src/views/business/invoices/entrys/EntrysCreate.vue"]]);export{F as default};