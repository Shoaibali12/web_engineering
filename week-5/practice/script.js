console.log("Parkash")
arr = ["Shoaib", "Parkash", "Faisal", "Diljeet"]

arr.push("Ali Raza")

console.log(arr)


for (let i = 0; i<arr.length; i++){
  console.log(arr[i])
}

console.log("After pop")
arr.pop()

for (let i = 0; i<arr.length; i++){
  console.log(arr[i])
}

console.log("After Shift")
arr.shift()

for (let i = 0; i<arr.length; i++){
  console.log(arr[i])
}

console.log("After Unshift Shoaib")
arr.unshift("Shoaib")

for (let i = 0; i<arr.length; i++){
  console.log(arr[i])
}

arr2 = ["Kashif", "Hanzla"]

arr3 = arr.concat(arr2)

console.log(arr3)

sliceArr = arr3.slice(2)

console.log(sliceArr)


console.log(arr3.indexOf("Faisal"))

console.log(arr3)
arr3.push("Faisal")
console.log(arr3)

console.log(arr3.indexOf("Faisal"))


let obj = {
  'key': 1
}

console.log(obj)

obj['key'] = 100
obj['key']++
console.log(obj)

if(obj['key']){
  console.log("Key found")
}
else{
  console.log("Key not found")
}

console.log(obj['0'])


// Finding the occurance of numbers in Array
/*let numbers  = [1,2,3,4,2,4,5]
let object = {}
for (i in numbers){
  let element = numbers[i]
  if (object[element]){
    object[element]++
  }
  else {
    object[element]=1
  }
}

console.log(object)*/

let fruits  = ["Banana", "Apple", "Orange", "Apple", "Mango"]
let object = {}
for (i in fruits){
  let element = fruits[i]
  if (object[element]){
    object[element]++
  }
  else {
    object[element]=1
  }
}

console.log(object)