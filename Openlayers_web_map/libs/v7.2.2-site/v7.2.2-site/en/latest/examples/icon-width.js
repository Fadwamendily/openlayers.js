"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9673],{3882:function(e,t,n){var a=n(9619),g=n(1055),i=n(7051),d=n(171),c=n(4711),r=n(824),l=n(677),s=n(1652),u=n(1733),o=n(2893);const m=document.getElementById("width-input"),h=document.getElementById("height-input"),v=document.getElementById("clear-width-button"),I=document.getElementById("clear-height-button"),w=document.getElementById("scale"),p=new a.Z({geometry:new i.Z([0,0]),name:"Null Island",population:4e3,rainfall:500}),y=new l.ZP({image:new s.Z({src:"data/icon.png",width:m.value,height:h.value})});p.setStyle(y);y.getImage().getImage().addEventListener("load",(()=>{w.innerText=f(y.getImage().getScale())})),m.addEventListener("input",(e=>{y.getImage().setWidth(e.target.value),p.changed(),w.innerText=f(y.getImage().getScale())})),h.addEventListener("input",(e=>{y.getImage().setHeight(e.target.value),p.changed(),w.innerText=f(y.getImage().getScale())})),v.addEventListener("click",(()=>{m.value=void 0,y.getImage().setWidth(void 0),w.innerText=f(y.getImage().getScale()),p.changed()})),I.addEventListener("click",(()=>{h.value=void 0,y.getImage().setHeight(void 0),w.innerText=f(y.getImage().getScale()),p.changed()}));const E=new c.Z({features:[p]}),Z=new u.Z({source:E}),x=new o.Z({source:new d.Z({url:"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",crossOrigin:""})});function f(e){return Array.isArray(e)?"["+e?.map((e=>e.toFixed(2))).join(", ")+"]":e}new g.Z({layers:[x,Z],target:document.getElementById("map"),view:new r.ZP({center:[0,0],zoom:3})})}},function(e){var t;t=3882,e(e.s=t)}]);
//# sourceMappingURL=icon-width.js.map