var imprimeR = document.getElementById('reloj');
document.addEventListener('load', showRemaining());


var end = new Date('12/28/2018 3:50 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0)
        {

            clearInterval(timer);
            imprimeR.innerHTML = '¡Realizada!';
            //imprimeR.href = 'www.google.com';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        if(end > 0)
        {
            imprimeR.innerHTML = days + ' días <br>';
            imprimeR.innerHTML += hours + ' horas <br>';
            imprimeR.innerHTML += minutes + ' minutos <br>';
            imprimeR.innerHTML += seconds + ' segundos <br>';
        }
    }

    timer = setInterval(showRemaining, 1000);

var fila = new Participante();
