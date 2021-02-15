const clockNY = document.querySelector('#clock-NY__digital');
const hoursHandNY = document.querySelector('.clock-NY-h');
const minutesHandNY = document.querySelector('.clock-NY-m');
const secondsHandNY = document.querySelector('.clock-NY-s');
const monthDateNY = document.querySelector('.clock-NY-md');
const dayNY = document.querySelector('.clock-NY-d');

const clockLnd = document.querySelector('#clock-Lnd__digital');
const hoursHandLnd = document.querySelector('.clock-Lnd-h');
const minutesHandLnd = document.querySelector('.clock-Lnd-m');
const secondsHandLnd = document.querySelector('.clock-Lnd-s');
const monthDateLnd = document.querySelector('.clock-Lnd-md');
const dayLnd = document.querySelector('.clock-Lnd-d');



let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
let DaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ];

function WriteTimeNY() {
    let now = new Date();
    let h = now.getUTCHours()-5;
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
    let h = now.getUTCHours()-5;
    let m = now.getUTCMinutes();
    let s = now.getUTCSeconds();
    let mth = now.getUTCMonth();
    let dt = now.getUTCDate();
    let dy = now.getUTCDay();
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
    let mth = now.getUTCMonth();
    let dt = now.getUTCDate();
    let dy = now.getUTCDay();
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