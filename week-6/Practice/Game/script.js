const btn = document.getElementById("btn")

btn.onclick = addBall;
function addBall() {
  const ball =   document.createElement("div")
  ball.className = "ball"
  const container = document.getElementsByClassName("container")[0]
  container.appendChild(ball);
} 

