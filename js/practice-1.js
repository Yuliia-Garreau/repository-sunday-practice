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
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz"
  }
  else if (num % 3 === 0) { return "fizz" }
  else if (num % 5 === 0) { return "buzz" }
  else { 
    return num
  }
}
console.log(fizzBuzz(15));
