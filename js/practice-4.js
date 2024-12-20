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

// const btn = document.querySelector("#swapButton");
// const leftInput = document.querySelector("#leftSwapInput");
// const rightInput = document.querySelector("#rightSwapInput");

// btn.addEventListener("click", function change(event) {
//   const left = leftInput.value;
//   const right = rightInput.value;
//   leftInput.value = right;
//   rightInput.value = left;
// });
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const btn = document.querySelector("#passwordButton");
// btn.addEventListener("click", handleclick);
// const input = document.querySelector("#passwordInput");
// function handleclick() {
//   if (input.getAttribute("type") === "text") {
//     input.setAttribute("type", "password");
//     btn.textContent = "Розкрити";
//     return
//   }
//     input.setAttribute("type", "text");
//   btn.textContent = "Приховати";

// }
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
*/
// const box = document.querySelector("#box");
// const decrease = document.querySelector("#decrease");
// decrease.addEventListener("click", decreaseBox);
// const increase = document.querySelector("#increase");
// increase.addEventListener("click", increaseBox);
// let boxWidth = parseInt(getComputedStyle(box).width);
// let boxHight = parseInt(getComputedStyle(box).height);

// console.log(boxWidth);
// console.log(boxHight);

// function decreaseBox() {
//   if (boxWidth < 10 || boxHight < 10) {
//     return;
//   }
//   boxWidth -= 10;
//   boxHight -= 10;
//   box.style.width = `${boxWidth}px`;
//   box.style.height = `${boxHightpx}px`;
// }

// function increaseBox() {
//   boxWidth += 10;
//   boxHight += 10;
//   box.style.width = `${boxWidth}px`;
//   box.style.height = `${boxHightpx}px`;
// }
/*
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
*/
// const outerCircle = document.querySelector(".outerCircle");

// outerCircle.addEventListener("click", handleClick);

// function handleClick() {
//   if (getComputedStyle(outerCircle).position === "static") {
//     window.addEventListener("mousemove", onMouseMove);
//     outerCircle.style.position = "absolute";
//   } else {
//     outerCircle.style.position = "static";
//     window.removeEventListener("mousemove", onMouseMove);
//   }
// }
// function onMouseMove(event) {
//   outerCircle.style.left = `${event.pageX - 20}px`;
//   outerCircle.style.top = `${event.pageY - 20}px`;
// }

/*Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const btn = document.querySelector("#double");
// const list = document.querySelector(".list");

// btn.addEventListener("click", function doubl(event) {
//   const items = document.querySelectorAll(".listItem");
//   const arr = [...items];
//   const doublArr = arr
//     .map((item) => {
//       return `<li class="listItem">${item.textContent * 2}</li>`;
//     })
//     .join("");
//   list.innerHTML = doublArr;
// });
