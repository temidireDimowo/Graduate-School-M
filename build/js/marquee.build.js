"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [605],
  {
    402: function (e, n, t) {
      t.r(n);
      n.default = function () {
        var e = document.querySelectorAll(".js-marquee"),
          n = document.querySelectorAll(".js-marquee-reverse");
        e &&
          n &&
          (e.forEach(function (e) {
            var n = e.querySelector(".marquee");
            window.addEventListener("scroll", function () {
              n.getBoundingClientRect().top < window.innerHeight &&
                n.getBoundingClientRect().bottom > 0 &&
                (e.scrollLeft =
                  (window.innerHeight - n.getBoundingClientRect().top) *
                  ((n.getBoundingClientRect().width - window.innerWidth) /
                    (window.innerHeight + n.getBoundingClientRect().height)) *
                  0.25);
            });
          }),
          n.forEach(function (e) {
            var n = e.querySelector(".marquee");
            (e.scrollLeft = n.getBoundingClientRect().width),
              window.addEventListener("scroll", function () {
                n.getBoundingClientRect().top < window.innerHeight &&
                  n.getBoundingClientRect().bottom > 0 &&
                  (e.scrollLeft =
                    n.getBoundingClientRect().width -
                    window.innerWidth -
                    (window.innerHeight - n.getBoundingClientRect().top) *
                      ((n.getBoundingClientRect().width - window.innerWidth) /
                        (window.innerHeight +
                          n.getBoundingClientRect().height)) *
                      0.25);
              });
          }));
      };
    },
  },
]);
