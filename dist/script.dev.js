"use strict";

var clock = document.querySelector('#clock-1');

function WriteTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clock.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTime, 500);
}

WriteTime();
var hoursHand = document.querySelector('.clock-h');
var minutesHand = document.querySelector('.clock-m');
var secondsHand = document.querySelector('.clock-s');
var monthDate = document.querySelector('.clock-md');
var day = document.querySelector('.clock-d'); // let monthsArray = new Array();
// let DaysArray = new Array();

var monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function Clock() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var mth = now.getMonth();
  var d = now.getDate();
  var dy = now.getDay();
  console.log(now);
  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHand.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHand.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHand.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDate.textContent = "".concat(monthsArray[mth], " ").concat(d);
  day.textContent = "".concat(DaysArray[dy]);
  setTimeout(Clock, 500);
}

Clock();