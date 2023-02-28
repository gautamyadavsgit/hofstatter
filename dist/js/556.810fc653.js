"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[556],{9556:function(t,e,l){l.r(e),l.d(e,{default:function(){return H}});var s=l(3396),a=l(2268),o=l(9242);const r={class:"lg:container lg:px-0 mx-auto md:mt-6 chat-shadow-double"},i={class:"h-[77vh]"},n={class:"md:flex rounded h-full"};function c(t,e,l,c,d,u){const h=(0,s.up)("PatientChatFilter"),f=(0,s.up)("PatientChatContact"),p=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",i,[(0,s._)("div",n,[(0,s._)("div",{class:(0,a.C_)(["md:w-40% lg:w-[30%] w-full flex flex-col chat-shadow z-20",d.isChatRoute?"hidden md:flex":""])},[(0,s.Wm)(h,{onApplyFilter:u.applyFilter},null,8,["onApplyFilter"]),(0,s.Wm)(f,{filter:d.filter},null,8,["filter"])],2),d.isChatRoute?((0,s.wg)(),(0,s.j4)(p,{key:0,mode:"out-in"},{default:(0,s.w5)((({Component:t,route:e})=>[(0,s.Wm)(o.uT,{name:e.meta.transition||"fade"},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.j4)((0,s.LL)(t)))])),_:2},1032,["name"])])),_:1})):(0,s.kq)("",!0)])])])}const d={class:"text-center grid grid-cols-4 justify-between items-center gap-6 chat-shadow-double h-[70px]"};function u(t,e,l,o,r,i){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("a",{href:"javascript:void(0)",class:(0,a.C_)(["text-sm border-blue font-oxygenLight cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out",{"text-black border-b-4 font-bold":"all"==r.activeElement}]),onClick:e[0]||(e[0]=t=>i.applyContactFilter("all"))},(0,a.zw)(t.$t("All")),3),(0,s._)("a",{href:"javascript:void(0)",class:(0,a.C_)(["text-sm text-[#82837E] border-blue font-oxygenLight cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out",{"text-black border-b-4 font-bold":"unread"==r.activeElement}]),onClick:e[1]||(e[1]=t=>i.applyContactFilter("unread"))},(0,a.zw)(t.$t("Unread")),3),(0,s._)("a",{key:"unresolve",href:"javascript:void(0)",class:(0,a.C_)(["text-sm text-[#82837E] font-oxygenLight border-blue cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out",{"text-black border-b-4 font-bold":"unresolve"==r.activeElement}]),onClick:e[2]||(e[2]=t=>i.applyContactFilter("unresolve"))},(0,a.zw)(t.$t("Unresolve")),3),(0,s._)("a",{class:(0,a.C_)(["text-sm text-[#82837E] font-oxygenLight border-blue cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out",{"text-black border-b-4 font-bold":"filter"==r.activeElement}]),onClick:e[3]||(e[3]=t=>i.applyContactFilter("filter"))},(0,a.zw)(t.$t("Filter")),3)])}var h={data(){return{activeElement:"all"}},methods:{applyContactFilter(t){this.activeElement=t,this.$emit("apply-filter",t)}}},f=l(89);const p=(0,f.Z)(h,[["render",u]]);var m=p;const x={class:"flex-1 overflow-auto",ref:"chatContact"},g={class:"px-5 flex items-center bg-grey-light cursor-pointer border-b border-[#82837E26]"},b=(0,s._)("div",null,[(0,s._)("img",{class:"h-14 w-14 rounded-full",src:"https://randomuser.me/api/portraits/thumb/men/75.jpg"})],-1),y={class:"ml-4 flex-1 border-grey-lighter py-4"},v={class:"flex items-bottom justify-between"},_=(0,s._)("p",{class:"font-bold text-base font-oxygenBold"},"Annette Black",-1),w={class:"text-xs text-grey-darkest"},C=(0,s._)("div",{class:"flex items-bottom justify-between"},[(0,s._)("p",{class:"text-sm font-oxygenLight mt-1 text-light-grey"}," Nulla Lorem mollit cupidatat irure "),(0,s._)("p",{class:"text-xs text-off-light-grey font-oxygenLight mt-1"}," 12:45 ")],-1),k={class:"px-5 flex items-center bg-grey-light cursor-pointer border-b border-[#82837E26]"},j=(0,s._)("div",null,[(0,s._)("img",{class:"h-14 w-14 rounded-full",src:"https://randomuser.me/api/portraits/thumb/men/75.jpg"})],-1),L={class:"ml-4 flex-1 border-grey-lighter py-4"},E={class:"flex items-bottom justify-between"},F=(0,s._)("p",{class:"font-bold text-base font-oxygenBold"},"Annette Black",-1),W={class:"text-xs text-grey-darkest"},$=(0,s._)("div",{class:"flex items-bottom justify-between"},[(0,s._)("p",{class:"text-sm font-oxygenLight mt-1 text-light-grey"}," Nulla Lorem mollit cupidatat irure "),(0,s._)("p",{class:"text-xs text-off-light-grey font-oxygenLight mt-1"}," 12:45 ")],-1),A={class:"px-5 flex items-center bg-grey-light cursor-pointer border-b border-[#82837E26]"},B=(0,s._)("div",null,[(0,s._)("img",{class:"h-14 w-14 rounded-full",src:"https://randomuser.me/api/portraits/thumb/men/75.jpg"})],-1),P={class:"ml-4 flex-1 border-grey-lighter py-4"},z={class:"flex items-bottom justify-between"},R=(0,s._)("p",{class:"font-bold text-base font-oxygenBold"},"Annette Black",-1),D={class:"text-xs text-grey-darkest"},N=(0,s._)("div",{class:"flex items-bottom justify-between"},[(0,s._)("p",{class:"text-sm font-oxygenLight mt-1 text-light-grey"}," Nulla Lorem mollit cupidatat irure "),(0,s._)("p",{class:"text-xs text-off-light-grey font-oxygenLight mt-1"}," 12:45 ")],-1);function Z(t,e,l,a,o,r){const i=(0,s.up)("iconify-icon"),n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",x,[(0,s.Wm)(n,{to:"/chat/gautam",class:"w-full"},{default:(0,s.w5)((()=>[(0,s._)("div",g,[b,(0,s._)("div",y,[(0,s._)("div",v,[_,(0,s._)("p",w,[(0,s.Wm)(i,{icon:"bi:three-dots",class:"text-xl"})])]),C])])])),_:1}),(0,s.Wm)(n,{to:"/chat/vivek",class:"w-full"},{default:(0,s.w5)((()=>[(0,s._)("div",k,[j,(0,s._)("div",L,[(0,s._)("div",E,[F,(0,s._)("p",W,[(0,s.Wm)(i,{icon:"bi:three-dots",class:"text-xl"})])]),$])])])),_:1}),(0,s.Wm)(n,{to:"/chat/pawan",class:"w-full"},{default:(0,s.w5)((()=>[(0,s._)("div",A,[B,(0,s._)("div",P,[(0,s._)("div",z,[R,(0,s._)("p",D,[(0,s.Wm)(i,{icon:"bi:three-dots",class:"text-xl"})])]),N])])])),_:1})],512)}var T={props:["filter"],data(){return{fullPage:!1}},watch:{filter(){let t=this.$loading.show({container:this.fullPage?null:this.$refs.chatContact,color:"#000000",loader:"bars"});setTimeout((()=>{t.hide()}),1e3)}}};const U=(0,f.Z)(T,[["render",Z]]);var q=U,M={components:{PatientChatFilter:m,PatientChatContact:q},data(){return{isChatRoute:!0,filter:""}},methods:{hideContact(){"chatMessages"===this.$route.name?this.isChatRoute=!0:this.isChatRoute=!1},applyFilter(t){this.filter=t}},watch:{$route(){this.hideContact()}},created(){this.hideContact()},updated(){this.hideContact()}};const G=(0,f.Z)(M,[["render",c]]);var H=G}}]);
//# sourceMappingURL=556.810fc653.js.map