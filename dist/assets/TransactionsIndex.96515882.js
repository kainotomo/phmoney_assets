import{_ as y,r as l,o as r,g as c,a as t,b as s,w as d,l as V,m as b,t as u,c as v,i as p,d as D}from"./main.a1aec73c.js";const N={async created(){this.$route.params.account_pk!==this.store.transactions_filter.account_pk?this.clear():await this.load(0)},methods:{clear(){this.store.transactions_filter={account_pk:this.$route.params.account_pk,page:1,memo:null,description:null,num:null,date_start:null,date_end:null},this.load(0)},async load(e){e>0&&(this.store.transactions_filter.page=e),await this.store.get(`http://phmoney_local.kainotomo.localhost/phmoney/transactions/${this.$route.params.account_pk}`,this.store.transactions_filter)},async destroy(e){confirm("Are you sure you want to delete this item?")&&(await this.store.delete(`http://phmoney_local.kainotomo.localhost/phmoney/transactions/${this.store.props.account.pk}/destroy/${e.transaction.pk}`),this.load(this.store.transactions_filter.page))},async duplicate(e){await this.store.get(`http://phmoney_local.kainotomo.localhost/phmoney/transactions/${this.store.props.account.pk}/duplicate/${e.transaction.pk}`),await this.load(0)}}},T={key:0,class:"p-6 overflow-x-auto"},B={class:"flex gap-2"},I={class:"flex gap-2 pt-2"},L=t("span",{class:"material-icons-outlined"}," search ",-1),U=t("span",{class:"material-icons-outlined"}," search_off ",-1),P={key:0,class:"table-fixed"},E=t("th",null,"Date",-1),F=t("th",null,"Num",-1),R=t("th",null,"Description",-1),S=t("th",null,"R",-1),A=t("th",null,"Debit",-1),M=t("th",null,"Credit",-1),j=t("th",null,"Balance",-1),q=t("span",{class:"material-icons-outlined"},"add",-1),z=["split"],G=["title"],H=["title"],J={class:"flex"},K=["onClick"],O=t("span",{class:"material-icons-outlined"},"copy",-1),Q=[O],W=t("span",{class:"material-icons-outlined"},"edit",-1),X=["onClick"],Y=t("span",{class:"material-icons-outlined"},"delete",-1),Z=[Y];function x(e,n,k,_,nt,a){const h=l("form-label"),i=l("form-input"),f=l("form-button"),g=l("form-secondary-button"),m=l("amount-financial"),w=l("RouterLink"),C=l("Pagination");return e.store.props.splits!==void 0?(r(),c("div",T,[t("div",B,[t("div",null,[s(h,{for:"date_start",value:"Start Date"}),s(i,{type:"date",id:"date_start",name:"date_start",modelValue:e.store.transactions_filter.date_start,"onUpdate:modelValue":n[0]||(n[0]=o=>e.store.transactions_filter.date_start=o),onChange:n[1]||(n[1]=o=>a.load(1))},null,8,["modelValue"])]),t("div",null,[s(h,{for:"date_end",value:"End Date"}),s(i,{type:"date",id:"date_end",name:"date_end",modelValue:e.store.transactions_filter.date_end,"onUpdate:modelValue":n[2]||(n[2]=o=>e.store.transactions_filter.date_end=o),onChange:n[3]||(n[3]=o=>a.load(1))},null,8,["modelValue"])])]),t("div",I,[s(i,{id:"memo",name:"memo",type:"text",modelValue:e.store.transactions_filter.memo,"onUpdate:modelValue":n[4]||(n[4]=o=>e.store.transactions_filter.memo=o),placeholder:"Memo...",onChange:n[5]||(n[5]=o=>a.load(1))},null,8,["modelValue"]),s(i,{id:"description",name:"description",type:"text",modelValue:e.store.transactions_filter.description,"onUpdate:modelValue":n[6]||(n[6]=o=>e.store.transactions_filter.description=o),placeholder:"Description...",onChange:n[7]||(n[7]=o=>a.load(1))},null,8,["modelValue"]),s(i,{id:"num",name:"num",type:"text",modelValue:e.store.transactions_filter.num,"onUpdate:modelValue":n[8]||(n[8]=o=>e.store.transactions_filter.num=o),placeholder:"Num...",onChange:n[9]||(n[9]=o=>a.load(1))},null,8,["modelValue"]),s(f,{title:"Search",onClick:n[10]||(n[10]=o=>a.load(1))},{default:d(()=>[L]),_:1}),s(g,{title:"Clear",onClick:a.clear},{default:d(()=>[U]),_:1},8,["onClick"])]),e.store.processing?p("v-if",!0):(r(),c("table",P,[t("thead",null,[t("tr",null,[E,F,R,S,A,M,j,t("th",null,[s(f,{onClick:n[11]||(n[11]=o=>e.$router.push({name:"transactions.create",params:{account_pk:e.store.props.account.pk}})),title:"Add New"},{default:d(()=>[q]),_:1})])])]),t("tbody",null,[(r(!0),c(V,null,b(e.store.props.splits.data,o=>(r(),c("tr",{key:o.id,split:o,class:"hover:bg-sky-50"},[t("td",null,u(o.post_date),1),t("td",{class:"truncate",title:o.num},u(o.num),9,G),t("td",{class:"truncate",title:o.description},u(o.description),9,H),t("td",null,u(o.reconcile_state),1),t("td",null,[s(m,{amount:o.debit,commodity:e.store.props.account.commodity},null,8,["amount","commodity"])]),t("td",null,[s(m,{amount:o.credit,commodity:e.store.props.account.commodity},null,8,["amount","commodity"])]),t("td",null,[s(m,{amount:o.balance,commodity:e.store.props.account.commodity},null,8,["amount","commodity"])]),t("td",null,[t("div",J,[t("div",{class:"text-yellow-500 hover:text-yellow-300 hover:cursor-pointer",onClick:$=>a.duplicate(o),title:"Duplicate"},Q,8,K),s(w,{class:"text-sky-500 hover:text-sky-300",to:{name:"transactions.edit",params:{account_pk:e.store.props.account.pk,transaction_pk:o.pk}},title:"Edit"},{default:d(()=>[W]),_:2},1032,["to"]),t("div",{class:"text-red-500 hover:text-red-300 hover:cursor-pointer",onClick:$=>a.destroy(o),title:"Delete"},Z,8,X)])])],8,z))),128))]),t("tfoot",null,[e.store.props.splits.total>e.store.props.splits.per_page?(r(),v(C,{key:0,current:e.store.props.splits.current_page,total:e.store.props.splits.total,"per-page":e.store.props.splits.per_page,onPageChanged:a.load},null,8,["current","total","per-page","onPageChanged"])):p("v-if",!0)])]))])):p("v-if",!0)}var tt=y(N,[["render",x],["__file","/var/www/html/src/components/transactions/TransactionsIndex.vue"]]);const et={class:"bg-white shadow mt-4 prose max-w-none"},ot=D({name:"TransactionsIndex",setup(e){return(n,k)=>{const _=l("FormLayout");return r(),v(_,{title:`Transactions - ${n.store.props.account?n.store.props.account.name:"..."}`},{default:d(()=>[t("div",et,[s(tt)])]),_:1},8,["title"])}}});var at=y(ot,[["__file","/var/www/html/src/views/transactions/TransactionsIndex.vue"]]);export{at as default};
