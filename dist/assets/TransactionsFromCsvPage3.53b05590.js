import{_ as U,r as y,o as i,g as l,a as o,b as r,k as _,p as h,l as c,m as p,t as u,w as g,i as b,n as D,v as A,e as F,s as T,f as S,d as q,c as P}from"./main.e034665e.js";const B={async created(){await this.store.get("http://phmoney_app.kainotomo.localhost/phmoney/import/transactions-from-csv/page3"),this.form={upload_file:this.store.props.upload_file,file_path:this.store.props.file_path,items:this.store.props.items,delimiter:this.store.props.delimiter,enclosure:this.store.props.enclosure,date_format:this.store.props.date_format,currency_format:this.store.props.currency_format,selected_columns:this.store.props.selected_columns,skip_errors:null,setting:{id:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:this.store.props.delimiter,enclosure:this.store.props.enclosure,date_format:this.store.props.date_format,currency_format:this.store.props.currency_format}}}},data(){return{form:{upload_file:null,file_path:null,items:null,delimiter:null,enclosure:null,date_format:null,currency_format:null,selected_columns:null,skip_errors:null,setting:{id:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:null,enclosure:null,date_format:null,currency_format:null}}},currency_formats:[".",","],source_account:null,destination_account:null,columns:["Date","Num","Description","Amount","Shares"],savingSettings:!1}},methods:{next(){confirm("Are you sure you want to proceed to import selected items?")&&this.$router.push({name:"import.transactions_from_csv.page4"})},async submit(){await this.store.post("http://phmoney_app.kainotomo.localhost/phmoney/import/transactions-from-csv/page3/update",this.form),await this.store.get("http://phmoney_app.kainotomo.localhost/phmoney/import/transactions-from-csv/page3"),this.reset()},reset(){this.form.items=this.store.props.items,this.form.selected_columns=this.store.props.selected_columns},getTrValidClass(n){return n.is_valid===!1&&n.checked===!0?"bg-red-500":""},onCheckAll(n){let t=n.target.checked;for(let k=0;k<this.form.items.length;k++)this.form.items[k].checked=t;this.submit()},onSourceAccountChange(){for(let n=0;n<this.form.items.length;n++)this.form.items[n].source_account=this.source_account;this.submit()},onDestinationAccountChange(){for(let n=0;n<this.form.items.length;n++)this.form.items[n].destination_account=this.destination_account;this.submit()},loadSettings(){this.form.delimiter=this.form.setting.params.delimiter,this.form.enclosure=this.form.setting.params.enclosure,this.form.date_format=this.form.setting.params.date_format,this.form.currency_format=this.form.setting.params.currency_format,this.submit()},async saveSettings(){this.form.setting.id===0?await this.store.put("http://phmoney_app.kainotomo.localhost/phmoney/settings/store",this.form):await this.store.post(`http://phmoney_app.kainotomo.localhost/phmoney/settings/update/${this.form.setting.id}`,this.form),await this.store.get("http://phmoney_app.kainotomo.localhost/phmoney/import/transactions-from-csv/page3"),this.store.props.import_settings=this.store.props.import_settings,this.savingSettings=!1},async deleteSettings(){this.form.setting.id!=0&&confirm("Are you sure you want to delete these settings?")&&(await this.store.delete(`http://phmoney_app.kainotomo.localhost/phmoney/settings/destroy/${this.form.setting.id}`),await this.store.get("http://phmoney_app.kainotomo.localhost/phmoney/import/transactions-from-csv/page3"),this.form.setting={id:0,name:"No Settings",type:"import_transactions_csv",params:{delimiter:null,enclosure:null,date_format:null,currency_format:null}},this.store.props.import_settings=this.store.props.import_settings)}}},I={key:0,class:"p-6"},M={class:"flex gap-2"},E=["value"],L=o("span",{class:"material-icons-outlined"}," save ",-1),j=o("span",{class:"material-icons-outlined"}," delete ",-1),z={class:"flex flex-wrap gap-2"},R=["value"],W={key:0},G={class:"overflow-auto h-screen"},H={class:"table"},J=["value"],K={class:"w-60"},O=["value"],Q=o("th",{scope:"col"},"#",-1),X=["onUpdate:modelValue"],Y=["value"],Z={key:0,class:"bg-red-500"},$=["id","onUpdate:modelValue"],ee=["value"],te=["id","onUpdate:modelValue"],oe=["value"],se={scope:"row"},re={class:"p-2 border"},ne={class:"flex items-center justify-end mt-4 gap-2"},ie={class:"text-sm text-red-600"},le=o("span",{class:"material-icons-outlined"},"navigate_before",-1),ae=o("span",{class:"material-icons-outlined"},"navigate_next",-1),me=S("Save Current Import Settings"),ue=["value"],de={class:"flex gap-2"},ce=S(" Save "),pe=S(" Close ");function fe(n,t,k,x,s,a){const d=y("form-label"),C=y("form-button"),V=y("form-secondary-button"),v=y("form-input"),w=y("form-checkbox"),N=y("form-dialog-modal");return n.store.props!==null?(i(),l("div",I,[o("form",{onSubmit:t[17]||(t[17]=F(()=>{},["prevent"]))},[o("div",M,[r(d,{for:"import_settings",value:"Select Settings"}),_(o("select",{id:"import_settings","onUpdate:modelValue":t[0]||(t[0]=e=>s.form.setting=e),onChange:t[1]||(t[1]=(...e)=>a.loadSettings&&a.loadSettings(...e)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.import_settings,e=>(i(),l("option",{key:e.id,value:e},u(e.name),9,E))),128))],544),[[h,s.form.setting]]),r(C,{onClick:t[2]||(t[2]=e=>s.savingSettings=!0),title:"Save Settings"},{default:g(()=>[L]),_:1}),r(V,{onClick:a.deleteSettings,title:"Delete Settings"},{default:g(()=>[j]),_:1},8,["onClick"])]),o("div",z,[o("div",null,[r(d,{for:"delimiter",value:"Delimiter"}),r(v,{id:"delimiter",modelValue:s.form.delimiter,"onUpdate:modelValue":t[3]||(t[3]=e=>s.form.delimiter=e),type:"text",onChange:a.submit,required:""},null,8,["modelValue","onChange"])]),o("div",null,[r(d,{for:"enclosure",value:"Enclosure"}),r(v,{id:"enclosure",modelValue:s.form.enclosure,"onUpdate:modelValue":t[4]||(t[4]=e=>s.form.enclosure=e),type:"text",onChange:a.submit,required:""},null,8,["modelValue","onChange"])]),o("div",null,[r(d,{for:"date_format",value:"Date Format"}),r(v,{id:"date_format",modelValue:s.form.date_format,"onUpdate:modelValue":t[5]||(t[5]=e=>s.form.date_format=e),type:"text",onChange:a.submit,required:""},null,8,["modelValue","onChange"])]),o("div",null,[r(d,{for:"date_format",value:"Numbers separator"}),_(o("select",{id:"currency_format","onUpdate:modelValue":t[6]||(t[6]=e=>s.form.currency_format=e),onChange:t[7]||(t[7]=(...e)=>a.submit&&a.submit(...e)),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(s.currency_formats,e=>(i(),l("option",{value:e},u(e),9,R))),256))],544),[[h,s.form.currency_format]])])]),n.store.processing?b("v-if",!0):(i(),l("div",W," Total Rows - "+u(s.form.items.length),1)),o("div",G,[o("table",H,[o("thead",null,[o("tr",null,[o("th",null,[r(w,{id:"index_check_all",name:"index_check_all",onInput:a.onCheckAll},null,8,["onInput"])]),o("th",null,[_(o("select",{id:"source_account_all","onUpdate:modelValue":t[8]||(t[8]=e=>s.source_account=e),onChange:t[9]||(t[9]=(...e)=>a.onSourceAccountChange&&a.onSourceAccountChange(...e)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,e=>(i(),l("option",{key:e.guid,value:e},u(e.name),9,J))),128))],544),[[h,s.source_account]])]),o("th",null,[o("div",K,[_(o("select",{id:"destination_account_all","onUpdate:modelValue":t[10]||(t[10]=e=>s.destination_account=e),onChange:t[11]||(t[11]=(...e)=>a.onDestinationAccountChange&&a.onDestinationAccountChange(...e)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,e=>(i(),l("option",{key:e.guid,value:e},u(e.name),9,O))),128))],544),[[h,s.destination_account]])])]),Q,(i(!0),l(c,null,p(n.store.props.items[0].value.length-1,e=>(i(),l("td",null,[_(o("select",{"onUpdate:modelValue":f=>s.form.selected_columns[e-1]=f,onChange:t[12]||(t[12]=f=>a.submit()),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(s.columns,f=>(i(),l("option",{value:f},u(f),9,Y))),256))],40,X),[[h,s.form.selected_columns[e-1]]])]))),256))])]),o("tbody",null,[(i(!0),l(c,null,p(s.form.items,(e,f)=>(i(),l("tr",{class:D(a.getTrValidClass(e))},[o("td",null,[r(w,{id:"index_check"+f,name:"index_check",checked:e.checked,"onUpdate:checked":m=>e.checked=m,onChange:a.submit},null,8,["id","checked","onUpdate:checked","onChange"]),e.is_valid===!1&&e.checked===!0?(i(),l("div",Z,u(e.validation_message),1)):b("v-if",!0)]),o("td",null,[_(o("select",{id:`source_account${f}`,"onUpdate:modelValue":m=>e.source_account=m,onChange:t[13]||(t[13]=(...m)=>a.submit&&a.submit(...m)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,m=>(i(),l("option",{key:m.guid,value:m},u(m.name),9,ee))),128))],40,$),[[h,e.source_account]])]),o("td",null,[_(o("select",{id:`destination_account${f}`,"onUpdate:modelValue":m=>e.destination_account=m,onChange:t[14]||(t[14]=(...m)=>a.submit&&a.submit(...m)),class:"max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(n.store.props.accounts,m=>(i(),l("option",{key:m.guid,value:m},u(m.name),9,oe))),128))],40,te),[[h,e.destination_account]])]),o("td",se,u(f),1),(i(!0),l(c,null,p(e.value,m=>(i(),l("td",re,u(m),1))),256))],2))),256))])])]),o("div",ne,[_(o("div",null,[o("p",ie,u(n.store.props.can_proceed_message),1)],512),[[A,n.store.props.can_proceed_message]]),r(V,{onClick:t[15]||(t[15]=e=>n.$router.back()),title:"Back"},{default:g(()=>[le]),_:1}),r(C,{disabled:s.form.processing||!n.store.props.can_proceed,onClick:a.next,title:"Next"},{default:g(()=>[ae]),_:1},8,["disabled","onClick"]),r(d,{for:"skip_errors",value:"Skip Invalid"}),r(w,{id:"skip_errors",name:"skip_errors",modelValue:s.form.skip_errors,"onUpdate:modelValue":t[16]||(t[16]=e=>s.form.skip_errors=e),onChange:a.submit},null,8,["modelValue","onChange"])])],32),b(" Save Settings Modal "),r(N,{show:s.savingSettings,onClose:t[25]||(t[25]=e=>s.savingSettings=!1),maxWidth:"w-full"},{title:g(()=>[me]),content:g(()=>[o("div",null,[r(d,{for:"import_settings_name",value:"Name"}),r(v,{id:"import_settings_name",modelValue:s.form.setting.name,"onUpdate:modelValue":t[18]||(t[18]=e=>s.form.setting.name=e),type:"text",placeholder:"Name...",required:""},null,8,["modelValue"]),_(o("input",{type:"hidden","onUpdate:modelValue":t[19]||(t[19]=e=>s.form.setting.type=e)},null,512),[[T,s.form.setting.type]])]),o("div",null,[r(d,{for:"import_settings_delimiter",value:"Delimiter"}),r(v,{id:"import_settings_delimiter",modelValue:s.form.setting.params.delimiter,"onUpdate:modelValue":t[20]||(t[20]=e=>s.form.setting.params.delimiter=e),type:"text",required:""},null,8,["modelValue"])]),o("div",null,[r(d,{for:"import_settings_enclosure",value:"Enclosure"}),r(v,{id:"import_settings_enclosure",modelValue:s.form.setting.params.enclosure,"onUpdate:modelValue":t[21]||(t[21]=e=>s.form.setting.params.enclosure=e),type:"text",required:""},null,8,["modelValue"])]),o("div",null,[r(d,{for:"import_settings_date_format",value:"Date Format"}),r(v,{id:"import_settings_date_format",modelValue:s.form.setting.params.date_format,"onUpdate:modelValue":t[22]||(t[22]=e=>s.form.setting.params.date_format=e),type:"text",required:""},null,8,["modelValue"])]),o("div",null,[r(d,{for:"import_settings_date_format",value:"Numbers separator"}),_(o("select",{id:"import_settings_currency_format","onUpdate:modelValue":t[23]||(t[23]=e=>s.form.setting.params.currency_format=e),class:"border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),l(c,null,p(s.currency_formats,e=>(i(),l("option",{value:e},u(e),9,ue))),256))],512),[[h,s.form.setting.params.currency_format]])])]),footer:g(()=>[o("div",de,[r(C,{onClick:a.saveSettings},{default:g(()=>[ce]),_:1},8,["onClick"]),r(V,{onClick:t[24]||(t[24]=e=>s.savingSettings=!1)},{default:g(()=>[pe]),_:1})])]),_:1},8,["show"])])):b("v-if",!0)}var _e=U(B,[["render",fe],["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/components/import/transactions_from_csv/TransactionsFromCsvPage3.vue"]]);const ge={class:"bg-white shadow mt-4 prose max-w-none"},he=q({name:"TransactionsFromCsvPage3",setup(n){return(t,k)=>{const x=y("FormLayout");return i(),P(x,{title:"Import Preview"},{default:g(()=>[o("div",ge,[r(_e)])]),_:1})}}});var ye=U(he,[["__file","/home/phalo/kainotomo/phmoney_docker/phmoney_assets/src/views/import/transactions_from_csv/TransactionsFromCsvPage3.vue"]]);export{ye as default};
