"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[712],{938:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var s=r(252);const a={class:"contaiener-tabview-segunda"};function n(e,t,r,n,i,o){const u=(0,s.up)("vueInputsPersonalizado"),l=(0,s.up)("vueInputsCardozo");return(0,s.wg)(),(0,s.iD)("section",a,["personalizado"===o.verificarTemplate?((0,s.wg)(),(0,s.j4)(u,{key:0})):(0,s.kq)("",!0),"cardozoTemplate"===o.verificarTemplate?((0,s.wg)(),(0,s.j4)(l,{key:1})):(0,s.kq)("",!0)])}var i=r(577);const o={class:"main-container-segunda"},u={class:"section-esquerda-segunda"},l={class:"slider-container-segunda"},c={class:"section-direita-segunda"},d={class:"matriz-container-segunda"},h={class:"titulo-matriz-segunda"},g={class:"matriz-vetor-container-segunda"};function p(e,t,r,a,n,p){const m=(0,s.up)("vueSlider"),v=(0,s.up)("vueMenuAhp"),z=(0,s.up)("vueMatriz"),S=(0,s.up)("vueVetor"),M=(0,s.up)("vueConsistencia");return(0,s.wg)(),(0,s.iD)("main",o,[(0,s._)("section",u,[(0,s._)("div",l,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.sliderStore,((e,t)=>((0,s.wg)(),(0,s.j4)(m,{key:t,id:`${t}`,classe:"0",name:`slider-0-${t+2}`,texto:e.texto,valor:n.sliderStore[t].valor,onSliderValue:p.handleInputValue},null,8,["id","name","texto","valor","onSliderValue"])))),128))])]),(0,s._)("section",c,[(0,s.Wm)(v),(0,s._)("div",d,[(0,s._)("h4",h,(0,i.zw)(e.$t("tituloMatrizSegundaEtapaAhp")),1),(0,s._)("div",g,[(0,s.Wm)(z,{idMatriz:"matriz-segunda-etapa",optionMatriz:p.criteriosSegunda,valueMatriz:p.matrizValores},null,8,["optionMatriz","valueMatriz"]),(0,s.Wm)(S,{idVetor:"matriz-segunda-etapa",tituloVetor:"Peso",valueVetor:p.vetorPeso()},null,8,["valueVetor"]),(0,s.Wm)(M,{RI:p.consistencia("ri"),CI:p.consistencia("ci"),CR:p.consistencia("cr"),lambda:p.consistencia("lambda")},null,8,["RI","CI","CR","lambda"])])])])])}var m=r(339),v=r(83),z=r(615),S=r(942),M=r(857),f=r(11),V=r(486),$=r(713);const x={name:"vue-segunda-etapa-personalizado",components:{vueSlider:m.Z,vueMatriz:v.Z,vueVetor:z.Z,vueConsistencia:M.Z,vueMenuAhp:S.Z},mixins:[f.Z],data(){return{sliderValue:[],sliderStore:[],vetorPesos:[]}},computed:{matrizAtual(){return this.$store.getters.currentMatrizInputAtual},matrizValores(){return this.$store.getters.currentMatrizSegunda},slideres(){return this.$store.getters.currentSlideresSegunda},criteriosSegunda(){return this.$store.getters.currentCriteriosSegunda},optionsSegunda(){return this.$store.getters.currentOptionsSegunda}},mounted(){this.$store.dispatch("changeMatrizInputAtual","matriz-segunda-etapa"),this.changeMatrixColor(),setTimeout((()=>{this.hoverSlider("segunda")}),200)},created(){this.sliderStore=this.$store.getters.currentSlideresSegunda,this.changeMatrix()},beforeUnmount(){this.$store.dispatch("changeSlideresSegunda",this.sliderStore),this.changeMatrix()},methods:{handleInputValue(e){this.sliderStore[e[1]].valor=Number(e[2]),this.mouseDownSlider(e,"segunda");const t=(0,V.throttle)(this.changeMatrix,50);t()},matrizMaker(){const e=e=>{const t=e[0]===e[1]?1:this.conveterEscala(this.sliderStore.find((t=>t.id===e)).valor);return t.toFixed(2)},t=e=>{const t=1/this.conveterEscala(this.sliderStore.find((t=>t.id===e)).valor);return t>1?Math.floor(t).toFixed(2):t.toFixed(2)},r=[];for(let s=1;s<=this.criteriosSegunda.length;s++){const a=[];for(let r=1;r<=this.criteriosSegunda.length;r++)s<=r?a.push(e(`${s}${r}`)):a.push(t(`${r}${s}`));r.push(a)}return r},changeMatrix(){let e=this.matrizMaker();e=this.calcula(e),this.$store.dispatch("changeMatrizSegunda",e)},calcula(e){const t=(e,t,r)=>{let s=0;for(let a=0;a<r;a++)s+=Number(e[a][t]);return s},r=()=>{const r=[];for(let s=0;s<e.length;s++){const a=[];for(let r=0;r<e[s].length;r++){const n=Number(e[s][r])/t(e,r,e.length);a.push(n.toFixed(2))}r.push(a)}return r},s=r(),a=()=>{const e=[];for(let t=0;t<s.length;t++)e.push((s[t].reduce(((e,t)=>e+parseFloat(t)),0)/s[t].length).toFixed(2));return e},n=a(),i=()=>{const t=[];for(let r=0;r<e.length;r++){const s=[];for(let t=0;t<e.length;t++)s.push(Number(n[t])*Number(e[r][t]));t.push(s.reduce(((e,t)=>e+t),0))}return t},o=i(),u=()=>{const e=[];for(let t=0;t<n.length;t++)e.push(o[t]/n[t]);return e},l=u(),c=l.reduce(((e,t)=>e+t),0)/l.length,d=l.length,h=(c-d)/(d-1),g=h/$.RI[d],p=()=>{const e={normalizada:s,pesos:n,ws:o,cons:l,lambda:c,ci:g,cr:g,ri:$.RI[d],n:d};return e};return e.push(p()),e},vetorPeso(){return this.matrizValores[this.matrizValores.length-1]["pesos"]},consistencia(e){return this.matrizValores[this.matrizValores.length-1][e]}}};var I=r(744);const b=(0,I.Z)(x,[["render",p]]),C=b,w={class:"main-container-segunda"},Z={class:"section-esquerda-segunda"},_={class:"slider-container-segunda"},k={class:"section-direita-segunda"},A={class:"matriz-container-segunda"},F={class:"titulo-matriz-segunda"},R={class:"matriz-vetor-container-segunda"};function N(e,t,r,a,n,o){const u=(0,s.up)("vueSlider"),l=(0,s.up)("vueMenuAhp"),c=(0,s.up)("vueMatriz"),d=(0,s.up)("vueVetor"),h=(0,s.up)("vueConsistencia");return(0,s.wg)(),(0,s.iD)("main",w,[(0,s._)("section",Z,[(0,s._)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.sliderStore,((e,t)=>((0,s.wg)(),(0,s.j4)(u,{key:t,id:`${t}`,classe:"0",name:`slider-0-${t+2}`,texto:e.texto,valor:n.sliderStore[t].valor,onSliderValue:o.handleInputValue},null,8,["id","name","texto","valor","onSliderValue"])))),128))])]),(0,s._)("section",k,[(0,s.Wm)(l),(0,s._)("div",A,[(0,s._)("h4",F,(0,i.zw)(e.$t("tituloMatrizSegundaEtapaAhp")),1),(0,s._)("div",R,[(0,s.Wm)(c,{idMatriz:"matriz-segunda-etapa",optionMatriz:o.criteriosSegunda,valueMatriz:o.matrizValores},null,8,["optionMatriz","valueMatriz"]),(0,s.Wm)(d,{idVetor:"matriz-segunda-etapa",tituloVetor:"Peso",valueVetor:o.vetorPeso()},null,8,["valueVetor"]),(0,s.Wm)(h,{RI:o.consistencia("ri"),CI:o.consistencia("ci"),CR:o.consistencia("cr"),lambda:o.consistencia("lambda")},null,8,["RI","CI","CR","lambda"])])])])])}const P={name:"vue-segunda-etapa-cardozo",components:{vueSlider:m.Z,vueMatriz:v.Z,vueVetor:z.Z,vueConsistencia:M.Z,vueMenuAhp:S.Z},mixins:[f.Z],data(){return{sliderValue:[],sliderStore:[],vetorPesos:[]}},computed:{matrizAtual(){return this.$store.getters.currentMatrizInputAtual},matrizValores(){return this.$store.getters.currentMatrizSegunda},slideres(){return this.$store.getters.currentSlideresSegunda},criteriosSegunda(){return this.$store.getters.currentCriteriosSegunda},optionsSegunda(){return this.$store.getters.currentOptionsSegunda}},mounted(){this.$store.dispatch("changeMatrizInputAtual","matriz-segunda-etapa"),this.changeMatrixColor(),setTimeout((()=>{this.hoverSlider("segunda")}),200)},created(){this.sliderStore=this.$store.getters.currentSlideresSegunda,this.changeMatrix()},beforeUnmount(){this.$store.dispatch("changeSlideresSegunda",this.sliderStore),this.changeMatrix()},methods:{handleInputValue(e){this.sliderStore[e[1]].valor=Number(e[2]),this.mouseDownSlider(e,"segunda");const t=(0,V.throttle)(this.changeMatrix,50);t()},matrizMaker(){const e=e=>{const t=e[0]===e[1]?1:this.conveterEscala(this.sliderStore.find((t=>t.id===e)).valor);return t.toFixed(2)},t=e=>{const t=1/this.conveterEscala(this.sliderStore.find((t=>t.id===e)).valor);return t>1?Math.floor(t).toFixed(2):t.toFixed(2)},r=[];for(let s=1;s<=this.criteriosSegunda.length;s++){const a=[];for(let r=1;r<=this.criteriosSegunda.length;r++)s<=r?a.push(e(`${s}${r}`)):a.push(t(`${r}${s}`));r.push(a)}return r},changeMatrix(){let e=this.matrizMaker();e=this.calcula(e),this.$store.dispatch("changeMatrizSegunda",e)},calcula(e){const t=(e,t,r)=>{let s=0;for(let a=0;a<r;a++)s+=Number(e[a][t]);return s},r=()=>{const r=[];for(let s=0;s<e.length;s++){const a=[];for(let r=0;r<e[s].length;r++){const n=Number(e[s][r])/t(e,r,e.length);a.push(n.toFixed(2))}r.push(a)}return r},s=r(),a=()=>{const e=[];for(let t=0;t<s.length;t++)e.push((s[t].reduce(((e,t)=>e+parseFloat(t)),0)/s[t].length).toFixed(2));return e},n=a(),i=()=>{const t=[];for(let r=0;r<e.length;r++){const s=[];for(let t=0;t<e.length;t++)s.push(Number(n[t])*Number(e[r][t]));t.push(s.reduce(((e,t)=>e+t),0))}return t},o=i(),u=()=>{const e=[];for(let t=0;t<n.length;t++)e.push(o[t]/n[t]);return e},l=u(),c=l.reduce(((e,t)=>e+t),0)/l.length,d=l.length,h=(c-d)/(d-1),g=h/$.RI[d],p=()=>{const e={normalizada:s,pesos:n,ws:o,cons:l,lambda:c,ci:g,cr:g,ri:$.RI[d],n:d};return e};return e.push(p()),e},vetorPeso(){return this.matrizValores[this.matrizValores.length-1]["pesos"]},consistencia(e){return this.matrizValores[this.matrizValores.length-1][e]}}},W=(0,I.Z)(P,[["render",N],["__scopeId","data-v-7e3f5f2c"]]),D=W;var T=r(739);const E={name:"vue-view-mcdm-segunda-etapa",components:{vueInputsPersonalizado:C,vueInputsCardozo:D},mixins:[T.Z],computed:{verificarTemplate(){return this.$store.getters.currentTemplateMcdm}}},j=(0,I.Z)(E,[["render",n],["__scopeId","data-v-5f5de74c"]]),q=j}}]);
//# sourceMappingURL=712.82f1be52.js.map