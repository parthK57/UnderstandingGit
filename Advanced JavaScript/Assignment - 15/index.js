const obj = {
  yash: 26,
  vaibhav: 24,
  rajesh: 25,
};

const arr = Object.values(obj);
let sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];
let avg = sum/arr.length;
console.log(avg);
