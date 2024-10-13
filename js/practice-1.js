"use strict";

//~ Створи функцію яка приймає число від 0 до 59 і.визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).
// function getQuarter(m) {
//   if (m >= 0 && m <= 15) {
//     return "Quarter-1";
//   } else if (m > 15 && m <= 30) {
//     return "Quarter-2";
//   } else if (m > 30 && m <= 45) {
//     return "Quarter-3";
//   } else if (m > 45 && m <= 59) {
//     return "Quarter-4";
//   } else {
//     return "the value is not valid";
//   }
// }
// console.log(getQuarter(55));

//~ Напиши функцію яка запитує у користувача ведення числа  1, 2, 3 або 4. Якщо вона має
//~ значення '1', то у змінну result запишемо 'зима', якщо має значення
//~ '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// function checkSeason(num) {
//   let result;
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//    case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "хибне значення";
//     break;
//   }
//   return result;
// }

// console.log(checkSeason(5));

//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max і поверніть результат з функції

// function namelogNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(namelogNumbers(1, 20));

// Напишіть функцію fizzBuzz яка приймає число
//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz
// function fizzBuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "fizzbuzz"
//   }
//   else if (num % 3 === 0) { return "fizz" }
//   else if (num % 5 === 0) { return "buzz" }
//   else {
//     return num
//   }
// }
// console.log(fizzBuzz(15));

//~Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// function checkUser() {
//   const userRule = prompt("Введіть логін");
//   if (userRule === "Адмін") {
//     const userPassword = prompt("Введіть пароль:");
//     if (!userPassword) {
//       console.log("Скасовано");
//     }
//     else if (userPassword === "Я головний") {
//       console.log("Добрий день!");
//     } else {
//       console.log("Невірний пароль!");

//     }

//   } else {
//     console.log("Я вас не знаю");

//   }
// }
// checkUser()

//~При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//~а не довільний набір символів, не потрібно.

// console.log(inputValue);

// function inputValueNum() {
//   let inputValue = prompt("Введіть число");
//   let total = 0;

//   while (inputValue) {
//     total += Number(inputValue);

//     inputValue = prompt("Введіть число");
//   }
//   alert(`Загальна сума введених чисел дорівнює ${total}`);
// }
// inputValueNum();
