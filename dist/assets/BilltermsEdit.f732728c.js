var p=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,a=(o,e)=>{for(var t in e||(e={}))_.call(e,t)&&r(o,t,e[t]);if(s)for(var t of s(e))u.call(e,t)&&r(o,t,e[t]);return o},i=(o,e)=>c(o,d(e));import{B as h}from"./BilltermsEdit.823cd615.js";import{d as f,r as b,o as m,c as n,w,a as B,i as y}from"./main.769fda87.js";const k={class:"bg-white shadow mt-4 prose max-w-none"},C={async created(){await this.store.get(`/phmoney/business/billterms/edit/${this.$route.params.billterm_pk}`)}},E=f(i(a({},C),{setup(o){return(e,t)=>{const l=b("FormLayout");return m(),n(l,{title:`Edit Bill Term - ${e.store.props.billterm?e.store.props.billterm.name:"..."}`},{default:w(()=>[B("div",k,[e.store.processing?y("",!0):(m(),n(h,{key:0}))])]),_:1},8,["title"])}}}));export{E as default};