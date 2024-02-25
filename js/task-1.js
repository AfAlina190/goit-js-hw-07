// Отримуємо доступ до елементу ul#categories
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи li.item в межах ul#categories
const categoriesItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log('Number of categories:', categoriesItems.length);

// Проходимося по кожному елементу li.item
categoriesItems.forEach((categoryItem) => {
  // Отримуємо заголовок категорії
  const categoryName = categoryItem.querySelector('h2').textContent;

  // Отримуємо всі елементи li в межах поточної категорії
  const categoryElements = categoryItem.querySelectorAll('li');

  // Виводимо інформацію про категорію
  console.log(`Category: ${categoryName}\nElements: ${categoryElements.length}\n`);
});




document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо елемент ul#categories
  const categoriesList = document.getElementById("categories");

  // Отримуємо всі елементи li.item
  const categories = categoriesList.querySelectorAll("li.item");

  // Виводимо загальну кількість категорій
  console.log("Number of categories:", categories.length);

  // Для кожної категорії виводимо назву та кількість елементів у ній
  categories.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("ul li").length;

    console.log(`\nCategory: ${categoryName}`);
    console.log("Elements:", elementsCount);
  });
});





