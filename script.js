const clockNY = document.querySelector('#clock-NY__digital');
const hoursHandNY = document.querySelector('#clock-NY-h');
const minutesHandNY = document.querySelector('#clock-NY-m');
const secondsHandNY = document.querySelector('#clock-NY-s');
const monthDateNY = document.querySelector('#clock-NY-md');
const dayNY = document.querySelector('#clock-NY-d');

const clockLnd = document.querySelector('#clock-Lnd__digital');
const hoursHandLnd = document.querySelector('#clock-Lnd-h');
const minutesHandLnd = document.querySelector('#clock-Lnd-m');
const secondsHandLnd = document.querySelector('#clock-Lnd-s');
const monthDateLnd = document.querySelector('#clock-Lnd-md');
const dayLnd = document.querySelector('#clock-Lnd-d');

const clockRdJ = document.querySelector('#clock-RdJ__digital');
const hoursHandRdJ = document.querySelector('#clock-RdJ-h');
const minutesHandRdJ = document.querySelector('#clock-RdJ-m');
const secondsHandRdJ = document.querySelector('#clock-RdJ-s');
const monthDateRdJ = document.querySelector('#clock-RdJ-md');
const dayRdJ = document.querySelector('#clock-RdJ-d');

const clockMsc = document.querySelector('#clock-Msc__digital');
const hoursHandMsc = document.querySelector('#clock-Msc-h');
const minutesHandMsc = document.querySelector('#clock-Msc-m');
const secondsHandMsc = document.querySelector('#clock-Msc-s');
const monthDateMsc = document.querySelector('#clock-Msc-md');
const dayMsc = document.querySelector('#clock-Msc-d');

const clockTky = document.querySelector('#clock-Tky__digital');
const hoursHandTky = document.querySelector('#clock-Tky-h');
const minutesHandTky = document.querySelector('#clock-Tky-m');
const secondsHandTky = document.querySelector('#clock-Tky-s');
const monthDateTky = document.querySelector('#clock-Tky-md');
const dayTky = document.querySelector('#clock-Tky-d');

const clockSyd = document.querySelector('#clock-Syd__digital');
const hoursHandSyd = document.querySelector('#clock-Syd-h');
const minutesHandSyd = document.querySelector('#clock-Syd-m');
const secondsHandSyd = document.querySelector('#clock-Syd-s');
const monthDateSyd = document.querySelector('#clock-Syd-md');
const daySyd = document.querySelector('#clock-Syd-d');


let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
let DaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ];

/******NewYork******/

function WriteTimeNY() {
    let now = new Date();
    let h = now.getUTCHours() - 5;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    clockNY.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTimeNY, 500);
}
WriteTimeNY();

function ClockNY() {
    let now = new Date();
    let h = now.getUTCHours() - 5;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth, dt, dy;
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

    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHandNY.style.transform = `rotate(${sAngle}deg)`;
    minutesHandNY.style.transform = `rotate(${mAngle}deg)`;
    hoursHandNY.style.transform = `rotate(${hAngle}deg)`;

    monthDateNY.textContent = `${monthsArray[mth]} ${dt}`;
    dayNY.textContent = `${DaysArray[dy]}`;

    setTimeout(ClockNY, 500);
}

ClockNY();

/******LONDON******/

function WriteTimeLnd() {
    let now = new Date();
    let h = now.getUTCHours();
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    clockLnd.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTimeLnd, 500);
}
WriteTimeLnd();

function ClockLnd() {
    let now = new Date();
    let h = now.getUTCHours();
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth, dt, dy;
    if (h >= 24) {
        mth = now.getUTCMonth() + 1;
        dt = now.getUTCDate() + 1;
        dy = now.getUTCDay() + 1;
    } else {
        mth = now.getUTCMonth();
        dt = now.getUTCDate();
        dy = now.getUTCDay();
    }
    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHandLnd.style.transform = `rotate(${sAngle}deg)`;
    minutesHandLnd.style.transform = `rotate(${mAngle}deg)`;
    hoursHandLnd.style.transform = `rotate(${hAngle}deg)`;

    monthDateLnd.textContent = `${monthsArray[mth]} ${dt}`;
    dayLnd.textContent = `${DaysArray[dy]}`;

    setTimeout(ClockLnd, 500);
}
ClockLnd();

/******Rio de Janeiro******/

function WriteTimeRdJ() {
    let now = new Date();
    let h = (now.getUTCHours() - 3) % 24;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    clockRdJ.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTimeRdJ, 500);
}
WriteTimeRdJ();

function ClockRdJ() {
    let now = new Date();
    let h = now.getUTCHours() - 3;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth, dt, dy;
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
    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHandRdJ.style.transform = `rotate(${sAngle}deg)`;
    minutesHandRdJ.style.transform = `rotate(${mAngle}deg)`;
    hoursHandRdJ.style.transform = `rotate(${hAngle}deg)`;

    monthDateRdJ.textContent = `${monthsArray[mth]} ${dt}`;
    dayRdJ.textContent = `${DaysArray[dy]}`;

    setTimeout(ClockRdJ, 500);
}
ClockRdJ();

/******Moscow******/

function WriteTimeMsc() {
    let now = new Date();
    let h = (now.getUTCHours() + 3) % 24;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    clockMsc.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTimeMsc, 500);
}
WriteTimeMsc();

function ClockMsc() {
    let now = new Date();
    let h = now.getUTCHours() + 3;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth, dt, dy;
    if (h >= 24) {
        dt = now.getUTCDate() + 1;
        dy = now.getUTCDay() + 1;
        mth = now.getUTCMonth();
        if (mth < 7) {
            if ((mth % 2) == 0) {
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
    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHandMsc.style.transform = `rotate(${sAngle}deg)`;
    minutesHandMsc.style.transform = `rotate(${mAngle}deg)`;
    hoursHandMsc.style.transform = `rotate(${hAngle}deg)`;

    monthDateMsc.textContent = `${monthsArray[mth]} ${dt}`;
    dayMsc.textContent = `${DaysArray[dy]}`;

    setTimeout(ClockMsc, 500);
}
ClockMsc();

/******Tokyo******/

function WriteTimeTky() {
    let now = new Date();
    let h = (now.getUTCHours() + 9) % 24;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    clockTky.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTimeTky, 500);
}
WriteTimeTky();

function ClockTky() {
    let now = new Date();
    let h = now.getUTCHours() + 9;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth, dt, dy;
    if (h >= 24) {
        dt = now.getUTCDate() + 1;
        dy = now.getUTCDay() + 1;
        mth = now.getUTCMonth();
        if (mth < 7) {
            if ((mth % 2) == 0) {
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
    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHandTky.style.transform = `rotate(${sAngle}deg)`;
    minutesHandTky.style.transform = `rotate(${mAngle}deg)`;
    hoursHandTky.style.transform = `rotate(${hAngle}deg)`;

    monthDateTky.textContent = `${monthsArray[mth]} ${dt}`;
    dayTky.textContent = `${DaysArray[dy]}`;

    setTimeout(ClockTky, 500);
}
ClockTky();

/******Sydney******/

function WriteTimeSyd() {
    let now = new Date();
    let h = (now.getUTCHours() + 10) % 24;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    clockSyd.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTimeSyd, 500);
}
WriteTimeSyd();

function ClockSyd() {
    let now = new Date();
    let h = now.getUTCHours() + 10;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth, dt, dy;
    if (h >= 24) {
        dt = now.getUTCDate() + 1;
        dy = now.getUTCDay() + 1;
        mth = now.getUTCMonth();
        if (mth < 7) {
            if ((mth % 2) == 0) {
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
    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHandSyd.style.transform = `rotate(${sAngle}deg)`;
    minutesHandSyd.style.transform = `rotate(${mAngle}deg)`;
    hoursHandSyd.style.transform = `rotate(${hAngle}deg)`;

    monthDateSyd.textContent = `${monthsArray[mth]} ${dt}`;
    daySyd.textContent = `${DaysArray[dy]}`;

    setTimeout(ClockSyd, 500);
}
ClockSyd();