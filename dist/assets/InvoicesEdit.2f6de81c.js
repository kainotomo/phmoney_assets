var m=Object.defineProperty,d=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var i=(s,e,o)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,a=(s,e)=>{for(var o in e||(e={}))v.call(e,o)&&i(s,o,e[o]);if(t)for(var o of t(e))l.call(e,o)&&i(s,o,e[o]);return s},n=(s,e)=>d(s,_(e));import{_ as u,d as h,r as f,o as r,c,w,a as y,i as I}from"./main.a1aec73c.js";import{I as k}from"./InvoicesEdit.2e37157a.js";const E={class:"bg-white shadow mt-4 prose max-w-none"},$={async created(){await this.store.get(`http://phmoney_local.kainotomo.localhost/phmoney/business/invoices/edit/${this.$route.params.invoice_pk}`)}},g=h(n(a({},$),{name:"InvoicesEdit",setup(s){return(e,o)=>{const p=f("FormLayout");return r(),c(p,{title:`Edit ${e.store.props.invoice?e.store.getInvoiceType()+" - "+e.store.props.invoice.id:"..."}`},{default:w(()=>[y("div",E,[e.store.processing?I("v-if",!0):(r(),c(k,{key:0}))])]),_:1},8,["title"])}}}));var F=u(g,[["__file","/var/www/html/src/views/business/invoices/InvoicesEdit.vue"]]);export{F as default};
