const myP1 = document.getElementById("p1");
// alert(myP1.innerText);
myP1.style.color = "red";
myP1.innerText = 'I am Over the moon';

const btn = document.getElementById("btn");
btn.innerText = "Save";

btn.onclick = click;


function click() {
  alert("Hi I am clicked");
}

