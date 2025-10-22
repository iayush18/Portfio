// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log("sum of 10 and 20 is " + a+b);
console.log("1"-2);

// let c = a;
// a = b;
// b = c;
// console.log(a,b);
// [a,b] = [b,a]
// console.log(a,b); // a = 10, b = 20

console.log(Math.round(10.6)); // 11
console.log(Math.floor(42.64)); // 42
console.log(Math.ceil(13.1)); // 14
console.log(Math.trunc(10.98)); // Removes the decimal part of the number. 10
console.log(Math.pow(2,5)); // 2^5 = 32
console.log(Math.sqrt(9)); // 3
console.log(Math.cbrt(64)); // 4
console.log(Math.abs(-5)); // 5
console.log(Math.max(53,64,23,75)); // 75
console.log(Math.min(52,64,1,6,7)); // 1
console.log(Math.random()); // 0 to 1
let x = 89.089326784;
console.log(x.toFixed(1)); // Decimal ke bad kitne numbers rahenge

// Area & perimeter of the rectangle

// let l = 5;
// let b = 4;
// console.log(`Area of the rectangle is ${l*b}`);
// console.log(`Perimeter of the rectangle is ${2*(l+b)}`);

// Otp generator

let otp = Math.trunc(Math.random()*9000 + 1000)
console.log(`Your otp is ${otp}`);

// Area of triangle by heron's formula

let a = 5;
let b = 4;
let c = 3;

let s = (a+b+c)/2;

let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`The area of triangle is ${area}`);

