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
