(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([["page-html"],{

/***/ "./config/entry/pages/page-html.js":
/*!*****************************************!*\
  !*** ./config/entry/pages/page-html.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_pages_page_html_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/pages/page-html.scss */ "./src/styles/pages/page-html.scss");
/* harmony import */ var _scripts_pages_page_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/pages/page-html.js */ "./src/scripts/pages/page-html.js");
/* harmony import */ var _templates_pages_page_html_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/templates/pages/page-html.html */ "./src/templates/pages/page-html.html");
/* harmony import */ var _templates_pages_page_html_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_pages_page_html_html__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'vue-html',
  data: function data() {
    return {
      message: 'Vue HTML components'
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=template&id=35f7d96d":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=template&id=35f7d96d ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _img_vuejs_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/img/vuejs-logo.jpg */ "./src/img/vuejs-logo.jpg");
/* harmony import */ var _img_vuejs_logo_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_vuejs_logo_jpg__WEBPACK_IMPORTED_MODULE_1__);


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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    class: "section-vue__img",
    src: (_img_vuejs_logo_jpg__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: $data.message
  }, null, 8
  /* PROPS */
  , _hoisted_4)])]);
}

/***/ }),

/***/ "./src/scripts/pages/page-html.js":
/*!****************************************!*\
  !*** ./src/scripts/pages/page-html.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vue_HTML_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/vue/HTML.vue */ "./src/vue/HTML.vue");


var AppSelector = document.querySelector('#vue-app');
if (AppSelector) (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_vue_HTML_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).mount(AppSelector);

/***/ }),

/***/ "./src/img/sass-logo.png":
/*!*******************************!*\
  !*** ./src/img/sass-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sass-logo.png";

/***/ }),

/***/ "./src/img/vuejs-logo.jpg":
/*!********************************!*\
  !*** ./src/img/vuejs-logo.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vuejs-logo.jpg";

/***/ }),

/***/ "./src/img/webpack-logo.svg":
/*!**********************************!*\
  !*** ./src/img/webpack-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/webpack-logo.svg";

/***/ }),

/***/ "./src/styles/pages/page-html.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/page-html.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/templates/pages/page-html.html":
/*!********************************************!*\
  !*** ./src/templates/pages/page-html.html ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="ru-RU">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="initial-scale=1.0, width=device-width">\n		<meta name="format-detection" content="telephone=no">\n		<title>HTML шаблон</title>\n		<meta name="description" content="#">\n		<meta name="keywords" content="#">\n		' +
((__t = ( htmlWebpackPlugin.tags.headTags )) == null ? '' : __t) +
'\n	</head>\n\n	<body>\n		<div class="wrapper">\n			<header class="main-header"></header>\n			<div class="main-wrapper">\n				<main class="main-content">\n\n					<!-- <section class="section text-center" style="background-image: url(\'' +
((__t = (__webpack_require__(/*! @/img/sass-logo.png */ "./src/img/sass-logo.png"))) == null ? '' : __t) +
'\')"> -->\n					<section class="section text-center">\n						<h1 class="section__title">HTML шаблон</h1>\n						<img src="' +
((__t = (__webpack_require__(/*! @/img/webpack-logo.svg */ "./src/img/webpack-logo.svg"))) == null ? '' : __t) +
'" alt="logo" class="section__img section__img_big">\n\n						<div id="vue-app"></div>\n					</section>\n\n				</main>\n			</div>\n			<footer class="main-footer"></footer>\n		</div>\n	</body>\n</html>\n';

}
return __p
};


/***/ }),

/***/ "./src/vue/HTML.vue":
/*!**************************!*\
  !*** ./src/vue/HTML.vue ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HTML_vue_vue_type_template_id_35f7d96d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTML.vue?vue&type=template&id=35f7d96d */ "./src/vue/HTML.vue?vue&type=template&id=35f7d96d");
/* harmony import */ var _HTML_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTML.vue?vue&type=script&lang=js */ "./src/vue/HTML.vue?vue&type=script&lang=js");
/* harmony import */ var _HTML_vue_vue_type_style_index_0_id_35f7d96d_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss */ "./src/vue/HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss");
/* harmony import */ var _Users_nadyay_Desktop_DEV_noqo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_nadyay_Desktop_DEV_noqo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HTML_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HTML_vue_vue_type_template_id_35f7d96d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/HTML.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/HTML.vue?vue&type=script&lang=js":
/*!**************************************************!*\
  !*** ./src/vue/HTML.vue?vue&type=script&lang=js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_HTML_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_HTML_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./HTML.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/HTML.vue?vue&type=template&id=35f7d96d":
/*!********************************************************!*\
  !*** ./src/vue/HTML.vue?vue&type=template&id=35f7d96d ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_HTML_vue_vue_type_template_id_35f7d96d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_HTML_vue_vue_type_template_id_35f7d96d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./HTML.vue?vue&type=template&id=35f7d96d */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=template&id=35f7d96d");


/***/ }),

/***/ "./src/vue/HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss":
/*!***********************************************************************!*\
  !*** ./src/vue/HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_8_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_HTML_vue_vue_type_style_index_0_id_35f7d96d_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/HTML.vue?vue&type=style&index=0&id=35f7d96d&lang=scss");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","main"], () => (__webpack_exec__("./config/entry/pages/page-html.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=page-html.js.map