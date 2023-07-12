import loadPage from './loadPage';
import loadAboutTab from './loadAboutTab';
import loadMenuTab from './loadMenuTab';
import loadContactTab from './loadContactTab';

/* Update buttons display */
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

updateButtons('button-tab-1');

/* Remove the content that is going to be changed */
const removeContent = () => {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = '';
};

const displayAboutTab = () => {
  removeContent();
  updateButtons('button-tab-1');
  loadAboutTab();
};

const displayMenuTab = () => {
  removeContent();
  updateButtons('button-tab-2');
  loadMenuTab();
};

const displayContactTab = () => {
  removeContent();
  updateButtons('button-tab-3');
  loadContactTab();
};

const addButtonListeners = (() => {
  const buttons = document.querySelectorAll('.button-navigation');
  buttons.forEach((button) => {
    if (button.classList.contains('button-tab-1')) {
      button.addEventListener('click', displayAboutTab);
    }
    if (button.classList.contains('button-tab-2')) {
      button.addEventListener('click', displayMenuTab);
    }
    if (button.classList.contains('button-tab-3')) {
      button.addEventListener('click', displayContactTab);
    }
  });
})();
