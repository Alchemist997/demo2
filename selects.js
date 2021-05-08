/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/select_plugin/selects.js":
/*!*****************************************!*\
  !*** ./src/js/select_plugin/selects.js ***!
  \*****************************************/
/***/ (() => {

eval("let hidden = document.querySelector('.mob-hidden');\r\nlet half = document.querySelector('.mob-half');\r\nlet texts = document.querySelectorAll('.jq-selectbox__select-text');\r\nlet placeholder = document.querySelector('.placeholder');\r\n\r\nwindow.addEventListener('DOMContentLoaded', function() {\r\n    if (window.innerWidth <= 388) {\r\n        hidden.style.display = 'none'; // Скрываем поле 'Класс опасности'\r\n        half.classList.add('fields-wrap__label--50'); // Уменьшаем наполовину ширину поля 'Тип груза'\r\n        for (let i = 0; i < texts.length; i++) {\r\n            texts[i].style.maxWidth = '166px'; // Нужно для плагина селектов\r\n        };\r\n    }\r\n    placeholder.textContent += 'а';\r\n});\r\n\r\nwindow.addEventListener('resize', function() {\r\n    if (window.innerWidth <= 388) {\r\n        hidden.style.display = 'none';\r\n        half.classList.add('fields-wrap__label--50');\r\n        for (let i = 0; i < texts.length; i++) {\r\n            texts[i].style.maxWidth = '166px';\r\n        };\r\n    } else {\r\n        hidden.style.display = '';\r\n        half.classList.remove('fields-wrap__label--50');\r\n        for (let i = 0; i < texts.length; i++) {\r\n            texts[i].style.maxWidth = '';\r\n        };\r\n    }\r\n});\n\n//# sourceURL=webpack://tochka/./src/js/select_plugin/selects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/select_plugin/selects.js"]();
/******/ 	
/******/ })()
;