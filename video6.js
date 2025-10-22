// let arr = [53,12,64,15,86,55,87]

// let copy = arr[0]

//  Left rotation by 1 in array elements

//  for(let i=0; i<arr.length-1; i++) {
//     arr[i] = arr[i+1]
//  }

//  arr[arr.length-1] = copy;

// console.log(arr);

// Right rotation by 1 in array elements

// let duplicate = arr[arr.length-1];

// for(let i=arr.length-1; i>0; i--) {
//     arr[i] = arr[i-1];
//     // console.log(`Arr at ${i} index is ${arr}`);
// }

// arr[0] = duplicate

// console.log(`New array is ${arr}`)

// let prompt = require('prompt-sync')()

// let arr = [1,2,3,4,5];
// let copy = arr[0]
// let k = parseInt(prompt("Enter k:- "));

// for(let i=0; i<=k; i++) {
//     arr[i] = arr[i+1]
// }


// for(let j=0; j<=arr.length-1; j++) {
//     arr[j] = arr[j+1]
// }

let prompt = require("prompt-sync")()

let arr = [1, 2, 3, 4, 5];

let k = parseInt(prompt("Enter k:- "))
k = k % arr.length
let count = 0;
for(let i=1; i<=k; i++) {
    count++
    let first = arr[0]
    for(let j=0; j<arr.length; j++) {
        arr[j] = arr[j+1]
    }

    arr[arr.length-1] = first
}

console.log(arr);
