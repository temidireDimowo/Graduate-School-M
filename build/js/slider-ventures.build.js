"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [59],
  {
    775: function (e, t, i) {
      i.r(t);
      var s,
        n = i(532);
      n.ZP.use([n.tl, n.W_, n.gI]);
      t.default = function () {
        var e = document.querySelector(".js-ventures-slider");
        if (e) {
          var t =
            (s = new n.ZP(".js-ventures-slider", {
              grabCursor: !0,
              slidesPerView: "auto",
              spaceBetween: 32,
              breakpoints: { 960: { spaceBetween: 16 } },
              pagination: {
                el: ".slider-controls__pagination",
                type: "progressbar",
              },
              navigation: {
                nextEl: ".slider-controls__button--next",
                prevEl: ".slider-controls__button--prev",
                disabledClass: "slider-controls__button--disabled",
              },
            })).slides.length - 1;
          if (t) {
            var i =
                app.helper.giveScreenWidth() > app.config.breakpoints.md
                  ? 48
                  : 32,
              r = "160px";
            app.helper.giveScreenWidth() > app.config.breakpoints.xs &&
              app.helper.giveScreenWidth() < app.config.breakpoints.lg &&
              (r = "".concat(
                Math.floor(e.clientWidth - s.slides[t].clientWidth) / 2 - i,
                "px"
              )),
              (s.slides[t].style.paddingRight = r);
          }
        }
      };
    },
  },
]);
