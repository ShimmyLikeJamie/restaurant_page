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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about_page.js */ \"./src/about_page.js\");\n/* harmony import */ var _header_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header_nav.js */ \"./src/header_nav.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_page.js */ \"./src/menu_page.js\");\n\r\n\r\n\r\n\r\nlet active_color = '#3eaff5'\r\nlet inactive_color = 'lightskyblue'\r\n\r\nfunction clear_page() {\r\n    let current_page = document.querySelector('.nav_tab')\r\n    current_page.remove()\r\n    current_tab.style.backgroundColor = inactive_color\r\n}\r\n\r\n//Grab div#content\r\nlet content = document.querySelector('div#content')\r\n\r\n//Start on about page\r\ncontent.appendChild((0,_header_nav_js__WEBPACK_IMPORTED_MODULE_1__.load_header)())\r\ncontent.appendChild((0,_about_page_js__WEBPACK_IMPORTED_MODULE_0__.load_about_page)())\r\nlet current_tab = document.getElementById('about_tab')\r\n\r\n//Attach function to 'about us' tab\r\nlet about_tab = document.getElementById('about_tab')\r\nabout_tab.onclick = function() {\r\n    clear_page()\r\n    content.appendChild((0,_about_page_js__WEBPACK_IMPORTED_MODULE_0__.load_about_page)())\r\n    current_tab = about_tab\r\n    current_tab.style.backgroundColor = active_color\r\n}\r\n\r\nlet menu_tab = document.getElementById('menu_tab')\r\nmenu_tab.onclick = function() {\r\n    clear_page()\r\n    content.appendChild((0,_menu_page_js__WEBPACK_IMPORTED_MODULE_2__.load_menu_page)())\r\n    current_tab = menu_tab\r\n    current_tab.style.backgroundColor = active_color\r\n}\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load_menu_page\": () => /* binding */ load_menu_page\n/* harmony export */ });\nlet image_filenames = ['burnt_toast.png', 'dirt.jpg', 'pop_tarts_soggy_crackers.png', 'sweet-dill-pickle.png']\r\nlet menu_names = ['Burnt Toast', 'Literally Dirt', 'Toddler Tarts Soggy Crackers Flavor', 'A Jar of Pickles']\r\nlet menu_descriptions = ['More like charcoal if you ask me', 'Got it from my backyard, all natural',\r\n    'Don\\'t you love dipping your crackers?', 'You\\'re paying for the labor of us going to the store']\r\nlet item_prices = ['$5 a slice', '$0.02 per lb', '$10 for one, untoasted. $500 for toasted', '$1000']\r\nlet menu_items = []\r\n\r\nfunction create_menu_item(filename, name, description, price) {\r\n    return {\r\n        name: name,\r\n        description: description,\r\n        filename: filename,\r\n        price: price\r\n    }\r\n}\r\n\r\nfunction load_menu_page() {\r\n\r\n    if (menu_items.length == 0) {\r\n        for (let i = 0; i < image_filenames.length; i++) {\r\n            menu_items.push(create_menu_item(image_filenames[i], menu_names[i], menu_descriptions[i], item_prices[i]))\r\n        }\r\n    }\r\n    let menu_page = document.createElement('div')\r\n    menu_page.id = 'menu_page'\r\n    menu_page.setAttribute('class', 'nav_tab')\r\n\r\n    for (let i = 0; i < menu_items.length; i++) {\r\n\r\n        //Create div for item container, then elements for each item property\r\n        let div = document.createElement('div')\r\n        let img = document.createElement('img')\r\n        let name = document.createElement('h1')\r\n        let price = document.createElement('h2')\r\n        let description = document.createElement('p')\r\n\r\n        //Adjust add menu item info to elements\r\n        img.src = `../media/${menu_items[i].filename}`\r\n        img.alt = menu_items[i].name\r\n        name.innerText = menu_items[i].name\r\n        price.innerText = menu_items[i].price\r\n        description.innerText = menu_items[i].description\r\n\r\n        //Append elements to item container, then item container to menu page div\r\n        div.appendChild(img); div.appendChild(name); div.appendChild(price); div.appendChild(description);\r\n        div.setAttribute('class', 'menu_item')\r\n        menu_page.appendChild(div)\r\n    }\r\n\r\n    return menu_page\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu_page.js?");

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