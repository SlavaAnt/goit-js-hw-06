// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const refs = {
  elements: document.querySelector("#controls"),
  input: document.querySelector("input"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const numberBoxes = refs.input.value;

refs.create.addEventListener("click", onCreate);

function onCreate() {
  const numberBoxes = refs.input.value;

  for (let i = 1; i <= numberBoxes; i += 1) {
    const box = document.createElement("div");
    box.style.height = `${i * 10 + 20}px`;
    box.style.width = `${i * 10 + 20}px`;
    box.style.border = "1px solid black";
    box.style.background = getRandomHexColor();
    box.style.margin = "20px";

    boxes.append(box);
  }
}

refs.destroy.addEventListener("click", onDestroy);
function onDestroy() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
