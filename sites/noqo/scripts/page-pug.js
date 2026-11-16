(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([["page-pug"],{

/***/ "./config/entry/pages/page-pug.js":
/*!****************************************!*\
  !*** ./config/entry/pages/page-pug.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_pages_page_pug_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/pages/page-pug.scss */ "./src/styles/pages/page-pug.scss");
/* harmony import */ var _scripts_pages_page_pug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/pages/page-pug.js */ "./src/scripts/pages/page-pug.js");
/* harmony import */ var _templates_pages_page_pug_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/templates/pages/page-pug.pug */ "./src/templates/pages/page-pug.pug");
/* harmony import */ var _templates_pages_page_pug_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_pages_page_pug_pug__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'vue-pug',
  data: function data() {
    return {
      message: 'Vue PUG components'
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@uvarov.frontend/pug-bem-plain-loader/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=template&id=472a7690&lang=pug":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@uvarov.frontend/pug-bem-plain-loader/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=template&id=472a7690&lang=pug ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./src/scripts/pages/page-pug.js":
/*!***************************************!*\
  !*** ./src/scripts/pages/page-pug.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vue_PUG_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/vue/PUG.vue */ "./src/vue/PUG.vue");


var AppSelector = document.querySelector('#vue-app');
if (AppSelector) (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_vue_PUG_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).mount(AppSelector);
document.addEventListener('DOMContentLoaded', function () {
  var preloader = {
    preloader: document.querySelector('#preloader'),
    progress: undefined,
    loaded: function loaded() {
      var _this = this;

      var loader = setInterval(function () {
        if (_this.progress.value === _this.progress.max) {
          clearInterval(loader);

          _this.preloader.classList.add('is-loaded');
        } else {
          _this.progress.value += 1;
        }
      }, 5);
    },
    init: function init() {
      if (!this.preloader) return;
      this.progress = this.preloader.querySelector('progress');
      this.loaded();
    }
  };
  preloader.init();
});

/***/ }),

/***/ "./src/img/pug-logo.png":
/*!******************************!*\
  !*** ./src/img/pug-logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pug-logo.png";

/***/ }),

/***/ "./src/img/pug-logo.webp":
/*!*******************************!*\
  !*** ./src/img/pug-logo.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pug-logo.webp";

/***/ }),

/***/ "./src/img/pug-logo@2x.png":
/*!*********************************!*\
  !*** ./src/img/pug-logo@2x.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pug-logo@2x.png";

/***/ }),

/***/ "./src/img/sass-logo.png":
/*!*******************************!*\
  !*** ./src/img/sass-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sass-logo.png";

/***/ }),

/***/ "./src/img/sass-logo@2x.png":
/*!**********************************!*\
  !*** ./src/img/sass-logo@2x.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sass-logo@2x.png";

/***/ }),

/***/ "./src/img/vuejs-logo.jpg":
/*!********************************!*\
  !*** ./src/img/vuejs-logo.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vuejs-logo.jpg";

/***/ }),

/***/ "./src/styles/pages/page-pug.scss":
/*!****************************************!*\
  !*** ./src/styles/pages/page-pug.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/templates/pages/page-pug.pug":
/*!******************************************!*\
  !*** ./src/templates/pages/page-pug.pug ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html><html lang="ru-RU"><head><meta charset="UTF-8"><meta name="viewport" content="initial-scale=1.0, width=device-width"><meta name="format-detection" content="telephone=no"><title>PUG шаблон</title><meta name="description" content="#"><meta name="keywords" content="#">' +
((__t = ( htmlWebpackPlugin.tags.headTags )) == null ? '' : __t) +
'</head><body><div class="preloader" id="preloader"><progress max="100" value="0"></progress></div><div class="wrapper"><header class="main-header"></header><div class="main-wrapper"><main class="main-content"><section class="section text-center"><h1 class="section__title">PUG шаблон</h1><div class="scroller"><div class="scroller__list"><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div></div></div><picture class="section__img section__img_medium"><source srcset="' +
((__t = (__webpack_require__(/*! @/img/pug-logo.webp */ "./src/img/pug-logo.webp"))) == null ? '' : __t) +
'" type="image/webp"><img src="' +
((__t = (__webpack_require__(/*! @/img/pug-logo.png */ "./src/img/pug-logo.png"))) == null ? '' : __t) +
'" srcset="' +
((__t = (__webpack_require__(/*! @/img/pug-logo.png */ "./src/img/pug-logo.png"))) == null ? '' : __t) +
', ' +
((__t = (__webpack_require__(/*! @/img/pug-logo@2x.png */ "./src/img/pug-logo@2x.png"))) == null ? '' : __t) +
' 2x" alt="logo"></picture><br><img class="section__img section__img_small" src="' +
((__t = (__webpack_require__(/*! @/img/sass-logo.png */ "./src/img/sass-logo.png"))) == null ? '' : __t) +
'" srcset="' +
((__t = (__webpack_require__(/*! @/img/sass-logo.png */ "./src/img/sass-logo.png"))) == null ? '' : __t) +
', ' +
((__t = (__webpack_require__(/*! @/img/sass-logo@2x.png */ "./src/img/sass-logo@2x.png"))) == null ? '' : __t) +
' 2x" alt="logo"><div id="vue-app"></div></section></main></div><footer class="main-footer"></footer></div></body></html>';

}
return __p
};


/***/ }),

/***/ "./src/vue/PUG.vue":
/*!*************************!*\
  !*** ./src/vue/PUG.vue ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PUG_vue_vue_type_template_id_472a7690_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PUG.vue?vue&type=template&id=472a7690&lang=pug */ "./src/vue/PUG.vue?vue&type=template&id=472a7690&lang=pug");
/* harmony import */ var _PUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PUG.vue?vue&type=script&lang=js */ "./src/vue/PUG.vue?vue&type=script&lang=js");
/* harmony import */ var _PUG_vue_vue_type_style_index_0_id_472a7690_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss */ "./src/vue/PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss");
/* harmony import */ var _Users_nadyay_Desktop_DEV_noqo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_nadyay_Desktop_DEV_noqo_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PUG_vue_vue_type_template_id_472a7690_lang_pug__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/PUG.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/PUG.vue?vue&type=script&lang=js":
/*!*************************************************!*\
  !*** ./src/vue/PUG.vue?vue&type=script&lang=js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_PUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PUG.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/PUG.vue?vue&type=template&id=472a7690&lang=pug":
/*!****************************************************************!*\
  !*** ./src/vue/PUG.vue?vue&type=template&id=472a7690&lang=pug ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_uvarov_frontend_pug_bem_plain_loader_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_PUG_vue_vue_type_template_id_472a7690_lang_pug__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_uvarov_frontend_pug_bem_plain_loader_index_js_clonedRuleSet_6_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_PUG_vue_vue_type_template_id_472a7690_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/@uvarov.frontend/pug-bem-plain-loader/index.js??clonedRuleSet-6.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PUG.vue?vue&type=template&id=472a7690&lang=pug */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@uvarov.frontend/pug-bem-plain-loader/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=template&id=472a7690&lang=pug");


/***/ }),

/***/ "./src/vue/PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss":
/*!**********************************************************************!*\
  !*** ./src/vue/PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_8_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_PUG_vue_vue_type_style_index_0_id_472a7690_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0]!./PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-8.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=style&index=0&id=472a7690&lang=scss");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","main"], () => (__webpack_exec__("./config/entry/pages/page-pug.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=page-pug.js.map