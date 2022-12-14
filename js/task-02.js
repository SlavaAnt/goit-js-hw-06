// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// ++ // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// ++ // Додасть назву інгредієнта як його текстовий вміст.
// ++ -// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// ---------------------------------------------------------------
// 1 метод - "for"

// const ingredientsEl = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   const itemEl = document.createElement("li");
//   console.log(itemEl);
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;

//   // const titleEl = document.createElement("h1");
//   // titleEl.textContent = ingredient;
//   // console.log(titleEl);
//   // itemEl.appendChild(titleEl);
//   ingredientsEl.push(itemEl);
// }
// // console.log(itemEl);

// console.log(ingredientsEl);

// const ingredientList = document.querySelector("#ingredients");
// ingredientList.append(...ingredientsEl);
// console.log(ingredientList);
// ---------------------------------------------------------------
// 2 метод - "map"

// const ingredientsEl = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
//   console.log(itemEl);
//   return itemEl;
// });
// console.log(ingredientsEl);
// const ingredientList = document.querySelector("#ingredients");
// ingredientList.append(...ingredientsEl);
// console.log(ingredientList);
// ---------------------------------------------------------------
// 3 метод - "function expresion + map"

const makeIngredientsListEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    // console.log(itemEl);
    return itemEl;
  });
};

const ingredientList = document.querySelector("#ingredients");
const ingredientsListEl = makeIngredientsListEl(ingredients);
ingredientList.append(...ingredientsListEl);
console.log(ingredientsListEl);
// console.log(ingredientList);
