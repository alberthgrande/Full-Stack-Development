function dateTime() {
  document.getElementById("demo1").innerHTML = Date();
}

function myFunction2() {
  document.getElementById("demo2").innerHTML = "Hello JavaScript!";
}

function myFunction3() {
  let demo3 = document.getElementById("demo3");
  demo3.style.fontSize = "25px";
  demo3.style.color = "red";
  demo3.style.backgroundColor = "yellow";
}

function ligthsw(sw) {
  let light;

  if (sw === 1) {
    light = "/img/pic_bulbon.gif";
  } else {
    light = "/img/pic_bulboff.gif";
  }

  document.getElementById("bulb").src = light;
}
