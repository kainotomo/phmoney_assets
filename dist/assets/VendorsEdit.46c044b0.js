import{_ as b,r as u,o as n,g as a,a as o,b as s,k as i,s as g,p as m,F as f,m as v,t as _,w as V,n as h,e as k}from"./main.e98d045c.js";const U={data(){return{form:{id:this.store.props.vendor.id,name:this.store.props.vendor.name,active:this.store.props.vendor.active,addr_name:this.store.props.vendor.addr_name,addr_addr1:this.store.props.vendor.addr_addr1,addr_addr2:this.store.props.vendor.addr_addr2,addr_addr3:this.store.props.vendor.addr_addr3,addr_addr4:this.store.props.vendor.addr_addr4,addr_phone:this.store.props.vendor.addr_phone,addr_fax:this.store.props.vendor.addr_fax,addr_email:this.store.props.vendor.addr_email,notes:this.store.props.vendor.notes,currency:this.store.props.vendor.currency,terms:this.store.props.vendor.terms,tax_inc:this.store.props.vendor.tax_inc,tax_override:this.store.props.vendor.tax_override,tax_table:this.store.props.vendor.tax_table}}},methods:{async submit(){this.$route.name==="business.vendors.create"?await this.store.post("/phmoney/business/vendors/store",this.form):await this.store.post(`/phmoney/business/vendors/update/${this.$route.params.vendor_pk}`,this.form),this.$router.back()}}},w={class:"p-3 border"},N=o("div",{class:"font-bold text-lg"},"Vendor",-1),A=o("div",{class:"font-semibold text-md"},"Identification",-1),B={class:"flex flex-wrap gap-2"},T=o("div",{class:"font-semibold text-md"},"Billing Address",-1),C={class:"flex flex-wrap gap-2"},S=o("div",{class:"font-semibold text-md"},"Notes",-1),E={class:"flex flex-wrap gap-2"},F={class:"p-3 mt-6 border"},I=o("div",{class:"font-bold text-lg"},"Billing Information",-1),M={class:"flex flex-wrap gap-2"},q=["value"],D=["value"],j=o("option",{value:"3"},"- Use Global -",-1),z=o("option",{value:"1"},"Yes",-1),G=o("option",{value:"2"},"No",-1),L=[j,z,G],P=["value"],Y={class:"flex gap-2 items-center justify-end mt-4"},H=o("span",{class:"material-icons-outlined"}," save ",-1);function J(p,d,K,O,r,c){const l=u("form-label"),t=u("form-input"),x=u("form-checkbox"),y=u("form-button");return n(),a("div",null,[o("form",{onSubmit:d[16]||(d[16]=k((...e)=>c.submit&&c.submit(...e),["prevent"])),class:"p-6"},[o("div",w,[N,A,o("div",B,[o("div",null,[s(l,{for:"id",value:"Number"}),s(t,{id:"id",type:"text",modelValue:r.form.id,"onUpdate:modelValue":d[0]||(d[0]=e=>r.form.id=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"name",value:"Name*"}),s(t,{id:"name",type:"text",modelValue:r.form.name,"onUpdate:modelValue":d[1]||(d[1]=e=>r.form.name=e),required:""},null,8,["modelValue"])]),o("div",null,[s(l,{for:"active",value:"Active"}),s(x,{id:"active",checked:r.form.active,"onUpdate:checked":d[2]||(d[2]=e=>r.form.active=e)},null,8,["checked"])])]),T,o("div",C,[o("div",null,[s(l,{for:"addr_name",value:"Name"}),s(t,{id:"addr_name",type:"text",modelValue:r.form.addr_name,"onUpdate:modelValue":d[3]||(d[3]=e=>r.form.addr_name=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_addr1",value:"Address 1"}),s(t,{id:"addr_addr1",type:"text",modelValue:r.form.addr_addr1,"onUpdate:modelValue":d[4]||(d[4]=e=>r.form.addr_addr1=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_addr2",value:"Address 2"}),s(t,{id:"addr_addr2",type:"text",modelValue:r.form.addr_addr2,"onUpdate:modelValue":d[5]||(d[5]=e=>r.form.addr_addr2=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_addr3",value:"Address 3"}),s(t,{id:"addr_addr3",type:"text",modelValue:r.form.addr_addr3,"onUpdate:modelValue":d[6]||(d[6]=e=>r.form.addr_addr3=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_addr4",value:"Address 4"}),s(t,{id:"addr_addr4",type:"text",modelValue:r.form.addr_addr4,"onUpdate:modelValue":d[7]||(d[7]=e=>r.form.addr_addr4=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_phone",value:"Phone"}),s(t,{id:"addr_phone",type:"text",modelValue:r.form.addr_phone,"onUpdate:modelValue":d[8]||(d[8]=e=>r.form.addr_phone=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_fax",value:"Fax"}),s(t,{id:"addr_fax",type:"text",modelValue:r.form.addr_fax,"onUpdate:modelValue":d[9]||(d[9]=e=>r.form.addr_fax=e)},null,8,["modelValue"])]),o("div",null,[s(l,{for:"addr_email",value:"Email"}),s(t,{id:"addr_email",type:"text",modelValue:r.form.addr_email,"onUpdate:modelValue":d[10]||(d[10]=e=>r.form.addr_email=e)},null,8,["modelValue"])])]),S,o("div",E,[o("div",null,[i(o("textarea",{"onUpdate:modelValue":d[11]||(d[11]=e=>r.form.notes=e),class:"mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",id:"notes",name:"notes"},null,512),[[g,r.form.notes]])])])]),o("div",F,[I,o("div",M,[o("div",null,[s(l,{for:"currency",value:"Currency"}),i(o("select",{id:"currency","onUpdate:modelValue":d[12]||(d[12]=e=>r.form.currency=e),required:"",class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),a(f,null,v(p.store.props.currencies,e=>(n(),a("option",{key:e.guid,value:e.guid},_(e.fullname),9,q))),128))],512),[[m,r.form.currency]])]),o("div",null,[s(l,{for:"terms",value:"Terms"}),i(o("select",{id:"terms","onUpdate:modelValue":d[13]||(d[13]=e=>r.form.terms=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),a(f,null,v(p.store.props.billterms,e=>(n(),a("option",{key:e.guid,value:e.guid},_(e.name),9,D))),128))],512),[[m,r.form.terms]])]),o("div",null,[s(l,{for:"tax_inc",value:"Tax Included"}),i(o("select",{id:"tax_inc","onUpdate:modelValue":d[14]||(d[14]=e=>r.form.tax_inc=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},L,512),[[m,r.form.tax_inc]])]),o("div",null,[s(l,{for:"tax_table",value:"Tax Table"}),i(o("select",{id:"terms","onUpdate:modelValue":d[15]||(d[15]=e=>r.form.tax_table=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),a(f,null,v(p.store.props.taxtables,e=>(n(),a("option",{key:e.guid,value:e.guid},_(e.name),9,P))),128))],512),[[m,r.form.tax_table]])])])]),o("div",Y,[s(y,{class:h({"opacity-25":r.form.processing}),disabled:r.form.processing,title:"Save"},{default:V(()=>[H]),_:1},8,["class","disabled"])])],32)])}var R=b(U,[["render",J]]);export{R as V};
