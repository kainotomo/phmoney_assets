var F=Object.defineProperty,R=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(o,n,a)=>n in o?F(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a,k=(o,n)=>{for(var a in n||(n={}))B.call(n,a)&&y(o,a,n[a]);if(g)for(var a of g(n))$.call(n,a)&&y(o,a,n[a]);return o},v=(o,n)=>R(o,U(n));import{_ as x,r,o as d,g as _,a as e,b as l,l as V,m as w,t as i,w as C,n as I,e as N,d as S,c as Y,i as A}from"./main.e034665e.js";const L={data(){return{form:{guids:[]},date_statement:this.moment().format("YYYY-MM-DD"),ending_balance:this.store.props.ending_balance,reconciled_balance:0}},computed:{difference:function(){return this.ending_balance-this.reconciled_balance-this.store.props.starting_balance}},methods:{async submit(){console.log(this.form.guids),this.form.guids=[];for(let o=0;o<this.store.props.credits.length;o++){const n=this.store.props.credits[o];n.is_reconciled&&this.form.guids.push(n.guid)}for(let o=0;o<this.store.props.debits.length;o++){const n=this.store.props.debits[o];n.is_reconciled&&this.form.guids.push(n.guid)}this.form.guids.length>0&&await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/reconcile/${this.$route.params.account_pk}/update`,this.form),this.store.errors||this.$router.back()},async reload(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/reconcile/${this.$route.params.account_pk}`,{date_statement:this.date_statement}),this.ending_balance=this.store.props.ending_balance},change_reconcile(o){o.is_reconciled?this.reconciled_balance=this.reconciled_balance+parseFloat(o.amount):this.reconciled_balance=this.reconciled_balance-parseFloat(o.amount)}}},M={class:"flex flex-wrap gap-2"},E={class:"grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 prose max-w-none"},j={class:"border p-2"},q=e("h3",null,"Funds In",-1),z=e("thead",null,[e("th",null,"Date"),e("th",null,"Num"),e("th",null,"Description"),e("th",null,"Amount"),e("th",null,"R")],-1),O={class:"border p-2"},G=e("h3",null,"Funds Out",-1),H=e("thead",null,[e("th",null,"Date"),e("th",null,"Num"),e("th",null,"Description"),e("th",null,"Amount"),e("th",null,"R")],-1),J={class:"flex items-center justify-end mt-4"},K=e("span",{class:"material-icons-outlined"}," check ",-1);function P(o,n,a,h,c,s){const u=r("form-label"),m=r("form-input"),f=r("amount-financial"),b=r("form-checkbox"),D=r("form-button");return d(),_("form",{onSubmit:n[5]||(n[5]=N((...t)=>s.submit&&s.submit(...t),["prevent"])),class:"p-6"},[e("div",M,[e("div",null,[l(u,{for:"date_statement",value:"Statement Date"}),l(m,{id:"date_statement",type:"date",modelValue:c.date_statement,"onUpdate:modelValue":n[0]||(n[0]=t=>c.date_statement=t),required:"",onChange:s.reload},null,8,["modelValue","onChange"])]),e("div",null,[l(u,{for:"starting_balance",value:"Starting Balance"}),l(m,{id:"starting_balance",type:"number",modelValue:o.store.props.starting_balance,"onUpdate:modelValue":n[1]||(n[1]=t=>o.store.props.starting_balance=t),min:"0",class:"bg-gray-200",disabled:""},null,8,["modelValue"])]),e("div",null,[l(u,{for:"ending_balance",value:"Ending Balance"}),l(m,{id:"ending_balance",type:"number",modelValue:c.ending_balance,"onUpdate:modelValue":n[2]||(n[2]=t=>c.ending_balance=t),min:"0",step:"0.01"},null,8,["modelValue"])]),e("div",null,[l(u,{for:"reconciled_balance",value:"Reconciled Balance"}),l(m,{id:"reconciled_balance",type:"number",modelValue:c.reconciled_balance,"onUpdate:modelValue":n[3]||(n[3]=t=>c.reconciled_balance=t),min:"0",class:"bg-gray-200",disabled:""},null,8,["modelValue"])]),e("div",null,[l(u,{for:"difference",value:"Difference"}),l(m,{id:"difference",type:"number",modelValue:s.difference,"onUpdate:modelValue":n[4]||(n[4]=t=>s.difference=t),min:"0",class:"bg-gray-200",disabled:""},null,8,["modelValue"])])]),e("div",E,[e("div",j,[q,e("table",null,[z,e("tbody",null,[(d(!0),_(V,null,w(o.store.props.credits,t=>(d(),_("tr",{key:t.guid},[e("td",null,i(o.store.convert_date(t.transaction.post_date)),1),e("td",null,i(t.transaction.num),1),e("td",null,i(t.transaction.description),1),e("td",null,[l(f,{amount:parseFloat(t.amount),commodity:t.account.commodity},null,8,["amount","commodity"])]),e("td",null,[l(b,{id:`is_reconciled${t.guid}`,checked:t.is_reconciled,"onUpdate:checked":p=>t.is_reconciled=p,onChange:p=>s.change_reconcile(t)},null,8,["id","checked","onUpdate:checked","onChange"])])]))),128))])])]),e("div",O,[G,e("table",null,[H,e("tbody",null,[(d(!0),_(V,null,w(o.store.props.debits,t=>(d(),_("tr",{key:t.guid},[e("td",null,i(o.store.convert_date(t.transaction.post_date)),1),e("td",null,i(t.transaction.num),1),e("td",null,i(t.transaction.description),1),e("td",null,[l(f,{amount:parseFloat(t.amount),commodity:t.account.commodity},null,8,["amount","commodity"])]),e("td",null,[l(b,{id:`is_reconciled${t.guid}`,checked:t.is_reconciled,"onUpdate:checked":p=>t.is_reconciled=p,onChange:p=>s.change_reconcile(t)},null,8,["id","checked","onUpdate:checked","onChange"])])]))),128))])])])]),e("div",J,[l(D,{class:I(["ml-4",{"opacity-25":s.difference!==0}]),disabled:s.difference!==0,title:"Submit"},{default:C(()=>[K]),_:1},8,["class","disabled"])])],32)}var Q=x(L,[["render",P],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/reconcile/ReconcileIndex.vue"]]);const T={class:"bg-white shadow mt-4 prose max-w-none"},W={async created(){await this.store.get(`http://phmoney_app.kainotomo.localhost/phmoney/reconcile/${this.$route.params.account_pk}`)}},X=S(v(k({},W),{name:"ReconcileIndex",setup(o){return(n,a)=>{const h=r("FormLayout");return n.store.processing?A("v-if",!0):(d(),Y(h,{key:0,title:`Reconcile Account - ${n.store.props.account.name}`},{default:C(()=>[e("div",T,[l(Q)])]),_:1},8,["title"]))}}}));var ne=x(X,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/reconcile/ReconcileIndex.vue"]]);export{ne as default};
