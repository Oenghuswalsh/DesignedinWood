/* Thousand ", " Million ", " Billion formater*/
var numberFormat = n => ((Math.log10(n) / 3 | 0) == 0) ? n : Number((n / Math.pow(10, (Math.log10(n) / 3 | 0) * 3)).toFixed(1)) + ["", " Thousand", "M", "B", "T",][Math.log10(n) / 3 | 0];



/* from HTML get index value of selected coin*/
var select = document.querySelector("#coin");
select.addEventListener("change", (event) => {
    var { value } = event.target.options[event.target.selectedIndex];
    if (value === "0") {
        (dia = 0), (thickness = 0);
    } else if (value === "1") {
        (dia = 19.41), (thickness = 1.3), (amount = 5), (nameC = "5cent");
    } else if (value === "2") {
        (dia = 23.6), (thickness = 1.5), (amount = 10), (nameC = "10cent");
    } else if (value === "3") {
        (dia = 28.65), (thickness = 2), (amount = 20), (nameC = "20cent");
    } else if (value === "4") {
        (dia = 31.65), (thickness = 2), (amount = 50), (nameC = "50cent");
    } else if (value === "5") {
        (dia = 25), (thickness = 2.8), (amount = 100), (nameC = "1dollar");
    } else if (value === "6") {
        (dia = 20.5), (thickness = 3), (amount = 200), (nameC = "2dollar");
    } else {
        ("");
    }


    /*single coin volume*/
    var coin_Volume = (Math.round(((dia * dia * thickness))));


    document.getElementById("coin_Volume").value = coin_Volume;
});
window.onload = document.getElementById("myVcoin").onsubmit = coin_Volume;



