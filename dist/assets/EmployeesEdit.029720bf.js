var l=Object.defineProperty,_=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var a=(s,e,o)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,p=(s,e)=>{for(var o in e||(e={}))d.call(e,o)&&a(s,o,e[o]);if(t)for(var o of t(e))y.call(e,o)&&a(s,o,e[o]);return s},m=(s,e)=>_(s,c(e));import{_ as h,d as u,r as E,o as r,c as n,w as f,a as k,i as w}from"./main.e034665e.js";import{E as v}from"./EmployeesEdit.cb322b8b.js";const $={class:"bg-white shadow mt-4 prose max-w-none"},C={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/business/employees/edit/${this.$route.params.employee_pk}`)}},b=u(m(p({},C),{name:"EmployeesEdit",setup(s){return(e,o)=>{const i=E("FormLayout");return r(),n(i,{title:`Edit Employee - ${e.store.props.employee?e.store.props.employee.name:"..."}`},{default:f(()=>[k("div",$,[e.store.processing?w("v-if",!0):(r(),n(v,{key:0}))])]),_:1},8,["title"])}}}));var F=h(b,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/business/employees/EmployeesEdit.vue"]]);export{F as default};
