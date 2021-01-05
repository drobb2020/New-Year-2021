const holographicElement = document.getElementById("holographic");

function updateHolographicBackground(valueX, valueY) {
  const percentage = "" + valueX * 100 + "% " + valueY * 150 + "%";
  holographicElement.style.backgroundPosition = percentage;
}

function handleMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const valueX = x / width;
  const valueY = y / height;
  updateHolographicBackground(valueX, valueY);
  var halfW = document.documentElement.clientWidth / 2;
  var halfH = document.documentElement.clientHeight / 2;
  var coorX = halfW - (event.pageX - document.documentElement.offsetLeft);
  var coorY = halfH - (event.pageY - document.documentElement.offsetTop);
  var degX = (coorY / halfH) * 5 + "deg";
  var degY = (coorX / halfW) * -5 + "deg";

  document.querySelector(".card").style.transform =
    "perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1) rotateX(" +
    degX +
    ") rotateY(" +
    degY +
    ")";
}

function handleDeviceOrientation(event) {
  const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
  const value = z / 360;
  updateHolographicBackground(value);
}

window.addEventListener("deviceorientation", handleDeviceOrientation, true);
