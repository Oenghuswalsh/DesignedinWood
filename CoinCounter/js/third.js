/* Thousand ", " Million ", " Billion formater*/
var numberFormat = n => ((Math.log10(n) / 3 | 0) == 0) ? n : Number((n / Math.pow(10, (Math.log10(n) / 3 | 0) * 3)).toFixed(1)) + ["", " Thousand", "M", "B", "T",][Math.log10(n) / 3 | 0];

/* from HTML get index value of selected coin*/
var select = document.querySelector("#coinSel");
select.addEventListener("change", (event) => {
    var { value } = event.target.options[event.target.selectedIndex];
    /* coin if statment*/
    if (value == "0") {
        (dia = 0), (thickness = 0);
    } else if (value == "1") {
        (dia = 19.41), (thickness = 1.3), (amount = 5), (nameD = "5cent");
    } else if (value == "2") {
        (dia = 23.6), (thickness = 1.5), (amount = 10), (nameD = "10cent");
    } else if (value == "3") {
        (dia = 28.65), (thickness = 2), (amount = 20), (nameD = "20cent");
    } else if (value == "4") {
        (dia = 31.65), (thickness = 2), (amount = 50), (nameD = "50cent");
    } else if (value == "5") {
        (dia = 25), (thickness = 2.8), (amount = 100), (nameD = "1dollar");
    } else if (value == "6") {
        (dia = 20.5), (thickness = 3), (amount = 200), (nameD = "2dollar");
    } else {
        ("");
    }
    /*coin name*/
    var nameD = nameD;
    document.getElementById("nameD").innerHTML = nameD;

    /*coin volume*/
    var volumn = dia * dia * thickness;

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
    document.getElementById("coinWorth").innerHTML = coinWorth;

});
window.onload = document.getElementById("coinSelection").onsubmit = nameD, totalCoinWorthVolumn;
