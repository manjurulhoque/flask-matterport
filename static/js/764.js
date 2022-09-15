(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[764],{14894:(t,e,i)=>{"use strict";i.d(e,{Z:()=>CommonControls});class CommonControls{}},24838:(t,e,i)=>{"use strict";var s;i.d(e,{S:()=>s}),function(t){t[t.Standard=0]="Standard",t[t.Depth=1]="Depth",t[t.Transparent=2]="Transparent",t[t.Wireframe=3]="Wireframe",t[t.UV=4]="UV"}(s||(s={}))},54374:(t,e,i)=>{"use strict";i.d(e,{g:()=>RoomMesh});var s=i(84428),o=i(33299),r=i(19945),n=i(75977),a=i(99295),h=i(56483);class RoomMesh extends n.S{constructor(t,e,i=o.o.ALL){super(),this._opacity=1,this._chunks=[],this.size=new s.Vector3,this.center=new s.Vector3,this.built=!1,this.layers.mask=i.mask,this.name=`RoomMesh:${t}-${e}`,this.meshGroup=t,this.meshSubgroup=e,this.renderOrder=a.z.default,this.onBeforeRender=(t,e,i,o,r,n)=>{r instanceof s.RawShaderMaterial&&(n?this.chunks[n.materialIndex].onBeforeDraw(r):this.chunks.length&&this.chunks[0].onBeforeDraw(r))}}dispose(){this.reset()}reset(){this._chunks.length=0,this.geometry.dispose(),this.built=!1}addChunk(t){-1===this._chunks.indexOf(t)&&this._chunks.push(t)}getChunk(t){return this._chunks[t]}build(){if(this.built)throw new Error("build() should only be called once");if(!this._chunks.length)return;const t=(0,r.qf)(this._chunks.map((t=>t.geometry)));t.clearGroups();let e=0;this.material=[],this._chunks.forEach(((i,s)=>{i.geometry&&i.geometry.index&&(t.addGroup(e,i.geometry.index.count,s),e+=i.geometry.index.count,i.geometry.dispose(),i.geometry=t,i.notifyOnMaterialUpdated((t=>{Array.isArray(this.material)&&(this.material[s]=t)})),i.onOpacityUpdate=t=>{this.opacity=t})})),this.geometry=t,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=this._chunks.map((t=>t.material)),this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0}buildWithTileChunk(t){if(this.built)return;const{meshGroup:e,meshSubgroup:i,lod:s}=t;this.name=`RoomMesh:${s}-${e}-${i}-${t.chunkIndex}`,this.meshGroup=e,this.meshSubgroup=i,this._chunks.push(t),t.notifyOnMaterialUpdated((t=>{this.material=t})),t.onOpacityUpdate=t=>{this.opacity=t},this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0}get boundingBox(){return(0,r.A5)(this.geometry)}set opacity(t){t!==this.opacity&&(this._opacity=t,this.raycastEnabled=t>h.xx.FADE_CLICKABLE_THRESHOLD,this.renderOrder=t<h.xx.FADE_OPAQUE?a.z.ghostFloor:a.z.default)}get opacity(){return this._opacity}get chunks(){return this._chunks}getSortKey(){return this.chunks.length?this._chunks[0].getSortKey():0}}},55187:(t,e,i)=>{"use strict";i.d(e,{n:()=>MeshPreviewSetPositonCommand});var s=i(93037);class MeshPreviewSetPositonCommand extends s.m{constructor(t,e,i){super(),this.id="MESH_PREVIEW_POSITION",this.payload={enabled:t,previewCirclePosition:e,size:i}}}},42249:(t,e,i)=>{"use strict";i.d(e,{U:()=>SetChunkRenderModeCommand});var s=i(93037),o=i(24838);class SetChunkRenderModeCommand extends s.m{constructor(t){super(),this.id="SET_CHUNK_RENDER_MODE",this.payload={mode:t}}}SetChunkRenderModeCommand.modes=o.S},10830:(t,e,i)=>{"use strict";i.d(e,{u:()=>SetMouseCursorCommand});var s=i(93037);class SetMouseCursorCommand extends s.m{constructor(t=null){super(),this.id="SET_MOUSE_CURSOR",this.payload={cursor:t}}}},42226:(t,e,i)=>{"use strict";var s;i.d(e,{C:()=>s}),function(t){t.NONE="none",t.DEFAULT="default",t.MOVE="move",t.MOVE_LF="col-resize",t.MOVE_UD="row-resize",t.XHAIR="crosshair",t.PLUS="cell",t.QUESTION="help",t.NOPE="not-allowed",t.FINGER="pointer",t.TEXT="text",t.TEXT_VERT="vertical-text",t.ZOOM_IN="zoom-in",t.ZOOM_OUT="zoom-in",t.GRAB="grab",t.GRABBING="grabbing",t.ARROW_R="e-resize",t.ARROW_L="w-resize",t.ARROW_U="n-resize",t.ARROW_D="s-resize",t.ARROW_UR="ne-resize",t.ARROW_UL="nw-resize",t.ARROW_DR="se-resize",t.ARROW_DL="sw-resize",t.ARROW_LR="ew-resize",t.ARROW_UD="ns-resize",t.ARROW_URDL="nesw-resize",t.ARROW_ULDR="nwse-resize"}(s||(s={}))},20751:(t,e,i)=>{"use strict";i.d(e,{SI:()=>o,uQ:()=>r,zf:()=>n,O8:()=>a,WI:()=>h});var s=i(994);const o=1e3/60,r=(0,s.Id)(70),n=-r,a=.05,h=.1/60},82702:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>PanoramaControls,lookAccelerationKey:()=>S});var s=i(57227),o=i(84428),r=i(77280),n=i(20751),a=i(85111),h=i(74170),l=i(14894),c=i(31013);class CameraControls extends l.Z{constructor(t){super(),this.lookVelocity=new o.Vector2,this.lookAccel=new o.Vector2,this.tempAxis=new o.Vector3,this.tempOrientation=new o.Quaternion,this.currentOrientation=new o.Quaternion,this.tempEuler=new o.Euler,this.cameraModule=t,this.transition={active:!1,startTime:0,elapsed:0,duration:0,velocity:new o.Vector2,easeOut:!1}}setLookAcceleration(t,e=!1){this.transition.active||(e&&(t.x&&this.lookVelocity.x&&Math.sign(t.x)!==Math.sign(this.lookVelocity.x)&&(this.lookVelocity.x=0),t.y&&this.lookVelocity.y&&Math.sign(t.y)!==Math.sign(this.lookVelocity.y)&&(this.lookVelocity.y=0)),this.lookAccel.x=void 0!==t.x?t.x:this.lookAccel.x,this.lookAccel.y=void 0!==t.y?t.y:this.lookAccel.y)}startTransition(t,e,i){const s=new c.Q;return this.transition.active=!0,this.transition.duration=t,this.transition.elapsed=0,this.transition.startTime=Date.now(),this.transition.deferred=s,this.transition.velocity.copy(e),this.transition.easeOut=i,this.lookAccel.set(0,0),this.lookVelocity.copy(e),this.cameraModule.beginExternalTransition(),s.promise()}stopTransition(){this.transition.active&&(this.cameraModule.endExternalTransition(),this.transition.active=!1),this.transition.deferred&&(this.transition.deferred.resolve(),this.transition.deferred=void 0)}updateTransition(t){const e=t/n.SI;if(this.lookVelocity.copy(this.transition.velocity),this.transition.elapsed+=t,this.transition.elapsed>=this.transition.duration){const e=this.transition.duration-(this.transition.elapsed-t);this.lookVelocity.multiplyScalar(e/t)}else this.lookVelocity.multiplyScalar(e)}updateCameraParameters(){const t=this.cameraModule.getData(!1);this.tempEuler.setFromQuaternion(t.pose.rotation,"YXZ");const e=this.tempEuler.x,i=(0,h.uZ)(this.lookVelocity.y,n.zf-e,n.uQ-e);this.tempAxis.copy(r.f.RIGHT),this.tempOrientation.setFromAxisAngle(this.tempAxis.applyQuaternion(t.pose.rotation),i),this.currentOrientation.copy(t.pose.rotation).premultiply(this.tempOrientation),this.tempOrientation.setFromAxisAngle(r.f.UP,this.lookVelocity.x),this.currentOrientation.premultiply(this.tempOrientation),t.pose.rotation.equals(this.currentOrientation)||(this.tempOrientation.copy(this.currentOrientation).normalize(),this.cameraModule.updateCameraRotation(this.tempOrientation))}update(t){const e=this.cameraModule.getData(!1),i=t/n.SI;e.pose.rotation.equals(this.currentOrientation)||this.currentOrientation.copy(e.pose.rotation),this.transition.active?(this.updateTransition(t),this.updateCameraParameters(),this.transition.elapsed>=this.transition.duration&&(this.stop(this.transition.easeOut),this.transition.active=!1)):(this.lookAccel.length()>a.Z.epsilon||this.lookVelocity.length()>a.Z.epsilon)&&(this.lookVelocity.addScaledVector(this.lookAccel,i),this.updateCameraParameters(),this.lookVelocity.multiplyScalar(Math.pow(1-n.O8,i)))}stop(t=!1){this.stopTransition(),this.lookAccel.set(0,0),t||this.lookVelocity.set(0,0)}startRotateTransition(t,e,i){const s=this.cameraModule.getData(!1);return s.transition&&s.transition.activeInternal&&s.transition.to.rotation&&(s.transition.to.rotation=void 0),this.startTransition(t,e.clone().multiplyScalar(n.SI),i).nativePromise()}startTranslateTransition(t,e,i=!0){throw new Error("Panning isn't supported in Panorama Controls")}startZoomTransition(t,e,i){throw new Error("Zooming isn't supported in Panorama Controls")}}var d=i(37363),u=i(59057),p=i(22878),m=i(8054),y=i(43985),g=i(19926),k=i(92214),R=i(76922),x=i(94113),A=i(61903),O=i(14877);const S="Rotation speed";class PanoramaControls extends s.Y{constructor(){super(...arguments),this.name="panorama-controls",this.controlsEngaged=!1,this.lookAccelerationSpeed=n.WI,this.calcRotationAngle=(()=>{const t=new o.Matrix4,e=new o.Vector3,i=new o.Vector3;return(s,r,n)=>{const a=s.getData(!1);t.copy(a.pose.projection.asThreeMatrix4()),t.invert(),e.set(r.x-n.x,r.y-n.y,-1).applyMatrix4(t),i.set(r.x,r.y,-1).applyMatrix4(t);const h=Math.sqrt(e.x*e.x+e.z*e.z),l=Math.sqrt(i.x*i.x+i.z*i.z),c=Math.atan2(e.y,h),d=Math.atan2(i.y,l)-c;e.y=0,i.y=0,e.normalize(),i.normalize();const u=Math.acos(e.dot(i));let p=0;return isNaN(u)||(p=u,n.x>0&&(p*=-1)),new o.Vector2(-p,-d)}})()}async init(t,e){const i=await e.getModuleBySymbol(O.y.CAMERA);this.controls=new CameraControls(i);const s=await e.getModuleBySymbol(O.y.CONTROLS_COMMON);s.addControls(p.Ey.Panorama,this.controls),s.addControls(p.Ey.Mesh,this.controls),this.market=e.market,this.bindings.push(e.subscribe(k.Z,(t=>{this.controls.stop()}))),e.getModuleBySymbol(O.y.INPUT).then((t=>{t.registerHandler(R.E0,(t=>{this.validateViewmode()&&this.controls.stop()})),t.registerHandler(R._t,(t=>{this.validateViewmode()&&t.buttons&m.r3.PRIMARY&&(this.controlsEngaged=!0,this.onDrag(i,t.position,t.delta),this.controls.update(n.SI),this.controls.stop())})),t.registerHandler(R._R,(t=>{this.validateViewmode()&&this.controlsEngaged&&(t.timeSinceLastMove<100&&!(t.buttons&m.r3.PRIMARY)&&(this.onDrag(i,t.position,t.delta),this.controls.update(n.SI),this.controls.setLookAcceleration({x:0,y:0})),this.controlsEngaged=!1)})),t.registerHandler(x.e,(t=>{this.validateViewmode()&&this.onKey(t.key,t.state)}))}))}onUpdate(t){this.validateViewmode()&&this.controls.update(t)}onDrag(t,e,i){this.controls.setLookAcceleration(this.calcRotationAngle(t,e,i))}onKey(t,e){let i=null;const s=this.market.tryGetData(A.e);s&&(i=s.tryGetProperty(S,null)),this.lookAccelerationSpeed=i?i*(Math.PI/180)/60:this.lookAccelerationSpeed;const o=e===g.M.DOWN;switch(t){case y.R.LEFTARROW:case y.R.J:this.controls.setLookAcceleration({x:o?this.lookAccelerationSpeed:0},!0);break;case y.R.RIGHTARROW:case y.R.L:this.controls.setLookAcceleration({x:o?-this.lookAccelerationSpeed:0},!0);break;case y.R.K:this.controls.setLookAcceleration({y:o?-this.lookAccelerationSpeed:0},!0);break;case y.R.I:this.controls.setLookAcceleration({y:o?this.lookAccelerationSpeed:0},!0)}}validateViewmode(){const t=this.market.tryGetData(d.O),e=this.market.tryGetData(u.Z);return!t||!e||t.isInside()&&!e.isVR()}}},88807:(t,e,i)=>{"use strict";i.d(e,{b:()=>AdaptiveRawShaderMaterial});var s=i(84428);class AdaptiveRawShaderMaterial extends s.RawShaderMaterial{onBeforeCompile(t,e){super.onBeforeCompile(t,e),e.capabilities.isWebGL2&&this.glslVersion!==s.GLSL3&&(t.glslVersion=s.GLSL3,t.vertexShader=o+t.vertexShader,t.fragmentShader=r+t.fragmentShader)}}const o="\n#define attribute in\n#define varying out\n#define texture2D texture\n",r="\n#define varying in\nout highp vec4 pc_fragColor;\n#define gl_FragColor pc_fragColor\n#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n"},25935:(t,e,i)=>{"use strict";i.d(e,{E:()=>TypedMesh});var s=i(84428);class TypedMesh extends s.Mesh{constructor(t,e){super(t,e)}}}}]);