$(function(){var i=$("#main");i.append("<div id='world'></div>"),i.css("backgroundColor","transparent");var t=$("#world");t.width(i.outerWidth()).height(i.outerHeight()),t.css("opacity",.75),Physics(function(e){var s,r,o,h=t.width(),n=t.height(),c=Physics.vector(h,n).mult(.5),a=Physics.aabb(0,0,h,n);o=Physics.renderer("canvas",{el:"world",width:h,height:n}),e.add(o),e.on("step",function(){e.render()}),s=Physics.behavior("attractor",{pos:c,strength:.1,order:1}),r=Physics.behavior("edge-collision-detection",{aabb:a,restitution:.2,cof:.8}),window.addEventListener("resize",function(){h=i.outerWidth(),n=i.outerHeight(),t.width(h).height(n),o.el.width=h,o.el.height=n,a=Physics.aabb(0,0,h,n),r.setAABB(a)},!0),i.mousemove(function(i){s.position({x:i.clientX,y:i.clientY})});for(var d,y,l=20,u=[],v=Physics.vector(0,300);l--;)y=20+30*Math.random()|0,d=Physics.body("circle",{radius:y,mass:y,x:v.x+c.x,y:v.y+c.y,vx:v.perp().mult(1e-4).x,vx:v.y,styles:{fillStyle:"#4f81bd"}}),u.push(d),v.perp(!0).mult(1e4).rotate(l/3);e.add(u),e.add([Physics.behavior("newtonian",{strength:.005,min:10}),Physics.behavior("body-impulse-response"),r,s]),Physics.util.ticker.on(function(i){e.step(i)}),Physics.util.ticker.start()})});