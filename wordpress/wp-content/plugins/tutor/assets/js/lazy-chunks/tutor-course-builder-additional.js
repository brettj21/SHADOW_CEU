"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["132"],{25631:function(e,t,r){r.d(t,{A:()=>d});/* import */var n=r(31601);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(76314);/* import */var o=/*#__PURE__*/r.n(i);// Imports
var s=o()(a());// Module
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
/* export default */const d=s},76314:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,i){if(typeof e==="string"){e=[[null,e,undefined]]}var o={};if(n){for(var s=0;s<this.length;s++){var d=this[s][0];if(d!=null){o[d]=true}}}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);if(n&&o[c[0]]){continue}if(typeof i!=="undefined"){if(typeof c[5]==="undefined"){c[5]=i}else{c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}");c[5]=i}}if(r){if(!c[2]){c[2]=r}else{c[1]="@media ".concat(c[2]," {").concat(c[1],"}");c[2]=r}}if(a){if(!c[4]){c[4]="".concat(a)}else{c[1]="@supports (".concat(c[4],") {").concat(c[1],"}");c[4]=a}}t.push(c)}};return t}},31601:function(e){e.exports=function(e){return e[1]}},35975:function(e,t,r){r.d(t,{A:()=>s});/* import */var n=r(92890);/* import */var a=r(10123);/* import */var i=r(619);/* import */var o=r(70551);/**
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
 */function s(e,t){var r;(0,o/* ["default"] */.A)(1,arguments);var s=(0,i/* ["default"] */.A)((0,a["default"])(e.start));var d=(0,a["default"])(e.end);var l=s.getTime();var c=d.getTime();if(l>=c){throw new RangeError("Invalid interval")}var u=[];var v=s;var f=Number((r=t===null||t===void 0?void 0:t.step)!==null&&r!==void 0?r:1);if(f<1||isNaN(f))throw new RangeError("`options.step` must be a number equal to or greater than 1");while(v.getTime()<=c){u.push((0,a["default"])(v));v=(0,n["default"])(v,f)}return u}},67901:function(e,t,r){r.r(t);r.d(t,{"default":()=>o});/* import */var n=r(94188);/* import */var a=r(10123);/* import */var i=r(70551);/**
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
 */function o(e,t){(0,i/* ["default"] */.A)(2,arguments);var r=(0,a["default"])(e);var o=(0,n/* ["default"] */.A)(t);r.setHours(o);return r}},67375:function(e,t,r){r.r(t);r.d(t,{"default":()=>o});/* import */var n=r(94188);/* import */var a=r(10123);/* import */var i=r(70551);/**
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
 */function o(e,t){(0,i/* ["default"] */.A)(2,arguments);var r=(0,a["default"])(e);var o=(0,n/* ["default"] */.A)(t);r.setMinutes(o);return r}},619:function(e,t,r){r.d(t,{A:()=>i});/* import */var n=r(10123);/* import */var a=r(70551);/**
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
 */function i(e){(0,a/* ["default"] */.A)(1,arguments);var t=(0,n["default"])(e);t.setSeconds(0,0);return t}},99972:function(e,t,r){/* import */var n=r(85072);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(97825);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(77659);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(55056);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(10540);/* import */var v=/*#__PURE__*/r.n(u);/* import */var f=r(41113);/* import */var p=/*#__PURE__*/r.n(f);/* import */var h=r(25631);var m={};m.styleTagTransform=p();m.setAttributes=c();m.insert=d().bind(null,"head");m.domAPI=o();m.insertStyleElement=v();var g=a()(h/* ["default"] */.A,m);/* unused export default */var b=h/* ["default"] */.A&&h/* ["default"].locals */.A.locals?h/* ["default"].locals */.A.locals:undefined},85072:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var i={};var o=[];for(var s=0;s<e.length;s++){var d=e[s];var l=n.base?d[0]+n.base:d[0];var c=i[l]||0;var u="".concat(l," ").concat(c);i[l]=c+1;var v=r(u);var f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(v!==-1){t[v].references++;t[v].updater(f)}else{var p=a(f,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:p,references:1})}o.push(u)}return o}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var i=n(e,a);return function e(e){e=e||[];for(var o=0;o<i.length;o++){var s=i[o];var d=r(s);t[d].references--}var l=n(e,a);for(var c=0;c<i.length;c++){var u=i[c];var v=r(u);if(t[v].references===0){t[v].updater();t.splice(v,1)}}i=l}}},77659:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},10540:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},55056:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},97825:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var i=r.sourceMap;if(i&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},41113:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},45063:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},74469:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},20108:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},86160:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},77628:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},59120:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},62646:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},85712:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},39550:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},36732:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},73788:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},18866:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},82465:function(e,t,r){e.exports=r.p+"js/images/not-found-2x-5f9812df.webp"},90368:function(e,t,r){e.exports=r.p+"js/images/not-found-4fa6c9c0.webp"},47403:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},99786:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},31602:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */T});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(55456);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(2445);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var o=r(70540);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_define_property.js
var s=r(50467);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Alert.tsx
var d=r(51550);// EXTERNAL MODULE: external "React"
var l=r(41594);// CONCATENATED MODULE: ./assets/react/v3/shared/components/ComponentErrorBoundary.tsx
class c extends l.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:a}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,i/* .jsxs */.FD)(d/* ["default"] */.A,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(a===null||a===void 0?void 0:a.message)||(a===null||a===void 0?void 0:a.toString())]}):null}return e}constructor(...e){super(...e),(0,s._)(this,"state",{hasError:false,error:null})}}(0,s._)(c,"defaultProps",{showError:true,componentName:"Component"});/* export default */const u=c;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/ContentRenderer.tsx
var v=e=>{var{component:t}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(u,{componentName:"content",children:t})};/* export default */const f=v;// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormCheckbox.tsx
var p=r(79489);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormDateInput.tsx
var h=r(31108);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var m=r(10878);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormImageInput.tsx
var g=r(13095);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInput.tsx
var b=r(35304);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormRadioGroup.tsx
var _=r(91072);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var y=r(59976);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSwitch.tsx
var w=r(39246);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var x=r(61046);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTimeInput.tsx
var A=r(27205);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var Y=r(83890);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormWPEditor.tsx
var k=r(37196);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var I=r(49785);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/FieldRenderer.tsx
var D=e=>{var{name:t,label:r,buttonText:o,helpText:s,infoText:l,placeholder:c,type:v,options:f,defaultValue:D,rules:C,form:M}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var T=e=>{var I=(()=>{switch(v){case"text":return/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"number":return/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",label:r,placeholder:c,helpText:s}));case"password":return/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"password",label:r,placeholder:c,helpText:s}));case"textarea":return/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"select":return/*#__PURE__*/(0,i/* .jsx */.Y)(y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:f||[],placeholder:c,helpText:s}));case"radio":return/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:f||[]}));case"checkbox":return/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,i/* .jsx */.Y)(w/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,helpText:s}));case"date":return/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"time":return/*#__PURE__*/(0,i/* .jsx */.Y)(A/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"image":return/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s,infoText:l}));case"video":return/*#__PURE__*/(0,i/* .jsx */.Y)(Y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s,infoText:l}));case"uploader":return/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s}));case"WPEditor":return/*#__PURE__*/(0,i/* .jsx */.Y)(k/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));default:return/*#__PURE__*/(0,i/* .jsxs */.FD)(d/* ["default"] */.A,{type:"danger",children:["Unsupported field type: ",v]})}})();return/*#__PURE__*/(0,i/* .jsx */.Y)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:I})};return/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .Controller */.xI,{name:t,control:M.control,defaultValue:D!==null&&D!==void 0?D:"",rules:C,render:e=>T(e)})};/* export default */const C=D;// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var M=e=>{var{section:t,namePrefix:r,form:s}=e;var{fields:d,contents:l}=(0,o/* .useCourseBuilderSlot */._)();var c=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=d;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=l;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[c().map(e=>/*#__PURE__*/(0,i/* .jsx */.Y)(C,(0,a._)((0,n._)({form:s},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(f,{component:r},t)})]})};/* export default */const T=M},74843:function(e,t,r){r.d(t,{A:()=>W});/* import */var n=r(41374);/* import */var a=r(71893);/* import */var i=r(55456);/* import */var o=r(84577);/* import */var s=r(2445);/* import */var d=r(17437);/* import */var l=r(12470);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(53429);/* import */var v=r(41594);/* import */var f=/*#__PURE__*/r.n(v);/* import */var p=r(49785);/* import */var h=r(42338);/* import */var m=r(76017);/* import */var g=r(79489);/* import */var b=r(31108);/* import */var _=r(35304);/* import */var y=r(59976);/* import */var w=r(61046);/* import */var x=r(27205);/* import */var A=r(4892);/* import */var Y=r(95729);/* import */var k=r(10840);/* import */var I=r(24219);/* import */var D=r(57148);/* import */var C=r(87018);/* import */var M=r(85398);/* import */var T=r(3620);/* import */var E=r(5081);/* import */var S=r(84133);/* import */var O=r(36154);/* import */var H=r(51298);/* import */var N=r(6192);function F(){var e=(0,o._)(["\n      box-shadow: ",";\n    "]);F=function t(){return e};return e}var K=(0,E/* .getCourseId */.p)();var L=e=>{var{onCancel:t,data:r,topicId:o,meetingId:d}=e;var{ref:c,isScrolling:f}=(0,C/* .useIsScrolling */.$)({defaultValue:true});var k=(0,T/* .useGoogleMeetDetailsQuery */.OJ)(d?d:"",o?o:"");var I=r!==null&&r!==void 0?r:k.data;var E,O,F;var L=(0,D/* .useFormWithGlobalError */.p)({defaultValues:{meeting_name:(E=I===null||I===void 0?void 0:I.post_title)!==null&&E!==void 0?E:"",meeting_summary:(O=I===null||I===void 0?void 0:I.post_content)!==null&&O!==void 0?O:"",meeting_start_date:(I===null||I===void 0?void 0:I.meeting_data.start_datetime)?(0,u["default"])(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_start_time:(I===null||I===void 0?void 0:I.meeting_data.start_datetime)?(0,u["default"])(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_end_date:(I===null||I===void 0?void 0:I.meeting_data.end_datetime)?(0,u["default"])(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_end_time:(I===null||I===void 0?void 0:I.meeting_data.end_datetime)?(0,u["default"])(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_timezone:(F=I===null||I===void 0?void 0:I.meeting_data.timezone)!==null&&F!==void 0?F:"",meeting_enrolledAsAttendee:(I===null||I===void 0?void 0:I.meeting_data.attendees)==="Yes"},shouldFocusError:true,mode:"onChange"});var W=(0,M/* .useSaveGoogleMeetMutation */.Cz)();var z=A/* .tutorConfig.timezones */.P.timezones;var P=Object.keys(z).map(e=>({label:z[e],value:e}));var B=e=>(0,n._)(function*(){if(!K){return}var r=yield W.mutateAsync((0,i._)((0,a._)({},I&&{"post-id":Number(I.ID),"event-id":I.meeting_data.id},o&&{topic_id:o}),{course_id:K,meeting_title:e.meeting_name,meeting_summary:e.meeting_summary,meeting_start_date:e.meeting_start_date,meeting_start_time:e.meeting_start_time,meeting_end_date:e.meeting_end_date,meeting_end_time:e.meeting_end_time,meeting_attendees_enroll_students:e.meeting_enrolledAsAttendee?"Yes":"No",meeting_timezone:e.meeting_timezone,attendees:e.meeting_enrolledAsAttendee?"Yes":"No"}));if(r.status_code===200||r.status_code===201){t();L.reset()}})();(0,v.useEffect)(()=>{if((0,H/* .isDefined */.O9)(I)){L.reset({meeting_name:I.post_title,meeting_summary:I.post_content,meeting_start_date:I.meeting_data.start_datetime?(0,u["default"])(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_start_time:I.meeting_data.start_datetime?(0,u["default"])(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_end_date:I.meeting_data.end_datetime?(0,u["default"])(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_end_time:I.meeting_data.end_datetime?(0,u["default"])(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_timezone:I.meeting_data.timezone,meeting_enrolledAsAttendee:I.meeting_data.attendees==="Yes"})}var e=setTimeout(()=>{L.setFocus("meeting_name")},250);return()=>{clearTimeout(e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[I]);return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.container,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:U.formWrapper,ref:c,children:/*#__PURE__*/(0,s/* .jsxs */.FD)(S/* ["default"] */.A,{when:!k.isLoading,fallback:/*#__PURE__*/(0,s/* .jsx */.Y)(m/* .LoadingOverlay */.p8,{}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_name",control:L.control,rules:{required:(0,l.__)("Name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Name","tutor"),placeholder:(0,l.__)("Enter meeting name","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_summary",control:L.control,rules:{required:(0,l.__)("Summary is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Summary","tutor"),placeholder:(0,l.__)("Enter meeting summary","tutor"),rows:3,enableResize:true}))}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:U.dateLabel,children:(0,l.__)("Meeting Start Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.meetingDateTime,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_start_date",control:L.control,rules:{required:(0,l.__)("Start date is required","tutor"),validate:N/* .invalidDateRule */.Kh},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("Start date","tutor"),disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_start_time",control:L.control,rules:{required:(0,l.__)("Start time is required","tutor"),validate:N/* .invalidTimeRule */.XA},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(x/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("Start time","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:U.dateLabel,children:(0,l.__)("Meeting End Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.meetingDateTime,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_end_date",control:L.control,rules:{required:(0,l.__)("End date is required","tutor"),validate:{invalidDate:N/* .invalidDateRule */.Kh,checkEndDate:e=>{var t=L.watch("meeting_start_date");var r=e;if(t&&r){return new Date(t)>new Date(r)?(0,l.__)("End date should be greater than start date","tutor"):undefined}return undefined}},deps:["meeting_start_date"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("End date","tutor"),disabledBefore:L.watch("meeting_start_date")||new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_end_time",control:L.control,rules:{required:(0,l.__)("End time is required","tutor"),validate:{invalidTime:N/* .invalidTimeRule */.XA,checkEndTime:e=>{var t=L.watch("meeting_start_date");var r=L.watch("meeting_start_time");var n=L.watch("meeting_end_date");var a=e;if(t&&n&&r&&a){return new Date("".concat(t," ").concat(r))>new Date("".concat(n," ").concat(a))?(0,l.__)("End time should be greater than start time","tutor"):undefined}return undefined}},deps:["meeting_start_time","meeting_start_date","meeting_end_date"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(x/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("End time","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_timezone",control:L.control,rules:{required:(0,l.__)("Timezone is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Timezone","tutor"),placeholder:(0,l.__)("Select timezone","tutor"),options:P,selectOnFocus:true,isSearchable:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_enrolledAsAttendee",control:L.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(g/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Add enrolled students as attendees","tutor")}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.buttonWrapper({isScrolling:f}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:t,children:(0,l.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{"data-cy":"save-google-meeting",loading:W.isPending,variant:"primary",size:"small",onClick:L.handleSubmit(B),children:I||d?(0,l.__)("Update Meeting","tutor"):(0,l.__)("Create Meeting","tutor")})]})]})};/* export default */const W=L;var U={container:/*#__PURE__*/(0,d/* .css */.AH)(O/* .styleUtils.display.flex */.x.display.flex("column"),"    background:",k/* .colorTokens.background.white */.I6.background.white,";padding-block:",k/* .spacing["12"] */.YK["12"],";border-radius:",k/* .borderRadius.card */.Vq.card,";box-shadow:",k/* .shadow.popover */.r7.popover,";",I/* .typography.caption */.I.caption("regular"),";* > label{font-size:",k/* .fontSize["15"] */.J["15"],";color:",k/* .colorTokens.text.title */.I6.text.title,";}"),formWrapper:/*#__PURE__*/(0,d/* .css */.AH)(O/* .styleUtils.display.flex */.x.display.flex("column"),";",O/* .styleUtils.overflowYAuto */.x.overflowYAuto,";padding-inline:",k/* .spacing["12"] */.YK["12"],";padding-bottom:",k/* .spacing["8"] */.YK["8"],";gap:",k/* .spacing["12"] */.YK["12"],";height:400px;"),dateLabel:/*#__PURE__*/(0,d/* .css */.AH)(I/* .typography.caption */.I.caption("medium"),"    color:",k/* .colorTokens.text.title */.I6.text.title,";"),meetingDateTimeWrapper:/*#__PURE__*/(0,d/* .css */.AH)(O/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",k/* .spacing["6"] */.YK["6"],";"),meetingDateTime:/*#__PURE__*/(0,d/* .css */.AH)(O/* .styleUtils.display.flex */.x.display.flex(),"    justify-content:space-between;align-items:flex-start;gap:",k/* .spacing["6"] */.YK["6"],";"),buttonWrapper:e=>{var{isScrolling:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)(O/* .styleUtils.display.flex */.x.display.flex(),"    padding-top:",k/* .spacing["8"] */.YK["8"],";padding-inline:",k/* .spacing["12"] */.YK["12"],";justify-content:flex-end;gap:",k/* .spacing["8"] */.YK["8"],";z-index:",k/* .zIndex.positive */.fE.positive,";",t&&(0,d/* .css */.AH)(F(),k/* .shadow.scrollable */.r7.scrollable))}}},78759:function(e,t,r){r.d(t,{A:()=>L});/* import */var n=r(41374);/* import */var a=r(71893);/* import */var i=r(55456);/* import */var o=r(84577);/* import */var s=r(2445);/* import */var d=r(17437);/* import */var l=r(12470);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(53429);/* import */var v=r(41594);/* import */var f=/*#__PURE__*/r.n(v);/* import */var p=r(49785);/* import */var h=r(42338);/* import */var m=r(76017);/* import */var g=r(31108);/* import */var b=r(35304);/* import */var _=r(61046);/* import */var y=r(27205);/* import */var w=r(10840);/* import */var x=r(24219);/* import */var A=r(57148);/* import */var Y=r(85398);/* import */var k=r(3620);/* import */var I=r(5081);/* import */var D=r(59976);/* import */var C=r(4892);/* import */var M=r(95729);/* import */var T=r(84133);/* import */var E=r(87018);/* import */var S=r(36154);/* import */var O=r(51298);/* import */var H=r(6192);function N(){var e=(0,o._)(["\n      box-shadow: ",";\n    "]);N=function t(){return e};return e}var F=(0,I/* .getCourseId */.p)();var K=e=>{var{onCancel:t,data:r,meetingHost:o,topicId:d,meetingId:c}=e;var f;var{ref:w,isScrolling:x}=(0,E/* .useIsScrolling */.$)({defaultValue:true});var I=(0,k/* .useZoomMeetingDetailsQuery */.gK)(c?c:"",d?d:"");var S=r!==null&&r!==void 0?r:I.data;var N,K;var L=(K=(N=S===null||S===void 0?void 0:S.meeting_starts_at)!==null&&N!==void 0?N:S===null||S===void 0?void 0:S.meeting_data.start_time)!==null&&K!==void 0?K:"";var U,z,P,B,R,q;var j=(0,A/* .useFormWithGlobalError */.p)({defaultValues:{meeting_name:(U=S===null||S===void 0?void 0:S.post_title)!==null&&U!==void 0?U:"",meeting_summary:(z=S===null||S===void 0?void 0:S.post_content)!==null&&z!==void 0?z:"",meeting_date:L?(0,u["default"])(new Date(L),M/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_time:L?(0,u["default"])(new Date(L),M/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_duration:(S===null||S===void 0?void 0:S.meeting_data.duration)?String(S===null||S===void 0?void 0:S.meeting_data.duration):"40",meeting_duration_unit:(P=S===null||S===void 0?void 0:S.meeting_data.duration_unit)!==null&&P!==void 0?P:"min",meeting_timezone:(B=S===null||S===void 0?void 0:S.meeting_data.timezone)!==null&&B!==void 0?B:"",auto_recording:(R=S===null||S===void 0?void 0:(f=S.meeting_data.settings)===null||f===void 0?void 0:f.auto_recording)!==null&&R!==void 0?R:"none",meeting_password:(q=S===null||S===void 0?void 0:S.meeting_data.password)!==null&&q!==void 0?q:"",meeting_host:Object.keys(o).length===1?Object.keys(o)[0]:""},shouldFocusError:true,mode:"onChange"});var V=(0,Y/* .useSaveZoomMeetingMutation */.s1)();var G=C/* .tutorConfig.timezones */.P.timezones;var Q=Object.keys(G).map(e=>({label:G[e],value:e}));var Z=Object.keys(o).map(e=>({label:o[e],value:e}));var X=e=>(0,n._)(function*(){if(!F){return}var r=yield V.mutateAsync((0,i._)((0,a._)({},S&&{meeting_id:Number(S.ID)},d&&{topic_id:Number(d)}),{course_id:F,meeting_title:e.meeting_name,meeting_summary:e.meeting_summary,meeting_date:e.meeting_date,meeting_time:e.meeting_time,meeting_duration:Number(e.meeting_duration),meeting_duration_unit:e.meeting_duration_unit,meeting_timezone:e.meeting_timezone,auto_recording:e.auto_recording,meeting_password:e.meeting_password,click_form:d?"course_builder":"metabox",meeting_host:e.meeting_host}));if(r.data){t();j.reset()}})();(0,v.useEffect)(()=>{if((0,O/* .isDefined */.O9)(S)){var e;var t;j.reset({meeting_name:S.post_title,meeting_summary:S.post_content,meeting_date:L?(0,u["default"])(new Date(L),M/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_time:L?(0,u["default"])(new Date(L),M/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_duration:String(S.meeting_data.duration),meeting_duration_unit:S.meeting_data.duration_unit,meeting_timezone:S.meeting_data.timezone,auto_recording:(t=(e=S.meeting_data.settings)===null||e===void 0?void 0:e.auto_recording)!==null&&t!==void 0?t:"none",meeting_password:S.meeting_data.password,meeting_host:S.meeting_data.host_id})}var r=setTimeout(()=>{j.setFocus("meeting_name")},250);return()=>{clearTimeout(r)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[S]);return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:W.container,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:W.formWrapper,ref:w,children:/*#__PURE__*/(0,s/* .jsxs */.FD)(T/* ["default"] */.A,{when:!I.isLoading,fallback:/*#__PURE__*/(0,s/* .jsx */.Y)(m/* .LoadingOverlay */.p8,{}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_name",control:j.control,rules:{required:(0,l.__)("Name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Name","tutor"),placeholder:(0,l.__)("Enter meeting name","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_summary",control:j.control,rules:{required:(0,l.__)("Summary is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Summary","tutor"),placeholder:(0,l.__)("Enter meeting summary","tutor"),rows:3,enableResize:true}))}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:W.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_date",control:j.control,rules:{required:(0,l.__)("Date is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(g/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Date","tutor"),placeholder:(0,l.__)("Enter meeting date","tutor"),disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_time",control:j.control,rules:{required:(0,l.__)("Time is required","tutor"),validate:H/* .invalidTimeRule */.XA},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,l.__)("Start time","tutor")}))}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:W.meetingTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_duration",control:j.control,rules:{required:(0,l.__)("Duration is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Duration","tutor"),placeholder:(0,l.__)("Duration","tutor"),type:"number",selectOnFocus:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_duration_unit",control:j.control,rules:{required:(0,l.__)("Duration unit is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(D/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:/*#__PURE__*/(0,s/* .jsx */.Y)("span",{children:" "}),options:[{label:(0,l.__)("Minutes","tutor"),value:"min"},{label:(0,l.__)("Hours","tutor"),value:"hr"}]}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_timezone",control:j.control,rules:{required:(0,l.__)("Timezone is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(D/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Timezone","tutor"),placeholder:(0,l.__)("Select timezone","tutor"),options:Q,selectOnFocus:true,isSearchable:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"auto_recording",control:j.control,rules:{required:(0,l.__)("Auto recording is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(D/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Auto Recording","tutor"),placeholder:(0,l.__)("Select auto recording option","tutor"),options:[{label:(0,l.__)("No recordings","tutor"),value:"none"},{label:(0,l.__)("Local","tutor"),value:"local"},{label:(0,l.__)("Cloud","tutor"),value:"cloud"}]}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_password",control:j.control,rules:{required:(0,l.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Password","tutor"),placeholder:(0,l.__)("Enter meeting password","tutor"),type:"password",isPassword:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .Controller */.xI,{name:"meeting_host",control:j.control,rules:{required:(0,l.__)("Meeting host is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(D/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,l.__)("Meeting Host","tutor"),placeholder:(0,l.__)("Enter meeting host","tutor"),options:Z,disabled:(0,O/* .isDefined */.O9)(S),selectOnFocus:true,isSearchable:true}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:W.buttonWrapper({isScrolling:x}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:t,children:(0,l.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{"data-cy":"save-zoom-meeting",loading:V.isPending,variant:"primary",size:"small",onClick:j.handleSubmit(X),children:S||c?(0,l.__)("Update Meeting","tutor"):(0,l.__)("Create Meeting","tutor")})]})]})};/* export default */const L=K;var W={container:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    background:",w/* .colorTokens.background.white */.I6.background.white,";padding-block:",w/* .spacing["12"] */.YK["12"],";border-radius:",w/* .borderRadius.card */.Vq.card,";box-shadow:",w/* .shadow.popover */.r7.popover,";",x/* .typography.caption */.I.caption("regular"),";* > label{font-size:",w/* .fontSize["15"] */.J["15"],";color:",w/* .colorTokens.text.title */.I6.text.title,";}"),formWrapper:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";",S/* .styleUtils.overflowYAuto */.x.overflowYAuto,";padding-inline:",w/* .spacing["12"] */.YK["12"],";padding-bottom:",w/* .spacing["8"] */.YK["8"],";gap:",w/* .spacing["12"] */.YK["12"],";height:400px;"),meetingDateTimeWrapper:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",w/* .spacing["6"] */.YK["6"],";"),meetingTimeWrapper:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),"    justify-content:space-between;align-items:flex-start;gap:",w/* .spacing["6"] */.YK["6"],";"),buttonWrapper:e=>{var{isScrolling:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),"    padding-top:",w/* .spacing["8"] */.YK["8"],";padding-inline:",w/* .spacing["12"] */.YK["12"],";justify-content:flex-end;gap:",w/* .spacing["8"] */.YK["8"],";z-index:",w/* .zIndex.positive */.fE.positive,";",t&&(0,d/* .css */.AH)(N(),w/* .shadow.scrollable */.r7.scrollable))}}},67915:function(e,t,r){r.d(t,{A:()=>g});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(47767);/* import */var l=r(42338);/* import */var c=r(90209);/* import */var u=r(95729);/* import */var v=r(10840);/* import */var f=r(24219);/* import */var p=r(84133);function h(){var e=(0,n._)(["\n      transform: rotate(180deg);\n    "]);h=function t(){return e};return e}var m=e=>{var{title:t,backUrl:r,rightButton:n,isExternalUrl:i}=e;var s=(0,d/* .useNavigate */.Zp)();var v=()=>{if(r){if(i){window.location.href=r;return}s(r)}else{s(-1)}};return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:b.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:b.left,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{isIconOnly:true,size:"small",variant:"text","aria-label":(0,o.__)("Back","tutor"),buttonCss:b.button({isRTL:u/* .isRTL */.V8}),onClick:v,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:"back",width:32,height:32})})}),/*#__PURE__*/(0,a/* .jsx */.Y)("h6",{css:b.title,children:t})]}),n]})};/* export default */const g=m;var b={wrapper:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),left:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["16"] */.YK["16"],";"),button:e=>{var{isRTL:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("padding:0;border-radius:",v/* .borderRadius["2"] */.Vq["2"],";",t&&(0,i/* .css */.AH)(h()))},title:/*#__PURE__*/(0,i/* .css */.AH)(f/* .typography.heading6 */.I.heading6("medium"),";")}},14238:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(2445);/* import */var o=r(46306);/* import */var s=r(21094);/* import */var d=r(42338);/* import */var l=r(90209);/* import */var c=r(95729);/* import */var u=r(10840);/* import */var v=r(84133);/* import */var f=r(78635);/* import */var p=r(17437);/* import */var h=r(12470);/* import */var m=/*#__PURE__*/r.n(h);/* import */var g=r(49785);/* import */var b=r(47767);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:m}=(0,s/* .useCourseNavigator */._)();var _=(0,b/* .useNavigate */.Zp)();var y=(0,f/* .useCurrentPath */.G)(o/* ["default"] */.A);var x=(0,g/* .useFormContext */.xW)();var A=r.findIndex(e=>e.path===y);var Y=Math.max(-1,A-1);var k=Math.min(r.length,A+1);var I=r[Y];var D=r[k];var C=x.watch("post_title");var M=()=>{m(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===Y){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(I.path)};var T=()=>{m(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(D.path)};return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{when:A>0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"tertiary",iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,p/* .css */.AH)("padding:",u/* .spacing["4"] */.YK["4"],";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:Y<0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{name:!c/* .isRTL */.V8?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{when:A<r.length-1&&C,children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{variant:"tertiary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,{name:!c/* .isRTL */.V8?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:T,buttonCss:/*#__PURE__*/(0,p/* .css */.AH)("padding:",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["12"] */.YK["12"],";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:!C||k>=r.length,children:(0,h.__)("Next","tutor")})})]})};/* export default */const y=_;var w={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",u/* .spacing["16"] */.YK["16"],";")}},44917:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */ti});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var n=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(55456);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(2445);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var o=r(17437);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var s=r(97665);// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var d=r(87496);// EXTERNAL MODULE: external "wp.i18n"
var l=r(12470);// EXTERNAL MODULE: external "React"
var c=r(41594);var u=/*#__PURE__*/r.n(c);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var v=r(49785);// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var f=r(47767);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var p=r(84577);// EXTERNAL MODULE: ./assets/react/v3/shared/config/styles.ts
var h=r(10840);// EXTERNAL MODULE: ./assets/react/v3/shared/config/typography.ts
var m=r(24219);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/Show.tsx
var g=r(84133);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var b=r(90209);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Tooltip.tsx
var _=r(92229);// CONCATENATED MODULE: ./assets/react/v3/shared/atoms/Box.tsx
function y(){var e=(0,p._)(["\n      border: 1px solid ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,p._)(["\n      border-bottom: 1px solid ",";\n      padding: "," ",";\n    "]);w=function t(){return e};return e}var x=/*#__PURE__*/u().forwardRef((e,t)=>{var{children:r,className:n,bordered:a=false,wrapperCss:o}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:t,className:n,css:[k.wrapper(a),o],children:r})});x.displayName="Box";var A=/*#__PURE__*/u().forwardRef((e,t)=>{var{children:r,className:n,separator:a=false,tooltip:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{ref:t,className:n,css:k.title(a),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:r}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{content:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"info",width:20,height:20})})})]})});A.displayName="BoxTitle";var Y=/*#__PURE__*/u().forwardRef((e,t)=>{var{children:r,className:n}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:t,className:n,css:k.subtitle,children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:r})})});Y.displayName="BoxSubtitle";var k={wrapper:e=>/*#__PURE__*/(0,o/* .css */.AH)("background-color:",h/* .colorTokens.background.white */.I6.background.white,";border-radius:",h/* .borderRadius["8"] */.Vq["8"],";padding:",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["20"] */.YK["20"]," ",h/* .spacing["20"] */.YK["20"],";",e&&(0,o/* .css */.AH)(y(),h/* .colorTokens.stroke.divider */.I6.stroke.divider)),title:e=>/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.body */.I.body("medium"),";color:",h/* .colorTokens.text.title */.I6.text.title,";display:flex;gap:",h/* .spacing["4"] */.YK["4"],";align-items:center;",e&&(0,o/* .css */.AH)(w(),h/* .colorTokens.stroke.divider */.I6.stroke.divider,h/* .spacing["12"] */.YK["12"],h/* .spacing["20"] */.YK["20"]),"    & > div{height:20px;svg{color:",h/* .colorTokens.icon.hints */.I6.icon.hints,";}}& > span{display:inline-block;}"),subtitle:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.caption */.I.caption(),";color:",h/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var I=r(76017);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ProBadge.tsx
var D=r(91196);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/EmptyState.tsx
var C=r(19595);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Tabs.tsx
var M=r(28109);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var T=r(42338);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
var E=r(95729);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var S=r(36154);// CONCATENATED MODULE: ./assets/react/v3/shared/components/modals/CertificatePreviewModal.tsx
var O=e=>{var{certificates:t,selectedCertificate:r,currentCertificate:n,onSelectCertificate:a,closeModal:o}=e;var[s,d]=(0,c.useState)(r);var[u,v]=(0,c.useState)(n);var f=(0,c.useRef)(null);var p=t.findIndex(e=>e.key===u.key);var h=Math.max(-1,p-1);var m=Math.min(t.length,p+1);(0,c.useEffect)(()=>{var e=e=>{if(e.key==="ArrowLeft"){w("previous")}else if(e.key==="ArrowRight"){w("next")}else if(e.key==="Enter"){y(u)}else if(e.key==="Escape"){o({action:"CLOSE"})}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[p,t]);(0,c.useEffect)(()=>{if(f.current){f.current.focus()}},[]);var y=e=>{if(e.key===s){return}a(e);d(e.key)};var w=e=>{if(e==="previous"&&p>0){v(t[h])}else if(e==="next"&&p<t.length-1){v(t[m])}};return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.container,children:[u&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:N.content,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.certificateAndActions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:N.certificate,src:u.preview_src,alt:u.name}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.actionsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{placement:"right",content:(0,l.__)("Close","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{ref:f,type:"button",css:[N.actionButton,N.closeButton],onClick:()=>{o({action:"CLOSE"})},children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"cross",width:40,height:40})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:u.edit_url,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{placement:"right",content:(0,l.__)("Edit in Certificate Builder","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[N.actionButton,N.editButton],onClick:()=>{window.open(e,"_blank","noopener")},children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"edit",width:40,height:40})})})})]})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:N.navigatorWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:N.navigator,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[N.actionButton,N.navigatorButton],onClick:()=>w("previous"),disabled:h<0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:!E/* .isRTL */.V8?"chevronLeft":"chevronRight",width:40,height:40})}),/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{variant:"primary",onClick:()=>{y(u);o({action:"CONFIRM"})},disabled:s===u.key,children:s===u.key?(0,l.__)("Selected","tutor"):(0,l.__)("Select","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[N.actionButton,N.navigatorButton],onClick:()=>w("next"),disabled:m>t.length-1,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:!E/* .isRTL */.V8?"chevronRight":"chevronLeft",width:40,height:40})})]})})]})};/* export default */const H=O;var N={container:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:100%;",S/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;align-items:center;gap:",h/* .spacing["16"] */.YK["16"],";position:relative;"),content:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;align-items:center;object-fit:contain;max-width:80vw;max-height:calc(100vh - 200px);width:100%;height:100%;"),certificateAndActions:/*#__PURE__*/(0,o/* .css */.AH)("position:relative;",S/* .styleUtils.display.flex */.x.display.flex(),";justify-content:center;align-items:center;gap:",h/* .spacing["20"] */.YK["20"],";height:100%;"),certificate:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:100%;object-fit:contain;"),actionsWrapper:/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;top:0;right:-",h/* .spacing["56"] */.YK["56"],";bottom:0;",S/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:space-between;",h/* .Breakpoint.smallMobile */.EA.smallMobile,"{right:-",h/* .spacing["32"] */.YK["32"],";}"),actionButton:/*#__PURE__*/(0,o/* .css */.AH)("place-self:center start;",S/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;&:focus,&:active,&:hover{background:none;}svg{color:",h/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";transition:color 0.3s ease-in-out;}"),closeButton:/*#__PURE__*/(0,o/* .css */.AH)("place-self:center start;"),editButton:/*#__PURE__*/(0,o/* .css */.AH)("place-self:center end;"),navigatorWrapper:/*#__PURE__*/(0,o/* .css */.AH)(),navigator:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";gap:",h/* .spacing["16"] */.YK["16"],";justify-content:center;background:",h/* .colorTokens.background.white */.I6.background.white,";padding:",h/* .spacing["12"] */.YK["12"],";border-radius:",h/* .borderRadius["8"] */.Vq["8"],";"),navigatorButton:/*#__PURE__*/(0,o/* .css */.AH)("svg{color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";}:disabled{cursor:not-allowed;svg{color:",h/* .colorTokens.icon.hints */.I6.icon.hints,";}}")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/modals/Modal.tsx
var F=r(1448);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var K=r(4892);// EXTERNAL MODULE: ./assets/react/v3/shared/controls/For.tsx
var L=r(8501);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var W=r(85713);// EXTERNAL MODULE: ./assets/react/v3/public/images/not-found-2x.webp
var U=r(82465);// EXTERNAL MODULE: ./assets/react/v3/public/images/not-found.webp
var z=r(90368);// CONCATENATED MODULE: ./assets/react/v3/shared/components/certificate/CertificateCard.tsx
function P(){var e=(0,p._)(["\n      [data-overlay] {\n        background: ",";\n        opacity: 0.1;\n      }\n    "]);P=function t(){return e};return e}var B=e=>{var{selectedCertificate:t="",data:r,orientation:n,onSelectCertificate:a,onPreviewCertificate:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:q.wrapper({isSelected:t===r.key,isLandScape:n==="landscape"}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{"data-overlay":true,onClick:()=>a(r.key),onKeyDown:e=>{if(e.key==="Enter"||e.key===" "){a(r.key)}}}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.preview_src,fallback:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:q.emptyCard,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"outlineNone",width:49,height:49}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,l.__)("None","tutor")})]}),children:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:q.certificateImage,src:e,alt:r.name})}}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.preview_src||r.key!==t,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{"data-footer-actions":true,css:q.footerWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.preview_src,children:/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{variant:"secondary",isOutlined:true,size:"small",onClick:()=>o(r),children:(0,l.__)("Preview","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.key!==t,children:/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{variant:"primary",size:"small",onClick:()=>a(r.key),children:(0,l.__)("Select","tutor")})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:q.checkIcon({isSelected:t===r.key}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"checkFilledWhite",width:32,height:32})})]})};/* export default */const R=B;var q={wrapper:e=>{var{isSelected:t=false,isLandScape:r=false}=e;return/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.centeredFlex */.x.centeredFlex,";background-color:",h/* .colorTokens.surface.courseBuilder */.I6.surface.courseBuilder,";max-height:",r?"154px":"217px",";min-height:",r?"154px":"217px",";height:100%;position:relative;outline:",t?"2px":"1px"," solid ",t?h/* .colorTokens.stroke.brand */.I6.stroke.brand:h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",h/* .borderRadius.card */.Vq.card,";transition:all 0.15s ease-in-out;[data-overlay]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:",h/* .borderRadius.card */.Vq.card,";}",t&&(0,o/* .css */.AH)(P(),h/* .colorTokens.brand.blue */.I6.brand.blue),"    &:hover,&:focus-within{border-color:",h/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-footer-actions]{opacity:1;}[data-overlay]{background:",h/* .colorTokens.brand.blue */.I6.brand.blue,";opacity:0.1;}}")},emptyCard:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.flexCenter */.x.flexCenter(),";flex-direction:column;height:100%;width:100%;gap:",h/* .spacing["8"] */.YK["8"],";",m/* .typography.caption */.I.caption("medium"),";svg{color:",h/* .colorTokens.color.black["20"] */.I6.color.black["20"],";}"),certificateImage:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:100%;object-fit:contain;border-radius:",h/* .borderRadius.card */.Vq.card,";"),footerWrapper:/*#__PURE__*/(0,o/* .css */.AH)("opacity:0;position:absolute;left:0px;right:0px;bottom:0px;",S/* .styleUtils.flexCenter */.x.flexCenter(),";align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";padding-block:",h/* .spacing["8"] */.YK["8"],";background:",h/* .colorTokens.bg.white */.I6.bg.white,";border-bottom-left-radius:",h/* .borderRadius.card */.Vq.card,";border-bottom-right-radius:",h/* .borderRadius.card */.Vq.card,";"),checkIcon:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,o/* .css */.AH)("opacity:",t?1:0,";position:absolute;top:-14px;right:-14px;border-bottom-left-radius:",h/* .borderRadius.card */.Vq.card,";svg{color:",h/* .colorTokens.icon.brand */.I6.icon.brand,";}")}};// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/certificates-2x.webp
const j=r.p+"js/images/certificates-2x-22b8cc4e.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/certificates.webp
const V=r.p+"js/images/certificates-4d7368cf.webp";// CONCATENATED MODULE: ./assets/react/v3/shared/components/certificate/CertificateEmptyState.tsx
var G=!!K/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var Q=()=>{if(G){return null}return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:X.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:X.placeholderImage,src:V,srcSet:"".concat(V," 1x, ").concat(j," 2x"),alt:(0,l.__)("Pro Placeholder","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:X.featureAndActionWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("h5",{css:X.title,children:(0,l.__)("Award Students with Custom Certificates","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:X.featuresWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:(0,l.__)("Celebrate success with personalized certificates. Recognize student achievements with unique designs that inspire and motivate students.","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:X.features,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:X.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:X.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,l.__)("Design personalized certificates that highlight their accomplishments and boost their confidence.","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:X.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:X.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,l.__)("Inspire them with a touch of credibility and recognition tailored just for them.","tutor")})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:X.actionsButton,children:/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{as:"a",variant:"primary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"crown",width:24,height:24}),href:K/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,target:"_blank",rel:"noreferrer",children:(0,l.__)("Get Tutor LMS Pro","tutor")})})]})};/* export default */const Z=Q;var X={emptyState:/*#__PURE__*/(0,o/* .css */.AH)("padding-bottom:",h/* .spacing["12"] */.YK["12"],";",S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["20"] */.YK["20"],";"),placeholderImage:e=>{var{notFound:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("max-width:100%;width:100%;height:",t?"189px":"312px;",";object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";")},featureAndActionWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.YK["12"],";"),title:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.heading5 */.I.heading5("medium"),"    color:",h/* .colorTokens.text.primary */.I6.text.primary,";"),featuresWithTitle:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    max-width:500px;width:100%;gap:",h/* .spacing["8"] */.YK["8"],";",m/* .typography.body */.I.body("regular"),";"),features:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),feature:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),"    gap:",h/* .spacing["12"] */.YK["12"],";color:",h/* .colorTokens.text.title */.I6.text.title,";text-wrap:pretty;"),checkIcon:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;color:",h/* .colorTokens.text.success */.I6.text.success,";"),actionsButton:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.flexCenter */.x.flexCenter(),"    margin-top:",h/* .spacing["4"] */.YK["4"],";")};// CONCATENATED MODULE: ./assets/react/v3/shared/components/certificate/Certificate.tsx
function $(){var e=(0,p._)(["\n      grid-template-columns: 1fr;\n      place-items: center;\n    "]);$=function t(){return e};return e}var J=!!K/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var ee=(0,W/* .isAddonEnabled */.GR)(E/* .Addons.TUTOR_CERTIFICATE */.oW.TUTOR_CERTIFICATE);var et=e=>{var{isSidebarVisible:t=true,currentCertificateKey:r,onSelect:n,certificateTemplates:a}=e;var s=a!==null&&a!==void 0?a:[];var d=s.filter(e=>e.is_default);var[u,v]=(0,c.useState)("templates");var[f,p]=(0,c.useState)("landscape");var[y,w]=(0,c.useState)(r);var{showModal:x}=(0,F/* .useModal */.h)();var A=s.some(e=>e.orientation==="landscape"&&(u==="templates"?e.is_default:!e.is_default));var Y=s.some(e=>e.orientation==="portrait"&&(u==="templates"?e.is_default:!e.is_default));(0,c.useEffect)(()=>{if(s.length){if(d.length===0){v("custom_certificates")}var e=s.some(e=>e.orientation==="landscape");if(!e&&f==="landscape"){p("portrait")}}if(r==="none"){w(r);return}var t=s.find(e=>e.key===r);if(t){if(f!==t.orientation){p(t.orientation)}v(t.is_default?"templates":"custom_certificates");w(t.key)}// eslint-disable-next-line react-hooks/exhaustive-deps
},[r,s]);var k=s.filter(e=>e.orientation===f&&(u==="templates"?e===null||e===void 0?void 0:e.is_default:!(e===null||e===void 0?void 0:e.is_default)));var I=e=>{v(e);var t=s.some(t=>t.orientation==="landscape"&&(e==="templates"?t.is_default:!t.is_default));var r=s.some(t=>t.orientation==="portrait"&&(e==="templates"?t.is_default:!t.is_default));p(e=>{if(t&&r||!t&&!r){return e}return t?"landscape":"portrait"})};var D=e=>{p(e)};var C=e=>{n(e);w(e)};var T=e=>{x({component:H,props:{certificates:s,selectedCertificate:r,currentCertificate:e,onSelectCertificate:e=>{C(e.key)}}})};var O=[...d.length?[{label:(0,l.__)("Templates","tutor"),value:"templates"}]:[],{label:E/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?(0,l.__)("Custom Certificates","tutor"):(0,l.__)("Certificates","tutor"),value:"custom_certificates"}];return/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:J&&ee,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(Z,{}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)(g/* ["default"] */.A,{when:ee,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:en.tabs,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(M/* ["default"] */.A,{wrapperCss:en.tabsWrapper,tabList:O,activeTab:u,onChange:I}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:en.orientation,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(g/* ["default"] */.A,{when:A&&Y,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{delay:200,content:(0,l.__)("Landscape","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[S/* .styleUtils.resetButton */.x.resetButton,en.orientationButton({isActive:f==="landscape"})],onClick:()=>D("landscape"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:f==="landscape"?"landscapeFilled":"landscape",width:32,height:32})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{delay:200,content:(0,l.__)("Portrait","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[S/* .styleUtils.resetButton */.x.resetButton,en.orientationButton({isActive:f==="portrait"})],onClick:()=>D("portrait"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:f==="portrait"?"portraitFilled":"portrait",width:32,height:32})})})]})})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:en.certificateWrapper({hasCertificates:k.length>0,isSidebarVisible:t}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:s.length&&(d.length===0||u==="templates"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(R,{selectedCertificate:y,onSelectCertificate:C,onPreviewCertificate:e=>T(e),data:{key:"none",name:(0,l.__)("None","tutor"),preview_src:"",background_src:"",orientation:"landscape",url:""},orientation:f})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:k.length>0,fallback:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:en.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:en.placeholderImage({notFound:true}),src:z,srcSet:"".concat(z," 1x, ").concat(U," 2x"),alt:(0,l.__)("Not Found","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:en.featureAndActionWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.body */.I.body("medium"),"                      color:",h/* .colorTokens.text.subdued */.I6.text.subdued,";"),children:(0,l.__)("You didn’t create any certificate yet!","tutor")})})]}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(L/* ["default"] */.A,{each:k,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(R,{selectedCertificate:y,onSelectCertificate:C,data:e,orientation:f,onPreviewCertificate:T},e.key)})})]})]})})};/* export default */const er=et;var en={tabs:/*#__PURE__*/(0,o/* .css */.AH)("position:relative;"),tabsWrapper:/*#__PURE__*/(0,o/* .css */.AH)("button{min-width:auto;}"),certificateWrapper:e=>{var{hasCertificates:t,isSidebarVisible:r}=e;return/*#__PURE__*/(0,o/* .css */.AH)("display:grid;grid-template-columns:repeat(",r?3:4,",1fr);gap:",h/* .spacing["16"] */.YK["16"],";padding-top:",h/* .spacing["12"] */.YK["12"],";",!t&&(0,o/* .css */.AH)($())," ",h/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr 1fr;}")},orientation:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),"    gap:",h/* .spacing["8"] */.YK["8"],";position:absolute;height:32px;right:0;bottom:",h/* .spacing["4"] */.YK["4"],";"),orientationButton:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("display:inline-flex;color:",t?h/* .colorTokens.icon.brand */.I6.icon.brand:h/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",h/* .borderRadius["4"] */.Vq["4"],";&:focus,&:active,&:hover{background:none;color:",t?h/* .colorTokens.icon.brand */.I6.icon.brand:h/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",h/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}")},emptyState:/*#__PURE__*/(0,o/* .css */.AH)("padding-block:",h/* .spacing["16"] */.YK["16"]," ",h/* .spacing["12"] */.YK["12"],";",S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["20"] */.YK["20"],";"),placeholderImage:e=>{var{notFound:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("max-width:100%;width:100%;height:",t?"189px":"312px;",";object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";")},featureAndActionWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.YK["12"],";"),actionsButton:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.flexCenter */.x.flexCenter(),"    margin-top:",h/* .spacing["4"] */.YK["4"],";")};// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var ea=r(31105);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var ei=r(35198);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useAnimation.tsx
var eo=r(47617);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useDebounce.ts
var es=r(68118);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useSelectKeyboardNavigation.ts
var ed=r(67198);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var el=r(66279);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormCoursePrerequisites.tsx
function ec(){var e=(0,p._)(["\n      background-color: ",";\n      border-color: ",";\n    "]);ec=function t(){return e};return e}function eu(){var e=(0,p._)(["\n        background-color: ",";\n        border-color: ",";\n      "]);eu=function t(){return e};return e}var ev=e=>{var{field:t,fieldState:r,options:o,onChange:s=W/* .noop */.lQ,handleSearchOnChange:d,label:u,placeholder:v="",disabled:f,readOnly:p,loading:h,isSearchable:_=false,helpText:y}=e;var w;var x=(w=t.value)!==null&&w!==void 0?w:[];var A=x.map(e=>String(e.id));var Y=(0,c.useRef)(null);var k=(0,c.useRef)(null);var[D,M]=(0,c.useState)(false);var[T,E]=(0,c.useState)("");var S=(0,es/* .useDebounce */.d)(T);var O=o.filter(e=>e.title.toLowerCase().includes(S.toLowerCase())&&!A.includes(String(e.id)));(0,c.useEffect)(()=>{if(d){d(S)}else{// Handle local filter
}},[S,d]);var{activeIndex:H,setActiveIndex:N}=(0,ed/* .useSelectKeyboardNavigation */.v)({options:O.map(e=>({label:e.title,value:e})),isOpen:D,selectedValue:null,onSelect:e=>{t.onChange([...x,e.value]);s([...x,e.value]);M(false);E("")},onClose:()=>{M(false);E("");E("")}});var F=e=>{if(Array.isArray(x)){var r=x.filter(t=>t.id!==e);t.onChange(r);s(r)}};(0,c.useEffect)(()=>{if(D&&H>=0&&k.current){k.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[D,H]);return/*#__PURE__*/(0,i/* .jsx */.Y)(el/* ["default"] */.A,{fieldState:r,field:t,label:u,disabled:f,readOnly:p,helpText:y,children:e=>{var{css:r}=e,o=(0,ea._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ep.mainWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:Y,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ep.inputWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ep.leftIcon,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},o),{onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(true)}if(e.key==="Tab"){M(false)}},className:"tutor-input-field",css:[r,ep.input],autoComplete:"off",readOnly:p||!_,placeholder:v,value:T,onChange:e=>{E(e.target.value)}}))]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:x.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!h,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{size:"small",emptyStateImage:z,emptyStateImage2x:U,imageAltText:(0,l.__)("Illustration of a no course selected","tutor"),title:(0,l.__)("No course selected","tutor"),description:(0,l.__)("Select a course to add as a prerequisite.","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ep.courseList,children:/*#__PURE__*/(0,i/* .jsx */.Y)(L/* ["default"] */.A,{each:x,children:(e,t)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ep.courseCard({onPopover:false}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ep.imageWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:e.image,alt:e.title,css:ep.image})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ep.cardContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:ep.cardTitle,children:e.title}),/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:m/* .typography.tiny */.I.tiny(),children:e.id})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:ep.removeButton,"data-visually-hidden":true,onClick:()=>F(e.id),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"times",width:14,height:14})})]},t)})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(ei/* ["default"] */.A,{triggerRef:Y,isOpen:D,animationType:eo/* .AnimationType.slideDown */.J6.slideDown,dependencies:[O.length],closePopover:()=>{M(false);E("")},children:/*#__PURE__*/(0,i/* .jsx */.Y)("ul",{css:[ep.options],children:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:O.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:ep.emptyOption,children:/*#__PURE__*/(0,i/* .jsx */.Y)("p",{children:(0,l.__)("No courses found","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(L/* ["default"] */.A,{each:O,children:(e,r)=>/*#__PURE__*/(0,i/* .jsx */.Y)("li",{ref:H===r?k:null,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:ep.courseCard({onPopover:true,isActive:H===r}),onClick:()=>{t.onChange([...x,e]);s([...x,e]);M(false);E("")},onMouseOver:()=>N(r),onMouseLeave:()=>r!==H&&N(-1),onFocus:()=>N(r),"aria-selected":H===r,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ep.imageWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:e.image,alt:e.title,css:ep.image})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ep.cardContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:ep.cardTitle,children:e.title}),/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:m/* .typography.tiny */.I.tiny(),children:e.id})]})]})},e.id)})})})})]})}})};/* export default */const ef=ev;var ep={mainWrapper:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;"),inputWrapper:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),leftIcon:/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;left:",h/* .spacing["8"] */.YK["8"],";top:",h/* .spacing["8"] */.YK["8"],";color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.body */.I.body(),";width:100%;padding-right:",h/* .spacing["32"] */.YK["32"],";padding-left:",h/* .spacing["36"] */.YK["36"],";",S/* .styleUtils.textEllipsis */.x.textEllipsis,";border:1px solid ",h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";&.tutor-input-field{padding-right:",h/* .spacing["32"] */.YK["32"],";padding-left:",h/* .spacing["36"] */.YK["36"],";}"),courseList:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";max-height:256px;height:100%;margin-top:",h/* .spacing["8"] */.YK["8"],";",S/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),options:/*#__PURE__*/(0,o/* .css */.AH)("z-index:",h/* .zIndex.dropdown */.fE.dropdown,";background-color:",h/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",h/* .shadow.popover */.r7.popover,";padding:",h/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";",S/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),courseCard:e=>{var{onPopover:t=false,isActive:r=false}=e;return/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";width:100%;cursor:",t?"pointer":"default",";position:relative;padding:",h/* .spacing["8"] */.YK["8"],";border:1px solid transparent;border-radius:",h/* .borderRadius.card */.Vq.card,";display:grid;grid-template-columns:76px 1fr;gap:",h/* .spacing["10"] */.YK["10"],";align-items:center;background-color:",h/* .colorTokens.background.white */.I6.background.white,";[data-visually-hidden]{opacity:0;}",r&&(0,o/* .css */.AH)(ec(),h/* .colorTokens.background.hover */.I6.background.hover,h/* .colorTokens.stroke["default"] */.I6.stroke["default"]),"    &:hover{background-color:",h/* .colorTokens.background.hover */.I6.background.hover,";",!t&&(0,o/* .css */.AH)(eu(),h/* .colorTokens.background.white */.I6.background.white,h/* .colorTokens.stroke["default"] */.I6.stroke["default"]),"      [data-visually-hidden]{opacity:1;}}",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},imageWrapper:/*#__PURE__*/(0,o/* .css */.AH)("height:42px;"),image:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:100%;border-radius:",h/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),cardContent:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;flex-direction:column;"),cardTitle:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.small */.I.small("medium"),";",S/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";"),removeButton:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";position:absolute;top:50%;right:",h/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",h/* .borderRadius.circle */.Vq.circle,";background:",h/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",h/* .colorTokens.background.white */.I6.background.white,";}svg{color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";}:hover{svg{color:",h/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",h/* .shadow.focus */.r7.focus,";}:focus-visible{opacity:1;}"),emptyOption:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.caption */.I.caption("medium"),";padding:",h/* .spacing["8"] */.YK["8"],";text-align:center;")};// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFileUploader.tsx
var eh=r(10878);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormInputWithContent.tsx
var em=r(49201);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var eg=r(61046);// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/prerequisites-2x.webp
const eb=r.p+"js/images/prerequisites-2x-dd66630e.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/prerequisites.webp
const e_=r.p+"js/images/prerequisites-63084e41.webp";// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/CoursePrerequisitesEmptyState.tsx
var ey=!!K/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var ew=()=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eA.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:eA.placeholderImage,src:e_,srcSet:"".concat(e_," 1x, ").concat(eb," 2x"),alt:(0,l.__)("Pro Placeholder","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eA.featureAndActionWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eA.featuresWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:(0,l.__)("Guide Students with Course Prerequisites","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!ey,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eA.features,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eA.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:eA.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,l.__)("Easily set prerequisites to structure your courses and guide student progress.","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eA.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:eA.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,l.__)("Offer customized learning journeys by setting multiple prerequisites for any course.","tutor")})]})]})})]})})]})};/* export default */const ex=ew;var eA={emptyState:/*#__PURE__*/(0,o/* .css */.AH)("padding:",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["24"] */.YK["24"]," ",h/* .spacing["12"] */.YK["12"],";",S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["20"] */.YK["20"],";border:1px solid ",h/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",h/* .borderRadius.card */.Vq.card,";background-color:",h/* .colorTokens.background.white */.I6.background.white,";"),placeholderImage:/*#__PURE__*/(0,o/* .css */.AH)("max-width:100%;width:100%;height:112px;object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";"),featureAndActionWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.YK["12"],";padding-inline:",h/* .spacing["4"] */.YK["4"],";"),featuresWithTitle:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";",m/* .typography.caption */.I.caption("medium"),";"),features:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),feature:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.small */.I.small(),";",S/* .styleUtils.display.flex */.x.display.flex(),"    gap:",h/* .spacing["12"] */.YK["12"],";color:",h/* .colorTokens.text.title */.I6.text.title,";text-wrap:pretty;"),checkIcon:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;color:",h/* .colorTokens.text.success */.I6.text.success,";"),actionsButton:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.flexCenter */.x.flexCenter(),"    margin-top:",h/* .spacing["4"] */.YK["4"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/utils/utils.ts
var eY=r(5081);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var ek=r(41374);// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js
var eI=r(53429);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/ConfirmationPopover.tsx
var eD=r(95759);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/services/course.ts
var eC=r(85398);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/GoogleMeetForm.tsx
var eM=r(74843);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/GoogleMeetCard.tsx
function eT(){var e=(0,p._)(["\n      background-color: ",";\n      [data-visually-hidden] {\n        opacity: 1;\n      }\n      .date-time {\n        background: none;\n      }\n    "]);eT=function t(){return e};return e}var eE=(0,eY/* .getCourseId */.p)();var eS=e=>{var{data:t,topicId:r}=e;var[n,a]=(0,c.useState)(false);var[o,s]=(0,c.useState)(false);var d=(0,eC/* .useDeleteGoogleMeetMutation */.sx)(String(eE),{"post-id":t.ID,"event-id":t.meeting_data.id});var u=(0,c.useRef)(null);var v=(0,c.useRef)(null);var{meeting_data:f,post_title:p}=t;var m=()=>(0,ek._)(function*(){var e=yield d.mutateAsync();if(e.status_code===200){s(false)}})();var g=(0,eI["default"])(new Date(f.start_datetime),E/* .DateFormats.day */.UA.day);var _=(0,eI["default"])(new Date(f.start_datetime),E/* .DateFormats.month */.UA.month);var y=(0,eI["default"])(new Date(f.start_datetime),E/* .DateFormats.year */.UA.year);var[w,x=""]=(0,eI["default"])(new Date(f.start_datetime),E/* .DateFormats.hoursMinutes */.UA.hoursMinutes).split(" ");return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eH.card({isPopoverOpen:o||n}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eH.cardTitle,children:p}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eH.cardContent,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:eH.inlineContent,children:[(0,l.__)("Start time","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eH.hyphen}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eH.meetingDateTime,className:"date-time",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(g," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(_," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(y,", ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(w," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(x," ")})]})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eH.buttonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{variant:"secondary",size:"small",type:"button",onClick:()=>{window.open(f.meet_link,"_blank","noopener")},children:(0,l.__)("Start Meeting","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eH.actions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{ref:u,type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>a(true),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"edit",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>{s(true)},ref:v,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"delete",width:24,height:24})})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(ei/* ["default"] */.A,{isOpen:n,triggerRef:u,closePopover:()=>a(false),maxWidth:"306px",children:/*#__PURE__*/(0,i/* .jsx */.Y)(eM/* ["default"] */.A,{data:t,topicId:r,onCancel:()=>{a(false)}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(eD/* ["default"] */.A,{isOpen:o,triggerRef:v,closePopover:W/* .noop */.lQ,maxWidth:"258px",title:(0,l.sprintf)((0,l.__)('Delete "%s"',"tutor"),p),message:(0,l.__)("Are you sure you want to delete this meeting? This cannot be undone.","tutor"),animationType:eo/* .AnimationType.slideUp */.J6.slideUp,isLoading:d.isPending,confirmButton:{text:(0,l.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,l.__)("Cancel","tutor"),variant:"text"},onConfirmation:()=>(0,ek._)(function*(){yield m()})(),onCancel:()=>{s(false)}})]})};/* export default */const eO=eS;var eH={card:e=>{var{isPopoverOpen:t=false}=e;return/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    padding:",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"],";gap:",h/* .spacing["8"] */.YK["8"],";border-radius:",h/* .borderRadius["6"] */.Vq["6"],";transition:background 0.3s ease;[data-visually-hidden]{opacity:0;transition:opacity 0.3s ease-in-out;}",t&&(0,o/* .css */.AH)(eT(),h/* .colorTokens.background.hover */.I6.background.hover),"    &:hover,&:focus-within{background-color:",h/* .colorTokens.background.hover */.I6.background.hover,";[data-visually-hidden]{opacity:1;}.date-time{background:none;}}",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},cardTitle:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.caption */.I.caption("medium"),"    color:",h/* .colorTokens.text.title */.I6.text.title,";"),cardContent:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),hyphen:/*#__PURE__*/(0,o/* .css */.AH)("width:5px;height:2px;background:",h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";"),inlineContent:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.small */.I.small("regular")," ",S/* .styleUtils.display.flex */.x.display.flex(),"    align-items:center;gap:",h/* .spacing["6"] */.YK["6"],";"),meetingDateTime:/*#__PURE__*/(0,o/* .css */.AH)("padding:",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["6"] */.YK["6"],";border-radius:",h/* .borderRadius["4"] */.Vq["4"],";background:",h/* .colorTokens.background.status.processing */.I6.background.status.processing,";transition:background 0.3s ease-in-out;"),buttonWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";margin-top:",h/* .spacing["8"] */.YK["8"],";justify-content:space-between;"),actions:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",h/* .spacing["8"] */.YK["8"],";")};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/ZoomMeetingForm.tsx
var eN=r(78759);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/meeting/ZoomMeetingCard.tsx
function eF(){var e=(0,p._)(["\n      background-color: ",";\n      [data-visually-hidden] {\n        opacity: 1;\n      }\n      .date-time {\n        background: none;\n      }\n    "]);eF=function t(){return e};return e}var eK=(0,eY/* .getCourseId */.p)();var eL=e=>{var{data:t,meetingHost:r,topicId:n}=e;var[a,o]=(0,c.useState)(false);var[s,d]=(0,c.useState)(false);var u=(0,eC/* .useDeleteZoomMeetingMutation */.aN)(String(eK));var v=(0,c.useRef)(null);var f=(0,c.useRef)(null);var{ID:p,meeting_data:m,post_title:_,meeting_starts_at:y}=t;var w=()=>(0,ek._)(function*(){var e=yield u.mutateAsync(p);if(e.success){d(false)}})();var x=(0,eI["default"])(new Date(y),E/* .DateFormats.day */.UA.day);var A=(0,eI["default"])(new Date(y),E/* .DateFormats.month */.UA.month);var Y=(0,eI["default"])(new Date(y),E/* .DateFormats.year */.UA.year);var[k,I=""]=(0,eI["default"])(new Date(y),E/* .DateFormats.hoursMinutes */.UA.hoursMinutes).split(" ");return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.card({isPopoverOpen:s||a}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eU.cardTitle,children:_}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.cardContent,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:eU.inlineContent,children:[(0,l.__)("Start time","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eU.hyphen}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.meetingDateTime,className:"date-time",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(x," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(A," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(Y,", ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(k," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(I," ")})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:m.id,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.inlineContent,children:[(0,l.__)("Meeting Token","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eU.hyphen}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:m.id})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:m.password,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.inlineContent,children:[(0,l.__)("Password","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eU.hyphen}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:m.password})]})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.buttonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{variant:"secondary",size:"small",type:"button",onClick:()=>{window.open(m.start_url,"_blank","noopener")},children:(0,l.__)("Start Meeting","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eU.actions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{ref:v,type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>{o(true)},children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"edit",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>d(true),ref:f,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"delete",width:24,height:24})})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(ei/* ["default"] */.A,{isOpen:a,triggerRef:v,closePopover:()=>o(false),maxWidth:"306px",children:/*#__PURE__*/(0,i/* .jsx */.Y)(eN/* ["default"] */.A,{data:t,meetingHost:r,topicId:n,onCancel:()=>{o(false)}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(eD/* ["default"] */.A,{isOpen:s,triggerRef:f,closePopover:W/* .noop */.lQ,maxWidth:"258px",title:(0,l.sprintf)((0,l.__)('Delete "%s"',"tutor"),_),message:(0,l.__)("Are you sure you want to delete this meeting? This cannot be undone.","tutor"),animationType:eo/* .AnimationType.slideUp */.J6.slideUp,isLoading:u.isPending,confirmButton:{text:(0,l.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,l.__)("Cancel","tutor"),variant:"text"},onConfirmation:()=>(0,ek._)(function*(){yield w()})(),onCancel:()=>{d(false)}})]})};/* export default */const eW=eL;var eU={card:e=>{var{isPopoverOpen:t=false}=e;return/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    padding:",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"],";gap:",h/* .spacing["8"] */.YK["8"],";border-radius:",h/* .borderRadius["6"] */.Vq["6"],";transition:background 0.3s ease;[data-visually-hidden]{opacity:0;transition:opacity 0.3s ease-in-out;}",t&&(0,o/* .css */.AH)(eF(),h/* .colorTokens.background.hover */.I6.background.hover),"    &:hover,&:focus-within{background-color:",h/* .colorTokens.background.hover */.I6.background.hover,";[data-visually-hidden]{opacity:1;}.date-time{background:none;}}",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},cardTitle:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.caption */.I.caption("medium"),"    color:",h/* .colorTokens.text.title */.I6.text.title,";"),cardContent:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),hyphen:/*#__PURE__*/(0,o/* .css */.AH)("width:5px;height:2px;background:",h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";"),inlineContent:/*#__PURE__*/(0,o/* .css */.AH)(m/* .typography.small */.I.small("regular")," ",S/* .styleUtils.display.flex */.x.display.flex(),"    align-items:center;gap:",h/* .spacing["6"] */.YK["6"],";"),meetingDateTime:/*#__PURE__*/(0,o/* .css */.AH)("padding:",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["6"] */.YK["6"],";border-radius:",h/* .borderRadius["4"] */.Vq["4"],";background:",h/* .colorTokens.background.status.processing */.I6.background.status.processing,";transition:background 0.3s ease-in-out;"),buttonWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";margin-top:",h/* .spacing["8"] */.YK["8"],";justify-content:space-between;"),actions:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",h/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/live-class-2x.webp
const ez=r.p+"js/images/live-class-2x-41b3c501.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/live-class.webp
const eP=r.p+"js/images/live-class-1a583217.webp";// EXTERNAL MODULE: ./assets/react/v3/shared/hoc/withVisibilityControl.tsx
var eB=r(85123);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/usePortalPopover.tsx
var eR=r(94654);// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/components/additional/LiveClass.tsx
function eq(){var e=(0,p._)(["\n      border: 1px solid ",";\n    "]);eq=function t(){return e};return e}function ej(){var e=(0,p._)(["\n      border-bottom: 1px solid ",";\n    "]);ej=function t(){return e};return e}function eV(){var e=(0,p._)(["\n      padding: "," ",";\n    "]);eV=function t(){return e};return e}var eG=!!K/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var eQ=(0,W/* .isAddonEnabled */.GR)(E/* .Addons.TUTOR_ZOOM_INTEGRATION */.oW.TUTOR_ZOOM_INTEGRATION);var eZ=(0,W/* .isAddonEnabled */.GR)(E/* .Addons.TUTOR_GOOGLE_MEET_INTEGRATION */.oW.TUTOR_GOOGLE_MEET_INTEGRATION);var eX=(0,eY/* .getCourseId */.p)();var e$=()=>{var e=(0,s/* .useQueryClient */.jE)();var t=e.getQueryData(["CourseDetails",eX]);var r;var n=(r=t===null||t===void 0?void 0:t.zoom_meetings)!==null&&r!==void 0?r:[];var a;var d=(a=t===null||t===void 0?void 0:t.zoom_users)!==null&&a!==void 0?a:{};var u;var v=(u=t===null||t===void 0?void 0:t.google_meet_meetings)!==null&&u!==void 0?u:[];var[f,p]=(0,c.useState)(null);var h=(0,c.useRef)(null);var m=(0,c.useRef)(null);if(eG&&!eQ&&!eZ){return null}return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:e0.liveClass,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:e0.label,children:[(0,l.__)("Schedule Live Class","tutor"),!eG&&/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,l.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:eG,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{size:"small",removeBorder:false,emptyStateImage:eP,emptyStateImage2x:ez,imageAltText:(0,l.__)("Tutor LMS PRO","tutor"),title:(0,l.__)("Bring your courses to life and engage students with interactive live classes.","tutor"),actions:/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{size:"small",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"crown",width:24,height:24}),onClick:()=>{window.open(K/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,l.__)("Get Tutor LMS Pro","tutor")})}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)(g/* ["default"] */.A,{when:eQ||eZ,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:eQ,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:e0.meetingsWrapper({hasMeeting:n.length>0}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(L/* ["default"] */.A,{each:n,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e0.meeting({hasMeeting:n.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(eW,{data:e,meetingHost:d})},e.ID)}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e0.meetingsFooter({hasMeeting:n.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{"data-cy":"create-zoom-meeting",variant:"secondary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"zoomColorize",width:24,height:24}),buttonCss:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;"),onClick:()=>p("zoom"),ref:h,children:(0,l.__)("Create a Zoom Meeting","tutor")})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:eZ,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:e0.meetingsWrapper({hasMeeting:v.length>0}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(L/* ["default"] */.A,{each:v,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e0.meeting({hasMeeting:v.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(eO,{data:e})},e.ID)}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e0.meetingsFooter({hasMeeting:v.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(T/* ["default"] */.A,{"data-cy":"create-google-meet-link",variant:"secondary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"googleMeetColorize",width:24,height:24}),buttonCss:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;"),onClick:()=>p("google_meet"),ref:m,children:(0,l.__)("Create a Google Meet Link","tutor")})})]})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(ei/* ["default"] */.A,{triggerRef:h,isOpen:f==="zoom",closePopover:W/* .noop */.lQ,animationType:eo/* .AnimationType.slideUp */.J6.slideUp,closeOnEscape:false,placement:E/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?eR/* .POPOVER_PLACEMENTS.BOTTOM */.zA.BOTTOM:eR/* .POPOVER_PLACEMENTS.ABSOLUTE_CENTER */.zA.ABSOLUTE_CENTER,children:/*#__PURE__*/(0,i/* .jsx */.Y)(eN/* ["default"] */.A,{data:null,meetingHost:d,onCancel:()=>{p(null)}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(ei/* ["default"] */.A,{triggerRef:m,isOpen:f==="google_meet",closePopover:W/* .noop */.lQ,animationType:eo/* .AnimationType.slideUp */.J6.slideUp,closeOnEscape:false,placement:E/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?eR/* .POPOVER_PLACEMENTS.BOTTOM */.zA.BOTTOM:eR/* .POPOVER_PLACEMENTS.ABSOLUTE_CENTER */.zA.ABSOLUTE_CENTER,arrow:false,children:/*#__PURE__*/(0,i/* .jsx */.Y)(eM/* ["default"] */.A,{data:null,onCancel:()=>{p(null)}})})]})};/* export default */const eJ=(0,eB/* .withVisibilityControl */.M)(e$);var e0={label:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.inlineFlex */.x.display.inlineFlex(),"    align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";",m/* .typography.body */.I.body(),"    color:",h/* .colorTokens.text.title */.I6.text.title,";"),liveClass:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),meetingsWrapper:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    background-color:",h/* .colorTokens.background.white */.I6.background.white,";border-radius:",h/* .borderRadius.card */.Vq.card,";",t&&(0,o/* .css */.AH)(eq(),h/* .colorTokens.stroke["default"] */.I6.stroke["default"]))},meeting:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("padding:",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["8"] */.YK["8"],";",t&&(0,o/* .css */.AH)(ej(),h/* .colorTokens.stroke.divider */.I6.stroke.divider))},meetingsFooter:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("width:100%;",t&&(0,o/* .css */.AH)(eV(),h/* .spacing["12"] */.YK["12"],h/* .spacing["8"] */.YK["8"]))}};// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var e1=r(31602);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/CanvasHead.tsx
var e4=r(67915);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/components/layouts/Navigator.tsx
var e2=r(14238);// EXTERNAL MODULE: ./assets/react/v3/entries/course-builder/config/route-configs.ts + 1 modules
var e6=r(45748);// EXTERNAL MODULE: ./assets/react/v3/shared/hooks/useVisibilityControl.tsx
var e5=r(91612);// EXTERNAL MODULE: ./assets/react/v3/shared/services/course.ts
var e7=r(85973);// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/attachments-2x.webp
const e8=r.p+"js/images/attachments-2x-9f304876.webp";// CONCATENATED MODULE: ./assets/react/v3/public/images/pro-placeholders/attachments.webp
const e3=r.p+"js/images/attachments-e63eb8d8.webp";// CONCATENATED MODULE: ./assets/react/v3/entries/course-builder/pages/Additional.tsx
var e9=!!K/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var te=(0,eY/* .getCourseId */.p)();var tt=(0,W/* .isAddonEnabled */.GR)(E/* .Addons.TUTOR_PREREQUISITES */.oW.TUTOR_PREREQUISITES);var tr=(0,W/* .isAddonEnabled */.GR)(E/* .Addons.TUTOR_COURSE_ATTACHMENTS */.oW.TUTOR_COURSE_ATTACHMENTS);var tn=(0,W/* .isAddonEnabled */.GR)(E/* .Addons.TUTOR_CERTIFICATE */.oW.TUTOR_CERTIFICATE);var ta=()=>{var e;var t=(0,f/* .useNavigate */.Zp)();(0,c.useEffect)(()=>{if(!te){t(e6/* .CourseBuilderRouteConfigs.Home.buildLink */.P.Home.buildLink(),{replace:true})}},[t]);var r=(0,v/* .useFormContext */.xW)();var o=(0,s/* .useQueryClient */.jE)();var u=(0,d/* .useIsFetching */.C)({queryKey:["CourseDetails",te]});var p=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS);var h=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE);var m=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.qP.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION);var b=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES);var _=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS);var y=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.CERTIFICATES */.qP.COURSE_BUILDER.ADDITIONAL.CERTIFICATES);var w=(0,e5/* ["default"] */.A)(E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.ATTACHMENTS */.qP.COURSE_BUILDER.ADDITIONAL.ATTACHMENTS);var k=o.getQueryData(["CourseDetails",te]);var M=(k===null||k===void 0?void 0:(e=k.course_prerequisites)===null||e===void 0?void 0:e.map(e=>String(e.id)))||[];var T=(0,e7/* .useCourseListQuery */.TM)({params:{exclude:[String(te),...M],limit:-1},isEnabled:!!tt&&!u});if(!te){return null}if(!te){return null}var S=r.watch("tutor_course_certificate_template");var O;var H=(O=k===null||k===void 0?void 0:k.course_certificates_templates)!==null&&O!==void 0?O:[];var N=p||h||m||b||_;var F=N||!e9||y&&tn;var K=!e9||[E/* .Addons.TUTOR_PREREQUISITES */.oW.TUTOR_PREREQUISITES,E/* .Addons.TUTOR_COURSE_ATTACHMENTS */.oW.TUTOR_COURSE_ATTACHMENTS,E/* .Addons.TUTOR_ZOOM_INTEGRATION */.oW.TUTOR_ZOOM_INTEGRATION,E/* .Addons.TUTOR_GOOGLE_MEET_INTEGRATION */.oW.TUTOR_GOOGLE_MEET_INTEGRATION].some(W/* .isAddonEnabled */.GR);var L=e=>{r.setValue("tutor_course_certificate_template",e,{shouldDirty:true})};var U=()=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.sidebarContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e9||tt,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.label,children:[(0,l.__)("Course Prerequisites","tutor"),!e9&&/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,l.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e9&&tt,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(ex,{}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_prerequisites",control:r.control,render:e=>{var t;return/*#__PURE__*/(0,i/* .jsx */.Y)(ef,(0,a._)((0,n._)({},e),{placeholder:(0,l.__)("Search courses for prerequisites","tutor"),options:((t=T.data)===null||t===void 0?void 0:t.results)||[],isSearchable:true,loading:T.isLoading||!!u&&!e.field.value}))}})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e9||w&&tr,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.label,children:[(0,l.__)("Attachments","tutor"),!e9&&/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,l.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e9&&tr,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e9,children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{size:"small",removeBorder:false,emptyStateImage:e3,emptyStateImage2x:e8,// prettier-ignore
    title:(0,l.__)("Provide additional resources like downloadable files and reference materials.","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_attachments",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eh/* ["default"] */.A,(0,a._)((0,n._)({},e),{buttonText:(0,l.__)("Upload Attachment","tutor"),selectMultiple:true}))})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(eJ,{visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.SCHEDULE_LIVE_CLASS */.qP.COURSE_BUILDER.ADDITIONAL.SCHEDULE_LIVE_CLASS}),/*#__PURE__*/(0,i/* .jsx */.Y)(e1/* ["default"] */.A,{section:"Additional.bottom_of_sidebar",form:r})]});return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.wrapper({showSidebar:K&&F}),children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.leftSide,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(e4/* ["default"] */.A,{title:(0,l.__)("Additional","tutor"),backUrl:"/curriculum"}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:F,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.formWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:N,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x,{bordered:true,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.titleAndSub,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(A,{children:(0,l.__)("Overview","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(Y,{children:(0,l.__)("Provide essential course information to attract and inform potential students","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.fieldsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_benefits",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,l.__)("What Will I Learn?","tutor"),placeholder:(0,l.__)("Define the key takeaways from this course (list one benefit per line)","tutor"),rows:2,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_target_audience",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,l.__)("Target Audience","tutor"),// prettier-ignore
    placeholder:(0,l.__)("Specify the target audience that will benefit the most from the course. (One Line Per target audience)","tutor"),rows:2,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:m,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.totalCourseDuration,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_duration_hours",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(em/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",label:(0,l.__)("Total Course Duration","tutor"),placeholder:"0",contentPosition:"right",content:(0,l.__)("hour(s)","tutor"),loading:!!u&&!e.field.value,visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.qP.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_duration_minutes",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(em/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",placeholder:"0",contentPosition:"right",content:(0,l.__)("min(s)","tutor"),loading:!!u&&!e.field.value,visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.qP.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION}))})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_material_includes",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,l.__)("Materials Included","tutor"),// prettier-ignore
    placeholder:(0,l.__)("A list of assets you will be providing for the students in this course (One Per Line)","tutor"),rows:4,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Controller */.xI,{name:"course_requirements",control:r.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,l.__)("Requirements/Instructions","tutor"),// prettier-ignore
    placeholder:(0,l.__)("Additional requirements or special instructions for the students (One Per Line)","tutor"),rows:2,enableResize:true,loading:!!u&&!e.field.value,visibilityKey:E/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS}))})]})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e9||y&&tn,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x,{bordered:true,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.titleAndSub,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)(A,{css:to.titleWithBadge,children:[(0,l.__)("Certificate","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e9,children:/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,l.__)("Pro","tutor")})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e9&&tn,children:/*#__PURE__*/(0,i/* .jsx */.Y)(Y,{children:(0,l.__)("Select a certificate to award your learners.","tutor")})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!u,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(er,{isSidebarVisible:K,currentCertificateKey:S,onSelect:L,certificateTemplates:H})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(e1/* ["default"] */.A,{section:"Additional.after_certificates",form:r})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!F&&K,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:to.formWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(U,{})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:E/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,i/* .jsx */.Y)(e2/* ["default"] */.A,{})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:K&&F,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:to.sidebar,children:/*#__PURE__*/(0,i/* .jsx */.Y)(U,{})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!E/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,i/* .jsx */.Y)(e2/* ["default"] */.A,{})})]})};/* export default */const ti=ta;var to={wrapper:e=>{var{showSidebar:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("display:grid;grid-template-columns:",t?"1fr 338px":"1fr",";width:100%;",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr;gap:",h/* .spacing["24"] */.YK["24"],";}")},leftSide:/*#__PURE__*/(0,o/* .css */.AH)("padding:",h/* .spacing["32"] */.YK["32"]," ",h/* .spacing["32"] */.YK["32"]," ",h/* .spacing["32"] */.YK["32"]," 0;",S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["32"] */.YK["32"],";",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding:0;padding-top:",h/* .spacing["16"] */.YK["16"],";gap:",h/* .spacing["16"] */.YK["16"],";}"),formWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["24"] */.YK["24"],";"),titleAndSub:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["4"] */.YK["4"],";margin-bottom:",h/* .spacing["20"] */.YK["20"],";"),titleWithBadge:/*#__PURE__*/(0,o/* .css */.AH)("span{",S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";}"),fieldsWrapper:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["24"] */.YK["24"],";"),totalCourseDuration:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),"    align-items:end;gap:",h/* .spacing["8"] */.YK["8"],";& > div{flex:1;}"),sidebar:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    padding:",h/* .spacing["32"] */.YK["32"]," 0 ",h/* .spacing["32"] */.YK["32"]," ",h/* .spacing["32"] */.YK["32"],";border-left:1px solid ",h/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - (",h/* .headerHeight */.$A,"px + ",h/* .footerHeight */.P3,"px));gap:",h/* .spacing["16"] */.YK["16"],";",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding:0;padding-top:",h/* .spacing["24"] */.YK["24"],";border-left:none;border-top:1px solid ",h/* .colorTokens.stroke.divider */.I6.stroke.divider,";}"),label:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.inlineFlex */.x.display.inlineFlex(),"    align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";",m/* .typography.body */.I.body("medium"),"    color:",h/* .colorTokens.text.title */.I6.text.title,";margin-bottom:",h/* .spacing["8"] */.YK["8"],";"),sidebarContent:/*#__PURE__*/(0,o/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["16"] */.YK["16"],";")}},3620:function(e,t,r){r.d(t,{$2:()=>H,$n:()=>x,Cx:()=>Y,Id:()=>T,K3:()=>I,OJ:()=>U,R6:()=>h,SS:()=>P,V1:()=>y,VT:()=>C,V_:()=>F,_u:()=>R,gK:()=>L,me:()=>b,pR:()=>S,sC:()=>m});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(97286);/* import */var o=r(97665);/* import */var s=r(94747);/* import */var d=r(12470);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(45549);/* import */var u=r(95729);/* import */var v=r(53127);/* import */var f=r(37381);/* import */var p=r(85713);var h=(e,t,r,i,o)=>{var s,d;var l;return(0,n._)((0,a._)((0,n._)((0,a._)((0,n._)((0,a._)((0,n._)({},t&&{lesson_id:t}),{topic_id:r,title:e.title,description:e.description,thumbnail_id:(l=(s=e.thumbnail)===null||s===void 0?void 0:s.id)!==null&&l!==void 0?l:null}),e.video?Object.fromEntries(Object.entries(e.video).map(t=>{var[r,n]=t;var a;return["video[".concat(r,"]"),r==="source"&&!n?"-1":r==="poster_url"&&!((a=e.video)===null||a===void 0?void 0:a.poster)?"":n]})):{}),{"video[runtime][hours]":e.duration.hour||0,"video[runtime][minutes]":e.duration.minute||0,"video[runtime][seconds]":e.duration.second||0}),(0,p/* .isAddonEnabled */.GR)(u/* .Addons.TUTOR_COURSE_PREVIEW */.oW.TUTOR_COURSE_PREVIEW)&&{_is_preview:e.lesson_preview?1:0}),{tutor_attachments:(e.tutor_attachments||[]).map(e=>e.id)}),(0,p/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="unlock_by_date"&&{"content_drip_settings[unlock_date]":e.content_drip_settings.unlock_date||""},(0,p/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="specific_days"&&{"content_drip_settings[after_xdays_of_enroll]":e.content_drip_settings.after_xdays_of_enroll||"0"},(0,p/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="after_finishing_prerequisites"&&{"content_drip_settings[prerequisites]":((d=e.content_drip_settings.prerequisites)===null||d===void 0?void 0:d.length)?e.content_drip_settings.prerequisites:""},Object.fromEntries(o.map(t=>{return[t,e[t]||""]})))};var m=(e,t,r,i,o)=>{var s;return(0,n._)((0,a._)((0,n._)({},t&&{assignment_id:t}),{topic_id:r,title:e.title,summary:e.summary,attachments:(e.attachments||[]).map(e=>e.id),"assignment_option[time_duration][time]":e.time_duration.time,"assignment_option[time_duration][value]":e.time_duration.value,"assignment_option[deadline_from_start]":e.deadline_from_start?"1":"0","assignment_option[total_mark]":e.total_mark,"assignment_option[pass_mark]":e.pass_mark,"assignment_option[upload_files_limit]":e.upload_files_limit,"assignment_option[upload_file_size_limit]":e.upload_file_size_limit,"assignment_option[is_retry_allowed]":e.is_retry_allowed?"1":"0"}),e.is_retry_allowed&&{"assignment_option[attempts_allowed]":e.attempts_allowed},(0,p/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="unlock_by_date"&&{"content_drip_settings[unlock_date]":e.content_drip_settings.unlock_date||""},(0,p/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="specific_days"&&{"content_drip_settings[after_xdays_of_enroll]":e.content_drip_settings.after_xdays_of_enroll||"0"},(0,p/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="after_finishing_prerequisites"&&{"content_drip_settings[prerequisites]":((s=e.content_drip_settings.prerequisites)===null||s===void 0?void 0:s.length)?e.content_drip_settings.prerequisites:""},Object.fromEntries(o.map(t=>{return[t,e[t]||""]})))};var g=e=>{return v/* .wpAjaxInstance.get */.b.get(f/* ["default"].GET_COURSE_CONTENTS */.A.GET_COURSE_CONTENTS,{params:{course_id:e}})};var b=e=>{return(0,i/* .useQuery */.I)({queryKey:["Topic",e],queryFn:()=>g(e).then(e=>{return e.data.map(e=>(0,a._)((0,n._)({},e),{contents:e.contents.map(e=>(0,a._)((0,n._)({},e),{post_type:e.quiz_type?"tutor_h5p_quiz":e.post_type}))}))}),enabled:!!e})};var _=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].SAVE_TOPIC */.A.SAVE_TOPIC,e)};var y=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:_,onSuccess:r=>{if(r.data){t({message:(0,d.__)("Topic saved successfully","tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)})}})};var w=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].DELETE_TOPIC */.A.DELETE_TOPIC,{topic_id:e})};var x=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:w,onSuccess:(n,a)=>{if(n.status_code===200){r({message:(0,d.__)(n.message,"tutor"),type:"success"});t.setQueryData(["Topic",e],e=>{var t=JSON.parse(JSON.stringify(e));return t.filter(e=>String(e.id)!==String(a))})}},onError:e=>{r({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)});t.invalidateQueries({queryKey:["Topic"]})}})};var A=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(f/* ["default"].GET_LESSON_DETAILS */.A.GET_LESSON_DETAILS,{params:{topic_id:t,lesson_id:e}})};var Y=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["Lesson",e,t],queryFn:()=>A(e,t).then(e=>e.data),enabled:!!e&&!!t})};var k=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].SAVE_LESSON */.A.SAVE_LESSON,e)};var I=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:e=>k(e),onSuccess:(n,a)=>{if(n.data){t.invalidateQueries({queryKey:["Topic",e]});t.invalidateQueries({queryKey:["Lesson",a.lesson_id,a.topic_id]});r({message:(0,d.__)("Lesson saved successfully","tutor"),type:"success"})}},onError:e=>{r({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)})}})};var D=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].DELETE_TOPIC_CONTENT */.A.DELETE_TOPIC_CONTENT,{lesson_id:e})};var C=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:D,onSuccess:r=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)})}})};var M=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].UPDATE_COURSE_CONTENT_ORDER */.A.UPDATE_COURSE_CONTENT_ORDER,e)};var T=()=>{var{showToast:e}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:M,onError:t=>{e({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(t)})}})};var E=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(f/* ["default"].GET_ASSIGNMENT_DETAILS */.A.GET_ASSIGNMENT_DETAILS,{params:{topic_id:t,assignment_id:e}})};var S=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["Assignment",e,t],queryFn:()=>E(e,t).then(e=>e.data),enabled:!!e&&!!t})};var O=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].SAVE_ASSIGNMENT */.A.SAVE_ASSIGNMENT,e)};var H=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:e=>O(e),onSuccess:(n,a)=>{if(n.status_code===200||n.status_code===201){t.invalidateQueries({queryKey:["Topic",Number(e)]});t.invalidateQueries({queryKey:["Assignment",a.assignment_id,a.topic_id]});r({message:(0,d.__)(n.message,"tutor"),type:"success"})}},onError:e=>{r({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)})}})};var N=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].DUPLICATE_CONTENT */.A.DUPLICATE_CONTENT,e)};/**
 *
 * @param quizId pass when duplicating 'answer'
 * @returns useMutation
 */var F=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:N,onSuccess:(n,a)=>{if(n.status_code===200||n.status_code===201){r({message:(0,d.__)(n.message,"tutor"),type:"success"});if(["lesson","assignment","quiz","topic"].includes(a.content_type)){t.invalidateQueries({queryKey:["Topic"]});return}if(["question"].includes(a.content_type)){t.invalidateQueries({queryKey:["Quiz",e]});return}}},onError:(n,a)=>{r({message:(0,p/* .convertToErrorMessage */.EL)(n),type:"danger"});if(["answer"].includes(a.content_type)){t.invalidateQueries({queryKey:["Quiz",e]})}}})};var K=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(f/* ["default"].GET_ZOOM_MEETING_DETAILS */.A.GET_ZOOM_MEETING_DETAILS,{params:{meeting_id:e,topic_id:t}})};var L=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["ZoomMeeting",e],queryFn:()=>K(e,t).then(e=>e.data),enabled:!!e&&!!t})};var W=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(f/* ["default"].GET_GOOGLE_MEET_DETAILS */.A.GET_GOOGLE_MEET_DETAILS,{params:{meeting_id:e,topic_id:t}})};var U=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["GoogleMeet",e],queryFn:()=>W(e,t).then(e=>e.data),enabled:!!e&&!!t})};var z=e=>{return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].ADD_CONTENT_BANK_CONTENT_TO_COURSE */.A.ADD_CONTENT_BANK_CONTENT_TO_COURSE,e)};var P=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:z,onSuccess:(r,n)=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic",n.course_id]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)})}})};var B=e=>{var{topicId:t,contentId:r}=e;return v/* .wpAjaxInstance.post */.b.post(f/* ["default"].DELETE_CONTENT_BANK_CONTENT_FROM_COURSE */.A.DELETE_CONTENT_BANK_CONTENT_FROM_COURSE,{topic_id:t,content_id:r})};var R=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:B,onSuccess:r=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,p/* .convertToErrorMessage */.EL)(e)})}})}},52117:function(e,t,r){r.d(t,{A:()=>w});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(84577);/* import */var o=r(2445);/* import */var s=r(10840);/* import */var d=r(24219);/* import */var l=r(85713);/* import */var c=r(17437);/* import */var u=r(41594);/* import */var v=/*#__PURE__*/r.n(u);function f(){var e=(0,i._)(["\n      cursor: not-allowed;\n    "]);f=function t(){return e};return e}function p(){var e=(0,i._)(["\n      color: ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,i._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function m(){var e=(0,i._)(["\n        background-color: ",";\n      "]);m=function t(){return e};return e}function g(){var e=(0,i._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);g=function t(){return e};return e}function b(){var e=(0,i._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/v().forwardRef((e,t)=>{var{id:r=(0,l/* .nanoid */.Ak)(),name:i,labelCss:s,inputCss:d,label:c="",checked:u,value:f,disabled:p=false,onChange:h,onBlur:m,isIndeterminate:g=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!g?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/v().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,o/* .jsxs */.FD)("label",{htmlFor:r,css:[y.container({disabled:p}),s],children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,a._)((0,n._)({},e),{ref:t,id:r,name:i,type:"checkbox",value:f,checked:!!u,disabled:p,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:m,css:[d,y.checkbox({label:!!c,isIndeterminate:g,disabled:p})]})),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:[y.label({isDisabled:p}),s],title:_(c),children:c})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",s/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(f()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(d/* .typography.caption */.I.caption(),";color:",s/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(p(),s/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,c/* .css */.AH)(h(),s/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",s/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",s/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",s/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",s/* .borderRadius["4"] */.Vq["4"],";",n&&(0,c/* .css */.AH)(m(),s/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,c/* .css */.AH)(g(),s/* .colorTokens.brand.blue */.I6.brand.blue,s/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,c/* .css */.AH)(b(),s/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",s/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",s/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const w=_},2971:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(3771);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(42338);/* import */var u=r(90209);/* import */var v=r(10840);/* import */var f=r(24219);/* import */var p=r(84133);/* import */var h=r(76017);function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,o.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:s,uploadHandler:d,clearHandler:l,emptyImageCss:f,previewImageCss:m,overlayCss:g,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:A=true}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{when:!y,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{when:s===null||s===void 0?void 0:s.url,fallback:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),f],onClick:e=>{e.stopPropagation();if(x){return}d()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();d()}},children:[/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),m],"data-cy":"media-preview",children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e,alt:s===null||s===void 0?void 0:s.title,css:w.imagePreview}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.hoverPreview,g],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,i/* .css */.AH)("margin-top:",A&&v/* .spacing["16"] */.YK["16"],";"),onClick:e=>{e.stopPropagation();d()},"data-cy":"replace-media",children:_||(0,o.__)("Replace Image","tutor")}),/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{when:A,children:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();l()},"data-cy":"clear-media",children:(0,o.__)("Remove","tutor")})})]})]})}})})};/* export default */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,i/* .css */.AH)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",v/* .spacing["8"] */.YK["8"],";border:1px dashed ",v/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",v/* .borderRadius["8"] */.Vq["8"],";background-color:",v/* .colorTokens.bg.white */.I6.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,i/* .css */.AH)(m()),"    svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover svg{color:",!r&&v/* .colorTokens.brand.blue */.I6.brand.blue,";}")},buttonText:/*#__PURE__*/(0,i/* .css */.AH)("color:",v/* .colorTokens.text.brand */.I6.text.brand,";"),infoTexts:/*#__PURE__*/(0,i/* .css */.AH)(f/* .typography.tiny */.I.tiny(),";color:",v/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,i/* .css */.AH)("width:100%;height:168px;border:1px solid ",v/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",v/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;position:relative;background-color:",v/* .colorTokens.bg.white */.I6.bg.white,";",t==="small"&&(0,i/* .css */.AH)(g()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,i/* .css */.AH)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",v/* .spacing["8"] */.YK["8"],";opacity:0;position:absolute;inset:0;background-color:",l()(v/* .colorTokens.color.black.main */.I6.color.black.main,.6),";button:first-of-type{box-shadow:",v/* .shadow.button */.r7.button,";}button:last-of-type:not(:only-of-type){color:",v/* .colorTokens.text.white */.I6.text.white,";box-shadow:none;}")}},91196:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(10840);/* import */var s=r(84133);/* import */var d=r(51298);/* import */var l=r(90209);function c(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);v=function t(){return e};return e}var f=e=>{var{children:t,content:r,size:n="regular",textOnly:i}=e;return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:m.wrapper({hasChildren:(0,d/* .isDefined */.O9)(t),size:n}),children:[t,/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{when:!(0,d/* .isDefined */.O9)(t)&&!i,children:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:h[n].iconSize,height:h[n].iconSize})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:m.content({hasChildren:(0,d/* .isDefined */.O9)(t),size:n,textOnly:i}),children:(0,d/* .isDefined */.O9)(t)?/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:n==="tiny"?h[n].iconSize:16}):r})]})};/* export default */const p=f;var h={tiny:{borderRadius:o/* .spacing["10"] */.YK["10"],height:o/* .spacing["10"] */.YK["10"],gap:o/* .spacing["2"] */.YK["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:o/* .spacing["16"] */.YK["16"],height:o/* .spacing["16"] */.YK["16"],gap:o/* .spacing["4"] */.YK["4"],iconSize:16,fontSize:o/* .fontSize["10"] */.J["10"],lineHeight:o/* .lineHeight["16"] */.K_["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:o/* .fontSize["14"] */.J["14"],lineHeight:o/* .lineHeight["18"] */.K_["18"]},large:{borderRadius:"26px",height:"26px",gap:o/* .spacing["6"] */.YK["6"],iconSize:26,fontSize:o/* .fontSize["16"] */.J["16"],lineHeight:o/* .lineHeight["26"] */.K_["26"]}};var m={wrapper:e=>{var{hasChildren:t,size:r="regular"}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:relative;svg{flex-shrink:0;}",!t&&(0,i/* .css */.AH)(c(),h[r].height,h[r].borderRadius,h[r].gap))},content:e=>{var{hasChildren:t,size:r="regular",textOnly:n}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&(0,i/* .css */.AH)(v(),o/* .spacing["2"] */.YK["2"],o/* .colorTokens.icon.white */.I6.icon.white,h[r].gap,h[r].fontSize,h[r].lineHeight,n&&(0,i/* .css */.AH)(u(),o/* .spacing["6"] */.YK["6"])))}}},99689:function(e,t,r){r.d(t,{A:()=>m});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(41594);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(10840);/* import */var l=r(24219);/* import */var c=r(36154);/* import */var u=r(85713);function v(){var e=(0,n._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);f=function t(){return e};return e}var p=/*#__PURE__*/s().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:i,disabled:o=false,labelCss:s,label:d,icon:l,value:c,onChange:v,onBlur:f,description:p}=e;var m=(0,u/* .nanoid */.Ak)();return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("label",{htmlFor:m,css:[h.container(o),s],children:[/*#__PURE__*/(0,a/* .jsx */.Y)("input",{ref:t,id:m,name:r,type:"radio",checked:n,readOnly:i,value:c,disabled:o,onChange:v,onBlur:f,css:[h.radio(d)]}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{}),l,d]}),p&&/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:h.description,children:p})]})});var h={wrapper:/*#__PURE__*/(0,i/* .css */.AH)(c/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",d/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,i/* .css */.AH)(l/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,i/* .css */.AH)(v(),d/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",d/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",d/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,i/* .css */.AH)(f(),d/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",d/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",d/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",d/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,i/* .css */.AH)(l/* .typography.small */.I.small(),";color:",d/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const m=p},45257:function(e,t,r){r.d(t,{w:()=>l});/* import */var n=r(2445);/* import */var a=r(10840);/* import */var i=r(63939);/* import */var o=r(17437);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);var l=/*#__PURE__*/d().forwardRef((e,t)=>{var{className:r,variant:a}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{className:r,ref:t,css:u({variant:a})})});l.displayName="Separator";var c={horizontal:/*#__PURE__*/(0,o/* .css */.AH)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,o/* .css */.AH)("height:100%;width:1px;"),base:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;background-color:",a/* .colorTokens.stroke.divider */.I6.stroke.divider,";")};var u=(0,i/* .createVariation */.s)({variants:{variant:{horizontal:c.horizontal,vertical:c.vertical}},defaultVariants:{variant:"horizontal"}},c.base)},52664:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(41594);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(4892);/* import */var u=r(95729);/* import */var v=r(10840);/* import */var f=r(36154);/* import */var p=r(85713);function h(){var e=(0,n._)(["\n        ","\n      "]);h=function t(){return e};return e}function m(){var e=(0,n._)(["\n        border-top-right-radius: ",";\n      "]);m=function t(){return e};return e}function g(){var e=(0,n._)(["\n          ","\n        "]);g=function t(){return e};return e}function b(){var e=(0,n._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!c/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,a,i,s,d,l,u,v,f,p){var h=f!==null&&f!==void 0?f:n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv");var m=p!==null&&p!==void 0?p:"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen | tutor_button | undoRedoDropdown";h=v?h:h.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:l||200,autoresize_max_height:u||500,wp_autoresize_on:true,browser_spellcheck:!d,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!d,toolbar1:h,toolbar2:n?false:m,content_css:"".concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-includes/css/dashicons.min.css,").concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!d,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:a=>{a.on("init",()=>{if(e&&!d){a.getBody().focus()}if(d){a.setMode("readonly");var t=a.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){a.iframeElement.style.height="".concat(e,"px")}},500)}});if(!n){a.addButton("tutor_button",{text:(0,o.__)("Tutor ShortCode","tutor"),icon:false,type:"menubutton",menu:[{text:(0,o.__)("Student Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_student_registration_form]")}},{text:(0,o.__)("Instructor Registration Form","tutor"),onclick:()=>{a.insertContent("[tutor_instructor_registration_form]")}},{text:(0,o.__)("Courses","tutor"),onclick:()=>{a.windowManager.open({title:(0,o.__)("Courses Shortcode","tutor"),body:[{type:"textbox",name:"id",label:(0,o.__)("Course id, separate by (,) comma","tutor"),value:""},{type:"textbox",name:"exclude_ids",label:(0,o.__)("Exclude Course IDS","tutor"),value:""},{type:"textbox",name:"category",label:(0,o.__)("Category IDS","tutor"),value:""},{type:"listbox",name:"orderby",label:(0,o.__)("Order By","tutor"),onselect:()=>{},values:[{text:"ID",value:"ID"},{text:"title",value:"title"},{text:"rand",value:"rand"},{text:"date",value:"date"},{text:"menu_order",value:"menu_order"},{text:"post__in",value:"post__in"}]},{type:"listbox",name:"order",label:(0,o.__)("Order","tutor"),onselect:()=>{},values:[{text:"DESC",value:"DESC"},{text:"ASC",value:"ASC"}]},{type:"textbox",name:"count",label:(0,o.__)("Count","tutor"),value:"6"}],// eslint-disable-next-line @typescript-eslint/no-explicit-any
onsubmit:e=>{a.insertContent('[tutor_course id="'.concat(e.data.id,'" exclude_ids="').concat(e.data.exclude_ids,'" category="').concat(e.data.category,'" orderby="').concat(e.data.orderby,'" order="').concat(e.data.order,'" count="').concat(e.data.count,'"]'))}})}}]})}a.on("change keyup paste",()=>{t(a.getContent())});a.on("focus",()=>{r(true)});a.on("blur",()=>r(false));a.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}s===null||s===void 0?void 0:s(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!a&&!n&&!d,drag_drop_upload:true,quicktags:i||n||d?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:n,hideMediaButtons:i,hideQuickTags:o,autoFocus:s=false,onFullScreenChange:l,readonly:c=false,min_height:v,max_height:f,toolbar1:h,toolbar2:m}=e;var g=(0,d.useRef)(null);var{current:b}=(0,d.useRef)((0,p/* .nanoid */.Ak)());var[_,w]=(0,d.useState)(s);var x=e=>{var t=e.target;r(t.value)};var Y=(0,d.useCallback)(e=>{var{tinymce:t}=window;if(!t||_){return}var r=window.tinymce.get(b);if(r){if(e!==r.getContent()){r.setContent(e)}}},[b,_]);(0,d.useEffect)(()=>{Y(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,d.useEffect)(()=>{if(typeof window.wp!=="undefined"&&window.wp.editor){window.wp.editor.remove(b);window.wp.editor.initialize(b,y(_,r,w,n,i,o,l,c,v,f,u/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile,h,m));var e=g.current;e===null||e===void 0?void 0:e.addEventListener("change",x);e===null||e===void 0?void 0:e.addEventListener("input",x);return()=>{window.wp.editor.remove(b);e===null||e===void 0?void 0:e.removeEventListener("change",x);e===null||e===void 0?void 0:e.removeEventListener("input",x)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[c]);return/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:A.wrapper({hideQuickTags:o,isMinimal:n,isFocused:_,isReadOnly:c}),children:/*#__PURE__*/(0,a/* .jsx */.Y)("textarea",{"data-cy":"tutor-tinymce",ref:g,id:b,defaultValue:t})})};/* export default */const x=w;var A={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:a}=e;return/*#__PURE__*/(0,i/* .css */.AH)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.Vq["6"],";",n&&!a&&(0,i/* .css */.AH)(h(),f/* .styleUtils.inputFocus */.x.inputFocus),":focus-within{",!a&&f/* .styleUtils.inputFocus */.x.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",v/* .borderRadius["4"] */.Vq["4"],";border-top-right-radius:",v/* .borderRadius["4"] */.Vq["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";",(t||r)&&(0,i/* .css */.AH)(m(),v/* .borderRadius["6"] */.Vq["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.Vq["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,i/* .css */.AH)(b(),!a?"1px solid ".concat(v/* .colorTokens.stroke["default"] */.I6.stroke["default"]):"none",v/* .borderRadius["6"] */.Vq["6"],n&&!a&&(0,i/* .css */.AH)(g(),f/* .styleUtils.inputFocus */.x.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",v/* .spacing["10"] */.YK["10"],";}")}}},79489:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(31105);/* import */var o=r(2445);/* import */var s=r(52117);/* import */var d=r(10840);/* import */var l=r(24219);/* import */var c=r(17437);/* import */var u=r(90209);/* import */var v=r(92229);/* import */var f=r(66279);var p=e=>{var{field:t,fieldState:r,disabled:d,value:l,onChange:c,label:p,description:h,helpText:g,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,f=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:m.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,(0,a._)((0,n._)({},t,f),{inputCss:r,labelCss:_,value:l,disabled:d,checked:t.value,label:p,onChange:()=>{t.onChange(!t.value);if(c){c(!t.value)}}})),g&&/*#__PURE__*/(0,o/* .jsx */.Y)(v/* ["default"] */.A,{content:g,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,o/* .jsx */.Y)("p",{css:m.description,children:h})]})}})};/* export default */const h=p;var m={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",d/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",d/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,c/* .css */.AH)(l/* .typography.small */.I.small(),"    color:",d/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",d/* .spacing["6"] */.YK["6"],";")}},31108:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(31105);/* import */var o=r(2445);/* import */var s=r(17437);/* import */var d=r(12470);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(86828);/* import */var u=r(53429);/* import */var v=r(41594);/* import */var f=/*#__PURE__*/r.n(v);/* import */var p=r(5170);/* import */var h=r(42338);/* import */var m=r(90209);/* import */var g=r(95729);/* import */var b=r(10840);/* import */var _=r(24219);/* import */var y=r(94654);/* import */var w=r(36154);/* import */var x=r(66279);/* import */var A=r(99972);// Create DayPicker formatters based on WordPress locale
var Y=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var k=e=>{if(!e)return undefined;return(0,c["default"])(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var I=e=>{var{label:t,field:r,fieldState:s,disabled:l,disabledBefore:c,disabledAfter:f,loading:b,placeholder:_,helpText:A,isClearable:I=true,onChange:D,dateFormat:M=g/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var T=(0,v.useRef)(null);var[E,S]=(0,v.useState)(false);var O=k(r.value);var H=typeof window!=="undefined"&&window.wp&&window.wp.date;var N=O?H?window.wp.date.format("F j, Y",O):(0,u["default"])(O,M):"";var{triggerRef:F,position:K,popoverRef:L}=(0,y/* .usePortalPopover */.tP)({isOpen:E,placement:y/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var W=()=>{var e;S(false);(e=T.current)===null||e===void 0?void 0:e.focus()};var U=k(c);var z=k(f);return/*#__PURE__*/(0,o/* .jsx */.Y)(x/* ["default"] */.A,{label:t,field:r,fieldState:s,disabled:l,loading:b,placeholder:_,helpText:A,children:e=>{var{css:t}=e,s=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:C.wrapper,ref:F,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,a._)((0,n._)({},s),{css:[t,C.input],title:N,ref:e=>{r.ref(e);// @ts-ignore
T.current=e},type:"text",value:N,onClick:e=>{e.stopPropagation();S(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();S(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:C.icon}),I&&r.value&&/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,d.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:w/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* .Portal */.ZL,{isOpen:E,onClickOutside:W,onEscape:W,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:C.pickerWrapper,style:{left:K.left,top:K.top},ref:L,children:/*#__PURE__*/(0,o/* .jsx */.Y)(p/* .DayPicker */.h,{dir:g/* .isRTL */.V8?"rtl":"ltr",animate:true,mode:"single",formatters:Y(),disabled:[!!U&&{before:U},!!z&&{after:z}],selected:O,onSelect:e=>{if(e){var t=(0,u["default"])(e,g/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);W();if(D){D(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:O||new Date,startMonth:U||new Date(new Date().getFullYear()-10,0),endMonth:z||new Date(new Date().getFullYear()+10,11),weekStartsOn:H?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const D=I;var C={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{padding-left:",b/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:50%;left:",b/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,s/* .css */.AH)(_/* .typography.body */.I.body("regular"),";position:absolute;background-color:",b/* .colorTokens.background.white */.I6.background.white,";box-shadow:",b/* .shadow.popover */.r7.popover,";border-radius:",b/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",b/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",b/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",b/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",b/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",b/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",b/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",b/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",b/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",b/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",b/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",b/* .colorTokens.text.white */.I6.text.white,";background-color:",b/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",b/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",b/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",b/* .borderRadius.circle */.Vq.circle,";font-weight:",b/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")}},10878:function(e,t,r){r.d(t,{A:()=>A});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(42338);/* import */var l=r(90209);/* import */var c=r(66279);/* import */var u=r(10840);/* import */var v=r(24219);/* import */var f=r(8501);/* import */var p=r(84133);/* import */var h=r(85123);/* import */var m=r(35804);/* import */var g=r(36154);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:i,buttonText:s=(0,o.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:v,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,m/* ["default"] */.A)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(v){v(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var A=()=>{y()};var k=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(v){v(r.length>0?r:null)}}else{t.onChange(null);if(v){v(null)}}};return/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{label:n,field:t,fieldState:r,helpText:i,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{when:_,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,children:s}),children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardWrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCard,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{style:Y.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardBody,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardTitle,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{title:e.title,css:g/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentCardSubtitle,children:/*#__PURE__*/(0,a/* .jsx */.Y)("span",{children:"".concat((0,o.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("button",{type:"button",css:Y.removeButton,onClick:()=>{k(e.id)},children:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,"data-cy":"upload-media",children:s})})]})})}})};/* export default */const A=(0,h/* .withVisibilityControl */.M)(x);var Y={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;position:relative;",t&&(0,i/* .css */.AH)(b(),u/* .colorTokens.background.white */.I6.background.white,u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius.card */.Vq.card,u/* .spacing["8"] */.YK["8"]))},attachmentsWrapper:/*#__PURE__*/(0,i/* .css */.AH)("max-height:260px;padding-right:",u/* .spacing["16"] */.YK["16"],";",g/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.YK["20"],";padding:",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["12"] */.YK["12"]," ",u/* .spacing["4"] */.YK["4"]," 0;border-radius:",u/* .borderRadius["6"] */.Vq["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.I6.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.EA.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",u/* .spacing["4"] */.YK["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex(),";",v/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,i/* .css */.AH)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,i/* .css */.AH)(v/* .typography.tiny */.I.tiny("regular")," ",g/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";color:",u/* .colorTokens.text.hints */.I6.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)(t&&(0,i/* .css */.AH)(_(),u/* .spacing["16"] */.YK["16"]))},uploadButton:/*#__PURE__*/(0,i/* .css */.AH)("width:100%;"),fileIcon:/*#__PURE__*/(0,i/* .css */.AH)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";"),removeButton:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.crossButton */.x.crossButton,";background:none;transition:none;flex-shrink:0;")}},13095:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(2445);/* import */var a=r(12470);/* import */var i=/*#__PURE__*/r.n(a);/* import */var o=r(2971);/* import */var s=r(90209);/* import */var d=r(39655);/* import */var l=r(1448);/* import */var c=r(85544);/* import */var u=r(6463);/* import */var v=r(4892);/* import */var f=r(85123);/* import */var p=r(35804);/* import */var h=r(47403);/* import */var m=r(99786);/* import */var g=r(66279);var b;var _=!!v/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var y=(b=v/* .tutorConfig.settings */.P.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:i,size:v,helpText:f,buttonText:b=(0,a.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:A=false,previewImageCss:Y,loading:k,onClickAiButton:I}=e;var{showModal:D}=(0,l/* .useModal */.h)();var{openMediaLibrary:C,resetFiles:M}=(0,p/* ["default"] */.A)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:a}=e;t.onChange({id:r,url:n,title:a});if(x){x({id:r,url:n,title:a})}}},initialFiles:t.value});var T=t.value;var E=()=>{C()};var S=()=>{M();t.onChange(null);if(x){x(null)}};var O=()=>{if(!_){D({component:c/* ["default"] */.A,props:{image:m,image2x:h}})}else if(!y){D({component:u/* ["default"] */.A,props:{image:m,image2x:h}})}else{D({component:d/* ["default"] */.A,isMagicAi:true,props:{title:(0,a.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});I===null||I===void 0?void 0:I()}};return/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{label:i,field:t,fieldState:r,helpText:f,onClickAiButton:O,generateWithAi:A,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,n/* .jsx */.Y)(o/* ["default"] */.A,{size:v,value:T,uploadHandler:E,clearHandler:S,buttonText:b,infoText:w,previewImageCss:Y,loading:k})})}})};/* export default */const x=(0,f/* .withVisibilityControl */.M)(w)},99281:function(e,t,r){r.d(t,{A:()=>f});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(10840);/* import */var o=r(17437);/* import */var s=r(24219);/* import */var d=r(36154);/* import */var l=r(66279);function c(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var v=e=>{var{field:t,fieldState:r,label:n,options:i=[],disabled:o}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:o,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:p.wrapper,children:i.map((e,r)=>/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{type:"button",css:p.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:o,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,a/* .jsx */.Y)("p",{children:e.label})]},r))})}})};/* export default */const f=v;var p={wrapper:/*#__PURE__*/(0,o/* .css */.AH)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",i/* .spacing["12"] */.YK["12"],";margin-top:",i/* .spacing["4"] */.YK["4"],";"),item:e=>/*#__PURE__*/(0,o/* .css */.AH)(d/* .styleUtils.resetButton */.x.resetButton,";display:flex;flex-direction:column;gap:",i/* .spacing["4"] */.YK["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",s/* .typography.small */.I.small(),";width:100%;",d/* .styleUtils.textEllipsis */.x.textEllipsis,";color:",i/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,o/* .css */.AH)(c(),i/* .colorTokens.stroke.hover */.I6.stroke.hover),"}img{border-radius:",i/* .borderRadius["6"] */.Vq["6"],";border:2px solid ",i/* .colorTokens.stroke.border */.I6.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,o/* .css */.AH)(u(),i/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi),"}")}},49201:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(31105);/* import */var o=r(84577);/* import */var s=r(2445);/* import */var d=r(17437);/* import */var l=r(41594);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(10840);/* import */var v=r(24219);/* import */var f=r(85123);/* import */var p=r(36154);/* import */var h=r(66279);function m(){var e=(0,o._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function g(){var e=(0,o._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function b(){var e=(0,o._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,o._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,o._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,o._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,o._)(["\n      ","\n    "]);x=function t(){return e};return e}function A(){var e=(0,o._)(["\n      border-right: 1px solid ",";\n    "]);A=function t(){return e};return e}function Y(){var e=(0,o._)(["\n      ","\n    "]);Y=function t(){return e};return e}function k(){var e=(0,o._)(["\n      border-left: 1px solid ",";\n    "]);k=function t(){return e};return e}var I=e=>{var{label:t,content:r,contentPosition:o="left",showVerticalBar:d=true,size:c="regular",type:u="text",field:v,fieldState:f,disabled:p,readOnly:m,loading:g,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:A,contentCss:Y,removeBorder:k=false,selectOnFocus:I=false}=e;var D=(0,l.useRef)(null);return/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{label:t,field:v,fieldState:f,disabled:p,readOnly:m,loading:g,placeholder:b,helpText:_,isHidden:x,removeBorder:k,children:e=>{var{css:t}=e,l=(0,i._)(e,["css"]);var p;return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:[C.inputWrapper(!!f.error,k),A],children:[o==="left"&&/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:[C.inputLeftContent(d,c),Y],children:r}),/*#__PURE__*/(0,s/* .jsx */.Y)("input",(0,a._)((0,n._)({},v,l),{type:"text",value:(p=v.value)!==null&&p!==void 0?p:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;v.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,C.input(o,d,c)],autoComplete:"off",ref:e=>{v.ref(e);// @ts-ignore
D.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!I||!D.current){return}D.current.select()},"data-input":true})),o==="right"&&/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:[C.inputRightContent(d,c),Y],children:r})]})}})};/* export default */const D=(0,f/* .withVisibilityControl */.M)(I);var C={inputWrapper:(e,t)=>/*#__PURE__*/(0,d/* .css */.AH)("display:flex;align-items:center;",!t&&(0,d/* .css */.AH)(m(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius["6"] */.Vq["6"],u/* .shadow.input */.r7.input,u/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,d/* .css */.AH)(g(),u/* .colorTokens.stroke.danger */.I6.stroke.danger,u/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",p/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,d/* .css */.AH)(b(),u/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,d/* .css */.AH)("&[data-input]{",v/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,d/* .css */.AH)(_(),e,u/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,d/* .css */.AH)(w(),u/* .fontSize["24"] */.J["24"],u/* .fontWeight.medium */.Wy.medium,t&&(0,d/* .css */.AH)(y(),e,u/* .spacing["12"] */.YK["12"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,d/* .css */.AH)(v/* .typography.small */.I.small()," ",p/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,d/* .css */.AH)(x(),v/* .typography.body */.I.body())," ",e&&(0,d/* .css */.AH)(A(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,d/* .css */.AH)(v/* .typography.small */.I.small()," ",p/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,d/* .css */.AH)(Y(),v/* .typography.body */.I.body())," ",e&&(0,d/* .css */.AH)(k(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"]))}},91072:function(e,t,r){r.d(t,{A:()=>f});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(31105);/* import */var o=r(2445);/* import */var s=r(99689);/* import */var d=r(10840);/* import */var l=r(24219);/* import */var c=r(17437);/* import */var u=r(66279);var v=e=>{var{field:t,fieldState:r,label:d,options:l=[],disabled:c,wrapperCss:v,onSelect:f,onSelectRender:h}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{field:t,fieldState:r,label:d,disabled:c,children:e=>{var{css:r}=e,d=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:v,children:l.map((e,i)=>/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,(0,a._)((0,n._)({},d),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||c,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(f){f(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:p.radioLegend,children:e.legend})]},i))})}})};/* export default */const f=v;var p={radioLegend:/*#__PURE__*/(0,c/* .css */.AH)("margin-left:",d/* .spacing["28"] */.YK["28"],";",l/* .typography.body */.I.body(),";color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";")}},64194:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(10840);/* import */var o=r(24219);/* import */var s=r(68118);/* import */var d=r(36154);/* import */var l=r(85713);/* import */var c=r(17437);/* import */var u=r(41594);/* import */var v=/*#__PURE__*/r.n(u);/* import */var f=r(66279);function p(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function m(e,t,r,n){if(!t.current){return 0}var a=t.current.getBoundingClientRect();var i=a.width;var o=e-a.left;var s=Math.max(0,Math.min(o,i));var d=s/i*100;var l=Math.floor(r+d/100*(n-r));return l}var g=e=>{var{field:t,fieldState:r,label:n,min:i=0,max:o=100,isMagicAi:d=false,hasBorder:c=false}=e;var v=(0,u.useRef)(null);var[p,h]=(0,u.useState)(t.value);var g=(0,u.useRef)(null);var b=(0,u.useRef)(null);var y=(0,s/* .useDebounce */.d)(p);(0,u.useEffect)(()=>{t.onChange(y);// eslint-disable-next-line react-hooks/exhaustive-deps
},[y,t.onChange]);(0,u.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==b.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!g.current){return}h(m(t.clientX,g,i,o))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[i,o]);var w=(0,u.useMemo)(()=>{return Math.floor((p-i)/(o-i)*100)},[p,i,o]);return/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{field:t,fieldState:r,label:n,isMagicAi:d,children:()=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.wrapper(c),children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.track,ref:g,onKeyDown:l/* .noop */.lQ,onClick:e=>{h(m(e.clientX,g,i,o))},children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.fill,style:{width:"".concat(w,"%")}}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.thumb(d),style:{left:"".concat(w,"%")},ref:b})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("input",{type:"text",css:_.input,value:String(p),onChange:e=>{h(Number(e.target.value))},ref:v,onFocus:()=>{var e;(e=v.current)===null||e===void 0?void 0:e.select()}})]})})};/* export default */const b=g;var _={wrapper:e=>/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:1fr 45px;gap:",i/* .spacing["20"] */.YK["20"],";align-items:center;",e&&(0,c/* .css */.AH)(p(),i/* .colorTokens.stroke.disable */.I6.stroke.disable,i/* .borderRadius["6"] */.Vq["6"],i/* .spacing["12"] */.YK["12"],i/* .spacing["10"] */.YK["10"],i/* .spacing["12"] */.YK["12"],i/* .spacing["16"] */.YK["16"])),track:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;height:4px;background-color:",i/* .colorTokens.bg.gray20 */.I6.bg.gray20,";border-radius:",i/* .borderRadius["50"] */.Vq["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;left:0;top:0;height:100%;background:",i/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";width:50%;border-radius:",i/* .borderRadius["50"] */.Vq["50"],";"),thumb:e=>/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",i/* .borderRadius.circle */.Vq.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",i/* .borderRadius.circle */.Vq.circle,";background-color:",i/* .colorTokens.background.white */.I6.background.white,";cursor:pointer;}",e&&(0,c/* .css */.AH)(h(),i/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1)),input:/*#__PURE__*/(0,c/* .css */.AH)(o/* .typography.caption */.I.caption("medium"),";height:32px;border:1px solid ",i/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",i/* .borderRadius["6"] */.Vq["6"],";text-align:center;color:",i/* .colorTokens.text.primary */.I6.text.primary,";&:focus-visible{",d/* .styleUtils.inputFocus */.x.inputFocus,";}")}},27205:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(31105);/* import */var o=r(2445);/* import */var s=r(17437);/* import */var d=r(67375);/* import */var l=r(67901);/* import */var c=r(35975);/* import */var u=r(53429);/* import */var v=r(41594);/* import */var f=/*#__PURE__*/r.n(v);/* import */var p=r(42338);/* import */var h=r(90209);/* import */var m=r(35198);/* import */var g=r(95729);/* import */var b=r(10840);/* import */var _=r(24219);/* import */var y=r(36154);/* import */var w=r(47617);/* import */var x=r(67198);/* import */var A=r(12470);/* import */var Y=/*#__PURE__*/r.n(A);/* import */var k=r(66279);var I=e=>{var{label:t,field:r,fieldState:s,interval:f=30,disabled:b,loading:_,placeholder:Y,helpText:I,isClearable:D=true}=e;var[M,T]=(0,v.useState)(false);var E=(0,v.useRef)(null);var S=(0,v.useRef)(null);var O=(0,v.useMemo)(()=>{var e=(0,d["default"])((0,l["default"])(new Date,0),0);var t=(0,d["default"])((0,l["default"])(new Date,23),59);var r=(0,c/* ["default"] */.A)({start:e,end:t},{step:f});return r.map(e=>(0,u["default"])(e,g/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[f]);var{activeIndex:H,setActiveIndex:N}=(0,x/* .useSelectKeyboardNavigation */.v)({options:O.map(e=>({label:e,value:e})),isOpen:M,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);T(false)},onClose:()=>T(false)});(0,v.useEffect)(()=>{if(M&&H>=0&&S.current){S.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[M,H]);return/*#__PURE__*/(0,o/* .jsx */.Y)(k/* ["default"] */.A,{label:t,field:r,fieldState:s,disabled:b,loading:_,placeholder:Y,helpText:I,children:e=>{var{css:t}=e,s=(0,i._)(e,["css"]);var d;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:C.wrapper,ref:E,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,a._)((0,n._)({},s),{ref:r.ref,css:[t,C.input],type:"text",onClick:e=>{e.stopPropagation();T(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();T(e=>!e)}if(e.key==="Tab"){T(false)}},value:(d=r.value)!==null&&d!==void 0?d:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"clock",width:32,height:32,style:C.icon}),D&&r.value&&/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,A.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:y/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{triggerRef:E,isOpen:M,closePopover:()=>T(false),animationType:w/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,o/* .jsx */.Y)("ul",{css:C.list,children:O.map((e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("li",{css:C.listItem,ref:H===t?S:null,"data-active":H===t,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:C.itemButton,onClick:()=>{r.onChange(e);T(false)},onMouseOver:()=>N(t),onMouseLeave:()=>t!==H&&N(-1),onFocus:()=>N(t),children:e})},t)})})})]})}})};/* export default */const D=I;var C={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{padding-left:",b/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:50%;left:",b/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,s/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",y/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,s/* .css */.AH)(y/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.body */.I.body(),";margin:",b/* .spacing["4"] */.YK["4"]," ",b/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.primary */.I6.text.primary,";}")}},83890:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */ee});// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(41374);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread.js
var a=r(71893);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_object_spread_props.js
var i=r(55456);// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var o=r(84577);// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var s=r(2445);// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var d=r(17437);// EXTERNAL MODULE: external "wp.i18n"
var l=r(12470);// EXTERNAL MODULE: external "React"
var c=r(41594);// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var u=r(49785);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/Button.tsx
var v=r(42338);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/ImageInput.tsx
var f=r(2971);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/LoadingSpinner.tsx
var p=r(76017);// EXTERNAL MODULE: ./assets/react/v3/shared/atoms/SVGIcon.tsx
var h=r(90209);// EXTERNAL MODULE: ./assets/react/v3/shared/molecules/Popover.tsx
var m=r(35198);// EXTERNAL MODULE: ./assets/react/v3/shared/config/config.ts
var g=r(4892);// EXTERNAL MODULE: ./assets/react/v3/shared/config/constants.ts
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
var M=r(37381);// CONCATENATED MODULE: ./assets/react/v3/shared/services/video.ts
var T=e=>{return C/* .wpAjaxInstance.post */.b.post(M/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.A.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var E=()=>{return(0,D/* .useMutation */.n)({mutationFn:T})};// EXTERNAL MODULE: ./assets/react/v3/shared/utils/style-utils.ts
var S=r(36154);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/util.ts + 4 modules
var O=r(85713);// EXTERNAL MODULE: ./assets/react/v3/shared/utils/validation.ts
var H=r(6192);// CONCATENATED MODULE: ./assets/react/v3/shared/utils/video.ts
function N(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var a="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var i=yield fetch(a);if(!i.ok){throw new Error((0,l.__)("Failed to fetch the video data","tutor"))}var o=yield i.text();var s=new DOMParser;var d=s.parseFromString(o,"application/xml");var c=d.getElementsByTagName("duration")[0];if(!c||!c.textContent){return null}var u=Number.parseInt(c.textContent,10);return u;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var F=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var K=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var a=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+a};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var L=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(b/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var a=t.split("/").pop();var i=yield fetch("https://vimeo.com/api/v2/video/".concat(a,".json"));var o=yield i.json();return o[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var a=document.createElement("canvas");// Track loading states
    var i=false;var o=false;var s=false;var d=false;var c=()=>{n.src="";n.remove();a.remove();clearTimeout(v)};var u=()=>{if(i&&o&&s&&d){try{a.height=n.videoHeight;a.width=n.videoWidth;var t=a.getContext("2d");if(!t){throw new Error((0,l.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var u=a.toDataURL("image/png");c();e(u)}catch(e){c();var v=e instanceof Error?e.message:(0,l.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(v)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{i=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{o=true;u()});n.addEventListener("suspend",()=>{s=true;u()});n.addEventListener("seeked",()=>{d=true;u()});n.addEventListener("error",e=>{c();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var v=setTimeout(()=>{c();r(new Error((0,l.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(a);// Start loading the video
    n.src=t}catch(e){var f=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(f)))}})}throw new Error((0,l.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormFieldWrapper.tsx
var W=r(66279);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormSelectInput.tsx
var U=r(59976);// EXTERNAL MODULE: ./assets/react/v3/shared/components/fields/FormTextareaInput.tsx
var z=r(61046);// CONCATENATED MODULE: ./assets/react/v3/shared/components/fields/FormVideoInput.tsx
function P(){var e=(0,o._)(["\n      background-color: ",";\n    "]);P=function t(){return e};return e}function B(){var e=(0,o._)(["\n      ",";\n    "]);B=function t(){return e};return e}var R=g/* .tutorConfig.supported_video_sources */.P.supported_video_sources||[];var q=R.filter(e=>e.value!=="html5");var j=R.map(e=>e.value);var V=["vimeo","youtube","html5"];var G={youtube:(0,l.__)("Paste YouTube Video URL","tutor"),vimeo:(0,l.__)("Paste Vimeo Video URL","tutor"),external_url:(0,l.__)("Paste External Video URL","tutor"),shortcode:(0,l.__)("Paste Video Shortcode","tutor"),embedded:(0,l.__)("Paste Embedded Video Code","tutor")};var Q={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var Z=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,a._)({},e,t):(0,a._)({},r,t)};var X={youtube:e=>{var t=e.match(b/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(b/* .VideoRegex.VIMEO */.j8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(b/* .VideoRegex.SHORTCODE */.j8.SHORTCODE)?e:null},url:e=>{return e.match(b/* .VideoRegex.EXTERNAL_URL */.j8.EXTERNAL_URL)?e:null}};var $=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:a}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield N(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var i;e=(i=yield F(r))!==null&&i!==void 0?i:0;break;case"youtube":{var o=X.youtube(r);if(o){var s=yield a.mutateAsync(o);e=K(s.data.duration)}break}}if(e){var d=(0,O/* .covertSecondsToHMS */.uu)(Math.floor(e));return d}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var J=e=>{var{field:t,fieldState:r,label:o,helpText:b,buttonText:_=(0,l.__)("Upload Media","tutor"),infoText:y,onChange:x,supportedFormats:D,loading:C,onGetDuration:M}=e;var T,P,B;var J=(0,Y/* .useFormWithGlobalError */.p)({defaultValues:{videoSource:((T=q[0])===null||T===void 0?void 0:T.value)||"",videoUrl:""}});var ee=E();var[er,en]=(0,c.useState)(false);var[ea,ei]=(0,c.useState)({hours:0,minutes:0,seconds:0});var[eo,es]=(0,c.useState)("");var[ed,el]=(0,c.useState)(false);var ec=(0,c.useRef)(null);var eu=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};t.onChange(Z(t.value,n));x===null||x===void 0?void 0:x(Z(t.value,n));try{en(true);eh();var a=yield L("external_url",r.url);var i=yield F(r.url);if(!i){return}ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(i)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(i)))}if(a){es(a)}}finally{en(false)}})();var{openMediaLibrary:ev,resetFiles:ef}=(0,I/* ["default"] */.A)({options:{type:(D===null||D===void 0?void 0:D.length)?D.map(e=>"video/".concat(e)).join(","):"video"},onChange:eu});var{openMediaLibrary:ep,resetFiles:eh}=(0,I/* ["default"] */.A)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};t.onChange(Z(t.value,n));x===null||x===void 0?void 0:x(Z(t.value,n))},initialFiles:((P=t.value)===null||P===void 0?void 0:P.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var em=J.watch("videoSource")||"";var eg=t.value;(0,c.useEffect)(()=>{var e;if(!eg){return}if(!eg.source){var r,n;J.setValue("videoSource",(r=q[0])===null||r===void 0?void 0:r.value);J.setValue("videoUrl",eg["source_".concat((n=q[0])===null||n===void 0?void 0:n.value)]||"");return}var a=j.includes(eg.source);if(!a){t.onChange(Z(eg,{source:""}));return}J.setValue("videoSource",eg.source);J.setValue("videoUrl",eg["source_".concat(eg.source)]||"");if(!eg.poster_url&&V.includes(eg.source)){var i=eg.source;en(true);L(i,eg["source_".concat(i)]||"").then(e=>{en(false);es(e)}).finally(()=>{en(false)})}if(Object.values(ea).some(e=>e>0)){return}if(eg.source==="vimeo"){N(eg["source_vimeo"]||"").then(e=>{if(!e){return}ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(["external_url","html5"].includes(eg.source)){F(eg["source_".concat(eg.source)]||"").then(e=>{if(!e){return}ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(eg.source==="youtube"&&((e=g/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var o;var s=(o=X.youtube(eg["source_youtube"]||""))!==null&&o!==void 0?o:"";ee.mutateAsync(s).then(e=>{var t=e.data.duration;if(!t){return}var r=K(t);ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(r)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[eg]);if(!j.length){return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.emptyMediaWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,s/* .jsx */.Y)("label",{children:o})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,s/* .jsxs */.FD)("p",{css:et.warningText,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",height:20,width:20}),(0,l.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{buttonCss:et.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(g/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.A.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,l.__)("Select from settings","tutor")})]})]})}var eb=e=>{if(e==="video"){ev();return}ep()};var e_=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=Z(eg,r);if(e==="video"){ef()}else{eh()}t.onChange(n);es("");ei({hours:0,minutes:0,seconds:0});if(x){x(n)}};var ey=()=>{if(!(eg===null||eg===void 0?void 0:eg.source)||!j.includes(eg.source)){return false}var e=eg===null||eg===void 0?void 0:eg.source;var t="source_".concat(e);return eg&&eg[t]!==""};var ew=e=>(0,n._)(function*(){en(true);try{var{videoSource:r,videoUrl:n}=e;var a={source:r,["source_".concat(r)]:n};t.onChange(Z(eg,a));x===null||x===void 0?void 0:x(Z(eg,a));el(false);var[i,o]=yield Promise.all([$({source:r,url:n,getYouTubeVideoDurationMutation:ee}),V.includes(r)?L(r,n):null]);if(i){ei(i);M===null||M===void 0?void 0:M(i)}if(o){es(o)}}finally{en(false)}})();var ex=e=>{var t=e.trim();if(em==="embedded")return true;if(em==="shortcode"){return X.shortcode(t)?true:(0,l.__)("Invalid Shortcode","tutor")}if(!X.url(t)){return(0,l.__)("Invalid URL","tutor")}if(em==="youtube"&&!X.youtube(t)){return(0,l.__)("Invalid YouTube URL","tutor")}if(em==="vimeo"&&!X.vimeo(t)){return(0,l.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,s/* .jsxs */.FD)(s/* .Fragment */.FK,{children:[/*#__PURE__*/(0,s/* .jsx */.Y)(W/* ["default"] */.A,{label:o,field:t,fieldState:r,helpText:b,children:()=>{return/*#__PURE__*/(0,s/* .jsx */.Y)("div",{ref:ec,children:/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:!C,fallback:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,s/* .jsx */.Y)(p/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:ey(),fallback:/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:j.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"monitorPlay",height:24,width:24}),onClick:()=>{eb("video")},children:_})}),/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:j.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:!j.includes("html5"),fallback:/*#__PURE__*/(0,s/* .jsx */.Y)("button",{"data-cy":"add-from-url",type:"button",css:et.urlButton,onClick:()=>{el(e=>!e)},children:(0,l.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{el(e=>!e)},children:(0,l.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:j.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.Y)("p",{css:et.infoTexts,children:y})})]}),children:()=>{var e;return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.videoInfoWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.videoInfoCard,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:Q[eg===null||eg===void 0?void 0:eg.source]||"video",height:36,width:36}),/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.videoInfo,children:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.videoInfoTitle,children:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:S/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:V.includes((eg===null||eg===void 0?void 0:eg.source)||"")?eg===null||eg===void 0?void 0:eg["source_".concat(eg.source)]:(e=R.find(e=>e.value===(eg===null||eg===void 0?void 0:eg.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.actionButtons,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:em!=="html5",children:/*#__PURE__*/(0,s/* .jsx */.Y)("button",{type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{el(true)},children:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,s/* .jsx */.Y)("button",{"data-cy":"remove-video",type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e_("video")},children:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.imagePreview({hasImageInput:V.includes((eg===null||eg===void 0?void 0:eg.source)||"")}),children:/*#__PURE__*/(0,s/* .jsxs */.FD)(w/* ["default"] */.A,{when:V.includes((eg===null||eg===void 0?void 0:eg.source)||""),fallback:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.urlData,children:J.watch("videoUrl")}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(f/* ["default"] */.A,{value:eg?{id:Number(eg.poster)||0,url:eg.poster_url||eo,title:""}:null,loading:er,isClearAble:!!(eg===null||eg===void 0?void 0:eg.poster),disabled:["vimeo","youtube"].includes((eg===null||eg===void 0?void 0:eg.source)||""),uploadHandler:()=>eb("poster"),clearHandler:()=>e_("poster"),buttonText:(0,l.__)("Upload Thumbnail","tutor"),infoText:(0,l.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:et.thumbImage,previewImageCss:et.thumbImage,overlayCss:et.thumbImage,replaceButtonText:(0,l.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,{when:ea.hours>0||ea.minutes>0||ea.seconds>0,children:/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.duration,children:[ea.hours>0&&"".concat(ea.hours,"h")," ",ea.minutes,"m ",ea.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,s/* .jsx */.Y)(m/* ["default"] */.A,{triggerRef:ec,isOpen:ed,placement:k/* .POPOVER_PLACEMENTS.MIDDLE */.zA.MIDDLE,animationType:A/* .AnimationType.fadeIn */.J6.fadeIn,closePopover:()=>el(false),positionModifier:{top:17,left:0},maxWidth:"".concat(((B=ec.current)===null||B===void 0?void 0:B.offsetWidth)||300,"px"),children:/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.popoverContent,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(u/* .Controller */.xI,{control:J.control,name:"videoSource",rules:(0,a._)({},(0,H/* .requiredRule */.WN)()),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.Y)(U/* ["default"] */.A,(0,i._)((0,a._)({},e),{options:q,disabled:R.length<=1,placeholder:(0,l.__)("Select source","tutor"),hideCaret:R.length<=1}))}}),/*#__PURE__*/(0,s/* .jsx */.Y)(u/* .Controller */.xI,{control:J.control,name:"videoUrl",rules:(0,i._)((0,a._)({},(0,H/* .requiredRule */.WN)()),{validate:ex}),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.Y)(z/* ["default"] */.A,(0,i._)((0,a._)({},e),{inputCss:/*#__PURE__*/(0,d/* .css */.AH)("border-style:dashed;"),rows:2,placeholder:G[em]||(0,l.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.popoverButtonWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{el(false)},children:(0,l.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:J.handleSubmit(ew),children:(0,l.__)("Ok","tutor")})]})]})})]})};/* export default */const ee=(0,x/* .withVisibilityControl */.M)(J);var et={emptyMediaWrapper:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",_/* .spacing["4"] */.YK["4"],";label{",y/* .typography.caption */.I.caption(),";color:",_/* .colorTokens.text.title */.I6.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",_/* .spacing["8"] */.YK["8"],";border:1px dashed ",_/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",_/* .borderRadius["8"] */.Vq["8"],";background-color:",_/* .colorTokens.background.status.warning */.I6.background.status.warning,";",t&&(0,d/* .css */.AH)(P(),_/* .colorTokens.bg.white */.I6.bg.white))},infoTexts:/*#__PURE__*/(0,d/* .css */.AH)(y/* .typography.tiny */.I.tiny(),";color:",_/* .colorTokens.text.subdued */.I6.text.subdued,";"),warningText:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",_/* .spacing["4"] */.YK["4"],";",y/* .typography.caption */.I.caption(),";color:",_/* .colorTokens.text.warning */.I6.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,d/* .css */.AH)("background:",_/* .colorTokens.bg.white */.I6.bg.white,";"),urlData:/*#__PURE__*/(0,d/* .css */.AH)(y/* .typography.caption */.I.caption(),";",S/* .styleUtils.display.flex */.x.display.flex("column"),";padding:",_/* .spacing["8"] */.YK["8"]," ",_/* .spacing["12"] */.YK["12"],";gap:",_/* .spacing["8"] */.YK["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,d/* .css */.AH)("width:100%;height:100%;border:1px solid ",_/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",_/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;background-color:",_/* .colorTokens.bg.white */.I6.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",_/* .spacing["20"] */.YK["20"],";padding:",_/* .spacing["8"] */.YK["8"]," ",_/* .spacing["12"] */.YK["12"],";"),videoInfoCard:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",_/* .spacing["8"] */.YK["8"],";svg{flex-shrink:0;color:",_/* .colorTokens.icon.hover */.I6.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",_/* .spacing["4"] */.YK["4"],";"),videoInfoTitle:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";",y/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,d/* .css */.AH)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",_/* .colorTokens.background["default"] */.I6.background["default"],";",!t&&(0,d/* .css */.AH)(B(),S/* .styleUtils.overflowYAuto */.x.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,d/* .css */.AH)(y/* .typography.tiny */.I.tiny(),";position:absolute;bottom:",_/* .spacing["12"] */.YK["12"],";right:",_/* .spacing["12"] */.YK["12"],";background-color:rgba(0,0,0,0.5);color:",_/* .colorTokens.text.white */.I6.text.white,";padding:",_/* .spacing["4"] */.YK["4"]," ",_/* .spacing["8"] */.YK["8"],";border-radius:",_/* .borderRadius["6"] */.Vq["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,d/* .css */.AH)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",y/* .typography.small */.I.small("medium"),";color:",_/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",_/* .borderRadius["2"] */.Vq["2"],";padding:0 ",_/* .spacing["4"] */.YK["4"],";margin-bottom:",_/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",_/* .colorTokens.text.brand */.I6.text.brand,";}&:focus-visible{outline:2px solid ",_/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";gap:",_/* .spacing["4"] */.YK["4"],";"),popover:/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;width:100%;z-index:",_/* .zIndex.dropdown */.fE.dropdown,";background-color:",_/* .colorTokens.bg.white */.I6.bg.white,";border-radius:",_/* .borderRadius.card */.Vq.card,";box-shadow:",_/* .shadow.popover */.r7.popover,";"),popoverContent:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",_/* .spacing["12"] */.YK["12"],";padding:",_/* .spacing["16"] */.YK["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,d/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";gap:",_/* .spacing["8"] */.YK["8"],";justify-content:flex-end;")}},37196:function(e,t,r){r.d(t,{A:()=>U});/* import */var n=r(41374);/* import */var a=r(84577);/* import */var i=r(2445);/* import */var o=r(17437);/* import */var s=r(12470);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(3771);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(41594);/* import */var v=/*#__PURE__*/r.n(u);/* import */var f=r(51550);/* import */var p=r(42338);/* import */var h=r(76017);/* import */var m=r(90209);/* import */var g=r(92229);/* import */var b=r(52664);/* import */var _=r(74645);/* import */var y=r(3013);/* import */var w=r(1448);/* import */var x=r(85544);/* import */var A=r(6463);/* import */var Y=r(4892);/* import */var k=r(95729);/* import */var I=r(10840);/* import */var D=r(8501);/* import */var C=r(84133);/* import */var M=r(36154);/* import */var T=r(14631);/* import */var E=r(75510);/* import */var S=r(66279);function O(){var e=(0,a._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);O=function t(){return e};return e}var H;var N={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var F=!!Y/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var K=(H=Y/* .tutorConfig.settings */.P.settings)===null||H===void 0?void 0:H.chatgpt_key_exist;var L=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:a}=e;var{showModal:o}=(0,w/* .useModal */.h)();var[d,l]=(0,u.useState)("");return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:z.editorOverlay,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:z.editWithButton,icon:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"arrowLeft",height:24,width:24}),loading:d==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield o({component:y/* ["default"] */.A,props:{title:(0,s.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,i/* .jsx */.Y)(f/* ["default"] */.A,{type:"warning",icon:"warning",children:(0,s.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,s.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:I/* .zIndex.highest */.fE.highest});if(e==="CONFIRM"){try{l("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{l("")}}})(),children:(0,s.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:z.editWithButton,loading:d==="edit_with",icon:N[t.name]&&/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:N[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{l("edit_with");yield a===null||a===void 0?void 0:a(t);window.location.href=t.link}finally{l("")}})(),children:/* translators: %s is the editor name */(0,s.sprintf)((0,s.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var W=e=>{var{label:t,field:r,fieldState:a,disabled:o,readOnly:d,loading:l,placeholder:c,helpText:v,onChange:f,generateWithAi:p=false,onClickAiButton:y,hasCustomEditorSupport:O=false,isMinimal:H=false,hideMediaButtons:W=false,hideQuickTags:U=false,editors:P=[],editorUsed:B={name:"classic",label:"Classic Editor",link:""},isMagicAi:R=false,autoFocus:q=false,onCustomEditorButtonClick:j,onBackToWPEditorClick:V,onFullScreenChange:G,min_height:Q,max_height:Z,toolbar1:X,toolbar2:$}=e;var J,ee,et,er,en;var{showModal:ea}=(0,w/* .useModal */.h)();var ei=((J=Y/* .tutorConfig.settings */.P.settings)===null||J===void 0?void 0:J.hide_admin_bar_for_users)==="off";var eo=(et=Y/* .tutorConfig.current_user */.P.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(k/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var es=(en=Y/* .tutorConfig.current_user */.P.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(k/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR);var[ed,el]=(0,u.useState)(null);var ec=P.filter(e=>eo||es&&ei||e.name==="droip");var eu=O&&ec.length>0;var ev=eu&&B.name!=="classic";var ef=()=>{if(!F){ea({component:x/* ["default"] */.A,props:{image:E,image2x:T}})}else if(!K){ea({component:A/* ["default"] */.A,props:{image:E,image2x:T}})}else{ea({component:_/* ["default"] */.A,isMagicAi:true,props:{title:(0,s.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:a,is_html:true}});y===null||y===void 0?void 0:y()}};var ep=/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:z.editorLabel,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:z.labelWithAi,children:[t,/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:p,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:z.aiButton,onClick:ef,children:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:z.editorsButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,s.__)("Edit with","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:z.customEditorButtons,children:/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{each:ec,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{content:e.label,delay:200,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:z.customEditorButton,disabled:ed===e.name,onClick:()=>(0,n._)(function*(){try{el(e.name);yield j===null||j===void 0?void 0:j(e);window.location.href=e.link}finally{el(null)}})(),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:ed===e.name,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:N[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,i/* .jsx */.Y)(S/* ["default"] */.A,{label:eu?ep:t,field:r,fieldState:a,disabled:o,readOnly:d,placeholder:c,helpText:v,isMagicAi:R,generateWithAi:!eu&&p,onClickAiButton:ef,replaceEntireLabel:eu,children:()=>{if(l){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:M/* .styleUtils.flexCenter */.x.flexCenter(),children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.Ay,{size:20,color:I/* .colorTokens.icon["default"] */.I6.icon["default"]})})}var e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:z.wrapper({isOverlayVisible:ev}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:ev,children:/*#__PURE__*/(0,i/* .jsx */.Y)(L,{editorUsed:B,onBackToWPEditorClick:V,onCustomEditorButtonClick:j})}),/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(f){f(e)}},isMinimal:H,hideMediaButtons:W,hideQuickTags:U,autoFocus:q,onFullScreenChange:G,readonly:d,min_height:Q,max_height:Z,toolbar1:X,toolbar2:$})]})}})};/* export default */const U=W;var z={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,o/* .css */.AH)("position:relative;",t&&(0,o/* .css */.AH)(O(),I/* .borderRadius["6"] */.Vq["6"]))},editorLabel:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,o/* .css */.AH)(M/* .styleUtils.resetButton */.x.resetButton,";",M/* .styleUtils.flexCenter */.x.flexCenter(),";width:32px;height:32px;border-radius:",I/* .borderRadius["4"] */.Vq["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["8"] */.YK["8"],";color:",I/* .colorTokens.text.hints */.I6.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),customEditorButton:/*#__PURE__*/(0,o/* .css */.AH)(M/* .styleUtils.resetButton */.x.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",I/* .borderRadius.circle */.Vq.circle,";&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;height:100%;width:100%;",M/* .styleUtils.flexCenter */.x.flexCenter(),";gap:",I/* .spacing["8"] */.YK["8"],";background-color:",c()(I/* .colorTokens.background.modal */.I6.background.modal,.6),";border-radius:",I/* .borderRadius["6"] */.Vq["6"],";z-index:",I/* .zIndex.positive */.fE.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,o/* .css */.AH)("background:",I/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",I/* .colorTokens.text.primary */.I6.text.primary,";box-shadow:inset 0 -1px 0 0 ",c()("#1112133D",.24),",0 1px 0 0 ",c()("#1112133D",.8),";")}},6575:function(e,t,r){r.d(t,{f:()=>l});/* import */var n=r(2445);/* import */var a=r(10840);/* import */var i=r(66283);/* import */var o=r(17437);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);var l=/*#__PURE__*/d().forwardRef((e,t)=>{var{src:r,width:a,height:o,brushSize:d,trackStack:l,pointer:u,setTrackStack:v,setPointer:f}=e;var[p,h]=(0,s.useState)(false);var[m,g]=(0,s.useState)({x:0,y:0});var b=(0,s.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,i/* .getCanvas */.dX)(t);if(!r||!n){return}var a=r.getBoundingClientRect();var o=(e.clientX-a.left)*(r.width/a.width);var s=(e.clientY-a.top)*(r.height/a.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(o,s);h(true);g({x:o,y:s})};var y=e=>{var{canvas:r,context:n}=(0,i/* .getCanvas */.dX)(t);if(!r||!n||!b.current){return}var a=r.getBoundingClientRect();var o={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};if(p){(0,i/* .drawPath */.kd)(n,o)}b.current.style.left="".concat(o.x,"px");b.current.style.top="".concat(o.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,i/* .getCanvas */.dX)(t);if(!n||!r){return}h(false);n.closePath();var a=r.getBoundingClientRect();var o={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,i/* .calculateCartesianDistance */.KG)(m,o)===0){(0,i/* .drawPath */.kd)(n,{x:o.x+1,y:o.y+1})}v(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});f(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,i/* .getCanvas */.dX)(t);if(!e||!n){return}var a=new Image;a.src=r;a.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=a.width/a.height;var r=e.width/e.height;var i;var o;if(r>t){o=e.height;i=e.height*t}else{i=e.width;o=e.width/t}var s=(e.width-i)/2;var d=(e.height-o)/2;n.drawImage(a,s,d,i,o);if(l.length===0){v([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var A=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var Y=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,s.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:c.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("canvas",{ref:t,width:a,height:o,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:A,onMouseLeave:Y}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{ref:b,css:c.customCursor(d)})]})});var c={wrapper:/*#__PURE__*/(0,o/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",a/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",a/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",a/* .zIndex.highest */.fE.highest,";display:none;")}},31873:function(e,t,r){r.d(t,{A6:()=>p,co:()=>h,i3:()=>v});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(2445);/* import */var o=r(57148);/* import */var s=r(12470);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(41594);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(49785);var v=[(0,s.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,s.__)("An abstract representation of innovation and creativity","tutor"),(0,s.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,s.__)("A modern design with digital learning icons","tutor"),(0,s.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,s.__)("A peaceful nature scene with soft colors","tutor"),(0,s.__)("A professional boardroom with sleek visuals","tutor"),(0,s.__)("A stack of books with warm, inviting lighting","tutor"),(0,s.__)("A dynamic collage of technology and education themes","tutor"),(0,s.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var f=/*#__PURE__*/c().createContext(null);var p=()=>{var e=(0,l.useContext)(f);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:s,onCloseModal:d}=e;var c=(0,o/* .useFormWithGlobalError */.p)({defaultValues:{prompt:"",style:"none"}});var[v,p]=(0,l.useState)("generation");var[h,m]=(0,l.useState)("");var[g,b]=(0,l.useState)([null,null,null,null]);var _=(0,l.useCallback)(e=>{p(e)},[]);return/*#__PURE__*/(0,i/* .jsx */.Y)(f.Provider,{value:{state:v,onDropdownMenuChange:_,images:g,setImages:b,currentImage:h,setCurrentImage:m,field:r,fieldState:s,onCloseModal:d},children:/*#__PURE__*/(0,i/* .jsx */.Y)(u/* .FormProvider */.Op,(0,a._)((0,n._)({},c),{children:t}))})}},40528:function(e,t,r){r.d(t,{u:()=>z});/* import */var n=r(41374);/* import */var a=r(71893);/* import */var i=r(55456);/* import */var o=r(2445);/* import */var s=r(66273);/* import */var d=r(90209);/* import */var l=r(99281);/* import */var c=r(61046);/* import */var u=r(10840);/* import */var v=r(24219);/* import */var f=r(8501);/* import */var p=r(84133);/* import */var h=r(36512);/* import */var m=r(45063);/* import */var g=r(74469);/* import */var b=r(20108);/* import */var _=r(86160);/* import */var y=r(77628);/* import */var w=r(59120);/* import */var x=r(62646);/* import */var A=r(85712);/* import */var Y=r(39550);/* import */var k=r(36732);/* import */var I=r(73788);/* import */var D=r(18866);/* import */var C=r(45549);/* import */var M=r(36154);/* import */var T=r(51298);/* import */var E=r(17437);/* import */var S=r(12470);/* import */var O=/*#__PURE__*/r.n(S);/* import */var H=r(41594);/* import */var N=/*#__PURE__*/r.n(H);/* import */var F=r(49785);/* import */var K=r(31873);/* import */var L=r(22951);/* import */var W=r(87233);var U=[{label:(0,S.__)("None","tutor"),value:"none",image:A},{label:(0,S.__)("Photo","tutor"),value:"photo",image:k},{label:(0,S.__)("Neon","tutor"),value:"neon",image:x},{label:(0,S.__)("3D","tutor"),value:"3d",image:m},{label:(0,S.__)("Painting","tutor"),value:"painting",image:Y},{label:(0,S.__)("Sketch","tutor"),value:"sketch",image:D},{label:(0,S.__)("Concept","tutor"),value:"concept_art",image:b},{label:(0,S.__)("Illustration","tutor"),value:"illustration",image:w},{label:(0,S.__)("Dreamy","tutor"),value:"dreamy",image:_},{label:(0,S.__)("Filmic","tutor"),value:"filmic",image:y},{label:(0,S.__)("Retro","tutor"),value:"retrowave",image:I},{label:(0,S.__)("Black & White","tutor"),value:"black-and-white",image:g}];var z=()=>{var e=(0,F/* .useForm */.mN)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,K/* .useMagicImageGeneration */.A6)();var u=(0,h/* .useMagicImageGenerationMutation */.R8)();var{showToast:v}=(0,C/* .useToast */.d)();var[m,g]=(0,H.useState)(t.every(e=>e===null));var[b,_]=(0,H.useState)([false,false,false,false]);var y=e.watch("style");var w=e.watch("prompt");var x=!y||!w;var A=t.some(T/* .isDefined */.O9);(0,H.useEffect)(()=>{if(u.isError){v({type:"danger",message:u.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[u.isError]);(0,H.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("form",{css:W/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){_([true,true,true,true]);g(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return u.mutateAsync(e).then(e=>{r(t=>{var r,a;var i=[...t];var o;i[n]=(o=(a=e.data.data)===null||a===void 0?void 0:(r=a[0])===null||r===void 0?void 0:r.b64_json)!==null&&o!==void 0?o:null;return i});_(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{_(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){_([false,false,false,false]);g(true)}})()),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:W/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{when:!m,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:P.images,children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(L/* .AiImageItem */.z,{src:e,loading:b[t],index:t},t)}})})})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:W/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:P.fields,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:P.promptWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(F/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,S.__)("Visualize Your Course","tutor"),placeholder:(0,S.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:u.isPending,enableResize:false}))}),/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:P.inspireButton,onClick:()=>{var t=K/* .inspirationPrompts.length */.i3.length;var r=Math.floor(Math.random()*t);e.reset((0,i._)((0,a._)({},e.getValues()),{prompt:K/* .inspirationPrompts */.i3[r]}))},disabled:u.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"bulbLine"}),(0,S.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(F/* .Controller */.xI,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(l/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,S.__)("Styles","tutor"),options:U,disabled:u.isPending}))})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:W/* .magicAIStyles.rightFooter */.C.rightFooter,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(s/* ["default"] */.A,{type:"submit",disabled:u.isPending||x,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:A?"reload":"magicAi",width:24,height:24}),A?(0,S.__)("Generate Again","tutor"):(0,S.__)("Generate Now","tutor")]})})]})]})};var P={images:/*#__PURE__*/(0,E/* .css */.AH)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",u/* .spacing["12"] */.YK["12"],";align-self:start;padding:",u/* .spacing["24"] */.YK["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,E/* .css */.AH)("display:flex;flex-direction:column;gap:",u/* .spacing["12"] */.YK["12"],";"),promptWrapper:/*#__PURE__*/(0,E/* .css */.AH)("position:relative;textarea{padding-bottom:",u/* .spacing["40"] */.YK["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,E/* .css */.AH)(M/* .styleUtils.resetButton */.x.resetButton,";",v/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",u/* .spacing["12"] */.YK["12"],";left:",u/* .spacing["12"] */.YK["12"],";border:1px solid ",u/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",u/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",u/* .spacing["4"] */.YK["4"],";color:",u/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",u/* .spacing["12"] */.YK["12"],";background-color:",u/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",u/* .colorTokens.background.brand */.I6.background.brand,";color:",u/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",u/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",u/* .colorTokens.background.disable */.I6.background.disable,";color:",u/* .colorTokens.text.disable */.I6.text.disable,";}")}},22951:function(e,t,r){r.d(t,{z:()=>M});/* import */var n=r(41374);/* import */var a=r(84577);/* import */var i=r(2445);/* import */var o=r(17437);/* import */var s=r(12470);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(41594);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(66273);/* import */var v=r(90209);/* import */var f=r(35198);/* import */var p=r(10840);/* import */var h=r(24219);/* import */var m=r(8501);/* import */var g=r(47617);/* import */var b=r(36512);/* import */var _=r(66283);/* import */var y=r(36154);/* import */var w=r(85713);/* import */var x=r(31873);function A(){var e=(0,a._)(["\n      background-position: top left;\n    "]);A=function t(){return e};return e}function Y(){var e=(0,a._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);Y=function t(){return e};return e}function k(){var e=(0,a._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);k=function t(){return e};return e}function I(){var e=(0,a._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);I=function t(){return e};return e}function D(){var e=(0,a._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);D=function t(){return e};return e}var C=[{label:(0,s.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
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
{label:(0,s.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"download",width:24,height:24})}];var M=e=>{var{src:t,loading:r,index:a}=e;var o=(0,l.useRef)(null);var[d,c]=(0,l.useState)(false);var{onDropdownMenuChange:p,setCurrentImage:h,onCloseModal:y,field:A}=(0,x/* .useMagicImageGeneration */.A6)();var Y=(0,b/* .useStoreAIGeneratedImageMutation */.ah)();if(r||!t){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:E.loader(a+1)})}return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:E.image({isActive:Y.isPending}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:t,alt:(0,s.__)("Generated Image","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{"data-actions":true,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:E.useButton,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(u/* ["default"] */.A,{variant:"primary",disabled:Y.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield Y.mutateAsync({image:t});if(e.data){A.onChange(e.data);y()}})(),loading:Y.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"download",width:24,height:24}),(0,s.__)("Use This","tutor")]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{variant:"primary",size:"icon",css:E.threeDots,ref:o,onClick:()=>c(true),children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(f/* ["default"] */.A,{triggerRef:o,isOpen:d,arrow:true,closePopover:()=>{c(false)},animationType:g/* .AnimationType.slideDown */.J6.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:E.dropdownOptions,children:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{each:C,children:(e,r)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:E.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{h(t);p(e.value);break}case"download":{var r="".concat((0,w/* .nanoid */.Ak)(),".png");(0,_/* .downloadBase64Image */.JD)(t,r);break}default:break}c(false)},children:[e.icon,e.label]},r)})})})]})};var T=/*#__PURE__*/(0,o/* .keyframes */.i7)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var E={loader:e=>/*#__PURE__*/(0,o/* .css */.AH)("border-radius:",p/* .borderRadius["12"] */.Vq["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",T," 2s linear infinite;",e===1&&(0,o/* .css */.AH)(A())," ",e===2&&(0,o/* .css */.AH)(Y()),"		",e===3&&(0,o/* .css */.AH)(k()),"		",e===4&&(0,o/* .css */.AH)(I())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:100%;overflow:hidden;border-radius:",p/* .borderRadius["12"] */.Vq["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,o/* .css */.AH)(D(),p/* .colorTokens.stroke.brand */.I6.stroke.brand),"    &:hover,&:focus-within{outline-color:",p/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;top:",p/* .spacing["8"] */.YK["8"],";right:",p/* .spacing["8"] */.YK["8"],";border-radius:",p/* .borderRadius["4"] */.Vq["4"],";"),useButton:/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;left:50%;bottom:",p/* .spacing["12"] */.YK["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",p/* .spacing["4"] */.YK["4"],";}"),dropdownOptions:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;flex-direction:column;padding-block:",p/* .spacing["8"] */.YK["8"],";"),dropdownItem:/*#__PURE__*/(0,o/* .css */.AH)(h/* .typography.small */.I.small(),";",y/* .styleUtils.resetButton */.x.resetButton,";height:40px;display:flex;gap:",p/* .spacing["10"] */.YK["10"],";align-items:center;transition:background-color 0.3s ease;color:",p/* .colorTokens.text.title */.I6.text.title,";padding-inline:",p/* .spacing["8"] */.YK["8"],";cursor:pointer;svg{color:",p/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background-color:",p/* .colorTokens.background.hover */.I6.background.hover,";}")}},20651:function(e,t,r){r.d(t,{A:()=>O});/* import */var n=r(41374);/* import */var a=r(71893);/* import */var i=r(55456);/* import */var o=r(2445);/* import */var s=r(66273);/* import */var d=r(90209);/* import */var l=r(45257);/* import */var c=r(64194);/* import */var u=r(61046);/* import */var v=r(10840);/* import */var f=r(24219);/* import */var p=r(84133);/* import */var h=r(68118);/* import */var m=r(57148);/* import */var g=r(36512);/* import */var b=r(66283);/* import */var _=r(36154);/* import */var y=r(85713);/* import */var w=r(17437);/* import */var x=r(12470);/* import */var A=/*#__PURE__*/r.n(x);/* import */var Y=r(41594);/* import */var k=/*#__PURE__*/r.n(Y);/* import */var I=r(49785);/* import */var D=r(6575);/* import */var C=r(31873);/* import */var M=r(87233);var T=620;var E=620;var S=()=>{var e=(0,m/* .useFormWithGlobalError */.p)({defaultValues:{brush_size:40,prompt:""}});var t=(0,g/* .useMagicFillImageMutation */.wt)();var r=(0,Y.useRef)(null);var{onDropdownMenuChange:v,currentImage:f,field:_,onCloseModal:A}=(0,C/* .useMagicImageGeneration */.A6)();var k=(0,g/* .useStoreAIGeneratedImageMutation */.ah)();var S=(0,h/* .useDebounce */.d)(e.watch("brush_size",40));var[O,H]=(0,Y.useState)([]);var[F,K]=(0,Y.useState)(1);var L=(0,Y.useCallback)((e,t)=>{var n;var a=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!a){return}for(var i of t.slice(0,e)){a.putImageData(i,0,0)}},[]);(0,Y.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=S},[S]);(0,Y.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){L(F+1,O);K(e=>Math.min(e+1,O.length));return}if(e.key.toUpperCase()==="Z"){L(F-1,O);K(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[F,O,L]);if(!f){return null}return/*#__PURE__*/(0,o/* .jsxs */.FD)("form",{css:M/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var a=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!a){return}var i={prompt:e.prompt,image:(0,b/* .getImageData */.M5)(n)};var o=yield t.mutateAsync(i);if(o){var s=new Image;s.onload=()=>{n.width=T;n.height=E;a.drawImage(s,0,0,n.width,n.height);a.lineWidth=S;a.lineJoin="round";a.lineCap="round"};s.src=o}})()),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:M/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.leftWrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.actionBar,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.backButtonWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:N.backButton,onClick:()=>v("generation"),children:/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"arrowLeft"})}),(0,x.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.actions,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"ghost",disabled:O.length===0,onClick:()=>{L(1,O);H(O.slice(0,1));K(1)},children:(0,x.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(l/* .Separator */.w,{variant:"vertical",css:/*#__PURE__*/(0,w/* .css */.AH)("min-height:16px;")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.undoRedo,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:F<=1,onClick:()=>{L(F-1,O);K(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:F===O.length,onClick:()=>{L(F+1,O);K(e=>Math.min(e+1,O.length))},children:/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.canvasAndLoading,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(D/* .DrawingCanvas */.f,{ref:r,width:T,height:E,src:f,brushSize:S,trackStack:O,pointer:F,setTrackStack:H,setPointer:K}),/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{when:t.isPending,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:N.loading})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:N.footerActions,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:N.footerActionsLeft,children:/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"secondary",onClick:()=>{var e="".concat((0,y/* .nanoid */.Ak)(),".png");var{canvas:t}=(0,b/* .getCanvas */.dX)(r);if(!t)return;(0,b/* .downloadBase64Image */.JD)((0,b/* .getImageData */.M5)(t),e)},children:/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:M/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.fields,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(I/* .Controller */.xI,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(I/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,x.__)("Describe the Fill","tutor"),placeholder:(0,x.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:[M/* .magicAIStyles.rightFooter */.C.rightFooter,/*#__PURE__*/(0,w/* .css */.AH)("margin-top:auto;")],children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.footerButtons,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)(s/* ["default"] */.A,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,x.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,o/* .jsx */.Y)(s/* ["default"] */.A,{variant:"primary_outline",disabled:t.isPending,loading:k.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,b/* .getCanvas */.dX)(r);if(!e)return;var t=yield k.mutateAsync({image:(0,b/* .getImageData */.M5)(e)});if(t.data){_.onChange(t.data);A()}})(),children:(0,x.__)("Use Image","tutor")})]})})]})]})};/* export default */const O=S;var H={loading:/*#__PURE__*/(0,w/* .keyframes */.i7)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,w/* .keyframes */.i7)("0%{left:0%;}100%{left:100%;}")};var N={canvasAndLoading:/*#__PURE__*/(0,w/* .css */.AH)("position:relative;z-index:",v/* .zIndex.positive */.fE.positive,";"),loading:/*#__PURE__*/(0,w/* .css */.AH)("position:absolute;top:0;left:0;width:100%;height:100%;background:",v/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",H.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",H.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;flex-direction:column;gap:",v/* .spacing["12"] */.YK["12"],";"),leftWrapper:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.YK["8"],";padding-block:",v/* .spacing["16"] */.YK["16"],";"),footerButtons:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;flex-direction:column;gap:",v/* .spacing["8"] */.YK["8"],";"),footerActions:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.YK["12"],";"),actions:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["16"] */.YK["16"],";"),undoRedo:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.YK["12"],";"),backButtonWrapper:/*#__PURE__*/(0,w/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["8"] */.YK["8"],";",f/* .typography.body */.I.body("medium"),";color:",v/* .colorTokens.text.title */.I6.text.title,";"),backButton:/*#__PURE__*/(0,w/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";width:24px;height:24px;border-radius:",v/* .borderRadius["4"] */.Vq["4"],";border:1px solid ",v/* .colorTokens.stroke["default"] */.I6.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,w/* .css */.AH)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,w/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,w/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",v/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",v/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",v/* .zIndex.highest */.fE.highest,";display:none;")}},87233:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(10840);/* import */var a=r(17437);var i={wrapper:/*#__PURE__*/(0,a/* .css */.AH)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",n/* .Breakpoint.tablet */.EA.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",n/* .zIndex.level */.fE.level,";"),right:/*#__PURE__*/(0,a/* .css */.AH)("padding:",n/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",n/* .zIndex.positive */.fE.positive,";"),rightFooter:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;gap:",n/* .spacing["8"] */.YK["8"],";margin-top:auto;padding-top:80px;")}},39655:function(e,t,r){r.d(t,{A:()=>c});/* import */var n=r(2445);/* import */var a=r(31873);/* import */var i=r(40528);/* import */var o=r(20651);/* import */var s=r(25405);function d(){var{state:e}=(0,a/* .useMagicImageGeneration */.A6)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.Y)(i/* .ImageGeneration */.u,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.Y)(o/* ["default"] */.A,{});default:return null}}var l=e=>{var{title:t,icon:r,closeModal:i,field:o,fieldState:l}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{onClose:i,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.Y)(a/* .MagicImageGenerationProvider */.co,{field:o,fieldState:l,onCloseModal:i,children:/*#__PURE__*/(0,n/* .jsx */.Y)(d,{})})})};/* export default */const c=l},68118:function(e,t,r){r.d(t,{d:()=>i});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);var i=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,a]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},87018:function(e,t,r){r.d(t,{$:()=>d});/* import */var n=r(71893);/* import */var a=r(51298);/* import */var i=r(41594);/* import */var o=/*#__PURE__*/r.n(i);var s={defaultValue:false};var d=e=>{var t=(0,i.useRef)(null);var r=(0,n._)({},s,e);var[o,d]=(0,i.useState)(r.defaultValue);(0,i.useEffect)(()=>{if(!(0,a/* .isDefined */.O9)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){d(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){d(false);return}d(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:o}}},35804:function(e,t,r){r.d(t,{A:()=>u});/* import */var n=r(71893);/* import */var a=r(55456);/* import */var i=r(12470);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(45549);var c=e=>{var{options:t={},onChange:r,initialFiles:o}=e;var{showToast:d}=(0,l/* .useToast */.d)();var c=(0,s.useMemo)(()=>o?Array.isArray(o)?o:[o]:[],[o]);var u=(0,s.useMemo)(()=>(0,a._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[v,f]=(0,s.useState)(c);(0,s.useEffect)(()=>{if(c&&!v.length){f(c)}},[v,c]);var p=(0,s.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();v.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=v.filter(e=>n.has(e.id));var o=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){d({// translators: %s is the file title
message:(0,i.sprintf)((0,i.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var s=u.multiple?[...a,...o]:o.slice(0,1);if(u.maxFiles&&s.length>u.maxFiles){d({// translators: %d is the maximum number of files allowed
message:(0,i.sprintf)((0,i.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}f(s);r===null||r===void 0?void 0:r(u.multiple?s:s[0]||null);t.close()});t.open()},[u,r,v,d]);var h=(0,s.useCallback)(()=>{f([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:p,existingFiles:v,resetFiles:h}};/* export default */const u=c},95759:function(e,t,r){r.d(t,{A:()=>m});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(42338);/* import */var l=r(10840);/* import */var c=r(24219);/* import */var u=r(47617);/* import */var v=r(36154);/* import */var f=r(35198);function p(){var e=(0,n._)(["\n      button:last-of-type {\n        color: ",";\n      }\n    "]);p=function t(){return e};return e}var h=e=>{var{placement:t,triggerRef:r,isOpen:n,title:i,message:s,onConfirmation:l,onCancel:c,isLoading:v=false,gap:p,maxWidth:h,closePopover:m,animationType:b=u/* .AnimationType.slideLeft */.J6.slideLeft,arrow:_=false,confirmButton:y,cancelButton:w,positionModifier:x}=e;var A,Y,k,I,D;return/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{triggerRef:r,isOpen:n,arrow:_,placement:t,closePopover:m,animationType:b,maxWidth:h,positionModifier:x,gap:p,children:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.content,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.body,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:g.title,children:i}),/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:g.description,children:s})]}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.footer({isDelete:(A=y===null||y===void 0?void 0:y.isDelete)!==null&&A!==void 0?A:false}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{variant:(Y=w===null||w===void 0?void 0:w.variant)!==null&&Y!==void 0?Y:"text",size:"small",onClick:c!==null&&c!==void 0?c:m,children:(k=w===null||w===void 0?void 0:w.text)!==null&&k!==void 0?k:(0,o.__)("Cancel","tutor")}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{"data-cy":"confirm-button",variant:(I=y===null||y===void 0?void 0:y.variant)!==null&&I!==void 0?I:"text",onClick:()=>{l();m()},loading:v,size:"small",children:(D=y===null||y===void 0?void 0:y.text)!==null&&D!==void 0?D:(0,o.__)("Ok","tutor")})]})]})})};/* export default */const m=h;var g={content:/*#__PURE__*/(0,i/* .css */.AH)("background-color:",l/* .colorTokens.surface.tutor */.I6.surface.tutor,";box-shadow:",l/* .shadow.popover */.r7.popover,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";::-webkit-scrollbar{background-color:",l/* .colorTokens.surface.tutor */.I6.surface.tutor,";width:10px;}::-webkit-scrollbar-thumb{background-color:",l/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";}"),title:/*#__PURE__*/(0,i/* .css */.AH)(c/* .typography.small */.I.small("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";"),description:/*#__PURE__*/(0,i/* .css */.AH)(c/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";"),body:/*#__PURE__*/(0,i/* .css */.AH)("padding:",l/* .spacing["16"] */.YK["16"]," ",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["12"] */.YK["12"],";",v/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["8"] */.YK["8"],";"),footer:e=>{var{isDelete:t=false}=e;return/*#__PURE__*/(0,i/* .css */.AH)(v/* .styleUtils.display.flex */.x.display.flex(),";padding:",l/* .spacing["4"] */.YK["4"]," ",l/* .spacing["16"] */.YK["16"]," ",l/* .spacing["8"] */.YK["8"],";justify-content:end;gap:",l/* .spacing["10"] */.YK["10"],";",t&&(0,i/* .css */.AH)(p(),l/* .colorTokens.text.error */.I6.text.error))}}},19595:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(17437);/* import */var o=r(10840);/* import */var s=r(24219);/* import */var d=r(84133);/* import */var l=r(51298);function c(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      background-color: ",";\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      gap: ",";\n      padding: ",";\n      padding-bottom: ",";\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n        max-width: 282px;\n      "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n      gap: ",";\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n      ",";\n      color: ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      ",";\n      color: ",";\n    "]);h=function t(){return e};return e}function m(){var e=(0,n._)(["\n      gap: ",";\n      margin-top: ",";\n    "]);m=function t(){return e};return e}var g=e=>{var{emptyStateImage:t,emptyStateImage2x:r,imageAltText:n,title:i,size:o="medium",description:s,actions:c,removeBorder:u=true,wrapperCss:v}=e;return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[_.bannerWrapper(o,u,!!(0,l/* .isDefined */.O9)(t)),v],children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:t,alt:n,srcSet:r?"".concat(r," 2x"):""})}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.messageWrapper(o),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("h5",{css:_.title(o),children:i}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:s,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:_.description(o),children:s})}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:c,children:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{"data-actions":true,css:_.actionWrapper(o),children:c})})]})]})};/* export default */const b=g;var _={bannerWrapper:(e,t,r)=>/*#__PURE__*/(0,i/* .css */.AH)("display:grid;place-items:center;justify-content:center;gap:",o/* .spacing["36"] */.YK["36"],";padding:",r?"".concat(o/* .spacing["16"] */.YK["16"]," ").concat(o/* .spacing["20"] */.YK["20"]):"".concat(o/* .spacing["20"] */.YK["20"]),";",!t&&(0,i/* .css */.AH)(c(),o/* .colorTokens.stroke.divider */.I6.stroke.divider,o/* .borderRadius.card */.Vq.card,o/* .colorTokens.background.white */.I6.background.white)," ",e==="small"&&(0,i/* .css */.AH)(u(),o/* .spacing["12"] */.YK["12"],r?o/* .spacing["12"] */.YK["12"]:o/* .spacing["16"] */.YK["16"],r?o/* .spacing["24"] */.YK["24"]:undefined),"    & img{max-width:640px;width:100%;height:auto;border-radius:",e==="small"?o/* .borderRadius["6"] */.Vq["6"]:o/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;object-position:center;object-fit:cover;",e==="small"&&(0,i/* .css */.AH)(v()),"}"),messageWrapper:e=>/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;max-width:566px;width:100%;gap:",o/* .spacing["12"] */.YK["12"],";text-align:center;",e==="small"&&(0,i/* .css */.AH)(f(),o/* .spacing["8"] */.YK["8"])),title:e=>/*#__PURE__*/(0,i/* .css */.AH)(s/* .typography.heading5 */.I.heading5(),";color:",o/* .colorTokens.text.primary */.I6.text.primary,";",e==="small"&&(0,i/* .css */.AH)(p(),s/* .typography.caption */.I.caption("medium"),o/* .colorTokens.text.primary */.I6.text.primary)),description:e=>/*#__PURE__*/(0,i/* .css */.AH)(s/* .typography.body */.I.body(),";color:",o/* .colorTokens.text.hints */.I6.text.hints,";",e==="small"&&(0,i/* .css */.AH)(h(),s/* .typography.tiny */.I.tiny(),o/* .colorTokens.text.hints */.I6.text.hints)),actionWrapper:e=>/*#__PURE__*/(0,i/* .css */.AH)("margin-top:",o/* .spacing["20"] */.YK["20"],";display:flex;justify-content:center;align-items:center;gap:",o/* .spacing["12"] */.YK["12"],";",e==="small"&&(0,i/* .css */.AH)(m(),o/* .spacing["8"] */.YK["8"],o/* .spacing["8"] */.YK["8"]))}},28109:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(84577);/* import */var a=r(2445);/* import */var i=r(10840);/* import */var o=r(36154);/* import */var s=r(17437);/* import */var d=r(41594);/* import */var l=/*#__PURE__*/r.n(d);function c(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);v=function t(){return e};return e}function f(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);f=function t(){return e};return e}var p=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:i="horizontal",disabled:o=false,wrapperCss:s}=e;var l=(0,d.useRef)(n.map(()=>/*#__PURE__*/(0,d.createRef)()));var[c,u]=(0,d.useState)();(0,d.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,a,i,o;var s=l.current[r];var d={width:((n=s.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((a=s.current)===null||a===void 0?void 0:a.offsetHeight)||0,left:((i=s.current)===null||i===void 0?void 0:i.offsetLeft)||0,top:((o=s.current)===null||o===void 0?void 0:o.offsetTop)||0};e[t.value]=d;return e},{});u(e)},[n]);return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:m.container,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:[m.wrapper(i),s],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{onClick:()=>{r(e.value)},css:m.tabButton({isActive:t===e.value,orientation:i}),disabled:o||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:l.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,a/* .jsxs */.FD)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:m.activeBadge})]},n)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:m.indicator((c===null||c===void 0?void 0:c[t])||{width:0,height:0,left:0,top:0},i)})]})};/* export default */const h=p;var m={container:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",i/* .shadow.tabs */.r7.tabs,";",e==="vertical"&&(0,s/* .css */.AH)(c())),indicator:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",i/* .colorTokens.brand.blue */.I6.brand.blue,";border-radius:",i/* .borderRadius["4"] */.Vq["4"]," ",i/* .borderRadius["4"] */.Vq["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,s/* .css */.AH)(u(),e.height,e.top,i/* .borderRadius["4"] */.Vq["4"],i/* .borderRadius["4"] */.Vq["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)(o/* .styleUtils.resetButton */.x.resetButton,";font-size:",i/* .fontSize["15"] */.J["15"],";line-height:",i/* .lineHeight["20"] */.K_["20"],";display:flex;justify-content:center;align-items:center;gap:",i/* .spacing["6"] */.YK["6"],";padding:",i/* .spacing["12"] */.YK["12"]," ",i/* .spacing["20"] */.YK["20"],";color:",i/* .colorTokens.text.subdued */.I6.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",i/* .colorTokens.text.subdued */.I6.text.subdued,";box-shadow:none;}& > svg{color:",i/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="vertical"&&(0,s/* .css */.AH)(v(),i/* .colorTokens.stroke.border */.I6.stroke.border,i/* .colorTokens.stroke.border */.I6.stroke.border)," ",t&&(0,s/* .css */.AH)(f(),i/* .colorTokens.background.white */.I6.background.white,i/* .colorTokens.text.primary */.I6.text.primary,i/* .colorTokens.text.subdued */.I6.text.subdued,i/* .colorTokens.icon.brand */.I6.icon.brand),"    &:disabled{color:",i/* .colorTokens.text.disable */.I6.text.disable,";&::before{background:",i/* .colorTokens.text.disable */.I6.text.disable,";}}&:focus-visible{outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",i/* .borderRadius["4"] */.Vq["4"],";}")},activeBadge:/*#__PURE__*/(0,s/* .css */.AH)("display:inline-block;height:8px;width:8px;border-radius:",i/* .borderRadius.circle */.Vq.circle,";background-color:",i/* .colorTokens.color.success["80"] */.I6.color.success["80"],";")}},85973:function(e,t,r){r.d(t,{TM:()=>c,gr:()=>v});/* import */var n=r(71893);/* import */var a=r(97286);/* import */var i=r(24880);/* import */var o=r(94747);/* import */var s=r(53127);/* import */var d=r(37381);var l=e=>{return s/* .wpAjaxInstance.get */.b.get(d/* ["default"].GET_COURSE_LIST */.A.GET_COURSE_LIST,{params:e})};var c=e=>{var{params:t,isEnabled:r}=e;return(0,a/* .useQuery */.I)({queryKey:["PrerequisiteCourses",t],queryFn:()=>l((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:i/* .keepPreviousData */.rX,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return s/* .wpAjaxInstance.post */.b.post(d/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.A.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var v=()=>{return(0,o/* .useMutation */.n)({mutationFn:u})};var f=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var p=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>f(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},66283:function(e,t,r){r.d(t,{JD:()=>o,KG:()=>a,M5:()=>l,dX:()=>d,kd:()=>n});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function a(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function i(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var a=new Uint8Array(n);for(var i=0;i<t.length;i++){a[i]=t.charCodeAt(i)}return new Blob([n],{type:r})}function o(e,t){var r=i(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function s(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var d=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var l=e=>{return e.toDataURL("image/png")}},38945:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},44880:function(e,t,r){r.d(t,{B:()=>i});/* import */var n=r(35581);/* import */var a=r(18525);class i extends a/* .TZDateMini */.q{//#region static
static tz(e,...t){return t.length?new i(...t,e):new i(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,a]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${a} (${(0,n/* .tzName */.K)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new i(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new i(+new Date(e),this.timeZone)}}},18525:function(e,t,r){r.d(t,{q:()=>a});/* import */var n=r(90865);class a extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.Y)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));d(this,NaN);o(this)}}}static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new a(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.Y)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);o(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}// Assign getters and setters
const i=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!i.test(e))return;const t=e.replace(i,"$1UTC");// Filter out methods without UTC counterparts
if(!a.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
a.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
a.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);s(this);return+this};// Assign UTC setter
a.prototype[t]=function(){Date.prototype[t].apply(this,arguments);o(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function o(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.Y)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function s(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
d(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function d(e){// Save the time zone offset before all the adjustments
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
const i=-new Date(+e).getTimezoneOffset();const o=-new Date(+a).getTimezoneOffset();const s=i-o;// Detect the DST shift. System DST change will occur both on
const d=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(s&&d)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=i-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=i>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const v=Math.round(-((0,n/* .tzOffset */.Y)(e.timeZone,e)*60))%60;if(v||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+v);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+v+u)}//#endregion
//#region Post-adjustment DST fix
const f=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const m=h-p;const g=p!==r;const b=m-l;if(g&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const a=p-r;if(a){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a)}}//#endregion
}},75583:function(e,t,r){r.d(t,{BB:()=>/* reexport safe */a.B});/* import */var n=r(38945);/* import */var a=r(44880);/* import */var i=r(18525);/* import */var o=r(61578)},61578:function(e,t,r){/* import */var n=r(44880);/**
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
.join(" ")}},90865:function(e,t,r){r.d(t,{Y:()=>i});const n={};const a={};/**
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
 */function i(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const i=r(t).split("GMT")[1];if(i in a)return a[i];return s(i,i.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in a)return a[e];const t=e?.match(o);if(t)return s(e,t.slice(1));return NaN}}const o=/([+-]\d\d):?(\d\d)?/;function s(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const i=+(t[2]||0)/60;return a[e]=r*60+n>0?r*60+n+i:r*60-n-i}},87496:function(e,t,r){r.d(t,{C:()=>o});/* import */var n=r(41594);/* import */var a=r(26261);/* import */var i=r(97665);"use client";// src/useIsFetching.ts
function o(e,t){const r=(0,i/* .useQueryClient */.jE)(t);const o=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>o.subscribe(a/* .notifyManager.batchCalls */.jG.batchCalls(e)),[o]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},5170:function(e,t,r){r.d(t,{h:()=>I});/* import */var n=r(75583);/* import */var a=r(41594);/* import */var i=r(56066);/* import */var o=r(32850);/* import */var s=r(37836);/* import */var d=r(19287);/* import */var l=r(87096);/* import */var c=r(78933);/* import */var u=r(1207);/* import */var v=r(39903);/* import */var f=r(63612);/* import */var p=r(66564);/* import */var h=r(86607);/* import */var m=r(57899);/* import */var g=r(93116);/* import */var b=r(97766);/* import */var _=r(68587);/* import */var y=r(58071);/* import */var w=r(51409);/* import */var x=r(53581);/* import */var A=r(33127);/* import */var Y=r(52044);/* import */var k=r(70684);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function I(e){let t=e;if(t.timeZone){t={...e};if(t.today){t.today=new n/* .TZDate */.BB(t.today,t.timeZone)}if(t.month){t.month=new n/* .TZDate */.BB(t.month,t.timeZone)}if(t.defaultMonth){t.defaultMonth=new n/* .TZDate */.BB(t.defaultMonth,t.timeZone)}if(t.startMonth){t.startMonth=new n/* .TZDate */.BB(t.startMonth,t.timeZone)}if(t.endMonth){t.endMonth=new n/* .TZDate */.BB(t.endMonth,t.timeZone)}if(t.mode==="single"&&t.selected){t.selected=new n/* .TZDate */.BB(t.selected,t.timeZone)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>new n/* .TZDate */.BB(e,t.timeZone))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?new n/* .TZDate */.BB(t.selected.from,t.timeZone):undefined,to:t.selected.to?new n/* .TZDate */.BB(t.selected.to,t.timeZone):undefined}}}const{components:r,formatters:I,labels:D,dateLib:C,locale:M,classNames:T}=(0,a.useMemo)(()=>{const e={...i/* .enUS */.c,...t.locale};const r=new o/* .DateLib */.i0({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,l/* .getComponents */.P)(t.components),formatters:(0,v/* .getFormatters */.G)(t.formatters),labels:{...g,...t.labels},locale:e,classNames:{...(0,u/* .getDefaultClassNames */.a)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);const{captionLayout:E,mode:S,navLayout:O,numberOfMonths:H=1,onDayBlur:N,onDayClick:F,onDayFocus:K,onDayKeyDown:L,onDayMouseEnter:W,onDayMouseLeave:U,onNextClick:z,onPrevClick:P,showWeekNumber:B,styles:R}=t;const{formatCaption:q,formatDay:j,formatMonthDropdown:V,formatWeekNumber:G,formatWeekNumberHeader:Q,formatWeekdayName:Z,formatYearDropdown:X}=I;const $=(0,y/* .useCalendar */._)(t,C);const{days:J,months:ee,navStart:et,navEnd:er,previousMonth:en,nextMonth:ea,goToMonth:ei}=$;const eo=(0,s/* .createGetModifiers */.x)(J,t,et,er,C);const{isSelected:es,select:ed,selected:el}=(0,A/* .useSelection */.C)(t,C)??{};const{blur:ec,focused:eu,isFocusTarget:ev,moveFocus:ef,setFocused:ep}=(0,x/* .useFocus */.i)(t,$,eo,es??(()=>false),C);const{labelDayButton:eh,labelGridcell:em,labelGrid:eg,labelMonthDropdown:eb,labelNav:e_,labelPrevious:ey,labelNext:ew,labelWeekday:ex,labelWeekNumber:eA,labelWeekNumberHeader:eY,labelYearDropdown:ek}=D;const eI=(0,a.useMemo)(()=>(0,h/* .getWeekdays */.c)(C,t.ISOWeek),[C,t.ISOWeek]);const eD=S!==undefined||F!==undefined;const eC=(0,a.useCallback)(()=>{if(!en)return;ei(en);P?.(en)},[en,ei,P]);const eM=(0,a.useCallback)(()=>{if(!ea)return;ei(ea);z?.(ea)},[ei,ea,z]);const eT=(0,a.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();ep(e);ed?.(e.date,t,r);F?.(e.date,t,r)},[ed,F,ep]);const eE=(0,a.useCallback)((e,t)=>r=>{ep(e);K?.(e.date,t,r)},[K,ep]);const eS=(0,a.useCallback)((e,t)=>r=>{ec();N?.(e.date,t,r)},[ec,N]);const eO=(0,a.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];ef(e,t)}L?.(e.date,r,n)},[ef,L,t.dir]);const eH=(0,a.useCallback)((e,t)=>r=>{W?.(e.date,t,r)},[W]);const eN=(0,a.useCallback)((e,t)=>r=>{U?.(e.date,t,r)},[U]);const eF=(0,a.useCallback)(e=>t=>{const r=Number(t.target.value);const n=C.setMonth(C.startOfMonth(e),r);ei(n)},[C,ei]);const eK=(0,a.useCallback)(e=>t=>{const r=Number(t.target.value);const n=C.setYear(C.startOfMonth(e),r);ei(n)},[C,ei]);const{className:eL,style:eW}=(0,a.useMemo)(()=>({className:[T[b.UI.Root],t.className].filter(Boolean).join(" "),style:{...R?.[b.UI.Root],...t.style}}),[T,t.className,t.style,R]);const eU=(0,c/* .getDataAttributes */.C)(t);const ez=(0,a.useRef)(null);(0,_/* .useAnimation */.s)(ez,Boolean(t.animate),{classNames:T,months:ee,focused:eu,dateLib:C});const eP={dayPickerProps:t,selected:el,select:ed,isSelected:es,months:ee,nextMonth:ea,previousMonth:en,goToMonth:ei,getModifiers:eo,components:r,classNames:T,styles:R,labels:D,formatters:I};return a.createElement(w/* .dayPickerContext.Provider */.S.Provider,{value:eP},a.createElement(r.Root,{rootRef:t.animate?ez:undefined,className:eL,style:eW,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...eU},a.createElement(r.Months,{className:T[b.UI.Months],style:R?.[b.UI.Months]},!t.hideNavigation&&!O&&a.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:T[b.UI.Nav],style:R?.[b.UI.Nav],"aria-label":e_(),onPreviousClick:eC,onNextClick:eM,previousMonth:en,nextMonth:ea}),ee.map((e,n)=>{return a.createElement(r.Month,{"data-animated-month":t.animate?"true":undefined,className:T[b.UI.Month],style:R?.[b.UI.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:n,displayIndex:n,calendarMonth:e},O==="around"&&!t.hideNavigation&&n===0&&a.createElement(r.PreviousMonthButton,{type:"button",className:T[b.UI.PreviousMonthButton],tabIndex:en?undefined:-1,"aria-disabled":en?undefined:true,"aria-label":ey(en),onClick:eC,"data-animated-button":t.animate?"true":undefined},a.createElement(r.Chevron,{disabled:en?undefined:true,className:T[b.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),a.createElement(r.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:T[b.UI.MonthCaption],style:R?.[b.UI.MonthCaption],calendarMonth:e,displayIndex:n},E?.startsWith("dropdown")?a.createElement(r.DropdownNav,{className:T[b.UI.Dropdowns],style:R?.[b.UI.Dropdowns]},(()=>{const n=E==="dropdown"||E==="dropdown-months"?a.createElement(r.MonthsDropdown,{key:"month",className:T[b.UI.MonthsDropdown],"aria-label":eb(),classNames:T,components:r,disabled:Boolean(t.disableNavigation),onChange:eF(e.date),options:(0,f/* .getMonthOptions */.L)(e.date,et,er,I,C),style:R?.[b.UI.Dropdown],value:C.getMonth(e.date)}):a.createElement("span",{key:"month"},V(e.date,C));const i=E==="dropdown"||E==="dropdown-years"?a.createElement(r.YearsDropdown,{key:"year",className:T[b.UI.YearsDropdown],"aria-label":ek(C.options),classNames:T,components:r,disabled:Boolean(t.disableNavigation),onChange:eK(e.date),options:(0,m/* .getYearOptions */.g)(et,er,I,C,Boolean(t.reverseYears)),style:R?.[b.UI.Dropdown],value:C.getYear(e.date)}):a.createElement("span",{key:"year"},X(e.date,C));const o=C.getMonthYearOrder()==="year-first"?[i,n]:[n,i];return o})(),a.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},q(e.date,C.options,C))):// biome-ignore lint/a11y/useSemanticElements: breaking change
a.createElement(r.CaptionLabel,{className:T[b.UI.CaptionLabel],role:"status","aria-live":"polite"},q(e.date,C.options,C))),O==="around"&&!t.hideNavigation&&n===H-1&&a.createElement(r.NextMonthButton,{type:"button",className:T[b.UI.NextMonthButton],tabIndex:ea?undefined:-1,"aria-disabled":ea?undefined:true,"aria-label":ew(ea),onClick:eM,"data-animated-button":t.animate?"true":undefined},a.createElement(r.Chevron,{disabled:ea?undefined:true,className:T[b.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),n===H-1&&O==="after"&&!t.hideNavigation&&a.createElement(r.Nav,{"data-animated-nav":t.animate?"true":undefined,className:T[b.UI.Nav],style:R?.[b.UI.Nav],"aria-label":e_(),onPreviousClick:eC,onNextClick:eM,previousMonth:en,nextMonth:ea}),a.createElement(r.MonthGrid,{role:"grid","aria-multiselectable":S==="multiple"||S==="range","aria-label":eg(e.date,C.options,C)||undefined,className:T[b.UI.MonthGrid],style:R?.[b.UI.MonthGrid]},!t.hideWeekdays&&a.createElement(r.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:T[b.UI.Weekdays],style:R?.[b.UI.Weekdays]},B&&a.createElement(r.WeekNumberHeader,{"aria-label":eY(C.options),className:T[b.UI.WeekNumberHeader],style:R?.[b.UI.WeekNumberHeader],scope:"col"},Q()),eI.map(e=>a.createElement(r.Weekday,{"aria-label":ex(e,C.options,C),className:T[b.UI.Weekday],key:String(e),style:R?.[b.UI.Weekday],scope:"col"},Z(e,C.options,C)))),a.createElement(r.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:T[b.UI.Weeks],style:R?.[b.UI.Weeks]},e.weeks.map(e=>{return a.createElement(r.Week,{className:T[b.UI.Week],key:e.weekNumber,style:R?.[b.UI.Week],week:e},B&&// biome-ignore lint/a11y/useSemanticElements: react component
a.createElement(r.WeekNumber,{week:e,style:R?.[b.UI.WeekNumber],"aria-label":eA(e.weekNumber,{locale:M}),className:T[b.UI.WeekNumber],scope:"row",role:"rowheader"},G(e.weekNumber,C)),e.days.map(e=>{const{date:n}=e;const i=eo(e);i[b/* .DayFlag.focused */.pL.focused]=!i.hidden&&Boolean(eu?.isEqualTo(e));i[b/* .SelectionState.selected */.wc.selected]=es?.(n)||i.selected;if((0,k/* .isDateRange */.oM)(el)){// add range modifiers
const{from:e,to:t}=el;i[b/* .SelectionState.range_start */.wc.range_start]=Boolean(e&&t&&C.isSameDay(n,e));i[b/* .SelectionState.range_end */.wc.range_end]=Boolean(e&&t&&C.isSameDay(n,t));i[b/* .SelectionState.range_middle */.wc.range_middle]=(0,Y/* .rangeIncludesDate */.R)(el,n,true,C)}const o=(0,p/* .getStyleForModifiers */.J)(i,R,t.modifiersStyles);const s=(0,d/* .getClassNamesForModifiers */.k)(i,T,t.modifiersClassNames);const l=!eD&&!i.hidden?em(n,i,C.options,C):undefined;return(// biome-ignore lint/a11y/useSemanticElements: react component
a.createElement(r.Day,{key:`${C.format(n,"yyyy-MM-dd")}_${C.format(e.displayMonth,"yyyy-MM")}`,day:e,modifiers:i,className:s.join(" "),style:o,role:"gridcell","aria-selected":i.selected||undefined,"aria-label":l,"data-day":C.format(n,"yyyy-MM-dd"),"data-month":e.outside?C.format(n,"yyyy-MM"):undefined,"data-selected":i.selected||undefined,"data-disabled":i.disabled||undefined,"data-hidden":i.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":i.focused||undefined,"data-today":i.today||undefined},!i.hidden&&eD?a.createElement(r.DayButton,{className:T[b.UI.DayButton],style:R?.[b.UI.DayButton],type:"button",day:e,modifiers:i,disabled:i.disabled||undefined,tabIndex:ev(e)?0:-1,"aria-label":eh(n,i,C.options,C),onClick:eT(e,i),onBlur:eS(e,i),onFocus:eE(e,i),onKeyDown:eO(e,i),onMouseEnter:eH(e,i),onMouseLeave:eN(e,i)},j(n,C.options,C)):!i.hidden&&j(e.date,C.options,C)))}))}))))})),t.footer&&// biome-ignore lint/a11y/useSemanticElements: react component
a.createElement(r.Footer,{className:T[b.UI.Footer],style:R?.[b.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}},97766:function(e,t,r){r.d(t,{UI:()=>n,X5:()=>o,pL:()=>a,wc:()=>i});/**
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
 */var i;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(i||(i={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var o;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(o||(o={}))},61797:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(32850);/**
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
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}},32850:function(e,t,r){r.d(t,{VA:()=>U,i0:()=>W});/* import */var n=r(75583);/* import */var a=r(80517);/* import */var i=r(39669);/* import */var o=r(98637);/* import */var s=r(2510);/* import */var d=r(26496);/* import */var l=r(4556);/* import */var c=r(80436);/* import */var u=r(3929);/* import */var v=r(65636);/* import */var f=r(50527);/* import */var p=r(1741);/* import */var h=r(94528);/* import */var m=r(37902);/* import */var g=r(11456);/* import */var b=r(16331);/* import */var _=r(27372);/* import */var y=r(64585);/* import */var w=r(71271);/* import */var x=r(97822);/* import */var A=r(21721);/* import */var Y=r(13249);/* import */var k=r(21309);/* import */var I=r(29318);/* import */var D=r(78127);/* import */var C=r(35093);/* import */var M=r(49407);/* import */var T=r(90208);/* import */var E=r(8008);/* import */var S=r(99719);/* import */var O=r(74880);/* import */var H=r(73524);/* import */var N=r(40525);/* import */var F=r(56066);/* import */var K=r(99905);/* import */var L=r(73958);/**
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
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,i/* .addMonths */.P)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,o/* .addWeeks */.J)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,s/* .addYears */.e)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,d/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,l/* .differenceInCalendarMonths */.U)(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):(0,c/* .eachMonthOfInterval */.i)(e)};/**
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
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,K/* .endOfBroadcastWeek */.O)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,v/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,f/* .endOfMonth */.p)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,p/* .endOfWeek */.$)(e,this.options)};/**
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
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,m/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,g/* .getISOWeek */.s)(e)};/**
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
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,M/* .setMonth */.Z)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,T/* .setYear */.i)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,L/* .startOfBroadcastWeek */.l)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,E/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,S/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,O/* .startOfMonth */.w)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,H/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,N/* .startOfYear */.D)(e)};this.options={locale:F/* .enUS */.c,...e};this.overrides=t}/**
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
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const a=t?.code;if(a&&W.yearFirstLocales.has(a)){try{const t=new Intl.DateTimeFormat(a,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const i=t.format(e);return i}catch{// Fallback to date-fns formatting below.
}}const i=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,i)}}W.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const U=new W;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const z=/* unused pure expression or super */null&&U},91327:function(e,t,r){r.d(t,{$:()=>a});/* import */var n=r(41594);/**
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
 */function a(e){const{day:t,modifiers:r,...a}=e;const i=n.useRef(null);n.useEffect(()=>{if(r.focused)i.current?.focus()},[r.focused]);return n.createElement("button",{ref:i,...a})}},69618:function(e,t,r){r.d(t,{m:()=>i});/* import */var n=r(41594);/* import */var a=r(97766);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{options:t,className:r,components:i,classNames:o,...s}=e;const d=[o[a.UI.Dropdown],r].join(" ");const l=t?.find(({value:e})=>e===s.value);return n.createElement("span",{"data-disabled":s.disabled,className:o[a.UI.DropdownRoot]},n.createElement(i.Select,{className:d,...s},t?.map(({value:e,label:t,disabled:r})=>n.createElement(i.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:o[a.UI.CaptionLabel],"aria-hidden":true},l?.label,n.createElement(i.Chevron,{orientation:"down",size:18,className:o[a.UI.Chevron]})))}},92833:function(e,t,r){r.d(t,{z:()=>a});/* import */var n=r(41594);/**
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
 */function a(e){return n.createElement("div",{...e})}},78181:function(e,t,r){r.d(t,{l:()=>i});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},56362:function(e,t,r){r.d(t,{s:()=>o});/* import */var n=r(41594);/* import */var a=r(97766);/* import */var i=r(51409);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{onPreviousClick:t,onNextClick:r,previousMonth:o,nextMonth:s,...d}=e;const{components:l,classNames:c,labels:{labelPrevious:u,labelNext:v}}=(0,i/* .useDayPicker */.w)();const f=(0,n.useCallback)(e=>{if(s){r?.(e)}},[s,r]);const p=(0,n.useCallback)(e=>{if(o){t?.(e)}},[o,t]);return n.createElement("nav",{...d},n.createElement(l.PreviousMonthButton,{type:"button",className:c[a.UI.PreviousMonthButton],tabIndex:o?undefined:-1,"aria-disabled":o?undefined:true,"aria-label":u(o),onClick:p},n.createElement(l.Chevron,{disabled:o?undefined:true,className:c[a.UI.Chevron],orientation:"left"})),n.createElement(l.NextMonthButton,{type:"button",className:c[a.UI.NextMonthButton],tabIndex:s?undefined:-1,"aria-disabled":s?undefined:true,"aria-label":v(s),onClick:f},n.createElement(l.Chevron,{disabled:s?undefined:true,orientation:"right",className:c[a.UI.Chevron]})))}},19330:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},4726:function(e,t,r){r.d(t,{c:()=>a});/* import */var n=r(41594);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("option",{...e})}},87006:function(e,t,r){r.d(t,{u:()=>i});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},58219:function(e,t,r){r.d(t,{b:()=>a});/* import */var n=r(41594);/**
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
 */function a(e){return n.createElement("tbody",{...e})}},49600:function(e,t,r){r.d(t,{w:()=>i});/* import */var n=r(41594);/* import */var a=r(51409);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},32917:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.$,CaptionLabel:()=>/* reexport safe */a.$,Chevron:()=>/* reexport safe */i.c,Day:()=>/* reexport safe */o.L,DayButton:()=>/* reexport safe */s.x,Dropdown:()=>/* reexport safe */d.m,DropdownNav:()=>/* reexport safe */l.z,Footer:()=>/* reexport safe */c.w,Month:()=>/* reexport safe */u.f,MonthCaption:()=>/* reexport safe */v.P,MonthGrid:()=>/* reexport safe */f.D,Months:()=>/* reexport safe */p.i,MonthsDropdown:()=>/* reexport safe */h.l,Nav:()=>/* reexport safe */m.s,NextMonthButton:()=>/* reexport safe */g.i,Option:()=>/* reexport safe */b.c,PreviousMonthButton:()=>/* reexport safe */_.u,Root:()=>/* reexport safe */y.b,Select:()=>/* reexport safe */w.l,Week:()=>/* reexport safe */x.j,WeekNumber:()=>/* reexport safe */k.u,WeekNumberHeader:()=>/* reexport safe */I.t,Weekday:()=>/* reexport safe */A.B,Weekdays:()=>/* reexport safe */Y.S,Weeks:()=>/* reexport safe */D.m,YearsDropdown:()=>/* reexport safe */C.w});/* import */var n=r(91327);/* import */var a=r(77307);/* import */var i=r(83180);/* import */var o=r(721);/* import */var s=r(80985);/* import */var d=r(69618);/* import */var l=r(92833);/* import */var c=r(57836);/* import */var u=r(57933);/* import */var v=r(22507);/* import */var f=r(71941);/* import */var p=r(94632);/* import */var h=r(78181);/* import */var m=r(56362);/* import */var g=r(19330);/* import */var b=r(4726);/* import */var _=r(87006);/* import */var y=r(58219);/* import */var w=r(27787);/* import */var x=r(80007);/* import */var A=r(66213);/* import */var Y=r(97328);/* import */var k=r(72818);/* import */var I=r(73531);/* import */var D=r(29106);/* import */var C=r(49600)},13907:function(e,t,r){r.d(t,{G:()=>i,w:()=>a});/* import */var n=r(32850);/**
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
 */const i=a},13663:function(e,t,r){r.d(t,{i:()=>a});/* import */var n=r(32850);/**
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
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"cccccc")}},72881:function(e,t,r){r.d(t,{D:()=>i,e:()=>a});/* import */var n=r(32850);/**
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
 */const i=a},84608:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.w,formatDay:()=>/* reexport safe */a.i,formatMonthCaption:()=>/* reexport safe */n.G,formatMonthDropdown:()=>/* reexport safe */i.Z,formatWeekNumber:()=>/* reexport safe */s.n,formatWeekNumberHeader:()=>/* reexport safe */d.U,formatWeekdayName:()=>/* reexport safe */o.Z,formatYearCaption:()=>/* reexport safe */l.D,formatYearDropdown:()=>/* reexport safe */l.e});/* import */var n=r(13907);/* import */var a=r(13663);/* import */var i=r(36306);/* import */var o=r(52756);/* import */var s=r(82104);/* import */var d=r(61757);/* import */var l=r(72881)},38547:function(e,t,r){r.d(t,{A:()=>o});/* import */var n=r(97766);var a;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(a||(a={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function i(e){return!e[n/* .DayFlag.disabled */.pL.disabled]&&!e[n/* .DayFlag.hidden */.pL.hidden]&&!e[n/* .DayFlag.outside */.pL.outside]}/**
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
 */function o(e,t,r,o){let s;let d=-1;for(const l of e){const e=t(l);if(i(e)){if(e[n/* .DayFlag.focused */.pL.focused]&&d<a.FocusedModifier){s=l;d=a.FocusedModifier}else if(o?.isEqualTo(l)&&d<a.LastFocused){s=l;d=a.LastFocused}else if(r(l.date)&&d<a.Selected){s=l;d=a.Selected}else if(e[n/* .DayFlag.today */.pL.today]&&d<a.Today){s=l;d=a.Today}}}if(!s){// Return the first day that is focusable
s=e.find(e=>i(t(e)))}return s}},37836:function(e,t,r){r.d(t,{x:()=>i});/* import */var n=r(97766);/* import */var a=r(87331);/**
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
 */function i(e,t,r,i,o){const{disabled:s,hidden:d,modifiers:l,showOutsideDays:c,broadcastCalendar:u,today:v}=t;const{isSameDay:f,isSameMonth:p,startOfMonth:h,isBefore:m,endOfMonth:g,isAfter:b}=o;const _=r&&h(r);const y=i&&g(i);const w={[n/* .DayFlag.focused */.pL.focused]:[],[n/* .DayFlag.outside */.pL.outside]:[],[n/* .DayFlag.disabled */.pL.disabled]:[],[n/* .DayFlag.hidden */.pL.hidden]:[],[n/* .DayFlag.today */.pL.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!p(e,r));const i=Boolean(_&&m(e,_));const h=Boolean(y&&b(e,y));const g=Boolean(s&&(0,a/* .dateMatchModifiers */.k)(e,s,o));const A=Boolean(d&&(0,a/* .dateMatchModifiers */.k)(e,d,o))||i||h||// Broadcast calendar will show outside days as default
!u&&!c&&n||u&&c===false&&n;const Y=f(e,v??o.today());if(n)w.outside.push(t);if(g)w.disabled.push(t);if(A)w.hidden.push(t);if(Y)w.today.push(t);// Add custom modifiers
if(l){Object.keys(l).forEach(r=>{const n=l?.[r];const i=n?(0,a/* .dateMatchModifiers */.k)(e,n,o):false;if(!i)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.pL.focused]:false,[n/* .DayFlag.disabled */.pL.disabled]:false,[n/* .DayFlag.hidden */.pL.hidden]:false,[n/* .DayFlag.outside */.pL.outside]:false,[n/* .DayFlag.today */.pL.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}},99905:function(e,t,r){r.d(t,{O:()=>i});/* import */var n=r(21337);/* import */var a=r(73958);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function i(e,t){const r=(0,a/* .startOfBroadcastWeek */.l)(e,t);const i=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const o=t.addDays(r,i*7-1);return o}},21337:function(e,t,r){r.d(t,{I:()=>i});const n=5;const a=4;/**
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
 */function i(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const i=r.getDay()>0?r.getDay():7;const o=t.addDays(e,-i+1);const s=t.addDays(o,n*7-1);const d=t.getMonth(e)===t.getMonth(s)?n:a;return d}},19287:function(e,t,r){r.d(t,{k:()=>a});/* import */var n=r(97766);/**
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
 */function a(e,t,r={}){const i=Object.entries(e).filter(([,e])=>e===true).reduce((e,[a])=>{if(r[a]){e.push(r[a])}else if(t[n/* .DayFlag */.pL[a]]){e.push(t[n/* .DayFlag */.pL[a]])}else if(t[n/* .SelectionState */.wc[a]]){e.push(t[n/* .SelectionState */.wc[a]])}return e},[t[n.UI.Day]]);return i}},87096:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(32917);/**
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
 */function n(e,t,r,n){const a=e[0];const i=e[e.length-1];const{ISOWeek:o,fixedWeeks:s,broadcastCalendar:d}=r??{};const{addDays:l,differenceInCalendarDays:c,differenceInCalendarMonths:u,endOfBroadcastWeek:v,endOfISOWeek:f,endOfMonth:p,endOfWeek:h,isAfter:m,startOfBroadcastWeek:g,startOfISOWeek:b,startOfWeek:_}=n;const y=d?g(a,n):o?b(a):_(a);const w=d?v(i):o?f(p(i)):h(p(i));const x=c(w,y);const A=u(i,a)+1;const Y=[];for(let e=0;e<=x;e++){const r=l(y,e);if(t&&m(r,t)){break}Y.push(r)}// If fixed weeks is enabled, add the extra dates to the array
const k=d?35:42;const I=k*A;if(s&&Y.length<I){const e=I-Y.length;for(let t=0;t<e;t++){const e=l(Y[Y.length-1],1);Y.push(e)}}return Y}},9727:function(e,t,r){r.d(t,{_:()=>n});/**
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
 */function n(e,t,r,n){const{numberOfMonths:a=1}=r;const i=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}i.push(a)}return i}},69030:function(e,t,r){r.d(t,{l:()=>n});/**
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
 */function n(e,t,r,n,a,i,o){const{ISOWeek:s,broadcastCalendar:d}=i;const{addDays:l,addMonths:c,addWeeks:u,addYears:v,endOfBroadcastWeek:f,endOfISOWeek:p,endOfWeek:h,max:m,min:g,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=o;const w={day:l,week:u,month:c,year:v,startOfWeek:e=>d?b(e,o):s?_(e):y(e),endOfWeek:e=>d?f(e):s?p(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=m([n,x])}else if(t==="after"&&a){x=g([a,x])}return x}},39903:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(84608);/**
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
 */function n(e,t,r,n){const{month:a,defaultMonth:i,today:o=n.today(),numberOfMonths:s=1}=e;let d=a||i||o;const{differenceInCalendarMonths:l,addMonths:c,startOfMonth:u}=n;if(r&&l(r,d)<s-1){const e=-1*(s-1);d=c(r,e)}if(t&&l(d,t)<0){d=t}return u(d)}},63612:function(e,t,r){r.d(t,{L:()=>n});/**
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
 */function n(e,t,r,n,a){const{startOfMonth:i,startOfYear:o,endOfYear:s,eachMonthOfInterval:d,getMonth:l}=a;const c=d({start:o(e),end:s(e)});const u=c.map(e=>{const o=n.formatMonthDropdown(e,a);const s=l(e);const d=t&&e<i(t)||r&&e>i(r)||false;return{value:s,label:o,disabled:d}});return u}},72631:function(e,t,r){r.d(t,{S:()=>o});/* import */var n=r(61797);/* import */var a=r(46483);/* import */var i=r(48665);/**
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
 */function o(e,t,r,o){const{addDays:s,endOfBroadcastWeek:d,endOfISOWeek:l,endOfMonth:c,endOfWeek:u,getISOWeek:v,getWeek:f,startOfBroadcastWeek:p,startOfISOWeek:h,startOfWeek:m}=o;const g=e.reduce((e,g)=>{const b=r.broadcastCalendar?p(g,o):r.ISOWeek?h(g):m(g);const _=r.broadcastCalendar?d(g):r.ISOWeek?l(c(g)):u(c(g));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=s(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const i=r.ISOWeek?v(t):f(t);const s=e.find(e=>e.weekNumber===i);const d=new n/* .CalendarDay */.P(t,g,o);if(!s){e.push(new a/* .CalendarWeek */.j(i,[d]))}else{s.days.push(d)}return e},[]);const A=new i/* .CalendarMonth */.j(g,x);e.push(A);return e},[]);if(!r.reverseMonths){return g}else{return g.reverse()}}},21289:function(e,t,r){r.d(t,{J:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:i,startOfMonth:o,endOfMonth:s,addYears:d,endOfYear:l,newDate:c,today:u}=t;// Handle deprecated code
const{fromYear:v,toYear:f,fromMonth:p,toMonth:h}=e;if(!r&&p){r=p}if(!r&&v){r=t.newDate(v,0,1)}if(!n&&h){n=h}if(!n&&f){n=c(f,11,31)}const m=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=o(r)}else if(v){r=c(v,0,1)}else if(!r&&m){r=a(d(e.today??u(),-100))}if(n){n=s(n)}else if(f){n=c(f,11,31)}else if(!n&&m){n=l(e.today??u())}return[r?i(r):r,n?i(n):n]}},91725:function(e,t,r){r.d(t,{O:()=>o});/* import */var n=r(61797);/* import */var a=r(87331);/* import */var i=r(69030);/**
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
 */function o(e,t,r,s,d,l,c,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const v=(0,i/* .getFocusableDate */.l)(e,t,r.date,s,d,l,c);const f=Boolean(l.disabled&&(0,a/* .dateMatchModifiers */.k)(v,l.disabled,c));const p=Boolean(l.hidden&&(0,a/* .dateMatchModifiers */.k)(v,l.hidden,c));const h=v;const m=new n/* .CalendarDay */.P(v,h,c);if(!f&&!p){return m}// Recursively attempt to find the next focusable date
return o(e,t,m,s,d,l,c,u+1)}},80807:function(e,t,r){r.d(t,{Q:()=>n});/**
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
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:i=1}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:d}=n;const l=a?i:1;const c=o(e);if(!t){return s(c,l)}const u=d(t,e);if(u<i){return undefined}return s(c,l)}},93987:function(e,t,r){r.d(t,{E:()=>n});/**
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
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:i}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:d}=n;const l=a?i??1:1;const c=o(e);if(!t){return s(c,-l)}const u=d(c,t);if(u<=0){return undefined}return s(c,-l)}},66564:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(97766);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function a(e,t={},r={}){let i={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{i={...i,...r?.[e]}});return i}},86607:function(e,t,r){r.d(t,{c:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r){const n=e.today();const a=r?e.startOfBroadcastWeek(n,e):t?e.startOfISOWeek(n):e.startOfWeek(n);const i=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);i.push(r)}return i}},24595:function(e,t,r){r.d(t,{C:()=>n});/**
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
 */function n(e,t,r,a,i=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:o,endOfYear:s,eachYearOfInterval:d,getYear:l}=a;const c=o(e);const u=s(t);const v=d({start:c,end:u});if(i)v.reverse();return v.map(e=>{const t=r.formatYearDropdown(e,a);return{value:l(e),label:t,disabled:false}})}},73958:function(e,t,r){r.d(t,{l:()=>n});/**
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
 */function a(e,t){const[r,a]=(0,n.useState)(e);const i=t===undefined?r:t;return[i,a]}},93116:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */a.t,labelDay:()=>/* reexport safe */n.Z,labelDayButton:()=>/* reexport safe */n.n,labelGrid:()=>/* reexport safe */a.b,labelGridcell:()=>/* reexport safe */i.P,labelMonthDropdown:()=>/* reexport safe */o.a,labelNav:()=>/* reexport safe */s.y,labelNext:()=>/* reexport safe */d.s,labelPrevious:()=>/* reexport safe */l.o,labelWeekNumber:()=>/* reexport safe */u.k,labelWeekNumberHeader:()=>/* reexport safe */v.N,labelWeekday:()=>/* reexport safe */c.n,labelYearDropdown:()=>/* reexport safe */f.n});/* import */var n=r(59830);/* import */var a=r(67918);/* import */var i=r(23462);/* import */var o=r(35227);/* import */var s=r(69545);/* import */var d=r(35179);/* import */var l=r(80651);/* import */var c=r(14618);/* import */var u=r(94923);/* import */var v=r(56690);/* import */var f=r(6998)},59830:function(e,t,r){r.d(t,{Z:()=>i,n:()=>a});/* import */var n=r(32850);/**
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
 */function a(e,t,r,a){let i=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t.today)i=`Today, ${i}`;if(t.selected)i=`${i}, selected`;return i}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const i=a},67918:function(e,t,r){r.d(t,{b:()=>a,t:()=>i});/* import */var n=r(32850);/**
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
 */const i=a},23462:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(32850);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let i=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t?.today){i=`Today, ${i}`}return i}},35227:function(e,t,r){r.d(t,{a:()=>n});/**
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
 */function a(e,t){const{selected:r,required:a,onSelect:i}=e;const[o,s]=(0,n/* .useControlledValue */.j)(r,i?r:undefined);const d=!i?o:r;const{isSameDay:l}=t;const c=e=>{return d?.some(t=>l(t,e))??false};const{min:u,max:v}=e;const f=(e,t,r)=>{let n=[...d??[]];if(c(e)){if(d?.length===u){// Min value reached, do nothing
return}if(a&&d?.length===1){// Required value already selected do nothing
return}n=d?.filter(t=>!l(t,e))}else{if(d?.length===v){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!i){s(n)}i?.(n,e,t,r);return n};return{selected:d,select:f,isSelected:c}}},55115:function(e,t,r){r.d(t,{f:()=>s});/* import */var n=r(74612);/* import */var a=r(80653);/* import */var i=r(16660);/* import */var o=r(52044);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function s(e,t){const{disabled:r,excludeDisabled:s,selected:d,required:l,onSelect:c}=e;const[u,v]=(0,n/* .useControlledValue */.j)(d,c?d:undefined);const f=!c?u:d;const p=e=>f&&(0,o/* .rangeIncludesDate */.R)(f,e,false,t);const h=(n,o,d)=>{const{min:u,max:p}=e;const h=n?(0,a/* .addToRange */.M)(n,f,u,p,l,t):undefined;if(s&&r&&h?.from&&h.to){if((0,i/* .rangeContainsModifiers */.P)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!c){v(h)}c?.(h,n,o,d);return h};return{selected:f,select:h,isSelected:p}}},47012:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(74612);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:i}=e;const[o,s]=(0,n/* .useControlledValue */.j)(r,i?r:undefined);const d=!i?o:r;const{isSameDay:l}=t;const c=e=>{return d?l(d,e):false};const u=(e,t,r)=>{let n=e;if(!a&&d&&d&&l(e,d)){// If the date is the same, clear the selection.
n=undefined}if(!i){s(n)}if(a){i?.(n,e,t,r)}else{i?.(n,e,t,r)}return n};return{selected:d,select:u,isSelected:c}}},68587:function(e,t,r){r.d(t,{s:()=>v});/* import */var n=r(41594);/* import */var a=r(97766);const i=e=>{if(e instanceof HTMLElement)return e;return null};const o=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const s=e=>i(e.querySelector("[data-animated-month]"));const d=e=>i(e.querySelector("[data-animated-caption]"));const l=e=>i(e.querySelector("[data-animated-weeks]"));const c=e=>i(e.querySelector("[data-animated-nav]"));const u=e=>i(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function v(e,t,{classNames:r,months:i,focused:v,dateLib:f}){const p=(0,n.useRef)(null);const h=(0,n.useRef)(i);const m=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=i;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
i.length===0||n.length===0||i.length!==n.length){return}const g=f.isSameMonth(i[0].date,n[0].date);const b=f.isAfter(i[0].date,n[0].date);const _=b?r[a/* .Animation.caption_after_enter */.X5.caption_after_enter]:r[a/* .Animation.caption_before_enter */.X5.caption_before_enter];const y=b?r[a/* .Animation.weeks_after_enter */.X5.weeks_after_enter]:r[a/* .Animation.weeks_before_enter */.X5.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=p.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=o(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=s(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=d(e);if(r){r.classList.remove(_)}const n=l(e);if(n){n.classList.remove(y)}});p.current=x}else{p.current=null}if(m.current||g||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
v){return}const A=w instanceof HTMLElement?o(w):[];const Y=o(e.current);if(Y?.every(e=>e instanceof HTMLElement)&&A&&A.every(e=>e instanceof HTMLElement)){m.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=c(e.current);if(n){n.style.zIndex="1"}Y.forEach((i,o)=>{const s=A[o];if(!s){return}// animate new displayed month
i.style.position="relative";i.style.overflow="hidden";const c=d(i);if(c){c.classList.add(_)}const v=l(i);if(v){v.classList.add(y)}// animate new displayed month end
const f=()=>{m.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(c){c.classList.remove(_)}if(v){v.classList.remove(y)}i.style.position="";i.style.overflow="";if(i.contains(s)){i.removeChild(s)}};t.push(f);// animate old displayed month
s.style.pointerEvents="none";s.style.position="absolute";s.style.overflow="hidden";s.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const p=u(s);if(p){p.style.opacity="0"}const h=d(s);if(h){h.classList.add(b?r[a/* .Animation.caption_before_exit */.X5.caption_before_exit]:r[a/* .Animation.caption_after_exit */.X5.caption_after_exit]);h.addEventListener("animationend",f)}const g=l(s);if(g){g.classList.add(b?r[a/* .Animation.weeks_before_exit */.X5.weeks_before_exit]:r[a/* .Animation.weeks_after_exit */.X5.weeks_after_exit])}i.insertBefore(s,i.firstChild)})}})}},58071:function(e,t,r){r.d(t,{_:()=>p});/* import */var n=r(41594);/* import */var a=r(18711);/* import */var i=r(9727);/* import */var o=r(14151);/* import */var s=r(31094);/* import */var d=r(72631);/* import */var l=r(21289);/* import */var c=r(80807);/* import */var u=r(93987);/* import */var v=r(24595);/* import */var f=r(74612);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function p(e,t){const[r,p]=(0,l/* .getNavMonths */.J)(e,t);const{startOfMonth:h,endOfMonth:m}=t;const g=(0,s/* .getInitialMonth */.Z)(e,r,p,t);const[b,_]=(0,f/* .useControlledValue */.j)(g,// initialMonth is always computed from props.month if provided
e.month?g:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,n.useEffect)(()=>{const n=(0,s/* .getInitialMonth */.Z)(e,r,p,t);_(n)},[e.timeZone]);/** The months displayed in the calendar. */const y=(0,o/* .getDisplayMonths */.o)(b,p,e,t);/** The dates displayed in the calendar. */const w=(0,a/* .getDates */.Y)(y,e.endMonth?m(e.endMonth):undefined,e,t);/** The Months displayed in the calendar. */const x=(0,d/* .getMonths */.S)(y,w,e,t);/** The Weeks displayed in the calendar. */const A=(0,v/* .getWeeks */.C)(x);/** The Days displayed in the calendar. */const Y=(0,i/* .getDays */._)(x);const k=(0,u/* .getPreviousMonth */.E)(b,r,e,t);const I=(0,c/* .getNextMonth */.Q)(b,p,e,t);const{disableNavigation:D,onMonthChange:C}=e;const M=e=>A.some(t=>t.days.some(t=>t.isEqualTo(e)));const T=e=>{if(D){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(p&&t>h(p)){t=h(p)}_(t);C?.(t)};const E=e=>{// is this check necessary?
if(M(e)){return}T(e.date)};const S={months:x,weeks:A,days:Y,navStart:r,navEnd:p,previousMonth:k,nextMonth:I,goToMonth:T,goToDay:E};return S}},51409:function(e,t,r){r.d(t,{S:()=>a,w:()=>i});/* import */var n=r(41594);/** @ignore */const a=(0,n.createContext)(undefined);/**
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
 */function i(){const e=(0,n.useContext)(a);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}},53581:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(41594);/* import */var a=r(38547);/* import */var i=r(91725);/**
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
 */function o(e,t,r,o,s){const{autoFocus:d}=e;const[l,c]=(0,n.useState)();const u=(0,a/* .calculateFocusTarget */.A)(t.days,r,o||(()=>false),l);const[v,f]=(0,n.useState)(d?u:undefined);const p=()=>{c(v);f(undefined)};const h=(r,n)=>{if(!v)return;const a=(0,i/* .getNextFocus */.O)(r,n,v,t.navStart,t.navEnd,e,s);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);f(a)};const m=e=>{return Boolean(u?.isEqualTo(e))};const g={isFocusTarget:m,setFocused:f,focused:v,blur:p,moveFocus:h};return g}},33127:function(e,t,r){r.d(t,{C:()=>o});/* import */var n=r(16687);/* import */var a=r(55115);/* import */var i=r(47012);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function o(e,t){const r=(0,i/* .useSingle */.G)(e,t);const o=(0,n/* .useMulti */.N)(e,t);const s=(0,a/* .useRange */.f)(e,t);switch(e.mode){case"single":return r;case"multiple":return o;case"range":return s;default:return undefined}}},80653:function(e,t,r){r.d(t,{M:()=>a});/* import */var n=r(32850);/**
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
 */function a(e,t,r=0,i=0,o=false,s=n/* .defaultDateLib */.VA){const{from:d,to:l}=t||{};const{isSameDay:c,isAfter:u,isBefore:v}=s;let f;if(!d&&!l){// the range is empty, add the date
f={from:e,to:r>0?undefined:e}}else if(d&&!l){// adding date to an incomplete range
if(c(d,e)){// adding a date equal to the start of the range
if(r===0){f={from:d,to:e}}else if(o){f={from:d,to:undefined}}else{f=undefined}}else if(v(e,d)){// adding a date before the start of the range
f={from:e,to:d}}else{// adding a date after the start of the range
f={from:d,to:e}}}else if(d&&l){// adding date to a complete range
if(c(d,e)&&c(l,e)){// adding a date that is equal to both start and end of the range
if(o){f={from:d,to:l}}else{f=undefined}}else if(c(d,e)){// adding a date equal to the the start of the range
f={from:d,to:r>0?undefined:e}}else if(c(l,e)){// adding a dare equal to the end of the range
f={from:e,to:r>0?undefined:e}}else if(v(e,d)){// adding a date before the start of the range
f={from:e,to:l}}else if(u(e,d)){// adding a date after the start of the range
f={from:d,to:e}}else if(u(e,l)){// adding a date after the end of the range
f={from:d,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(f?.from&&f?.to){const t=s.differenceInCalendarDays(f.to,f.from);if(i>0&&t>i){f={from:e,to:undefined}}else if(r>1&&t<r){f={from:e,to:undefined}}}return f}},87331:function(e,t,r){r.d(t,{k:()=>o});/* import */var n=r(32850);/* import */var a=r(52044);/* import */var i=r(70684);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.VA){const s=!Array.isArray(t)?[t]:t;const{isSameDay:d,differenceInCalendarDays:l,isAfter:c}=r;return s.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return d(e,t)}if((0,i/* .isDatesArray */.Hg)(t,r)){return t.includes(e)}if((0,i/* .isDateRange */.oM)(t)){return(0,a/* .rangeIncludesDate */.R)(t,e,false,r)}if((0,i/* .isDayOfWeekType */.OE)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,i/* .isDateInterval */.m4)(t)){const r=l(t.before,e);const n=l(t.after,e);const a=r>0;const i=n<0;const o=c(t.before,t.after);if(o){return i&&a}else{return a||i}}if((0,i/* .isDateAfterType */.RE)(t)){return l(e,t.after)>0}if((0,i/* .isDateBeforeType */.Ue)(t)){return l(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const s=/* unused pure expression or super */null&&o},93397:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(32850);/**
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
 */function a(e,t,r=n/* .defaultDateLib */.VA){const i=!Array.isArray(t)?[t]:t;let o=e.from;const s=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const d=Math.min(s,6);for(let e=0;e<=d;e++){if(i.includes(o.getDay())){return true}o=r.addDays(o,1)}return false}},16660:function(e,t,r){r.d(t,{P:()=>l});/* import */var n=r(32850);/* import */var a=r(87331);/* import */var i=r(93397);/* import */var o=r(52044);/* import */var s=r(45157);/* import */var d=r(70684);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function l(e,t,r=n/* .defaultDateLib */.VA){const c=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=c.filter(e=>typeof e!=="function");const v=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,o/* .rangeIncludesDate */.R)(e,t,false,r)}if((0,d/* .isDatesArray */.Hg)(t,r)){return t.some(t=>(0,o/* .rangeIncludesDate */.R)(e,t,false,r))}if((0,d/* .isDateRange */.oM)(t)){if(t.from&&t.to){return(0,s/* .rangeOverlaps */.G)(e,{from:t.from,to:t.to},r)}return false}if((0,d/* .isDayOfWeekType */.OE)(t)){return(0,i/* .rangeContainsDayOfWeek */.g)(e,t.dayOfWeek,r)}if((0,d/* .isDateInterval */.m4)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,s/* .rangeOverlaps */.G)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}if((0,d/* .isDateAfterType */.RE)(t)||(0,d/* .isDateBeforeType */.Ue)(t)){return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}return false});if(v){return true}const f=c.filter(e=>typeof e==="function");if(f.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(f.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}},52044:function(e,t,r){r.d(t,{R:()=>a});/* import */var n=r(32850);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=false,i=n/* .defaultDateLib */.VA){let{from:o,to:s}=e;const{differenceInCalendarDays:d,isSameDay:l}=i;if(o&&s){const e=d(s,o)<0;if(e){[o,s]=[s,o]}const n=d(t,o)>=(r?1:0)&&d(s,t)>=(r?1:0);return n}if(!r&&s){return l(s,t)}if(!r&&o){return l(o,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const i=(e,t)=>a(e,t,false,defaultDateLib)},45157:function(e,t,r){r.d(t,{G:()=>i});/* import */var n=r(32850);/* import */var a=r(52044);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.VA){return(0,a/* .rangeIncludesDate */.R)(e,t.from,false,r)||(0,a/* .rangeIncludesDate */.R)(e,t.to,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.from,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.to,false,r)}},70684:function(e,t,r){r.d(t,{Hg:()=>d,OE:()=>s,RE:()=>i,Ue:()=>o,m4:()=>n,oM:()=>a});/**
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
 */function i(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function s(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function d(e,t){return Array.isArray(e)&&e.every(t.isDate)}},66504:function(e,t,r){r.d(t,{F:()=>n});function n(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n}},89441:function(e,t,r){r.d(t,{q:()=>a});let n={};function a(){return n}function i(e){n=e}},89269:function(e,t,r){r.d(t,{_:()=>u});/* import */var n=r(20207);/* import */var a=r(11456);/* import */var i=r(85377);/* import */var o=r(64585);/* import */var s=r(91408);/* import */var d=r(66504);/* import */var l=r(71951);const c={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
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
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return l/* .lightFormatters.y */.C.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=(0,s/* .getWeekYear */.h)(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const i=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=i%100;return(0,d/* .addLeadingZeros */.F)(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(i,{unit:"year"})}// Padding
return(0,d/* .addLeadingZeros */.F)(i,t.length)},// ISO week-numbering year
R:function(e,t){const r=(0,i/* .getISOWeekYear */.p)(e);// Padding
return(0,d/* .addLeadingZeros */.F)(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return(0,d/* .addLeadingZeros */.F)(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return(0,d/* .addLeadingZeros */.F)(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return(0,d/* .addLeadingZeros */.F)(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return l/* .lightFormatters.M */.C.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return(0,d/* .addLeadingZeros */.F)(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=(0,o/* .getWeek */.N)(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return(0,d/* .addLeadingZeros */.F)(a,t.length)},// ISO week of year
I:function(e,t,r){const n=(0,a/* .getISOWeek */.s)(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return(0,d/* .addLeadingZeros */.F)(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return l/* .lightFormatters.d */.C.d(e,t)},// Day of year
D:function(e,t,r){const a=(0,n/* .getDayOfYear */.F)(e);if(t==="Do"){return r.ordinalNumber(a,{unit:"dayOfYear"})}return(0,d/* .addLeadingZeros */.F)(a,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(i);// Padded numerical value
case"ee":return(0,d/* .addLeadingZeros */.F)(i,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(i);// Padded numerical value
case"cc":return(0,d/* .addLeadingZeros */.F)(i,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return(0,d/* .addLeadingZeros */.F)(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=c.noon}else if(n===0){a=c.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=c.evening}else if(n>=12){a=c.afternoon}else if(n>=4){a=c.morning}else{a=c.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return l/* .lightFormatters.h */.C.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return l/* .lightFormatters.H */.C.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,d/* .addLeadingZeros */.F)(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return(0,d/* .addLeadingZeros */.F)(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return l/* .lightFormatters.m */.C.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return l/* .lightFormatters.s */.C.s(e,t)},// Fraction of second
S:function(e,t){return l/* .lightFormatters.S */.C.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return p(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return f(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return p(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return p(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+v(n,":");// Long
case"OOOO":default:return"GMT"+p(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+v(n,":");// Long
case"zzzz":default:return"GMT"+p(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return(0,d/* .addLeadingZeros */.F)(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return(0,d/* .addLeadingZeros */.F)(+e,t.length)}};function v(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const i=n%60;if(i===0){return r+String(a)}return r+String(a)+t+(0,d/* .addLeadingZeros */.F)(i,2)}function f(e,t){if(e%60===0){const t=e>0?"-":"+";return t+(0,d/* .addLeadingZeros */.F)(Math.abs(e)/60,2)}return p(e,t)}function p(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=(0,d/* .addLeadingZeros */.F)(Math.trunc(n/60),2);const i=(0,d/* .addLeadingZeros */.F)(n%60,2);return r+a+t+i}},71951:function(e,t,r){r.d(t,{C:()=>a});/* import */var n=r(66504);/*
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
S(e,t){const r=t.length;const a=e.getMilliseconds();const i=Math.trunc(a*Math.pow(10,r-3));return(0,n/* .addLeadingZeros */.F)(i,t.length)}}},67403:function(e,t,r){r.d(t,{m:()=>o});const n=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const a=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const i=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const i=r[1];const o=r[2];if(!o){return n(e,t)}let s;switch(i){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",n(i,t)).replace("{{time}}",a(o,t))};const o={p:a,P:i}},13747:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(49164);/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function a(e){const t=(0,n/* .toDate */.a)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}},74084:function(e,t,r){r.d(t,{x:()=>a});/* import */var n=r(27256);function a(e,...t){const r=n/* .constructFrom.bind */.w.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}},22596:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(74084);function a(e,t){const[r,a]=(0,n/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:a}}},87982:function(e,t,r){r.d(t,{Ss:()=>d,ef:()=>o,xM:()=>s});const n=/^D+$/;const a=/^Y+$/;const i=["D","DD","YY","YYYY"];function o(e){return n.test(e)}function s(e){return a.test(e)}function d(e,t,r){const n=l(e,t,r);console.warn(n);if(i.includes(e))throw new RangeError(n)}function l(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}},80517:function(e,t,r){r.d(t,{f:()=>i});/* import */var n=r(27256);/* import */var a=r(49164);/**
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
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return i;i.setDate(i.getDate()+t);return i}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},39669:function(e,t,r){r.d(t,{P:()=>i});/* import */var n=r(27256);/* import */var a=r(49164);/**
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
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return i}const o=i.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const s=(0,n/* .constructFrom */.w)(r?.in||e,i.getTime());s.setMonth(i.getMonth()+t+1,0);const d=s.getDate();if(o>=d){// If we're already at the end of the month, then this is the correct date
// and we're done.
return s}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
i.setFullYear(s.getFullYear(),s.getMonth(),o);return i}}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},98637:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(80517);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},2510:function(e,t,r){r.d(t,{e:()=>a});/* import */var n=r(39669);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},31308:function(e,t,r){r.d(t,{_P:()=>I,my:()=>s,w4:()=>d});/**
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
 */const i=Math.pow(10,8)*24*60*60*1e3;/**
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
 */const o=/* unused pure expression or super */null&&-i;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const s=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const d=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const l=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const c=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const u=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const v=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const f=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const p=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const h=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const m=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const g=12;/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},26496:function(e,t,r){r.d(t,{m:()=>s});/* import */var n=r(13747);/* import */var a=r(74084);/* import */var i=r(31308);/* import */var o=r(8008);/**
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
 */function s(e,t,r){const[s,d]=(0,a/* .normalizeDates */.x)(r?.in,e,t);const l=(0,o/* .startOfDay */.o)(s);const c=(0,o/* .startOfDay */.o)(d);const u=+l-(0,n/* .getTimezoneOffsetInMilliseconds */.G)(l);const v=+c-(0,n/* .getTimezoneOffsetInMilliseconds */.G)(c);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((u-v)/i/* .millisecondsInDay */.w4)}// Fallback for modularized imports:
/* unused export default */var d=/* unused pure expression or super */null&&s},4556:function(e,t,r){r.d(t,{U:()=>a});/* import */var n=r(74084);/**
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
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);const o=a.getFullYear()-i.getFullYear();const s=a.getMonth()-i.getMonth();return o*12+s}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},80436:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(22596);/* import */var a=r(27256);/**
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
 */function i(e,t){const{start:r,end:i}=(0,n/* .normalizeInterval */.P)(t?.in,e);let o=+r>+i;const s=o?+r:+i;const d=o?i:r;d.setHours(0,0,0,0);d.setDate(1);let l=t?.step??1;if(!l)return[];if(l<0){l=-l;o=!o}const c=[];while(+d<=s){c.push((0,a/* .constructFrom */.w)(r,d));d.setMonth(d.getMonth()+l)}return o?c.reverse():c}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},3929:function(e,t,r){r.d(t,{z:()=>i});/* import */var n=r(22596);/* import */var a=r(27256);/**
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
 */function i(e,t){const{start:r,end:i}=(0,n/* .normalizeInterval */.P)(t?.in,e);let o=+r>+i;const s=o?+r:+i;const d=o?i:r;d.setHours(0,0,0,0);d.setMonth(0,1);let l=t?.step??1;if(!l)return[];if(l<0){l=-l;o=!o}const c=[];while(+d<=s){c.push((0,a/* .constructFrom */.w)(r,d));d.setFullYear(d.getFullYear()+l)}return o?c.reverse():c}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},65636:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(1741);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},50527:function(e,t,r){r.d(t,{p:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},1741:function(e,t,r){r.d(t,{$:()=>i});/* import */var n=r(89441);/* import */var a=r(49164);/**
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
 */function i(e,t){const r=(0,n/* .getDefaultOptions */.q)();const i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,a/* .toDate */.a)(e,t?.in);const s=o.getDay();const d=(s<i?-7:0)+6-(s-i);o.setDate(o.getDate()+d);o.setHours(23,59,59,999);return o}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},94528:function(e,t,r){r.d(t,{Q:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},37902:function(e,t,r){r.d(t,{GP:()=>h});/* import */var n=r(56066);/* import */var a=r(89441);/* import */var i=r(89269);/* import */var o=r(67403);/* import */var s=r(87982);/* import */var d=r(93035);/* import */var l=r(49164);// Rexports of internal for libraries to use.
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
const c=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const u=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const v=/^'([^]*?)'?$/;const f=/''/g;const p=/[a-zA-Z]/;/**
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
 */function h(e,t,r){const v=(0,a/* .getDefaultOptions */.q)();const f=r?.locale??v.locale??n/* .enUS */.c;const h=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??v.firstWeekContainsDate??v.locale?.options?.firstWeekContainsDate??1;const g=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??v.weekStartsOn??v.locale?.options?.weekStartsOn??0;const b=(0,l/* .toDate */.a)(e,r?.in);if(!(0,d/* .isValid */.f)(b)){throw new RangeError("Invalid time value")}let _=t.match(u).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=o/* .longFormatters */.m[t];return r(e,f.formatLong)}return e}).join("").match(c).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:m(e)}}if(i/* .formatters */._[t]){return{isToken:true,value:e}}if(t.match(p)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(f.localize.preprocessor){_=f.localize.preprocessor(b,_)}const y={firstWeekContainsDate:h,weekStartsOn:g,locale:f};return _.map(n=>{if(!n.isToken)return n.value;const a=n.value;if(!r?.useAdditionalWeekYearTokens&&(0,s/* .isProtectedWeekYearToken */.xM)(a)||!r?.useAdditionalDayOfYearTokens&&(0,s/* .isProtectedDayOfYearToken */.ef)(a)){(0,s/* .warnOrThrowProtectedError */.Ss)(a,t,String(e))}const o=i/* .formatters */._[a[0]];return o(b,a,f.localize,y)}).join("")}function m(e){const t=e.match(v);if(!t){return e}return t[1].replace(f,"'")}// Fallback for modularized imports:
/* unused export default */var g=/* unused pure expression or super */null&&h},20207:function(e,t,r){r.d(t,{F:()=>o});/* import */var n=r(26496);/* import */var a=r(40525);/* import */var i=r(49164);/**
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
 */function o(e,t){const r=(0,i/* .toDate */.a)(e,t?.in);const o=(0,n/* .differenceInCalendarDays */.m)(r,(0,a/* .startOfYear */.D)(r));const s=o+1;return s}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},21843:function(e,t,r){r.d(t,{P:()=>i});/* import */var n=r(27256);/* import */var a=r(49164);/**
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
 */function i(e,t){const r=(0,a/* .toDate */.a)(e,t?.in);const i=r.getFullYear();const o=r.getMonth();const s=(0,n/* .constructFrom */.w)(r,0);s.setFullYear(i,o+1,0);s.setHours(0,0,0,0);return s.getDate()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},11456:function(e,t,r){r.d(t,{s:()=>s});/* import */var n=r(31308);/* import */var a=r(99719);/* import */var i=r(90642);/* import */var o=r(49164);/**
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
 */function s(e,t){const r=(0,o/* .toDate */.a)(e,t?.in);const s=+(0,a/* .startOfISOWeek */.b)(r)-+(0,i/* .startOfISOWeekYear */.w)(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(s/n/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* unused export default */var d=/* unused pure expression or super */null&&s},85377:function(e,t,r){r.d(t,{p:()=>o});/* import */var n=r(27256);/* import */var a=r(99719);/* import */var i=r(49164);/**
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
 */function o(e,t){const r=(0,i/* .toDate */.a)(e,t?.in);const o=r.getFullYear();const s=(0,n/* .constructFrom */.w)(r,0);s.setFullYear(o+1,0,4);s.setHours(0,0,0,0);const d=(0,a/* .startOfISOWeek */.b)(s);const l=(0,n/* .constructFrom */.w)(r,0);l.setFullYear(o,0,4);l.setHours(0,0,0,0);const c=(0,a/* .startOfISOWeek */.b)(l);if(r.getTime()>=d.getTime()){return o+1}else if(r.getTime()>=c.getTime()){return o}else{return o-1}}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},16331:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},64585:function(e,t,r){r.d(t,{N:()=>s});/* import */var n=r(31308);/* import */var a=r(73524);/* import */var i=r(7629);/* import */var o=r(49164);/**
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
 */function s(e,t){const r=(0,o/* .toDate */.a)(e,t?.in);const s=+(0,a/* .startOfWeek */.k)(r,t)-+(0,i/* .startOfWeekYear */.b)(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(s/n/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* unused export default */var d=/* unused pure expression or super */null&&s},91408:function(e,t,r){r.d(t,{h:()=>s});/* import */var n=r(89441);/* import */var a=r(27256);/* import */var i=r(73524);/* import */var o=r(49164);/**
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
 */function s(e,t){const r=(0,o/* .toDate */.a)(e,t?.in);const s=r.getFullYear();const d=(0,n/* .getDefaultOptions */.q)();const l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??d.firstWeekContainsDate??d.locale?.options?.firstWeekContainsDate??1;const c=(0,a/* .constructFrom */.w)(t?.in||e,0);c.setFullYear(s+1,0,l);c.setHours(0,0,0,0);const u=(0,i/* .startOfWeek */.k)(c,t);const v=(0,a/* .constructFrom */.w)(t?.in||e,0);v.setFullYear(s,0,l);v.setHours(0,0,0,0);const f=(0,i/* .startOfWeek */.k)(v,t);if(+r>=+u){return s+1}else if(+r>=+f){return s}else{return s-1}}// Fallback for modularized imports:
/* unused export default */var d=/* unused pure expression or super */null&&s},27372:function(e,t,r){r.d(t,{C:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},71271:function(e,t,r){r.d(t,{d:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},97822:function(e,t,r){r.d(t,{Y:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},21721:function(e,t,r){r.d(t,{$:()=>n});/**
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
/* unused export default */var a=/* unused pure expression or super */null&&n},13249:function(e,t,r){r.d(t,{r:()=>i});/* import */var n=r(74084);/* import */var a=r(8008);/**
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
 */function i(e,t,r){const[i,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return+(0,a/* .startOfDay */.o)(i)===+(0,a/* .startOfDay */.o)(o)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},21309:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(74084);/**
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
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},29318:function(e,t,r){r.d(t,{s:()=>a});/* import */var n=r(74084);/**
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
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===i.getFullYear()}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},93035:function(e,t,r){r.d(t,{f:()=>i});/* import */var n=r(21721);/* import */var a=r(49164);/**
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
 */function i(e){return!(!(0,n/* .isDate */.$)(e)&&typeof e!=="number"||isNaN(+(0,a/* .toDate */.a)(e)))}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},31240:function(e,t,r){r.d(t,{k:()=>n});function n(e){return (t={})=>{// TODO: Remove String()
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
 */function n(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const i=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[i]}}},76260:function(e,t,r){r.d(t,{A:()=>n});function n(e){return(t,r={})=>{const n=r.width;const o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const s=t.match(o);if(!s){return null}const d=s[0];const l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const c=Array.isArray(l)?i(l,e=>e.test(d)):a(l,e=>e.test(d));let u;u=e.valueCallback?e.valueCallback(c):c;u=r.valueCallback?r.valueCallback(u):u;const v=t.slice(d.length);return{value:u,rest:v}}}function a(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function i(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined}},69564:function(e,t,r){r.d(t,{K:()=>n});function n(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];// [TODO] I challenge you to fix the type
o=r.valueCallback?r.valueCallback(o):o;const s=t.slice(a.length);return{value:o,rest:s}}}},56066:function(e,t,r){r.d(t,{c:()=>d});/* import */var n=r(40052);/* import */var a=r(82909);/* import */var i=r(95387);/* import */var o=r(81107);/* import */var s=r(9683);/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const d={code:"en-US",formatDistance:n/* .formatDistance */.B,formatLong:a/* .formatLong */.s,formatRelative:i/* .formatRelative */.o,localize:o/* .localize */.k,match:s/* .match */.Y,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&d},40052:function(e,t,r){r.d(t,{B:()=>a});const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=(e,t,r)=>{let a;const i=n[e];if(typeof i==="string"){a=i}else if(t===1){a=i.one}else{a=i.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+a}else{return a+" ago"}}return a}},82909:function(e,t,r){r.d(t,{s:()=>s});/* import */var n=r(31240);const a={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const i={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const o={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const s={date:(0,n/* .buildFormatLongFn */.k)({formats:a,defaultWidth:"full"}),time:(0,n/* .buildFormatLongFn */.k)({formats:i,defaultWidth:"full"}),dateTime:(0,n/* .buildFormatLongFn */.k)({formats:o,defaultWidth:"full"})}},95387:function(e,t,r){r.d(t,{o:()=>a});const n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const a=(e,t,r,a)=>n[e]},81107:function(e,t,r){r.d(t,{k:()=>u});/* import */var n=r(77846);const a={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const s={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const c=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const u={ordinalNumber:c,era:(0,n/* .buildLocalizeFn */.o)({values:a,defaultWidth:"wide"}),quarter:(0,n/* .buildLocalizeFn */.o)({values:i,defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n/* .buildLocalizeFn */.o)({values:o,defaultWidth:"wide"}),day:(0,n/* .buildLocalizeFn */.o)({values:s,defaultWidth:"wide"}),dayPeriod:(0,n/* .buildLocalizeFn */.o)({values:d,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})}},9683:function(e,t,r){r.d(t,{Y:()=>g});/* import */var n=r(76260);/* import */var a=r(69564);const i=/^(\d+)(th|st|nd|rd)?/i;const o=/\d+/i;const s={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const d={any:[/^b/i,/^(a|c)/i]};const l={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const c={any:[/1/i,/2/i,/3/i,/4/i]};const u={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const v={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const f={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const p={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const h={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const m={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const g={ordinalNumber:(0,a/* .buildMatchPatternFn */.K)({matchPattern:i,parsePattern:o,valueCallback:e=>parseInt(e,10)}),era:(0,n/* .buildMatchFn */.A)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,n/* .buildMatchFn */.A)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n/* .buildMatchFn */.A)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),day:(0,n/* .buildMatchFn */.A)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,n/* .buildMatchFn */.A)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:m,defaultParseWidth:"any"})}},78127:function(e,t,r){r.d(t,{T:()=>i});/* import */var n=r(27256);/* import */var a=r(49164);/**
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
 */function i(e,t){let r;let i=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!i&&typeof e==="object")i=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,i);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(i,r||NaN)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},35093:function(e,t,r){r.d(t,{j:()=>i});/* import */var n=r(27256);/* import */var a=r(49164);/**
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
 */function i(e,t){let r;let i=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!i&&typeof e==="object")i=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,i);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(i,r||NaN)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},49407:function(e,t,r){r.d(t,{Z:()=>o});/* import */var n=r(27256);/* import */var a=r(21843);/* import */var i=r(49164);/**
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
 */function o(e,t,r){const o=(0,i/* .toDate */.a)(e,r?.in);const s=o.getFullYear();const d=o.getDate();const l=(0,n/* .constructFrom */.w)(r?.in||e,0);l.setFullYear(s,t,15);l.setHours(0,0,0,0);const c=(0,a/* .getDaysInMonth */.P)(l);// Set the earlier date, allows to wrap Jan 31 to Feb 28
o.setMonth(t,Math.min(d,c));return o}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},90208:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(27256);/* import */var a=r(49164);/**
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
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+i))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);i.setFullYear(t);return i}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},8008:function(e,t,r){r.d(t,{o:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},99719:function(e,t,r){r.d(t,{b:()=>a});/* import */var n=r(73524);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},90642:function(e,t,r){r.d(t,{w:()=>o});/* import */var n=r(27256);/* import */var a=r(85377);/* import */var i=r(99719);/**
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
 */function o(e,t){const r=(0,a/* .getISOWeekYear */.p)(e,t);const o=(0,n/* .constructFrom */.w)(t?.in||e,0);o.setFullYear(r,0,4);o.setHours(0,0,0,0);return(0,i/* .startOfISOWeek */.b)(o)}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},74880:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},73524:function(e,t,r){r.d(t,{k:()=>i});/* import */var n=r(89441);/* import */var a=r(49164);/**
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
 */function i(e,t){const r=(0,n/* .getDefaultOptions */.q)();const i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,a/* .toDate */.a)(e,t?.in);const s=o.getDay();const d=(s<i?7:0)+s-i;o.setDate(o.getDate()-d);o.setHours(0,0,0,0);return o}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},7629:function(e,t,r){r.d(t,{b:()=>s});/* import */var n=r(89441);/* import */var a=r(27256);/* import */var i=r(91408);/* import */var o=r(73524);/**
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
 */function s(e,t){const r=(0,n/* .getDefaultOptions */.q)();const s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const d=(0,i/* .getWeekYear */.h)(e,t);const l=(0,a/* .constructFrom */.w)(t?.in||e,0);l.setFullYear(d,0,s);l.setHours(0,0,0,0);const c=(0,o/* .startOfWeek */.k)(l,t);return c}// Fallback for modularized imports:
/* unused export default */var d=/* unused pure expression or super */null&&s},40525:function(e,t,r){r.d(t,{D:()=>a});/* import */var n=r(49164);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},49164:function(e,t,r){r.d(t,{a:()=>a});/* import */var n=r(27256);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a}}]);