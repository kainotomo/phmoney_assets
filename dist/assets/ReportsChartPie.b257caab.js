var g=Object.defineProperty,w=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&c(e,o,t[o]);if(p)for(var o of p(t))b.call(t,o)&&c(e,o,t[o]);return e},_=(e,t)=>w(e,y(t));import{_ as f,o as a,g as i,a as s,t as n,d as k,r as u,c as h,w as v,b as $,k as R,p as P,m as B,l as V,i as D}from"./main.e034665e.js";const L={mounted(){this.drawChart()},methods:{drawChart(){var e=new google.visualization.DataTable;e.addColumn("string","Date"),e.addColumn("number","Amount"),e.addRows(this.store.props.rows);var t={height:500,vAxis:{minValue:0}},o=new google.visualization.PieChart(document.getElementById("chart_div"));o.draw(e,t)}}},N={class:"p-6"},x={class:"text-center"},z={class:"text-center"},A=s("div",{class:"border-b"},[s("div",{id:"chart_div"})],-1);function E(e,t,o,l,d,r){return a(),i("div",N,[s("h2",x,n(e.store.props.company)+" "+n(e.store.props.title),1),s("h3",z," From "+n(e.store.convert_date(e.store.props.date_start))+" to "+n(e.store.convert_date(e.store.props.date_end)),1),A])}var F=f(L,[["render",E],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/reports/ReportsChartPie.vue"]]);const S={class:"flex gap-2"},I=["value"],M={class:"bg-white shadow mt-4 prose max-w-none"},T={data(){return{extra_params:{level:null},levels:[null,0,1,2,3,4,5,6]}}},U=k(_(m({},T),{name:"ReportsChartPie",setup(e){return(t,o)=>{const l=u("form-label"),d=u("ReportLayout");return a(),h(d,{title:"Pie Chart",extra_params:t.extra_params},{settings:v(()=>[s("div",S,[s("div",null,[$(l,{for:"levels",value:"Levels of subaccounts"}),R(s("select",{id:"levels","onUpdate:modelValue":o[0]||(o[0]=r=>t.store.report_settings.params.level=r),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),i(V,null,B(t.levels,r=>(a(),i("option",{value:r},n(r),9,I))),256))],512),[[P,t.store.report_settings.params.level]])])])]),default:v(()=>[s("div",M,[t.store.props.currency&&!t.store.processing?(a(),h(F,{key:0})):D("v-if",!0)])]),_:1},8,["extra_params"])}}}));var G=f(U,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/reports/ReportsChartPie.vue"]]);export{G as default};
