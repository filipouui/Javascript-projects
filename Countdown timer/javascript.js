

let countDate = new Date('Oct 1, 2021 00:00:00').getTime();
let selectedDate = document.getElementById('date-picker');

function restTime() {
    let now = new Date().getTime();
        gap = countDate - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / second);

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
} 


selectedDate.addEventListener('input', function() {
    let newSelectedDate = selectedDate.value;
    newSelectedDate = newSelectedDate.split("-");
    let newDate = new Date( newSelectedDate[0], newSelectedDate[1] -1, newSelectedDate[2]);

    countDate = newDate;

    let now = new Date().getTime();
        gap = countDate - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / second);

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;

    
});



setInterval(function() {
    restTime();
},1000)