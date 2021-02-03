/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page.js":
/*!***************************!*\
  !*** ./src/about_page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load_about_page\": () => /* binding */ load_about_page\n/* harmony export */ });\nfunction load_background_image() {\r\n\r\n    //create image element and add attributes\r\n    let img = document.createElement('img')\r\n    img.src = '../media/kawaii_toast.png'\r\n    img.alt = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-cute-kawaii-toast-and-toaster-valentina-hramov.jpg'\r\n    img.id = 'cute_toast'\r\n    img.class = 'bg-image'\r\n    return img\r\n}\r\n\r\nfunction load_text() {\r\n    let str = \"We are a small restaurant inside Vancouver, WA. Check out our menu via the buttons above!\\n\\nDisclaimer: We don't actually exist\"\r\n    let p = document.createElement('p')\r\n    p.textContent = str\r\n    return p\r\n}\r\n\r\nfunction load_about_page() {\r\n    //create div for to hold page contents\r\n    let div = document.createElement('div')\r\n    div.id = 'about_page'\r\n    div.setAttribute('class', 'nav_tab')\r\n\r\n    //load info and append to div\r\n    div.appendChild(load_background_image())\r\n    div.appendChild(load_text())\r\n\r\n    return div\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/about_page.js?");

/***/ }),

/***/ "./src/header_nav.js":
/*!***************************!*\
  !*** ./src/header_nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load_header\": () => /* binding */ load_header\n/* harmony export */ });\nfunction load_header() {\r\n    //create unordered list and tabs then append\r\n    let ul = document.createElement('ul')\r\n    let tab1 = document.createElement('li')\r\n    let tab2 = document.createElement('li')\r\n    let tab3 = document.createElement('li')\r\n\r\n    //Add id and adjust content of tabs\r\n    tab1.textContent = 'About'\r\n    tab1.id = 'about_tab'\r\n    tab2.textContent = 'Menu'\r\n    tab2.id = 'menu_tab'\r\n    tab3.textContent = 'Contact Us'\r\n    tab3.id = 'contact_us_tab'\r\n\r\n    ul.appendChild(tab1); ul.appendChild(tab2); ul.appendChild(tab3);\r\n\r\n    \r\n    return ul\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/header_nav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about_page.js */ \"./src/about_page.js\");\n/* harmony import */ var _header_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header_nav.js */ \"./src/header_nav.js\");\n\r\n\r\n\r\nfunction clear_page() {\r\n    let current_page = document.querySelector('.nav_tab')\r\n    current_page.remove()\r\n    current_tab.style.backgroundColor = 'lightskyblue'\r\n}\r\n\r\n//Grab div#content\r\nlet content = document.querySelector('div#content')\r\n\r\n//Start on about page\r\ncontent.appendChild((0,_header_nav_js__WEBPACK_IMPORTED_MODULE_1__.load_header)())\r\ncontent.appendChild((0,_about_page_js__WEBPACK_IMPORTED_MODULE_0__.load_about_page)())\r\nlet current_tab = document.getElementById('about_tab')\r\n\r\n//Attach function to 'about us' tab\r\nlet about_tab = document.getElementById('about_tab')\r\nabout_tab.onclick = function(current_tab) {\r\n    clear_page()\r\n    content.appendChild((0,_about_page_js__WEBPACK_IMPORTED_MODULE_0__.load_about_page)())\r\n    current_tab = document.getElementById('about_tab')\r\n    current_tab.style.backgroundColor = 'darkcyan'\r\n}\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;