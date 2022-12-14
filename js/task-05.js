// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input), підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const inputEl = document.querySelector("#name-input");
// console.log(inputEl);
// const spanEl = document.querySelector("#name-output");
// console.log(spanEl);
// ----------------------------------------------------------------

// - ДОСТУП ДО ТЕГІВ
const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

// ДОДАВАННЯ СЛУХАЧА ПОДІЇ
// На елемент refs.inputEl, додається слухач події addEventListener, з параметрами input - ім'я події, onInputChange - зовнішня функція, яка буде викликана при настані події.

refs.inputEl.addEventListener("input", onInputChange);
// console.log(refs.inputEl);
// console.log(refs.spanEl);

// - ЗОВНІШНЯ ФУНКЦІЯ
function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.spanEl.textContent = event.currentTarget.value;
}
