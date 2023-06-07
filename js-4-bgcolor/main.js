let bodyBg = document.getElementById("body");
let btn = document.getElementById("btn");

let colorArr = ["green", "red", "yellow", "gray", "blueviolet", "brown", "coral"];

btn.addEventListener("click", randomColor);

function randomColor() {
  let color = parseInt(Math.random() * colorArr.length);
  bodyBg.style.background = colorArr[color];
}
