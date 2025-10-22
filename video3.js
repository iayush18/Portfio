const prompt = require("prompt-sync")();

// let n = parseInt(prompt("Enter n:- "));

// let total = 0;

// if (isNaN(n)) {
//     console.log(`Please enter valid number`);
// }
// else {
//     if (n > 0) {
//         for (let i = 1; i <= n; i++) {
//             total += i;
//         }
//     }
//     else {
//         console.log(`Please enter a positive number`);
//     }

// }




// console.log(`Your total from 1 to ${n} is ${total}`);

// let n = parseInt(prompt("Enter a num:- "));
// let factorial = 1;

// if (isNaN(n)) {
//     console.log(`Please enter valid number`);
// }
// else {
//     if (n < 0) {
//         console.log(`Please enter a positive number`)
//     }
//     else {
//         for (let i = 1; i <= n; i++) {
//             factorial *= i;
//         }
//     }
// }

// console.log(`Your factorial of ${n} is ${factorial}`);

// let n = parseInt(prompt("Enter a number:- "));
// let count = 0;

// for(let i=1; i<=n; i++) {
//     if(n%i === 0) {
//         count++;
//     }
// }

// if(count > 2) {
//     console.log(`${n} is not prime`);
// }
// else {
//     console.log(`${n} is prime`);
// }

// let n = parseInt(prompt("Enter a number:- "));
// let temp = n
// let sum = 0;
// while(temp!==0) {
//     let r = temp%10;
//     sum += r;
//     temp = Math.floor(temp/10)
// }

// console.log(`Total sum of the digit ${n} is ${sum}`)

// let n = parseInt(prompt("Enter a num:- "));
// let temp = n
// let reverse = 0;

// while(temp!==0) {
//     let remainder = temp%10;
//     reverse = reverse * 10 + remainder;
//     temp = Math.floor(temp/10)
// }

// console.log(`Your given num is ${n} and reversed is ${reverse}`);

// let n = parseInt(prompt("Enter a num:- "));

// let sum = 0;
// let fact = 1;
// let temp = n;

// while(temp !== 0) {
//     let remainder = temp % 10;
//     console.log(`remainder = ${remainder}`);
    
//     for(let i = 1; i<= remainder; i++) {
//         fact *= i;
//         console.log(`fact = ${fact}`);
//     }
//     sum += fact
//     console.log(`Sum ${sum}`);
//     temp = Math.floor(temp / 10)
//     console.log(`temp = ${temp}`);
//     fact = 1;
// }

// console.log(`total sum = ${sum}`);

// if(n === sum) {
//     console.log(`${n} is a strong number.`);
// }
// else {
//     console.log(`${n} is not a strong number.`);
// }

let random = Math.floor(Math.random()*100+1);

let guess = -1;

while(guess !== random) {
    guess = parseInt(prompt("Enter a num:- ")) 
    if(isNaN(guess) || guess < 1 || guess > 100) {
        console.log(`Please enter a valid number between 1 to 100`);
        continue;
    }
    if(guess > random) {
        console.log(`Number is too larger, try again`);
    }
    else if(guess < random) {
        console.log(`Number is too low, try again`);
    }
    else {
        console.log(`Congratulations, You have won`);
    }
}