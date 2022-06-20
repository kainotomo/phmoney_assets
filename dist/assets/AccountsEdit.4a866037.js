import{_ as k,r as u,o as r,g as i,a as s,b as n,k as d,s as _,p as l,l as p,m as c,t as m,i as h,w as b,n as w,e as V,u as U}from"./main.e034665e.js";const C={created(){var e,t;this.form={name:this.store.props.account.name,code:this.store.props.account.code,description:this.store.props.account.description,commodity_scu:this.store.props.account.commodity.fraction,hidden:(e=this.store.props.account.hidden)!=null?e:!1,placeholder:(t=this.store.props.account.placeholder)!=null?t:!1,account_type:this.store.props.account.account_type,parent_guid:this.store.props.account.parent.guid,commodity_guid:this.store.props.account.commodity_guid}},data:function(){return{form:{name:null,code:null,description:null,commodity_scu:null,hidden:!1,placeholder:!1,account_type:null,parent_guid:null,commodity_guid:null}}},methods:{async submit(){this.$route.name==="accounts.create"?await this.store.post("http://phmoney_app.kainotomo.localhost/phmoney/accounts/store",this.form):await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/accounts/update/${this.$route.params.account_pk}`,this.form),this.store.errors||this.$router.back()}}},$={class:"flex flex-wrap gap-2"},S={class:"flex flex-wrap gap-2"},N={class:"flex flex-wrap gap-2"},A={key:0},D=["value"],B=["value"],E=U('<option value="null">Use Commodity Value</option><option value="1">1</option><option value="10">1/10</option><option value="100">1/100</option><option value="1000">1/1000</option><option value="10000">1/10000</option><option value="100000">1/100000</option><option value="1000000">1/1000000</option><option value="10000000">1/10000000</option><option value="100000000">1/100000000</option><option value="1000000000">1/1000000000</option><option value="10000000000">1/10000000000</option>',12),M=[E],T={class:"flex flex-wrap gap-2"},F=["value"],P=["value"],z={class:"flex flex-wrap gap-2 mt-4"},H=s("span",{class:"material-icons-outlined"}," save ",-1);function K(e,t,L,O,j,f){const a=u("form-label"),y=u("form-checkbox"),g=u("form-input"),v=u("form-button");return e.store.processing?h("v-if",!0):(r(),i("form",{key:0,onSubmit:t[10]||(t[10]=V((...o)=>f.submit&&f.submit(...o),["prevent"])),class:"p-6"},[s("div",$,[s("div",null,[n(a,{for:"hidden",value:"Hidden"}),n(y,{id:"hidden",checked:e.form.hidden,"onUpdate:checked":t[0]||(t[0]=o=>e.form.hidden=o)},null,8,["checked"])]),s("div",null,[n(a,{for:"placeholder",value:"Placeholder"}),n(y,{id:"placeholder",checked:e.form.placeholder,"onUpdate:checked":t[1]||(t[1]=o=>e.form.placeholder=o)},null,8,["checked"])])]),s("div",S,[s("div",null,[n(a,{for:"name",value:"Name"}),n(g,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[2]||(t[2]=o=>e.form.name=o),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),s("div",null,[n(a,{for:"code",value:"Code"}),n(g,{id:"code",type:"text",class:"mt-1 block w-full",modelValue:e.form.code,"onUpdate:modelValue":t[3]||(t[3]=o=>e.form.code=o)},null,8,["modelValue"])])]),s("div",null,[n(a,{for:"description",value:"Description"}),d(s("textarea",{"onUpdate:modelValue":t[4]||(t[4]=o=>e.form.description=o),class:"mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",id:"description"},null,512),[[_,e.form.description]])]),s("div",N,[e.store.props.account.guid?h("v-if",!0):(r(),i("div",A,[n(a,{for:"commodity_select",value:"Commodity"}),e.form.account_type=="STOCK"||e.form.account_type=="FUND"?d((r(),i("select",{key:0,id:"commodity_select","onUpdate:modelValue":t[5]||(t[5]=o=>e.form.commodity_guid=o),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(r(!0),i(p,null,c(e.store.props.securities,o=>(r(),i("option",{key:o.guid,value:o.guid},m(o.fullname),9,D))),128))],512)),[[l,e.form.commodity_guid]]):d((r(),i("select",{key:1,id:"commodity_select","onUpdate:modelValue":t[6]||(t[6]=o=>e.form.commodity_guid=o),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(r(!0),i(p,null,c(e.store.props.currencies,o=>(r(),i("option",{key:o.guid,value:o.guid},m(o.fullname),9,B))),128))],512)),[[l,e.form.commodity_guid]])])),s("div",null,[n(a,{for:"commodity_scu",value:"Smallest fraction"}),d(s("select",{id:"commodity_scu","onUpdate:modelValue":t[7]||(t[7]=o=>e.form.commodity_scu=o),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},M,512),[[l,e.form.commodity_scu]])])]),s("div",T,[s("div",null,[n(a,{for:"account_type",value:"Account Type"}),d(s("select",{id:"account_type","onUpdate:modelValue":t[8]||(t[8]=o=>e.form.account_type=o),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(r(!0),i(p,null,c(e.store.props.account_types,o=>(r(),i("option",{value:o},m(o),9,F))),256))],512),[[l,e.form.account_type]])]),s("div",null,[n(a,{for:"parent_guid",value:"Parent Account"}),d(s("select",{id:"parent_guid","onUpdate:modelValue":t[9]||(t[9]=o=>e.form.parent_guid=o),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(r(!0),i(p,null,c(e.store.props.accounts,o=>(r(),i("option",{key:o.guid,value:o.guid},m(o.name_indent),9,P))),128))],512),[[l,e.form.parent_guid]])])]),s("div",z,[n(v,{class:w({"opacity-25":e.store.processing}),disabled:e.store.processing,title:"Save"},{default:b(()=>[H]),_:1},8,["class","disabled"])])],32))}var G=k(C,[["render",K],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/accounts/AccountsEdit.vue"]]);export{G as A};
