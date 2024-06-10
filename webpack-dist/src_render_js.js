"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_render_js"],{

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _render_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.module.css */ "./src/render.module.css");


function render() {
    const el = document.createElement('div')
    el.classList.add(_render_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].root)
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}

/***/ })

}]);