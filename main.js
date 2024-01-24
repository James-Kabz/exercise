     function currentTime () {
            const element = document.getElementsByClassName("local-time");

            let date = new Date();
            let hours =date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            //12 hour clock
            if (hours > 12) {
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            element.innerHTML = `${hours} ${minutes} ${seconds}`;
            setTimeout(currentTime, 1000);

        };
        currentTime();
        setInterval(currentTime,1000);