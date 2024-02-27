const btn = document.getElementById("btn")
const genrate = document.getElementById("gen")

btn.onclick = addBall;
function addBall() {
  const ball =   document.createElement("div")
  ball.className = "ball"
  ball.style.backgroundColor = generateHexColor();
  const container = document.getElementsByClassName("container")[0]
  container.appendChild(ball);
} 


genrate.onclick = generateHexColor;

function generateHexColor() {
  // Generate a random hexadecimal color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0');

  // Generate a random number
  const randomNumber = Math.floor(Math.random() * 1000);

  // Return an object with color and number
  return {
      color: randomColor,
      number: randomNumber
  };
}
