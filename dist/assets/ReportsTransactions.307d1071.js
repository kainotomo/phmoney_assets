var T=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var h=(t,s,o)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,f=(t,s)=>{for(var o in s||(s={}))N.call(s,o)&&h(t,o,s[o]);if(_)for(var o of _(s))U.call(s,o)&&h(t,o,s[o]);return t},g=(t,s)=>C(t,D(s));import{_ as b,r as c,o as m,g as u,a as e,t as l,k as d,v as i,l as v,m as k,b as n,d as A,c as w,w as y,i as $}from"./main.a1aec73c.js";const B={},L={class:"p-6"},V={class:"text-center"},F={class:"w-full table-fixed"},M=e("th",{class:"text-right"},"Amount",-1),S={colspan:"4"},j={class:"text-right"},E={class:"text-right"},G={class:"w-full table-fixed"},P=e("th",{class:"text-left"},"Grand Total",-1),q={class:"text-right"};function z(t,s){const o=c("amount-financial");return m(),u("div",L,[e("h2",V,l(t.store.props.company)+" "+l(t.store.props.title)+" For Period Covering "+l(t.store.convert_date(t.store.props.date_start))+" to "+l(t.store.convert_date(t.store.props.date_end)),1),e("table",F,[e("thead",null,[e("th",null,[d(e("span",null,"Account Name",512),[[i,t.store.report_settings.params.date]])]),e("th",null,[d(e("span",null,"Account Code",512),[[i,t.store.report_settings.params.date]])]),e("th",null,[d(e("span",null,"Date",512),[[i,t.store.report_settings.params.date]])]),e("th",null,[d(e("span",null,"Num",512),[[i,t.store.report_settings.params.num]])]),e("th",null,[d(e("span",null,"Description",512),[[i,t.store.report_settings.params.description]])]),e("th",null,[d(e("span",null,"Memo",512),[[i,t.store.report_settings.params.memo]])]),M])]),(m(!0),u(v,null,k(t.store.props.rows,a=>(m(),u("table",{class:"w-full table-fixed",key:a.guid},[e("thead",null,[e("tr",null,[e("th",S,"Total for "+l(a.code)+" "+l(a.name),1),e("th",j,[n(o,{amount:a.total,commodity:a.commodity},null,8,["amount","commodity"])])])]),e("tbody",null,[(m(!0),u(v,null,k(a.rows,r=>(m(),u("tr",{key:r.split_guid},[e("td",null,[d(e("span",null,l(r.name),513),[[i,t.store.report_settings.params.name]])]),e("td",null,[d(e("span",null,l(r.code),513),[[i,t.store.report_settings.params.code]])]),e("td",null,[d(e("span",null,l(t.store.convert_date(r.post_date)),513),[[i,t.store.report_settings.params.date]])]),e("td",null,[d(e("span",null,l(r.num),513),[[i,t.store.report_settings.params.num]])]),e("td",null,[d(e("span",null,l(r.description),513),[[i,t.store.report_settings.params.description]])]),e("td",null,[d(e("span",null,l(r.memo),513),[[i,t.store.report_settings.params.memo]])]),e("td",E,[n(o,{amount:r.amount,commodity:a.commodity},null,8,["amount","commodity"])])]))),128))])]))),128)),e("table",G,[e("tbody",null,[e("tr",null,[P,e("th",q,[n(o,{amount:t.store.props.total,commodity:t.store.props.currency},null,8,["amount","commodity"])])])])])])}var H=b(B,[["render",z],["__file","/var/www/html/src/components/reports/ReportsTransactions.vue"]]);const I=e("div",{class:"font-bold"},"Display",-1),J={class:"flex gap-2"},K={class:"bg-white shadow mt-4 prose max-w-none"},O={data(){return{extra_params:{name:!0,code:!0,date:!0,num:!0,description:!0,memo:!0}}}},Q=A(g(f({},O),{name:"ReportsTransactions",setup(t){return(s,o)=>{const a=c("form-label"),r=c("form-checkbox"),R=c("ReportLayout");return m(),w(R,{title:"Transactions Report",extra_params:s.extra_params,show_export_csv:!0,show_export_json:!0},{settings:y(()=>[I,e("div",J,[e("div",null,[n(a,{for:"filter_name",value:"Account Name"}),n(r,{id:"filter_name",checked:s.store.report_settings.params.name,"onUpdate:checked":o[0]||(o[0]=p=>s.store.report_settings.params.name=p)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_code",value:"Account Code"}),n(r,{id:"filter_code",checked:s.store.report_settings.params.code,"onUpdate:checked":o[1]||(o[1]=p=>s.store.report_settings.params.code=p)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_date",value:"Date"}),n(r,{id:"filter_date",checked:s.store.report_settings.params.date,"onUpdate:checked":o[2]||(o[2]=p=>s.store.report_settings.params.date=p)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_num",value:"Num"}),n(r,{id:"filter_num",checked:s.store.report_settings.params.num,"onUpdate:checked":o[3]||(o[3]=p=>s.store.report_settings.params.num=p)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_description",value:"Description"}),n(r,{id:"filter_description",checked:s.store.report_settings.params.description,"onUpdate:checked":o[4]||(o[4]=p=>s.store.report_settings.params.description=p)},null,8,["checked"])]),e("div",null,[n(a,{for:"filter_memo",value:"Memo"}),n(r,{id:"filter_memo",checked:s.store.report_settings.params.memo,"onUpdate:checked":o[5]||(o[5]=p=>s.store.report_settings.params.memo=p)},null,8,["checked"])])])]),default:y(()=>[e("div",K,[s.store.props.currency&&!s.store.processing?(m(),w(H,{key:0})):$("v-if",!0)])]),_:1},8,["extra_params"])}}}));var Y=b(Q,[["__file","/var/www/html/src/views/reports/ReportsTransactions.vue"]]);export{Y as default};
