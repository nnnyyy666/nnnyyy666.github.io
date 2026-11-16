(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([["main"],{

/***/ "./config/entry/main.temp.js":
/*!***********************************!*\
  !*** ./config/entry/main.temp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/main.js */ "./src/scripts/main.js");
/* harmony import */ var _temp_temp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/temp/temp.js */ "./src/temp/temp.js");






/***/ }),

/***/ "./src/scripts/global/author.js":
/*!**************************************!*\
  !*** ./src/scripts/global/author.js ***!
  \**************************************/
/***/ (() => {

/* eslint-disable */
var author = {
  keyword: '',
  hasKeyword: function hasKeyword(e) {
    this.keyword += e.keyCode, 12 === this.keyword.length && ('858665827986' === this.keyword ? alert(decodeURI('by:%20%D0%AE%D1%80%D0%B8%D0%B9%20%D0%A3%D0%B2%D0%B0%D1%80%D0%BE%D0%B2')) : document.removeEventListener('keydown', this.hasKeyword));
  },
  hasKeydown: function hasKeydown() {
    var e = this;
    document.addEventListener('keydown', function (n) {
      'Escape' === n.code && (e.hasKeyword = e.hasKeyword.bind(e), document.addEventListener('keydown', e.hasKeyword));
    }, {
      once: !0
    });
  },
  init: function init() {
    this.hasKeydown();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  author.init();
});

/***/ }),

/***/ "./src/scripts/lazyload.js":
/*!*********************************!*\
  !*** ./src/scripts/lazyload.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */
(function (root, factory) {
  if (( false ? 0 : _typeof(exports)) === "object") {
    module.exports = factory(root);
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : this.window || this.global, function (root) {
  "use strict";

  if (true) {
    root = window;
  }

  var defaults = {
    src: "data-src",
    srcset: "data-srcset",
    selector: ".lazyload",
    root: null,
    rootMargin: "0px",
    threshold: 0
  };
  /**
   * Merge two or more objects. Returns a new object.
   * @private
   * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */

  var extend = function extend() {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;
    /* Check if a deep merge */

    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
      deep = arguments[0];
      i++;
    }
    /* Merge the object into the extended object */


    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          /* If deep merge and property is an object, merge properties */
          if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    /* Loop through each object and conduct a merge */


    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  function LazyLoad(images, options) {
    this.settings = extend(defaults, options || {});
    this.images = images || document.querySelectorAll(this.settings.selector);
    this.observer = null;
    this.init();
  }

  LazyLoad.prototype = {
    init: function init() {
      /* Without observers load everything and bail out early. */
      if (!root.IntersectionObserver) {
        this.loadImages();
        return;
      }

      var self = this;
      var observerConfig = {
        root: this.settings.root,
        rootMargin: this.settings.rootMargin,
        threshold: [this.settings.threshold]
      };
      this.observer = new IntersectionObserver(function (entries) {
        Array.prototype.forEach.call(entries, function (entry) {
          if (entry.isIntersecting) {
            self.observer.unobserve(entry.target);
            var src = entry.target.getAttribute(self.settings.src);
            var srcset = entry.target.getAttribute(self.settings.srcset);

            if ("img" === entry.target.tagName.toLowerCase()) {
              if (src) {
                entry.target.src = src;
              }

              if (srcset) {
                entry.target.srcset = srcset;
              }
            } else {
              entry.target.style.backgroundImage = "url(" + src + ")";
            }
          }
        });
      }, observerConfig);
      Array.prototype.forEach.call(this.images, function (image) {
        self.observer.observe(image);
      });
    },
    loadAndDestroy: function loadAndDestroy() {
      if (!this.settings) {
        return;
      }

      this.loadImages();
      this.destroy();
    },
    loadImages: function loadImages() {
      if (!this.settings) {
        return;
      }

      var self = this;
      Array.prototype.forEach.call(this.images, function (image) {
        var src = image.getAttribute(self.settings.src);
        var srcset = image.getAttribute(self.settings.srcset);

        if ("img" === image.tagName.toLowerCase()) {
          if (src) {
            image.src = src;
          }

          if (srcset) {
            image.srcset = srcset;
          }
        } else {
          image.style.backgroundImage = "url('" + src + "')";
        }
      });
    },
    destroy: function destroy() {
      if (!this.settings) {
        return;
      }

      this.observer.disconnect();
      this.settings = null;
    }
  };

  root.lazyload = function (images, options) {
    return new LazyLoad(images, options);
  };

  if (root.jQuery) {
    var $ = root.jQuery;

    $.fn.lazyload = function (options) {
      options = options || {};
      options.attribute = options.attribute || "data-src";
      new LazyLoad($.makeArray(this), options);
      return this;
    };
  }

  return LazyLoad;
});

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_global_author_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scripts/global/author.js */ "./src/scripts/global/author.js");
/* harmony import */ var _scripts_global_author_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_global_author_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_lazyload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/lazyload.js */ "./src/scripts/lazyload.js");
/* harmony import */ var _scripts_lazyload_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_lazyload_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_modules_ymap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/modules/ymap.js */ "./src/scripts/modules/ymap.js");
/* harmony import */ var _scripts_modules_ymap_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_modules_ymap_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_modules_menu_sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/scripts/modules/menu-sidebar.js */ "./src/scripts/modules/menu-sidebar.js");
/* harmony import */ var _scripts_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/scripts/modules/accordeon */ "./src/scripts/modules/accordeon.js");
/* harmony import */ var _scripts_modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/scripts/modules/tabs */ "./src/scripts/modules/tabs.js");
/* harmony import */ var _scripts_modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/scripts/modules/form */ "./src/scripts/modules/form.js");
/* harmony import */ var _scripts_modules_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/scripts/modules/cookies */ "./src/scripts/modules/cookies.js");
/* harmony import */ var _scripts_modules_agecheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/scripts/modules/agecheck */ "./src/scripts/modules/agecheck.js");
/* harmony import */ var _node_modules_vanilla_marquee_dist_vanilla_marquee__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/vanilla-marquee/dist/vanilla-marquee */ "./node_modules/vanilla-marquee/dist/vanilla-marquee.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _scripts_modules_viewport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/scripts/modules/viewport */ "./src/scripts/modules/viewport.js");
/* harmony import */ var _scripts_modules_product_sprite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/scripts/modules/product-sprite */ "./src/scripts/modules/product-sprite.js");
/* harmony import */ var _scripts_modules_circle_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/scripts/modules/circle-animation */ "./src/scripts/modules/circle-animation.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");







 //import { preloader } from "@/scripts/modules/preloader";




 //import { canvasBack } from "@/scripts/modules/canvas-back";
//import { model } from "@/scripts/modules/model";






 //preloader();

(0,_scripts_modules_cookies__WEBPACK_IMPORTED_MODULE_7__.cookies)();
(0,_scripts_modules_agecheck__WEBPACK_IMPORTED_MODULE_8__.agecheck)();
(0,_scripts_modules_menu_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.menuSidebar)();
(0,_scripts_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__.accordeon)();
lazyload();
(0,_scripts_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.tabs)();
(0,_scripts_modules_form__WEBPACK_IMPORTED_MODULE_6__.form)();
(0,_scripts_modules_circle_animation__WEBPACK_IMPORTED_MODULE_14__.circleAnimation)(); //canvasBack();

(0,_scripts_modules_viewport__WEBPACK_IMPORTED_MODULE_12__.viewport)();
(0,_scripts_modules_product_sprite__WEBPACK_IMPORTED_MODULE_13__.product)();
var animationCanvas = document.querySelectorAll(".js-animationCanvas");
animationCanvas.forEach(function (element) {
  model(element);
});
var marqueeList = document.querySelectorAll('.marquee');
marqueeList.forEach(function (marqueeEl) {
  new _node_modules_vanilla_marquee_dist_vanilla_marquee__WEBPACK_IMPORTED_MODULE_9__["default"](marqueeEl, {
    duplicated: true,
    css3easing: 'ease-out',
    speed: 80,
    gap: 30
  });
});
var swiper = new swiper__WEBPACK_IMPORTED_MODULE_10__["default"]('.swiperSingle', {
  // configure Swiper to use modules
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_11__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_11__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_11__.Autoplay],
  loop: true,
  spaceBetween: 15,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination--default",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next--default",
    prevEl: ".swiper-button-prev--default"
  }
});
var SwiperNews = new swiper__WEBPACK_IMPORTED_MODULE_10__["default"]('.js-news-swiper', {
  slidesPerView: '1',
  watchOverflow: true,
  spaceBetween: 20,
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_11__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_11__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_11__.Autoplay],
  navigation: {
    nextEl: ".js-news-swiper--next",
    prevEl: ".js-news-swiper--prev"
  },
  breakpoints: {
    576: {
      slidesPerView: 'auto'
    }
  }
});

/***/ }),

/***/ "./src/scripts/modules/accordeon.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/accordeon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordeon": () => (/* binding */ accordeon)
/* harmony export */ });


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function accordeon() {
  var accordeon = document.querySelectorAll('.js-accordeon');

  if (accordeon) {
    var _iterator = _createForOfIteratorHelper(accordeon),
        _step;

    try {
      var _loop = function _loop() {
        var el = _step.value;
        el.addEventListener('click', function () {
          var height = el.querySelector('.questions__accordeon-in').offsetHeight;

          if (el.classList.contains("questions__accordeon_open")) {
            el.classList.remove("questions__accordeon_open");
            el.querySelector('.questions__accordeon-hidden').style.height = 0;
          } else {
            if (document.querySelector('.questions__accordeon_open')) {
              document.querySelector('.questions__accordeon_open').querySelector('.questions__accordeon-hidden').style.height = 0;
              document.querySelector('.questions__accordeon_open').classList.remove("questions__accordeon_open");
            }

            el.classList.add("questions__accordeon_open");
            el.querySelector('.questions__accordeon-hidden').style.height = height + 40 + "px";
            window.addEventListener('resize', function (e) {
              var height = el.querySelector('.questions__accordeon-in').offsetHeight;
              el.querySelector('.questions__accordeon-hidden').style.height = height + 40 + "px";
            });
          }
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

/***/ }),

/***/ "./src/scripts/modules/agecheck.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/agecheck.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "agecheck": () => (/* binding */ agecheck)
/* harmony export */ });
var agecheck = function agecheck() {
  var ageBtn = document.querySelector(".js-agecheck-ok");
  var ageCheck = document.querySelector(".js-agecheck");
  var ageCheckBlock = document.querySelector(".agecheck__block");

  if (localStorage.getItem("agecheck") !== "true") {
    ageCheck.style.display = "flex";
  }

  ageBtn === null || ageBtn === void 0 ? void 0 : ageBtn.addEventListener("click", function () {
    ageCheck.classList.add("agecheck_hidden");
    localStorage.setItem("agecheck", "true");
    setTimeout(function () {
      ageCheck.style.display = "none";
    }, 400);
  });
};

/***/ }),

/***/ "./src/scripts/modules/circle-animation.js":
/*!*************************************************!*\
  !*** ./src/scripts/modules/circle-animation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circleAnimation": () => (/* binding */ circleAnimation)
/* harmony export */ });


function circleAnimation() {
  var element = document.querySelector('.product__tastes'); //if (element) {

  var cards = document.querySelectorAll('.tastes__card');
  var currentIndex = 0; // Функция для добавления и удаления класса .active

  function cycleActiveClass() {
    // Убираем класс .active у текущего элемента
    cards[currentIndex].classList.remove('active'); // Переходим к следующему элементу

    currentIndex = (currentIndex + 1) % cards.length; // Добавляем класс .active к следующему элементу

    cards[currentIndex].classList.add('active');
  } // Запускаем цикл с интервалом в 1 секунду


  if (cards.length > 0) {
    setInterval(cycleActiveClass, 2000);
  } // Инициализируем первый элемент с классом .active


  if (cards.length > 0) {
    cards[currentIndex].classList.add('active');
  } //}

}

/***/ }),

/***/ "./src/scripts/modules/cookies.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/cookies.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookies": () => (/* binding */ cookies)
/* harmony export */ });
var cookies = function cookies() {
  var cookies = document.querySelector('.js-cookies');

  if (cookies) {
    var getCookie = function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    };

    var cookiesBtn = cookies.querySelector('.cookies__btn');

    if (getCookie('agree') != 'true') {
      setTimeout(function () {
        cookies.classList.add('show');
      }, 2000);
    }

    cookiesBtn.addEventListener('click', function () {
      cookies.classList.remove('show');
      cookies.style.display = 'none';
      document.cookie = 'agree=true';
    });
  }
};

/***/ }),

/***/ "./src/scripts/modules/form.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function form() {
  // пример вылезания ошибок
  var callbackBtn = document.querySelectorAll(".js-callback-btn");
  var errors = document.querySelectorAll(".error-wrapper");

  var _iterator = _createForOfIteratorHelper(callbackBtn),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var btn = _step.value;
      btn.addEventListener("click", function (e) {
        event.preventDefault();

        var _iterator2 = _createForOfIteratorHelper(errors),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var error = _step2.value;
            error.classList.add("active");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/scripts/modules/menu-sidebar.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/menu-sidebar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuSidebar": () => (/* binding */ menuSidebar)
/* harmony export */ });


function menuSidebar() {
  var _document, _document2, _document3;

  var pushmenu = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  var links = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu] .sidebar__link');
  pushmenu === null || pushmenu === void 0 ? void 0 : pushmenu.addEventListener('click', function (e) {
    pushmenu.classList.toggle('open');
    menu.classList.toggle('show');
    document.querySelector('body').classList.toggle('no-scroll');
  });

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      pushmenu.classList.toggle('open');
      menu.classList.toggle('show');
      document.querySelector('body').classList.toggle('no-scroll');
    });
  }
}

/***/ }),

/***/ "./src/scripts/modules/product-sprite.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/product-sprite.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "product": () => (/* binding */ product)
/* harmony export */ });
//export default class{
var product = function product() {
  var jsAnimateProduct = document.querySelector(".js-animate-product");
  var inViewport = false;

  if (jsAnimateProduct) {
    var loadImage = function loadImage(img) {
      return new Promise(function (resolve, reject) {
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    var startAnimationProduct = function startAnimationProduct() {
      animationRepeat = 0;
      var timeEnd = totalFrames * (100 / animationSpeed);
      frameIndex = 0; //console.log(frameIndex);

      if (canvas) {
        //console.log("canvas");
        var animate = function animate() {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          currentSprite = frameIndex >= framesInSprite1 ? sprite2 : sprite1;
          cadr = frameIndex % framesInSprite1; //console.log(cadr);
          //console.log("index: " + frameIndex + " | " +cadr + " / " + totalFrames);

          ctx.drawImage(currentSprite, 0, cadr * spriteHeight, spriteWidth, spriteHeight, offsetX, offsetY, displayWidth, displayHeight);
          frameIndex++;

          if (frameIndex < totalFrames) {
            animationTimeout = setTimeout(animate, 100 / animationSpeed);
          } else {
            // Анимация завершена
            setTimeout(function () {
              pins.classList.add("product-pins--active");
            }, 200);
          }
        };

        //jsAnimateProduct.classList.remove('js-animate-product-ready');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        animate();
      }
    };

    var startAnimationTrigger = function startAnimationTrigger() {
      //console.log(inViewport, "inViewport");
      if (inViewport) {
        document.querySelector(".productCanvas").classList.remove('productCanvas--preview');
        document.querySelector(".productCanvas").classList.add('productCanvas--runner');
        startAnimationProduct();
        animationStarted = true; //removeEventListener('scroll', checkScroll, false); // Отключаем событие после запуска анимации
      }
    };

    var checkScroll = function checkScroll() {
      //console.log("checkScroll");
      //console.log(isElementInViewport(jsAnimateProductReady));
      if (!animationStarted && isElementInViewport(jsAnimateProductReady)) {
        //console.log(inViewport, "inViewport");
        inViewport = true;
        startAnimationTrigger(); // setTimeout(startAnimationProduct, 500);
      }
    };

    var isElementInViewport = function isElementInViewport(el) {
      var rect = el.getBoundingClientRect(); //console.log(rect, "rect");
      //console.log(window.innerHeight, "window.innerHeight");
      // console.log(document.documentElement.clientHeight, "document.documentElement.clientHeight");
      // console.log(window.innerWidth, "window.innerWidth");
      // console.log(document.documentElement.clientWidth, "document.documentElement.clientWidth");

      return parseInt(rect.top) >= 0 && parseInt(rect.left) >= 0 && parseInt(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) * (5 / 4) && parseInt(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
    };

    var jsAnimateProductReady = document.querySelector(".js-animate-product-ready");
    var pins = document.querySelector(".js-product-pins");
    var canvas = document.getElementById('productCanvas');
    canvas.classList.add("no-loaded");
    var ctx = canvas.getContext('2d');
    var sprite1 = new Image();
    var sprite2 = new Image();
    sprite1.src = canvas.dataset.spriteFirst;
    sprite2.src = canvas.dataset.spriteSecond;
    var spriteWidth = 750;
    var spriteHeight = 750;
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var displayWidth = spriteWidth * 1;
    var displayHeight = spriteHeight * 1;
    var offsetX = (canvasWidth - displayWidth) / 2;
    var offsetY = (canvasHeight - displayHeight) / 2;
    var currentSprite = sprite1;
    var frameIndex = 0;
    var framesInSprite1 = Number(canvas.dataset.countSprite); // Общее количество кадров в первом спрайте

    var framesInSprite2 = Number(canvas.dataset.countSprite); // Общее количество кадров во втором спрайте

    var totalFrames = framesInSprite1 + framesInSprite2; // Общее количество кадров в анимации

    var animationSpeed = canvas.dataset.animationSpeed;
    var animationStarted = true;
    var animationRepeat = 0;
    var animationTimeout;
    var cadr = 0;
    Promise.all([loadImage(sprite1), loadImage(sprite2)]).then(function () {
      console.log("Загрузили");
      canvas.classList.remove("no-loaded");
      startAnimationTrigger();
      animationStarted = false;
    }).catch(function () {// Если произошла ошибка загрузки изображений, отображаем первый кадр первого спрайта
      // ctx.drawImage(preview, 0, 0, spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight);
    });
    document.querySelector('.js-productCanvas').addEventListener('click', function () {
      if (animationRepeat == 1 && isElementInViewport(jsAnimateProductReady)) {
        //console.log( "animationRepeat" );
        console.log("frameIndex " + frameIndex);
        startAnimationTrigger();
      }
    });
    document.addEventListener("scroll", function () {
      if (canvas) {
        var canvasUp = jsAnimateProduct.offsetTop - window.innerHeight;
        var canvasDown = jsAnimateProduct.offsetTop + jsAnimateProduct.offsetHeight; //console.log(canvasUp + " || " + canvasDown);

        if (window.pageYOffset > canvasDown || window.pageYOffset < canvasUp) {
          frameIndex = 0;
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          currentSprite = sprite1;
          cadr = 0;
          ctx.drawImage(currentSprite, 0, cadr * spriteHeight, spriteWidth, spriteHeight, offsetX, offsetY, displayWidth, displayHeight);
          pins.classList.remove("product-pins--active");
          animationRepeat = 1;
          animationStarted = false;
          clearTimeout(animationTimeout);
        }
      }
    });
    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('touchmove', checkScroll, false);
    canvas.addEventListener('click', function (event) {
      var rect = canvas.getBoundingClientRect();
      var ratio = 750 / rect.height;
      var x = (event.clientX - rect.left) * ratio;
      var y = (event.clientY - rect.top) * ratio;
      console.log("Координаты клика относительно канваса: " + x + ", " + y);
    });
    canvas.addEventListener('mousemove', function (event) {
      var rect = canvas.getBoundingClientRect();
      var ratio = 750 / rect.height; // если канвас меньше

      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top; // console.log(y);
    });

    if (pins) {
      var productPins = pins.querySelectorAll(".product-pin");

      if (productPins.length > 0) {
        document.addEventListener("click", function (event) {
          var target = event.target;

          if (!target.classList.contains("product-pin")) {
            productPins.forEach(function (pin) {
              pin.classList.remove('product-pin--active');
            });
          }
        });
        productPins.forEach(function (pin) {
          pin.addEventListener("click", function () {
            productPins.forEach(function (pinDel) {
              pinDel.classList.remove('product-pin--active');
            });
            pin.classList.add('product-pin--active');
          });
        });
      }
    }
  } //	}

};

/***/ }),

/***/ "./src/scripts/modules/tabs.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/tabs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": () => (/* binding */ tabs)
/* harmony export */ });


function tabs() {
  var tabs = document.querySelectorAll(".js-tab-container");

  if (tabs.length) {
    tabs.forEach(function (tab) {
      var buttons = tab.querySelectorAll(".js-tab");
      var contents = tab.querySelectorAll(".js-tab-content");
      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          buttons.forEach(function (el) {
            return el.classList.remove("active");
          });
          button.classList.add("active");
          contents.forEach(function (content) {
            if (content.dataset.id === button.dataset.id) {
              content.classList.add("active");
            } else {
              content.classList.remove("active");
            }
          });
        });
      });
    });
  }
}

/***/ }),

/***/ "./src/scripts/modules/viewport.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/viewport.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewport": () => (/* binding */ viewport)
/* harmony export */ });
var viewport = function viewport() {
  var call = document.querySelector('.call');
  var whyUs = document.querySelector('.why-us');
  var whyUsItem = document.querySelector('.why-us-item');
  if (whyUs) addAnimationByScroll(whyUs);
  if (call) addAnimationByScroll(call);
  if (whyUsItem) addAnimationByScroll(whyUsItem);

  function addAnimationByScroll(el) {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return parseInt(rect.top) >= 0 && parseInt(rect.left) >= 0 && parseInt(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) * (5 / 4) && parseInt(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
    }

    function onVisibilityChange(el, callback) {
      var old_visible;
      return function () {
        var visible = isElementInViewport(el);

        if (visible != old_visible) {
          old_visible = visible;

          if (typeof callback == 'function') {
            callback(visible);
          }
        }
      };
    }

    var handler = onVisibilityChange(el, function (visible) {
      /* Your code go here */
      var animationBLock = el.querySelectorAll('.animation-fadeUp');
      animationBLock.forEach(function (element) {
        if (visible) {
          element.classList.add("animated");
        } else {
          if (element.classList.contains("loop")) {
            element.classList.remove("animated");
          }
        }
      });
    });
    addEventListener('scroll', handler, false);
  }
};

/***/ }),

/***/ "./src/scripts/modules/ymap.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/ymap.js ***!
  \*************************************/
/***/ (() => {

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.567988, 37.603738],
    zoom: 12
  });
  myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
  var myPlacemark = new ymaps.Placemark([55.567988, 37.603738], {
    balloonContent: '<div style="background: white"><p><b>NOQO</b></p><p>Москва, Симферопольское шоссе 3А, оф.408</p><p><b>График работы:</b> пн-пт.: 9:00-18:00</p></div>'
  });
  myMap.geoObjects.add(myPlacemark);
}

/***/ }),

/***/ "./src/temp/nav-layout/nav-layout-template.js":
/*!****************************************************!*\
  !*** ./src/temp/nav-layout/nav-layout-template.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var navLayoutTemplate = "\n\t<button type=\"button\">\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E HTML-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C</button>\n\t<nav>\n\t\t<b>\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F \u043F\u043E HTML-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C</b>\n\t\t<div>\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"index.html\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"page-pug.html\">PUG \u0428\u0430\u0431\u043B\u043E\u043D</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"page-html.html\">HTML \u0448\u0430\u0431\u043B\u043E\u043D</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"page-twig.html\">TWIG \u0448\u0430\u0431\u043B\u043E\u043D</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t<small><a href=\"https://github.com/uvarov-frontend/\" target=\"_blank\">by Yury Uvarov</a></small>\n";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navLayoutTemplate);

/***/ }),

/***/ "./src/temp/nav-layout/nav-layout.js":
/*!*******************************************!*\
  !*** ./src/temp/nav-layout/nav-layout.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_layout_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-layout-template */ "./src/temp/nav-layout/nav-layout-template.js");

var navLayout = {
  open: false,
  createNavLayout: function createNavLayout() {
    var layout = document.createElement('div');
    layout.className = 'layout-navigation';
    layout.innerHTML = _nav_layout_template__WEBPACK_IMPORTED_MODULE_0__["default"];
    document.body.append(layout);
  },
  openNavLayout: function openNavLayout() {
    document.body.classList.add('show-nav-layout');
    this.open = true;
  },
  closeNavLayout: function closeNavLayout() {
    document.body.classList.remove('show-nav-layout');
    this.open = false;
  },
  hasClick: function hasClick() {
    var _this = this;

    document.addEventListener('click', function (e) {
      if (e.target.closest('.layout-navigation button') && !_this.open) {
        _this.openNavLayout();
      } else if (e.target.closest('.layout-navigation button') && _this.open) {
        _this.closeNavLayout();
      } else if (!e.target.closest('.layout-navigation') && _this.open) {
        _this.closeNavLayout();
      }
    });
  },
  init: function init() {
    this.createNavLayout();
    this.hasClick();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  navLayout.init();
});

/***/ }),

/***/ "./src/temp/temp.js":
/*!**************************!*\
  !*** ./src/temp/temp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _temp_nav_layout_nav_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/temp/nav-layout/nav-layout.js */ "./src/temp/nav-layout/nav-layout.js");
/* harmony import */ var _temp_nav_layout_nav_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/temp/nav-layout/nav-layout.scss */ "./src/temp/nav-layout/nav-layout.scss");



/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/temp/nav-layout/nav-layout.scss":
/*!*********************************************!*\
  !*** ./src/temp/nav-layout/nav-layout.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./config/entry/main.temp.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map