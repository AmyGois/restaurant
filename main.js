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
  img1.setAttribute('src', '../media/duck.jpg');
  img1.setAttribute('alt', 'roast chicken with potatoes and vegetables');
  const img2 = document.createElement('img');
  img2.setAttribute('src', '../media/cake.jpg');
  img2.setAttribute('alt', 'chocolate cake');

  mainAboutImages.appendChild(img1);
  mainAboutImages.appendChild(img2);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutTab);


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

  /* loadAboutTab(); */
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
/* harmony import */ var _loadMenuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenuTab */ "./src/loadMenuTab.js");



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

(0,_loadMenuTab__WEBPACK_IMPORTED_MODULE_1__["default"])();

updateButtons('button-tab-2');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckhlOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN0RXhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ007O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHdEQUFXOztBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2FkQWJvdXRUYWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2FkTWVudVRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRBYm91dFRhYiA9ICgpID0+IHtcbiAgLyogVGl0bGUgYW5kIG1haW4gZGl2cyAqL1xuICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKTtcbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEdvb2QgR3J1YiEnO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICBjb25zdCBtYWluQWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5BYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnbWFpbi1hYm91dC10ZXh0Jyk7XG4gIGNvbnN0IG1haW5BYm91dEltYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQWJvdXRJbWFnZXMuY2xhc3NMaXN0LmFkZCgnbWFpbi1hYm91dC1pbWFnZXMnKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQWJvdXRUZXh0KTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkFib3V0SW1hZ2VzKTtcblxuICAvKiBUZXh0IGNvbnRlbnQgKi9cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAxLnRleHRDb250ZW50ID0gYFRpcmVkIG9mIGhvaXR5LXRvaXR5IHJlc3RhdXJhbnRzIHRoYXQgY2hhcmdlIGEgZm9ydHVuZSBmb3IgdGlueSBkaXNoZXM/IEF0IEdvb2QgR3J1YiB3ZSBiZWxpZXZlIGluIHNlcnZpbmcgZ29vZCwgaGVhcnR5IG1lYWxzIHRvIGdvb2QgaG9uZXN0IGZvbGtzIGF0IGdvb2QsIGhvbmVzdCBwcmljZXMuIFlvdSB3aWxsIG5vdCBsZWF2ZSBodW5ncnkhIChPciBiYW5rcnVwdGVkISlgO1xuICBwMi50ZXh0Q29udGVudCA9IGBEaWcgaW4gdG8gaGVhcnQtd2FybWluZywgYmVsbHktZmlsbGluZyBkaXNoZXMgbWFkZSB3aXRoIGxvdmUgYnkgb3VyIHRlYW0gb2YgaGFyZC13b3JraW5nIGNoZWZzLiBJZiB5b3UgY29tcGxpbWVudCBoZWFkIGNoZWYgSm9obiwgaGUgbWlnaHQgZXZlbiBpbnZpdGUgeW91IG91dCBmb3IgYSBwaW50IWA7XG4gIHAzLnRleHRDb250ZW50ID0gYEFuZCwgaWYgeW91IHN0aWxsIGhhdmUgYW55IHNwYWNlIGxlZnQsIHdoeSBub3QgdHJlYXQgeW91cnNlbGYgdG8gb25lIG9mIG91ciBkZWxpY2lvdXMgZGVzZXJ0cz8gV2UgZmluZCB0aGF0IHN0b21hY2hzIGJlY29tZSBtaXJhY3Vsb3VzbHkgZW1wdHkgd2hlbiBwZW9wbGUgc2V0IGV5ZXMgb24gb3VyIERlYXRoLWJ5LUNob2NvbGF0ZSBjYWtlLmA7XG4gIHA0LnRleHRDb250ZW50ID0gYFdhc2ggaXQgYWxsIGRvd24gd2l0aCBhIGJpZyBvbGQgbXVnIG9mIHlvdXIgZmF2b3VyaXRlIGRyaW5rICh0ZWEsIGNvZmZlZSwgYmVlciBvciBqdWljZSkuIEFsbCBmb3IgYSBwcmljZSB0aGF0IHdpbGwgcHV0IGEgc21pbGUgb24geW91ciBmYWNlLmA7XG5cbiAgbWFpbkFib3V0VGV4dC5hcHBlbmRDaGlsZChwMSk7XG4gIG1haW5BYm91dFRleHQuYXBwZW5kQ2hpbGQocDIpO1xuICBtYWluQWJvdXRUZXh0LmFwcGVuZENoaWxkKHAzKTtcbiAgbWFpbkFib3V0VGV4dC5hcHBlbmRDaGlsZChwNCk7XG5cbiAgLyogSW1hZ2VzICovXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9tZWRpYS9kdWNrLmpwZycpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3JvYXN0IGNoaWNrZW4gd2l0aCBwb3RhdG9lcyBhbmQgdmVnZXRhYmxlcycpO1xuICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vbWVkaWEvY2FrZS5qcGcnKTtcbiAgaW1nMi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjaG9jb2xhdGUgY2FrZScpO1xuXG4gIG1haW5BYm91dEltYWdlcy5hcHBlbmRDaGlsZChpbWcxKTtcbiAgbWFpbkFib3V0SW1hZ2VzLmFwcGVuZENoaWxkKGltZzIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0VGFiO1xuIiwiY29uc3QgbG9hZE1lbnVUYWIgPSAoKSA9PiB7XG4gIC8qIFRpdGxlIGFuZCBtYWluIGRpdnMgKi9cbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKTtcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICBjb25zdCBtZW51VHlwZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudURpc2hlczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudVR5cGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVEaXNoZXMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVUeXBlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51RGlzaGVzMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VHlwZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudURpc2hlczQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBtZW51VHlwZTEuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LXR5cGUnKTtcbiAgbWVudVR5cGUyLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudS10eXBlJyk7XG4gIG1lbnVUeXBlMy5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtdHlwZScpO1xuICBtZW51VHlwZTQuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LXR5cGUnKTtcbiAgbWVudURpc2hlczEuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LWRpc2hlcycpO1xuICBtZW51RGlzaGVzMi5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtZGlzaGVzJyk7XG4gIG1lbnVEaXNoZXMzLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudS1kaXNoZXMnKTtcbiAgbWVudURpc2hlczQuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LWRpc2hlcycpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVUeXBlMSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXNoZXMxKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVR5cGUyKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpc2hlczIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51VHlwZTMpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51RGlzaGVzMyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVUeXBlNCk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXNoZXM0KTtcblxuICAvKiBTdGFydGVycyAqL1xuICBjb25zdCBzdGFydGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHN0YXJ0ZXJzLnRleHRDb250ZW50ID0gJ1N0YXJ0ZXJzJztcbiAgbWVudVR5cGUxLmFwcGVuZENoaWxkKHN0YXJ0ZXJzKTtcblxuICBjb25zdCBzdGFydGVyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBzdGFydGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHN0YXJ0ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3RhcnRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIHN0YXJ0ZXIxLnRleHRDb250ZW50ID0gJ0J1dHRlcmVkIHRvYXN0JztcbiAgc3RhcnRlcjIudGV4dENvbnRlbnQgPSAnR2FybGljIGJyZWFkJztcbiAgc3RhcnRlcjMudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNvdXAnO1xuXG4gIHN0YXJ0ZXJzTGlzdC5hcHBlbmRDaGlsZChzdGFydGVyMSk7XG4gIHN0YXJ0ZXJzTGlzdC5hcHBlbmRDaGlsZChzdGFydGVyMik7XG4gIHN0YXJ0ZXJzTGlzdC5hcHBlbmRDaGlsZChzdGFydGVyMyk7XG4gIG1lbnVEaXNoZXMxLmFwcGVuZENoaWxkKHN0YXJ0ZXJzTGlzdCk7XG5cbiAgLyogTWFpbnMgKi9cbiAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtYWlucy50ZXh0Q29udGVudCA9ICdNYWlucyc7XG4gIG1lbnVUeXBlMi5hcHBlbmRDaGlsZChtYWlucyk7XG5cbiAgY29uc3QgbWFpbnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbWFpbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtYWluMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1haW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBtYWluMS50ZXh0Q29udGVudCA9ICdCZWVmIHBpZSB3aXRoIGNoaXBzJztcbiAgbWFpbjIudGV4dENvbnRlbnQgPSAnUm9hc3QgY2hpY2tlbiB3aXRoIHJvYXN0IHBvdGF0b2VzICYgdmVnZXRhYmxlcyc7XG4gIG1haW4zLnRleHRDb250ZW50ID1cbiAgICAnRnJpZSB1cCAoZnJpZWQgc2F1c2FnZXMsIHRvbWF0b2VzLCBlZ2csIHRvYXN0LCBiYWtlZCBiZWFucyAmIFlvcmtzaGlyZSBwdWRkaW5ncyknO1xuXG4gIG1haW5zTGlzdC5hcHBlbmRDaGlsZChtYWluMSk7XG4gIG1haW5zTGlzdC5hcHBlbmRDaGlsZChtYWluMik7XG4gIG1haW5zTGlzdC5hcHBlbmRDaGlsZChtYWluMyk7XG4gIG1lbnVEaXNoZXMyLmFwcGVuZENoaWxkKG1haW5zTGlzdCk7XG5cbiAgLyogRGVzc2VydHMgKi9cbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkZXNzZXJ0cy50ZXh0Q29udGVudCA9ICdEZXNzZXJ0cyc7XG4gIG1lbnVUeXBlMy5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cbiAgY29uc3QgZGVzc2VydHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgZGVzc2VydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBkZXNzZXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRlc3NlcnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBkZXNzZXJ0MS50ZXh0Q29udGVudCA9ICdEZWF0aC1ieS1DaG9jb2xhdGUgY2FrZSc7XG4gIGRlc3NlcnQyLnRleHRDb250ZW50ID0gJ1JvYXN0ZWQgYXBwbGVzJztcbiAgZGVzc2VydDMudGV4dENvbnRlbnQgPSAnTGVtb24gbWVyZW5ndWUgcGllJztcblxuICBkZXNzZXJ0c0xpc3QuYXBwZW5kQ2hpbGQoZGVzc2VydDEpO1xuICBkZXNzZXJ0c0xpc3QuYXBwZW5kQ2hpbGQoZGVzc2VydDIpO1xuICBkZXNzZXJ0c0xpc3QuYXBwZW5kQ2hpbGQoZGVzc2VydDMpO1xuICBtZW51RGlzaGVzMy5hcHBlbmRDaGlsZChkZXNzZXJ0c0xpc3QpO1xuXG4gIC8qIERyaW5rcyAqL1xuICBjb25zdCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkcmlua3MudGV4dENvbnRlbnQgPSAnRHJpbmtzJztcbiAgbWVudVR5cGU0LmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgY29uc3QgZHJpbmtzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGRyaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRyaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRyaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRyaW5rNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRyaW5rNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgZHJpbmsxLnRleHRDb250ZW50ID0gJ1RlYSAoYmxhY2ssIG9mIGNvdXJzZSknO1xuICBkcmluazIudGV4dENvbnRlbnQgPSAnQ29mZmVlJztcbiAgZHJpbmszLnRleHRDb250ZW50ID0gJ0JlZXInO1xuICBkcmluazQudGV4dENvbnRlbnQgPSAnT3JhbmdlIGp1aWNlJztcbiAgZHJpbms1LnRleHRDb250ZW50ID0gJ0xlbW9uYWRlJztcblxuICBkcmlua3NMaXN0LmFwcGVuZENoaWxkKGRyaW5rMSk7XG4gIGRyaW5rc0xpc3QuYXBwZW5kQ2hpbGQoZHJpbmsyKTtcbiAgZHJpbmtzTGlzdC5hcHBlbmRDaGlsZChkcmluazMpO1xuICBkcmlua3NMaXN0LmFwcGVuZENoaWxkKGRyaW5rNCk7XG4gIGRyaW5rc0xpc3QuYXBwZW5kQ2hpbGQoZHJpbms1KTtcbiAgbWVudURpc2hlczQuYXBwZW5kQ2hpbGQoZHJpbmtzTGlzdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVRhYjtcbiIsImltcG9ydCBsb2FkQWJvdXRUYWIgZnJvbSAnLi9sb2FkQWJvdXRUYWInO1xuXG5jb25zdCBsb2FkUGFnZSA9ICgoKSA9PiB7XG4gIC8qIE1haW4gcGFnZSBlbGVtZW50cyAqL1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFzaWRlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIC8qIEhlYWRlciAqL1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ0dvb2QgR3J1Yic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgLyogTmF2YmFyICovXG4gIGNvbnN0IGJ1dHRvbk5hdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uTmF2MS5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2aWdhdGlvbicsICdidXR0b24tdGFiLTEnKTtcbiAgYnV0dG9uTmF2MS50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gIGNvbnN0IGJ1dHRvbk5hdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uTmF2Mi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2aWdhdGlvbicsICdidXR0b24tdGFiLTInKTtcbiAgYnV0dG9uTmF2Mi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29uc3QgYnV0dG9uTmF2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25OYXYzLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXZpZ2F0aW9uJywgJ2J1dHRvbi10YWItMycpO1xuICBidXR0b25OYXYzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChidXR0b25OYXYxKTtcbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk5hdjIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uTmF2Myk7XG5cbiAgLyogQXNpZGUgKi9cbiAgY29uc3QgYXNpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnV0dG9uQXNpZGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbkFzaWRlMS5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2aWdhdGlvbicsICdidXR0b24tdGFiLTEnKTtcbiAgYnV0dG9uQXNpZGUxLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgY29uc3QgYnV0dG9uQXNpZGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbkFzaWRlMi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2aWdhdGlvbicsICdidXR0b24tdGFiLTInKTtcbiAgYnV0dG9uQXNpZGUyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb25zdCBidXR0b25Bc2lkZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uQXNpZGUzLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXZpZ2F0aW9uJywgJ2J1dHRvbi10YWItMycpO1xuICBidXR0b25Bc2lkZTMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgYXNpZGUuYXBwZW5kQ2hpbGQoYXNpZGVEaXYpO1xuICBhc2lkZURpdi5hcHBlbmRDaGlsZChidXR0b25Bc2lkZTEpO1xuICBhc2lkZURpdi5hcHBlbmRDaGlsZChidXR0b25Bc2lkZTIpO1xuICBhc2lkZURpdi5hcHBlbmRDaGlsZChidXR0b25Bc2lkZTMpO1xuXG4gIC8qIEZvb3RlciAqL1xuICBjb25zdCBmb290ZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBmb290ZXJTcGFuLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgYnkgQW15IEdvaXMnO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyU3Bhbik7XG5cbiAgLyogTWFpbiAqL1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGRpdk1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdk1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaDIpO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdk1haW5Db250ZW50KTtcblxuICAvKiBsb2FkQWJvdXRUYWIoKTsgKi9cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9sb2FkUGFnZSc7XG5pbXBvcnQgbG9hZE1lbnVUYWIgZnJvbSAnLi9sb2FkTWVudVRhYic7XG5cbmNvbnNvbGUubG9nKCdVcCBhbmQgcnVubmluZyEnKTtcblxuLyogTWFrZSB0aGlzIHJldXNhYmxlIGxhdGVyICovXG5jb25zdCB1cGRhdGVCdXR0b25zID0gKGJ1dHRvbkNsYXNzKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW5hdmlnYXRpb24nKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhidXR0b25DbGFzcykpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmxvYWRNZW51VGFiKCk7XG5cbnVwZGF0ZUJ1dHRvbnMoJ2J1dHRvbi10YWItMicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9