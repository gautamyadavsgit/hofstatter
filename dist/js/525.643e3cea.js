"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[525],{2525:function(e,t,l){l.r(t),l.d(t,{default:function(){return P}});var n=l(3396),a=l(2268);const s={class:"col-span-12"},r={class:"col-span-12"},i={class:"list-none mt-2"},o={class:"flex rounded-lg w-full justify-between"},d={class:"flex justify-between"},c=["src"],m={class:"py-1 pl-3"},p={class:"font-bold font-oxygenBold text-base"},u=(0,n._)("p",{class:"text-base"},"2:00PM , 06.12.2022",-1),f={class:"flex items-center justify-end"};function y(e,t,l,y,g,b){const h=(0,n.up)("PatientAppointmentSearchForm"),x=(0,n.up)("main-icon"),w=(0,n.up)("main-button"),_=(0,n.up)("main-card");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(h,{onFilterData:b.FilterData},null,8,["onFilterData"]),(0,n._)("div",r,[(0,n._)("div",null,[(0,n._)("ul",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.users,(e=>((0,n.wg)(),(0,n.iD)("li",{class:"my-2",key:e.id},[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",d,[(0,n._)("img",{src:e.img,class:"inline-block rounded-full h-[55px] w-[55px] border border-black"},null,8,c),(0,n._)("div",m,[(0,n._)("h4",p,(0,a.zw)(e.name),1),u])]),(0,n._)("div",f,["dr"==e.type?((0,n.wg)(),(0,n.j4)(x,{key:0,icon:"fa-solid:notes-medical",bgStyle:"bg-[#009FF929]",icoStyle:"!text-2xl text-[#009FF9]"})):(0,n.kq)("",!0),"vc"==e.type?((0,n.wg)(),(0,n.j4)(w,{key:1,class:"hidden md:inline-block"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Impffragebogen ")])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(x,{icon:"maki:cross",bgStyle:"bg-[#F8CBC8]",icoStyle:"!text-2xl text-[#FD5957]"}),(0,n.Wm)(x,{icon:"clarity:edit-solid",bgStyle:"bg-[#E7EEF6]",icoStyle:"!text-2xl text-[#2E3192]"})])])])),_:2},1024)])))),128))])])])])}var g=l(9242);const b={class:"col-span-12 py-6 px-2"},h={class:"grid grid-cols-1 md:grid-cols-3"},x={class:"col-span-1"},w=(0,n._)("p",{class:"text-light-grey text-base font-oxygenLight mt-2"}," 6th wednesday, December ",-1),_={class:"md:flex justify-between col-span-2"},v={class:"col-span-1 md:col-span-2 flex justify-between mt-2"},F=(0,n._)("label",{class:"text-sm my-auto md:my-2 md:mr-2 font-bold block md:inline"},"Filter",-1),k=(0,n._)("option",{value:"all",class:"font-oxygen"},"All",-1),D=(0,n._)("option",{value:"dr",class:"font-oxygen"},"Doctor",-1),j=[k,D],S={class:"col-span-1 md:col-span-2"},W=["placeholder"];function z(e,t,l,s,r,i){const o=(0,n.up)("main-heading"),d=(0,n.up)("main-button");return(0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",h,[(0,n._)("div",x,[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.$t("Appointments today")),1)])),_:1}),w]),(0,n._)("div",_,[(0,n._)("div",v,[F,(0,n.wy)((0,n._)("select",{class:"h-9 border-1 max-sm:w-56 border-[#82837E26] rounded-md text-sm !font-oxygen","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchFilter=e)},j,512),[[g.bM,r.searchFilter]])]),(0,n._)("div",S,[(0,n._)("form",{class:"flex justify-between mt-4 md:mt-2",onSubmit:t[2]||(t[2]=(...e)=>i.formSubmitHandler&&i.formSubmitHandler(...e))},[(0,n.wy)((0,n._)("input",{type:"text",class:"w-56 rounded-full h-9 border-none mr-2 px-4",placeholder:e.$t("search"),"onUpdate:modelValue":t[1]||(t[1]=e=>r.searchQuery=e)},null,8,W),[[g.nr,r.searchQuery]]),(0,n.Wm)(d,{link:!1,mode:"!py-1 !px-3"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.$t("Apply")),1)])),_:1})],32)])])])])}var A={emits:["filter-data"],data(){return{searchQuery:"",searchFilter:"all"}},methods:{formSubmitHandler(e){e.preventDefault(),this.$emit("filter-data",{searchQuery:this.searchQuery,searchFilter:this.searchFilter})}}},C=l(89);const E=(0,C.Z)(A,[["render",z]]);var Q=E,U={components:{PatientAppointmentSearchForm:Q},data(){return{users:[{id:"1",name:"Dr. Pickem Christian",img:"https://randomuser.me/api/portraits/women/3.jpg",type:"dr"},{id:"2",name:"Impftermin, Influenza",img:"https://randomuser.me/api/portraits/women/3.jpg",color:"bg-[#FFDFDF80]",type:"vc"},{id:"3",name:"Dr. Ken Butler",img:"https://randomuser.me/api/portraits/men/87.jpg",type:"dr"},{id:"4",name:"Röntgen, Ärztezentrum Wienerwald",img:"https://randomuser.me/api/portraits/women/3.jpg",type:"rp"}]}},methods:{FilterData(e){console.log(e)}}};const H=(0,C.Z)(U,[["render",y]]);var P=H}}]);
//# sourceMappingURL=525.643e3cea.js.map