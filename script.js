const clock = document.querySelector('#clock-1');

function WriteTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = (h < 10) ? '0' + h: h;
    m = (m < 10) ? '0' + m: m;
    s = (s < 10) ? '0' + s: s;
    clock.textContent = `${h} : ${m} : ${s}`;
    setTimeout(WriteTime, 500);
}

WriteTime();

const hoursHand = document.querySelector('.clock-h');
const minutesHand = document.querySelector('.clock-m');
const secondsHand = document.querySelector('.clock-s');
const monthDate = document.querySelector('.clock-md');
const day = document.querySelector('.clock-d');

// let monthsArray = new Array();
// let DaysArray = new Array();
let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
let DaysArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',];

function Clock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let mth = now.getMonth();
    let d = now.getDate();
    let dy = now.getDay();
    
    console.log(now);


    let sAngle = s * 6;
    let mAngle = m * 6;
    let hAngle = h * 30 + (m * 0.5);

    secondsHand.style.transform = `rotate(${sAngle}deg)`;
    minutesHand.style.transform = `rotate(${mAngle}deg)`;
    hoursHand.style.transform = `rotate(${hAngle}deg)`;

    monthDate.textContent = `${monthsArray[mth]} ${d}`;
    day.textContent = `${DaysArray[dy]}`;
    
    setTimeout(Clock, 500);
}

Clock();