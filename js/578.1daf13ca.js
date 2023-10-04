"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[578],{255:(e,r,s)=>{s.r(r),s.d(r,{default:()=>q});var t=s(252);const a={class:"header-container"},n={class:"main-container"};function o(e,r,s,o,i,l){const u=(0,t.up)("vueHeader"),h=(0,t.up)("vueNavBar"),d=(0,t.up)("vueInputs"),c=(0,t.up)("vueFluxograma"),p=(0,t.up)("vueIlustrations"),m=(0,t.up)("vueFooter");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("header",a,[(0,t.Wm)(u)]),(0,t._)("main",n,[(0,t.Wm)(h,{class:"main-elements navbar"}),(0,t.Wm)(d,{class:"main-elements vueInputs"}),(0,t.Wm)(c,{class:"main-elements vueFluxograma"}),(0,t.Wm)(p,{class:"main-elements resultados"})]),(0,t.Wm)(m)],64)}var i=s(988),l=s(675),u=s(777),h=s(619),d=s(237),c=s(577),p=s(963);const m={class:"section-inputs-acessos"},v={class:"titulo-section-acessos"},g={class:"container-inputs-acessos",id:"sm"},f={class:"subtitulo-inputs-acessos"},M={class:"radio-container"},w=(0,t._)("label",{for:"sm-menor",class:"radio-label",id:"sm-vergne-menor"},null,-1),_=(0,t._)("label",{for:"sm-maior",class:"radio-label",id:"sm-vergne-maior"},null,-1),C={class:"container-inputs-acessos",id:"rm"},V={class:"subtitulo-inputs-acessos"},b={class:"radio-container"},k=(0,t._)("label",{for:"rm-menor",class:"radio-label",id:"rm-vergne-menor"},null,-1),$=(0,t._)("label",{for:"rm-maior",class:"radio-label",id:"rm-vergne-maior"},null,-1),z={class:"container-inputs-acessos",id:"depth"},I={class:"subtitulo-inputs-acessos"},G=(0,t._)("option",{value:""},null,-1),y={value:"menor"},Z={value:"entre"},R={value:"maior"},D={class:"container-inputs-acessos",id:"prod"},L={class:"subtitulo-inputs-acessos"},W=(0,t._)("option",{value:""},null,-1),U={value:"menor"},j={value:"entre"},x={value:"maior"};function F(e,r,s,a,n,o){const i=(0,t.up)("switchLanguage");return(0,t.wg)(),(0,t.iD)("section",m,[(0,t._)("h2",v,(0,c.zw)(e.$t("tituloInputs")),1),(0,t.Wm)(i,{class:"main-elements switch-language"}),(0,t._)("div",g,[(0,t._)("h3",f,(0,c.zw)(e.$t("smTituloVergne")),1),(0,t._)("span",null,(0,c.zw)(e.$t("smDescriptionVergne")),1),(0,t._)("div",M,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":r[0]||(r[0]=e=>n.vergne.surfaceMaterial=e),value:"menor",id:"sm-menor"},null,512),[[p.G2,n.vergne.surfaceMaterial]]),w,(0,t._)("span",null,(0,c.zw)(e.$t("sim")),1),(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":r[1]||(r[1]=e=>n.vergne.surfaceMaterial=e),value:"maior",id:"sm-maior"},null,512),[[p.G2,n.vergne.surfaceMaterial]]),_,(0,t._)("span",null,(0,c.zw)(e.$t("nao")),1)])]),(0,t._)("div",C,[(0,t._)("h3",V,(0,c.zw)(e.$t("rmTituloVergne")),1),(0,t._)("span",null,(0,c.zw)(e.$t("rmDescriptionVergne")),1),(0,t._)("div",b,[(0,t.wy)((0,t._)("input",{type:"radio",class:"rm","onUpdate:modelValue":r[2]||(r[2]=e=>n.vergne.rockMass=e),value:"menor",id:"rm-menor"},null,512),[[p.G2,n.vergne.rockMass]]),k,(0,t._)("span",null,(0,c.zw)(e.$t("sim")),1),(0,t.wy)((0,t._)("input",{type:"radio",class:"rm","onUpdate:modelValue":r[3]||(r[3]=e=>n.vergne.rockMass=e),value:"maior",id:"rm-maior"},null,512),[[p.G2,n.vergne.rockMass]]),$,(0,t._)("span",null,(0,c.zw)(e.$t("nao")),1)])]),(0,t._)("div",z,[(0,t._)("h3",I,(0,c.zw)(e.$t("depthTituloVergne")),1),(0,t._)("span",null,(0,c.zw)(e.$t("depthDescriptionVergne")),1),(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":r[4]||(r[4]=e=>n.vergne.depth=e),class:"depth",id:"depth-vergne"},[G,(0,t._)("option",y,(0,c.zw)(e.$t("depthMenorVergne")),1),(0,t._)("option",Z,(0,c.zw)(e.$t("depthEntreVergne")),1),(0,t._)("option",R,(0,c.zw)(e.$t("depthMaiorVergne")),1)],512),[[p.bM,n.vergne.depth]])]),(0,t._)("div",D,[(0,t._)("h3",L,(0,c.zw)(e.$t("prodTituloVergne")),1),(0,t._)("span",null,(0,c.zw)(e.$t("prodDescriptionVergne")),1),(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":r[5]||(r[5]=e=>n.vergne.prod=e),class:"prod",id:"prod-vergne"},[W,(0,t._)("option",U,(0,c.zw)(e.$t("prodMenorVergne")),1),(0,t._)("option",j,(0,c.zw)(e.$t("prodEntreVergne")),1),(0,t._)("option",x,(0,c.zw)(e.$t("prodMaiorVergne")),1)],512),[[p.bM,n.vergne.prod]])])])}var O=s(45),S=s(500);const T={components:{switchLanguage:O.Z},mixins:[S.Z],data(){return{vergne:{surfaceMaterial:"",rockMass:"",prod:"",depth:""}}},watch:{vergne:{handler(){this.disableObject(["rm","depth","prod"]),this.defaultImages(),this.setDefaultColor(),this.newValue(),this.$store.dispatch("changeInputsAcessos",{metodo:"vergne",value:this.vergne})},deep:!0}},mounted(){this.setDefaultColor(),this.disableObject(["rm","depth","prod"])},methods:{newValue(){this.resultado="","maior"===this.vergne.surfaceMaterial?(this.resultado="resultadoShaftVergne",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","shaft"])):"menor"===this.vergne.surfaceMaterial&&(this.enableObjects("rm"),this.setColorGreen(["start","surfaceMaterial"])),"menor"===this.vergne.surfaceMaterial&&"maior"===this.vergne.rockMass?(this.resultado="resultadoShaftVergne",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","rockMass","shaft"])):"menor"===this.vergne.surfaceMaterial&&"menor"===this.vergne.rockMass&&(this.enableObjects("depth"),this.setColorGreen(["start","surfaceMaterial","rockMass"])),"menor"===this.vergne.surfaceMaterial&&"menor"===this.vergne.rockMass&&"maior"===this.vergne.depth?(this.resultado="resultadoShaftVergne",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","rockMass","depthCenter","shaft"])):"menor"!==this.vergne.surfaceMaterial||"menor"!==this.vergne.rockMass||"entre"!==this.vergne.depth&&"menor"!==this.vergne.depth||(this.enableObjects("prod"),this.setColorGreen(["start","surfaceMaterial","rockMass","depthCenter"])),"menor"!==this.vergne.surfaceMaterial||"menor"!==this.vergne.rockMass||"entre"!==this.vergne.depth&&"menor"!==this.vergne.depth||"maior"!==this.vergne.prod?"menor"!==this.vergne.surfaceMaterial||"menor"!==this.vergne.rockMass||"entre"!==this.vergne.depth&&"menor"!==this.vergne.depth||"menor"!==this.vergne.prod&&"entre"!==this.vergne.prod||"menor"!==this.vergne.depth?"menor"!==this.vergne.surfaceMaterial||"menor"!==this.vergne.rockMass||"entre"!==this.vergne.depth&&"menor"!==this.vergne.depth||"menor"!==this.vergne.prod||"entre"!==this.vergne.depth?"menor"!==this.vergne.surfaceMaterial||"menor"!==this.vergne.rockMass||"entre"!==this.vergne.depth&&"menor"!==this.vergne.depth||"entre"!==this.vergne.prod||"entre"!==this.vergne.depth||(this.resultado="resultadoShaftVergne",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","rockMass","depthCenter","prodCenter","depthLeft","prodLeft","shaft"])):(this.resultado="resultadoRampaVergne",this.showImages(["rampa","truck"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","rockMass","depthCenter","prodCenter","depthLeft","prodLeft","rampa"])):(this.resultado="resultadoRampaVergne",this.showImages(["rampa","truck"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","rockMass","depthCenter","prodCenter","depthLeft","rampa"])):(this.resultado="resultadoCorreiVergne",this.showImages(["correia"]),this.setColorRed(),this.setColorGreen(["start","surfaceMaterial","rockMass","depthCenter","prodCenter","correia"]))}}};var H=s(744);const B=(0,H.Z)(T,[["render",F]]),E=B;var N=s(739),A=s(443);const K={name:"vue-view-vergne",components:{vueNavBar:i.Z,vueInputs:E,vueFluxograma:h.Z,vueIlustrations:d.Z,vueHeader:l.Z,vueFooter:u.Z},mixins:[N.Z],beforeMount(){this.$store.dispatch("changeMetodo","Vergne"),(0,A.vK)("temaVermelho")}},Y=(0,H.Z)(K,[["render",o]]),q=Y}}]);
//# sourceMappingURL=578.1daf13ca.js.map