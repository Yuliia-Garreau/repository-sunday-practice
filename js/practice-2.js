"use strict";

//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// function unique(words) {
//   const unic = [];
//   for (const item of words) {
//     if (!unic.includes(item)) {
//       unic.push(item);
//     }
//   }
//   return unic;
// }
// console.log(unique(words));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sum(someArr) {
  const newArr = [];

  for (let i = 0; i < someArr.length - 1; i++) {
    const newItem = someArr[i] + someArr[i + 1];
    newArr.push(newItem);
  }
  return newArr;
}
console.log(sum(someArr));
