var c=Object.defineProperty,l=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,r=(a,t)=>{for(var e in t||(t={}))_.call(t,e)&&o(a,e,t[e]);if(s)for(var e of s(t))u.call(t,e)&&o(a,e,t[e]);return a},n=(a,t)=>l(a,d(t));import{T as y}from"./TaxtablesEntrysEdit.7b8f3991.js";import{d as b,r as x,o as i,c as p,w as h,a as f,i as w}from"./main.d1319642.js";const E={class:"bg-white shadow mt-4 prose max-w-none"},$={async created(){await this.store.get(`/phmoney/business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/edit/${this.$route.params.entry_pk}`)}},g=b(n(r({},$),{name:"TaxtablesEntrysEdit",setup(a){return(t,e)=>{const m=x("FormLayout");return i(),p(m,{title:`Edit Tax Table Entry - ${t.store.props.taxtableentry?t.store.props.taxtableentry.tax_account.name:"..."}`},{default:h(()=>[f("div",E,[t.store.processing?w("",!0):(i(),p(y,{key:0}))])]),_:1},8,["title"])}}}));export{g as default};
