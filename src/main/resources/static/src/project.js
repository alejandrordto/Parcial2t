window.__require=function t(i,o,n){function e(r,s){if(!o[r]){if(!i[r]){var a=r.split("/");if(a=a[a.length-1],!i[a]){var h="function"==typeof __require&&__require;if(!s&&h)return h(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+r+"'")}}var l=o[r]={exports:{}};i[r][0].call(l.exports,function(t){return e(i[r][1][t]||t)},l,l.exports,t,i,o,n)}return o[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)e(n[r]);return e}({Bullet:[function(t,i,o){"use strict";cc._RF.push(i,"6dc4akQnvVCdIeaTtY356Tf","Bullet"),cc.Class({extends:cc.Component,properties:{speed:3e3,posX:0,posY:0,direccion:"up"},update:function(t){"down"==this.direccion?(this.node.x+=this.speed*t*Math.cos(90*Math.PI/180),this.node.y+=this.speed*t*Math.sin(270*Math.PI/180)):"up"==this.direccion?(this.node.x+=this.speed*t*Math.cos(270*Math.PI/180),this.node.y+=this.speed*t*Math.sin(90*Math.PI/180)):"left"==this.direccion?(this.node.x+=this.speed*t*Math.cos(180*Math.PI/180),this.node.y+=this.speed*t*Math.sin(0*Math.PI/180)):(this.node.x+=this.speed*t*Math.cos(0*Math.PI/180),this.node.y+=this.speed*t*Math.sin(180*Math.PI/180))}}),cc._RF.pop()},{}],Game:[function(t,i,o){"use strict";cc._RF.push(i,"049cfLKFsxIILQuMd04B47J","Game"),cc.Class({extends:cc.Component,properties:{tank:{default:null,type:cc.Node}},start:function(){}}),cc._RF.pop()},{}],tank:[function(t,i,o){"use strict";cc._RF.push(i,"4420dBIaPxE6rlCexOCy3f1","tank"),cc.Class({extends:cc.Component,properties:{directionx:0,directiony:0,direction:"up",colicion:!1,collisionleft:!1,collisionrigh:!1,collisionup:!1,collisiondown:!1,bullet:{default:null,type:cc.Node}},setRotate:function(t){var i;return"up"==this.direction?"left"==t?(i=cc.rotateBy(0,90),this.rotationx=180,this.rotationy=0):"down"==t?(i=cc.rotateBy(0,180),this.rotationx=-90,this.rotationy=0):(i=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270):"down"==this.direction?"right"==t?(i=cc.rotateBy(0,90),this.rotationx=0,this.rotationy=0):"up"==t?(i=cc.rotateBy(0,180),this.rotationx=0,this.rotationy=-90):(i=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270):"left"==this.direction?"down"==t?(i=cc.rotateBy(0,90),this.rotationx=0,this.rotationy=90):"right"==t?(i=cc.rotateBy(0,180),this.rotationx=0,this.rotationy=180):(i=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270):"up"==t?(i=cc.rotateBy(0,90),this.rotationx=0,this.rotationy=90):"left"==t?(i=cc.rotateBy(0,180),this.rotationx=0,this.rotationy=180):(i=cc.rotateBy(0,270),this.rotationx=0,this.rotationy=270),i},onKeyEvent:function(t){var i=this.direction,o=!0;switch(t.keyCode){case cc.macro.KEY.a:this.direction="left";break;case cc.macro.KEY.left:this.directionx-50>-451&&!this.collisionleft&&(this.directionx-=50,this.direction="left",this.node.runAction(cc.moveBy(.4,-50,0)));break;case cc.macro.KEY.d:this.direction="right";break;case cc.macro.KEY.right:this.directionx+50<451&&!this.collisionrigh&&(this.directionx+=50,this.direction="right",this.node.runAction(cc.moveBy(.4,50,0)));break;case cc.macro.KEY.w:this.direction="up";break;case cc.macro.KEY.up:this.directiony+50<301&&!this.collisionup&&(this.directiony+=50,this.direction="up",this.node.runAction(cc.moveBy(.4,0,50)));break;case cc.macro.KEY.s:this.direction="down";break;case cc.macro.KEY.down:this.directiony-50>-301&&!this.collisiondown&&(this.directiony-=50,this.direction="down",this.node.runAction(cc.moveBy(.4,0,-50)));break;case cc.macro.KEY.space:var n=cc.instantiate(this.bullet);n.getComponent("Bullet").direccion=this.direction,n.x=this.node.position.x,n.y=this.node.position.y,cc.find("Canvas").addChild(n),n.active=!0;break;default:o=!1}i!=this.direction&&o&&(this.Dir=this.setRotate(i),this.node.runAction(this.setRotate(i)))},onLoad:function(){cc.audioEngine.stopAll(),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyEvent,this),cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!1,this.rotationx=0,this.rotationy=90},onEnable:function(){cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!1},onDisable:function(){cc.director.getCollisionManager().enabled=!1,cc.director.getCollisionManager().enabledDebugDraw=!1},onCollisionEnter:function(t,i){var o=t.world.aabb,n=(t.world.preAabb.clone(),i.world.aabb);i.world.preAabb.clone();n.center.x-o.center.x<0&&Math.abs(n.center.y-o.center.y)<50&&(this.collisionrigh=!0,t.touchingX=!1,t.touchingY=!1),Math.abs(n.center.y-o.center.y)<50&&n.center.x-o.center.x>0&&(this.collisionleft=!0,t.touchingX=!0,t.touchingY=!1),n.center.y-o.center.y<0&&Math.abs(n.center.x-o.center.x)<50&&(this.collisionup=!0,t.touchingX=!1,t.touchingY=!0),Math.abs(n.center.x-o.center.x)<50&&n.center.y-o.center.y>0&&(this.collisiondown=!0,t.touchingX=!0,t.touchingY=!0)},onCollisionExit:function(t){t.touchingX&&t.touchingY?(t.touchingX=null,t.touchingY=null,this.collisiondown=!1):!t.touchingX&&t.touchingY?(t.touchingX=null,t.touchingY=null,this.collisionup=!1):t.touchingX&&!t.touchingY?(t.touchingX=null,t.touchingY=null,this.collisionleft=!1):t.touchingX||t.touchingY||(t.touchingX=null,t.touchingY=null,this.collisionrigh=!1)},shooTank:function(){this.MoveBullet=this.setMove(),Bullet.node.runAction(this.MoveBullet)},start:function(){}}),cc._RF.pop()},{}]},{},["Bullet","Game","tank"]);