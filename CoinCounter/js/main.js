const element = document.getElementById("buttonOne");
element.addEventListener("click", showBedroom);
function showBedroom() {
  document.getElementById("bedroomVolume").style.display = "block";
  document.getElementById("hideChoice").style.display = "none";
}
const elefent = document.getElementById("buttonTwo");
elefent.addEventListener("click", showMoney);
function showMoney() {
  document.getElementById("valueOfCoins").style.display = "block";
  document.getElementById("hideChoice").style.display = "none";
}

/* Thousand ", " Million ", " Billion formater*/
var numberFormat = (n) =>
  ((Math.log10(n) / 3) | 0) == 0
    ? n
    : Number((n / Math.pow(10, ((Math.log10(n) / 3) | 0) * 3)).toFixed(1)) +
      ["", " Thousand", "M", "B", "T"][(Math.log10(n) / 3) | 0];

/*length,width,height of bedroom*/
function volume() {
  var volume;
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;

  /*volume for output of bedrom volume*/
  var volume = length * width * height;
  volume = volume.toFixed(1);
  document.getElementById("volume").value = volume;

  var roomLength = length;
  var roomWidth = width;
  var roomHeight = height;

  document.getElementById("roomLength").innerHTML = roomLength;
  document.getElementById("roomWidth").innerHTML = roomWidth;
  document.getElementById("roomHeight").innerHTML = roomHeight;

  var rmLength = length;
  var rmWidth = width;
  var rmHeight = height;

  document.getElementById("rmLength").innerHTML = rmLength;
  document.getElementById("rmWidth").innerHTML = rmWidth;
  document.getElementById("rmHeight").innerHTML = rmHeight;

  return false;
}

window.onload = document.getElementById("MyForm").onsubmit = volume;
function hideDiv() {
  document.getElementById("bedroomVolume").style.display = "none";
  document.getElementById("coinVolumn").style.display = "block";
}
/* from HTML get index value of selected coin*/
var select = document.querySelector("#coin");
select.addEventListener("change", (event) => {
  var { value } = event.target.options[event.target.selectedIndex];
  if (value === "0") {
    (dia = 0), (thickness = 0), (amount = 0), (name = "non existent");
  } else if (value === "1") {
    (dia = 19.41), (thickness = 1.3), (amount = 5), (name = "5cent");
  } else if (value === "2") {
    (dia = 23.6), (thickness = 1.5), (amount = 10), (name = "10cent");
  } else if (value === "3") {
    (dia = 28.65), (thickness = 2), (amount = 20), (name = "20cent");
  } else if (value === "4") {
    (dia = 31.65), (thickness = 2), (amount = 50), (name = "50cent");
  } else if (value === "5") {
    (dia = 25), (thickness = 2.8), (amount = 100), (name = "1dollar");
  } else if (value === "6") {
    (dia = 20.5), (thickness = 3), (amount = 200), (name = "2dollar");
  } else {
    ("");
  }

  /* coin name for Output of mm³ volume of selected coin*/
  var name = name;
  document.getElementById("name").innerHTML = name;
  var nameC = name;
  document.getElementById("nameC").innerHTML = nameC;
});
