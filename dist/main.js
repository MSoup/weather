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

/***/ "./src/getCityWeather.js":
/*!*******************************!*\
  !*** ./src/getCityWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCityWeather)\n/* harmony export */ });\nasync function getCityWeather(cityQuery) {\r\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=b22a0f977cd497e178d94a1e1d72c022`;\r\n\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n\r\n  const temp = data.main.temp;\r\n  const feels_like = data.main.feels_like;\r\n  const city = data.name;\r\n  const country = data.sys.country;\r\n  const humidity = data.main.humidity;\r\n  const condition = data.weather[0].description;\r\n\r\n  return { temp, feels_like, city, country, humidity, condition };\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/getCityWeather.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"kelvinToCelsius\": () => (/* binding */ kelvinToCelsius),\n/* harmony export */   \"kelvinToFahrenheit\": () => (/* binding */ kelvinToFahrenheit)\n/* harmony export */ });\nconst kelvinToCelsius = (kelvin) => {\r\n  return `${Math.round(kelvin - 273.15)}°`;\r\n};\r\n\r\nconst kelvinToFahrenheit = (kelvin) => {\r\n  return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}°`;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getCityWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCityWeather.js */ \"./src/getCityWeather.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\n\r\n// Form functions\r\nfunction handleSubmit(e) {\r\n  e.preventDefault();\r\n\r\n  const textfield = document.querySelector(\"#city\");\r\n  let cityName = document.querySelector(\".cityName\");\r\n\r\n  const city = textfield.value;\r\n  if (!city) {\r\n    cityName.textContent = \"Cannot search empty field\";\r\n    return;\r\n  }\r\n  populateData(city);\r\n  cityName.textContent = \"\";\r\n}\r\n\r\nlet cityForm = document.getElementById(\"getCity\");\r\ncityForm.addEventListener(\"submit\", handleSubmit);\r\n\r\n// Generate Data based on submission\r\nasync function populateData(formValue) {\r\n  const {\r\n    temp,\r\n    feels_like,\r\n    city,\r\n    country,\r\n    humidity,\r\n    condition,\r\n  } = await (0,_getCityWeather_js__WEBPACK_IMPORTED_MODULE_0__.default)(formValue);\r\n  // Convert temps to common values\r\n  const readableTempC = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.kelvinToCelsius)(temp);\r\n  console.log(readableTempC);\r\n  const readableTempF = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.kelvinToFahrenheit)(temp);\r\n\r\n  const cardContainer = document.querySelector(\".infoCard\");\r\n  const infoCardCity = document.querySelector(\".infoCardCity\");\r\n  const infoCardTemp = document.querySelector(\".infoCardTemp\");\r\n  const infoCardWeather = document.querySelector(\".infoCardWeather\");\r\n  const infoCardHumidity = document.querySelector(\".infoCardHumidity\");\r\n\r\n  const showC = function () {\r\n    return true;\r\n  };\r\n  infoCardCity.textContent = city;\r\n  infoCardTemp.textContent = showC ? readableTempC : readableTempF;\r\n  // `${temp} (feels like ${feels_like})`;\r\n  infoCardWeather.textContent =\r\n    condition.charAt(0).toUpperCase() + condition.slice(1);\r\n  infoCardHumidity.textContent = `Humidity: ${humidity}`;\r\n}\r\n\r\nfunction getWeatherIcon(weather) {\r\n  const icon = document.querySelector(\".fas\");\r\n  // Clear class first\r\n  icon.className = \"fas\";\r\n  console.log(icon);\r\n  // Add logic to change icon based off of FA icons\r\n  icon.classList.add(\"fa-bolt\");\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;