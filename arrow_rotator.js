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

/***/ "./src/js/select_plugin/arrow_rotator.js":
/*!***********************************************!*\
  !*** ./src/js/select_plugin/arrow_rotator.js ***!
  \***********************************************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', function() {\r\n\tlet selectsOrig = document.querySelectorAll('select');\r\n\tlet selects = document.querySelectorAll('.jqselect');\r\n\tlet arrows = document.querySelectorAll('.jq-selectbox__trigger-arrow');\r\n\r\n\tfor (let i = 0; i < arrows.length; i++) {\r\n\t\tselects[i].onclick = function () { // Разворот стрелки при кликах по селекту\r\n\t\t\tif (selects[i].classList.contains('opened')) {\r\n\t\t\t\tarrows[i].style.transform = 'translateY(4px) rotate(-135deg)';\r\n\t\t\t} else {\r\n\t\t\t\tarrows[i].style.transform = 'rotate(45deg)';\r\n\t\t\t}\r\n\t\t}\r\n\t\tselectsOrig[i].onblur = function () { // Возврат стрелки при клике вне селекта\r\n\t\t\tarrows[i].style.transform = 'rotate(45deg)';\r\n\t\t}\r\n\t}\r\n});\n\n//# sourceURL=webpack://tochka/./src/js/select_plugin/arrow_rotator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/select_plugin/arrow_rotator.js"]();
/******/ 	
/******/ })()
;