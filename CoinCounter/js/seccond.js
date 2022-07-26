/* Thousand ", " Million ", " Billion formater*/
var numberFormat = n => ((Math.log10(n) / 3 | 0) == 0) ? n : Number((n / Math.pow(10, (Math.log10(n) / 3 | 0) * 3)).toFixed(1)) + ["", " Thousand", "M", "B", "T",][Math.log10(n) / 3 | 0];

/* from HTML get index value of selected coin*/
var select = document.querySelector("#coin");
select.addEventListener("change", (event) => {
    var { value } = event.target.options[event.target.selectedIndex];
    /* coin if statment*/
    if (value == "0") {
        (dia = 0), (thickness = 0);
    } else if (value == "1") {
        (dia = 19.41), (thickness = 1.3), (amount = 5), (nameB = "5cent");
    } else if (value == "2") {
        (dia = 23.6), (thickness = 1.5), (amount = 10), (nameB = "10cent");
    } else if (value == "3") {
        (dia = 28.65), (thickness = 2), (amount = 20), (nameB = "20cent");
    } else if (value == "4") {
        (dia = 31.65), (thickness = 2), (amount = 50), (nameB = "50cent");
    } else if (value == "5") {
        (dia = 25), (thickness = 2.8), (amount = 100), (nameB = "1dollar");
    } else if (value == "6") {
        (dia = 20.5), (thickness = 3), (amount = 200), (nameB = "2dollar");
    } else {
        ("");
    }
    /*single coin volume*/
    var nameB = nameB;
    document.getElementById("nameB").innerHTML = nameB;

    var volumn = dia * dia * thickness;

    var volume = document.getElementById("volume").value;
    var volumeB = volume;
    document.getElementById("volumeB").value = volumeB;



    /*quantity of coins for output of number of coins to fill bedroom */
    var coins =
        Math.round((volume / (volumn * 1.0e-9) + Number.EPSILON) * 100) / 100;
    var bedRoomCoins = numberFormat(coins);
    document.getElementById("bedRoomCoins").innerHTML = bedRoomCoins;


    /* value of total coins for Output of number of coins to fill bedroom*/
    var coinsValue = numberFormat(
        Math.round(((coins * amount) / 100 + Number.EPSILON) * 100) / 100
    );
    document.getElementById("coinsValue").innerHTML = coinsValue;


    /* value of height of total coins for Output of number of coins to fill bedroom*/
    var coinsHeight = numberFormat(
        Math.round(((thickness * coins) / 1000 + Number.EPSILON) * 100) / 100
    );
    document.getElementById("coinsHeight").innerHTML = coinsHeight;



    if (volumn > 0) {
        (hideThisDiv = document.getElementById("coinVolumn").style.display = "none");
        (hideThisDiv = document.getElementById("bedroom").style.display = "block");
    }


});
window.onload = document.getElementById("bedroom").onsubmit = nameB, bedRoomCoins, coinsValue, coinsHeight;
