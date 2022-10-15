const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = document.querySelector('#ingredients');

const createItem = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList = "item";
  return listElement;
});

listItems.append(...createItem);