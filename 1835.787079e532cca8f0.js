"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(b,c,a)=>{a.r(c),a.d(c,{Tab1PageModule:()=>P});var o=a(4556),u=a(6895),d=a(433),g=a(581),i=a(2598),m=a(655),t=a(8256),f=a(3769),h=a(6665);const p=[{path:"",component:(()=>{class e{constructor(n,l,s){this.deseosService=n,this.router=l,this.alertCtrl=s}agregarLista(){return(0,m.mG)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({header:"Nueva Lista",inputs:[{name:"titulo",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{console.log("Cancelar")}},{text:"Crear",handler:l=>{if(0===l.titulo.length)return;const s=this.deseosService.crearLista(l.titulo);this.router.navigateByUrl(`/tabs/tab1/agregar/${s}`)}}]})).present()})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.P),t.Y36(i.F0),t.Y36(o.Br))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tab1"]],decls:9,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],[3,"terminada"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(n,l){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Pendientes "),t.qZA()()(),t.TgZ(4,"ion-content",1),t._UZ(5,"app-listas",2),t.TgZ(6,"ion-fab",3)(7,"ion-fab-button",4),t.NdJ("click",function(){return l.agregarLista()}),t._UZ(8,"ion-icon",5),t.qZA()()()),2&n&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("terminada",!1))},dependencies:[o.W2,o.IJ,o.W4,o.Gu,o.gu,o.wd,o.sr,h.b]}),e})()},{path:"agregar",loadChildren:()=>a.e(8592).then(a.bind(a,7649)).then(e=>e.AgregarPageModule)}];let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(p),i.Bz]}),e})();var T=a(8265);let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[o.Pc,u.ez,d.u5,T.K,g.e,v]}),e})()}}]);