const loadMenuTab = () => {
  /* Title and main divs */
  const menuTitle = document.querySelector('h2');
  menuTitle.textContent = 'Menu';

  const mainContent = document.querySelector('.main-content');
  const menuType1 = document.createElement('div');
  const menuDishes1 = document.createElement('div');
  const menuType2 = document.createElement('div');
  const menuDishes2 = document.createElement('div');
  const menuType3 = document.createElement('div');
  const menuDishes3 = document.createElement('div');
  const menuType4 = document.createElement('div');
  const menuDishes4 = document.createElement('div');

  menuType1.classList.add('main-menu-type');
  menuType2.classList.add('main-menu-type');
  menuType3.classList.add('main-menu-type');
  menuType4.classList.add('main-menu-type');
  menuDishes1.classList.add('main-menu-dishes');
  menuDishes2.classList.add('main-menu-dishes');
  menuDishes3.classList.add('main-menu-dishes');
  menuDishes4.classList.add('main-menu-dishes');

  mainContent.appendChild(menuType1);
  mainContent.appendChild(menuDishes1);
  mainContent.appendChild(menuType2);
  mainContent.appendChild(menuDishes2);
  mainContent.appendChild(menuType3);
  mainContent.appendChild(menuDishes3);
  mainContent.appendChild(menuType4);
  mainContent.appendChild(menuDishes4);

  /* Starters */
  const starters = document.createElement('h3');
  starters.textContent = 'Starters';
  menuType1.appendChild(starters);

  const startersList = document.createElement('ul');
  const starter1 = document.createElement('li');
  const starter2 = document.createElement('li');
  const starter3 = document.createElement('li');

  starter1.textContent = 'Buttered toast';
  starter2.textContent = 'Garlic bread';
  starter3.textContent = 'Tomato soup';

  startersList.appendChild(starter1);
  startersList.appendChild(starter2);
  startersList.appendChild(starter3);
  menuDishes1.appendChild(startersList);

  /* Mains */
  const mains = document.createElement('h3');
  mains.textContent = 'Mains';
  menuType2.appendChild(mains);

  const mainsList = document.createElement('ul');
  const main1 = document.createElement('li');
  const main2 = document.createElement('li');
  const main3 = document.createElement('li');

  main1.textContent = 'Beef pie with chips';
  main2.textContent = 'Roast chicken with roast potatoes & vegetables';
  main3.textContent =
    'Frie up (fried sausages, tomatoes, egg, toast, baked beans & Yorkshire puddings)';

  mainsList.appendChild(main1);
  mainsList.appendChild(main2);
  mainsList.appendChild(main3);
  menuDishes2.appendChild(mainsList);

  /* Desserts */
  const desserts = document.createElement('h3');
  desserts.textContent = 'Desserts';
  menuType3.appendChild(desserts);

  const dessertsList = document.createElement('ul');
  const dessert1 = document.createElement('li');
  const dessert2 = document.createElement('li');
  const dessert3 = document.createElement('li');

  dessert1.textContent = 'Death-by-Chocolate cake';
  dessert2.textContent = 'Roasted apples';
  dessert3.textContent = 'Lemon merengue pie';

  dessertsList.appendChild(dessert1);
  dessertsList.appendChild(dessert2);
  dessertsList.appendChild(dessert3);
  menuDishes3.appendChild(dessertsList);

  /* Drinks */
  const drinks = document.createElement('h3');
  drinks.textContent = 'Drinks';
  menuType4.appendChild(drinks);

  const drinksList = document.createElement('ul');
  const drink1 = document.createElement('li');
  const drink2 = document.createElement('li');
  const drink3 = document.createElement('li');
  const drink4 = document.createElement('li');
  const drink5 = document.createElement('li');

  drink1.textContent = 'Tea (black, of course)';
  drink2.textContent = 'Coffee';
  drink3.textContent = 'Beer';
  drink4.textContent = 'Orange juice';
  drink5.textContent = 'Lemonade';

  drinksList.appendChild(drink1);
  drinksList.appendChild(drink2);
  drinksList.appendChild(drink3);
  drinksList.appendChild(drink4);
  drinksList.appendChild(drink5);
  menuDishes4.appendChild(drinksList);
};

export default loadMenuTab;
