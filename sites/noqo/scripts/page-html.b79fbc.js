(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([[541],{

/***/ 6459:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
// EXTERNAL MODULE: ./src/img/vuejs-logo.jpg
var vuejs_logo = __webpack_require__(6598);
var vuejs_logo_default = /*#__PURE__*/__webpack_require__.n(vuejs_logo);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=template&id=7e69f26d


var _hoisted_1 = {
  class: "section-vue"
};
var _hoisted_2 = {
  class: "container"
};
var _hoisted_3 = {
  class: "section-vue__message section-vue__message_green"
};
var _hoisted_4 = ["alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($data.message), 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    class: "section-vue__img",
    src: (vuejs_logo_default()),
    alt: $data.message
  }, null, 8, _hoisted_4)])]);
}
;// CONCATENATED MODULE: ./src/vue/HTML.vue?vue&type=template&id=7e69f26d

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=script&lang=js
/* harmony default export */ const HTMLvue_type_script_lang_js = ({
  name: 'vue-html',
  data: function data() {
    return {
      message: 'Vue HTML components'
    };
  },
  mounted: function mounted() {}
});
;// CONCATENATED MODULE: ./src/vue/HTML.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/vue/HTML.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HTMLvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const HTML = (__exports__);
;// CONCATENATED MODULE: ./src/scripts/pages/page-html.js


var AppSelector = document.querySelector('#vue-app');
if (AppSelector) (0,runtime_dom_esm_bundler/* createApp */.ri)(HTML).mount(AppSelector);
// EXTERNAL MODULE: ./src/templates/pages/page-html.html
var page_html = __webpack_require__(9899);
;// CONCATENATED MODULE: ./config/entry/pages/page-html.js





/***/ }),

/***/ 9152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sass-logo.png";

/***/ }),

/***/ 6598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vuejs-logo.jpg";

/***/ }),

/***/ 427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/webpack-logo.svg";

/***/ }),

/***/ 9899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="ru-RU">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="initial-scale=1.0, width=device-width">\n		<meta name="format-detection" content="telephone=no">\n		<title>HTML шаблон</title>\n		<meta name="description" content="#">\n		<meta name="keywords" content="#">\n		' +
((__t = ( htmlWebpackPlugin.tags.headTags )) == null ? '' : __t) +
'\n	</head>\n\n	<body>\n		<div class="wrapper">\n			<header class="main-header"></header>\n			<div class="main-wrapper">\n				<main class="main-content">\n\n					<!-- <section class="section text-center" style="background-image: url(\'' +
((__t = (__webpack_require__(9152))) == null ? '' : __t) +
'\')"> -->\n					<section class="section text-center">\n						<h1 class="section__title">HTML шаблон</h1>\n						<img src="' +
((__t = (__webpack_require__(427))) == null ? '' : __t) +
'" alt="logo" class="section__img section__img_big">\n\n						<div id="vue-app"></div>\n					</section>\n\n				</main>\n			</div>\n			<footer class="main-footer"></footer>\n		</div>\n	</body>\n</html>\n';

}
return __p
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216,179], () => (__webpack_exec__(6459)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=page-html.b79fbc.js.map