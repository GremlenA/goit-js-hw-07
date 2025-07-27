const ulElem = document.querySelectorAll('ul#categories li.item');

ulElem.forEach(elemen => {
    const h2 = elemen.querySelector('h2');
    const nestedItems = elemen.querySelectorAll('ul li');

    console.log('Категорія:', h2.textContent);
    console.log('Кількість елементів:', nestedItems.length);
});
