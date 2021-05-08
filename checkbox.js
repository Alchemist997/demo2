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

/***/ "./src/js/select_plugin/checkbox.js":
/*!******************************************!*\
  !*** ./src/js/select_plugin/checkbox.js ***!
  \******************************************/
/***/ (() => {

eval("let checkbox = document.querySelector('.checkbox');\r\nlet checkboxArea = document.querySelector('.checkbox-area');\r\nlet mark = document.querySelector('.checkbox-area__mark');\r\nlet hidings = document.querySelectorAll('.hiding');\r\n\r\nlet sign = function() {\r\n    checkboxArea.style.border = 'none';\r\n    checkboxArea.style.backgroundColor = '#EF483E';\r\n    mark.style.display = 'block';\r\n    for (let i = 0; i < hidings.length; i++) {\r\n        hidings[i].style.display = 'block';\r\n    };\r\n};\r\n\r\nif (checkbox.checked) {\r\n    sign();\r\n};\r\n\r\ncheckbox.onchange = function() {\r\n    if (checkbox.checked) {\r\n        sign();\r\n    } else {\r\n        checkboxArea.style.removeProperty('border');\r\n        checkboxArea.style.removeProperty('background-color');\r\n        mark.style.removeProperty('display');\r\n        for (let i = 0; i < hidings.length; i++) {\r\n            hidings[i].style.display = '';\r\n        };\r\n    };\r\n};\n\n//# sourceURL=webpack://tochka/./src/js/select_plugin/checkbox.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/select_plugin/checkbox.js"]();
/******/ 	
/******/ })()
;