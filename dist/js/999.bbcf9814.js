"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[999],{3999:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var a=s(3396);const l={class:"col-span-12"},o={class:"grid grid-cols-2"},i={class:"col-span-2 flex items-center justify-between"},n={class:"col-span-2 border-b py-4"},c={class:"flex rounded-lg w-full justify-between"},r=(0,a._)("div",{class:"flex justify-between"},[(0,a._)("img",{src:"https://randomuser.me/api/portraits/women/56.jpg",class:"inline-block rounded-full h-[55px] w-[55px] border border-black"}),(0,a._)("div",{class:"py-1 pl-3"},[(0,a._)("h4",{class:"font-bold font-oxygenBold text-base"}," Dr. Christian Pickem "),(0,a._)("p",{class:"text-sm"},"Ärztezentrum Wienerwald")])],-1),u={class:"md:w-5/12 col-span-2 mt-6"};function d(e,t,s,d,h,m){const p=(0,a.up)("main-heading"),k=(0,a.up)("iconify-icon"),b=(0,a.up)("main-button"),f=(0,a.up)("v-calendar"),w=(0,a.up)("main-card");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",i,[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Doctor Details")])),_:1}),(0,a._)("a",{onClick:t[0]||(t[0]=t=>e.$router.go(-1)),class:"font-bold text-sm text-blue"},[(0,a.Wm)(k,{icon:"ion:chevron-back",class:"inline-block"}),(0,a.Uk)(" Rücken")])]),(0,a._)("div",n,[(0,a._)("div",c,[r,(0,a._)("div",null,[(0,a.Wm)(b,{link:!1,onClick:m.dateSubmit},{default:(0,a.w5)((()=>[(0,a.Uk)("Continue")])),_:1},8,["onClick"])])])]),(0,a._)("div",u,[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Choose Slot Date")])),_:1}),(0,a.Wm)(f,{attributes:h.attributes,class:"mt-6",masks:{title:"MMM YYYY",weekdays:"WWW"},onDayclick:m.onDayClick,"is-expanded":""},null,8,["attributes","onDayclick"])])])])),_:1})])}s(7658);var h={data(){return{chooseDate:"",attributes:[{key:this.date,highlight:!0,dates:this.date}]}},methods:{onDayClick(e){this.chooseDate=e.date,console.log(this.chooseDate)},dateSubmit(){""!=this.chooseDate?(console.log(this.chooseDate),localStorage.setItem("date",this.chooseDate),localStorage.setItem("type",this.$route.query.type),localStorage.setItem("value",this.$route.query.value),this.$router.push({name:"PatientAppointmentChooseTime"})):this.$swal("Please select atleat one date")}}},m=s(89);const p=(0,m.Z)(h,[["render",d]]);var k=p}}]);
//# sourceMappingURL=999.bbcf9814.js.map