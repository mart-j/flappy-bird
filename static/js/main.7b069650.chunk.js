(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{16:function(t,c,n){},17:function(t,c,n){"use strict";n.r(c);var i=n(1),a=n(0),e=n.n(a),r=n(9),o=n.n(r),s=(n(16),n(6)),f=n(4),u=n(3),O=n(10),b=n.n(O),j=n(2),d=n.n(j),y=n.p+"static/media/bird.28936193.png",l=function(t){var c=t.animationLoop,n=t.moveForwardBlock,a=t.fallDown,e=t.character,r=t.grid,o=t.block,s=t.tick,f=t.topBlock;return Object(i.jsx)("div",{className:d.a.canvas,children:r.map((function(t,r){return Object(i.jsx)("div",{onAnimationEnd:function(t){var i;(i=t.animationName).includes("character")&&a(),i.includes("tick")&&(c(),n())},className:b()(d.a.square,JSON.stringify(t)===JSON.stringify(e)&&d.a.character,JSON.stringify(o).includes(JSON.stringify(t))&&d.a.block,JSON.stringify(f).includes(JSON.stringify(t))&&d.a.block,JSON.stringify(t)===JSON.stringify(s)&&d.a.tick,JSON.stringify(o[0]).includes(JSON.stringify(t))&&d.a.hazard),children:JSON.stringify(t)===JSON.stringify(e)&&Object(i.jsx)("img",{src:y,alt:"bird",width:"60"})},"".concat(r))}))})},g=[];!function(){for(var t=0;t<12;t++)for(var c=0;c<12;c++)g.push({x:t,y:c})}();var x=function(){var t=Object(a.useState)(!1),c=Object(u.a)(t,2),n=c[0],e=c[1],r=Object(a.useState)({x:0,y:0}),o=Object(u.a)(r,2),O=o[0],b=o[1],j=Object(a.useState)(g),d=Object(u.a)(j,2),y=d[0],x=(d[1],Object(a.useState)({x:6,y:2})),h=Object(u.a)(x,2),v=h[0],S=h[1],N=Object(a.useState)([{x:7,y:10},{x:8,y:10},{x:9,y:10},{x:10,y:10},{x:11,y:10}]),k=Object(u.a)(N,2),J=k[0],_=k[1],m=Object(a.useState)([{x:0,y:10},{x:1,y:10},{x:2,y:10},{x:3,y:10}]),p=Object(u.a)(m,2),E=p[0],w=p[1];Object(a.useEffect)((function(){var t=Object(f.a)({},v),c=Object(f.a)({},v);c.x+=1,t.y+=1,(JSON.stringify(J).includes(JSON.stringify(t))||JSON.stringify(J).includes(JSON.stringify(c)))&&e(!1)}),[O]),Object(a.useEffect)((function(){var t=Object(s.a)(J);if(J[0].y<0){t.forEach((function(c){c.y=12,_(t)}));var c=Object(s.a)(E);E[0].y<0&&c.forEach((function(t){t.y=12,w(c)}))}}),[J]);return Object(i.jsx)("div",{onClick:function(){var t=Object(f.a)({},v);t.x-=1,S(t)},className:"container",children:n?Object(i.jsx)(l,{topBlock:E,tick:O,animationLoop:function(){var t=Object(f.a)({},O);t.x+=1,t.x>1&&(t.x=0),b(t)},moveForwardBlock:function(){var t=Object(s.a)(J);t.forEach((function(t){t.y-=1})),_(t);var c=Object(s.a)(E);c.forEach((function(t){t.y-=1})),w(c)},fallDown:function(){var t=Object(f.a)({},v);t.x+=1,S(t)},block:J,character:v,grid:y}):Object(i.jsx)("button",{onClick:function(){return e(!0)},children:"Start game"})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(c){var n=c.getCLS,i=c.getFID,a=c.getFCP,e=c.getLCP,r=c.getTTFB;n(t),i(t),a(t),e(t),r(t)}))};o.a.render(Object(i.jsx)(e.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),h()},2:function(t,c,n){t.exports={canvas:"Grid_canvas__2vZnH",square:"Grid_square__2EuB8",block:"Grid_block__3iHo1",tick:"Grid_tick__3M2On",character:"Grid_character__iHqqN",hazard:"Grid_hazard__3nJ32"}}},[[17,1,2]]]);
//# sourceMappingURL=main.7b069650.chunk.js.map