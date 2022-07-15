var P=Object.defineProperty,q=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(o,e,l)=>e in o?P(o,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[e]=l,y=(o,e)=>{for(var l in e||(e={}))A.call(e,l)&&T(o,l,e[l]);if(x)for(var l of x(e))R.call(e,l)&&T(o,l,e[l]);return o},f=(o,e)=>q(o,w(e));import{_ as k,r as u,o as i,g as n,a as t,i as c,b as p,w as v,l as I,m as C,t as d,c as h,d as D,n as B}from"./main.1ad63e49.js";const V={emits:["reload","destroy"],methods:{subtotal(o){let e=o.quantity_num/o.quantity_denom*(o.i_price_num/o.i_price_denom),l=o.i_discount_num/o.i_discount_denom,a=this.tax(o);if(o.i_taxincluded){if(o.i_disc_type==="VALUE")return e-l-a;if(o.i_disc_type==="PERCENT")return e-e*l/100-a}else{if(o.i_disc_type==="VALUE")return e-l;if(o.i_disc_type==="PERCENT")return e-e*l/100}},tax(o){if(o.invoice_taxtable==null||!o.i_taxable)return 0;let e=0;for(let l=0;l<o.invoice_taxtable.entries.length;l++){const a=o.invoice_taxtable.entries[l];let _=a.amount_num/a.amount_denom;if(a.type==2){let r=o.quantity_num/o.quantity_denom*(o.i_price_num/o.i_price_denom);e=e+r*_/100}else e=e+_}return e}}},L={class:"p-6 overflow-x-auto"},j=t("th",null,"Date",-1),N=t("th",null,"Description",-1),U=t("th",null,"Action",-1),S=t("th",null,"Income Account",-1),F=t("th",null,"Quantity",-1),Q=t("th",null,"Unit Price",-1),J=t("th",null,"Discount Type",-1),z=t("th",null,"Discount How",-1),H=t("th",null,"Discount",-1),O=t("th",null,"Taxable?",-1),G=t("th",null,"Tax Included?",-1),K=t("th",null,"Tax Table",-1),M=t("th",null,"Subtotal",-1),W=t("th",null,"Tax",-1),X={key:0},Y=t("span",{class:"material-icons-outlined"},"add",-1),Z={key:0},tt=t("span",{class:"material-icons-outlined"},"check_circle",-1),ot=[tt],et={key:1},st={key:2},it=t("span",{class:"material-icons-outlined"},"check_circle",-1),nt=[it],lt={key:3},dt={key:4},at={key:5},ct={key:6},rt={key:7},_t={class:"flex"},ut=t("span",{class:"material-icons-outlined"},"edit",-1),pt=["onClick"],mt=t("span",{class:"material-icons-outlined"},"delete",-1),ht=[mt];function vt(o,e,l,a,_,r){const b=u("form-button"),m=u("amount-financial"),$=u("RouterLink"),g=u("Pagination");return i(),n("div",L,[t("table",null,[t("thead",null,[t("tr",null,[j,N,U,S,F,Q,J,z,H,O,G,K,M,W,o.store.props.invoice.date_posted?(i(),n("th",X)):c("v-if",!0),t("th",null,[p(b,{onClick:e[0]||(e[0]=s=>o.$router.push({name:"business.invoices.entrys.create",params:{invoice_pk:o.store.props.invoice.pk}})),title:"Add New"},{default:v(()=>[Y]),_:1})])])]),t("tbody",null,[(i(!0),n(I,null,C(o.store.props.entrys.data,s=>(i(),n("tr",{key:s.guid},[t("td",null,d(o.store.convert_date(s.date)),1),t("td",null,d(s.description),1),t("td",null,d(s.action),1),t("td",null,d(s.invoice_account.name),1),t("td",null,d(s.quantity_num/s.quantity_denom),1),t("td",null,d(s.i_price_num/s.i_price_denom),1),t("td",null,d(s.i_disc_type),1),t("td",null,d(s.i_disc_how),1),t("td",null,d(s.i_discount_num/s.i_discount_denom),1),s.i_taxable?(i(),n("td",Z,ot)):(i(),n("td",et)),s.i_taxincluded?(i(),n("td",st,nt)):(i(),n("td",lt)),s.invoice_taxtable?(i(),n("td",dt,d(s.invoice_taxtable.name),1)):(i(),n("td",at)),t("td",null,[p(m,{amount:r.subtotal(s),commodity:s.invoice_account.commodity},null,8,["amount","commodity"])]),t("td",null,[p(m,{amount:r.tax(s),commodity:s.invoice_account.commodity},null,8,["amount","commodity"])]),o.store.props.invoice.date_posted?(i(),n("td",ct)):(i(),n("td",rt,[t("div",_t,[p($,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.invoices.entrys.edit",params:{invoice_pk:o.store.props.invoice.pk,entry_pk:s.pk}},title:"Edit"},{default:v(()=>[ut]),_:2},1032,["to"]),t("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:E=>o.$emit("destroy",s),title:"Delete"},ht,8,pt)])]))]))),128))]),t("tfoot",null,[o.store.props.entrys.total>o.store.props.entrys.per_page?(i(),h(g,{key:0,current:o.store.props.entrys.current_page,total:o.store.props.entrys.total,"per-page":o.store.props.entrys.per_page,onPageChanged:o.load},null,8,["current","total","per-page","onPageChanged"])):c("v-if",!0)])])])}var bt=k(V,[["render",vt],["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/components/business/invoices/entrys/EntrysInvoicesIndex.vue"]]);const $t={emits:["reload","destroy"],methods:{subtotal(o){let e=o.quantity_num/o.quantity_denom*(o.b_price_num/o.b_price_denom),l=this.tax(o);return o.b_taxincluded?e-l:e},tax(o){if(o.bill_taxtable==null||!o.b_taxable)return 0;let e=0;for(let l=0;l<o.bill_taxtable.entries.length;l++){const a=o.bill_taxtable.entries[l];let _=a.amount_num/a.amount_denom;if(a.type==2){let r=o.quantity_num/o.quantity_denom*(o.b_price_num/o.b_price_denom);e=e+r*_/100}else e=e+_}return e}}},gt={class:"p-6 overflow-x-auto"},kt=t("th",null,"Date",-1),yt=t("th",null,"Description",-1),ft=t("th",null,"Action",-1),It=t("th",null,"Expense Account",-1),Ct=t("th",null,"Quantity",-1),Et=t("th",null,"Unit Price",-1),xt=t("th",null,"Taxable?",-1),Tt=t("th",null,"Tax Included?",-1),Dt=t("th",null,"Tax Table",-1),Pt=t("th",null,"Billable",-1),qt=t("th",null,"Subtotal",-1),wt=t("th",null,"Tax",-1),At={key:0},Rt=t("span",{class:"material-icons-outlined"},"add",-1),Bt={key:0},Vt=t("span",{class:"material-icons-outlined"},"check_circle",-1),Lt=[Vt],jt={key:1},Nt={key:2},Ut=t("span",{class:"material-icons-outlined"},"check_circle",-1),St=[Ut],Ft={key:3},Qt={key:4},Jt={key:5},zt={key:6},Ht=t("span",{class:"material-icons-outlined"},"check_circle",-1),Ot=[Ht],Gt={key:7},Kt={key:8},Mt={key:9},Wt={class:"flex"},Xt=t("span",{class:"material-icons-outlined"},"edit",-1),Yt=["onClick"],Zt=t("span",{class:"material-icons-outlined"},"delete",-1),to=[Zt];function oo(o,e,l,a,_,r){const b=u("form-button"),m=u("amount-financial"),$=u("RouterLink"),g=u("Pagination");return i(),n("div",gt,[t("table",null,[t("thead",null,[t("tr",null,[kt,yt,ft,It,Ct,Et,xt,Tt,Dt,Pt,qt,wt,o.store.props.invoice.date_posted?(i(),n("th",At)):c("v-if",!0),t("th",null,[p(b,{onClick:e[0]||(e[0]=s=>o.$router.push({name:"business.invoices.entrys.create",params:{invoice_pk:o.store.props.invoice.pk}})),title:"Add New"},{default:v(()=>[Rt]),_:1})])])]),t("tbody",null,[(i(!0),n(I,null,C(o.store.props.entrys.data,s=>(i(),n("tr",{key:s.guid},[t("td",null,d(o.store.convert_date(s.date)),1),t("td",null,d(s.description),1),t("td",null,d(s.action),1),t("td",null,d(s.bill_account.name),1),t("td",null,d(s.quantity_num/s.quantity_denom),1),t("td",null,d(s.b_price_num/s.b_price_denom),1),s.b_taxable?(i(),n("td",Bt,Lt)):(i(),n("td",jt)),s.b_taxincluded?(i(),n("td",Nt,St)):(i(),n("td",Ft)),s.bill_taxtable?(i(),n("td",Qt,d(s.bill_taxtable.name),1)):(i(),n("td",Jt)),s.billable?(i(),n("td",zt,Ot)):(i(),n("td",Gt)),t("td",null,[p(m,{amount:r.subtotal(s),commodity:s.bill_account.commodity},null,8,["amount","commodity"])]),t("td",null,[p(m,{amount:r.tax(s),commodity:s.bill_account.commodity},null,8,["amount","commodity"])]),o.store.props.invoice.date_posted?(i(),n("td",Kt)):(i(),n("td",Mt,[t("div",Wt,[p($,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.invoices.entrys.edit",params:{invoice_pk:o.store.props.invoice.pk,entry_pk:s.pk}},title:"Edit"},{default:v(()=>[Xt]),_:2},1032,["to"]),t("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:E=>o.$emit("destroy",s),title:"Delete"},to,8,Yt)])]))]))),128))]),t("tfoot",null,[o.store.props.entrys.total>o.store.props.entrys.per_page?(i(),h(g,{key:0,current:o.store.props.entrys.current_page,total:o.store.props.entrys.total,"per-page":o.store.props.entrys.per_page,onPageChanged:o.load},null,8,["current","total","per-page","onPageChanged"])):c("v-if",!0)])])])}var eo=k($t,[["render",oo],["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/components/business/invoices/entrys/EntrysBillsIndex.vue"]]);const so={emits:["reload","destroy"],methods:{subtotal(o){let e=o.quantity_num/o.quantity_denom*(o.b_price_num/o.b_price_denom),l=this.tax(o);return o.b_taxincluded?e-l:e},tax(o){if(o.bill_taxtable==null||!o.b_taxable)return 0;let e=0;for(let l=0;l<o.bill_taxtable.entries.length;l++){const a=o.bill_taxtable.entries[l];let _=a.amount_num/a.amount_denom;if(a.type==2){let r=o.quantity_num/o.quantity_denom*(o.b_price_num/o.b_price_denom);e=e+r*_/100}else e=e+_}return e}}},io={class:"p-6 overflow-x-auto"},no=t("th",null,"Date",-1),lo=t("th",null,"Description",-1),ao=t("th",null,"Action",-1),co=t("th",null,"Expense Account",-1),ro=t("th",null,"Quantity",-1),_o=t("th",null,"Unit Price",-1),uo=t("th",null,"Billable",-1),po=t("th",null,"Subtotal",-1),mo={key:0},ho=t("span",{class:"material-icons-outlined"},"add",-1),vo={key:0},bo=t("span",{class:"material-icons-outlined"},"check_circle",-1),$o=[bo],go={key:1},ko={key:2},yo={key:3},fo={key:4},Io={key:5},Co={class:"flex"},Eo=t("span",{class:"material-icons-outlined"},"edit",-1),xo=["onClick"],To=t("span",{class:"material-icons-outlined"},"delete",-1),Do=[To];function Po(o,e,l,a,_,r){const b=u("form-button"),m=u("amount-financial"),$=u("RouterLink"),g=u("Pagination");return i(),n("div",io,[t("table",null,[t("thead",null,[t("tr",null,[no,lo,ao,co,ro,_o,uo,po,o.store.props.invoice.date_posted?(i(),n("th",mo)):c("v-if",!0),t("th",null,[p(b,{onClick:e[0]||(e[0]=s=>o.$router.push({name:"business.invoices.entrys.create",params:{invoice_pk:o.store.props.invoice.pk}})),title:"Add New"},{default:v(()=>[ho]),_:1})])])]),t("tbody",null,[(i(!0),n(I,null,C(o.store.props.entrys.data,s=>(i(),n("tr",{key:s.guid},[t("td",null,d(o.store.convert_date(s.date)),1),t("td",null,d(s.description),1),t("td",null,d(s.action),1),t("td",null,d(s.bill_account.name),1),t("td",null,d(s.quantity_num/s.quantity_denom),1),t("td",null,d(s.b_price_num/s.b_price_denom),1),s.billable?(i(),n("td",vo,$o)):(i(),n("td",go)),t("td",null,[p(m,{amount:r.subtotal(s),commodity:s.bill_account.commodity},null,8,["amount","commodity"])]),o.store.props.invoice.date_posted?(i(),n("td",ko)):(i(),n("td",yo)),t("td",null,[p(m,{amount:r.subtotal(s),commodity:s.bill_account.commodity},null,8,["amount","commodity"])]),t("td",null,[p(m,{amount:r.tax(s),commodity:s.bill_account.commodity},null,8,["amount","commodity"])]),o.store.props.invoice.date_posted?(i(),n("td",fo)):(i(),n("td",Io,[t("div",Co,[p($,{class:"text-sky-500 hover:text-sky-300",to:{name:"business.invoices.entrys.edit",params:{invoice_pk:o.store.props.invoice.pk,entry_pk:s.pk}},title:"Edit"},{default:v(()=>[Eo]),_:2},1032,["to"]),t("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:E=>o.$emit("destroy",s),title:"Delete"},Do,8,xo)])]))]))),128))]),t("tfoot",null,[o.store.props.entrys.total>o.store.props.entrys.per_page?(i(),h(g,{key:0,current:o.store.props.entrys.current_page,total:o.store.props.entrys.total,"per-page":o.store.props.entrys.per_page,onPageChanged:o.load},null,8,["current","total","per-page","onPageChanged"])):c("v-if",!0)])])])}var qo=k(so,[["render",Po],["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/components/business/invoices/entrys/EntrysVouchersIndex.vue"]]);const wo={key:0,class:"p-6 overflow-x-auto"},Ao={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Ro={class:"border p-2"},Bo=t("div",{class:"font-semibold text-md"},"Invoice Information",-1),Vo={class:"grid grid-cols-2 gap-4 text-sm"},Lo=t("div",null,"Type:",-1),jo={class:"grid grid-cols-2 gap-4 text-sm"},No={class:"grid grid-cols-2 gap-4 text-sm"},Uo=t("div",null,"Date Opened:",-1),So={key:0,class:"grid grid-cols-2 gap-4 text-sm"},Fo=t("div",null,"Date Posted:",-1),Qo={class:"grid grid-cols-2 gap-4 text-sm"},Jo=t("div",null,"Active:",-1),zo={key:0},Ho=t("span",{class:"material-icons-outlined text-sky-500"}," check_circle ",-1),Oo=[Ho],Go={key:1},Ko=t("span",{class:"material-icons-outlined text-red-500"}," highlight_off ",-1),Mo=[Ko],Wo={class:"grid grid-cols-2 gap-4 text-sm"},Xo=t("div",null,"Paid:",-1),Yo={key:0},Zo=t("span",{class:"material-icons-outlined text-sky-500"}," check_circle ",-1),te=[Zo],oe={key:1},ee=t("span",{class:"material-icons-outlined text-red-500"}," highlight_off ",-1),se=[ee],ie={class:"border p-2"},ne=t("div",{class:"font-semibold text-md"},"Billing Information",-1),le={key:0,class:"grid grid-cols-2 gap-4 text-sm"},de=t("div",null,"Customer:",-1),ae={key:1,class:"grid grid-cols-2 gap-4 text-sm"},ce=t("div",null,"Customer:",-1),re={key:2,class:"grid grid-cols-2 gap-4 text-sm"},_e=t("div",null,"Vendor:",-1),ue={key:3,class:"grid grid-cols-2 gap-4 text-sm"},pe=t("div",null,"Vendor:",-1),me={key:4,class:"grid grid-cols-2 gap-4 text-sm"},he=t("div",null,"Employee:",-1),ve={key:5,class:"grid grid-cols-2 gap-4 text-sm"},be=t("div",null,"Job:",-1),$e={class:"grid grid-cols-2 gap-4 text-sm"},ge=t("div",null,"Billing ID:",-1),ke={key:6,class:"grid grid-cols-2 gap-4 text-sm"},ye=t("div",null,"Terms:",-1),fe={class:"border p-2"},Ie=t("div",{class:"font-semibold text-md"},"Notes",-1),Ce={class:"text-sm"},Ee={key:0,class:"grid grid-cols-1 border p-2 mt-2"},xe=t("div",{class:"font-semibold text-md"},"Default Chargeback Project",-1),Te={key:0,class:"grid grid-cols-2 gap-4 text-sm"},De=t("div",null,"Customer:",-1),Pe={key:1,class:"grid grid-cols-2 gap-4 text-sm"},qe=t("div",null,"Customer:",-1),we={key:2,class:"grid grid-cols-2 gap-4 text-sm"},Ae=t("div",null,"Job:",-1),Re={class:"flex gap-2 items-center justify-end mt-4"},Be=t("span",{class:"material-icons-outlined"},"unarchive",-1),Ve=t("span",{class:"material-icons-outlined"},"archive",-1),Le={data(){return{filter:{page:1,search:null}}},methods:{async load(o){this.filter.page=o,await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/business/invoices/${this.$route.params.invoice_pk}/entrys`,this.filter)},async destroy(o){confirm("Are you sure you want to delete this item?")&&(await this.store.delete(`http://phmoney_app.kainotomo.localhost/phmoney/business/invoices/${this.$route.params.invoice_pk}/entrys/destroy/${o.pk}`),this.load(1))},async unpost(){confirm("Are you sure you want to unpost this invoice?")&&(await this.store.delete(`http://phmoney_app.kainotomo.localhost/phmoney/business/invoices/post/${this.$route.params.invoice_pk}`),this.load(1))},subtotal(o){let e=o.quantity_num/o.quantity_denom*(o.i_price_num/o.i_price_denom),l=o.i_discount_num/o.i_discount_denom,a=this.tax(o);if(o.i_taxincluded){if(o.i_disc_type==="VALUE")return e-l-a;if(o.i_disc_type==="PERCENT")return e-e*l/100-a}else{if(o.i_disc_type==="VALUE")return e-l;if(o.i_disc_type==="PERCENT")return e-e*l/100}},tax(o){if(o.invoice_taxtable==null||!o.i_taxable)return 0;let e=0;for(let l=0;l<o.invoice_taxtable.entries.length;l++){const a=o.invoice_taxtable.entries[l];let _=a.amount_num/a.amount_denom;if(a.type==2){let r=o.quantity_num/o.quantity_denom*(o.i_price_num/o.i_price_denom);e=e+r*_/100}else e=e+_}return e}}},je=D(f(y({},Le),{name:"EntrysIndex",setup(o){return(e,l)=>{const a=u("form-secondary-button"),_=u("form-button");return e.store.props.invoice?(i(),n("div",wo,[t("div",Ao,[t("div",Ro,[Bo,t("div",Vo,[Lo,t("div",null,d(e.store.getInvoiceType()),1)]),t("div",jo,[t("div",null,d(e.store.getInvoiceType())+" ID:",1),t("div",null,d(e.store.props.invoice.pk),1)]),t("div",No,[Uo,t("div",null,d(e.store.convert_date(e.store.props.invoice.date_opened)),1)]),e.store.props.invoice.date_posted?(i(),n("div",So,[Fo,t("div",null,d(e.store.convert_date(e.store.props.invoice.date_posted)),1)])):c("v-if",!0),t("div",Qo,[Jo,e.store.props.invoice.active?(i(),n("div",zo,Oo)):(i(),n("div",Go,Mo))]),t("div",Wo,[Xo,e.store.props.invoice.paid?(i(),n("div",Yo,te)):(i(),n("div",oe,se))])]),t("div",ie,[ne,e.store.props.invoice.customer!==null&&e.store.getInvoiceType()==="Invoice"?(i(),n("div",le,[de,t("div",null,d(e.store.props.invoice.customer.name),1)])):c("v-if",!0),e.store.props.invoice.job!==null&&e.store.getInvoiceType()==="Invoice"?(i(),n("div",ae,[ce,t("div",null,d(e.store.props.invoice.job.customer.name),1)])):c("v-if",!0),e.store.props.invoice.vendor!==null&&e.store.getInvoiceType()==="Bill"?(i(),n("div",re,[_e,t("div",null,d(e.store.props.invoice.vendor.name),1)])):c("v-if",!0),e.store.props.invoice.job!==null&&e.store.getInvoiceType()==="Bill"?(i(),n("div",ue,[pe,t("div",null,d(e.store.props.invoice.job.vendor.name),1)])):c("v-if",!0),e.store.props.invoice.employee!==null&&e.store.getInvoiceType()==="Voucher"?(i(),n("div",me,[he,t("div",null,d(e.store.props.invoice.employee.username),1)])):c("v-if",!0),e.store.props.invoice.job!==null?(i(),n("div",ve,[be,t("div",null,d(e.store.props.invoice.job.name),1)])):c("v-if",!0),t("div",$e,[ge,t("div",null,d(e.store.props.invoice.billing_id),1)]),e.store.props.invoice.billterm!==null?(i(),n("div",ke,[ye,t("div",null,d(e.store.props.invoice.billterm.name),1)])):c("v-if",!0)]),t("div",fe,[Ie,t("div",Ce,d(e.store.props.invoice.notes),1)])]),e.store.getInvoiceType()==="Bill"||e.store.getInvoiceType()==="Voucher"?(i(),n("div",Ee,[xe,e.store.props.invoice.billto_customer!==null?(i(),n("div",Te,[De,t("div",null,d(e.store.props.invoice.billto_customer.name),1)])):c("v-if",!0),e.store.props.invoice.billto_job!==null?(i(),n("div",Pe,[qe,t("div",null,d(e.store.props.invoice.billto_job.customer.name),1)])):c("v-if",!0),e.store.props.invoice.billto_job!==null?(i(),n("div",we,[Ae,t("div",null,d(e.store.props.invoice.billto_job.name),1)])):c("v-if",!0)])):c("v-if",!0),e.store.getInvoiceType()==="Invoice"?(i(),h(bt,{key:1,onReload:e.load,onDestroy:e.destroy},null,8,["onReload","onDestroy"])):c("v-if",!0),e.store.getInvoiceType()==="Bill"?(i(),h(eo,{key:2,onReload:e.load,onDestroy:e.destroy},null,8,["onReload","onDestroy"])):c("v-if",!0),e.store.getInvoiceType()==="Voucher"?(i(),h(qo,{key:3,onReload:e.load,onDestroy:e.destroy},null,8,["onReload","onDestroy"])):c("v-if",!0),t("div",Re,[e.store.props.invoice.date_posted?(i(),h(a,{key:0,onClick:e.unpost,title:"Unpost Invoice"},{default:v(()=>[Be]),_:1},8,["onClick"])):(i(),h(_,{key:1,onClick:l[0]||(l[0]=r=>e.$router.push({name:"business.invoices.post",params:{invoice_pk:e.store.props.invoice.pk}})),title:"Post Invoice",class:B({"opacity-60":e.store.props.entrys.data.length==0}),disabled:e.store.props.entrys.data.length==0},{default:v(()=>[Ve]),_:1},8,["class","disabled"]))])])):c("v-if",!0)}}}));var Ne=k(je,[["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/components/business/invoices/entrys/EntrysIndex.vue"]]);const Ue={class:"bg-white shadow mt-4 prose max-w-none"},Se={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/business/invoices/${this.$route.params.invoice_pk}/entrys`)}},Fe=D(f(y({},Se),{name:"EntrysIndex",setup(o){return(e,l)=>{const a=u("FormLayout");return i(),h(a,{title:`Entries ${e.store.props.invoice?e.store.getInvoiceType()+" - "+e.store.props.invoice.id:"..."}`},{default:v(()=>[t("div",Ue,[p(Ne)])]),_:1},8,["title"])}}}));var ze=k(Fe,[["__file","/home/phalo/kainotomo/phmoney/phmoney_assets/src/views/business/invoices/entrys/EntrysIndex.vue"]]);export{ze as default};
