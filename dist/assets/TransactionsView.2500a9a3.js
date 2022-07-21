var k=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(e,o,n)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,p=(e,o)=>{for(var n in o||(o={}))$.call(o,n)&&m(e,n,o[n]);if(d)for(var n of d(o))v.call(o,n)&&m(e,n,o[n]);return e},_=(e,o)=>b(e,w(o));import{d as h,r as u,o as r,g as i,a as t,t as s,F as g,m as C,b as c,w as y,i as V,c as B}from"./main.d1319642.js";const D={key:0,class:"overflow-x-auto p-6"},F={class:"table-fixed"},N=t("thead",null,[t("tr",null,[t("th",null,"Date"),t("th",null,"Num"),t("th",null,"Description")])],-1),L=t("tbody",null,null,-1),T={class:"table-fixed"},A=t("thead",null,[t("tr",null,[t("th",null,"Account"),t("th",null,"Action"),t("th",null,"Memo"),t("th",null,"Reconcile State"),t("th",null,"Debit"),t("th",null,"Credit")])],-1),E=["split"],S={colspan:"6"},M=t("span",{class:"material-icons-outlined"},"edit",-1),R={async created(){await this.store.get(`/phmoney/transactions/${this.$route.params.account_pk}/view/${this.$route.params.transaction_pk}`)}},j=h(_(p({},R),{name:"TransactionsView",setup(e){return(o,n)=>{const l=u("amount-financial"),f=u("form-button");return o.store.props.transaction?(r(),i("div",D,[t("table",F,[N,t("tbody",null,[t("tr",null,[t("td",null,s(o.store.props.transaction.post_date),1),t("td",null,s(o.store.props.transaction.num),1),t("td",null,s(o.store.props.transaction.description),1)])]),L]),t("table",T,[A,t("tbody",null,[(r(!0),i(g,null,C(o.store.props.splits,a=>(r(),i("tr",{key:a.pk,split:a,class:"hover:bg-sky-50"},[t("td",null,s(a.account.name),1),t("td",null,s(a.action),1),t("td",null,s(a.memo),1),t("td",null,s(a.reconcile_state),1),t("td",null,[c(l,{amount:a.debit,commodity:o.store.props.account.commodity},null,8,["amount","commodity"])]),t("td",null,[c(l,{amount:a.credit,commodity:o.store.props.account.commodity},null,8,["amount","commodity"])])],8,E))),128))]),t("tfoot",null,[t("tr",null,[t("td",S,[c(f,{onClick:n[0]||(n[0]=a=>o.$router.push({name:"transactions.edit",params:{account_pk:o.store.props.account.pk,transaction_pk:o.store.props.transaction.pk}})),title:"Edit"},{default:y(()=>[M]),_:1})])])])])])):V("",!0)}}})),q={class:"bg-white shadow mt-4 prose max-w-none"},H=h({name:"TransactionsView",setup(e){return(o,n)=>{const l=u("FormLayout");return r(),B(l,{title:`View Transaction - ${o.$route.params.transaction_pk}`},{default:y(()=>[t("div",q,[c(j)])]),_:1},8,["title"])}}});export{H as default};
