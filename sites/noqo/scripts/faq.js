(self["webpackChunkwebpack_5_frontend_starter"] = self["webpackChunkwebpack_5_frontend_starter"] || []).push([["faq"],{

/***/ "./config/entry/pages/faq.js":
/*!***********************************!*\
  !*** ./config/entry/pages/faq.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_pages_faq_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/pages/faq.scss */ "./src/styles/pages/faq.scss");
/* harmony import */ var _scripts_pages_faq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/pages/faq.js */ "./src/scripts/pages/faq.js");
/* harmony import */ var _scripts_pages_faq_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_pages_faq_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_pages_faq_html_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/templates/pages/faq.html.twig */ "./src/templates/pages/faq.html.twig");
/* harmony import */ var _templates_pages_faq_html_twig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_pages_faq_html_twig__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./src/scripts/pages/faq.js":
/*!**********************************!*\
  !*** ./src/scripts/pages/faq.js ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./src/img/theme/logo.svg":
/*!********************************!*\
  !*** ./src/img/theme/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/theme/logo.svg";

/***/ }),

/***/ "./src/styles/pages/faq.scss":
/*!***********************************!*\
  !*** ./src/styles/pages/faq.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/templates/pages/faq.html.twig":
/*!*******************************************!*\
  !*** ./src/templates/pages/faq.html.twig ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<!DOCTYPE html>\n<html lang="ru-RU">\n\n<head>\n	<meta charset="UTF-8">\n	<meta name="theme-color" content="#111111">\n	<meta http-equiv="X-UA-Compatible" content="ie=edge">\n	<meta name="viewport" content="width=device-width, initial-scale=1.0">\n	<meta name="format-detection" content="telephone=no">\n	<title>NOQO | Электронные сигареты</title>\n	<meta name="description" content="Официальный сайт электронных девайсов NOQO. Качественные продукты с разнообразной палитрой вкусов у тебя в кармане.">\n	<meta name="keywords" content="#">\n	<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml">\n\n\n	<link rel="preconnect" href="https://fonts.googleapis.com">\n	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">\n	<script src="https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU"></script>\n\n\n	<style>\n	#preloader {\n		position: fixed;\n		top: 0;\n		left: 0;\n		width: 100%;\n		height: 100%;\n		background-color: #000000;\n		display: flex;\n		justify-content: center;\n		align-items: center;\n		z-index: 9999;\n	}\n	#preloader.hide {\n		-webkit-animation: fadeOut 1s ease forwards;\n		animation: fadeOut 1s ease forwards;\n	}\n	.spinner {\n		display: block;\n		position: relative;\n		width: 150px;\n		height: 150px;\n		border-radius: 50%;\n		border: 3px solid transparent;\n		border-top-color: #9370DB;\n		-webkit-animation: spin 2s linear infinite;\n		animation: spin 2s linear infinite;\n\n\n	}\n\n	@media (max-width: 767px) {\n		.spinner {\n			width: 75px;\n			height: 75px;\n		}\n	}\n	.spinner:before {\n		content: "";\n		position: absolute;\n		top: 5px;\n		left: 5px;\n		right: 5px;\n		bottom: 5px;\n		border-radius: 50%;\n		border: 3px solid transparent;\n		border-top-color: #BA55D3;\n		-webkit-animation: spin 3s linear infinite;\n		animation: spin 3s linear infinite;\n	}\n	.spinner:after {\n		content: "";\n		position: absolute;\n		top: 15px;\n		left: 15px;\n		right: 15px;\n		bottom: 15px;\n		border-radius: 50%;\n		border: 3px solid transparent;\n		border-top-color: #FF00FF;\n		-webkit-animation: spin 1.5s linear infinite;\n		animation: spin 1.5s linear infinite;\n	}\n	@-webkit-keyframes spin {\n		0%   {\n			-webkit-transform: rotate(0deg);\n			-ms-transform: rotate(0deg);\n			transform: rotate(0deg);\n		}\n		100% {\n			-webkit-transform: rotate(360deg);\n			-ms-transform: rotate(360deg);\n			transform: rotate(360deg);\n		}\n	}\n	@keyframes spin {\n		0%   {\n			-webkit-transform: rotate(0deg);\n			-ms-transform: rotate(0deg);\n			transform: rotate(0deg);\n		}\n		100% {\n			-webkit-transform: rotate(360deg);\n			-ms-transform: rotate(360deg);\n			transform: rotate(360deg);\n		}\n	}\n\n	@keyframes fadeOut {\n		0% { opacity: 1; }\n		100% { opacity: 0; display: none; }\n	}\n</style>\n<script>\n	document.addEventListener("DOMContentLoaded", function () {\n		let time = 6; //6000\n\n		// Проверяем, был ли прелоадер уже отображен\n		if (localStorage.getItem("preloaderShown") !== "true") {\n			// Показать прелоадер\n			document.getElementById("preloader").style.display = "flex";\n			//document.getElementById("content").style.display = "none";\n\n			// Скрыть прелоадер и показать контент после задержки в 5 секунд\n			setTimeout(function () {\n				document.getElementById("preloader").classList.add("hide");\n				//		document.getElementById("preloader").style.display = "none";\n				//document.getElementById("content").style.display = "block";\n\n				// Сохранить информацию о том, что прелоадер был отображен\n				localStorage.setItem("preloaderShown", "true");\n			}, time);\n		} else {\n			time = 2000;\n			document.getElementById("preloader").style.display = "flex";\n			//document.getElementById("content").style.display = "none";\n\n			// Скрыть прелоадер и показать контент после задержки в 5 секунд\n			setTimeout(function () {\n				document.getElementById("preloader").classList.add("hide");\n				//			document.getElementById("preloader").style.display = "none";\n				//document.getElementById("content").style.display = "block";\n\n				// Сохранить информацию о том, что прелоадер был отображен\n				localStorage.setItem("preloaderShown", "true");\n			}, time);\n\n		}\n	});\n</script>\n</head>\n\n<body>\n<noindex>\n	<div class="preloader" id="preloader" >\n	<div class="spinner">\n	</div>\n</div>\n</noindex>\n<header class="header">\n	<div class="header__content">\n		<a href="/" class="header__logo">\n			<img src="' +
((__t = (__webpack_require__(/*! @/img/theme/logo.svg */ "./src/img/theme/logo.svg"))) == null ? '' : __t) +
'" alt="NOQO" class="" />\n		</a>\n		<nav class="header__nav">\n			<ul class="list-reset header__list">\n				<li>\n					<a href="./product.html" class="header__link">\n						Продукты <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-apps"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 7l6 0" /><path d="M17 4l0 6" /></svg>\n					</a>\n				</li>\n				<li>\n					<a href="./buy.html" class="header__link">\n						Где купить?\n					</a>\n				</li>\n				<li>\n					<a href="./about.html" class="header__link">\n						Партнерам\n					</a>\n				</li>\n				<li>\n					<a href="./news.html" class="header__link">\n						Новости\n					</a>\n				</li>\n			</ul>\n		</nav>\n		<button data-burger class="header__btn">\n			<div class="burger">\n				<div class="burger__line"></div>\n				<div class="burger__line"></div>\n			</div>\n\n		</button>\n	\n	</div>\n</header>\n\n<div class="sidebar" data-menu>\n	<div class="sidebar__content">\n	<ul class="list-reset sidebar__list">\n		<li>\n			<a href="./product.html" class="sidebar__link text-gradient">\n				Продукты\n			</a>\n		</li>\n		<li>\n			<a href="./buy.html" class="sidebar__link">\n				Где купить?\n			</a>\n		</li>\n		<li>\n			<a href="./about.html" class="sidebar__link">\n				Партнерам\n			</a>\n		</li>\n		<li>\n			<a href="./news.html" class="sidebar__link">\n				Новости\n			</a>\n		</li>\n\n	</ul>\n	<div class="sidebar__btn">\n		<a class="btn btn--xs" href="./index.html#callback" data-to="callback" id="footer_nav_pertners">\n			Стать партнером\n		</a>\n	</div>\n	</div>\n</div>\n\n<div class="site-container" id="content" >\n\n	<main class="main main--page">\n			<div class="container">\n		<h1 class="h1--page">\n			FAQ\n		</h1>\n		<div class="questions__box">\n						<div class="questions__accordeon js-accordeon">\n				<div class="questions__accordeon-title text-gradient-static-hover"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>\n  Как понять, что одноразовая электронная сигарета закончилась?</div>\n				<div class="questions__accordeon-hidden">\n					<div class="questions__accordeon-in">\n						<p>Существует несколько признаков, указывающих на то, что одноразовая электронная сигарета закончилась:</p><ul><li>Снижение количества или полное отсутствие пара. Вы заметите значительное уменьшение количества пара, вырабатываемого устройством.</li><li>Изменение вкуса. Вкус может стать слабым или пропасть совсем.</li><li>Мерцающий или мигающий индикатор. Некоторые одноразовые электронные сигареты имеют светодиодный индикатор, который может мигать или мерцать, когда устройство разряжено.</li><li>Тугая затяжка. Затяжка может стать более тугой или затрудненной, поскольку в устройстве заканчивается жидкость.</li><li>Горький привкус. Вы можете почувствовать горелый или горький привкус, когда жидкость заканчивается.</li><li>Отсутствие сопротивления. При затяжке вы можете не чувствовать сопротивления, как будто вы просто втягиваете воздух.</li></ul>\n					</div>\n				</div>\n			</div>\n						<div class="questions__accordeon js-accordeon">\n				<div class="questions__accordeon-title text-gradient-static-hover"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>\n  Что такое одноразовая электронная сигарета?</div>\n				<div class="questions__accordeon-hidden">\n					<div class="questions__accordeon-in">\n						Электронная сигарета, или вейп — это устройство, работающее от аккумулятора, которое нагревает жидкость, аэрозоли которой пользователь вдыхает через рот. В электронных сигаретах используются как никотиновые, так и безникотиновые жидкости, представляющие собой химические смеси различного состава.\n					</div>\n				</div>\n			</div>\n						<div class="questions__accordeon js-accordeon">\n				<div class="questions__accordeon-title text-gradient-static-hover"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>\n  Как правильно заряжать электронные сигареты?</div>\n				<div class="questions__accordeon-hidden">\n					<div class="questions__accordeon-in">\n						<p>Не оставляйте электронную сигарету на зарядке дольше, чем необходимо. </p><p>Если вы не используете электронную сигарету в течение длительного времени, рекомендуется заряжать ее хотя бы раз в несколько месяцев, чтобы сохранить срок службы аккумулятора.</p><p>Храните электронную сигарету и зарядное устройство в сухом и прохладном месте.</p><p></p><p><strong>Предупреждения:</strong></p><p>— Никогда не оставляйте электронную сигарету без присмотра во время зарядки.</p><p>— Не используйте поврежденные или неисправные зарядные устройства.</p>\n					</div>\n				</div>\n			</div>\n					</div>\n	</div>\n	</main>\n\n\n</div>\n<footer class="footer">\n	<div class="container">\n		<div class="footer__wrapper">\n			<div class="footer__left">\n				<a href="/" class="footer__logo">\n					<img src="' +
((__t = (__webpack_require__(/*! @/img/theme/logo.svg */ "./src/img/theme/logo.svg"))) == null ? '' : __t) +
'" alt="NOQO" class="" />\n				</a>\n				<div class="footer__copyright">\n					2025. Noqo, все права защищены\n				</div>\n			</div>\n			<div class="footer__menu">\n				<div class="footer__nav">\n				<ul>\n					<li>\n						<a href="#">NOQO Mini</a>\n					</li>\n					<li>\n						<a href="#">NOQO Nasty</a>\n					</li>\n					<li>\n						<a href="#">NOQO</a>\n					</li>\n				</ul>\n			</div>\n\n			<div class="footer__nav">\n				<ul>\n					<li>\n						<a href="./product.html">Продукты</a>\n					</li>\n					<li>\n						<a href="./buy.html">Где купить</a>\n					</li>\n					<li>\n						<a href="./about.html">Партнерам</a>\n					</li>\n					<li>\n						<a href="./news.html">Новости</a>\n					</li>\n				</ul>\n			</div>\n			</div>\n\n			<div class="footer__right">\n				<div class="footer__connect">\n					<a href="tel:84950110969" class="footer__phone text-gradient">\n						8 (495) 011 09 69\n					</a>\n					<a target="_blank" href="https://t.me/B5vape_bot" rel="nofollow noopener" aria-label="telegram" class="footer__social footer__social_tg">\n						<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n	<path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="currentColor"/>\n</svg>\n					</a>\n\n				</div>\n				<div class="footer__btn">\n					<a class="footer__link-partner" href="./index.html#callback" data-to="callback" id="footer_nav_pertners">\n						<span class="footer__link-partner-icon"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>\n</span>\n						Стать партнером\n					</a>\n				</div>\n			</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n		\n\n\n\n		</div>\n	</div>\n</footer>\n<div class="agecheck js-agecheck">\n	<div class="agecheck__block">\n		<img src="' +
((__t = (__webpack_require__(/*! @/img/theme/logo.svg */ "./src/img/theme/logo.svg"))) == null ? '' : __t) +
'" alt="NOQO" class="agecheck__logo" />\n		<div class="text-gradient agecheck__title">ВАМ БОЛЬШЕ 18&nbsp;ЛЕТ?</div>\n		<div class="agecheck__txt">Продукция, представленная на сайте, предназначена для лиц, достигших <nobr>18-летнего</nobr> возраста.</div>\n		<div class="agecheck__btn-wrap">\n		<button class="btn btn--lg agecheck__btn-ok js-agecheck-ok">ДА</button>\n		<a href="https://www.google.com/" class="btn btn--lg agecheck__btn-no js-agecheck-no">НЕТ, УЙТИ</a>\n		</div>\n	</div>\n</div>\n\n<noindex>\n	<div class="cookies js-cookies" >\n	<div class="cookies__title">Используем <b>cookies</b> для улучшения работы сайта. Оставаясь с нами, вы соглашаетесь на использование <a href="https://inflave.com/wp-content/uploads/2024/02/politika_konfidenczialnosti_i_obrabotki_personalnyh_dannyh_pri.pdf" target="_blank" class="cookies__link">файлов cookie</a></div>\n	<button class="btn-reset btn btn--xxs cookies__btn">ОК</button>\n</div>\n</noindex>\n\n' +
((__t = ( htmlWebpackPlugin.tags.headTags )) == null ? '' : __t) +
'\n\n</body>\n\n</html>\n';

}
return __p
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","main"], () => (__webpack_exec__("./config/entry/pages/faq.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=faq.js.map