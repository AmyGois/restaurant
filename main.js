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

  /* Buttons
  const buttons = document.querySelectorAll('.button-navigation');
  buttons.forEach((button) => {
    if (button.classList.contains('button-tab-1')) {
      button.classList.add('active-tab');
    } else {
      button.classList.remove('active-tab');
    }
  }); */
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutTab);


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

updateButtons('button-tab-1');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUseURBQVk7QUFDZCxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ3RFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05rQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZEFib3V0VGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZEFib3V0VGFiID0gKCkgPT4ge1xuICAvKiBUaXRsZSBhbmQgbWFpbiBkaXZzICovXG4gIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gR29vZCBHcnViISc7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gIGNvbnN0IG1haW5BYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkFib3V0VGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluLWFib3V0LXRleHQnKTtcbiAgY29uc3QgbWFpbkFib3V0SW1hZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5BYm91dEltYWdlcy5jbGFzc0xpc3QuYWRkKCdtYWluLWFib3V0LWltYWdlcycpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5BYm91dFRleHQpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluQWJvdXRJbWFnZXMpO1xuXG4gIC8qIFRleHQgY29udGVudCAqL1xuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSBgVGlyZWQgb2YgaG9pdHktdG9pdHkgcmVzdGF1cmFudHMgdGhhdCBjaGFyZ2UgYSBmb3J0dW5lIGZvciB0aW55IGRpc2hlcz8gQXQgR29vZCBHcnViIHdlIGJlbGlldmUgaW4gc2VydmluZyBnb29kLCBoZWFydHkgbWVhbHMgdG8gZ29vZCBob25lc3QgZm9sa3MgYXQgZ29vZCwgaG9uZXN0IHByaWNlcy4gWW91IHdpbGwgbm90IGxlYXZlIGh1bmdyeSEgKE9yIGJhbmtydXB0ZWQhKWA7XG4gIHAyLnRleHRDb250ZW50ID0gYERpZyBpbiB0byBoZWFydC13YXJtaW5nLCBiZWxseS1maWxsaW5nIGRpc2hlcyBtYWRlIHdpdGggbG92ZSBieSBvdXIgdGVhbSBvZiBoYXJkLXdvcmtpbmcgY2hlZnMuIElmIHlvdSBjb21wbGltZW50IGhlYWQgY2hlZiBKb2huLCBoZSBtaWdodCBldmVuIGludml0ZSB5b3Ugb3V0IGZvciBhIHBpbnQhYDtcbiAgcDMudGV4dENvbnRlbnQgPSBgQW5kLCBpZiB5b3Ugc3RpbGwgaGF2ZSBhbnkgc3BhY2UgbGVmdCwgd2h5IG5vdCB0cmVhdCB5b3Vyc2VsZiB0byBvbmUgb2Ygb3VyIGRlbGljaW91cyBkZXNlcnRzPyBXZSBmaW5kIHRoYXQgc3RvbWFjaHMgYmVjb21lIG1pcmFjdWxvdXNseSBlbXB0eSB3aGVuIHBlb3BsZSBzZXQgZXllcyBvbiBvdXIgRGVhdGgtYnktQ2hvY29sYXRlIGNha2UuYDtcbiAgcDQudGV4dENvbnRlbnQgPSBgV2FzaCBpdCBhbGwgZG93biB3aXRoIGEgYmlnIG9sZCBtdWcgb2YgeW91ciBmYXZvdXJpdGUgZHJpbmsgKHRlYSwgY29mZmVlLCBiZWVyIG9yIGp1aWNlKS4gQWxsIGZvciBhIHByaWNlIHRoYXQgd2lsbCBwdXQgYSBzbWlsZSBvbiB5b3VyIGZhY2UuYDtcblxuICBtYWluQWJvdXRUZXh0LmFwcGVuZENoaWxkKHAxKTtcbiAgbWFpbkFib3V0VGV4dC5hcHBlbmRDaGlsZChwMik7XG4gIG1haW5BYm91dFRleHQuYXBwZW5kQ2hpbGQocDMpO1xuICBtYWluQWJvdXRUZXh0LmFwcGVuZENoaWxkKHA0KTtcblxuICAvKiBJbWFnZXMgKi9cbiAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL21lZGlhL2R1Y2suanBnJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdhbHQnLCAncm9hc3QgY2hpY2tlbiB3aXRoIHBvdGF0b2VzIGFuZCB2ZWdldGFibGVzJyk7XG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9tZWRpYS9jYWtlLmpwZycpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Nob2NvbGF0ZSBjYWtlJyk7XG5cbiAgbWFpbkFib3V0SW1hZ2VzLmFwcGVuZENoaWxkKGltZzEpO1xuICBtYWluQWJvdXRJbWFnZXMuYXBwZW5kQ2hpbGQoaW1nMik7XG5cbiAgLyogQnV0dG9uc1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1uYXZpZ2F0aW9uJyk7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi10YWItMScpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIH1cbiAgfSk7ICovXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXRUYWI7XG4iLCJpbXBvcnQgbG9hZEFib3V0VGFiIGZyb20gJy4vbG9hZEFib3V0VGFiJztcblxuY29uc3QgbG9hZFBhZ2UgPSAoKCkgPT4ge1xuICAvKiBNYWluIHBhZ2UgZWxlbWVudHMgKi9cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhc2lkZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAvKiBIZWFkZXIgKi9cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9ICdHb29kIEdydWInO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIC8qIE5hdmJhciAqL1xuICBjb25zdCBidXR0b25OYXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbk5hdjEuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdmlnYXRpb24nLCAnYnV0dG9uLXRhYi0xJyk7XG4gIGJ1dHRvbk5hdjEudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICBjb25zdCBidXR0b25OYXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbk5hdjIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdmlnYXRpb24nLCAnYnV0dG9uLXRhYi0yJyk7XG4gIGJ1dHRvbk5hdjIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGNvbnN0IGJ1dHRvbk5hdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uTmF2My5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2aWdhdGlvbicsICdidXR0b24tdGFiLTMnKTtcbiAgYnV0dG9uTmF2My50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBuYXYuYXBwZW5kQ2hpbGQoYnV0dG9uTmF2MSk7XG4gIG5hdi5hcHBlbmRDaGlsZChidXR0b25OYXYyKTtcbiAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbk5hdjMpO1xuXG4gIC8qIEFzaWRlICovXG4gIGNvbnN0IGFzaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ1dHRvbkFzaWRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Bc2lkZTEuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdmlnYXRpb24nLCAnYnV0dG9uLXRhYi0xJyk7XG4gIGJ1dHRvbkFzaWRlMS50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gIGNvbnN0IGJ1dHRvbkFzaWRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b25Bc2lkZTIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdmlnYXRpb24nLCAnYnV0dG9uLXRhYi0yJyk7XG4gIGJ1dHRvbkFzaWRlMi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29uc3QgYnV0dG9uQXNpZGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbkFzaWRlMy5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2aWdhdGlvbicsICdidXR0b24tdGFiLTMnKTtcbiAgYnV0dG9uQXNpZGUzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGFzaWRlLmFwcGVuZENoaWxkKGFzaWRlRGl2KTtcbiAgYXNpZGVEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uQXNpZGUxKTtcbiAgYXNpZGVEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uQXNpZGUyKTtcbiAgYXNpZGVEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uQXNpZGUzKTtcblxuICAvKiBGb290ZXIgKi9cbiAgY29uc3QgZm9vdGVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZm9vdGVyU3Bhbi50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IEFteSBHb2lzJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclNwYW4pO1xuXG4gIC8qIE1haW4gKi9cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBkaXZNYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZNYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGgyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXZNYWluQ29udGVudCk7XG5cbiAgbG9hZEFib3V0VGFiKCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vbG9hZFBhZ2UnO1xuY29uc29sZS5sb2coJ1VwIGFuZCBydW5uaW5nIScpO1xuXG4vKiBNYWtlIHRoaXMgcmV1c2FibGUgbGF0ZXIgKi9cbmNvbnN0IHVwZGF0ZUJ1dHRvbnMgPSAoYnV0dG9uQ2xhc3MpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tbmF2aWdhdGlvbicpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKGJ1dHRvbkNsYXNzKSkge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICB9XG4gIH0pO1xufTtcblxudXBkYXRlQnV0dG9ucygnYnV0dG9uLXRhYi0xJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=