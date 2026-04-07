"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["199"],{25631:function(e,t,r){r.d(t,{A:()=>l});/* import */var n=r(31601);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(76314);/* import */var i=/*#__PURE__*/r.n(o);// Imports
var s=i()(a());// Module
s.push([e.id,`/* Variables declaration */
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
/* export default */const l=s},76314:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,o){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var s=0;s<this.length;s++){var l=this[s][0];if(l!=null){i[l]=true}}}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);if(n&&i[u[0]]){continue}if(typeof o!=="undefined"){if(typeof u[5]==="undefined"){u[5]=o}else{u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}");u[5]=o}}if(r){if(!u[2]){u[2]=r}else{u[1]="@media ".concat(u[2]," {").concat(u[1],"}");u[2]=r}}if(a){if(!u[4]){u[4]="".concat(a)}else{u[1]="@supports (".concat(u[4],") {").concat(u[1],"}");u[4]=a}}t.push(u)}};return t}},31601:function(e){e.exports=function(e){return e[1]}},85072:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var o={};var i=[];for(var s=0;s<e.length;s++){var l=e[s];var c=n.base?l[0]+n.base:l[0];var u=o[c]||0;var d="".concat(c," ").concat(u);o[c]=u+1;var f=r(d);var p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var h=a(p,n);n.byIndex=s;t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var o=n(e,a);return function e(e){e=e||[];for(var i=0;i<o.length;i++){var s=o[i];var l=r(s);t[l].references--}var c=n(e,a);for(var u=0;u<o.length;u++){var d=o[u];var f=r(d);if(t[f].references===0){t[f].updater();t.splice(f,1)}}o=c}}},77659:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},10540:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},55056:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},97825:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var o=r.sourceMap;if(o&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},41113:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},84582:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */pN});// NAMESPACE OBJECT: ./node_modules/react-day-picker/dist/esm/components/custom-components.js
var n={};r.r(n);r.d(n,{Button:()=>dE,CaptionLabel:()=>dH,Chevron:()=>dS,Day:()=>dN,DayButton:()=>dF,Dropdown:()=>dL,DropdownNav:()=>dP,Footer:()=>dW,Month:()=>dj,MonthCaption:()=>dB,MonthGrid:()=>dR,Months:()=>dK,MonthsDropdown:()=>dU,Nav:()=>dq,NextMonthButton:()=>dG,Option:()=>dQ,PreviousMonthButton:()=>d$,Root:()=>dX,Select:()=>dZ,Week:()=>dJ,WeekNumber:()=>d2,WeekNumberHeader:()=>d6,Weekday:()=>d0,Weekdays:()=>d1,Weeks:()=>d4,YearsDropdown:()=>d5});// NAMESPACE OBJECT: ./node_modules/react-day-picker/dist/esm/formatters/index.js
var a={};r.r(a);r.d(a,{formatCaption:()=>d9,formatDay:()=>ft,formatMonthCaption:()=>fe,formatMonthDropdown:()=>fr,formatWeekNumber:()=>fa,formatWeekNumberHeader:()=>fo,formatWeekdayName:()=>fn,formatYearCaption:()=>fs,formatYearDropdown:()=>fi});// NAMESPACE OBJECT: ./node_modules/react-day-picker/dist/esm/labels/index.js
var o={};r.r(o);r.d(o,{labelCaption:()=>fm,labelDay:()=>fh,labelDayButton:()=>fp,labelGrid:()=>fv,labelGridcell:()=>fg,labelMonthDropdown:()=>fb,labelNav:()=>fy,labelNext:()=>fw,labelPrevious:()=>f_,labelWeekNumber:()=>fk,labelWeekNumberHeader:()=>fA,labelWeekday:()=>fx,labelYearDropdown:()=>fY});// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(2445);// EXTERNAL MODULE: ./assets/react/v3/shared/components/Container.tsx
var s=r(71739);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var l=r(10840);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var c=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var u=r(55456);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var d=r(42338);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var f=r(84577);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var p=r(17437);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(90209);// EXTERNAL MODULE: ./assets/react/v3/shared/components/ErrorBoundary.tsx
var v=r(66238);// EXTERNAL MODULE: external "React"
var m=r(41594);var g=/*#__PURE__*/r.n(m);// CONCATENATED MODULE: ./assets/react/v3/shared/components/FocusTrap.tsx
var b=e=>{var{children:t,blurPrevious:r=false}=e;var n=(0,m.useRef)(null);var a=(0,m.useRef)(null);(0,m.useEffect)(()=>{var e=n.current;if(!e){return}a.current=document.activeElement;if(r&&a.current&&a.current!==document.body){a.current.blur()}var t=e=>{if(!e||!e.isConnected){return false}var t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&!e.hidden&&e.offsetParent!==null};var o=()=>{var r='a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';return Array.from(e.querySelectorAll(r)).filter(e=>{return!e.hasAttribute("disabled")&&t(e)})};var i=()=>{var t=document.querySelectorAll('[data-focus-trap="true"]');return t.length>0&&t[t.length-1]===e};var s=t=>{if(!i()||t.key!=="Tab"){return}var r=o();if(r.length===0){return}var n=r[0];var a=r[r.length-1];var s=document.activeElement;if(!e.contains(s)&&document.body!==s){t.preventDefault();n.focus();return}if(t.shiftKey&&s===n){t.preventDefault();a.focus();return}if(!t.shiftKey&&s===a){t.preventDefault();n.focus();return}};document.addEventListener("keydown",s,true);return()=>{document.removeEventListener("keydown",s,true);if(a.current&&t(a.current)){a.current.focus()}};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,m.cloneElement)(m.Children.only(t),{ref:n,"data-focus-trap":"true",tabIndex:-1})};/* export default */const y=b;// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var w=r(95729);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var _=r(24219);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var x=r(84133);// CONCATENATED MODULE: ./assets/react/v3/shared/hooks/useScrollLock.ts
var k=null;var A=[];var Y=null;var I=()=>{if(k!==null)return k;var e=document.createElement("div");e.style.visibility="hidden";e.style.overflow="scroll";e.style.width="100px";document.body.appendChild(e);var t=document.createElement("div");t.style.width="100%";e.appendChild(t);k=e.offsetWidth-t.offsetWidth;document.body.removeChild(e);return k};var T=()=>{if(Y){return}var e=I();var t=window.innerWidth>document.documentElement.clientWidth;Y={overflow:document.body.style.overflow,paddingRight:document.body.style.paddingRight};document.body.style.overflow="hidden";if(t&&e>0){var r=parseInt(window.getComputedStyle(document.body).paddingRight||"0",10);document.body.style.paddingRight="".concat(r+e,"px")}};var M=()=>{if(!Y){return}document.body.style.overflow=Y.overflow;document.body.style.paddingRight=Y.paddingRight;Y=null};var D=()=>{var e=Symbol("scroll-lock");A.push(e);if(A.length===1){T()}return e};var O=new Set;var C=e=>{var t=A.indexOf(e);if(t===-1){return}A.splice(t,1);O.delete(e);if(A.length===0&&O.size===0){M()}};var E=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:true;var t=(0,m.useRef)(null);(0,m.useEffect)(()=>{if(!e){if(t.current){C(t.current);t.current=null}return}t.current=D();return()=>{if(t.current){var e=t.current;t.current=null;O.add(e);requestAnimationFrame(()=>{C(e)})}}},[e])};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var H=r(36154);// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/BasicModalWrapper.tsx
function S(){var e=(0,f._)(["\n      max-width: 100vw;\n      width: 100vw;\n      height: 95vh;\n    "]);S=function t(){return e};return e}function N(){var e=(0,f._)(["\n      position: absolute;\n      right: ",";\n      top: ",";\n    "]);N=function t(){return e};return e}function F(){var e=(0,f._)(["\n      height: calc(100% - ","px);\n    "]);F=function t(){return e};return e}var L=e=>{var{children:t,onClose:r,title:n,subtitle:a,icon:o,entireHeader:s,actions:l,fullScreen:c,modalStyle:u,maxWidth:d=w/* .modal.BASIC_MODAL_MAX_WIDTH */.yl.BASIC_MODAL_MAX_WIDTH,isCloseAble:f=true,blurTriggerElement:p=true}=e;E();return/*#__PURE__*/(0,i/* .jsx */.Y)(y,{blurPrevious:p,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:[W.container({isFullScreen:c}),u],style:{maxWidth:"".concat(d,"px")},children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:W.header({hasEntireHeader:!!s}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:!s,fallback:s,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:W.headerContent,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:W.iconWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:o,children:o}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:W.title,children:n})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:W.subtitle,children:a})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:W.actionsWrapper({hasEntireHeader:!!s}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:l,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:f,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{"data-cy":"close-modal",type:"button",css:W.closeButton,onClick:r,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"timesThin",width:24,height:24})})}),children:l})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:W.content({isFullScreen:c}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{children:t})})]})})};/* export default */const P=L;var W={container:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("position:relative;background:",l/* .colorTokens.background.white */.I6.background.white,";box-shadow:",l/* .shadow.modal */.r7.modal,";border-radius:",l/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;top:50%;left:50%;transform:translate(-50%,-50%);",t&&(0,p/* .css */.AH)(S())," ",l/* .Breakpoint.smallTablet */.EA.smallTablet,"{width:90%;}")},header:e=>{var{hasEntireHeader:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;width:100%;height:",!t?"".concat(w/* .modal.BASIC_MODAL_HEADER_HEIGHT */.yl.BASIC_MODAL_HEADER_HEIGHT,"px"):"auto",";background:",l/* .colorTokens.background.white */.I6.background.white,";border-bottom:",!t?"1px solid ".concat(l/* .colorTokens.stroke.divider */.I6.stroke.divider):"none",";padding-inline:",l/* .spacing["16"] */.YK["16"],";")},headerContent:/*#__PURE__*/(0,p/* .css */.AH)("place-self:center start;display:inline-flex;align-items:center;gap:",l/* .spacing["12"] */.YK["12"],";"),iconWithTitle:/*#__PURE__*/(0,p/* .css */.AH)("display:inline-flex;align-items:center;gap:",l/* .spacing["4"] */.YK["4"],";color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";"),title:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body("medium"),";color:",l/* .colorTokens.text.title */.I6.text.title,";"),subtitle:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.text.ellipsis */.x.text.ellipsis(1)," ",_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";"),actionsWrapper:e=>{var{hasEntireHeader:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("place-self:center end;display:inline-flex;gap:",l/* .spacing["16"] */.YK["16"],";",t&&(0,p/* .css */.AH)(N(),l/* .spacing["16"] */.YK["16"],l/* .spacing["16"] */.YK["16"]))},closeButton:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",l/* .borderRadius.circle */.Vq.circle,";background:",l/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",l/* .colorTokens.background.white */.I6.background.white,";}svg{color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",l/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",l/* .shadow.focus */.r7.focus,";}"),content:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("background-color:",l/* .colorTokens.background.white */.I6.background.white,";overflow-y:auto;max-height:90vh;",t&&(0,p/* .css */.AH)(F(),w/* .modal.BASIC_MODAL_HEADER_HEIGHT */.yl.BASIC_MODAL_HEADER_HEIGHT))}};// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useFormWithGlobalError.ts
var j=r(57148);// EXTERNAL MODULE: external "wp.i18n"
var B=r(12470);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var R=r(85713);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/CheckBox.tsx
function K(){var e=(0,f._)(["\n      cursor: not-allowed;\n    "]);K=function t(){return e};return e}function z(){var e=(0,f._)(["\n      color: ",";\n    "]);z=function t(){return e};return e}function V(){var e=(0,f._)(["\n        margin-right: ",";\n      "]);V=function t(){return e};return e}function U(){var e=(0,f._)(["\n        background-color: ",";\n      "]);U=function t(){return e};return e}function q(){var e=(0,f._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);q=function t(){return e};return e}function G(){var e=(0,f._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);G=function t(){return e};return e}var Q=/*#__PURE__*/g().forwardRef((e,t)=>{var{id:r=(0,R/* .nanoid */.Ak)(),name:n,labelCss:a,inputCss:o,label:s="",checked:l,value:d,disabled:f=false,onChange:p,onBlur:h,isIndeterminate:v=false}=e;var m=e=>{p===null||p===void 0?void 0:p(!v?e.target.checked:true,e)};var b=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/g().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,i/* .jsxs */.FD)("label",{htmlFor:r,css:[$.container({disabled:f}),a],children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,u._)((0,c._)({},e),{ref:t,id:r,name:n,type:"checkbox",value:d,checked:!!l,disabled:f,"aria-invalid":e["aria-invalid"],onChange:m,onBlur:h,css:[o,$.checkbox({label:!!s,isIndeterminate:v,disabled:f})]})),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:[$.label({isDisabled:f}),a],title:b(s),children:s})]})});var $={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",l/* .colorTokens.text.title */.I6.text.title,";",t&&(0,p/* .css */.AH)(K()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";",t&&(0,p/* .css */.AH)(z(),l/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,p/* .css */.AH)(V(),l/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",l/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",l/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",l/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",l/* .borderRadius["4"] */.Vq["4"],";",n&&(0,p/* .css */.AH)(U(),l/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,p/* .css */.AH)(q(),l/* .colorTokens.brand.blue */.I6.brand.blue,l/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,p/* .css */.AH)(G(),l/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",l/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const X=Q;// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var Z=r(76017);// CONCATENATED MODULE: ./assets/react/v3/shared/hooks/usePaginatedTable.ts
var J=function(){var{limit:e=w/* .ITEMS_PER_PAGE */.re}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var[t,r]=(0,m.useState)({page:1,sortProperty:"",sortDirection:undefined,filter:{}});var n=t;var a=e*Math.max(0,n.page-1);var o=(0,m.useCallback)(e=>{r(t=>(0,c._)({},t,e))},[r]);var i=e=>o({page:e});var s=(0,m.useCallback)(e=>o({page:1,filter:e}),[o]);var l=e=>{var t={};if(e!==n.sortProperty){t={sortDirection:"asc",sortProperty:e}}else{t={sortDirection:n.sortDirection==="asc"?"desc":"asc",sortProperty:e}}o(t)};return{pageInfo:n,onPageChange:i,onColumnSort:l,offset:a,itemsPerPage:e,onFilterItems:s}};// CONCATENATED MODULE: ./assets/react/v3/shared/molecules/Paginator.tsx
var ee=e=>{var{currentPage:t,onPageChange:r,totalItems:n,itemsPerPage:a}=e;var o=Math.max(Math.ceil(n/a),1);var[s,l]=(0,m.useState)("");(0,m.useEffect)(()=>{l(t.toString())},[t]);var c=e=>{if(e<1||e>o){return}r(e)};return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:er.wrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:er.pageStatus,children:[(0,B.__)("Page","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,i/* .jsx */.Y)("input",{type:"text",css:er.paginationInput,value:s,onChange:e=>{var{value:t}=e.currentTarget;var n=t.replace(/[^0-9]/g,"");var a=Number(n);if(a>0&&a<=o){l(n);r(a)}else if(!n){l(n)}},autoComplete:"off"})}),(0,B.__)("of","tutor")," ",/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:o})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:er.pageController,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:er.paginationButton,onClick:()=>c(t-1),disabled:t===1,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:!w/* .isRTL */.V8?"chevronLeft":"chevronRight",width:32,height:32})}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:er.paginationButton,onClick:()=>c(t+1),disabled:t===o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:!w/* .isRTL */.V8?"chevronRight":"chevronLeft",width:32,height:32})})]})]})};/* export default */const et=ee;var er={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;justify-content:end;align-items:center;flex-wrap:wrap;gap:",l/* .spacing["8"] */.YK["8"],";height:36px;"),pageStatus:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),"    color:",l/* .colorTokens.text.title */.I6.text.title,";min-width:100px;"),paginationInput:/*#__PURE__*/(0,p/* .css */.AH)("outline:0;border:1px solid ",l/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";margin:0 ",l/* .spacing["8"] */.YK["8"],";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";padding:8px 12px;width:72px;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:",l/* .spacing["0"] */.YK["0"],";}&[type='number']{-moz-appearance:textfield;}"),pageController:/*#__PURE__*/(0,p/* .css */.AH)("gap:",l/* .spacing["8"] */.YK["8"],";display:flex;justify-content:center;align-items:center;height:100%;"),paginationButton:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";background:",l/* .colorTokens.background.white */.I6.background.white,";color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";height:32px;width:32px;display:grid;place-items:center;transition:background-color 0.2s ease-in-out,color 0.3s ease-in-out;svg{color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background:",l/* .colorTokens.background["default"] */.I6.background["default"],";& > svg{color:",l/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:disabled{background:",l/* .colorTokens.background.white */.I6.background.white,";& > svg{color:",l/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}")};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/types.ts
var en=r(51298);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Skeleton.tsx
function ea(){var e=(0,f._)(["\n      border-radius: ",";\n    "]);ea=function t(){return e};return e}function eo(){var e=(0,f._)(["\n          background: linear-gradient(89.17deg, #fef4ff 0.2%, #f9d3ff 50.09%, #fef4ff 96.31%);\n        "]);eo=function t(){return e};return e}function ei(){var e=(0,f._)(["\n      :after {\n        content: '';\n        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);\n        position: absolute;\n        transform: translateX(-100%);\n        inset: 0;\n        ","\n\n        animation: ","s linear 0.5s infinite normal none running ",";\n      }\n    "]);ei=function t(){return e};return e}var es=/*#__PURE__*/(0,m.forwardRef)((e,t)=>{var{width:r="100%",height:n=16,animation:a=false,isMagicAi:o=false,isRound:s=false,animationDuration:l=1.6,className:c}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("span",{ref:t,css:eu.skeleton(r,n,a,o,s,l),className:c})});/* export default */const el=es;var ec={wave:/*#__PURE__*/(0,p/* .keyframes */.i7)("0%{transform:translateX(-100%);}50%{transform:translateX(0%);}100%{transform:translateX(100%);}")};var eu={skeleton:(e,t,r,n,a,o)=>/*#__PURE__*/(0,p/* .css */.AH)("display:block;width:",(0,en/* .isNumber */.Et)(e)?"".concat(e,"px"):e,";height:",(0,en/* .isNumber */.Et)(t)?"".concat(t,"px"):t,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";background-color:",!n?"rgba(0, 0, 0, 0.11)":l/* .colorTokens.background.magicAi.skeleton */.I6.background.magicAi.skeleton,";position:relative;-webkit-mask-image:-webkit-radial-gradient(center,white,black);overflow:hidden;",a&&(0,p/* .css */.AH)(ea(),l/* .borderRadius.circle */.Vq.circle)," ",r&&(0,p/* .css */.AH)(ei(),n&&(0,p/* .css */.AH)(eo()),o,ec.wave))};// CONCATENATED MODULE: ./assets/react/v3/shared/molecules/Table.tsx
function ed(){var e=(0,f._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n    "]);ed=function t(){return e};return e}function ef(){var e=(0,f._)(["\n      border-bottom: 1px solid ",";\n    "]);ef=function t(){return e};return e}function ep(){var e=(0,f._)(["\n      &:nth-of-type(even) {\n        background-color: ",";\n      }\n    "]);ep=function t(){return e};return e}function eh(){var e=(0,f._)(["\n        background-color: ",";\n      "]);eh=function t(){return e};return e}function ev(){var e=(0,f._)(["\n        background-color: ",";\n      "]);ev=function t(){return e};return e}function em(){var e=(0,f._)(["\n        :last-of-type {\n          border-bottom: none;\n        }\n      "]);em=function t(){return e};return e}var eg={bodyRowSelected:l/* .colorTokens.background.active */.I6.background.active,bodyRowHover:l/* .colorTokens.background.hover */.I6.background.hover};var eb=e=>{var{columns:t,data:r,entireHeader:n=null,headerHeight:a=60,noHeader:o=false,isStriped:s=false,isRounded:l=false,stripedBySelectedIndex:c=[],colors:u={},isBordered:d=true,loading:f=false,itemsPerPage:v=1,querySortProperties:m,querySortDirections:g={},onSortClick:b,renderInLastRow:y,rowStyle:w,sortIcons:_={asc:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"sortASC",height:16,width:16}),desc:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"sortDESC",height:16,width:16})}}=e;var x=(e,r)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("tr",{css:[ew.tableRow({isBordered:d,isStriped:s}),ew.bodyTr({colors:u,isSelected:c.includes(e),isRounded:l}),w],children:t.map((e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("td",{css:[ew.td,{width:e.width}],children:r(e)},t)})},e)};var k=e=>{var t=null;var r=e.sortProperty;if(!r){return e.Header}if(m===null||m===void 0?void 0:m.includes(r)){if((g===null||g===void 0?void 0:g[r])==="asc"){t=_.asc}else{t=_.desc}}return/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:ew.headerWithIcon,onClick:()=>b===null||b===void 0?void 0:b(r),children:[e.Header,t&&t]})};var A=()=>{if(n){return/*#__PURE__*/(0,i/* .jsx */.Y)("th",{css:ew.th,colSpan:t.length,children:n})}return t.map((e,t)=>{if(e.Header!==null){return/*#__PURE__*/(0,i/* .jsx */.Y)("th",{css:[ew.th,e.css,{width:e.width}],colSpan:e.headerColSpan,children:k(e)},t)}})};var Y=()=>{if(f){return(0,R/* .range */.y1)(v).map(e=>x(e,()=>/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,height:20,width:"".concat((0,R/* .getRandom */.G0)(40,80),"%")})))}if(!r.length){return/*#__PURE__*/(0,i/* .jsx */.Y)("tr",{css:ew.tableRow({isBordered:false,isStriped:false}),children:/*#__PURE__*/(0,i/* .jsx */.Y)("td",{colSpan:t.length,css:[ew.td,/*#__PURE__*/(0,p/* .css */.AH)("text-align:center;")],children:"No Data!"})})}var e=r.map((e,t)=>{return x(t,r=>{return"Cell"in r?r.Cell(e,t):r.accessor(e,t)})});if(y){y=/*#__PURE__*/(0,i/* .jsx */.Y)("tr",{children:/*#__PURE__*/(0,i/* .jsx */.Y)("td",{css:ew.td,children:y})},e.length);e.push(y)}return e};return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ew.tableContainer({isRounded:l}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)("table",{css:ew.table,children:[!o&&/*#__PURE__*/(0,i/* .jsx */.Y)("thead",{children:/*#__PURE__*/(0,i/* .jsx */.Y)("tr",{css:[ew.tableRow({isBordered:d,isStriped:s}),{height:a}],children:A()})}),/*#__PURE__*/(0,i/* .jsx */.Y)("tbody",{children:Y()})]})})};/* export default */const ey=eb;var ew={tableContainer:e=>{var{isRounded:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("display:block;width:100%;overflow-x:auto;",t&&(0,p/* .css */.AH)(ed(),l/* .colorTokens.stroke.divider */.I6.stroke.divider,l/* .borderRadius["6"] */.Vq["6"]))},headerWithIcon:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.body */.I.body(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;gap:",l/* .spacing["8"] */.YK["8"],";align-items:center;svg{color:",l/* .colorTokens.text.primary */.I6.text.primary,";}"),table:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;border-collapse:collapse;border:none;"),tableRow:e=>{var{isBordered:t,isStriped:r}=e;return/*#__PURE__*/(0,p/* .css */.AH)(t&&(0,p/* .css */.AH)(ef(),l/* .colorTokens.stroke.divider */.I6.stroke.divider)," ",r&&(0,p/* .css */.AH)(ep(),l/* .colorTokens.background.active */.I6.background.active))},th:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),";background-color:",l/* .colorTokens.background.white */.I6.background.white,";color:",l/* .colorTokens.text.primary */.I6.text.primary,";padding:0 ",l/* .spacing["16"] */.YK["16"],";border:none;"),bodyTr:e=>{var{colors:t,isSelected:r,isRounded:n}=e;var{bodyRowDefault:a,bodyRowSelectedHover:o,bodyRowHover:i=eg.bodyRowHover,bodyRowSelected:s=eg.bodyRowSelected}=t;return/*#__PURE__*/(0,p/* .css */.AH)(a&&(0,p/* .css */.AH)(eh(),a),"      &:hover{background-color:",r&&o?o:i,";}",r&&(0,p/* .css */.AH)(ev(),s)," ",n&&(0,p/* .css */.AH)(em()))},td:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),";padding:",l/* .spacing["16"] */.YK["16"],";border:none;")};// EXTERNAL MODULE: ./assets/react/v3/entries/coupon-details/services/coupon.ts
var e_=r(13759);// CONCATENATED MODULE: ./assets/react/v3/public/images/course-placeholder.png
const ex=r.p+"js/images/course-placeholder-3ae4bdaf.png";// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var ek=r(31105);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var eA=r(4892);// CONCATENATED MODULE: ./assets/react/v3/shared/hooks/useVisibilityControl.tsx
/**
 * Custom hook to control the visibility of fields based on the provided visibility key and context.
 *
 * @param {string} visibilityKey - The key used to determine the visibility of the field.
 * @returns {boolean} - Returns true if the field should be visible, false otherwise.
 */var eY=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return(0,m.useMemo)(()=>{var t;// If no visibility key provided, always show the field
if(!(0,en/* .isDefined */.O9)(e)){return true}var[r,n]=(e===null||e===void 0?void 0:e.split("."))||[];if(!(0,en/* .isDefined */.O9)(r)||!(0,en/* .isDefined */.O9)(n)){return true}var a=eA/* .tutorConfig */.P===null||eA/* .tutorConfig */.P===void 0?void 0:(t=eA/* .tutorConfig.visibility_control */.P.visibility_control)===null||t===void 0?void 0:t[r];if(!a){return true}var o=eA/* .tutorConfig.current_user.roles */.P.current_user.roles;var i=o.includes("administrator")?"admin":"instructor";var s="".concat(n,"_").concat(i);if(!Object.keys(a).includes(s)){return true}return a[s]==="on"},[e])};/* export default */const eI=eY;// CONCATENATED MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var eT=e=>{return t=>{var{visibilityKey:r}=t,n=(0,ek._)(t,["visibilityKey"]);var a=eI(r);if(!a){return null}// @ts-ignore
return/*#__PURE__*/(0,i/* .jsx */.Y)(e,(0,c._)({},n))}};// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var eM=r(47617);// EXTERNAL MODULE: ./node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
var eD=r(55787);// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function eO(e){if(e==null){return window}if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function eC(e){var t=eO(e).Element;return e instanceof t||e instanceof Element}function eE(e){var t=eO(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function eH(e){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==="undefined"){return false}var t=eO(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var eS=Math.max;var eN=Math.min;var eF=Math.round;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function eL(){var e=navigator.userAgentData;if(e!=null&&e.brands&&Array.isArray(e.brands)){return e.brands.map(function(e){return e.brand+"/"+e.version}).join(" ")}return navigator.userAgent};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function eP(){return!/^((?!chrome|android).)*safari/i.test(eL())};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function eW(e,t,r){if(t===void 0){t=false}if(r===void 0){r=false}var n=e.getBoundingClientRect();var a=1;var o=1;if(t&&eE(e)){a=e.offsetWidth>0?eF(n.width)/e.offsetWidth||1:1;o=e.offsetHeight>0?eF(n.height)/e.offsetHeight||1:1}var i=eC(e)?eO(e):window,s=i.visualViewport;var l=!eP()&&r;var c=(n.left+(l&&s?s.offsetLeft:0))/a;var u=(n.top+(l&&s?s.offsetTop:0))/o;var d=n.width/a;var f=n.height/o;return{width:d,height:f,top:u,right:c+d,bottom:u+f,left:c,x:c,y:u}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function ej(e){var t=eO(e);var r=t.pageXOffset;var n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function eB(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function eR(e){if(e===eO(e)||!eE(e)){return ej(e)}else{return eB(e)}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function eK(e){return e?(e.nodeName||"").toLowerCase():null};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function ez(e){// $FlowFixMe[incompatible-return]: assume body is always available
return((eC(e)?e.ownerDocument:e.document)||window.document).documentElement};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function eV(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return eW(ez(e)).left+ej(e).scrollLeft};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function eU(e){return eO(e).getComputedStyle(e)};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function eq(e){// Firefox wants us to check `-x` and `-y` variations as well
var t=eU(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function eG(e){var t=e.getBoundingClientRect();var r=eF(t.width)/e.offsetWidth||1;var n=eF(t.height)/e.offsetHeight||1;return r!==1||n!==1}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function eQ(e,t,r){if(r===void 0){r=false}var n=eE(t);var a=eE(t)&&eG(t);var o=ez(t);var i=eW(e,a,r);var s={scrollLeft:0,scrollTop:0};var l={x:0,y:0};if(n||!n&&!r){if(eK(t)!=="body"||// https://github.com/popperjs/popper-core/issues/1078
eq(o)){s=eR(t)}if(eE(t)){l=eW(t,true);l.x+=t.clientLeft;l.y+=t.clientTop}else if(o){l.x=eV(o)}}return{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function e$(e){var t=eW(e);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var r=e.offsetWidth;var n=e.offsetHeight;if(Math.abs(t.width-r)<=1){r=t.width}if(Math.abs(t.height-n)<=1){n=t.height}return{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function eX(e){if(eK(e)==="html"){return e}return(// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(eH(e)?e.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
ez(e)// fallback
)};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function eZ(e){if(["html","body","#document"].indexOf(eK(e))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return e.ownerDocument.body}if(eE(e)&&eq(e)){return e}return eZ(eX(e))};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function eJ(e,t){var r;if(t===void 0){t=[]}var n=eZ(e);var a=n===((r=e.ownerDocument)==null?void 0:r.body);var o=eO(n);var i=a?[o].concat(o.visualViewport||[],eq(n)?n:[]):n;var s=t.concat(i);return a?s:s.concat(eJ(eX(i)))};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function e0(e){return["table","td","th"].indexOf(eK(e))>=0};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function e1(e){if(!eE(e)||// https://github.com/popperjs/popper-core/issues/837
eU(e).position==="fixed"){return null}return e.offsetParent}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function e2(e){var t=/firefox/i.test(eL());var r=/Trident/i.test(eL());if(r&&eE(e)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var n=eU(e);if(n.position==="fixed"){return null}}var a=eX(e);if(eH(a)){a=a.host}while(eE(a)&&["html","body"].indexOf(eK(a))<0){var o=eU(a);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none"){return a}else{a=a.parentNode}}return null}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function e6(e){var t=eO(e);var r=e1(e);while(r&&e0(r)&&eU(r).position==="static"){r=e1(r)}if(r&&(eK(r)==="html"||eK(r)==="body"&&eU(r).position==="static")){return t}return r||e2(e)||t};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var e4="top";var e5="bottom";var e3="right";var e8="left";var e7="auto";var e9=[e4,e5,e3,e8];var te="start";var tt="end";var tr="clippingParents";var tn="viewport";var ta="popper";var to="reference";var ti=/*#__PURE__*/e9.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+tt])},[]);var ts=/*#__PURE__*/[].concat(e9,[e7]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+tt])},[]);// modifiers that need to read the DOM
var tl="beforeRead";var tc="read";var tu="afterRead";// pure-logic modifiers
var td="beforeMain";var tf="main";var tp="afterMain";// modifier with the purpose to write to the DOM (or write into a framework state)
var th="beforeWrite";var tv="write";var tm="afterWrite";var tg=[tl,tc,tu,td,tf,tp,th,tv,tm];// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
// source: https://stackoverflow.com/questions/49875255
function tb(e){var t=new Map;var r=new Set;var n=[];e.forEach(function(e){t.set(e.name,e)});// On visiting object, check for its dependencies and visit them recursively
function a(e){r.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach(function(e){if(!r.has(e)){var n=t.get(e);if(n){a(n)}}});n.push(e)}e.forEach(function(e){if(!r.has(e.name)){// check for visited object
a(e)}});return n}function ty(e){// order based on dependencies
var t=tb(e);// order based on phase
return tg.reduce(function(e,r){return e.concat(t.filter(function(e){return e.phase===r}))},[])};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function tw(e){var t;return function(){if(!t){t=new Promise(function(r){Promise.resolve().then(function(){t=undefined;r(e())})})}return t}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function t_(e){var t=e.reduce(function(e,t){var r=e[t.name];e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t;return e},{});// IE11 does not support Object.values
return Object.keys(t).map(function(e){return t[e]})};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js
var tx={placement:"bottom",modifiers:[],strategy:"absolute"};function tk(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some(function(e){return!(e&&typeof e.getBoundingClientRect==="function")})}function tA(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?tx:a;return function e(e,t,r){if(r===void 0){r=o}var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},tx,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}};var i=[];var s=false;var l={state:a,setOptions:function r(r){var i=typeof r==="function"?r(a.options):r;u();a.options=Object.assign({},o,a.options,i);a.scrollParents={reference:eC(e)?eJ(e):e.contextElement?eJ(e.contextElement):[],popper:eJ(t)};// Orders the modifiers based on their dependencies and `phase`
// properties
var s=ty(t_([].concat(n,a.options.modifiers)));// Strip out disabled modifiers
a.orderedModifiers=s.filter(function(e){return e.enabled});c();return l.update()},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function e(){if(s){return}var e=a.elements,t=e.reference,r=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!tk(t,r)){return}// Store the reference and popper rects to be read by modifiers
a.rects={reference:eQ(t,e6(r),a.options.strategy==="fixed"),popper:e$(r)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
a.reset=false;a.placement=a.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var n=0;n<a.orderedModifiers.length;n++){if(a.reset===true){a.reset=false;n=-1;continue}var o=a.orderedModifiers[n],i=o.fn,c=o.options,u=c===void 0?{}:c,d=o.name;if(typeof i==="function"){a=i({state:a,options:u,name:d,instance:l})||a}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:tw(function(){return new Promise(function(e){l.forceUpdate();e(a)})}),destroy:function e(){u();s=true}};if(!tk(e,t)){return l}l.setOptions(r).then(function(e){if(!s&&r.onFirstUpdate){r.onFirstUpdate(e)}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function c(){a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,o=e.effect;if(typeof o==="function"){var s=o({state:a,name:t,instance:l,options:n});var c=function e(){};i.push(s||c)}})}function u(){i.forEach(function(e){return e()});i=[]}return l}}var tY=/*#__PURE__*//* unused pure expression or super */null&&tA();// eslint-disable-next-line import/no-unused-modules
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
// eslint-disable-next-line import/no-unused-modules
var tI={passive:true};function tT(e){var t=e.state,r=e.instance,n=e.options;var a=n.scroll,o=a===void 0?true:a,i=n.resize,s=i===void 0?true:i;var l=eO(t.elements.popper);var c=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(o){c.forEach(function(e){e.addEventListener("scroll",r.update,tI)})}if(s){l.addEventListener("resize",r.update,tI)}return function(){if(o){c.forEach(function(e){e.removeEventListener("scroll",r.update,tI)})}if(s){l.removeEventListener("resize",r.update,tI)}}}// eslint-disable-next-line import/no-unused-modules
/* export default */const tM={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:tT,data:{}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function tD(e){return e.split("-")[0]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function tO(e){return e.split("-")[1]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function tC(e){return["top","bottom"].indexOf(e)>=0?"x":"y"};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js
function tE(e){var t=e.reference,r=e.element,n=e.placement;var a=n?tD(n):null;var o=n?tO(n):null;var i=t.x+t.width/2-r.width/2;var s=t.y+t.height/2-r.height/2;var l;switch(a){case e4:l={x:i,y:t.y-r.height};break;case e5:l={x:i,y:t.y+t.height};break;case e3:l={x:t.x+t.width,y:s};break;case e8:l={x:t.x-r.width,y:s};break;default:l={x:t.x,y:t.y}}var c=a?tC(a):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case te:l[c]=l[c]-(t[u]/2-r[u]/2);break;case tt:l[c]=l[c]+(t[u]/2-r[u]/2);break;default:}}return l};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function tH(e){var t=e.state,r=e.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[r]=tE({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}// eslint-disable-next-line import/no-unused-modules
/* export default */const tS={name:"popperOffsets",enabled:true,phase:"read",fn:tH,data:{}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js
// eslint-disable-next-line import/no-unused-modules
var tN={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function tF(e,t){var r=e.x,n=e.y;var a=t.devicePixelRatio||1;return{x:eF(r*a)/a||0,y:eF(n*a)/a||0}}function tL(e){var t;var r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed;var f=i.x,p=f===void 0?0:f,h=i.y,v=h===void 0?0:h;var m=typeof u==="function"?u({x:p,y:v}):{x:p,y:v};p=m.x;v=m.y;var g=i.hasOwnProperty("x");var b=i.hasOwnProperty("y");var y=e8;var w=e4;var _=window;if(c){var x=e6(r);var k="clientHeight";var A="clientWidth";if(x===eO(r)){x=ez(r);if(eU(x).position!=="static"&&s==="absolute"){k="scrollHeight";A="scrollWidth"}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
x=x;if(a===e4||(a===e8||a===e3)&&o===tt){w=e5;var Y=d&&x===_&&_.visualViewport?_.visualViewport.height:x[k];v-=Y-n.height;v*=l?1:-1}if(a===e8||(a===e4||a===e5)&&o===tt){y=e3;var I=d&&x===_&&_.visualViewport?_.visualViewport.width:x[A];p-=I-n.width;p*=l?1:-1}}var T=Object.assign({position:s},c&&tN);var M=u===true?tF({x:p,y:v},eO(r)):{x:p,y:v};p=M.x;v=M.y;if(l){var D;return Object.assign({},T,(D={},D[w]=b?"0":"",D[y]=g?"0":"",D.transform=(_.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",D))}return Object.assign({},T,(t={},t[w]=b?v+"px":"",t[y]=g?p+"px":"",t.transform="",t))}function tP(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,a=n===void 0?true:n,o=r.adaptive,i=o===void 0?true:o,s=r.roundOffsets,l=s===void 0?true:s;var c={placement:tD(t.placement),variation:tO(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,tL(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,tL(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:l})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
/* export default */const tW={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:tP,data:{}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js
// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function tj(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var a=t.elements[e];// arrow is optional + virtual elements
if(!eE(a)||!eK(a)){return}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(a.style,r);Object.keys(n).forEach(function(e){var t=n[e];if(t===false){a.removeAttribute(e)}else{a.setAttribute(e,t===true?"":t)}})})}function tB(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e];var a=t.attributes[e]||{};var o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);// Set all values to an empty string to unset them
var i=o.reduce(function(e,t){e[t]="";return e},{});// arrow is optional + virtual elements
if(!eE(n)||!eK(n)){return}Object.assign(n.style,i);Object.keys(a).forEach(function(e){n.removeAttribute(e)})})}}// eslint-disable-next-line import/no-unused-modules
/* export default */const tR={name:"applyStyles",enabled:true,phase:"write",fn:tj,effect:tB,requires:["computeStyles"]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js
// eslint-disable-next-line import/no-unused-modules
function tK(e,t,r){var n=tD(e);var a=[e8,e4].indexOf(n)>=0?-1:1;var o=typeof r==="function"?r(Object.assign({},t,{placement:e})):r,i=o[0],s=o[1];i=i||0;s=(s||0)*a;return[e8,e3].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function tz(e){var t=e.state,r=e.options,n=e.name;var a=r.offset,o=a===void 0?[0,0]:a;var i=ts.reduce(function(e,r){e[r]=tK(r,t.rects,o);return e},{});var s=i[t.placement],l=s.x,c=s.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=l;t.modifiersData.popperOffsets.y+=c}t.modifiersData[n]=i}// eslint-disable-next-line import/no-unused-modules
/* export default */const tV={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:tz};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var tU={left:"right",right:"left",bottom:"top",top:"bottom"};function tq(e){return e.replace(/left|right|bottom|top/g,function(e){return tU[e]})};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var tG={start:"end",end:"start"};function tQ(e){return e.replace(/start|end/g,function(e){return tG[e]})};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function t$(e,t){var r=eO(e);var n=ez(e);var a=r.visualViewport;var o=n.clientWidth;var i=n.clientHeight;var s=0;var l=0;if(a){o=a.width;i=a.height;var c=eP();if(c||!c&&t==="fixed"){s=a.offsetLeft;l=a.offsetTop}}return{width:o,height:i,x:s+eV(e),y:l}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function tX(e){var t;var r=ez(e);var n=ej(e);var a=(t=e.ownerDocument)==null?void 0:t.body;var o=eS(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0);var i=eS(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);var s=-n.scrollLeft+eV(e);var l=-n.scrollTop;if(eU(a||r).direction==="rtl"){s+=eS(r.clientWidth,a?a.clientWidth:0)-o}return{width:o,height:i,x:s,y:l}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js
function tZ(e,t){var r=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t)){return true}else if(r&&eH(r)){var n=t;do{if(n&&e.isSameNode(n)){return true}// $FlowFixMe[prop-missing]: need a better way to handle this...
n=n.parentNode||n.host}while(n)}// Give up, the result is false
return false};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function tJ(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function t0(e,t){var r=eW(e,false,t==="fixed");r.top=r.top+e.clientTop;r.left=r.left+e.clientLeft;r.bottom=r.top+e.clientHeight;r.right=r.left+e.clientWidth;r.width=e.clientWidth;r.height=e.clientHeight;r.x=r.left;r.y=r.top;return r}function t1(e,t,r){return t===tn?tJ(t$(e,r)):eC(t)?t0(t,r):tJ(tX(ez(e)))}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function t2(e){var t=eJ(eX(e));var r=["absolute","fixed"].indexOf(eU(e).position)>=0;var n=r&&eE(e)?e6(e):e;if(!eC(n)){return[]}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return t.filter(function(e){return eC(e)&&tZ(e,n)&&eK(e)!=="body"})}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function t6(e,t,r,n){var a=t==="clippingParents"?t2(e):[].concat(t);var o=[].concat(a,[r]);var i=o[0];var s=o.reduce(function(t,r){var a=t1(e,r,n);t.top=eS(a.top,t.top);t.right=eN(a.right,t.right);t.bottom=eN(a.bottom,t.bottom);t.left=eS(a.left,t.left);return t},t1(e,i,n));s.width=s.right-s.left;s.height=s.bottom-s.top;s.x=s.left;s.y=s.top;return s};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function t4(){return{top:0,right:0,bottom:0,left:0}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function t5(e){return Object.assign({},t4(),e)};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function t3(e,t){return t.reduce(function(t,r){t[r]=e;return t},{})};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js
// eslint-disable-next-line import/no-unused-modules
function t8(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,i=o===void 0?e.strategy:o,s=r.boundary,l=s===void 0?tr:s,c=r.rootBoundary,u=c===void 0?tn:c,d=r.elementContext,f=d===void 0?ta:d,p=r.altBoundary,h=p===void 0?false:p,v=r.padding,m=v===void 0?0:v;var g=t5(typeof m!=="number"?m:t3(m,e9));var b=f===ta?to:ta;var y=e.rects.popper;var w=e.elements[h?b:f];var _=t6(eC(w)?w:w.contextElement||ez(e.elements.popper),l,u,i);var x=eW(e.elements.reference);var k=tE({reference:x,element:y,strategy:"absolute",placement:a});var A=tJ(Object.assign({},y,k));var Y=f===ta?A:x;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var I={top:_.top-Y.top+g.top,bottom:Y.bottom-_.bottom+g.bottom,left:_.left-Y.left+g.left,right:Y.right-_.right+g.right};var T=e.modifiersData.offset;// Offsets can be applied only to the popper element
if(f===ta&&T){var M=T[a];Object.keys(I).forEach(function(e){var t=[e3,e5].indexOf(e)>=0?1:-1;var r=[e4,e5].indexOf(e)>=0?"y":"x";I[e]+=M[r]*t})}return I};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function t7(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,i=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,c=l===void 0?ts:l;var u=tO(n);var d=u?s?ti:ti.filter(function(e){return tO(e)===u}):e9;var f=d.filter(function(e){return c.indexOf(e)>=0});if(f.length===0){f=d}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var p=f.reduce(function(t,r){t[r]=t8(e,{placement:r,boundary:a,rootBoundary:o,padding:i})[tD(r)];return t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js
// eslint-disable-next-line import/no-unused-modules
function t9(e){if(tD(e)===e7){return[]}var t=tq(e);return[tQ(e),t,tQ(t)]}function re(e){var t=e.state,r=e.options,n=e.name;if(t.modifiersData[n]._skip){return}var a=r.mainAxis,o=a===void 0?true:a,i=r.altAxis,s=i===void 0?true:i,l=r.fallbackPlacements,c=r.padding,u=r.boundary,d=r.rootBoundary,f=r.altBoundary,p=r.flipVariations,h=p===void 0?true:p,v=r.allowedAutoPlacements;var m=t.options.placement;var g=tD(m);var b=g===m;var y=l||(b||!h?[tq(m)]:t9(m));var w=[m].concat(y).reduce(function(e,r){return e.concat(tD(r)===e7?t7(t,{placement:r,boundary:u,rootBoundary:d,padding:c,flipVariations:h,allowedAutoPlacements:v}):r)},[]);var _=t.rects.reference;var x=t.rects.popper;var k=new Map;var A=true;var Y=w[0];for(var I=0;I<w.length;I++){var T=w[I];var M=tD(T);var D=tO(T)===te;var O=[e4,e5].indexOf(M)>=0;var C=O?"width":"height";var E=t8(t,{placement:T,boundary:u,rootBoundary:d,altBoundary:f,padding:c});var H=O?D?e3:e8:D?e5:e4;if(_[C]>x[C]){H=tq(H)}var S=tq(H);var N=[];if(o){N.push(E[M]<=0)}if(s){N.push(E[H]<=0,E[S]<=0)}if(N.every(function(e){return e})){Y=T;A=false;break}k.set(T,N)}if(A){// `2` may be desired in some cases – research later
var F=h?3:1;var L=function e(e){var t=w.find(function(t){var r=k.get(t);if(r){return r.slice(0,e).every(function(e){return e})}});if(t){Y=t;return"break"}};for(var P=F;P>0;P--){var W=L(P);if(W==="break")break}}if(t.placement!==Y){t.modifiersData[n]._skip=true;t.placement=Y;t.reset=true}}// eslint-disable-next-line import/no-unused-modules
/* export default */const rt={name:"flip",enabled:true,phase:"main",fn:re,requiresIfExists:["offset"],data:{_skip:false}};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function rr(e){return e==="x"?"y":"x"};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js
function rn(e,t,r){return eS(e,eN(t,r))}function ra(e,t,r){var n=rn(e,t,r);return n>r?r:n};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function ro(e){var t=e.state,r=e.options,n=e.name;var a=r.mainAxis,o=a===void 0?true:a,i=r.altAxis,s=i===void 0?false:i,l=r.boundary,c=r.rootBoundary,u=r.altBoundary,d=r.padding,f=r.tether,p=f===void 0?true:f,h=r.tetherOffset,v=h===void 0?0:h;var m=t8(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u});var g=tD(t.placement);var b=tO(t.placement);var y=!b;var w=tC(g);var _=rr(w);var x=t.modifiersData.popperOffsets;var k=t.rects.reference;var A=t.rects.popper;var Y=typeof v==="function"?v(Object.assign({},t.rects,{placement:t.placement})):v;var I=typeof Y==="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y);var T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null;var M={x:0,y:0};if(!x){return}if(o){var D;var O=w==="y"?e4:e8;var C=w==="y"?e5:e3;var E=w==="y"?"height":"width";var H=x[w];var S=H+m[O];var N=H-m[C];var F=p?-A[E]/2:0;var L=b===te?k[E]:A[E];var P=b===te?-A[E]:-k[E];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var W=t.elements.arrow;var j=p&&W?e$(W):{width:0,height:0};var B=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:t4();var R=B[O];var K=B[C];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var z=rn(0,k[E],j[E]);var V=y?k[E]/2-F-z-R-I.mainAxis:L-z-R-I.mainAxis;var U=y?-k[E]/2+F+z+K+I.mainAxis:P+z+K+I.mainAxis;var q=t.elements.arrow&&e6(t.elements.arrow);var G=q?w==="y"?q.clientTop||0:q.clientLeft||0:0;var Q=(D=T==null?void 0:T[w])!=null?D:0;var $=H+V-Q-G;var X=H+U-Q;var Z=rn(p?eN(S,$):S,H,p?eS(N,X):N);x[w]=Z;M[w]=Z-H}if(s){var J;var ee=w==="x"?e4:e8;var et=w==="x"?e5:e3;var er=x[_];var en=_==="y"?"height":"width";var ea=er+m[ee];var eo=er-m[et];var ei=[e4,e8].indexOf(g)!==-1;var es=(J=T==null?void 0:T[_])!=null?J:0;var el=ei?ea:er-k[en]-A[en]-es+I.altAxis;var ec=ei?er+k[en]+A[en]-es-I.altAxis:eo;var eu=p&&ei?ra(el,er,ec):rn(p?el:ea,er,p?ec:eo);x[_]=eu;M[_]=eu-er}t.modifiersData[n]=M}// eslint-disable-next-line import/no-unused-modules
/* export default */const ri={name:"preventOverflow",enabled:true,phase:"main",fn:ro,requiresIfExists:["offset"]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js
// eslint-disable-next-line import/no-unused-modules
var rs=function e(e,t){e=typeof e==="function"?e(Object.assign({},t.rects,{placement:t.placement})):e;return t5(typeof e!=="number"?e:t3(e,e9))};function rl(e){var t;var r=e.state,n=e.name,a=e.options;var o=r.elements.arrow;var i=r.modifiersData.popperOffsets;var s=tD(r.placement);var l=tC(s);var c=[e8,e3].indexOf(s)>=0;var u=c?"height":"width";if(!o||!i){return}var d=rs(a.padding,r);var f=e$(o);var p=l==="y"?e4:e8;var h=l==="y"?e5:e3;var v=r.rects.reference[u]+r.rects.reference[l]-i[l]-r.rects.popper[u];var m=i[l]-r.rects.reference[l];var g=e6(o);var b=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0;var y=v/2-m/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var w=d[p];var _=b-f[u]-d[h];var x=b/2-f[u]/2+y;var k=rn(w,x,_);// Prevents breaking syntax highlighting...
var A=l;r.modifiersData[n]=(t={},t[A]=k,t.centerOffset=k-x,t)}function rc(e){var t=e.state,r=e.options;var n=r.element,a=n===void 0?"[data-popper-arrow]":n;if(a==null){return}// CSS selector
if(typeof a==="string"){a=t.elements.popper.querySelector(a);if(!a){return}}if(!tZ(t.elements.popper,a)){return}t.elements.arrow=a}// eslint-disable-next-line import/no-unused-modules
/* export default */const ru={name:"arrow",enabled:true,phase:"main",fn:rl,effect:rc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js
function rd(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function rf(e){return[e4,e3,e5,e8].some(function(t){return e[t]>=0})}function rp(e){var t=e.state,r=e.name;var n=t.rects.reference;var a=t.rects.popper;var o=t.modifiersData.preventOverflow;var i=t8(t,{elementContext:"reference"});var s=t8(t,{altBoundary:true});var l=rd(i,n);var c=rd(s,a,o);var u=rf(l);var d=rf(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}// eslint-disable-next-line import/no-unused-modules
/* export default */const rh={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:rp};// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js
var rv=[tM,tS,tW,tR,tV,rt,ri,ru,rh];var rm=/*#__PURE__*/tA({defaultModifiers:rv});// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
;// CONCATENATED MODULE: ./node_modules/tippy.js/headless/dist/tippy-headless.esm.js
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/var rg='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';var rb="tippy-content";var ry="tippy-backdrop";var rw="tippy-arrow";var r_="tippy-svg-arrow";var rx={passive:true,capture:true};var rk=function e(){return document.body};function rA(e,t){return({}).hasOwnProperty.call(e,t)}function rY(e,t,r){if(Array.isArray(e)){var n=e[t];return n==null?Array.isArray(r)?r[t]:r:n}return e}function rI(e,t){var r=({}).toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function rT(e,t){return typeof e==="function"?e.apply(void 0,t):e}function rM(e,t){// Avoid wrapping in `setTimeout` if ms is 0 anyway
if(t===0){return e}var r;return function(n){clearTimeout(r);r=setTimeout(function(){e(n)},t)}}function rD(e,t){var r=Object.assign({},e);t.forEach(function(e){delete r[e]});return r}function rO(e){return e.split(/\s+/).filter(Boolean)}function rC(e){return[].concat(e)}function rE(e,t){if(e.indexOf(t)===-1){e.push(t)}}function rH(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function rS(e){return e.split("-")[0]}function rN(e){return[].slice.call(e)}function rF(e){return Object.keys(e).reduce(function(t,r){if(e[r]!==undefined){t[r]=e[r]}return t},{})}function rL(){return document.createElement("div")}function rP(e){return["Element","Fragment"].some(function(t){return rI(e,t)})}function rW(e){return rI(e,"NodeList")}function rj(e){return rI(e,"MouseEvent")}function rB(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function rR(e){if(rP(e)){return[e]}if(rW(e)){return rN(e)}if(Array.isArray(e)){return e}return rN(document.querySelectorAll(e))}function rK(e,t){e.forEach(function(e){if(e){e.style.transitionDuration=t+"ms"}})}function rz(e,t){e.forEach(function(e){if(e){e.setAttribute("data-state",t)}})}function rV(e){var t;var r=rC(e),n=r[0];// Elements created via a <template> have an ownerDocument with no reference to the body
return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function rU(e,t){var r=t.clientX,n=t.clientY;return e.every(function(e){var t=e.popperRect,a=e.popperState,o=e.props;var i=o.interactiveBorder;var s=rS(a.placement);var l=a.modifiersData.offset;if(!l){return true}var c=s==="bottom"?l.top.y:0;var u=s==="top"?l.bottom.y:0;var d=s==="right"?l.left.x:0;var f=s==="left"?l.right.x:0;var p=t.top-n+c>i;var h=n-t.bottom-u>i;var v=t.left-r+d>i;var m=r-t.right-f>i;return p||h||v||m})}function rq(e,t,r){var n=t+"EventListener";// some browsers apparently support `transition` (unprefixed) but only fire
// `webkitTransitionEnd`...
["transitionend","webkitTransitionEnd"].forEach(function(t){e[n](t,r)})}/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */function rG(e,t){var r=t;while(r){var n;if(e.contains(r)){return true}r=r.getRootNode==null?void 0:(n=r.getRootNode())==null?void 0:n.host}return false}var rQ={isTouch:false};var r$=0;/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */function rX(){if(rQ.isTouch){return}rQ.isTouch=true;if(window.performance){document.addEventListener("mousemove",rZ)}}/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */function rZ(){var e=performance.now();if(e-r$<20){rQ.isTouch=false;document.removeEventListener("mousemove",rZ)}r$=e}/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */function rJ(){var e=document.activeElement;if(rB(e)){var t=e._tippy;if(e.blur&&!t.state.isVisible){e.blur()}}}function r0(){document.addEventListener("touchstart",rX,rx);window.addEventListener("blur",rJ)}var r1=typeof window!=="undefined"&&typeof document!=="undefined";var r2=r1?!!window.msCrypto:false;function r6(e){var t=e==="destroy"?"n already-":" ";return[e+"() was called on a"+t+"destroyed instance. This is a no-op but","indicates a potential memory leak."].join(" ")}function r4(e){var t=/[ \t]{2,}/g;var r=/^[ \t]*/gm;return e.replace(t," ").replace(r,"").trim()}function r5(e){return r4("\n  %ctippy.js\n\n  %c"+r4(e)+"\n\n  %c👷‍ This is a development-only message. It will be removed in production.\n  ")}function r3(e){return[r5(e),"color: #00C584; font-size: 1.3em; font-weight: bold;","line-height: 1.5","color: #a6a095;"]}// Assume warnings and errors never have the same message
var r8;if(false){}function r7(){r8=new Set}function r9(e,t){if(e&&!r8.has(t)){var r;r8.add(t);(r=console).warn.apply(r,r3(t))}}function ne(e,t){if(e&&!r8.has(t)){var r;r8.add(t);(r=console).error.apply(r,r3(t))}}function nt(e){var t=!e;var r=Object.prototype.toString.call(e)==="[object Object]"&&!e.addEventListener;ne(t,["tippy() was passed","`"+String(e)+"`","as its targets (first) argument. Valid types are: String, Element,","Element[], or NodeList."].join(" "));ne(r,["tippy() was passed a plain object which is not supported as an argument","for virtual positioning. Use props.getReferenceClientRect instead."].join(" "))}var nr={animateFill:false,followCursor:false,inlinePositioning:false,sticky:false};var nn={allowHTML:false,animation:"fade",arrow:true,content:"",inertia:false,maxWidth:350,role:"tooltip",theme:"",zIndex:9999};var na=Object.assign({appendTo:rk,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:true,ignoreAttributes:false,interactive:false,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function e(){},onBeforeUpdate:function e(){},onCreate:function e(){},onDestroy:function e(){},onHidden:function e(){},onHide:function e(){},onMount:function e(){},onShow:function e(){},onShown:function e(){},onTrigger:function e(){},onUntrigger:function e(){},onClickOutside:function e(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:false,touch:true,trigger:"mouseenter focus",triggerTarget:null},nr,nn);var no=Object.keys(na);var ni=function e(e){/* istanbul ignore else */if(false){}var t=Object.keys(e);t.forEach(function(t){na[t]=e[t]})};function ns(e){var t=e.plugins||[];var r=t.reduce(function(t,r){var n=r.name,a=r.defaultValue;if(n){var o;t[n]=e[n]!==undefined?e[n]:(o=na[n])!=null?o:a}return t},{});return Object.assign({},e,r)}function nl(e,t){var r=t?Object.keys(ns(Object.assign({},na,{plugins:t}))):no;var n=r.reduce(function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim();if(!n){return t}if(r==="content"){t[r]=n}else{try{t[r]=JSON.parse(n)}catch(e){t[r]=n}}return t},{});return n}function nc(e,t){var r=Object.assign({},t,{content:rT(t.content,[e])},t.ignoreAttributes?{}:nl(e,t.plugins));r.aria=Object.assign({},na.aria,r.aria);r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content};return r}function nu(e,t){if(e===void 0){e={}}if(t===void 0){t=[]}var r=Object.keys(e);r.forEach(function(e){var r=rD(na,Object.keys(nr));var n=!rA(r,e);// Check if the prop exists in `plugins`
if(n){n=t.filter(function(t){return t.name===e}).length===0}r9(n,["`"+e+"`","is not a valid prop. You may have spelled it incorrectly, or if it's","a plugin, forgot to pass it in an array as props.plugins.","\n\n","All props: https://atomiks.github.io/tippyjs/v6/all-props/\n","Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "))})}function nd(e){var t=e.firstElementChild;var r=rN(t.children);return{box:t,content:r.find(function(e){return e.classList.contains(rb)}),arrow:r.find(function(e){return e.classList.contains(rw)||e.classList.contains(r_)}),backdrop:r.find(function(e){return e.classList.contains(ry)})}}var nf=1;var np=[];// Used by `hideAll()`
var nh=[];function nv(e,t){var r=nc(e,Object.assign({},na,ns(rF(t))));// ===========================================================================
// 🔒 Private members
// ===========================================================================
var n;var a;var o;var i=false;var s=false;var l=false;var c=false;var u;var d;var f;var p=[];var h=rM($,r.interactiveDebounce);var v;// ===========================================================================
// 🔑 Public members
// ===========================================================================
var m=nf++;var g=null;var b=rH(r.plugins);var y={// Is the instance currently enabled?
isEnabled:true,// Is the tippy currently showing and not transitioning out?
isVisible:false,// Has the instance been destroyed?
isDestroyed:false,// Is the tippy currently mounted to the DOM?
isMounted:false,// Has the tippy finished transitioning in?
isShown:false};var w={// properties
id:m,reference:e,popper:rL(),popperInstance:g,props:r,state:y,plugins:b,// methods
clearDelayTimeouts:el,setProps:ec,setContent:eu,show:ed,hide:ef,hideWithInteractivity:ep,enable:ei,disable:es,unmount:eh,destroy:ev};// TODO: Investigate why this early return causes a TDZ error in the tests —
// it doesn't seem to happen in the browser
/* istanbul ignore if */if(!r.render){if(false){}return w}// ===========================================================================
// Initial mutations
// ===========================================================================
var _=r.render(w),x=_.popper,k=_.onUpdate;x.setAttribute("data-tippy-root","");x.id="tippy-"+w.id;w.popper=x;e._tippy=w;x._tippy=w;var A=b.map(function(e){return e.fn(w)});var Y=e.hasAttribute("aria-expanded");q();F();H();S("onCreate",[w]);if(r.showOnCreate){ea()}// Prevent a tippy with a delay from hiding if the cursor left then returned
// before it started hiding
x.addEventListener("mouseenter",function(){if(w.props.interactive&&w.state.isVisible){w.clearDelayTimeouts()}});x.addEventListener("mouseleave",function(){if(w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0){O().addEventListener("mousemove",h)}});return w;// ===========================================================================
// 🔒 Private methods
// ===========================================================================
function I(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function T(){return I()[0]==="hold"}function M(){var e;// @ts-ignore
return!!((e=w.props.render)!=null&&e.$$tippy)}function D(){return v||e}function O(){var e=D().parentNode;return e?rV(e):document}function C(){return nd(x)}function E(e){// For touch or keyboard input, force `0` delay for UX reasons
// Also if the instance is mounted but not visible (transitioning out),
// ignore delay
if(w.state.isMounted&&!w.state.isVisible||rQ.isTouch||u&&u.type==="focus"){return 0}return rY(w.props.delay,e?0:1,na.delay)}function H(e){if(e===void 0){e=false}x.style.pointerEvents=w.props.interactive&&!e?"":"none";x.style.zIndex=""+w.props.zIndex}function S(e,t,r){if(r===void 0){r=true}A.forEach(function(r){if(r[e]){r[e].apply(r,t)}});if(r){var n;(n=w.props)[e].apply(n,t)}}function N(){var t=w.props.aria;if(!t.content){return}var r="aria-"+t.content;var n=x.id;var a=rC(w.props.triggerTarget||e);a.forEach(function(e){var t=e.getAttribute(r);if(w.state.isVisible){e.setAttribute(r,t?t+" "+n:n)}else{var a=t&&t.replace(n,"").trim();if(a){e.setAttribute(r,a)}else{e.removeAttribute(r)}}})}function F(){if(Y||!w.props.aria.expanded){return}var t=rC(w.props.triggerTarget||e);t.forEach(function(e){if(w.props.interactive){e.setAttribute("aria-expanded",w.state.isVisible&&e===D()?"true":"false")}else{e.removeAttribute("aria-expanded")}})}function L(){O().removeEventListener("mousemove",h);np=np.filter(function(e){return e!==h})}function P(t){// Moved finger to scroll instead of an intentional tap outside
if(rQ.isTouch){if(l||t.type==="mousedown"){return}}var r=t.composedPath&&t.composedPath()[0]||t.target;// Clicked on interactive popper
if(w.props.interactive&&rG(x,r)){return}// Clicked on the event listeners target
if(rC(w.props.triggerTarget||e).some(function(e){return rG(e,r)})){if(rQ.isTouch){return}if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0){return}}else{S("onClickOutside",[w,t])}if(w.props.hideOnClick===true){w.clearDelayTimeouts();w.hide();// `mousedown` event is fired right before `focus` if pressing the
// currentTarget. This lets a tippy with `focus` trigger know that it
// should not show
s=true;setTimeout(function(){s=false});// The listener gets added in `scheduleShow()`, but this may be hiding it
// before it shows, and hide()'s early bail-out behavior can prevent it
// from being cleaned up
if(!w.state.isMounted){R()}}}function W(){l=true}function j(){l=false}function B(){var e=O();e.addEventListener("mousedown",P,true);e.addEventListener("touchend",P,rx);e.addEventListener("touchstart",j,rx);e.addEventListener("touchmove",W,rx)}function R(){var e=O();e.removeEventListener("mousedown",P,true);e.removeEventListener("touchend",P,rx);e.removeEventListener("touchstart",j,rx);e.removeEventListener("touchmove",W,rx)}function K(e,t){V(e,function(){if(!w.state.isVisible&&x.parentNode&&x.parentNode.contains(x)){t()}})}function z(e,t){V(e,t)}function V(e,t){var r=C().box;function n(e){if(e.target===r){rq(r,"remove",n);t()}}// Make callback synchronous if duration is 0
// `transitionend` won't fire otherwise
if(e===0){return t()}rq(r,"remove",d);rq(r,"add",n);d=n}function U(t,r,n){if(n===void 0){n=false}var a=rC(w.props.triggerTarget||e);a.forEach(function(e){e.addEventListener(t,r,n);p.push({node:e,eventType:t,handler:r,options:n})})}function q(){if(T()){U("touchstart",Q,{passive:true});U("touchend",X,{passive:true})}rO(w.props.trigger).forEach(function(e){if(e==="manual"){return}U(e,Q);switch(e){case"mouseenter":U("mouseleave",X);break;case"focus":U(r2?"focusout":"blur",Z);break;case"focusin":U("focusout",Z);break}})}function G(){p.forEach(function(e){var t=e.node,r=e.eventType,n=e.handler,a=e.options;t.removeEventListener(r,n,a)});p=[]}function Q(e){var t;var r=false;if(!w.state.isEnabled||J(e)||s){return}var n=((t=u)==null?void 0:t.type)==="focus";u=e;v=e.currentTarget;F();if(!w.state.isVisible&&rj(e)){// If scrolling, `mouseenter` events can be fired if the cursor lands
// over a new target, but `mousemove` events don't get fired. This
// causes interactive tooltips to get stuck open until the cursor is
// moved
np.forEach(function(t){return t(e)})}// Toggle show/hide when clicking click-triggered tooltips
if(e.type==="click"&&(w.props.trigger.indexOf("mouseenter")<0||i)&&w.props.hideOnClick!==false&&w.state.isVisible){r=true}else{ea(e)}if(e.type==="click"){i=!r}if(r&&!n){eo(e)}}function $(e){var t=e.target;var n=D().contains(t)||x.contains(t);if(e.type==="mousemove"&&n){return}var a=en().concat(x).map(function(e){var t;var n=e._tippy;var a=(t=n.popperInstance)==null?void 0:t.state;if(a){return{popperRect:e.getBoundingClientRect(),popperState:a,props:r}}return null}).filter(Boolean);if(rU(a,e)){L();eo(e)}}function X(e){var t=J(e)||w.props.trigger.indexOf("click")>=0&&i;if(t){return}if(w.props.interactive){w.hideWithInteractivity(e);return}eo(e)}function Z(e){if(w.props.trigger.indexOf("focusin")<0&&e.target!==D()){return}// If focus was moved to within the popper
if(w.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)){return}eo(e)}function J(e){return rQ.isTouch?T()!==e.type.indexOf("touch")>=0:false}function ee(){et();var t=w.props,r=t.popperOptions,n=t.placement,a=t.offset,o=t.getReferenceClientRect,i=t.moveTransition;var s=M()?nd(x).arrow:null;var l=o?{getBoundingClientRect:o,contextElement:o.contextElement||D()}:e;var c={name:"$$tippy",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(e){var t=e.state;if(M()){var r=C(),n=r.box;["placement","reference-hidden","escaped"].forEach(function(e){if(e==="placement"){n.setAttribute("data-placement",t.placement)}else{if(t.attributes.popper["data-popper-"+e]){n.setAttribute("data-"+e,"")}else{n.removeAttribute("data-"+e)}}});t.attributes.popper={}}}};var u=[{name:"offset",options:{offset:a}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!i}},c];if(M()&&s){u.push({name:"arrow",options:{element:s,padding:3}})}u.push.apply(u,(r==null?void 0:r.modifiers)||[]);w.popperInstance=rm(l,x,Object.assign({},r,{placement:n,onFirstUpdate:f,modifiers:u}))}function et(){if(w.popperInstance){w.popperInstance.destroy();w.popperInstance=null}}function er(){var e=w.props.appendTo;var t;// By default, we'll append the popper to the triggerTargets's parentNode so
// it's directly after the reference element so the elements inside the
// tippy can be tabbed to
// If there are clipping issues, the user can specify a different appendTo
// and ensure focus management is handled correctly manually
var r=D();if(w.props.interactive&&e===rk||e==="parent"){t=r.parentNode}else{t=rT(e,[r])}// The popper element needs to exist on the DOM before its position can be
// updated as Popper needs to read its dimensions
if(!t.contains(x)){t.appendChild(x)}w.state.isMounted=true;ee();/* istanbul ignore else */if(false){}}function en(){return rN(x.querySelectorAll("[data-tippy-root]"))}function ea(e){w.clearDelayTimeouts();if(e){S("onTrigger",[w,e])}B();var t=E(true);var r=I(),a=r[0],o=r[1];if(rQ.isTouch&&a==="hold"&&o){t=o}if(t){n=setTimeout(function(){w.show()},t)}else{w.show()}}function eo(e){w.clearDelayTimeouts();S("onUntrigger",[w,e]);if(!w.state.isVisible){R();return}// For interactive tippies, scheduleHide is added to a document.body handler
// from onMouseLeave so must intercept scheduled hides from mousemove/leave
// events when trigger contains mouseenter and click, and the tip is
// currently shown as a result of a click.
if(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&i){return}var t=E(false);if(t){a=setTimeout(function(){if(w.state.isVisible){w.hide()}},t)}else{// Fixes a `transitionend` problem when it fires 1 frame too
// late sometimes, we don't want hide() to be called.
o=requestAnimationFrame(function(){w.hide()})}}// ===========================================================================
// 🔑 Public methods
// ===========================================================================
function ei(){w.state.isEnabled=true}function es(){// Disabling the instance should also hide it
// https://github.com/atomiks/tippy.js-react/issues/106
w.hide();w.state.isEnabled=false}function el(){clearTimeout(n);clearTimeout(a);cancelAnimationFrame(o)}function ec(t){/* istanbul ignore else */if(false){}if(w.state.isDestroyed){return}S("onBeforeUpdate",[w,t]);G();var r=w.props;var n=nc(e,Object.assign({},r,rF(t),{ignoreAttributes:true}));w.props=n;q();if(r.interactiveDebounce!==n.interactiveDebounce){L();h=rM($,n.interactiveDebounce)}// Ensure stale aria-expanded attributes are removed
if(r.triggerTarget&&!n.triggerTarget){rC(r.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")})}else if(n.triggerTarget){e.removeAttribute("aria-expanded")}F();H();if(k){k(r,n)}if(w.popperInstance){ee();// Fixes an issue with nested tippies if they are all getting re-rendered,
// and the nested ones get re-rendered first.
// https://github.com/atomiks/tippyjs-react/issues/177
// TODO: find a cleaner / more efficient solution(!)
en().forEach(function(e){// React (and other UI libs likely) requires a rAF wrapper as it flushes
// its work in one
requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})}S("onAfterUpdate",[w,t])}function eu(e){w.setProps({content:e})}function ed(){/* istanbul ignore else */if(false){}// Early bail-out
var e=w.state.isVisible;var t=w.state.isDestroyed;var r=!w.state.isEnabled;var n=rQ.isTouch&&!w.props.touch;var a=rY(w.props.duration,0,na.duration);if(e||t||r||n){return}// Normalize `disabled` behavior across browsers.
// Firefox allows events on disabled elements, but Chrome doesn't.
// Using a wrapper element (i.e. <span>) is recommended.
if(D().hasAttribute("disabled")){return}S("onShow",[w],false);if(w.props.onShow(w)===false){return}w.state.isVisible=true;if(M()){x.style.visibility="visible"}H();B();if(!w.state.isMounted){x.style.transition="none"}// If flipping to the opposite side after hiding at least once, the
// animation will use the wrong placement without resetting the duration
if(M()){var o=C(),i=o.box,s=o.content;rK([i,s],0)}f=function e(){var e;if(!w.state.isVisible||c){return}c=true;// reflow
void x.offsetHeight;x.style.transition=w.props.moveTransition;if(M()&&w.props.animation){var t=C(),r=t.box,n=t.content;rK([r,n],a);rz([r,n],"visible")}N();F();rE(nh,w);// certain modifiers (e.g. `maxSize`) require a second update after the
// popper has been positioned for the first time
(e=w.popperInstance)==null?void 0:e.forceUpdate();S("onMount",[w]);if(w.props.animation&&M()){z(a,function(){w.state.isShown=true;S("onShown",[w])})}};er()}function ef(){/* istanbul ignore else */if(false){}// Early bail-out
var e=!w.state.isVisible;var t=w.state.isDestroyed;var r=!w.state.isEnabled;var n=rY(w.props.duration,1,na.duration);if(e||t||r){return}S("onHide",[w],false);if(w.props.onHide(w)===false){return}w.state.isVisible=false;w.state.isShown=false;c=false;i=false;if(M()){x.style.visibility="hidden"}L();R();H(true);if(M()){var a=C(),o=a.box,s=a.content;if(w.props.animation){rK([o,s],n);rz([o,s],"hidden")}}N();F();if(w.props.animation){if(M()){K(n,w.unmount)}}else{w.unmount()}}function ep(e){/* istanbul ignore else */if(false){}O().addEventListener("mousemove",h);rE(np,h);h(e)}function eh(){/* istanbul ignore else */if(false){}if(w.state.isVisible){w.hide()}if(!w.state.isMounted){return}et();// If a popper is not interactive, it will be appended outside the popper
// tree by default. This seems mainly for interactive tippies, but we should
// find a workaround if possible
en().forEach(function(e){e._tippy.unmount()});if(x.parentNode){x.parentNode.removeChild(x)}nh=nh.filter(function(e){return e!==w});w.state.isMounted=false;S("onHidden",[w])}function ev(){/* istanbul ignore else */if(false){}if(w.state.isDestroyed){return}w.clearDelayTimeouts();w.unmount();G();delete e._tippy;w.state.isDestroyed=true;S("onDestroy",[w])}}function nm(e,t){if(t===void 0){t={}}var r=na.plugins.concat(t.plugins||[]);/* istanbul ignore else */if(false){}r0();var n=Object.assign({},t,{plugins:r});var a=rR(e);/* istanbul ignore else */if(false){var o,i}var s=a.reduce(function(e,t){var r=t&&nv(t,n);if(r){e.push(r)}return e},[]);return rP(e)?s[0]:s}nm.defaultProps=na;nm.setDefaultProps=ni;nm.currentInput=rQ;var ng=function e(e){var t=e===void 0?{}:e,r=t.exclude,n=t.duration;nh.forEach(function(e){var t=false;if(r){t=rB(r)?e.reference===r:e.popper===r.popper}if(!t){var a=e.props.duration;e.setProps({duration:n});e.hide();if(!e.state.isDestroyed){e.setProps({duration:a})}}})};// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var nb=Object.assign({},tR,{effect:function e(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}// intentionally return no cleanup function
// return () => { ... }
}});var ny=function e(e,t){var r;if(t===void 0){t={}}/* istanbul ignore else */if(false){}var n=e;var a=[];var o=[];var i;var s=t.overrides;var l=[];var c=false;function u(){o=n.map(function(e){return rC(e.props.triggerTarget||e.reference)}).reduce(function(e,t){return e.concat(t)},[])}function d(){a=n.map(function(e){return e.reference})}function f(e){n.forEach(function(t){if(e){t.enable()}else{t.disable()}})}function p(e){return n.map(function(t){var r=t.setProps;t.setProps=function(n){r(n);if(t.reference===i){e.setProps(n)}};return function(){t.setProps=r}})}// have to pass singleton, as it maybe undefined on first call
function h(e,t){var r=o.indexOf(t);// bail-out
if(t===i){return}i=t;var l=(s||[]).concat("content").reduce(function(e,t){e[t]=n[r].props[t];return e},{});e.setProps(Object.assign({},l,{getReferenceClientRect:typeof l.getReferenceClientRect==="function"?l.getReferenceClientRect:function(){var e;return(e=a[r])==null?void 0:e.getBoundingClientRect()}}))}f(false);d();u();var v={fn:function e(){return{onDestroy:function e(){f(true)},onHidden:function e(){i=null},onClickOutside:function e(e){if(e.props.showOnCreate&&!c){c=true;i=null}},onShow:function e(e){if(e.props.showOnCreate&&!c){c=true;h(e,a[0])}},onTrigger:function e(e,t){h(e,t.currentTarget)}}}};var m=nm(rL(),Object.assign({},rD(t,["overrides"]),{plugins:[v].concat(t.plugins||[]),triggerTarget:o,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat(((r=t.popperOptions)==null?void 0:r.modifiers)||[],[nb])})}));var g=m.show;m.show=function(e){g();// first time, showOnCreate or programmatic call with no params
// default to showing first instance
if(!i&&e==null){return h(m,a[0])}// triggered from event (do nothing as prepareInstance already called by onTrigger)
// programmatic call with no params when already visible (do nothing again)
if(i&&e==null){return}// target is index of instance
if(typeof e==="number"){return a[e]&&h(m,a[e])}// target is a child tippy instance
if(n.indexOf(e)>=0){var t=e.reference;return h(m,t)}// target is a ReferenceElement
if(a.indexOf(e)>=0){return h(m,e)}};m.showNext=function(){var e=a[0];if(!i){return m.show(0)}var t=a.indexOf(i);m.show(a[t+1]||e)};m.showPrevious=function(){var e=a[a.length-1];if(!i){return m.show(e)}var t=a.indexOf(i);var r=a[t-1]||e;m.show(r)};var b=m.setProps;m.setProps=function(e){s=e.overrides||s;b(e)};m.setInstances=function(e){f(true);l.forEach(function(e){return e()});n=e;f(false);d();u();l=p(m);m.setProps({triggerTarget:o})};l=p(m);return m};var nw=/* unused pure expression or super */null&&{mouseover:"mouseenter",focusin:"focus",click:"click"};/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */function n_(e,t){/* istanbul ignore else */if(false){}var r=[];var n=[];var a=false;var o=t.target;var i=rD(t,["target"]);var s=Object.assign({},i,{trigger:"manual",touch:false});var l=Object.assign({touch:na.touch},i,{showOnCreate:true});var c=nm(e,s);var u=rC(c);function d(e){if(!e.target||a){return}var r=e.target.closest(o);if(!r){return}// Get relevant trigger with fallbacks:
// 1. Check `data-tippy-trigger` attribute on target node
// 2. Fallback to `trigger` passed to `delegate()`
// 3. Fallback to `defaultProps.trigger`
var i=r.getAttribute("data-tippy-trigger")||t.trigger||na.trigger;// @ts-ignore
if(r._tippy){return}if(e.type==="touchstart"&&typeof l.touch==="boolean"){return}if(e.type!=="touchstart"&&i.indexOf(nw[e.type])<0){return}var s=nm(r,l);if(s){n=n.concat(s)}}function f(e,t,n,a){if(a===void 0){a=false}e.addEventListener(t,n,a);r.push({node:e,eventType:t,handler:n,options:a})}function p(e){var t=e.reference;f(t,"touchstart",d,rx);f(t,"mouseover",d);f(t,"focusin",d);f(t,"click",d)}function h(){r.forEach(function(e){var t=e.node,r=e.eventType,n=e.handler,a=e.options;t.removeEventListener(r,n,a)});r=[]}function v(e){var t=e.destroy;var r=e.enable;var o=e.disable;e.destroy=function(e){if(e===void 0){e=true}if(e){n.forEach(function(e){e.destroy()})}n=[];h();t()};e.enable=function(){r();n.forEach(function(e){return e.enable()});a=false};e.disable=function(){o();n.forEach(function(e){return e.disable()});a=true};p(e)}u.forEach(v);return c}var nx=/* unused pure expression or super */null&&{name:"animateFill",defaultValue:false,fn:function e(e){var t;// @ts-ignore
if(!((t=e.props.render)!=null&&t.$$tippy)){if(false){}return{}}var r=nd(e.popper),n=r.box,a=r.content;var o=e.props.animateFill?nk():null;return{onCreate:function t(){if(o){n.insertBefore(o,n.firstElementChild);n.setAttribute("data-animatefill","");n.style.overflow="hidden";e.setProps({arrow:false,animation:"shift-away"})}},onMount:function e(){if(o){var e=n.style.transitionDuration;var t=Number(e.replace("ms",""));// The content should fade in after the backdrop has mostly filled the
// tooltip element. `clip-path` is the other alternative but is not
// well-supported and is buggy on some devices.
a.style.transitionDelay=Math.round(t/10)+"ms";o.style.transitionDuration=e;rz([o],"visible")}},onShow:function e(){if(o){o.style.transitionDuration="0ms"}},onHide:function e(){if(o){rz([o],"hidden")}}}}};function nk(){var e=rL();e.className=ry;rz([e],"hidden");return e}var nA=/* unused pure expression or super */null&&{clientX:0,clientY:0};var nY=/* unused pure expression or super */null&&[];function nI(e){var t=e.clientX,r=e.clientY;nA={clientX:t,clientY:r}}function nT(e){e.addEventListener("mousemove",nI)}function nM(e){e.removeEventListener("mousemove",nI)}var nD=/* unused pure expression or super */null&&{name:"followCursor",defaultValue:false,fn:function e(e){var t=e.reference;var r=rV(e.props.triggerTarget||t);var n=false;var a=false;var o=true;var i=e.props;function s(){return e.props.followCursor==="initial"&&e.state.isVisible}function l(){r.addEventListener("mousemove",d)}function c(){r.removeEventListener("mousemove",d)}function u(){n=true;e.setProps({getReferenceClientRect:null});n=false}function d(r){// If the instance is interactive, avoid updating the position unless it's
// over the reference element
var n=r.target?t.contains(r.target):true;var a=e.props.followCursor;var o=r.clientX,i=r.clientY;var s=t.getBoundingClientRect();var l=o-s.left;var c=i-s.top;if(n||!e.props.interactive){e.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function e(){var e=t.getBoundingClientRect();var r=o;var n=i;if(a==="initial"){r=e.left+l;n=e.top+c}var s=a==="horizontal"?e.top:n;var u=a==="vertical"?e.right:r;var d=a==="horizontal"?e.bottom:n;var f=a==="vertical"?e.left:r;return{width:u-f,height:d-s,top:s,right:u,bottom:d,left:f}}})}}function f(){if(e.props.followCursor){nY.push({instance:e,doc:r});nT(r)}}function p(){nY=nY.filter(function(t){return t.instance!==e});if(nY.filter(function(e){return e.doc===r}).length===0){nM(r)}}return{onCreate:f,onDestroy:p,onBeforeUpdate:function t(){i=e.props},onAfterUpdate:function t(t,r){var o=r.followCursor;if(n){return}if(o!==undefined&&i.followCursor!==o){p();if(o){f();if(e.state.isMounted&&!a&&!s()){l()}}else{c();u()}}},onMount:function t(){if(e.props.followCursor&&!a){if(o){d(nA);o=false}if(!s()){l()}}},onTrigger:function e(e,t){if(rj(t)){nA={clientX:t.clientX,clientY:t.clientY}}a=t.type==="focus"},onHidden:function t(){if(e.props.followCursor){u();c();o=true}}}}};function nO(e,t){var r;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((((r=e.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(e){var r=e.name;return r!==t.name}),[t])})}}var nC=/* unused pure expression or super */null&&{name:"inlinePositioning",defaultValue:false,fn:function e(e){var t=e.reference;function r(){return!!e.props.inlinePositioning}var n;var a=-1;var o=false;var i=[];var s={name:"tippyInlinePositioning",enabled:true,phase:"afterWrite",fn:function t(t){var a=t.state;if(r()){if(i.indexOf(a.placement)!==-1){i=[]}if(n!==a.placement&&i.indexOf(a.placement)===-1){i.push(a.placement);e.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function e(){return l(a.placement)}})}n=a.placement}}};function l(e){return nE(rS(e),t.getBoundingClientRect(),rN(t.getClientRects()),a)}function c(t){o=true;e.setProps(t);o=false}function u(){if(!o){c(nO(e.props,s))}}return{onCreate:u,onAfterUpdate:u,onTrigger:function t(t,r){if(rj(r)){var n=rN(e.reference.getClientRects());var o=n.find(function(e){return e.left-2<=r.clientX&&e.right+2>=r.clientX&&e.top-2<=r.clientY&&e.bottom+2>=r.clientY});var i=n.indexOf(o);a=i>-1?i:a}},onHidden:function e(){a=-1}}}};function nE(e,t,r,n){// Not an inline element, or placement is not yet known
if(r.length<2||e===null){return t}// There are two rects and they are disjoined
if(r.length===2&&n>=0&&r[0].left>r[1].right){return r[n]||t}switch(e){case"top":case"bottom":{var a=r[0];var o=r[r.length-1];var i=e==="top";var s=a.top;var l=o.bottom;var c=i?a.left:o.left;var u=i?a.right:o.right;var d=u-c;var f=l-s;return{top:s,bottom:l,left:c,right:u,width:d,height:f}}case"left":case"right":{var p=Math.min.apply(Math,r.map(function(e){return e.left}));var h=Math.max.apply(Math,r.map(function(e){return e.right}));var v=r.filter(function(t){return e==="left"?t.left===p:t.right===h});var m=v[0].top;var g=v[v.length-1].bottom;var b=p;var y=h;var w=y-b;var _=g-m;return{top:m,bottom:g,left:b,right:y,width:w,height:_}}default:{return t}}}var nH=/* unused pure expression or super */null&&{name:"sticky",defaultValue:false,fn:function e(e){var t=e.reference,r=e.popper;function n(){return e.popperInstance?e.popperInstance.state.elements.reference:t}function a(t){return e.props.sticky===true||e.props.sticky===t}var o=null;var i=null;function s(){var t=a("reference")?n().getBoundingClientRect():null;var l=a("popper")?r.getBoundingClientRect():null;if(t&&nS(o,t)||l&&nS(i,l)){if(e.popperInstance){e.popperInstance.update()}}o=t;i=l;if(e.state.isMounted){requestAnimationFrame(s)}}return{onMount:function t(){if(e.props.sticky){s()}}}}};function nS(e,t){if(e&&t){return e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}return true}nm.setDefaultProps({animation:false});/* export default */const nN=nm;//# sourceMappingURL=tippy-headless.esm.js.map
// EXTERNAL MODULE: external "ReactDOM"
var nF=r(75206);// CONCATENATED MODULE: ./node_modules/@tippyjs/react/headless/dist/tippy-react-headless.esm.js
function nL(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,o;for(o=0;o<n.length;o++){a=n[o];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}var nP=typeof window!=="undefined"&&typeof document!=="undefined";function nW(e,t){if(e){if(typeof e==="function"){e(t)}if(({}).hasOwnProperty.call(e,"current")){e.current=t}}}function nj(){return nP&&document.createElement("div")}function nB(e){var t={"data-placement":e.placement};if(e.referenceHidden){t["data-reference-hidden"]=""}if(e.escaped){t["data-escaped"]=""}return t}function nR(e,t){if(e===t){return true}else if(typeof e==="object"&&e!=null&&typeof t==="object"&&t!=null){if(Object.keys(e).length!==Object.keys(t).length){return false}for(var r in e){if(t.hasOwnProperty(r)){if(!nR(e[r],t[r])){return false}}else{return false}}return true}else{return false}}function nK(e){var t=[];e.forEach(function(e){if(!t.find(function(t){return nR(e,t)})){t.push(e)}});return t}function nz(e,t){var r,n;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:nK([].concat(((r=e.popperOptions)==null?void 0:r.modifiers)||[],((n=t.popperOptions)==null?void 0:n.modifiers)||[]))})})}var nV=nP?m.useLayoutEffect:m.useEffect;function nU(e){// Using refs instead of state as it's recommended to not store imperative
// values in state due to memory problems in React(?)
var t=(0,m.useRef)();if(!t.current){t.current=typeof e==="function"?e():e}return t.current}function nq(e,t,r){r.split(/\s+/).forEach(function(r){if(r){e.classList[t](r)}})}var nG={name:"className",defaultValue:"",fn:function e(e){var t=e.popper.firstElementChild;var r=function t(){var t;return!!((t=e.props.render)==null?void 0:t.$$tippy)};function n(){if(e.props.className&&!r()){if(false){}return}nq(t,"add",e.props.className)}function a(){if(r()){nq(t,"remove",e.props.className)}}return{onCreate:n,onBeforeUpdate:a,onAfterUpdate:n}}};function nQ(e){function t(t){var r=t.children,n=t.content,a=t.visible,o=t.singleton,i=t.render,s=t.reference,l=t.disabled,c=l===void 0?false:l,u=t.ignoreAttributes,d=u===void 0?true:u,f=t.__source,p=t.__self,h=nL(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"]);var v=a!==undefined;var b=o!==undefined;var y=(0,m.useState)(false),w=y[0],_=y[1];var x=(0,m.useState)({}),k=x[0],A=x[1];var Y=(0,m.useState)(),I=Y[0],T=Y[1];var M=nU(function(){return{container:nj(),renders:1}});var D=Object.assign({ignoreAttributes:d},h,{content:M.container});if(v){if(false){}D.trigger="manual";D.hideOnClick=false}if(b){c=true}var O=D;var C=D.plugins||[];if(i){O=Object.assign({},D,{plugins:b&&o.data!=null?[].concat(C,[{fn:function e(){return{onTrigger:function e(e,t){var r=o.data.children.find(function(e){var r=e.instance;return r.reference===t.currentTarget});e.state.$$activeSingletonInstance=r.instance;T(r.content)}}}}]):C,render:function e(){return{popper:M.container}}})}var E=[s].concat(r?[r.type]:[]);// CREATE
nV(function(){var t=s;if(s&&s.hasOwnProperty("current")){t=s.current}var r=e(t||M.ref||nj(),Object.assign({},O,{plugins:[nG].concat(D.plugins||[])}));M.instance=r;if(c){r.disable()}if(a){r.show()}if(b){o.hook({instance:r,content:n,props:O,setSingletonContent:T})}_(true);return function(){r.destroy();o==null?void 0:o.cleanup(r)}},E);// UPDATE
nV(function(){var e;// Prevent this effect from running on 1st render
if(M.renders===1){M.renders++;return}var t=M.instance;t.setProps(nz(t.props,O));// Fixes #264
(e=t.popperInstance)==null?void 0:e.forceUpdate();if(c){t.disable()}else{t.enable()}if(v){if(a){t.show()}else{t.hide()}}if(b){o.hook({instance:t,content:n,props:O,setSingletonContent:T})}});nV(function(){var e;if(!i){return}var t=M.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat((((e=t.props.popperOptions)==null?void 0:e.modifiers)||[]).filter(function(e){var t=e.name;return t!=="$$tippyReact"}),[{name:"$$tippyReact",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(e){var t;var r=e.state;var n=(t=r.modifiersData)==null?void 0:t.hide;// WARNING: this is a high-risk path that can cause an infinite
// loop. This expression _must_ evaluate to false when required
if(k.placement!==r.placement||k.referenceHidden!==(n==null?void 0:n.isReferenceHidden)||k.escaped!==(n==null?void 0:n.hasPopperEscaped)){A({placement:r.placement,referenceHidden:n==null?void 0:n.isReferenceHidden,escaped:n==null?void 0:n.hasPopperEscaped})}r.attributes.popper={}}}])})})},[k.placement,k.referenceHidden,k.escaped].concat(E));return /*#__PURE__*/g().createElement(g().Fragment,null,r?/*#__PURE__*/(0,m.cloneElement)(r,{ref:function e(e){M.ref=e;nW(r.ref,e)}}):null,w&&/*#__PURE__*/(0,nF.createPortal)(i?i(nB(k),I,M.instance):n,M.container))}return t}function n$(e){return function t(t){var r=t===void 0?{}:t,n=r.disabled,a=n===void 0?false:n,o=r.overrides,i=o===void 0?[]:o;var s=useState(false),l=s[0],c=s[1];var u=nU({children:[],renders:1});nV(function(){if(!l){c(true);return}var t=u.children,r=u.sourceData;if(!r){if(false){}return}var n=e(t.map(function(e){return e.instance}),Object.assign({},r.props,{popperOptions:r.instance.props.popperOptions,overrides:i,plugins:[nG].concat(r.props.plugins||[])}));u.instance=n;if(a){n.disable()}return function(){n.destroy();u.children=t.filter(function(e){var t=e.instance;return!t.state.isDestroyed})}},[l]);nV(function(){if(!l){return}if(u.renders===1){u.renders++;return}var e=u.children,t=u.instance,r=u.sourceData;if(!(t&&r)){return}var n=r.props,o=n.content,s=nL(n,["content"]);t.setProps(nz(t.props,Object.assign({},s,{overrides:i})));t.setInstances(e.map(function(e){return e.instance}));if(a){t.disable()}else{t.enable()}});return useMemo(function(){var e={data:u,hook:function e(e){u.sourceData=e;u.setSingletonContent=e.setSingletonContent},cleanup:function e(){u.sourceData=null}};var t={hook:function e(e){var t,r;u.children=u.children.filter(function(t){var r=t.instance;return e.instance!==r});u.children.push(e);if(((t=u.instance)==null?void 0:t.state.isMounted)&&((r=u.instance)==null?void 0:r.state.$$activeSingletonInstance)===e.instance){u.setSingletonContent==null?void 0:u.setSingletonContent(e.content)}if(u.instance&&!u.instance.state.isDestroyed){u.instance.setInstances(u.children.map(function(e){return e.instance}))}},cleanup:function e(e){u.children=u.children.filter(function(t){return t.instance!==e});if(u.instance&&!u.instance.state.isDestroyed){u.instance.setInstances(u.children.map(function(e){return e.instance}))}}};return[e,t]},[])}}var nX=function(e,t){return/*#__PURE__*/(0,m.forwardRef)(function r(r,n){var a=r.children,o=nL(r,["children"]);return(/*#__PURE__*/// If I spread them separately here, Babel adds the _extends ponyfill for
// some reason
g().createElement(e,Object.assign({},t,o),a?/*#__PURE__*/(0,m.cloneElement)(a,{ref:function e(e){nW(n,e);nW(a.ref,e)}}):null))})};var nZ=/*#__PURE__*//* unused pure expression or super */null&&n$(createSingleton);var nJ=/*#__PURE__*/nX(/*#__PURE__*/nQ(nN),{render:function e(){return""}});/* export default */const n0=nJ;//# sourceMappingURL=tippy-react-headless.esm.js.map
;// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Tooltip.tsx
function n1(){var e=(0,f._)(["\n        bottom: auto;\n        left: -4px;\n        top: 50%;\n        transform: translateY(-50%) rotate(45deg);\n      "]);n1=function t(){return e};return e}function n2(){var e=(0,f._)(["\n        bottom: auto;\n        top: -4px;\n        left: 50%;\n        transform: translateX(-50%) rotate(45deg);\n      "]);n2=function t(){return e};return e}function n6(){var e=(0,f._)(["\n        bottom: auto;\n        top: 50%;\n        left: auto;\n        right: -4px;\n        transform: translateY(-50%) rotate(45deg);\n      "]);n6=function t(){return e};return e}var n4={opacity:0,transform:"scale(0.8)"};var n5={tension:300,friction:15};var n3=e=>{var{children:t,content:r,allowHTML:n,placement:a="top",hideOnClick:o,delay:s=0,disabled:d=false,visible:f}=e;var[p,h]=(0,eD/* .useSpring */.zh)(()=>n4);if(d)return t;var v=()=>{h.start({opacity:1,transform:"scale(1)",config:n5})};var m=e=>{var{unmount:t}=e;h.start((0,u._)((0,c._)({},n4),{onRest:t,config:(0,u._)((0,c._)({},n5),{clamp:true})}))};return/*#__PURE__*/(0,i/* .jsx */.Y)(n0,{render:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(eM/* .AnimatedDiv */.LK,(0,u._)((0,c._)({style:p,hideOnOverflow:false},e),{css:n7.contentBox(a),children:r}))},animation:true,onMount:v,onHide:m,allowHTML:n,delay:[s,100],hideOnClick:o,placement:a,visible:f,zIndex:l/* .zIndex.highest */.fE.highest,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:t})})};/* export default */const n8=n3;var n7={contentBox:e=>/*#__PURE__*/(0,p/* .css */.AH)("max-width:250px;width:100%;background-color:",l/* .colorTokens.color.black.main */.I6.color.black.main,";color:",l/* .colorTokens.text.white */.I6.text.white,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";padding:",l/* .spacing["4"] */.YK["4"]," ",l/* .spacing["8"] */.YK["8"],";font-size:",l/* .fontSize["15"] */.J["15"],";line-height:",l/* .lineHeight["20"] */.K_["20"],";position:relative;&::before{content:'';height:8px;width:8px;background-color:",l/* .colorTokens.color.black.main */.I6.color.black.main,";position:absolute;bottom:-4px;left:50%;transform:translateX(-50%) rotate(45deg);",e==="right"&&(0,p/* .css */.AH)(n1())," ",e==="bottom"&&(0,p/* .css */.AH)(n2())," ",e==="left"&&(0,p/* .css */.AH)(n6()),"}")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
function n9(){var e=(0,f._)(["\n      opacity: 0.5;\n    "]);n9=function t(){return e};return e}function ae(){var e=(0,f._)(["\n      display: none;\n    "]);ae=function t(){return e};return e}function at(){var e=(0,f._)(["\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      gap: ",";\n    "]);at=function t(){return e};return e}function ar(){var e=(0,f._)(["\n        padding: 0 "," 0 ",";\n      "]);ar=function t(){return e};return e}function an(){var e=(0,f._)(["\n        border-radius: 0;\n        border: none;\n        box-shadow: none;\n      "]);an=function t(){return e};return e}function aa(){var e=(0,f._)(["\n        border-color: transparent;\n      "]);aa=function t(){return e};return e}function ao(){var e=(0,f._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);ao=function t(){return e};return e}function ai(){var e=(0,f._)(["\n          border-color: ",";\n        "]);ai=function t(){return e};return e}function as(){var e=(0,f._)(["\n          color: ",";\n        "]);as=function t(){return e};return e}function al(){var e=(0,f._)(["\n        border-color: ",";\n        background-color: ",";\n      "]);al=function t(){return e};return e}function ac(){var e=(0,f._)(["\n        border-color: ",";\n        background-color: ",";\n      "]);ac=function t(){return e};return e}function au(){var e=(0,f._)(["\n      justify-content: end;\n    "]);au=function t(){return e};return e}function ad(){var e=(0,f._)(["\n      color: ",";\n    "]);ad=function t(){return e};return e}function af(){var e=(0,f._)(["\n      ",";\n    "]);af=function t(){return e};return e}var ap=e=>{var{field:t,fieldState:r,children:n,disabled:a=false,readOnly:o=false,label:s,isInlineLabel:c=false,variant:u,loading:d,placeholder:f,helpText:p,isHidden:v=false,removeBorder:m=false,characterCount:g,isSecondary:b=false,inputStyle:y,onClickAiButton:w,isMagicAi:_=false,generateWithAi:k=false,replaceEntireLabel:A=false}=e;var Y;var I=(0,R/* .nanoid */.Ak)();var T=[av.input({variant:u,hasFieldError:!!r.error,removeBorder:m,readOnly:o,hasHelpText:!!p,isSecondary:b,isMagicAi:_})];if((0,en/* .isDefined */.O9)(y)){T.push(y)}var M=/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:av.inputWrapper,children:[n({id:I,name:t.name,css:T,"aria-invalid":r.error?"true":"false",disabled:a,readOnly:o,placeholder:f,className:"tutor-input-field"}),d&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:av.loader,children:/*#__PURE__*/(0,i/* .jsx */.Y)(Z/* ["default"] */.Ay,{size:20,color:l/* .colorTokens.icon["default"] */.I6.icon["default"]})})]});return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:av.container({disabled:a,isHidden:v}),"data-cy":"form-field-wrapper",children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:av.inputContainer(c),children:[(s||p)&&/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:av.labelContainer,children:[s&&/*#__PURE__*/(0,i/* .jsxs */.FD)("label",{htmlFor:I,css:av.label(c,A),children:[s,/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:k,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",onClick:()=>{w===null||w===void 0?void 0:w()},css:av.aiButton,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),p&&!A&&/*#__PURE__*/(0,i/* .jsx */.Y)(n8,{content:p,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",width:20,height:20})})]}),g?/*#__PURE__*/(0,i/* .jsx */.Y)(n8,{placement:"right",hideOnClick:false,content:g.maxLimit-g.inputCharacter>=0?g.maxLimit-g.inputCharacter:(0,B.__)("Limit exceeded","tutor"),children:M}):M]}),((Y=r.error)===null||Y===void 0?void 0:Y.message)&&/*#__PURE__*/(0,i/* .jsxs */.FD)("p",{css:av.errorLabel(!!r.error,c),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{style:av.alertIcon,name:"info",width:20,height:20})," ",r.error.message]})]})};/* export default */const ah=ap;var av={container:e=>{var{disabled:t,isHidden:r}=e;return/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;position:relative;background:inherit;width:100%;",t&&(0,p/* .css */.AH)(n9())," ",r&&(0,p/* .css */.AH)(ae()))},inputContainer:e=>/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["4"] */.YK["4"],";width:100%;",e&&(0,p/* .css */.AH)(at(),l/* .spacing["12"] */.YK["12"])),input:e=>/*#__PURE__*/(0,p/* .css */.AH)("&.tutor-input-field{",_/* .typography.body */.I.body("regular"),";width:100%;border-radius:",l/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",l/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",l/* .spacing["8"] */.YK["8"]," ",l/* .spacing["16"] */.YK["16"],";color:",l/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;&:not(textarea){height:40px;}",e.hasHelpText&&(0,p/* .css */.AH)(ar(),l/* .spacing["32"] */.YK["32"],l/* .spacing["12"] */.YK["12"])," ",e.removeBorder&&(0,p/* .css */.AH)(an())," ",e.isSecondary&&(0,p/* .css */.AH)(aa()),":focus{",H/* .styleUtils.inputFocus */.x.inputFocus,";",e.isMagicAi&&(0,p/* .css */.AH)(ao(),l/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,l/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",e.hasFieldError&&(0,p/* .css */.AH)(ai(),l/* .colorTokens.stroke.danger */.I6.stroke.danger),"}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}::placeholder{",_/* .typography.caption */.I.caption("regular"),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";",e.isSecondary&&(0,p/* .css */.AH)(as(),l/* .colorTokens.text.hints */.I6.text.hints),"}",e.hasFieldError&&(0,p/* .css */.AH)(al(),l/* .colorTokens.stroke.danger */.I6.stroke.danger,l/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",e.readOnly&&(0,p/* .css */.AH)(ac(),l/* .colorTokens.background.disable */.I6.background.disable,l/* .colorTokens.background.disable */.I6.background.disable),"}"),errorLabel:(e,t)=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";line-height:",l/* .lineHeight["20"] */.K_["20"],";display:flex;align-items:start;margin-top:",l/* .spacing["4"] */.YK["4"],";",t&&(0,p/* .css */.AH)(au())," ",e&&(0,p/* .css */.AH)(ad(),l/* .colorTokens.text.status.onHold */.I6.text.status.onHold),"    & svg{margin-right:",l/* .spacing["2"] */.YK["2"],";transform:rotate(180deg);}"),labelContainer:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;gap:",l/* .spacing["4"] */.YK["4"],";> div{display:flex;color:",l/* .colorTokens.color.black["30"] */.I6.color.black["30"],";}"),label:(e,t)=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";margin:0px;width:",t?"100%":"auto",";color:",l/* .colorTokens.text.title */.I6.text.title,";display:flex;align-items:center;gap:",l/* .spacing["4"] */.YK["4"],";",e&&(0,p/* .css */.AH)(af(),_/* .typography.caption */.I.caption())),aiButton:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";width:32px;height:32px;border-radius:",l/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;justify-content:center;:disabled{cursor:not-allowed;}&:focus,&:active,&:hover{background:none;}&:focus-visible{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),inputWrapper:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;"),loader:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;top:50%;right:",l/* .spacing["12"] */.YK["12"],";transform:translateY(-50%);display:flex;"),alertIcon:/*#__PURE__*/(0,p/* .css */.AH)("flex-shrink:0;")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormInputWithContent.tsx
function am(){var e=(0,f._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);am=function t(){return e};return e}function ag(){var e=(0,f._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);ag=function t(){return e};return e}function ab(){var e=(0,f._)(["\n        border-color: ",";\n      "]);ab=function t(){return e};return e}function ay(){var e=(0,f._)(["\n          padding-",": ",";\n        "]);ay=function t(){return e};return e}function aw(){var e=(0,f._)(["\n            padding-",": ",";\n          "]);aw=function t(){return e};return e}function a_(){var e=(0,f._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);a_=function t(){return e};return e}function ax(){var e=(0,f._)(["\n      ","\n    "]);ax=function t(){return e};return e}function ak(){var e=(0,f._)(["\n      border-right: 1px solid ",";\n    "]);ak=function t(){return e};return e}function aA(){var e=(0,f._)(["\n      ","\n    "]);aA=function t(){return e};return e}function aY(){var e=(0,f._)(["\n      border-left: 1px solid ",";\n    "]);aY=function t(){return e};return e}var aI=e=>{var{label:t,content:r,contentPosition:n="left",showVerticalBar:a=true,size:o="regular",type:s="text",field:l,fieldState:d,disabled:f,readOnly:p,loading:h,placeholder:v,helpText:g,onChange:b,onKeyDown:y,isHidden:w,wrapperCss:_,contentCss:x,removeBorder:k=false,selectOnFocus:A=false}=e;var Y=(0,m.useRef)(null);return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{label:t,field:l,fieldState:d,disabled:f,readOnly:p,loading:h,placeholder:v,helpText:g,isHidden:w,removeBorder:k,children:e=>{var{css:t}=e,f=(0,ek._)(e,["css"]);var p;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:[aM.inputWrapper(!!d.error,k),_],children:[n==="left"&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:[aM.inputLeftContent(a,o),x],children:r}),/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,u._)((0,c._)({},l,f),{type:"text",value:(p=l.value)!==null&&p!==void 0?p:"",onChange:e=>{var t=s==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;l.onChange(t);if(b){b(t)}},onKeyDown:e=>y===null||y===void 0?void 0:y(e.key),css:[t,aM.input(n,a,o)],autoComplete:"off",ref:e=>{l.ref(e);// @ts-ignore
Y.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!A||!Y.current){return}Y.current.select()},"data-input":true})),n==="right"&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:[aM.inputRightContent(a,o),x],children:r})]})}})};/* export default */const aT=eT(aI);var aM={inputWrapper:(e,t)=>/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;",!t&&(0,p/* .css */.AH)(am(),l/* .colorTokens.stroke["default"] */.I6.stroke["default"],l/* .borderRadius["6"] */.Vq["6"],l/* .shadow.input */.r7.input,l/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,p/* .css */.AH)(ag(),l/* .colorTokens.stroke.danger */.I6.stroke.danger,l/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",H/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,p/* .css */.AH)(ab(),l/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,p/* .css */.AH)("&[data-input]{",_/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,p/* .css */.AH)(ay(),e,l/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,p/* .css */.AH)(a_(),l/* .fontSize["24"] */.J["24"],l/* .fontWeight.medium */.Wy.medium,t&&(0,p/* .css */.AH)(aw(),e,l/* .spacing["12"] */.YK["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small()," ",H/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",l/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",l/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,p/* .css */.AH)(ax(),_/* .typography.body */.I.body())," ",e&&(0,p/* .css */.AH)(ak(),l/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small()," ",H/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",l/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",l/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,p/* .css */.AH)(aA(),_/* .typography.body */.I.body())," ",e&&(0,p/* .css */.AH)(aY(),l/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ./assets/react/v3/shared/hooks/useDebounce.ts
var aD=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,n]=(0,m.useState)(e);(0,m.useEffect)(()=>{var r=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r};// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var aO=r(49785);// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/modals/CourseListModal/SearchField.tsx
var aC=e=>{var{onFilterItems:t}=e;var r=(0,j/* .useFormWithGlobalError */.p)({defaultValues:{search:""}});var n=aD(r.watch("search"));(0,m.useEffect)(()=>{t((0,c._)({},n.length>0&&{search:n}))},[t,n]);return/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:r.control,name:"search",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(aT,(0,u._)((0,c._)({},e),{content:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"search",width:24,height:24}),placeholder:(0,B.__)("Search...","tutor"),showVerticalBar:false}))})};/* export default */const aE=aC;// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/modals/CourseListModal/CategoryListTable.tsx
var aH=e=>{var{form:t}=e;var r,n;var a;var o=(a=t.watch("categories"))!==null&&a!==void 0?a:[];var{pageInfo:s,onPageChange:l,itemsPerPage:c,offset:u,onFilterItems:d}=J();var f=(0,e_/* .useAppliesToQuery */.nA)({applies_to:"specific_category",offset:u,limit:c,filter:s.filter});var p;var h=(p=(r=f.data)===null||r===void 0?void 0:r.results)!==null&&p!==void 0?p:[];function v(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var r=o.map(e=>e.id);var n=h.map(e=>e.id);if(e){var a=h.filter(e=>!r.includes(e.id));t.setValue("categories",[...o,...a]);return}var i=o.filter(e=>!n.includes(e.id));t.setValue("categories",i)}function m(){return h.every(e=>o.map(e=>e.id).includes(e.id))}var g=[{Header:((n=f.data)===null||n===void 0?void 0:n.results.length)?/*#__PURE__*/(0,i/* .jsx */.Y)(X,{onChange:v,checked:f.isLoading||f.isRefetching?false:m(),label:(0,B.__)("Category","tutor")}):(0,B.__)("Category","tutor"),Cell:e=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:aN.checkboxWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(X,{onChange:()=>{var r=o.filter(t=>t.id!==e.id);var n=(r===null||r===void 0?void 0:r.length)===o.length;if(n){t.setValue("categories",[...r,e])}else{t.setValue("categories",r)}},checked:o.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:e.image||ex,css:aN.thumbnail,alt:(0,B.__)("course item","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:aN.courseItem,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,i/* .jsx */.Y)("p",{children:"".concat(e.total_courses," ").concat((0,B.__)("Courses","tutor"))})]})]})},width:720}];if(f.isLoading){return/*#__PURE__*/(0,i/* .jsx */.Y)(Z/* .LoadingSection */.YE,{})}if(!f.data){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aN.errorMessage,children:(0,B.__)("Something went wrong","tutor")})}var b;return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aN.tableActions,children:/*#__PURE__*/(0,i/* .jsx */.Y)(aE,{onFilterItems:d})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aN.tableWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ey,{columns:g,data:(b=f.data.results)!==null&&b!==void 0?b:[],itemsPerPage:c,loading:f.isFetching||f.isRefetching})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aN.paginatorWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(et,{currentPage:s.page,onPageChange:l,totalItems:f.data.total_items,itemsPerPage:c})})]})};/* export default */const aS=aH;var aN={tableActions:/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,p/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,p/* .css */.AH)("margin:",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;gap:",l/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";margin-left:",l/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,p/* .css */.AH)("width:48px;height:48px;border-radius:",l/* .borderRadius["4"] */.Vq["4"],";"),errorMessage:/*#__PURE__*/(0,p/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/modals/CourseListModal/CourseListTable.tsx
var aF=e=>{var{type:t,form:r}=e;var n,a;var o=r.watch(t)||[];var{pageInfo:s,onPageChange:l,itemsPerPage:c,offset:u,onFilterItems:d}=J();var f=(0,e_/* .useAppliesToQuery */.nA)({applies_to:t==="courses"?"specific_courses":"specific_bundles",offset:u,limit:c,filter:s.filter});var p;var h=(p=(n=f.data)===null||n===void 0?void 0:n.results)!==null&&p!==void 0?p:[];function v(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var n=o.map(e=>e.id);var a=h.map(e=>e.id);if(e){var i=h.filter(e=>!n.includes(e.id));r.setValue(t,[...o,...i]);return}var s=o.filter(e=>!a.includes(e.id));r.setValue(t,s)}function m(){return h.every(e=>o.map(e=>e.id).includes(e.id))}var g=[{Header:((a=f.data)===null||a===void 0?void 0:a.results.length)?/*#__PURE__*/(0,i/* .jsx */.Y)(X,{onChange:v,checked:f.isLoading||f.isRefetching?false:m(),label:t==="courses"?(0,B.__)("Courses","tutor"):(0,B.__)("Bundles","tutor"),labelCss:aP.checkboxLabel}):"#",Cell:e=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:aP.checkboxWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(X,{onChange:()=>{var n=o.filter(t=>t.id!==e.id);var a=(n===null||n===void 0?void 0:n.length)===o.length;if(a){r.setValue(t,[...n,e])}else{r.setValue(t,n)}},checked:o.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:e.image||ex,css:aP.thumbnail,alt:(0,B.__)("course item","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:aP.courseItem,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,i/* .jsx */.Y)("p",{children:e.author})]})]})}},{Header:(0,B.__)("Price","tutor"),Cell:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aP.price,children:e.plan_start_price?/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:aP.startingFrom,children:/* translators: %s is the starting price of the plan */(0,B.sprintf)((0,B.__)("Starting from %s","tutor"),e.plan_start_price)}):/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:aP.discountPrice,children:e.regular_price})]})})}}];if(f.isLoading){return/*#__PURE__*/(0,i/* .jsx */.Y)(Z/* .LoadingSection */.YE,{})}if(!f.data){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aP.errorMessage,children:(0,B.__)("Something went wrong","tutor")})}var b;return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aP.tableActions,children:/*#__PURE__*/(0,i/* .jsx */.Y)(aE,{onFilterItems:d})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aP.tableWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ey,{columns:g,data:(b=f.data.results)!==null&&b!==void 0?b:[],itemsPerPage:c,loading:f.isFetching||f.isRefetching})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:aP.paginatorWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(et,{currentPage:s.page,onPageChange:l,totalItems:f.data.total_items,itemsPerPage:c})})]})};/* export default */const aL=aF;var aP={tableActions:/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,p/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,p/* .css */.AH)("margin:",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;gap:",l/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";margin-left:",l/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,p/* .css */.AH)("width:48px;height:48px;border-radius:",l/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),checkboxLabel:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";"),price:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;gap:",l/* .spacing["4"] */.YK["4"],";justify-content:end;"),discountPrice:/*#__PURE__*/(0,p/* .css */.AH)("text-decoration:line-through;color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";"),errorMessage:/*#__PURE__*/(0,p/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;"),startingFrom:/*#__PURE__*/(0,p/* .css */.AH)("color:",l/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useQuery.js
var aW=r(97286);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Toast.tsx
var aj=r(45549);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/api.ts
var aB=r(53127);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/endpoints.ts
var aR=r(37381);// CONCATENATED MODULE: ./assets/react/v3/shared/services/subscription.ts
var aK=/* unused pure expression or super */null&&[3,6,9,12];var az={untilCancelled:(0,B.__)("Until cancelled","tutor"),noRenewal:(0,B.__)("No Renewal","tutor")};var aV={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",plan_order:"0",recurring_value:"1",recurring_interval:"month",is_featured:false,is_enabled:true,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,B.__)("Until cancelled","tutor"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var aU=e=>{var t=()=>{if(e.recurring_limit==="0"){return az.untilCancelled}if(e.recurring_limit==="-1"){return az.noRenewal}return e.recurring_limit||""};var r,n,a,o,i,s,l,c,u,d,f;return{id:e.id,payment_type:(r=e.payment_type)!==null&&r!==void 0?r:"recurring",plan_type:(n=e.plan_type)!==null&&n!==void 0?n:"course",assign_id:e.assign_id,plan_name:(a=e.plan_name)!==null&&a!==void 0?a:"",plan_order:(o=e.plan_order)!==null&&o!==void 0?o:"0",recurring_value:(i=e.recurring_value)!==null&&i!==void 0?i:"0",recurring_interval:(s=e.recurring_interval)!==null&&s!==void 0?s:"month",is_featured:!!Number(e.is_featured),is_enabled:!!Number(e.is_enabled),regular_price:(l=e.regular_price)!==null&&l!==void 0?l:"0",recurring_limit:t(),enrollment_fee:(c=e.enrollment_fee)!==null&&c!==void 0?c:"0",trial_value:(u=e.trial_value)!==null&&u!==void 0?u:"0",trial_interval:(d=e.trial_interval)!==null&&d!==void 0?d:"day",sale_price:(f=e.sale_price)!==null&&f!==void 0?f:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?format(convertGMTtoLocalDate(e.sale_price_from),DateFormats.yearMonthDay):"",sale_price_from_time:e.sale_price_from?format(convertGMTtoLocalDate(e.sale_price_from),DateFormats.hoursMinutes):"",sale_price_to_date:e.sale_price_to?format(convertGMTtoLocalDate(e.sale_price_to),DateFormats.yearMonthDay):"",sale_price_to_time:e.sale_price_to?format(convertGMTtoLocalDate(e.sale_price_to),DateFormats.hoursMinutes):""}};var aq=e=>{var t=()=>{if(e.recurring_limit===az.untilCancelled){return"0"}if(e.recurring_limit===az.noRenewal){return"-1"}return e.recurring_limit};return _object_spread_props(_object_spread(_object_spread_props(_object_spread(_object_spread_props(_object_spread(_object_spread_props(_object_spread({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.id&&String(e.id)==="0"&&{plan_order:e.plan_order},e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:t(),is_featured:e.is_featured?"1":"0",is_enabled:e.is_enabled?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:convertToGMT(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:convertToGMT(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var aG=e=>{return wpAjaxInstance.post(endpoints.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var aQ=e=>{return useQuery({queryKey:["SubscriptionsList",e],queryFn:()=>aG(e).then(e=>e.data)})};var a$=(e,t)=>{return wpAjaxInstance.post(endpoints.SAVE_SUBSCRIPTION,_object_spread({object_id:e},t.id&&{id:t.id},t))};var aX=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>a$(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:convertToErrorMessage(e)})}})};var aZ=(e,t)=>{return wpAjaxInstance.post(endpoints.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var aJ=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>aZ(e,t),onSuccess:(n,a)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(a))})}},onError:e=>{r({type:"danger",message:convertToErrorMessage(e)})}})};var a0=(e,t)=>{return wpAjaxInstance.post(endpoints.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var a1=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>a0(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:convertToErrorMessage(e)})}})};var a2=(e,t)=>{return wpAjaxInstance.post(endpoints.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var a6=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>a2(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:convertToErrorMessage(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var a4=()=>{return aB/* .wpAjaxInstance.get */.b.get(aR/* ["default"].GET_MEMBERSHIP_PLANS */.A.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var a5=()=>{return(0,aW/* .useQuery */.I)({queryKey:["MembershipPlans"],queryFn:a4})};// CONCATENATED MODULE: ./assets/react/v3/shared/utils/currency.ts
var a3,a8,a7,a9,oe;var ot=e=>{var{symbol:t="$",position:r="left",thousandSeparator:n=",",decimalSeparator:a=".",fraction_digits:o=2}=e;return e=>{var i=e=>{var t=e.toFixed(o);var[r,i]=t.split(".");var s=r.replace(/\B(?=(\d{3})+(?!\d))/g,n);return i?"".concat(s).concat(a).concat(i):s};var s=i(Number(e));if(r==="left"){return"".concat(t).concat(s)}return"".concat(s).concat(t)}};var or,on,oa,oo,oi;var os=ot({symbol:(or=(a3=eA/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||a3===void 0?void 0:a3.symbol)!==null&&or!==void 0?or:"$",position:(on=(a8=eA/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||a8===void 0?void 0:a8.position)!==null&&on!==void 0?on:"left",thousandSeparator:(oa=(a7=eA/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||a7===void 0?void 0:a7.thousand_separator)!==null&&oa!==void 0?oa:",",decimalSeparator:(oo=(a9=eA/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||a9===void 0?void 0:a9.decimal_separator)!==null&&oo!==void 0?oo:".",fraction_digits:Number((oi=(oe=eA/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||oe===void 0?void 0:oe.no_of_decimal)!==null&&oi!==void 0?oi:2)});var ol=e=>{var t,r,n;var a;var o=(a=(t=tutorConfig.tutor_currency)===null||t===void 0?void 0:t.currency)!==null&&a!==void 0?a:"USD";var i;var s=(i=(r=tutorConfig.local)===null||r===void 0?void 0:r.replace("_","-"))!==null&&i!==void 0?i:"en-US";var l;var c=Number((l=(n=tutorConfig.tutor_currency)===null||n===void 0?void 0:n.no_of_decimal)!==null&&l!==void 0?l:2);var u=new Intl.NumberFormat(s,{style:"currency",currency:o,minimumFractionDigits:c});return u.format(e)};var oc=e=>{var{discount_type:t,discount_amount:r,total:n}=e;var a=ou({discount_amount:r,discount_type:t,total:n});return n-a};var ou=e=>{var{discount_type:t,discount_amount:r,total:n}=e;if(t==="flat"){return r}return n*(r/100)};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/modals/CourseListModal/MembershipPlanListTable.tsx
var od=e=>{var{form:t}=e;var r=(0,m.useMemo)(()=>t.watch("membershipPlans")||[],[t]);var n=a5();var[a,o]=(0,m.useState)("");var s=(0,m.useMemo)(()=>{if(!n.data)return[];var e=n.data.filter(e=>e.is_enabled==="1");if(!a){return e}return e.filter(e=>e.plan_name.toLowerCase().includes(a.toLowerCase()))},[n.data,a]);var l=(0,m.useCallback)(e=>{o(e.search||"")},[]);var c=(0,m.useCallback)(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var n=r.map(e=>e.id);var a=s.map(e=>e.id);if(e){var o=s.filter(e=>!n.includes(e.id));t.setValue("membershipPlans",[...r,...o]);return}var i=r.filter(e=>!a.includes(e.id));t.setValue("membershipPlans",i)},[t,s,r]);function u(){return s.every(e=>r.map(e=>e.id).includes(e.id))}var d=[{Header:s.length?/*#__PURE__*/(0,i/* .jsx */.Y)(X,{onChange:c,checked:n.isLoading||n.isRefetching?false:u(),label:(0,B.__)("Membership Plans","tutor"),labelCss:op.checkboxLabel}):"#",Cell:e=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:op.title,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(X,{onChange:()=>{var n=r.filter(t=>t.id!==e.id);var a=(n===null||n===void 0?void 0:n.length)===r.length;if(a){t.setValue("membershipPlans",[...n,e])}else{t.setValue("membershipPlans",n)}},checked:r.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"crownOutlined",width:32,height:32}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[e.plan_name,/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:e.is_featured==="1",children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"star",width:20,height:20})})]})]})}},{Header:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:op.tablePriceLabel,children:(0,B.__)("Price","tutor")}),Cell:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:op.priceWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:op.price,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:os(Number(e.sale_price)||Number(e.regular_price))}),Number(e.sale_price)>0&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:op.discountPrice,children:os(Number(e.regular_price))}),"/",/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:op.recurringInterval,children:(0,R/* .formatSubscriptionRepeatUnit */.u5)({unit:e.recurring_interval,value:Number(e.recurring_value)})})]})})}}];if(n.isLoading){return/*#__PURE__*/(0,i/* .jsx */.Y)(Z/* .LoadingSection */.YE,{})}if(!n.data){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:op.errorMessage,children:(0,B.__)("Something went wrong","tutor")})}return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:op.tableActions,children:/*#__PURE__*/(0,i/* .jsx */.Y)(aE,{onFilterItems:l})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:op.tableWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ey,{columns:d,data:s,loading:n.isFetching})})]})};/* export default */const of=od;var op={tableLabel:/*#__PURE__*/(0,p/* .css */.AH)("text-align:left;"),tablePriceLabel:/*#__PURE__*/(0,p/* .css */.AH)("text-align:right;"),tableActions:/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,p/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),checkboxLabel:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";"),title:/*#__PURE__*/(0,p/* .css */.AH)("height:48px;",_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";",H/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",l/* .spacing["8"] */.YK["8"],";svg{flex-shrink:0;color:",l/* .colorTokens.icon.hints */.I6.icon.hints,";}div{",H/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",l/* .spacing["4"] */.YK["4"],";svg{color:",l/* .colorTokens.icon.brand */.I6.icon.brand,";}}"),priceWrapper:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;justify-content:flex-end;height:48px;text-align:right;"),price:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";display:flex;gap:",l/* .spacing["2"] */.YK["2"],";justify-content:end;"),discountPrice:/*#__PURE__*/(0,p/* .css */.AH)("text-decoration:line-through;color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";"),recurringInterval:/*#__PURE__*/(0,p/* .css */.AH)("text-transform:capitalize;color:",l/* .colorTokens.text.hints */.I6.text.hints,";"),errorMessage:/*#__PURE__*/(0,p/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/modals/CourseListModal/index.tsx
function oh(e){var{title:t,closeModal:r,actions:n,form:a,type:o}=e;var s=(0,j/* .useFormWithGlobalError */.p)({defaultValues:a.getValues()});var l={courses:/*#__PURE__*/(0,i/* .jsx */.Y)(aL,{form:s,type:"courses"}),bundles:/*#__PURE__*/(0,i/* .jsx */.Y)(aL,{form:s,type:"bundles"}),categories:/*#__PURE__*/(0,i/* .jsx */.Y)(aS,{form:s}),membershipPlans:/*#__PURE__*/(0,i/* .jsx */.Y)(of,{form:s})};function c(){a.setValue(o,s.getValues(o));r({action:"CONFIRM"})}return/*#__PURE__*/(0,i/* .jsxs */.FD)(P,{onClose:()=>r({action:"CLOSE"}),title:t,actions:n,maxWidth:720,children:[l[o],/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:om.footer,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{size:"small",variant:"text",onClick:()=>r({action:"CLOSE"}),children:(0,B.__)("Cancel","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{type:"submit",size:"small",variant:"primary",onClick:c,children:(0,B.__)("Add","tutor")})]})]})}/* export default */const ov=oh;var om={footer:/*#__PURE__*/(0,p/* .css */.AH)("box-shadow:0px 1px 0px 0px #e4e5e7 inset;height:56px;display:flex;align-items:center;justify-content:end;gap:",l/* .spacing["16"] */.YK["16"],";padding-inline:",l/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Box.tsx
function og(){var e=(0,f._)(["\n      border: 1px solid ",";\n    "]);og=function t(){return e};return e}function ob(){var e=(0,f._)(["\n      border-bottom: 1px solid ",";\n      padding: "," ",";\n    "]);ob=function t(){return e};return e}var oy=/*#__PURE__*/g().forwardRef((e,t)=>{var{children:r,className:n,bordered:a=false,wrapperCss:o}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:t,className:n,css:[ox.wrapper(a),o],children:r})});oy.displayName="Box";var ow=/*#__PURE__*/g().forwardRef((e,t)=>{var{children:r,className:n,separator:a=false,tooltip:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{ref:t,className:n,css:ox.title(a),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:r}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(n8,{content:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",width:20,height:20})})})]})});ow.displayName="BoxTitle";var o_=/*#__PURE__*/g().forwardRef((e,t)=>{var{children:r,className:n}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:t,className:n,css:ox.subtitle,children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:r})})});o_.displayName="BoxSubtitle";var ox={wrapper:e=>/*#__PURE__*/(0,p/* .css */.AH)("background-color:",l/* .colorTokens.background.white */.I6.background.white,";border-radius:",l/* .borderRadius["8"] */.Vq["8"],";padding:",l/* .spacing["12"] */.YK["12"]," ",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["20"] */.YK["20"],";",e&&(0,p/* .css */.AH)(og(),l/* .colorTokens.stroke.divider */.I6.stroke.divider)),title:e=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body("medium"),";color:",l/* .colorTokens.text.title */.I6.text.title,";display:flex;gap:",l/* .spacing["4"] */.YK["4"],";align-items:center;",e&&(0,p/* .css */.AH)(ob(),l/* .colorTokens.stroke.divider */.I6.stroke.divider,l/* .spacing["12"] */.YK["12"],l/* .spacing["20"] */.YK["20"]),"    & > div{height:20px;svg{color:",l/* .colorTokens.icon.hints */.I6.icon.hints,";}}& > span{display:inline-block;}"),subtitle:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/Modal.tsx
var ok=r(1448);// CONCATENATED MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var oA={SAFE_MARGIN:12,MAX_OFFSET_VERTICAL:6,MAX_OFFSET_HORIZONTAL:12,CENTER_OFFSET:8};var oY=4;var oI={TOP:"top",TOP_LEFT:"topLeft",TOP_RIGHT:"topRight",RIGHT:"right",RIGHT_TOP:"rightTop",RIGHT_BOTTOM:"rightBottom",BOTTOM:"bottom",BOTTOM_LEFT:"bottomLeft",BOTTOM_RIGHT:"bottomRight",LEFT:"left",LEFT_TOP:"leftTop",LEFT_BOTTOM:"leftBottom",MIDDLE:"middle",ABSOLUTE_CENTER:"absoluteCenter"};var oT=e=>{var t={[oI.TOP]:oI.TOP,[oI.TOP_LEFT]:oI.TOP_RIGHT,[oI.TOP_RIGHT]:oI.TOP_LEFT,[oI.RIGHT]:oI.LEFT,[oI.RIGHT_TOP]:oI.LEFT_TOP,[oI.RIGHT_BOTTOM]:oI.LEFT_BOTTOM,[oI.BOTTOM]:oI.BOTTOM,[oI.BOTTOM_LEFT]:oI.BOTTOM_RIGHT,[oI.BOTTOM_RIGHT]:oI.BOTTOM_LEFT,[oI.LEFT]:oI.RIGHT,[oI.LEFT_TOP]:oI.RIGHT_TOP,[oI.LEFT_BOTTOM]:oI.RIGHT_BOTTOM,[oI.MIDDLE]:oI.MIDDLE,[oI.ABSOLUTE_CENTER]:oI.ABSOLUTE_CENTER};return t[e]||e};var oM=e=>{return{top:e.top,left:-e.left}};var oD=(e,t)=>{var{width:r,height:n}=t;return{top:e.top<0,bottom:e.top+n>window.innerHeight,left:e.left<0,right:e.left+r>window.innerWidth}};var oO=(e,t)=>{return e.startsWith("top")&&t.top||e.startsWith("bottom")&&t.bottom||e.startsWith("left")&&t.left||e.startsWith("right")&&t.right};var oC=(e,t,r,n,a)=>{var{width:o,height:i}=r;var{top:s,left:l}=a;var c=t.left+t.width/2-o/2;var u=t.top+t.height/2-i/2;var d={[oI.TOP]:{top:t.top-i-n,left:c},[oI.TOP_LEFT]:{top:t.top-i-n,left:t.left},[oI.TOP_RIGHT]:{top:t.top-i-n,left:t.right-o},[oI.BOTTOM]:{top:t.bottom+n,left:c},[oI.BOTTOM_LEFT]:{top:t.bottom+n,left:t.left},[oI.BOTTOM_RIGHT]:{top:t.bottom+n,left:t.right-o},[oI.LEFT]:{top:u,left:t.left-o-n},[oI.LEFT_TOP]:{top:t.top,left:t.left-o-n},[oI.LEFT_BOTTOM]:{top:t.bottom-i,left:t.left-o-n},[oI.RIGHT]:{top:u,left:t.right+n},[oI.RIGHT_TOP]:{top:t.top,left:t.right+n},[oI.RIGHT_BOTTOM]:{top:t.bottom-i,left:t.right+n},[oI.MIDDLE]:{top:u,left:c},[oI.ABSOLUTE_CENTER]:{top:window.innerHeight/2-i/2,left:window.innerWidth/2-o/2}};var f=d[e]||d[oI.BOTTOM];return{top:f.top+s,left:f.left+l}};var oE=(e,t,r,n,a,o)=>{var i={[oI.TOP]:oI.BOTTOM,[oI.TOP_LEFT]:oI.BOTTOM_LEFT,[oI.TOP_RIGHT]:oI.BOTTOM_RIGHT,[oI.BOTTOM]:oI.TOP,[oI.BOTTOM_LEFT]:oI.TOP_LEFT,[oI.BOTTOM_RIGHT]:oI.TOP_RIGHT,[oI.LEFT]:oI.RIGHT,[oI.LEFT_TOP]:oI.RIGHT_TOP,[oI.LEFT_BOTTOM]:oI.RIGHT_BOTTOM,[oI.RIGHT]:oI.LEFT,[oI.RIGHT_TOP]:oI.LEFT_TOP,[oI.RIGHT_BOTTOM]:oI.LEFT_BOTTOM,[oI.MIDDLE]:oI.MIDDLE,[oI.ABSOLUTE_CENTER]:oI.ABSOLUTE_CENTER};var s=oD(e,r);var l=oO(t,s);if(!l){return{position:e,placement:t}}// Try opposite placement
var c=i[t];var u=oC(c,n,r,a,o);var d=oD(u,r);var f=oO(c,d);if(!f){return{position:u,placement:c}}return{position:e,placement:t}};var oH=(e,t,r,n)=>{var{width:a,height:o}=n;// Skip arrow for covered triggers or special placements
var i=[oI.MIDDLE,oI.ABSOLUTE_CENTER].includes(e);var s=r.left<t.left+oA.SAFE_MARGIN&&r.left+a>t.right-oA.SAFE_MARGIN&&r.top<t.top+oA.SAFE_MARGIN&&r.top+o>t.bottom-oA.SAFE_MARGIN;if(i||s)return{};var l=e.startsWith("top")||e.startsWith("bottom");var c=e.startsWith("left")||e.startsWith("right");if(l){var u=t.left+t.width/2;var d=Math.max(oA.SAFE_MARGIN,Math.min(a-oA.MAX_OFFSET_VERTICAL,u-r.left))-oA.CENTER_OFFSET;if(w/* .isRTL */.V8){d=a-d-oA.CENTER_OFFSET*2}return{arrowLeft:d}}if(c){var f=t.top+t.height/2;var p=Math.max(oA.SAFE_MARGIN,Math.min(o-oA.MAX_OFFSET_HORIZONTAL,f-r.top))-oA.CENTER_OFFSET;return{arrowTop:p}}return{}};var oS=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:oY;var{width:n,height:a}=t;return{left:Math.max(r,Math.min(window.innerWidth-n-r,e.left)),top:Math.max(r,Math.min(window.innerHeight-a-r,e.top))}};var oN=e=>{var{isOpen:t,triggerRef:r,placement:n=oI.BOTTOM,arrow:a=false,gap:o=10,autoAdjustOverflow:i=true,positionModifier:s={top:0,left:0},dependencies:l=[]}=e;var d=(0,m.useMemo)(()=>r||{current:null},[r]);var f=(0,m.useRef)(null);var[p,h]=(0,m.useState)(0);var[v,g]=(0,m.useState)({left:0,top:0,placement:oI.BOTTOM});var b=(0,m.useMemo)(()=>{return w/* .isRTL */.V8?oT(n):n},[n]);var y=(0,m.useMemo)(()=>{return w/* .isRTL */.V8?oM(s):s},[s]);(0,m.useEffect)(()=>{if(!d.current)return;h(d.current.getBoundingClientRect().width)},[d]);(0,m.useEffect)(()=>{if(!t||!d.current||!f.current)return;var e=d.current.getBoundingClientRect();var r=f.current.getBoundingClientRect();var n={width:r.width||e.width,height:r.height};var s=oC(b,e,n,o,y);var l=b;if(i){var p=oE(s,b,n,e,o,y);s=p.position;l=p.placement}s=oS(s,n);var h=a?oH(l,e,s,n):{};g((0,c._)((0,u._)((0,c._)({},s),{placement:l}),h))},[d,f,t,b,y,o,a,i,// eslint-disable-next-line react-hooks/exhaustive-deps
...l]);return{position:v,triggerWidth:p,triggerRef:d,popoverRef:f}};var oF=e=>{var{isOpen:t,children:r,onClickOutside:n,onEscape:a,animationType:o=eM/* .AnimationType.slideDown */.J6.slideDown}=e;var{hasModalOnStack:s}=(0,ok/* .useModal */.h)();E(t);(0,m.useEffect)(()=>{var e=e=>{if(e.key==="Escape"){a===null||a===void 0?void 0:a()}};if(!t)return;document.addEventListener("keydown",e,true);return()=>{document.removeEventListener("keydown",e,true)}},[t,s,a]);var{transitions:l}=(0,eM/* .useAnimation */.sM)({data:t,animationType:o});return l((e,t)=>{if(!t){return null}return/*#__PURE__*/(0,nF.createPortal)(/*#__PURE__*/(0,i/* .jsx */.Y)(eM/* .AnimatedDiv */.LK,{css:oL.wrapper,style:e,children:/*#__PURE__*/(0,i/* .jsx */.Y)(y,{children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{className:"tutor-portal-popover",role:"presentation",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:oL.backdrop,onKeyUp:R/* .noop */.lQ,onClick:e=>{e.stopPropagation();n===null||n===void 0?void 0:n()}}),r]})})}),document.body)})};var oL={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("position:fixed;z-index:",l/* .zIndex.highest */.fE.highest,";inset:0;"),backdrop:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.centeredFlex */.x.centeredFlex,";position:fixed;inset:0;z-index:",l/* .zIndex.negative */.fE.negative,";")};// CONCATENATED MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
function oP(){var e=(0,f._)(["\n              border-left: 8px solid transparent;\n              border-right: 8px solid transparent;\n              border-top: 8px solid ",";\n              border-bottom: none;\n              left: ",";\n              bottom: -8px;\n              transform: ",";\n            "]);oP=function t(){return e};return e}function oW(){var e=(0,f._)(["\n              border-left: 8px solid transparent;\n              border-right: 8px solid transparent;\n              border-bottom: 8px solid ",";\n              border-top: none;\n              left: ",";\n              top: -8px;\n              transform: ",";\n            "]);oW=function t(){return e};return e}function oj(){var e=(0,f._)(["\n              border-top: 8px solid transparent;\n              border-bottom: 8px solid transparent;\n              border-left: 8px solid ",";\n              border-right: none;\n              right: -8px;\n              top: ",";\n              transform: ",";\n            "]);oj=function t(){return e};return e}function oB(){var e=(0,f._)(["\n              border-top: 8px solid transparent;\n              border-bottom: 8px solid transparent;\n              border-right: 8px solid ",";\n              border-left: none;\n              left: -8px;\n              top: ",";\n              transform: ",";\n            "]);oB=function t(){return e};return e}function oR(){var e=(0,f._)(["\n            content: '';\n            position: absolute;\n            width: 0;\n            height: 0;\n            border-color: transparent;\n            border-style: solid;\n            ","\n            ","\n            ","\n            ","\n          "]);oR=function t(){return e};return e}var oK=e=>{var{children:t,placement:r=oI.BOTTOM,triggerRef:n,isOpen:a,gap:o,maxWidth:s,closePopover:l,closeOnEscape:c=true,animationType:u=eM/* .AnimationType.slideLeft */.J6.slideLeft,arrow:d=false,autoAdjustOverflow:f=true,positionModifier:p={top:0,left:0},dependencies:h=[]}=e;var{position:v,triggerWidth:m,popoverRef:g}=oN({triggerRef:n,isOpen:a,autoAdjustOverflow:f,placement:r,arrow:d,gap:o,positionModifier:p,dependencies:h});return/*#__PURE__*/(0,i/* .jsx */.Y)(oF,{isOpen:a,onClickOutside:l,animationType:u,onEscape:c?l:undefined,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:oz.wrapper({placement:w/* .isRTL */.V8?oT(v.placement):v.placement,hideArrow:!d||v.arrowLeft===undefined&&v.arrowTop===undefined,arrowLeft:v.arrowLeft,arrowTop:v.arrowTop}),style:{left:v.left,top:v.top,maxWidth:s!==null&&s!==void 0?s:m},ref:g,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:oz.content,children:t})})})};var oz={wrapper:e=>{var{placement:t,hideArrow:r,arrowLeft:n,arrowTop:a}=e;return/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;width:100%;z-index:",l/* .zIndex.dropdown */.fE.dropdown,";&::before{",t&&!r?(0,p/* .css */.AH)(oR(),t.startsWith("top")&&(0,p/* .css */.AH)(oP(),l/* .colorTokens.stroke.white */.I6.stroke.white,n!==undefined?"".concat(n,"px"):"50%",n===undefined?"translateX(-50%)":"none"),t.startsWith("bottom")&&(0,p/* .css */.AH)(oW(),l/* .colorTokens.stroke.white */.I6.stroke.white,n!==undefined?"".concat(n,"px"):"50%",n===undefined?"translateX(-50%)":"none"),t.startsWith("left")&&(0,p/* .css */.AH)(oj(),l/* .colorTokens.stroke.white */.I6.stroke.white,a!==undefined?"".concat(a,"px"):"50%",a===undefined?"translateY(-50%)":"none"),t.startsWith("right")&&(0,p/* .css */.AH)(oB(),l/* .colorTokens.stroke.white */.I6.stroke.white,a!==undefined?"".concat(a,"px"):"50%",a===undefined?"translateY(-50%)":"none")):"","}")},content:/*#__PURE__*/(0,p/* .css */.AH)("background-color:",l/* .colorTokens.background.white */.I6.background.white,";box-shadow:",l/* .shadow.popover */.r7.popover,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";::-webkit-scrollbar{background-color:",l/* .colorTokens.background.white */.I6.background.white,";width:10px;}::-webkit-scrollbar-thumb{background-color:",l/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";}")};/* export default */const oV=oK;// CONCATENATED MODULE: ./assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var oU=e=>{var{options:t,isOpen:r,onSelect:n,onClose:a,selectedValue:o}=e;var[i,s]=(0,m.useState)(-1);var l=(0,m.useCallback)(e=>{if(!r)return;var o=(e,r)=>{var n;var a=e;var o=r==="down"?1:-1;do{a+=o;if(a<0)a=t.length-1;if(a>=t.length)a=0}while(a>=0&&a<t.length&&t[a].disabled)if((n=t[a])===null||n===void 0?void 0:n.disabled){return e}return a};switch(e.key){case"ArrowDown":e.preventDefault();s(e=>{var t=o(e===-1?0:e,"down");return t});break;case"ArrowUp":e.preventDefault();s(e=>{var t=o(e===-1?0:e,"up");return t});break;case"Enter":e.preventDefault();e.stopPropagation();if(i>=0&&i<t.length){var l=t[i];if(!l.disabled){a();n(l)}}break;case"Escape":e.preventDefault();e.stopPropagation();a();break;default:break}},[r,t,i,n,a]);(0,m.useEffect)(()=>{if(r){if(i===-1){var e=t.findIndex(e=>e.value===o);var n=e>=0?e:t.findIndex(e=>!e.disabled);s(n)}document.addEventListener("keydown",l,true);return()=>document.removeEventListener("keydown",l,true)}},[r,l,t,o,i]);(0,m.useEffect)(()=>{if(!r){s(-1)}},[r]);var c=(0,m.useCallback)(e=>{var r;if(!((r=t[e])===null||r===void 0?void 0:r.disabled)){s(e)}},[t]);return{activeIndex:i,setActiveIndex:c}};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
function oq(){var e=(0,f._)(["\n      &::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: ",";\n        color: ",";\n        border: 1px solid transparent;\n        -webkit-mask:\n          linear-gradient(#fff 0 0) padding-box,\n          linear-gradient(#fff 0 0);\n        -webkit-mask-composite: xor;\n        mask-composite: exclude;\n        border-radius: 6px;\n      }\n    "]);oq=function t(){return e};return e}function oG(){var e=(0,f._)(["\n        padding-left: ",";\n      "]);oG=function t(){return e};return e}function oQ(){var e=(0,f._)(["\n        &.tutor-input-field {\n          height: 56px;\n          padding-bottom: ",";\n        }\n      "]);oQ=function t(){return e};return e}function o$(){var e=(0,f._)(["\n        background-color: ",";\n      "]);o$=function t(){return e};return e}function oX(){var e=(0,f._)(["\n        position: relative;\n        border: none;\n        background: transparent;\n      "]);oX=function t(){return e};return e}function oZ(){var e=(0,f._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);oZ=function t(){return e};return e}function oJ(){var e=(0,f._)(["\n          border-color: ",";\n          background-color: ",";\n        "]);oJ=function t(){return e};return e}function o0(){var e=(0,f._)(["\n      padding-left: calc("," + 1px);\n    "]);o0=function t(){return e};return e}function o1(){var e=(0,f._)(["\n        color: ",";\n\n        &:hover {\n          text-decoration: underline;\n        }\n      "]);o1=function t(){return e};return e}function o2(){var e=(0,f._)(["\n      min-width: 200px;\n    "]);o2=function t(){return e};return e}function o6(){var e=(0,f._)(["\n      background-color: ",";\n    "]);o6=function t(){return e};return e}function o4(){var e=(0,f._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);o4=function t(){return e};return e}function o5(){var e=(0,f._)(["\n      transform: rotate(180deg);\n    "]);o5=function t(){return e};return e}var o3=e=>{var{options:t,field:r,fieldState:n,onChange:a=R/* .noop */.lQ,label:o,placeholder:s="",disabled:l,readOnly:f,loading:p,isSearchable:v=false,isInlineLabel:g,hideCaret:b,listLabel:y,isClearable:w=false,helpText:_,removeOptionsMinWidth:k=false,leftIcon:A,removeBorder:Y,dataAttribute:I,isSecondary:T=false,isMagicAi:M=false,isAiOutline:D=false,selectOnFocus:O,optionItemCss:C}=e;var E;var H=(0,m.useCallback)(()=>t.find(e=>e.value===r.value)||{label:"",value:"",description:""},[r.value,t]);var S=(0,m.useMemo)(()=>t.some(e=>(0,en/* .isDefined */.O9)(e.description)),[t]);var[N,F]=(0,m.useState)((E=H())===null||E===void 0?void 0:E.label);var[L,P]=(0,m.useState)(false);var[W,j]=(0,m.useState)("");var[K,z]=(0,m.useState)(false);var V=(0,m.useRef)(null);var U=(0,m.useRef)(null);var q=(0,m.useRef)(null);var G=(0,m.useRef)(null);var Q=(0,m.useMemo)(()=>{if(v){return t.filter(e=>{var{label:t}=e;return t.toLowerCase().includes(W.toLowerCase())})}return t},[W,v,t]);var $=(0,m.useMemo)(()=>{return t.find(e=>e.value===r.value)},[r.value,t]);var X=(0,c._)({},(0,en/* .isDefined */.O9)(I)&&{[I]:true});(0,m.useEffect)(()=>{var e;F((e=H())===null||e===void 0?void 0:e.label)},[r.value,H]);(0,m.useEffect)(()=>{if(K){var e;F((e=H())===null||e===void 0?void 0:e.label)}},[H,K]);var Z=(e,t)=>{t===null||t===void 0?void 0:t.stopPropagation();if(!e.disabled){r.onChange(e.value);a(e);j("");P(false);z(false)}};var{activeIndex:J,setActiveIndex:ee}=oU({options:Q,isOpen:K,selectedValue:r.value,onSelect:Z,onClose:()=>{z(false);P(false);j("")}});(0,m.useEffect)(()=>{if(K&&J>=0&&G.current){G.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[K,J]);return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{fieldState:n,field:r,label:o,disabled:l||t.length===0,readOnly:f,loading:p,isInlineLabel:g,helpText:_,removeBorder:Y,isSecondary:T,isMagicAi:M,children:e=>{var a,o;var{css:m}=e,g=(0,ek._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:o7.mainWrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:o7.inputWrapper(D),ref:U,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:o7.leftIcon,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:A,children:A}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:$===null||$===void 0?void 0:$.icon,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:e,width:32,height:32})})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:{width:"100%"},children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,u._)((0,c._)({},g,X),{ref:e=>{r.ref(e);// @ts-ignore
V.current=e;// this is not ideal but it is the only way to set ref to the input element
},className:"tutor-input-field",css:[m,o7.input({hasLeftIcon:!!A||!!($===null||$===void 0?void 0:$.icon),hasDescription:S,hasError:!!n.error,isMagicAi:M,isAiOutline:D})],autoComplete:"off",readOnly:f||!v,placeholder:s,value:L?W:N,title:N,onClick:e=>{var t;e.stopPropagation();z(e=>!e);(t=V.current)===null||t===void 0?void 0:t.focus()},onKeyDown:e=>{if(e.key==="Enter"){var t;e.preventDefault();z(e=>!e);(t=V.current)===null||t===void 0?void 0:t.focus()}if(e.key==="Tab"){z(false)}},onFocus:O&&v?e=>{e.target.select()}:undefined,onChange:e=>{F(e.target.value);if(v){P(true);j(e.target.value)}},"data-select":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:S,children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:o7.description({hasLeftIcon:!!A}),title:(a=H())===null||a===void 0?void 0:a.description,children:(o=H())===null||o===void 0?void 0:o.description})})]}),!b&&!p&&/*#__PURE__*/(0,i/* .jsx */.Y)("button",{tabIndex:-1,type:"button",css:o7.caretButton({isOpen:K}),onClick:()=>{var e;z(e=>!e);(e=V.current)===null||e===void 0?void 0:e.focus()},disabled:l||f||t.length===0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(oV,{triggerRef:U,isOpen:K,dependencies:[Q.length],animationType:eM/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{z(false);P(false);j("")},children:/*#__PURE__*/(0,i/* .jsxs */.FD)("ul",{css:[o7.options(k)],children:[!!y&&/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:o7.listLabel,children:y}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:Q.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:o7.emptyState,children:(0,B.__)("No options available","tutor")}),children:Q.map((e,t)=>/*#__PURE__*/(0,i/* .jsx */.Y)("li",{ref:e.value===r.value?q:J===t?G:null,css:[o7.optionItem({isSelected:e.value===r.value,isActive:t===J,isDisabled:!!e.disabled}),C],children:/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:o7.label,onClick:t=>{if(!e.disabled){Z(e,t)}},disabled:e.disabled,title:e.label,onMouseOver:()=>ee(t),onMouseLeave:()=>t!==J&&ee(-1),onFocus:()=>ee(t),"aria-selected":J===t,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))}),w&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:o7.clearButton({isDisabled:N===""}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"text",disabled:N==="",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"delete"}),onClick:()=>{r.onChange(null);F("");j("");z(false)},children:(0,B.__)("Clear","tutor")})})]})})]})}})};/* export default */const o8=o3;var o7={mainWrapper:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;"),inputWrapper:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,p/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;",e&&(0,p/* .css */.AH)(oq(),l/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,l/* .colorTokens.text.primary */.I6.text.primary))},leftIcon:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;left:",l/* .spacing["8"] */.YK["8"],";",H/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;height:100%;color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";"),input:e=>{var{hasLeftIcon:t,hasDescription:r,hasError:n=false,isMagicAi:a=false,isAiOutline:o=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)("&[data-select]{",_/* .typography.body */.I.body(),";width:100%;cursor:pointer;padding-right:",l/* .spacing["32"] */.YK["32"],";",H/* .styleUtils.textEllipsis */.x.textEllipsis,";background-color:transparent;background-color:",l/* .colorTokens.background.white */.I6.background.white,";",t&&(0,p/* .css */.AH)(oG(),l/* .spacing["48"] */.YK["48"])," ",r&&(0,p/* .css */.AH)(oQ(),l/* .spacing["24"] */.YK["24"])," ",n&&(0,p/* .css */.AH)(o$(),l/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",o&&(0,p/* .css */.AH)(oX()),":focus{",H/* .styleUtils.inputFocus */.x.inputFocus,";",a&&(0,p/* .css */.AH)(oZ(),l/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,l/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",n&&(0,p/* .css */.AH)(oJ(),l/* .colorTokens.stroke.danger */.I6.stroke.danger,l/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),"}}")},description:e=>{var{hasLeftIcon:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";",H/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    color:",l/* .colorTokens.text.hints */.I6.text.hints,";position:absolute;bottom:",l/* .spacing["8"] */.YK["8"],";padding-inline:calc(",l/* .spacing["16"] */.YK["16"]," + 1px) ",l/* .spacing["32"] */.YK["32"],";",t&&(0,p/* .css */.AH)(o0(),l/* .spacing["48"] */.YK["48"]))},listLabel:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";min-height:40px;display:flex;align-items:center;padding-left:",l/* .spacing["16"] */.YK["16"],";"),clearButton:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["4"] */.YK["4"]," ",l/* .spacing["8"] */.YK["8"],";border-top:1px solid ",l/* .colorTokens.stroke["default"] */.I6.stroke["default"],";& > button{padding:0;width:100%;font-size:",l/* .fontSize["12"] */.J["12"],";> span{justify-content:center;}",!t&&(0,p/* .css */.AH)(o1(),l/* .colorTokens.text.title */.I6.text.title),"}")},options:e=>/*#__PURE__*/(0,p/* .css */.AH)("z-index:",l/* .zIndex.dropdown */.fE.dropdown,";background-color:",l/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",l/* .shadow.popover */.r7.popover,";padding:",l/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",l/* .borderRadius["6"] */.Vq["6"],";",H/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,p/* .css */.AH)(o2())),optionItem:e=>{var{isSelected:t=false,isActive:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:",n?"not-allowed":"pointer",";opacity:",n?.5:1,";",r&&(0,p/* .css */.AH)(o6(),l/* .colorTokens.background.hover */.I6.background.hover),"    &:hover{background-color:",!n&&l/* .colorTokens.background.hover */.I6.background.hover,";}",!n&&t&&(0,p/* .css */.AH)(o4(),l/* .colorTokens.background.active */.I6.background.active,l/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],l/* .borderRadius["6"] */.Vq["6"],l/* .borderRadius["6"] */.Vq["6"]))},label:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";",H/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",l/* .colorTokens.text.title */.I6.text.title,";width:100%;height:100%;display:flex;align-items:center;gap:",l/* .spacing["8"] */.YK["8"],";margin:0 ",l/* .spacing["12"] */.YK["12"],";padding:",l/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",l/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background-color:transparent;color:",l/* .colorTokens.text.title */.I6.text.title,";}span{flex-shrink:0;",H/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"      width:100%;}"),arrowUpDown:/*#__PURE__*/(0,p/* .css */.AH)("color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;justify-content:center;align-items:center;margin-top:",l/* .spacing["2"] */.YK["2"],";"),optionsContainer:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;max-width:calc(100% - 32px);"),caretButton:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";position:absolute;right:",l/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",l/* .borderRadius["4"] */.Vq["4"],";padding:",l/* .spacing["6"] */.YK["6"],";height:100%;&:focus,&:active,&:hover{background:none;color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";}",t&&(0,p/* .css */.AH)(o5()))},emptyState:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.flexCenter */.x.flexCenter(),";padding:",l/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/utils/validation.ts
var o9=()=>({required:{value:true,message:(0,B.__)("This field is required","tutor")}});var ie=e=>{var{maxValue:t,message:r}=e;return{maxLength:{value:t,message:r||__("Max. value should be ".concat(t),"tutor")}}};var it=()=>({validate:e=>{if((e===null||e===void 0?void 0:e.amount)===undefined){return __("The field is required","tutor")}return undefined}});var ir=e=>{if(!isValid(new Date(e||""))){return __("Invalid date entered!","tutor")}return undefined};var ia=e=>({validate:t=>{if(t&&e<t.length){return(0,B.__)("Maximum ".concat(e," character supported"),"tutor")}return undefined}});var io=e=>{if(!e){return undefined}var t=__("Invalid time entered!","tutor");var[r,n]=e.split(":");if(!r||!n){return t}var[a,o]=n.split(" ");if(!a||!o){return t}if(r.length!==2||a.length!==2){return t}if(Number(r)<1||Number(r)>12){return t}if(Number(a)<0||Number(a)>59){return t}if(!["am","pm"].includes(o.toLowerCase())){return t}return undefined};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/CouponDiscount.tsx
var ii=!!eA/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var is=ii&&(0,R/* .isAddonEnabled */.GR)(w/* .Addons.COURSE_BUNDLE */.oW.COURSE_BUNDLE);var il=ii&&(0,R/* .isAddonEnabled */.GR)(w/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION);var ic=[{label:(0,B.__)("Percent","tutor"),value:"percentage"},{label:(0,B.__)("Amount","tutor"),value:"flat"}];var iu=[{label:(0,B.__)("All courses","tutor"),value:"all_courses"},...is?[{label:(0,B.__)("All bundles","tutor"),value:"all_bundles"},{label:(0,B.__)("All courses and bundles","tutor"),value:"all_courses_and_bundles"}]:[],...il?[{label:(0,B.__)("All membership plans","tutor"),value:"all_membership_plans"}]:[],{label:(0,B.__)("Specific courses","tutor"),value:"specific_courses"},...is?[{label:(0,B.__)("Specific bundles","tutor"),value:"specific_bundles"}]:[],{label:(0,B.__)("Specific category","tutor"),value:"specific_category"},...il?[{label:(0,B.__)("Specific membership plans","tutor"),value:"specific_membership_plans"}]:[]];function id(){var e;var t=(0,aO/* .useFormContext */.xW)();var{tutor_currency:r}=eA/* .tutorConfig */.P;var{showModal:n}=(0,ok/* .useModal */.h)();var a=t.watch("applies_to");var o=t.watch("discount_type");var s;var l=(s=t.watch("courses"))!==null&&s!==void 0?s:[];var f;var p=(f=t.watch("bundles"))!==null&&f!==void 0?f:[];var v;var m=(v=t.watch("categories"))!==null&&v!==void 0?v:[];var g;var b=(g=t.watch("membershipPlans"))!==null&&g!==void 0?g:[];var y={specific_courses:"courses",specific_bundles:"bundles",specific_category:"categories",specific_membership_plans:"membershipPlans"};function w(e,r){if(e==="courses"){t.setValue(e,l===null||l===void 0?void 0:l.filter(e=>e.id!==r))}if(e==="bundles"){t.setValue(e,p===null||p===void 0?void 0:p.filter(e=>e.id!==r))}if(e==="categories"){t.setValue(e,m===null||m===void 0?void 0:m.filter(e=>e.id!==r))}if(e==="membershipPlans"){t.setValue(e,b===null||b===void 0?void 0:b.filter(e=>e.id!==r))}}return/*#__PURE__*/(0,i/* .jsxs */.FD)(oy,{bordered:true,css:iv.discountWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.couponWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ow,{children:(0,B.__)("Discount","tutor")})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iv.discountTypeWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"discount_type",control:t.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(o8,(0,u._)((0,c._)({},e),{label:(0,B.__)("Discount Type","tutor"),options:ic}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"discount_amount",control:t.control,rules:o9(),render:e=>{var t;return/*#__PURE__*/(0,i/* .jsx */.Y)(aT,(0,u._)((0,c._)({},e),{type:"number",label:(0,B.__)("Discount Value","tutor"),placeholder:"0",content:o==="flat"?(t=r===null||r===void 0?void 0:r.symbol)!==null&&t!==void 0?t:"$":"%",contentCss:H/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"applies_to",control:t.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(o8,(0,u._)((0,c._)({},e),{label:(0,B.__)("Applies to","tutor"),options:iu}))}),a==="specific_courses"&&l.length>0&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedWrapper,children:l===null||l===void 0?void 0:l.map(e=>/*#__PURE__*/(0,i/* .jsx */.Y)(ih,{type:"courses",image:e.image,title:e.title,subTitle:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.price,children:e.plan_start_price?/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:iv.startingFrom,children:(0,B.sprintf)((0,B.__)("Starting from %s","tutor"),e.plan_start_price)}):/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:iv.discountPrice,children:e.regular_price})]})}),handleDeleteClick:()=>w("courses",e.id)},e.id))}),a==="specific_bundles"&&p.length>0&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedWrapper,children:p===null||p===void 0?void 0:p.map(e=>/*#__PURE__*/(0,i/* .jsx */.Y)(ih,{type:"bundles",image:e.image,title:e.title,subTitle:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iv.price,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:iv.discountPrice,children:e.regular_price})]}),handleDeleteClick:()=>w("bundles",e.id)},e.id))}),a==="specific_category"&&m.length>0&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedWrapper,children:m===null||m===void 0?void 0:m.map(e=>/*#__PURE__*/(0,i/* .jsx */.Y)(ih,{type:"categories",image:e.image,title:e.title,subTitle:"".concat(e.total_courses," ").concat((0,B.__)("Courses","tutor")),handleDeleteClick:()=>w("categories",e.id)},e.id))}),a==="specific_membership_plans"&&b.length>0&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedWrapper,children:(e=t.watch("membershipPlans"))===null||e===void 0?void 0:e.map(e=>/*#__PURE__*/(0,i/* .jsx */.Y)(ih,{type:"membershipPlans",title:e.plan_name,subTitle:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iv.price,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:os(Number(e.sale_price)||Number(e.regular_price))}),Number(e.sale_price)>0&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:iv.discountPrice,children:os(Number(e.regular_price))}),"/",/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:iv.recurringInterval,children:(0,R/* .formatSubscriptionRepeatUnit */.u5)({unit:e.recurring_interval,value:Number(e.recurring_value)})})]}),handleDeleteClick:()=>w("membershipPlans",e.id)},e.id))}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:["specific_courses","specific_bundles","specific_category","specific_membership_plans"].includes(a),children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"tertiary",isOutlined:true,buttonCss:iv.addCoursesButton,icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"plusSquareBrand",width:24,height:25}),onClick:()=>{n({component:ov,props:{title:(0,B.__)("Select items","tutor"),type:y[a],form:t},closeOnOutsideClick:true})},children:(0,B.__)("Add Items","tutor")})})]})}/* export default */const ip=id;function ih(e){var{type:t,image:r,title:n,subTitle:a,handleDeleteClick:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iv.selectedItem,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedThumb,children:t!=="membershipPlans"?/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:r||ex,css:iv.thumbnail,alt:"course item"}):/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"crownOutlined",width:32,height:32})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iv.selectedContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedTitle,children:n}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iv.selectedSubTitle,children:a})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"text",onClick:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"delete",width:24,height:24})})})]})}var iv={discountWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["12"] */.YK["12"],";"),discountTypeWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;gap:",l/* .spacing["20"] */.YK["20"],";"),couponWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["4"] */.YK["4"],";"),addCoursesButton:/*#__PURE__*/(0,p/* .css */.AH)("width:fit-content;color:",l/* .colorTokens.text.brand */.I6.text.brand,";svg{color:",l/* .colorTokens.text.brand */.I6.text.brand,";}"),price:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;gap:",l/* .spacing["4"] */.YK["4"],";"),discountPrice:/*#__PURE__*/(0,p/* .css */.AH)("text-decoration:line-through;"),selectedWrapper:/*#__PURE__*/(0,p/* .css */.AH)("border:1px solid ",l/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";"),selectedItem:/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["12"] */.YK["12"],";display:flex;align-items:center;gap:",l/* .spacing["16"] */.YK["16"],";&:not(:last-child){border-bottom:1px solid ",l/* .colorTokens.stroke.divider */.I6.stroke.divider,";}"),selectedContent:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;"),selectedTitle:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";margin-bottom:",l/* .spacing["4"] */.YK["4"],";"),selectedSubTitle:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";"),selectedThumb:/*#__PURE__*/(0,p/* .css */.AH)("height:48px;color:",l/* .colorTokens.icon.hints */.I6.icon.hints,";",H/* .styleUtils.flexCenter */.x.flexCenter(),";flex-shrink:0;"),thumbnail:/*#__PURE__*/(0,p/* .css */.AH)("width:48px;height:48px;border-radius:",l/* .borderRadius["4"] */.Vq["4"],";"),startingFrom:/*#__PURE__*/(0,p/* .css */.AH)("color:",l/* .colorTokens.text.hints */.I6.text.hints,";"),recurringInterval:/*#__PURE__*/(0,p/* .css */.AH)("text-transform:capitalize;color:",l/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var im=r(41374);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/create-variation.ts
var ig=r(63939);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/MagicButton.tsx
var ib=/*#__PURE__*/g().forwardRef((e,t)=>{var{className:r,variant:n,size:a,children:o,type:s="button",disabled:l=false,roundedFull:d=true,loading:f}=e,p=(0,ek._)(e,["className","variant","size","children","type","disabled","roundedFull","loading"]);return/*#__PURE__*/(0,i/* .jsx */.Y)("button",(0,u._)((0,c._)({type:s,ref:t,css:i_({variant:n,size:a,rounded:d?"true":"false"}),className:r,disabled:l},p),{children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:iw.buttonSpan,children:f?/*#__PURE__*/(0,i/* .jsx */.Y)(Z/* ["default"] */.Ay,{size:24}):o})}))});/* export default */const iy=ib;var iw={buttonSpan:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.flexCenter */.x.flexCenter(),";z-index:",l/* .zIndex.positive */.fE.positive,";"),base:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small("medium"),";display:flex;gap:",l/* .spacing["4"] */.YK["4"],";width:100%;justify-content:center;align-items:center;white-space:nowrap;position:relative;overflow:hidden;transition:box-shadow 0.5s ease;&:focus-visible{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{cursor:not-allowed;background:",l/* .colorTokens.action.primary.disable */.I6.action.primary.disable,";pointer-events:none;color:",l/* .colorTokens.text.disable */.I6.text.disable,";border-color:",l/* .colorTokens.stroke.disable */.I6.stroke.disable,";}"),default:e=>/*#__PURE__*/(0,p/* .css */.AH)("background:",!e?l/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1:l/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";color:",l/* .colorTokens.text.white */.I6.text.white,";&::before{content:'';position:absolute;inset:0;background:",!e?l/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:l/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";opacity:0;transition:opacity 0.5s ease;}&:hover::before{opacity:1;}"),secondary:/*#__PURE__*/(0,p/* .css */.AH)("background-color:",l/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",l/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";&:hover{background-color:",l/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";}"),outline:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;&::before{content:'';position:absolute;inset:0;background:",l/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";color:",l/* .colorTokens.text.primary */.I6.text.primary,";border:1px solid transparent;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;}&:hover{&::before{background:",l/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2,";}}"),primaryOutline:/*#__PURE__*/(0,p/* .css */.AH)("border:1px solid ",l/* .colorTokens.brand.blue */.I6.brand.blue,";color:",l/* .colorTokens.brand.blue */.I6.brand.blue,";&:hover{background-color:",l/* .colorTokens.brand.blue */.I6.brand.blue,";color:",l/* .colorTokens.text.white */.I6.text.white,";}"),primary:/*#__PURE__*/(0,p/* .css */.AH)("background-color:",l/* .colorTokens.brand.blue */.I6.brand.blue,";color:",l/* .colorTokens.text.white */.I6.text.white,";"),ghost:/*#__PURE__*/(0,p/* .css */.AH)("background-color:transparent;color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";border-radius:",l/* .borderRadius["4"] */.Vq["4"],";&:hover{color:",l/* .colorTokens.text.primary */.I6.text.primary,";}"),plain:/*#__PURE__*/(0,p/* .css */.AH)("span{background:",!w/* .isRTL */.V8?l/* .colorTokens.text.ai.gradient */.I6.text.ai.gradient:l/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&:hover{background:",!w/* .isRTL */.V8?l/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:l/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}}"),size:{default:/*#__PURE__*/(0,p/* .css */.AH)("height:32px;padding-inline:",l/* .spacing["12"] */.YK["12"],";padding-block:",l/* .spacing["4"] */.YK["4"],";"),sm:/*#__PURE__*/(0,p/* .css */.AH)("height:24px;padding-inline:",l/* .spacing["10"] */.YK["10"],";"),icon:/*#__PURE__*/(0,p/* .css */.AH)("width:32px;height:32px;")},rounded:{true:/*#__PURE__*/(0,p/* .css */.AH)("border-radius:",l/* .borderRadius["54"] */.Vq["54"],";&::before{border-radius:",l/* .borderRadius["54"] */.Vq["54"],";}"),false:/*#__PURE__*/(0,p/* .css */.AH)("border-radius:",l/* .borderRadius["4"] */.Vq["4"],";&::before{border-radius:",l/* .borderRadius["4"] */.Vq["4"],";}")}};var i_=(0,ig/* .createVariation */.s)({variants:{variant:{default:iw.default(w/* .isRTL */.V8),primary:iw.primary,secondary:iw.secondary,outline:iw.outline,primary_outline:iw.primaryOutline,ghost:iw.ghost,plain:iw.plain},size:{default:iw.size.default,sm:iw.size.sm,icon:iw.size.icon},rounded:{true:iw.rounded.true,false:iw.rounded.false}},defaultVariants:{variant:"default",size:"default",rounded:"true"}},iw.base);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
function ix(){var e=(0,f._)(["\n        resize: vertical;\n      "]);ix=function t(){return e};return e}var ik=6;var iA=e=>{var{label:t,rows:r=ik,columns:n,maxLimit:a,field:o,fieldState:s,disabled:l,readOnly:d,loading:f,placeholder:p,helpText:h,onChange:v,onKeyDown:g,isHidden:b,enableResize:y=true,isSecondary:w=false,isMagicAi:_=false,inputCss:x,maxHeight:k,autoResize:A=false}=e;var Y;var I=(Y=o.value)!==null&&Y!==void 0?Y:"";var T=(0,m.useRef)(null);var M=undefined;if(a){M={maxLimit:a,inputCharacter:I.toString().length}}var D=()=>{if(T.current){if(k){T.current.style.maxHeight="".concat(k,"px")}T.current.style.height="auto";T.current.style.height="".concat(T.current.scrollHeight,"px")}};(0,m.useLayoutEffect)(()=>{if(A){D()}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{label:t,field:o,fieldState:s,disabled:l,readOnly:d,loading:f,placeholder:p,helpText:h,isHidden:b,characterCount:M,isSecondary:w,isMagicAi:_,children:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(i/* .Fragment */.FK,{children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iI.container(y,x),children:/*#__PURE__*/(0,i/* .jsx */.Y)("textarea",(0,u._)((0,c._)({},o,e),{ref:e=>{o.ref(e);// @ts-ignore
T.current=e;// this is not ideal but it is the only way to set ref to the input element
},style:{maxHeight:k?"".concat(k,"px"):"none"},className:"tutor-input-field",value:I,onChange:e=>{var{value:t}=e.target;if(a&&t.trim().length>a){return}o.onChange(t);if(v){v(t)}if(A){D()}},onKeyDown:e=>{g===null||g===void 0?void 0:g(e.key)},autoComplete:"off",rows:r,cols:n}))})})}})};/* export default */const iY=eT(iA);var iI={container:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false,t=arguments.length>1?arguments[1]:void 0;return/*#__PURE__*/(0,p/* .css */.AH)("position:relative;display:flex;textarea{",_/* .typography.body */.I.body(),";height:auto;padding:",l/* .spacing["8"] */.YK["8"]," ",l/* .spacing["12"] */.YK["12"],";resize:none;",H/* .styleUtils.overflowYAuto */.x.overflowYAuto,";&.tutor-input-field{",t,";}",e&&(0,p/* .css */.AH)(ix()),"}")}};// CONCATENATED MODULE: ./assets/react/v3/shared/controls/For.tsx
var iT=e=>{var{each:t,children:r,fallback:n=null}=e;if(t.length===0){return n}return t.map((e,t)=>{return r(e,t)})};/* export default */const iM=iT;// CONCATENATED MODULE: ./assets/react/v3/shared/components/magic-ai-content/OptionList.tsx
var iD=e=>{var{options:t,onChange:r}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:iO.wrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(iM,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",onClick:()=>r(e.value),css:iO.item,children:e.label},t)}})})};var iO={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;padding-block:",l/* .spacing["8"] */.YK["8"],";max-height:400px;overflow-y:auto;"),item:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.caption */.I.caption(),";width:100%;padding:",l/* .spacing["4"] */.YK["4"]," ",l/* .spacing["16"] */.YK["16"],";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;align-items:center;&:hover{background-color:",l/* .colorTokens.background.hover */.I6.background.hover,";color:",l/* .colorTokens.text.title */.I6.text.title,";}")};// CONCATENATED MODULE: ./assets/react/v3/shared/config/magic-ai.ts
var iC=[{label:"English",value:"english"},{label:"简体中文",value:"simplified-chinese"},{label:"繁體中文",value:"traditional-chinese"},{label:"Español",value:"spanish"},{label:"Français",value:"french"},{label:"日本語",value:"japanese"},{label:"Deutsch",value:"german"},{label:"Português",value:"portuguese"},{label:"العربية",value:"arabic"},{label:"Русский",value:"russian"},{label:"Italiano",value:"italian"},{label:"한국어",value:"korean"},{label:"हिन्दी",value:"hindi"},{label:"Nederlands",value:"dutch"},{label:"Polski",value:"polish"},{label:"አማርኛ",value:"amharic"},{label:"Български",value:"bulgarian"},{label:"বাংলা",value:"bengali"},{label:"Čeština",value:"czech"},{label:"Dansk",value:"danish"},{label:"Ελληνικά",value:"greek"},{label:"Eesti",value:"estonian"},{label:"فارسی",value:"persian"},{label:"Filipino",value:"filipino"},{label:"Hrvatski",value:"croatian"},{label:"Magyar",value:"hungarian"},{label:"Bahasa Indonesia",value:"indonesian"},{label:"Lietuvių",value:"lithuanian"},{label:"Latviešu",value:"latvian"},{label:"Melayu",value:"malay"},{label:"Norsk",value:"norwegian"},{label:"Română",value:"romanian"},{label:"Slovenčina",value:"slovak"},{label:"Slovenščina",value:"slovenian"},{label:"Српски",value:"serbian"},{label:"Svenska",value:"swedish"},{label:"ภาษาไทย",value:"thai"},{label:"Türkçe",value:"turkish"},{label:"Українська",value:"ukrainian"},{label:"اردو",value:"urdu"},{label:"Tiếng Việt",value:"vietnamese"}];var iE=[{label:(0,B.__)("Formal","tutor"),value:"formal"},{label:(0,B.__)("Casual","tutor"),value:"casual"},{label:(0,B.__)("Professional","tutor"),value:"professional"},{label:(0,B.__)("Enthusiastic","tutor"),value:"enthusiastic"},{label:(0,B.__)("Informational","tutor"),value:"informational"},{label:(0,B.__)("Funny","tutor"),value:"funny"}];var iH=[{label:(0,B.__)("Title","tutor"),value:"title"},{label:(0,B.__)("Essay","tutor"),value:"essay"},{label:(0,B.__)("Paragraph","tutor"),value:"paragraph"},{label:(0,B.__)("Outline","tutor"),value:"outline"}];// CONCATENATED MODULE: ./assets/react/v3/shared/components/magic-ai-content/PromptControls.tsx
var iS=e=>{var{form:t}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iN.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:t.control,name:"characters",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{isMagicAi:true,label:(0,B.__)("Character Limit","tutor"),type:"number"}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:t.control,name:"language",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(o8,(0,u._)((0,c._)({},e),{isMagicAi:true,label:(0,B.__)("Language","tutor"),options:iC}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:t.control,name:"tone",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(o8,(0,u._)((0,c._)({},e),{isMagicAi:true,options:iE,label:(0,B.__)("Tone","tutor")}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:t.control,name:"format",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(o8,(0,u._)((0,c._)({},e),{isMagicAi:true,label:(0,B.__)("Format","tutor"),options:iH}))})]})};var iN={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:grid;grid-template-columns:repeat(2,1fr);gap:",l/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/magic-ai-content/SkeletonLoader.tsx
var iF=()=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iP.container,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iP.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"20%",height:"12px"}),/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"40%",height:"12px"})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:iP.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"80%",height:"12px"}),/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,i/* .jsx */.Y)(el,{animation:true,isMagicAi:true,width:"80%",height:"12px"})]})]})};/* export default */const iL=iF;var iP={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["8"] */.YK["8"],";"),container:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["32"] */.YK["32"],";")};// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useMutation.js
var iW=r(94747);// CONCATENATED MODULE: ./assets/react/v3/shared/services/magic-ai.ts
var ij=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_IMAGE,e)};var iB=()=>{return useMutation({mutationFn:ij})};var iR=e=>{return wpAjaxInstance.post(endpoints.MAGIC_FILL_AI_IMAGE,e).then(e=>e.data.data[0].b64_json)};var iK=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:iR,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var iz=e=>{return aB/* .wpAjaxInstance.post */.b.post(aR/* ["default"].MAGIC_TEXT_GENERATION */.A.MAGIC_TEXT_GENERATION,e)};var iV=()=>{var{showToast:e}=(0,aj/* .useToast */.d)();return(0,iW/* .useMutation */.n)({mutationFn:iz,onError:t=>{e({type:"danger",message:(0,R/* .convertToErrorMessage */.EL)(t)})}})};var iU=e=>{return aB/* .wpAjaxInstance.post */.b.post(aR/* ["default"].MAGIC_AI_MODIFY_CONTENT */.A.MAGIC_AI_MODIFY_CONTENT,e)};var iq=()=>{var{showToast:e}=(0,aj/* .useToast */.d)();return(0,iW/* .useMutation */.n)({mutationFn:iU,onError:t=>{e({type:"danger",message:(0,R/* .convertToErrorMessage */.EL)(t)})}})};var iG=e=>{return wpAjaxInstance.post(endpoints.USE_AI_GENERATED_IMAGE,e)};var iQ=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:iG,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var i$=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var iX=e=>{var{showToast:t}=useToast();return useMutation({mutationKey:["GenerateCourseContent",e],mutationFn:i$,onError:e=>{t({type:"danger",message:convertToErrorMessage(e)})}})};var iZ=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var iJ=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:iZ,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var i0=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_TOPIC_CONTENT,e,{signal:e.signal})};var i1=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:i0,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var i2=e=>{return wpAjaxInstance.post(endpoints.SAVE_AI_GENERATED_COURSE_CONTENT,e)};var i6=()=>{var{showToast:e}=useToast();var t=useQueryClient();return useMutation({mutationFn:i2,onSuccess(){t.invalidateQueries({queryKey:["CourseDetails"]})},onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var i4=e=>{return wpAjaxInstance.post(endpoints.GENERATE_QUIZ_QUESTIONS,e,{signal:e.signal})};var i5=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:i4,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var i3=e=>{return aB/* .wpAjaxInstance.post */.b.post(aR/* ["default"].OPEN_AI_SAVE_SETTINGS */.A.OPEN_AI_SAVE_SETTINGS,(0,c._)({},e))};var i8=()=>{var{showToast:e}=(0,aj/* .useToast */.d)();return(0,iW/* .useMutation */.n)({mutationFn:i3,onSuccess:t=>{e({type:"success",message:t.message})},onError:t=>{e({type:"danger",message:(0,R/* .convertToErrorMessage */.EL)(t)})}})};// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/AITextModal.tsx
var i7=[(0,B.__)("Mastering Digital Marketing: A Complete Guide","tutor"),(0,B.__)("The Ultimate Photoshop Course for Beginners","tutor"),(0,B.__)("Python Programming: From Zero to Hero","tutor"),(0,B.__)("Creative Writing Essentials: Unlock Your Storytelling Potential","tutor"),(0,B.__)("The Complete Guide to Web Development with React","tutor"),(0,B.__)("Master Public Speaking: Deliver Powerful Presentations","tutor"),(0,B.__)("Excel for Business: From Basics to Advanced Analytics","tutor"),(0,B.__)("Fitness Fundamentals: Build Strength and Confidence","tutor"),(0,B.__)("Photography Made Simple: Capture Stunning Shots","tutor"),(0,B.__)("Financial Freedom: Learn the Basics of Investing","tutor")];var i9=e=>{var{title:t,icon:r,closeModal:n,field:a,format:o="essay",characters:s=250,is_html:f=false,fieldLabel:v="",fieldPlaceholder:g=""}=e;var b=(0,j/* .useFormWithGlobalError */.p)({defaultValues:{prompt:"",characters:s,language:"english",tone:"formal",format:o}});var y=iV();var _=iq();var[k,A]=(0,m.useState)([]);var[Y,I]=(0,m.useState)(0);var[T,M]=(0,m.useState)(false);var[D,O]=(0,m.useState)(null);var C=(0,m.useRef)(null);var E=(0,m.useRef)(null);var H=(0,m.useMemo)(()=>{return k[Y]},[k,Y]);var S=b.watch("prompt");function N(e){A(t=>[e,...t]);I(0)}function F(e,t){return(0,im._)(function*(){if(k.length===0){return}var r=k[Y];if(e==="translation"&&!!t){var n=yield _.mutateAsync({type:"translation",content:r,language:t,is_html:f});if(n.data){N(n.data)}return}if(e==="change_tone"&&!!t){var a=yield _.mutateAsync({type:"change_tone",content:r,tone:t,is_html:f});if(a.data){N(a.data)}return}var o=yield _.mutateAsync({type:e,content:r,is_html:f});if(o.data){N(o.data)}})()}(0,m.useEffect)(()=>{b.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsx */.Y)(P,{onClose:n,title:t,icon:r,maxWidth:524,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("form",{onSubmit:b.handleSubmit(e=>(0,im._)(function*(){var t=yield y.mutateAsync((0,u._)((0,c._)({},e),{is_html:f}));if(t.data){N(t.data)}})()),children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:st.container,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:st.fieldsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:b.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(iY,(0,u._)((0,c._)({},e),{label:v||(0,B.__)("Craft Your Course Description","tutor"),placeholder:g||(0,B.__)("Provide a brief overview of your course topic, target audience, and key takeaways","tutor"),rows:4,isMagicAi:true}))}),/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:st.inspireButton,onClick:()=>{var e=i7.length;var t=Math.floor(Math.random()*e);b.reset((0,u._)((0,c._)({},b.getValues()),{prompt:i7[t]}))},children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"bulbLine"}),(0,B.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:!y.isPending&&!_.isPending,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(iL,{}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x/* ["default"] */.A,{when:k.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(iS,{form:b}),children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:st.actionBar,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:st.navigation,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x/* ["default"] */.A,{when:k.length>1,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"text",onClick:()=>I(e=>Math.max(0,e-1)),disabled:Y===0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:!w/* .isRTL */.V8?"chevronLeft":"chevronRight",width:20,height:20})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:st.pageInfo,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:Y+1})," / ",k.length]}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"text",onClick:()=>I(e=>Math.min(k.length-1,e+1)),disabled:Y===k.length-1,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:!w/* .isRTL */.V8?"chevronRight":"chevronLeft",width:20,height:20})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"text",onClick:()=>(0,im._)(function*(){if(k.length===0){return}var e=k[Y];yield(0,R/* .copyToClipboard */.lW)(e);M(true);setTimeout(()=>{M(false)},1500)})(),children:/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:T,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"copy",width:20,height:20}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"checkFilled",width:20,height:20,style:/*#__PURE__*/(0,p/* .css */.AH)("color:",l/* .colorTokens.text.success */.I6.text.success," !important;")})})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:st.content,dangerouslySetInnerHTML:{__html:H}})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:st.otherActions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"outline",roundedFull:false,onClick:()=>F("rephrase"),children:(0,B.__)("Rephrase","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"outline",roundedFull:false,onClick:()=>F("make_shorter"),children:(0,B.__)("Make Shorter","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)(iy,{variant:"outline",roundedFull:false,ref:C,onClick:()=>O("tone"),children:[(0,B.__)("Change Tone","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)(iy,{variant:"outline",roundedFull:false,ref:E,onClick:()=>O("translate"),children:[(0,B.__)("Translate to","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"outline",roundedFull:false,onClick:()=>F("write_as_bullets"),children:(0,B.__)("Write as Bullets","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"outline",roundedFull:false,onClick:()=>F("make_longer"),children:(0,B.__)("Make Longer","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"outline",roundedFull:false,onClick:()=>F("simplify_language"),children:(0,B.__)("Simplify Language","tutor")})]})]})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(oV,{isOpen:D==="tone",triggerRef:C,arrow:true,closePopover:()=>O(null),maxWidth:"160px",animationType:eM/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,i/* .jsx */.Y)(iD,{options:iE,onChange:e=>(0,im._)(function*(){O(null);yield F("change_tone",e)})()})}),/*#__PURE__*/(0,i/* .jsx */.Y)(oV,{isOpen:D==="translate",triggerRef:E,closePopover:()=>O(null),maxWidth:"160px",animationType:eM/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,i/* .jsx */.Y)(iD,{options:iC,onChange:e=>(0,im._)(function*(){O(null);yield F("translation",e)})()})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:st.footer,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x/* ["default"] */.A,{when:k.length>0,fallback:/*#__PURE__*/(0,i/* .jsxs */.FD)(iy,{type:"submit",disabled:y.isPending||!S||_.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,B.__)("Generate Now","tutor")]}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"outline",type:"submit",disabled:y.isPending||!S||_.isPending,children:(0,B.__)("Generate Again","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(iy,{variant:"primary",disabled:y.isPending||k.length===0||_.isPending,onClick:()=>{a.onChange(k[Y]);n()},children:(0,B.__)("Use This","tutor")})]})})]})})};/* export default */const se=i9;var st={container:/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;gap:",l/* .spacing["16"] */.YK["16"],";"),fieldsWrapper:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;textarea{padding-bottom:",l/* .spacing["40"] */.YK["40"]," !important;}"),footer:/*#__PURE__*/(0,p/* .css */.AH)("padding:",l/* .spacing["12"] */.YK["12"]," ",l/* .spacing["16"] */.YK["16"],";display:flex;align-items:center;justify-content:end;gap:",l/* .spacing["10"] */.YK["10"],";box-shadow:0px 1px 0px 0px #e4e5e7 inset;button{width:fit-content;}"),pageInfo:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";& > span{font-weight:",l/* .fontWeight.medium */.Wy.medium,";color:",l/* .colorTokens.text.primary */.I6.text.primary,";}"),inspireButton:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",l/* .spacing["12"] */.YK["12"],";left:",l/* .spacing["12"] */.YK["12"],";border:1px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",l/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",l/* .spacing["4"] */.YK["4"],";color:",l/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",l/* .spacing["12"] */.YK["12"],";background-color:",l/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",l/* .colorTokens.background.brand */.I6.background.brand,";color:",l/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",l/* .colorTokens.background.disable */.I6.background.disable,";color:",l/* .colorTokens.text.disable */.I6.text.disable,";}"),navigation:/*#__PURE__*/(0,p/* .css */.AH)("margin-left:-",l/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;"),content:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";height:180px;overflow-y:auto;background-color:",l/* .colorTokens.background.magicAi["default"] */.I6.background.magicAi["default"],";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";padding:",l/* .spacing["6"] */.YK["6"]," ",l/* .spacing["12"] */.YK["12"],";color:",l/* .colorTokens.text.magicAi */.I6.text.magicAi,";"),actionBar:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),otherActions:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;gap:",l/* .spacing["10"] */.YK["10"],";flex-wrap:wrap;& > button{width:fit-content;}")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/ProIdentifierModal.tsx
var sr={title:/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[(0,B.__)("Upgrade to Tutor LMS Pro today and experience the power of ","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:H/* .styleUtils.aiGradientText */.x.aiGradientText,children:(0,B.__)("AI Studio","tutor")})]}),message:(0,B.__)("Upgrade your plan to access the AI feature","tutor"),featuresTitle:(0,B.__)("Don’t miss out on this game-changing feature!","tutor"),features:[(0,B.__)("Generate a complete course outline in seconds!","tutor"),(0,B.__)("Let the AI Studio create Quizzes on your behalf and give your brain a well-deserved break.","tutor"),(0,B.__)("Generate images, customize backgrounds, and even remove unwanted objects with ease.","tutor"),(0,B.__)("Say goodbye to typos and grammar errors with AI-powered copy editing.","tutor")],footer:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{onClick:()=>window.open(eA/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener"),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"crown",width:24,height:24}),children:(0,B.__)("Get Tutor LMS Pro","tutor")})};var sn=e=>{var{title:t=sr.title,message:r=sr.message,featuresTitle:n=sr.featuresTitle,features:a=sr.features,closeModal:o,image:s,image2x:l,footer:c=sr.footer}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(P,{onClose:o,entireHeader:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:so.message,children:r}),maxWidth:496,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:so.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,i/* .jsx */.Y)("h4",{css:so.title,children:t})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:s,children:/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:so.image,src:s,alt:typeof t==="string"?t:(0,B.__)("Illustration","tutor"),srcSet:l?"".concat(s," ").concat(l," 2x"):undefined})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,i/* .jsx */.Y)("h6",{css:so.featuresTiTle,children:n})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:a.length,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:so.features,children:/*#__PURE__*/(0,i/* .jsx */.Y)(iM,{each:a,children:(e,t)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:so.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:so.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:e})]},t)})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:c,children:c})]})})};/* export default */const sa=sn;var so={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("padding:0 ",l/* .spacing["24"] */.YK["24"]," ",l/* .spacing["32"] */.YK["32"]," ",l/* .spacing["24"] */.YK["24"],";",H/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["16"] */.YK["16"],";"),message:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";padding-left:",l/* .spacing["8"] */.YK["8"],";padding-top:",l/* .spacing["24"] */.YK["24"],";padding-bottom:",l/* .spacing["4"] */.YK["4"],";"),title:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.heading6 */.I.heading6("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),image:/*#__PURE__*/(0,p/* .css */.AH)("height:270px;width:100%;object-fit:cover;object-position:center;border-radius:",l/* .borderRadius["8"] */.Vq["8"],";"),featuresTiTle:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),features:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["4"] */.YK["4"],";padding-right:",l/* .spacing["48"] */.YK["48"],";"),feature:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex(),";gap:",l/* .spacing["12"] */.YK["12"],";",_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.title */.I6.text.title,";span{text-wrap:pretty;}"),checkIcon:/*#__PURE__*/(0,p/* .css */.AH)("flex-shrink:0;color:",l/* .colorTokens.text.success */.I6.text.success,";")};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Alert.tsx
var si={text:{warning:"#D47E00",success:"#D47E00",danger:"#f44337",info:"#D47E00",primary:"#D47E00"},icon:{warning:"#FAB000",success:"#FAB000",danger:"#f55e53",info:"#FAB000",primary:"#FAB000"},background:{warning:"#FBFAE9",success:"#FBFAE9",danger:"#fdd9d7",info:"#FBFAE9",primary:"#FBFAE9"}};var ss=e=>{var{children:t,type:r="warning",icon:n}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sc.wrapper({type:r}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:n,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{style:sc.icon({type:r}),name:e,height:24,width:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:t})]})};/* export default */const sl=ss;var sc={wrapper:e=>{var{type:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";display:flex;align-items:start;padding:",l/* .spacing["8"] */.YK["8"]," ",l/* .spacing["12"] */.YK["12"],";width:100%;border-radius:",l/* .borderRadius.card */.Vq.card,";gap:",l/* .spacing["4"] */.YK["4"],";background-color:",si.background[t],";color:",si.text[t],";")},icon:e=>{var{type:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("color:",si.icon[t],";flex-shrink:0;")}};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Switch.tsx
function su(){var e=(0,f._)(["\n        width: 26px;\n        height: 16px;\n      "]);su=function t(){return e};return e}function sd(){var e=(0,f._)(["\n          top: 2px;\n          left: 3px;\n          width: 12px;\n          height: 12px;\n        "]);sd=function t(){return e};return e}function sf(){var e=(0,f._)(["\n            left: 11px;\n          "]);sf=function t(){return e};return e}function sp(){var e=(0,f._)(["\n      right: 3px;\n    "]);sp=function t(){return e};return e}function sh(){var e=(0,f._)(["\n      left: 3px;\n    "]);sh=function t(){return e};return e}var sv={switchStyles:e=>/*#__PURE__*/(0,p/* .css */.AH)("&[data-input]{all:unset;appearance:none;border:0;width:40px;height:24px;background:",l/* .colorTokens.color.black["10"] */.I6.color.black["10"],";border-radius:12px;position:relative;display:inline-block;vertical-align:middle;cursor:pointer;transition:background-color 0.25s cubic-bezier(0.785,0.135,0.15,0.86);",e==="small"&&(0,p/* .css */.AH)(su()),"      &::before{display:none !important;}&:focus{border:none;outline:none;box-shadow:none;}&:focus-visible{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:after{content:'';position:absolute;top:3px;left:",l/* .spacing["4"] */.YK["4"],";width:18px;height:18px;background:",l/* .colorTokens.background.white */.I6.background.white,";border-radius:",l/* .borderRadius.circle */.Vq.circle,";box-shadow:",l/* .shadow["switch"] */.r7["switch"],";transition:left 0.25s cubic-bezier(0.785,0.135,0.15,0.86);",e==="small"&&(0,p/* .css */.AH)(sd()),"}&:checked{background:",l/* .colorTokens.primary.main */.I6.primary.main,";&:after{left:18px;",e==="small"&&(0,p/* .css */.AH)(sf()),"}}&:disabled{pointer-events:none;filter:none;opacity:0.5;}}"),labelStyles:e=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",e?l/* .colorTokens.text.title */.I6.text.title:l/* .colorTokens.text.subdued */.I6.text.subdued,";"),wrapperStyle:e=>/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;width:fit-content;flex-direction:",e==="left"?"row":"row-reverse",";column-gap:",l/* .spacing["12"] */.YK["12"],";position:relative;"),spinner:e=>/*#__PURE__*/(0,p/* .css */.AH)("display:flex;position:absolute;top:50%;transform:translateY(-50%);",e&&(0,p/* .css */.AH)(sp())," ",!e&&(0,p/* .css */.AH)(sh()))};var sm=/*#__PURE__*/g().forwardRef((e,t)=>{var{id:r=(0,R/* .nanoid */.Ak)(),name:n,label:a,value:o,checked:s,disabled:l,loading:c,onChange:u,labelPosition:d="left",labelCss:f,size:p="regular"}=e;var h=e=>{u===null||u===void 0?void 0:u(e.target.checked,e)};return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sv.wrapperStyle(d),children:[a&&/*#__PURE__*/(0,i/* .jsx */.Y)("label",{css:[sv.labelStyles(s||false),f],htmlFor:r,children:a}),/*#__PURE__*/(0,i/* .jsx */.Y)("input",{ref:t,value:o?String(o):undefined,type:"checkbox",name:n,id:r,checked:!!s,disabled:l,css:sv.switchStyles(p),onChange:h,"data-input":true}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:c,children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:sv.spinner(!!s),children:/*#__PURE__*/(0,i/* .jsx */.Y)(Z/* ["default"] */.Ay,{size:p==="small"?12:20})})})]})});/* export default */const sg=sm;// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var sb=e=>{var{field:t,fieldState:r,label:n,disabled:a,loading:o,labelPosition:s="left",helpText:l,isHidden:d,labelCss:f,onChange:p}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{label:n,field:t,fieldState:r,loading:o,helpText:l,isHidden:d,isInlineLabel:true,children:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:sw.wrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(sg,(0,u._)((0,c._)({},t,e),{disabled:a,checked:t.value,labelCss:f,labelPosition:s,onChange:()=>{t.onChange(!t.value);p===null||p===void 0?void 0:p(!t.value)}}))})}})};/* export default */const sy=eT(sb);var sw={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;gap:",l/* .spacing["40"] */.YK["40"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/SetupOpenAiModal.tsx
function s_(){var e=(0,f._)(["\n      padding: ",";\n      padding-top: ",";\n    "]);s_=function t(){return e};return e}var sx,sk;var sA=((sx=eA/* .tutorConfig.settings */.P.settings)===null||sx===void 0?void 0:sx.chatgpt_enable)==="on";var sY=(sk=eA/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||sk===void 0?void 0:sk.includes(w/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var sI=e=>{var{closeModal:t,image:r,image2x:n}=e;var a=(0,j/* .useFormWithGlobalError */.p)({defaultValues:{openAIApiKey:"",enable_open_ai:sA},shouldFocusError:true});var o=i8();var s=e=>(0,im._)(function*(){var r=yield o.mutateAsync({chatgpt_api_key:e.openAIApiKey,chatgpt_enable:e.enable_open_ai?1:0});if(r.status_code===200){t({action:"CONFIRM"});window.location.reload()}})();(0,m.useEffect)(()=>{a.setFocus("openAIApiKey");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsx */.Y)(P,{onClose:()=>t({action:"CLOSE"}),title:sY?(0,B.__)("Set OpenAI API key","tutor"):undefined,entireHeader:sY?undefined:/*#__PURE__*/(0,i/* .jsx */.Y)(i/* .Fragment */.FK,{children:" "}),maxWidth:560,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:sM.wrapper({isCurrentUserAdmin:sY}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:sY,fallback:/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:sM.image,src:r,srcSet:n?"".concat(r," 1x, ").concat(n," 2x"):"".concat(r," 1x"),alt:(0,B.__)("Connect API KEY","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:sM.message,children:(0,B.__)("API is not connected","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:sM.title,children:(0,B.__)("Please, ask your Admin to connect the API with Tutor LMS Pro.","tutor")})]})]}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("form",{css:sM.formWrapper,onSubmit:a.handleSubmit(s),children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sM.infoText,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{dangerouslySetInnerHTML:{/* translators: %1$s and %2$s are opening and closing anchor tags for the "OpenAI User settings" link */__html:(0,B.sprintf)((0,B.__)("Find your Secret API key in your %1$sOpenAI User settings%2$s and paste it here to connect OpenAI with your Tutor LMS website.","tutor"),'<a href="'.concat(eA/* ["default"].CHATGPT_PLATFORM_URL */.A.CHATGPT_PLATFORM_URL,'" target="_blank" rel="noopener noreferrer">'),"</a>")}}),/*#__PURE__*/(0,i/* .jsx */.Y)(sl,{type:"info",icon:"warning",children:(0,B.__)("The page will reload after submission. Make sure to save the course information.","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"openAIApiKey",control:a.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{type:"password",isPassword:true,label:(0,B.__)("OpenAI API key","tutor"),placeholder:(0,B.__)("Enter your OpenAI API key","tutor")}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"enable_open_ai",control:a.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sy,(0,u._)((0,c._)({},e),{label:(0,B.__)("Enable OpenAI","tutor")}))})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sM.formFooter,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{onClick:()=>t({action:"CLOSE"}),variant:"text",size:"small",children:(0,B.__)("Cancel","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{size:"small",onClick:a.handleSubmit(s),loading:o.isPending,children:(0,B.__)("Save","tutor")})]})]})})})})};/* export default */const sT=sI;var sM={wrapper:e=>{var{isCurrentUserAdmin:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["20"] */.YK["20"],";",!t&&(0,p/* .css */.AH)(s_(),l/* .spacing["24"] */.YK["24"],l/* .spacing["6"] */.YK["6"]))},formWrapper:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["20"] */.YK["20"],";padding:",l/* .spacing["16"] */.YK["16"]," ",l/* .spacing["16"] */.YK["16"]," 0 ",l/* .spacing["16"] */.YK["16"],";"),infoText:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";",H/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["8"] */.YK["8"],";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";a{",H/* .styleUtils.resetButton */.x.resetButton,"      color:",l/* .colorTokens.text.brand */.I6.text.brand,";}"),formFooter:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex(),";justify-content:flex-end;gap:",l/* .spacing["16"] */.YK["16"],";border-top:1px solid ",l/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",l/* .spacing["16"] */.YK["16"],";"),image:/*#__PURE__*/(0,p/* .css */.AH)("height:310px;width:100%;object-fit:cover;object-position:center;border-radius:",l/* .borderRadius["8"] */.Vq["8"],";"),message:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";"),title:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.heading4 */.I.heading4("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";margin-top:",l/* .spacing["4"] */.YK["4"],";text-wrap:pretty;")};// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/generate-text-2x.webp
const sD=r.p+"js/images/generate-text-2x-45983f4c.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/generate-text.webp
const sO=r.p+"js/images/generate-text-269f7e17.webp";// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
function sC(){var e=(0,f._)(["\n      svg {\n        color: ",";\n      }\n    "]);sC=function t(){return e};return e}var sE;var sH=!!eA/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var sS=(sE=eA/* .tutorConfig.settings */.P.settings)===null||sE===void 0?void 0:sE.chatgpt_key_exist;var sN=e=>{var{label:t,type:r="text",maxLimit:n,field:a,fieldState:o,disabled:s,readOnly:l,loading:f,placeholder:p,helpText:v,onChange:g,onKeyDown:b,isHidden:y,isClearable:w=false,isSecondary:_=false,removeBorder:k,dataAttribute:A,isInlineLabel:Y=false,isPassword:I=false,style:T,selectOnFocus:M=false,autoFocus:D=false,generateWithAi:O=false,isMagicAi:C=false,allowNegative:E=false,onClickAiButton:S}=e;var[N,F]=(0,m.useState)(r);var{showModal:L}=(0,ok/* .useModal */.h)();var P=(0,m.useRef)(null);var W;var j=(W=a.value)!==null&&W!==void 0?W:"";var K=undefined;if(N==="number"){j=(0,R/* .parseNumberOnly */.TW)("".concat(j),E).replace(/(\..*)\./g,"$1")}if(n){K={maxLimit:n,inputCharacter:j.toString().length}}var z=(0,c._)({},(0,en/* .isDefined */.O9)(A)&&{[A]:true});var V=()=>{if(!sH){L({component:sa,props:{image:sO,image2x:sD}})}else if(!sS){L({component:sT,props:{image:sO,image2x:sD}})}else{L({component:se,isMagicAi:true,props:{title:(0,B.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:120,field:a,fieldState:o,format:"title",is_html:false,fieldLabel:(0,B.__)("Create a Compelling Title","tutor"),fieldPlaceholder:(0,B.__)("Describe the main focus of your course in a few words","tutor")}});S===null||S===void 0?void 0:S()}};return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{label:t,field:a,fieldState:o,disabled:s,readOnly:l,loading:f,placeholder:p,helpText:v,isHidden:y,characterCount:K,isSecondary:_,removeBorder:k,isInlineLabel:Y,inputStyle:T,generateWithAi:O,onClickAiButton:V,isMagicAi:C,children:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(i/* .Fragment */.FK,{children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sL.container(w||I),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,u._)((0,c._)({},a,e,z),{type:N==="number"?"text":N,value:j,autoFocus:D,onChange:e=>{var{value:t}=e.target;var r=N==="number"?(0,R/* .parseNumberOnly */.TW)(t):t;a.onChange(r);if(g){g(r)}},onClick:e=>{e.stopPropagation()},onKeyDown:e=>{e.stopPropagation();b===null||b===void 0?void 0:b(e.key)},autoComplete:"off",ref:e=>{a.ref(e);// @ts-ignore
P.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!M||!P.current){return}P.current.select()}})),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:I,children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>F(e=>e==="password"?"text":"password"),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"eye",width:24,height:24}),"aria-label":(0,B.__)("Show/Hide Password","tutor"),buttonCss:sL.eyeButton({type:N})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:w&&!!a.value&&N!=="password",children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>a.onChange(""),buttonCss:H/* .styleUtils.inputClearButton */.x.inputClearButton,icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"cross",width:24,height:24}),"aria-label":(0,B.__)("Clear","tutor")})})]})})}})};/* export default */const sF=eT(sN);var sL={container:e=>/*#__PURE__*/(0,p/* .css */.AH)("position:relative;display:flex;input{&.tutor-input-field{",e&&"padding-right: ".concat(l/* .spacing["36"] */.YK["36"],";"),";}}"),eyeButton:e=>{var{type:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.inputClearButton */.x.inputClearButton,";",t!=="password"&&(0,p/* .css */.AH)(sC(),l/* .colorTokens.icon.brand */.I6.icon.brand))}};// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Radio.tsx
function sP(){var e=(0,f._)(["\n      color: ",";\n    "]);sP=function t(){return e};return e}function sW(){var e=(0,f._)(["\n        margin-right: ",";\n      "]);sW=function t(){return e};return e}var sj=/*#__PURE__*/g().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:a,disabled:o=false,labelCss:s,label:l,icon:c,value:u,onChange:d,onBlur:f,description:p}=e;var h=(0,R/* .nanoid */.Ak)();return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sB.wrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("label",{htmlFor:h,css:[sB.container(o),s],children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",{ref:t,id:h,name:r,type:"radio",checked:n,readOnly:a,value:u,disabled:o,onChange:d,onBlur:f,css:[sB.radio(l)]}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{}),c,l]}),p&&/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:sB.description,children:p})]})});var sB={wrapper:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,p/* .css */.AH)(sP(),l/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",l/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",l/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,p/* .css */.AH)(sW(),l/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",l/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",l/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",l/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const sR=sj;// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var sK=e=>{var{field:t,fieldState:r,label:n,options:a=[],disabled:o,wrapperCss:s,onSelect:l,onSelectRender:d}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{field:t,fieldState:r,label:n,disabled:o,children:e=>{var{css:r}=e,n=(0,ek._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:s,children:a.map((e,a)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)(sR,(0,u._)((0,c._)({},n),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||o,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(l){l(e)}}})),d&&t.value===e.value&&d(e),e.legend&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:sV.radioLegend,children:e.legend})]},a))})}})};/* export default */const sz=sK;var sV={radioLegend:/*#__PURE__*/(0,p/* .css */.AH)("margin-left:",l/* .spacing["28"] */.YK["28"],";",_/* .typography.body */.I.body(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";")};// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js
var sU=r(53429);// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/CouponInfo.tsx
var sq=[{label:(0,B.__)("Code","tutor"),value:"code"},{label:(0,B.__)("Automatic","tutor"),value:"automatic"}];function sG(){var e=new URLSearchParams(window.location.search);var t=e.get("coupon_id");var r=!!t;var n=(0,aO/* .useFormContext */.xW)();var a=n.watch("coupon_type");function o(){var e=(0,R/* .generateCouponCode */.z$)();n.setValue("coupon_code",e,{shouldValidate:true})}var s=[{label:(0,B.__)("Active","tutor"),value:"active"},{label:(0,B.__)("Inactive","tutor"),value:"inactive"},{label:(0,B.__)("Trash","tutor"),value:"trash"}];return/*#__PURE__*/(0,i/* .jsxs */.FD)(oy,{bordered:true,css:s$.discountWrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:s$.couponWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(ow,{children:(0,B.__)("Coupon Info","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(o_,{children:(0,B.__)("Create a coupon code or set up automatic discounts.","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"coupon_type",control:n.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sz,(0,u._)((0,c._)({},e),{label:(0,B.__)("Method","tutor"),options:sq,wrapperCss:s$.radioWrapper,disabled:r}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"coupon_title",control:n.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{label:(0,B.__)("Title","tutor"),placeholder:/* translators: %s is the current year (e.g., 2025) */(0,B.sprintf)((0,B.__)("e.g. Summer Sale %s","tutor"),(0,sU["default"])(new Date,w/* .DateFormats.year */.UA.year))}))}),a==="code"&&/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:s$.couponCodeWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"coupon_code",control:n.control,rules:(0,c._)({},o9(),ia(50)),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{label:(0,B.__)("Coupon Code","tutor"),placeholder:(0,B.__)("e.g. SUMMER20","tutor"),disabled:r}))}),!r&&/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{"data-cy":"generate-code",variant:"text",onClick:o,buttonCss:s$.generateCode,children:(0,B.__)("Generate Code","tutor")})]}),r&&/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"coupon_status",control:n.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(o8,(0,u._)((0,c._)({},e),{label:(0,B.__)("Coupon status","tutor"),options:s}))})]})}/* export default */const sQ=sG;var s$={discountWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["4"] */.YK["4"],";"),couponCodeWrapper:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;"),radioWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;gap:",l/* .spacing["40"] */.YK["40"],";"),generateCode:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";color:",l/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";position:absolute;right:",l/* .spacing["0"] */.YK["0"],";top:",l/* .spacing["0"] */.YK["0"],";min-height:auto;padding-inline:",l/* .spacing["4"] */.YK["4"],";&:hover,&:active,&:focus{color:",l/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";}")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var sX=e=>{var{field:t,fieldState:r,disabled:n,value:a,onChange:o,label:s,description:l,helpText:d,isHidden:f,labelCss:p}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{field:t,fieldState:r,isHidden:f,children:e=>{var{css:r}=e,f=(0,ek._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:sJ.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(X,(0,u._)((0,c._)({},t,f),{inputCss:r,labelCss:p,value:a,disabled:n,checked:t.value,label:s,onChange:()=>{t.onChange(!t.value);if(o){o(!t.value)}}})),d&&/*#__PURE__*/(0,i/* .jsx */.Y)(n8,{content:d,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",width:20,height:20})})]}),l&&/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:sJ.description,children:l})]})}})};/* export default */const sZ=sX;var sJ={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;gap:",l/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),"    color:",l/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",l/* .spacing["6"] */.YK["6"],";")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/CouponLimitation.tsx
function s0(){var e=(0,aO/* .useFormContext */.xW)();var t=e.watch("usage_limit_status");var r=e.watch("per_user_limit_status");return/*#__PURE__*/(0,i/* .jsxs */.FD)(oy,{bordered:true,css:s2.discountWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:s2.couponWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ow,{children:(0,B.__)("Usage Limitation","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:s2.couponWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:s2.limitWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"usage_limit_status",control:e.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sZ,(0,u._)((0,c._)({},e),{label:(0,B.__)("Limit number of times this coupon can be used in total","tutor"),labelCss:s2.checkBoxLabel}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"total_usage_limit",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:s2.limitInput,children:/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{type:"number",placeholder:(0,B.__)("0","tutor")}))})})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:s2.couponWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:s2.limitWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"per_user_limit_status",control:e.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sZ,(0,u._)((0,c._)({},e),{label:(0,B.__)("Limit number of times this coupon can be used by a customer","tutor"),labelCss:s2.checkBoxLabel}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"per_user_usage_limit",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:s2.limitInput,children:/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{type:"number",placeholder:(0,B.__)("0","tutor")}))})})})]})})]})}/* export default */const s1=s0;var s2={discountWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["4"] */.YK["4"],";"),limitWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["8"] */.YK["8"],";"),checkBoxLabel:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";"),limitInput:/*#__PURE__*/(0,p/* .css */.AH)("width:fit-content;margin-left:",l/* .spacing["28"] */.YK["28"],";")};// EXTERNAL MODULE: ./node_modules/date-fns/esm/isValid/index.js
var s6=r(86828);// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var s4=r(10123);// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var s5=r(70551);// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfDay/index.js
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
 */function s3(e){(0,s5/* ["default"] */.A)(1,arguments);var t=(0,s4["default"])(e);t.setHours(0,0,0,0);return t};// CONCATENATED MODULE: ./node_modules/date-fns/esm/isSameDay/index.js
/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
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
 */function s8(e,t){(0,s5/* ["default"] */.A)(2,arguments);var r=s3(e);var n=s3(t);return r.getTime()===n.getTime()};// CONCATENATED MODULE: ./node_modules/date-fns/esm/isToday/index.js
/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */function s7(e){(0,s5/* ["default"] */.A)(1,arguments);return s8(e,Date.now())}// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var s9=r(94188);// CONCATENATED MODULE: ./node_modules/date-fns/esm/addDays/index.js
/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function le(e,t){(0,s5/* ["default"] */.A)(2,arguments);var r=(0,s4["default"])(e);var n=(0,s9/* ["default"] */.A)(t);if(isNaN(n)){return new Date(NaN)}if(!n){// If 0 days, no-op to avoid changing times in the hour before end of DST
return r}r.setDate(r.getDate()+n);return r};// CONCATENATED MODULE: ./node_modules/date-fns/esm/isTomorrow/index.js
/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */function lt(e){(0,s5/* ["default"] */.A)(1,arguments);return s8(e,le(Date.now(),1))};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/EmptyPreviewDetail.tsx
var lr=()=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:la.wrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("svg",{width:"250",height:"300",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"10",y1:"20",x2:"80",y2:"20",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("circle",{cx:"30",cy:"50",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"50",y1:"50",x2:"200",y2:"50",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("circle",{cx:"30",cy:"80",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"50",y1:"80",x2:"180",y2:"80",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("circle",{cx:"30",cy:"110",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"50",y1:"110",x2:"120",y2:"110",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"10",y1:"160",x2:"80",y2:"160",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("circle",{cx:"30",cy:"190",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"50",y1:"190",x2:"140",y2:"190",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("circle",{cx:"30",cy:"220",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"50",y1:"220",x2:"180",y2:"220",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("circle",{cx:"30",cy:"250",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,i/* .jsx */.Y)("line",{x1:"50",y1:"250",x2:"120",y2:"250",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"})]})})};/* export default */const ln=lr;var la={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("padding-left:",l/* .spacing["24"] */.YK["24"],";")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/EmptyPreviewTop.tsx
var lo=()=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ls.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"receiptPercent",width:32,height:32}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ls.description,children:(0,B.__)("Coupon preview will appear here","tutor")})]})};/* export default */const li=lo;var ls={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",l/* .spacing["12"] */.YK["12"],";padding:",l/* .spacing["32"] */.YK["32"]," ",l/* .spacing["20"] */.YK["20"],";svg{color:",l/* .colorTokens.icon.hints */.I6.icon.hints,";}"),description:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/CouponPreview.tsx
var ll=(e,t)=>{switch(e){case"all_courses":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off all courses","tutor"),t);case"all_bundles":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off all bundles","tutor"),t);case"all_courses_and_bundles":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off all courses and bundles","tutor"),t);case"all_membership_plans":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off all membership plans","tutor"),t);case"specific_courses":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off specific courses","tutor"),t);case"specific_bundles":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off specific bundles","tutor"),t);case"specific_category":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off specific category","tutor"),t);case"specific_membership_plans":// translators: %s: Percentage or Amount of discount
return(0,B.sprintf)((0,B.__)("%s off specific membership plans","tutor"),t);default:return""}};function lc(){var e=(0,aO/* .useFormContext */.xW)();var t=e.watch("coupon_title");var r=e.watch("coupon_type");var n=e.watch("coupon_code");var a=e.watch("discount_type");var o=e.watch("discount_amount");var s=e.watch("start_date");var c=e.watch("start_time");var u=e.watch("end_date");var d=e.watch("applies_to");var f=e.watch("per_user_usage_limit");var p=e.watch("coupon_uses");var h=s&&c?"".concat(s," ").concat(c):"";var v=(0,s6["default"])(new Date(h))?"".concat(s7(new Date(h))?(0,B.__)("today","tutor"):lt(new Date(h))?(0,B.__)("tomorrow","tutor"):(0,sU["default"])(new Date(h),w/* .DateFormats.activityDate */.UA.activityDate)):"";var m=a==="flat"?os(Number(o)):"".concat(o!==null&&o!==void 0?o:0,"%");// translators: %d is the number of times the coupon was used
var g=p?(0,B.sprintf)((0,B.__)("Total %d times used","tutor"),p):"";// translators: %s is the date from which coupon is active
var b=(0,B.sprintf)((0,B.__)("Active from %s","tutor"),v);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ld.previewWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:t||o||n,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(li,{}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ld.previewTop,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ld.saleSection,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ld.couponName,children:t}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ld.discountText,children:"".concat(m," ").concat((0,B.__)("OFF","tutor"))})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("h1",{css:ld.couponCode,children:r==="automatic"?(0,B.__)("Automatic","tutor"):n}),u&&/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:ld.couponSubtitle,children:/* translators: %s is the validity end date */(0,B.sprintf)((0,B.__)("Valid until %s","tutor"),(0,sU["default"])(new Date(u),w/* .DateFormats.validityDate */.UA.validityDate))})]})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ld.previewMiddle,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:ld.leftCircle}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:ld.rightCircle}),/*#__PURE__*/(0,i/* .jsxs */.FD)("svg",{width:"100%",height:"2",viewBox:"0 0 100 2",preserveAspectRatio:"none",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("title",{children:(0,B.__)("Right circle icon","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("path",{d:"M0 1L100 1",stroke:l/* .colorTokens.stroke.border */.I6.stroke.border,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"7 7",vectorEffect:"non-scaling-stroke"})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:o||v||g,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(ln,{}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ld.previewBottom,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("h6",{css:ld.previewListTitle,children:(0,B.__)("Type","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("ul",{css:ld.previewList,"data-preview-list":true,children:/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{children:ll(d,m)})})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:Number(f)===1||v,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("h6",{css:ld.previewListTitle,children:(0,B.__)("Details","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("ul",{css:ld.previewList,"data-preview-list":true,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:Number(f)===1,children:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{children:(0,B.__)("One use per customer","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:v,children:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{children:b})})]})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:new Date(h)>new Date||g,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)("h6",{css:ld.previewListTitle,children:(0,B.__)("Activity","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("ul",{css:ld.previewList,"data-preview-list":true,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:new Date(h)>new Date,children:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{children:(0,B.__)("Not active yet","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:p,children:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{children:g})})]})]})})]})})]})}/* export default */const lu=lc;var ld={previewWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["20"] */.YK["20"],";background-color:",l/* .colorTokens.background.white */.I6.background.white,";padding:",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["32"] */.YK["32"]," ",l/* .spacing["64"] */.YK["64"],";box-shadow:0px 2px 3px 0px rgba(0,0,0,0.25);border-radius:",l/* .borderRadius["6"] */.Vq["6"],";position:sticky;top:160px;",l/* .Breakpoint.mobile */.EA.mobile,"{overflow:hidden;}"),previewTop:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["6"] */.YK["6"],";align-items:center;"),previewMiddle:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;margin-block:",l/* .spacing["16"] */.YK["16"],";display:flex;width:100%;"),leftCircle:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;left:-",l/* .spacing["48"] */.YK["48"],";top:50%;transform:translate(0,-50%);width:32px;height:32px;border-radius:",l/* .borderRadius.circle */.Vq.circle,";background-color:",l/* .colorTokens.surface.navbar */.I6.surface.navbar,";box-shadow:inset 0px 2px 3px 0px rgba(0,0,0,0.25);&::before{content:'';position:absolute;width:50%;height:100%;background:",l/* .colorTokens.surface.navbar */.I6.surface.navbar,";}"),rightCircle:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;right:-",l/* .spacing["48"] */.YK["48"],";top:50%;transform:translate(0,-50%);width:32px;height:32px;border-radius:",l/* .borderRadius.circle */.Vq.circle,";background-color:",l/* .colorTokens.surface.navbar */.I6.surface.navbar,";box-shadow:inset 0px 2px 3px 0px rgba(0,0,0,0.25);&::before{content:'';position:absolute;width:50%;height:100%;background:",l/* .colorTokens.surface.navbar */.I6.surface.navbar,";right:0;}"),previewBottom:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["32"] */.YK["32"],";"),saleSection:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;justify-content:space-between;align-items:center;width:100%;"),couponName:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.heading6 */.I.heading6("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";"),discountText:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body("medium"),";color:",l/* .colorTokens.text.warning */.I6.text.warning,";"),couponCode:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.heading3 */.I.heading3("medium"),";color:",l/* .colorTokens.text.brand */.I6.text.brand,";margin-top:",l/* .spacing["24"] */.YK["24"],";word-break:break-all;"),couponSubtitle:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";"),previewListTitle:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";"),previewList:/*#__PURE__*/(0,p/* .css */.AH)("&[data-preview-list]{",_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";list-style:disc;padding-left:",l/* .spacing["24"] */.YK["24"],";}")};// CONCATENATED MODULE: ./node_modules/@date-fns/tz/constants/index.js
/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const lf=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ./node_modules/@date-fns/tz/tzName/index.js
/**
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
 */function lp(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")};// CONCATENATED MODULE: ./node_modules/@date-fns/tz/tzOffset/index.js
const lh={};const lv={};/**
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
 */function lm(e,t){try{const r=lh[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const n=r(t).split("GMT")[1];if(n in lv)return lv[n];return lb(n,n.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in lv)return lv[e];const t=e?.match(lg);if(t)return lb(e,t.slice(1));return NaN}}const lg=/([+-]\d\d):?(\d\d)?/;function lb(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const a=+(t[2]||0)/60;return lv[e]=r*60+n>0?r*60+n+a:r*60-n-a};// CONCATENATED MODULE: ./node_modules/@date-fns/tz/date/mini.js
class ly extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN(lm(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));lk(this,NaN);l_(this)}}}static tz(e,...t){return t.length?new ly(...t,e):new ly(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new ly(+this,e)}getTimezoneOffset(){const e=-lm(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);l_(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new ly(+new Date(e),this.timeZone)}}// Assign getters and setters
const lw=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!lw.test(e))return;const t=e.replace(lw,"$1UTC");// Filter out methods without UTC counterparts
if(!ly.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
ly.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
ly.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);lx(this);return+this};// Assign UTC setter
ly.prototype[t]=function(){Date.prototype[t].apply(this,arguments);l_(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function l_(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-lm(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function lx(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
lk(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function lk(e){// Save the time zone offset before all the adjustments
const t=lm(e.timeZone,e);// Remove the seconds offset
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
const n=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
n.setUTCHours(n.getUTCHours()-1);// Calculate if we are on the system DST hour.
const a=-new Date(+e).getTimezoneOffset();const o=-new Date(+n).getTimezoneOffset();const i=a-o;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(i&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+i);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=a-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=a>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const d=Math.round(-(lm(e.timeZone,e)*60))%60;if(d||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+d);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+d+u)}//#endregion
//#region Post-adjustment DST fix
const f=lm(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const v=h-p;const m=p!==r;const g=v-l;if(m&&g){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+g);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=lm(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const n=p-r;if(n){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+n);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}}//#endregion
};// CONCATENATED MODULE: ./node_modules/@date-fns/tz/date/index.js
class lA extends ly{//#region static
static tz(e,...t){return t.length?new lA(...t,e):new lA(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,n]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${n} (${lp(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new lA(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new lA(+new Date(e),this.timeZone)}};// CONCATENATED MODULE: ./node_modules/@date-fns/tz/tz/index.js
/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const lY=e=>t=>TZDate.tz(e,+new Date(t));// CONCATENATED MODULE: ./node_modules/@date-fns/tz/index.js
;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
const lI={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const lT=(e,t,r)=>{let n;const a=lI[e];if(typeof a==="string"){n=a}else if(t===1){n=a.one}else{n=a.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+n}else{return n+" ago"}}return n};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function lM(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/formatLong.js
const lD={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const lO={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const lC={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const lE={date:lM({formats:lD,defaultWidth:"full"}),time:lM({formats:lO,defaultWidth:"full"}),dateTime:lM({formats:lC,defaultWidth:"full"})};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
const lH={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const lS=(e,t,r,n)=>lH[e];// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
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
 */function lN(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const o=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[o]}};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/localize.js
const lF={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const lL={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const lP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const lW={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const lj={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const lB={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const lR=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const lK={ordinalNumber:lR,era:lN({values:lF,defaultWidth:"wide"}),quarter:lN({values:lL,defaultWidth:"wide",argumentCallback:e=>e-1}),month:lN({values:lP,defaultWidth:"wide"}),day:lN({values:lW,defaultWidth:"wide"}),dayPeriod:lN({values:lj,defaultWidth:"wide",formattingValues:lB,defaultFormattingWidth:"wide"})};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildMatchFn.js
function lz(e){return(t,r={})=>{const n=r.width;const a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const o=t.match(a);if(!o){return null}const i=o[0];const s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const l=Array.isArray(s)?lU(s,e=>e.test(i)):lV(s,e=>e.test(i));let c;c=e.valueCallback?e.valueCallback(l):l;c=r.valueCallback?r.valueCallback(c):c;const u=t.slice(i.length);return{value:c,rest:u}}}function lV(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function lU(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function lq(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const o=t.match(e.parsePattern);if(!o)return null;let i=e.valueCallback?e.valueCallback(o[0]):o[0];// [TODO] I challenge you to fix the type
i=r.valueCallback?r.valueCallback(i):i;const s=t.slice(a.length);return{value:i,rest:s}}};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/en-US/_lib/match.js
const lG=/^(\d+)(th|st|nd|rd)?/i;const lQ=/\d+/i;const l$={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const lX={any:[/^b/i,/^(a|c)/i]};const lZ={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const lJ={any:[/1/i,/2/i,/3/i,/4/i]};const l0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const l1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const l2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const l6={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const l4={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const l5={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const l3={ordinalNumber:lq({matchPattern:lG,parsePattern:lQ,valueCallback:e=>parseInt(e,10)}),era:lz({matchPatterns:l$,defaultMatchWidth:"wide",parsePatterns:lX,defaultParseWidth:"any"}),quarter:lz({matchPatterns:lZ,defaultMatchWidth:"wide",parsePatterns:lJ,defaultParseWidth:"any",valueCallback:e=>e+1}),month:lz({matchPatterns:l0,defaultMatchWidth:"wide",parsePatterns:l1,defaultParseWidth:"any"}),day:lz({matchPatterns:l2,defaultMatchWidth:"wide",parsePatterns:l6,defaultParseWidth:"any"}),dayPeriod:lz({matchPatterns:l4,defaultMatchWidth:"any",parsePatterns:l5,defaultParseWidth:"any"})};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/locale/en-US.js
/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const l8={code:"en-US",formatDistance:lT,formatLong:lE,formatRelative:lS,localize:lK,match:l3,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* export default */const l7=/* unused pure expression or super */null&&l8;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/constants.js
/**
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
 */const l9=7;/**
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
 */const ce=365.2425;/**
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
 */const ct=Math.pow(10,8)*24*60*60*1e3;/**
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
 */const cr=/* unused pure expression or super */null&&-ct;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const cn=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const ca=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const co=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const ci=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const cs=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const cl=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const cc=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const cu=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const cd=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const cf=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const cp=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const ch=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const cv=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const cm=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const cg=/* unused pure expression or super */null&&cv*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const cb=/* unused pure expression or super */null&&cg*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const cy=/* unused pure expression or super */null&&cg*ce;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const cw=/* unused pure expression or super */null&&cy/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const c_=/* unused pure expression or super */null&&cw*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const cx=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/constructFrom.js
/**
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
 */function ck(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&cx in e)return e[cx](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* export default */const cA=/* unused pure expression or super */null&&ck;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/toDate.js
/**
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
 */function cY(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return ck(t||e,e)}// Fallback for modularized imports:
/* export default */const cI=/* unused pure expression or super */null&&cY;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/addDays.js
/**
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
 */function cT(e,t,r){const n=cY(e,r?.in);if(isNaN(t))return ck(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return n;n.setDate(n.getDate()+t);return n}// Fallback for modularized imports:
/* export default */const cM=/* unused pure expression or super */null&&cT;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/addMonths.js
/**
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
 */function cD(e,t,r){const n=cY(e,r?.in);if(isNaN(t))return ck(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return n}const a=n.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const o=ck(r?.in||e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();if(a>=i){// If we're already at the end of the month, then this is the correct date
// and we're done.
return o}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
n.setFullYear(o.getFullYear(),o.getMonth(),a);return n}}// Fallback for modularized imports:
/* export default */const cO=/* unused pure expression or super */null&&cD;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/addWeeks.js
/**
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
 */function cC(e,t,r){return cT(e,t*7,r)}// Fallback for modularized imports:
/* export default */const cE=/* unused pure expression or super */null&&cC;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/addYears.js
/**
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
 */function cH(e,t,r){return cD(e,t*12,r)}// Fallback for modularized imports:
/* export default */const cS=/* unused pure expression or super */null&&cH;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function cN(e){const t=cY(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/normalizeDates.js
function cF(e,...t){const r=ck.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfDay.js
/**
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
 */function cL(e,t){const r=cY(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const cP=/* unused pure expression or super */null&&cL;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/differenceInCalendarDays.js
/**
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
 */function cW(e,t,r){const[n,a]=cF(r?.in,e,t);const o=cL(n);const i=cL(a);const s=+o-cN(o);const l=+i-cN(i);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((s-l)/ca)}// Fallback for modularized imports:
/* export default */const cj=/* unused pure expression or super */null&&cW;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/differenceInCalendarMonths.js
/**
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
 */function cB(e,t,r){const[n,a]=cF(r?.in,e,t);const o=n.getFullYear()-a.getFullYear();const i=n.getMonth()-a.getMonth();return o*12+i}// Fallback for modularized imports:
/* export default */const cR=/* unused pure expression or super */null&&cB;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/normalizeInterval.js
function cK(e,t){const[r,n]=cF(e,t.start,t.end);return{start:r,end:n}};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/eachMonthOfInterval.js
/**
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
 */function cz(e,t){const{start:r,end:n}=cK(t?.in,e);let a=+r>+n;const o=a?+r:+n;const i=a?n:r;i.setHours(0,0,0,0);i.setDate(1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;a=!a}const l=[];while(+i<=o){l.push(ck(r,i));i.setMonth(i.getMonth()+s)}return a?l.reverse():l}// Fallback for modularized imports:
/* export default */const cV=/* unused pure expression or super */null&&cz;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/eachYearOfInterval.js
/**
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
 */function cU(e,t){const{start:r,end:n}=cK(t?.in,e);let a=+r>+n;const o=a?+r:+n;const i=a?n:r;i.setHours(0,0,0,0);i.setMonth(0,1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;a=!a}const l=[];while(+i<=o){l.push(ck(r,i));i.setFullYear(i.getFullYear()+s)}return a?l.reverse():l}// Fallback for modularized imports:
/* export default */const cq=/* unused pure expression or super */null&&cU;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/defaultOptions.js
let cG={};function cQ(){return cG}function c$(e){cG=e};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/endOfWeek.js
/**
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
 */function cX(e,t){const r=cQ();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const a=cY(e,t?.in);const o=a.getDay();const i=(o<n?-7:0)+6-(o-n);a.setDate(a.getDate()+i);a.setHours(23,59,59,999);return a}// Fallback for modularized imports:
/* export default */const cZ=/* unused pure expression or super */null&&cX;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/endOfISOWeek.js
/**
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
 */function cJ(e,t){return cX(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const c0=/* unused pure expression or super */null&&cJ;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/endOfMonth.js
/**
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
 */function c1(e,t){const r=cY(e,t?.in);const n=r.getMonth();r.setFullYear(r.getFullYear(),n+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const c2=/* unused pure expression or super */null&&c1;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/endOfYear.js
/**
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
 */function c6(e,t){const r=cY(e,t?.in);const n=r.getFullYear();r.setFullYear(n+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const c4=/* unused pure expression or super */null&&c6;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfYear.js
/**
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
 */function c5(e,t){const r=cY(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const c3=/* unused pure expression or super */null&&c5;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getDayOfYear.js
/**
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
 */function c8(e,t){const r=cY(e,t?.in);const n=cW(r,c5(r));const a=n+1;return a}// Fallback for modularized imports:
/* export default */const c7=/* unused pure expression or super */null&&c8;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfWeek.js
/**
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
 */function c9(e,t){const r=cQ();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const a=cY(e,t?.in);const o=a.getDay();const i=(o<n?7:0)+o-n;a.setDate(a.getDate()-i);a.setHours(0,0,0,0);return a}// Fallback for modularized imports:
/* export default */const ue=/* unused pure expression or super */null&&c9;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfISOWeek.js
/**
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
 */function ut(e,t){return c9(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const ur=/* unused pure expression or super */null&&ut;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getISOWeekYear.js
/**
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
 */function un(e,t){const r=cY(e,t?.in);const n=r.getFullYear();const a=ck(r,0);a.setFullYear(n+1,0,4);a.setHours(0,0,0,0);const o=ut(a);const i=ck(r,0);i.setFullYear(n,0,4);i.setHours(0,0,0,0);const s=ut(i);if(r.getTime()>=o.getTime()){return n+1}else if(r.getTime()>=s.getTime()){return n}else{return n-1}}// Fallback for modularized imports:
/* export default */const ua=/* unused pure expression or super */null&&un;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfISOWeekYear.js
/**
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
 */function uo(e,t){const r=un(e,t);const n=ck(t?.in||e,0);n.setFullYear(r,0,4);n.setHours(0,0,0,0);return ut(n)}// Fallback for modularized imports:
/* export default */const ui=/* unused pure expression or super */null&&uo;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getISOWeek.js
/**
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
 */function us(e,t){const r=cY(e,t?.in);const n=+ut(r)-+uo(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(n/cn)+1}// Fallback for modularized imports:
/* export default */const ul=/* unused pure expression or super */null&&us;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getWeekYear.js
/**
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
 */function uc(e,t){const r=cY(e,t?.in);const n=r.getFullYear();const a=cQ();const o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1;const i=ck(t?.in||e,0);i.setFullYear(n+1,0,o);i.setHours(0,0,0,0);const s=c9(i,t);const l=ck(t?.in||e,0);l.setFullYear(n,0,o);l.setHours(0,0,0,0);const c=c9(l,t);if(+r>=+s){return n+1}else if(+r>=+c){return n}else{return n-1}}// Fallback for modularized imports:
/* export default */const uu=/* unused pure expression or super */null&&uc;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfWeekYear.js
/**
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
 */function ud(e,t){const r=cQ();const n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const a=uc(e,t);const o=ck(t?.in||e,0);o.setFullYear(a,0,n);o.setHours(0,0,0,0);const i=c9(o,t);return i}// Fallback for modularized imports:
/* export default */const uf=/* unused pure expression or super */null&&ud;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getWeek.js
/**
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
 */function up(e,t){const r=cY(e,t?.in);const n=+c9(r,t)-+ud(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(n/cn)+1}// Fallback for modularized imports:
/* export default */const uh=/* unused pure expression or super */null&&up;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/addLeadingZeros.js
function uv(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/format/lightFormatters.js
/*
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
 */const um={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=r>0?r:1-r;return uv(t==="yy"?n%100:n,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):uv(r+1,2)},// Day of the month
d(e,t){return uv(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return uv(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return uv(e.getHours(),t.length)},// Minute
m(e,t){return uv(e.getMinutes(),t.length)},// Second
s(e,t){return uv(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const n=e.getMilliseconds();const a=Math.trunc(n*Math.pow(10,r-3));return uv(a,t.length)}};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/format/formatters.js
const ug={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
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
 */const ub={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return um.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=uc(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const o=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=o%100;return uv(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(o,{unit:"year"})}// Padding
return uv(o,t.length)},// ISO week-numbering year
R:function(e,t){const r=un(e);// Padding
return uv(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return uv(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return uv(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return uv(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return um.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return uv(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=up(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return uv(a,t.length)},// ISO week of year
I:function(e,t,r){const n=us(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return uv(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return um.d(e,t)},// Day of year
D:function(e,t,r){const n=c8(e);if(t==="Do"){return r.ordinalNumber(n,{unit:"dayOfYear"})}return uv(n,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const o=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(o);// Padded numerical value
case"ee":return uv(o,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const o=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(o);// Padded numerical value
case"cc":return uv(o,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return uv(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=ug.noon}else if(n===0){a=ug.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=ug.evening}else if(n>=12){a=ug.afternoon}else if(n>=4){a=ug.morning}else{a=ug.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return um.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return um.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return uv(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return uv(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return um.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return um.s(e,t)},// Fraction of second
S:function(e,t){return um.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return uw(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return u_(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return u_(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return uw(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return u_(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return u_(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+uy(n,":");// Long
case"OOOO":default:return"GMT"+u_(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+uy(n,":");// Long
case"zzzz":default:return"GMT"+u_(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return uv(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return uv(+e,t.length)}};function uy(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const o=n%60;if(o===0){return r+String(a)}return r+String(a)+t+uv(o,2)}function uw(e,t){if(e%60===0){const t=e>0?"-":"+";return t+uv(Math.abs(e)/60,2)}return u_(e,t)}function u_(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=uv(Math.trunc(n/60),2);const o=uv(n%60,2);return r+a+t+o};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/format/longFormatters.js
const ux=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const uk=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const uA=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const n=r[1];const a=r[2];if(!a){return ux(e,t)}let o;switch(n){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",ux(n,t)).replace("{{time}}",uk(a,t))};const uY={p:uk,P:uA};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/_lib/protectedTokens.js
const uI=/^D+$/;const uT=/^Y+$/;const uM=["D","DD","YY","YYYY"];function uD(e){return uI.test(e)}function uO(e){return uT.test(e)}function uC(e,t,r){const n=uE(e,t,r);console.warn(n);if(uM.includes(e))throw new RangeError(n)}function uE(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`};// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isDate.js
/**
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
 */function uH(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* export default */const uS=/* unused pure expression or super */null&&uH;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isValid.js
/**
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
 */function uN(e){return!(!uH(e)&&typeof e!=="number"||isNaN(+cY(e)))}// Fallback for modularized imports:
/* export default */const uF=/* unused pure expression or super */null&&uN;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/format.js
// Rexports of internal for libraries to use.
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
const uL=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const uP=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const uW=/^'([^]*?)'?$/;const uj=/''/g;const uB=/[a-zA-Z]/;/**
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
 */function uR(e,t,r){const n=cQ();const a=r?.locale??n.locale??l8;const o=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1;const i=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0;const s=cY(e,r?.in);if(!uN(s)){throw new RangeError("Invalid time value")}let l=t.match(uP).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=uY[t];return r(e,a.formatLong)}return e}).join("").match(uL).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:uK(e)}}if(ub[t]){return{isToken:true,value:e}}if(t.match(uB)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(a.localize.preprocessor){l=a.localize.preprocessor(s,l)}const c={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return l.map(n=>{if(!n.isToken)return n.value;const o=n.value;if(!r?.useAdditionalWeekYearTokens&&uO(o)||!r?.useAdditionalDayOfYearTokens&&uD(o)){uC(o,t,String(e))}const i=ub[o[0]];return i(s,o,a.localize,c)}).join("")}function uK(e){const t=e.match(uW);if(!t){return e}return t[1].replace(uj,"'")}// Fallback for modularized imports:
/* export default */const uz=/* unused pure expression or super */null&&uR;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getMonth.js
/**
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
 */function uV(e,t){return cY(e,t?.in).getMonth()}// Fallback for modularized imports:
/* export default */const uU=/* unused pure expression or super */null&&uV;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getYear.js
/**
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
 */function uq(e,t){return cY(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* export default */const uG=/* unused pure expression or super */null&&uq;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isAfter.js
/**
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
 */function uQ(e,t){return+cY(e)>+cY(t)}// Fallback for modularized imports:
/* export default */const u$=/* unused pure expression or super */null&&uQ;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isBefore.js
/**
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
 */function uX(e,t){return+cY(e)<+cY(t)}// Fallback for modularized imports:
/* export default */const uZ=/* unused pure expression or super */null&&uX;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isSameDay.js
/**
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
 */function uJ(e,t,r){const[n,a]=cF(r?.in,e,t);return+cL(n)===+cL(a)}// Fallback for modularized imports:
/* export default */const u0=/* unused pure expression or super */null&&uJ;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isSameMonth.js
/**
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
 */function u1(e,t,r){const[n,a]=cF(r?.in,e,t);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}// Fallback for modularized imports:
/* export default */const u2=/* unused pure expression or super */null&&u1;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/isSameYear.js
/**
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
 */function u6(e,t,r){const[n,a]=cF(r?.in,e,t);return n.getFullYear()===a.getFullYear()}// Fallback for modularized imports:
/* export default */const u4=/* unused pure expression or super */null&&u6;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/max.js
/**
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
 */function u5(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=ck.bind(null,e);const t=cY(e,n);if(!r||r<t||isNaN(+t))r=t});return ck(n,r||NaN)}// Fallback for modularized imports:
/* export default */const u3=/* unused pure expression or super */null&&u5;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/min.js
/**
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
 */function u8(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=ck.bind(null,e);const t=cY(e,n);if(!r||r>t||isNaN(+t))r=t});return ck(n,r||NaN)}// Fallback for modularized imports:
/* export default */const u7=/* unused pure expression or super */null&&u8;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/getDaysInMonth.js
/**
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
 */function u9(e,t){const r=cY(e,t?.in);const n=r.getFullYear();const a=r.getMonth();const o=ck(r,0);o.setFullYear(n,a+1,0);o.setHours(0,0,0,0);return o.getDate()}// Fallback for modularized imports:
/* export default */const de=/* unused pure expression or super */null&&u9;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/setMonth.js
/**
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
 */function dt(e,t,r){const n=cY(e,r?.in);const a=n.getFullYear();const o=n.getDate();const i=ck(r?.in||e,0);i.setFullYear(a,t,15);i.setHours(0,0,0,0);const s=u9(i);// Set the earlier date, allows to wrap Jan 31 to Feb 28
n.setMonth(t,Math.min(o,s));return n}// Fallback for modularized imports:
/* export default */const dr=/* unused pure expression or super */null&&dt;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/setYear.js
/**
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
 */function dn(e,t,r){const n=cY(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+n))return ck(r?.in||e,NaN);n.setFullYear(t);return n}// Fallback for modularized imports:
/* export default */const da=/* unused pure expression or super */null&&dn;// CONCATENATED MODULE: ./node_modules/react-day-picker/node_modules/date-fns/startOfMonth.js
/**
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
 */function di(e,t){const r=cY(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const ds=/* unused pure expression or super */null&&di;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
const dl=5;const dc=4;/**
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
 */function du(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const n=r.getDay()>0?r.getDay():7;const a=t.addDays(e,-n+1);const o=t.addDays(a,dl*7-1);const i=t.getMonth(e)===t.getMonth(o)?dl:dc;return i};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
/**
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
 */function dd(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function df(e,t){const r=dd(e,t);const n=du(e,t);const a=t.addDays(r,n*7-1);return a};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/classes/DateLib.js
/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class dp{/**
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
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return lA.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new lA(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):cT(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):cD(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):cC(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):cH(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):cW(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):cB(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):cz(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):cU(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):df(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):cJ(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):c1(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):cX(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):c6(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):uR(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):us(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):uV(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):uq(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):up(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):uQ(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):uX(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):uH(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):uJ(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):u1(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):u6(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):u5(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):u8(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):dt(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):dn(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):dd(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):cL(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):ut(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):di(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):c9(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):c5(e)};this.options={locale:l8,...e};this.overrides=t}/**
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
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return dp.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const a=t?.code;if(a&&dp.yearFirstLocales.has(a)){try{const t=new Intl.DateTimeFormat(a,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const o=t.format(e);return o}catch{// Fallback to date-fns formatting below.
}}const o=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,o)}}dp.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const dh=new dp;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const dv=/* unused pure expression or super */null&&dh;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/UI.js
/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var dm;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
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
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(dm||(dm={}));/** Enum representing flags for the {@link UI.Day} element. */var dg;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(dg||(dg={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var db;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(db||(db={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var dy;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(dy||(dy={}));// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function dw(e,t,r=false,n=dh){let{from:a,to:o}=e;const{differenceInCalendarDays:i,isSameDay:s}=n;if(a&&o){const e=i(o,a)<0;if(e){[a,o]=[o,a]}const n=i(t,a)>=(r?1:0)&&i(o,t)>=(r?1:0);return n}if(!r&&o){return s(o,t)}if(!r&&a){return s(a,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const d_=(e,t)=>dw(e,t,false,defaultDateLib);// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/typeguards.js
/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function dx(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function dk(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function dA(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function dY(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function dI(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function dT(e,t){return Array.isArray(e)&&e.every(t.isDate)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function dM(e,t,r=dh){const n=!Array.isArray(t)?[t]:t;const{isSameDay:a,differenceInCalendarDays:o,isAfter:i}=r;return n.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return a(e,t)}if(dT(t,r)){return t.includes(e)}if(dk(t)){return dw(t,e,false,r)}if(dI(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if(dx(t)){const r=o(t.before,e);const n=o(t.after,e);const a=r>0;const s=n<0;const l=i(t.before,t.after);if(l){return s&&a}else{return a||s}}if(dA(t)){return o(e,t.after)>0}if(dY(t)){return o(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const dD=/* unused pure expression or super */null&&dM;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
/**
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
 */function dO(e,t,r,n,a){const{disabled:o,hidden:i,modifiers:s,showOutsideDays:l,broadcastCalendar:c,today:u}=t;const{isSameDay:d,isSameMonth:f,startOfMonth:p,isBefore:h,endOfMonth:v,isAfter:m}=a;const g=r&&p(r);const b=n&&v(n);const y={[dg.focused]:[],[dg.outside]:[],[dg.disabled]:[],[dg.hidden]:[],[dg.today]:[]};const w={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!f(e,r));const p=Boolean(g&&h(e,g));const v=Boolean(b&&m(e,b));const _=Boolean(o&&dM(e,o,a));const x=Boolean(i&&dM(e,i,a))||p||v||// Broadcast calendar will show outside days as default
!c&&!l&&n||c&&l===false&&n;const k=d(e,u??a.today());if(n)y.outside.push(t);if(_)y.disabled.push(t);if(x)y.hidden.push(t);if(k)y.today.push(t);// Add custom modifiers
if(s){Object.keys(s).forEach(r=>{const n=s?.[r];const o=n?dM(e,n,a):false;if(!o)return;if(w[r]){w[r].push(t)}else{w[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[dg.focused]:false,[dg.disabled]:false,[dg.hidden]:false,[dg.outside]:false,[dg.today]:false};const r={};// Find the modifiers for the given day
for(const r in y){const n=y[r];t[r]=n.some(t=>t===e)}for(const t in w){r[t]=w[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
/**
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
 */function dC(e,t,r={}){const n=Object.entries(e).filter(([,e])=>e===true).reduce((e,[n])=>{if(r[n]){e.push(r[n])}else if(t[dg[n]]){e.push(t[dg[n]])}else if(t[db[n]]){e.push(t[db[n]])}return e},[t[dm.Day]]);return n};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Button.js
/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function dE(e){return m.createElement("button",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dH(e){return m.createElement("span",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Chevron.js
/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dS(e){const{size:t=24,orientation:r="left",className:n}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
m.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&m.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&m.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&m.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&m.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Day.js
/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dN(e){const{day:t,modifiers:r,...n}=e;return m.createElement("td",{...n})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/DayButton.js
/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dF(e){const{day:t,modifiers:r,...n}=e;const a=m.useRef(null);m.useEffect(()=>{if(r.focused)a.current?.focus()},[r.focused]);return m.createElement("button",{ref:a,...n})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Dropdown.js
/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dL(e){const{options:t,className:r,components:n,classNames:a,...o}=e;const i=[a[dm.Dropdown],r].join(" ");const s=t?.find(({value:e})=>e===o.value);return m.createElement("span",{"data-disabled":o.disabled,className:a[dm.DropdownRoot]},m.createElement(n.Select,{className:i,...o},t?.map(({value:e,label:t,disabled:r})=>m.createElement(n.Option,{key:e,value:e,disabled:r},t))),m.createElement("span",{className:a[dm.CaptionLabel],"aria-hidden":true},s?.label,m.createElement(n.Chevron,{orientation:"down",size:18,className:a[dm.Chevron]})))};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/DropdownNav.js
/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dP(e){return m.createElement("div",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Footer.js
/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dW(e){return m.createElement("div",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Month.js
/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dj(e){const{calendarMonth:t,displayIndex:r,...n}=e;return m.createElement("div",{...n},e.children)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/MonthCaption.js
/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dB(e){const{calendarMonth:t,displayIndex:r,...n}=e;return m.createElement("div",{...n})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/MonthGrid.js
/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dR(e){return m.createElement("table",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Months.js
/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dK(e){return m.createElement("div",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/useDayPicker.js
/** @ignore */const dz=(0,m.createContext)(undefined);/**
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
 */function dV(){const e=(0,m.useContext)(dz);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dU(e){const{components:t}=dV();return m.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Nav.js
/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dq(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:a,...o}=e;const{components:i,classNames:s,labels:{labelPrevious:l,labelNext:c}}=dV();const u=(0,m.useCallback)(e=>{if(a){r?.(e)}},[a,r]);const d=(0,m.useCallback)(e=>{if(n){t?.(e)}},[n,t]);return m.createElement("nav",{...o},m.createElement(i.PreviousMonthButton,{type:"button",className:s[dm.PreviousMonthButton],tabIndex:n?undefined:-1,"aria-disabled":n?undefined:true,"aria-label":l(n),onClick:d},m.createElement(i.Chevron,{disabled:n?undefined:true,className:s[dm.Chevron],orientation:"left"})),m.createElement(i.NextMonthButton,{type:"button",className:s[dm.NextMonthButton],tabIndex:a?undefined:-1,"aria-disabled":a?undefined:true,"aria-label":c(a),onClick:u},m.createElement(i.Chevron,{disabled:a?undefined:true,orientation:"right",className:s[dm.Chevron]})))};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dG(e){const{components:t}=dV();return m.createElement(t.Button,{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Option.js
/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dQ(e){return m.createElement("option",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d$(e){const{components:t}=dV();return m.createElement(t.Button,{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Root.js
/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dX(e){const{rootRef:t,...r}=e;return m.createElement("div",{...r,ref:t})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Select.js
/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dZ(e){return m.createElement("select",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Week.js
/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function dJ(e){const{week:t,...r}=e;return m.createElement("tr",{...r})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Weekday.js
/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d0(e){return m.createElement("th",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Weekdays.js
/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d1(e){return m.createElement("thead",{"aria-hidden":true},m.createElement("tr",{...e}))};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/WeekNumber.js
/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d2(e){const{week:t,...r}=e;return m.createElement("th",{...r})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d6(e){return m.createElement("th",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/Weeks.js
/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d4(e){return m.createElement("tbody",{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function d5(e){const{components:t}=dV();return m.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/components/custom-components.js
;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getComponents.js
/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function d3(e){return{...n,...e}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function d8(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function d7(){const e={};for(const t in dm){e[dm[t]]=`rdp-${dm[t]}`}for(const t in dg){e[dg[t]]=`rdp-${dg[t]}`}for(const t in db){e[db[t]]=`rdp-${db[t]}`}for(const t in dy){e[dy[t]]=`rdp-${dy[t]}`}return e};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
/**
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
 */function d9(e,t,r){const n=r??new dp(t);return n.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const fe=d9;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatDay.js
/**
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
 */function ft(e,t,r){return(r??new dp(t)).format(e,"d")};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function fr(e,t=dh){return t.format(e,"LLLL")};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
/**
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
 */function fn(e,t,r){return(r??new dp(t)).format(e,"cccccc")};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function fa(e,t=dh){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function fo(){return``};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function fi(e,t=dh){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const fs=fi;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/formatters/index.js
;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function fl(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...a,...e}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
/**
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
 */function fc(e,t,r,n,a){const{startOfMonth:o,startOfYear:i,endOfYear:s,eachMonthOfInterval:l,getMonth:c}=a;const u=l({start:i(e),end:s(e)});const d=u.map(e=>{const i=n.formatMonthDropdown(e,a);const s=c(e);const l=t&&e<o(t)||r&&e>o(r)||false;return{value:s,label:i,disabled:l}});return d};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function fu(e,t={},r={}){let n={...t?.[dm.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{n={...n,...r?.[e]}});return n};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function fd(e,t,r){const n=e.today();const a=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const o=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);o.push(r)}return o};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
/**
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
 */function ff(e,t,r,n,a=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:o,endOfYear:i,eachYearOfInterval:s,getYear:l}=n;const c=o(e);const u=i(t);const d=s({start:c,end:u});if(a)d.reverse();return d.map(e=>{const t=r.formatYearDropdown(e,n);return{value:l(e),label:t,disabled:false}})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
/**
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
 */function fp(e,t,r,n){let a=(n??new dp(r)).format(e,"PPPP");if(t.today)a=`Today, ${a}`;if(t.selected)a=`${a}, selected`;return a}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const fh=fp;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelGrid.js
/**
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
 */function fv(e,t,r){const n=r??new dp(t);return n.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const fm=fv;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fg(e,t,r,n){let a=(n??new dp(r)).format(e,"PPPP");if(t?.today){a=`Today, ${a}`}return a};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fb(e){return"Choose the Month"};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelNav.js
/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fy(){return""};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelNext.js
/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fw(e){return"Go to the Next Month"};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function f_(e){return"Go to the Previous Month"};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fx(e,t,r){return(r??new dp(t)).format(e,"cccc")};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fk(e,t){return`Week ${e}`};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fA(e){return"Week Number"};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function fY(e){return"Choose the Year"};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/labels/index.js
;// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/useAnimation.js
const fI=e=>{if(e instanceof HTMLElement)return e;return null};const fT=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const fM=e=>fI(e.querySelector("[data-animated-month]"));const fD=e=>fI(e.querySelector("[data-animated-caption]"));const fO=e=>fI(e.querySelector("[data-animated-weeks]"));const fC=e=>fI(e.querySelector("[data-animated-nav]"));const fE=e=>fI(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function fH(e,t,{classNames:r,months:n,focused:a,dateLib:o}){const i=(0,m.useRef)(null);const s=(0,m.useRef)(n);const l=(0,m.useRef)(false);(0,m.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const c=s.current;// update previous months ref for next effect trigger
s.current=n;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
n.length===0||c.length===0||n.length!==c.length){return}const u=o.isSameMonth(n[0].date,c[0].date);const d=o.isAfter(n[0].date,c[0].date);const f=d?r[dy.caption_after_enter]:r[dy.caption_before_enter];const p=d?r[dy.weeks_after_enter]:r[dy.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const h=i.current;// update snapshot for next effect trigger
const v=e.current.cloneNode(true);if(v instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=fT(v);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=fM(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=fD(e);if(r){r.classList.remove(f)}const n=fO(e);if(n){n.classList.remove(p)}});i.current=v}else{i.current=null}if(l.current||u||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
a){return}const m=h instanceof HTMLElement?fT(h):[];const g=fT(e.current);if(g?.every(e=>e instanceof HTMLElement)&&m&&m.every(e=>e instanceof HTMLElement)){l.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=fC(e.current);if(n){n.style.zIndex="1"}g.forEach((a,o)=>{const i=m[o];if(!i){return}// animate new displayed month
a.style.position="relative";a.style.overflow="hidden";const s=fD(a);if(s){s.classList.add(f)}const c=fO(a);if(c){c.classList.add(p)}// animate new displayed month end
const u=()=>{l.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(s){s.classList.remove(f)}if(c){c.classList.remove(p)}a.style.position="";a.style.overflow="";if(a.contains(i)){a.removeChild(i)}};t.push(u);// animate old displayed month
i.style.pointerEvents="none";i.style.position="absolute";i.style.overflow="hidden";i.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const h=fE(i);if(h){h.style.opacity="0"}const v=fD(i);if(v){v.classList.add(d?r[dy.caption_before_exit]:r[dy.caption_after_exit]);v.addEventListener("animationend",u)}const g=fO(i);if(g){g.classList.add(d?r[dy.weeks_before_exit]:r[dy.weeks_after_exit])}a.insertBefore(i,a.firstChild)})}})};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getDates.js
/**
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
 */function fS(e,t,r,n){const a=e[0];const o=e[e.length-1];const{ISOWeek:i,fixedWeeks:s,broadcastCalendar:l}=r??{};const{addDays:c,differenceInCalendarDays:u,differenceInCalendarMonths:d,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:h,endOfWeek:v,isAfter:m,startOfBroadcastWeek:g,startOfISOWeek:b,startOfWeek:y}=n;const w=l?g(a,n):i?b(a):y(a);const _=l?f(o):i?p(h(o)):v(h(o));const x=u(_,w);const k=d(o,a)+1;const A=[];for(let e=0;e<=x;e++){const r=c(w,e);if(t&&m(r,t)){break}A.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const Y=l?35:42;const I=Y*k;if(s&&A.length<I){const e=I-A.length;for(let t=0;t<e;t++){const e=c(A[A.length-1],1);A.push(e)}}return A};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getDays.js
/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function fN(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function fF(e,t,r,n){const{numberOfMonths:a=1}=r;const o=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}o.push(a)}return o};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function fL(e,t,r,n){const{month:a,defaultMonth:o,today:i=n.today(),numberOfMonths:s=1}=e;let l=a||o||i;const{differenceInCalendarMonths:c,addMonths:u,startOfMonth:d}=n;if(r&&c(r,l)<s-1){const e=-1*(s-1);l=u(r,e)}if(t&&c(l,t)<0){l=t}return d(l)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class fP{constructor(e,t,r=dh){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js
/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class fW{constructor(e,t){this.days=t;this.weekNumber=e}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class fj{constructor(e,t){this.date=e;this.weeks=t}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getMonths.js
/**
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
 */function fB(e,t,r,n){const{addDays:a,endOfBroadcastWeek:o,endOfISOWeek:i,endOfMonth:s,endOfWeek:l,getISOWeek:c,getWeek:u,startOfBroadcastWeek:d,startOfISOWeek:f,startOfWeek:p}=n;const h=e.reduce((e,h)=>{const v=r.broadcastCalendar?d(h,n):r.ISOWeek?f(h):p(h);const m=r.broadcastCalendar?o(h):r.ISOWeek?i(s(h)):l(s(h));/** The dates to display in the month. */const g=t.filter(e=>{return e>=v&&e<=m});const b=r.broadcastCalendar?35:42;if(r.fixedWeeks&&g.length<b){const e=t.filter(e=>{const t=b-g.length;return e>m&&e<=a(m,t)});g.push(...e)}const y=g.reduce((e,t)=>{const a=r.ISOWeek?c(t):u(t);const o=e.find(e=>e.weekNumber===a);const i=new fP(t,h,n);if(!o){e.push(new fW(a,[i]))}else{o.days.push(i)}return e},[]);const w=new fj(h,y);e.push(w);return e},[]);if(!r.reverseMonths){return h}else{return h.reverse()}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function fR(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:o,startOfMonth:i,endOfMonth:s,addYears:l,endOfYear:c,newDate:u,today:d}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:h,toMonth:v}=e;if(!r&&h){r=h}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&v){n=v}if(!n&&p){n=u(p,11,31)}const m=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(f){r=u(f,0,1)}else if(!r&&m){r=a(l(e.today??d(),-100))}if(n){n=s(n)}else if(p){n=u(p,11,31)}else if(!n&&m){n=c(e.today??d())}return[r?o(r):r,n?o(n):n]};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
/**
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
 */function fK(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o=1}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=a?o:1;const u=i(e);if(!t){return s(u,c)}const d=l(t,e);if(d<o){return undefined}return s(u,c)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
/**
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
 */function fz(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=a?o??1:1;const u=i(e);if(!t){return s(u,-c)}const d=l(u,t);if(d<=0){return undefined}return s(u,-c)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function fV(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
/**
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
 */function fU(e,t){const[r,n]=(0,m.useState)(e);const a=t===undefined?r:t;return[a,n]};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/useCalendar.js
/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function fq(e,t){const[r,n]=fR(e,t);const{startOfMonth:a,endOfMonth:o}=t;const i=fL(e,r,n,t);const[s,l]=fU(i,// initialMonth is always computed from props.month if provided
e.month?i:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,m.useEffect)(()=>{const a=fL(e,r,n,t);l(a)},[e.timeZone]);/** The months displayed in the calendar. */const c=fF(s,n,e,t);/** The dates displayed in the calendar. */const u=fS(c,e.endMonth?o(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const d=fB(c,u,e,t);/** The Weeks displayed in the calendar. */const f=fV(d);/** The Days displayed in the calendar. */const p=fN(d);const h=fz(s,r,e,t);const v=fK(s,n,e,t);const{disableNavigation:g,onMonthChange:b}=e;const y=e=>f.some(t=>t.days.some(t=>t.isEqualTo(e)));const w=e=>{if(g){return}let t=a(e);// if month is before start, use the first month instead
if(r&&t<a(r)){t=a(r)}// if month is after endMonth, use the last month instead
if(n&&t>a(n)){t=a(n)}l(t);b?.(t)};const _=e=>{// is this check necessary?
if(y(e)){return}w(e.date)};const x={months:d,weeks:f,days:p,navStart:r,navEnd:n,previousMonth:h,nextMonth:v,goToMonth:w,goToDay:_};return x};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var fG;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(fG||(fG={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function fQ(e){return!e[dg.disabled]&&!e[dg.hidden]&&!e[dg.outside]}/**
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
 */function f$(e,t,r,n){let a;let o=-1;for(const i of e){const e=t(i);if(fQ(e)){if(e[dg.focused]&&o<fG.FocusedModifier){a=i;o=fG.FocusedModifier}else if(n?.isEqualTo(i)&&o<fG.LastFocused){a=i;o=fG.LastFocused}else if(r(i.date)&&o<fG.Selected){a=i;o=fG.Selected}else if(e[dg.today]&&o<fG.Today){a=i;o=fG.Today}}}if(!a){// Return the first day that is focusable
a=e.find(e=>fQ(t(e)))}return a};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
/**
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
 */function fX(e,t,r,n,a,o,i){const{ISOWeek:s,broadcastCalendar:l}=o;const{addDays:c,addMonths:u,addWeeks:d,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:h,endOfWeek:v,max:m,min:g,startOfBroadcastWeek:b,startOfISOWeek:y,startOfWeek:w}=i;const _={day:c,week:d,month:u,year:f,startOfWeek:e=>l?b(e,i):s?y(e):w(e),endOfWeek:e=>l?p(e):s?h(e):v(e)};let x=_[e](r,t==="after"?1:-1);if(t==="before"&&n){x=m([n,x])}else if(t==="after"&&a){x=g([a,x])}return x};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
/**
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
 */function fZ(e,t,r,n,a,o,i,s=0){if(s>365){// Limit the recursion to 365 attempts
return undefined}const l=fX(e,t,r.date,n,a,o,i);const c=Boolean(o.disabled&&dM(l,o.disabled,i));const u=Boolean(o.hidden&&dM(l,o.hidden,i));const d=l;const f=new fP(l,d,i);if(!c&&!u){return f}// Recursively attempt to find the next focusable date
return fZ(e,t,f,n,a,o,i,s+1)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/useFocus.js
/**
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
 */function fJ(e,t,r,n,a){const{autoFocus:o}=e;const[i,s]=(0,m.useState)();const l=f$(t.days,r,n||(()=>false),i);const[c,u]=(0,m.useState)(o?l:undefined);const d=()=>{s(c);u(undefined)};const f=(r,n)=>{if(!c)return;const o=fZ(r,n,c,t.navStart,t.navEnd,e,a);if(!o)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(o));if(!e){return}}t.goToDay(o);u(o)};const p=e=>{return Boolean(l?.isEqualTo(e))};const h={isFocusTarget:p,setFocused:u,focused:c,blur:d,moveFocus:f};return h};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/selection/useMulti.js
/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function f0(e,t){const{selected:r,required:n,onSelect:a}=e;const[o,i]=fU(r,a?r:undefined);const s=!a?o:r;const{isSameDay:l}=t;const c=e=>{return s?.some(t=>l(t,e))??false};const{min:u,max:d}=e;const f=(e,t,r)=>{let o=[...s??[]];if(c(e)){if(s?.length===u){// Min value reached, do nothing
return}if(n&&s?.length===1){// Required value already selected do nothing
return}o=s?.filter(t=>!l(t,e))}else{if(s?.length===d){// Max value reached, reset the selection to date
o=[e]}else{// Add the date to the selection
o=[...o,e]}}if(!a){i(o)}a?.(o,e,t,r);return o};return{selected:s,select:f,isSelected:c}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/addToRange.js
/**
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
 */function f1(e,t,r=0,n=0,a=false,o=dh){const{from:i,to:s}=t||{};const{isSameDay:l,isAfter:c,isBefore:u}=o;let d;if(!i&&!s){// the range is empty, add the date
d={from:e,to:r>0?undefined:e}}else if(i&&!s){// adding date to an incomplete range
if(l(i,e)){// adding a date equal to the start of the range
if(r===0){d={from:i,to:e}}else if(a){d={from:i,to:undefined}}else{d=undefined}}else if(u(e,i)){// adding a date before the start of the range
d={from:e,to:i}}else{// adding a date after the start of the range
d={from:i,to:e}}}else if(i&&s){// adding date to a complete range
if(l(i,e)&&l(s,e)){// adding a date that is equal to both start and end of the range
if(a){d={from:i,to:s}}else{d=undefined}}else if(l(i,e)){// adding a date equal to the the start of the range
d={from:i,to:r>0?undefined:e}}else if(l(s,e)){// adding a dare equal to the end of the range
d={from:e,to:r>0?undefined:e}}else if(u(e,i)){// adding a date before the start of the range
d={from:e,to:s}}else if(c(e,i)){// adding a date after the start of the range
d={from:i,to:e}}else if(c(e,s)){// adding a date after the end of the range
d={from:i,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(d?.from&&d?.to){const t=o.differenceInCalendarDays(d.to,d.from);if(n>0&&t>n){d={from:e,to:undefined}}else if(r>1&&t<r){d={from:e,to:undefined}}}return d};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
/**
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
 */function f2(e,t,r=dh){const n=!Array.isArray(t)?[t]:t;let a=e.from;const o=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const i=Math.min(o,6);for(let e=0;e<=i;e++){if(n.includes(a.getDay())){return true}a=r.addDays(a,1)}return false};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function f6(e,t,r=dh){return dw(e,t.from,false,r)||dw(e,t.to,false,r)||dw(t,e.from,false,r)||dw(t,e.to,false,r)};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function f4(e,t,r=dh){const n=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const a=n.filter(e=>typeof e!=="function");const o=a.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return dw(e,t,false,r)}if(dT(t,r)){return t.some(t=>dw(e,t,false,r))}if(dk(t)){if(t.from&&t.to){return f6(e,{from:t.from,to:t.to},r)}return false}if(dI(t)){return f2(e,t.dayOfWeek,r)}if(dx(t)){const n=r.isAfter(t.before,t.after);if(n){return f6(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return dM(e.from,t,r)||dM(e.to,t,r)}if(dA(t)||dY(t)){return dM(e.from,t,r)||dM(e.to,t,r)}return false});if(o){return true}const i=n.filter(e=>typeof e==="function");if(i.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(i.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/selection/useRange.js
/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function f5(e,t){const{disabled:r,excludeDisabled:n,selected:a,required:o,onSelect:i}=e;const[s,l]=fU(a,i?a:undefined);const c=!i?s:a;const u=e=>c&&dw(c,e,false,t);const d=(a,s,u)=>{const{min:d,max:f}=e;const p=a?f1(a,c,d,f,o,t):undefined;if(n&&r&&p?.from&&p.to){if(f4({from:p.from,to:p.to},r,t)){// if a disabled days is found, the range is reset
p.from=a;p.to=undefined}}if(!i){l(p)}i?.(p,a,s,u);return p};return{selected:c,select:d,isSelected:u}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/selection/useSingle.js
/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function f3(e,t){const{selected:r,required:n,onSelect:a}=e;const[o,i]=fU(r,a?r:undefined);const s=!a?o:r;const{isSameDay:l}=t;const c=e=>{return s?l(s,e):false};const u=(e,t,r)=>{let o=e;if(!n&&s&&s&&l(e,s)){// If the date is the same, clear the selection.
o=undefined}if(!a){i(o)}if(n){a?.(o,e,t,r)}else{a?.(o,e,t,r)}return o};return{selected:s,select:u,isSelected:c}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/useSelection.js
/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function f8(e,t){const r=f3(e,t);const n=f0(e,t);const a=f5(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return a;default:return undefined}};// CONCATENATED MODULE: ./node_modules/react-day-picker/dist/esm/DayPicker.js
/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function f7(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new lA(t.today,t.timeZone)}if(t.month){t.month=new lA(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new lA(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new lA(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new lA(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new lA(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new lA(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new lA(t.selected.from,t.timeZone):undefined,to:t.selected.to?new lA(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:n,labels:a,dateLib:i,locale:s,classNames:l}=(0,m.useMemo)(()=>{const e={...l8,...t.locale};const r=new dp({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:d3(t.components),formatters:fl(t.formatters),labels:{...o,...t.labels},locale:e,classNames:{...d7(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:c,mode:u,navLayout:d,numberOfMonths:f=1,onDayBlur:p,onDayClick:h,onDayFocus:v,onDayKeyDown:g,onDayMouseEnter:b,onDayMouseLeave:y,onNextClick:w,onPrevClick:_,showWeekNumber:x,styles:k}=t;const{formatCaption:A,formatDay:Y,formatMonthDropdown:I,formatWeekNumber:T,formatWeekNumberHeader:M,formatWeekdayName:D,formatYearDropdown:O}=n;const C=fq(t,i);const{days:E,months:H,navStart:S,navEnd:N,previousMonth:F,nextMonth:L,goToMonth:P}=C;const W=dO(E,t,S,N,i);const{isSelected:j,select:B,selected:R}=f8(t,i)??{};const{blur:K,focused:z,isFocusTarget:V,moveFocus:U,setFocused:q}=fJ(t,C,W,j??(()=>false),i);const{labelDayButton:G,labelGridcell:Q,labelGrid:$,labelMonthDropdown:X,labelNav:Z,labelPrevious:J,labelNext:ee,labelWeekday:et,labelWeekNumber:er,labelWeekNumberHeader:en,labelYearDropdown:ea}=a;const eo=(0,m.useMemo)(()=>fd(i,t.ISOWeek),[i,t.ISOWeek]);const ei=u!==undefined||h!==undefined;const es=(0,m.useCallback)(()=>{if(!F)return;P(F);_?.(F)},[F,P,_]);const el=(0,m.useCallback)(()=>{if(!L)return;P(L);w?.(L)},[P,L,w]);const ec=(0,m.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();q(e);B?.(e.date,t,r);h?.(e.date,t,r)},[B,h,q]);const eu=(0,m.useCallback)((e,t)=>r=>{q(e);v?.(e.date,t,r)},[v,q]);const ed=(0,m.useCallback)((e,t)=>r=>{K();p?.(e.date,t,r)},[K,p]);const ef=(0,m.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];U(e,t)}g?.(e.date,r,n)},[U,g,t.dir]);const ep=(0,m.useCallback)((e,t)=>r=>{b?.(e.date,t,r)},[b]);const eh=(0,m.useCallback)((e,t)=>r=>{y?.(e.date,t,r)},[y]);const ev=(0,m.useCallback)(e=>t=>{const r=Number(t.target.value);const n=i.setMonth(i.startOfMonth(e),r);P(n)},[i,P]);const em=(0,m.useCallback)(e=>t=>{const r=Number(t.target.value);const n=i.setYear(i.startOfMonth(e),r);P(n)},[i,P]);const{className:eg,style:eb}=(0,m.useMemo)(()=>({className:[l[dm.Root],t.className].filter(Boolean).join(" "),style:{...k?.[dm.Root],...t.style}}),[l,t.className,t.style,k]);const ey=d8(t);const ew=(0,m.useRef)(null);fH(ew,Boolean(t.animate),{classNames:l,months:H,focused:z,dateLib:i});const e_={dayPickerProps:t,selected:R,select:B,isSelected:j,months:H,nextMonth:L,previousMonth:F,goToMonth:P,getModifiers:W,components:r,classNames:l,styles:k,labels:a,formatters:n};return m.createElement(dz.Provider,{value:e_},m.createElement(r.Root,{rootRef:t.animate?ew:undefined,className:eg,style:eb,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...ey},m.createElement(r.Months,{className:l[dm.Months],style:k?.[dm.Months]},!t.hideNavigation&&!d&&m.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:l[dm.Nav],style:k?.[dm.Nav],"aria-label":Z(),onPreviousClick:es,onNextClick:el,previousMonth:F,nextMonth:L}),H.map((e,a)=>{return m.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:l[dm.Month],style:k?.[dm.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:a,displayIndex:a,calendarMonth:e},d==="around"&&!t.hideNavigation&&a===0&&m.createElement(r.PreviousMonthButton,{type:"button",className:l[dm.PreviousMonthButton],tabIndex:F?undefined:-1,"aria-disabled":F?undefined:true,"aria-label":J(F),onClick:es,"data-animated-button":t.animate?"true":undefined},m.createElement(r.Chevron,{disabled:F?undefined:true,className:l[dm.Chevron],orientation:t.dir==="rtl"?"right":"left"})),m.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:l[dm.MonthCaption],style:k?.[dm.MonthCaption],calendarMonth:e,displayIndex:a},c?.startsWith("dropdown")?m.createElement(r.DropdownNav,{className:l[dm.Dropdowns],style:k?.[dm.Dropdowns]},(()=>{const a=c==="dropdown"||c==="dropdown-months"?m.createElement(r.MonthsDropdown,{key:"month",className:l[dm.MonthsDropdown],"aria-label":X(),classNames:l,components:r,disabled:Boolean(t.disableNavigation),onChange:ev(e.date),options:fc(e.date,S,N,n,i),style:k?.[dm.Dropdown],value:i.getMonth(e.date)}):m.createElement("span",{key:"month"},I(e.date,i));const o=c==="dropdown"||c==="dropdown-years"?m.createElement(r.YearsDropdown,{key:"year",className:l[dm.YearsDropdown],"aria-label":ea(i.options),classNames:l,components:r,disabled:Boolean(t.disableNavigation),onChange:em(e.date),options:ff(S,N,n,i,Boolean(t.reverseYears)),style:k?.[dm.Dropdown],value:i.getYear(e.date)}):m.createElement("span",{key:"year"},O(e.date,i));const s=i.getMonthYearOrder()==="year-first"?[o,a]:[a,o];return s})(),m.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},A(e.date,i.options,i))):// biome-ignore lint/a11y/useSemanticElements: breaking change
m.createElement(r.CaptionLabel,{className:l[dm.CaptionLabel],role:"status","aria-live":"polite"},A(e.date,i.options,i))),d==="around"&&!t.hideNavigation&&a===f-1&&m.createElement(r.NextMonthButton,{type:"button",className:l[dm.NextMonthButton],tabIndex:L?undefined:-1,"aria-disabled":L?undefined:true,"aria-label":ee(L),onClick:el,"data-animated-button":t.animate?"true":undefined},m.createElement(r.Chevron,{disabled:L?undefined:true,className:l[dm.Chevron],orientation:t.dir==="rtl"?"left":"right"})),a===f-1&&d==="after"&&!t.hideNavigation&&m.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:l[dm.Nav],style:k?.[dm.Nav],"aria-label":Z(),onPreviousClick:es,onNextClick:el,previousMonth:F,nextMonth:L}),m.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":u==="multiple"||u==="range","aria-label":$(e.date,i.options,i)||undefined,className:l[dm.MonthGrid],style:k?.[dm.MonthGrid]},!t.hideWeekdays&&m.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:l[dm.Weekdays],style:k?.[dm.Weekdays]},x&&m.createElement(r.WeekNumberHeader,{"aria-label":en(i.options),className:l[dm.WeekNumberHeader],style:k?.[dm.WeekNumberHeader],scope:"col"},M()),eo.map(e=>m.createElement(r.Weekday,{"aria-label":et(e,i.options,i),className:l[dm.Weekday],key:String(e),style:k?.[dm.Weekday],scope:"col"},D(e,i.options,i)))),m.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:l[dm.Weeks],style:k?.[dm.Weeks]},e.weeks.map(e=>{return m.createElement(r.Week,{className:l[dm.Week],key:e.weekNumber,style:k?.[dm.Week],week:e},x&&// biome-ignore lint/a11y/useSemanticElements: react component
m.createElement(r.WeekNumber,{week:e,style:k?.[dm.WeekNumber],"aria-label":er(e.weekNumber,{locale:s}),className:l[dm.WeekNumber],scope:"row",role:"rowheader"},T(e.weekNumber,i)),e.days.map(e=>{const{date:n}=e;const a=W(e);a[dg.focused]=!a.hidden&&Boolean(z?.isEqualTo(e));a[db.selected]=j?.(n)||a.selected;if(dk(R)){// add range modifiers
const{from:e,to:t}=R;a[db.range_start]=Boolean(e&&t&&i.isSameDay(n,e));a[db.range_end]=Boolean(e&&t&&i.isSameDay(n,t));a[db.range_middle]=dw(R,n,true,i)}const o=fu(a,k,t.modifiersStyles);const s=dC(a,l,t.modifiersClassNames);const c=!ei&&!a.hidden?Q(n,a,i.options,i):undefined;return(// biome-ignore lint/a11y/useSemanticElements: react component
m.createElement(r.Day,{key:`${i.format(n,"yyyy-MM-dd")}_${i.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:a,className:s.join(" "),style:o,role:"gridcell","aria-selected":a.selected||undefined,"aria-label":c,"data-day":i.format(n,"yyyy-MM-dd"),"data-month":e.outside?i.format(n,"yyyy-MM"):undefined,"data-selected":a.selected||undefined,"data-disabled":a.disabled||undefined,"data-hidden":a.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":a.focused||undefined,"data-today":a.today||undefined},!a.hidden&&ei?m.createElement(r.DayButton,{className:l[dm.DayButton],style:k?.[dm.DayButton],type:"button",day:e,modifiers:a,disabled:a.disabled||undefined,tabIndex:V(e)?0:-1,"aria-label":G(n,a,i.options,i),onClick:ec(e,a),onBlur:ed(e,a),onFocus:eu(e,a),onKeyDown:ef(e,a),onMouseEnter:ep(e,a),onMouseLeave:eh(e,a)},Y(n,i.options,i)):!a.hidden&&Y(e.date,i.options,i)))}))}))))})),t.footer&&// biome-ignore lint/a11y/useSemanticElements: react component
m.createElement(r.Footer,{className:l[dm.Footer],style:k?.[dm.Footer],role:"status","aria-live":"polite"},t.footer)))}// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var f9=r(85072);var pe=/*#__PURE__*/r.n(f9);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var pt=r(97825);var pr=/*#__PURE__*/r.n(pt);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var pn=r(77659);var pa=/*#__PURE__*/r.n(pn);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var po=r(55056);var pi=/*#__PURE__*/r.n(po);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var ps=r(10540);var pl=/*#__PURE__*/r.n(ps);// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var pc=r(41113);var pu=/*#__PURE__*/r.n(pc);// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/react-day-picker/src/style.css
var pd=r(25631);// CONCATENATED MODULE: ./node_modules/react-day-picker/src/style.css
var pf={};pf.styleTagTransform=pu();pf.setAttributes=pi();pf.insert=pa().bind(null,"head");pf.domAPI=pr();pf.insertStyleElement=pl();var pp=pe()(pd/* ["default"] */.A,pf);/* export default */const ph=pd/* ["default"] */.A&&pd/* ["default"].locals */.A.locals?pd/* ["default"].locals */.A.locals:undefined;// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
// Create DayPicker formatters based on WordPress locale
var pv=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var pm=e=>{if(!e)return undefined;return(0,s6["default"])(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var pg=e=>{var{label:t,field:r,fieldState:n,disabled:a,disabledBefore:o,disabledAfter:s,loading:l,placeholder:f,helpText:p,isClearable:v=true,onChange:g,dateFormat:b=w/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var y=(0,m.useRef)(null);var[_,x]=(0,m.useState)(false);var k=pm(r.value);var A=typeof window!=="undefined"&&window.wp&&window.wp.date;var Y=k?A?window.wp.date.format("F j, Y",k):(0,sU["default"])(k,b):"";var{triggerRef:I,position:T,popoverRef:M}=oN({isOpen:_,placement:oI.BOTTOM_LEFT});var D=()=>{var e;x(false);(e=y.current)===null||e===void 0?void 0:e.focus()};var O=pm(o);var C=pm(s);return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{label:t,field:r,fieldState:n,disabled:a,loading:l,placeholder:f,helpText:p,children:e=>{var{css:t}=e,n=(0,ek._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:py.wrapper,ref:I,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,u._)((0,c._)({},n),{css:[t,py.input],title:Y,ref:e=>{r.ref(e);// @ts-ignore
y.current=e},type:"text",value:Y,onClick:e=>{e.stopPropagation();x(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();x(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:py.icon}),v&&r.value&&/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,B.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:H/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(oF,{isOpen:_,onClickOutside:D,onEscape:D,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:py.pickerWrapper,style:{left:T.left,top:T.top},ref:M,children:/*#__PURE__*/(0,i/* .jsx */.Y)(f7,{dir:w/* .isRTL */.V8?"rtl":"ltr",animate:true,mode:"single",formatters:pv(),disabled:[!!O&&{before:O},!!C&&{after:C}],selected:k,onSelect:e=>{if(e){var t=(0,sU["default"])(e,w/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);D();if(g){g(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:k||new Date,startMonth:O||new Date(new Date().getFullYear()-10,0),endMonth:C||new Date(new Date().getFullYear()+10,11),weekStartsOn:A?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const pb=pg;var py={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,p/* .css */.AH)("&[data-input]{padding-left:",l/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;top:50%;left:",l/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.body */.I.body("regular"),";position:absolute;background-color:",l/* .colorTokens.background.white */.I6.background.white,";box-shadow:",l/* .shadow.popover */.r7.popover,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",l/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",l/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",l/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",l/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",l/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",l/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",l/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",l/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",l/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",l/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",l/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",l/* .colorTokens.background.hover */.I6.background.hover,";color:",l/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",l/* .colorTokens.text.white */.I6.text.white,";background-color:",l/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",l/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",l/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",l/* .borderRadius.circle */.Vq.circle,";font-weight:",l/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",l/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",l/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")};// CONCATENATED MODULE: ./node_modules/date-fns/esm/setMinutes/index.js
/**
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
 */function pw(e,t){(0,s5/* ["default"] */.A)(2,arguments);var r=(0,s4["default"])(e);var n=(0,s9/* ["default"] */.A)(t);r.setMinutes(n);return r};// CONCATENATED MODULE: ./node_modules/date-fns/esm/setHours/index.js
/**
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
 */function p_(e,t){(0,s5/* ["default"] */.A)(2,arguments);var r=(0,s4["default"])(e);var n=(0,s9/* ["default"] */.A)(t);r.setHours(n);return r}// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMinutes/index.js
var px=r(92890);// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfMinute/index.js
/**
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
 */function pk(e){(0,s5/* ["default"] */.A)(1,arguments);var t=(0,s4["default"])(e);t.setSeconds(0,0);return t};// CONCATENATED MODULE: ./node_modules/date-fns/esm/eachMinuteOfInterval/index.js
/**
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
 */function pA(e,t){var r;(0,s5/* ["default"] */.A)(1,arguments);var n=pk((0,s4["default"])(e.start));var a=(0,s4["default"])(e.end);var o=n.getTime();var i=a.getTime();if(o>=i){throw new RangeError("Invalid interval")}var s=[];var l=n;var c=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(c<1||isNaN(c))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(l.getTime()<=i){s.push((0,s4["default"])(l));l=(0,px["default"])(l,c)}return s};// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var pY=e=>{var{label:t,field:r,fieldState:n,interval:a=30,disabled:o,loading:s,placeholder:l,helpText:f,isClearable:p=true}=e;var[v,g]=(0,m.useState)(false);var b=(0,m.useRef)(null);var y=(0,m.useRef)(null);var _=(0,m.useMemo)(()=>{var e=pw(p_(new Date,0),0);var t=pw(p_(new Date,23),59);var r=pA({start:e,end:t},{step:a});return r.map(e=>(0,sU["default"])(e,w/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[a]);var{activeIndex:x,setActiveIndex:k}=oU({options:_.map(e=>({label:e,value:e})),isOpen:v,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);g(false)},onClose:()=>g(false)});(0,m.useEffect)(()=>{if(v&&x>=0&&y.current){y.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[v,x]);return/*#__PURE__*/(0,i/* .jsx */.Y)(ah,{label:t,field:r,fieldState:n,disabled:o,loading:s,placeholder:l,helpText:f,children:e=>{var{css:t}=e,n=(0,ek._)(e,["css"]);var a;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:pT.wrapper,ref:b,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,u._)((0,c._)({},n),{ref:r.ref,css:[t,pT.input],type:"text",onClick:e=>{e.stopPropagation();g(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();g(e=>!e)}if(e.key==="Tab"){g(false)}},value:(a=r.value)!==null&&a!==void 0?a:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"clock",width:32,height:32,style:pT.icon}),p&&r.value&&/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,B.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:H/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(oV,{triggerRef:b,isOpen:v,closePopover:()=>g(false),animationType:eM/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,i/* .jsx */.Y)("ul",{css:pT.list,children:_.map((e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:pT.listItem,ref:x===t?y:null,"data-active":x===t,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:pT.itemButton,onClick:()=>{r.onChange(e);g(false)},onMouseOver:()=>k(t),onMouseLeave:()=>t!==x&&k(-1),onFocus:()=>k(t),children:e})},t)})})})]})}})};/* export default */const pI=pY;var pT={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,p/* .css */.AH)("&[data-input]{padding-left:",l/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;top:50%;left:",l/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,p/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",H/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",l/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",l/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,p/* .css */.AH)(H/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.body */.I.body(),";margin:",l/* .spacing["4"] */.YK["4"]," ",l/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",l/* .colorTokens.text.primary */.I6.text.primary,";}")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/CouponValidity.tsx
function pM(){var e=(0,aO/* .useFormContext */.xW)();var t=e.watch("is_end_enabled");var r=e.watch("start_date");var n=e.watch("start_time");var a=!!r&&!!n;return/*#__PURE__*/(0,i/* .jsxs */.FD)(oy,{bordered:true,css:pO.discountWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:pO.couponWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ow,{children:(0,B.__)("Validity","tutor")})}),/*#__PURE__*/(0,i/* .jsxs */.FD)(oy,{css:[H/* .styleUtils.boxReset */.x.boxReset,pO.validityWrapper],children:[/*#__PURE__*/(0,i/* .jsx */.Y)(o_,{css:pO.dateTimeTitle,children:(0,B.__)("Starts from","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:pO.dateTimeWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"start_date",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(pb,(0,u._)((0,c._)({},e),{placeholder:"2030-10-24"}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"start_time",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(pI,(0,u._)((0,c._)({},e),{placeholder:"12:30 PM"}))})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{control:e.control,name:"is_end_enabled",render:t=>/*#__PURE__*/(0,i/* .jsx */.Y)(sZ,(0,u._)((0,c._)({},t),{label:(0,B.__)("Set end date","tutor"),description:(0,B.__)("Leaving the end date blank will make the coupon valid indefinitely.","tutor"),onChange:t=>{if(!t){e.setValue("end_date","");e.setValue("end_time","")}},disabled:!a,labelCss:pO.setEndDateLabel}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:a&&t,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsx */.Y)(o_,{css:pO.dateTimeTitle,children:(0,B.__)("Ends in","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:pO.dateTimeWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"end_date",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(pb,(0,u._)((0,c._)({},e),{placeholder:"2030-10-24",disabledBefore:r}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"end_time",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(pI,(0,u._)((0,c._)({},e),{placeholder:"12:30 PM"}))})]})]})})]})]})}/* export default */const pD=pM;var pO={discountWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["4"] */.YK["4"],";"),validityWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["12"] */.YK["12"],";"),dateTimeWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;gap:",l/* .spacing["12"] */.YK["12"],";width:fit-content;"),dateTimeTitle:/*#__PURE__*/(0,p/* .css */.AH)("color:",l/* .colorTokens.text.title */.I6.text.title,";"),setEndDateLabel:/*#__PURE__*/(0,p/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";")};// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/coupon/PurchaseRequirements.tsx
function pC(){var e=(0,aO/* .useFormContext */.xW)();var{tutor_currency:t}=eA/* .tutorConfig */.P;var r;// translators: %s is the currency symbol, e.g. $, €, ¥
var n=(0,B.sprintf)((0,B.__)("Minimum purchase amount (%s)","tutor"),(r=t===null||t===void 0?void 0:t.symbol)!==null&&r!==void 0?r:"$");var a=[{label:(0,B.__)("No minimum requirements","tutor"),value:"no_minimum"},{label:n,value:"minimum_purchase"},{label:(0,B.__)("Minimum quantity of courses","tutor"),value:"minimum_quantity"}];return/*#__PURE__*/(0,i/* .jsxs */.FD)(oy,{bordered:true,css:pH.discountWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:pH.couponWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(ow,{children:(0,B.__)("Minimum Purchase Requirements","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"purchase_requirement",control:e.control,render:r=>/*#__PURE__*/(0,i/* .jsx */.Y)(sz,(0,u._)((0,c._)({},r),{options:a,wrapperCss:pH.radioGroupWrapper,onSelectRender:r=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:r.value==="minimum_purchase"||r.value==="minimum_quantity",children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:pH.requirementInput,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:r.value==="minimum_purchase",children:/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"purchase_requirement_value",control:e.control,rules:o9(),render:e=>{var r;return/*#__PURE__*/(0,i/* .jsx */.Y)(aT,(0,u._)((0,c._)({},e),{type:"number",placeholder:(0,B.__)("0.00","tutor"),content:(r=t===null||t===void 0?void 0:t.symbol)!==null&&r!==void 0?r:"$",contentCss:H/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,{when:r.value==="minimum_quantity",children:/*#__PURE__*/(0,i/* .jsx */.Y)(aO/* .Controller */.xI,{name:"purchase_requirement_value",control:e.control,rules:o9(),render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(sF,(0,u._)((0,c._)({},e),{type:"number",placeholder:(0,B.__)("0","tutor")}))})})]})})}}))})]})}/* export default */const pE=pC;var pH={discountWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["4"] */.YK["4"],";"),requirementInput:/*#__PURE__*/(0,p/* .css */.AH)("width:30%;margin-left:",l/* .spacing["28"] */.YK["28"],";margin-top:",l/* .spacing["8"] */.YK["8"],";"),radioGroupWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;gap:",l/* .spacing["8"] */.YK["8"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/coupon-details/components/layout/Topbar.tsx + 1 modules
var pS=r(87365);// CONCATENATED MODULE: ./assets/react/v3/entries/coupon-details/components/layout/MainContent.tsx
function pN(){return/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,{children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:pF.content,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:pF.left,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(sQ,{}),/*#__PURE__*/(0,i/* .jsx */.Y)(ip,{}),/*#__PURE__*/(0,i/* .jsx */.Y)(s1,{}),/*#__PURE__*/(0,i/* .jsx */.Y)(pE,{}),/*#__PURE__*/(0,i/* .jsx */.Y)(pD,{})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,i/* .jsx */.Y)(lu,{})})]})})}var pF={content:/*#__PURE__*/(0,p/* .css */.AH)("min-height:calc(100vh - ",pS/* .TOPBAR_HEIGHT */.H,"px);width:100%;display:grid;grid-template-columns:1fr 342px;gap:",l/* .spacing["36"] */.YK["36"],";margin-top:",l/* .spacing["32"] */.YK["32"],";padding-inline:",l/* .spacing["8"] */.YK["8"],";",l/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr 280px;}",l/* .Breakpoint.mobile */.EA.mobile,"{grid-template-columns:1fr;}"),left:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;display:flex;flex-direction:column;gap:",l/* .spacing["16"] */.YK["16"],";")}}}]);