"use strict";
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [298],
  {
    642: function (e, a, l) {
      l.r(a);
      a.default = function () {
        var e = document.querySelectorAll(".js-play-video"),
          a = !1;
        e.forEach(function (e) {
          var l = e.querySelector("button");
          e.addEventListener("click", function () {
            a
              ? ((a = !1), l.pause(), e.classList.remove("playing"))
              : ((a = !0), l.play(), e.classList.add("playing"));
          });
        });
      };
    },
  },
]);
