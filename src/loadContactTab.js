const loadContactTab = () => {
  /* Title and main div */
  const contactTitle = document.querySelector('h2');
  contactTitle.textContent = 'Make a reservation';

  const mainContent = document.querySelector('.main-content');
  const mainContactDiv = document.createElement('div');
  mainContactDiv.classList.add('main-contact');
  mainContent.appendChild(mainContactDiv);

  /* Text */
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const list = document.createElement('ul');
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');

  p1.textContent = `We do birthday parties, stag nights or any other good excuse to get your mates together. All you need to do is get in contact and book a day. If it's a birthday, we will throw in a Death-by-Chocolate cake, on the house.`;
  p2.textContent = 'Get in touch:';
  item1.textContent = 'Phone: 000-000-000';
  item2.textContent = 'goodgrub@notactuallyanemail.com';

  list.appendChild(item1);
  list.appendChild(item2);
  mainContactDiv.appendChild(p1);
  mainContactDiv.appendChild(p2);
  mainContactDiv.appendChild(list);
};

export default loadContactTab;
