import{_ as f,r as d,o as u,g as p,a as s,b as i,k as c,p as _,i as y,w as b,n as h,e as v}from"./main.e034665e.js";const V={data(){var n,e;return{form:{name:this.store.props.billterm.name,description:this.store.props.billterm.description,type:(n=this.store.props.billterm.type)!=null?n:this.store.props.type.value,duedays:this.store.props.billterm.duedays,discountdays:this.store.props.billterm.discountdays,discount_num:(e=this.store.props.billterm.discount_num)!=null?e:0,discount_denom:this.store.props.billterm.discount_denom,cutoff:this.store.props.billterm.cutoff},discount:this.store.props.billterm.discount_num/this.store.props.billterm.discount_denom,type:this.store.props.type}},methods:{async submit(){this.form.discount_num=this.discount*1e5,this.form.discount_denom=1e5,this.$route.name==="business.billterms.create"?await this.store.post("http://phmoney_app.kainotomo.localhost/phmoney/business/billterms/store",this.form):await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/business/billterms/update/${this.$route.params.billterm_pk}`,this.form),this.$router.back()}}},x={class:"p-3 border"},k=s("div",{class:"font-semibold text-md"},"Identification",-1),g={class:"flex flex-wrap gap-2"},D=s("div",{class:"font-semibold text-md"},"Term Definition",-1),w={class:"flex flex-wrap gap-2"},E=s("option",{value:"GNC_TERM_TYPE_DAYS"},"Days",-1),C=s("option",{value:"GNC_TERM_TYPE_PROXIMO"},"Proximo",-1),T=[E,C],M={key:0},N={class:"flex gap-2 items-center justify-end mt-4"},U=s("span",{class:"material-icons-outlined"}," save ",-1);function B(n,e,P,q,o,m){const r=d("form-label"),l=d("form-input"),a=d("form-button");return u(),p("form",{onSubmit:e[7]||(e[7]=v((...t)=>m.submit&&m.submit(...t),["prevent"])),class:"p-6"},[s("div",x,[k,s("div",g,[s("div",null,[i(r,{for:"name",value:"Name*"}),i(l,{id:"name",type:"text",modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.name=t),required:""},null,8,["modelValue"])])]),D,s("div",w,[s("div",null,[i(r,{for:"description",value:"Description"}),i(l,{id:"description",type:"text",modelValue:o.form.description,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.description=t)},null,8,["modelValue"])]),s("div",null,[i(r,{for:"type",value:"Type"}),c(s("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.type=t),name:"type",id:"type",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},T,512),[[_,o.form.type]])]),s("div",null,[i(r,{for:"duedays",value:"Due Days"}),i(l,{id:"duedays",type:"number",modelValue:o.form.duedays,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.duedays=t),min:"0",required:""},null,8,["modelValue"])]),s("div",null,[i(r,{for:"discountdays",value:"Discount Days"}),i(l,{id:"discountdays",type:"number",modelValue:o.form.discountdays,"onUpdate:modelValue":e[4]||(e[4]=t=>o.form.discountdays=t),min:"0",required:""},null,8,["modelValue"])]),s("div",null,[i(r,{for:"discount",value:"Discount %"}),i(l,{id:"discount",type:"number",modelValue:o.discount,"onUpdate:modelValue":e[5]||(e[5]=t=>o.discount=t),min:"0",step:"0.01",required:""},null,8,["modelValue"])]),o.form.type==="GNC_TERM_TYPE_PROXIMO"?(u(),p("div",M,[i(r,{for:"cutoff",value:"Cutoff days"}),i(l,{id:"cutoff",type:"number",modelValue:o.form.cutoff,"onUpdate:modelValue":e[6]||(e[6]=t=>o.form.cutoff=t),min:"0",required:""},null,8,["modelValue"])])):y("v-if",!0)])]),s("div",N,[i(a,{class:h({"opacity-25":o.form.processing}),disabled:o.form.processing,title:"Save"},{default:b(()=>[U]),_:1},8,["class","disabled"])])],32)}var O=f(V,[["render",B],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/business/billterms/BilltermsEdit.vue"]]);export{O as B};
