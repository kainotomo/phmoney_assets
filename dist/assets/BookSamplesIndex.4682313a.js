var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,f=(t,e)=>{for(var s in e||(e={}))g.call(e,s)&&u(t,s,e[s]);if(c)for(var s of c(e))w.call(e,s)&&u(t,s,e[s]);return t};import{_ as v,r as l,o as n,g as i,a as r,b as m,k as x,p as S,F as k,m as B,t as A,w as _,n as C,e as $,d as L,c as V}from"./main.d1319642.js";const D={async created(){await this.store.get(`/phmoney/teams/${this.store.user.current_team_id}/samples`),this.props=f({},this.store.props)},data(){return{props:[],form:{sample:null}}},methods:{async submit(){confirm("Are you sure you want to load this sample? All existing data will be deleted.")&&(await this.store.post(`/phmoney/teams/${this.store.user.current_team_id}/samples/load`,this.form),this.store.errors===null&&(this.store.errors="Sample imported succesfully"))}}},F=r("p",{class:"text-red-500"}," Warning: This operation will overwite your database and existing data will be forever deleted. ",-1),I=["value"],M={class:"flex items-center justify-end mt-4 gap-2"},N=r("span",{class:"material-icons-outlined"},"save",-1);function j(t,e,s,p,a,d){const h=l("form-label"),b=l("form-button");return n(),i("form",{onSubmit:e[1]||(e[1]=$((...o)=>d.submit&&d.submit(...o),["prevent"])),class:"p-6"},[F,r("div",null,[m(h,{for:"sample",value:"Select a template"}),x(r("select",{id:"sample",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>a.form.sample=o),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),i(k,null,B(a.props.samples,o=>(n(),i("option",{value:o},A(o),9,I))),256))],512),[[S,a.form.sample]])]),r("div",M,[m(b,{class:C({"opacity-25":t.store.processing}),disabled:t.store.processing||a.form.sample===null,title:"Submit"},{default:_(()=>[N]),_:1},8,["class","disabled"])])],32)}var q=v(D,[["render",j]]);const z={class:"bg-white shadow mt-4 prose max-w-none"},U=L({name:"BookSamplesIndex",setup(t){return(e,s)=>{const p=l("AppLayout");return n(),V(p,{title:"Samples"},{default:_(()=>[r("div",z,[m(q)])]),_:1})}}});export{U as default};
