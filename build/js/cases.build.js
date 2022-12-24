"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [718],
  {
    700: function (e, s, t) {
      t.r(s);
      var i = t(532);
      i.ZP.use([i.tl, i.W_, i.gI]);
      s.default = function () {
        new i.ZP(".js-cases-slider", {
          grabCursor: !0,
          slidesPerView: "auto",
          spaceBetween: 16,
          maxBackfaceHiddenSlides: 2,
          slidesOffsetAfter: 120,
          breakpoints: {
            960: { spaceBetween: 32, slidesPerView: "3" },
            1440: { slidesPerView: "4" },
            1720: { slidesPerView: "5" },
          },
          pagination: {
            el: ".slider-controls__pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".slider-controls__button--next",
            prevEl: ".slider-controls__button--prev",
            disabledClass: "slider-controls__button--disabled",
          },
        });
      };
    },
  },
]);
