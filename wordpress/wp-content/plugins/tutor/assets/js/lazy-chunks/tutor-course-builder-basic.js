"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["639"],{19251:function(e,t,r){r.d(t,{Aw:()=>i,L4:()=>l,bO:()=>s});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);const o={display:"none"};function i(e){let{id:t,value:r}=e;return a().createElement("div",{id:t,style:o},r)}function l(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;// Hide element visually but keep it readable by screen readers
const o={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return a().createElement("div",{id:t,style:o,role:"status","aria-live":n,"aria-atomic":true},r)}function s(){const[e,t]=(0,n.useState)("");const r=(0,n.useCallback)(e=>{if(e!=null){t(e)}},[]);return{announce:r,announcement:e}}//# sourceMappingURL=accessibility.esm.js.map
},15871:function(e,t,r){r.d(t,{AN:()=>eA,FR:()=>b,Hd:()=>tT,MS:()=>m,Mp:()=>td,PM:()=>tv,Pf:()=>eK,Sj:()=>L,Vy:()=>k,fF:()=>th,fp:()=>D,sl:()=>j,uN:()=>eb,vL:()=>eh,y$:()=>C,zM:()=>tb});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(75206);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(74979);/* import */var s=r(19251);const c=/*#__PURE__*/(0,n.createContext)(null);function d(e){const t=(0,n.useContext)(c);(0,n.useEffect)(()=>{if(!t){throw new Error("useDndMonitor must be used within a children of <DndContext>")}const r=t(e);return r},[e,t])}function u(){const[e]=(0,n.useState)(()=>new Set);const t=(0,n.useCallback)(t=>{e.add(t);return()=>e.delete(t)},[e]);const r=(0,n.useCallback)(t=>{let{type:r,event:n}=t;e.forEach(e=>{var t;return(t=e[r])==null?void 0:t.call(e,n)})},[e]);return[r,t]}const f={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "};const p={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was moved over droppable area "+r.id+"."}return"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was dropped over droppable area "+r.id}return"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function v(e){let{announcements:t=p,container:r,hiddenTextDescribedById:i,screenReaderInstructions:c=f}=e;const{announce:u,announcement:v}=(0,s/* .useAnnouncement */.bO)();const h=(0,l/* .useUniqueId */.YG)("DndLiveRegion");const[g,m]=(0,n.useState)(false);(0,n.useEffect)(()=>{m(true)},[]);d((0,n.useMemo)(()=>({onDragStart(e){let{active:r}=e;u(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;if(t.onDragMove){u(t.onDragMove({active:r,over:n}))}},onDragOver(e){let{active:r,over:n}=e;u(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;u(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;u(t.onDragCancel({active:r,over:n}))}}),[u,t]));if(!g){return null}const b=a().createElement(a().Fragment,null,a().createElement(s/* .HiddenText */.Aw,{id:i,value:c.draggable}),a().createElement(s/* .LiveRegion */.L4,{id:h,announcement:v}));return r?(0,o.createPortal)(b,r):b}var h;(function(e){e["DragStart"]="dragStart";e["DragMove"]="dragMove";e["DragEnd"]="dragEnd";e["DragCancel"]="dragCancel";e["DragOver"]="dragOver";e["RegisterDroppable"]="registerDroppable";e["SetDroppableDisabled"]="setDroppableDisabled";e["UnregisterDroppable"]="unregisterDroppable"})(h||(h={}));function g(){}function m(e,t){return(0,n.useMemo)(()=>({sensor:e,options:t!=null?t:{}}),[e,t])}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>[...t].filter(e=>e!=null),[...t])}const _=/*#__PURE__*/Object.freeze({x:0,y:0});/**
 * Returns the distance between two points
 */function y(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(e,t){const r=(0,l/* .getEventCoordinates */.e_)(e);if(!r){return"0 0"}const n={x:(r.x-t.left)/t.width*100,y:(r.y-t.top)/t.height*100};return n.x+"% "+n.y+"%"}/**
 * Sort collisions from smallest to greatest value
 */function x(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return r-n}/**
 * Sort collisions from greatest to smallest value
 */function A(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return n-r}/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */function Y(e){let{left:t,top:r,height:n,width:a}=e;return[{x:t,y:r},{x:t+a,y:r},{x:t,y:r+n},{x:t+a,y:r+n}]}function k(e,t){if(!e||e.length===0){return null}const[r]=e;return t?r[t]:r}/**
 * Returns the coordinates of the center of a given ClientRect
 */function I(e,t,r){if(t===void 0){t=e.left}if(r===void 0){r=e.top}return{x:t+e.width*.5,y:r+e.height*.5}}/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */const D=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=I(t,t.left,t.top);const o=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=y(I(n),a);o.push({id:t,data:{droppableContainer:e,value:r}})}}return o.sort(x)};/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */const C=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=Y(t);const o=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=Y(n);const i=a.reduce((e,t,n)=>{return e+y(r[n],t)},0);const l=Number((i/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:l}})}}return o.sort(x)};/**
 * Returns the intersecting rectangle area between two rectangles
 */function S(e,t){const r=Math.max(t.top,e.top);const n=Math.max(t.left,e.left);const a=Math.min(t.left+t.width,e.left+e.width);const o=Math.min(t.top+t.height,e.top+e.height);const i=a-n;const l=o-r;if(n<a&&r<o){const r=t.width*t.height;const n=e.width*e.height;const a=i*l;const o=a/(r+n-a);return Number(o.toFixed(4))}// Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
return 0}/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */const M=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=[];for(const e of n){const{id:n}=e;const o=r.get(n);if(o){const r=S(o,t);if(r>0){a.push({id:n,data:{droppableContainer:e,value:r}})}}}return a.sort(A)};/**
 * Check if a given point is contained within a bounding rectangle
 */function E(e,t){const{top:r,left:n,bottom:a,right:o}=t;return r<=e.y&&e.y<=a&&n<=e.x&&e.x<=o}/**
 * Returns the rectangles that the pointer is hovering over
 */const T=e=>{let{droppableContainers:t,droppableRects:r,pointerCoordinates:n}=e;if(!n){return[]}const a=[];for(const e of t){const{id:t}=e;const o=r.get(t);if(o&&E(n,o)){/* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */const r=Y(o);const i=r.reduce((e,t)=>{return e+y(n,t)},0);const l=Number((i/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:l}})}}return a.sort(x)};function H(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}function F(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:_}function N(e){return function t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}return n.reduce((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x}),{...t})}}const K=/*#__PURE__*/N(1);function O(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function P(e,t,r){const n=O(t);if(!n){return e}const{scaleX:a,scaleY:o,x:i,y:l}=n;const s=e.left-i-(1-a)*parseFloat(r);const c=e.top-l-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1));const d=a?e.width/a:e.width;const u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:s+d,bottom:c+u,left:s}}const W={ignoreTransform:false};/**
 * Returns the bounding client rect of an element relative to the viewport.
 */function L(e,t){if(t===void 0){t=W}let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=(0,l/* .getWindow */.zk)(e).getComputedStyle(e);if(t){r=P(r,t,n)}}const{top:n,left:a,width:o,height:i,bottom:s,right:c}=r;return{top:n,left:a,width:o,height:i,bottom:s,right:c}}/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */function R(e){return L(e,{ignoreTransform:true})}function B(e){const t=e.innerWidth;const r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}function z(e,t){if(t===void 0){t=(0,l/* .getWindow */.zk)(e).getComputedStyle(e)}return t.position==="fixed"}function U(e,t){if(t===void 0){t=(0,l/* .getWindow */.zk)(e).getComputedStyle(e)}const r=/(auto|scroll|overlay)/;const n=["overflow","overflowX","overflowY"];return n.some(e=>{const n=t[e];return typeof n==="string"?r.test(n):false})}function j(e,t){const r=[];function n(a){if(t!=null&&r.length>=t){return r}if(!a){return r}if((0,l/* .isDocument */.wz)(a)&&a.scrollingElement!=null&&!r.includes(a.scrollingElement)){r.push(a.scrollingElement);return r}if(!(0,l/* .isHTMLElement */.sb)(a)||(0,l/* .isSVGElement */.xZ)(a)){return r}if(r.includes(a)){return r}const o=(0,l/* .getWindow */.zk)(e).getComputedStyle(a);if(a!==e){if(U(a,o)){r.push(a)}}if(z(a,o)){return r}return n(a.parentNode)}if(!e){return r}return n(e)}function q(e){const[t]=j(e,1);return t!=null?t:null}function V(e){if(!l/* .canUseDOM */.Sw||!e){return null}if((0,l/* .isWindow */.l6)(e)){return e}if(!(0,l/* .isNode */.Ll)(e)){return null}if((0,l/* .isDocument */.wz)(e)||e===(0,l/* .getOwnerDocument */.TW)(e).scrollingElement){return window}if((0,l/* .isHTMLElement */.sb)(e)){return e}return null}function G(e){if((0,l/* .isWindow */.l6)(e)){return e.scrollX}return e.scrollLeft}function Q(e){if((0,l/* .isWindow */.l6)(e)){return e.scrollY}return e.scrollTop}function X(e){return{x:G(e),y:Q(e)}}var Z;(function(e){e[e["Forward"]=1]="Forward";e[e["Backward"]=-1]="Backward"})(Z||(Z={}));function $(e){if(!l/* .canUseDOM */.Sw||!e){return false}return e===document.scrollingElement}function J(e){const t={x:0,y:0};const r=$(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth};const n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};const a=e.scrollTop<=t.y;const o=e.scrollLeft<=t.x;const i=e.scrollTop>=n.y;const l=e.scrollLeft>=n.x;return{isTop:a,isLeft:o,isBottom:i,isRight:l,maxScroll:n,minScroll:t}}const ee={x:.2,y:.2};function et(e,t,r,n,a){let{top:o,left:i,right:l,bottom:s}=r;if(n===void 0){n=10}if(a===void 0){a=ee}const{isTop:c,isBottom:d,isLeft:u,isRight:f}=J(e);const p={x:0,y:0};const v={x:0,y:0};const h={height:t.height*a.y,width:t.width*a.x};if(!c&&o<=t.top+h.height){// Scroll Up
p.y=Z.Backward;v.y=n*Math.abs((t.top+h.height-o)/h.height)}else if(!d&&s>=t.bottom-h.height){// Scroll Down
p.y=Z.Forward;v.y=n*Math.abs((t.bottom-h.height-s)/h.height)}if(!f&&l>=t.right-h.width){// Scroll Right
p.x=Z.Forward;v.x=n*Math.abs((t.right-h.width-l)/h.width)}else if(!u&&i<=t.left+h.width){// Scroll Left
p.x=Z.Backward;v.x=n*Math.abs((t.left+h.width-i)/h.width)}return{direction:p,speed:v}}function er(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:a}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:a,width:e.clientWidth,height:e.clientHeight}}function en(e){return e.reduce((e,t)=>{return(0,l/* .add */.WQ)(e,X(t))},_)}function ea(e){return e.reduce((e,t)=>{return e+G(t)},0)}function eo(e){return e.reduce((e,t)=>{return e+Q(t)},0)}function ei(e,t){if(t===void 0){t=L}if(!e){return}const{top:r,left:n,bottom:a,right:o}=t(e);const i=q(e);if(!i){return}if(a<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth){e.scrollIntoView({block:"center",inline:"center"})}}const el=[["x",["left","right"],ea],["y",["top","bottom"],eo]];class es{constructor(e,t){this.rect=void 0;this.width=void 0;this.height=void 0;this.top=void 0;this.bottom=void 0;this.right=void 0;this.left=void 0;const r=j(t);const n=en(r);this.rect={...e};this.width=e.width;this.height=e.height;for(const[e,t,a]of el){for(const o of t){Object.defineProperty(this,o,{get:()=>{const t=a(r);const i=n[e]-t;return this.rect[o]+i},enumerable:true})}}Object.defineProperty(this,"rect",{enumerable:false})}}class ec{constructor(e){this.target=void 0;this.listeners=[];this.removeAll=()=>{this.listeners.forEach(e=>{var t;return(t=this.target)==null?void 0:t.removeEventListener(...e)})};this.target=e}add(e,t,r){var n;(n=this.target)==null?void 0:n.addEventListener(e,t,r);this.listeners.push([e,t,r])}}function ed(e){// If the `event.target` element is removed from the document events will still be targeted
// at it, and hence won't always bubble up to the window or document anymore.
// If there is any risk of an element being removed while it is being dragged,
// the best practice is to attach the event listeners directly to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
const{EventTarget:t}=(0,l/* .getWindow */.zk)(e);return e instanceof t?e:(0,l/* .getOwnerDocument */.TW)(e)}function eu(e,t){const r=Math.abs(e.x);const n=Math.abs(e.y);if(typeof t==="number"){return Math.sqrt(r**2+n**2)>t}if("x"in t&&"y"in t){return r>t.x&&n>t.y}if("x"in t){return r>t.x}if("y"in t){return n>t.y}return false}var ef;(function(e){e["Click"]="click";e["DragStart"]="dragstart";e["Keydown"]="keydown";e["ContextMenu"]="contextmenu";e["Resize"]="resize";e["SelectionChange"]="selectionchange";e["VisibilityChange"]="visibilitychange"})(ef||(ef={}));function ep(e){e.preventDefault()}function ev(e){e.stopPropagation()}var eh;(function(e){e["Space"]="Space";e["Down"]="ArrowDown";e["Right"]="ArrowRight";e["Left"]="ArrowLeft";e["Up"]="ArrowUp";e["Esc"]="Escape";e["Enter"]="Enter";e["Tab"]="Tab"})(eh||(eh={}));const eg={start:[eh.Space,eh.Enter],cancel:[eh.Esc],end:[eh.Space,eh.Enter,eh.Tab]};const em=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case eh.Right:return{...r,x:r.x+25};case eh.Left:return{...r,x:r.x-25};case eh.Down:return{...r,y:r.y+25};case eh.Up:return{...r,y:r.y-25}}return undefined};class eb{constructor(e){this.props=void 0;this.autoScrollEnabled=false;this.referenceCoordinates=void 0;this.listeners=void 0;this.windowListeners=void 0;this.props=e;const{event:{target:t}}=e;this.props=e;this.listeners=new ec((0,l/* .getOwnerDocument */.TW)(t));this.windowListeners=new ec((0,l/* .getWindow */.zk)(t));this.handleKeyDown=this.handleKeyDown.bind(this);this.handleCancel=this.handleCancel.bind(this);this.attach()}attach(){this.handleStart();this.windowListeners.add(ef.Resize,this.handleCancel);this.windowListeners.add(ef.VisibilityChange,this.handleCancel);setTimeout(()=>this.listeners.add(ef.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props;const r=e.node.current;if(r){ei(r)}t(_)}handleKeyDown(e){if((0,l/* .isKeyboardEvent */.kx)(e)){const{active:t,context:r,options:n}=this.props;const{keyboardCodes:a=eg,coordinateGetter:o=em,scrollBehavior:i="smooth"}=n;const{code:s}=e;if(a.end.includes(s)){this.handleEnd(e);return}if(a.cancel.includes(s)){this.handleCancel(e);return}const{collisionRect:c}=r.current;const d=c?{x:c.left,y:c.top}:_;if(!this.referenceCoordinates){this.referenceCoordinates=d}const u=o(e,{active:t,context:r.current,currentCoordinates:d});if(u){const t=(0,l/* .subtract */.Re)(u,d);const n={x:0,y:0};const{scrollableAncestors:a}=r.current;for(const r of a){const a=e.code;const{isTop:o,isRight:l,isLeft:s,isBottom:c,maxScroll:d,minScroll:f}=J(r);const p=er(r);const v={x:Math.min(a===eh.Right?p.right-p.width/2:p.right,Math.max(a===eh.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(a===eh.Down?p.bottom-p.height/2:p.bottom,Math.max(a===eh.Down?p.top:p.top+p.height/2,u.y))};const h=a===eh.Right&&!l||a===eh.Left&&!s;const g=a===eh.Down&&!c||a===eh.Up&&!o;if(h&&v.x!==u.x){const e=r.scrollLeft+t.x;const o=a===eh.Right&&e<=d.x||a===eh.Left&&e>=f.x;if(o&&!t.y){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({left:e,behavior:i});return}if(o){n.x=r.scrollLeft-e}else{n.x=a===eh.Right?r.scrollLeft-d.x:r.scrollLeft-f.x}if(n.x){r.scrollBy({left:-n.x,behavior:i})}break}else if(g&&v.y!==u.y){const e=r.scrollTop+t.y;const o=a===eh.Down&&e<=d.y||a===eh.Up&&e>=f.y;if(o&&!t.x){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({top:e,behavior:i});return}if(o){n.y=r.scrollTop-e}else{n.y=a===eh.Down?r.scrollTop-d.y:r.scrollTop-f.y}if(n.y){r.scrollBy({top:-n.y,behavior:i})}break}}this.handleMove(e,(0,l/* .add */.WQ)((0,l/* .subtract */.Re)(u,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault();r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault();this.detach();t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault();this.detach();t()}detach(){this.listeners.removeAll();this.windowListeners.removeAll()}}eb.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=eg,onActivation:a}=t;let{active:o}=r;const{code:i}=e.nativeEvent;if(n.start.includes(i)){const t=o.activatorNode.current;if(t&&e.target!==t){return false}e.preventDefault();a==null?void 0:a({event:e.nativeEvent});return true}return false}}];function e_(e){return Boolean(e&&"distance"in e)}function ey(e){return Boolean(e&&"delay"in e)}class ew{constructor(e,t,r){var n;if(r===void 0){r=ed(e.event.target)}this.props=void 0;this.events=void 0;this.autoScrollEnabled=true;this.document=void 0;this.activated=false;this.initialCoordinates=void 0;this.timeoutId=null;this.listeners=void 0;this.documentListeners=void 0;this.windowListeners=void 0;this.props=e;this.events=t;const{event:a}=e;const{target:o}=a;this.props=e;this.events=t;this.document=(0,l/* .getOwnerDocument */.TW)(o);this.documentListeners=new ec(this.document);this.listeners=new ec(r);this.windowListeners=new ec((0,l/* .getWindow */.zk)(o));this.initialCoordinates=(n=(0,l/* .getEventCoordinates */.e_)(a))!=null?n:_;this.handleStart=this.handleStart.bind(this);this.handleMove=this.handleMove.bind(this);this.handleEnd=this.handleEnd.bind(this);this.handleCancel=this.handleCancel.bind(this);this.handleKeydown=this.handleKeydown.bind(this);this.removeTextSelection=this.removeTextSelection.bind(this);this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;this.listeners.add(e.move.name,this.handleMove,{passive:false});this.listeners.add(e.end.name,this.handleEnd);if(e.cancel){this.listeners.add(e.cancel.name,this.handleCancel)}this.windowListeners.add(ef.Resize,this.handleCancel);this.windowListeners.add(ef.DragStart,ep);this.windowListeners.add(ef.VisibilityChange,this.handleCancel);this.windowListeners.add(ef.ContextMenu,ep);this.documentListeners.add(ef.Keydown,this.handleKeydown);if(t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options})){return this.handleStart()}if(ey(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);this.handlePending(t);return}if(e_(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll();this.windowListeners.removeAll();// Wait until the next event loop before removing document listeners
// This is necessary because we listen for `click` and `selection` events on the document
setTimeout(this.documentListeners.removeAll,50);if(this.timeoutId!==null){clearTimeout(this.timeoutId);this.timeoutId=null}}handlePending(e,t){const{active:r,onPending:n}=this.props;n(r,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this;const{onStart:t}=this.props;if(e){this.activated=true;// Stop propagation of click events once activation constraints are met
this.documentListeners.add(ef.Click,ev,{capture:true});// Remove any text selection from the document
this.removeTextSelection();// Prevent further text selection while dragging
this.documentListeners.add(ef.SelectionChange,this.removeTextSelection);t(e)}}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:a}=this;const{onMove:o,options:{activationConstraint:i}}=a;if(!n){return}const s=(t=(0,l/* .getEventCoordinates */.e_)(e))!=null?t:_;const c=(0,l/* .subtract */.Re)(n,s);// Constraint validation
if(!r&&i){if(e_(i)){if(i.tolerance!=null&&eu(c,i.tolerance)){return this.handleCancel()}if(eu(c,i.distance)){return this.handleStart()}}if(ey(i)){if(eu(c,i.tolerance)){return this.handleCancel()}}this.handlePending(i,c);return}if(e.cancelable){e.preventDefault()}o(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleKeydown(e){if(e.code===eh.Esc){this.handleCancel()}}removeTextSelection(){var e;(e=this.document.getSelection())==null?void 0:e.removeAllRanges()}}const ex={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class eA extends ew{constructor(e){const{event:t}=e;// Pointer events stop firing if the target is unmounted while dragging
// Therefore we attach listeners to the owner document instead
const r=(0,l/* .getOwnerDocument */.TW)(t.target);super(e,ex,r)}}eA.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(!r.isPrimary||r.button!==0){return false}n==null?void 0:n({event:r});return true}}];const eY={move:{name:"mousemove"},end:{name:"mouseup"}};var ek;(function(e){e[e["RightClick"]=2]="RightClick"})(ek||(ek={}));class eI extends ew{constructor(e){super(e,eY,(0,l/* .getOwnerDocument */.TW)(e.event.target))}}eI.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(r.button===ek.RightClick){return false}n==null?void 0:n({event:r});return true}}];const eD={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class eC extends ew{constructor(e){super(e,eD)}static setup(){// Adding a non-capture and non-passive `touchmove` listener in order
// to force `event.preventDefault()` calls to work in dynamically added
// touchmove event handlers. This is required for iOS Safari.
window.addEventListener(eD.move.name,e,{capture:false,passive:false});return function t(){window.removeEventListener(eD.move.name,e)};// We create a new handler because the teardown function of another sensor
// could remove our event listener if we use a referentially equal listener.
function e(){}}}eC.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;const{touches:a}=r;if(a.length>1){return false}n==null?void 0:n({event:r});return true}}];var eS;(function(e){e[e["Pointer"]=0]="Pointer";e[e["DraggableRect"]=1]="DraggableRect"})(eS||(eS={}));var eM;(function(e){e[e["TreeOrder"]=0]="TreeOrder";e[e["ReversedTreeOrder"]=1]="ReversedTreeOrder"})(eM||(eM={}));function eE(e){let{acceleration:t,activator:r=eS.Pointer,canScroll:a,draggingRect:o,enabled:i,interval:s=5,order:c=eM.TreeOrder,pointerCoordinates:d,scrollableAncestors:u,scrollableAncestorRects:f,delta:p,threshold:v}=e;const h=eH({delta:p,disabled:!i});const[g,m]=(0,l/* .useInterval */.$$)();const b=(0,n.useRef)({x:0,y:0});const _=(0,n.useRef)({x:0,y:0});const y=(0,n.useMemo)(()=>{switch(r){case eS.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case eS.DraggableRect:return o}},[r,o,d]);const w=(0,n.useRef)(null);const x=(0,n.useCallback)(()=>{const e=w.current;if(!e){return}const t=b.current.x*_.current.x;const r=b.current.y*_.current.y;e.scrollBy(t,r)},[]);const A=(0,n.useMemo)(()=>c===eM.TreeOrder?[...u].reverse():u,[c,u]);(0,n.useEffect)(()=>{if(!i||!u.length||!y){m();return}for(const e of A){if((a==null?void 0:a(e))===false){continue}const r=u.indexOf(e);const n=f[r];if(!n){continue}const{direction:o,speed:i}=et(e,n,y,t,v);for(const e of["x","y"]){if(!h[e][o[e]]){i[e]=0;o[e]=0}}if(i.x>0||i.y>0){m();w.current=e;g(x,s);b.current=i;_.current=o;return}}b.current={x:0,y:0};_.current={x:0,y:0};m()},[t,x,a,m,i,s,JSON.stringify(y),JSON.stringify(h),g,u,A,f,JSON.stringify(v)])}const eT={x:{[Z.Backward]:false,[Z.Forward]:false},y:{[Z.Backward]:false,[Z.Forward]:false}};function eH(e){let{delta:t,disabled:r}=e;const n=(0,l/* .usePrevious */.ZC)(t);return(0,l/* .useLazyMemo */.KG)(e=>{if(r||!n||!e){// Reset scroll intent tracking when auto-scrolling is disabled
return eT}const a={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};// Keep track of the user intent to scroll in each direction for both axis
return{x:{[Z.Backward]:e.x[Z.Backward]||a.x===-1,[Z.Forward]:e.x[Z.Forward]||a.x===1},y:{[Z.Backward]:e.y[Z.Backward]||a.y===-1,[Z.Forward]:e.y[Z.Forward]||a.y===1}}},[r,t,n])}function eF(e,t){const r=t!=null?e.get(t):undefined;const n=r?r.node.current:null;return(0,l/* .useLazyMemo */.KG)(e=>{var r;if(t==null){return null}// In some cases, the draggable node can unmount while dragging
// This is the case for virtualized lists. In those situations,
// we fall back to the last known value for that node.
return(r=n!=null?n:e)!=null?r:null},[n,t])}function eN(e,t){return(0,n.useMemo)(()=>e.reduce((e,r)=>{const{sensor:n}=r;const a=n.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,r)}));return[...e,...a]},[]),[e,t])}var eK;(function(e){e[e["Always"]=0]="Always";e[e["BeforeDragging"]=1]="BeforeDragging";e[e["WhileDragging"]=2]="WhileDragging"})(eK||(eK={}));var eO;(function(e){e["Optimized"]="optimized"})(eO||(eO={}));const eP=/*#__PURE__*/new Map;function eW(e,t){let{dragging:r,dependencies:a,config:o}=t;const[i,s]=(0,n.useState)(null);const{frequency:c,measure:d,strategy:u}=o;const f=(0,n.useRef)(e);const p=b();const v=(0,l/* .useLatestValue */.YN)(p);const h=(0,n.useCallback)(function(e){if(e===void 0){e=[]}if(v.current){return}s(t=>{if(t===null){return e}return t.concat(e.filter(e=>!t.includes(e)))})},[v]);const g=(0,n.useRef)(null);const m=(0,l/* .useLazyMemo */.KG)(t=>{if(p&&!r){return eP}if(!t||t===eP||f.current!==e||i!=null){const t=new Map;for(let r of e){if(!r){continue}if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){// This container does not need to be re-measured
t.set(r.id,r.rect.current);continue}const e=r.node.current;const n=e?new es(d(e),e):null;r.rect.current=n;if(n){t.set(r.id,n)}}return t}return t},[e,i,r,p,d]);(0,n.useEffect)(()=>{f.current=e},[e]);(0,n.useEffect)(()=>{if(p){return}h()},[r,p]);(0,n.useEffect)(()=>{if(i&&i.length>0){s(null)}},[JSON.stringify(i)]);(0,n.useEffect)(()=>{if(p||typeof c!=="number"||g.current!==null){return}g.current=setTimeout(()=>{h();g.current=null},c)},[c,p,h,...a]);return{droppableRects:m,measureDroppableContainers:h,measuringScheduled:i!=null};function b(){switch(u){case eK.Always:return false;case eK.BeforeDragging:return r;default:return!r}}}function eL(e,t){return(0,l/* .useLazyMemo */.KG)(r=>{if(!e){return null}if(r){return r}return typeof t==="function"?t(e):e},[t,e])}function eR(e,t){return eL(e,t)}/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */function eB(e){let{callback:t,disabled:r}=e;const a=(0,l/* .useEvent */._q)(t);const o=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.MutationObserver==="undefined"){return undefined}const{MutationObserver:e}=window;return new e(a)},[a,r]);(0,n.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */function ez(e){let{callback:t,disabled:r}=e;const a=(0,l/* .useEvent */._q)(t);const o=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.ResizeObserver==="undefined"){return undefined}const{ResizeObserver:e}=window;return new e(a)},[r]);(0,n.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}function eU(e){return new es(L(e),e)}function ej(e,t,r){if(t===void 0){t=eU}const[a,o]=(0,n.useState)(null);function i(){o(n=>{if(!e){return null}if(e.isConnected===false){var a;// Fall back to last rect we measured if the element is
// no longer connected to the DOM.
return(a=n!=null?n:r)!=null?a:null}const o=t(e);if(JSON.stringify(n)===JSON.stringify(o)){return n}return o})}const s=eB({callback(t){if(!e){return}for(const r of t){const{type:t,target:n}=r;if(t==="childList"&&n instanceof HTMLElement&&n.contains(e)){i();break}}}});const c=ez({callback:i});(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{i();if(e){c==null?void 0:c.observe(e);s==null?void 0:s.observe(document.body,{childList:true,subtree:true})}else{c==null?void 0:c.disconnect();s==null?void 0:s.disconnect()}},[e]);return a}function eq(e){const t=eL(e);return F(e,t)}const eV=[];function eG(e){const t=(0,n.useRef)(e);const r=(0,l/* .useLazyMemo */.KG)(r=>{if(!e){return eV}if(r&&r!==eV&&e&&t.current&&e.parentNode===t.current.parentNode){return r}return j(e)},[e]);(0,n.useEffect)(()=>{t.current=e},[e]);return r}function eQ(e){const[t,r]=(0,n.useState)(null);const a=(0,n.useRef)(e);// To-do: Throttle the handleScroll callback
const o=(0,n.useCallback)(e=>{const t=V(e.target);if(!t){return}r(e=>{if(!e){return null}e.set(t,X(t));return new Map(e)})},[]);(0,n.useEffect)(()=>{const t=a.current;if(e!==t){n(t);const i=e.map(e=>{const t=V(e);if(t){t.addEventListener("scroll",o,{passive:true});return[t,X(t)]}return null}).filter(e=>e!=null);r(i.length?new Map(i):null);a.current=e}return()=>{n(e);n(t)};function n(e){e.forEach(e=>{const t=V(e);t==null?void 0:t.removeEventListener("scroll",o)})}},[o,e]);return(0,n.useMemo)(()=>{if(e.length){return t?Array.from(t.values()).reduce((e,t)=>(0,l/* .add */.WQ)(e,t),_):en(e)}return _},[e,t])}function eX(e,t){if(t===void 0){t=[]}const r=(0,n.useRef)(null);(0,n.useEffect)(()=>{r.current=null},t);(0,n.useEffect)(()=>{const t=e!==_;if(t&&!r.current){r.current=e}if(!t&&r.current){r.current=null}},[e]);return r.current?(0,l/* .subtract */.Re)(e,r.current):_}function eZ(e){(0,n.useEffect)(()=>{if(!l/* .canUseDOM */.Sw){return}const t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(const e of t){e==null?void 0:e()}}},// eslint-disable-next-line react-hooks/exhaustive-deps
e.map(e=>{let{sensor:t}=e;return t}))}function e$(e,t){return(0,n.useMemo)(()=>{return e.reduce((e,r)=>{let{eventName:n,handler:a}=r;e[n]=e=>{a(e,t)};return e},{})},[e,t])}function eJ(e){return(0,n.useMemo)(()=>e?B(e):null,[e])}const e0=[];function e1(e,t){if(t===void 0){t=L}const[r]=e;const a=eJ(r?(0,l/* .getWindow */.zk)(r):null);const[o,i]=(0,n.useState)(e0);function s(){i(()=>{if(!e.length){return e0}return e.map(e=>$(e)?a:new es(t(e),e))})}const c=ez({callback:s});(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{c==null?void 0:c.disconnect();s();e.forEach(e=>c==null?void 0:c.observe(e))},[e]);return o}function e4(e){if(!e){return null}if(e.children.length>1){return e}const t=e.children[0];return(0,l/* .isHTMLElement */.sb)(t)?t:e}function e2(e){let{measure:t}=e;const[r,a]=(0,n.useState)(null);const o=(0,n.useCallback)(e=>{for(const{target:r}of e){if((0,l/* .isHTMLElement */.sb)(r)){a(e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n});break}}},[t]);const i=ez({callback:o});const s=(0,n.useCallback)(e=>{const r=e4(e);i==null?void 0:i.disconnect();if(r){i==null?void 0:i.observe(r)}a(r?t(r):null)},[t,i]);const[c,d]=(0,l/* .useNodeRef */.lk)(s);return(0,n.useMemo)(()=>({nodeRef:c,rect:r,setRef:d}),[r,c,d])}const e6=[{sensor:eA,options:{}},{sensor:eb,options:{}}];const e5={current:{}};const e3={draggable:{measure:R},droppable:{measure:R,strategy:eK.WhileDragging,frequency:eO.Optimized},dragOverlay:{measure:L}};class e7 extends Map{get(e){var t;return e!=null?(t=super.get(e))!=null?t:undefined:undefined}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,r;return(t=(r=this.get(e))==null?void 0:r.node.current)!=null?t:undefined}}const e8={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:/*#__PURE__*/new Map,droppableRects:/*#__PURE__*/new Map,droppableContainers:/*#__PURE__*/new e7,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:g},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:e3,measureDroppableContainers:g,windowRect:null,measuringScheduled:false};const e9={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:g,draggableNodes:/*#__PURE__*/new Map,over:null,measureDroppableContainers:g};const te=/*#__PURE__*/(0,n.createContext)(e9);const tt=/*#__PURE__*/(0,n.createContext)(e8);function tr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new e7}}}function tn(e,t){switch(t.type){case h.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case h.DragMove:if(e.draggable.active==null){return e}return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case h.DragEnd:case h.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case h.RegisterDroppable:{const{element:r}=t;const{id:n}=r;const a=new e7(e.droppable.containers);a.set(n,r);return{...e,droppable:{...e.droppable,containers:a}}}case h.SetDroppableDisabled:{const{id:r,key:n,disabled:a}=t;const o=e.droppable.containers.get(r);if(!o||n!==o.key){return e}const i=new e7(e.droppable.containers);i.set(r,{...o,disabled:a});return{...e,droppable:{...e.droppable,containers:i}}}case h.UnregisterDroppable:{const{id:r,key:n}=t;const a=e.droppable.containers.get(r);if(!a||n!==a.key){return e}const o=new e7(e.droppable.containers);o.delete(r);return{...e,droppable:{...e.droppable,containers:o}}}default:{return e}}}function ta(e){let{disabled:t}=e;const{active:r,activatorEvent:a,draggableNodes:o}=(0,n.useContext)(te);const i=(0,l/* .usePrevious */.ZC)(a);const s=(0,l/* .usePrevious */.ZC)(r==null?void 0:r.id);// Restore keyboard focus on the activator node
(0,n.useEffect)(()=>{if(t){return}if(!a&&i&&s!=null){if(!(0,l/* .isKeyboardEvent */.kx)(i)){return}if(document.activeElement===i.target){// No need to restore focus
return}const e=o.get(s);if(!e){return}const{activatorNode:t,node:r}=e;if(!t.current&&!r.current){return}requestAnimationFrame(()=>{for(const e of[t.current,r.current]){if(!e){continue}const t=(0,l/* .findFirstFocusableNode */.ag)(e);if(t){t.focus();break}}})}},[a,t,o,s,i]);return null}function to(e,t){let{transform:r,...n}=t;return e!=null&&e.length?e.reduce((e,t)=>{return t({transform:e,...n})},r):r}function ti(e){return(0,n.useMemo)(()=>({draggable:{...e3.draggable,...e==null?void 0:e.draggable},droppable:{...e3.droppable,...e==null?void 0:e.droppable},dragOverlay:{...e3.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function tl(e){let{activeNode:t,measure:r,initialRect:a,config:o=true}=e;const i=(0,n.useRef)(false);const{x:s,y:c}=typeof o==="boolean"?{x:o,y:o}:o;(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{const e=!s&&!c;if(e||!t){i.current=false;return}if(i.current||!a){// Return early if layout shift scroll compensation was already attempted
// or if there is no initialRect to compare to.
return}// Get the most up to date node ref for the active draggable
const n=t==null?void 0:t.node.current;if(!n||n.isConnected===false){// Return early if there is no attached node ref or if the node is
// disconnected from the document.
return}const o=r(n);const l=F(o,a);if(!s){l.x=0}if(!c){l.y=0}// Only perform layout shift scroll compensation once
i.current=true;if(Math.abs(l.x)>0||Math.abs(l.y)>0){const e=q(n);if(e){e.scrollBy({top:l.y,left:l.x})}}},[t,s,c,a,r])}const ts=/*#__PURE__*/(0,n.createContext)({..._,scaleX:1,scaleY:1});var tc;(function(e){e[e["Uninitialized"]=0]="Uninitialized";e[e["Initializing"]=1]="Initializing";e[e["Initialized"]=2]="Initialized"})(tc||(tc={}));const td=/*#__PURE__*/(0,n.memo)(function e(e){var t,r,i,s;let{id:d,accessibility:f,autoScroll:p=true,children:g,sensors:m=e6,collisionDetection:b=M,measuring:_,modifiers:y,...w}=e;const x=(0,n.useReducer)(tn,undefined,tr);const[A,Y]=x;const[I,D]=u();const[C,S]=(0,n.useState)(tc.Uninitialized);const E=C===tc.Initialized;const{draggable:{active:T,nodes:F,translate:N},droppable:{containers:O}}=A;const P=T!=null?F.get(T):null;const W=(0,n.useRef)({initial:null,translated:null});const L=(0,n.useMemo)(()=>{var e;return T!=null?{id:T,// It's possible for the active node to unmount while dragging
data:(e=P==null?void 0:P.data)!=null?e:e5,rect:W}:null},[T,P]);const R=(0,n.useRef)(null);const[B,z]=(0,n.useState)(null);const[U,j]=(0,n.useState)(null);const q=(0,l/* .useLatestValue */.YN)(w,Object.values(w));const V=(0,l/* .useUniqueId */.YG)("DndDescribedBy",d);const G=(0,n.useMemo)(()=>O.getEnabled(),[O]);const Q=ti(_);const{droppableRects:X,measureDroppableContainers:Z,measuringScheduled:$}=eW(G,{dragging:E,dependencies:[N.x,N.y],config:Q.droppable});const J=eF(F,T);const ee=(0,n.useMemo)(()=>U?(0,l/* .getEventCoordinates */.e_)(U):null,[U]);const et=eO();const er=eR(J,Q.draggable.measure);tl({activeNode:T!=null?F.get(T):null,config:et.layoutShiftCompensation,initialRect:er,measure:Q.draggable.measure});const en=ej(J,Q.draggable.measure,er);const ea=ej(J?J.parentElement:null);const eo=(0,n.useRef)({activatorEvent:null,active:null,activeNode:J,collisionRect:null,collisions:null,droppableRects:X,draggableNodes:F,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null});const ei=O.getNodeFor((t=eo.current.over)==null?void 0:t.id);const el=e2({measure:Q.dragOverlay.measure});// Use the rect of the drag overlay if it is mounted
const es=(r=el.nodeRef.current)!=null?r:J;const ec=E?(i=el.rect)!=null?i:en:null;const ed=Boolean(el.nodeRef.current&&el.rect);// The delta between the previous and new position of the draggable node
// is only relevant when there is no drag overlay
const eu=eq(ed?null:en);// Get the window rect of the dragging node
const ef=eJ(es?(0,l/* .getWindow */.zk)(es):null);// Get scrollable ancestors of the dragging node
const ep=eG(E?ei!=null?ei:J:null);const ev=e1(ep);// Apply modifiers
const eh=to(y,{transform:{x:N.x-eu.x,y:N.y-eu.y,scaleX:1,scaleY:1},activatorEvent:U,active:L,activeNodeRect:en,containerNodeRect:ea,draggingNodeRect:ec,over:eo.current.over,overlayNodeRect:el.rect,scrollableAncestors:ep,scrollableAncestorRects:ev,windowRect:ef});const eg=ee?(0,l/* .add */.WQ)(ee,N):null;const em=eQ(ep);// Represents the scroll delta since dragging was initiated
const eb=eX(em);// Represents the scroll delta since the last time the active node rect was measured
const e_=eX(em,[en]);const ey=(0,l/* .add */.WQ)(eh,eb);const ew=ec?K(ec,eh):null;const ex=L&&ew?b({active:L,collisionRect:ew,droppableRects:X,droppableContainers:G,pointerCoordinates:eg}):null;const eA=k(ex,"id");const[eY,ek]=(0,n.useState)(null);// When there is no drag overlay used, we need to account for the
// window scroll delta
const eI=ed?eh:(0,l/* .add */.WQ)(eh,e_);const eD=H(eI,(s=eY==null?void 0:eY.rect)!=null?s:null,en);const eC=(0,n.useRef)(null);const eS=(0,n.useCallback)((e,t)=>{let{sensor:r,options:n}=t;if(R.current==null){return}const a=F.get(R.current);if(!a){return}const i=e.nativeEvent;const l=new r({active:R.current,activeNode:a,event:i,options:n,// Sensors need to be instantiated with refs for arguments that change over time
// otherwise they are frozen in time with the stale arguments
context:eo,onAbort(e){const t=F.get(e);if(!t){return}const{onDragAbort:r}=q.current;const n={id:e};r==null?void 0:r(n);I({type:"onDragAbort",event:n})},onPending(e,t,r,n){const a=F.get(e);if(!a){return}const{onDragPending:o}=q.current;const i={id:e,constraint:t,initialCoordinates:r,offset:n};o==null?void 0:o(i);I({type:"onDragPending",event:i})},onStart(e){const t=R.current;if(t==null){return}const r=F.get(t);if(!r){return}const{onDragStart:n}=q.current;const a={activatorEvent:i,active:{id:t,data:r.data,rect:W}};(0,o.unstable_batchedUpdates)(()=>{n==null?void 0:n(a);S(tc.Initializing);Y({type:h.DragStart,initialCoordinates:e,active:t});I({type:"onDragStart",event:a});z(eC.current);j(i)})},onMove(e){Y({type:h.DragMove,coordinates:e})},onEnd:s(h.DragEnd),onCancel:s(h.DragCancel)});eC.current=l;function s(e){return async function t(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:a}=eo.current;let l=null;if(t&&a){const{cancelDrop:o}=q.current;l={activatorEvent:i,active:t,collisions:r,delta:a,over:n};if(e===h.DragEnd&&typeof o==="function"){const t=await Promise.resolve(o(l));if(t){e=h.DragCancel}}}R.current=null;(0,o.unstable_batchedUpdates)(()=>{Y({type:e});S(tc.Uninitialized);ek(null);z(null);j(null);eC.current=null;const t=e===h.DragEnd?"onDragEnd":"onDragCancel";if(l){const e=q.current[t];e==null?void 0:e(l);I({type:t,event:l})}})}}},[F]);const eM=(0,n.useCallback)((e,t)=>{return(r,n)=>{const a=r.nativeEvent;const o=F.get(n);if(R.current!==null||// No active draggable
!o||// Event has already been captured
a.dndKit||a.defaultPrevented){return}const i={active:o};const l=e(r,t.options,i);if(l===true){a.dndKit={capturedBy:t.sensor};R.current=n;eS(r,t)}}},[F,eS]);const eT=eN(m,eM);eZ(m);(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{if(en&&C===tc.Initializing){S(tc.Initialized)}},[en,C]);(0,n.useEffect)(()=>{const{onDragMove:e}=q.current;const{active:t,activatorEvent:r,collisions:n,over:a}=eo.current;if(!t||!r){return}const i={active:t,activatorEvent:r,collisions:n,delta:{x:ey.x,y:ey.y},over:a};(0,o.unstable_batchedUpdates)(()=>{e==null?void 0:e(i);I({type:"onDragMove",event:i})})},[ey.x,ey.y]);(0,n.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:a}=eo.current;if(!e||R.current==null||!t||!a){return}const{onDragOver:i}=q.current;const l=n.get(eA);const s=l&&l.rect.current?{id:l.id,rect:l.rect.current,data:l.data,disabled:l.disabled}:null;const c={active:e,activatorEvent:t,collisions:r,delta:{x:a.x,y:a.y},over:s};(0,o.unstable_batchedUpdates)(()=>{ek(s);i==null?void 0:i(c);I({type:"onDragOver",event:c})})},[eA]);(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{eo.current={activatorEvent:U,active:L,activeNode:J,collisionRect:ew,collisions:ex,droppableRects:X,draggableNodes:F,draggingNode:es,draggingNodeRect:ec,droppableContainers:O,over:eY,scrollableAncestors:ep,scrollAdjustedTranslate:ey};W.current={initial:ec,translated:ew}},[L,J,ex,ew,F,es,ec,X,O,eY,ep,ey]);eE({...et,delta:N,draggingRect:ew,pointerCoordinates:eg,scrollableAncestors:ep,scrollableAncestorRects:ev});const eH=(0,n.useMemo)(()=>{const e={active:L,activeNode:J,activeNodeRect:en,activatorEvent:U,collisions:ex,containerNodeRect:ea,dragOverlay:el,draggableNodes:F,droppableContainers:O,droppableRects:X,over:eY,measureDroppableContainers:Z,scrollableAncestors:ep,scrollableAncestorRects:ev,measuringConfiguration:Q,measuringScheduled:$,windowRect:ef};return e},[L,J,en,U,ex,ea,el,F,O,X,eY,Z,ep,ev,Q,$,ef]);const eK=(0,n.useMemo)(()=>{const e={activatorEvent:U,activators:eT,active:L,activeNodeRect:en,ariaDescribedById:{draggable:V},dispatch:Y,draggableNodes:F,over:eY,measureDroppableContainers:Z};return e},[U,eT,L,en,Y,V,F,eY,Z]);return a().createElement(c.Provider,{value:D},a().createElement(te.Provider,{value:eK},a().createElement(tt.Provider,{value:eH},a().createElement(ts.Provider,{value:eD},g)),a().createElement(ta,{disabled:(f==null?void 0:f.restoreFocus)===false})),a().createElement(v,{...f,hiddenTextDescribedById:V}));function eO(){const e=(B==null?void 0:B.autoScrollEnabled)===false;const t=typeof p==="object"?p.enabled===false:p===false;const r=E&&!e&&!t;if(typeof p==="object"){return{...p,enabled:r}}return{enabled:r}}});const tu=/*#__PURE__*/(0,n.createContext)(null);const tf="button";const tp="Draggable";function tv(e){let{id:t,data:r,disabled:a=false,attributes:o}=e;const i=(0,l/* .useUniqueId */.YG)(tp);const{activators:s,activatorEvent:c,active:d,activeNodeRect:u,ariaDescribedById:f,draggableNodes:p,over:v}=(0,n.useContext)(te);const{role:h=tf,roleDescription:g="draggable",tabIndex:m=0}=o!=null?o:{};const b=(d==null?void 0:d.id)===t;const _=(0,n.useContext)(b?ts:tu);const[y,w]=(0,l/* .useNodeRef */.lk)();const[x,A]=(0,l/* .useNodeRef */.lk)();const Y=e$(s,t);const k=(0,l/* .useLatestValue */.YN)(r);(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{p.set(t,{id:t,key:i,node:y,activatorNode:x,data:k});return()=>{const e=p.get(t);if(e&&e.key===i){p.delete(t)}}},[p,t]);const I=(0,n.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":a,"aria-pressed":b&&h===tf?true:undefined,"aria-roledescription":g,"aria-describedby":f.draggable}),[a,h,m,b,g,f.draggable]);return{active:d,activatorEvent:c,activeNodeRect:u,attributes:I,isDragging:b,listeners:a?undefined:Y,node:y,over:v,setNodeRef:w,setActivatorNodeRef:A,transform:_}}function th(){return(0,n.useContext)(tt)}const tg="Droppable";const tm={timeout:25};function tb(e){let{data:t,disabled:r=false,id:a,resizeObserverConfig:o}=e;const i=(0,l/* .useUniqueId */.YG)(tg);const{active:s,dispatch:c,over:d,measureDroppableContainers:u}=(0,n.useContext)(te);const f=(0,n.useRef)({disabled:r});const p=(0,n.useRef)(false);const v=(0,n.useRef)(null);const g=(0,n.useRef)(null);const{disabled:m,updateMeasurementsFor:b,timeout:_}={...tm,...o};const y=(0,l/* .useLatestValue */.YN)(b!=null?b:a);const w=(0,n.useCallback)(()=>{if(!p.current){// ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
// assuming the element is rendered and displayed.
p.current=true;return}if(g.current!=null){clearTimeout(g.current)}g.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]);g.current=null},_)},[_]);const x=ez({callback:w,disabled:m||!s});const A=(0,n.useCallback)((e,t)=>{if(!x){return}if(t){x.unobserve(t);p.current=false}if(e){x.observe(e)}},[x]);const[Y,k]=(0,l/* .useNodeRef */.lk)(A);const I=(0,l/* .useLatestValue */.YN)(t);(0,n.useEffect)(()=>{if(!x||!Y.current){return}x.disconnect();p.current=false;x.observe(Y.current)},[Y,x]);(0,n.useEffect)(()=>{c({type:h.RegisterDroppable,element:{id:a,key:i,disabled:r,node:Y,rect:v,data:I}});return()=>c({type:h.UnregisterDroppable,key:i,id:a})},[a]);(0,n.useEffect)(()=>{if(r!==f.current.disabled){c({type:h.SetDroppableDisabled,id:a,key:i,disabled:r});f.current.disabled=r}},[a,i,r,c]);return{active:s,rect:v,isOver:(d==null?void 0:d.id)===a,node:Y,over:d,setNodeRef:k}}function t_(e){let{animation:t,children:r}=e;const[o,i]=(0,n.useState)(null);const[s,c]=(0,n.useState)(null);const d=(0,l/* .usePrevious */.ZC)(r);if(!r&&!o&&d){i(d)}(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{if(!s){return}const e=o==null?void 0:o.key;const r=o==null?void 0:o.props.id;if(e==null||r==null){i(null);return}Promise.resolve(t(r,s)).then(()=>{i(null)})},[t,o,s]);return a().createElement(a().Fragment,null,r,o?(0,n.cloneElement)(o,{ref:c}):null)}const ty={x:0,y:0,scaleX:1,scaleY:1};function tw(e){let{children:t}=e;return a().createElement(te.Provider,{value:e9},a().createElement(ts.Provider,{value:ty},t))}const tx={position:"fixed",touchAction:"none"};const tA=e=>{const t=(0,l/* .isKeyboardEvent */.kx)(e);return t?"transform 250ms ease":undefined};const tY=/*#__PURE__*/(0,n.forwardRef)((e,t)=>{let{as:r,activatorEvent:n,adjustScale:o,children:i,className:s,rect:c,style:d,transform:u,transition:f=tA}=e;if(!c){return null}const p=o?u:{...u,scaleX:1,scaleY:1};const v={...tx,width:c.width,height:c.height,top:c.top,left:c.left,transform:l/* .CSS.Transform.toString */.Ks.Transform.toString(p),transformOrigin:o&&n?w(n,c):undefined,transition:typeof f==="function"?f(n):f,...d};return a().createElement(r,{className:s,style:v,ref:t},i)});const tk=e=>t=>{let{active:r,dragOverlay:n}=t;const a={};const{styles:o,className:i}=e;if(o!=null&&o.active){for(const[e,t]of Object.entries(o.active)){if(t===undefined){continue}a[e]=r.node.style.getPropertyValue(e);r.node.style.setProperty(e,t)}}if(o!=null&&o.dragOverlay){for(const[e,t]of Object.entries(o.dragOverlay)){if(t===undefined){continue}n.node.style.setProperty(e,t)}}if(i!=null&&i.active){r.node.classList.add(i.active)}if(i!=null&&i.dragOverlay){n.node.classList.add(i.dragOverlay)}return function e(){for(const[e,t]of Object.entries(a)){r.node.style.setProperty(e,t)}if(i!=null&&i.active){r.node.classList.remove(i.active)}}};const tI=e=>{let{transform:{initial:t,final:r}}=e;return[{transform:l/* .CSS.Transform.toString */.Ks.Transform.toString(t)},{transform:l/* .CSS.Transform.toString */.Ks.Transform.toString(r)}]};const tD={duration:250,easing:"ease",keyframes:tI,sideEffects:/*#__PURE__*/tk({styles:{active:{opacity:"0"}}})};function tC(e){let{config:t,draggableNodes:r,droppableContainers:n,measuringConfiguration:a}=e;return(0,l/* .useEvent */._q)((e,o)=>{if(t===null){return}const i=r.get(e);if(!i){return}const s=i.node.current;if(!s){return}const c=e4(o);if(!c){return}const{transform:d}=(0,l/* .getWindow */.zk)(o).getComputedStyle(o);const u=O(d);if(!u){return}const f=typeof t==="function"?t:tS(t);ei(s,a.draggable.measure);return f({active:{id:e,data:i.data,node:s,rect:a.draggable.measure(s)},draggableNodes:r,dragOverlay:{node:o,rect:a.dragOverlay.measure(c)},droppableContainers:n,measuringConfiguration:a,transform:u})})}function tS(e){const{duration:t,easing:r,sideEffects:n,keyframes:a}={...tD,...e};return e=>{let{active:o,dragOverlay:i,transform:l,...s}=e;if(!t){// Do not animate if animation duration is zero.
return}const c={x:i.rect.left-o.rect.left,y:i.rect.top-o.rect.top};const d={scaleX:l.scaleX!==1?o.rect.width*l.scaleX/i.rect.width:1,scaleY:l.scaleY!==1?o.rect.height*l.scaleY/i.rect.height:1};const u={x:l.x-c.x,y:l.y-c.y,...d};const f=a({...s,active:o,dragOverlay:i,transform:{initial:l,final:u}});const[p]=f;const v=f[f.length-1];if(JSON.stringify(p)===JSON.stringify(v)){// The start and end keyframes are the same, infer that there is no animation needed.
return}const h=n==null?void 0:n({active:o,dragOverlay:i,...s});const g=i.node.animate(f,{duration:t,easing:r,fill:"forwards"});return new Promise(e=>{g.onfinish=()=>{h==null?void 0:h();e()}})}}let tM=0;function tE(e){return(0,n.useMemo)(()=>{if(e==null){return}tM++;return tM},[e])}const tT=/*#__PURE__*/a().memo(e=>{let{adjustScale:t=false,children:r,dropAnimation:o,style:i,transition:l,modifiers:s,wrapperElement:c="div",className:d,zIndex:u=999}=e;const{activatorEvent:f,active:p,activeNodeRect:v,containerNodeRect:h,draggableNodes:g,droppableContainers:m,dragOverlay:b,over:_,measuringConfiguration:y,scrollableAncestors:w,scrollableAncestorRects:x,windowRect:A}=th();const Y=(0,n.useContext)(ts);const k=tE(p==null?void 0:p.id);const I=to(s,{activatorEvent:f,active:p,activeNodeRect:v,containerNodeRect:h,draggingNodeRect:b.rect,over:_,overlayNodeRect:b.rect,scrollableAncestors:w,scrollableAncestorRects:x,transform:Y,windowRect:A});const D=eL(v);const C=tC({config:o,draggableNodes:g,droppableContainers:m,measuringConfiguration:y});// We need to wait for the active node to be measured before connecting the drag overlay ref
// otherwise collisions can be computed against a mispositioned drag overlay
const S=D?b.setRef:undefined;return a().createElement(tw,null,a().createElement(t_,{animation:C},p&&k?a().createElement(tY,{key:k,id:p.id,ref:S,as:c,activatorEvent:f,adjustScale:t,className:d,transition:l,rect:D,style:{zIndex:u,...i},transform:I},r):null))});//# sourceMappingURL=core.esm.js.map
},18831:function(e,t,r){r.d(t,{Q_:()=>d});/* import */var n=r(74979);function a(e){return t=>{let{transform:r}=t;return{...r,x:Math.ceil(r.x/e)*e,y:Math.ceil(r.y/e)*e}}}const o=e=>{let{transform:t}=e;return{...t,y:0}};function i(e,t,r){const n={...e};if(t.top+e.y<=r.top){n.y=r.top-t.top}else if(t.bottom+e.y>=r.top+r.height){n.y=r.top+r.height-t.bottom}if(t.left+e.x<=r.left){n.x=r.left-t.left}else if(t.right+e.x>=r.left+r.width){n.x=r.left+r.width-t.right}return n}const l=e=>{let{containerNodeRect:t,draggingNodeRect:r,transform:n}=e;if(!r||!t){return n}return i(n,r,t)};const s=e=>{let{draggingNodeRect:t,transform:r,scrollableAncestorRects:n}=e;const a=n[0];if(!t||!a){return r}return i(r,t,a)};const c=e=>{let{transform:t}=e;return{...t,x:0}};const d=e=>{let{transform:t,draggingNodeRect:r,windowRect:n}=e;if(!r||!n){return t}return i(t,r,n)};const u=e=>{let{activatorEvent:t,draggingNodeRect:r,transform:n}=e;if(r&&t){const e=getEventCoordinates(t);if(!e){return n}const a=e.x-r.left;const o=e.y-r.top;return{...n,x:n.x+a-r.width/2,y:n.y+o-r.height/2}}return n};//# sourceMappingURL=modifiers.esm.js.map
},43627:function(e,t,r){r.d(t,{JR:()=>N,_G:()=>_,gB:()=>A,gl:()=>E,uU:()=>k});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(15871);/* import */var i=r(74979);/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */function l(e,t,r){const n=e.slice();n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]);return n}/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */function s(e,t,r){const n=e.slice();n[t]=e[r];n[r]=e[t];return n}function c(e,t){return e.reduce((e,r,n)=>{const a=t.get(r);if(a){e[n]=a}return e},Array(e.length))}function d(e){return e!==null&&e>=0}function u(e,t){if(e===t){return true}if(e.length!==t.length){return false}for(let r=0;r<e.length;r++){if(e[r]!==t[r]){return false}}return true}function f(e){if(typeof e==="boolean"){return{draggable:e,droppable:e}}return e}// To-do: We should be calculating scale transformation
const p=/* unused pure expression or super */null&&{scaleX:1,scaleY:1};const v=e=>{var t;let{rects:r,activeNodeRect:n,activeIndex:a,overIndex:o,index:i}=e;const l=(t=r[a])!=null?t:n;if(!l){return null}const s=h(r,i,a);if(i===a){const e=r[o];if(!e){return null}return{x:a<o?e.left+e.width-(l.left+l.width):e.left-l.left,y:0,...p}}if(i>a&&i<=o){return{x:-l.width-s,y:0,...p}}if(i<a&&i>=o){return{x:l.width+s,y:0,...p}}return{x:0,y:0,...p}};function h(e,t,r){const n=e[t];const a=e[t-1];const o=e[t+1];if(!n||!a&&!o){return 0}if(r<t){return a?n.left-(a.left+a.width):o.left-(n.left+n.width)}return o?o.left-(n.left+n.width):n.left-(a.left+a.width)}const g=e=>{let{rects:t,activeIndex:r,overIndex:n,index:a}=e;const o=l(t,n,r);const i=t[a];const s=o[a];if(!s||!i){return null}return{x:s.left-i.left,y:s.top-i.top,scaleX:s.width/i.width,scaleY:s.height/i.height}};const m=e=>{let{activeIndex:t,index:r,rects:n,overIndex:a}=e;let o;let i;if(r===t){o=n[r];i=n[a]}if(r===a){o=n[r];i=n[t]}if(!i||!o){return null}return{x:i.left-o.left,y:i.top-o.top,scaleX:i.width/o.width,scaleY:i.height/o.height}};// To-do: We should be calculating scale transformation
const b={scaleX:1,scaleY:1};const _=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:a,rects:o,overIndex:i}=e;const l=(t=o[r])!=null?t:n;if(!l){return null}if(a===r){const e=o[i];if(!e){return null}return{x:0,y:r<i?e.top+e.height-(l.top+l.height):e.top-l.top,...b}}const s=y(o,a,r);if(a>r&&a<=i){return{x:0,y:-l.height-s,...b}}if(a<r&&a>=i){return{x:0,y:l.height+s,...b}}return{x:0,y:0,...b}};function y(e,t,r){const n=e[t];const a=e[t-1];const o=e[t+1];if(!n){return 0}if(r<t){return a?n.top-(a.top+a.height):o?o.top-(n.top+n.height):0}return o?o.top-(n.top+n.height):a?n.top-(a.top+a.height):0}const w="Sortable";const x=/*#__PURE__*/a().createContext({activeIndex:-1,containerId:w,disableTransforms:false,items:[],overIndex:-1,useDragOverlay:false,sortedRects:[],strategy:g,disabled:{draggable:false,droppable:false}});function A(e){let{children:t,id:r,items:l,strategy:s=g,disabled:d=false}=e;const{active:p,dragOverlay:v,droppableRects:h,over:m,measureDroppableContainers:b}=(0,o/* .useDndContext */.fF)();const _=(0,i/* .useUniqueId */.YG)(w,r);const y=Boolean(v.rect!==null);const A=(0,n.useMemo)(()=>l.map(e=>typeof e==="object"&&"id"in e?e.id:e),[l]);const Y=p!=null;const k=p?A.indexOf(p.id):-1;const I=m?A.indexOf(m.id):-1;const D=(0,n.useRef)(A);const C=!u(A,D.current);const S=I!==-1&&k===-1||C;const M=f(d);(0,i/* .useIsomorphicLayoutEffect */.Es)(()=>{if(C&&Y){b(A)}},[C,A,Y,b]);(0,n.useEffect)(()=>{D.current=A},[A]);const E=(0,n.useMemo)(()=>({activeIndex:k,containerId:_,disabled:M,disableTransforms:S,items:A,overIndex:I,useDragOverlay:y,sortedRects:c(A,h),strategy:s}),[k,_,M.draggable,M.droppable,S,A,I,h,y,s]);return a().createElement(x.Provider,{value:E},t)}const Y=e=>{let{id:t,items:r,activeIndex:n,overIndex:a}=e;return l(r,n,a).indexOf(t)};const k=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:a,items:o,newIndex:i,previousItems:l,previousContainerId:s,transition:c}=e;if(!c||!n){return false}if(l!==o&&a===i){return false}if(r){return true}return i!==a&&t===s};const I={duration:200,easing:"ease"};const D="transform";const C=/*#__PURE__*/i/* .CSS.Transition.toString */.Ks.Transition.toString({property:D,duration:0,easing:"linear"});const S={roleDescription:"sortable"};/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */function M(e){let{disabled:t,index:r,node:a,rect:l}=e;const[s,c]=(0,n.useState)(null);const d=(0,n.useRef)(r);(0,i/* .useIsomorphicLayoutEffect */.Es)(()=>{if(!t&&r!==d.current&&a.current){const e=l.current;if(e){const t=(0,o/* .getClientRect */.Sj)(a.current,{ignoreTransform:true});const r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};if(r.x||r.y){c(r)}}}if(r!==d.current){d.current=r}},[t,r,a,l]);(0,n.useEffect)(()=>{if(s){c(null)}},[s]);return s}function E(e){let{animateLayoutChanges:t=k,attributes:r,disabled:a,data:l,getNewIndex:s=Y,id:c,strategy:u,resizeObserverConfig:f,transition:p=I}=e;const{items:v,containerId:h,activeIndex:g,disabled:m,disableTransforms:b,sortedRects:_,overIndex:y,useDragOverlay:w,strategy:A}=(0,n.useContext)(x);const E=T(a,m);const H=v.indexOf(c);const F=(0,n.useMemo)(()=>({sortable:{containerId:h,index:H,items:v},...l}),[h,l,H,v]);const N=(0,n.useMemo)(()=>v.slice(v.indexOf(c)),[v,c]);const{rect:K,node:O,isOver:P,setNodeRef:W}=(0,o/* .useDroppable */.zM)({id:c,data:F,disabled:E.droppable,resizeObserverConfig:{updateMeasurementsFor:N,...f}});const{active:L,activatorEvent:R,activeNodeRect:B,attributes:z,setNodeRef:U,listeners:j,isDragging:q,over:V,setActivatorNodeRef:G,transform:Q}=(0,o/* .useDraggable */.PM)({id:c,data:F,attributes:{...S,...r},disabled:E.draggable});const X=(0,i/* .useCombinedRefs */.jn)(W,U);const Z=Boolean(L);const $=Z&&!b&&d(g)&&d(y);const J=!w&&q;const ee=J&&$?Q:null;const et=u!=null?u:A;const er=$?ee!=null?ee:et({rects:_,activeNodeRect:B,activeIndex:g,overIndex:y,index:H}):null;const en=d(g)&&d(y)?s({id:c,items:v,activeIndex:g,overIndex:y}):H;const ea=L==null?void 0:L.id;const eo=(0,n.useRef)({activeId:ea,items:v,newIndex:en,containerId:h});const ei=v!==eo.current.items;const el=t({active:L,containerId:h,isDragging:q,isSorting:Z,id:c,index:H,items:v,newIndex:eo.current.newIndex,previousItems:eo.current.items,previousContainerId:eo.current.containerId,transition:p,wasDragging:eo.current.activeId!=null});const es=M({disabled:!el,index:H,node:O,rect:K});(0,n.useEffect)(()=>{if(Z&&eo.current.newIndex!==en){eo.current.newIndex=en}if(h!==eo.current.containerId){eo.current.containerId=h}if(v!==eo.current.items){eo.current.items=v}},[Z,en,h,v]);(0,n.useEffect)(()=>{if(ea===eo.current.activeId){return}if(ea!=null&&eo.current.activeId==null){eo.current.activeId=ea;return}const e=setTimeout(()=>{eo.current.activeId=ea},50);return()=>clearTimeout(e)},[ea]);return{active:L,activeIndex:g,attributes:z,data:F,rect:K,index:H,newIndex:en,items:v,isOver:P,isSorting:Z,isDragging:q,listeners:j,node:O,overIndex:y,over:V,setNodeRef:X,setActivatorNodeRef:G,setDroppableNodeRef:W,setDraggableNodeRef:U,transform:es!=null?es:er,transition:ec()};function ec(){if(es||// Or to prevent items jumping to back to their "new" position when items change
ei&&eo.current.newIndex===H){return C}if(J&&!(0,i/* .isKeyboardEvent */.kx)(R)||!p){return undefined}if(Z||el){return i/* .CSS.Transition.toString */.Ks.Transition.toString({...p,property:D})}return undefined}}function T(e,t){var r,n;if(typeof e==="boolean"){return{draggable:e,// Backwards compatibility
droppable:false}}return{draggable:(r=e==null?void 0:e.draggable)!=null?r:t.draggable,droppable:(n=e==null?void 0:e.droppable)!=null?n:t.droppable}}function H(e){if(!e){return false}const t=e.data.current;if(t&&"sortable"in t&&typeof t.sortable==="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable){return true}return false}const F=[o/* .KeyboardCode.Down */.vL.Down,o/* .KeyboardCode.Right */.vL.Right,o/* .KeyboardCode.Up */.vL.Up,o/* .KeyboardCode.Left */.vL.Left];const N=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:a,droppableContainers:l,over:s,scrollableAncestors:c}}=t;if(F.includes(e.code)){e.preventDefault();if(!r||!n){return}const t=[];l.getEnabled().forEach(r=>{if(!r||r!=null&&r.disabled){return}const i=a.get(r.id);if(!i){return}switch(e.code){case o/* .KeyboardCode.Down */.vL.Down:if(n.top<i.top){t.push(r)}break;case o/* .KeyboardCode.Up */.vL.Up:if(n.top>i.top){t.push(r)}break;case o/* .KeyboardCode.Left */.vL.Left:if(n.left>i.left){t.push(r)}break;case o/* .KeyboardCode.Right */.vL.Right:if(n.left<i.left){t.push(r)}break}});const d=(0,o/* .closestCorners */.y$)({active:r,collisionRect:n,droppableRects:a,droppableContainers:t,pointerCoordinates:null});let u=(0,o/* .getFirstCollision */.Vy)(d,"id");if(u===(s==null?void 0:s.id)&&d.length>1){u=d[1].id}if(u!=null){const e=l.get(r.id);const t=l.get(u);const s=t?a.get(t.id):null;const d=t==null?void 0:t.node.current;if(d&&s&&e&&t){const r=(0,o/* .getScrollableAncestors */.sl)(d);const a=r.some((e,t)=>c[t]!==e);const l=K(e,t);const u=O(e,t);const f=a||!l?{x:0,y:0}:{x:u?n.width-s.width:0,y:u?n.height-s.height:0};const p={x:s.left,y:s.top};const v=f.x&&f.y?p:(0,i/* .subtract */.Re)(p,f);return v}}}return undefined};function K(e,t){if(!H(e)||!H(t)){return false}return e.data.current.sortable.containerId===t.data.current.sortable.containerId}function O(e,t){if(!H(e)||!H(t)){return false}if(!K(e,t)){return false}return e.data.current.sortable.index<t.data.current.sortable.index}//# sourceMappingURL=sortable.esm.js.map
},74979:function(e,t,r){r.d(t,{$$:()=>g,Es:()=>v,KG:()=>b,Ks:()=>M,Ll:()=>s,Re:()=>k,Sw:()=>i,TW:()=>p,WQ:()=>Y,YG:()=>x,YN:()=>m,ZC:()=>y,_q:()=>h,ag:()=>T,e_:()=>S,jn:()=>o,kx:()=>D,l6:()=>l,lk:()=>_,sb:()=>u,wz:()=>d,xZ:()=>f,zk:()=>c});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const i=typeof window!=="undefined"&&typeof window.document!=="undefined"&&typeof window.document.createElement!=="undefined";function l(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||// In Electron context the Window object serializes to [object global]
t==="[object global]"}function s(e){return"nodeType"in e}function c(e){var t,r;if(!e){return window}if(l(e)){return e}if(!s(e)){return window}return(t=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?t:window}function d(e){const{Document:t}=c(e);return e instanceof t}function u(e){if(l(e)){return false}return e instanceof c(e).HTMLElement}function f(e){return e instanceof c(e).SVGElement}function p(e){if(!e){return document}if(l(e)){return e.document}if(!s(e)){return document}if(d(e)){return e}if(u(e)||f(e)){return e.ownerDocument}return document}/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */const v=i?n.useLayoutEffect:n.useEffect;function h(e){const t=(0,n.useRef)(e);v(()=>{t.current=e});return(0,n.useCallback)(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++){r[n]=arguments[n]}return t.current==null?void 0:t.current(...r)},[])}function g(){const e=(0,n.useRef)(null);const t=(0,n.useCallback)((t,r)=>{e.current=setInterval(t,r)},[]);const r=(0,n.useCallback)(()=>{if(e.current!==null){clearInterval(e.current);e.current=null}},[]);return[t,r]}function m(e,t){if(t===void 0){t=[e]}const r=(0,n.useRef)(e);v(()=>{if(r.current!==e){r.current=e}},t);return r}function b(e,t){const r=(0,n.useRef)();return(0,n.useMemo)(()=>{const t=e(r.current);r.current=t;return t},[...t])}function _(e){const t=h(e);const r=(0,n.useRef)(null);const a=(0,n.useCallback)(e=>{if(e!==r.current){t==null?void 0:t(e,r.current)}r.current=e},[]);return[r,a]}function y(e){const t=(0,n.useRef)();(0,n.useEffect)(()=>{t.current=e},[e]);return t.current}let w={};function x(e,t){return(0,n.useMemo)(()=>{if(t){return t}const r=w[e]==null?0:w[e]+1;w[e]=r;return e+"-"+r},[e,t])}function A(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}return n.reduce((t,r)=>{const n=Object.entries(r);for(const[r,a]of n){const n=t[r];if(n!=null){t[r]=n+e*a}}return t},{...t})}}const Y=/*#__PURE__*/A(1);const k=/*#__PURE__*/A(-1);function I(e){return"clientX"in e&&"clientY"in e}function D(e){if(!e){return false}const{KeyboardEvent:t}=c(e.target);return t&&e instanceof t}function C(e){if(!e){return false}const{TouchEvent:t}=c(e.target);return t&&e instanceof t}/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */function S(e){if(C(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}if(I(e)){return{x:e.clientX,y:e.clientY}}return null}const M=/*#__PURE__*/Object.freeze({Translate:{toString(e){if(!e){return}const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e){return}const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(!e){return}return[M.Translate.toString(e),M.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}});const E="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function T(e){if(e.matches(E)){return e}return e.querySelector(E)}//# sourceMappingURL=utilities.esm.js.map
},25631:function(e,t,r){r.d(t,{A:()=>s});/* import */var n=r(31601);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(76314);/* import */var i=/*#__PURE__*/r.n(o);// Imports
var l=i()(a());// Module
l.push([e.id,`/* Variables declaration */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */

  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */

  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */

  --rdp-dropdown-gap: 0.5rem; /* The gap between the dropdowns used in the month captons. */

  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */

  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */

  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit; /* The color of the range text. */

  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(
    var(--rdp-gradient-direction),
    transparent 50%,
    var(--rdp-range_middle-background-color) 50%
  ); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */

  --rdp-range_end-background: linear-gradient(
    var(--rdp-gradient-direction),
    var(--rdp-range_middle-background-color) 50%,
    transparent 50%
  ); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white; /* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */

  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */

  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  /* biome-ignore lint/suspicious/noDuplicateProperties: backward compatibility */
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* export default */const s=l},76314:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,o){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var l=0;l<this.length;l++){var s=this[l][0];if(s!=null){i[s]=true}}}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);if(n&&i[d[0]]){continue}if(typeof o!=="undefined"){if(typeof d[5]==="undefined"){d[5]=o}else{d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}");d[5]=o}}if(r){if(!d[2]){d[2]=r}else{d[1]="@media ".concat(d[2]," {").concat(d[1],"}");d[2]=r}}if(a){if(!d[4]){d[4]="".concat(a)}else{d[1]="@supports (".concat(d[4],") {").concat(d[1],"}");d[4]=a}}t.push(d)}};return t}},31601:function(e){e.exports=function(e){return e[1]}},35975:function(e,t,r){r.d(t,{A:()=>l});/* import */var n=r(92890);/* import */var a=r(10123);/* import */var o=r(619);/* import */var i=r(70551);/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The step must be equal to or greater than 1
 * @throws {TypeError} 1 argument required
 * @returns {Date[]} the array with starts of minutes from the minute of the interval start to the minute of the interval end
 * @throws {RangeError} `options.step` must be a number equal to or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function l(e,t){var r;(0,i/* ["default"] */.A)(1,arguments);var l=(0,o/* ["default"] */.A)((0,a["default"])(e.start));var s=(0,a["default"])(e.end);var c=l.getTime();var d=s.getTime();if(c>=d){throw new RangeError("Invalid interval")}var u=[];var f=l;var p=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(p<1||isNaN(p))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(f.getTime()<=d){u.push((0,a["default"])(f));f=(0,n["default"])(f,p)}return u}},67901:function(e,t,r){r.r(t);r.d(t,{"default":()=>i});/* import */var n=r(94188);/* import */var a=r(10123);/* import */var o=r(70551);/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function i(e,t){(0,o/* ["default"] */.A)(2,arguments);var r=(0,a["default"])(e);var i=(0,n/* ["default"] */.A)(t);r.setHours(i);return r}},67375:function(e,t,r){r.r(t);r.d(t,{"default":()=>i});/* import */var n=r(94188);/* import */var a=r(10123);/* import */var o=r(70551);/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function i(e,t){(0,o/* ["default"] */.A)(2,arguments);var r=(0,a["default"])(e);var i=(0,n/* ["default"] */.A)(t);r.setMinutes(i);return r}},619:function(e,t,r){r.d(t,{A:()=>o});/* import */var n=r(10123);/* import */var a=r(70551);/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function o(e){(0,a/* ["default"] */.A)(1,arguments);var t=(0,n["default"])(e);t.setSeconds(0,0);return t}},99972:function(e,t,r){/* import */var n=r(85072);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(97825);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(77659);/* import */var s=/*#__PURE__*/r.n(l);/* import */var c=r(55056);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(10540);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(41113);/* import */var v=/*#__PURE__*/r.n(p);/* import */var h=r(25631);var g={};g.styleTagTransform=v();g.setAttributes=d();g.insert=s().bind(null,"head");g.domAPI=i();g.insertStyleElement=f();var m=a()(h/* ["default"] */.A,g);/* unused export default */var b=h/* ["default"] */.A&&h/* ["default"].locals */.A.locals?h/* ["default"].locals */.A.locals:undefined},85072:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var o={};var i=[];for(var l=0;l<e.length;l++){var s=e[l];var c=n.base?s[0]+n.base:s[0];var d=o[c]||0;var u="".concat(c," ").concat(d);o[c]=d+1;var f=r(u);var p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var v=a(p,n);n.byIndex=l;t.splice(l,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var o=n(e,a);return function e(e){e=e||[];for(var i=0;i<o.length;i++){var l=o[i];var s=r(l);t[s].references--}var c=n(e,a);for(var d=0;d<o.length;d++){var u=o[d];var f=r(u);if(t[f].references===0){t[f].updater();t.splice(f,1)}}o=c}}},77659:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},10540:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},55056:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},97825:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var o=r.sourceMap;if(o&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},41113:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},45063:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},74469:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},20108:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},86160:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},77628:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},59120:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},62646:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},85712:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},39550:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},36732:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},73788:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},18866:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},47403:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},99786:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},31602:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */M});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(55456);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var o=r(2445);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var i=r(70540);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var l=r(50467);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Alert.tsx
var s=r(51550);// EXTERNAL MODULE: external "React"
var c=r(41594);// CONCATENATED MODULE: ./assets/react/v3/shared/components/ComponentErrorBoundary.tsx
class d extends c.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:a}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,o/* .jsxs */.FD)(s/* ["default"] */.A,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(a===null||a===void 0?void 0:a.message)||(a===null||a===void 0?void 0:a.toString())]}):null}return e}constructor(...e){super(...e),(0,l._)(this,"state",{hasError:false,error:null})}}(0,l._)(d,"defaultProps",{showError:true,componentName:"Component"});/* export default */const u=d;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/ContentRenderer.tsx
var f=e=>{var{component:t}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(u,{componentName:"content",children:t})};/* export default */const p=f;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var v=r(79489);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var h=r(31108);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var g=r(10878);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var m=r(13095);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var b=r(35304);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var _=r(91072);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var y=r(59976);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var w=r(39246);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var x=r(61046);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var A=r(27205);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var Y=r(83890);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var k=r(37196);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var I=r(49785);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/FieldRenderer.tsx
var D=e=>{var{name:t,label:r,buttonText:i,helpText:l,infoText:c,placeholder:d,type:f,options:p,defaultValue:D,rules:C,form:S}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var M=e=>{var I=(()=>{switch(f){case"text":return/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"number":return/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",label:r,placeholder:d,helpText:l}));case"password":return/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"password",label:r,placeholder:d,helpText:l}));case"textarea":return/*#__PURE__*/(0,o/* .jsx */.Y)(x/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"select":return/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:p||[],placeholder:d,helpText:l}));case"radio":return/*#__PURE__*/(0,o/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:p||[]}));case"checkbox":return/*#__PURE__*/(0,o/* .jsx */.Y)(v/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,o/* .jsx */.Y)(w/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,helpText:l}));case"date":return/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"time":return/*#__PURE__*/(0,o/* .jsx */.Y)(A/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));case"image":return/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l,infoText:c}));case"video":return/*#__PURE__*/(0,o/* .jsx */.Y)(Y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l,infoText:c}));case"uploader":return/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l}));case"WPEditor":return/*#__PURE__*/(0,o/* .jsx */.Y)(k/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:d,helpText:l}));default:return/*#__PURE__*/(0,o/* .jsxs */.FD)(s/* ["default"] */.A,{type:"danger",children:["Unsupported field type: ",f]})}})();return/*#__PURE__*/(0,o/* .jsx */.Y)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:I})};return/*#__PURE__*/(0,o/* .jsx */.Y)(I/* .Controller */.xI,{name:t,control:S.control,defaultValue:D!==null&&D!==void 0?D:"",rules:C,render:e=>M(e)})};/* export default */const C=D;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var S=e=>{var{section:t,namePrefix:r,form:l}=e;var{fields:s,contents:c}=(0,i/* .useCourseBuilderSlot */._)();var d=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=s;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=c;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[d().map(e=>/*#__PURE__*/(0,o/* .jsx */.Y)(C,(0,a._)((0,n._)({form:l},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(p,{component:r},t)})]})};/* export default */const M=S},14238:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(2445);/* import */var i=r(46306);/* import */var l=r(21094);/* import */var s=r(42338);/* import */var c=r(90209);/* import */var d=r(95729);/* import */var u=r(10840);/* import */var f=r(84133);/* import */var p=r(78635);/* import */var v=r(17437);/* import */var h=r(12470);/* import */var g=/*#__PURE__*/r.n(h);/* import */var m=r(49785);/* import */var b=r(47767);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:g}=(0,l/* .useCourseNavigator */._)();var _=(0,b/* .useNavigate */.Zp)();var y=(0,p/* .useCurrentPath */.G)(i/* ["default"] */.A);var x=(0,m/* .useFormContext */.xW)();var A=r.findIndex(e=>e.path===y);var Y=Math.max(-1,A-1);var k=Math.min(r.length,A+1);var I=r[Y];var D=r[k];var C=x.watch("post_title");var S=()=>{g(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===Y){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(I.path)};var M=()=>{g(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(D.path)};return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{when:A>0,children:/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"tertiary",iconPosition:"right",size:"small",onClick:S,buttonCss:/*#__PURE__*/(0,v/* .css */.AH)("padding:",u/* .spacing["4"] */.YK["4"],";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:Y<0,children:/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,{name:!d/* .isRTL */.V8?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{when:A<r.length-1&&C,children:/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"tertiary",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,{name:!d/* .isRTL */.V8?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,v/* .css */.AH)("padding:",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["12"] */.YK["12"],";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:!C||k>=r.length,children:(0,h.__)("Next","tutor")})})]})};/* export default */const y=_;var w={wrapper:/*#__PURE__*/(0,v/* .css */.AH)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",u/* .spacing["16"] */.YK["16"],";")}},50651:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */rz});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(41374);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var a=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(55456);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(84577);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var l=r(2445);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var s=r(17437);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var c=r(97665);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var d=r(87496);// EXTERNAL MODULE: external "wp.i18n"
var u=r(12470);// EXTERNAL MODULE: external "React"
var f=r(41594);var p=/*#__PURE__*/r.n(f);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var v=r(49785);// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js
var h=r(53429);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var g=r(90209);// EXTERNAL MODULE: ./node_modules/immer/dist/immer.mjs
var m=r(1932);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var b=r(42338);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/CheckBox.tsx
var _=r(52117);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var y=r(76017);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var w=r(10840);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var x=r(24219);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var A=r(84133);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var Y=r(85123);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useDebounce.ts
var k=r(68118);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var I=r(57148);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useIsScrolling.ts
var D=r(87018);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var C=r(94654);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var S=r(97286);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var M=r(94747);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Toast.tsx
var E=r(45549);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var T=r(53127);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var H=r(37381);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var F=r(85713);// CONCATENATED MODULE: ./assets/react/v3/shared/services/category.ts
var N=e=>{return T/* .wpAuthApiInstance.get */.v.get(H/* ["default"].CATEGORIES */.A.CATEGORIES,e?{params:{per_page:100,search:e}}:{params:{per_page:100}})};var K=e=>{return(0,S/* .useQuery */.I)({queryKey:["CategoryList",e],queryFn:()=>N(e).then(e=>e.data)})};var O=e=>{return T/* .wpAuthApiInstance.post */.v.post(H/* ["default"].CATEGORIES */.A.CATEGORIES,e)};var P=()=>{var e=(0,c/* .useQueryClient */.jE)();var{showToast:t}=(0,E/* .useToast */.d)();return(0,M/* .useMutation */.n)({mutationFn:O,onSuccess:()=>{e.invalidateQueries({queryKey:["CategoryList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,F/* .convertToErrorMessage */.EL)(e)})}})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var W=r(36154);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var L=r(66279);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var R=r(35304);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var B=r(35198);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var z=r(47617);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormMultiLevelSelect.tsx
function U(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);U=function t(){return e};return e}var j=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:s,placeholder:c,helpText:d,isInlineLabel:p,clearable:v,listItemsLabel:h,optionsWrapperStyle:m}=e;var _=(0,f.useRef)(null);var[y,w]=(0,f.useState)(false);var[x,Y]=(0,f.useState)("");var I=(0,k/* .useDebounce */.d)(x,300);var D=K(I);var C;var S=(0,F/* .generateTree */.ww)((C=D.data)!==null&&C!==void 0?C:[]);(0,f.useEffect)(()=>{if(!y){Y("")}},[y]);return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:i||S.length===0,loading:s,placeholder:c,helpText:d,isInlineLabel:p,children:e=>{var t,n;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:G.inputWrapper,ref:_,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},e),{type:"text",onClick:e=>{e.stopPropagation();w(true)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();w(true)}if(e.key==="Tab"){w(false)}},autoComplete:"off",readOnly:true,disabled:i||S.length===0,value:r.value?(n=D.data)===null||n===void 0?void 0:(t=n.find(e=>e.id===r.value))===null||t===void 0?void 0:t.name:"",placeholder:c})),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{tabIndex:-1,type:"button",disabled:i||S.length===0,"aria-label":(0,u.__)("Toggle options","tutor"),css:G.toggleIcon(y),onClick:()=>{w(e=>!e)},children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(B/* ["default"] */.A,{triggerRef:_,isOpen:y,closePopover:()=>w(false),dependencies:[S.length],animationType:z/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:G.categoryWrapper,children:[!!h&&/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:G.listItemLabel,children:h}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:G.searchInput,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:G.searchIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",{type:"text",placeholder:(0,u.__)("Search","tutor"),value:x,onChange:e=>{Y(e.target.value)}})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:S.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:G.notFound,children:(0,u.__)("No categories found.","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[G.options,m],children:S.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)(V,{option:e,onChange:e=>{r.onChange(e);w(false)}},e.id))})}),v&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:G.clearButton,children:/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"text",onClick:()=>{r.onChange(null);w(false)},children:(0,u.__)("Clear selection","tutor")})})]})})]})}})};/* export default */const q=j;var V=e=>{var{option:t,onChange:r,level:n=0}=e;var a=t.children.length>0;var o=()=>{if(!a){return null}return t.children.map(e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(V,{option:e,onChange:r,level:n+1},e.id)})};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:G.branchItem(n),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>r(t.id),title:t.name,children:(0,F/* .decodeHtmlEntities */.jT)(t.name)}),o()]})};var G={categoryWrapper:/*#__PURE__*/(0,s/* .css */.AH)("background-color:",w/* .colorTokens.background.white */.I6.background.white,";box-shadow:",w/* .shadow.popover */.r7.popover,";border-radius:",w/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",w/* .colorTokens.stroke.border */.I6.stroke.border,";padding:",w/* .spacing["8"] */.YK["8"]," 0;min-width:275px;"),options:/*#__PURE__*/(0,s/* .css */.AH)("max-height:455px;",W/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),notFound:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",x/* .typography.caption */.I.caption("regular"),";padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["16"] */.YK["16"],";color:",w/* .colorTokens.text.hints */.I6.text.hints,";"),searchInput:/*#__PURE__*/(0,s/* .css */.AH)("position:sticky;top:0;padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["16"] */.YK["16"],";input{",x/* .typography.body */.I.body("regular"),";width:100%;border-radius:",w/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["16"] */.YK["16"]," ",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["32"] */.YK["32"],";color:",w/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;:focus{",W/* .styleUtils.inputFocus */.x.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:",w/* .spacing["24"] */.YK["24"],";top:50%;transform:translateY(-50%);color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),branchItem:e=>/*#__PURE__*/(0,s/* .css */.AH)("position:relative;z-index:",w/* .zIndex.positive */.fE.positive,";button{",W/* .styleUtils.resetButton */.x.resetButton,";",x/* .typography.body */.I.body("regular"),";",W/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",w/* .colorTokens.text.title */.I6.text.title,";padding-left:calc(",w/* .spacing["24"] */.YK["24"]," + ",w/* .spacing["24"] */.YK["24"]," * ",e,");line-height:",w/* .lineHeight["36"] */.K_["36"],";padding-right:",w/* .spacing["16"] */.YK["16"],";width:100%;&:hover,&:focus,&:active{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";color:",w/* .colorTokens.text.title */.I6.text.title,";}}"),toggleIcon:e=>/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";position:absolute;top:",w/* .spacing["4"] */.YK["4"],";right:",w/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";padding:",w/* .spacing["6"] */.YK["6"],";&:focus,&:active,&:hover{background:none;color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";}",e&&(0,s/* .css */.AH)(U())),inputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;input:read-only{background-color:inherit;}"),clearButton:/*#__PURE__*/(0,s/* .css */.AH)("padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["24"] */.YK["24"],";box-shadow:",w/* .shadow.dividerTop */.r7.dividerTop,";& > button{padding:0;}"),listItemLabel:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";font-weight:",w/* .fontWeight.medium */.Wy.medium,";background-color:",w/* .colorTokens.background.white */.I6.background.white,";color:",w/* .colorTokens.text.hints */.I6.text.hints,";padding:",w/* .spacing["10"] */.YK["10"]," ",w/* .spacing["16"] */.YK["16"],";"),radioLabel:/*#__PURE__*/(0,s/* .css */.AH)("line-height:",w/* .lineHeight["32"] */.K_["32"],";padding-left:",w/* .spacing["2"] */.YK["2"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormCategoriesInput.tsx
function Q(){var e=(0,i._)(["\n      &:before {\n        content: '';\n        position: absolute;\n        height: 1px;\n        width: 10px;\n        left: -10px;\n        top: ",";\n\n        background-color: ",";\n        z-index: ",";\n      }\n    "]);Q=function t(){return e};return e}function X(){var e=(0,i._)(["\n      box-shadow: ",";\n    "]);X=function t(){return e};return e}var Z=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:s,placeholder:c,helpText:d,optionsWrapperStyle:p}=e;var h=(0,I/* .useFormWithGlobalError */.p)({shouldFocusError:true});var _=h.watch("search");var w=(0,k/* .useDebounce */.d)(_,300);var x=K(w);var Y=P();var[S,M]=(0,f.useState)(false);var[E,T]=(0,f.useState)(false);var{ref:H,isScrolling:N}=(0,D/* .useIsScrolling */.$)();(0,f.useEffect)(()=>{if(!x.isLoading&&(x.data||[]).length>0){T(true)}},[x.isLoading,x.data]);(0,f.useEffect)(()=>{if(S){var e=setTimeout(()=>{h.setFocus("name")},250);return()=>{clearTimeout(e)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[S]);var{triggerRef:O,position:W,popoverRef:B}=(0,C/* .usePortalPopover */.tP)({isOpen:S});var z;var U=(0,F/* .generateTree */.ww)((z=x.data)!==null&&z!==void 0?z:[]);var j=()=>{M(false);h.reset({name:"",parent:null,search:_})};var V=e=>{if(e.name){Y.mutate((0,a._)({name:e.name},e.parent&&{parent:e.parent}));j()}};return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{label:t,field:r,fieldState:n,loading:s,placeholder:c,helpText:d,children:()=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[et.options,p],children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.categoryListWrapper,ref:H,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!i&&(E||w),children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"search",control:h.control,render:e=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.searchInput,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.searchIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",{type:"text",placeholder:(0,u.__)("Search","tutor"),value:_,disabled:i||s,onChange:t=>{e.field.onChange(t.target.value)}})]})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!x.isLoading&&!s,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(y/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:U.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:et.notFound,children:(0,u.__)("No categories found.","tutor")}),children:U.map((e,t)=>/*#__PURE__*/(0,l/* .jsx */.Y)(ee,{disabled:i,option:e,value:r.value,isLastChild:t===U.length-1,onChange:e=>{r.onChange((0,m/* .produce */.jM)(r.value,t=>{if(Array.isArray(t)){return t.includes(e)?t.filter(t=>t!==e):[...t,e]}return[e]}))}},e.id))})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!i,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:O,css:et.addButtonWrapper({isActive:N,hasCategories:x.isLoading||U.length>0}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{disabled:i||s,type:"button",css:et.addNewButton,onClick:()=>M(true),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{width:24,height:24,name:"plus"})," ",(0,u.__)("Add","tutor")]})})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(C/* .Portal */.ZL,{isOpen:S,onClickOutside:j,onEscape:j,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.categoryFormWrapper,style:{left:W.left,top:W.top},ref:B,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"name",control:h.control,rules:{required:(0,u.__)("Category name is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{placeholder:(0,u.__)("Category name","tutor"),selectOnFocus:true}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"parent",control:h.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(q,(0,o._)((0,a._)({},e),{placeholder:(0,u.__)("Select parent","tutor"),clearable:!!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.categoryFormButtons,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"text",size:"small",onClick:j,children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"secondary",size:"small",loading:Y.isPending,onClick:h.handleSubmit(V),children:(0,u.__)("Ok","tutor")})]})]})})]})}})};/* export default */const $=(0,Y/* .withVisibilityControl */.M)(Z);var J=e=>{return e.children.reduce((e,t)=>e+J(t),e.children.length)};var ee=e=>{var{option:t,value:r,onChange:n,isLastChild:a,disabled:o}=e;var i=J(t);var s=i>0;var c=(0,F/* .getCategoryLeftBarHeight */.oj)(a,i);var d=()=>{if(!s){return null}return t.children.map((e,a)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(ee,{option:e,value:r,onChange:n,isLastChild:a===t.children.length-1,disabled:o},e.id)})};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.branchItem({leftBarHeight:c,hasParent:t.parent!==0}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(_/* ["default"] */.A,{checked:Array.isArray(r)?r.includes(t.id):r===t.id,label:(0,F/* .decodeHtmlEntities */.jT)(t.name),onChange:()=>{n(t.id)},labelCss:et.checkboxLabel,disabled:o}),d()]})};var et={options:/*#__PURE__*/(0,s/* .css */.AH)("border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius["8"] */.Vq["8"],";padding:",w/* .spacing["8"] */.YK["8"]," 0;background-color:",w/* .colorTokens.bg.white */.I6.bg.white,";"),categoryListWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.overflowYAuto */.x.overflowYAuto,";max-height:208px;"),notFound:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",x/* .typography.caption */.I.caption("regular"),";padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["16"] */.YK["16"],";color:",w/* .colorTokens.text.hints */.I6.text.hints,";"),searchInput:/*#__PURE__*/(0,s/* .css */.AH)("position:sticky;top:0;padding:",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["16"] */.YK["16"],";background-color:",w/* .colorTokens.background.white */.I6.background.white,";z-index:",w/* .zIndex.dropdown */.fE.dropdown,";input{",x/* .typography.body */.I.body("regular"),";width:100%;border-radius:",w/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["16"] */.YK["16"]," ",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["32"] */.YK["32"],";color:",w/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;:focus{",W/* .styleUtils.inputFocus */.x.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:",w/* .spacing["24"] */.YK["24"],";top:50%;transform:translateY(-50%);color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),checkboxLabel:/*#__PURE__*/(0,s/* .css */.AH)("line-height:1.88rem !important;span:last-of-type{",W/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"}"),branchItem:e=>{var{leftBarHeight:t,hasParent:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)("line-height:",w/* .spacing["32"] */.YK["32"],";position:relative;z-index:",w/* .zIndex.positive */.fE.positive,";margin-inline:",w/* .spacing["20"] */.YK["20"]," ",w/* .spacing["16"] */.YK["16"],";&:after{content:'';position:absolute;height:",t,";width:1px;left:9px;top:25px;background-color:",w/* .colorTokens.stroke.divider */.I6.stroke.divider,";z-index:",w/* .zIndex.level */.fE.level,";}",r&&(0,s/* .css */.AH)(Q(),w/* .spacing["16"] */.YK["16"],w/* .colorTokens.stroke.divider */.I6.stroke.divider,w/* .zIndex.level */.fE.level))},addNewButton:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";",x/* .typography.small */.I.small("medium"),";color:",w/* .colorTokens.brand.blue */.I6.brand.blue,";padding:0 ",w/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;border-radius:",w/* .borderRadius["2"] */.Vq["2"],";&:focus,&:active,&:hover{background:none;color:",w/* .colorTokens.brand.blue */.I6.brand.blue,";}&:focus-visible{outline:2px solid ",w/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{color:",w/* .colorTokens.text.disable */.I6.text.disable,";}"),categoryFormWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;background-color:",w/* .colorTokens.background.white */.I6.background.white,";box-shadow:",w/* .shadow.popover */.r7.popover,";border-radius:",w/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",w/* .colorTokens.stroke.border */.I6.stroke.border,";padding:",w/* .spacing["16"] */.YK["16"],";min-width:306px;display:flex;flex-direction:column;gap:",w/* .spacing["12"] */.YK["12"],";"),categoryFormButtons:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;justify-content:end;gap:",w/* .spacing["8"] */.YK["8"],";"),addButtonWrapper:e=>{var{isActive:t=false,hasCategories:r=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("transition:box-shadow 0.3s ease-in-out;padding-inline:",w/* .spacing["8"] */.YK["8"],";padding-block:",r?w/* .spacing["4"] */.YK["4"]:"0px",";",t&&(0,s/* .css */.AH)(X(),w/* .shadow.scrollable */.r7.scrollable))}};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var er=r(13095);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var en=r(59976);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var ea=r(31105);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var eo=r(4892);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var ei=r(95729);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var el=r(67198);// CONCATENATED MODULE: ./assets/react/v3/public/images/profile-photo.png
const es=r.p+"js/images/profile-photo-92d02228.png";// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormSelectUser.tsx
function ec(){var e=(0,i._)(["\n      border-color: ",";\n      cursor: pointer;\n    "]);ec=function t(){return e};return e}function ed(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);ed=function t(){return e};return e}var eu={id:0,name:(0,u.__)("Click to select user","tutor"),email:"example@example.com",avatar_url:"https://gravatar.com/avatar"};var ef=eo/* .tutorConfig.current_user */.P.current_user;var ep=e=>{var{field:t,fieldState:r,options:n,onChange:i=F/* .noop */.lQ,handleSearchOnChange:s,isMultiSelect:c=false,label:d,placeholder:p="",disabled:v,readOnly:h,loading:m,isSearchable:b=false,helpText:_,emptyStateText:y=(0,u.__)("No user selected","tutor"),isInstructorMode:w=false,postAuthor:x}=e;var Y;var I;var D=(I=t.value)!==null&&I!==void 0?I:c?[]:eu;var C=Array.isArray(D)?D.map(e=>String(e.id)):[String(D.id)];var S=(Y=ef.roles)===null||Y===void 0?void 0:Y.includes(ei/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var M=String(ef.data.id)===String((x===null||x===void 0?void 0:x.ID)||"");var E=(0,f.useRef)(null);var[T,H]=(0,f.useState)(false);var[N,K]=(0,f.useState)("");var O=(0,k/* .useDebounce */.d)(N);var P=n.filter(e=>{var t,r;var n=((t=e.name)===null||t===void 0?void 0:t.toLowerCase().includes(N.toLowerCase()))||((r=e.email)===null||r===void 0?void 0:r.toLowerCase().includes(N.toLowerCase()));var a=!C.includes(String(e.id));return n&&a})||[];(0,f.useEffect)(()=>{if(s){s(O)}else{// Handle local filter
}},[O,s]);var{activeIndex:W,setActiveIndex:R}=(0,el/* .useSelectKeyboardNavigation */.v)({options:P.map(e=>({label:e.name,value:e})),isOpen:T,onSelect:e=>{U(e.value)},onClose:()=>{H(false);K("")},selectedValue:Array.isArray(D)?null:D});var U=e=>{var r=w?(0,o._)((0,a._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(D)?[...D,r]:r;t.onChange(n);K("");i(n);H(false)};var j=e=>{if(Array.isArray(D)){var r=D.filter(t=>t.id!==e);t.onChange(r);i(r)}};var q=(0,f.useRef)(null);(0,f.useEffect)(()=>{if(T&&W>=0&&q.current){q.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[T,W]);return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{fieldState:r,field:t,label:d,disabled:v,readOnly:h,loading:m,helpText:_,children:e=>{var{css:r}=e,n=(0,ea._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eh.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{ref:E,children:[!c&&!Array.isArray(D)&&/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:eh.instructorItem({isDefaultItem:true}),onClick:()=>H(e=>!e),disabled:h||v||P.length===0,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eh.instructorInfo,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:D.avatar_url?D.avatar_url:es,alt:D.name,css:eh.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorName,children:D.name}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorEmail,children:D.email})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!m,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.toggleIcon({isOpen:T}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})})]}),c&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eh.inputWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.leftIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},n),{onClick:e=>{e.stopPropagation();H(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();H(e=>!e)}if(e.key==="Tab"){H(false)}},className:"tutor-input-field",css:[r,eh.input],autoComplete:"off",readOnly:h||!b,placeholder:p,value:N,onChange:e=>{K(e.target.value)}}))]})]}),c&&Array.isArray(D)&&(D.length>0?/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorList,children:D.map(e=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eh.instructorItem({isDefaultItem:false}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eh.instructorInfo,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.avatar_url?e.avatar_url:es,alt:e.name,css:eh.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorName,children:e.name}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorEmail,children:e.email})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:w,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>j(e.id),css:eh.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:32,height:32})}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:S||M||e.isRemoveAble,children:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>j(e.id),css:eh.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:32,height:32})})})})]},e.id))}):/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.emptyState,children:/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:y})})),/*#__PURE__*/(0,l/* .jsx */.Y)(B/* ["default"] */.A,{triggerRef:E,isOpen:T,dependencies:[P.length],animationType:z/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{H(false);K("")},children:/*#__PURE__*/(0,l/* .jsxs */.FD)("ul",{css:[eh.options],children:[!c&&/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:eh.inputWrapperListItem,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[eh.inputWrapper,eh.portalInputWrapper],children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.leftIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},n),{autoFocus:true,className:"tutor-input-field",css:[r,eh.input],autoComplete:"off",readOnly:h||!b,placeholder:p,value:N,onChange:e=>{K(e.target.value)}}))]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:P.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:eh.noUserFound,children:/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:(0,u.__)("No user found","tutor")})}),children:P.map((e,r)=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:eh.optionItem,"data-active":W===r,onMouseOver:()=>R(r),onMouseLeave:()=>r!==W&&R(-1),ref:W===r?q:null,onFocus:()=>R(r),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:eh.label,onClick:()=>{var r=w?(0,o._)((0,a._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(D)?[...D,r]:r;t.onChange(n);K("");i(n);H(false)},"aria-selected":W===r,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.avatar_url?e.avatar_url:es,alt:e.name,css:eh.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorName,children:e.name}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eh.instructorEmail,children:e.email})]})]})},String(e.id)))})]})})]})}})};/* export default */const ev=(0,Y/* .withVisibilityControl */.M)(ep);var eh={mainWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;"),inputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),portalInputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("padding:",w/* .spacing["8"] */.YK["8"],";"),inputWrapperListItem:/*#__PURE__*/(0,s/* .css */.AH)("position:sticky;top:0px;padding:0px;background-color:inherit;"),leftIcon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:",w/* .spacing["12"] */.YK["12"],";top:50%;transform:translateY(-50%);color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.body */.I.body(),";width:100%;padding-right:",w/* .spacing["32"] */.YK["32"],";padding-left:",w/* .spacing["36"] */.YK["36"],";",W/* .styleUtils.textEllipsis */.x.textEllipsis,";border-color:transparent;:focus{outline:none;box-shadow:none;}&.tutor-input-field{padding-right:",w/* .spacing["32"] */.YK["32"],";padding-left:",w/* .spacing["36"] */.YK["36"],";}"),instructorList:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["8"] */.YK["8"],";margin-top:",w/* .spacing["8"] */.YK["8"],";"),instructorItem:e=>{var{isDefaultItem:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["16"] */.YK["16"]," ",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["12"] */.YK["12"],";border:1px solid transparent;border-radius:",w/* .borderRadius.input */.Vq.input,";background-color:",w/* .colorTokens.bg.white */.I6.bg.white,";&:hover,&:focus,&:active{background-color:",w/* .colorTokens.bg.white */.I6.bg.white,";}&:focus{outline:2px solid ",w/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}",t&&(0,s/* .css */.AH)(ec(),w/* .colorTokens.stroke["default"] */.I6.stroke["default"]),"    &:hover{border-color:",w/* .colorTokens.stroke.divider */.I6.stroke.divider,";[data-instructor-delete-button]{opacity:1;}}",w/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-instructor-delete-button]{opacity:1;}}")},instructorInfo:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",w/* .spacing["10"] */.YK["10"],";"),instructorAvatar:/*#__PURE__*/(0,s/* .css */.AH)("height:40px;width:40px;border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius.circle */.Vq.circle,";"),instructorName:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";display:flex;align-items:center;gap:",w/* .spacing["4"] */.YK["4"],";"),instructorEmail:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.small */.I.small(),";color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";"),optionsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;width:100%;"),instructorDeleteButton:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.crossButton */.x.crossButton,";color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";opacity:0;transition:none;&:hover,&:focus,&:active{background-color:",w/* .colorTokens.bg.white */.I6.bg.white,";}&:focus{box-shadow:",w/* .shadow.focus */.r7.focus,";}:focus-visible{opacity:1;}"),options:/*#__PURE__*/(0,s/* .css */.AH)("z-index:",w/* .zIndex.dropdown */.fE.dropdown,";background-color:",w/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",w/* .shadow.popover */.r7.popover,";margin:",w/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border:1px solid ",w/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",w/* .borderRadius["6"] */.Vq["6"],";",W/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;min-width:200px;"),optionItem:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&[data-active='true']{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";}&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";}"),label:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;gap:",w/* .spacing["8"] */.YK["8"],";padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["12"] */.YK["12"],";text-align:left;line-height:",w/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",w/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",w/* .borderRadius["6"] */.Vq["6"],";}"),optionsContainer:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;min-height:16px;max-width:calc(100% - 32px);max-height:calc(100% - 32px);"),toggleIcon:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:0;bottom:0;right:",w/* .spacing["8"] */.YK["8"],";",W/* .styleUtils.flexCenter */.x.flexCenter(),";color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:transform 0.3s ease-in-out;",t&&(0,s/* .css */.AH)(ed()))},noUserFound:/*#__PURE__*/(0,s/* .css */.AH)("padding:",w/* .spacing["8"] */.YK["8"],";text-align:center;"),emptyState:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.flexCenter */.x.flexCenter(),";",x/* .typography.caption */.I.caption(),";margin-top:",w/* .spacing["8"] */.YK["8"],";padding:",w/* .spacing["8"] */.YK["8"],";background-color:",w/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",w/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",w/* .borderRadius["4"] */.Vq["4"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Chip.tsx
function eg(){var e=(0,i._)(["\n      cursor: inherit;\n    "]);eg=function t(){return e};return e}function em(){var e=(0,i._)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: ",";\n      padding: "," "," "," ",";\n    "]);em=function t(){return e};return e}var eb=e=>{var{label:t,onClick:r=F/* .noop */.lQ,showIcon:n=true,icon:a=/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:20,height:20}),isClickable:o}=e;if(o){return/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:ey.wrapper({hasIcon:n,isClickable:true}),onClick:r,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ey.label,children:t}),n&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ey.iconWrapper,"data-icon-wrapper":true,children:a})]})}return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ey.wrapper({hasIcon:n,isClickable:false}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ey.label,children:t}),n&&/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:ey.iconWrapper,onClick:r,"data-icon-wrapper":true,children:a})]})};/* export default */const e_=eb;var ey={wrapper:e=>{var{hasIcon:t=false,isClickable:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";background-color:#e4e5e7;border-radius:",w/* .borderRadius["24"] */.Vq["24"],";padding:",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["8"] */.YK["8"],";min-height:24px;transition:background-color 0.3s ease;",!r&&(0,s/* .css */.AH)(eg())," ",t&&(0,s/* .css */.AH)(em(),w/* .spacing["2"] */.YK["2"],w/* .spacing["4"] */.YK["4"],w/* .spacing["8"] */.YK["8"],w/* .spacing["4"] */.YK["4"],w/* .spacing["12"] */.YK["12"]),":hover{[data-icon-wrapper]{> svg{color:",w/* .colorTokens.icon.hover */.I6.icon.hover,";}}}")},label:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption()),iconWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";border-radius:",w/* .borderRadius.circle */.Vq.circle,";transition:background-color 0.3s ease;height:20px;width:20px;text-align:center;&:focus,&:active,&:hover{background:none;}svg{color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease;}")};// CONCATENATED MODULE: ./assets/react/v3/shared/services/tags.ts
var ew=e=>{return T/* .wpAuthApiInstance.get */.v.get(H/* ["default"].TAGS */.A.TAGS,{params:e})};var ex=e=>{return(0,S/* .useQuery */.I)({queryKey:["TagList",e],queryFn:()=>ew(e).then(e=>e.data)})};var eA=e=>{return T/* .wpAuthApiInstance.post */.v.post(H/* ["default"].TAGS */.A.TAGS,e)};var eY=()=>{var e=(0,c/* .useQueryClient */.jE)();var{showToast:t}=(0,E/* .useToast */.d)();return(0,M/* .useMutation */.n)({mutationFn:eA,onSuccess:()=>{e.invalidateQueries({queryKey:["TagList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,F/* .convertToErrorMessage */.EL)(e)})}})};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormTagsInput.tsx
function ek(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);ek=function t(){return e};return e}var eI=e=>{var{field:t,fieldState:r,label:i,placeholder:s="",disabled:c,readOnly:d,loading:p,helpText:v,removeOptionsMinWidth:h=false}=e;var m;var b=(m=t.value)!==null&&m!==void 0?m:[];var[y,w]=(0,f.useState)("");var x=(0,k/* .useDebounce */.d)(y);var Y=(0,f.useRef)(null);var[I,D]=(0,f.useState)(false);var C=ex({search:x});var S=eY();var M;var E=(M=C.data)!==null&&M!==void 0?M:[];var T=(e,r)=>{if(e){t.onChange([...b,r])}else{t.onChange(b.filter(e=>e.id!==r.id))}};var H=()=>(0,n._)(function*(){if(y.length){var e=yield S.mutateAsync({name:y});t.onChange([...b,e.data]);D(false);w("")}})();return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{fieldState:r,field:t,label:i,disabled:c,readOnly:d,loading:p,helpText:v,children:e=>{var t;var{css:r}=e,n=(0,ea._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eC.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eC.inputWrapper,ref:Y,children:/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},n),{css:[r,eC.input],onClick:e=>{e.stopPropagation();D(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();D(e=>!e)}if(e.key==="Tab"){D(false)}},autoComplete:"off",readOnly:d,placeholder:s,value:y,onChange:e=>{w(e.target.value)}}))}),b.length>0&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eC.tagsWrapper,children:b.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e_,{label:(0,F/* .decodeHtmlEntities */.jT)(e.name),onClick:()=>T(false,e)},e.id))}),/*#__PURE__*/(0,l/* .jsx */.Y)(B/* ["default"] */.A,{triggerRef:Y,isOpen:I,closePopover:()=>D(false),dependencies:[(t=C.data)===null||t===void 0?void 0:t.length],animationType:z/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("ul",{css:[eC.options(h)],children:[y.length>0&&/*#__PURE__*/(0,l/* .jsx */.Y)("li",{children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:eC.addTag,onClick:H,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"plus",width:24,height:24}),/*#__PURE__*/(0,l/* .jsx */.Y)("strong",{children:(0,u.__)("Add","tutor")})," ",y]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:E.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eC.notTag,children:(0,u.__)("No tag created yet.","tutor")}),children:E.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:eC.optionItem,children:/*#__PURE__*/(0,l/* .jsx */.Y)(_/* ["default"] */.A,{label:(0,F/* .decodeHtmlEntities */.jT)(e.name),checked:!!b.find(t=>t.id===e.id),onChange:t=>T(t,e)})},String(e.id)))})]})})]})}})};/* export default */const eD=(0,Y/* .withVisibilityControl */.M)(eI);var eC={mainWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;"),notTag:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.body */.I.body(),";width:100%;",W/* .styleUtils.textEllipsis */.x.textEllipsis,";:focus{outline:none;box-shadow:",w/* .shadow.focus */.r7.focus,";}"),tagsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-wrap:wrap;align-items:center;gap:",w/* .spacing["4"] */.YK["4"],";margin-top:",w/* .spacing["8"] */.YK["8"],";"),options:e=>/*#__PURE__*/(0,s/* .css */.AH)("z-index:",w/* .zIndex.dropdown */.fE.dropdown,";background-color:",w/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",w/* .shadow.popover */.r7.popover,";padding:",w/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border:1px solid ",w/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",w/* .borderRadius["6"] */.Vq["6"],";",W/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,s/* .css */.AH)(ek())),optionItem:/*#__PURE__*/(0,s/* .css */.AH)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",w/* .spacing["8"] */.YK["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";}"),addTag:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";",x/* .typography.body */.I.body(),"    line-height:",w/* .lineHeight["24"] */.K_["24"],";display:flex;align-items:center;gap:",w/* .spacing["4"] */.YK["4"],";width:100%;padding:",w/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";color:",w/* .colorTokens.text.primary */.I6.text.primary,";}")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var eS=r(83890);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var eM=r(94188);// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMilliseconds/index.js
var eE=r(7767);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var eT=r(70551);// CONCATENATED MODULE: ./node_modules/date-fns/esm/addHours/index.js
var eH=36e5;/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */function eF(e,t){(0,eT/* ["default"] */.A)(2,arguments);var r=(0,eM/* ["default"] */.A)(t);return(0,eE/* ["default"] */.A)(e,r*eH)}// EXTERNAL MODULE: ./node_modules/date-fns/esm/isValid/index.js
var eN=r(86828);// EXTERNAL MODULE: ./node_modules/date-fns/esm/isBefore/index.js
var eK=r(27813);// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var eO=r(1806);// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var eP=r(10123);// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfDay/index.js
/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function eW(e){(0,eT/* ["default"] */.A)(1,arguments);var t=(0,eP["default"])(e);t.setHours(0,0,0,0);return t}// EXTERNAL MODULE: ./node_modules/date-fns/esm/startOfMinute/index.js
var eL=r(619);// CONCATENATED MODULE: ./node_modules/date-fns/esm/isSameMinute/index.js
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute (and hour and day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */function eR(e,t){(0,eT/* ["default"] */.A)(2,arguments);var r=(0,eL/* ["default"] */.A)(e);var n=(0,eL/* ["default"] */.A)(t);return r.getTime()===n.getTime()}// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var eB=r(2971);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ProBadge.tsx
var ez=r(91196);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var eU=r(79489);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var ej=r(31108);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var eq=r(39246);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var eV=r(27205);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/utils/utils.ts
var eG=r(5081);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var eQ=r(6192);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/ScheduleOptions.tsx
var eX=!!eo/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var eZ=(0,eG/* .getCourseId */.p)();var e$=()=>{var e=(0,v/* .useFormContext */.xW)();var t=(0,v/* .useWatch */.FH)({name:"post_date"});var r;var n=(r=(0,v/* .useWatch */.FH)({name:"schedule_date"}))!==null&&r!==void 0?r:"";var i;var s=(i=(0,v/* .useWatch */.FH)({name:"schedule_time"}))!==null&&i!==void 0?i:(0,h["default"])(eF(new Date,1),ei/* .DateFormats.hoursMinutes */.UA.hoursMinutes);var c;var p=(c=(0,v/* .useWatch */.FH)({name:"isScheduleEnabled"}))!==null&&c!==void 0?c:false;var m;var _=(m=(0,v/* .useWatch */.FH)({name:"showScheduleForm"}))!==null&&m!==void 0?m:false;var y;var w=(y=(0,v/* .useWatch */.FH)({name:"enable_coming_soon"}))!==null&&y!==void 0?y:false;var x;var Y=(x=(0,v/* .useWatch */.FH)({name:"course_enrollment_period"}))!==null&&x!==void 0?x:false;var k;var I=(k=(0,v/* .useWatch */.FH)({name:"enrollment_starts_date"}))!==null&&k!==void 0?k:"";var D;var C=(D=(0,v/* .useWatch */.FH)({name:"enrollment_starts_time"}))!==null&&D!==void 0?D:"";var S=(0,v/* .useWatch */.FH)({name:"coming_soon_thumbnail"});var M=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",eZ]});var[E,T]=(0,f.useState)(n&&s&&(0,eN["default"])(new Date("".concat(n," ").concat(s)))?(0,h["default"])(new Date("".concat(n," ").concat(s)),ei/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H):"");var H=new Date("".concat(I," ").concat(C));var N=()=>{e.setValue("schedule_date","",{shouldDirty:true});e.setValue("schedule_time","",{shouldDirty:true});e.setValue("showScheduleForm",true,{shouldDirty:true})};var K=()=>{var r=(0,eK["default"])(new Date(t),new Date);e.setValue("schedule_date",r&&E?(0,h["default"])((0,eO["default"])(E),ei/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",{shouldDirty:true});e.setValue("schedule_time",r&&E?(0,h["default"])((0,eO["default"])(E),ei/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",{shouldDirty:true})};var O=()=>{if(!n||!s){return}e.setValue("showScheduleForm",false,{shouldDirty:true});T((0,h["default"])(new Date("".concat(n," ").concat(s)),ei/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H))};(0,f.useEffect)(()=>{if(p&&_){e.setFocus("schedule_date")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[_,p]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:e0.scheduleOptions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"isScheduleEnabled",control:e.control,rules:{deps:["enrollment_starts_date","enrollment_starts_time"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.Y)(eq/* ["default"] */.A,(0,o._)((0,a._)({},t),{loading:!!M,label:(0,u.__)("Schedule","tutor"),onChange:t=>{if(!t&&n&&s){e.setValue("showScheduleForm",false,{shouldDirty:true})}}}))}),p&&_&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:e0.formWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:W/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"schedule_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required.","tutor"),validate:{invalidDateRule:eQ/* .invalidDateRule */.Kh,futureDate:e=>{if((0,eK["default"])(new Date("".concat(e," +T00:00:00")),eW(new Date))){return(0,u.__)("Schedule date should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(Y&&(0,eK["default"])(H,new Date("".concat(e," ").concat(s)))){return(0,u.__)("Schedule date should be before enrollment start date.","tutor")}return true}},deps:["enrollment_starts_date","enrollment_starts_time","schedule_time"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.Y)(ej/* ["default"] */.A,(0,o._)((0,a._)({},t),{isClearable:false,placeholder:(0,u.__)("Select date","tutor"),disabledBefore:(0,h["default"])(new Date,ei/* .DateFormats.yearMonthDay */.UA.yearMonthDay),onChange:()=>{e.setFocus("schedule_time")},dateFormat:ei/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"schedule_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required.","tutor"),validate:{invalidTimeRule:eQ/* .invalidTimeRule */.XA,futureDate:e=>{if((0,eK["default"])(new Date("".concat(n," ").concat(e)),new Date)){return(0,u.__)("Schedule time should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(Y&&(0,eK["default"])(H,new Date("".concat(n," ").concat(e)))){return(0,u.__)("Schedule time should be before enrollment start date.","tutor")}return true}},deps:["schedule_date","enrollment_starts_date","enrollment_starts_time"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eV/* ["default"] */.A,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enable_coming_soon",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[(0,u.__)("Show coming soon in course list & details page","tutor"),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!eX,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{"data-pro-badge":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(ez/* ["default"] */.A,{content:(0,u.__)("Pro","tutor"),size:"small"})})})]}),disabled:!eX,labelCss:e0.checkboxStartAlign}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:eX,children:/*#__PURE__*/(0,l/* .jsxs */.FD)(A/* ["default"] */.A,{when:w,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"coming_soon_thumbnail",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(er/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Coming Soon Thumbnail","tutor"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:/* translators: %s is the maximum allowed upload file size (e.g., "2MB") */(0,u.sprintf)((0,u.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),(0,F/* .formatBytes */.z3)(Number((eo/* .tutorConfig */.P===null||eo/* .tutorConfig */.P===void 0?void 0:eo/* .tutorConfig.max_upload_size */.P.max_upload_size)||0)))}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enable_curriculum_preview",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Preview Course Curriculum","tutor")}))})]})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:e0.scheduleButtonsWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"tertiary",size:"small",onClick:K,disabled:!n&&!s||(0,eN["default"])(new Date("".concat(n," ").concat(s)))&&eR(new Date("".concat(n," ").concat(s)),new Date(E)),children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"secondary",size:"small",onClick:e.handleSubmit(O),disabled:!n||!s,children:(0,u.__)("Ok","tutor")})]})]}),p&&!_&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:e0.scheduleInfoWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:e0.scheduledFor,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:e0.scheduleLabel,children:!w?(0,u.__)("Scheduled for","tutor"):(0,u.__)("Scheduled with coming soon","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:e0.scheduleInfoButtons,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:W/* .styleUtils.actionButton */.x.actionButton,onClick:N,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"delete",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:W/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e.setValue("showScheduleForm",true,{shouldDirty:true})},children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"edit",width:24,height:24})})]})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)(A/* ["default"] */.A,{when:n&&s&&(0,eN["default"])(new Date("".concat(n," ").concat(s))),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:e0.scheduleInfo,children:/* translators: %1$s is the date and %2$s is the time */(0,u.sprintf)((0,u.__)("%1$s at %2$s","tutor"),(0,h["default"])((0,eO["default"])(n),ei/* .DateFormats.monthDayYear */.UA.monthDayYear),s)}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:S===null||S===void 0?void 0:S.url,children:/*#__PURE__*/(0,l/* .jsx */.Y)(eB/* ["default"] */.A,{value:S,uploadHandler:F/* .noop */.lQ,clearHandler:F/* .noop */.lQ,disabled:true})})]})]})]})};/* export default */const eJ=(0,Y/* .withVisibilityControl */.M)(e$);var e0={scheduleOptions:/*#__PURE__*/(0,s/* .css */.AH)("padding:",w/* .spacing["12"] */.YK["12"],";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius["8"] */.Vq["8"],";gap:",w/* .spacing["8"] */.YK["8"],";background-color:",w/* .colorTokens.bg.white */.I6.bg.white,";"),formWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",w/* .spacing["8"] */.YK["8"],";margin-top:",w/* .spacing["16"] */.YK["16"],";"),scheduleButtonsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",w/* .spacing["12"] */.YK["12"],";margin-top:",w/* .spacing["8"] */.YK["8"],";button{width:100%;span{justify-content:center;}}"),scheduleInfoWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["8"] */.YK["8"],";margin-top:",w/* .spacing["12"] */.YK["12"],";"),scheduledFor:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),scheduleLabel:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";"),scheduleInfoButtons:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",w/* .spacing["8"] */.YK["8"],";"),scheduleInfo:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";background-color:",w/* .colorTokens.background.status.processing */.I6.background.status.processing,";padding:",w/* .spacing["8"] */.YK["8"],";border-radius:",w/* .borderRadius["4"] */.Vq["4"],";text-align:center;"),checkboxStartAlign:/*#__PURE__*/(0,s/* .css */.AH)("span:first-of-type{gap:",w/* .spacing["4"] */.YK["4"],";align-self:flex-start;margin-top:",w/* .spacing["4"] */.YK["4"],";}[data-pro-badge]{display:inline-flex;vertical-align:middle;padding-left:",w/* .spacing["4"] */.YK["4"],";}")};// CONCATENATED MODULE: ./assets/react/v3/shared/services/users.ts
var e1=e=>{return T/* .wpAjaxInstance.get */.b.get(H/* ["default"].USERS_LIST */.A.USERS_LIST,{params:{filter:{search:e,role:[ei/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR,ei/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR]}}})};var e4=e=>{return(0,S/* .useQuery */.I)({queryKey:["UserList",e],queryFn:()=>e1(e).then(e=>e.data.results.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url})))})};var e2=e=>{return T/* .wpAjaxInstance.get */.b.get(H/* ["default"].TUTOR_INSTRUCTOR_SEARCH */.A.TUTOR_INSTRUCTOR_SEARCH,{params:{course_id:e}}).then(e=>e.data)};var e6=(e,t)=>{return(0,S/* .useQuery */.I)({queryKey:["InstructorList",e],queryFn:()=>e2(e).then(e=>{return e.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}))}),enabled:t})};// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var e5=r(47767);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInputWithContent.tsx
var e3=r(49201);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var e7=r(91072);// EXTERNAL MODULE: ./node_modules/@dnd-kit/core/dist/core.esm.js
var e8=r(15871);// EXTERNAL MODULE: ./node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var e9=r(18831);// EXTERNAL MODULE: ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var te=r(43627);// EXTERNAL MODULE: external "ReactDOM"
var tt=r(75206);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/Modal.tsx
var tr=r(1448);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/ModalWrapper.tsx
var tn=r(39643);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormInputWithPresets.tsx
function ta(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);ta=function t(){return e};return e}function to(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);to=function t(){return e};return e}function ti(){var e=(0,i._)(["\n        border-color: ",";\n      "]);ti=function t(){return e};return e}function tl(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);tl=function t(){return e};return e}function ts(){var e=(0,i._)(["\n              padding-",": ",";\n            "]);ts=function t(){return e};return e}function tc(){var e=(0,i._)(["\n        font-size: ",";\n        font-weight: ",";\n        height: 34px;\n        ",";\n      "]);tc=function t(){return e};return e}function td(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);td=function t(){return e};return e}function tu(){var e=(0,i._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);tu=function t(){return e};return e}function tf(){var e=(0,i._)(["\n      ","\n    "]);tf=function t(){return e};return e}function tp(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);tp=function t(){return e};return e}function tv(){var e=(0,i._)(["\n      ","\n    "]);tv=function t(){return e};return e}function th(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);th=function t(){return e};return e}var tg=e=>{var{field:t,fieldState:r,content:n,contentPosition:i="left",showVerticalBar:s=true,type:c="text",size:d="regular",label:u,placeholder:p="",disabled:v,readOnly:h,loading:m,helpText:b,removeOptionsMinWidth:_=true,onChange:y,presetOptions:w=[],selectOnFocus:x=false,wrapperCss:Y,contentCss:k,removeBorder:I=false}=e;var D;var C=(D=t.value)!==null&&D!==void 0?D:"";var S=(0,f.useRef)(null);var M=(0,f.useRef)(null);var[E,T]=(0,f.useState)(false);return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{fieldState:r,field:t,label:u,disabled:v,readOnly:h,loading:m,helpText:b,removeBorder:I,placeholder:p,children:e=>{var{css:u}=e,f=(0,ea._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[tb.inputWrapper(!!r.error,I),Y],ref:M,children:[n&&i==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[tb.inputLeftContent(s,d),k],children:n}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},f),{css:[u,tb.input(i,s,d)],onClick:()=>T(true),autoComplete:"off",readOnly:h,ref:e=>{t.ref(e);// @ts-ignore
S.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!x||!S.current){return}S.current.select()},value:C,onChange:e=>{var r=c==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(y){y(r)}},"data-input":true})),n&&i==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tb.inputRightContent(s,d),children:n})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(B/* ["default"] */.A,{triggerRef:M,isOpen:E,closePopover:()=>T(false),animationType:z/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[tb.optionsWrapper],children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:[tb.options(_)],children:w.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:tb.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:tb.label,onClick:()=>{t.onChange(e.value);y===null||y===void 0?void 0:y(e.value);T(false)},children:[/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* export default */const tm=tg;var tb={mainWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;",!t&&(0,s/* .css */.AH)(ta(),w/* .colorTokens.stroke["default"] */.I6.stroke["default"],w/* .borderRadius["6"] */.Vq["6"],w/* .shadow.input */.r7.input,w/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,s/* .css */.AH)(to(),w/* .colorTokens.stroke.danger */.I6.stroke.danger,w/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",W/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,s/* .css */.AH)(ti(),w/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{",x/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;","padding-".concat(e),":0;",t&&(0,s/* .css */.AH)(tl(),e,w/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,s/* .css */.AH)(tc(),w/* .fontSize["24"] */.J["24"],w/* .fontWeight.medium */.Wy.medium,t&&(0,s/* .css */.AH)(ts(),e,w/* .spacing["12"] */.YK["12"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",w/* .spacing["8"] */.YK["8"],";margin:0 ",w/* .spacing["12"] */.YK["12"],";padding:",w/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",w/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),optionsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;width:100%;"),options:e=>/*#__PURE__*/(0,s/* .css */.AH)("z-index:",w/* .zIndex.dropdown */.fE.dropdown,";background-color:",w/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",w/* .shadow.popover */.r7.popover,";padding:",w/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",w/* .borderRadius["6"] */.Vq["6"],";",W/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,s/* .css */.AH)(td())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";}",t&&(0,s/* .css */.AH)(tu(),w/* .colorTokens.background.active */.I6.background.active,w/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],w/* .borderRadius["6"] */.Vq["6"],w/* .borderRadius["6"] */.Vq["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.small */.I.small()," ",W/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",w/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",w/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,s/* .css */.AH)(tf(),x/* .typography.body */.I.body())," ",e&&(0,s/* .css */.AH)(tp(),w/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.small */.I.small()," ",W/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",w/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",w/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,s/* .css */.AH)(tv(),x/* .typography.body */.I.body())," ",e&&(0,s/* .css */.AH)(th(),w/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/OfferSalePrice.tsx
var{tutor_currency:t_}=eo/* .tutorConfig */.P;function ty(){var e=(0,v/* .useFormContext */.xW)();var t=e.watch("offer_sale_price");var r=e.watch("regular_price");var n=!!e.watch("schedule_sale_price");return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tw.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"offer_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eq/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Offer sale price","tutor")}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tw.inputWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"sale_price",rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:e=>{if(e&&r&&Number(e)>=Number(r)){return(0,u.__)("Sale price should be less than regular price","tutor")}if(e&&r&&Number(e)<=0){return(0,u.__)("Sale price should be greater than 0","tutor")}return undefined}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{type:"number",label:(0,u.__)("Sale Price","tutor"),content:(t_===null||t_===void 0?void 0:t_.symbol)||"$",selectOnFocus:true,contentCss:W/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"schedule_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Schedule the sale price","tutor")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)(A/* ["default"] */.A,{when:n,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tw.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Sale starts from","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:W/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"sale_price_from_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ej/* ["default"] */.A,(0,o._)((0,a._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"sale_price_from_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eV/* ["default"] */.A,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tw.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Sale ends to","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:W/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"sale_price_to_date",control:e.control,rules:{required:(0,u.__)("Schedule date is required","tutor"),validate:{checkEndDate:t=>{var r=e.watch("sale_price_from_date");var n=t;if(r&&n){return new Date(r)>new Date(n)?(0,u.__)("Sales End date should be greater than start date","tutor"):undefined}return undefined}},deps:["sale_price_from_date"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.Y)(ej/* ["default"] */.A,(0,o._)((0,a._)({},t),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:e.watch("sale_price_from_date")||undefined}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"sale_price_to_time",control:e.control,rules:{required:(0,u.__)("Schedule time is required","tutor"),validate:{checkEndTime:t=>{var r=e.watch("sale_price_from_date");var n=e.watch("sale_price_from_time");var a=e.watch("sale_price_to_date");var o=t;if(r&&a&&n&&o){return new Date("".concat(r," ").concat(n))>new Date("".concat(a," ").concat(o))?(0,u.__)("Sales End time should be greater than start time","tutor"):undefined}return undefined}},deps:["sale_price_from_date","sale_price_from_time","sale_price_to_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eV/* ["default"] */.A,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})}var tw={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("background-color:",w/* .colorTokens.background.white */.I6.background.white,";padding:",w/* .spacing["12"] */.YK["12"],";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius["8"] */.Vq["8"],";display:flex;flex-direction:column;gap:",w/* .spacing["20"] */.YK["20"],";"),inputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["12"] */.YK["12"],";padding:",w/* .spacing["4"] */.YK["4"],";margin:-",w/* .spacing["4"] */.YK["4"],";"),datetimeWrapper:/*#__PURE__*/(0,s/* .css */.AH)("label{",x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.title */.I6.text.title,";}")};// CONCATENATED MODULE: ./assets/react/v3/shared/services/subscription.ts
var tx=[3,6,9,12];var tA={untilCancelled:(0,u.__)("Until cancelled","tutor"),noRenewal:(0,u.__)("No Renewal","tutor")};var tY={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",plan_order:"0",recurring_value:"1",recurring_interval:"month",is_featured:false,is_enabled:true,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,u.__)("Until cancelled","tutor"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var tk=e=>{var t=()=>{if(e.recurring_limit==="0"){return tA.untilCancelled}if(e.recurring_limit==="-1"){return tA.noRenewal}return e.recurring_limit||""};var r,n,a,o,i,l,s,c,d,u,f;return{id:e.id,payment_type:(r=e.payment_type)!==null&&r!==void 0?r:"recurring",plan_type:(n=e.plan_type)!==null&&n!==void 0?n:"course",assign_id:e.assign_id,plan_name:(a=e.plan_name)!==null&&a!==void 0?a:"",plan_order:(o=e.plan_order)!==null&&o!==void 0?o:"0",recurring_value:(i=e.recurring_value)!==null&&i!==void 0?i:"0",recurring_interval:(l=e.recurring_interval)!==null&&l!==void 0?l:"month",is_featured:!!Number(e.is_featured),is_enabled:!!Number(e.is_enabled),regular_price:(s=e.regular_price)!==null&&s!==void 0?s:"0",recurring_limit:t(),enrollment_fee:(c=e.enrollment_fee)!==null&&c!==void 0?c:"0",trial_value:(d=e.trial_value)!==null&&d!==void 0?d:"0",trial_interval:(u=e.trial_interval)!==null&&u!==void 0?u:"day",sale_price:(f=e.sale_price)!==null&&f!==void 0?f:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?(0,h["default"])((0,F/* .convertGMTtoLocalDate */.g1)(e.sale_price_from),ei/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",sale_price_from_time:e.sale_price_from?(0,h["default"])((0,F/* .convertGMTtoLocalDate */.g1)(e.sale_price_from),ei/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",sale_price_to_date:e.sale_price_to?(0,h["default"])((0,F/* .convertGMTtoLocalDate */.g1)(e.sale_price_to),ei/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",sale_price_to_time:e.sale_price_to?(0,h["default"])((0,F/* .convertGMTtoLocalDate */.g1)(e.sale_price_to),ei/* .DateFormats.hoursMinutes */.UA.hoursMinutes):""}};var tI=e=>{var t=()=>{if(e.recurring_limit===tA.untilCancelled){return"0"}if(e.recurring_limit===tA.noRenewal){return"-1"}return e.recurring_limit};return(0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.id&&String(e.id)==="0"&&{plan_order:e.plan_order},e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:t(),is_featured:e.is_featured?"1":"0",is_enabled:e.is_enabled?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:(0,F/* .convertToGMT */.dn)(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:(0,F/* .convertToGMT */.dn)(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var tD=e=>{return T/* .wpAjaxInstance.post */.b.post(H/* ["default"].GET_SUBSCRIPTIONS_LIST */.A.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var tC=e=>{return(0,S/* .useQuery */.I)({queryKey:["SubscriptionsList",e],queryFn:()=>tD(e).then(e=>e.data)})};var tS=(e,t)=>{return T/* .wpAjaxInstance.post */.b.post(H/* ["default"].SAVE_SUBSCRIPTION */.A.SAVE_SUBSCRIPTION,(0,a._)({object_id:e},t.id&&{id:t.id},t))};var tM=e=>{var t=(0,c/* .useQueryClient */.jE)();var{showToast:r}=(0,E/* .useToast */.d)();return(0,M/* .useMutation */.n)({mutationFn:t=>tS(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,F/* .convertToErrorMessage */.EL)(e)})}})};var tE=(e,t)=>{return T/* .wpAjaxInstance.post */.b.post(H/* ["default"].DELETE_SUBSCRIPTION */.A.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var tT=e=>{var t=(0,c/* .useQueryClient */.jE)();var{showToast:r}=(0,E/* .useToast */.d)();return(0,M/* .useMutation */.n)({mutationFn:t=>tE(e,t),onSuccess:(n,a)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(a))})}},onError:e=>{r({type:"danger",message:(0,F/* .convertToErrorMessage */.EL)(e)})}})};var tH=(e,t)=>{return T/* .wpAjaxInstance.post */.b.post(H/* ["default"].DUPLICATE_SUBSCRIPTION */.A.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var tF=e=>{var t=(0,c/* .useQueryClient */.jE)();var{showToast:r}=(0,E/* .useToast */.d)();return(0,M/* .useMutation */.n)({mutationFn:t=>tH(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,F/* .convertToErrorMessage */.EL)(e)})}})};var tN=(e,t)=>{return T/* .wpAjaxInstance.post */.b.post(H/* ["default"].SORT_SUBSCRIPTION */.A.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var tK=e=>{var t=(0,c/* .useQueryClient */.jE)();var{showToast:r}=(0,E/* .useToast */.d)();return(0,M/* .useMutation */.n)({mutationFn:t=>tN(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:(0,F/* .convertToErrorMessage */.EL)(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var tO=()=>{return wpAjaxInstance.get(endpoints.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var tP=()=>{return useQuery({queryKey:["MembershipPlans"],queryFn:tO})};// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionItem.tsx
var tW=250;// this is hack to fix layout shifting while animating.
var{tutor_currency:tL}=eo/* .tutorConfig */.P;function tR(){var e=(0,v/* .useFormContext */.xW)();(0,f.useEffect)(()=>{var t=setTimeout(()=>{e.setFocus("plan_name")},tW);return()=>{clearTimeout(t)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var t=e.watch("charge_enrollment_fee");// @TODO: Will be added after confirmation
// const enableTrial = form.watch(`subscriptions.${index}.enable_free_trial` as `subscriptions.0.enable_free_trial`);
var r=Object.values(tA);var n=[...tx.map(e=>({/* translators: %s: number of times. */label:(0,u.sprintf)((0,u.__)("%s times","tutor"),e.toString()),value:String(e)})),...r.map(e=>({label:e,value:e}))];return/*#__PURE__*/(0,l/* .jsx */.Y)("form",{css:tB.subscription,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:W/* .styleUtils.display.flex */.x.display.flex("column"),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tB.subscriptionContent,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"plan_name",rules:(0,eQ/* .requiredRule */.WN)(),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{placeholder:(0,u.__)("Enter plan name","tutor"),label:(0,u.__)("Plan Name","tutor")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tB.inputGroup,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"regular_price",rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Price must be greater than 0","tutor")}}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Price","tutor"),content:(tL===null||tL===void 0?void 0:tL.symbol)||"$",placeholder:(0,u.__)("Plan price","tutor"),selectOnFocus:true,contentCss:W/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"recurring_value",rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<1){return(0,u.__)("This value must be equal to or greater than 1","tutor")}}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Billing Interval","tutor"),placeholder:(0,u.__)("12","tutor"),selectOnFocus:true,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"recurring_interval",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(en/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:" "}),options:[{label:(0,u.__)("Day(s)","tutor"),value:"day"},{label:(0,u.__)("Week(s)","tutor"),value:"week"},{label:(0,u.__)("Month(s)","tutor"),value:"month"},{label:(0,u.__)("Year(s)","tutor"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"recurring_limit",rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:e=>{if(r.includes(e)){return true}if(Number(e)<=0){return(0,u.__)("Renew plan must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(tm,(0,o._)((0,a._)({},e),{label:(0,u.__)("Billing Cycles","tutor"),placeholder:(0,u.__)("Select or type times to renewing the plan","tutor"),content:!r.includes(e.field.value)&&(0,u.__)("Times","tutor"),contentPosition:"right",type:"number",presetOptions:n,selectOnFocus:true}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"charge_enrollment_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Charge enrollment fee","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"enrollment_fee",rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Enrollment fee must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Enrollment fee","tutor"),content:(tL===null||tL===void 0?void 0:tL.symbol)||"$",placeholder:(0,u.__)("Enter enrollment fee","tutor"),selectOnFocus:true,contentCss:W/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"do_not_provide_certificate",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Do not provide certificate","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{control:e.control,name:"is_featured",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Mark as featured","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(ty,{})]})})})}var tB={trialWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:",w/* .spacing["8"] */.YK["8"],";"),subscription:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius.card */.Vq.card,";overflow:hidden;transition:border-color 0.3s ease;"),subscriptionContent:/*#__PURE__*/(0,s/* .css */.AH)("padding:",w/* .spacing["16"] */.YK["16"],";display:flex;flex-direction:column;gap:",w/* .spacing["12"] */.YK["12"],";"),inputGroup:/*#__PURE__*/(0,s/* .css */.AH)("display:grid;grid-template-columns:1fr 0.7fr 1fr 1fr;align-items:start;gap:",w/* .spacing["8"] */.YK["8"],";",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr;}")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/SubscriptionModal.tsx
function tz(e){var{courseId:t,isBundle:r=false,icon:i,closeModal:s,subscription:c}=e;var d=(0,I/* .useFormWithGlobalError */.p)({defaultValues:c||tY,mode:"onChange"});var f=tM(t);var p=d.formState.isDirty;var h=c.isSaved;var m=e=>(0,n._)(function*(){var n=tI((0,o._)((0,a._)({},e),{id:e.isSaved?e.id:"0",assign_id:String(t),plan_type:r?"bundle":"course"}));var i=yield f.mutateAsync(n);if(i.status_code===200||i.status_code===201){s({action:"CONFIRM"})}})();return/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .FormProvider */.Op,(0,o._)((0,a._)({},d),{children:/*#__PURE__*/(0,l/* .jsx */.Y)(tn/* ["default"] */.A,{onClose:()=>s({action:"CLOSE"}),icon:p?/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"warning",width:24,height:24}):i,title:p?ei/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?(0,u.__)("Unsaved Changes","tutor"):"":(0,u.__)("Subscription Plan","tutor"),subtitle:c.isSaved?(0,u.__)("Update plan","tutor"):(0,u.__)("Create plan","tutor"),maxWidth:1218,actions:p&&/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>h?d.reset():s({action:"CLOSE"}),children:h?(0,u.__)("Discard Changes","tutor"):(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{"data-cy":"save-subscription",loading:f.isPending,variant:"primary",size:"small",onClick:d.handleSubmit(m),children:h?(0,u.__)("Update","tutor"):(0,u.__)("Save","tutor")})]}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tU.wrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tU.container,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tU.content,children:/*#__PURE__*/(0,l/* .jsx */.Y)(tR,{},c.id)})})})})}))}var tU={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;height:100%;"),container:/*#__PURE__*/(0,s/* .css */.AH)("max-width:640px;width:100%;padding-block:",w/* .spacing["40"] */.YK["40"],";margin-inline:auto;display:flex;flex-direction:column;gap:",w/* .spacing["32"] */.YK["32"],";",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-block:",w/* .spacing["24"] */.YK["24"],";padding-inline:",w/* .spacing["8"] */.YK["8"],";}"),content:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["16"] */.YK["16"],";")};// EXTERNAL MODULE: ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var tj=r(74979);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Switch.tsx
var tq=r(89266);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/TutorBadge.tsx
var tV={default:{background:w/* .colorTokens.background.status.drip */.I6.background.status.drip,foreground:w/* .colorTokens.text.status.primary */.I6.text.status.primary,border:w/* .colorTokens.stroke.neutral */.I6.stroke.neutral},secondary:{background:w/* .colorTokens.background.status.cancelled */.I6.background.status.cancelled,foreground:w/* .colorTokens.text.status.cancelled */.I6.text.status.cancelled,border:w/* .colorTokens.stroke.status.cancelled */.I6.stroke.status.cancelled},critical:{background:w/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,foreground:w/* .colorTokens.text.status.failed */.I6.text.status.failed,border:w/* .colorTokens.stroke.status.fail */.I6.stroke.status.fail},warning:{background:w/* .colorTokens.background.status.warning */.I6.background.status.warning,foreground:w/* .colorTokens.text.status.pending */.I6.text.status.pending,border:w/* .colorTokens.stroke.status.warning */.I6.stroke.status.warning},success:{background:w/* .colorTokens.background.status.success */.I6.background.status.success,foreground:w/* .colorTokens.text.status.completed */.I6.text.status.completed,border:w/* .colorTokens.stroke.status.success */.I6.stroke.status.success},outline:{background:w/* .colorTokens.background.white */.I6.background.white,foreground:w/* .colorTokens.text.status.cancelled */.I6.text.status.cancelled,border:w/* .colorTokens.stroke.status.cancelled */.I6.stroke.status.cancelled}};var tG=/*#__PURE__*/p().forwardRef((e,t)=>{var{className:r,children:n,variant:a="default"}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:t,className:r,css:tQ.badge(a),children:n})});tG.displayName="TutorBadge";var tQ={badge:e=>/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.small */.I.small("medium"),";display:inline-flex;align-items:center;border-radius:",w/* .borderRadius["30"] */.Vq["30"],";padding:",w/* .spacing["4"] */.YK["4"]," ",w/* .spacing["8"] */.YK["8"],";max-height:24px;",W/* .styleUtils.textEllipsis */.x.textEllipsis,";border:1px solid ",tV[e].border,";background-color:",tV[e].background,";color:",tV[e].foreground,";")};// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/ThreeDots.tsx
var tX=r(34469);// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/ConfirmationModal.tsx
var tZ=r(3013);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/dndkit.ts
var t$=r(29245);// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/PreviewItem.tsx
function tJ(){var e=(0,i._)(["\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        min-width: 0;\n      "]);tJ=function t(){return e};return e}function t0(){var e=(0,i._)(["\n          overflow: unset;\n          text-overflow: unset;\n          animation: marquee-slide ","s ease-out forwards;\n          will-change: transform;\n\n          @keyframes marquee-slide {\n            0% {\n              transform: translateX(0);\n            }\n            100% {\n              transform: translateX(-","px);\n            }\n          }\n        "]);t0=function t(){return e};return e}function t1(){var e=(0,i._)(["\n      border-radius: ",";\n      box-shadow: ",";\n\n      [data-grabber] {\n        cursor: grabbing;\n      }\n    "]);t1=function t(){return e};return e}function t4(){var e=(0,i._)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100%;\n      min-width: 0;\n    "]);t4=function t(){return e};return e}var t2=60;var t6=(e,t)=>{switch(e){case"hour":return t>1?(0,u.__)("Hours","tutor"):(0,u.__)("Hour","tutor");case"day":return t>1?(0,u.__)("Days","tutor"):(0,u.__)("Day","tutor");case"week":return t>1?(0,u.__)("Weeks","tutor"):(0,u.__)("Week","tutor");case"month":return t>1?(0,u.__)("Months","tutor"):(0,u.__)("Month","tutor");case"year":return t>1?(0,u.__)("Years","tutor"):(0,u.__)("Year","tutor");case"until_cancellation":return(0,u.__)("Until Cancellation","tutor")}};var t5=e=>{var{subscription:t,courseId:r,isBundle:i,isOverlay:s}=e;var c;var[d,p]=(0,f.useState)(false);var[v,h]=(0,f.useState)(0);var[m,b]=(0,f.useState)(0);var{showModal:_,updateModal:x,closeModal:Y}=(0,tr/* .useModal */.h)();var k=tM(r);var I=tT(r);var D=tF(r);var C=(0,f.useRef)(null);var S=(0,f.useRef)(null);var{attributes:M,listeners:E,setNodeRef:T,transform:H,transition:F,isDragging:N}=(0,te/* .useSortable */.gl)({id:t.id||"",animateLayoutChanges:t$/* .animateLayoutChanges */.J});var K={transform:tj/* .CSS.Transform.toString */.Ks.Transform.toString(H),transition:F,opacity:N?.3:undefined,background:N?w/* .colorTokens.stroke.hover */.I6.stroke.hover:undefined};var O=(0,f.useMemo)(()=>{var e="".concat(t.recurring_limit.toString().padStart(2,"0")," ").concat((0,u.__)("Billing Cycles","tutor"));if(t.recurring_limit===tA.untilCancelled){e=(0,u.__)("Until Cancellation","tutor")}if(t.recurring_limit===tA.noRenewal){e=(0,u.__)("No Renewal","tutor")}return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:"•"}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e})]})},[t.recurring_limit]);var P=(0,f.useMemo)(()=>/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:t.payment_type==="recurring",fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:(0,u.__)("Lifetime","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:t.recurring_limit!==tA.noRenewal,fallback:"".concat(t.recurring_value.toString().padStart(2,"0")," ").concat(t6(t.recurring_interval,Number(t.recurring_value))),children:(0,u.sprintf)((0,u.__)("Renew every %1$s %2$s","tutor"),t.recurring_value.toString().padStart(2,"0"),t6(t.recurring_interval,Number(t.recurring_value)))})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:t.payment_type!=="onetime",children:O})]}),[t.payment_type,t.recurring_limit,t.recurring_interval,t.recurring_value,O]);var W=(0,f.useCallback)(e=>{var r=tI(t);k.mutate((0,o._)((0,a._)({},r),{is_enabled:e?"1":"0"}))},[t,k]);var L=(0,f.useCallback)(()=>{var e=(0,o._)((0,a._)({},t),{isSaved:true});_({component:tz,props:{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),subscription:e,courseId:r,isBundle:i}});p(false)},[t,_,r,i]);var R=(0,f.useCallback)(()=>(0,n._)(function*(){x("subscription-delete-modal",{isLoading:true});var e=yield I.mutateAsync(Number(t.id));if(e.status_code===200){Y()}})(),[x,I,t.id,Y]);var B=(0,f.useCallback)(()=>(0,n._)(function*(){var e=yield D.mutateAsync(Number(t.id));if(e.data){p(false)}})(),[D,t.id]);var z=(0,f.useCallback)(e=>{if(e.key==="Enter"||e.key===" "){L()}},[L]);var U=(0,f.useCallback)(()=>{p(false);_({id:"subscription-delete-modal",component:tZ/* ["default"] */.A,props:{title:(0,u.sprintf)((0,u.__)('Delete "%s"',"tutor"),t.plan_name),description:(0,u.__)("Are you sure you want to delete this plan? This cannot be undone.","tutor"),onConfirm:R,confirmButtonVariant:"danger"}})},[_,t.plan_name,R]);(0,f.useEffect)(()=>{var e=C.current;var t=S.current;if(!e||!t){return}var r=t.scrollWidth>e.clientWidth;if(r){var n=t.scrollWidth-e.clientWidth;b(n);h(n/t2)}},[t.plan_name,t.payment_type,t.recurring_value,t.recurring_interval,t.recurring_limit]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{"data-cy":"subscription-preview-item",css:t3.wrapper({isActionButtonVisible:d||k.isPending,isOverlay:s,marqueeDuration:v,marqueeDistance:m}),style:K,ref:T,"aria-label":(0,u.__)("Subscription plan item","tutor"),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,(0,o._)((0,a._)({},E,M),{"data-grabber":true,name:"threeDotsVerticalDouble",width:20,height:20})),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t3.item,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t3.header,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("p",{css:t3.title,onClick:L,onKeyDown:z,tabIndex:0,"aria-label":(0,u.__)("Edit subscription plan","tutor"),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{"data-plan-name":true,title:t.plan_name,children:t.plan_name}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:t.is_featured,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{style:t3.featuredIcon,name:"star",height:20,width:20})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!t.is_enabled,children:/*#__PURE__*/(0,l/* .jsx */.Y)(tG,{css:t3.badge,variant:"secondary",title:(0,u.__)("Inactive","tutor"),children:(0,u.__)("Inactive","tutor")})})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t3.actionButtons,"data-action-buttons":true,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(tq/* ["default"] */.A,{checked:t.is_enabled,onChange:W,loading:k.isPending,size:"small"}),/*#__PURE__*/(0,l/* .jsxs */.FD)(tX/* ["default"] */.A,{isOpen:d,closePopover:()=>p(false),onClick:()=>p(!d),dotsOrientation:"vertical",size:"small",arrow:true,"data-three-dot":true,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(tX/* ["default"].Option */.A.Option,{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"edit",width:16,height:16}),text:(0,u.__)("Edit","tutor"),"data-cy":"edit-subscription",onClick:L}),/*#__PURE__*/(0,l/* .jsx */.Y)(tX/* ["default"].Option */.A.Option,{icon:D.isPending?/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.Ay,{size:16}):/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"duplicate",width:16,height:16}),text:(0,u.__)("Duplicate","tutor"),onClick:B}),/*#__PURE__*/(0,l/* .jsx */.Y)(tX/* ["default"].Option */.A.Option,{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"delete",width:16,height:16}),text:(0,u.__)("Delete","tutor"),isTrash:true,onClick:U})]})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:t3.information,ref:C,"aria-label":(0,u.__)("Subscription plan details","tutor"),title:(c=C.current)===null||c===void 0?void 0:c.textContent,children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:t3.marqueeSlide,ref:S,"data-marquee-content":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:P})})})]})]})};var t3={wrapper:e=>{var{isActionButtonVisible:t=false,isOverlay:r=false,marqueeDuration:n=0,marqueeDistance:a=0}=e;return/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex(),";gap:",w/* .spacing["4"] */.YK["4"],";background-color:",w/* .colorTokens.background.white */.I6.background.white,";padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["12"] */.YK["12"]," ",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["4"] */.YK["4"],";min-width:0;[data-grabber]{align-self:flex-start;margin-top:",w/* .spacing["2"] */.YK["2"],";color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;cursor:grab;&:focus-visible{border-radius:",w/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",w/* .colorTokens.stroke.brand */.I6.stroke.brand,";}}[data-three-dot]{height:20px;width:20px;svg{height:24px;width:24px;flex-shrink:0;}}[data-action-buttons]{opacity:",t?1:0,";background-color:inherit;}[data-marquee-content]{",a>0&&(0,s/* .css */.AH)(tJ()),"}&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";[data-action-buttons]{opacity:1;}[data-marquee-content]{",a>0&&(0,s/* .css */.AH)(t0(),n,a),"}}&:not(:last-of-type){border-bottom:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";}&:focus-within{[data-action-buttons]{opacity:1;}}",r&&(0,s/* .css */.AH)(t1(),w/* .borderRadius.card */.Vq.card,w/* .shadow.drag */.r7.drag))},item:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;min-height:48px;",W/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;gap:",w/* .spacing["4"] */.YK["4"],";min-width:0;"),header:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;gap:",w/* .spacing["8"] */.YK["8"],";min-width:0;"),title:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption("medium"),";color:",w/* .colorTokens.text.primary */.I6.text.primary,";display:flex;align-items:center;cursor:pointer;[data-plan-name]{",W/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";}&:focus-visible{border-radius:",w/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",w/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),information:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;max-width:100%;min-width:0;",x/* .typography.small */.I.small(),";color:",w/* .colorTokens.text.hints */.I6.text.hints,";display:flex;align-items:center;flex-grow:1;overflow:hidden;position:relative;white-space:nowrap;"),marqueeContent:e=>{var{shouldEllipsis:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",w/* .spacing["4"] */.YK["4"],";white-space:nowrap;&:last-child{margin-right:0;}}",t&&(0,s/* .css */.AH)(t4()))},marqueeSlide:/*#__PURE__*/(0,s/* .css */.AH)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",w/* .spacing["4"] */.YK["4"],";white-space:nowrap;&:last-child{margin-right:0;}}"),featuredIcon:/*#__PURE__*/(0,s/* .css */.AH)("flex-shrink:0;color:",w/* .colorTokens.icon.brand */.I6.icon.brand,";"),actionButtons:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex(),";height:100%;align-items:center;gap:",w/* .spacing["8"] */.YK["8"],";"),badge:/*#__PURE__*/(0,s/* .css */.AH)("flex-shrink:0;margin-left:",w/* .spacing["8"] */.YK["8"],";font-size:",w/* .fontSize["11"] */.J["11"],";padding:0 ",w/* .spacing["6"] */.YK["6"],";")};// EXTERNAL MODULE: ./assets/react/v3/shared/controls/For.tsx
var t7=r(8501);// CONCATENATED MODULE: ./assets/react/v3/shared/components/subscription/SubscriptionPreview.tsx
function t8(){var e=(0,i._)(["\n      border: none;\n    "]);t8=function t(){return e};return e}var t9=e=>{var{courseId:t,isBundle:r=false}=e;var i=tC(t);var s=tK(t);var{showModal:c}=(0,tr/* .useModal */.h)();var[d,p]=(0,f.useState)(null);var h=(0,e8/* .useSensors */.FR)((0,e8/* .useSensor */.MS)(e8/* .PointerSensor */.AN,{activationConstraint:{distance:10}}),(0,e8/* .useSensor */.MS)(e8/* .KeyboardSensor */.uN,{coordinateGetter:te/* .sortableKeyboardCoordinates */.JR}));var m=(0,I/* .useFormWithGlobalError */.p)({defaultValues:{subscriptions:[]},mode:"onChange"});var{move:_,fields:w}=(0,v/* .useFieldArray */.jz)({control:m.control,name:"subscriptions",keyName:"_id"});var x=i.data;(0,f.useEffect)(()=>{if(!x){return}if(w.length===0){return m.reset({subscriptions:x.map(e=>(0,o._)((0,a._)({},tk(e)),{isSaved:true}))})}var e=x.map(e=>{var t=w.find(t=>t.id===e.id);if(t){return(0,a._)({},t,(0,o._)((0,a._)({},tk(e)),{isSaved:true}))}return(0,o._)((0,a._)({},tk(e)),{isSaved:true})});m.reset({subscriptions:e});// eslint-disable-next-line react-hooks/exhaustive-deps
},[x,i.isLoading]);if(i.isLoading){return/*#__PURE__*/(0,l/* .jsx */.Y)(y/* .LoadingSection */.YE,{})}if(!i.data){return null}return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rt.outer,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:w.length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rt.header,children:(0,u.__)("Subscriptions","tutor")})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rt.inner({hasSubscriptions:w.length>0}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)(e8/* .DndContext */.Mp,{sensors:h,collisionDetection:e8/* .closestCenter */.fp,measuring:t$/* .droppableMeasuringStrategy */.s,modifiers:[e9/* .restrictToWindowEdges */.Q_],onDragStart:e=>{p(e.active.id)},onDragEnd:e=>(0,n._)(function*(){var{active:t,over:r}=e;if(!r){p(null);return}if(t.id!==r.id){var n=w.findIndex(e=>e.id===t.id);var a=w.findIndex(e=>e.id===r.id);var o=(0,F/* .moveTo */.tw)(w,n,a);_(n,a);s.mutateAsync(o.map(e=>Number(e.id)))}p(null)})(),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(te/* .SortableContext */.gB,{items:w,strategy:te/* .verticalListSortingStrategy */._G,children:/*#__PURE__*/(0,l/* .jsx */.Y)(t7/* ["default"] */.A,{each:w,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(t5,{subscription:e,courseId:t,isBundle:r},e.id)})}),/*#__PURE__*/(0,tt.createPortal)(/*#__PURE__*/(0,l/* .jsx */.Y)(e8/* .DragOverlay */.Hd,{children:/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:d,children:e=>{var n=w.find(t=>t.id===e);if(!n){return null}return/*#__PURE__*/(0,l/* .jsx */.Y)(t5,{subscription:n,courseId:t,isBundle:r,isOverlay:true},e)}})}),document.body)]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rt.emptyState({hasSubscriptions:w.length>0}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{"data-cy":"add-subscription",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),onClick:()=>{c({component:tz,props:{title:(0,u.__)("Manage Subscription Plans","tutor"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),subscription:(0,o._)((0,a._)({},tY),{plan_order:String(w.length+1),isSaved:false}),courseId:t,isBundle:r}})},children:(0,u.__)("Add Subscription","tutor")})})]})]})};/* export default */const re=t9;var rt={outer:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;flex-direction:column;gap:",w/* .spacing["8"] */.YK["8"],";"),inner:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("background:",w/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius.card */.Vq.card,";width:100%;overflow:hidden;",!t&&(0,s/* .css */.AH)(t8()))},header:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;",x/* .typography.body */.I.body(),";color:",w/* .colorTokens.text.title */.I6.text.title,";"),emptyState:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("padding:",t?"".concat(w/* .spacing["8"] */.YK["8"]," ").concat(w/* .spacing["12"] */.YK["12"]):0,";width:100%;& > button{width:100%;}")}};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/config/route-configs.ts + 1 modules
var rr=r(45748);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/services/course.ts
var rn=r(85398);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/types.ts
var ra=r(51298);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CoursePricing.tsx
var ro=(0,eG/* .getCourseId */.p)();var ri=()=>{var e,t,r,n;var i=(0,v/* .useFormContext */.xW)();var s=(0,c/* .useQueryClient */.jE)();var p=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",ro]});var h=(0,e5/* .useNavigate */.Zp)();var{state:g}=(0,e5/* .useLocation */.zy)();var m=(0,v/* .useWatch */.FH)({control:i.control,name:"course_price_type"});var b=(0,v/* .useWatch */.FH)({control:i.control,name:"course_product_id"});var _=(0,v/* .useWatch */.FH)({control:i.control,name:"course_selling_option"});var y=(0,v/* .useWatch */.FH)({control:i.control,name:"is_public_course"});var w=s.getQueryData(["CourseDetails",ro]);var{tutor_currency:x}=eo/* .tutorConfig */.P;var Y=!!eo/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var k=!!((e=eo/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.enable_tax);var I=!!((t=eo/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enable_individual_tax_control);var D=!!((r=eo/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.is_tax_included_in_price);var C=(n=eo/* .tutorConfig.settings */.P.settings)===null||n===void 0?void 0:n.monetize_by;// prettier-ignore
var S=(0,u.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor");var M=["wc","tutor","edd"].includes(C||"")?[{label:(0,u.__)("Free","tutor"),value:"free"},{label:(0,u.__)("Paid","tutor"),value:"paid"}]:[{label:(0,u.__)("Free","tutor"),value:"free"}];var E=[{label:(0,u.__)("One-time purchase only","tutor"),value:"one_time"},{label:(0,u.__)("Subscription only","tutor"),value:"subscription"},{label:(0,u.__)("Subscription & one-time purchase","tutor"),value:"both"},{label:(0,u.__)("Membership only","tutor"),value:"membership"},{label:(0,u.__)("All","tutor"),value:"all"}];var T=(0,rn/* .useGetWcProductsQuery */.Wn)(C,ro?String(ro):"");var H=(0,rn/* .useWcProductDetailsQuery */.b8)(b,String(ro),m,Y?C:undefined);var N=e=>{if(!e||!e.length){return[]}var{course_pricing:t}=w||{};var r=(t===null||t===void 0?void 0:t.product_id)&&t.product_id!=="0"&&t.product_name?{label:t.product_name||"",value:String(t.product_id)}:null;var n;var a=(n=e.map(e=>{var{post_title:t,ID:r}=e;return{label:t,value:String(r)}}))!==null&&n!==void 0?n:[];var o=[r,...a].filter(ra/* .isDefined */.O9);var i=Array.from(new Map(o.map(e=>[e.value,e])).values());return i};(0,f.useEffect)(()=>{if(T.isSuccess&&T.data){var{course_pricing:e}=w||{};if(C==="wc"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!N(T.data).find(t=>{var{value:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[T.data]);(0,f.useEffect)(()=>{if(!eo/* .tutorConfig.edd_products */.P.edd_products||!eo/* .tutorConfig.edd_products.length */.P.edd_products.length){return}var{course_pricing:e}=w||{};if(C==="edd"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!eo/* .tutorConfig.edd_products.find */.P.edd_products.find(t=>{var{ID:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[eo/* .tutorConfig.edd_products */.P.edd_products]);(0,f.useEffect)(()=>{if(C!=="wc"){return}if(H.isSuccess&&H.data){if(g===null||g===void 0?void 0:g.isError){h(rr/* .CourseBuilderRouteConfigs.CourseBasics.buildLink */.P.CourseBasics.buildLink(),{state:{isError:false}});return}i.setValue("course_price",H.data.regular_price||"0",{shouldValidate:true});i.setValue("course_sale_price",H.data.sale_price||"0",{shouldValidate:true});return}var e=i.formState.dirtyFields.course_price;var t=i.formState.dirtyFields.course_sale_price;if(!e){i.setValue("course_price","0")}if(!t){i.setValue("course_sale_price","0")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[H.data]);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_price_type",control:i.control,rules:{validate:e=>{if(e==="paid"&&y){return(0,u.__)("Public courses cannot be paid.","tutor")}return true},deps:["is_public_course"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e7/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Pricing Model","tutor"),options:M,wrapperCss:rs.priceRadioGroup,onSelect:e=>{if(e.value==="paid"&&y){i.setError("course_price_type",{type:"validate",message:(0,u.__)("Public courses cannot be paid.","tutor")});i.setValue("course_price_type","free")}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&C==="tutor"&&m==="paid",children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_selling_option",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(en/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Purchase Options","tutor"),options:E}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:m==="paid"&&C==="wc",children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_product_id",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(en/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Select product","tutor"),placeholder:(0,u.__)("Select a product","tutor"),options:[{label:(0,u.__)("Select a product","tutor"),value:"-1"},...N(T.data)],helpText:Y?(0,u.__)("You can select an existing WooCommerce product, alternatively, a new WooCommerce product will be created for you.","tutor"):(0,u.__)("You can select an existing WooCommerce product.","tutor"),isSearchable:true,loading:T.isLoading&&!e.field.value,isClearable:true}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:m==="paid"&&C==="edd",children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_product_id",control:i.control,rules:(0,a._)({},(0,eQ/* .requiredRule */.WN)()),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(en/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Select product","tutor"),placeholder:(0,u.__)("Select a product","tutor"),options:eo/* .tutorConfig.edd_products */.P.edd_products?eo/* .tutorConfig.edd_products.map */.P.edd_products.map(e=>({label:e.post_title,value:String(e.ID)})):[],helpText:(0,u.__)("Sell your product, process by EDD","tutor"),isSearchable:true,loading:!!p&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:m==="paid"&&!["subscription","membership"].includes(_)&&(C==="tutor"||Y&&C==="wc"&&b!=="-1"),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rs.coursePriceWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_price",control:i.control,rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Price must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Regular Price","tutor"),content:(x===null||x===void 0?void 0:x.symbol)||"$",placeholder:(0,u.__)("0","tutor"),type:"number",loading:!!p&&!e.field.value,selectOnFocus:true,contentCss:W/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_sale_price",control:i.control,rules:{validate:e=>{if(!e){return true}var t=i.getValues("course_price");if(Number(e)>=Number(t)){return(0,u.__)("Sale price must be less than regular price","tutor")}return true}},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Sale Price","tutor"),content:(x===null||x===void 0?void 0:x.symbol)||"$",placeholder:(0,u.__)("0","tutor"),type:"number",loading:!!p&&!e.field.value,selectOnFocus:true,contentCss:W/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&C==="tutor"&&m==="paid",children:/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!["one_time","membership"].includes(_),children:/*#__PURE__*/(0,l/* .jsx */.Y)(re,{courseId:ro})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:m==="paid"&&C==="tutor"&&k&&I&&_!=="membership",children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rs.taxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Tax Collection","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rs.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:["one_time","both","all"].includes(_),children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"tax_on_single",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Charge tax on one-time purchase ","tutor"),helpText:D&&!e.field.value?S:""}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&["subscription","both","all"].includes(_),children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"tax_on_subscription",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Charge tax on subscription","tutor"),helpText:D&&!e.field.value?S:""}))})})]})]})})]})};/* export default */const rl=(0,Y/* .withVisibilityControl */.M)(ri);var rs={priceRadioGroup:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",w/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:flex-start;gap:",w/* .spacing["16"] */.YK["16"],";"),taxWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",w/* .spacing["4"] */.YK["4"],";label{",x/* .typography.body */.I.body(),"      color:",w/* .colorTokens.text.title */.I6.text.title,";}"),checkboxWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",w/* .spacing["4"] */.YK["4"],";"),taxAlert:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",w/* .spacing["8"] */.YK["8"],";margin-top:",w/* .spacing["8"] */.YK["8"],";padding:",w/* .spacing["12"] */.YK["12"],";background-color:",w/* .colorTokens.color.warning["40"] */.I6.color.warning["40"],";border:1px solid ",w/* .colorTokens.color.warning["50"] */.I6.color.warning["50"],";border-radius:",w/* .borderRadius["6"] */.Vq["6"],";"),alertTitle:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex(),"    gap:",w/* .spacing["4"] */.YK["4"],";align-items:center;",x/* .typography.caption */.I.caption("medium"),";color:",w/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";svg{color:",w/* .colorTokens.design.warning */.I6.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),"    color:",w/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CourseBasicSidebar.tsx
var rc=(0,eG/* .getCourseId */.p)();var rd=()=>{var e,t,r,n;var i=(0,v/* .useFormContext */.xW)();var s=(0,c/* .useQueryClient */.jE)();var p=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",rc]});var[m,b]=(0,f.useState)("");var _=s.getQueryData(["CourseDetails",rc]);var y=eo/* .tutorConfig.current_user */.P.current_user;var w=(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.TUTOR_MULTI_INSTRUCTORS */.oW.TUTOR_MULTI_INSTRUCTORS);var x=!!eo/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var Y=((e=eo/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var k=((t=eo/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.instructor_can_change_course_author)!=="off";var I=((r=eo/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.instructor_can_manage_co_instructors)!=="off";var D=String(y.data.id)===String((_===null||_===void 0?void 0:_.post_author.ID)||"");var C=y.roles.includes(ei/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var S=((_===null||_===void 0?void 0:_.course_instructors)||[]).find(e=>String(e.id)===String(y.data.id));var M=(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((n=eo/* .tutorConfig.settings */.P.settings)===null||n===void 0?void 0:n.membership_only_mode);var E=i.watch("post_author");var T=x&&w&&(C||S&&I);var H=C||D&&k;var N=(0,v/* .useWatch */.FH)({control:i.control,name:"visibility"});var K=[{label:(0,u.__)("Public","tutor"),value:"publish"},{label:(0,u.__)("Password Protected","tutor"),value:"password_protected"},{label:(0,u.__)("Private","tutor"),value:"private"}];var O=e4(m);var P=e6(String(rc),w);var W=((_===null||_===void 0?void 0:_.course_instructors)||[]).map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}));var L=[...W,...P.data||[]].filter(e=>String(e.id)!==String(E===null||E===void 0?void 0:E.id));var B=()=>{var e=_===null||_===void 0?void 0:_.post_author;var t=i.getValues("course_instructors");var r=!!t.find(t=>String(t.id)===String(e===null||e===void 0?void 0:e.ID));var n={id:Number(e===null||e===void 0?void 0:e.ID),name:e===null||e===void 0?void 0:e.display_name,email:e.user_email,avatar_url:e===null||e===void 0?void 0:e.tutor_profile_photo_url,isRemoveAble:String(e===null||e===void 0?void 0:e.ID)!==String(y.data.id)};var a=r?t:[...t,n];i.setValue("course_instructors",a)};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rf.sidebar,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rf.statusAndDate,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"visibility",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(en/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Visibility","tutor"),placeholder:(0,u.__)("Select visibility status","tutor"),options:K,leftIcon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"eye",width:32,height:32}),loading:!!p&&!e.field.value,onChange:()=>{i.setValue("post_password","")}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:_===null||_===void 0?void 0:_.post_modified,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rf.updatedOn,children:/* translators: %s is the last updated date */(0,u.sprintf)((0,u.__)("Last updated on %s","tutor"),(0,h["default"])(new Date(e),ei/* .DateFormats.dayMonthYear */.UA.dayMonthYear)||"")})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:N==="password_protected",children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"post_password",control:i.control,rules:{required:(0,u.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Password","tutor"),placeholder:(0,u.__)("Enter password","tutor"),type:"password",isPassword:true,loading:!!p&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(eJ,{visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS */.qP.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"thumbnail",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(er/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Featured Image","tutor"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:(0,u.sprintf)((0,u.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),(0,F/* .formatBytes */.z3)(Number((eo/* .tutorConfig */.P===null||eo/* .tutorConfig */.P===void 0?void 0:eo/* .tutorConfig.max_upload_size */.P.max_upload_size)||0))),generateWithAi:!x||Y,loading:!!p&&!e.field.value,visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.FEATURED_IMAGE */.qP.COURSE_BUILDER.BASICS.FEATURED_IMAGE}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"video",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eS/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Intro Video","tutor"),buttonText:(0,u.__)("Upload Video","tutor"),infoText:(0,u.sprintf)((0,u.__)("MP4, and WebM formats, up to %s","tutor"),(0,F/* .formatBytes */.z3)(Number((eo/* .tutorConfig */.P===null||eo/* .tutorConfig */.P===void 0?void 0:eo/* .tutorConfig.max_upload_size */.P.max_upload_size)||0))),loading:!!p&&!e.field.value,visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INTRO_VIDEO */.qP.COURSE_BUILDER.BASICS.INTRO_VIDEO}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!M,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rl,{visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.PRICING_OPTIONS */.qP.COURSE_BUILDER.BASICS.PRICING_OPTIONS})}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_categories",control:i.control,defaultValue:[],render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)($,(0,o._)((0,a._)({},e),{label:(0,u.__)("Categories","tutor"),visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.CATEGORIES */.qP.COURSE_BUILDER.BASICS.CATEGORIES}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_tags",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eD,(0,o._)((0,a._)({},e),{label:(0,u.__)("Tags","tutor"),placeholder:(0,u.__)("Add tags","tutor"),visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.TAGS */.qP.COURSE_BUILDER.BASICS.TAGS}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"post_author",control:i.control,render:e=>{var t;var r;return/*#__PURE__*/(0,l/* .jsx */.Y)(ev,(0,o._)((0,a._)({},e),{label:(0,u.__)("Author","tutor"),options:(r=(t=O.data)===null||t===void 0?void 0:t.map(e=>({id:e.id,name:e.name||"",email:e.email||"",avatar_url:e.avatar_url||""})))!==null&&r!==void 0?r:[],placeholder:(0,u.__)("Search to add author","tutor"),isSearchable:true,disabled:!H,loading:O.isLoading,onChange:B,handleSearchOnChange:e=>{b(e)},visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.AUTHOR */.qP.COURSE_BUILDER.BASICS.AUTHOR}))}}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:T,children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_instructors",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ev,(0,o._)((0,a._)({},e),{label:(0,u.__)("Instructors","tutor"),options:L,placeholder:(0,u.__)("Search to add instructor","tutor"),isSearchable:true,isMultiSelect:true,loading:P.isLoading&&!e.field.value,emptyStateText:(0,u.__)("No instructors added.","tutor"),isInstructorMode:true,visibilityKey:ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INSTRUCTORS */.qP.COURSE_BUILDER.BASICS.INSTRUCTORS,postAuthor:_===null||_===void 0?void 0:_.post_author}))})})]})};/* export default */const ru=rd;var rf={sidebar:/*#__PURE__*/(0,s/* .css */.AH)("border-left:1px solid ",w/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - ",w/* .headerHeight */.$A,"px);padding-left:",w/* .spacing["32"] */.YK["32"],";padding-block:",w/* .spacing["24"] */.YK["24"],";display:flex;flex-direction:column;gap:",w/* .spacing["16"] */.YK["16"],";",w/* .Breakpoint.smallTablet */.EA.smallTablet,"{border-left:none;border-top:1px solid ",w/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding-block:",w/* .spacing["16"] */.YK["16"],";padding-left:0;}"),statusAndDate:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",w/* .spacing["4"] */.YK["4"],";"),updatedOn:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.hints */.I6.text.hints,";"),priceRadioGroup:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",w/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:flex-start;gap:",w/* .spacing["16"] */.YK["16"],";")};// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Tabs.tsx
var rp=r(28109);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormMultiSelectInput.tsx
function rv(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);rv=function t(){return e};return e}var rh=e=>{var{field:t,fieldState:r,label:n,placeholder:i="",disabled:s,readOnly:c,loading:d,helpText:p,removeOptionsMinWidth:v=false,options:h}=e;var g=t.value||[];var m=h.filter(e=>g.includes(e.value));var[b,y]=(0,f.useState)("");var w=(0,k/* .useDebounce */.d)(b);var x=h.filter(e=>e.label.toLowerCase().includes(w.toLowerCase()));var[Y,I]=(0,f.useState)(false);var D=(0,f.useRef)(null);var C=(e,r)=>{if(e){t.onChange([...g,r])}else{t.onChange(g.filter(e=>e!==r))}};return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{fieldState:r,field:t,label:n,disabled:s,readOnly:c,loading:d,helpText:p,children:e=>{var{css:t}=e,r=(0,ea._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rm.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rm.inputWrapper,ref:D,children:/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},r),{css:[t,rm.input],onClick:()=>I(true),autoComplete:"off",readOnly:c,placeholder:i,value:b,onChange:e=>{y(e.target.value)}}))}),g.length>0&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rm.selectedOptionsWrapper,children:m.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e_,{label:e.label,onClick:()=>C(false,e.value)},e.value))}),/*#__PURE__*/(0,l/* .jsx */.Y)(B/* ["default"] */.A,{triggerRef:D,isOpen:Y,closePopover:()=>I(false),animationType:z/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:[rm.options(v)],children:/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:x.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rm.notTag,children:(0,u.__)("No option available.","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(t7/* ["default"] */.A,{each:x,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:rm.optionItem,children:/*#__PURE__*/(0,l/* .jsx */.Y)(_/* ["default"] */.A,{label:e.label,checked:!!g.find(t=>t===e.value),onChange:t=>C(t,e.value)})},e.value)})})})})]})}})};/* export default */const rg=rh;var rm={mainWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;"),notTag:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.body */.I.body(),";width:100%;",W/* .styleUtils.textEllipsis */.x.textEllipsis,";:focus{outline:none;box-shadow:",w/* .shadow.focus */.r7.focus,";}"),selectedOptionsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-wrap:wrap;align-items:center;gap:",w/* .spacing["4"] */.YK["4"],";margin-top:",w/* .spacing["8"] */.YK["8"],";"),options:e=>/*#__PURE__*/(0,s/* .css */.AH)("z-index:",w/* .zIndex.dropdown */.fE.dropdown,";background-color:",w/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",w/* .shadow.popover */.r7.popover,";padding:",w/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border-radius:",w/* .borderRadius["6"] */.Vq["6"],";",W/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,s/* .css */.AH)(rv())),optionItem:/*#__PURE__*/(0,s/* .css */.AH)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",w/* .spacing["8"] */.YK["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";}"),addTag:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,";",x/* .typography.body */.I.body(),"    line-height:",w/* .lineHeight["24"] */.K_["24"],";display:flex;align-items:center;gap:",w/* .spacing["4"] */.YK["4"],";width:100%;padding:",w/* .spacing["8"] */.YK["8"],";&:hover{background-color:",w/* .colorTokens.background.hover */.I6.background.hover,";}")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/ContentDripSettings.tsx
var rb=()=>{var e=(0,v/* .useFormContext */.xW)();var t=[{label:(0,u.__)("Schedule course content by date","tutor"),value:"unlock_by_date"},{label:(0,u.__)("Content available after X days from enrollment","tutor"),value:"specific_days"},{label:(0,u.__)("Course content available sequentially","tutor"),value:"unlock_sequentially"},{label:(0,u.__)("Course content unlocked after finishing prerequisites","tutor"),value:"after_finishing_prerequisites",labelCss:/*#__PURE__*/(0,s/* .css */.AH)("align-items:start;span{top:3px;}")},{label:(0,u.__)("None","tutor"),value:""}];if(!eo/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url){return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.dripNoProWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"crown",width:72,height:72}),/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:x/* .typography.body */.I.body("medium"),children:(0,u.__)("Content Drip is a pro feature","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:ry.dripNoProDescription,children:(0,u.__)("You can schedule your course content using  content drip options","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"crown",width:24,height:24}),onClick:()=>{window.open(eo/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,u.__)("Get Tutor LMS Pro","tutor")})]})}if(!(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)){return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.dripNoProWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"contentDrip",width:72,height:72,style:ry.dripIcon}),/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:x/* .typography.body */.I.body("medium"),children:(0,u.__)("Activate the “Content Drip” addon to use this feature.","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:ry.dripNoProDescription,children:(0,u.__)("Control when students can access lessons and quizzes using the Content Drip feature.","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"linkExternal",width:24,height:24}),onClick:()=>{window.open(eo/* ["default"].TUTOR_ADDONS_PAGE */.A.TUTOR_ADDONS_PAGE,"_blank","noopener")},children:(0,u.__)("Enable Content Drip Addon","tutor")})]})}return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.dripWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:ry.dripTitle,children:(0,u.__)("Content Drip Type","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:ry.dripSubTitle,children:(0,u.__)("You can schedule your course content using one of the following Content Drip options","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"contentDripType",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e7/* ["default"] */.A,(0,o._)((0,a._)({},e),{options:t,wrapperCss:ry.radioWrapper}))})]})};/* export default */const r_=rb;var ry={dripWrapper:/*#__PURE__*/(0,s/* .css */.AH)("background-color:",w/* .colorTokens.background.white */.I6.background.white,";padding:",w/* .spacing["16"] */.YK["16"]," ",w/* .spacing["24"] */.YK["24"]," ",w/* .spacing["32"] */.YK["32"]," ",w/* .spacing["32"] */.YK["32"],";min-height:400px;",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",w/* .spacing["16"] */.YK["16"],";}"),dripTitle:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.body */.I.body("medium"),";margin-bottom:",w/* .spacing["4"] */.YK["4"],";"),dripSubTitle:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.small */.I.small(),";color:",w/* .colorTokens.text.hints */.I6.text.hints,";margin-bottom:",w/* .spacing["16"] */.YK["16"],";"),radioWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["8"] */.YK["8"],";"),dripNoProWrapper:/*#__PURE__*/(0,s/* .css */.AH)("min-height:400px;background:",w/* .colorTokens.background.white */.I6.background.white,";display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",w/* .spacing["4"] */.YK["4"],";padding:",w/* .spacing["24"] */.YK["24"],";text-align:center;"),dripNoProDescription:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";max-width:320px;margin:0 auto ",w/* .spacing["12"] */.YK["12"],";"),dripIcon:/*#__PURE__*/(0,s/* .css */.AH)("color:",w/* .colorTokens.icon.brand */.I6.icon.brand,";")};// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/EnrollmentSettings.tsx
function rw(){var e=(0,i._)(["\n      padding-bottom: ",";\n    "]);rw=function t(){return e};return e}var rx=(0,eG/* .getCourseId */.p)();var rA=()=>{var e,t;var r=!!eo/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var n=(0,v/* .useFormContext */.xW)();var i=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",rx]});var s=(0,v/* .useWatch */.FH)({control:n.control,name:"course_enrollment_period"});var c=(0,v/* .useWatch */.FH)({control:n.control,name:"enrollment_starts_date"});var p=(0,v/* .useWatch */.FH)({control:n.control,name:"enrollment_starts_time"});var h=(0,v/* .useWatch */.FH)({control:n.control,name:"enrollment_ends_date"});var g=(0,v/* .useWatch */.FH)({control:n.control,name:"isScheduleEnabled"});var m=(0,v/* .useWatch */.FH)({control:n.control,name:"schedule_date"});var _=(0,v/* .useWatch */.FH)({control:n.control,name:"schedule_time"});var[y,w]=(0,f.useState)(false);var x=(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((e=eo/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.membership_only_mode);var Y=(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.ENROLLMENT */.oW.ENROLLMENT);var k=new Date("".concat(m," ").concat(_));return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rk.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"maximum_students",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Maximum Student","tutor"),helpText:(0,u.__)("Number of students that can enrol in this course. Set 0 for no limits.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)(A/* ["default"] */.A,{when:r&&Y,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!x&&((t=eo/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enrollment_expiry_enabled)==="on",children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enrollment_expiry",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Enrollment Expiration","tutor"),helpText:(0,u.__)("Student's enrollment will be removed after this number of days. Set 0 for lifetime enrollment.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rk.enrollmentPeriod({isEnabled:s}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_enrollment_period",control:n.control,rules:{deps:["schedule_date","schedule_time",...c?["enrollment_starts_date"]:[],...p?["enrollment_starts_time"]:[],"enrollment_ends_date","enrollment_ends_time"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eq/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Course Enrollment Period","tutor"),loading:!!i&&!e.field.value,onChange:e=>{if(!e){n.clearErrors(["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"])}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:s,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rk.enrollmentDateWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rk.enrollmentDate,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{htmlFor:"enrollment_starts_at",children:(0,u.__)("Start Date","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{id:"enrollment_starts_at",css:W/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enrollment_starts_date",control:n.control,rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:{invalidDate:eQ/* .invalidDateRule */.Kh,isAfterScheduleDate:e=>{if(g&&k&&(0,eK["default"])(eW(new Date(e)),eW(new Date(m)))){return(0,u.__)("Start date should be after the schedule date","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ej/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("Start Date","tutor"),dateFormat:ei/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enrollment_starts_time",control:n.control,rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:{invalidTime:eQ/* .invalidTimeRule */.XA,isAfterScheduleTime:e=>{if(g&&k&&(0,eK["default"])(new Date("".concat(c," ").concat(e)),k)){return(0,u.__)("Start time should be after the schedule time","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_date","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eV/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("hh:mm a","tutor")}))})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:y||h,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"secondary",size:"small",onClick:()=>w(true),disabled:!!i||!c||!p,children:(0,u.__)("Add End Date","tutor")})}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rk.enrollmentDate,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{htmlFor:"enrollment_ends_at",children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:(0,u.__)("End Date","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{w(false);n.setValue("enrollment_ends_date","");n.setValue("enrollment_ends_time","")},css:rk.removeButton,children:(0,u.__)("Remove","tutor")})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{id:"enrollment_ends_at",css:W/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enrollment_ends_date",control:n.control,rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:{invalidDate:eQ/* .invalidDateRule */.Kh,checkEndDate:e=>{if((0,eK["default"])(eW(new Date(e)),eW(new Date(c)))){return(0,u.__)("End date should be after the start date","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ej/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("End Date","tutor"),disabledBefore:c,dateFormat:ei/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enrollment_ends_time",control:n.control,rules:(0,o._)((0,a._)({},(0,eQ/* .requiredRule */.WN)()),{validate:{invalidTime:eQ/* .invalidTimeRule */.XA,checkEndTime:e=>{if(c&&h&&p&&!(0,eK["default"])(new Date("".concat(c," ").concat(p)),new Date("".concat(h," ").concat(e)))){return(0,u.__)("End time should be after the start time","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eV/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,u.__)("hh:mm a","tutor")}))})]})]})})]})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"pause_enrollment",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Pause Enrollment","tutor"),description:(0,u.__)("If you pause enrolment, students will no longer be able to enroll in the course.","tutor")}))})]})]})};/* export default */const rY=rA;var rk={wrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",w/* .spacing["16"] */.YK["16"],";background-color:",w/* .colorTokens.background.white */.I6.background.white,";padding:",w/* .spacing["16"] */.YK["16"]," ",w/* .spacing["24"] */.YK["24"]," ",w/* .spacing["32"] */.YK["32"]," ",w/* .spacing["32"] */.YK["32"],";min-height:400px;",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",w/* .spacing["16"] */.YK["16"],";}"),enrollmentPeriod:e=>{var{isEnabled:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("padding:",w/* .spacing["12"] */.YK["12"],";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius["8"] */.Vq["8"],";background-color:",w/* .colorTokens.bg.white */.I6.bg.white,";",t&&(0,s/* .css */.AH)(rw(),w/* .spacing["16"] */.YK["16"]))},enrollmentDateWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",w/* .spacing["8"] */.YK["8"],";margin-top:",w/* .spacing["16"] */.YK["16"],";"),enrollmentDate:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",w/* .spacing["4"] */.YK["4"],";label{",W/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;justify-content:space-between;",x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.title */.I6.text.title,";}"),removeButton:/*#__PURE__*/(0,s/* .css */.AH)("margin-left:auto;padding:0;")};// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useVisibilityControl.tsx
var rI=r(91612);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/course-basic/CourseSettings.tsx
var rD=(0,eG/* .getCourseId */.p)();var rC=()=>{var e,t;var r=(0,v/* .useFormContext */.xW)();var n=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",rD]});var i=(0,rI/* ["default"] */.A)(ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.GENERAL */.qP.COURSE_BUILDER.BASICS.OPTIONS.GENERAL);var c=(0,rI/* ["default"] */.A)(ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP */.qP.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP);var p=(0,rI/* ["default"] */.A)(ei/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT */.qP.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT);var h=r.watch("contentDripType");var m=r.watch("enable_tutor_bp");var b=r.watch("course_price_type")==="paid";var _=[i&&{label:(0,u.__)("General","tutor"),value:"general",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"settings",width:24,height:24})},c&&{label:(0,u.__)("Content Drip","tutor"),value:"content_drip",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"contentDrip",width:24,height:24}),activeBadge:!!h},p&&{label:(0,u.__)("Enrollment","tutor"),value:"enrollment",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"update",width:24,height:24})},(0,F/* .isAddonEnabled */.GR)(ei/* .Addons.BUDDYPRESS */.oW.BUDDYPRESS)&&{label:(0,u.__)("BuddyPress","tutor"),value:"buddyPress",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"buddyPress",width:24,height:24}),activeBadge:m}].filter(Boolean);var[y,Y]=(0,f.useState)(((e=_[0])===null||e===void 0?void 0:e.value)||"general");if(!_.length){return null}var k=ei/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?_:_.map(e=>(0,o._)((0,a._)({},e),{label:y===e.value?e.label:""}));var I=(eo/* .tutorConfig.difficulty_levels */.P.difficulty_levels||[]).map(e=>({label:e.label,value:e.value}));return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{css:x/* .typography.caption */.I.caption(),children:(0,u.__)("Options","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{"data-cy":"course-settings",css:rM.courseSettings,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(rp/* ["default"] */.A,{tabList:k,activeTab:y,onChange:Y,orientation:!ei/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?"horizontal":"vertical",wrapperCss:/*#__PURE__*/(0,s/* .css */.AH)("button{min-width:auto;}")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:{borderLeft:"1px solid ".concat(w/* .colorTokens.stroke.divider */.I6.stroke.divider)},children:[y==="general"&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rM.settingsOptions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_level",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(en/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Difficulty Level","tutor"),placeholder:(0,u.__)("Select Difficulty Level","tutor"),helpText:(0,u.__)("Course difficulty level","tutor"),options:I,isClearable:false,loading:!!n&&!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rM.courseAndQna,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"is_public_course",control:r.control,rules:{validate:e=>{if(e&&b){return(0,u.__)("Paid courses cannot be public.","tutor")}return true},deps:["course_price_type"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eq/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Public Course","tutor"),helpText:(0,u.__)("Make This Course Public. No Enrollment Required.","tutor"),loading:!!n&&!e.field.value,onChange:e=>{if(b&&e){r.setValue("is_public_course",false);r.setError("is_public_course",{type:"validate",message:(0,u.__)("Paid courses cannot be public.","tutor")})}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:((t=eo/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enable_q_and_a_on_course)==="on",children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enable_qna",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eq/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Q&A","tutor"),helpText:(0,u.__)("Enable Q&A section for your course","tutor"),loading:!!n&&!e.field.value}))})})]})]}),y==="content_drip"&&/*#__PURE__*/(0,l/* .jsx */.Y)(r_,{}),y==="enrollment"&&/*#__PURE__*/(0,l/* .jsx */.Y)(rY,{}),y==="buddyPress"&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rM.settingsOptions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"enable_tutor_bp",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eU/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Enable BuddyPress group activity feeds","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"bp_attached_group_ids",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(rg,(0,o._)((0,a._)({},e),{label:(0,u.__)("BuddyPress Groups","tutor"),helpText:(0,u.__)("Assign this course to BuddyPress Groups","tutor"),placeholder:(0,u.__)("Search BuddyPress Groups","tutor"),options:(eo/* .tutorConfig.bp_groups */.P.bp_groups||[]).map(e=>({label:e.name,value:String(e.id)})),loading:!!n&&!e.field.value}))})]})]})]})]})};/* export default */const rS=rC;var rM={courseSettings:/*#__PURE__*/(0,s/* .css */.AH)("display:grid;grid-template-columns:200px 1fr;margin-top:",w/* .spacing["12"] */.YK["12"],";border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",w/* .borderRadius["6"] */.Vq["6"],";background-color:",w/* .colorTokens.background["default"] */.I6.background["default"],";overflow:hidden;",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr;}"),settingsOptions:/*#__PURE__*/(0,s/* .css */.AH)("min-height:400px;display:flex;flex-direction:column;gap:",w/* .spacing["12"] */.YK["12"],";padding:",w/* .spacing["16"] */.YK["16"]," ",w/* .spacing["32"] */.YK["32"]," ",w/* .spacing["48"] */.YK["48"]," ",w/* .spacing["32"] */.YK["32"],";background-color:",w/* .colorTokens.background.white */.I6.background.white,";",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",w/* .spacing["16"] */.YK["16"],";}"),courseAndQna:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["32"] */.YK["32"],";margin-top:",w/* .spacing["12"] */.YK["12"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/Navigator.tsx
var rE=r(14238);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormEditableAlias.tsx
var rT=e=>{var{field:t,fieldState:r,label:n="",baseURL:i,onChange:s}=e;var{value:c=""}=t;var d="".concat(i,"/").concat(c);var[p,v]=(0,f.useState)(false);var[h,m]=(0,f.useState)(d);var _="".concat(i,"/");var[y,w]=(0,f.useState)(c);(0,f.useEffect)(()=>{if(i){m("".concat(i,"/").concat(c))}if(c){w(c)}},[i,c]);return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{field:t,fieldState:r,children:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rH.aliasWrapper,children:[n&&/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{css:rH.label,children:[n,": "]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rH.linkWrapper,children:!p?/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("a",{"data-cy":"course-slug",href:h,target:"_blank",css:rH.link,title:h,rel:"noreferrer",children:h}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{css:rH.iconWrapper,type:"button",onClick:()=>v(e=>!e),children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"edit",width:24,height:24,style:rH.editIcon})})]}):/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:rH.prefix,title:_,children:_}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rH.editWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},e),{className:"tutor-input-field",css:rH.editable,type:"text",value:y,onChange:e=>w(e.target.value),autoComplete:"off"})),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{variant:"secondary",isOutlined:true,size:"small",buttonCss:rH.saveBtn,onClick:()=>{v(false);t.onChange((0,F/* .convertToSlug */.qz)(y.replace(i,"")));s===null||s===void 0?void 0:s((0,F/* .convertToSlug */.qz)(y.replace(i,"")))},children:(0,u.__)("Save","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{buttonContentCss:rH.cancelButton,variant:"text",size:"small",onClick:()=>{v(false);w(c)},children:(0,u.__)("Cancel","tutor")})]})]})})]})}})};var rH={aliasWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;min-height:32px;align-items:center;gap:",w/* .spacing["4"] */.YK["4"],";",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{flex-direction:column;gap:",w/* .spacing["4"] */.YK["4"],";align-items:flex-start;}"),label:/*#__PURE__*/(0,s/* .css */.AH)("flex-shrink:0;",x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";margin:0px;"),linkWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;width:fit-content;font-size:",w/* .fontSize["14"] */.J["14"],";",w/* .Breakpoint.smallMobile */.EA.smallMobile,"{gap:",w/* .spacing["4"] */.YK["4"],";flex-wrap:wrap;}"),link:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";text-decoration:none;",W/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    max-width:fit-content;word-break:break-all;"),iconWrapper:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.resetButton */.x.resetButton,"    margin-left:",w/* .spacing["8"] */.YK["8"],";height:24px;width:24px;background-color:",w/* .colorTokens.background.white */.I6.background.white,";border-radius:",w/* .borderRadius["4"] */.Vq["4"],";:focus{",W/* .styleUtils.inputFocus */.x.inputFocus,"}"),editIcon:/*#__PURE__*/(0,s/* .css */.AH)("color:",w/* .colorTokens.icon["default"] */.I6.icon["default"],";:hover{color:",w/* .colorTokens.icon.brand */.I6.icon.brand,";}"),prefix:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),"    color:",w/* .colorTokens.text.subdued */.I6.text.subdued,";",W/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    word-break:break-all;max-width:fit-content;"),editWrapper:/*#__PURE__*/(0,s/* .css */.AH)("margin-left:",w/* .spacing["2"] */.YK["2"],";display:flex;align-items:center;width:fit-content;"),editable:/*#__PURE__*/(0,s/* .css */.AH)("&.tutor-input-field{",x/* .typography.caption */.I.caption(),"      background:",w/* .colorTokens.background.white */.I6.background.white,";width:208px;height:32px;border:1px solid ",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",w/* .spacing["8"] */.YK["8"]," ",w/* .spacing["12"] */.YK["12"],";border-radius:",w/* .borderRadius.input */.Vq.input,";margin-right:",w/* .spacing["8"] */.YK["8"],";outline:none;&:focus{border-color:",w/* .colorTokens.stroke["default"] */.I6.stroke["default"],";box-shadow:none;outline:2px solid ",w/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}"),saveBtn:/*#__PURE__*/(0,s/* .css */.AH)("flex-shrink:0;margin-right:",w/* .spacing["8"] */.YK["8"],";"),cancelButton:/*#__PURE__*/(0,s/* .css */.AH)("color:",w/* .colorTokens.text.brand */.I6.text.brand,";")};/* export default */const rF=rT;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var rN=r(37196);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var rK=r(31602);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var rO=r(70540);// EXTERNAL MODULE: ./assets/react/v3/shared/services/course.ts
var rP=r(85973);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/pages/CourseBasic.tsx
function rW(){var e=(0,i._)(["\n      z-index: ",";\n    "]);rW=function t(){return e};return e}var rL=(0,eG/* .getCourseId */.p)();var rR=false;var rB=()=>{var e;var{fields:t}=(0,rO/* .useCourseBuilderSlot */._)();var r=(0,v/* .useFormContext */.xW)();var i=(0,c/* .useQueryClient */.jE)();var s=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",rL]});var p=(0,rn/* .useUpdateCourseMutation */.VD)();var h=(0,rP/* .useUnlinkPageBuilderMutation */.gr)();var[g,m]=(0,f.useState)(false);var b=i.getQueryData(["CourseDetails",rL]);var _=!!eo/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var y=((e=eo/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var w=r.watch("post_status");var x=r.watch("editor_used");return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rU.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rU.mainForm({isWpEditorFullScreen:g}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rU.fieldsWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rU.titleAndSlug,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"post_title",control:r.control,rules:(0,a._)({},(0,eQ/* .requiredRule */.WN)(),(0,eQ/* .maxLimitRule */.wA)(255)),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Title","tutor"),placeholder:(0,u.__)("ex. Learn Photoshop CS6 from scratch","tutor"),isClearable:true,generateWithAi:!_||y,loading:!!s&&!e.field.value,onChange:e=>{if(w==="draft"&&!rR){r.setValue("post_name",(0,F/* .convertToSlug */.qz)(String(e)),{shouldValidate:true,shouldDirty:true})}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"post_name",control:r.control,render:e=>{var t;return/*#__PURE__*/(0,l/* .jsx */.Y)(rF,(0,o._)((0,a._)({},e),{label:(0,u.__)("Course URL","tutor"),baseURL:"".concat(eo/* .tutorConfig.home_url */.P.home_url,"/").concat((t=eo/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.course_permalink_base),onChange:()=>{rR=true}}))}})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .Controller */.xI,{name:"post_content",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(rN/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Description","tutor"),loading:!!s&&!e.field.value,max_height:280,generateWithAi:!_||y,hasCustomEditorSupport:true,editorUsed:x,editors:b===null||b===void 0?void 0:b.editors,onCustomEditorButtonClick:()=>{return r.handleSubmit(e=>{var n=(0,rn/* .convertCourseDataToPayload */.Qw)(e,(0,F/* .findSlotFields */.DE)({fields:t.Basic},{fields:t.Additional}));return p.mutateAsync((0,o._)((0,a._)({course_id:rL},n),{post_status:(0,F/* .determinePostStatus */.q9)(r.getValues("post_status"),r.getValues("visibility"))}))})()},onBackToWPEditorClick:e=>(0,n._)(function*(){return h.mutateAsync({courseId:rL,builder:e}).then(e=>{r.setValue("editor_used",{name:"classic",label:(0,u.__)("Classic Editor","tutor"),link:""});return e})})(),onFullScreenChange:e=>{m(e)}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(rK/* ["default"] */.A,{section:"Basic.after_description",form:r}),/*#__PURE__*/(0,l/* .jsx */.Y)(rS,{}),/*#__PURE__*/(0,l/* .jsx */.Y)(rK/* ["default"] */.A,{section:"Basic.after_settings",form:r})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:ei/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rE/* ["default"] */.A,{styleModifier:rU.navigator})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ru,{}),/*#__PURE__*/(0,l/* .jsx */.Y)(A/* ["default"] */.A,{when:!ei/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rE/* ["default"] */.A,{styleModifier:rU.navigator})})]})};/* export default */const rz=rB;var rU={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:grid;grid-template-columns:1fr 338px;gap:",w/* .spacing["32"] */.YK["32"],";width:100%;",w/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr;gap:0;}"),mainForm:e=>{var{isWpEditorFullScreen:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("padding-block:",w/* .spacing["32"] */.YK["32"]," ",w/* .spacing["24"] */.YK["24"],";align-self:start;top:",w/* .headerHeight */.$A,"px;position:sticky;",t&&(0,s/* .css */.AH)(rW(),w/* .zIndex.header */.fE.header+1)," ",w/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding-top:",w/* .spacing["16"] */.YK["16"],";position:unset;}")},fieldsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["24"] */.YK["24"],";"),titleAndSlug:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",w/* .spacing["8"] */.YK["8"],";"),sidebar:/*#__PURE__*/(0,s/* .css */.AH)("border-left:1px solid ",w/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - ",w/* .headerHeight */.$A,"px);padding-left:",w/* .spacing["32"] */.YK["32"],";padding-block:",w/* .spacing["24"] */.YK["24"],";display:flex;flex-direction:column;gap:",w/* .spacing["16"] */.YK["16"],";"),priceRadioGroup:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",w/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:flex-start;gap:",w/* .spacing["16"] */.YK["16"],";"),navigator:/*#__PURE__*/(0,s/* .css */.AH)("margin-top:",w/* .spacing["40"] */.YK["40"],";",w/* .Breakpoint.smallTablet */.EA.smallTablet,"{margin-top:0;}"),statusAndDate:/*#__PURE__*/(0,s/* .css */.AH)(W/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",w/* .spacing["4"] */.YK["4"],";"),updatedOn:/*#__PURE__*/(0,s/* .css */.AH)(x/* .typography.caption */.I.caption(),";color:",w/* .colorTokens.text.hints */.I6.text.hints,";")}},52117:function(e,t,r){r.d(t,{A:()=>w});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(84577);/* import */var i=r(2445);/* import */var l=r(10840);/* import */var s=r(24219);/* import */var c=r(85713);/* import */var d=r(17437);/* import */var u=r(41594);/* import */var f=/*#__PURE__*/r.n(u);function p(){var e=(0,o._)(["\n      cursor: not-allowed;\n    "]);p=function t(){return e};return e}function v(){var e=(0,o._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function h(){var e=(0,o._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function g(){var e=(0,o._)(["\n        background-color: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,o._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);m=function t(){return e};return e}function b(){var e=(0,o._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/f().forwardRef((e,t)=>{var{id:r=(0,c/* .nanoid */.Ak)(),name:o,labelCss:l,inputCss:s,label:d="",checked:u,value:p,disabled:v=false,onChange:h,onBlur:g,isIndeterminate:m=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!m?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/f().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,i/* .jsxs */.FD)("label",{htmlFor:r,css:[y.container({disabled:v}),l],children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},e),{ref:t,id:r,name:o,type:"checkbox",value:p,checked:!!u,disabled:v,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:g,css:[s,y.checkbox({label:!!d,isIndeterminate:m,disabled:v})]})),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:[y.label({isDisabled:v}),l],title:_(d),children:d})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",l/* .colorTokens.text.title */.I6.text.title,";",t&&(0,d/* .css */.AH)(p()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)(s/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";",t&&(0,d/* .css */.AH)(v(),l/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,d/* .css */.AH)(h(),l/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",l/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",l/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",l/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",l/* .borderRadius["4"] */.Vq["4"],";",n&&(0,d/* .css */.AH)(g(),l/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,d/* .css */.AH)(m(),l/* .colorTokens.brand.blue */.I6.brand.blue,l/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,d/* .css */.AH)(b(),l/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",l/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const w=_},2971:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(17437);/* import */var i=r(12470);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(3771);/* import */var c=/*#__PURE__*/r.n(s);/* import */var d=r(42338);/* import */var u=r(90209);/* import */var f=r(10840);/* import */var p=r(24219);/* import */var v=r(84133);/* import */var h=r(76017);function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,i.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:l,uploadHandler:s,clearHandler:c,emptyImageCss:p,previewImageCss:g,overlayCss:m,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:A=true}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:!y,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:l===null||l===void 0?void 0:l.url,fallback:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),p],onClick:e=>{e.stopPropagation();if(x){return}s()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();s()}},children:[/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),g],"data-cy":"media-preview",children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e,alt:l===null||l===void 0?void 0:l.title,css:w.imagePreview}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.hoverPreview,m],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,o/* .css */.AH)("margin-top:",A&&f/* .spacing["16"] */.YK["16"],";"),onClick:e=>{e.stopPropagation();s()},"data-cy":"replace-media",children:_||(0,i.__)("Replace Image","tutor")}),/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:A,children:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();c()},"data-cy":"clear-media",children:(0,i.__)("Remove","tutor")})})]})]})}})})};/* export default */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",f/* .spacing["8"] */.YK["8"],";border:1px dashed ",f/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",f/* .borderRadius["8"] */.Vq["8"],";background-color:",f/* .colorTokens.bg.white */.I6.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,o/* .css */.AH)(g()),"    svg{color:",f/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover svg{color:",!r&&f/* .colorTokens.brand.blue */.I6.brand.blue,";}")},buttonText:/*#__PURE__*/(0,o/* .css */.AH)("color:",f/* .colorTokens.text.brand */.I6.text.brand,";"),infoTexts:/*#__PURE__*/(0,o/* .css */.AH)(p/* .typography.tiny */.I.tiny(),";color:",f/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:168px;border:1px solid ",f/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",f/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;position:relative;background-color:",f/* .colorTokens.bg.white */.I6.bg.white,";",t==="small"&&(0,o/* .css */.AH)(m()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,o/* .css */.AH)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",f/* .spacing["8"] */.YK["8"],";opacity:0;position:absolute;inset:0;background-color:",c()(f/* .colorTokens.color.black.main */.I6.color.black.main,.6),";button:first-of-type{box-shadow:",f/* .shadow.button */.r7.button,";}button:last-of-type:not(:only-of-type){color:",f/* .colorTokens.text.white */.I6.text.white,";box-shadow:none;}")}},91196:function(e,t,r){r.d(t,{A:()=>v});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(17437);/* import */var i=r(10840);/* import */var l=r(84133);/* import */var s=r(51298);/* import */var c=r(90209);function d(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function f(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);f=function t(){return e};return e}var p=e=>{var{children:t,content:r,size:n="regular",textOnly:o}=e;return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.wrapper({hasChildren:(0,s/* .isDefined */.O9)(t),size:n}),children:[t,/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{when:!(0,s/* .isDefined */.O9)(t)&&!o,children:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:h[n].iconSize,height:h[n].iconSize})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:g.content({hasChildren:(0,s/* .isDefined */.O9)(t),size:n,textOnly:o}),children:(0,s/* .isDefined */.O9)(t)?/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:n==="tiny"?h[n].iconSize:16}):r})]})};/* export default */const v=p;var h={tiny:{borderRadius:i/* .spacing["10"] */.YK["10"],height:i/* .spacing["10"] */.YK["10"],gap:i/* .spacing["2"] */.YK["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:i/* .spacing["16"] */.YK["16"],height:i/* .spacing["16"] */.YK["16"],gap:i/* .spacing["4"] */.YK["4"],iconSize:16,fontSize:i/* .fontSize["10"] */.J["10"],lineHeight:i/* .lineHeight["16"] */.K_["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:i/* .fontSize["14"] */.J["14"],lineHeight:i/* .lineHeight["18"] */.K_["18"]},large:{borderRadius:"26px",height:"26px",gap:i/* .spacing["6"] */.YK["6"],iconSize:26,fontSize:i/* .fontSize["16"] */.J["16"],lineHeight:i/* .lineHeight["26"] */.K_["26"]}};var g={wrapper:e=>{var{hasChildren:t,size:r="regular"}=e;return/*#__PURE__*/(0,o/* .css */.AH)("position:relative;svg{flex-shrink:0;}",!t&&(0,o/* .css */.AH)(d(),h[r].height,h[r].borderRadius,h[r].gap))},content:e=>{var{hasChildren:t,size:r="regular",textOnly:n}=e;return/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&(0,o/* .css */.AH)(f(),i/* .spacing["2"] */.YK["2"],i/* .colorTokens.icon.white */.I6.icon.white,h[r].gap,h[r].fontSize,h[r].lineHeight,n&&(0,o/* .css */.AH)(u(),i/* .spacing["6"] */.YK["6"])))}}},99689:function(e,t,r){r.d(t,{A:()=>g});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(17437);/* import */var i=r(41594);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(10840);/* import */var c=r(24219);/* import */var d=r(36154);/* import */var u=r(85713);function f(){var e=(0,n._)(["\n      color: ",";\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);p=function t(){return e};return e}var v=/*#__PURE__*/l().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:o,disabled:i=false,labelCss:l,label:s,icon:c,value:d,onChange:f,onBlur:p,description:v}=e;var g=(0,u/* .nanoid */.Ak)();return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("label",{htmlFor:g,css:[h.container(i),l],children:[/*#__PURE__*/(0,a/* .jsx */.Y)("input",{ref:t,id:g,name:r,type:"radio",checked:n,readOnly:o,value:d,disabled:i,onChange:f,onBlur:p,css:[h.radio(s)]}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{}),c,s]}),v&&/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:h.description,children:v})]})});var h={wrapper:/*#__PURE__*/(0,o/* .css */.AH)(d/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",s/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,o/* .css */.AH)(c/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,o/* .css */.AH)(f(),s/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",s/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",s/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,o/* .css */.AH)(p(),s/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",s/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",s/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",s/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",s/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,o/* .css */.AH)(c/* .typography.small */.I.small(),";color:",s/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const g=v},45257:function(e,t,r){r.d(t,{w:()=>c});/* import */var n=r(2445);/* import */var a=r(10840);/* import */var o=r(63939);/* import */var i=r(17437);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);var c=/*#__PURE__*/s().forwardRef((e,t)=>{var{className:r,variant:a}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{className:r,ref:t,css:u({variant:a})})});c.displayName="Separator";var d={horizontal:/*#__PURE__*/(0,i/* .css */.AH)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,i/* .css */.AH)("height:100%;width:1px;"),base:/*#__PURE__*/(0,i/* .css */.AH)("flex-shrink:0;background-color:",a/* .colorTokens.stroke.divider */.I6.stroke.divider,";")};var u=(0,o/* .createVariation */.s)({variants:{variant:{horizontal:d.horizontal,vertical:d.vertical}},defaultVariants:{variant:"horizontal"}},d.base)},52664:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(17437);/* import */var i=r(12470);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(41594);/* import */var c=/*#__PURE__*/r.n(s);/* import */var d=r(4892);/* import */var u=r(95729);/* import */var f=r(10840);/* import */var p=r(36154);/* import */var v=r(85713);function h(){var e=(0,n._)(["\n        ","\n      "]);h=function t(){return e};return e}function g(){var e=(0,n._)(["\n        border-top-right-radius: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n          ","\n        "]);m=function t(){return e};return e}function b(){var e=(0,n._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!d/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,a,o,l,s,c,u,f,p,v){var h=p!==null&&p!==void 0?p:n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv");var g=v!==null&&v!==void 0?v:"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen | tutor_button | undoRedoDropdown";h=f?h:h.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:c||200,autoresize_max_height:u||500,wp_autoresize_on:true,browser_spellcheck:!s,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(d/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!s,toolbar1:h,toolbar2:n?false:g,content_css:"".concat(d/* .tutorConfig.site_url */.P.site_url,"/wp-includes/css/dashicons.min.css,").concat(d/* .tutorConfig.site_url */.P.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(d/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!s,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:a=>{a.on("init",()=>{if(e&&!s){a.getBody().focus()}if(s){a.setMode("readonly");var t=a.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){a.iframeElement.style.height="".concat(e,"px")}},500)}});if(!n){a.addButton("tutor_button",{text:(0,i.__)("Tutor ShortCode","tutor"),icon:false,type:"menubutton",menu:[{text:(0,i.__)("Student Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_student_registration_form]")}},{text:(0,i.__)("Instructor Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_instructor_registration_form]")}},{text:(0,i.__)("Courses","tutor"),onclick:()=>{a.windowManager.open({title:(0,i.__)("Courses Shortcode","tutor"),body:[{type:"textbox",name:"id",label:(0,i.__)("Course id, separate by (,) comma","tutor"),value:""},{type:"textbox",name:"exclude_ids",label:(0,i.__)("Exclude Course IDS","tutor"),value:""},{type:"textbox",name:"category",label:(0,i.__)("Category IDS","tutor"),value:""},{type:"listbox",name:"orderby",label:(0,i.__)("Order By","tutor"),onselect:()=>{},values:[{text:"ID",value:"ID"},{text:"title",value:"title"},{text:"rand",value:"rand"},{text:"date",value:"date"},{text:"menu_order",value:"menu_order"},{text:"post__in",value:"post__in"}]},{type:"listbox",name:"order",label:(0,i.__)("Order","tutor"),onselect:()=>{},values:[{text:"DESC",value:"DESC"},{text:"ASC",value:"ASC"}]},{type:"textbox",name:"count",label:(0,i.__)("Count","tutor"),value:"6"}],// eslint-disable-next-line @typescript-eslint/no-explicit-any
onsubmit:e=>{a.insertContent('[tutor_course id="'.concat(e.data.id,'" exclude_ids="').concat(e.data.exclude_ids,'" category="').concat(e.data.category,'" orderby="').concat(e.data.orderby,'" order="').concat(e.data.order,'" count="').concat(e.data.count,'"]'))}})}}]})}a.on("change keyup paste",()=>{t(a.getContent())});a.on("focus",()=>{r(true)});a.on("blur",()=>r(false));a.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}l===null||l===void 0?void 0:l(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!a&&!n&&!s,drag_drop_upload:true,quicktags:o||n||s?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:n,hideMediaButtons:o,hideQuickTags:i,autoFocus:l=false,onFullScreenChange:c,readonly:d=false,min_height:f,max_height:p,toolbar1:h,toolbar2:g}=e;var m=(0,s.useRef)(null);var{current:b}=(0,s.useRef)((0,v/* .nanoid */.Ak)());var[_,w]=(0,s.useState)(l);var x=e=>{var t=e.target;r(t.value)};var Y=(0,s.useCallback)(e=>{var{tinymce:t}=window;if(!t||_){return}var r=window.tinymce.get(b);if(r){if(e!==r.getContent()){r.setContent(e)}}},[b,_]);(0,s.useEffect)(()=>{Y(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,s.useEffect)(()=>{if(typeof window.wp!=="undefined"&&window.wp.editor){window.wp.editor.remove(b);window.wp.editor.initialize(b,y(_,r,w,n,o,i,c,d,f,p,u/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile,h,g));var e=m.current;e===null||e===void 0?void 0:e.addEventListener("change",x);e===null||e===void 0?void 0:e.addEventListener("input",x);return()=>{window.wp.editor.remove(b);e===null||e===void 0?void 0:e.removeEventListener("change",x);e===null||e===void 0?void 0:e.removeEventListener("input",x)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[d]);return/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:A.wrapper({hideQuickTags:i,isMinimal:n,isFocused:_,isReadOnly:d}),children:/*#__PURE__*/(0,a/* .jsx */.Y)("textarea",{"data-cy":"tutor-tinymce",ref:m,id:b,defaultValue:t})})};/* export default */const x=w;var A={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:a}=e;return/*#__PURE__*/(0,o/* .css */.AH)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",f/* .borderRadius["6"] */.Vq["6"],";",n&&!a&&(0,o/* .css */.AH)(h(),p/* .styleUtils.inputFocus */.x.inputFocus),":focus-within{",!a&&p/* .styleUtils.inputFocus */.x.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",f/* .borderRadius["4"] */.Vq["4"],";border-top-right-radius:",f/* .borderRadius["4"] */.Vq["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";",(t||r)&&(0,o/* .css */.AH)(g(),f/* .borderRadius["6"] */.Vq["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",f/* .borderRadius["6"] */.Vq["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,o/* .css */.AH)(b(),!a?"1px solid ".concat(f/* .colorTokens.stroke["default"] */.I6.stroke["default"]):"none",f/* .borderRadius["6"] */.Vq["6"],n&&!a&&(0,o/* .css */.AH)(m(),p/* .styleUtils.inputFocus */.x.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",f/* .spacing["10"] */.YK["10"],";}")}}},79489:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(31105);/* import */var i=r(2445);/* import */var l=r(52117);/* import */var s=r(10840);/* import */var c=r(24219);/* import */var d=r(17437);/* import */var u=r(90209);/* import */var f=r(92229);/* import */var p=r(66279);var v=e=>{var{field:t,fieldState:r,disabled:s,value:c,onChange:d,label:v,description:h,helpText:m,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,p=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:g.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,(0,a._)((0,n._)({},t,p),{inputCss:r,labelCss:_,value:c,disabled:s,checked:t.value,label:v,onChange:()=>{t.onChange(!t.value);if(d){d(!t.value)}}})),m&&/*#__PURE__*/(0,i/* .jsx */.Y)(f/* ["default"] */.A,{content:m,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:g.description,children:h})]})}})};/* export default */const h=v;var g={wrapper:/*#__PURE__*/(0,d/* .css */.AH)("display:flex;align-items:center;gap:",s/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",s/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,d/* .css */.AH)(c/* .typography.small */.I.small(),"    color:",s/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",s/* .spacing["6"] */.YK["6"],";")}},31108:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(31105);/* import */var i=r(2445);/* import */var l=r(17437);/* import */var s=r(12470);/* import */var c=/*#__PURE__*/r.n(s);/* import */var d=r(86828);/* import */var u=r(53429);/* import */var f=r(41594);/* import */var p=/*#__PURE__*/r.n(f);/* import */var v=r(5170);/* import */var h=r(42338);/* import */var g=r(90209);/* import */var m=r(95729);/* import */var b=r(10840);/* import */var _=r(24219);/* import */var y=r(94654);/* import */var w=r(36154);/* import */var x=r(66279);/* import */var A=r(99972);// Create DayPicker formatters based on WordPress locale
var Y=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var k=e=>{if(!e)return undefined;return(0,d["default"])(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var I=e=>{var{label:t,field:r,fieldState:l,disabled:c,disabledBefore:d,disabledAfter:p,loading:b,placeholder:_,helpText:A,isClearable:I=true,onChange:D,dateFormat:S=m/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var M=(0,f.useRef)(null);var[E,T]=(0,f.useState)(false);var H=k(r.value);var F=typeof window!=="undefined"&&window.wp&&window.wp.date;var N=H?F?window.wp.date.format("F j, Y",H):(0,u["default"])(H,S):"";var{triggerRef:K,position:O,popoverRef:P}=(0,y/* .usePortalPopover */.tP)({isOpen:E,placement:y/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var W=()=>{var e;T(false);(e=M.current)===null||e===void 0?void 0:e.focus()};var L=k(d);var R=k(p);return/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{label:t,field:r,fieldState:l,disabled:c,loading:b,placeholder:_,helpText:A,children:e=>{var{css:t}=e,l=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:C.wrapper,ref:K,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},l),{css:[t,C.input],title:N,ref:e=>{r.ref(e);// @ts-ignore
M.current=e},type:"text",value:N,onClick:e=>{e.stopPropagation();T(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();T(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:C.icon}),I&&r.value&&/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,s.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:w/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(y/* .Portal */.ZL,{isOpen:E,onClickOutside:W,onEscape:W,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:C.pickerWrapper,style:{left:O.left,top:O.top},ref:P,children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .DayPicker */.h,{dir:m/* .isRTL */.V8?"rtl":"ltr",animate:true,mode:"single",formatters:Y(),disabled:[!!L&&{before:L},!!R&&{after:R}],selected:H,onSelect:e=>{if(e){var t=(0,u["default"])(e,m/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);W();if(D){D(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:H||new Date,startMonth:L||new Date(new Date().getFullYear()-10,0),endMonth:R||new Date(new Date().getFullYear()+10,11),weekStartsOn:F?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const D=I;var C={wrapper:/*#__PURE__*/(0,l/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,l/* .css */.AH)("&[data-input]{padding-left:",b/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;top:50%;left:",b/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,l/* .css */.AH)(_/* .typography.body */.I.body("regular"),";position:absolute;background-color:",b/* .colorTokens.background.white */.I6.background.white,";box-shadow:",b/* .shadow.popover */.r7.popover,";border-radius:",b/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",b/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",b/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",b/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",b/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",b/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",b/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",b/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",b/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",b/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",b/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",b/* .colorTokens.text.white */.I6.text.white,";background-color:",b/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",b/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",b/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",b/* .borderRadius.circle */.Vq.circle,";font-weight:",b/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")}},10878:function(e,t,r){r.d(t,{A:()=>A});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(17437);/* import */var i=r(12470);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(42338);/* import */var c=r(90209);/* import */var d=r(66279);/* import */var u=r(10840);/* import */var f=r(24219);/* import */var p=r(8501);/* import */var v=r(84133);/* import */var h=r(85123);/* import */var g=r(35804);/* import */var m=r(36154);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:o,buttonText:l=(0,i.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:f,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,g/* ["default"] */.A)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(f){f(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var A=()=>{y()};var k=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(f){f(r.length>0?r:null)}}else{t.onChange(null);if(f){f(null)}}};return/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{label:n,field:t,fieldState:r,helpText:o,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:_,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,children:l}),children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardWrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCard,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{style:Y.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardBody,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardTitle,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{title:e.title,css:m/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentCardSubtitle,children:/*#__PURE__*/(0,a/* .jsx */.Y)("span",{children:"".concat((0,i.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("button",{type:"button",css:Y.removeButton,onClick:()=>{k(e.id)},children:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,"data-cy":"upload-media",children:l})})]})})}})};/* export default */const A=(0,h/* .withVisibilityControl */.M)(x);var Y={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("display:flex;flex-direction:column;position:relative;",t&&(0,o/* .css */.AH)(b(),u/* .colorTokens.background.white */.I6.background.white,u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius.card */.Vq.card,u/* .spacing["8"] */.YK["8"]))},attachmentsWrapper:/*#__PURE__*/(0,o/* .css */.AH)("max-height:260px;padding-right:",u/* .spacing["16"] */.YK["16"],";",m/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.YK["20"],";padding:",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["12"] */.YK["12"]," ",u/* .spacing["4"] */.YK["4"]," 0;border-radius:",u/* .borderRadius["6"] */.Vq["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.I6.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.EA.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",u/* .spacing["4"] */.YK["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex(),";",f/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,o/* .css */.AH)(f/* .typography.tiny */.I.tiny("regular")," ",m/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";color:",u/* .colorTokens.text.hints */.I6.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)(t&&(0,o/* .css */.AH)(_(),u/* .spacing["16"] */.YK["16"]))},uploadButton:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;"),fileIcon:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";"),removeButton:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.crossButton */.x.crossButton,";background:none;transition:none;flex-shrink:0;")}},13095:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(2445);/* import */var a=r(12470);/* import */var o=/*#__PURE__*/r.n(a);/* import */var i=r(2971);/* import */var l=r(90209);/* import */var s=r(39655);/* import */var c=r(1448);/* import */var d=r(85544);/* import */var u=r(6463);/* import */var f=r(4892);/* import */var p=r(85123);/* import */var v=r(35804);/* import */var h=r(47403);/* import */var g=r(99786);/* import */var m=r(66279);var b;var _=!!f/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var y=(b=f/* .tutorConfig.settings */.P.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:o,size:f,helpText:p,buttonText:b=(0,a.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:A=false,previewImageCss:Y,loading:k,onClickAiButton:I}=e;var{showModal:D}=(0,c/* .useModal */.h)();var{openMediaLibrary:C,resetFiles:S}=(0,v/* ["default"] */.A)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:a}=e;t.onChange({id:r,url:n,title:a});if(x){x({id:r,url:n,title:a})}}},initialFiles:t.value});var M=t.value;var E=()=>{C()};var T=()=>{S();t.onChange(null);if(x){x(null)}};var H=()=>{if(!_){D({component:d/* ["default"] */.A,props:{image:g,image2x:h}})}else if(!y){D({component:u/* ["default"] */.A,props:{image:g,image2x:h}})}else{D({component:s/* ["default"] */.A,isMagicAi:true,props:{title:(0,a.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.Y)(l/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});I===null||I===void 0?void 0:I()}};return/*#__PURE__*/(0,n/* .jsx */.Y)(m/* ["default"] */.A,{label:o,field:t,fieldState:r,helpText:p,onClickAiButton:H,generateWithAi:A,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,n/* .jsx */.Y)(i/* ["default"] */.A,{size:f,value:M,uploadHandler:E,clearHandler:T,buttonText:b,infoText:w,previewImageCss:Y,loading:k})})}})};/* export default */const x=(0,p/* .withVisibilityControl */.M)(w)},99281:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(10840);/* import */var i=r(17437);/* import */var l=r(24219);/* import */var s=r(36154);/* import */var c=r(66279);function d(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var f=e=>{var{field:t,fieldState:r,label:n,options:o=[],disabled:i}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:i,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:v.wrapper,children:o.map((e,r)=>/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{type:"button",css:v.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:i,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,a/* .jsx */.Y)("p",{children:e.label})]},r))})}})};/* export default */const p=f;var v={wrapper:/*#__PURE__*/(0,i/* .css */.AH)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",o/* .spacing["12"] */.YK["12"],";margin-top:",o/* .spacing["4"] */.YK["4"],";"),item:e=>/*#__PURE__*/(0,i/* .css */.AH)(s/* .styleUtils.resetButton */.x.resetButton,";display:flex;flex-direction:column;gap:",o/* .spacing["4"] */.YK["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",l/* .typography.small */.I.small(),";width:100%;",s/* .styleUtils.textEllipsis */.x.textEllipsis,";color:",o/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,i/* .css */.AH)(d(),o/* .colorTokens.stroke.hover */.I6.stroke.hover),"}img{border-radius:",o/* .borderRadius["6"] */.Vq["6"],";border:2px solid ",o/* .colorTokens.stroke.border */.I6.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,i/* .css */.AH)(u(),o/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi),"}")}},49201:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(31105);/* import */var i=r(84577);/* import */var l=r(2445);/* import */var s=r(17437);/* import */var c=r(41594);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(10840);/* import */var f=r(24219);/* import */var p=r(85123);/* import */var v=r(36154);/* import */var h=r(66279);function g(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function m(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function b(){var e=(0,i._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,i._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      ","\n    "]);x=function t(){return e};return e}function A(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);A=function t(){return e};return e}function Y(){var e=(0,i._)(["\n      ","\n    "]);Y=function t(){return e};return e}function k(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);k=function t(){return e};return e}var I=e=>{var{label:t,content:r,contentPosition:i="left",showVerticalBar:s=true,size:d="regular",type:u="text",field:f,fieldState:p,disabled:v,readOnly:g,loading:m,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:A,contentCss:Y,removeBorder:k=false,selectOnFocus:I=false}=e;var D=(0,c.useRef)(null);return/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{label:t,field:f,fieldState:p,disabled:v,readOnly:g,loading:m,placeholder:b,helpText:_,isHidden:x,removeBorder:k,children:e=>{var{css:t}=e,c=(0,o._)(e,["css"]);var v;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[C.inputWrapper(!!p.error,k),A],children:[i==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[C.inputLeftContent(s,d),Y],children:r}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,a._)((0,n._)({},f,c),{type:"text",value:(v=f.value)!==null&&v!==void 0?v:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;f.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,C.input(i,s,d)],autoComplete:"off",ref:e=>{f.ref(e);// @ts-ignore
D.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!I||!D.current){return}D.current.select()},"data-input":true})),i==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[C.inputRightContent(s,d),Y],children:r})]})}})};/* export default */const D=(0,p/* .withVisibilityControl */.M)(I);var C={inputWrapper:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;",!t&&(0,s/* .css */.AH)(g(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius["6"] */.Vq["6"],u/* .shadow.input */.r7.input,u/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,s/* .css */.AH)(m(),u/* .colorTokens.stroke.danger */.I6.stroke.danger,u/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",v/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,s/* .css */.AH)(b(),u/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{",f/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,s/* .css */.AH)(_(),e,u/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,s/* .css */.AH)(w(),u/* .fontSize["24"] */.J["24"],u/* .fontWeight.medium */.Wy.medium,t&&(0,s/* .css */.AH)(y(),e,u/* .spacing["12"] */.YK["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(f/* .typography.small */.I.small()," ",v/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,s/* .css */.AH)(x(),f/* .typography.body */.I.body())," ",e&&(0,s/* .css */.AH)(A(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(f/* .typography.small */.I.small()," ",v/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,s/* .css */.AH)(Y(),f/* .typography.body */.I.body())," ",e&&(0,s/* .css */.AH)(k(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"]))}},91072:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(31105);/* import */var i=r(2445);/* import */var l=r(99689);/* import */var s=r(10840);/* import */var c=r(24219);/* import */var d=r(17437);/* import */var u=r(66279);var f=e=>{var{field:t,fieldState:r,label:s,options:c=[],disabled:d,wrapperCss:f,onSelect:p,onSelectRender:h}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{field:t,fieldState:r,label:s,disabled:d,children:e=>{var{css:r}=e,s=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:f,children:c.map((e,o)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,(0,a._)((0,n._)({},s),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||d,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(p){p(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:v.radioLegend,children:e.legend})]},o))})}})};/* export default */const p=f;var v={radioLegend:/*#__PURE__*/(0,d/* .css */.AH)("margin-left:",s/* .spacing["28"] */.YK["28"],";",c/* .typography.body */.I.body(),";color:",s/* .colorTokens.text.subdued */.I6.text.subdued,";")}},64194:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(10840);/* import */var i=r(24219);/* import */var l=r(68118);/* import */var s=r(36154);/* import */var c=r(85713);/* import */var d=r(17437);/* import */var u=r(41594);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(66279);function v(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);v=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function g(e,t,r,n){if(!t.current){return 0}var a=t.current.getBoundingClientRect();var o=a.width;var i=e-a.left;var l=Math.max(0,Math.min(i,o));var s=l/o*100;var c=Math.floor(r+s/100*(n-r));return c}var m=e=>{var{field:t,fieldState:r,label:n,min:o=0,max:i=100,isMagicAi:s=false,hasBorder:d=false}=e;var f=(0,u.useRef)(null);var[v,h]=(0,u.useState)(t.value);var m=(0,u.useRef)(null);var b=(0,u.useRef)(null);var y=(0,l/* .useDebounce */.d)(v);(0,u.useEffect)(()=>{t.onChange(y);// eslint-disable-next-line react-hooks/exhaustive-deps
},[y,t.onChange]);(0,u.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==b.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!m.current){return}h(g(t.clientX,m,o,i))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[o,i]);var w=(0,u.useMemo)(()=>{return Math.floor((v-o)/(i-o)*100)},[v,o,i]);return/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,label:n,isMagicAi:s,children:()=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.wrapper(d),children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.track,ref:m,onKeyDown:c/* .noop */.lQ,onClick:e=>{h(g(e.clientX,m,o,i))},children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.fill,style:{width:"".concat(w,"%")}}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.thumb(s),style:{left:"".concat(w,"%")},ref:b})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("input",{type:"text",css:_.input,value:String(v),onChange:e=>{h(Number(e.target.value))},ref:f,onFocus:()=>{var e;(e=f.current)===null||e===void 0?void 0:e.select()}})]})})};/* export default */const b=m;var _={wrapper:e=>/*#__PURE__*/(0,d/* .css */.AH)("display:grid;grid-template-columns:1fr 45px;gap:",o/* .spacing["20"] */.YK["20"],";align-items:center;",e&&(0,d/* .css */.AH)(v(),o/* .colorTokens.stroke.disable */.I6.stroke.disable,o/* .borderRadius["6"] */.Vq["6"],o/* .spacing["12"] */.YK["12"],o/* .spacing["10"] */.YK["10"],o/* .spacing["12"] */.YK["12"],o/* .spacing["16"] */.YK["16"])),track:/*#__PURE__*/(0,d/* .css */.AH)("position:relative;height:4px;background-color:",o/* .colorTokens.bg.gray20 */.I6.bg.gray20,";border-radius:",o/* .borderRadius["50"] */.Vq["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;left:0;top:0;height:100%;background:",o/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";width:50%;border-radius:",o/* .borderRadius["50"] */.Vq["50"],";"),thumb:e=>/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",o/* .borderRadius.circle */.Vq.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",o/* .borderRadius.circle */.Vq.circle,";background-color:",o/* .colorTokens.background.white */.I6.background.white,";cursor:pointer;}",e&&(0,d/* .css */.AH)(h(),o/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1)),input:/*#__PURE__*/(0,d/* .css */.AH)(i/* .typography.caption */.I.caption("medium"),";height:32px;border:1px solid ",o/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",o/* .borderRadius["6"] */.Vq["6"],";text-align:center;color:",o/* .colorTokens.text.primary */.I6.text.primary,";&:focus-visible{",s/* .styleUtils.inputFocus */.x.inputFocus,";}")}},27205:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(31105);/* import */var i=r(2445);/* import */var l=r(17437);/* import */var s=r(67375);/* import */var c=r(67901);/* import */var d=r(35975);/* import */var u=r(53429);/* import */var f=r(41594);/* import */var p=/*#__PURE__*/r.n(f);/* import */var v=r(42338);/* import */var h=r(90209);/* import */var g=r(35198);/* import */var m=r(95729);/* import */var b=r(10840);/* import */var _=r(24219);/* import */var y=r(36154);/* import */var w=r(47617);/* import */var x=r(67198);/* import */var A=r(12470);/* import */var Y=/*#__PURE__*/r.n(A);/* import */var k=r(66279);var I=e=>{var{label:t,field:r,fieldState:l,interval:p=30,disabled:b,loading:_,placeholder:Y,helpText:I,isClearable:D=true}=e;var[S,M]=(0,f.useState)(false);var E=(0,f.useRef)(null);var T=(0,f.useRef)(null);var H=(0,f.useMemo)(()=>{var e=(0,s["default"])((0,c["default"])(new Date,0),0);var t=(0,s["default"])((0,c["default"])(new Date,23),59);var r=(0,d/* ["default"] */.A)({start:e,end:t},{step:p});return r.map(e=>(0,u["default"])(e,m/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[p]);var{activeIndex:F,setActiveIndex:N}=(0,x/* .useSelectKeyboardNavigation */.v)({options:H.map(e=>({label:e,value:e})),isOpen:S,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);M(false)},onClose:()=>M(false)});(0,f.useEffect)(()=>{if(S&&F>=0&&T.current){T.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[S,F]);return/*#__PURE__*/(0,i/* .jsx */.Y)(k/* ["default"] */.A,{label:t,field:r,fieldState:l,disabled:b,loading:_,placeholder:Y,helpText:I,children:e=>{var{css:t}=e,l=(0,o._)(e,["css"]);var s;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:C.wrapper,ref:E,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},l),{ref:r.ref,css:[t,C.input],type:"text",onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(e=>!e)}if(e.key==="Tab"){M(false)}},value:(s=r.value)!==null&&s!==void 0?s:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"clock",width:32,height:32,style:C.icon}),D&&r.value&&/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,A.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:y/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{triggerRef:E,isOpen:S,closePopover:()=>M(false),animationType:w/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,i/* .jsx */.Y)("ul",{css:C.list,children:H.map((e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:C.listItem,ref:F===t?T:null,"data-active":F===t,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:C.itemButton,onClick:()=>{r.onChange(e);M(false)},onMouseOver:()=>N(t),onMouseLeave:()=>t!==F&&N(-1),onFocus:()=>N(t),children:e})},t)})})})]})}})};/* export default */const D=I;var C={wrapper:/*#__PURE__*/(0,l/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,l/* .css */.AH)("&[data-input]{padding-left:",b/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;top:50%;left:",b/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,l/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",y/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,l/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,l/* .css */.AH)(y/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.body */.I.body(),";margin:",b/* .spacing["4"] */.YK["4"]," ",b/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.primary */.I6.text.primary,";}")}},83890:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */ee});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(41374);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var a=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(55456);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(84577);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var l=r(2445);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var s=r(17437);// EXTERNAL MODULE: external "wp.i18n"
var c=r(12470);// EXTERNAL MODULE: external "React"
var d=r(41594);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var u=r(49785);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var f=r(42338);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var p=r(2971);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var v=r(76017);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(90209);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var g=r(35198);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var m=r(4892);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var b=r(95729);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var _=r(10840);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var y=r(24219);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var w=r(84133);// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var x=r(85123);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var A=r(47617);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var Y=r(57148);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var k=r(94654);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useWpMedia.ts
var I=r(35804);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var D=r(94747);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var C=r(53127);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var S=r(37381);// CONCATENATED MODULE: ./assets/react/v3/shared/services/video.ts
var M=e=>{return C/* .wpAjaxInstance.post */.b.post(S/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.A.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var E=()=>{return(0,D/* .useMutation */.n)({mutationFn:M})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var T=r(36154);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var H=r(85713);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var F=r(6192);// CONCATENATED MODULE: ./assets/react/v3/shared/utils/video.ts
function N(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var a="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var o=yield fetch(a);if(!o.ok){throw new Error((0,c.__)("Failed to fetch the video data","tutor"))}var i=yield o.text();var l=new DOMParser;var s=l.parseFromString(i,"application/xml");var d=s.getElementsByTagName("duration")[0];if(!d||!d.textContent){return null}var u=Number.parseInt(d.textContent,10);return u;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var K=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var O=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var a=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+a};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var P=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(b/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var a=t.split("/").pop();var o=yield fetch("https://vimeo.com/api/v2/video/".concat(a,".json"));var i=yield o.json();return i[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var a=document.createElement("canvas");// Track loading states
    var o=false;var i=false;var l=false;var s=false;var d=()=>{n.src="";n.remove();a.remove();clearTimeout(f)};var u=()=>{if(o&&i&&l&&s){try{a.height=n.videoHeight;a.width=n.videoWidth;var t=a.getContext("2d");if(!t){throw new Error((0,c.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var u=a.toDataURL("image/png");d();e(u)}catch(e){d();var f=e instanceof Error?e.message:(0,c.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(f)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{o=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{i=true;u()});n.addEventListener("suspend",()=>{l=true;u()});n.addEventListener("seeked",()=>{s=true;u()});n.addEventListener("error",e=>{d();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var f=setTimeout(()=>{d();r(new Error((0,c.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(a);// Start loading the video
    n.src=t}catch(e){var p=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(p)))}})}throw new Error((0,c.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var W=r(66279);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var L=r(59976);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var R=r(61046);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx
function B(){var e=(0,i._)(["\n      background-color: ",";\n    "]);B=function t(){return e};return e}function z(){var e=(0,i._)(["\n      ",";\n    "]);z=function t(){return e};return e}var U=m/* .tutorConfig.supported_video_sources */.P.supported_video_sources||[];var j=U.filter(e=>e.value!=="html5");var q=U.map(e=>e.value);var V=["vimeo","youtube","html5"];var G={youtube:(0,c.__)("Paste YouTube Video URL","tutor"),vimeo:(0,c.__)("Paste Vimeo Video URL","tutor"),external_url:(0,c.__)("Paste External Video URL","tutor"),shortcode:(0,c.__)("Paste Video Shortcode","tutor"),embedded:(0,c.__)("Paste Embedded Video Code","tutor")};var Q={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var X=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,a._)({},e,t):(0,a._)({},r,t)};var Z={youtube:e=>{var t=e.match(b/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(b/* .VideoRegex.VIMEO */.j8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(b/* .VideoRegex.SHORTCODE */.j8.SHORTCODE)?e:null},url:e=>{return e.match(b/* .VideoRegex.EXTERNAL_URL */.j8.EXTERNAL_URL)?e:null}};var $=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:a}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield N(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var o;e=(o=yield K(r))!==null&&o!==void 0?o:0;break;case"youtube":{var i=Z.youtube(r);if(i){var l=yield a.mutateAsync(i);e=O(l.data.duration)}break}}if(e){var s=(0,H/* .covertSecondsToHMS */.uu)(Math.floor(e));return s}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var J=e=>{var{field:t,fieldState:r,label:i,helpText:b,buttonText:_=(0,c.__)("Upload Media","tutor"),infoText:y,onChange:x,supportedFormats:D,loading:C,onGetDuration:S}=e;var M,B,z;var J=(0,Y/* .useFormWithGlobalError */.p)({defaultValues:{videoSource:((M=j[0])===null||M===void 0?void 0:M.value)||"",videoUrl:""}});var ee=E();var[er,en]=(0,d.useState)(false);var[ea,eo]=(0,d.useState)({hours:0,minutes:0,seconds:0});var[ei,el]=(0,d.useState)("");var[es,ec]=(0,d.useState)(false);var ed=(0,d.useRef)(null);var eu=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};t.onChange(X(t.value,n));x===null||x===void 0?void 0:x(X(t.value,n));try{en(true);eh();var a=yield P("external_url",r.url);var o=yield K(r.url);if(!o){return}eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(o)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(o)))}if(a){el(a)}}finally{en(false)}})();var{openMediaLibrary:ef,resetFiles:ep}=(0,I/* ["default"] */.A)({options:{type:(D===null||D===void 0?void 0:D.length)?D.map(e=>"video/".concat(e)).join(","):"video"},onChange:eu});var{openMediaLibrary:ev,resetFiles:eh}=(0,I/* ["default"] */.A)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};t.onChange(X(t.value,n));x===null||x===void 0?void 0:x(X(t.value,n))},initialFiles:((B=t.value)===null||B===void 0?void 0:B.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var eg=J.watch("videoSource")||"";var em=t.value;(0,d.useEffect)(()=>{var e;if(!em){return}if(!em.source){var r,n;J.setValue("videoSource",(r=j[0])===null||r===void 0?void 0:r.value);J.setValue("videoUrl",em["source_".concat((n=j[0])===null||n===void 0?void 0:n.value)]||"");return}var a=q.includes(em.source);if(!a){t.onChange(X(em,{source:""}));return}J.setValue("videoSource",em.source);J.setValue("videoUrl",em["source_".concat(em.source)]||"");if(!em.poster_url&&V.includes(em.source)){var o=em.source;en(true);P(o,em["source_".concat(o)]||"").then(e=>{en(false);el(e)}).finally(()=>{en(false)})}if(Object.values(ea).some(e=>e>0)){return}if(em.source==="vimeo"){N(em["source_vimeo"]||"").then(e=>{if(!e){return}eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(["external_url","html5"].includes(em.source)){K(em["source_".concat(em.source)]||"").then(e=>{if(!e){return}eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(em.source==="youtube"&&((e=m/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var i;var l=(i=Z.youtube(em["source_youtube"]||""))!==null&&i!==void 0?i:"";ee.mutateAsync(l).then(e=>{var t=e.data.duration;if(!t){return}var r=O(t);eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(r)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[em]);if(!q.length){return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.emptyMediaWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:i})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("p",{css:et.warningText,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",height:20,width:20}),(0,c.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{buttonCss:et.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(m/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.A.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,c.__)("Select from settings","tutor")})]})]})}var eb=e=>{if(e==="video"){ef();return}ev()};var e_=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=X(em,r);if(e==="video"){ep()}else{eh()}t.onChange(n);el("");eo({hours:0,minutes:0,seconds:0});if(x){x(n)}};var ey=()=>{if(!(em===null||em===void 0?void 0:em.source)||!q.includes(em.source)){return false}var e=em===null||em===void 0?void 0:em.source;var t="source_".concat(e);return em&&em[t]!==""};var ew=e=>(0,n._)(function*(){en(true);try{var{videoSource:r,videoUrl:n}=e;var a={source:r,["source_".concat(r)]:n};t.onChange(X(em,a));x===null||x===void 0?void 0:x(X(em,a));ec(false);var[o,i]=yield Promise.all([$({source:r,url:n,getYouTubeVideoDurationMutation:ee}),V.includes(r)?P(r,n):null]);if(o){eo(o);S===null||S===void 0?void 0:S(o)}if(i){el(i)}}finally{en(false)}})();var ex=e=>{var t=e.trim();if(eg==="embedded")return true;if(eg==="shortcode"){return Z.shortcode(t)?true:(0,c.__)("Invalid Shortcode","tutor")}if(!Z.url(t)){return(0,c.__)("Invalid URL","tutor")}if(eg==="youtube"&&!Z.youtube(t)){return(0,c.__)("Invalid YouTube URL","tutor")}if(eg==="vimeo"&&!Z.vimeo(t)){return(0,c.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(W/* ["default"] */.A,{label:i,field:t,fieldState:r,helpText:b,children:()=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:ed,children:/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:!C,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:ey(),fallback:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:q.includes("html5"),children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"monitorPlay",height:24,width:24}),onClick:()=>{eb("video")},children:_})}),/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:q.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:!q.includes("html5"),fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{"data-cy":"add-from-url",type:"button",css:et.urlButton,onClick:()=>{ec(e=>!e)},children:(0,c.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{ec(e=>!e)},children:(0,c.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:q.includes("html5"),children:/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:et.infoTexts,children:y})})]}),children:()=>{var e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.videoInfoWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.videoInfoCard,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:Q[em===null||em===void 0?void 0:em.source]||"video",height:36,width:36}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.videoInfo,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.videoInfoTitle,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:T/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:V.includes((em===null||em===void 0?void 0:em.source)||"")?em===null||em===void 0?void 0:em["source_".concat(em.source)]:(e=U.find(e=>e.value===(em===null||em===void 0?void 0:em.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.actionButtons,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:eg!=="html5",children:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:T/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{ec(true)},children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{"data-cy":"remove-video",type:"button",css:T/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e_("video")},children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.imagePreview({hasImageInput:V.includes((em===null||em===void 0?void 0:em.source)||"")}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)(w/* ["default"] */.A,{when:V.includes((em===null||em===void 0?void 0:em.source)||""),fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.urlData,children:J.watch("videoUrl")}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(p/* ["default"] */.A,{value:em?{id:Number(em.poster)||0,url:em.poster_url||ei,title:""}:null,loading:er,isClearAble:!!(em===null||em===void 0?void 0:em.poster),disabled:["vimeo","youtube"].includes((em===null||em===void 0?void 0:em.source)||""),uploadHandler:()=>eb("poster"),clearHandler:()=>e_("poster"),buttonText:(0,c.__)("Upload Thumbnail","tutor"),infoText:(0,c.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:et.thumbImage,previewImageCss:et.thumbImage,overlayCss:et.thumbImage,replaceButtonText:(0,c.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{when:ea.hours>0||ea.minutes>0||ea.seconds>0,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.duration,children:[ea.hours>0&&"".concat(ea.hours,"h")," ",ea.minutes,"m ",ea.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{triggerRef:ed,isOpen:es,placement:k/* .POPOVER_PLACEMENTS.MIDDLE */.zA.MIDDLE,animationType:A/* .AnimationType.fadeIn */.J6.fadeIn,closePopover:()=>ec(false),positionModifier:{top:17,left:0},maxWidth:"".concat(((z=ed.current)===null||z===void 0?void 0:z.offsetWidth)||300,"px"),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.popoverContent,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:J.control,name:"videoSource",rules:(0,a._)({},(0,F/* .requiredRule */.WN)()),render:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,(0,o._)((0,a._)({},e),{options:j,disabled:U.length<=1,placeholder:(0,c.__)("Select source","tutor"),hideCaret:U.length<=1}))}}),/*#__PURE__*/(0,l/* .jsx */.Y)(u/* .Controller */.xI,{control:J.control,name:"videoUrl",rules:(0,o._)((0,a._)({},(0,F/* .requiredRule */.WN)()),{validate:ex}),render:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{inputCss:/*#__PURE__*/(0,s/* .css */.AH)("border-style:dashed;"),rows:2,placeholder:G[eg]||(0,c.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.popoverButtonWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{ec(false)},children:(0,c.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:J.handleSubmit(ew),children:(0,c.__)("Ok","tutor")})]})]})})]})};/* export default */const ee=(0,x/* .withVisibilityControl */.M)(J);var et={emptyMediaWrapper:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",_/* .spacing["4"] */.YK["4"],";label{",y/* .typography.caption */.I.caption(),";color:",_/* .colorTokens.text.title */.I6.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",_/* .spacing["8"] */.YK["8"],";border:1px dashed ",_/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",_/* .borderRadius["8"] */.Vq["8"],";background-color:",_/* .colorTokens.background.status.warning */.I6.background.status.warning,";",t&&(0,s/* .css */.AH)(B(),_/* .colorTokens.bg.white */.I6.bg.white))},infoTexts:/*#__PURE__*/(0,s/* .css */.AH)(y/* .typography.tiny */.I.tiny(),";color:",_/* .colorTokens.text.subdued */.I6.text.subdued,";"),warningText:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",_/* .spacing["4"] */.YK["4"],";",y/* .typography.caption */.I.caption(),";color:",_/* .colorTokens.text.warning */.I6.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,s/* .css */.AH)("background:",_/* .colorTokens.bg.white */.I6.bg.white,";"),urlData:/*#__PURE__*/(0,s/* .css */.AH)(y/* .typography.caption */.I.caption(),";",T/* .styleUtils.display.flex */.x.display.flex("column"),";padding:",_/* .spacing["8"] */.YK["8"]," ",_/* .spacing["12"] */.YK["12"],";gap:",_/* .spacing["8"] */.YK["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;height:100%;border:1px solid ",_/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",_/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;background-color:",_/* .colorTokens.bg.white */.I6.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",_/* .spacing["20"] */.YK["20"],";padding:",_/* .spacing["8"] */.YK["8"]," ",_/* .spacing["12"] */.YK["12"],";"),videoInfoCard:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",_/* .spacing["8"] */.YK["8"],";svg{flex-shrink:0;color:",_/* .colorTokens.icon.hover */.I6.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",_/* .spacing["4"] */.YK["4"],";"),videoInfoTitle:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";",y/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",_/* .colorTokens.background["default"] */.I6.background["default"],";",!t&&(0,s/* .css */.AH)(z(),T/* .styleUtils.overflowYAuto */.x.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,s/* .css */.AH)(y/* .typography.tiny */.I.tiny(),";position:absolute;bottom:",_/* .spacing["12"] */.YK["12"],";right:",_/* .spacing["12"] */.YK["12"],";background-color:rgba(0,0,0,0.5);color:",_/* .colorTokens.text.white */.I6.text.white,";padding:",_/* .spacing["4"] */.YK["4"]," ",_/* .spacing["8"] */.YK["8"],";border-radius:",_/* .borderRadius["6"] */.Vq["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,s/* .css */.AH)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.resetButton */.x.resetButton,";",y/* .typography.small */.I.small("medium"),";color:",_/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",_/* .borderRadius["2"] */.Vq["2"],";padding:0 ",_/* .spacing["4"] */.YK["4"],";margin-bottom:",_/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",_/* .colorTokens.text.brand */.I6.text.brand,";}&:focus-visible{outline:2px solid ",_/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";gap:",_/* .spacing["4"] */.YK["4"],";"),popover:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;width:100%;z-index:",_/* .zIndex.dropdown */.fE.dropdown,";background-color:",_/* .colorTokens.bg.white */.I6.bg.white,";border-radius:",_/* .borderRadius.card */.Vq.card,";box-shadow:",_/* .shadow.popover */.r7.popover,";"),popoverContent:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",_/* .spacing["12"] */.YK["12"],";padding:",_/* .spacing["16"] */.YK["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,s/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";gap:",_/* .spacing["8"] */.YK["8"],";justify-content:flex-end;")}},37196:function(e,t,r){r.d(t,{A:()=>L});/* import */var n=r(41374);/* import */var a=r(84577);/* import */var o=r(2445);/* import */var i=r(17437);/* import */var l=r(12470);/* import */var s=/*#__PURE__*/r.n(l);/* import */var c=r(3771);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(41594);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(51550);/* import */var v=r(42338);/* import */var h=r(76017);/* import */var g=r(90209);/* import */var m=r(92229);/* import */var b=r(52664);/* import */var _=r(74645);/* import */var y=r(3013);/* import */var w=r(1448);/* import */var x=r(85544);/* import */var A=r(6463);/* import */var Y=r(4892);/* import */var k=r(95729);/* import */var I=r(10840);/* import */var D=r(8501);/* import */var C=r(84133);/* import */var S=r(36154);/* import */var M=r(14631);/* import */var E=r(75510);/* import */var T=r(66279);function H(){var e=(0,a._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);H=function t(){return e};return e}var F;var N={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var K=!!Y/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var O=(F=Y/* .tutorConfig.settings */.P.settings)===null||F===void 0?void 0:F.chatgpt_key_exist;var P=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:a}=e;var{showModal:i}=(0,w/* .useModal */.h)();var[s,c]=(0,u.useState)("");return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:R.editorOverlay,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,o/* .jsx */.Y)(v/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:R.editWithButton,icon:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"arrowLeft",height:24,width:24}),loading:s==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield i({component:y/* ["default"] */.A,props:{title:(0,l.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{type:"warning",icon:"warning",children:(0,l.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,l.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:I/* .zIndex.highest */.fE.highest});if(e==="CONFIRM"){try{c("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{c("")}}})(),children:(0,l.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.Y)(v/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:R.editWithButton,loading:s==="edit_with",icon:N[t.name]&&/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:N[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{c("edit_with");yield a===null||a===void 0?void 0:a(t);window.location.href=t.link}finally{c("")}})(),children:/* translators: %s is the editor name */(0,l.sprintf)((0,l.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var W=e=>{var{label:t,field:r,fieldState:a,disabled:i,readOnly:s,loading:c,placeholder:d,helpText:f,onChange:p,generateWithAi:v=false,onClickAiButton:y,hasCustomEditorSupport:H=false,isMinimal:F=false,hideMediaButtons:W=false,hideQuickTags:L=false,editors:B=[],editorUsed:z={name:"classic",label:"Classic Editor",link:""},isMagicAi:U=false,autoFocus:j=false,onCustomEditorButtonClick:q,onBackToWPEditorClick:V,onFullScreenChange:G,min_height:Q,max_height:X,toolbar1:Z,toolbar2:$}=e;var J,ee,et,er,en;var{showModal:ea}=(0,w/* .useModal */.h)();var eo=((J=Y/* .tutorConfig.settings */.P.settings)===null||J===void 0?void 0:J.hide_admin_bar_for_users)==="off";var ei=(et=Y/* .tutorConfig.current_user */.P.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(k/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var el=(en=Y/* .tutorConfig.current_user */.P.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(k/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR);var[es,ec]=(0,u.useState)(null);var ed=B.filter(e=>ei||el&&eo||e.name==="droip");var eu=H&&ed.length>0;var ef=eu&&z.name!=="classic";var ep=()=>{if(!K){ea({component:x/* ["default"] */.A,props:{image:E,image2x:M}})}else if(!O){ea({component:A/* ["default"] */.A,props:{image:E,image2x:M}})}else{ea({component:_/* ["default"] */.A,isMagicAi:true,props:{title:(0,l.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:a,is_html:true}});y===null||y===void 0?void 0:y()}};var ev=/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:R.editorLabel,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("span",{css:R.labelWithAi,children:[t,/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:v,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:R.aiButton,onClick:ep,children:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:R.editorsButtonWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:(0,l.__)("Edit with","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:R.customEditorButtons,children:/*#__PURE__*/(0,o/* .jsx */.Y)(D/* ["default"] */.A,{each:ed,children:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{content:e.label,delay:200,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:R.customEditorButton,disabled:es===e.name,onClick:()=>(0,n._)(function*(){try{ec(e.name);yield q===null||q===void 0?void 0:q(e);window.location.href=e.link}finally{ec(null)}})(),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:es===e.name,children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:N[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,o/* .jsx */.Y)(T/* ["default"] */.A,{label:eu?ev:t,field:r,fieldState:a,disabled:i,readOnly:s,placeholder:d,helpText:f,isMagicAi:U,generateWithAi:!eu&&v,onClickAiButton:ep,replaceEntireLabel:eu,children:()=>{if(c){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:S/* .styleUtils.flexCenter */.x.flexCenter(),children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.Ay,{size:20,color:I/* .colorTokens.icon["default"] */.I6.icon["default"]})})}var e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:R.wrapper({isOverlayVisible:ef}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:ef,children:/*#__PURE__*/(0,o/* .jsx */.Y)(P,{editorUsed:z,onBackToWPEditorClick:V,onCustomEditorButtonClick:q})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(p){p(e)}},isMinimal:F,hideMediaButtons:W,hideQuickTags:L,autoFocus:j,onFullScreenChange:G,readonly:s,min_height:Q,max_height:X,toolbar1:Z,toolbar2:$})]})}})};/* export default */const L=W;var R={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:relative;",t&&(0,i/* .css */.AH)(H(),I/* .borderRadius["6"] */.Vq["6"]))},editorLabel:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,i/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",S/* .styleUtils.flexCenter */.x.flexCenter(),";width:32px;height:32px;border-radius:",I/* .borderRadius["4"] */.Vq["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["8"] */.YK["8"],";color:",I/* .colorTokens.text.hints */.I6.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),customEditorButton:/*#__PURE__*/(0,i/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",I/* .borderRadius.circle */.Vq.circle,";&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;height:100%;width:100%;",S/* .styleUtils.flexCenter */.x.flexCenter(),";gap:",I/* .spacing["8"] */.YK["8"],";background-color:",d()(I/* .colorTokens.background.modal */.I6.background.modal,.6),";border-radius:",I/* .borderRadius["6"] */.Vq["6"],";z-index:",I/* .zIndex.positive */.fE.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,i/* .css */.AH)("background:",I/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",I/* .colorTokens.text.primary */.I6.text.primary,";box-shadow:inset 0 -1px 0 0 ",d()("#1112133D",.24),",0 1px 0 0 ",d()("#1112133D",.8),";")}},6575:function(e,t,r){r.d(t,{f:()=>c});/* import */var n=r(2445);/* import */var a=r(10840);/* import */var o=r(66283);/* import */var i=r(17437);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);var c=/*#__PURE__*/s().forwardRef((e,t)=>{var{src:r,width:a,height:i,brushSize:s,trackStack:c,pointer:u,setTrackStack:f,setPointer:p}=e;var[v,h]=(0,l.useState)(false);var[g,m]=(0,l.useState)({x:0,y:0});var b=(0,l.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,o/* .getCanvas */.dX)(t);if(!r||!n){return}var a=r.getBoundingClientRect();var i=(e.clientX-a.left)*(r.width/a.width);var l=(e.clientY-a.top)*(r.height/a.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(i,l);h(true);m({x:i,y:l})};var y=e=>{var{canvas:r,context:n}=(0,o/* .getCanvas */.dX)(t);if(!r||!n||!b.current){return}var a=r.getBoundingClientRect();var i={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};if(v){(0,o/* .drawPath */.kd)(n,i)}b.current.style.left="".concat(i.x,"px");b.current.style.top="".concat(i.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,o/* .getCanvas */.dX)(t);if(!n||!r){return}h(false);n.closePath();var a=r.getBoundingClientRect();var i={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,o/* .calculateCartesianDistance */.KG)(g,i)===0){(0,o/* .drawPath */.kd)(n,{x:i.x+1,y:i.y+1})}f(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});p(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,o/* .getCanvas */.dX)(t);if(!e||!n){return}var a=new Image;a.src=r;a.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=a.width/a.height;var r=e.width/e.height;var o;var i;if(r>t){i=e.height;o=e.height*t}else{o=e.width;i=e.width/t}var l=(e.width-o)/2;var s=(e.height-i)/2;n.drawImage(a,l,s,o,i);if(c.length===0){f([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var A=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var Y=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,l.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:d.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("canvas",{ref:t,width:a,height:i,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:A,onMouseLeave:Y}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{ref:b,css:d.customCursor(s)})]})});var d={wrapper:/*#__PURE__*/(0,i/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",a/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",a/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",a/* .zIndex.highest */.fE.highest,";display:none;")}},31873:function(e,t,r){r.d(t,{A6:()=>v,co:()=>h,i3:()=>f});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(2445);/* import */var i=r(57148);/* import */var l=r(12470);/* import */var s=/*#__PURE__*/r.n(l);/* import */var c=r(41594);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(49785);var f=[(0,l.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,l.__)("An abstract representation of innovation and creativity","tutor"),(0,l.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,l.__)("A modern design with digital learning icons","tutor"),(0,l.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,l.__)("A peaceful nature scene with soft colors","tutor"),(0,l.__)("A professional boardroom with sleek visuals","tutor"),(0,l.__)("A stack of books with warm, inviting lighting","tutor"),(0,l.__)("A dynamic collage of technology and education themes","tutor"),(0,l.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var p=/*#__PURE__*/d().createContext(null);var v=()=>{var e=(0,c.useContext)(p);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:l,onCloseModal:s}=e;var d=(0,i/* .useFormWithGlobalError */.p)({defaultValues:{prompt:"",style:"none"}});var[f,v]=(0,c.useState)("generation");var[h,g]=(0,c.useState)("");var[m,b]=(0,c.useState)([null,null,null,null]);var _=(0,c.useCallback)(e=>{v(e)},[]);return/*#__PURE__*/(0,o/* .jsx */.Y)(p.Provider,{value:{state:f,onDropdownMenuChange:_,images:m,setImages:b,currentImage:h,setCurrentImage:g,field:r,fieldState:l,onCloseModal:s},children:/*#__PURE__*/(0,o/* .jsx */.Y)(u/* .FormProvider */.Op,(0,a._)((0,n._)({},d),{children:t}))})}},40528:function(e,t,r){r.d(t,{u:()=>R});/* import */var n=r(41374);/* import */var a=r(71893);/* import */var o=r(55456);/* import */var i=r(2445);/* import */var l=r(66273);/* import */var s=r(90209);/* import */var c=r(99281);/* import */var d=r(61046);/* import */var u=r(10840);/* import */var f=r(24219);/* import */var p=r(8501);/* import */var v=r(84133);/* import */var h=r(36512);/* import */var g=r(45063);/* import */var m=r(74469);/* import */var b=r(20108);/* import */var _=r(86160);/* import */var y=r(77628);/* import */var w=r(59120);/* import */var x=r(62646);/* import */var A=r(85712);/* import */var Y=r(39550);/* import */var k=r(36732);/* import */var I=r(73788);/* import */var D=r(18866);/* import */var C=r(45549);/* import */var S=r(36154);/* import */var M=r(51298);/* import */var E=r(17437);/* import */var T=r(12470);/* import */var H=/*#__PURE__*/r.n(T);/* import */var F=r(41594);/* import */var N=/*#__PURE__*/r.n(F);/* import */var K=r(49785);/* import */var O=r(31873);/* import */var P=r(22951);/* import */var W=r(87233);var L=[{label:(0,T.__)("None","tutor"),value:"none",image:A},{label:(0,T.__)("Photo","tutor"),value:"photo",image:k},{label:(0,T.__)("Neon","tutor"),value:"neon",image:x},{label:(0,T.__)("3D","tutor"),value:"3d",image:g},{label:(0,T.__)("Painting","tutor"),value:"painting",image:Y},{label:(0,T.__)("Sketch","tutor"),value:"sketch",image:D},{label:(0,T.__)("Concept","tutor"),value:"concept_art",image:b},{label:(0,T.__)("Illustration","tutor"),value:"illustration",image:w},{label:(0,T.__)("Dreamy","tutor"),value:"dreamy",image:_},{label:(0,T.__)("Filmic","tutor"),value:"filmic",image:y},{label:(0,T.__)("Retro","tutor"),value:"retrowave",image:I},{label:(0,T.__)("Black & White","tutor"),value:"black-and-white",image:m}];var R=()=>{var e=(0,K/* .useForm */.mN)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,O/* .useMagicImageGeneration */.A6)();var u=(0,h/* .useMagicImageGenerationMutation */.R8)();var{showToast:f}=(0,C/* .useToast */.d)();var[g,m]=(0,F.useState)(t.every(e=>e===null));var[b,_]=(0,F.useState)([false,false,false,false]);var y=e.watch("style");var w=e.watch("prompt");var x=!y||!w;var A=t.some(M/* .isDefined */.O9);(0,F.useEffect)(()=>{if(u.isError){f({type:"danger",message:u.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[u.isError]);(0,F.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("form",{css:W/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){_([true,true,true,true]);m(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return u.mutateAsync(e).then(e=>{r(t=>{var r,a;var o=[...t];var i;o[n]=(i=(a=e.data.data)===null||a===void 0?void 0:(r=a[0])===null||r===void 0?void 0:r.b64_json)!==null&&i!==void 0?i:null;return o});_(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{_(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){_([false,false,false,false]);m(true)}})()),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:W/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{when:!g,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:B.images,children:/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(P/* .AiImageItem */.z,{src:e,loading:b[t],index:t},t)}})})})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:W/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:B.fields,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:B.promptWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(K/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,T.__)("Visualize Your Course","tutor"),placeholder:(0,T.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:u.isPending,enableResize:false}))}),/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:B.inspireButton,onClick:()=>{var t=O/* .inspirationPrompts.length */.i3.length;var r=Math.floor(Math.random()*t);e.reset((0,o._)((0,a._)({},e.getValues()),{prompt:O/* .inspirationPrompts */.i3[r]}))},disabled:u.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"bulbLine"}),(0,T.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(K/* .Controller */.xI,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(c/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,T.__)("Styles","tutor"),options:L,disabled:u.isPending}))})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:W/* .magicAIStyles.rightFooter */.C.rightFooter,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(l/* ["default"] */.A,{type:"submit",disabled:u.isPending||x,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:A?"reload":"magicAi",width:24,height:24}),A?(0,T.__)("Generate Again","tutor"):(0,T.__)("Generate Now","tutor")]})})]})]})};var B={images:/*#__PURE__*/(0,E/* .css */.AH)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",u/* .spacing["12"] */.YK["12"],";align-self:start;padding:",u/* .spacing["24"] */.YK["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,E/* .css */.AH)("display:flex;flex-direction:column;gap:",u/* .spacing["12"] */.YK["12"],";"),promptWrapper:/*#__PURE__*/(0,E/* .css */.AH)("position:relative;textarea{padding-bottom:",u/* .spacing["40"] */.YK["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,E/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",f/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",u/* .spacing["12"] */.YK["12"],";left:",u/* .spacing["12"] */.YK["12"],";border:1px solid ",u/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",u/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",u/* .spacing["4"] */.YK["4"],";color:",u/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",u/* .spacing["12"] */.YK["12"],";background-color:",u/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",u/* .colorTokens.background.brand */.I6.background.brand,";color:",u/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",u/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",u/* .colorTokens.background.disable */.I6.background.disable,";color:",u/* .colorTokens.text.disable */.I6.text.disable,";}")}},22951:function(e,t,r){r.d(t,{z:()=>S});/* import */var n=r(41374);/* import */var a=r(84577);/* import */var o=r(2445);/* import */var i=r(17437);/* import */var l=r(12470);/* import */var s=/*#__PURE__*/r.n(l);/* import */var c=r(41594);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(66273);/* import */var f=r(90209);/* import */var p=r(35198);/* import */var v=r(10840);/* import */var h=r(24219);/* import */var g=r(8501);/* import */var m=r(47617);/* import */var b=r(36512);/* import */var _=r(66283);/* import */var y=r(36154);/* import */var w=r(85713);/* import */var x=r(31873);function A(){var e=(0,a._)(["\n      background-position: top left;\n    "]);A=function t(){return e};return e}function Y(){var e=(0,a._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);Y=function t(){return e};return e}function k(){var e=(0,a._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);k=function t(){return e};return e}function I(){var e=(0,a._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);I=function t(){return e};return e}function D(){var e=(0,a._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);D=function t(){return e};return e}var C=[{label:(0,l.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
// {
//   label: __('Object eraser', __TUTOR_TEXT_DOMAIN__),
//   value: 'magic-erase',
//   icon: <SVGIcon name="eraser" width={24} height={24} />,
// },
// {
//   label: __('Variations', __TUTOR_TEXT_DOMAIN__),
//   value: 'variations',
//   icon: <SVGIcon name="reload" width={24} height={24} />,
// },
{label:(0,l.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"download",width:24,height:24})}];var S=e=>{var{src:t,loading:r,index:a}=e;var i=(0,c.useRef)(null);var[s,d]=(0,c.useState)(false);var{onDropdownMenuChange:v,setCurrentImage:h,onCloseModal:y,field:A}=(0,x/* .useMagicImageGeneration */.A6)();var Y=(0,b/* .useStoreAIGeneratedImageMutation */.ah)();if(r||!t){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:E.loader(a+1)})}return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:E.image({isActive:Y.isPending}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("img",{src:t,alt:(0,l.__)("Generated Image","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{"data-actions":true,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:E.useButton,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(u/* ["default"] */.A,{variant:"primary",disabled:Y.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield Y.mutateAsync({image:t});if(e.data){A.onChange(e.data);y()}})(),loading:Y.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"download",width:24,height:24}),(0,l.__)("Use This","tutor")]})}),/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{variant:"primary",size:"icon",css:E.threeDots,ref:i,onClick:()=>d(true),children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{triggerRef:i,isOpen:s,arrow:true,closePopover:()=>{d(false)},animationType:m/* .AnimationType.slideDown */.J6.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:E.dropdownOptions,children:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{each:C,children:(e,r)=>/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:E.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{h(t);v(e.value);break}case"download":{var r="".concat((0,w/* .nanoid */.Ak)(),".png");(0,_/* .downloadBase64Image */.JD)(t,r);break}default:break}d(false)},children:[e.icon,e.label]},r)})})})]})};var M=/*#__PURE__*/(0,i/* .keyframes */.i7)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var E={loader:e=>/*#__PURE__*/(0,i/* .css */.AH)("border-radius:",v/* .borderRadius["12"] */.Vq["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",M," 2s linear infinite;",e===1&&(0,i/* .css */.AH)(A())," ",e===2&&(0,i/* .css */.AH)(Y()),"		",e===3&&(0,i/* .css */.AH)(k()),"		",e===4&&(0,i/* .css */.AH)(I())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("width:100%;height:100%;overflow:hidden;border-radius:",v/* .borderRadius["12"] */.Vq["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,i/* .css */.AH)(D(),v/* .colorTokens.stroke.brand */.I6.stroke.brand),"    &:hover,&:focus-within{outline-color:",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;top:",v/* .spacing["8"] */.YK["8"],";right:",v/* .spacing["8"] */.YK["8"],";border-radius:",v/* .borderRadius["4"] */.Vq["4"],";"),useButton:/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;left:50%;bottom:",v/* .spacing["12"] */.YK["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",v/* .spacing["4"] */.YK["4"],";}"),dropdownOptions:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;padding-block:",v/* .spacing["8"] */.YK["8"],";"),dropdownItem:/*#__PURE__*/(0,i/* .css */.AH)(h/* .typography.small */.I.small(),";",y/* .styleUtils.resetButton */.x.resetButton,";height:40px;display:flex;gap:",v/* .spacing["10"] */.YK["10"],";align-items:center;transition:background-color 0.3s ease;color:",v/* .colorTokens.text.title */.I6.text.title,";padding-inline:",v/* .spacing["8"] */.YK["8"],";cursor:pointer;svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background-color:",v/* .colorTokens.background.hover */.I6.background.hover,";}")}},20651:function(e,t,r){r.d(t,{A:()=>H});/* import */var n=r(41374);/* import */var a=r(71893);/* import */var o=r(55456);/* import */var i=r(2445);/* import */var l=r(66273);/* import */var s=r(90209);/* import */var c=r(45257);/* import */var d=r(64194);/* import */var u=r(61046);/* import */var f=r(10840);/* import */var p=r(24219);/* import */var v=r(84133);/* import */var h=r(68118);/* import */var g=r(57148);/* import */var m=r(36512);/* import */var b=r(66283);/* import */var _=r(36154);/* import */var y=r(85713);/* import */var w=r(17437);/* import */var x=r(12470);/* import */var A=/*#__PURE__*/r.n(x);/* import */var Y=r(41594);/* import */var k=/*#__PURE__*/r.n(Y);/* import */var I=r(49785);/* import */var D=r(6575);/* import */var C=r(31873);/* import */var S=r(87233);var M=620;var E=620;var T=()=>{var e=(0,g/* .useFormWithGlobalError */.p)({defaultValues:{brush_size:40,prompt:""}});var t=(0,m/* .useMagicFillImageMutation */.wt)();var r=(0,Y.useRef)(null);var{onDropdownMenuChange:f,currentImage:p,field:_,onCloseModal:A}=(0,C/* .useMagicImageGeneration */.A6)();var k=(0,m/* .useStoreAIGeneratedImageMutation */.ah)();var T=(0,h/* .useDebounce */.d)(e.watch("brush_size",40));var[H,F]=(0,Y.useState)([]);var[K,O]=(0,Y.useState)(1);var P=(0,Y.useCallback)((e,t)=>{var n;var a=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!a){return}for(var o of t.slice(0,e)){a.putImageData(o,0,0)}},[]);(0,Y.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=T},[T]);(0,Y.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){P(K+1,H);O(e=>Math.min(e+1,H.length));return}if(e.key.toUpperCase()==="Z"){P(K-1,H);O(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[K,H,P]);if(!p){return null}return/*#__PURE__*/(0,i/* .jsxs */.FD)("form",{css:S/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var a=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!a){return}var o={prompt:e.prompt,image:(0,b/* .getImageData */.M5)(n)};var i=yield t.mutateAsync(o);if(i){var l=new Image;l.onload=()=>{n.width=M;n.height=E;a.drawImage(l,0,0,n.width,n.height);a.lineWidth=T;a.lineJoin="round";a.lineCap="round"};l.src=i}})()),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:S/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.leftWrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.actionBar,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.backButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:N.backButton,onClick:()=>f("generation"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"arrowLeft"})}),(0,x.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.actions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{variant:"ghost",disabled:H.length===0,onClick:()=>{P(1,H);F(H.slice(0,1));O(1)},children:(0,x.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(c/* .Separator */.w,{variant:"vertical",css:/*#__PURE__*/(0,w/* .css */.AH)("min-height:16px;")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.undoRedo,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:K<=1,onClick:()=>{P(K-1,H);O(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:K===H.length,onClick:()=>{P(K+1,H);O(e=>Math.min(e+1,H.length))},children:/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.canvasAndLoading,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(D/* .DrawingCanvas */.f,{ref:r,width:M,height:E,src:p,brushSize:T,trackStack:H,pointer:K,setTrackStack:F,setPointer:O}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{when:t.isPending,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:N.loading})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:N.footerActions,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:N.footerActionsLeft,children:/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{variant:"secondary",onClick:()=>{var e="".concat((0,y/* .nanoid */.Ak)(),".png");var{canvas:t}=(0,b/* .getCanvas */.dX)(r);if(!t)return;(0,b/* .downloadBase64Image */.JD)((0,b/* .getImageData */.M5)(t),e)},children:/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:S/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.fields,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .Controller */.xI,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,x.__)("Describe the Fill","tutor"),placeholder:(0,x.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:[S/* .magicAIStyles.rightFooter */.C.rightFooter,/*#__PURE__*/(0,w/* .css */.AH)("margin-top:auto;")],children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.footerButtons,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)(l/* ["default"] */.A,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,x.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{variant:"primary_outline",disabled:t.isPending,loading:k.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,b/* .getCanvas */.dX)(r);if(!e)return;var t=yield k.mutateAsync({image:(0,b/* .getImageData */.M5)(e)});if(t.data){_.onChange(t.data);A()}})(),children:(0,x.__)("Use Image","tutor")})]})})]})]})};/* export default */const H=T;var F={loading:/*#__PURE__*/(0,w/* .keyframes */.i7)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,w/* .keyframes */.i7)("0%{left:0%;}100%{left:100%;}")};var N={canvasAndLoading:/*#__PURE__*/(0,w/* .css */.AH)("position:relative;z-index:",f/* .zIndex.positive */.fE.positive,";"),loading:/*#__PURE__*/(0,w/* .css */.AH)("position:absolute;top:0;left:0;width:100%;height:100%;background:",f/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",F.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",F.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;flex-direction:column;gap:",f/* .spacing["12"] */.YK["12"],";"),leftWrapper:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;flex-direction:column;gap:",f/* .spacing["8"] */.YK["8"],";padding-block:",f/* .spacing["16"] */.YK["16"],";"),footerButtons:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;flex-direction:column;gap:",f/* .spacing["8"] */.YK["8"],";"),footerActions:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",f/* .spacing["12"] */.YK["12"],";"),actions:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",f/* .spacing["16"] */.YK["16"],";"),undoRedo:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",f/* .spacing["12"] */.YK["12"],";"),backButtonWrapper:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",f/* .spacing["8"] */.YK["8"],";",p/* .typography.body */.I.body("medium"),";color:",f/* .colorTokens.text.title */.I6.text.title,";"),backButton:/*#__PURE__*/(0,w/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";width:24px;height:24px;border-radius:",f/* .borderRadius["4"] */.Vq["4"],";border:1px solid ",f/* .colorTokens.stroke["default"] */.I6.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,w/* .css */.AH)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,w/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,w/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",f/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",f/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",f/* .zIndex.highest */.fE.highest,";display:none;")}},87233:function(e,t,r){r.d(t,{C:()=>o});/* import */var n=r(10840);/* import */var a=r(17437);var o={wrapper:/*#__PURE__*/(0,a/* .css */.AH)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",n/* .Breakpoint.tablet */.EA.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",n/* .zIndex.level */.fE.level,";"),right:/*#__PURE__*/(0,a/* .css */.AH)("padding:",n/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",n/* .zIndex.positive */.fE.positive,";"),rightFooter:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;gap:",n/* .spacing["8"] */.YK["8"],";margin-top:auto;padding-top:80px;")}},39655:function(e,t,r){r.d(t,{A:()=>d});/* import */var n=r(2445);/* import */var a=r(31873);/* import */var o=r(40528);/* import */var i=r(20651);/* import */var l=r(25405);function s(){var{state:e}=(0,a/* .useMagicImageGeneration */.A6)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.Y)(o/* .ImageGeneration */.u,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.Y)(i/* ["default"] */.A,{});default:return null}}var c=e=>{var{title:t,icon:r,closeModal:o,field:i,fieldState:c}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(l/* ["default"] */.A,{onClose:o,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.Y)(a/* .MagicImageGenerationProvider */.co,{field:i,fieldState:c,onCloseModal:o,children:/*#__PURE__*/(0,n/* .jsx */.Y)(s,{})})})};/* export default */const d=c},39643:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(2445);/* import */var a=r(17437);/* import */var o=r(90209);/* import */var i=r(66238);/* import */var l=r(54527);/* import */var s=r(95729);/* import */var c=r(10840);/* import */var d=r(24219);/* import */var u=r(84133);/* import */var f=r(54203);/* import */var p=r(36154);var v=e=>{var{children:t,onClose:r,title:a,subtitle:s,icon:c,headerChildren:d,entireHeader:p,actions:v,maxWidth:h=1218,blurTriggerElement:m=true}=e;(0,f/* .useScrollLock */.K$)();return/*#__PURE__*/(0,n/* .jsx */.Y)(l/* ["default"] */.A,{blurPrevious:m,children:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:g.container({maxWidth:h}),children:[/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:g.header({hasHeaderChildren:!!d}),children:/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{when:p,fallback:/*#__PURE__*/(0,n/* .jsxs */.FD)(n/* .Fragment */.FK,{children:[/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:g.headerContent,children:[/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:g.iconWithTitle,children:[/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{when:c,children:c}),/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,n/* .jsx */.Y)("h6",{css:g.title,title:typeof a==="string"?a:"",children:a})})]}),/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{when:s,children:/*#__PURE__*/(0,n/* .jsx */.Y)("span",{css:g.subtitle,children:s})})]}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:g.headerChildren,children:/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{when:d,children:d})}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:g.actionsWrapper,children:/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{when:v,fallback:/*#__PURE__*/(0,n/* .jsx */.Y)("button",{type:"button",css:g.closeButton,onClick:r,children:/*#__PURE__*/(0,n/* .jsx */.Y)(o/* ["default"] */.A,{name:"times",width:14,height:14})}),children:v})})]}),children:p})}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:g.content,children:/*#__PURE__*/(0,n/* .jsx */.Y)(i/* ["default"] */.A,{children:t})})]})})};/* export default */const h=v;var g={container:e=>{var{maxWidth:t}=e;return/*#__PURE__*/(0,a/* .css */.AH)("position:relative;background:",c/* .colorTokens.background.white */.I6.background.white,";margin:",s/* .modal.MARGIN_TOP */.yl.MARGIN_TOP,"px auto ",c/* .spacing["24"] */.YK["24"],";height:100%;max-width:",t,"px;box-shadow:",c/* .shadow.modal */.r7.modal,";border-radius:",c/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;bottom:0;z-index:",c/* .zIndex.modal */.fE.modal,";width:100%;",c/* .Breakpoint.smallTablet */.EA.smallTablet,"{width:90%;}")},header:e=>{var{hasHeaderChildren:t}=e;return/*#__PURE__*/(0,a/* .css */.AH)("display:grid;grid-template-columns:",t?"1fr auto 1fr":"1fr auto auto",";gap:",c/* .spacing["8"] */.YK["8"],";align-items:center;width:100%;height:",s/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT,"px;background:",c/* .colorTokens.background.white */.I6.background.white,";border-bottom:1px solid ",c/* .colorTokens.stroke.divider */.I6.stroke.divider,";position:sticky;")},headerContent:/*#__PURE__*/(0,a/* .css */.AH)("place-self:center start;display:inline-flex;align-items:center;gap:",c/* .spacing["12"] */.YK["12"],";padding-left:",c/* .spacing["24"] */.YK["24"],";",c/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-left:",c/* .spacing["16"] */.YK["16"],";}"),headerChildren:/*#__PURE__*/(0,a/* .css */.AH)("place-self:center center;"),iconWithTitle:/*#__PURE__*/(0,a/* .css */.AH)("display:inline-flex;align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";flex-shrink:0;color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";"),title:/*#__PURE__*/(0,a/* .css */.AH)(d/* .typography.heading6 */.I.heading6("medium"),";color:",c/* .colorTokens.text.title */.I6.text.title,";text-transform:none;letter-spacing:normal;"),subtitle:/*#__PURE__*/(0,a/* .css */.AH)(p/* .styleUtils.text.ellipsis */.x.text.ellipsis(1)," ",d/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";padding-left:",c/* .spacing["12"] */.YK["12"],";border-left:1px solid ",c/* .colorTokens.icon.hints */.I6.icon.hints,";"),actionsWrapper:/*#__PURE__*/(0,a/* .css */.AH)("place-self:center end;display:inline-flex;gap:",c/* .spacing["16"] */.YK["16"],";padding-right:",c/* .spacing["24"] */.YK["24"],";",c/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-right:",c/* .spacing["16"] */.YK["16"],";}"),closeButton:/*#__PURE__*/(0,a/* .css */.AH)(p/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",c/* .borderRadius.circle */.Vq.circle,";background:",c/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",c/* .colorTokens.background.white */.I6.background.white,";}svg{color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",c/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",c/* .shadow.focus */.r7.focus,";}"),content:/*#__PURE__*/(0,a/* .css */.AH)("height:calc(100% - ",s/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT+s/* .modal.MARGIN_TOP */.yl.MARGIN_TOP,"px);background-color:",c/* .colorTokens.surface.courseBuilder */.I6.surface.courseBuilder,";overflow-x:hidden;",p/* .styleUtils.overflowYAuto */.x.overflowYAuto)}},68118:function(e,t,r){r.d(t,{d:()=>o});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);var o=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,a]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},87018:function(e,t,r){r.d(t,{$:()=>s});/* import */var n=r(71893);/* import */var a=r(51298);/* import */var o=r(41594);/* import */var i=/*#__PURE__*/r.n(o);var l={defaultValue:false};var s=e=>{var t=(0,o.useRef)(null);var r=(0,n._)({},l,e);var[i,s]=(0,o.useState)(r.defaultValue);(0,o.useEffect)(()=>{if(!(0,a/* .isDefined */.O9)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){s(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){s(false);return}s(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:i}}},35804:function(e,t,r){r.d(t,{A:()=>u});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(12470);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var c=r(45549);var d=e=>{var{options:t={},onChange:r,initialFiles:i}=e;var{showToast:s}=(0,c/* .useToast */.d)();var d=(0,l.useMemo)(()=>i?Array.isArray(i)?i:[i]:[],[i]);var u=(0,l.useMemo)(()=>(0,a._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[f,p]=(0,l.useState)(d);(0,l.useEffect)(()=>{if(d&&!f.length){p(d)}},[f,d]);var v=(0,l.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();f.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=f.filter(e=>n.has(e.id));var i=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){s({// translators: %s is the file title
message:(0,o.sprintf)((0,o.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var l=u.multiple?[...a,...i]:i.slice(0,1);if(u.maxFiles&&l.length>u.maxFiles){s({// translators: %d is the maximum number of files allowed
message:(0,o.sprintf)((0,o.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}p(l);r===null||r===void 0?void 0:r(u.multiple?l:l[0]||null);t.close()});t.open()},[u,r,f,s]);var h=(0,l.useCallback)(()=>{p([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:v,existingFiles:f,resetFiles:h}};/* export default */const u=d},28109:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var o=r(10840);/* import */var i=r(36154);/* import */var l=r(17437);/* import */var s=r(41594);/* import */var c=/*#__PURE__*/r.n(s);function d(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function f(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);p=function t(){return e};return e}var v=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:o="horizontal",disabled:i=false,wrapperCss:l}=e;var c=(0,s.useRef)(n.map(()=>/*#__PURE__*/(0,s.createRef)()));var[d,u]=(0,s.useState)();(0,s.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,a,o,i;var l=c.current[r];var s={width:((n=l.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((a=l.current)===null||a===void 0?void 0:a.offsetHeight)||0,left:((o=l.current)===null||o===void 0?void 0:o.offsetLeft)||0,top:((i=l.current)===null||i===void 0?void 0:i.offsetTop)||0};e[t.value]=s;return e},{});u(e)},[n]);return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.container,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:[g.wrapper(o),l],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{onClick:()=>{r(e.value)},css:g.tabButton({isActive:t===e.value,orientation:o}),disabled:i||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:c.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,a/* .jsxs */.FD)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:g.activeBadge})]},n)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:g.indicator((d===null||d===void 0?void 0:d[t])||{width:0,height:0,left:0,top:0},o)})]})};/* export default */const h=v;var g={container:/*#__PURE__*/(0,l/* .css */.AH)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,l/* .css */.AH)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",o/* .shadow.tabs */.r7.tabs,";",e==="vertical"&&(0,l/* .css */.AH)(d())),indicator:(e,t)=>/*#__PURE__*/(0,l/* .css */.AH)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",o/* .colorTokens.brand.blue */.I6.brand.blue,";border-radius:",o/* .borderRadius["4"] */.Vq["4"]," ",o/* .borderRadius["4"] */.Vq["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,l/* .css */.AH)(u(),e.height,e.top,o/* .borderRadius["4"] */.Vq["4"],o/* .borderRadius["4"] */.Vq["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,l/* .css */.AH)(i/* .styleUtils.resetButton */.x.resetButton,";font-size:",o/* .fontSize["15"] */.J["15"],";line-height:",o/* .lineHeight["20"] */.K_["20"],";display:flex;justify-content:center;align-items:center;gap:",o/* .spacing["6"] */.YK["6"],";padding:",o/* .spacing["12"] */.YK["12"]," ",o/* .spacing["20"] */.YK["20"],";color:",o/* .colorTokens.text.subdued */.I6.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",o/* .colorTokens.text.subdued */.I6.text.subdued,";box-shadow:none;}& > svg{color:",o/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="vertical"&&(0,l/* .css */.AH)(f(),o/* .colorTokens.stroke.border */.I6.stroke.border,o/* .colorTokens.stroke.border */.I6.stroke.border)," ",t&&(0,l/* .css */.AH)(p(),o/* .colorTokens.background.white */.I6.background.white,o/* .colorTokens.text.primary */.I6.text.primary,o/* .colorTokens.text.subdued */.I6.text.subdued,o/* .colorTokens.icon.brand */.I6.icon.brand),"    &:disabled{color:",o/* .colorTokens.text.disable */.I6.text.disable,";&::before{background:",o/* .colorTokens.text.disable */.I6.text.disable,";}}&:focus-visible{outline:2px solid ",o/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",o/* .borderRadius["4"] */.Vq["4"],";}")},activeBadge:/*#__PURE__*/(0,l/* .css */.AH)("display:inline-block;height:8px;width:8px;border-radius:",o/* .borderRadius.circle */.Vq.circle,";background-color:",o/* .colorTokens.color.success["80"] */.I6.color.success["80"],";")}},34469:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(31105);/* import */var i=r(84577);/* import */var l=r(2445);/* import */var s=r(17437);/* import */var c=r(3771);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(41594);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(90209);/* import */var v=r(10840);/* import */var h=r(24219);/* import */var g=r(47617);/* import */var m=r(94654);/* import */var b=r(36154);/* import */var _=r(35198);function y(){var e=(0,i._)(["\n      padding-block: ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n      padding: "," ",";\n      ",";\n    "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      color: ",";\n      svg {\n        color: ",";\n      }\n\n      &:hover:not(:disabled) {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n\n      &:active {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n    "]);x=function t(){return e};return e}function A(){var e=(0,i._)(["\n      background-color: ",";\n      svg {\n        color: ",";\n      }\n    "]);A=function t(){return e};return e}function Y(){var e=(0,i._)(["\n      background-color: ",";\n      :hover {\n        background-color: ",";\n        svg {\n          color: ",";\n        }\n      }\n    "]);Y=function t(){return e};return e}var k=e=>{var{text:t,icon:r,onClick:i,onClosePopover:s,isTrash:c=false,size:d="medium",buttonCss:u,disabled:f}=e,p=(0,o._)(e,["text","icon","onClick","onClosePopover","isTrash","size","buttonCss","disabled"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("button",(0,a._)((0,n._)({type:"button",css:[C.option({isTrash:c,size:d}),u],onClick:e=>{if(i){i(e)}if(s){s()}},disabled:f},p),{children:[r&&r,/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:t})]}))};var I=e=>{var{onClick:t,isOpen:r,disabled:i=false,closePopover:s,placement:c=m/* .POPOVER_PLACEMENTS.BOTTOM_RIGHT */.zA.BOTTOM_RIGHT,children:d,animationType:v=g/* .AnimationType.slideLeft */.J6.slideLeft,dotsOrientation:h="horizontal",maxWidth:b="148px",isInverse:y=false,arrow:w=false,size:x="medium",closeOnEscape:A=true,wrapperCss:Y}=e,k=(0,o._)(e,["onClick","isOpen","disabled","closePopover","placement","children","animationType","dotsOrientation","maxWidth","isInverse","arrow","size","closeOnEscape","wrapperCss"]);var I=(0,u.useRef)(null);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",(0,a._)((0,n._)({type:"button",ref:I,onClick:t,css:[C.button({isOpen:r,isInverse:y,isDisabled:i}),Y],disabled:i},k),{children:/*#__PURE__*/(0,l/* .jsx */.Y)(p/* ["default"] */.A,{name:h==="horizontal"?"threeDots":"threeDotsVertical",width:32,height:32})})),/*#__PURE__*/(0,l/* .jsx */.Y)(_/* ["default"] */.A,{gap:13,maxWidth:b,placement:c,triggerRef:I,isOpen:r,closePopover:s,animationType:v,arrow:w,closeOnEscape:A,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:C.wrapper({size:x}),children:f().Children.map(d,e=>{if(/*#__PURE__*/f().isValidElement(e)){var t={size:x};return /*#__PURE__*/f().cloneElement(e,t)}return e})})})]})};I.Option=k;/* export default */const D=I;var C={wrapper:e=>{var{size:t="medium"}=e;return/*#__PURE__*/(0,s/* .css */.AH)("padding-block:",v/* .spacing["8"] */.YK["8"],";position:relative;",t==="small"&&(0,s/* .css */.AH)(y(),v/* .spacing["4"] */.YK["4"]))},option:e=>{var{isTrash:t=false,size:r="medium"}=e;return/*#__PURE__*/(0,s/* .css */.AH)(b/* .styleUtils.resetButton */.x.resetButton,";",h/* .typography.body */.I.body(),";width:100%;padding:",v/* .spacing["10"] */.YK["10"]," ",v/* .spacing["20"] */.YK["20"],";transition:background-color 0.3s ease-in-out;cursor:pointer;display:flex;align-items:center;gap:",v/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",v/* .colorTokens.text.primary */.I6.text.primary,";}svg{flex-shrink:0;color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="small"&&(0,s/* .css */.AH)(w(),v/* .spacing["8"] */.YK["8"],v/* .spacing["16"] */.YK["16"],h/* .typography.small */.I.small("medium")),":hover:not(:disabled){background-color:",v/* .colorTokens.background.hover */.I6.background.hover,";color:",v/* .colorTokens.text.title */.I6.text.title,";svg{color:",v/* .colorTokens.icon.hover */.I6.icon.hover,";filter:grayscale(0%);}}:disabled{cursor:not-allowed;color:",v/* .colorTokens.text.disable */.I6.text.disable,";svg{color:",v/* .colorTokens.icon.disable.background */.I6.icon.disable.background,";}}",t&&(0,s/* .css */.AH)(x(),v/* .colorTokens.text.error */.I6.text.error,v/* .colorTokens.icon.error */.I6.icon.error,v/* .colorTokens.text.error */.I6.text.error,d()(v/* .colorTokens.bg.error */.I6.bg.error,.1),v/* .colorTokens.icon.error */.I6.icon.error,v/* .colorTokens.text.error */.I6.text.error,v/* .colorTokens.color.danger["40"] */.I6.color.danger["40"],v/* .colorTokens.icon.error */.I6.icon.error),":focus-visible{outline:2px solid ",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-4px;border-radius:",v/* .borderRadius.input */.Vq.input,";}")},button:e=>{var{isOpen:t=false,isInverse:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)(b/* .styleUtils.resetButton */.x.resetButton,";width:32px;height:32px;border-radius:",v/* .borderRadius.circle */.Vq.circle,";display:flex;justify-content:center;align-items:center;transition:background-color 0.3s ease-in-out;svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;}:hover{background-color:",v/* .colorTokens.background.hover */.I6.background.hover,";svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}}&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}",t&&(0,s/* .css */.AH)(A(),v/* .colorTokens.background.hover */.I6.background.hover,v/* .colorTokens.icon.brand */.I6.icon.brand)," ",r&&(0,s/* .css */.AH)(Y(),v/* .colorTokens.background.white */.I6.background.white,v/* .colorTokens.background.white */.I6.background.white,!n&&v/* .colorTokens.icon.brand */.I6.icon.brand),":disabled{cursor:not-allowed;}")}}},85973:function(e,t,r){r.d(t,{TM:()=>d,gr:()=>f});/* import */var n=r(71893);/* import */var a=r(97286);/* import */var o=r(24880);/* import */var i=r(94747);/* import */var l=r(53127);/* import */var s=r(37381);var c=e=>{return l/* .wpAjaxInstance.get */.b.get(s/* ["default"].GET_COURSE_LIST */.A.GET_COURSE_LIST,{params:e})};var d=e=>{var{params:t,isEnabled:r}=e;return(0,a/* .useQuery */.I)({queryKey:["PrerequisiteCourses",t],queryFn:()=>c((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:o/* .keepPreviousData */.rX,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return l/* .wpAjaxInstance.post */.b.post(s/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.A.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var f=()=>{return(0,i/* .useMutation */.n)({mutationFn:u})};var p=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var v=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>p(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},29245:function(e,t,r){r.d(t,{J:()=>l,s:()=>s});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var o=r(15871);/* import */var i=r(43627);var l=e=>(0,i/* .defaultAnimateLayoutChanges */.uU)((0,a._)((0,n._)({},e),{wasDragging:true}));var s={droppable:{strategy:o/* .MeasuringStrategy.Always */.Pf.Always}}},66283:function(e,t,r){r.d(t,{JD:()=>i,KG:()=>a,M5:()=>c,dX:()=>s,kd:()=>n});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function a(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function o(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var a=new Uint8Array(n);for(var o=0;o<t.length;o++){a[o]=t.charCodeAt(o)}return new Blob([n],{type:r})}function i(e,t){var r=o(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function l(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var s=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var c=e=>{return e.toDataURL("image/png")}},38945:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},44880:function(e,t,r){r.d(t,{B:()=>o});/* import */var n=r(35581);/* import */var a=r(18525);class o extends a/* .TZDateMini */.q{//#region static
static tz(e,...t){return t.length?new o(...t,e):new o(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,a]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${a} (${(0,n/* .tzName */.K)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new o(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new o(+new Date(e),this.timeZone)}}},18525:function(e,t,r){r.d(t,{q:()=>a});/* import */var n=r(90865);class a extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.Y)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));s(this,NaN);i(this)}}}static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new a(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.Y)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);i(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}// Assign getters and setters
const o=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!o.test(e))return;const t=e.replace(o,"$1UTC");// Filter out methods without UTC counterparts
if(!a.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
a.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
a.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);l(this);return+this};// Assign UTC setter
a.prototype[t]=function(){Date.prototype[t].apply(this,arguments);i(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function i(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.Y)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function l(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
s(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function s(e){// Save the time zone offset before all the adjustments
const t=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const a=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
a.setUTCHours(a.getUTCHours()-1);// Calculate if we are on the system DST hour.
const o=-new Date(+e).getTimezoneOffset();const i=-new Date(+a).getTimezoneOffset();const l=o-i;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(l&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const c=o-r;if(c)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c);//#endregion
//#region Seconds System diff adjustment
const d=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
d.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=o>0?d.getSeconds():(d.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const f=Math.round(-((0,n/* .tzOffset */.Y)(e.timeZone,e)*60))%60;if(f||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+f);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+f+u)}//#endregion
//#region Post-adjustment DST fix
const p=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const v=p>0?Math.floor(p):Math.ceil(p);const h=-new Date(+e).getTimezoneOffset();const g=h-v;const m=v!==r;const b=g-c;if(m&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const a=v-r;if(a){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a)}}//#endregion
}},75583:function(e,t,r){r.d(t,{BB:()=>/* reexport safe */a.B});/* import */var n=r(38945);/* import */var a=r(44880);/* import */var o=r(18525);/* import */var i=r(61578)},61578:function(e,t,r){/* import */var n=r(44880);/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const a=e=>t=>TZDate.tz(e,+new Date(t))},35581:function(e,t,r){r.d(t,{K:()=>n});/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function n(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")}},90865:function(e,t,r){r.d(t,{Y:()=>o});const n={};const a={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function o(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const o=r(t).split("GMT")[1];if(o in a)return a[o];return l(o,o.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in a)return a[e];const t=e?.match(i);if(t)return l(e,t.slice(1));return NaN}}const i=/([+-]\d\d):?(\d\d)?/;function l(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const o=+(t[2]||0)/60;return a[e]=r*60+n>0?r*60+n+o:r*60-n-o}},87496:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(41594);/* import */var a=r(26261);/* import */var o=r(97665);"use client";// src/useIsFetching.ts
function i(e,t){const r=(0,o/* .useQueryClient */.jE)(t);const i=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>i.subscribe(a/* .notifyManager.batchCalls */.jG.batchCalls(e)),[i]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},5170:function(e,t,r){r.d(t,{h:()=>I});/* import */var n=r(75583);/* import */var a=r(41594);/* import */var o=r(56066);/* import */var i=r(32850);/* import */var l=r(37836);/* import */var s=r(19287);/* import */var c=r(87096);/* import */var d=r(78933);/* import */var u=r(1207);/* import */var f=r(39903);/* import */var p=r(63612);/* import */var v=r(66564);/* import */var h=r(86607);/* import */var g=r(57899);/* import */var m=r(93116);/* import */var b=r(97766);/* import */var _=r(68587);/* import */var y=r(58071);/* import */var w=r(51409);/* import */var x=r(53581);/* import */var A=r(33127);/* import */var Y=r(52044);/* import */var k=r(70684);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function I(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new n/* .TZDate */.BB(t.today,t.timeZone)}if(t.month){t.month=new n/* .TZDate */.BB(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new n/* .TZDate */.BB(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new n/* .TZDate */.BB(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new n/* .TZDate */.BB(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new n/* .TZDate */.BB(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new n/* .TZDate */.BB(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new n/* .TZDate */.BB(t.selected.from,t.timeZone):undefined,to:t.selected.to?new n/* .TZDate */.BB(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:I,labels:D,dateLib:C,locale:S,classNames:M}=(0,a.useMemo)(()=>{const e={...o/* .enUS */.c,...t.locale};const r=new i/* .DateLib */.i0({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,c/* .getComponents */.P)(t.components),formatters:(0,f/* .getFormatters */.G)(t.formatters),labels:{...m,...t.labels},locale:e,classNames:{...(0,u/* .getDefaultClassNames */.a)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:E,mode:T,navLayout:H,numberOfMonths:F=1,onDayBlur:N,onDayClick:K,onDayFocus:O,onDayKeyDown:P,onDayMouseEnter:W,onDayMouseLeave:L,onNextClick:R,onPrevClick:B,showWeekNumber:z,styles:U}=t;const{formatCaption:j,formatDay:q,formatMonthDropdown:V,formatWeekNumber:G,formatWeekNumberHeader:Q,formatWeekdayName:X,formatYearDropdown:Z}=I;const $=(0,y/* .useCalendar */._)(t,C);const{days:J,months:ee,navStart:et,navEnd:er,previousMonth:en,nextMonth:ea,goToMonth:eo}=$;const ei=(0,l/* .createGetModifiers */.x)(J,t,et,er,C);const{isSelected:el,select:es,selected:ec}=(0,A/* .useSelection */.C)(t,C)??{};const{blur:ed,focused:eu,isFocusTarget:ef,moveFocus:ep,setFocused:ev}=(0,x/* .useFocus */.i)(t,$,ei,el??(()=>false),C);const{labelDayButton:eh,labelGridcell:eg,labelGrid:em,labelMonthDropdown:eb,labelNav:e_,labelPrevious:ey,labelNext:ew,labelWeekday:ex,labelWeekNumber:eA,labelWeekNumberHeader:eY,labelYearDropdown:ek}=D;const eI=(0,a.useMemo)(()=>(0,h/* .getWeekdays */.c)(C,t.ISOWeek),[C,t.ISOWeek]);const eD=T!==undefined||K!==undefined;const eC=(0,a.useCallback)(()=>{if(!en)return;eo(en);B?.(en)},[en,eo,B]);const eS=(0,a.useCallback)(()=>{if(!ea)return;eo(ea);R?.(ea)},[eo,ea,R]);const eM=(0,a.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();ev(e);es?.(e.date,t,r);K?.(e.date,t,r)},[es,K,ev]);const eE=(0,a.useCallback)((e,t)=>r=>{ev(e);O?.(e.date,t,r)},[O,ev]);const eT=(0,a.useCallback)((e,t)=>r=>{ed();N?.(e.date,t,r)},[ed,N]);const eH=(0,a.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];ep(e,t)}P?.(e.date,r,n)},[ep,P,t.dir]);const eF=(0,a.useCallback)((e,t)=>r=>{W?.(e.date,t,r)},[W]);const eN=(0,a.useCallback)((e,t)=>r=>{L?.(e.date,t,r)},[L]);const eK=(0,a.useCallback)(e=>t=>{const r=Number(t.target.value);const n=C.setMonth(C.startOfMonth(e),r);eo(n)},[C,eo]);const eO=(0,a.useCallback)(e=>t=>{const r=Number(t.target.value);const n=C.setYear(C.startOfMonth(e),r);eo(n)},[C,eo]);const{className:eP,style:eW}=(0,a.useMemo)(()=>({className:[M[b.UI.Root],t.className].filter(Boolean).join(" "),style:{...U?.[b.UI.Root],...t.style}}),[M,t.className,t.style,U]);const eL=(0,d/* .getDataAttributes */.C)(t);const eR=(0,a.useRef)(null);(0,_/* .useAnimation */.s)(eR,Boolean(t.animate),{classNames:M,months:ee,focused:eu,dateLib:C});const eB={dayPickerProps:t,selected:ec,select:es,isSelected:el,months:ee,nextMonth:ea,previousMonth:en,goToMonth:eo,getModifiers:ei,components:r,classNames:M,styles:U,labels:D,formatters:I};return a.createElement(w/* .dayPickerContext.Provider */.S.Provider,{value:eB},a.createElement(r.Root,{rootRef:t.animate?eR:undefined,className:eP,style:eW,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...eL},a.createElement(r.Months,{className:M[b.UI.Months],style:U?.[b.UI.Months]},!t.hideNavigation&&!H&&a.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:M[b.UI.Nav],style:U?.[b.UI.Nav],"aria-label":e_(),onPreviousClick:eC,onNextClick:eS,previousMonth:en,nextMonth:ea}),ee.map((e,n)=>{return a.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:M[b.UI.Month],style:U?.[b.UI.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:n,displayIndex:n,calendarMonth:e},H==="around"&&!t.hideNavigation&&n===0&&a.createElement(r.PreviousMonthButton,{type:"button",className:M[b.UI.PreviousMonthButton],tabIndex:en?undefined:-1,"aria-disabled":en?undefined:true,"aria-label":ey(en),onClick:eC,"data-animated-button":t.animate?"true":undefined},a.createElement(r.Chevron,{disabled:en?undefined:true,className:M[b.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),a.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:M[b.UI.MonthCaption],style:U?.[b.UI.MonthCaption],calendarMonth:e,displayIndex:n},E?.startsWith("dropdown")?a.createElement(r.DropdownNav,{className:M[b.UI.Dropdowns],style:U?.[b.UI.Dropdowns]},(()=>{const n=E==="dropdown"||E==="dropdown-months"?a.createElement(r.MonthsDropdown,{key:"month",className:M[b.UI.MonthsDropdown],"aria-label":eb(),classNames:M,components:r,disabled:Boolean(t.disableNavigation),onChange:eK(e.date),options:(0,p/* .getMonthOptions */.L)(e.date,et,er,I,C),style:U?.[b.UI.Dropdown],value:C.getMonth(e.date)}):a.createElement("span",{key:"month"},V(e.date,C));const o=E==="dropdown"||E==="dropdown-years"?a.createElement(r.YearsDropdown,{key:"year",className:M[b.UI.YearsDropdown],"aria-label":ek(C.options),classNames:M,components:r,disabled:Boolean(t.disableNavigation),onChange:eO(e.date),options:(0,g/* .getYearOptions */.g)(et,er,I,C,Boolean(t.reverseYears)),style:U?.[b.UI.Dropdown],value:C.getYear(e.date)}):a.createElement("span",{key:"year"},Z(e.date,C));const i=C.getMonthYearOrder()==="year-first"?[o,n]:[n,o];return i})(),a.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},j(e.date,C.options,C))):// biome-ignore lint/a11y/useSemanticElements: breaking change
a.createElement(r.CaptionLabel,{className:M[b.UI.CaptionLabel],role:"status","aria-live":"polite"},j(e.date,C.options,C))),H==="around"&&!t.hideNavigation&&n===F-1&&a.createElement(r.NextMonthButton,{type:"button",className:M[b.UI.NextMonthButton],tabIndex:ea?undefined:-1,"aria-disabled":ea?undefined:true,"aria-label":ew(ea),onClick:eS,"data-animated-button":t.animate?"true":undefined},a.createElement(r.Chevron,{disabled:ea?undefined:true,className:M[b.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),n===F-1&&H==="after"&&!t.hideNavigation&&a.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:M[b.UI.Nav],style:U?.[b.UI.Nav],"aria-label":e_(),onPreviousClick:eC,onNextClick:eS,previousMonth:en,nextMonth:ea}),a.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":T==="multiple"||T==="range","aria-label":em(e.date,C.options,C)||undefined,className:M[b.UI.MonthGrid],style:U?.[b.UI.MonthGrid]},!t.hideWeekdays&&a.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:M[b.UI.Weekdays],style:U?.[b.UI.Weekdays]},z&&a.createElement(r.WeekNumberHeader,{"aria-label":eY(C.options),className:M[b.UI.WeekNumberHeader],style:U?.[b.UI.WeekNumberHeader],scope:"col"},Q()),eI.map(e=>a.createElement(r.Weekday,{"aria-label":ex(e,C.options,C),className:M[b.UI.Weekday],key:String(e),style:U?.[b.UI.Weekday],scope:"col"},X(e,C.options,C)))),a.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:M[b.UI.Weeks],style:U?.[b.UI.Weeks]},e.weeks.map(e=>{return a.createElement(r.Week,{className:M[b.UI.Week],key:e.weekNumber,style:U?.[b.UI.Week],week:e},z&&// biome-ignore lint/a11y/useSemanticElements: react component
a.createElement(r.WeekNumber,{week:e,style:U?.[b.UI.WeekNumber],"aria-label":eA(e.weekNumber,{locale:S}),className:M[b.UI.WeekNumber],scope:"row",role:"rowheader"},G(e.weekNumber,C)),e.days.map(e=>{const{date:n}=e;const o=ei(e);o[b/* .DayFlag.focused */.pL.focused]=!o.hidden&&Boolean(eu?.isEqualTo(e));o[b/* .SelectionState.selected */.wc.selected]=el?.(n)||o.selected;if((0,k/* .isDateRange */.oM)(ec)){// add range modifiers
const{from:e,to:t}=ec;o[b/* .SelectionState.range_start */.wc.range_start]=Boolean(e&&t&&C.isSameDay(n,e));o[b/* .SelectionState.range_end */.wc.range_end]=Boolean(e&&t&&C.isSameDay(n,t));o[b/* .SelectionState.range_middle */.wc.range_middle]=(0,Y/* .rangeIncludesDate */.R)(ec,n,true,C)}const i=(0,v/* .getStyleForModifiers */.J)(o,U,t.modifiersStyles);const l=(0,s/* .getClassNamesForModifiers */.k)(o,M,t.modifiersClassNames);const c=!eD&&!o.hidden?eg(n,o,C.options,C):undefined;return(// biome-ignore lint/a11y/useSemanticElements: react component
a.createElement(r.Day,{key:`${C.format(n,"yyyy-MM-dd")}_${C.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:o,className:l.join(" "),style:i,role:"gridcell","aria-selected":o.selected||undefined,"aria-label":c,"data-day":C.format(n,"yyyy-MM-dd"),"data-month":e.outside?C.format(n,"yyyy-MM"):undefined,"data-selected":o.selected||undefined,"data-disabled":o.disabled||undefined,"data-hidden":o.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":o.focused||undefined,"data-today":o.today||undefined},!o.hidden&&eD?a.createElement(r.DayButton,{className:M[b.UI.DayButton],style:U?.[b.UI.DayButton],type:"button",day:e,modifiers:o,disabled:o.disabled||undefined,tabIndex:ef(e)?0:-1,"aria-label":eh(n,o,C.options,C),onClick:eM(e,o),onBlur:eT(e,o),onFocus:eE(e,o),onKeyDown:eH(e,o),onMouseEnter:eF(e,o),onMouseLeave:eN(e,o)},q(n,C.options,C)):!o.hidden&&q(e.date,C.options,C)))}))}))))})),t.footer&&// biome-ignore lint/a11y/useSemanticElements: react component
a.createElement(r.Footer,{className:M[b.UI.Footer],style:U?.[b.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}},97766:function(e,t,r){r.d(t,{UI:()=>n,X5:()=>i,pL:()=>a,wc:()=>o});/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var n;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(n||(n={}));/** Enum representing flags for the {@link UI.Day} element. */var a;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(a||(a={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var o;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(o||(o={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var i;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(i||(i={}))},61797:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(32850);/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class a{constructor(e,t,r=n/* .defaultDateLib */.VA){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}},48665:function(e,t,r){r.d(t,{j:()=>n});/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class n{constructor(e,t){this.date=e;this.weeks=t}}},46483:function(e,t,r){r.d(t,{j:()=>n});/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}},32850:function(e,t,r){r.d(t,{VA:()=>L,i0:()=>W});/* import */var n=r(75583);/* import */var a=r(80517);/* import */var o=r(39669);/* import */var i=r(98637);/* import */var l=r(2510);/* import */var s=r(26496);/* import */var c=r(4556);/* import */var d=r(80436);/* import */var u=r(3929);/* import */var f=r(65636);/* import */var p=r(50527);/* import */var v=r(1741);/* import */var h=r(94528);/* import */var g=r(37902);/* import */var m=r(11456);/* import */var b=r(16331);/* import */var _=r(27372);/* import */var y=r(64585);/* import */var w=r(71271);/* import */var x=r(97822);/* import */var A=r(21721);/* import */var Y=r(13249);/* import */var k=r(21309);/* import */var I=r(29318);/* import */var D=r(78127);/* import */var C=r(35093);/* import */var S=r(49407);/* import */var M=r(90208);/* import */var E=r(8008);/* import */var T=r(99719);/* import */var H=r(74880);/* import */var F=r(73524);/* import */var N=r(40525);/* import */var K=r(56066);/* import */var O=r(99905);/* import */var P=r(73958);/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class W{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return n/* .TZDate.tz */.BB.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new n/* .TZDate */.BB(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):(0,a/* .addDays */.f)(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,o/* .addMonths */.P)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,i/* .addWeeks */.J)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,l/* .addYears */.e)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,s/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,c/* .differenceInCalendarMonths */.U)(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):(0,d/* .eachMonthOfInterval */.i)(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):(0,u/* .eachYearOfInterval */.z)(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,O/* .endOfBroadcastWeek */.O)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,f/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,p/* .endOfMonth */.p)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,v/* .endOfWeek */.$)(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):(0,h/* .endOfYear */.Q)(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,g/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,m/* .getISOWeek */.s)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):(0,b/* .getMonth */.t)(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):(0,_/* .getYear */.C)(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,y/* .getWeek */.N)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):(0,w/* .isAfter */.d)(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):(0,x/* .isBefore */.Y)(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,A/* .isDate */.$)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):(0,Y/* .isSameDay */.r)(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):(0,k/* .isSameMonth */.t)(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):(0,I/* .isSameYear */.s)(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):(0,D/* .max */.T)(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):(0,C/* .min */.j)(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,S/* .setMonth */.Z)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,M/* .setYear */.i)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,P/* .startOfBroadcastWeek */.l)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,E/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,T/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,H/* .startOfMonth */.w)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,F/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,N/* .startOfYear */.D)(e)};this.options={locale:K/* .enUS */.c,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}/**
     * Returns the preferred ordering for month and year labels for the current
     * locale.
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return W.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const a=t?.code;if(a&&W.yearFirstLocales.has(a)){try{const t=new Intl.DateTimeFormat(a,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const o=t.format(e);return o}catch{// Fallback to date-fns formatting below.
}}const o=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,o)}}W.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const L=new W;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const R=/* unused pure expression or super */null&&L},91327:function(e,t,r){r.d(t,{$:()=>a});/* import */var n=r(41594);/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function a(e){return n.createElement("button",{...e})}},77307:function(e,t,r){r.d(t,{$:()=>a});/* import */var n=r(41594);/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("span",{...e})}},83180:function(e,t,r){r.d(t,{c:()=>a});/* import */var n=r(41594);/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{size:t=24,orientation:r="left",className:a}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
n.createElement("svg",{className:a,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&n.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&n.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&n.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&n.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))}},721:function(e,t,r){r.d(t,{L:()=>a});/* import */var n=r(41594);/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;return n.createElement("td",{...a})}},80985:function(e,t,r){r.d(t,{x:()=>a});/* import */var n=r(41594);/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;const o=n.useRef(null);n.useEffect(()=>{if(r.focused)o.current?.focus()},[r.focused]);return n.createElement("button",{ref:o,...a})}},69618:function(e,t,r){r.d(t,{m:()=>o});/* import */var n=r(41594);/* import */var a=r(97766);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{options:t,className:r,components:o,classNames:i,...l}=e;const s=[i[a.UI.Dropdown],r].join(" ");const c=t?.find(({value:e})=>e===l.value);return n.createElement("span",{"data-disabled":l.disabled,className:i[a.UI.DropdownRoot]},n.createElement(o.Select,{className:s,...l},t?.map(({value:e,label:t,disabled:r})=>n.createElement(o.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:i[a.UI.CaptionLabel],"aria-hidden":true},c?.label,n.createElement(o.Chevron,{orientation:"down",size:18,className:i[a.UI.Chevron]})))}},92833:function(e,t,r){r.d(t,{z:()=>a});/* import */var n=r(41594);/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}},57836:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(41594);/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}},57933:function(e,t,r){r.d(t,{f:()=>a});/* import */var n=r(41594);/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a},e.children)}},22507:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(41594);/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a})}},71941:function(e,t,r){r.d(t,{D:()=>a});/* import */var n=r(41594);/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("table",{...e})}},94632:function(e,t,r){r.d(t,{i:()=>a});/* import */var n=r(41594);/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}},78181:function(e,t,r){r.d(t,{l:()=>o});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},56362:function(e,t,r){r.d(t,{s:()=>i});/* import */var n=r(41594);/* import */var a=r(97766);/* import */var o=r(51409);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{onPreviousClick:t,onNextClick:r,previousMonth:i,nextMonth:l,...s}=e;const{components:c,classNames:d,labels:{labelPrevious:u,labelNext:f}}=(0,o/* .useDayPicker */.w)();const p=(0,n.useCallback)(e=>{if(l){r?.(e)}},[l,r]);const v=(0,n.useCallback)(e=>{if(i){t?.(e)}},[i,t]);return n.createElement("nav",{...s},n.createElement(c.PreviousMonthButton,{type:"button",className:d[a.UI.PreviousMonthButton],tabIndex:i?undefined:-1,"aria-disabled":i?undefined:true,"aria-label":u(i),onClick:v},n.createElement(c.Chevron,{disabled:i?undefined:true,className:d[a.UI.Chevron],orientation:"left"})),n.createElement(c.NextMonthButton,{type:"button",className:d[a.UI.NextMonthButton],tabIndex:l?undefined:-1,"aria-disabled":l?undefined:true,"aria-label":f(l),onClick:p},n.createElement(c.Chevron,{disabled:l?undefined:true,orientation:"right",className:d[a.UI.Chevron]})))}},19330:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},4726:function(e,t,r){r.d(t,{c:()=>a});/* import */var n=r(41594);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("option",{...e})}},87006:function(e,t,r){r.d(t,{u:()=>o});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},58219:function(e,t,r){r.d(t,{b:()=>a});/* import */var n=r(41594);/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{rootRef:t,...r}=e;return n.createElement("div",{...r,ref:t})}},27787:function(e,t,r){r.d(t,{l:()=>a});/* import */var n=r(41594);/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("select",{...e})}},80007:function(e,t,r){r.d(t,{j:()=>a});/* import */var n=r(41594);/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("tr",{...r})}},72818:function(e,t,r){r.d(t,{u:()=>a});/* import */var n=r(41594);/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("th",{...r})}},73531:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(41594);/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}},66213:function(e,t,r){r.d(t,{B:()=>a});/* import */var n=r(41594);/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}},97328:function(e,t,r){r.d(t,{S:()=>a});/* import */var n=r(41594);/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("thead",{"aria-hidden":true},n.createElement("tr",{...e}))}},29106:function(e,t,r){r.d(t,{m:()=>a});/* import */var n=r(41594);/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("tbody",{...e})}},49600:function(e,t,r){r.d(t,{w:()=>o});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},32917:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.$,CaptionLabel:()=>/* reexport safe */a.$,Chevron:()=>/* reexport safe */o.c,Day:()=>/* reexport safe */i.L,DayButton:()=>/* reexport safe */l.x,Dropdown:()=>/* reexport safe */s.m,DropdownNav:()=>/* reexport safe */c.z,Footer:()=>/* reexport safe */d.w,Month:()=>/* reexport safe */u.f,MonthCaption:()=>/* reexport safe */f.P,MonthGrid:()=>/* reexport safe */p.D,Months:()=>/* reexport safe */v.i,MonthsDropdown:()=>/* reexport safe */h.l,Nav:()=>/* reexport safe */g.s,NextMonthButton:()=>/* reexport safe */m.i,Option:()=>/* reexport safe */b.c,PreviousMonthButton:()=>/* reexport safe */_.u,Root:()=>/* reexport safe */y.b,Select:()=>/* reexport safe */w.l,Week:()=>/* reexport safe */x.j,WeekNumber:()=>/* reexport safe */k.u,WeekNumberHeader:()=>/* reexport safe */I.t,Weekday:()=>/* reexport safe */A.B,Weekdays:()=>/* reexport safe */Y.S,Weeks:()=>/* reexport safe */D.m,YearsDropdown:()=>/* reexport safe */C.w});/* import */var n=r(91327);/* import */var a=r(77307);/* import */var o=r(83180);/* import */var i=r(721);/* import */var l=r(80985);/* import */var s=r(69618);/* import */var c=r(92833);/* import */var d=r(57836);/* import */var u=r(57933);/* import */var f=r(22507);/* import */var p=r(71941);/* import */var v=r(94632);/* import */var h=r(78181);/* import */var g=r(56362);/* import */var m=r(19330);/* import */var b=r(4726);/* import */var _=r(87006);/* import */var y=r(58219);/* import */var w=r(27787);/* import */var x=r(80007);/* import */var A=r(66213);/* import */var Y=r(97328);/* import */var k=r(72818);/* import */var I=r(73531);/* import */var D=r(29106);/* import */var C=r(49600)},13907:function(e,t,r){r.d(t,{G:()=>o,w:()=>a});/* import */var n=r(32850);/**
 * Formats the caption of the month.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){const a=r??new n/* .DateLib */.i0(t);return a.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const o=a},13663:function(e,t,r){r.d(t,{i:()=>a});/* import */var n=r(32850);/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"d")}},36306:function(e,t,r){r.d(t,{Z:()=>a});/* import */var n=r(32850);/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.VA){return t.format(e,"LLLL")}},82104:function(e,t,r){r.d(t,{n:()=>a});/* import */var n=r(32850);/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.VA){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)}},61757:function(e,t,r){r.d(t,{U:()=>n});/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function n(){return``}},52756:function(e,t,r){r.d(t,{Z:()=>a});/* import */var n=r(32850);/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"cccccc")}},72881:function(e,t,r){r.d(t,{D:()=>o,e:()=>a});/* import */var n=r(32850);/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.VA){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const o=a},84608:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.w,formatDay:()=>/* reexport safe */a.i,formatMonthCaption:()=>/* reexport safe */n.G,formatMonthDropdown:()=>/* reexport safe */o.Z,formatWeekNumber:()=>/* reexport safe */l.n,formatWeekNumberHeader:()=>/* reexport safe */s.U,formatWeekdayName:()=>/* reexport safe */i.Z,formatYearCaption:()=>/* reexport safe */c.D,formatYearDropdown:()=>/* reexport safe */c.e});/* import */var n=r(13907);/* import */var a=r(13663);/* import */var o=r(36306);/* import */var i=r(52756);/* import */var l=r(82104);/* import */var s=r(61757);/* import */var c=r(72881)},38547:function(e,t,r){r.d(t,{A:()=>i});/* import */var n=r(97766);var a;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(a||(a={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function o(e){return!e[n/* .DayFlag.disabled */.pL.disabled]&&!e[n/* .DayFlag.hidden */.pL.hidden]&&!e[n/* .DayFlag.outside */.pL.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function i(e,t,r,i){let l;let s=-1;for(const c of e){const e=t(c);if(o(e)){if(e[n/* .DayFlag.focused */.pL.focused]&&s<a.FocusedModifier){l=c;s=a.FocusedModifier}else if(i?.isEqualTo(c)&&s<a.LastFocused){l=c;s=a.LastFocused}else if(r(c.date)&&s<a.Selected){l=c;s=a.Selected}else if(e[n/* .DayFlag.today */.pL.today]&&s<a.Today){l=c;s=a.Today}}}if(!l){// Return the first day that is focusable
l=e.find(e=>o(t(e)))}return l}},37836:function(e,t,r){r.d(t,{x:()=>o});/* import */var n=r(97766);/* import */var a=r(87331);/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function o(e,t,r,o,i){const{disabled:l,hidden:s,modifiers:c,showOutsideDays:d,broadcastCalendar:u,today:f}=t;const{isSameDay:p,isSameMonth:v,startOfMonth:h,isBefore:g,endOfMonth:m,isAfter:b}=i;const _=r&&h(r);const y=o&&m(o);const w={[n/* .DayFlag.focused */.pL.focused]:[],[n/* .DayFlag.outside */.pL.outside]:[],[n/* .DayFlag.disabled */.pL.disabled]:[],[n/* .DayFlag.hidden */.pL.hidden]:[],[n/* .DayFlag.today */.pL.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!v(e,r));const o=Boolean(_&&g(e,_));const h=Boolean(y&&b(e,y));const m=Boolean(l&&(0,a/* .dateMatchModifiers */.k)(e,l,i));const A=Boolean(s&&(0,a/* .dateMatchModifiers */.k)(e,s,i))||o||h||// Broadcast calendar will show outside days as default
!u&&!d&&n||u&&d===false&&n;const Y=p(e,f??i.today());if(n)w.outside.push(t);if(m)w.disabled.push(t);if(A)w.hidden.push(t);if(Y)w.today.push(t);// Add custom modifiers
if(c){Object.keys(c).forEach(r=>{const n=c?.[r];const o=n?(0,a/* .dateMatchModifiers */.k)(e,n,i):false;if(!o)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.pL.focused]:false,[n/* .DayFlag.disabled */.pL.disabled]:false,[n/* .DayFlag.hidden */.pL.hidden]:false,[n/* .DayFlag.outside */.pL.outside]:false,[n/* .DayFlag.today */.pL.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}},99905:function(e,t,r){r.d(t,{O:()=>o});/* import */var n=r(21337);/* import */var a=r(73958);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function o(e,t){const r=(0,a/* .startOfBroadcastWeek */.l)(e,t);const o=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const i=t.addDays(r,o*7-1);return i}},21337:function(e,t,r){r.d(t,{I:()=>o});const n=5;const a=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function o(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const o=r.getDay()>0?r.getDay():7;const i=t.addDays(e,-o+1);const l=t.addDays(i,n*7-1);const s=t.getMonth(e)===t.getMonth(l)?n:a;return s}},19287:function(e,t,r){r.d(t,{k:()=>a});/* import */var n=r(97766);/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function a(e,t,r={}){const o=Object.entries(e).filter(([,e])=>e===true).reduce((e,[a])=>{if(r[a]){e.push(r[a])}else if(t[n/* .DayFlag */.pL[a]]){e.push(t[n/* .DayFlag */.pL[a]])}else if(t[n/* .SelectionState */.wc[a]]){e.push(t[n/* .SelectionState */.wc[a]])}return e},[t[n.UI.Day]]);return o}},87096:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(32917);/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function a(e){return{...n,...e}}},78933:function(e,t,r){r.d(t,{C:()=>n});/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function n(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t}},18711:function(e,t,r){r.d(t,{Y:()=>n});/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function n(e,t,r,n){const a=e[0];const o=e[e.length-1];const{ISOWeek:i,fixedWeeks:l,broadcastCalendar:s}=r??{};const{addDays:c,differenceInCalendarDays:d,differenceInCalendarMonths:u,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:v,endOfWeek:h,isAfter:g,startOfBroadcastWeek:m,startOfISOWeek:b,startOfWeek:_}=n;const y=s?m(a,n):i?b(a):_(a);const w=s?f(o):i?p(v(o)):h(v(o));const x=d(w,y);const A=u(o,a)+1;const Y=[];for(let e=0;e<=x;e++){const r=c(y,e);if(t&&g(r,t)){break}Y.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const k=s?35:42;const I=k*A;if(l&&Y.length<I){const e=I-Y.length;for(let t=0;t<e;t++){const e=c(Y[Y.length-1],1);Y.push(e)}}return Y}},9727:function(e,t,r){r.d(t,{_:()=>n});/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function n(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())}},1207:function(e,t,r){r.d(t,{a:()=>a});/* import */var n=r(97766);/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function a(){const e={};for(const t in n.UI){e[n.UI[t]]=`rdp-${n.UI[t]}`}for(const t in n/* .DayFlag */.pL){e[n/* .DayFlag */.pL[t]]=`rdp-${n/* .DayFlag */.pL[t]}`}for(const t in n/* .SelectionState */.wc){e[n/* .SelectionState */.wc[t]]=`rdp-${n/* .SelectionState */.wc[t]}`}for(const t in n/* .Animation */.X5){e[n/* .Animation */.X5[t]]=`rdp-${n/* .Animation */.X5[t]}`}return e}},14151:function(e,t,r){r.d(t,{o:()=>n});/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function n(e,t,r,n){const{numberOfMonths:a=1}=r;const o=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}o.push(a)}return o}},69030:function(e,t,r){r.d(t,{l:()=>n});/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function n(e,t,r,n,a,o,i){const{ISOWeek:l,broadcastCalendar:s}=o;const{addDays:c,addMonths:d,addWeeks:u,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:v,endOfWeek:h,max:g,min:m,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=i;const w={day:c,week:u,month:d,year:f,startOfWeek:e=>s?b(e,i):l?_(e):y(e),endOfWeek:e=>s?p(e):l?v(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=g([n,x])}else if(t==="after"&&a){x=m([a,x])}return x}},39903:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(84608);/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function a(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...n,...e}}},31094:function(e,t,r){r.d(t,{Z:()=>n});/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function n(e,t,r,n){const{month:a,defaultMonth:o,today:i=n.today(),numberOfMonths:l=1}=e;let s=a||o||i;const{differenceInCalendarMonths:c,addMonths:d,startOfMonth:u}=n;if(r&&c(r,s)<l-1){const e=-1*(l-1);s=d(r,e)}if(t&&c(s,t)<0){s=t}return u(s)}},63612:function(e,t,r){r.d(t,{L:()=>n});/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function n(e,t,r,n,a){const{startOfMonth:o,startOfYear:i,endOfYear:l,eachMonthOfInterval:s,getMonth:c}=a;const d=s({start:i(e),end:l(e)});const u=d.map(e=>{const i=n.formatMonthDropdown(e,a);const l=c(e);const s=t&&e<o(t)||r&&e>o(r)||false;return{value:l,label:i,disabled:s}});return u}},72631:function(e,t,r){r.d(t,{S:()=>i});/* import */var n=r(61797);/* import */var a=r(46483);/* import */var o=r(48665);/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function i(e,t,r,i){const{addDays:l,endOfBroadcastWeek:s,endOfISOWeek:c,endOfMonth:d,endOfWeek:u,getISOWeek:f,getWeek:p,startOfBroadcastWeek:v,startOfISOWeek:h,startOfWeek:g}=i;const m=e.reduce((e,m)=>{const b=r.broadcastCalendar?v(m,i):r.ISOWeek?h(m):g(m);const _=r.broadcastCalendar?s(m):r.ISOWeek?c(d(m)):u(d(m));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=l(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const o=r.ISOWeek?f(t):p(t);const l=e.find(e=>e.weekNumber===o);const s=new n/* .CalendarDay */.P(t,m,i);if(!l){e.push(new a/* .CalendarWeek */.j(o,[s]))}else{l.days.push(s)}return e},[]);const A=new o/* .CalendarMonth */.j(m,x);e.push(A);return e},[]);if(!r.reverseMonths){return m}else{return m.reverse()}}},21289:function(e,t,r){r.d(t,{J:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:o,startOfMonth:i,endOfMonth:l,addYears:s,endOfYear:c,newDate:d,today:u}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:v,toMonth:h}=e;if(!r&&v){r=v}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&h){n=h}if(!n&&p){n=d(p,11,31)}const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(f){r=d(f,0,1)}else if(!r&&g){r=a(s(e.today??u(),-100))}if(n){n=l(n)}else if(p){n=d(p,11,31)}else if(!n&&g){n=c(e.today??u())}return[r?o(r):r,n?o(n):n]}},91725:function(e,t,r){r.d(t,{O:()=>i});/* import */var n=r(61797);/* import */var a=r(87331);/* import */var o=r(69030);/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function i(e,t,r,l,s,c,d,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const f=(0,o/* .getFocusableDate */.l)(e,t,r.date,l,s,c,d);const p=Boolean(c.disabled&&(0,a/* .dateMatchModifiers */.k)(f,c.disabled,d));const v=Boolean(c.hidden&&(0,a/* .dateMatchModifiers */.k)(f,c.hidden,d));const h=f;const g=new n/* .CalendarDay */.P(f,h,d);if(!p&&!v){return g}// Recursively attempt to find the next focusable date
return i(e,t,g,l,s,c,d,u+1)}},80807:function(e,t,r){r.d(t,{Q:()=>n});/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o=1}=r;const{startOfMonth:i,addMonths:l,differenceInCalendarMonths:s}=n;const c=a?o:1;const d=i(e);if(!t){return l(d,c)}const u=s(t,e);if(u<o){return undefined}return l(d,c)}},93987:function(e,t,r){r.d(t,{E:()=>n});/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o}=r;const{startOfMonth:i,addMonths:l,differenceInCalendarMonths:s}=n;const c=a?o??1:1;const d=i(e);if(!t){return l(d,-c)}const u=s(d,t);if(u<=0){return undefined}return l(d,-c)}},66564:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(97766);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function a(e,t={},r={}){let o={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{o={...o,...r?.[e]}});return o}},86607:function(e,t,r){r.d(t,{c:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r){const n=e.today();const a=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const o=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);o.push(r)}return o}},24595:function(e,t,r){r.d(t,{C:()=>n});/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function n(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())}},57899:function(e,t,r){r.d(t,{g:()=>n});/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @param reverse If true, reverses the order of the years (descending).
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function n(e,t,r,a,o=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:i,endOfYear:l,eachYearOfInterval:s,getYear:c}=a;const d=i(e);const u=l(t);const f=s({start:d,end:u});if(o)f.reverse();return f.map(e=>{const t=r.formatYearDropdown(e,a);return{value:c(e),label:t,disabled:false}})}},73958:function(e,t,r){r.d(t,{l:()=>n});/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function n(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}}},74612:function(e,t,r){r.d(t,{j:()=>a});/* import */var n=r(41594);/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function a(e,t){const[r,a]=(0,n.useState)(e);const o=t===undefined?r:t;return[o,a]}},93116:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */a.t,labelDay:()=>/* reexport safe */n.Z,labelDayButton:()=>/* reexport safe */n.n,labelGrid:()=>/* reexport safe */a.b,labelGridcell:()=>/* reexport safe */o.P,labelMonthDropdown:()=>/* reexport safe */i.a,labelNav:()=>/* reexport safe */l.y,labelNext:()=>/* reexport safe */s.s,labelPrevious:()=>/* reexport safe */c.o,labelWeekNumber:()=>/* reexport safe */u.k,labelWeekNumberHeader:()=>/* reexport safe */f.N,labelWeekday:()=>/* reexport safe */d.n,labelYearDropdown:()=>/* reexport safe */p.n});/* import */var n=r(59830);/* import */var a=r(67918);/* import */var o=r(23462);/* import */var i=r(35227);/* import */var l=r(69545);/* import */var s=r(35179);/* import */var c=r(80651);/* import */var d=r(14618);/* import */var u=r(94923);/* import */var f=r(56690);/* import */var p=r(6998)},59830:function(e,t,r){r.d(t,{Z:()=>o,n:()=>a});/* import */var n=r(32850);/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let o=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t.today)o=`Today, ${o}`;if(t.selected)o=`${o}, selected`;return o}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const o=a},67918:function(e,t,r){r.d(t,{b:()=>a,t:()=>o});/* import */var n=r(32850);/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){const a=r??new n/* .DateLib */.i0(t);return a.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const o=a},23462:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(32850);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let o=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t?.today){o=`Today, ${o}`}return o}},35227:function(e,t,r){r.d(t,{a:()=>n});/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Month"}},69545:function(e,t,r){r.d(t,{y:()=>n});/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(){return""}},35179:function(e,t,r){r.d(t,{s:()=>n});/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Next Month"}},80651:function(e,t,r){r.d(t,{o:()=>n});/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Previous Month"}},94923:function(e,t,r){r.d(t,{k:()=>n});/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e,t){return`Week ${e}`}},56690:function(e,t,r){r.d(t,{N:()=>n});/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Week Number"}},14618:function(e,t,r){r.d(t,{n:()=>a});/* import */var n=r(32850);/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"cccc")}},6998:function(e,t,r){r.d(t,{n:()=>n});/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Year"}},16687:function(e,t,r){r.d(t,{N:()=>a});/* import */var n=r(74612);/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:o}=e;const[i,l]=(0,n/* .useControlledValue */.j)(r,o?r:undefined);const s=!o?i:r;const{isSameDay:c}=t;const d=e=>{return s?.some(t=>c(t,e))??false};const{min:u,max:f}=e;const p=(e,t,r)=>{let n=[...s??[]];if(d(e)){if(s?.length===u){// Min value reached, do nothing
return}if(a&&s?.length===1){// Required value already selected do nothing
return}n=s?.filter(t=>!c(t,e))}else{if(s?.length===f){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!o){l(n)}o?.(n,e,t,r);return n};return{selected:s,select:p,isSelected:d}}},55115:function(e,t,r){r.d(t,{f:()=>l});/* import */var n=r(74612);/* import */var a=r(80653);/* import */var o=r(16660);/* import */var i=r(52044);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function l(e,t){const{disabled:r,excludeDisabled:l,selected:s,required:c,onSelect:d}=e;const[u,f]=(0,n/* .useControlledValue */.j)(s,d?s:undefined);const p=!d?u:s;const v=e=>p&&(0,i/* .rangeIncludesDate */.R)(p,e,false,t);const h=(n,i,s)=>{const{min:u,max:v}=e;const h=n?(0,a/* .addToRange */.M)(n,p,u,v,c,t):undefined;if(l&&r&&h?.from&&h.to){if((0,o/* .rangeContainsModifiers */.P)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!d){f(h)}d?.(h,n,i,s);return h};return{selected:p,select:h,isSelected:v}}},47012:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(74612);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:o}=e;const[i,l]=(0,n/* .useControlledValue */.j)(r,o?r:undefined);const s=!o?i:r;const{isSameDay:c}=t;const d=e=>{return s?c(s,e):false};const u=(e,t,r)=>{let n=e;if(!a&&s&&s&&c(e,s)){// If the date is the same, clear the selection.
n=undefined}if(!o){l(n)}if(a){o?.(n,e,t,r)}else{o?.(n,e,t,r)}return n};return{selected:s,select:u,isSelected:d}}},68587:function(e,t,r){r.d(t,{s:()=>f});/* import */var n=r(41594);/* import */var a=r(97766);const o=e=>{if(e instanceof HTMLElement)return e;return null};const i=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const l=e=>o(e.querySelector("[data-animated-month]"));const s=e=>o(e.querySelector("[data-animated-caption]"));const c=e=>o(e.querySelector("[data-animated-weeks]"));const d=e=>o(e.querySelector("[data-animated-nav]"));const u=e=>o(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function f(e,t,{classNames:r,months:o,focused:f,dateLib:p}){const v=(0,n.useRef)(null);const h=(0,n.useRef)(o);const g=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=o;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
o.length===0||n.length===0||o.length!==n.length){return}const m=p.isSameMonth(o[0].date,n[0].date);const b=p.isAfter(o[0].date,n[0].date);const _=b?r[a/* .Animation.caption_after_enter */.X5.caption_after_enter]:r[a/* .Animation.caption_before_enter */.X5.caption_before_enter];const y=b?r[a/* .Animation.weeks_after_enter */.X5.weeks_after_enter]:r[a/* .Animation.weeks_before_enter */.X5.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=v.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=i(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=l(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=s(e);if(r){r.classList.remove(_)}const n=c(e);if(n){n.classList.remove(y)}});v.current=x}else{v.current=null}if(g.current||m||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
f){return}const A=w instanceof HTMLElement?i(w):[];const Y=i(e.current);if(Y?.every(e=>e instanceof HTMLElement)&&A&&A.every(e=>e instanceof HTMLElement)){g.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=d(e.current);if(n){n.style.zIndex="1"}Y.forEach((o,i)=>{const l=A[i];if(!l){return}// animate new displayed month
o.style.position="relative";o.style.overflow="hidden";const d=s(o);if(d){d.classList.add(_)}const f=c(o);if(f){f.classList.add(y)}// animate new displayed month end
const p=()=>{g.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(d){d.classList.remove(_)}if(f){f.classList.remove(y)}o.style.position="";o.style.overflow="";if(o.contains(l)){o.removeChild(l)}};t.push(p);// animate old displayed month
l.style.pointerEvents="none";l.style.position="absolute";l.style.overflow="hidden";l.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const v=u(l);if(v){v.style.opacity="0"}const h=s(l);if(h){h.classList.add(b?r[a/* .Animation.caption_before_exit */.X5.caption_before_exit]:r[a/* .Animation.caption_after_exit */.X5.caption_after_exit]);h.addEventListener("animationend",p)}const m=c(l);if(m){m.classList.add(b?r[a/* .Animation.weeks_before_exit */.X5.weeks_before_exit]:r[a/* .Animation.weeks_after_exit */.X5.weeks_after_exit])}o.insertBefore(l,o.firstChild)})}})}},58071:function(e,t,r){r.d(t,{_:()=>v});/* import */var n=r(41594);/* import */var a=r(18711);/* import */var o=r(9727);/* import */var i=r(14151);/* import */var l=r(31094);/* import */var s=r(72631);/* import */var c=r(21289);/* import */var d=r(80807);/* import */var u=r(93987);/* import */var f=r(24595);/* import */var p=r(74612);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function v(e,t){const[r,v]=(0,c/* .getNavMonths */.J)(e,t);const{startOfMonth:h,endOfMonth:g}=t;const m=(0,l/* .getInitialMonth */.Z)(e,r,v,t);const[b,_]=(0,p/* .useControlledValue */.j)(m,// initialMonth is always computed from props.month if provided
e.month?m:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,n.useEffect)(()=>{const n=(0,l/* .getInitialMonth */.Z)(e,r,v,t);_(n)},[e.timeZone]);/** The months displayed in the calendar. */const y=(0,i/* .getDisplayMonths */.o)(b,v,e,t);/** The dates displayed in the calendar. */const w=(0,a/* .getDates */.Y)(y,e.endMonth?g(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const x=(0,s/* .getMonths */.S)(y,w,e,t);/** The Weeks displayed in the calendar. */const A=(0,f/* .getWeeks */.C)(x);/** The Days displayed in the calendar. */const Y=(0,o/* .getDays */._)(x);const k=(0,u/* .getPreviousMonth */.E)(b,r,e,t);const I=(0,d/* .getNextMonth */.Q)(b,v,e,t);const{disableNavigation:D,onMonthChange:C}=e;const S=e=>A.some(t=>t.days.some(t=>t.isEqualTo(e)));const M=e=>{if(D){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(v&&t>h(v)){t=h(v)}_(t);C?.(t)};const E=e=>{// is this check necessary?
if(S(e)){return}M(e.date)};const T={months:x,weeks:A,days:Y,navStart:r,navEnd:v,previousMonth:k,nextMonth:I,goToMonth:M,goToDay:E};return T}},51409:function(e,t,r){r.d(t,{S:()=>a,w:()=>o});/* import */var n=r(41594);/** @ignore */const a=(0,n.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function o(){const e=(0,n.useContext)(a);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}},53581:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(41594);/* import */var a=r(38547);/* import */var o=r(91725);/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function i(e,t,r,i,l){const{autoFocus:s}=e;const[c,d]=(0,n.useState)();const u=(0,a/* .calculateFocusTarget */.A)(t.days,r,i||(()=>false),c);const[f,p]=(0,n.useState)(s?u:undefined);const v=()=>{d(f);p(undefined)};const h=(r,n)=>{if(!f)return;const a=(0,o/* .getNextFocus */.O)(r,n,f,t.navStart,t.navEnd,e,l);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);p(a)};const g=e=>{return Boolean(u?.isEqualTo(e))};const m={isFocusTarget:g,setFocused:p,focused:f,blur:v,moveFocus:h};return m}},33127:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(16687);/* import */var a=r(55115);/* import */var o=r(47012);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function i(e,t){const r=(0,o/* .useSingle */.G)(e,t);const i=(0,n/* .useMulti */.N)(e,t);const l=(0,a/* .useRange */.f)(e,t);switch(e.mode){case"single":return r;case"multiple":return i;case"range":return l;default:return undefined}}},80653:function(e,t,r){r.d(t,{M:()=>a});/* import */var n=r(32850);/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function a(e,t,r=0,o=0,i=false,l=n/* .defaultDateLib */.VA){const{from:s,to:c}=t||{};const{isSameDay:d,isAfter:u,isBefore:f}=l;let p;if(!s&&!c){// the range is empty, add the date
p={from:e,to:r>0?undefined:e}}else if(s&&!c){// adding date to an incomplete range
if(d(s,e)){// adding a date equal to the start of the range
if(r===0){p={from:s,to:e}}else if(i){p={from:s,to:undefined}}else{p=undefined}}else if(f(e,s)){// adding a date before the start of the range
p={from:e,to:s}}else{// adding a date after the start of the range
p={from:s,to:e}}}else if(s&&c){// adding date to a complete range
if(d(s,e)&&d(c,e)){// adding a date that is equal to both start and end of the range
if(i){p={from:s,to:c}}else{p=undefined}}else if(d(s,e)){// adding a date equal to the the start of the range
p={from:s,to:r>0?undefined:e}}else if(d(c,e)){// adding a dare equal to the end of the range
p={from:e,to:r>0?undefined:e}}else if(f(e,s)){// adding a date before the start of the range
p={from:e,to:c}}else if(u(e,s)){// adding a date after the start of the range
p={from:s,to:e}}else if(u(e,c)){// adding a date after the end of the range
p={from:s,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(p?.from&&p?.to){const t=l.differenceInCalendarDays(p.to,p.from);if(o>0&&t>o){p={from:e,to:undefined}}else if(r>1&&t<r){p={from:e,to:undefined}}}return p}},87331:function(e,t,r){r.d(t,{k:()=>i});/* import */var n=r(32850);/* import */var a=r(52044);/* import */var o=r(70684);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.VA){const l=!Array.isArray(t)?[t]:t;const{isSameDay:s,differenceInCalendarDays:c,isAfter:d}=r;return l.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return s(e,t)}if((0,o/* .isDatesArray */.Hg)(t,r)){return t.includes(e)}if((0,o/* .isDateRange */.oM)(t)){return(0,a/* .rangeIncludesDate */.R)(t,e,false,r)}if((0,o/* .isDayOfWeekType */.OE)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,o/* .isDateInterval */.m4)(t)){const r=c(t.before,e);const n=c(t.after,e);const a=r>0;const o=n<0;const i=d(t.before,t.after);if(i){return o&&a}else{return a||o}}if((0,o/* .isDateAfterType */.RE)(t)){return c(e,t.after)>0}if((0,o/* .isDateBeforeType */.Ue)(t)){return c(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const l=/* unused pure expression or super */null&&i},93397:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(32850);/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function a(e,t,r=n/* .defaultDateLib */.VA){const o=!Array.isArray(t)?[t]:t;let i=e.from;const l=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const s=Math.min(l,6);for(let e=0;e<=s;e++){if(o.includes(i.getDay())){return true}i=r.addDays(i,1)}return false}},16660:function(e,t,r){r.d(t,{P:()=>c});/* import */var n=r(32850);/* import */var a=r(87331);/* import */var o=r(93397);/* import */var i=r(52044);/* import */var l=r(45157);/* import */var s=r(70684);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function c(e,t,r=n/* .defaultDateLib */.VA){const d=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=d.filter(e=>typeof e!=="function");const f=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,i/* .rangeIncludesDate */.R)(e,t,false,r)}if((0,s/* .isDatesArray */.Hg)(t,r)){return t.some(t=>(0,i/* .rangeIncludesDate */.R)(e,t,false,r))}if((0,s/* .isDateRange */.oM)(t)){if(t.from&&t.to){return(0,l/* .rangeOverlaps */.G)(e,{from:t.from,to:t.to},r)}return false}if((0,s/* .isDayOfWeekType */.OE)(t)){return(0,o/* .rangeContainsDayOfWeek */.g)(e,t.dayOfWeek,r)}if((0,s/* .isDateInterval */.m4)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,l/* .rangeOverlaps */.G)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}if((0,s/* .isDateAfterType */.RE)(t)||(0,s/* .isDateBeforeType */.Ue)(t)){return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}return false});if(f){return true}const p=d.filter(e=>typeof e==="function");if(p.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(p.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}},52044:function(e,t,r){r.d(t,{R:()=>a});/* import */var n=r(32850);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=false,o=n/* .defaultDateLib */.VA){let{from:i,to:l}=e;const{differenceInCalendarDays:s,isSameDay:c}=o;if(i&&l){const e=s(l,i)<0;if(e){[i,l]=[l,i]}const n=s(t,i)>=(r?1:0)&&s(l,t)>=(r?1:0);return n}if(!r&&l){return c(l,t)}if(!r&&i){return c(i,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const o=(e,t)=>a(e,t,false,defaultDateLib)},45157:function(e,t,r){r.d(t,{G:()=>o});/* import */var n=r(32850);/* import */var a=r(52044);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.VA){return(0,a/* .rangeIncludesDate */.R)(e,t.from,false,r)||(0,a/* .rangeIncludesDate */.R)(e,t.to,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.from,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.to,false,r)}},70684:function(e,t,r){r.d(t,{Hg:()=>s,OE:()=>l,RE:()=>o,Ue:()=>i,m4:()=>n,oM:()=>a});/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function n(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function a(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function i(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function l(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function s(e,t){return Array.isArray(e)&&e.every(t.isDate)}},66504:function(e,t,r){r.d(t,{F:()=>n});function n(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n}},89441:function(e,t,r){r.d(t,{q:()=>a});let n={};function a(){return n}function o(e){n=e}},89269:function(e,t,r){r.d(t,{_:()=>u});/* import */var n=r(20207);/* import */var a=r(11456);/* import */var o=r(85377);/* import */var i=r(64585);/* import */var l=r(91408);/* import */var s=r(66504);/* import */var c=r(71951);const d={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const u={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return c/* .lightFormatters.y */.C.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=(0,l/* .getWeekYear */.h)(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const o=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=o%100;return(0,s/* .addLeadingZeros */.F)(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(o,{unit:"year"})}// Padding
return(0,s/* .addLeadingZeros */.F)(o,t.length)},// ISO week-numbering year
R:function(e,t){const r=(0,o/* .getISOWeekYear */.p)(e);// Padding
return(0,s/* .addLeadingZeros */.F)(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return(0,s/* .addLeadingZeros */.F)(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return(0,s/* .addLeadingZeros */.F)(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return(0,s/* .addLeadingZeros */.F)(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return c/* .lightFormatters.M */.C.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return(0,s/* .addLeadingZeros */.F)(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=(0,i/* .getWeek */.N)(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return(0,s/* .addLeadingZeros */.F)(a,t.length)},// ISO week of year
I:function(e,t,r){const n=(0,a/* .getISOWeek */.s)(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return(0,s/* .addLeadingZeros */.F)(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return c/* .lightFormatters.d */.C.d(e,t)},// Day of year
D:function(e,t,r){const a=(0,n/* .getDayOfYear */.F)(e);if(t==="Do"){return r.ordinalNumber(a,{unit:"dayOfYear"})}return(0,s/* .addLeadingZeros */.F)(a,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const o=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(o);// Padded numerical value
case"ee":return(0,s/* .addLeadingZeros */.F)(o,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const o=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(o);// Padded numerical value
case"cc":return(0,s/* .addLeadingZeros */.F)(o,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return(0,s/* .addLeadingZeros */.F)(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=d.noon}else if(n===0){a=d.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=d.evening}else if(n>=12){a=d.afternoon}else if(n>=4){a=d.morning}else{a=d.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return c/* .lightFormatters.h */.C.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return c/* .lightFormatters.H */.C.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,s/* .addLeadingZeros */.F)(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,s/* .addLeadingZeros */.F)(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return c/* .lightFormatters.m */.C.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return c/* .lightFormatters.s */.C.s(e,t)},// Fraction of second
S:function(e,t){return c/* .lightFormatters.S */.C.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return p(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return v(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return v(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return p(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return v(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return v(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+f(n,":");// Long
case"OOOO":default:return"GMT"+v(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+f(n,":");// Long
case"zzzz":default:return"GMT"+v(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return(0,s/* .addLeadingZeros */.F)(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return(0,s/* .addLeadingZeros */.F)(+e,t.length)}};function f(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const o=n%60;if(o===0){return r+String(a)}return r+String(a)+t+(0,s/* .addLeadingZeros */.F)(o,2)}function p(e,t){if(e%60===0){const t=e>0?"-":"+";return t+(0,s/* .addLeadingZeros */.F)(Math.abs(e)/60,2)}return v(e,t)}function v(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=(0,s/* .addLeadingZeros */.F)(Math.trunc(n/60),2);const o=(0,s/* .addLeadingZeros */.F)(n%60,2);return r+a+t+o}},71951:function(e,t,r){r.d(t,{C:()=>a});/* import */var n=r(66504);/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const a={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const a=r>0?r:1-r;return(0,n/* .addLeadingZeros */.F)(t==="yy"?a%100:a,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):(0,n/* .addLeadingZeros */.F)(r+1,2)},// Day of the month
d(e,t){return(0,n/* .addLeadingZeros */.F)(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return(0,n/* .addLeadingZeros */.F)(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return(0,n/* .addLeadingZeros */.F)(e.getHours(),t.length)},// Minute
m(e,t){return(0,n/* .addLeadingZeros */.F)(e.getMinutes(),t.length)},// Second
s(e,t){return(0,n/* .addLeadingZeros */.F)(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const a=e.getMilliseconds();const o=Math.trunc(a*Math.pow(10,r-3));return(0,n/* .addLeadingZeros */.F)(o,t.length)}}},67403:function(e,t,r){r.d(t,{m:()=>i});const n=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const a=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const o=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const o=r[1];const i=r[2];if(!i){return n(e,t)}let l;switch(o){case"P":l=t.dateTime({width:"short"});break;case"PP":l=t.dateTime({width:"medium"});break;case"PPP":l=t.dateTime({width:"long"});break;case"PPPP":default:l=t.dateTime({width:"full"});break}return l.replace("{{date}}",n(o,t)).replace("{{time}}",a(i,t))};const i={p:a,P:o}},13747:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(49164);/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function a(e){const t=(0,n/* .toDate */.a)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}},74084:function(e,t,r){r.d(t,{x:()=>a});/* import */var n=r(27256);function a(e,...t){const r=n/* .constructFrom.bind */.w.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}},22596:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(74084);function a(e,t){const[r,a]=(0,n/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:a}}},87982:function(e,t,r){r.d(t,{Ss:()=>s,ef:()=>i,xM:()=>l});const n=/^D+$/;const a=/^Y+$/;const o=["D","DD","YY","YYYY"];function i(e){return n.test(e)}function l(e){return a.test(e)}function s(e,t,r){const n=c(e,t,r);console.warn(n);if(o.includes(e))throw new RangeError(n)}function c(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}},80517:function(e,t,r){r.d(t,{f:()=>o});/* import */var n=r(27256);/* import */var a=r(49164);/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return o;o.setDate(o.getDate()+t);return o}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},39669:function(e,t,r){r.d(t,{P:()=>o});/* import */var n=r(27256);/* import */var a=r(49164);/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return o}const i=o.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const l=(0,n/* .constructFrom */.w)(r?.in||e,o.getTime());l.setMonth(o.getMonth()+t+1,0);const s=l.getDate();if(i>=s){// If we're already at the end of the month, then this is the correct date
// and we're done.
return l}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
o.setFullYear(l.getFullYear(),l.getMonth(),i);return o}}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},98637:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(80517);/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function a(e,t,r){return(0,n/* .addDays */.f)(e,t*7,r)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},2510:function(e,t,r){r.d(t,{e:()=>a});/* import */var n=r(39669);/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function a(e,t,r){return(0,n/* .addMonths */.P)(e,t*12,r)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},31308:function(e,t,r){r.d(t,{_P:()=>I,my:()=>l,w4:()=>s});/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const n=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const a=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const o=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const i=/* unused pure expression or super */null&&-o;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const l=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const s=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const c=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const d=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const u=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const f=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const p=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const v=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const h=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const g=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const m=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const b=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const _=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const y=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const w=/* unused pure expression or super */null&&_*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const x=/* unused pure expression or super */null&&w*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const A=/* unused pure expression or super */null&&w*a;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const Y=/* unused pure expression or super */null&&A/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const k=/* unused pure expression or super */null&&Y*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const I=Symbol.for("constructDateFrom")},27256:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(31308);/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function a(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&n/* .constructFromSymbol */._P in e)return e[n/* .constructFromSymbol */._P](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},26496:function(e,t,r){r.d(t,{m:()=>l});/* import */var n=r(13747);/* import */var a=r(74084);/* import */var o=r(31308);/* import */var i=r(8008);/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function l(e,t,r){const[l,s]=(0,a/* .normalizeDates */.x)(r?.in,e,t);const c=(0,i/* .startOfDay */.o)(l);const d=(0,i/* .startOfDay */.o)(s);const u=+c-(0,n/* .getTimezoneOffsetInMilliseconds */.G)(c);const f=+d-(0,n/* .getTimezoneOffsetInMilliseconds */.G)(d);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((u-f)/o/* .millisecondsInDay */.w4)}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&l},4556:function(e,t,r){r.d(t,{U:()=>a});/* import */var n=r(74084);/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);const i=a.getFullYear()-o.getFullYear();const l=a.getMonth()-o.getMonth();return i*12+l}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},80436:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(22596);/* import */var a=r(27256);/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function o(e,t){const{start:r,end:o}=(0,n/* .normalizeInterval */.P)(t?.in,e);let i=+r>+o;const l=i?+r:+o;const s=i?o:r;s.setHours(0,0,0,0);s.setDate(1);let c=t?.step??1;if(!c)return[];if(c<0){c=-c;i=!i}const d=[];while(+s<=l){d.push((0,a/* .constructFrom */.w)(r,s));s.setMonth(s.getMonth()+c)}return i?d.reverse():d}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},3929:function(e,t,r){r.d(t,{z:()=>o});/* import */var n=r(22596);/* import */var a=r(27256);/**
 * The {@link eachYearOfInterval} function options.
 *//**
 * The {@link eachYearOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 *//**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */function o(e,t){const{start:r,end:o}=(0,n/* .normalizeInterval */.P)(t?.in,e);let i=+r>+o;const l=i?+r:+o;const s=i?o:r;s.setHours(0,0,0,0);s.setMonth(0,1);let c=t?.step??1;if(!c)return[];if(c<0){c=-c;i=!i}const d=[];while(+s<=l){d.push((0,a/* .constructFrom */.w)(r,s));s.setFullYear(s.getFullYear()+c)}return i?d.reverse():d}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},65636:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(1741);/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function a(e,t){return(0,n/* .endOfWeek */.$)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},50527:function(e,t,r){r.d(t,{p:()=>a});/* import */var n=r(49164);/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);const a=r.getMonth();r.setFullYear(r.getFullYear(),a+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},1741:function(e,t,r){r.d(t,{$:()=>o});/* import */var n=r(89441);/* import */var a=r(49164);/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function o(e,t){const r=(0,n/* .getDefaultOptions */.q)();const o=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,a/* .toDate */.a)(e,t?.in);const l=i.getDay();const s=(l<o?-7:0)+6-(l-o);i.setDate(i.getDate()+s);i.setHours(23,59,59,999);return i}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},94528:function(e,t,r){r.d(t,{Q:()=>a});/* import */var n=r(49164);/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);const a=r.getFullYear();r.setFullYear(a+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},37902:function(e,t,r){r.d(t,{GP:()=>h});/* import */var n=r(56066);/* import */var a=r(89441);/* import */var o=r(89269);/* import */var i=r(67403);/* import */var l=r(87982);/* import */var s=r(93035);/* import */var c=r(49164);// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const d=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const u=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const f=/^'([^]*?)'?$/;const p=/''/g;const v=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function h(e,t,r){const f=(0,a/* .getDefaultOptions */.q)();const p=r?.locale??f.locale??n/* .enUS */.c;const h=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??f.firstWeekContainsDate??f.locale?.options?.firstWeekContainsDate??1;const m=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??f.weekStartsOn??f.locale?.options?.weekStartsOn??0;const b=(0,c/* .toDate */.a)(e,r?.in);if(!(0,s/* .isValid */.f)(b)){throw new RangeError("Invalid time value")}let _=t.match(u).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=i/* .longFormatters */.m[t];return r(e,p.formatLong)}return e}).join("").match(d).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:g(e)}}if(o/* .formatters */._[t]){return{isToken:true,value:e}}if(t.match(v)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(p.localize.preprocessor){_=p.localize.preprocessor(b,_)}const y={firstWeekContainsDate:h,weekStartsOn:m,locale:p};return _.map(n=>{if(!n.isToken)return n.value;const a=n.value;if(!r?.useAdditionalWeekYearTokens&&(0,l/* .isProtectedWeekYearToken */.xM)(a)||!r?.useAdditionalDayOfYearTokens&&(0,l/* .isProtectedDayOfYearToken */.ef)(a)){(0,l/* .warnOrThrowProtectedError */.Ss)(a,t,String(e))}const i=o/* .formatters */._[a[0]];return i(b,a,p.localize,y)}).join("")}function g(e){const t=e.match(f);if(!t){return e}return t[1].replace(p,"'")}// Fallback for modularized imports:
/* unused export default */var m=/* unused pure expression or super */null&&h},20207:function(e,t,r){r.d(t,{F:()=>i});/* import */var n=r(26496);/* import */var a=r(40525);/* import */var o=r(49164);/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function i(e,t){const r=(0,o/* .toDate */.a)(e,t?.in);const i=(0,n/* .differenceInCalendarDays */.m)(r,(0,a/* .startOfYear */.D)(r));const l=i+1;return l}// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&i},21843:function(e,t,r){r.d(t,{P:()=>o});/* import */var n=r(27256);/* import */var a=r(49164);/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function o(e,t){const r=(0,a/* .toDate */.a)(e,t?.in);const o=r.getFullYear();const i=r.getMonth();const l=(0,n/* .constructFrom */.w)(r,0);l.setFullYear(o,i+1,0);l.setHours(0,0,0,0);return l.getDate()}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},11456:function(e,t,r){r.d(t,{s:()=>l});/* import */var n=r(31308);/* import */var a=r(99719);/* import */var o=r(90642);/* import */var i=r(49164);/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function l(e,t){const r=(0,i/* .toDate */.a)(e,t?.in);const l=+(0,a/* .startOfISOWeek */.b)(r)-+(0,o/* .startOfISOWeekYear */.w)(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(l/n/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&l},85377:function(e,t,r){r.d(t,{p:()=>i});/* import */var n=r(27256);/* import */var a=r(99719);/* import */var o=r(49164);/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function i(e,t){const r=(0,o/* .toDate */.a)(e,t?.in);const i=r.getFullYear();const l=(0,n/* .constructFrom */.w)(r,0);l.setFullYear(i+1,0,4);l.setHours(0,0,0,0);const s=(0,a/* .startOfISOWeek */.b)(l);const c=(0,n/* .constructFrom */.w)(r,0);c.setFullYear(i,0,4);c.setHours(0,0,0,0);const d=(0,a/* .startOfISOWeek */.b)(c);if(r.getTime()>=s.getTime()){return i+1}else if(r.getTime()>=d.getTime()){return i}else{return i-1}}// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&i},16331:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(49164);/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function a(e,t){return(0,n/* .toDate */.a)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},64585:function(e,t,r){r.d(t,{N:()=>l});/* import */var n=r(31308);/* import */var a=r(73524);/* import */var o=r(7629);/* import */var i=r(49164);/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function l(e,t){const r=(0,i/* .toDate */.a)(e,t?.in);const l=+(0,a/* .startOfWeek */.k)(r,t)-+(0,o/* .startOfWeekYear */.b)(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(l/n/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&l},91408:function(e,t,r){r.d(t,{h:()=>l});/* import */var n=r(89441);/* import */var a=r(27256);/* import */var o=r(73524);/* import */var i=r(49164);/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function l(e,t){const r=(0,i/* .toDate */.a)(e,t?.in);const l=r.getFullYear();const s=(0,n/* .getDefaultOptions */.q)();const c=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1;const d=(0,a/* .constructFrom */.w)(t?.in||e,0);d.setFullYear(l+1,0,c);d.setHours(0,0,0,0);const u=(0,o/* .startOfWeek */.k)(d,t);const f=(0,a/* .constructFrom */.w)(t?.in||e,0);f.setFullYear(l,0,c);f.setHours(0,0,0,0);const p=(0,o/* .startOfWeek */.k)(f,t);if(+r>=+u){return l+1}else if(+r>=+p){return l}else{return l-1}}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&l},27372:function(e,t,r){r.d(t,{C:()=>a});/* import */var n=r(49164);/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function a(e,t){return(0,n/* .toDate */.a)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},71271:function(e,t,r){r.d(t,{d:()=>a});/* import */var n=r(49164);/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function a(e,t){return+(0,n/* .toDate */.a)(e)>+(0,n/* .toDate */.a)(t)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},97822:function(e,t,r){r.d(t,{Y:()=>a});/* import */var n=r(49164);/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function a(e,t){return+(0,n/* .toDate */.a)(e)<+(0,n/* .toDate */.a)(t)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},21721:function(e,t,r){r.d(t,{$:()=>n});/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function n(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* unused export default */var a=/* unused pure expression or super */null&&n},13249:function(e,t,r){r.d(t,{r:()=>o});/* import */var n=r(74084);/* import */var a=r(8008);/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function o(e,t,r){const[o,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return+(0,a/* .startOfDay */.o)(o)===+(0,a/* .startOfDay */.o)(i)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},21309:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(74084);/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},29318:function(e,t,r){r.d(t,{s:()=>a});/* import */var n=r(74084);/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===o.getFullYear()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},93035:function(e,t,r){r.d(t,{f:()=>o});/* import */var n=r(21721);/* import */var a=r(49164);/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function o(e){return!(!(0,n/* .isDate */.$)(e)&&typeof e!=="number"||isNaN(+(0,a/* .toDate */.a)(e)))}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},31240:function(e,t,r){r.d(t,{k:()=>n});function n(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}}},77846:function(e,t,r){r.d(t,{o:()=>n});/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function n(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const o=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[o]}}},76260:function(e,t,r){r.d(t,{A:()=>n});function n(e){return(t,r={})=>{const n=r.width;const i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const l=t.match(i);if(!l){return null}const s=l[0];const c=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const d=Array.isArray(c)?o(c,e=>e.test(s)):a(c,e=>e.test(s));let u;u=e.valueCallback?e.valueCallback(d):d;u=r.valueCallback?r.valueCallback(u):u;const f=t.slice(s.length);return{value:u,rest:f}}}function a(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function o(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined}},69564:function(e,t,r){r.d(t,{K:()=>n});function n(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const o=t.match(e.parsePattern);if(!o)return null;let i=e.valueCallback?e.valueCallback(o[0]):o[0];// [TODO] I challenge you to fix the type
i=r.valueCallback?r.valueCallback(i):i;const l=t.slice(a.length);return{value:i,rest:l}}}},56066:function(e,t,r){r.d(t,{c:()=>s});/* import */var n=r(40052);/* import */var a=r(82909);/* import */var o=r(95387);/* import */var i=r(81107);/* import */var l=r(9683);/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const s={code:"en-US",formatDistance:n/* .formatDistance */.B,formatLong:a/* .formatLong */.s,formatRelative:o/* .formatRelative */.o,localize:i/* .localize */.k,match:l/* .match */.Y,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* unused export default */var c=/* unused pure expression or super */null&&s},40052:function(e,t,r){r.d(t,{B:()=>a});const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=(e,t,r)=>{let a;const o=n[e];if(typeof o==="string"){a=o}else if(t===1){a=o.one}else{a=o.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+a}else{return a+" ago"}}return a}},82909:function(e,t,r){r.d(t,{s:()=>l});/* import */var n=r(31240);const a={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const i={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const l={date:(0,n/* .buildFormatLongFn */.k)({formats:a,defaultWidth:"full"}),time:(0,n/* .buildFormatLongFn */.k)({formats:o,defaultWidth:"full"}),dateTime:(0,n/* .buildFormatLongFn */.k)({formats:i,defaultWidth:"full"})}},95387:function(e,t,r){r.d(t,{o:()=>a});const n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const a=(e,t,r,a)=>n[e]},81107:function(e,t,r){r.d(t,{k:()=>u});/* import */var n=r(77846);const a={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const i={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const l={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const s={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const c={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const d=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const u={ordinalNumber:d,era:(0,n/* .buildLocalizeFn */.o)({values:a,defaultWidth:"wide"}),quarter:(0,n/* .buildLocalizeFn */.o)({values:o,defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n/* .buildLocalizeFn */.o)({values:i,defaultWidth:"wide"}),day:(0,n/* .buildLocalizeFn */.o)({values:l,defaultWidth:"wide"}),dayPeriod:(0,n/* .buildLocalizeFn */.o)({values:s,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"})}},9683:function(e,t,r){r.d(t,{Y:()=>m});/* import */var n=r(76260);/* import */var a=r(69564);const o=/^(\d+)(th|st|nd|rd)?/i;const i=/\d+/i;const l={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const s={any:[/^b/i,/^(a|c)/i]};const c={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const d={any:[/1/i,/2/i,/3/i,/4/i]};const u={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const f={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const p={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const v={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const h={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const g={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const m={ordinalNumber:(0,a/* .buildMatchPatternFn */.K)({matchPattern:o,parsePattern:i,valueCallback:e=>parseInt(e,10)}),era:(0,n/* .buildMatchFn */.A)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,n/* .buildMatchFn */.A)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n/* .buildMatchFn */.A)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,n/* .buildMatchFn */.A)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n/* .buildMatchFn */.A)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})}},78127:function(e,t,r){r.d(t,{T:()=>o});/* import */var n=r(27256);/* import */var a=r(49164);/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function o(e,t){let r;let o=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!o&&typeof e==="object")o=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,o);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(o,r||NaN)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},35093:function(e,t,r){r.d(t,{j:()=>o});/* import */var n=r(27256);/* import */var a=r(49164);/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function o(e,t){let r;let o=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!o&&typeof e==="object")o=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,o);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(o,r||NaN)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},49407:function(e,t,r){r.d(t,{Z:()=>i});/* import */var n=r(27256);/* import */var a=r(21843);/* import */var o=r(49164);/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function i(e,t,r){const i=(0,o/* .toDate */.a)(e,r?.in);const l=i.getFullYear();const s=i.getDate();const c=(0,n/* .constructFrom */.w)(r?.in||e,0);c.setFullYear(l,t,15);c.setHours(0,0,0,0);const d=(0,a/* .getDaysInMonth */.P)(c);// Set the earlier date, allows to wrap Jan 31 to Feb 28
i.setMonth(t,Math.min(s,d));return i}// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&i},90208:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(27256);/* import */var a=r(49164);/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+o))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);o.setFullYear(t);return o}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},8008:function(e,t,r){r.d(t,{o:()=>a});/* import */var n=r(49164);/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},99719:function(e,t,r){r.d(t,{b:()=>a});/* import */var n=r(73524);/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){return(0,n/* .startOfWeek */.k)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},90642:function(e,t,r){r.d(t,{w:()=>i});/* import */var n=r(27256);/* import */var a=r(85377);/* import */var o=r(99719);/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function i(e,t){const r=(0,a/* .getISOWeekYear */.p)(e,t);const i=(0,n/* .constructFrom */.w)(t?.in||e,0);i.setFullYear(r,0,4);i.setHours(0,0,0,0);return(0,o/* .startOfISOWeek */.b)(i)}// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&i},74880:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(49164);/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},73524:function(e,t,r){r.d(t,{k:()=>o});/* import */var n=r(89441);/* import */var a=r(49164);/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function o(e,t){const r=(0,n/* .getDefaultOptions */.q)();const o=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,a/* .toDate */.a)(e,t?.in);const l=i.getDay();const s=(l<o?7:0)+l-o;i.setDate(i.getDate()-s);i.setHours(0,0,0,0);return i}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},7629:function(e,t,r){r.d(t,{b:()=>l});/* import */var n=r(89441);/* import */var a=r(27256);/* import */var o=r(91408);/* import */var i=r(73524);/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function l(e,t){const r=(0,n/* .getDefaultOptions */.q)();const l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const s=(0,o/* .getWeekYear */.h)(e,t);const c=(0,a/* .constructFrom */.w)(t?.in||e,0);c.setFullYear(s,0,l);c.setHours(0,0,0,0);const d=(0,i/* .startOfWeek */.k)(c,t);return d}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&l},40525:function(e,t,r){r.d(t,{D:()=>a});/* import */var n=r(49164);/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},49164:function(e,t,r){r.d(t,{a:()=>a});/* import */var n=r(27256);/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function a(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return(0,n/* .constructFrom */.w)(t||e,e)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a}}]);