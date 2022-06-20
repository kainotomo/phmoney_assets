var C=Object.defineProperty,B=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(o,e,r)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,_=(o,e)=>{for(var r in e||(e={}))v.call(e,r)&&y(o,r,e[r]);if(i)for(var r of i(e))D.call(e,r)&&y(o,r,e[r]);return o},h=(o,e)=>B(o,w(e));import{_ as k,r as d,o as m,g as u,a as t,t as l,i as g,l as R,m as b,b as a,w as c,f as L,d as V,c as f,k as $,p as N}from"./main.e034665e.js";const T={},S={class:"p-6"},F={class:"text-center"},E={key:0},M=t("thead",null,[t("th",null,"Date"),t("th",null,"Due Date"),t("th",null,"Reference"),t("th",null,"Type"),t("th",null,"Description"),t("th",null,"Sale"),t("th",null,"Tax"),t("th",null,"Debits"),t("th",null,"Credits"),t("th",null,"Balance")],-1),P=t("th",null,"Period Totals",-1),U=t("th",{colspan:"4"},null,-1);function j(o,e){const r=d("RouterLink"),n=d("amount-financial");return m(),u("div",S,[t("h2",F,l(o.store.props.company)+" "+l(o.store.props.title)+" From "+l(o.store.convert_date(o.store.props.date_start))+" to "+l(o.store.convert_date(o.store.props.date_end)),1),o.store.report_settings.params.customer!==null?(m(),u("h3",E,l(o.store.report_settings.params.customer.name),1)):g("v-if",!0),t("table",null,[M,t("tbody",null,[(m(!0),u(R,null,b(o.store.props.invoices,s=>(m(),u("tr",{key:s.guid},[t("td",null,l(o.store.convert_date(s.date_opened)),1),t("td",null,l(s.due_date),1),t("td",null,[a(r,{to:{name:"business.invoices.entrys.index",params:{invoice_pk:s.pk}}},{default:c(()=>[L(l(s.id),1)]),_:2},1032,["to"])]),t("td",null,l(s.type),1),t("td",null,l(s.notes),1),t("td",null,[a(n,{amount:s.sale,commodity:s.commodity},null,8,["amount","commodity"])]),t("td",null,[a(n,{amount:s.tax,commodity:s.commodity},null,8,["amount","commodity"])]),t("td",null,[a(n,{amount:s.debits,commodity:s.commodity},null,8,["amount","commodity"])]),t("td",null,[a(n,{amount:s.credits,commodity:s.commodity},null,8,["amount","commodity"])]),t("td",null,[a(n,{amount:s.balance,commodity:s.commodity},null,8,["amount","commodity"])])]))),128))]),t("tfoot",null,[P,U,t("th",null,[a(n,{amount:o.store.props.totals.sale,commodity:o.store.props.currency},null,8,["amount","commodity"])]),t("th",null,[a(n,{amount:o.store.props.totals.tax,commodity:o.store.props.currency},null,8,["amount","commodity"])]),t("th",null,[a(n,{amount:o.store.props.totals.debits,commodity:o.store.props.currency},null,8,["amount","commodity"])]),t("th",null,[a(n,{amount:o.store.props.totals.credits,commodity:o.store.props.currency},null,8,["amount","commodity"])]),t("th",null,[a(n,{amount:o.store.props.totals.balance,commodity:o.store.props.currency},null,8,["amount","commodity"])])])])])}var q=k(T,[["render",j],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/reports/ReportsBusinessCustomerReport.vue"]]);const z={class:"flex gap-2"},A=["value"],G={class:"bg-white shadow mt-4 prose max-w-none"},H={data(){return{extra_params:{customer:null}}}},I=V(h(_({},H),{name:"ReportsBusinessCustomerReport",setup(o){return(e,r)=>{const n=d("form-label"),s=d("ReportLayout");return m(),f(s,{title:"Customer Report",extra_params:e.extra_params,show_accounts:!1},{settings:c(()=>[t("div",z,[t("div",null,[a(n,{for:"customer",value:"Customer"}),$(t("select",{id:"customer","onUpdate:modelValue":r[0]||(r[0]=p=>e.store.report_settings.params.customer=p),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(m(!0),u(R,null,b(e.store.props.customers,p=>(m(),u("option",{key:p.pk,value:p},l(p.name),9,A))),128))],512),[[N,e.store.report_settings.params.customer]])])])]),default:c(()=>[t("div",G,[e.store.props.currency&&!e.store.processing?(m(),f(q,{key:0})):g("v-if",!0)])]),_:1},8,["extra_params"])}}}));var O=k(I,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/reports/ReportsBusinessCustomerReport.vue"]]);export{O as default};
