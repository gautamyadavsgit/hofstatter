"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[225],{4225:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var o=n(3396);const l={class:"grid grid-cols-12"},i={class:"col-span-12"},a={class:"mb-3"};function c(e,t,n,c,u,s){const r=(0,o.up)("main-heading"),p=(0,o.up)("PatientAppointmentTypeForm"),d=(0,o.up)("main-card"),v=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",i,[(0,o.Wm)(d,{customStyle:"md:mt-[3.5rem]"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Termin Buchen")])),_:1}),(0,o.Wm)(p)])])),_:1})]),(0,o.Wm)(v)])}var u=n(7139);const s=e=>((0,o.dD)("data-v-33224c48"),e=e(),(0,o.Cn)(),e),r=s((()=>(0,o._)("div",null,[(0,o._)("label",{class:"font-bold text-sm text-black"},"Vaccination")],-1))),p={class:"mt-3"},d=["selected"],v=(0,o.uE)('<option value="COVID-19" data-v-33224c48>COVID-19</option><option value="FSME" data-v-33224c48>FSME</option><option value="Diphterie" data-v-33224c48>Diphterie</option><option value="Influenza" data-v-33224c48>Influenza</option><option value="Poliomyelitis" data-v-33224c48>Poliomyelitis</option>',5),m=s((()=>(0,o._)("div",null,[(0,o._)("label",{class:"font-bold text-sm text-black"},"Sleep Screening")],-1))),h={class:"mt-3"},g=["selected"],b=s((()=>(0,o._)("option",null,"COVID-19",-1))),_=s((()=>(0,o._)("option",{value:"all"},"FSME",-1))),y=s((()=>(0,o._)("option",{value:"all"},"Diphterie",-1))),f=s((()=>(0,o._)("option",{value:"all"},"Influenza",-1))),x=s((()=>(0,o._)("option",{value:"all"},"Poliomyelitis",-1))),C=s((()=>(0,o._)("div",null,[(0,o._)("label",{class:"font-bold text-sm text-black"},"Lung Function")],-1))),D={class:"mt-3"},w=["selected"],F=s((()=>(0,o._)("option",null,"COVID-19",-1))),S=s((()=>(0,o._)("option",{value:"all"},"FSME",-1))),E=s((()=>(0,o._)("option",{value:"all"},"Diphterie",-1))),A=s((()=>(0,o._)("option",{value:"all"},"Influenza",-1))),T=s((()=>(0,o._)("option",{value:"all"},"Poliomyelitis",-1))),B=s((()=>(0,o._)("div",null,[(0,o._)("label",{class:"font-bold text-sm text-black"},"Blood Draw")],-1))),k={class:"mt-3"},I=["selected"],V=(0,o.uE)('<option value="covid-19" data-v-33224c48>COVID-19</option><option value="all" data-v-33224c48>FSME</option><option value="all" data-v-33224c48>Diphterie</option><option value="all" data-v-33224c48>Influenza</option><option value="all" data-v-33224c48>Poliomyelitis</option>',5),P={class:"mt-8 flex"};function z(e,t,n,l,i,a){const c=(0,o.up)("main-button");return(0,o.wg)(),(0,o.iD)("form",{onSubmit:t[4]||(t[4]=(...e)=>a.typeSubmitHandler&&a.typeSubmitHandler(...e)),class:"grid md:grid-cols-5 grid-cols-1 justify-between items-center mt-6"},[(0,o._)("div",null,[r,(0,o._)("div",p,[(0,o._)("select",{class:(0,u.C_)(["md:w-36 h-9 hover:blur-0 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226] over:blur-0",{"blur-[1.5px]":1==i.vaccinationFilter}]),placeholder:"vaccination",name:"vaccination",onChange:t[0]||(t[0]=(...e)=>a.onAppointmentTypeChange&&a.onAppointmentTypeChange(...e))},[(0,o._)("option",{value:"",selected:i.vaccinationFilter},"Vaccination",8,d),v],34)])]),(0,o._)("div",null,[m,(0,o._)("div",h,[(0,o._)("select",{class:(0,u.C_)(["w-36 h-9 hover:blur-0 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226]",{"blur-[1.5px]":1==i.sleepScreening}]),placeholder:"vaccination",onChange:t[1]||(t[1]=(...e)=>a.onAppointmentTypeChange&&a.onAppointmentTypeChange(...e)),name:"sleepScreening"},[(0,o._)("option",{value:"",selected:i.sleepScreening},"Sleep Screening",8,g),b,_,y,f,x],34)])]),(0,o._)("div",null,[C,(0,o._)("div",D,[(0,o._)("select",{class:(0,u.C_)(["w-36 h-9 border-1 hover:blur-0 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226]",{"blur-[1.5px]":1==i.lungFunction}]),placeholder:"vaccination",onChange:t[2]||(t[2]=(...e)=>a.onAppointmentTypeChange&&a.onAppointmentTypeChange(...e)),name:"lungFunction"},[(0,o._)("option",{value:"",selected:i.lungFunction},"Lung Function",8,w),F,S,E,A,T],34)])]),(0,o._)("div",null,[B,(0,o._)("div",k,[(0,o._)("select",{class:(0,u.C_)(["w-36 h-9 border-1 hover:blur-0 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226]",{"blur-[1.5px]":1==i.bloodDraw}]),placeholder:"vaccination",onChange:t[3]||(t[3]=(...e)=>a.onAppointmentTypeChange&&a.onAppointmentTypeChange(...e)),name:"bloodDraw"},[(0,o._)("option",{value:"",selected:i.bloodDraw},"BloodDraw",8,I),V],34)])]),(0,o._)("div",null,[(0,o._)("div",P,[(0,o.Wm)(c,{link:!1,mode:"md:!py-2 m-auto"},{default:(0,o.w5)((()=>[(0,o.Uk)("Apply")])),_:1})])])],32)}n(7658);var M={data(){return{vaccinationFilter:!1,sleepScreening:!1,lungFunction:!1,bloodDraw:!1,selectBoxName:"",selectBoxValue:""}},methods:{handleBlurEvents(e){"vaccination"==e&&(this.vaccinationFilter=!1,this.sleepScreening=!0,this.lungFunction=!0,this.bloodDraw=!0),"sleepScreening"==e&&(this.sleepScreening=!1,this.vaccinationFilter=!0,this.lungFunction=!0,this.bloodDraw=!0),"lungFunction"==e&&(this.lungFunction=!1,this.sleepScreening=!0,this.vaccinationFilter=!0,this.bloodDraw=!0),"bloodDraw"==e&&(this.sleepScreening=!0,this.bloodDraw=!1,this.vaccinationFilter=!0,this.lungFunction=!0)},onAppointmentTypeChange(e){console.log(e.target.value),""!=e.target.value&&(this.handleBlurEvents(e.target.name),this.selectBoxName=e.target.name,this.selectBoxValue=e.target.value)},typeSubmitHandler(e){e.preventDefault();var t=this.selectBoxName,n=this.selectBoxValue;""!=t&&""!=n?this.$router.push({name:"PatientAppointmentsChooseDate",query:{type:t,value:n}}):this.$swal("The form can not be empty")}},created(){this.$route.query.type&&this.$route.query.value&&this.handleBlurEvents(this.$route.query.type)}},O=n(89);const W=(0,O.Z)(M,[["render",z],["__scopeId","data-v-33224c48"]]);var $=W,q={components:{PatientAppointmentTypeForm:$}};const H=(0,O.Z)(q,[["render",c]]);var N=H}}]);
//# sourceMappingURL=225.f0ac25eb.js.map