"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[973],{8973:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(3396),o=e(9242),i=e(2268);const l={class:"content-area"},s={class:"m-auto w-full"},a={class:"mb-5"},u={class:"text-center block text-[16px] leading-[20px] font-normal",for:"tpn"},c={class:"btn-area"},p=(0,r._)("div",{class:"m-auto w-[300px]"},[(0,r._)("button",{class:"main-button"},"Login")],-1);function d(t,n,e,d,m,h){const b=(0,r.up)("back-button");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:n[1]||(n[1]=(0,o.iM)(((...t)=>h.tpnSubmitHandler&&h.tpnSubmitHandler(...t)),["prevent"]))},[(0,r._)("div",l,[(0,r._)("div",s,[(0,r._)("div",a,[(0,r._)("label",u,(0,i.zw)(t.$t("enter-tpn"))+" "+(0,i.zw)(h.phoneNumber),1),(0,r.wy)((0,r._)("input",{type:"number",id:"tpn",placeholder:"0664555",class:"input-login","onUpdate:modelValue":n[0]||(n[0]=t=>m.tpn=t)},null,512),[[o.nr,m.tpn,void 0,{trim:!0}]])])])]),(0,r._)("div",c,[p,(0,r.Wm)(b)])],32)}e(7658);var m={data(){return{tpn:null}},computed:{phoneNumber(){return this.$store.state.login.loginData.phone}},methods:{tpnSubmitHandler(){null!=this.tpn?this.tpn==this.$store.state.login.dummyLoginData.tpn?(this.$store.commit("login/setLogin"),console.log(),this.$store.state.login.isLoggedIn?this.$router.push("/dashboard"):window.location.href=window.location.href):this.$swal({title:this.$t("error"),text:this.$t("global-error"),icon:"error"}):this.$swal({title:this.$t("error"),text:this.$t("error-text"),icon:"warning"})}}};function h(t){t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{en:{"enter-tpn":t=>{const{normalize:n}=t;return n(["Please enter SMS TAN sent to "])},error:t=>{const{normalize:n}=t;return n(["Error"])},"error-text":t=>{const{normalize:n}=t;return n(["Field cannot be empty"])},"global-error":t=>{const{normalize:n}=t;return n(["Invalid TPN"])}},gr:{"enter-tpn":t=>{const{normalize:n}=t;return n(["Bitte geben Sie SMS TAN gesendet an ein"])},error:t=>{const{normalize:n}=t;return n(["Fehler"])},"error-text":t=>{const{normalize:n}=t;return n(["Feld darf nicht leer sein"])},"global-error":t=>{const{normalize:n}=t;return n(["Ungültige TPN"])}}}})}var b=e(89);"function"===typeof h&&h(m);const g=(0,b.Z)(m,[["render",d]]);var f=g}}]);
//# sourceMappingURL=973.af12da18.js.map