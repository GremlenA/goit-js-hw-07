const ulElem = document.querySelectorAll('ul#categories li.item');


console.log('Кількість категорій:', ulElem.length);


ulElem.forEach(element => {
  const h2 = element.querySelector('h2');
  const nestedItems = element.querySelectorAll('ul li');

  console.log('Категорія:', h2.textContent);
  console.log('Кількість елементів:', nestedItems.length);
});
