// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
// --------------------------------------------------------------

const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
console.log(inputEl.type);
console.log(inputEl.min);
console.log(inputEl.max);
const spanEl = document.querySelector("span");
console.log(spanEl);

inputEl.addEventListener("input", onChange);

function onChange(event) {
  console.log(event.currentTarget.value);
  spanEl.style.fontSize = `${event.currentTarget.value}px  `;
}
