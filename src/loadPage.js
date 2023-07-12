import loadAboutTab from './loadAboutTab';

const loadPage = (() => {
  /* Main page elements */
  const content = document.getElementById('content');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const main = document.createElement('main');
  const aside = document.createElement('aside');
  const footer = document.createElement('footer');

  content.appendChild(header);
  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(aside);
  content.appendChild(footer);

  /* Header */
  const h1 = document.createElement('h1');
  h1.textContent = 'Good Grub';
  header.appendChild(h1);

  /* Navbar */
  const buttonNav1 = document.createElement('button');
  buttonNav1.classList.add('button-navigation', 'button-tab-1');
  buttonNav1.textContent = 'About';
  const buttonNav2 = document.createElement('button');
  buttonNav2.classList.add('button-navigation', 'button-tab-2');
  buttonNav2.textContent = 'Menu';
  const buttonNav3 = document.createElement('button');
  buttonNav3.classList.add('button-navigation', 'button-tab-3');
  buttonNav3.textContent = 'Contact';

  nav.appendChild(buttonNav1);
  nav.appendChild(buttonNav2);
  nav.appendChild(buttonNav3);

  /* Aside */
  const asideDiv = document.createElement('div');
  const buttonAside1 = document.createElement('button');
  buttonAside1.classList.add('button-navigation', 'button-tab-1');
  buttonAside1.textContent = 'About';
  const buttonAside2 = document.createElement('button');
  buttonAside2.classList.add('button-navigation', 'button-tab-2');
  buttonAside2.textContent = 'Menu';
  const buttonAside3 = document.createElement('button');
  buttonAside3.classList.add('button-navigation', 'button-tab-3');
  buttonAside3.textContent = 'Contact';

  aside.appendChild(asideDiv);
  asideDiv.appendChild(buttonAside1);
  asideDiv.appendChild(buttonAside2);
  asideDiv.appendChild(buttonAside3);

  /* Footer */
  const footerSpan = document.createElement('span');
  footerSpan.textContent = 'Created by Amy Gois';
  footer.appendChild(footerSpan);

  /* Main */
  const h2 = document.createElement('h2');
  const divMainContent = document.createElement('div');
  divMainContent.classList.add('main-content');

  main.appendChild(h2);
  main.appendChild(divMainContent);

  loadAboutTab();
})();

export default loadPage;
