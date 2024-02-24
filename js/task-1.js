const categoriesList = document.getElementById('categories');
  const categoriesItems = categoriesList.querySelectorAll('.item');

  console.log(`Number of categories: ${categoriesItems.length}`);

  categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li').length;

    console.log(`\nCategory: ${categoryName}\nElements: ${categoryElements}`);
  });










