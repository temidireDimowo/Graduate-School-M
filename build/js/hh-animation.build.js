"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [876],
  {
    874: function (e, t, n) {
      n.r(t);
      var a = function () {
        document.body.classList.add("hide-hero-intro-animation");
      };
      t.default = function () {
        var e = document.querySelector(".js-hh"),
          t = document.querySelector(".hh__content__title"),
          n = document.querySelector(".js-hh-wrapper video"),
          o = 0,
          i = !1;
        n.addEventListener("play", function () {
          i ||
            ((i = !0),
            (e.dataset.play = "true"),
            app.helper.sessionStorage.getItem("introAnimationPlayed")
              ? a()
              : setTimeout(function () {
                  setInterval(function () {
                    o < 3
                      ? ((o += 1), e.classList.add("animate-step-".concat(o)))
                      : ((o = 4),
                        setTimeout(function () {
                          e.classList.add("animate-out"),
                            app.helper.sessionStorage.setItem(
                              "introAnimationPlayed",
                              "true"
                            );
                        }, 200)),
                      (t.dataset.step = o);
                  }, 1e3);
                }, 500));
        }),
          n.play(),
          setTimeout(function () {
            i ||
              (app.helper.sessionStorage.setItem(
                "introAnimationPlayed",
                "true"
              ),
              a());
          }, 2500);
      };
    },
  },
]);
