"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[106],{4357:function(t,e){e["Z"]={data(){return{clicked:!1}},methods:{scroll(t){t.scrollIntoView()},eventSectionScroll(){this.clicked||(this.clicked=!0,window.scrollTo({top:window.pageYOffset-200,behavior:"smooth"}))}}}},4106:function(t,e,i){i.r(e),i.d(e,{default:function(){return w}});var s=i(3396),l=i(2268);const a={class:"col-span-12",ref:"dateSectionid"},o={class:"grid grid-cols-2"},n={class:"col-span-2 flex items-center justify-between"},c={class:"col-span-2 border-b py-4"},r={class:"flex rounded-lg w-full justify-between"},d=(0,s._)("div",{class:"flex justify-between"},[(0,s._)("img",{src:"https://randomuser.me/api/portraits/women/56.jpg",class:"inline-block rounded-full h-[55px] w-[55px] border border-black"}),(0,s._)("div",{class:"py-1 pl-3"},[(0,s._)("h4",{class:"font-bold font-oxygenBold text-base"}," Dr. Christian Pickem "),(0,s._)("p",{class:"text-sm"},"Ärztezentrum Wienerwald")])],-1),u={class:"md:w-5/12 col-span-2 mt-6"};function h(t,e,i,h,m,p){const k=(0,s.up)("main-heading"),f=(0,s.up)("iconify-icon"),w=(0,s.up)("main-button"),b=(0,s.up)("v-calendar"),v=(0,s.up)("main-card");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",n,[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("Doctor Details")),1)])),_:1}),(0,s._)("a",{onClick:e[0]||(e[0]=e=>t.$router.go(-1)),class:"font-bold text-sm text-blue"},[(0,s.Wm)(f,{icon:"ion:chevron-back",class:"inline-block"}),(0,s.Uk)(" "+(0,l.zw)(t.$t("Back")),1)])]),(0,s._)("div",c,[(0,s._)("div",r,[d,(0,s._)("div",null,[(0,s.Wm)(w,{link:!1,onClick:p.dateSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("Continue")),1)])),_:1},8,["onClick"])])])]),(0,s._)("div",u,[(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t.$t("Choose Slot Date")),1)])),_:1}),(0,s.Wm)(b,{attributes:p.attributes,masks:{title:"MMM YYYY",weekdays:"WWW"},"is-expanded":"",onDayclick:p.onDayClick},null,8,["attributes","onDayclick"])])])])),_:1})],512)}i(7658);var m=i(4357),p={mixins:[m.Z],data(){return{date:new Date}},computed:{attributes(){return[{key:this.date,highlight:"green",dates:this.date}]}},methods:{onDayClick(t){this.date=t.date,this.eventSectionScroll()},dateSubmit(){""!=this.chooseDate?(localStorage.setItem("date",this.chooseDate),localStorage.setItem("type",this.$route.query.type),localStorage.setItem("value",this.$route.query.value),this.$router.push({name:"PatientAppointmentChooseTime"})):this.$swal({title:this.$t("Please Select atleast one date"),icon:"error"})}},created(){this.$nextTick((()=>{setTimeout((()=>{this.scroll(this.$refs.dateSectionid)}),1e3)}))},updated(){this.$nextTick((()=>{setTimeout((()=>{this.scroll(this.$refs.dateSectionid)}),1e3)}))}},k=i(89);const f=(0,k.Z)(p,[["render",h]]);var w=f}}]);
//# sourceMappingURL=106.41d2f0b7.js.map