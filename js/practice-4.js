/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення 
(дивіться на елементи в html-розмітці)
*/

// const btn = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// btn.addEventListener("click", function output(event) {
//   console.log(input.value);
//   console.log(btn.textContent);
// });

// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// */

const btn = document.querySelector("#swapButton");
const leftInput = document.querySelector("#leftSwapInput");
const rightInput = document.querySelector("#rightSwapInput");

btn.addEventListener("click", function change(event) {
  const left = leftInput.value;
  const right = rightInput.value;
  leftInput.value = right;
  rightInput.value = left;
});
