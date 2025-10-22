const prompt = require("prompt-sync")();  

// let age = parseInt(prompt("Enter your age:- "))

// if(age >= 18) {
//     console.log(`You can vote`);
// }
// else {
//     console.log(`You can not age`);
// }

// let amount = parseInt(prompt("Enter ur amount:- "));
// let discount = 0;
// let total = amount - discount
// if(amount > 0 && amount <= 5000) {
//     discount = 0;
//     console.log(total);
// }
// else if(amount >= 5000 && amount <= 7000) {
//     discount = Math.floor((amount*5)/100)
//     total = amount - discount
//     console.log(total);
// } 
// else if(amount >= 7000 && amount <= 9000) {
//     discount = Math.floor((amount*10)/100)
//     total = amount - discount
//     console.log(total);
// }
// else if(amount > 9000) {
//     discount = Math.floor((amount*20)/100)
//     total = amount - discount
//     console.log(total); 
// }

let unit = parseInt(prompt("Enter electricity unit:- "))

let amount = 0;

if(unit>400) {
    amount = (unit-400)*13;
    unit = 400;
}

if(unit > 200 && unit <= 400) {
    amount = (unit-200)*8
    unit = 200
}
if(unit > 100 && unit <= 200) {
    amount = (unit - 100)*6
    unit = 100
}
if(unit > 0 && unit <= 100) {
    amount = unit*4.2
}
console.log(amount);
