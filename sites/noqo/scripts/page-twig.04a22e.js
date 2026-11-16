(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([[585],{

/***/ 1323:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/react/components/Block/Block.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Block_module = ({"text":"text__dmiWV","img":"img__Nzjtm"});
;// CONCATENATED MODULE: ./src/react/components/Block/Block.jsx



var App = function App(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("p", {
    className: Block_module.text
  }, props.text), /*#__PURE__*/react.createElement("img", {
    className: Block_module.img,
    src: props.image,
    alt: props.text
  }));
};

/* harmony default export */ const Block = (App);
// EXTERNAL MODULE: ./src/img/react-logo.jpeg
var react_logo = __webpack_require__(2456);
var react_logo_default = /*#__PURE__*/__webpack_require__.n(react_logo);
;// CONCATENATED MODULE: ./src/react/App.jsx





var App_App = function App() {
  var text = 'React components';
  return /*#__PURE__*/react.createElement("section", {
    className: "section-react"
  }, /*#__PURE__*/react.createElement(Block, {
    text: text,
    image: (react_logo_default())
  }));
};

/* harmony default export */ const react_App = (App_App);
;// CONCATENATED MODULE: ./src/scripts/pages/page-twig.js



var AppSelector = document.querySelector('#react-app');
if (AppSelector) (0,client/* createRoot */.s)(AppSelector).render( /*#__PURE__*/react.createElement(react_App, null));
// EXTERNAL MODULE: ./src/templates/pages/page-twig.html.twig
var page_twig_html = __webpack_require__(6725);
;// CONCATENATED MODULE: ./config/entry/pages/page-twig.js





/***/ }),

/***/ 2456:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/react-logo.jpeg";

/***/ }),

/***/ 8278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/theme/logo.svg";

/***/ }),

/***/ 427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/webpack-logo.svg";

/***/ }),

/***/ 6725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="ru-RU">\n			\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="initial-scale=1.0, width=device-width">\n		<meta name="format-detection" content="telephone=no">\n		<title>TWIG шаблон</title>\n		<meta name="description" content="#">\n		<meta name="keywords" content="#">\n		' +
((__t = ( htmlWebpackPlugin.tags.headTags )) == null ? '' : __t) +
'\n\n		<link rel="preconnect" href="https://fonts.googleapis.com">\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n		<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">\n	</head>\n\n	<body>\n	<header class="header">\n	<div class="header__content">\n		<a href="/" class="header__logo">\n			<img src="' +
((__t = (__webpack_require__(8278))) == null ? '' : __t) +
'" alt="NOQO" class="" />\n		</a>\n		<nav class="header__nav">\n			<ul class="list-reset header__list">\n				<li>\n					<a href="./product.html" class="header__link">\n						Продукты <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-apps"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 7l6 0" /><path d="M17 4l0 6" /></svg>\n					</a>\n				</li>\n				<li>\n					<a href="./buy.html" class="header__link">\n						Где купить?\n					</a>\n				</li>\n				<li>\n					<a href="./about.html" class="header__link">\n						Партнерам\n					</a>\n				</li>\n				<li>\n					<a href="./news.html" class="header__link">\n						Новости\n					</a>\n				</li>\n			</ul>\n		</nav>\n		<button data-burger class="header__btn">\n			<div class="burger">\n				<div class="burger__line"></div>\n				<div class="burger__line"></div>\n			</div>\n\n		</button>\n	\n	</div>\n</header>\n\n<div class="sidebar" data-menu>\n	<div class="sidebar__content">\n	<ul class="list-reset sidebar__list">\n		<li>\n			<a href="./product.html" class="sidebar__link text-gradient">\n				Продукты\n			</a>\n		</li>\n		<li>\n			<a href="./buy.html" class="sidebar__link">\n				Где купить?\n			</a>\n		</li>\n		<li>\n			<a href="./about.html" class="sidebar__link">\n				Партнерам\n			</a>\n		</li>\n		<li>\n			<a href="./news.html" class="sidebar__link">\n				Новости\n			</a>\n		</li>\n\n	</ul>\n	<div class="sidebar__btn">\n		<a class="btn btn--xs" href="./index.html#callback" data-to="callback" id="footer_nav_pertners">\n			Стать партнером\n		</a>\n	</div>\n	</div>\n</div>\n\n		<div class="wrapper">\n\n			\n			<div class="main-wrapper">\n				<main class="main-content">\n					\n					\n					<section class="section text-center">\n						<h1 class="section__title">TWIG шаблон</h1>\n						<img src="' +
((__t = (__webpack_require__(427))) == null ? '' : __t) +
'" alt="logo" class="section__img section__img_big">\n\n						<div id="react-app"></div>\n					</section>\n\n				</main>\n			</div>\n\n\n\n			\n		</div>\n		<footer class="footer">\n	<div class="container">\n		<div class="footer__wrapper">\n			<div class="footer__left">\n				<a href="/" class="footer__logo">\n					<img src="' +
((__t = (__webpack_require__(8278))) == null ? '' : __t) +
'" alt="NOQO" class="" />\n				</a>\n				<div class="footer__copyright">\n					2025. Noqo, все права защищены\n				</div>\n			</div>\n			<div class="footer__menu">\n				<div class="footer__nav">\n				<ul>\n					<li>\n						<a href="#">NOQO Mini</a>\n					</li>\n					<li>\n						<a href="#">NOQO Nasty</a>\n					</li>\n					<li>\n						<a href="#">NOQO</a>\n					</li>\n				</ul>\n			</div>\n\n			<div class="footer__nav">\n				<ul>\n					<li>\n						<a href="./product.html">Продукты</a>\n					</li>\n					<li>\n						<a href="./buy.html">Где купить</a>\n					</li>\n					<li>\n						<a href="./about.html">Партнерам</a>\n					</li>\n					<li>\n						<a href="./news.html">Новости</a>\n					</li>\n				</ul>\n			</div>\n			</div>\n\n			<div class="footer__right">\n				<div class="footer__connect">\n					<a href="tel:84950110969" class="footer__phone text-gradient">\n						8 (495) 011 09 69\n					</a>\n					<a target="_blank" href="https://t.me/B5vape_bot" rel="nofollow noopener" aria-label="telegram" class="footer__social footer__social_tg">\n						<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n	<path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="currentColor"/>\n</svg>\n					</a>\n\n				</div>\n				<div class="footer__btn">\n					<a class="footer__link-partner" href="./index.html#callback" data-to="callback" id="footer_nav_pertners">\n						<span class="footer__link-partner-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>\n</span>\n						Стать партнером\n					</a>\n				</div>\n			</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n		\n\n\n\n		</div>\n	</div>\n</footer>\n	</body>\n\n</html>\n';

}
return __p
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216,179], () => (__webpack_exec__(1323)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=page-twig.04a22e.js.map