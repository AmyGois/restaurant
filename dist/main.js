/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadAboutTab.js":
/*!*****************************!*\
  !*** ./src/loadAboutTab.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutTab);


/***/ }),

/***/ "./src/loadContactTab.js":
/*!*******************************!*\
  !*** ./src/loadContactTab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);


/***/ }),

/***/ "./src/loadMenuTab.js":
/*!****************************!*\
  !*** ./src/loadMenuTab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);


/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadAboutTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadAboutTab */ "./src/loadAboutTab.js");


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

  (0,_loadAboutTab__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _loadAboutTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadAboutTab */ "./src/loadAboutTab.js");
/* harmony import */ var _loadMenuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenuTab */ "./src/loadMenuTab.js");
/* harmony import */ var _loadContactTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContactTab */ "./src/loadContactTab.js");





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

/* Button event listener functions */
const displayAboutTab = () => {
  removeContent();
  updateButtons('button-tab-1');
  (0,_loadAboutTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

const displayMenuTab = () => {
  removeContent();
  updateButtons('button-tab-2');
  (0,_loadMenuTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

const displayContactTab = () => {
  removeContent();
  updateButtons('button-tab-3');
  (0,_loadContactTab__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0I5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckhlOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLHlEQUFZO0FBQ2QsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN0RXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDUTtBQUNGO0FBQ007O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFZO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBVztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWRBYm91dFRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWRDb250YWN0VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZE1lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkQWJvdXRUYWIgPSAoKSA9PiB7XG4gIC8qIFRpdGxlIGFuZCBtYWluIGRpdnMgKi9cbiAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBHb29kIEdydWIhJztcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgY29uc3QgbWFpbkFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQWJvdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ21haW4tYWJvdXQtdGV4dCcpO1xuICBjb25zdCBtYWluQWJvdXRJbWFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkFib3V0SW1hZ2VzLmNsYXNzTGlzdC5hZGQoJ21haW4tYWJvdXQtaW1hZ2VzJyk7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkFib3V0VGV4dCk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5BYm91dEltYWdlcyk7XG5cbiAgLyogVGV4dCBjb250ZW50ICovXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9IGBUaXJlZCBvZiBob2l0eS10b2l0eSByZXN0YXVyYW50cyB0aGF0IGNoYXJnZSBhIGZvcnR1bmUgZm9yIHRpbnkgZGlzaGVzPyBBdCBHb29kIEdydWIgd2UgYmVsaWV2ZSBpbiBzZXJ2aW5nIGdvb2QsIGhlYXJ0eSBtZWFscyB0byBnb29kIGhvbmVzdCBmb2xrcyBhdCBnb29kLCBob25lc3QgcHJpY2VzLiBZb3Ugd2lsbCBub3QgbGVhdmUgaHVuZ3J5ISAoT3IgYmFua3J1cHRlZCEpYDtcbiAgcDIudGV4dENvbnRlbnQgPSBgRGlnIGluIHRvIGhlYXJ0LXdhcm1pbmcsIGJlbGx5LWZpbGxpbmcgZGlzaGVzIG1hZGUgd2l0aCBsb3ZlIGJ5IG91ciB0ZWFtIG9mIGhhcmQtd29ya2luZyBjaGVmcy4gSWYgeW91IGNvbXBsaW1lbnQgaGVhZCBjaGVmIEpvaG4sIGhlIG1pZ2h0IGV2ZW4gaW52aXRlIHlvdSBvdXQgZm9yIGEgcGludCFgO1xuICBwMy50ZXh0Q29udGVudCA9IGBBbmQsIGlmIHlvdSBzdGlsbCBoYXZlIGFueSBzcGFjZSBsZWZ0LCB3aHkgbm90IHRyZWF0IHlvdXJzZWxmIHRvIG9uZSBvZiBvdXIgZGVsaWNpb3VzIGRlc2VydHM/IFdlIGZpbmQgdGhhdCBzdG9tYWNocyBiZWNvbWUgbWlyYWN1bG91c2x5IGVtcHR5IHdoZW4gcGVvcGxlIHNldCBleWVzIG9uIG91ciBEZWF0aC1ieS1DaG9jb2xhdGUgY2FrZS5gO1xuICBwNC50ZXh0Q29udGVudCA9IGBXYXNoIGl0IGFsbCBkb3duIHdpdGggYSBiaWcgb2xkIG11ZyBvZiB5b3VyIGZhdm91cml0ZSBkcmluayAodGVhLCBjb2ZmZWUsIGJlZXIgb3IganVpY2UpLiBBbGwgZm9yIGEgcHJpY2UgdGhhdCB3aWxsIHB1dCBhIHNtaWxlIG9uIHlvdXIgZmFjZS5gO1xuXG4gIG1haW5BYm91dFRleHQuYXBwZW5kQ2hpbGQocDEpO1xuICBtYWluQWJvdXRUZXh0LmFwcGVuZENoaWxkKHAyKTtcbiAgbWFpbkFib3V0VGV4dC5hcHBlbmRDaGlsZChwMyk7XG4gIG1haW5BYm91dFRleHQuYXBwZW5kQ2hpbGQocDQpO1xuXG4gIC8qIEltYWdlcyAqL1xuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9tZWRpYS9kdWNrLmpwZycpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3JvYXN0IGNoaWNrZW4gd2l0aCBwb3RhdG9lcyBhbmQgdmVnZXRhYmxlcycpO1xuICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9tZWRpYS9jYWtlLmpwZycpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Nob2NvbGF0ZSBjYWtlJyk7XG5cbiAgbWFpbkFib3V0SW1hZ2VzLmFwcGVuZENoaWxkKGltZzEpO1xuICBtYWluQWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoaW1nMik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXRUYWI7XG4iLCJjb25zdCBsb2FkQ29udGFjdFRhYiA9ICgpID0+IHtcbiAgLyogVGl0bGUgYW5kIG1haW4gZGl2ICovXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdNYWtlIGEgcmVzZXJ2YXRpb24nO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICBjb25zdCBtYWluQ29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhY3QnKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhY3REaXYpO1xuXG4gIC8qIFRleHQgKi9cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgcDEudGV4dENvbnRlbnQgPSBgV2UgZG8gYmlydGhkYXkgcGFydGllcywgc3RhZyBuaWdodHMgb3IgYW55IG90aGVyIGdvb2QgZXhjdXNlIHRvIGdldCB5b3VyIG1hdGVzIHRvZ2V0aGVyLiBBbGwgeW91IG5lZWQgdG8gZG8gaXMgZ2V0IGluIGNvbnRhY3QgYW5kIGJvb2sgYSBkYXkuIElmIGl0J3MgYSBiaXJ0aGRheSwgd2Ugd2lsbCB0aHJvdyBpbiBhIERlYXRoLWJ5LUNob2NvbGF0ZSBjYWtlLCBvbiB0aGUgaG91c2UuYDtcbiAgcDIudGV4dENvbnRlbnQgPSAnR2V0IGluIHRvdWNoOic7XG4gIGl0ZW0xLnRleHRDb250ZW50ID0gJ1Bob25lOiAwMDAtMDAwLTAwMCc7XG4gIGl0ZW0yLnRleHRDb250ZW50ID0gJ2dvb2RncnViQG5vdGFjdHVhbGx5YW5lbWFpbC5jb20nO1xuXG4gIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbTEpO1xuICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0yKTtcbiAgbWFpbkNvbnRhY3REaXYuYXBwZW5kQ2hpbGQocDEpO1xuICBtYWluQ29udGFjdERpdi5hcHBlbmRDaGlsZChwMik7XG4gIG1haW5Db250YWN0RGl2LmFwcGVuZENoaWxkKGxpc3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RUYWI7XG4iLCJjb25zdCBsb2FkTWVudVRhYiA9ICgpID0+IHtcbiAgLyogVGl0bGUgYW5kIG1haW4gZGl2cyAqL1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IG1lbnVUeXBlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51RGlzaGVzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VHlwZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudURpc2hlczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudVR5cGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVEaXNoZXMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVUeXBlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51RGlzaGVzNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG1lbnVUeXBlMS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtdHlwZScpO1xuICBtZW51VHlwZTIuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LXR5cGUnKTtcbiAgbWVudVR5cGUzLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudS10eXBlJyk7XG4gIG1lbnVUeXBlNC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtdHlwZScpO1xuICBtZW51RGlzaGVzMS5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtZGlzaGVzJyk7XG4gIG1lbnVEaXNoZXMyLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudS1kaXNoZXMnKTtcbiAgbWVudURpc2hlczMuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LWRpc2hlcycpO1xuICBtZW51RGlzaGVzNC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtZGlzaGVzJyk7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVR5cGUxKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpc2hlczEpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51VHlwZTIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51RGlzaGVzMik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVUeXBlMyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXNoZXMzKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVR5cGU0KTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpc2hlczQpO1xuXG4gIC8qIFN0YXJ0ZXJzICovXG4gIGNvbnN0IHN0YXJ0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc3RhcnRlcnMudGV4dENvbnRlbnQgPSAnU3RhcnRlcnMnO1xuICBtZW51VHlwZTEuYXBwZW5kQ2hpbGQoc3RhcnRlcnMpO1xuXG4gIGNvbnN0IHN0YXJ0ZXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IHN0YXJ0ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3RhcnRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzdGFydGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgc3RhcnRlcjEudGV4dENvbnRlbnQgPSAnQnV0dGVyZWQgdG9hc3QnO1xuICBzdGFydGVyMi50ZXh0Q29udGVudCA9ICdHYXJsaWMgYnJlYWQnO1xuICBzdGFydGVyMy50ZXh0Q29udGVudCA9ICdUb21hdG8gc291cCc7XG5cbiAgc3RhcnRlcnNMaXN0LmFwcGVuZENoaWxkKHN0YXJ0ZXIxKTtcbiAgc3RhcnRlcnNMaXN0LmFwcGVuZENoaWxkKHN0YXJ0ZXIyKTtcbiAgc3RhcnRlcnNMaXN0LmFwcGVuZENoaWxkKHN0YXJ0ZXIzKTtcbiAgbWVudURpc2hlczEuYXBwZW5kQ2hpbGQoc3RhcnRlcnNMaXN0KTtcblxuICAvKiBNYWlucyAqL1xuICBjb25zdCBtYWlucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIG1haW5zLnRleHRDb250ZW50ID0gJ01haW5zJztcbiAgbWVudVR5cGUyLmFwcGVuZENoaWxkKG1haW5zKTtcblxuICBjb25zdCBtYWluc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBtYWluMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1haW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbWFpbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIG1haW4xLnRleHRDb250ZW50ID0gJ0JlZWYgcGllIHdpdGggY2hpcHMnO1xuICBtYWluMi50ZXh0Q29udGVudCA9ICdSb2FzdCBjaGlja2VuIHdpdGggcm9hc3QgcG90YXRvZXMgJiB2ZWdldGFibGVzJztcbiAgbWFpbjMudGV4dENvbnRlbnQgPVxuICAgICdGcmllIHVwIChmcmllZCBzYXVzYWdlcywgdG9tYXRvZXMsIGVnZywgdG9hc3QsIGJha2VkIGJlYW5zICYgWW9ya3NoaXJlIHB1ZGRpbmdzKSc7XG5cbiAgbWFpbnNMaXN0LmFwcGVuZENoaWxkKG1haW4xKTtcbiAgbWFpbnNMaXN0LmFwcGVuZENoaWxkKG1haW4yKTtcbiAgbWFpbnNMaXN0LmFwcGVuZENoaWxkKG1haW4zKTtcbiAgbWVudURpc2hlczIuYXBwZW5kQ2hpbGQobWFpbnNMaXN0KTtcblxuICAvKiBEZXNzZXJ0cyAqL1xuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRlc3NlcnRzLnRleHRDb250ZW50ID0gJ0Rlc3NlcnRzJztcbiAgbWVudVR5cGUzLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcblxuICBjb25zdCBkZXNzZXJ0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBkZXNzZXJ0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRlc3NlcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZGVzc2VydDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGRlc3NlcnQxLnRleHRDb250ZW50ID0gJ0RlYXRoLWJ5LUNob2NvbGF0ZSBjYWtlJztcbiAgZGVzc2VydDIudGV4dENvbnRlbnQgPSAnUm9hc3RlZCBhcHBsZXMnO1xuICBkZXNzZXJ0My50ZXh0Q29udGVudCA9ICdMZW1vbiBtZXJlbmd1ZSBwaWUnO1xuXG4gIGRlc3NlcnRzTGlzdC5hcHBlbmRDaGlsZChkZXNzZXJ0MSk7XG4gIGRlc3NlcnRzTGlzdC5hcHBlbmRDaGlsZChkZXNzZXJ0Mik7XG4gIGRlc3NlcnRzTGlzdC5hcHBlbmRDaGlsZChkZXNzZXJ0Myk7XG4gIG1lbnVEaXNoZXMzLmFwcGVuZENoaWxkKGRlc3NlcnRzTGlzdCk7XG5cbiAgLyogRHJpbmtzICovXG4gIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRyaW5rcy50ZXh0Q29udGVudCA9ICdEcmlua3MnO1xuICBtZW51VHlwZTQuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcblxuICBjb25zdCBkcmlua3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgZHJpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZHJpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZHJpbmszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZHJpbms0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZHJpbms1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBkcmluazEudGV4dENvbnRlbnQgPSAnVGVhIChibGFjaywgb2YgY291cnNlKSc7XG4gIGRyaW5rMi50ZXh0Q29udGVudCA9ICdDb2ZmZWUnO1xuICBkcmluazMudGV4dENvbnRlbnQgPSAnQmVlcic7XG4gIGRyaW5rNC50ZXh0Q29udGVudCA9ICdPcmFuZ2UganVpY2UnO1xuICBkcmluazUudGV4dENvbnRlbnQgPSAnTGVtb25hZGUnO1xuXG4gIGRyaW5rc0xpc3QuYXBwZW5kQ2hpbGQoZHJpbmsxKTtcbiAgZHJpbmtzTGlzdC5hcHBlbmRDaGlsZChkcmluazIpO1xuICBkcmlua3NMaXN0LmFwcGVuZENoaWxkKGRyaW5rMyk7XG4gIGRyaW5rc0xpc3QuYXBwZW5kQ2hpbGQoZHJpbms0KTtcbiAgZHJpbmtzTGlzdC5hcHBlbmRDaGlsZChkcmluazUpO1xuICBtZW51RGlzaGVzNC5hcHBlbmRDaGlsZChkcmlua3NMaXN0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51VGFiO1xuIiwiaW1wb3J0IGxvYWRBYm91dFRhYiBmcm9tICcuL2xvYWRBYm91dFRhYic7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCgpID0+IHtcbiAgLyogTWFpbiBwYWdlIGVsZW1lbnRzICovXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXNpZGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgLyogSGVhZGVyICovXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnR29vZCBHcnViJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAvKiBOYXZiYXIgKi9cbiAgY29uc3QgYnV0dG9uTmF2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25OYXYxLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXZpZ2F0aW9uJywgJ2J1dHRvbi10YWItMScpO1xuICBidXR0b25OYXYxLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgY29uc3QgYnV0dG9uTmF2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25OYXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXZpZ2F0aW9uJywgJ2J1dHRvbi10YWItMicpO1xuICBidXR0b25OYXYyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb25zdCBidXR0b25OYXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbk5hdjMuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdmlnYXRpb24nLCAnYnV0dG9uLXRhYi0zJyk7XG4gIGJ1dHRvbk5hdjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk5hdjEpO1xuICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uTmF2Mik7XG4gIG5hdi5hcHBlbmRDaGlsZChidXR0b25OYXYzKTtcblxuICAvKiBBc2lkZSAqL1xuICBjb25zdCBhc2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidXR0b25Bc2lkZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uQXNpZGUxLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXZpZ2F0aW9uJywgJ2J1dHRvbi10YWItMScpO1xuICBidXR0b25Bc2lkZTEudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICBjb25zdCBidXR0b25Bc2lkZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uQXNpZGUyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXZpZ2F0aW9uJywgJ2J1dHRvbi10YWItMicpO1xuICBidXR0b25Bc2lkZTIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGNvbnN0IGJ1dHRvbkFzaWRlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Bc2lkZTMuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdmlnYXRpb24nLCAnYnV0dG9uLXRhYi0zJyk7XG4gIGJ1dHRvbkFzaWRlMy50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBhc2lkZS5hcHBlbmRDaGlsZChhc2lkZURpdik7XG4gIGFzaWRlRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkFzaWRlMSk7XG4gIGFzaWRlRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkFzaWRlMik7XG4gIGFzaWRlRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkFzaWRlMyk7XG5cbiAgLyogRm9vdGVyICovXG4gIGNvbnN0IGZvb3RlclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGZvb3RlclNwYW4udGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBBbXkgR29pcyc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJTcGFuKTtcblxuICAvKiBNYWluICovXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgZGl2TWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChoMik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2TWFpbkNvbnRlbnQpO1xuXG4gIGxvYWRBYm91dFRhYigpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL2xvYWRQYWdlJztcbmltcG9ydCBsb2FkQWJvdXRUYWIgZnJvbSAnLi9sb2FkQWJvdXRUYWInO1xuaW1wb3J0IGxvYWRNZW51VGFiIGZyb20gJy4vbG9hZE1lbnVUYWInO1xuaW1wb3J0IGxvYWRDb250YWN0VGFiIGZyb20gJy4vbG9hZENvbnRhY3RUYWInO1xuXG4vKiBVcGRhdGUgYnV0dG9ucyBkaXNwbGF5ICovXG5jb25zdCB1cGRhdGVCdXR0b25zID0gKGJ1dHRvbkNsYXNzKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW5hdmlnYXRpb24nKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhidXR0b25DbGFzcykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbnVwZGF0ZUJ1dHRvbnMoJ2J1dHRvbi10YWItMScpO1xuXG4vKiBSZW1vdmUgdGhlIGNvbnRlbnQgdGhhdCBpcyBnb2luZyB0byBiZSBjaGFuZ2VkICovXG5jb25zdCByZW1vdmVDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG59O1xuXG4vKiBCdXR0b24gZXZlbnQgbGlzdGVuZXIgZnVuY3Rpb25zICovXG5jb25zdCBkaXNwbGF5QWJvdXRUYWIgPSAoKSA9PiB7XG4gIHJlbW92ZUNvbnRlbnQoKTtcbiAgdXBkYXRlQnV0dG9ucygnYnV0dG9uLXRhYi0xJyk7XG4gIGxvYWRBYm91dFRhYigpO1xufTtcblxuY29uc3QgZGlzcGxheU1lbnVUYWIgPSAoKSA9PiB7XG4gIHJlbW92ZUNvbnRlbnQoKTtcbiAgdXBkYXRlQnV0dG9ucygnYnV0dG9uLXRhYi0yJyk7XG4gIGxvYWRNZW51VGFiKCk7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29udGFjdFRhYiA9ICgpID0+IHtcbiAgcmVtb3ZlQ29udGVudCgpO1xuICB1cGRhdGVCdXR0b25zKCdidXR0b24tdGFiLTMnKTtcbiAgbG9hZENvbnRhY3RUYWIoKTtcbn07XG5cbmNvbnN0IGFkZEJ1dHRvbkxpc3RlbmVycyA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW5hdmlnYXRpb24nKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLXRhYi0xJykpIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlBYm91dFRhYik7XG4gICAgfVxuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tdGFiLTInKSkge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnVUYWIpO1xuICAgIH1cbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLXRhYi0zJykpIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlDb250YWN0VGFiKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==