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

// 2 спосіб розвязку задачі

// function getUnique(arr) {
//   const uniqueArr = [];

//   for(let i = 0; i < arr.length; i++) {
//     if(i === arr.indexOf(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }

//   return uniqueArr;
// }

// console.log(getUnique(words));


// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(someArr) {
//   const newArr = [];

//   for (let i = 0; i < someArr.length - 1; i++) {
//     const newItem = someArr[i] + someArr[i + 1];
//     newArr.push(newItem);
//   }
//   return newArr;
// }
// console.log(sum(someArr));
//---------
//Напиши функцію яка призначає знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// function getRandomEightDigitNumber() {
//     return Math.floor(10000000 + Math.random() * 90000000);
// }
// const fruits = [
//   { name: "apple", price: 200 },
//     { name: "orange", price: 300 },
//     { name: "grapes", price: 750 },
// ];
// function sale(arr) {
//   const newArr = [];
//   for (const item of arr) {
//     const newObj = {...item};
//     newObj.price *= 0.8;
//     newObj["id"] = getRandomEightDigitNumber();
//     newArr.push(newObj);
//   }
//   return newArr
// }
// console.log(sale(fruits));

// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт
//повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви
//об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
// const students = [
//   { name: "Алиса", age: 20, course: "Java" },
//   { name: "Боб", age: 22, course: "Python" },
//   { name: "Карл", age: 21, course: "Java" },
//   { name: "Джон", age: 23, course: "JavaScript" },
// ];

// function groupStudents(students) {
//   const groupedStudents = {};
//   for (const student of students) {
//     if (!groupedStudents[student.course]) {
//       groupedStudents[student.course] = [];
//     }
//     groupedStudents[student.course].push(student);
//   }
//   return groupedStudents;
// }
// console.log(groupStudents(students));

//TODO:=======================
//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 додати поле mood зі значенням 'happy'
//2 замінити hobby на 'skydiving'
//3 замінити значення premium на false
//4 виводити вміст об'єкта user у форматі

//ключ:значення використовуючи Object.keys() і for...of
// const user = {
// name: "John",
// age: 20,
// hobby: "tenis",
// premium: true,
//};

// Додати метод getinfo в об'єкт user, який повертатиме інфу про користувача у форматі
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// const user2 = {
//   name: "Batman",
//   surname: "Hz",
//   age: 36,
//   position: "batman",
// };

//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат ({a: 1. b: 2}, 'b') => {a: 1}
