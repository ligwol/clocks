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
var clockRdJ = document.querySelector('#clock-RdJ__digital');
var hoursHandRdJ = document.querySelector('#clock-RdJ-h');
var minutesHandRdJ = document.querySelector('#clock-RdJ-m');
var secondsHandRdJ = document.querySelector('#clock-RdJ-s');
var monthDateRdJ = document.querySelector('#clock-RdJ-md');
var dayRdJ = document.querySelector('#clock-RdJ-d');
var clockMsc = document.querySelector('#clock-Msc__digital');
var hoursHandMsc = document.querySelector('#clock-Msc-h');
var minutesHandMsc = document.querySelector('#clock-Msc-m');
var secondsHandMsc = document.querySelector('#clock-Msc-s');
var monthDateMsc = document.querySelector('#clock-Msc-md');
var dayMsc = document.querySelector('#clock-Msc-d');
var clockTky = document.querySelector('#clock-Tky__digital');
var hoursHandTky = document.querySelector('#clock-Tky-h');
var minutesHandTky = document.querySelector('#clock-Tky-m');
var secondsHandTky = document.querySelector('#clock-Tky-s');
var monthDateTky = document.querySelector('#clock-Tky-md');
var dayTky = document.querySelector('#clock-Tky-d');
var clockSyd = document.querySelector('#clock-Syd__digital');
var hoursHandSyd = document.querySelector('#clock-Syd-h');
var minutesHandSyd = document.querySelector('#clock-Syd-m');
var secondsHandSyd = document.querySelector('#clock-Syd-s');
var monthDateSyd = document.querySelector('#clock-Syd-md');
var daySyd = document.querySelector('#clock-Syd-d');
var monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/******NewYork******/

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
  var mth, dt, dy;

  if (h < 5) {
    dt = now.getUTCDate() - 1;
    dy = now.getUTCDay() - 1;

    if (dt = 1) {
      mth = now.getUTCMonth() - 1;
    } else mth = now.getUTCMonth();
  } else {
    mth = now.getUTCMonth();
    dt = now.getUTCDate();
    dy = now.getUTCDay();
  }

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
/******LONDON******/

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
  var mth, dt, dy;

  if (h >= 24) {
    mth = now.getUTCMonth() + 1;
    dt = now.getUTCDate() + 1;
    dy = now.getUTCDay() + 1;
  } else {
    mth = now.getUTCMonth();
    dt = now.getUTCDate();
    dy = now.getUTCDay();
  }

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
/******Rio de Janeiro******/

function WriteTimeRdJ() {
  var now = new Date();
  var h = (now.getUTCHours() - 3) % 24;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clockRdJ.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTimeRdJ, 500);
}

WriteTimeRdJ();

function ClockRdJ() {
  var now = new Date();
  var h = now.getUTCHours() - 3;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  var mth, dt, dy;

  if (h < 3) {
    dt = now.getUTCDate() - 1;
    dy = now.getUTCDay() - 1;

    if (dt = 1) {
      mth = now.getUTCMonth() - 1;
    } else mth = now.getUTCMonth();
  } else {
    mth = now.getUTCMonth();
    dt = now.getUTCDate();
    dy = now.getUTCDay();
  }

  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHandRdJ.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHandRdJ.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHandRdJ.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDateRdJ.textContent = "".concat(monthsArray[mth], " ").concat(dt);
  dayRdJ.textContent = "".concat(DaysArray[dy]);
  setTimeout(ClockRdJ, 500);
}

ClockRdJ();
/******Moscow******/

function WriteTimeMsc() {
  var now = new Date();
  var h = (now.getUTCHours() + 3) % 24;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clockMsc.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTimeMsc, 500);
}

WriteTimeMsc();

function ClockMsc() {
  var now = new Date();
  var h = now.getUTCHours() + 3;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  var mth, dt, dy;

  if (h >= 24) {
    dt = now.getUTCDate() + 1;
    dy = now.getUTCDay() + 1;
    mth = now.getUTCMonth();

    if (mth < 7) {
      if (mth % 2 == 0) {
        if (dt == 31) mth = mth + 1;

        if (mth == 1) {
          if (dt == 28) mth = mth + 1;
        }
      } else if (math %= !0) {
        if (dt == 30) mth = mth + 1;
      }
    }
  } else {
    mth = now.getUTCMonth();
    dt = now.getUTCDate();
    dy = now.getUTCDay();
  }

  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHandMsc.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHandMsc.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHandMsc.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDateMsc.textContent = "".concat(monthsArray[mth], " ").concat(dt);
  dayMsc.textContent = "".concat(DaysArray[dy]);
  setTimeout(ClockMsc, 500);
}

ClockMsc();
/******Tokyo******/

function WriteTimeTky() {
  var now = new Date();
  var h = (now.getUTCHours() + 9) % 24;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clockTky.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTimeTky, 500);
}

WriteTimeTky();

function ClockTky() {
  var now = new Date();
  var h = now.getUTCHours() + 9;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  var mth, dt, dy;

  if (h >= 24) {
    dt = now.getUTCDate() + 1;
    dy = now.getUTCDay() + 1;
    mth = now.getUTCMonth();

    if (mth < 7) {
      if (mth % 2 == 0) {
        if (dt == 31) mth = mth + 1;

        if (mth == 1) {
          if (dt == 28) mth = mth + 1;
        }
      } else if (math %= !0) {
        if (dt == 30) mth = mth + 1;
      }
    }
  } else {
    mth = now.getUTCMonth();
    dt = now.getUTCDate();
    dy = now.getUTCDay();
  }

  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHandTky.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHandTky.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHandTky.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDateTky.textContent = "".concat(monthsArray[mth], " ").concat(dt);
  dayTky.textContent = "".concat(DaysArray[dy]);
  setTimeout(ClockTky, 500);
}

ClockTky();
/******Sydney******/

function WriteTimeSyd() {
  var now = new Date();
  var h = (now.getUTCHours() + 10) % 24;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  clockSyd.textContent = "".concat(h, " : ").concat(m, " : ").concat(s);
  setTimeout(WriteTimeSyd, 500);
}

WriteTimeSyd();

function ClockSyd() {
  var now = new Date();
  var h = now.getUTCHours() + 10;
  var m = now.getUTCMinutes();
  var s = now.getUTCSeconds();
  var mth, dt, dy;

  if (h >= 24) {
    dt = now.getUTCDate() + 1;
    dy = now.getUTCDay() + 1;
    mth = now.getUTCMonth();

    if (mth < 7) {
      if (mth % 2 == 0) {
        if (dt == 31) mth = mth + 1;

        if (mth == 1) {
          if (dt == 28) mth = mth + 1;
        }
      } else if (math %= !0) {
        if (dt == 30) mth = mth + 1;
      }
    }
  } else {
    mth = now.getUTCMonth();
    dt = now.getUTCDate();
    dy = now.getUTCDay();
  }

  var sAngle = s * 6;
  var mAngle = m * 6;
  var hAngle = h * 30 + m * 0.5;
  secondsHandSyd.style.transform = "rotate(".concat(sAngle, "deg)");
  minutesHandSyd.style.transform = "rotate(".concat(mAngle, "deg)");
  hoursHandSyd.style.transform = "rotate(".concat(hAngle, "deg)");
  monthDateSyd.textContent = "".concat(monthsArray[mth], " ").concat(dt);
  daySyd.textContent = "".concat(DaysArray[dy]);
  setTimeout(ClockSyd, 500);
}

ClockSyd();