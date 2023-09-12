
setInterval(myTimer, 1);

function myTimer() {

const time = document.getElementById("current-time");
            let d = new Date();
            let hours = addZero(d.getHours());
            let minutes = addZero(d.getMinutes());
            let seconds = addZero(d.getSeconds());

            let caltime =  `${hours}: ${minutes}: ${seconds}`;
            time.innerHTML = caltime;


function addZero(num){
                return num < 10 ? `0${num}`: num;
            }
        }

let days = document.getElementById("current-day");
            let t = new Date();
            const dow = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            days.innerHTML = dow [t.getDay()];
