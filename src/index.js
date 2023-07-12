import loadPage from './loadPage';
import loadMenuTab from './loadMenuTab';

console.log('Up and running!');

/* Make this reusable later */
const updateButtons = (buttonClass) => {
  const buttons = document.querySelectorAll('.button-navigation');
  buttons.forEach((button) => {
    if (button.classList.contains(buttonClass)) {
      button.classList.add('active-tab');
    } else {
      button.classList.remove('active-tab');
    }
  });
};

loadMenuTab();

updateButtons('button-tab-2');
