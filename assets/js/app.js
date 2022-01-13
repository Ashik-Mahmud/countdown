// dom selection 

const countdown=()=>{
    const getTimes = new Date("25 May, 2022,00:00:00").getTime();
    const nowTimes = new Date().getTime();
    const gapTimes = getTimes - nowTimes ;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(gapTimes / day);
    const textHour = Math.floor((gapTimes % day) / hour);
    const textMinute = Math.floor((gapTimes % hour) / minute);
    const textSecond = Math.floor((gapTimes % minute) / second);
    
    document.querySelector(".countDay").innerHTML = textDay;
    document.querySelector(".countHours").innerHTML = textHour;
    document.querySelector(".countMinute").innerHTML = textMinute;
    document.querySelector(".countSecond").innerHTML = textSecond;


}

setInterval(countdown,1000);