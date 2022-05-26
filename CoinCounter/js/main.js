  /*length,width,heigth of bedroom*/
  function volume() {
    var volume;
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var heigth = document.getElementById("heigth").value;
    /*volume for output of bedrom volume*/
    var volume = length * width * heigth;
    volume = volume.toFixed(1);
    document.getElementById("volume").value = volume;
    return false;
  }
  window.onload = document.getElementById("MyForm").onsubmit = volume;

  function heigth() {
      var heigth;
      var heigth = document.getElementById("heigth").value;

    document.getElementById("heigth").value = heigth;
    return false;
  }
  window.onload = document.getElementById("MyForm").onsubmit = heigth;

  
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
      (dia = 20.5), (thickness = 3), (amount = 200), (name = "2dollar")
    } else {
      ("");
    }
    /*single coin volume*/
    var name = name;
    document.getElementById("name").innerHTML = name;
    document.getElementById("heigth").innerHTML = heigth;


    function coin_Volume() {
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
          (dia = 20.5), (thickness = 3), (amount = 200), (name = "2dollar")
        } else {
          ("");
        }
        document.getElementById("heigth").value = heigth;
        var volumn = dia * dia * thickness;
        var coin_Volume = volumn;
        document.getElementById("coin_Volume").value = coin_Volume;
        return false;
      }})

    window.onload = document.getElementById("MyCoinForm").onsubmit = coin_Volume;

