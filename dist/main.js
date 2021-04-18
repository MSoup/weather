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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let textfield = document.querySelector(\"#city\");\r\nlet cityName = document.querySelector(\".cityName\");\r\nlet cityForm = document.getElementById(\"getCity\");\r\nlet conditions = document.querySelector(\".conditions\");\r\n\r\nfunction handleSubmit(e) {\r\n  e.preventDefault();\r\n  //   For debugging\r\n  console.log(e);\r\n  const city = textfield.value;\r\n\r\n  getCityInfo(city);\r\n  cityName.textContent = \"Loading city...\";\r\n}\r\n\r\ncityForm.addEventListener(\"submit\", handleSubmit);\r\n\r\nasync function getCityInfo(cityNameInputted) {\r\n  const url =\r\n    \"https://api.openweathermap.org/data/2.5/weather?q=Sendai&appid=b22a0f977cd497e178d94a1e1d72c022\";\r\n\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  const { temp, feels_like } = data.main;\r\n\r\n  const temperature = { temp: temp, feels_like: feels_like };\r\n  const city = data.name;\r\n  const country = data.sys.country;\r\n  const humidity = data.main.humidity;\r\n\r\n  cityName.textContent = `${data.name}, ${data.sys.country}`;\r\n  conditions.textContent = `${data.weather[0].description}`;\r\n  console.log(data);\r\n  console.log(temperature);\r\n  console.log(city);\r\n  console.log(country);\r\n  return { temperature, city, country };\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;