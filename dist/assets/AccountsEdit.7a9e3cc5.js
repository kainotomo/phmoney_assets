var i=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var a=(e,o,t)=>o in e?i(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,c=(e,o)=>{for(var t in o||(o={}))_.call(o,t)&&a(e,t,o[t]);if(s)for(var t of s(o))u.call(o,t)&&a(e,t,o[t]);return e},n=(e,o)=>p(e,m(o));import{_ as d,d as h,r as l,o as f,c as y,w,i as k,a as v,b as A}from"./main.1ad63e49.js";import{A as E}from"./AccountsEdit.5e4d0ae8.js";const $={class:"bg-white shadow mt-4 prose max-w-none"},C={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/accounts/edit/${this.$route.params.account_pk}`)}},g=h(n(c({},C),{name:"AccountsEdit",setup(e){return(o,t)=>{const r=l("FormLayout");return o.store.processing?k("v-if",!0):(f(),y(r,{key:0,title:`Edit Account - ${o.store.props.account.name}`},{default:w(()=>[v("div",$,[A(E)])]),_:1},8,["title"]))}}}));var V=d(g,[["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/views/accounts/AccountsEdit.vue"]]);export{V as default};
