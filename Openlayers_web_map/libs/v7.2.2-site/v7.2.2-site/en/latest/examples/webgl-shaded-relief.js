"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9592],{8801:function(e,n,t){var a=t(1055),o=t(824),r=t(4469),s=t(5117),u=t(463);const c={};function i(e,n){return["+",["*",256,["band",1,e,n]],["*",512,["band",2,e,n]],["*",768,["band",3,e,n]]]}const l=["*",2,["resolution"]],v=["*",["var","vert"],i(-1,0)],m=["/",["-",["*",["var","vert"],i(1,0)],v],l],d=["*",["var","vert"],i(0,-1)],p=["/",["-",["*",["var","vert"],i(0,1)],d],l],f=["atan",["^",["+",["^",m,2],["^",p,2]],.5]],b=["clamp",["atan",["-",0,m],p],-Math.PI,Math.PI],h=["*",Math.PI/180,["var","sunEl"]],w=["*",255,["+",["*",["sin",h],["cos",f]],["*",["*",["cos",h],["sin",f]],["cos",["-",["*",Math.PI/180,["var","sunAz"]],b]]]]],Z=new u.Z({opacity:.3,source:new r.Z({url:"https://{a-d}.tiles.mapbox.com/v3/aj.sf-dem/{z}/{x}/{y}.png"}),style:{variables:c,color:["color",w,w,w]}});["vert","sunEl","sunAz"].forEach((function(e){const n=document.getElementById(e),t=document.getElementById(e+"Out");function a(){t.innerText=n.value,c[e]=Number(n.value)}a(),n.addEventListener("input",(function(){a(),Z.updateStyleVariables(c)}))}));new a.Z({target:"map",layers:[new u.Z({source:new s.Z}),Z],view:new o.ZP({extent:[-13675026,4439648,-13580856,4580292],center:[-13615645,4497969],minZoom:10,maxZoom:16,zoom:13})})}},function(e){var n;n=8801,e(e.s=n)}]);
//# sourceMappingURL=webgl-shaded-relief.js.map