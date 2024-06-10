"use strict";
(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_render_js"], {
"./src/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.module.css */ "./src/render.module.css");


function render() {
    const el = document.createElement('div')
    el.classList.add(_render_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].root)
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}

}),
"./src/render.module.css": (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__.r(module.exports = {
  "columnCenter": "rspack-repro-_src_render_module_css-columnCenter",
  "root": "rspack-repro-_src_render_module_css-root",
  "main": "rspack-repro-_src_render_module_css-main",
});


}),

}]);