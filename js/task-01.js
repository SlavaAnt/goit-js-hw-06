// Тренування:
// console.log(window);
// console.log(document);

// const navEl = document.querySelector("ul");
// console.log(navEl);

// const navItemEl = document.querySelector("li");
// console.log(navItemEl);
// const navItemEl = document.querySelector(".item");
// console.log(navItemEl);
// const navItemEl = document.querySelector("h2");
// console.log(navItemEl);
// const navLinkEl = document.querySelectorAll("li");
// console.log(navLinkEl);
// const navLinkEl = document.querySelectorAll(".item");
// console.log(navLinkEl);

// --------------------------------------------------------------

// ЗАВДАННЯ 1

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// ---------------------------------------------------------------

// 1) Вибір всіх items та їхня кількість

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// ---------------------------------------------------------------
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
