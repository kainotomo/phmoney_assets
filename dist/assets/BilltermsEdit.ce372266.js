var p=Object.defineProperty,c=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,a=(s,e)=>{for(var t in e||(e={}))d.call(e,t)&&r(s,t,e[t]);if(o)for(var t of o(e))u.call(e,t)&&r(s,t,e[t]);return s},i=(s,e)=>c(s,_(e));import{_ as h,d as f,r as w,o as l,c as m,w as B,a as b,i as v}from"./main.a1aec73c.js";import{B as y}from"./BilltermsEdit.5e862466.js";const k={class:"bg-white shadow mt-4 prose max-w-none"},E={async created(){await this.store.get(`http://phmoney_local.kainotomo.localhost/phmoney/business/billterms/edit/${this.$route.params.billterm_pk}`)}},$=f(i(a({},E),{name:"BilltermsEdit",setup(s){return(e,t)=>{const n=w("FormLayout");return l(),m(n,{title:`Edit Bill Term - ${e.store.props.billterm?e.store.props.billterm.name:"..."}`},{default:B(()=>[b("div",k,[e.store.processing?v("v-if",!0):(l(),m(y,{key:0}))])]),_:1},8,["title"])}}}));var F=h($,[["__file","/var/www/html/src/views/business/billterms/BilltermsEdit.vue"]]);export{F as default};
