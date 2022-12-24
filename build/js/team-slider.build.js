"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [724],
  {
    439: function (e, t, s) {
      s.r(t);
      var n = s(532);
      n.ZP.use([n.tl, n.W_]);
      t.default = function () {
        new n.ZP(".js-team-slider", {
          grabCursor: !0,
          slidesPerView: "auto",
          spaceBetween: 16,
          breakpoints: { 960: { spaceBetween: 32 } },
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
