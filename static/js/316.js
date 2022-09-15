(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[316],{25416:(e,t,i)=>{"use strict";i.r(t),i.d(t,{NavigationVisuals:()=>NavigationVisuals,visPanoNavigation:()=>p,visDollhouseNavigation:()=>d,default:()=>g});var s=i(14877),o=i(42372),n=i(63387),a=i(9682),r=i(12712),h=i(15099),c=i(368),l=i(53549),u=i(37363);class NavigationVisuals{constructor(e,t,i){this.engine=e,this.dynamicNumber=t,this.smoothWalk=i,this.active=!1,this.draw=new o.M,Promise.all([this.engine.getModuleBySymbol(s.y.WEBGL_RENDERER),this.engine.market.waitForData(c.P),this.engine.getModuleBySymbol(s.y.MESH_QUERY)]).then((([e,t,i])=>{this.meshQuery=i,this.draw.addToScene(e.getScene()),this.subscription=t.onChanged((()=>this.update(this.draw,t))),this.subscription.cancel()})),this.engine.getModuleBySymbol(s.y.SETTINGS).then((e=>{const t="Navigation";[{header:t,setting:"Debugger Enabled",initialValue:()=>this.active,onChange:e=>this.toggle(e)},{header:t,setting:"Max transition dist",initialValue:()=>r.E.longerTransitionMaxDist,range:[3,50],rangePrecision:1,onChange:e=>r.E.longerTransitionMaxDist=e},{header:t,setting:"accel",initialValue:()=>this.dynamicNumber.acceleration,range:[1,60],rangePrecision:.5,onChange:e=>{this.dynamicNumber.setAccel(e)}},{header:t,setting:"top speed",initialValue:()=>this.dynamicNumber.maxSpeed,range:[1,40],rangePrecision:.5,onChange:e=>this.dynamicNumber.setMaxSpeed(e)},{header:t,setting:"queue ms",initialValue:()=>this.smoothWalk.repeatedQueueDelayMS,range:[0,1e3],onChange:e=>this.smoothWalk.repeatedQueueDelayMS=e}].forEach((t=>e.registerMenuEntry(t)))}))}toggle(e){this.active!==e&&(e||this.draw.toggleAll(!1),e||this.subscription.cancel(),e&&this.subscription.renew(),this.active=e)}update(e,t){const i=this.engine.market.tryGetData(l.Z),s=this.engine.market.tryGetData(h.M_),o=this.engine.market.tryGetData(u.O);e&&i&&s&&o&&(e.toggleAll(!1),t.hit&&this.meshQuery.floorIdFromObject(t.hit.object)&&(o.isInside()?p(e,i,s,t.hit.intersection):d(e,i,t.hit.intersection,this.meshQuery)))}}const p=(e,t,i,s)=>{let o=0;const r=s.point.clone().sub(i.pose.position),h=(0,a.Tq)(t,r),c=Math.max(...h.map((e=>e.score))),l=c-5;for(const{sweep:t,score:i}of h)if(t){const a=0===o?"cyan":"orange",r=(0,n.dS)(i,l,c,0,.6);e.line("panosphere"+o++,a).toggle(!0).updatePositions(s.point,t.position).opacity(r);const h=(0,n.dS)(r,0,.6,0,.1);e.sphere("panosphere"+o++,{color:a,opacity:.8}).toggle(!0).update(t.position,h)}},d=(e,t,i,s)=>{let o=0;const r=(0,a.bG)(t,!1,i,s),h=Math.max(...r.map((e=>e.score))),c=h-15;for(const{sweep:t,score:s}of r)if(t){const a=0===o?"cyan":"orange",r=(0,n.dS)(s,c,h,0,1);e.line("panosphere"+o++,a).toggle(!0).updatePositions(i.point,t.position).opacity(r);const l=(0,n.dS)(r,0,1,0,.3);e.sphere("panosphere"+o++,{color:a}).toggle(!0).update(t.position,l)}};function g(e){e.getModuleBySymbol(s.y.NAVIGATION).then((t=>{const i=t.navigationWalk,s=i.positionTracker;new NavigationVisuals(e,s,i)}))}},59333:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(28124),o=i(5477),n=i(14877);const a=new o.Z("raycaster-debug");class OctreeDebugMenu{constructor(e){Promise.all([e.getModuleBySymbol(n.y.SETTINGS),e.getModuleBySymbol(n.y.WEBGL_RENDERER),e.getModuleBySymbol(n.y.RAYCASTER)]).then((([e,t,i])=>{const o=t.getScene(),n=[];let r=!1;const h=()=>{n&&n.forEach((e=>{e.geometry.dispose(),e.material.dispose(),o.remove(e)}))},c=(e,t,r)=>{a.info("draw",{from:e,to:t,faces:r});const h=i.getOctree().getDebugBoundsMesh((0,s.rn)().getHex(),e,t,r);h.frustumCulled=!1,h.updateMatrixWorld(!0),o.add(h),n.push(h)};e.registerMenuButton({header:"Raycaster",buttonName:"Add Octree Level Buttons",callback:()=>{if(!r){for(let t=0;t<=i.getOctree().depth;t++)e.registerMenuButton({header:"Octree Levels",buttonName:`Anything on Level: ${t}`,callback:()=>{h(),c(t,t,!1)}});for(let t=0;t<=i.getOctree().depth;t++)e.registerMenuButton({header:"Octree Faces",buttonName:`Faces on Level: ${t}`,callback:()=>{h(),c(t,t,!0)}});r=!0}}}),e.registerMenuButton({header:"Raycaster",buttonName:"Visualize Octree - All",callback:()=>{h();for(let e=0;e<=i.getOctree().depth;e++)c(e,e,!1)}}),e.registerMenuButton({header:"Raycaster",buttonName:"Visualize Octree - Faces",callback:()=>{h();for(let e=0;e<=i.getOctree().depth;e++)c(e,e,!0)}}),e.registerMenuButton({header:"Raycaster",buttonName:"Clear Octree Visuals",callback:h})}))}}function r(e){new OctreeDebugMenu(e)}},55744:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});var s=i(14877),o=i(84428),n=i(42372),a=i(63387),r=i(19945),h=i(77280),c=i(15099),l=i(368),u=i(91825);const p=new(i(5477).Z)("raycaster-debug");var d;!function(e){e.normal="normal",e.hitClass="hitClass",e.hitBounds="hitBounds"}(d||(d={}));const g={color:"yellow"};class RaycasterDataDebugMenu{constructor(e){this.engine=e,this.cached={v1:new o.Vector3,v2:new o.Vector3,quat:new o.Quaternion},this.showClass=!1,this.showName=!0,this.showNormal=!1,this.showBounds=!1,this.drawRaycastHitNormal=e=>{const t=this.draw.line(d.normal,"red",4);e&&t.updatePositions(e.point,this.cached.v1.copy(e.point).addScaledVector(e.normal,.2)),t.toggle(null!==e)},this.drawRaycastObjectInfo=(e,t,i,s)=>{const o=this.draw.label(d.hitClass,"X",this.cached.v1,1);if(o.visible=!1,e&&t&&(i||s)){const{position:n,rotation:r}=t.pose,{point:c,object:l}=e,u=i?l.__proto__.constructor.name:"",p=s?""!==l.name?l.name:l.id:"";o.text=`${u} - ${p}`,o.setPosition(c,(e=>t.isOrtho()?e.addScaledVector(h.f.UP,10):(0,a.Xe)(n,e,1,e))),o.scaleBillboard(n,r,t.pose.projection,t.zoom(),t.height,t.aspect(),.1),o.setOrientation(r),o.visible=!0}},this.drawRaycastHitBounds=e=>{const t=this.draw.boxWire(d.hitBounds,g).toggle(!1);if(e&&e.object&&!(e.object instanceof u.i)&&e.object instanceof o.Mesh){const i=(0,r.A5)(e.object.geometry),s=i.getCenter(this.cached.v1).applyMatrix4(e.object.matrixWorld),o=i.getSize(this.cached.v2).multiply(e.object.scale).multiplyScalar(.5);t.mesh.quaternion.copy(e.object.quaternion),t.toggle(!0).update(s,o)}},this.onPointerDown=()=>{const e=this.data.hit;e&&e.object&&p.warn(e.object,e)},Promise.all([e.getModuleBySymbol(s.y.SETTINGS),e.market.waitForData(l.P)]).then((([e,t])=>{this.data=t;const i=t.onChanged((()=>this.update(t)));i.cancel();const s=e=>{e?(window.addEventListener("pointerdown",this.onPointerDown),i.renew()):(window.removeEventListener("pointerdown",this.onPointerDown),i.cancel(),this.draw.toggleAll(!1))};e.registerMenuEntry({header:"Raycaster",setting:"raycasterHitDebugging",initialValue:()=>!1,onChange:e=>{s(e)},urlParam:!0}),e.registerMenuEntry({header:"Raycaster",setting:"raycasterHitClass",initialValue:()=>this.showClass,onChange:e=>{this.showClass=e},urlParam:!0}),e.registerMenuEntry({header:"Raycaster",setting:"raycasterHitName",initialValue:()=>this.showName,onChange:e=>{this.showName=e},urlParam:!0}),e.registerMenuEntry({header:"Raycaster",setting:"raycasterHitNormal",initialValue:()=>this.showNormal,onChange:e=>{this.showNormal=e},urlParam:!0}),e.registerMenuEntry({header:"Raycaster",setting:"raycasterHitBounds",initialValue:()=>this.showBounds,onChange:e=>{this.showBounds=e},urlParam:!0})}))}get draw(){return this._draw||(this._draw=new n.M({background:!1,color:"red"}),this.engine.getModuleBySymbol(s.y.WEBGL_RENDERER).then((e=>this._draw.addToScene(e.getScene())))),this._draw}update(e){const t=this.engine.market.tryGetData(c.M_);this.showNormal&&this.drawRaycastHitNormal(e.hit),this.showBounds&&this.drawRaycastHitBounds(e.hit),this.drawRaycastObjectInfo(e.hit,t,this.showClass,this.showName)}}function w(e){new RaycasterDataDebugMenu(e)}},21413:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var s=i(14877),o=i(84428),n=i(69910),a=i(43402),r=i(68013);const h="Snapping";async function c(e){const[t,i,c]=await Promise.all([e.getModuleBySymbol(s.y.SETTINGS),await e.getModuleBySymbol(s.y.RAYCASTER),e.getModuleBySymbol(s.y.WEBGL_RENDERER)]),l=i.snapping,u=c.getScene().scene;t.registerMenuEntry({header:h,setting:"snappingMaxLOD",initialValue:()=>r.t.snappingMaxLOD,onChange:e=>{r.t.snappingMaxLOD=e},urlParam:!0,rangePrecision:0,range:[0,3]}),function(e,t,i){const s=new o.BufferGeometry,a=new o.LineSegments(s,new o.LineBasicMaterial({vertexColors:!0}));a.frustumCulled=!1;const r=new o.SphereGeometry(.02,5,5);let c;const l=[16711680,65280,255,16777215],u=new o.Color,p=(new o.Matrix4).identity(),d=new o.Group;let g;function w(){const e=[],i=[],h=[],g=[];t.forEachSnapFeature((t=>{var s,o,a;if(u.setHex(l[(null===(a=null===(o=null===(s=t.meta)||void 0===s?void 0:s.tile)||void 0===o?void 0:o.extras)||void 0===a?void 0:a.level)||0]),t instanceof n.FM){const{start:s,end:o}=t;e.push(s.x,s.y,s.z,o.x,o.y,o.z),i.push(u.r,u.g,u.b,u.r,u.g,u.b)}else t instanceof n.UQ&&(h.push(t.x,t.y,t.z),g.push(u.r,u.g,u.b))}),!0),s.dispose(),s.setAttribute("position",new o.Float32BufferAttribute(e,3)),s.setAttribute("color",new o.Float32BufferAttribute(i,3)),c&&3*c.count===h.length||(c&&(d.remove(c),null==c||c.dispose()),c=new o.InstancedMesh(r,new o.MeshBasicMaterial,h.length/3));for(let e=0;e<h.length;e+=3)c.setMatrixAt(e/3,p.setPosition(h[e],h[e+1],h[e+2])),c.setColorAt(e/3,u.setRGB(g[e],g[e+1],g[e+2]));d.add(a,c)}e.registerMenuEntry({header:h,setting:"Show Snapping Features",initialValue:()=>!1,onChange(e){e?(i.add(d),g=setInterval(w,300)):(null==c||c.dispose(),r.dispose(),s.dispose(),i.remove(d),clearInterval(g))}})}(t,l,u),function(e,t,i,s){const n=[];let r,c;function l(){c||(c=new o.Mesh(new o.BufferGeometry,new o.MeshBasicMaterial({vertexColors:!0})),c.frustumCulled=!1,i.add(c));const e=[],t=[];for(const i of n){let s=0;for(const o of i.surfaces){const i=o.area>.1,n=Math.sin(s++)/2+.5,a=i?0:.2+.8*n,r=i?.2+.8*n:0,h=0;for(const i of o.faces){const s=i.va.vector,o=i.vb.vector,n=i.vc.vector;e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z),e.push(n.x,n.y,n.z),t.push(a,r,h,a,r,h,a,r,h)}}}c.geometry.dispose(),c.geometry.setAttribute("position",new o.Float32BufferAttribute(e,3)),c.geometry.setAttribute("color",new o.Float32BufferAttribute(t,3))}function u(e){n.push(e.edgeFinder)}[{header:h,setting:"Collect Snapping Surfaces",initialValue:()=>!1,onChange(e){e?s.subscribe(a.x,u):(s.unsubscribe(a.x,u),n.length=0)}},{header:"Snapping",setting:"Show Snapping Surfaces",initialValue:()=>!1,onChange(e){clearInterval(r),e?r=setInterval((()=>{t.preloadMeshSnapping(),l()}),1e3):c&&(c.geometry.dispose(),i.remove(c),c=null)}}].forEach((t=>e.registerMenuEntry(t)))}(t,l,u,e)}},48082:(e,t,i)=>{"use strict";i.r(t),i.d(t,{PanoPreloadVisualizer:()=>PanoPreloadVisualizer,default:()=>M});var s=i(5477),o=i(14877),n=i(42372),a=i(89741),r=i(15099),h=i(368),c=i(53549),l=i(78360),u=i(37363),p=i(94772),d=i(84428),g=i(77280),w=i(48730),m=i(26517),y=i(14832);const f=new s.Z("previs");class PanoPreloadVisualizer{constructor(e,t,i){this.engine=e,this.downloadDescriptorGetter=t,this.prioritizer=i,this.allPreloadedSweeps=new Set,this.active=!1,this.freezeCameraRotation=!1,this.sweepIndex=50,this.useCurrentCriteria=!0,this.showPreloadIds=!0,this.visualTour=!1,this.showSweepLabels=!1,this.criteria=new l.I6(null,new d.Vector3,new d.Vector3),this.draw=new n.M,this.engine.getModuleBySymbol(o.y.WEBGL_RENDERER).then((e=>this.draw.addToScene(e.getScene()))),this.engine.market.waitForData(h.P).then((e=>{this.subscription=e.onChanged((()=>this.update(this.draw))),this.subscription.cancel()}));const s=this.engine.market.tryGetData(c.Z);if(s){this.sweepData=s;const e=s.getSweepList(),t=new a.Z((e=>e.id));for(let i of e)i.isObservableProxy&&(i=(new p.ZP).copy(i)),t.add(i);this.sweepMap=t}this.engine.getModuleBySymbol(o.y.SETTINGS).then((e=>{const t="Pano Preload",i=[{header:t,setting:"ShowVis",initialValue:()=>this.active,onChange:e=>this.toggle(e)},{header:t,setting:"Use Camera",initialValue:()=>this.useCurrentCriteria,onChange:e=>{this.useCurrentCriteria=e,this.update(this.draw)}},{header:t,setting:"Freeze Rotation",initialValue:()=>this.freezeCameraRotation,onChange:e=>{this.freezeCameraRotation=e,this.update(this.draw)}},{header:t,setting:"Show preload ids",initialValue:()=>this.showPreloadIds,onChange:e=>{this.showPreloadIds=e,this.update(this.draw)}},{header:t,setting:"Visual tour",initialValue:()=>this.visualTour,onChange:e=>{this.visualTour=e,this.update(this.draw)}},{header:t,setting:"Pano labels",initialValue:()=>this.showSweepLabels,onChange:e=>{this.showSweepLabels=e,this.update(this.draw)}},{header:t,setting:"Override Sweep",initialValue:()=>0,onChange:e=>this.updateSweepIndex(e),range:[0,this.sweepMap.count()]}];e.registerMenuButton({header:"Pano Preload tour",buttonName:"Tour",callback:()=>{this.activateTourMode()}}),i.forEach((t=>e.registerMenuEntry(t)))}))}updateSweepIndex(e){const t=Math.round(e);this.sweepIndex=t,this.update(this.draw)}toggle(e){this.active!==e&&(e&&this.subscription.renew(),e||(this.subscription.cancel(),this.draw.toggleAll(!1)),this.active=e)}update(e){const t=this.engine.market.tryGetData(c.Z),i=this.engine.market.tryGetData(r.M_),s=this.engine.market.tryGetData(u.O);if(!(e&&t&&i&&s))return;if(!this.active||!this.sweepMap)return;if(this.tourMode&&!this.visualTour)return;const o=t.getSweepList(),n=this.useCurrentCriteria?this.prioritizer.priorityCriteria:Object.assign({},this.criteria);if(this.useCurrentCriteria){if(this.freezeCameraRotation){if(!n.sweep)return;n.cameraPosition.copy(n.sweep.position),n.cameraRot.copy(this.lastCriteria.cameraRot),n.cameraDir.copy(g.f.FORWARD).applyQuaternion(this.lastCriteria.cameraRot)}}else if(n.sweep=this.sweepData.getSweepByIndex(this.sweepIndex)||null,!this.freezeCameraRotation){if(!n.sweep)return;n.cameraPosition.copy(n.sweep.position),n.cameraRot.copy(i.pose.rotation),n.cameraDir.copy(g.f.FORWARD).applyQuaternion(n.cameraRot)}if(this.lastCriteria=Object.assign({},n),!n.sweep)return;this.tourMode||this.wipePreloadedData();const a=[];this.prioritizer.priorityCriteria=n,this.prioritizer.filterAndPrioritize(a,this.sweepMap,this.downloadDescriptorGetter);const h=new Set;let l="";for(const e of a)e&&e.sweep&&(h.has(e.sweep.id)||(h.add(e.sweep.id),l+=`${e.sweep.index}, `),this.allPreloadedSweeps.has(e.sweep.id)||this.allPreloadedSweeps.add(e.sweep.id));const p=new d.Vector3(0,0,-1.5).applyQuaternion(i.pose.rotation),w=(new d.Vector3).copy(i.pose.position).add(p),m=`Current Pano: ${n.sweep.index}\n    ${this.showPreloadIds?`Panos: ${l}`:""}\n    Preload Count (this pano): ${h.size}\n    Total Preloaded: ${this.allPreloadedSweeps.size}`,y=e.label("infoLabel",m,w,.1);if(y.lookAt(i.pose.position),y.setPosition(w),y.text=m,this.drawSweepSpheres(h,n),this.showSweepLabels)for(const t of o){const s=`${t.index}`,o=e.label(t.id,s,t.position,.1);o.text=s,o.setColorHex(16711680),o.lookAt(i.pose.position)}}drawSweepSpheres(e,t){const i=t.sweep;if(!i)return;this.draw.toggleAll(!1);const s=(new d.Vector3).copy(i.position);s.y+=-.5;for(const t of e){const e=this.sweepData.getSweep(t),o=i===e,n=o?"green":"white",a=(new d.Vector3).copy(e.position);if(a.y+=-.5,this.draw.sphere(e.id+"sphere"+(o&&"source"),{color:n,opacity:1}).update(a,.2).toggle(!0),!o){const t=this.draw.line(`${e.id}-${i.id}`,"white",.05);t.updatePositions(a,s),t.toggle(!0)}}}activateTourMode(){this.tourMode=!0;const e={},t=Math.round(this.sweepIndex),i=this.sweepData.getSweepByIndex(t);i&&this.engine.commandBinder.issueCommand(new w.ju({sweep:i.id})).then((()=>{this.wipePreloadedData(),this.allPreloadedSweeps.clear();const t=this.sweepData.getSweepList(),s=Math.round(.05*t.length);i&&this.tourStep(i,e,s)}))}tourStep(e,t,i,s=0,o=""){const n=e,a=this.sweepData.getSweepList();let r=e;if(!n||n.neighbours.length<=0)return;t[n.id]=!0,o+=`Sweep: ${n.index} Loaded: ${this.allPreloadedSweeps.size}\n`;let h=0;for(;h<a.length;){const e=(n.index+1+h)%a.length,i=this.sweepData.getSweepByIndex(e);if(h++,i&&(r=i,!t[r.id]&&r.id!==n.id&&r))break}if(++s<=i)if(this.visualTour)this.engine.commandBinder.issueCommand(new w.ju({sweep:n.id,rotation:(0,m.n0)(n.position,r.position),transition:y.n.Interpolate})).then((()=>{setTimeout((()=>{this.tourStep(r,t,i,s,o)}),500)}));else{const e=(0,m.n0)(n.position,r.position),a=(new d.Vector3).copy(g.f.FORWARD).applyQuaternion(e),h=new l.I6(n,n.position,a),c=[];this.prioritizer.priorityCriteria=h,this.prioritizer.filterAndPrioritize(c,this.sweepMap,this.downloadDescriptorGetter);this.queueToPanoSet(c).forEach((e=>this.allPreloadedSweeps.add(e))),this.tourStep(r,t,i,s,o)}else f.info(`TOUR END\n      Sweeps visited: ${s}\n      Visual: ${this.visualTour}\n      Sweeps preloaded: ${this.allPreloadedSweeps.size}`),f.info(`TOUR INFO\n      ${o}`),this.tourMode=!1}queueToPanoSet(e){const t=new Set;for(const i of e)i&&i.sweep&&(t.has(i.sweep.id)||t.add(i.sweep.id));return t}wipePreloadedData(){const e=this.sweepData.getSweepList();for(const t of e)this.downloadDescriptorGetter.deleteAllTileDownloadDescriptors(t.id)}}function M(e){e.getModuleBySymbol(o.y.SWEEP_PANO).then((t=>{const i=t;"tileDownloader"in i&&new PanoPreloadVisualizer(e,i.tileDownloader,i.tilePrioritizer)}))}},83387:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var s=i(14877);async function o(e){const[t,i]=await Promise.all([e.getModuleBySymbol(s.y.SETTINGS),e.getModuleBySymbol(s.y.WEBGL_RENDERER)]),o="WebGL Renderer";let n=null;function a(e){i.threeRenderer.forceContextLoss(),setTimeout((()=>{i.threeRenderer.forceContextRestore()}),e)}t.registerMenuButton({header:o,buttonName:"Lose Context for 0.1 sec",callback:()=>{a(100)}}),t.registerMenuButton({header:o,buttonName:"Lose Context for 5 sec",callback:()=>{a(5e3)}}),t.registerMenuEntry({header:o,setting:"autoLoseContext",initialValue:()=>!1,urlParam:!0,onChange(e){if(e){const e=()=>a(100);e(),n=setInterval(e,1e4)}else clearInterval(n)}})}},42372:(e,t,i)=>{"use strict";i.d(t,{M:()=>MeshesUtility});var s=i(77280),o=i(84428);class ThreeMesh{constructor(e,t,i){return this.thisType=e,this.container=t,this.mesh=i(),this.mesh.name=`${e.name}`,this.material=this.mesh.material,this.geometry=this.mesh.geometry,this}opacity(e){return this.material.opacity=e,this}}function n(e,t){t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{e.prototype[i]=t.prototype[i]}))}))}class AnimatedMeshMixin{constructor(){this.animationInit=!1}initAnimationMixin(e,t){this.animState={scale:t?t.clone():new o.Vector3(1,1,1),position:e?e.clone():new o.Vector3,target:{scale:t?t.clone():new o.Vector3(1,1,1),position:e?e.clone():new o.Vector3},temp:{pos:new o.Vector3,scale:new o.Vector3,makeScale:new o.Vector3}},this.animationInit=!0}update(e,t){if(!this.animationInit)throw Error(`${AnimatedMeshMixin.name} call this.initAnimationMixin() in ${this.style} constructor to enable update, because I said so.`);this.mesh.position.copy(e);const i=this.vector3From(t);return i.equals(this.mesh.scale)||this.mesh.scale.copy(i),this.animState.scale.copy(this.mesh.scale),this.animState.position.copy(this.mesh.position),this.mesh.updateMatrixWorld(!0),this}animate(e,t,i){if(!this.animationInit)throw Error(`${AnimatedMeshMixin.name} call this.initAnimationMixin() in ${this.style} constructor to enable animations, because I said so.`);const s=this.vector3From(i);this.animState.target.scale.copy(s),this.animState.target.position.copy(t);const o=this.animState.temp.pos.copy(this.mesh.position).lerp(t,e),n=this.animState.temp.scale.copy(this.mesh.scale).lerp(s,e);return this.update(o,n),this}vector3From(e){if(e instanceof o.Vector3)return this.animState.temp.makeScale.copy(e).clamp(r,h);if("number"==typeof e)return this.animState.temp.makeScale.set(e,e,e).clamp(r,h);throw Error("Unexpected scale input")}}const a=.01,r=new o.Vector3(a,a,a),h=new o.Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);class ToggleAddRemoveMixin{toggle(e){return e?this.container.add(this.mesh):this.container.remove(this.mesh),this.isVisible=e,this}}class BoxMesh extends ThreeMesh{constructor(e,t){super(BoxMesh,e,(()=>new o.Mesh(new o.BoxBufferGeometry(1,1,1),new o.MeshBasicMaterial(t)))),this.container=e,this.style="Box",this.mesh.frustumCulled=!1,this.geometry.computeBoundingBox(),this.initAnimationMixin()}}n(BoxMesh,[AnimatedMeshMixin,ToggleAddRemoveMixin]);class BoxWireframeMesh extends ThreeMesh{constructor(e,t){super(BoxWireframeMesh,e,(()=>{const e=new o.Box3Helper((new o.Box3).setFromCenterAndSize(new o.Vector3,new o.Vector3(1,1,1)));return new o.LineSegments(e.geometry,e.material)})),this.container=e,this.style="BoxWireframeMesh",t&&this.material.setValues(t),this.mesh.frustumCulled=!1,this.initAnimationMixin()}}n(BoxWireframeMesh,[ToggleAddRemoveMixin,AnimatedMeshMixin]);class CameraHelperMesh extends ThreeMesh{constructor(e,t){super(CameraHelperMesh,e,(()=>new o.CameraHelper(t))),this.container=e,this.style="CameraHelper",this.updateCamera(t)}updateCamera(e){return this.mesh.camera.copy(this.camWithSaneFarDistance(e)),this.mesh.update(),this}camWithSaneFarDistance(e){const t=e.clone();return t.far=5,t}}n(CameraHelperMesh,[ToggleAddRemoveMixin]);class PlaneMesh extends ThreeMesh{constructor(e,t){super(PlaneMesh,e,(()=>new o.Mesh(new o.PlaneBufferGeometry(1),new o.MeshBasicMaterial(t)))),this.container=e,this.style="PlaneMesh",this.radius=1;const i=new o.Matrix4;i.makeRotationFromEuler(new o.Euler(-Math.PI/2,0,0,"XYZ")),this.geometry.applyMatrix4(i),this.mesh.frustumCulled=!1,this.initAnimationMixin()}}n(PlaneMesh,[ToggleAddRemoveMixin,AnimatedMeshMixin]);class SphereMesh extends ThreeMesh{constructor(e,t){super(SphereMesh,e,(()=>new o.Mesh(new o.SphereBufferGeometry(1),new o.MeshBasicMaterial(t)))),this.container=e,this.style="SphereMesh",this.radius=1,this.mesh.frustumCulled=!1,this.initAnimationMixin()}}n(SphereMesh,[ToggleAddRemoveMixin,AnimatedMeshMixin]);var c=i(77364);class SplineCurveMesh extends ThreeMesh{constructor(e,t){return super(SplineCurveMesh,e,(()=>new o.Line(new o.BufferGeometry,new o.LineBasicMaterial(Object.assign({color:c.I.MP_BRAND,opacity:1,transparent:!0},t))))),this.container=e,this.positionsBuffer=new o.BufferAttribute(new Float32Array(150),3),this.point=new o.Vector3,this.points={start:new o.Vector3,control:new o.Vector3,end:new o.Vector3},this.updatePoints=(e,t,i)=>{this.points.start.copy(this.curve.v0.copy(e)),this.points.control.copy(this.curve.v1.copy(t)),this.points.end.copy(this.curve.v2.copy(i));for(let e=0;e<50;e++){const t=e/49;this.curve.getPoint(t,this.point),this.positionsBuffer.setXYZ(e,this.point.x,this.point.y,this.point.z)}return this.positionsBuffer.needsUpdate=!0,this},this.animatePoints=(e,t,i,s)=>{const{start:o,control:n,end:a}=this.points;return o.equals(n)&&o.equals(a)?(this.updatePoints(t,i,s),this):(o.lerp(t,e),n.lerp(i,e),a.lerp(s,e),this.updatePoints(o,n,a),this)},this.mesh.frustumCulled=!1,this.curve=new o.QuadraticBezierCurve3(new o.Vector3,new o.Vector3,new o.Vector3),this.geometry.setAttribute("position",this.positionsBuffer),this.geometry.computeBoundingBox(),this}}n(SplineCurveMesh,[ToggleAddRemoveMixin]);var l=i(19271),u=i(4400),p=i(13462);class MeshesUtility{constructor(e){this.cache={},this.helperCache={},this.toggle=e=>(this.options.scene&&(e?this.options.scene.add(this.options.container):this.options.scene.remove(this.options.container)),this),this.box=(e,t)=>(this.cache[w.box][e]||(this.cache[w.box][e]=new BoxMesh(this.options.container,t).toggle(!0)),this.cache[w.box][e]),this.boxWire=(e,t)=>(this.cache[w.boxWire][e]||(this.cache[w.boxWire][e]=new BoxWireframeMesh(this.options.container,t).toggle(!0)),this.cache[w.boxWire][e]),this.cam=(e,t)=>(this.cache[w.cameraHelper][e]||(this.cache[w.cameraHelper][e]=new CameraHelperMesh(this.options.container,t).toggle(!0)),this.cache[w.cameraHelper][e]),this.label=(e,t,i,s=.25)=>{if(!this.labelCreator){const{color:e,backgroundColor:t,backgroundOpacity:i,background:s}=this.options;this.labelCreator=new l.u({color:e,background:s,backgroundColor:t,backgroundOpacity:i,wordWrapWidth:650})}if(!this.cache[w.label][e]){const o=this.labelCreator.createLabel();this.cache[w.label][e]=o,o.position.copy(i),o.text=t,o.scaleFactor=s,this.options.container.add(o)}return this.cache[w.label][e]},this.line=(e,t=this.options.lineColor,i=this.options.linewidth)=>{if(!this.cache[w.line][e]){const n=(0,u.makeLineMaterial)("string"==typeof t?new o.Color(t).getHex():t.getHex(),!1,{linewidth:i}),a={onShow:()=>this.options.container.add(...r.children),onHide:()=>this.options.container.remove(...r.children)},r=new p.c(s.f.ZERO.clone(),s.f.ZERO.clone(),n,a);r.updateResolution(window.innerWidth,window.innerHeight).opacity(1).toggle(!0),this.cache[w.line][e]=r}return this.cache[w.line][e]},this.plane=(e,t)=>(this.cache[w.plane][e]||(this.cache[w.plane][e]=new PlaneMesh(this.options.container,t).toggle(!0)),this.cache[w.plane][e]),this.sphere=(e,t)=>(this.cache[w.sphere][e]||(this.cache[w.sphere][e]=new SphereMesh(this.options.container,t).toggle(!0)),this.cache[w.sphere][e]),this.triangle=(e,t,i,s,n)=>{if(!this.cache[w.triangle][e]){const a=new Float32Array(9);t.toArray(a,0),i.toArray(a,3),s.toArray(a,6);const r=new o.BufferGeometry;r.setAttribute("position",new o.BufferAttribute(a,3));const h=new o.Mesh(r,new o.MeshBasicMaterial(n));this.options.container.add(h),this.cache[w.triangle][e]=new SphereMesh(this.options.container,n).toggle(!0)}return this.cache[w.triangle][e]},this.spline=(e,t)=>(this.cache[w.spline][e]||(this.cache[w.spline][e]=new SplineCurveMesh(this.options.container,t).toggle(!0)),this.cache[w.spline][e]),this.randomColor=e=>{if(void 0!==e){if(!this.helperCache[m.color][e]){const t=new o.Color(d(),d(),d());this.helperCache[m.color][e]=t}return this.helperCache[m.color][e]}return new o.Color(d(),d(),d())},this.randomVector3=e=>{if(void 0!==e){if(!this.helperCache[m.vector3][e]){const t=new o.Vector3(2*(.5-d()),2*(.5-d()),2*(.5-d()));this.helperCache[m.vector3][e]=t}return this.helperCache[m.vector3][e]}return new o.Vector3(2*(.5-d()),2*(.5-d()),2*(.5-d()))},this.toggleAll=e=>{for(const t of Object.values(w)){const i=Object.values(this.cache[t]);for(const t of i)"toggle"in t&&t.toggle(e)}return this},this.options=Object.assign(Object.assign({},g),e);for(const e of Object.values(w))this.cache[e]={};for(const e of Object.values(m))this.helperCache[e]={};this.options.scene&&this.toggle(!0)}async addToScene(e){return this.options.scene=e,this.toggle(!0),this}}const d=()=>Math.random(),g={lineColor:"white",linewidth:2,color:"white",background:!0,backgroundColor:"white",backgroundOpacity:.5,container:new o.Group};var w,m;!function(e){e.box="box",e.boxWire="boxWire",e.label="label",e.line="line",e.plane="plane",e.sphere="sphere",e.spline="spline",e.triangle="triangle",e.cameraHelper="cameraHelper"}(w||(w={})),function(e){e.color="color",e.vector3="vector3"}(m||(m={}))}}]);