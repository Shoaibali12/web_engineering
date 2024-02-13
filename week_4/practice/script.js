console.log("Hi I am Shooaib")
console.error("I am an error")
console.warn("I am a warning")

console.log("Printing forloop")

for (let i = 0; i < 5; i++) {
  console.log("Iteration " + (i + 1));
}

alert("Do not visit this page")
console.log(typeof({}))

const myObj = {
  name:"Shoaib",
  cms: "021-21-0045",
 address:{
    city: "Tando Adam",
    country: "Pakistan"
  }
}

console.log(myObj)

for (const i in myObj){
  console.log(myObj[i])
}