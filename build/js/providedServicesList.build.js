"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [757],
  {
    619: function (e, t, n) {
      n.r(t);
      t.default = function () {
        var e = document
          .querySelector(".js-provided-services-list")
          .querySelectorAll(".js-provided-services-item");
        window.addEventListener("scroll", function () {
          e.forEach(function (e) {
            e.getBoundingClientRect().top >
              document.documentElement.clientHeight / 2 -
                e.getBoundingClientRect().height -
                16 &&
            e.getBoundingClientRect().top <
              document.documentElement.clientHeight / 2
              ? e.classList.add("active")
              : e.classList.remove("active");
          });
        });
      };
    },
  },
]);
