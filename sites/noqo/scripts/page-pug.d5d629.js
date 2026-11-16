(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([[918],{

/***/ 1277:
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@uvarov.frontend/pug-bem-plain-loader/index.js??clonedRuleSet-6.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=template&id=3877d314&lang=pug


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
;// CONCATENATED MODULE: ./src/vue/PUG.vue?vue&type=template&id=3877d314&lang=pug

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/vue/PUG.vue?vue&type=script&lang=js
/* harmony default export */ const PUGvue_type_script_lang_js = ({
  name: 'vue-pug',
  data: function data() {
    return {
      message: 'Vue PUG components'
    };
  },
  mounted: function mounted() {}
});
;// CONCATENATED MODULE: ./src/vue/PUG.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/vue/PUG.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PUGvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const PUG = (__exports__);
;// CONCATENATED MODULE: ./src/scripts/pages/page-pug.js


var AppSelector = document.querySelector('#vue-app');
if (AppSelector) (0,runtime_dom_esm_bundler/* createApp */.ri)(PUG).mount(AppSelector);
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
// EXTERNAL MODULE: ./src/templates/pages/page-pug.pug
var page_pug = __webpack_require__(4645);
;// CONCATENATED MODULE: ./config/entry/pages/page-pug.js





/***/ }),

/***/ 3676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pug-logo.png";

/***/ }),

/***/ 5786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pug-logo.webp";

/***/ }),

/***/ 3040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pug-logo@2x.png";

/***/ }),

/***/ 9152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sass-logo.png";

/***/ }),

/***/ 5736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sass-logo@2x.png";

/***/ }),

/***/ 6598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vuejs-logo.jpg";

/***/ }),

/***/ 4645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html><html lang="ru-RU"><head><meta charset="UTF-8"><meta name="viewport" content="initial-scale=1.0, width=device-width"><meta name="format-detection" content="telephone=no"><title>PUG шаблон</title><meta name="description" content="#"><meta name="keywords" content="#">' +
((__t = ( htmlWebpackPlugin.tags.headTags )) == null ? '' : __t) +
'</head><body><div class="preloader" id="preloader"><progress max="100" value="0"></progress></div><div class="wrapper"><header class="main-header"></header><div class="main-wrapper"><main class="main-content"><section class="section text-center"><h1 class="section__title">PUG шаблон</h1><div class="scroller"><div class="scroller__list"><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div><div class="scroller__item"></div></div></div><picture class="section__img section__img_medium"><source srcset="' +
((__t = (__webpack_require__(5786))) == null ? '' : __t) +
'" type="image/webp"><img src="' +
((__t = (__webpack_require__(3676))) == null ? '' : __t) +
'" srcset="' +
((__t = (__webpack_require__(3676))) == null ? '' : __t) +
', ' +
((__t = (__webpack_require__(3040))) == null ? '' : __t) +
' 2x" alt="logo"></picture><br><img class="section__img section__img_small" src="' +
((__t = (__webpack_require__(9152))) == null ? '' : __t) +
'" srcset="' +
((__t = (__webpack_require__(9152))) == null ? '' : __t) +
', ' +
((__t = (__webpack_require__(5736))) == null ? '' : __t) +
' 2x" alt="logo"><div id="vue-app"></div></section></main></div><footer class="main-footer"></footer></div></body></html>';

}
return __p
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216,179], () => (__webpack_exec__(1277)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=page-pug.d5d629.js.map