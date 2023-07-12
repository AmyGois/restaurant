const loadAboutTab = () => {
  /* Title and main divs */
  const aboutTitle = document.querySelector('h2');
  aboutTitle.textContent = 'Welcome to Good Grub!';

  const mainContent = document.querySelector('.main-content');
  const mainAboutText = document.createElement('div');
  mainAboutText.classList.add('main-about-text');
  const mainAboutImages = document.createElement('div');
  mainAboutImages.classList.add('main-about-images');

  mainContent.appendChild(mainAboutText);
  mainContent.appendChild(mainAboutImages);

  /* Text content */
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  p1.textContent = `Tired of hoity-toity restaurants that charge a fortune for tiny dishes? At Good Grub we believe in serving good, hearty meals to good honest folks at good, honest prices. You will not leave hungry! (Or bankrupted!)`;
  p2.textContent = `Dig in to heart-warming, belly-filling dishes made with love by our team of hard-working chefs. If you compliment head chef John, he might even invite you out for a pint!`;
  p3.textContent = `And, if you still have any space left, why not treat yourself to one of our delicious deserts? We find that stomachs become miraculously empty when people set eyes on our Death-by-Chocolate cake.`;
  p4.textContent = `Wash it all down with a big old mug of your favourite drink (tea, coffee, beer or juice). All for a price that will put a smile on your face.`;

  mainAboutText.appendChild(p1);
  mainAboutText.appendChild(p2);
  mainAboutText.appendChild(p3);
  mainAboutText.appendChild(p4);

  /* Images */
  const img1 = document.createElement('img');
  img1.setAttribute('src', './media/duck.jpg');
  img1.setAttribute('alt', 'roast chicken with potatoes and vegetables');
  const img2 = document.createElement('img');
  img2.setAttribute('src', './media/cake.jpg');
  img2.setAttribute('alt', 'chocolate cake');

  mainAboutImages.appendChild(img1);
  mainAboutImages.appendChild(img2);
};

export default loadAboutTab;
