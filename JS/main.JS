"use strict";

let bar = {
  x: 300,
  y: 550,
  width: 200,
  height: 25,
  speed : 20,
  color: "#d2691e",
};

let ball = {
  color: "#FF0000",
  radius: 10,
  x: 300,
  y: 20,
};


let canvasDom;
let ctx;

document.addEventListener("DOMContentLoaded", function () {
  canvasDom = document.querySelector("#canvas");
  ctx = canvasDom.getContext("2d");
  displaybackgroud(); 
  displayBar();
  displayBall();
  document.addEventListener("keydown", moveBar);
});

function moveBar(e) {
  switch (e.key) {
    case "ArrowRight":
      if (bar.x + bar.width < canvasDom.width) bar.x+= bar.speed;
      break;
    case "ArrowLeft":
      if (bar.x  > 0) bar.x-= bar.speed;
      break;
  }
  displaybackgroud();
  displayBall();
  displayBar();
}
function displaybackgroud() {
  ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
  ctx.fillStyle = "#DDDDDD";
  ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
}
function displayBar() {
  ctx.beginPath();
  ctx.fillStyle = bar.color;
  ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
}
function displayBall() {
  ctx.fillStyle = ball.color;
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
function moveBall() {
  ball.x = ball.x + 5;
  ball.y = ball.y 
}