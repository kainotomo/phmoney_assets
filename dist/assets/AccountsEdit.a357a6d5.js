var i=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(o,t,e)=>t in o?i(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,c=(o,t)=>{for(var e in t||(t={}))d.call(t,e)&&s(o,e,t[e]);if(a)for(var e of a(t))u.call(t,e)&&s(o,e,t[e]);return o},n=(o,t)=>m(o,p(t));import{A as _}from"./AccountsEdit.616a1a23.js";import{d as l,r as h,o as f,c as w,w as y,i as k,a as A,b as C}from"./main.f659eac9.js";const $={class:"bg-white shadow mt-4 prose max-w-none"},g={async created(){await this.store.get(`/phmoney/accounts/edit/${this.$route.params.account_pk}`)}},V=l(n(c({},g),{name:"AccountsEdit",setup(o){return(t,e)=>{const r=h("FormLayout");return t.store.processing?k("",!0):(f(),w(r,{key:0,title:`Edit Account - ${t.store.props.account.name}`},{default:y(()=>[A("div",$,[C(_)])]),_:1},8,["title"]))}}}));export{V as default};