/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 160);
/******/ })
/************************************************************************/
/******/ ({

/***/ 160:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Invalid regular expression flag (27:23)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m\n \u001b[90m 26 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m\u001b[36mconst\u001b[39m imagen \u001b[33m=\u001b[39m {img\u001b[33m:\u001b[39m {\u001b[33m/\u001b[39massets\u001b[33m/\u001b[39mimagenes\u001b[33m/\u001b[39mcanaima\u001b[33m-\u001b[39mlogo_white\u001b[33m.\u001b[39mpng}}\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 28 | \u001b[39m\n \u001b[90m 29 | \u001b[39m\t\u001b[90m/**return (\t\u001b[39m\n \u001b[90m 30 | \u001b[39m\u001b[90m\t\t<MuiThemeProvider >\u001b[39m\u001b[0m\n");

/***/ })

/******/ });