// 1) Доступ до першої кнопки
// const counterBtn = document.querySelector("button");
// console.log(counterBtn);
// 2) Додавання слухача події на кнопку (2 параметр колбек функція (анонімна функція))
// counterBtn.addEventListener("click", () => {
//   console.log("Клік");
// });
// Або 2) Якщо потрібно зробити замість колбек функції зовнішню функцію та передавати в 2 параметр посилання на неї, зовнішню функцію потрібно грамотно найменувати:
//    - handle*: handleEvent(загальний) або handleSubjectEvent
//      (уточнений)(Subject - куди подія, Event - яка подія)
//    - *Handler: eventHandle або SubjectEventHandler
//    - on*: onEvent або onSubjectEvent

// counterBtn.addEventListener("click", handleButtonClick);
// function handleButtonClick() {
//   console.log("Клік");
// }

// counterBtn.addEventListener("click", handleButtonClick);
// function buttonClickHandler() {
//   console.log("Клік");
// }

// counterBtn.addEventListener("click", handleButtonClick);
// function onButtonClick() {
//   console.log("Клік");
// }

// -------------------------------------------------------------------------------------------

// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
// --------------------------------------------------------------------------------------------

const refs = {
  counterEl: document.querySelector("#counter"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};
//
const counterEl = document.querySelector("#counter");
console.log(counterEl);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action);

const value = document.querySelector("#value");
console.log(value.textContent);

let counterValue = 0;
// console.log(counterValue);

refs.decrementBtn.addEventListener("click", onDecrement);

function onDecrement() {
  counterValue = counterValue - 1;
  refs.value.textContent = `${counterValue}`;

  refs.decrementBtn.textContent = `${counterValue}`;
  console.log(refs.decrementBtn.textContent);
}

refs.incrementBtn.addEventListener("click", onIncrement);

function onIncrement() {
  counterValue = counterValue + 1;
  refs.value.textContent = `${counterValue}`;
  refs.incrementBtn.textContent = `${counterValue}`;
  console.log(refs.incrementBtn.textContent);
}

// ---------------------------------------------------------------
// refs.inputEl.addEventListener("input", onInputChange);
// console.log(refs.inputEl);
// console.log(refs.spanEl);

// - ЗОВНІШНЯ ФУНКЦІЯ
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.spanEl.textContent = event.currentTarget.value;

//   event - подія;
//   current - поточний;
//   target - ціль, об'єкт;
//   value - значення;
// }

// ---------------------------------------------------------------
// 2 варіант
// const count = document.querySelector("#value");
// const btnIncr = document.querySelector('[data-action="increment"]');
// const btnDecr = document.querySelector('[data-action="decrement"]');
// btnIncr.addEventListener("click", add);
// btnDecr.addEventListener("click", remove);
// let counterValue = 0;
// function add() {
//   counterValue += 1;
//   count.textContent = counterValue;
// }
// function remove() {
//   counterValue -= 1;
//   count.textContent = counterValue;
// }
