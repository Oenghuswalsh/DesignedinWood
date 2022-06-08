
/* Thousand ", " Million ", " Billion formater*/
function numberFormat(d) {
    for (var e = 0; d >= 1000; e++) {
        d /= 1000;
    }
    return d.toFixed(1) + ["", " Thousand ", " Million ", " Billion "][e];
}
/* from HTML get index value of selected coin*/
var select = document.querySelector("#coin");
select.addEventListener("change", (event) => {
    var { value } = event.target.options[event.target.selectedIndex];
    /* coin if statment*/
    if (value == "0") {
        (dia = 2), (thickness = 2);
    } else if (value == "1") {
        (dia = 19.41), (thickness = 1.3), (amount = 5), (name = "5cent");
    } else if (value == "2") {
        (dia = 23.6), (thickness = 1.5), (amount = 10), (name = "10cent");
    } else if (value == "3") {
        (dia = 28.65), (thickness = 2), (amount = 20), (name = "20cent");
    } else if (value == "4") {
        (dia = 31.65), (thickness = 2), (amount = 50), (name = "50cent");
    } else if (value == "5") {
        (dia = 25), (thickness = 2.8), (amount = 100), (name = "1dollar");
    } else if (value == "6") {
        (dia = 20.5), (thickness = 3), (amount = 200), (name = "2dollar");
    } else {
        ("");
    }
    /*single coin volume*/
    var volumn = dia * dia * thickness;
    var coin_Volume =
        Math.round((volumn * 1.0e-9 + Number.EPSILON) * 100) / 100;
    document.getElementById("coin_Volume").innerHTML = coin_Volume;
    /*quantity of selected coin*/
    var quantity = document.querySelector("#quantity").value;
    /* total volume of selected coin*/
    var totalCoinVolumn = numberFormat(
        Math.round((volumn * 1.0e-9 * quantity + Number.EPSILON) * 100) / 100
    );
    document.getElementById("totalCoinVolumn").innerHTML = totalCoinVolumn;
    /* coin name for Output of m³ volume of entered quantity of selected coin */
    var nameB = name;
    document.getElementById("nameB").innerHTML = nameB;
    /*quantity for Output of m³ volume of entered quantity of selected coin*/
    var quan = numberFormat(quantity);
    document.getElementById(" quan").innerHTML = quan;
    /* coin name for Output of mm³ volume of selected coin*/
    document.getElementById("name").innerHTML = name;
    /* worth value for Input of value of total coins to be calculated*/
    var worth = document.querySelector("#worth").value;
    /* volume for Output of m³ volume of entered total quantity of selected coin*/
    var totalCoinWorthVolumn = numberFormat(
        Math.round(
            (volumn * 1.0e-9 * ((worth * 100) / amount) + Number.EPSILON) * 100
        ) / 100
    );
    document.getElementById("totalCoinWorthVolumn").innerHTML =
        totalCoinWorthVolumn;
    /*value of coin for Output of m³ volume of entered quantity of selected coin*/
    var coinWorth = numberFormat(worth);
    /*name of coin for Output of m³ volume of entered quantity of selected coin*/
    var nameC = name;
    document.getElementById("nameC").innerHTML = nameC;
    document.getElementById("coinWorth").innerHTML = coinWorth;


    /*length,width,heigth of bedroom*/
    function volume()
    var volume;
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var heigth = document.getElementById("heigth").value;
    /*volume for output of bedrom volume*/
    var volume = length * width * heigth;
    volume = volume.toFixed(1);
    document.getElementById("volume").value = volume;
    return false;

    /*quantity of coins for output of number of coins to fill bedroom */
    var coins =
        Math.round((volume / (volumn * 1.0e-9) + Number.EPSILON) * 100) / 100;
    var bedRoomCoins = numberFormat(coins);
    document.getElementById("bedRoomCoins").innerHTML = bedRoomCoins;
    /* coin name for Output of number of coins to fill bedroom*/
    var nameD = name;
    document.getElementById("nameD").innerHTML = nameD;
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
    /* value of height of total coins for Output of coins selected*/
    var coins_Height = numberFormat(
        Math.round(((thickness * quantity) / 1000 + Number.EPSILON) * 100) /
        100
    );
    document.getElementById("coins_Height").innerHTML = coins_Height;
});
window.onload = document.getElementById("MyForm").onsubmit = volume;
