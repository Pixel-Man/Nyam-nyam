window.onload = function(){

    function timer(){

        var hour = document.getElementById('timer-hour').innerHTML;
        var minute = document.getElementById('timer-minute').innerHTML;
        var second = document.getElementById('timer-second').innerHTML;
        var end = false;

        if( second > 0 ) second--;
        else{
            second = 60;

            if( minute > 0 ) minute--;
            else{
                second = 60;

                if( hour > 0 ) hour--;
                else end = true;
            }
        }

        if(end){
            clearInterval(intervalID);
            alert('Акция закончидась!');
        }else{
            document.getElementById('timer-hour').innerHTML = hour;
            document.getElementById('timer-minute').innerHTML = minute;
            document.getElementById('timer-second').innerHTML = second;
        }
    }
    window.intervalID = setInterval(timer, 1000);
};
