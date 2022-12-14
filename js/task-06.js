// Подія input - пустий рядок
// const input = document.querySelector("#validation-input");
// input.addEventListener("input", onInput);
// function onInput(event) {
//   console.log(event.currentTarget);
//   console.log(event.currentTarget.value);
//   const query = event.currentTarget.value;
//   // if (query === "") {
//   if (!query) {
//     console.log("Пустий рядок");
//   }
// }
// --------------------------------------------------------------
// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// ---------------------------------------------------------------

const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
console.log(inputEl.dataset.length);
const inputLengthEl = inputEl.dataset.length;
console.log(inputLengthEl);

const styleEl = document.querySelector("style");
console.log(styleEl);
// console.log(styleEl.textContent);
// console.log(styleEl.className{ #validationInput.valid });

inputEl.addEventListener("blur", onValidInput);

function onValidInput(event) {
  console.log(event.currentTarget.value.length);

  if (event.currentTarget.value.length === Number(inputLengthEl)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
