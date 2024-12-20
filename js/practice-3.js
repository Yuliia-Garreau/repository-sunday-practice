// "use strict";
// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Task-1
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// function getUserNames() {
//   return users.map((user) => user.name);
// }
// console.log(getUserNames(users));

// Task-2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore
// Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// function getUsersWithEyeColor(users, color) {
//   return users.filter((user) => user.eyeColor === color);
// }
// console.log(getUsersWithEyeColor(users, "blue"));

// Task-3
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// function getUsersWithGender(users, genders) {
//   return users.filter(user=>user.gender===genders).map(user=>user.name)
//   return users.reduce((acc, user) => {
//     if (user.gender === genders) {
//     acc.push(user.name)
//     }
//     return acc;
//   }, [])
// }
// console.log(getUsersWithGender(users, 'male'));

// Task-4
//Повернути об'єкт у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function gatTags(tweets) {
//   return tweets
//     .flatMap((tweet) => tweet.tags)
//     .reduce((obj, tag) => {
//       return { ...obj, [tag]: obj[tag] ? obj[tag] + 1 : 1 };
//     }, {});
// }
// console.log(gatTags(tweets));
// //{
//   js: 3,
//   nodejs: 3,
//   html: 2,
//   css: 2,
//   react: 2
// }

// Task-5
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   constructor(parameters) {
//     this.items = [];
//   }

//   static Priority() {
//     return { high: "high", low: "low" };
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   updatePriority({ text, newPriority }) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
//   }
// }
// const note1 = new Notes();
// note1.addNote({ text: "Note1", priority: Notes.Priority().low });
// note1.addNote({ text: "Note2", priority: Notes.Priority().low });
// note1.addNote({ text: "Note3", priority: Notes.Priority().low });
// note1.removeNote("Note1");
// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().high });
// console.log(note1);
