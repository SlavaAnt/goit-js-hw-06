// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// ---------------------------------------------------------------

const formEl = document.querySelector(".login-form");
// console.log(formEl);

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  //   console.log("submit");
  event.preventDefault();
  //   console.dir(event.currentTarget);
  //   console.dir(event.currentTarget.elements  );
  //   console.dir(event.currentTarget.elements.email);
  //   console.dir(event.currentTarget.elements.password);

  //   const { email, password } = event.currentTarget.elements;
  //   console.log(email.value);
  //   console.log(password.value);
  //   if (email.value === "" || password.value === "") {
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    // Для окремих елементів (інтерфейс event.currentTarget.elements - для декількох полів):

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formElementsData = {
      email,
      password,
    };
    console.log(formElementsData);
    event.currentTarget.reset();

    // -------------------------------------------------------------
    // Для збору даних всієї форми - клас formData - для перегляду -  forEach
    //   const formData = new FormData(event.currentTarget);
    //   console.log(formData);
    //   formData.forEach((value, name) => {
    //     console.log("onSubmit -> name", name);
    //     console.log("onSubmit -> value", value);
    //   });
  }
}
