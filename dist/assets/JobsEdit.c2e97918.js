var _=Object.defineProperty,c=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var a=(s,o,e)=>o in s?_(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,r=(s,o)=>{for(var e in o||(o={}))h.call(o,e)&&a(s,e,o[e]);if(t)for(var e of t(o))b.call(o,e)&&a(s,e,o[e]);return s},n=(s,o)=>c(s,d(o));import{_ as l,d as u,r as f,o as i,c as p,w as y,a as k,i as w}from"./main.e034665e.js";import{J as v}from"./JobsEdit.cdc51437.js";const J={class:"bg-white shadow mt-4 prose max-w-none"},j={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/business/jobs/edit/${this.$route.params.job_pk}`)}},E=u(n(r({},j),{name:"JobsEdit",setup(s){return(o,e)=>{const m=f("FormLayout");return i(),p(m,{title:`Edit Job - ${o.store.props.job?o.store.props.job.name:"..."}`},{default:y(()=>[k("div",J,[o.store.processing?w("v-if",!0):(i(),p(v,{key:0}))])]),_:1},8,["title"])}}}));var B=l(E,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/business/jobs/JobsEdit.vue"]]);export{B as default};
