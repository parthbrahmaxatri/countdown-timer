var countDownDate = new Date("Oct 25, 2021 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector("#dayy").innerHTML = days;
    document.querySelector("#hourr").innerHTML = hours;
    document.querySelector("#minn").innerHTML = minutes;
    document.querySelector("#secc").innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#flex-c").style.display = "none";
        document.querySelector("footer").style.display = "block";
    }
}, 1000);