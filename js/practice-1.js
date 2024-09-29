"use strict";

//~ Створи функцію яка приймає число від 0 до 59 і.визначає у котру чверть години
//~ Попадає це число (у першу, другу, третю або четверту).
function getQuarter(m) {
  if (m >= 0 && m <= 15) {
    return "Quarter-1";
  } else if (m > 15 && m <= 30) {
    return "Quarter-2";
  } else if (m > 30 && m <= 45) {
    return "Quarter-3";
  } else if (m > 45 && m <= 59) {
    return "Quarter-4";
  } else {
    return "the value is not valid";
  }
}
console.log(getQuarter(55));
