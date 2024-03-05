const btn = document.getElementById('add');
const con = document.getElementsByClassName('container')[0]; // Assuming you want the first element with class 'container'

btn.addEventListener('click', Add);

function Add() {
  const task = document.getElementById('txtField').value; // Changed to .value

  console.log(task);
}
