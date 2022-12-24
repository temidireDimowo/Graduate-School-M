"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [987],
  {
    785: function (e, i, t) {
      t.r(i);
      var s,
        r = t(532);
      r.ZP.use([r.tl, r.W_, r.gI]);
      i.default = function () {
        var e = document.querySelector(".js-provided-services-slider");
        if (e) {
          var i =
            (s = new r.ZP(".js-provided-services-slider", {
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
          if (i) {
            var t =
                app.helper.giveScreenWidth() > app.config.breakpoints.md
                  ? 48
                  : 32,
              n = "160px";
            app.helper.giveScreenWidth() > app.config.breakpoints.xs &&
              app.helper.giveScreenWidth() < app.config.breakpoints.lg &&
              (n = "".concat(
                Math.floor(e.clientWidth - s.slides[i].clientWidth) / 2 - t,
                "px"
              )),
              (s.slides[i].style.paddingRight = n);
          }
        }
      };
    },
  },
]);
