"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7536],{1291:function(e,n,t){var r=t(9619),o=t(1055),a=t(7051),w=t(824),c=t(677),s=t(4688),u=t(2776),i=t(5117),d=t(4711),f=t(2893),m=t(1733),Z=t(76),l=t(1625),p=t(1027),v=t(1320);const h=new f.Z({source:new i.Z({wrapX:!1})}),k=new d.Z({wrapX:!1}),g=new m.Z({source:k}),y=new o.Z({layers:[h,g],target:"map",view:new w.ZP({center:[0,0],zoom:1,multiWorld:!0})});k.on("addfeature",(function(e){!function(e){const n=Date.now(),t=e.getGeometry().clone(),r=h.on("postrender",(function(e){const o=e.frameState.time-n;if(o>=3e3)return void(0,v.B)(r);const a=(0,p.u3)(e),w=o/3e3,i=25*(0,Z.Vv)(w)+5,d=(0,Z.Vv)(1-w),f=new c.ZP({image:new s.Z({radius:i,stroke:new u.Z({color:"rgba(255, 0, 0, "+d+")",width:.25+d})})});a.setStyle(f),a.drawGeometry(t),y.render()}))}(e.feature)})),window.setInterval((function(){const e=360*Math.random()-180,n=170*Math.random()-85,t=new a.Z((0,l.mi)([e,n])),o=new r.Z(t);k.addFeature(o)}),1e3)}},function(e){var n;n=1291,e(e.s=n)}]);
//# sourceMappingURL=feature-animation.js.map