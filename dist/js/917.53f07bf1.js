"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[917],{7707:function(e,t){const s={methods:{formatDate(e){const t={year:"numeric",month:"short",day:"numeric"};return new Intl.DateTimeFormat("en-US",t).format(e)},formatTime(e){const t={hour:"numeric",minute:"numeric",hour12:!0};return new Intl.DateTimeFormat("en-US",t).format(e)},formatDateTime(e){return`${this.formatDate(e)} ${this.formatTime(e)}`}}};t["Z"]=s},7799:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var i=s(3396),m=s(2268),l=s(9242);const o={class:"h-[100%] md:w-[60$] lg:w-[70%] w-full flex flex-col"},n={class:"py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center chat-shadow-double h-[70px]"},d={class:"flex items-center"},r={class:"block lg:hidden"},a=(0,i.uE)('<div><img class="w-9 h-9 rounded-full" src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"></div><div class="ml-4"><p class="font-bold text-base font-oxygenBold">Annette Black</p></div><div class="w-2 h-2 rounded-full bg-[#2CC344] ml-6"></div><div class="ml-4"><p class="text-sm text-[#82837E] font-oxygenLight">Online</p></div>',4),c={class:"flex-1 overflow-auto mt-3",ref:"chatSection"},u={class:"py-2 px-3"},p={class:"border-t flex"},h={class:"py-2 flex items-center w-[80%] lg:w-[94%]"},f={class:"flex-1 px-4"},x=["placeholder"],g={class:"py-4 px-3 bg-[#181FF4] lg:w-[6%] w-[20%] box-border"};function y(e,t,s,y,w,v){const b=(0,i.up)("iconify-icon"),_=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",n,[(0,i._)("div",d,[(0,i._)("div",r,[(0,i.Wm)(_,{to:{name:"PatientChat"}},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{icon:"material-symbols:arrow-back-rounded",class:"text-2xl"})])),_:1})]),a])]),(0,i._)("div",c,[(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(w.msgArray,(e=>((0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)(["flex mb-2",e.snd?"justify-end":""]),key:e.id},[(0,i._)("div",null,[(0,i._)("p",{class:(0,m.C_)(["text-sm mt-1 chat-msg",e.snd?"snd":""])},(0,m.zw)(e.msg),3),(0,i._)("p",{class:(0,m.C_)(["text-sm text-[#82837E] mt-1",e.snd?"text-right":""])},(0,m.zw)(e.date),3)])],2)))),128))])],512),(0,i._)("form",{onSubmit:t[1]||(t[1]=(0,l.iM)(((...e)=>v.sendMsg&&v.sendMsg(...e)),["prevent"]))},[(0,i._)("div",p,[(0,i._)("div",h,[(0,i._)("div",f,[(0,i.wy)((0,i._)("input",{type:"text",class:"w-full border-none focus:outline-none",placeholder:e.$t("Write Your reply here"),"onUpdate:modelValue":t[0]||(t[0]=e=>w.msg=e)},null,8,x),[[l.nr,w.msg,void 0,{trim:!0}]])]),(0,i._)("div",null,[(0,i.Wm)(b,{class:"text-2xl mx-1 inline-block",icon:"ph:smiley-fill"}),(0,i.Wm)(b,{class:"text-2xl mx-1 inline-block",icon:"heroicons:paper-clip-solid"}),(0,i.Wm)(b,{class:"text-2xl mx-1 inline-block",icon:"ph:camera-fill"})])]),(0,i._)("button",g,[(0,i.Wm)(b,{class:"text-2xl mx-1 inline-block text-white",icon:"ion:send"})])])],32)])}s(7658);var w=s.p+"media/send.e5e312db.mp3",v=s(7707);const b=new Audio(w);var _={mixins:[v.Z],data(){return{isRoute:"",msg:"",msgArray:[{id:1,msg:"Lorem Ipsum is simply dummy text of the",snd:!1,date:"12:45"},{id:2,msg:"Lorem Ipsum is simply dummy text of the",snd:!0,date:"12:45"},{id:3,msg:"Lorem Ipsum is simply dummy text of the",snd:!1,date:"12:45"},{id:4,msg:"Lorem Ipsum is simply dummy text of the",snd:!0,date:"12:45"},{id:5,msg:"Lorem Ipsum is simply dummy text of the",snd:!1,date:"12:45"},{id:6,msg:"Lorem Ipsum is simply dummy text of the",snd:!0,date:"12:45"},{id:7,msg:"Lorem Ipsum is simply dummy text of the",snd:!1,date:"12:45"},{id:8,msg:"Lorem Ipsum is simply dummy text of the",snd:!0,date:"12:45"},{id:9,msg:"Lorem Ipsum is simply dummy text of the",snd:!1,date:"12:45"},{id:10,msg:"Lorem Ipsum is simply dummy text of the",snd:!0,date:"12:45"}]}},computed:{date(){return this.formatTime(new Date)}},methods:{scrollBottom(){this.$refs.chatSection.scrollTop=this.$refs.chatSection.scrollHeight},sendMsg(){if(""!=this.msg){let e={id:this.date.toISOString,msg:this.msg,snd:!0,date:this.date};this.msgArray.push(e)}this.$nextTick((()=>{this.scrollBottom(),b.play()})),this.msg=""}},created(){this.$nextTick((()=>{this.scrollBottom()}))},updated(){this.$nextTick((()=>{this.scrollBottom()}))}},k=s(89);const I=(0,k.Z)(_,[["render",y]]);var L=I}}]);
//# sourceMappingURL=917.53f07bf1.js.map