"use strict";

var clockNY = document.querySelector('#clock-NY__digital');
var hoursHandNY = document.querySelector('#clock-NY-h');
var minutesHandNY = document.querySelector('#clock-NY-m');
var secondsHandNY = document.querySelector('#clock-NY-s');
var monthDateNY = document.querySelector('#clock-NY-md');
var dayNY = document.querySelector('#clock-NY-d');
var clockLnd = document.querySelector('#clock-Lnd__digital');
var hoursHandLnd = document.querySelector('#clock-Lnd-h');
var minutesHandLnd = document.querySelector('#clock-Lnd-m');
var secondsHandLnd = document.querySelector('#clock-Lnd-s');
var monthDateLnd = document.querySelector('#clock-Lnd-md');
var dayLnd = document.querySelector('#clock-Lnd-d');
var monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function WriteTimeNY() {
  var now = new Date();
  var h = now.getUTCHours() - 5;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clockNY.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTimeNY, 500);
}

WriteTimeNY();

function ClockNY() {
  var now = new Date();
  var h = now.getUTCHours() - 5;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  var mth = now.getUTCMonth();
  var dt = now.getUTCDate();
  var dy = now.getUTCDay();
  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHandNY.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHandNY.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHandNY.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDateNY.textContent = "".concat(monthsArray[mth], " ").concat(dt);
  dayNY.textContent = "".concat(DaysArray[dy]);
  setTimeout(ClockNY, 500);
}

ClockNY();

function WriteTimeLnd() {
  var now = new Date();
  var h = now.getUTCHours();
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clockLnd.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTimeLnd, 500);
}

WriteTimeLnd();

function ClockLnd() {
  var now = new Date();
  var h = now.getUTCHours();
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  var mth = now.getUTCMonth();
  var dt = now.getUTCDate();
  var dy = now.getUTCDay();
  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHandLnd.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHandLnd.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHandLnd.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDateLnd.textContent = "".concat(monthsArray[mth], " ").concat(dt);
  dayLnd.textContent = "".concat(DaysArray[dy]);
  setTimeout(ClockLnd, 500);
}

ClockLnd();