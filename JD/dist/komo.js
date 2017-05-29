/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var select = $(".select");
var beijing = $(".beijing");
var dropdown = $(".dropdown");
beijing.on("mouseenter", function() {
    // console.log(1);
    select.css({
        display: "block",
    })
    beijing.css({
        "backgroundColor": "#fff",
        "border": "1px solid #999",
        "border-bottom": "none"
    })
})
beijing.on("mouseleave", function() {
    // console.log("1", select.css("display"));
    // if (select.css("display") === "block") {
    //     beijing.css({
    //         "backgroundColor": "#fff",
    //         "border": "1px solid #999",
    //         "border-bottom": "none"
    //     })
    //     return;
    // }
    // select.css({
    //     display: "none",
    // })
})
dropdown.on("mouseleave", function() {
    beijing.css({
        "backgroundColor": "rgb(227, 228, 229)",
        "border": "none",
        "border-bottom": "none"
    })
    select.css({
        display: "none",
    })
})
dropdown.on("click", function(e) {
    if (e.target.tagName.toLowerCase() === "a" || e.target.tagName.toLowerCase() === "div") {
        beijing.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-dibiao"></use></svg>' + $(e.target).text())
    }
})

var navUlSelect = $(".nav-ul-select")
$(".myjdspan").on('mouseover', function() {
    // console.log(1);
    navUlSelect.css({
        display: "block",
    })

})
$(".white").on("mouseleave", function() {
    navUlSelect.css({
        // display: "none",
    })
})
$(".nav-ul-dropdown").on("mouseleave", function() {
    navUlSelect.css({
        display: "none",
    })
})
$(".nav-ul-dropdown").on("click", function(e) {
    // $(".nav-ul-dropdown a").css({
    //     "color": "#999",
    // });
    $(e.target).css({
        "color": "red",
    })
})
$(".kehu").on("mouseover", function() {
    $(".item").css({
        display: "block",
        marginTop: "4px"
    })
})
$(".item-dropdown").on("mouseleave", function() {
    $(".item").css({
        display: "none",
    })
})
$(".item-dropdown").on("click", function(e) {
    $(e.target).css({
        "color": "red",
    })
})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// var path = require('path');
// console.log(path);
var ul = __webpack_require__(0)
console.log("this is:", ul);

/***/ })
/******/ ]);