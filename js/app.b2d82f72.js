(function(e){function t(t){for(var n,r,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),a=o("7496"),s=o("40dc"),r=o("f6c4"),i=o("2fa4"),l=function(){var e=this,t=e._self._c;return t(a["a"],[t(s["a"],{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t("h1",[e._v("Calculadora de role")])]),t(i["a"])],1),t(r["a"],[t("Calculadora")],1)],1)},c=[],u=o("8336"),p=o("62ad"),d=o("a523"),m=o("ce7e"),f=o("0fd9"),h=o("b974"),v=o("1f4f"),y=o("8654"),b=(o("14d9"),function(){var e=this,t=e._self._c;return t(d["a"],[t(f["a"],[t(p["a"],{attrs:{cols:"4"}},[t(f["a"],[t(p["a"],{attrs:{cols:"3"}},[t(u["a"],{attrs:{color:"blue",dark:""},on:{click:function(t){e.persons.push({id:""+e.generateId("person"),name:"",toReceive:0,toPay:0,notConsume:[]})}}},[e._v(" Adicionar pessoa ")])],1)],1),e._l(e.persons,(function(o){return t(f["a"],{key:o.id,staticClass:"text-center",attrs:{dense:""}},[t(p["a"],{attrs:{cols:"6"}},[t(y["a"],{attrs:{label:"Nome","append-icon":"mdi-close",outlined:"",color:""},on:{"click:append":function(t){return e.persons.splice(o.id,1)}},model:{value:o.name,callback:function(t){e.$set(o,"name",t)},expression:"person.name"}})],1),t(p["a"],{attrs:{cols:"6"}},[t(h["a"],{attrs:{color:"",items:e.items,"item-text":"name","item-value":"id",outlined:"",label:"Não consumiu esses itens",multiple:"","small-chips":""},on:{change:function(t){return e.calculatePaymentsWithNoPay()}},model:{value:o.notConsume,callback:function(t){e.$set(o,"notConsume",t)},expression:"person.notConsume"}})],1)],1)}))],2),t(m["a"],{attrs:{vertical:"",color:"gray"}}),t(m["a"],{attrs:{vertical:"",color:"gray"}}),t(m["a"],{attrs:{vertical:"",color:"gray"}}),t(m["a"],{attrs:{vertical:"",color:"gray"}}),t(p["a"],{attrs:{cols:"8"}},[t(f["a"],[t(p["a"],{attrs:{cols:"3"}},[t(u["a"],{attrs:{color:"blue",dark:""},on:{click:function(t){e.items.push({id:""+e.generateId("item"),name:"",price:0,notConsumePersonsAndValues:{persons:[],value:0}})}}},[e._v(" Adicionar itens comprados ")])],1)],1),e._l(e.items,(function(o){return t(f["a"],{key:o.id,staticClass:"text-center",attrs:{dense:""}},[t(p["a"],{attrs:{cols:"4"}},[t(y["a"],{attrs:{label:"Nome","append-icon":"mdi-close",outlined:"",color:""},on:{"click:append":function(t){e.items.splice(o.id,1),e.eraseNotConsume()}},model:{value:o.name,callback:function(t){e.$set(o,"name",t)},expression:"item.name"}})],1),t(p["a"],{attrs:{cols:"4"}},[t(y["a"],{attrs:{label:"Preço",placeholder:"0",type:"number",outlined:"",color:""},on:{change:function(t){e.stackItemsPrice(),e.calculatePayments()}},model:{value:o.price,callback:function(t){e.$set(o,"price",t)},expression:"item.price"}})],1),t(p["a"],{attrs:{cols:"4"}},[t(h["a"],{attrs:{color:"",items:e.persons,"item-text":"name","item-value":"id",outlined:"",label:"Quem comprou"},on:{change:function(t){return e.calculatePayments()}},model:{value:o.buyer,callback:function(t){e.$set(o,"buyer",t)},expression:"item.buyer"}})],1)],1)}))],2)],1),t("h1",[e._v("Valor total: "+e._s(e.totalAmount))]),t(f["a"],[t(p["a"],[t(v["a"],{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Nome")]),t("th",{staticClass:"text-left"},[e._v("Recebe")]),t("th",{staticClass:"text-left"},[e._v("Paga")])])]),t("tbody",e._l(e.persons,(function(o){return t("tr",{key:o.id},[t("td",[e._v(e._s(o.name))]),t("td",[e._v(e._s(o.toReceive.toFixed(2)))]),t("td",[e._v(e._s(o.toPay.toFixed(2)))])])})),0)]},proxy:!0}])})],1)],1)],1)}),P=[],g={name:"Calculadora",data:()=>({personsIdCounter:0,itemsIdCounter:0,totalAmount:0,reCalculate:!1,persons:[{id:0,name:"",toReceive:0,toPay:0,notConsume:[]}],items:[{id:0,name:"",price:0,buyer:null,notConsumePersonsAndValues:{persons:[],value:0}}]}),methods:{generateId(e){return"person"==e?(this.personsIdCounter++,this.personsIdCounter):(this.itemsIdCounter++,this.itemsIdCounter)},stackItemsPrice(){this.totalAmount=0,this.items.forEach(e=>{this.totalAmount+=Number(e.price)})},calculatePayments(){this.eraseAcumulated(),this.persons.forEach(e=>{let t=!1;e.toReceive=0,this.items.forEach(o=>{e.id==o.buyer&&(e.toReceive+=Number(o.price),t=!0)}),t&&(e.toReceive=e.toReceive-this.totalAmount/this.persons.length,e.toReceive<0&&(e.toReceive=0)),e.toPay=this.totalAmount/this.persons.length-e.toReceive,e.toPay<0&&(e.toPay=0)})},calculatePaymentsWithNoPay(){this.calculatePayments(),this.items.forEach(e=>{let t=e.price/this.persons.length,o=0,n=0;this.persons.forEach(a=>{a.notConsume.includes(e.id)&&(o+=t,a.toPay>0?(a.toPay-=t,a.toPay<0&&(a.toReceive+=-1*a.toPay,a.toPay=0)):a.toReceive+=t,n++)}),this.persons.forEach(t=>{t.notConsume.includes(e.id)||(t.toReceive>0?(t.toReceive-=o/(this.persons.length-n),t.toReceive<0&&(t.toPay+=-1*t.toReceive,t.toReceive=0)):t.toPay+=o/(this.persons.length-n))})})},getItemPrice(e){this.items.forEach(t=>{if(e==t.id)return t.price})},pay(e){return this.totalAmount/this.persons.length-e.toReceive},eraseNotConsume(){this.persons.forEach(e=>{e.notConsume=[]}),this.eraseAcumulated()},eraseAcumulated(){this.items.forEach(e=>{e.notConsumePersonsAndValues.value=0,e.notConsumePersonsAndValues.persons=[]})}}},C=g,_=o("2877"),x=Object(_["a"])(C,b,P,!1,null,null,null),k=x.exports,R={name:"App",components:{Calculadora:k},data:()=>({})},A=R,O=Object(_["a"])(A,l,c,!1,null,null,null),w=O.exports,I=o("f309");n["a"].use(I["a"]);var j=new I["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:j,render:e=>e(w)}).$mount("#app")}});
//# sourceMappingURL=app.b2d82f72.js.map