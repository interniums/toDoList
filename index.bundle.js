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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/animation.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/animation.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.fade-in {\r\n\t-webkit-animation: fade-in 1s linear both;\r\n\t        animation: fade-in 1s linear both;\r\n}\r\n\r\n @-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/animation.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/calendar.svg */ \"./src/assets/images/calendar.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tfont-family: 'Courier New', monospace;\r\n\twhite-space: nowrap; \r\n\toverflow: hidden; \r\n\ttext-overflow: ellipsis;\r\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\nbody {\r\n\theight: 200vh;\r\n\tdisplay: none;\r\n\tflex-wrap: wrap;\r\n\tbackground: linear-gradient(to bottom, rgb(113, 111, 145), rgb(58, 60, 67));\r\n}\r\n\r\n.header {\r\n\twidth: 100%;\r\n\theight: 100px;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tz-index: 2;\r\n}\r\n\r\n.headerText {\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 45px;\r\n\tletter-spacing: 25px;\r\n\ttransition: .3s;\r\n}\r\n\r\n.headerText:hover {\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n\r\n.sidebarText {\r\n\tposition: fixed;\r\n\tcolor: rgba(255, 255, 255, 0.6);\r\n\tfont-size: 45px;\r\n\tletter-spacing: -15px;\r\n\twriting-mode: vertical-rl;\r\n\ttext-orientation: upright;\r\n\ttop: calc(50vh - 150px);\r\n\tleft: 0;\r\n\ttransition: .5s;\r\n\tcursor: pointer;\r\n}\r\n\r\n.sidebarText:hover {\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n\r\nmain {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 12fr 1fr;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.qouteContainer {\r\n\twidth: 600px;\r\n}\r\n\r\n.qoute {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n\ttransition: 1s;\r\n\ttext-shadow: 2px 2px 2px rgba(0, 0, 0, 1);\r\n\twhite-space: wrap;\r\n}\r\n\r\n.qoute:hover {\r\n\tcolor: white;\r\n}\r\n\r\n.downButtonContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: flex-end;\r\n}\r\n\r\n.downButton {\r\n\twidth: 75px;\r\n\theight: 75px;\r\n\tbackground-color: inherit;\r\n\tcursor: pointer;\r\n\ttransition: .3s;\r\n}\r\n\r\n.downButton:hover {\r\n\ttransform: scale(105%);\r\n\ttransition: .3s;\r\n}\r\n\r\n.downButton:active {\r\n\ttransform: scale(95%);\r\n\ttransition: 0s;\r\n}\r\n\r\n.secondLayer {\r\n\theight: 100vh;\r\n\tpadding-left: 55px;\r\n\tpadding-top: 100px;\r\n\twidth: 100%;\r\n}\r\n\r\n.topSideContainer {\r\n\tdisplay: flex;\r\n\theight: 55px;\r\n\twidth: 100%;\r\n\tborder-top: 3px solid rgba(165, 165, 165, .6);\r\n\tborder-left: 3px solid rgba(165, 165, 165, .6);\r\n\tborder-top-left-radius: 20px;\r\n\tcolor: rgba(255, 255, 255, .5);\r\n\tpadding-top: 10px;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.myProjectsContainer {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-size: 30px;\r\n\tfont-weight: bold;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 3fr;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n}\r\n\r\n.projectCellAll {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: white;\r\n}\r\n\r\n.allProjects {\r\n\tcursor: pointer;\r\n}\r\n\r\n.projectCellOthers {\r\n\tdisplay: flex;\r\n\toverflow: auto;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n.projectCell {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100%;\r\n}\r\n\r\n.middleSideContainer {\r\n\theight: calc(100% - 55px);\r\n\tborder-left: 3px solid rgba(165, 165, 165, .6);\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 3.5fr 2fr;\r\n\tpadding-left: 10px;\r\n\tpadding-top: 10px;\r\n\talign-items: start;\r\n}\r\n\r\n.leftSideContainer {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 1fr 1fr;\r\n\tmax-height: 100%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.titleName {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tgap: 10px;\r\n\theight: 50px;\r\n}\r\n\r\n.addTask {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.addTaskImage {\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\ttransition: .3s;\r\n}\r\n\r\n.addTaskImage:hover {\r\n\ttransform: scale(110%);\r\n}\r\n\r\n.addTaskImage:active {\r\n\ttransform: scale(95%);\r\n\ttransition: 0s;\r\n}\r\n\r\n.cellContainer {\r\n\tdisplay: grid;\r\n\tjustify-items: start;\r\n\tgap: 20px;\r\n\toverflow: auto;\r\n\theight: 660px;\r\n\toverflow: -moz-scrollbars-none;\r\n  scrollbar-width: none;\r\n  -ms-overflow-style: none;\r\n}\r\n\r\n.cellContainer::-webkit-scrollbar {\r\n\tdisplay: none;\r\n\twidth: 0 !important;\r\n}\r\n\r\n.cell {\r\n\twidth: 80%;\r\n\theight: 150px;\r\n\tborder: 1px solid rgba(165, 165, 165, .6);\r\n\tborder-radius: 20px;\r\n\tcolor: rgba(255, 255, 255, .9);\r\n\tfont-weight: bold;\r\n\tbackground-color: rgba(0, 0, 0, .2);\r\n\tmargin: 0% auto;\r\n\tpadding: 10px;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 2.5fr 1fr;\r\n}\r\n\r\n.tasksContainer {\r\n\tdisplay: grid;\r\n\talign-items: center;\r\n\tgap: 20px;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.dateContainer {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.projectNameContainer {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n  justify-content: space-between;\r\n\tfont-size: 30px;\r\n}\r\n\r\n.color {\r\n\twidth: 20%;\r\n\theight: 20px;\r\n\tbackground-color: rgba(94, 186, 58, 0.6);\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.rightSideContainer {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 0.5fr 1fr;\r\n\tjustify-content: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n.myTeamContainer {\r\n\tdisplay: grid;\r\n\tgap: 20px;\r\n}\r\n\r\n.avatar {\r\n\twidth: 65px;\r\n\theight: 65px;\r\n\tobject-fit: fill;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.teamName {\r\n\tfont-size: 25px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n}\r\n\r\n.positionText {\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n}\r\n\r\n.avatarContainer {\r\n\tdisplay: grid;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.teamCell {\r\n\twidth: 50%;\r\n\tbackground-color: rgba(0, 0, 0, .5);\r\n\tcursor: pointer;\r\n}\r\n\r\n.addTaskScreen {\r\n\tposition: absolute;\r\n\ttop: 100vh;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: rgba(0, 0, 0, 0.3);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tdisplay: none;\r\n}\r\n\r\n.addMemberScreen {\r\n\tposition: absolute;\r\n\ttop: 100vh;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: rgba(0, 0, 0, 0.3);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tdisplay: none;\r\n}\r\n\r\n.addTaskContainerMain {\r\n\twidth: 1000px;\r\n\theight: 650px;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 10fr;\r\n\talign-items: center;\r\n}\r\n\r\n.addTaskTitle {\r\n\tfont-weight: bold;\r\n\ttext-align: center;\r\n\tfont-size: 40px;\r\n\tcolor: rgba(255, 255, 255, .5);\r\n\theight: 100%;\r\n}\r\n\r\n.addTaskContainer {\r\n\theight: 100%;\r\n\tborder: 3px solid rgba(165, 165, 165, .6);\r\n\tborder-radius: 20px;\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1.5fr 1.5fr 3fr 1.5fr;\r\n\tgap: 20px;\r\n\tpadding: 20px;\r\n\tbackground: linear-gradient(to bottom, rgb(84, 84, 99), rgb(58, 60, 67));\r\n}\r\n\r\n.inputNameContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\theight: 85px;\r\n\talign-items: center;\r\n}\r\n\r\n.taskColorContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 20px;\r\n\tgap: 10px;\r\n}\r\n\r\n.taskColorContainer input {\r\n\tpadding: 0px;\r\n}\r\n\r\n.taskButtonContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 35px;\r\n\tpadding: 20px;\r\n}\r\n\r\n.addTaskButton {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 35px;\r\n\tbackground-color: inherit;\r\n\tborder: 1px solid rgba(255, 255, 255, .6);\r\n\tpadding: 10px 20px;\r\n\tborder-radius: 20px;\r\n\tcursor: pointer;\r\n\ttransition: .3s;\r\n}\r\n\r\n.addTaskButton:hover {\r\n\ttransform: scale(105%);\r\n\tcolor: white;\r\n\tbackground: linear-gradient(to bottom, rgb(84, 84, 99), rgb(58, 60, 67));\r\n}\r\n\r\n.addTaskButton:active {\r\n\ttransform: scale(100%);\r\n\ttransition: 0s;\r\n}\r\n\r\n.choseProjectContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\tgap: 30px;\r\n\talign-items: center;\r\n\theight: 50px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.taskProjectselect {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.taskTextContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\talign-items: center;\r\n}\r\n\r\n.addTaskContainer input {\r\n\tappearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n}\r\n\r\n.titleNameInput {\r\n\toutline: none;\r\n\tbackground-color: inherit;\r\n\tbox-shadow: none;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 30px;\r\n\theight: 50px;\r\n\twidth: 250px;\r\n\tappearance: none;\r\n\tborder: none;\r\n}\r\n\r\n.titleNameInput::placeholder {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.titleInputContainer {\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, .6);\r\n}\r\n\r\n.taskInputColor {\r\n\twidth: 250px;\r\n\theight: 35px;\r\n}\r\n\r\n.taskText {\r\n\tappearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n\theight: 150px;\r\n\twidth: 700px;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, .6);\r\n\tresize: none;\r\n}\r\n\r\n.taskText::placeholder {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 30px;\r\n}\r\n\r\n.datepicker-toggle {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n.datepicker-toggle-button {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n.datepicker-input {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n}\r\n.datepicker-input::-webkit-calendar-picker-indicator {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.taskDateContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.choseDate {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 30px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.addMemberContainerMain {\r\n\twidth: 1000px;\r\n\theight: 650px;\r\n\tgrid-template-rows: 1fr 10fr;\r\n\tdisplay: grid;\r\n\talign-items: center;\r\n}\r\n\r\n.addMemberTitle {\r\n\tfont-weight: bold;\r\n    text-align: center;\r\n    font-size: 40px;\r\n    color: rgba(255, 255, 255, .5);\r\n    height: 100%;\r\n}\r\n\r\n.addMemberContainer {\r\n\theight: 100%;\r\n    border: 3px solid rgba(165, 165, 165, .6);\r\n    border-radius: 20px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr 1fr 3fr 1.5fr;\r\n    gap: 20px;\r\n    padding: 20px;\r\n    background: linear-gradient(to bottom, rgb(84, 84, 99), rgb(58, 60, 67));\r\n}\r\n\r\n.memberNameContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\theight: 75px;\r\n\talign-items: center;\r\n}\r\n\r\n.memberNameInputContainer {\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, .6);\r\n}\r\n\r\n.memberNameInput {\r\n\theight: 35px;\r\n\tbackground-color: inherit;\r\n\tappearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tpadding: 3px;\r\n}\r\n\r\n.memberNameInput::placeholder {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 25px;\r\n}\r\n\r\n.imageInputContainer {\r\n\tdisplay: grid;\r\n\tgrid-template-rows: auto;\r\n\tfont-size: 20px;\r\n}\r\n\r\n.imageInputContainer label {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 20px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.avatarInput {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n}\r\n\r\n.memberAgeInput {\r\n\theight: 35px;\r\n\tbackground-color: inherit;\r\n\tappearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tpadding: 3px;\r\n}\r\n\r\n.memberAgeInput::placeholder {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 25px;\r\n}\r\n\r\n.memberAgeContainer {\r\n\twidth: 260px;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, .6);\r\n\theight: 36px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.memberPositionContainer {\r\n\theight: 36px;\r\n\twidth: 260px;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, .6);\r\n\theight: 36px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.memberPositionInput {\r\n\theight: 35px;\r\n\tbackground-color: inherit;\r\n\tappearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tpadding: 3px;\r\n}\r\n\r\n.memberPositionInput::placeholder {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 25px;\r\n}\r\n\r\n.memeberTextContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\talign-items: center;\r\n}\r\n\r\n.memberTextArea {\r\n\tappearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-weight: bold;\r\n\tfont-size: 20px;\r\n\tpadding: 10px;\r\n\theight: 150px;\r\n\twidth: 700px;\r\n\tborder-bottom: 1px solid rgba(255, 255, 255, .6);\r\n\tresize: none;\r\n}\r\n\r\n.memberTextArea::placeholder {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tfont-size: 30px;\r\n}\r\n\r\n.memberButtonsContainer {\r\n\tdisplay: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: rgba(255, 255, 255, .6);\r\n    font-weight: bold;\r\n    font-size: 35px;\r\n    padding: 20px;\r\n}\r\n\r\n.addMemberButton {\r\n\tcolor: rgba(255, 255, 255, .6);\r\n    font-weight: bold;\r\n    font-size: 35px;\r\n    background-color: inherit;\r\n    border: 1px solid rgba(255, 255, 255, .6);\r\n    padding: 10px 20px;\r\n    border-radius: 20px;\r\n    cursor: pointer;\r\n    transition: .3s;\r\n}\r\n\r\n.addMemberButton:hover {\r\n\ttransform: scale(105%);\r\n\tcolor: white;\r\n\tbackground: linear-gradient(to bottom, rgb(84, 84, 99), rgb(58, 60, 67));\r\n}\r\n\r\n.addMemberButton:active {\r\n\ttransform: scale(100%);\r\n\ttransition: 0s;\r\n}\r\n\r\n\r\n/* ----------------------- */\r\nselect {\r\n\t-webkit-appearance:none;\r\n\t-moz-appearance:none;\r\n\t-ms-appearance:none;\r\n\tappearance:none;\r\n\toutline:0;\r\n\tbox-shadow:none;\r\n\tborder: 1px solid rgba(255, 255, 255, .6);\r\n\tborder-radius: 5px;\r\n\tbackground: rgb(84, 84, 99);\r\n\tbackground-image: none;\r\n\tflex: 1;\r\n\tpadding: 0 .5em;\r\n\tcolor: rgba(255, 255, 255, .6);\r\n\tcursor:pointer;\r\n\tfont-size: 30px;\r\n\tfont-weight: bold;\r\n}\r\nselect::-ms-expand {\r\n\tdisplay: none;\r\n}\r\n.select {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\twidth: 20em;\r\n\theight: 3em;\r\n\tline-height: 3;\r\n\tbackground: rgb(84, 84, 99);\r\n\toverflow: hidden;\r\n\tborder-radius: .25em;\r\n}\r\n.select::after {\r\n\tcontent: '\\\\25BC';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 0 1em;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tcursor:pointer;\r\n\tpointer-events:none;\r\n\ttransition:.25s all ease;\r\n}\r\n.select:hover::after {\r\n\tcolor: #ffffff;\r\n}\r\n\r\n\r\n/* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 41px;\r\n  height: 23px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(255, 255, 255, .4);\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 18px;\r\n  width: 18px;\r\n  left: 3px;\r\n  bottom: 3px;\r\n  background-color: white;\r\n  -webkit-transition: .4s;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n\tbackground-color: rgba(94, 186, 58, 0.6);\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px rgba(94, 186, 58, 0.6);\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(18px);\r\n  -ms-transform: translateX(18px);\r\n  transform: translateX(18px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n/* width */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1; \r\n}\r\n \r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: #888; \r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555; \r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/animation.css":
/*!***************************!*\
  !*** ./src/animation.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./animation.css */ \"./node_modules/css-loader/dist/cjs.js!./src/animation.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/animation.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userMembers: () => (/* binding */ userMembers),\n/* harmony export */   userProjects: () => (/* binding */ userProjects),\n/* harmony export */   userTasks: () => (/* binding */ userTasks)\n/* harmony export */ });\n/* harmony import */ var _doom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doom */ \"./src/doom.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/images.js\");\n\r\n\r\n\r\nconst userTasks = [\r\n\t['do styling', '04.23.2024', 'green', 'false', ]\r\n]\r\n\r\nconst userProjects = [\r\n\t['ToDoSite', userTasks[0]]\r\n]\r\n\r\nconst userMembers = [\r\n\t['Jhon', '33', 'manager', _images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatar3]\r\n]\r\n\r\n\r\n// console.log(myDoom.cellContainerToday)\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/data.js?");

/***/ }),

/***/ "./src/doom.js":
/*!*********************!*\
  !*** ./src/doom.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   doom: () => (/* binding */ doom)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ \"./src/images.js\");\n\r\n\r\n\r\n\r\n\r\nconst myDoom = {\r\n\tdownButtonContainer: document.querySelector('.downButtonContainer'),\r\n\tdownButton: document.createElement('img'),\r\n\tmain: document.querySelector('.body'),\r\n\tbody: document.querySelector('.body'),\r\n\tsecondLayer: document.querySelector('.secondLayer'),\r\n\tsideBarText: document.querySelector('.sidebarText'),\r\n\taddTaskButtons: document.querySelectorAll('.addTaskImage'),\r\n\taddTaskScreen: document.querySelector('.addTaskScreen'),\r\n\taddTaskButton: document.querySelector('.add'),\r\n\tsecondLayer: document.querySelector('.secondLayer'),\r\n\tcellContainerToday: document.getElementById('cellContainerToday'),\r\n}\r\n\r\nfunction doom() {\r\n\tconst downButtonContainer = document.querySelector('.downButtonContainer')\r\n\tconst main = document.querySelector('.main')\r\n\tconst body = document.querySelector('.body')\r\n\tconst addTaskImage = document.querySelectorAll('.addTaskImage')\r\n\tconst avatar = document.querySelectorAll('.avatar')\r\n\tconst secondLayer = document.querySelector('.secondLayer')\r\n\tconst headerTextButton = document.querySelector('.headerText')\r\n\tconst sideBarText = document.querySelector('.sidebarText')\r\n\tconst downButton = document.createElement('img')\r\n\tconst addTaskButtons = document.querySelectorAll('.addTaskImage')\r\n\tconst addTaskButton = document.querySelector('.cancel')\r\n\r\n\tfunction firstLoad() {\r\n\r\n\t\taddTaskButton.addEventListener('click', function () {\r\n\t\t\t;(0,_functions__WEBPACK_IMPORTED_MODULE_0__.cancelButtonListener)('task')\r\n\t\t\t}\r\n\t\t)\r\n\t\taddTaskButtons.forEach(button=> {\r\n\t\t\tbutton.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_0__.addTaskListener)\r\n\t\t})\r\n\r\n\t\taddTaskImage.forEach(event=> {\r\n\t\t\tevent.setAttribute('src', _images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].plusButton)\r\n\t\t})\r\n\t\r\n\t\tavatar.forEach(event=> {\r\n\t\t\tevent.setAttribute('src', _images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatar5)\r\n\t\t})\r\n\r\n\t\tdownButton.classList.add('downButton')\r\n\t\tdownButton.setAttribute('src', _images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].downButton)\r\n\t\tdownButton.addEventListener('click', downGo)\r\n\t\tdownButtonContainer.appendChild(downButton)\r\n\t\tbody.style.display = 'flex'\r\n\t\tbody.classList.add('fade-in')\r\n\r\n\t\theaderTextButton.addEventListener('click', upGo)\r\n\t\tsideBarText.style.opacity = 0\r\n\r\n\t\twindow.addEventListener('scroll', handleScroll)\r\n\t}\r\n\tfirstLoad()\r\n\r\n\r\n\tfunction handleScroll() {\r\n\t\tconst scrollPosition = window.scrollY\r\n\t\tconst totalHeight = document.documentElement.scrollHeight - window.innerHeight\r\n\t\tconst scrollProgress = scrollPosition / totalHeight\r\n\r\n\t\tmain.style.opacity = 1 - scrollProgress\r\n\r\n\t\tif (scrollProgress > 1) {\r\n\t\t\t\tsecondLayer.scrollIntoView({ behavior: 'smooth', block: 'end' })\r\n\t\t}\r\n\t}\r\n\r\n\tfunction downGo() {\r\n\t\tsecondLayer.scrollIntoView({ behavior: 'smooth', block: 'end' })\r\n\t\tsideBarText.style.opacity = 1\r\n\t}\r\n\r\n\tfunction upGo() {\r\n\t\tmain.scrollIntoView({ behavior: 'smooth', block: 'end' })\r\n\t\tsideBarText.style.opacity = 0\r\n\t}\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myDoom);\r\n\n\n//# sourceURL=webpack://todolist/./src/doom.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMember: () => (/* binding */ addMember),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   addTaskListener: () => (/* binding */ addTaskListener),\n/* harmony export */   cancelButtonListener: () => (/* binding */ cancelButtonListener)\n/* harmony export */ });\n/* harmony import */ var _doom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doom */ \"./src/doom.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\r\n\r\n\r\n\r\n\r\nfunction addTask() {\r\n\r\n}\r\n\r\nfunction addProject() {\r\n\r\n}\r\n\r\nfunction addMember() {\r\n\r\n}\r\n\r\nfunction addTaskListener() {\r\n\t_doom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskScreen.style.display = 'flex'\r\n\t_doom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].secondLayer.style.opacity = 0\r\n}\r\n\r\nfunction cancelButtonListener(value) {\r\n\tif (value == 'task') {\r\n\t\t_doom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskScreen.style.display = 'none'\r\n\t\t_doom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].secondLayer.style.opacity = 1\r\n\t}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/functions.js?");

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_downButton_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/downButton.svg */ \"./src/assets/images/downButton.svg\");\n/* harmony import */ var _assets_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/plus.svg */ \"./src/assets/images/plus.svg\");\n/* harmony import */ var _assets_images_avatar1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/avatar1.jpg */ \"./src/assets/images/avatar1.jpg\");\n/* harmony import */ var _assets_images_avatar2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/avatar2.jpg */ \"./src/assets/images/avatar2.jpg\");\n/* harmony import */ var _assets_images_avatar3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/avatar3.jpg */ \"./src/assets/images/avatar3.jpg\");\n/* harmony import */ var _assets_images_avatar5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/avatar5.jpg */ \"./src/assets/images/avatar5.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst myImages = {\r\n\tdownButton: _assets_images_downButton_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n\tplusButton: _assets_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n\tavatar1: _assets_images_avatar1_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n\tavatar2: _assets_images_avatar2_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n\tavatar3: _assets_images_avatar3_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n\tavatar5: _assets_images_avatar5_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myImages);\n\n//# sourceURL=webpack://todolist/./src/images.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _doom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doom */ \"./src/doom.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _animation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation.css */ \"./src/animation.css\");\n\r\n\r\n\r\n\r\n\r\n(0,_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _doom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doom */ \"./src/doom.js\");\n\r\n\r\n\r\nfunction renderPage() {\r\n\t(0,_doom__WEBPACK_IMPORTED_MODULE_0__.doom)()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);\n\n//# sourceURL=webpack://todolist/./src/render.js?");

/***/ }),

/***/ "./src/assets/images/avatar1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"426166d98c63a91175d9.jpg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/avatar1.jpg?");

/***/ }),

/***/ "./src/assets/images/avatar2.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0dab48cf58175b327b1b.jpg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/avatar2.jpg?");

/***/ }),

/***/ "./src/assets/images/avatar3.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar3.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a5a52106b46e72f7b62.jpg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/avatar3.jpg?");

/***/ }),

/***/ "./src/assets/images/avatar5.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/avatar5.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56f3354373659f73ce98.jpg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/avatar5.jpg?");

/***/ }),

/***/ "./src/assets/images/calendar.svg":
/*!****************************************!*\
  !*** ./src/assets/images/calendar.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9cf4482c99e565809fe0.svg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/calendar.svg?");

/***/ }),

/***/ "./src/assets/images/downButton.svg":
/*!******************************************!*\
  !*** ./src/assets/images/downButton.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73571e22217ff03bef0b.svg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/downButton.svg?");

/***/ }),

/***/ "./src/assets/images/plus.svg":
/*!************************************!*\
  !*** ./src/assets/images/plus.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"490d5185b1b85618e3a0.svg\";\n\n//# sourceURL=webpack://todolist/./src/assets/images/plus.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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