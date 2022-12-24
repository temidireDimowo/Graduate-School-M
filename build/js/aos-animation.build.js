"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [138],
  {
    766: function (e, n, t) {
      t.r(n);
      var a = t(611),
        i = t.n(a);
      n.default = function () {
        i().init({
          easing: "ease-in-out",
          duration: 600,
          offset: 100,
          once: !0,
        }),
          document.querySelectorAll("[data-aos]").forEach(function (e) {
            e.addEventListener("transitionend", function () {
              e.classList.add("transition-end");
            });
          });
      };
    },
  },
]);
