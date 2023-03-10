/*! For license information please see bouncer-validation.build.js.LICENSE.txt */
(self.webpackChunktde_webpack_boilerplate =
  self.webpackChunktde_webpack_boilerplate || []).push([
  [9],
  {
    838: function (e, t, r) {
      var n, a;
      "document" in self &&
        (("classList" in document.createElement("_") &&
          (!document.createElementNS ||
            "classList" in
              document.createElementNS("http://www.w3.org/2000/svg", "g"))) ||
          (function (e) {
            "use strict";
            if ("Element" in e) {
              var t = "classList",
                r = "prototype",
                n = e.Element[r],
                a = Object,
                i =
                  String[r].trim ||
                  function () {
                    return this.replace(/^\s+|\s+$/g, "");
                  },
                o =
                  Array[r].indexOf ||
                  function (e) {
                    for (var t = 0, r = this.length; t < r; t++)
                      if (t in this && this[t] === e) return t;
                    return -1;
                  },
                l = function (e, t) {
                  (this.name = e),
                    (this.code = DOMException[e]),
                    (this.message = t);
                },
                s = function (e, t) {
                  if ("" === t)
                    throw new l(
                      "SYNTAX_ERR",
                      "An invalid or illegal string was specified"
                    );
                  if (/\s/.test(t))
                    throw new l(
                      "INVALID_CHARACTER_ERR",
                      "String contains an invalid character"
                    );
                  return o.call(e, t);
                },
                u = function (e) {
                  for (
                    var t = i.call(e.getAttribute("class") || ""),
                      r = t ? t.split(/\s+/) : [],
                      n = 0,
                      a = r.length;
                    n < a;
                    n++
                  )
                    this.push(r[n]);
                  this._updateClassName = function () {
                    e.setAttribute("class", this.toString());
                  };
                },
                c = (u[r] = []),
                f = function () {
                  return new u(this);
                };
              if (
                ((l[r] = Error[r]),
                (c.item = function (e) {
                  return this[e] || null;
                }),
                (c.contains = function (e) {
                  return -1 !== s(this, (e += ""));
                }),
                (c.add = function () {
                  for (
                    var e, t = arguments, r = 0, n = t.length, a = !1;
                    (e = t[r] + ""),
                      -1 === s(this, e) && (this.push(e), (a = !0)),
                      ++r < n;

                  );
                  a && this._updateClassName();
                }),
                (c.remove = function () {
                  var e,
                    t,
                    r = arguments,
                    n = 0,
                    a = r.length,
                    i = !1;
                  do {
                    for (e = r[n] + "", t = s(this, e); -1 !== t; )
                      this.splice(t, 1), (i = !0), (t = s(this, e));
                  } while (++n < a);
                  i && this._updateClassName();
                }),
                (c.toggle = function (e, t) {
                  e += "";
                  var r = this.contains(e),
                    n = r ? !0 !== t && "remove" : !1 !== t && "add";
                  return n && this[n](e), !0 === t || !1 === t ? t : !r;
                }),
                (c.toString = function () {
                  return this.join(" ");
                }),
                a.defineProperty)
              ) {
                var d = { get: f, enumerable: !0, configurable: !0 };
                try {
                  a.defineProperty(n, t, d);
                } catch (e) {
                  (void 0 !== e.number && -2146823252 !== e.number) ||
                    ((d.enumerable = !1), a.defineProperty(n, t, d));
                }
              } else a[r].__defineGetter__ && n.__defineGetter__(t, f);
            }
          })(self),
        (function () {
          "use strict";
          var e = document.createElement("_");
          if ((e.classList.add("c1", "c2"), !e.classList.contains("c2"))) {
            var t = function (e) {
              var t = DOMTokenList.prototype[e];
              DOMTokenList.prototype[e] = function (e) {
                var r,
                  n = arguments.length;
                for (r = 0; r < n; r++) (e = arguments[r]), t.call(this, e);
              };
            };
            t("add"), t("remove");
          }
          if ((e.classList.toggle("c3", !1), e.classList.contains("c3"))) {
            var r = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function (e, t) {
              return 1 in arguments && !this.contains(e) == !t
                ? t
                : r.call(this, e);
            };
          }
          e = null;
        })()),
        Element.prototype.closest ||
          (Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          (Element.prototype.closest = function (e) {
            var t = this;
            if (!document.documentElement.contains(this)) return null;
            do {
              if (t.matches(e)) return t;
              t = t.parentElement;
            } while (null !== t);
            return null;
          })),
        (function () {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var r = document.createEvent("CustomEvent");
            return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r;
          }
          "function" != typeof window.CustomEvent &&
            ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        (a =
          void 0 !== r.g ? r.g : "undefined" != typeof window ? window : this),
        (n = function () {
          return (function (e) {
            "use strict";
            var t = {
                fieldClass: "error",
                errorClass: "error-message",
                fieldPrefix: "bouncer-field_",
                errorPrefix: "bouncer-error_",
                patterns: {
                  email:
                    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
                  url: /^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
                  number: /^(?:[-+]?[0-9]*[.,]?[0-9]+)$/,
                  color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
                  date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
                  time: /^(?:(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]))$/,
                  month: /^(?:(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])))$/,
                },
                customValidations: {},
                messageAfterField: !0,
                messageCustom: "data-bouncer-message",
                messageTarget: "data-bouncer-target",
                messages: {
                  missingValue: {
                    checkbox: "This field is required.",
                    radio: "Please select a value.",
                    select: "Please select a value.",
                    "select-multiple": "Please select at least one value.",
                    default: "Please fill out this field.",
                  },
                  patternMismatch: {
                    email: "Please enter a valid email address.",
                    url: "Please enter a URL.",
                    number: "Please enter a number",
                    color: "Please match the following format: #rrggbb",
                    date: "Please use the YYYY-MM-DD format",
                    time: "Please use the 24-hour time format. Ex. 23:00",
                    month: "Please use the YYYY-MM format",
                    default: "Please match the requested format.",
                  },
                  outOfRange: {
                    over: "Please select a value that is no more than {max}.",
                    under: "Please select a value that is no less than {min}.",
                  },
                  wrongLength: {
                    over: "Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.",
                    under:
                      "Please lengthen this text to {minLength} characters or more. You are currently using {length} characters.",
                  },
                  fallback: "There was an error with this field.",
                },
                disableSubmit: !1,
                emitEvents: !0,
              },
              r = function (e, t) {
                Array.prototype.forEach.call(e, t);
              },
              n = function () {
                var e = {};
                return (
                  r(arguments, function (t) {
                    for (var r in t) {
                      if (!t.hasOwnProperty(r)) return;
                      "[object Object]" === Object.prototype.toString.call(t[r])
                        ? (e[r] = n(e[r], t[r]))
                        : (e[r] = t[r]);
                    }
                  }),
                  e
                );
              },
              a = function (t, r, n) {
                if ("function" == typeof e.CustomEvent) {
                  var a = new CustomEvent(r, { bubbles: !0, detail: n || {} });
                  t.dispatchEvent(a);
                }
              },
              i = function (e, t) {
                return {
                  missingValue: (function (e) {
                    if (!e.hasAttribute("required")) return !1;
                    if ("checkbox" === e.type) return !e.checked;
                    var t = e.value.length;
                    return (
                      "radio" === e.type &&
                        (t = Array.prototype.filter.call(
                          e.form.querySelectorAll('[name="' + o(e.name) + '"]'),
                          function (e) {
                            return e.checked;
                          }
                        ).length),
                      t < 1
                    );
                  })(e),
                  patternMismatch:
                    ((r = e),
                    (n = t),
                    (a = r.getAttribute("pattern")),
                    !(
                      !(a = a
                        ? new RegExp("^(?:" + a + ")$")
                        : n.patterns[r.type]) ||
                      !r.value ||
                      r.value.length < 1 ||
                      r.value.match(a)
                    )),
                  outOfRange: (function (e) {
                    if (!e.value || e.value.length < 1) return !1;
                    var t = e.getAttribute("max"),
                      r = e.getAttribute("min"),
                      n = parseFloat(e.value);
                    return t && t < n ? "over" : !!(r && n < r) && "under";
                  })(e),
                  wrongLength: (function (e) {
                    if (!e.value || e.value.length < 1) return !1;
                    var t = e.getAttribute("maxlength"),
                      r = e.getAttribute("minlength"),
                      n = e.value.length;
                    return t && t < n ? "over" : !!(r && n < r) && "under";
                  })(e),
                };
                var r, n, a;
              },
              o = function (e) {
                for (
                  var t,
                    r = String(e),
                    n = r.length,
                    a = -1,
                    i = "",
                    o = r.charCodeAt(0);
                  ++a < n;

                ) {
                  if (0 === (t = r.charCodeAt(a)))
                    throw new InvalidCharacterError(
                      "Invalid character: the input contains U+0000."
                    );
                  i +=
                    (1 <= t && t <= 31) ||
                    127 == t ||
                    (0 === a && 48 <= t && t <= 57) ||
                    (1 === a && 48 <= t && t <= 57 && 45 === o)
                      ? "\\" + t.toString(16) + " "
                      : 128 <= t ||
                        45 === t ||
                        95 === t ||
                        (48 <= t && t <= 57) ||
                        (65 <= t && t <= 90) ||
                        (97 <= t && t <= 122)
                      ? r.charAt(a)
                      : "\\" + r.charAt(a);
                }
                return i;
              },
              l = function (e, t, r) {
                var n = e.name ? e.name : e.id;
                return (
                  !n &&
                    r &&
                    ((n = t.fieldPrefix + Math.floor(999 * Math.random())),
                    (e.id = n)),
                  "checkbox" === e.type && (n += "_" + (e.value || e.id)),
                  n
                );
              },
              s = function (e, t) {
                var r = document.createElement("div");
                (r.className = t.errorClass),
                  (r.id = t.errorPrefix + l(e, t, !0));
                var n = (function (e, t, r) {
                  var n = e.getAttribute(r.messageTarget);
                  if (n) {
                    var a = e.form.querySelector(n);
                    if (a)
                      return (
                        a.firstChild ||
                        a.appendChild(document.createTextNode(""))
                      );
                  }
                  return r.messageAfterField
                    ? (t.nextSibling ||
                        t.parentNode.appendChild(document.createTextNode("")),
                      t.nextSibling)
                    : t;
                })(
                  e,
                  (function (e) {
                    if ("radio" === e.type && e.name) {
                      var t = e.form.querySelectorAll(
                        '[name="' + o(e.name) + '"]'
                      );
                      e = t[t.length - 1];
                    }
                    return (
                      ("radio" !== e.type && "checkbox" !== e.type) ||
                        (e =
                          e.closest("label") ||
                          e.form.querySelector('[for="' + e.id + '"]') ||
                          e),
                      e
                    );
                  })(e),
                  t
                );
                return n.parentNode.insertBefore(r, n), r;
              },
              u = function (e, t, r) {
                e.classList.add(r.fieldClass),
                  e.setAttribute("aria-describedby", t.id),
                  e.setAttribute("aria-invalid", !0);
              },
              c = function (e, t, r) {
                var n,
                  i,
                  c,
                  f =
                    e.form.querySelector("#" + o(r.errorPrefix + l(e, r))) ||
                    s(e, r),
                  d = (function (e, t, r) {
                    var n = r.messages;
                    if (t.missingValue)
                      return n.missingValue[e.type] || n.missingValue.default;
                    if (t.outOfRange)
                      return n.outOfRange[t.outOfRange]
                        .replace("{max}", e.getAttribute("max"))
                        .replace("{min}", e.getAttribute("min"))
                        .replace("{length}", e.value.length);
                    if (t.wrongLength)
                      return n.wrongLength[t.wrongLength]
                        .replace("{maxLength}", e.getAttribute("maxlength"))
                        .replace("{minLength}", e.getAttribute("minlength"))
                        .replace("{length}", e.value.length);
                    if (t.patternMismatch)
                      return (
                        e.getAttribute(r.messageCustom) ||
                        n.patternMismatch[e.type] ||
                        n.patternMismatch.default
                      );
                    for (var a in r.customValidations)
                      if (r.customValidations.hasOwnProperty(a) && t[a] && n[a])
                        return n[a];
                    return n.fallback;
                  })(e, t, r);
                (f.textContent = "function" == typeof d ? d(e, r) : d),
                  (i = f),
                  (c = r),
                  "radio" === (n = e).type &&
                    n.name &&
                    Array.prototype.forEach.call(
                      document.querySelectorAll('[name="' + n.name + '"]'),
                      function (e) {
                        u(e, i, c);
                      }
                    ),
                  u(n, i, c),
                  r.emitEvents && a(e, "bouncerShowError", { errors: t });
              },
              f = function (e, t) {
                e.classList.remove(t.fieldClass),
                  e.removeAttribute("aria-describedby"),
                  e.removeAttribute("aria-invalid");
              },
              d = function (e, t) {
                var r,
                  n,
                  i = e.form.querySelector("#" + o(t.errorPrefix + l(e, t)));
                i &&
                  (i.parentNode.removeChild(i),
                  (n = t),
                  "radio" === (r = e).type && r.name
                    ? Array.prototype.forEach.call(
                        document.querySelectorAll('[name="' + r.name + '"]'),
                        function (e) {
                          f(e, n);
                        }
                      )
                    : f(r, n),
                  t.emitEvents && a(e, "bouncerRemoveError"));
              };
            return function (e, o) {
              var l,
                s,
                u = {
                  validate: function (e, t) {
                    if (
                      !e.disabled &&
                      !e.readOnly &&
                      "reset" !== e.type &&
                      "submit" !== e.type &&
                      "button" !== e.type
                    ) {
                      var r,
                        a,
                        o,
                        s = n(l, t || {}),
                        u =
                          ((o = i((r = e), (a = s))),
                          {
                            valid: !(function (e) {
                              for (var t in e) if (e[t]) return !0;
                              return !1;
                            })(
                              (o = (function (e, t, r, n) {
                                for (var a in r)
                                  r.hasOwnProperty(a) && (t[a] = r[a](e, n));
                                return t;
                              })(r, o, a.customValidations, a))
                            ),
                            errors: o,
                          });
                      if (!u.valid) return c(e, u.errors, s), u;
                      d(e, s);
                    }
                  },
                  validateAll: function (e) {
                    return Array.prototype.filter.call(
                      e.querySelectorAll("input, select, textarea"),
                      function (e) {
                        var t = u.validate(e);
                        return t && !t.valid;
                      }
                    );
                  },
                },
                f = function (t) {
                  t.target.form &&
                    t.target.form.matches(e) &&
                    u.validate(t.target);
                },
                m = function (t) {
                  t.target.form &&
                    t.target.form.matches(e) &&
                    t.target.classList.contains(l.fieldClass) &&
                    u.validate(t.target);
                },
                h = function (t) {
                  if (t.target.matches(e)) {
                    t.preventDefault();
                    var r = u.validateAll(t.target);
                    if (0 < r.length)
                      return (
                        r[0].focus(),
                        void a(t.target, "bouncerFormInvalid", { errors: r })
                      );
                    l.disableSubmit || t.target.submit(),
                      l.emitEvents && a(t.target, "bouncerFormValid");
                  }
                };
              return (
                (u.destroy = function () {
                  var t, n, i;
                  document.removeEventListener("blur", f, !0),
                    document.removeEventListener("input", m, !1),
                    document.removeEventListener("click", m, !1),
                    document.removeEventListener("submit", h, !1),
                    (t = e),
                    (n = l),
                    r(document.querySelectorAll(t), function (e) {
                      r(
                        e.querySelectorAll("input, select, textarea"),
                        function (e) {
                          d(e, n);
                        }
                      );
                    }),
                    (i = e),
                    r(document.querySelectorAll(i), function (e) {
                      e.removeAttribute("novalidate");
                    }),
                    l.emitEvents &&
                      a(document, "bouncerDestroyed", { settings: l }),
                    (l = null);
                }),
                (l = n(t, o || {})),
                (s = e),
                r(document.querySelectorAll(s), function (e) {
                  e.setAttribute("novalidate", !0);
                }),
                document.addEventListener("blur", f, !0),
                document.addEventListener("input", m, !1),
                document.addEventListener("click", m, !1),
                document.addEventListener("submit", h, !1),
                l.emitEvents &&
                  a(document, "bouncerInitialized", { settings: l }),
                u
              );
            };
          })(a);
        }.apply(t, [])),
        void 0 === n || (e.exports = n);
    },
  },
]);
