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

const numberCategoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", numberCategoriesEl.length);

// 2) Вибір "ul id="categories"" доступ до батька (parent)

const allCategoriesEl = document.querySelector("#categories");

// 3) First item - title and number
// 3.1) вибір першої категорії в "ul id="categories""

const firstCategoryEl = allCategoriesEl.firstElementChild;
const firstCategoryTitleEl = firstCategoryEl.firstElementChild;

// 3.2) вибір першого child в першій категорії в "ul id="categories"" та назва першої категорії

const titleOfFirstCategoryEl = firstCategoryEl.firstElementChild.textContent;
console.log("Category: ", titleOfFirstCategoryEl);

// 3.3) Length of first item

const numbersElementsOfFirstCategoryEl = firstCategoryEl.querySelectorAll("li");
console.log("Elements: ", numbersElementsOfFirstCategoryEl.length);

// 4) Second item - title and number

const secondCategoryEl = firstCategoryEl.nextElementSibling;
const titleOfSecondCategoryEl = secondCategoryEl.firstElementChild.textContent;
console.log("Category: ", titleOfSecondCategoryEl);
const numbersElementsOfSecondCategoryEl =
  secondCategoryEl.querySelectorAll("li");
console.log("Elements: ", numbersElementsOfSecondCategoryEl.length);

// 5) Last item - title and number

const lastCategoryEl = allCategoriesEl.lastElementChild;
const titleOfLastCategoryEl = lastCategoryEl.firstElementChild.textContent;
console.log("Category: ", titleOfLastCategoryEl);

const numbersElementsOfLastCategoryEl = lastCategoryEl.querySelectorAll("li");
console.log("Elements: ", numbersElementsOfLastCategoryEl.length);

// ---------------------------------------------------------------
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
