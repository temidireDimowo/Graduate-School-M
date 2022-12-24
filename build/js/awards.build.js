"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [290],
  {
    656: function (e, t, n) {
      n.r(t);
      var r = n(532);
      r.ZP.use([r.tl, r.gI]);
      var i,
        s = !1,
        a = function () {
          if (app.helper.giveScreenWidth() < app.config.breakpoints.xl) {
            if (s) return;
            (s = !0),
              (i = new r.ZP(".js-awards-slider", {
                grabCursor: !0,
                slidesPerView: "auto",
                spaceBetween: 16,
                pagination: {
                  el: ".slider-controls__pagination",
                  type: "progressbar",
                },
                navigation: {
                  nextEl: ".slider-controls__button--next",
                  prevEl: ".slider-controls__button--prev",
                  disabledClass: "slider-controls__button--disabled",
                },
              }));
          } else void 0 !== i && (i.destroy(!0, !0), (s = !1));
        };
      t.default = function () {
        a(),
          window.addEventListener("resize", function () {
            a();
          });
      };
    },
  },
]);
