var D=Object.defineProperty,M=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var f=(s,o,t)=>o in s?D(s,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[o]=t,g=(s,o)=>{for(var t in o||(o={}))U.call(o,t)&&f(s,t,o[t]);if(_)for(var t of _(o))Y.call(o,t)&&f(s,t,o[t]);return s},y=(s,o)=>M(s,S(o));import{_ as q,r as d,o as a,g as l,a as n,b as i,k as b,p as v,F as k,m as w,t as h,w as V,n as A,e as I,i as C,d as L,c as x}from"./main.d1319642.js";const N={data(){return{form:{post_date:this.moment().format("YYYY-MM-DD"),income_account_guid:null,expense_account_guid:null,description:null}}},methods:{async submit(){confirm("Are you sure you want to close book?")&&(await this.store.post("/phmoney/tools/closebook/store",this.form),this.$router.back())}}},E={class:"flex flex-wrap gap-2"},F=["value"],T=["value"],z={class:"flex flex-wrap gap-2 mt-4"},j=n("span",{class:"material-icons-outlined"}," save ",-1);function G(s,o,t,c,r,m){const u=d("form-label"),p=d("form-input"),B=d("form-button");return s.store.processing?C("",!0):(a(),l("form",{key:0,onSubmit:o[4]||(o[4]=I((...e)=>m.submit&&m.submit(...e),["prevent"])),class:"p-6"},[n("div",E,[n("div",null,[i(u,{for:"post_date",value:"ClosingDate"}),i(p,{id:"post_date",type:"date",modelValue:r.form.post_date,"onUpdate:modelValue":o[0]||(o[0]=e=>r.form.post_date=e),required:""},null,8,["modelValue"])]),n("div",null,[i(u,{for:"income_account_guid",value:"Income Total"}),b(n("select",{id:"income_account_guid","onUpdate:modelValue":o[1]||(o[1]=e=>r.form.income_account_guid=e),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),l(k,null,w(s.store.props.accounts,e=>(a(),l("option",{key:e.guid,value:e.guid},h(e.name_indent),9,F))),128))],512),[[v,r.form.income_account_guid]])]),n("div",null,[i(u,{for:"income_account_guid",value:"Expense Total"}),b(n("select",{id:"income_account_guid","onUpdate:modelValue":o[2]||(o[2]=e=>r.form.expense_account_guid=e),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),l(k,null,w(s.store.props.accounts,e=>(a(),l("option",{key:e.guid,value:e.guid},h(e.name_indent),9,T))),128))],512),[[v,r.form.expense_account_guid]])]),n("div",null,[i(u,{for:"description",value:"Description"}),i(p,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:r.form.description,"onUpdate:modelValue":o[3]||(o[3]=e=>r.form.description=e),autocomplete:"description"},null,8,["modelValue"])])]),n("div",z,[i(B,{class:A({"opacity-25":s.store.processing}),disabled:s.store.processing,title:"Submit"},{default:V(()=>[j]),_:1},8,["class","disabled"])])],32))}var H=q(N,[["render",G]]);const J={class:"bg-white shadow mt-4 prose max-w-none"},K={async created(){await this.store.get("/phmoney/tools/closebook")}},Q=L(y(g({},K),{name:"BookCloseIndex",setup(s){return(o,t)=>{const c=d("AppLayout");return a(),x(c,{title:"Close Book"},{default:V(()=>[n("div",J,[o.store.props.accounts?(a(),x(H,{key:0})):C("",!0)])]),_:1})}}}));export{Q as default};
