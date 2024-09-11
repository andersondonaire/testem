/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
function applyAnimation(n) {
    var t = 0;
    n.find(".is-animated").each(function() {
        $(this).data("animated") != "done" && (t > 0 && $(this).css("animation-delay", t + "s"), t = t + .2, $(this).removeClass("fadeOut"), $(this).hasClass("is-pulse") && $(this).addClass("pulse"), $(this).hasClass("is-bounceIn") && $(this).addClass("bounceIn"), $(this).hasClass("is-fadeIn") && $(this).addClass("fadeIn"), $(this).hasClass("is-fadeInDown") && $(this).addClass("fadeInDown"), $(this).hasClass("is-fadeInLeft") && $(this).addClass("fadeInLeft"), $(this).hasClass("is-fadeInRight") && $(this).addClass("fadeInRight"), $(this).hasClass("is-fadeInUp") && $(this).addClass("fadeInUp"), $(this).hasClass("is-flipInX") && $(this).addClass("flipInX"), $(this).hasClass("is-flipInY") && $(this).addClass("flipInY"), $(this).hasClass("is-slideInUp") && $(this).addClass("slideInUp"), $(this).hasClass("is-slideInDown") && $(this).addClass("slideInDown"), $(this).hasClass("is-slideInLeft") && $(this).addClass("slideInLeft"), $(this).hasClass("is-slideInRight") && $(this).addClass("slideInRight"), $(this).hasClass("is-zoomIn") && $(this).addClass("zoomIn"), $(this).hasClass("once") && $(this).data("animated", "done"))
    })
}

function removeAnimation(n) {
    n.find(".is-animated").each(function() {
        $(this).removeClass("pulse");
        $(this).removeClass("bounceIn");
        $(this).removeClass("fadeIn");
        $(this).removeClass("fadeInDown");
        $(this).removeClass("fadeInLeft");
        $(this).removeClass("fadeInRight");
        $(this).removeClass("fadeInUp");
        $(this).removeClass("flipInX");
        $(this).removeClass("flipInY");
        $(this).removeClass("slideInUp");
        $(this).removeClass("slideInDown");
        $(this).removeClass("slideInLeft");
        $(this).removeClass("slideInRight");
        $(this).removeClass("zoomIn");
        $(this).hasClass("once") || $(this).addClass("fadeOut")
    })
}

function applyAnimationSection(n) {
    var t = 0;
    n.hasClass("is-animated") && n.data("animated") != "done" && (t > 0 && n.css("animation-delay", t + "s"), t = t + .2, n.removeClass("fadeOut"), n.hasClass("is-pulse") && n.addClass("pulse"), n.hasClass("is-bounceIn") && n.addClass("bounceIn"), n.hasClass("is-fadeIn") && n.addClass("fadeIn"), n.hasClass("is-fadeInDown") && n.addClass("fadeInDown"), n.hasClass("is-fadeInLeft") && n.addClass("fadeInLeft"), n.hasClass("is-fadeInRight") && n.addClass("fadeInRight"), n.hasClass("is-fadeInUp") && n.addClass("fadeInUp"), n.hasClass("is-flipInX") && n.addClass("flipInX"), n.hasClass("is-flipInY") && n.addClass("flipInY"), n.hasClass("is-slideInUp") && n.addClass("slideInUp"), n.hasClass("is-slideInDown") && n.addClass("slideInDown"), n.hasClass("is-slideInLeft") && n.addClass("slideInLeft"), n.hasClass("is-slideInRight") && n.addClass("slideInRight"), n.hasClass("is-zoomIn") && n.addClass("zoomIn"), n.hasClass("once") && n.data("animated", "done"));
    n.find(".is-box.is-animated").each(function() {
        $(this).data("animated") != "done" && (t > 0 && $(this).css("animation-delay", t + "s"), t = t + .2, $(this).removeClass("fadeOut"), $(this).hasClass("is-pulse") && $(this).addClass("pulse"), $(this).hasClass("is-bounceIn") && $(this).addClass("bounceIn"), $(this).hasClass("is-fadeIn") && $(this).addClass("fadeIn"), $(this).hasClass("is-fadeInDown") && $(this).addClass("fadeInDown"), $(this).hasClass("is-fadeInLeft") && $(this).addClass("fadeInLeft"), $(this).hasClass("is-fadeInRight") && $(this).addClass("fadeInRight"), $(this).hasClass("is-fadeInUp") && $(this).addClass("fadeInUp"), $(this).hasClass("is-flipInX") && $(this).addClass("flipInX"), $(this).hasClass("is-flipInY") && $(this).addClass("flipInY"), $(this).hasClass("is-slideInUp") && $(this).addClass("slideInUp"), $(this).hasClass("is-slideInDown") && $(this).addClass("slideInDown"), $(this).hasClass("is-slideInLeft") && $(this).addClass("slideInLeft"), $(this).hasClass("is-slideInRight") && $(this).addClass("slideInRight"), $(this).hasClass("is-zoomIn") && $(this).addClass("zoomIn"), $(this).hasClass("once") && $(this).data("animated", "done"))
    })
}

function removeAnimationSection(n) {
    n.hasClass("is-animated") && (n.removeClass("pulse"), n.removeClass("bounceIn"), n.removeClass("fadeIn"), n.removeClass("fadeInDown"), n.removeClass("fadeInLeft"), n.removeClass("fadeInRight"), n.removeClass("fadeInUp"), n.removeClass("flipInX"), n.removeClass("flipInY"), n.removeClass("slideInUp"), n.removeClass("slideInDown"), n.removeClass("slideInLeft"), n.removeClass("slideInRight"), n.removeClass("zoomIn"), n.hasClass("once") || n.addClass("fadeOut"));
    n.find(".is-animated").each(function() {
        $(this).removeClass("pulse");
        $(this).removeClass("bounceIn");
        $(this).removeClass("fadeIn");
        $(this).removeClass("fadeInDown");
        $(this).removeClass("fadeInLeft");
        $(this).removeClass("fadeInRight");
        $(this).removeClass("fadeInUp");
        $(this).removeClass("flipInX");
        $(this).removeClass("flipInY");
        $(this).removeClass("slideInUp");
        $(this).removeClass("slideInDown");
        $(this).removeClass("slideInLeft");
        $(this).removeClass("slideInRight");
        $(this).removeClass("zoomIn");
        $(this).hasClass("once") || $(this).addClass("fadeOut")
    })
}

function loadScript(n, t) {
    var i = document.createElement("script");
    i.type = "text/javascript";
    i.readyState ? i.onreadystatechange = function() {
        (i.readyState == "loaded" || i.readyState == "complete") && (i.onreadystatechange = null, t())
    } : i.onload = function() {
        t()
    };
    i.src = n;
    document.body.appendChild(i)
}

function _extends() {
    return (_extends = Object.assign || function(n) {
        for (var i, r, t = 1; t < arguments.length; t++) {
            i = arguments[t];
            for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
        }
        return n
    }).apply(this, arguments)
}
var _typeof, windowIsDefined, zForms, zPopups;
! function(n, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : n.numeral = t()
}(this, function() {
    function e(n, t) {
        this._input = n;
        this._value = t
    }
    var n, i, r = {},
        f = {},
        u = {
            currentLocale: "en",
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: "0,0",
            scalePercentBy100: !0
        },
        t = {
            currentLocale: u.currentLocale,
            zeroFormat: u.zeroFormat,
            nullFormat: u.nullFormat,
            defaultFormat: u.defaultFormat,
            scalePercentBy100: u.scalePercentBy100
        };
    return n = function(u) {
            var f, o, s, h;
            if (n.isNumeral(u)) f = u.value();
            else if (0 === u || "undefined" == typeof u) f = 0;
            else if (null === u || i.isNaN(u)) f = null;
            else if ("string" == typeof u)
                if (t.zeroFormat && u === t.zeroFormat) f = 0;
                else if (t.nullFormat && u === t.nullFormat || !u.replace(/[^0-9]+/g, "").length) f = null;
            else {
                for (o in r)
                    if (h = "function" == typeof r[o].regexps.unformat ? r[o].regexps.unformat() : r[o].regexps.unformat, h && u.match(h)) {
                        s = r[o].unformat;
                        break
                    }
                s = s || n._.stringToNumber;
                f = s(u)
            } else f = Number(u) || null;
            return new e(u, f)
        }, n.version = "2.0.6", n.isNumeral = function(n) {
            return n instanceof e
        }, n._ = i = {
            numberToFormat: function(t, i, r) {
                var o, a, u, h, p, nt, c, s = f[n.options.currentLocale],
                    y = !1,
                    tt = !1,
                    w = 0,
                    e = "",
                    b = 1e12,
                    k = 1e9,
                    d = 1e6,
                    it = 1e3,
                    l = "",
                    v = !1,
                    g;
                if (t = t || 0, a = Math.abs(t), n._.includes(i, "(") ? (y = !0, i = i.replace(/[\(|\)]/g, "")) : (n._.includes(i, "+") || n._.includes(i, "-")) && (p = n._.includes(i, "+") ? i.indexOf("+") : 0 > t ? i.indexOf("-") : -1, i = i.replace(/[\+|\-]/g, "")), n._.includes(i, "a") && (o = i.match(/a(k|m|b|t)?/), o = o ? o[1] : !1, n._.includes(i, " a") && (e = " "), i = i.replace(new RegExp(e + "a[kmbt]?"), ""), a >= b && !o || "t" === o ? (e += s.abbreviations.trillion, t /= b) : b > a && a >= k && !o || "b" === o ? (e += s.abbreviations.billion, t /= k) : k > a && a >= d && !o || "m" === o ? (e += s.abbreviations.million, t /= d) : (d > a && a >= it && !o || "k" === o) && (e += s.abbreviations.thousand, t /= it)), n._.includes(i, "[.]") && (tt = !0, i = i.replace("[.]", ".")), u = t.toString().split(".")[0], h = i.split(".")[1], nt = i.indexOf(","), w = (i.split(".")[0].split(",")[0].match(/0/g) || []).length, h ? (n._.includes(h, "[") ? (h = h.replace("]", ""), h = h.split("["), l = n._.toFixed(t, h[0].length + h[1].length, r, h[1].length)) : l = n._.toFixed(t, h.length, r), u = l.split(".")[0], l = n._.includes(l, ".") ? s.delimiters.decimal + l.split(".")[1] : "", tt && 0 === Number(l.slice(1)) && (l = "")) : u = n._.toFixed(t, 0, r), e && !o && Number(u) >= 1e3 && e !== s.abbreviations.trillion) switch (u = String(Number(u) / 1e3), e) {
                    case s.abbreviations.thousand:
                        e = s.abbreviations.million;
                        break;
                    case s.abbreviations.million:
                        e = s.abbreviations.billion;
                        break;
                    case s.abbreviations.billion:
                        e = s.abbreviations.trillion
                }
                if (n._.includes(u, "-") && (u = u.slice(1), v = !0), u.length < w)
                    for (g = w - u.length; g > 0; g--) u = "0" + u;
                return nt > -1 && (u = u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + s.delimiters.thousands)), 0 === i.indexOf(".") && (u = ""), c = u + l + (e ? e : ""), y ? c = (y && v ? "(" : "") + c + (y && v ? ")" : "") : p >= 0 ? c = 0 === p ? (v ? "-" : "+") + c : c + (v ? "-" : "+") : v && (c = "-" + c), c
            },
            stringToNumber: function(n) {
                var u, i, e, r = f[t.currentLocale],
                    s = n,
                    o = {
                        thousand: 3,
                        million: 6,
                        billion: 9,
                        trillion: 12
                    };
                if (t.zeroFormat && n === t.zeroFormat) i = 0;
                else if (t.nullFormat && n === t.nullFormat || !n.replace(/[^0-9]+/g, "").length) i = null;
                else {
                    i = 1;
                    "." !== r.delimiters.decimal && (n = n.replace(/\./g, "").replace(r.delimiters.decimal, "."));
                    for (u in o)
                        if (e = new RegExp("[^a-zA-Z]" + r.abbreviations[u] + "(?:\\)|(\\" + r.currency.symbol + ")?(?:\\))?)?$"), s.match(e)) {
                            i *= Math.pow(10, o[u]);
                            break
                        }
                    i *= (n.split("-").length + Math.min(n.split("(").length - 1, n.split(")").length - 1)) % 2 ? 1 : -1;
                    n = n.replace(/[^0-9\.]+/g, "");
                    i *= Number(n)
                }
                return i
            },
            isNaN: function(n) {
                return "number" == typeof n && isNaN(n)
            },
            includes: function(n, t) {
                return -1 !== n.indexOf(t)
            },
            insert: function(n, t, i) {
                return n.slice(0, i) + t + n.slice(i)
            },
            reduce: function(n, t) {
                if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                var u, r = Object(n),
                    f = r.length >>> 0,
                    i = 0;
                if (3 === arguments.length) u = arguments[2];
                else {
                    for (; f > i && !(i in r);) i++;
                    if (i >= f) throw new TypeError("Reduce of empty array with no initial value");
                    u = r[i++]
                }
                for (; f > i; i++) i in r && (u = t(u, r[i], i, r));
                return u
            },
            multiplier: function(n) {
                var t = n.toString().split(".");
                return t.length < 2 ? 1 : Math.pow(10, t[1].length)
            },
            correctionFactor: function() {
                var n = Array.prototype.slice.call(arguments);
                return n.reduce(function(n, t) {
                    var r = i.multiplier(t);
                    return n > r ? n : r
                }, 1)
            },
            toFixed: function(n, t, i, r) {
                var u, e, o, f, s = n.toString().split("."),
                    h = t - (r || 0);
                return u = 2 === s.length ? Math.min(Math.max(s[1].length, h), t) : h, o = Math.pow(10, u), f = (i(n + "e+" + u) / o).toFixed(u), r > t - u && (e = new RegExp("\\.?0{1," + (r - (t - u)) + "}$"), f = f.replace(e, "")), f
            }
        }, n.options = t, n.formats = r, n.locales = f, n.locale = function(n) {
            return n && (t.currentLocale = n.toLowerCase()), t.currentLocale
        }, n.localeData = function(n) {
            if (!n) return f[t.currentLocale];
            if (n = n.toLowerCase(), !f[n]) throw new Error("Unknown locale : " + n);
            return f[n]
        }, n.reset = function() {
            for (var n in u) t[n] = u[n]
        }, n.zeroFormat = function(n) {
            t.zeroFormat = "string" == typeof n ? n : null
        }, n.nullFormat = function(n) {
            t.nullFormat = "string" == typeof n ? n : null
        }, n.defaultFormat = function(n) {
            t.defaultFormat = "string" == typeof n ? n : "0.0"
        }, n.register = function(n, t, i) {
            if (t = t.toLowerCase(), this[n + "s"][t]) throw new TypeError(t + " " + n + " already registered.");
            return this[n + "s"][t] = i, i
        }, n.validate = function(t, i) {
            var s, h, c, r, e, o, f, u;
            if ("string" != typeof t && (t += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", t)), t = t.trim(), t.match(/^\d+$/)) return !0;
            if ("" === t) return !1;
            try {
                f = n.localeData(i)
            } catch (l) {
                f = n.localeData(n.locale())
            }
            return c = f.currency.symbol, e = f.abbreviations, s = f.delimiters.decimal, h = "." === f.delimiters.thousands ? "\\." : f.delimiters.thousands, u = t.match(/^[^\d]+/), null !== u && (t = t.substr(1), u[0] !== c) ? !1 : (u = t.match(/[^\d]+$/), null !== u && (t = t.slice(0, -1), u[0] !== e.thousand && u[0] !== e.million && u[0] !== e.billion && u[0] !== e.trillion) ? !1 : (o = new RegExp(h + "{2}"), t.match(/[^\d.,]/g) ? !1 : (r = t.split(s), r.length > 2 ? !1 : r.length < 2 ? !!r[0].match(/^\d+.*\d$/) && !r[0].match(o) : 1 === r[0].length ? !!r[0].match(/^\d+$/) && !r[0].match(o) && !!r[1].match(/^\d+$/) : !!r[0].match(/^\d+.*\d$/) && !r[0].match(o) && !!r[1].match(/^\d+$/))))
        }, n.fn = e.prototype = {
            clone: function() {
                return n(this)
            },
            format: function(i, u) {
                var o, f, e, s = this._value,
                    h = i || t.defaultFormat;
                if (u = u || Math.round, 0 === s && null !== t.zeroFormat) f = t.zeroFormat;
                else if (null === s && null !== t.nullFormat) f = t.nullFormat;
                else {
                    for (o in r)
                        if (h.match(r[o].regexps.format)) {
                            e = r[o].format;
                            break
                        }
                    e = e || n._.numberToFormat;
                    f = e(s, h, u)
                }
                return f
            },
            value: function() {
                return this._value
            },
            input: function() {
                return this._input
            },
            set: function(n) {
                return this._value = Number(n), this
            },
            add: function(n) {
                function r(n, i) {
                    return n + Math.round(t * i)
                }
                var t = i.correctionFactor.call(null, this._value, n);
                return this._value = i.reduce([this._value, n], r, 0) / t, this
            },
            subtract: function(n) {
                function r(n, i) {
                    return n - Math.round(t * i)
                }
                var t = i.correctionFactor.call(null, this._value, n);
                return this._value = i.reduce([n], r, Math.round(this._value * t)) / t, this
            },
            multiply: function(n) {
                function t(n, t) {
                    var r = i.correctionFactor(n, t);
                    return Math.round(n * r) * Math.round(t * r) / Math.round(r * r)
                }
                return this._value = i.reduce([this._value, n], t, 1), this
            },
            divide: function(n) {
                function t(n, t) {
                    var r = i.correctionFactor(n, t);
                    return Math.round(n * r) / Math.round(t * r)
                }
                return this._value = i.reduce([this._value, n], t), this
            },
            difference: function(t) {
                return Math.abs(n(this._value).subtract(t).value())
            }
        }, n.register("locale", "en", {
            delimiters: {
                thousands: ",",
                decimal: "."
            },
            abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t"
            },
            ordinal: function(n) {
                var t = n % 10;
                return 1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"
            },
            currency: {
                symbol: "$"
            }
        }),
        function() {
            n.register("format", "bps", {
                regexps: {
                    format: /(BPS)/,
                    unformat: /(BPS)/
                },
                format: function(t, i, r) {
                    var u, f = n._.includes(i, " BPS") ? " " : "";
                    return t = 1e4 * t, i = i.replace(/\s?BPS/, ""), u = n._.numberToFormat(t, i, r), n._.includes(u, ")") ? (u = u.split(""), u.splice(-1, 0, f + "BPS"), u = u.join("")) : u = u + f + "BPS", u
                },
                unformat: function(t) {
                    return +(.0001 * n._.stringToNumber(t)).toFixed(15)
                }
            })
        }(),
        function() {
            var t = {
                    base: 1e3,
                    suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
                },
                i = {
                    base: 1024,
                    suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
                },
                u = t.suffixes.concat(i.suffixes.filter(function(n) {
                    return t.suffixes.indexOf(n) < 0
                })),
                r = u.join("|");
            r = "(" + r.replace("B", "B(?!PS)") + ")";
            n.register("format", "bytes", {
                regexps: {
                    format: /([0\s]i?b)/,
                    unformat: new RegExp(r)
                },
                format: function(r, u, f) {
                    var h, e, o, c, s = n._.includes(u, "ib") ? i : t,
                        l = n._.includes(u, " b") || n._.includes(u, " ib") ? " " : "";
                    for (u = u.replace(/\s?i?b/, ""), e = 0; e <= s.suffixes.length; e++)
                        if (o = Math.pow(s.base, e), c = Math.pow(s.base, e + 1), null === r || 0 === r || r >= o && c > r) {
                            l += s.suffixes[e];
                            o > 0 && (r /= o);
                            break
                        }
                    return h = n._.numberToFormat(r, u, f), h + l
                },
                unformat: function(r) {
                    var u, f, e = n._.stringToNumber(r);
                    if (e) {
                        for (u = t.suffixes.length - 1; u >= 0; u--) {
                            if (n._.includes(r, t.suffixes[u])) {
                                f = Math.pow(t.base, u);
                                break
                            }
                            if (n._.includes(r, i.suffixes[u])) {
                                f = Math.pow(i.base, u);
                                break
                            }
                        }
                        e *= f || 1
                    }
                    return e
                }
            })
        }(),
        function() {
            n.register("format", "currency", {
                regexps: {
                    format: /(\$)/
                },
                format: function(t, i, r) {
                    var e, s, f, o = n.locales[n.options.currentLocale],
                        u = {
                            before: i.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                            after: i.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                        };
                    for (i = i.replace(/\s?\$\s?/, ""), e = n._.numberToFormat(t, i, r), t >= 0 ? (u.before = u.before.replace(/[\-\(]/, ""), u.after = u.after.replace(/[\-\)]/, "")) : 0 > t && !n._.includes(u.before, "-") && !n._.includes(u.before, "(") && (u.before = "-" + u.before), f = 0; f < u.before.length; f++) switch (s = u.before[f]) {
                        case "$":
                            e = n._.insert(e, o.currency.symbol, f);
                            break;
                        case " ":
                            e = n._.insert(e, " ", f + o.currency.symbol.length - 1)
                    }
                    for (f = u.after.length - 1; f >= 0; f--) switch (s = u.after[f]) {
                        case "$":
                            e = f === u.after.length - 1 ? e + o.currency.symbol : n._.insert(e, o.currency.symbol, -(u.after.length - (1 + f)));
                            break;
                        case " ":
                            e = f === u.after.length - 1 ? e + " " : n._.insert(e, " ", -(u.after.length - (1 + f) + o.currency.symbol.length - 1))
                    }
                    return e
                }
            })
        }(),
        function() {
            n.register("format", "exponential", {
                regexps: {
                    format: /(e\+|e-)/,
                    unformat: /(e\+|e-)/
                },
                format: function(t, i, r) {
                    var u, e = "number" != typeof t || n._.isNaN(t) ? "0e+0" : t.toExponential(),
                        f = e.split("e");
                    return i = i.replace(/e[\+|\-]{1}0/, ""), u = n._.numberToFormat(Number(f[0]), i, r), u + "e" + f[1]
                },
                unformat: function(t) {
                    function u(t, i) {
                        var r = n._.correctionFactor(t, i);
                        return t * r * i * r / (r * r)
                    }
                    var r = n._.includes(t, "e+") ? t.split("e+") : t.split("e-"),
                        f = Number(r[0]),
                        i = Number(r[1]);
                    return i = n._.includes(t, "e-") ? i *= -1 : i, n._.reduce([f, Math.pow(10, i)], u, 1)
                }
            })
        }(),
        function() {
            n.register("format", "ordinal", {
                regexps: {
                    format: /(o)/
                },
                format: function(t, i, r) {
                    var u, e = n.locales[n.options.currentLocale],
                        f = n._.includes(i, " o") ? " " : "";
                    return i = i.replace(/\s?o/, ""), f += e.ordinal(t), u = n._.numberToFormat(t, i, r), u + f
                }
            })
        }(),
        function() {
            n.register("format", "percentage", {
                regexps: {
                    format: /(%)/,
                    unformat: /(%)/
                },
                format: function(t, i, r) {
                    var u, f = n._.includes(i, " %") ? " " : "";
                    return n.options.scalePercentBy100 && (t = 100 * t), i = i.replace(/\s?\%/, ""), u = n._.numberToFormat(t, i, r), n._.includes(u, ")") ? (u = u.split(""), u.splice(-1, 0, f + "%"), u = u.join("")) : u = u + f + "%", u
                },
                unformat: function(t) {
                    var i = n._.stringToNumber(t);
                    return n.options.scalePercentBy100 ? .01 * i : i
                }
            })
        }(),
        function() {
            n.register("format", "time", {
                regexps: {
                    format: /(:)/,
                    unformat: /(:)/
                },
                format: function(n) {
                    var i = Math.floor(n / 3600),
                        t = Math.floor((n - 3600 * i) / 60),
                        r = Math.round(n - 3600 * i - 60 * t);
                    return i + ":" + (10 > t ? "0" + t : t) + ":" + (10 > r ? "0" + r : r)
                },
                unformat: function(n) {
                    var t = n.split(":"),
                        i = 0;
                    return 3 === t.length ? (i += 3600 * Number(t[0]), i += 60 * Number(t[1]), i += Number(t[2])) : 2 === t.length && (i += 60 * Number(t[0]), i += Number(t[1])), Number(i)
                }
            })
        }(), n
});
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).Vue = t()
}(this, function() {
    "use strict";

    function t(n) {
        return null == n
    }

    function n(n) {
        return null != n
    }

    function u(n) {
        return !0 === n
    }

    function bi(n) {
        return "string" == typeof n || "number" == typeof n || "symbol" == typeof n || "boolean" == typeof n
    }

    function h(n) {
        return null !== n && "object" == typeof n
    }

    function v(n) {
        return "[object Object]" === tf.call(n)
    }

    function uh(n) {
        var t = parseFloat(String(n));
        return t >= 0 && Math.floor(t) === t && isFinite(n)
    }

    function rf(t) {
        return n(t) && "function" == typeof t.then && "function" == typeof t.catch
    }

    function uw(n) {
        return null == n ? "" : Array.isArray(n) || v(n) && n.toString === tf ? JSON.stringify(n, null, 2) : String(n)
    }

    function ki(n) {
        var t = parseFloat(n);
        return isNaN(t) ? n : t
    }

    function e(n, t) {
        for (var i = Object.create(null), u = n.split(","), r = 0; r < u.length; r++) i[u[r]] = !0;
        return t ? function(n) {
            return i[n.toLowerCase()]
        } : function(n) {
            return i[n]
        }
    }

    function rt(n, t) {
        if (n.length) {
            var i = n.indexOf(t);
            if (i > -1) return n.splice(i, 1)
        }
    }

    function c(n, t) {
        return ow.call(n, t)
    }

    function g(n) {
        var t = Object.create(null);
        return function(i) {
            return t[i] || (t[i] = n(i))
        }
    }

    function uf(n, t) {
        t = t || 0;
        for (var i = n.length - t, r = new Array(i); i--;) r[i] = n[i + t];
        return r
    }

    function i(n, t) {
        for (var i in t) n[i] = t[i];
        return n
    }

    function fh(n) {
        for (var r = {}, t = 0; t < n.length; t++) n[t] && i(r, n[t]);
        return r
    }

    function o() {}

    function gt(n, t) {
        var i, r, u, f, e, o;
        if (n === t) return !0;
        if (i = h(n), r = h(t), !i || !r) return !i && !r && String(n) === String(t);
        try {
            return (u = Array.isArray(n), f = Array.isArray(t), u && f) ? n.length === t.length && n.every(function(n, i) {
                return gt(n, t[i])
            }) : n instanceof Date && t instanceof Date ? n.getTime() === t.getTime() : u || f ? !1 : (e = Object.keys(n), o = Object.keys(t), e.length === o.length && e.every(function(i) {
                return gt(n[i], t[i])
            }))
        } catch (n) {
            return !1
        }
    }

    function oh(n, t) {
        for (var i = 0; i < n.length; i++)
            if (gt(n[i], t)) return i;
        return -1
    }

    function lr(n) {
        var t = !1;
        return function() {
            t || (t = !0, n.apply(this, arguments))
        }
    }

    function ei(n, t, i, r) {
        Object.defineProperty(n, t, {
            value: i,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }

    function hi(n) {
        return "function" == typeof n && /native code/.test(n.toString())
    }

    function yr(n) {
        nr.push(n);
        p.target = n
    }

    function pr() {
        nr.pop();
        p.target = nr[nr.length - 1]
    }

    function ci(n) {
        return new a(void 0, void 0, void 0, String(n))
    }

    function cf(n) {
        var t = new a(n.tag, n.data, n.children && n.children.slice(), n.text, n.elm, n.context, n.componentOptions, n.asyncFactory);
        return t.ns = n.ns, t.isStatic = n.isStatic, t.key = n.key, t.isComment = n.isComment, t.fnContext = n.fnContext, t.fnOptions = n.fnOptions, t.fnScopeId = n.fnScopeId, t.asyncMeta = n.asyncMeta, t.isCloned = !0, t
    }

    function vt(n) {
        wr = n
    }

    function ni(n, t) {
        var i;
        if (h(n) && !(n instanceof a)) return c(n, "__ob__") && n.__ob__ instanceof ir ? i = n.__ob__ : wr && !si() && (Array.isArray(n) || v(n)) && Object.isExtensible(n) && !n._isVue && (i = new ir(n)), t && i && i.vmCount++, i
    }

    function ti(n, t, i, r, u) {
        var h = new p,
            e = Object.getOwnPropertyDescriptor(n, t),
            f, o, s;
        e && !1 === e.configurable || (f = e && e.get, o = e && e.set, f && !o || 2 !== arguments.length || (i = n[t]), s = !u && ni(i), Object.defineProperty(n, t, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                var t = f ? f.call(n) : i;
                return p.target && (h.depend(), s && (s.dep.depend(), Array.isArray(t) && function n(t) {
                    for (var i = void 0, r = 0, u = t.length; r < u; r++)(i = t[r]) && i.__ob__ && i.__ob__.dep.depend(), Array.isArray(i) && n(i)
                }(t))), t
            },
            set: function(t) {
                var r = f ? f.call(n) : i;
                t === r || t != t && r != r || f && !o || (o ? o.call(n, t) : i = t, s = !u && ni(t), h.notify())
            }
        }))
    }

    function af(n, t, i) {
        if (Array.isArray(n) && uh(t)) return n.length = Math.max(n.length, t), n.splice(t, 1, i), i;
        if (t in n && !(t in Object.prototype)) return n[t] = i, i;
        var r = n.__ob__;
        return n._isVue || r && r.vmCount ? i : r ? (ti(r.value, t, i), r.dep.notify(), i) : (n[t] = i, i)
    }

    function ph(n, t) {
        if (Array.isArray(n) && uh(t)) n.splice(t, 1);
        else {
            var i = n.__ob__;
            n._isVue || i && i.vmCount || c(n, t) && (delete n[t], i && i.dep.notify())
        }
    }

    function vf(n, t) {
        if (!t) return n;
        for (var i, u, r, e = gi ? Reflect.ownKeys(t) : Object.keys(t), f = 0; f < e.length; f++) "__ob__" !== (i = e[f]) && (u = n[i], r = t[i], c(n, i) ? u !== r && v(u) && v(r) && vf(u, r) : af(n, i, r));
        return n
    }

    function yf(n, t, i) {
        return i ? function() {
            var r = "function" == typeof t ? t.call(i, i) : t,
                u = "function" == typeof n ? n.call(i, i) : n;
            return r ? vf(r, u) : u
        } : t ? n ? function() {
            return vf("function" == typeof t ? t.call(this, this) : t, "function" == typeof n ? n.call(this, this) : n)
        } : t : n
    }

    function kw(n, t) {
        var i = t ? n ? n.concat(t) : Array.isArray(t) ? t : [t] : n;
        return i ? function(n) {
            for (var i = [], t = 0; t < n.length; t++) - 1 === i.indexOf(n[t]) && i.push(n[t]);
            return i
        }(i) : i
    }

    function dw(n, t) {
        var r = Object.create(n || null);
        return t ? i(r, t) : r
    }

    function ii(n, t, r) {
        function s(i) {
            var u = tt[i] || wh;
            e[i] = u(n[i], t[i], r, i)
        }
        var f, o, u, e;
        if ("function" == typeof t && (t = t.options), function(n) {
                var t = n.props,
                    u, i, r, f;
                if (t) {
                    if (r = {}, Array.isArray(t))
                        for (u = t.length; u--;) "string" == typeof(i = t[u]) && (r[b(i)] = {
                            type: null
                        });
                    else if (v(t))
                        for (f in t) i = t[f], r[b(f)] = v(i) ? i : {
                            type: i
                        };
                    n.props = r
                }
            }(t), function(n) {
                var t = n.inject,
                    e, r, u, f;
                if (t)
                    if (e = n.inject = {}, Array.isArray(t))
                        for (r = 0; r < t.length; r++) e[t[r]] = {
                            from: t[r]
                        };
                    else if (v(t))
                    for (u in t) f = t[u], e[u] = v(f) ? i({
                        from: u
                    }, f) : {
                        from: f
                    }
            }(t), function(n) {
                var t = n.directives,
                    r, i;
                if (t)
                    for (r in t) i = t[r], "function" == typeof i && (t[r] = {
                        bind: i,
                        update: i
                    })
            }(t), !t._base && (t.extends && (n = ii(n, t.extends, r)), t.mixins))
            for (f = 0, o = t.mixins.length; f < o; f++) n = ii(n, t.mixins[f], r);
        e = {};
        for (u in n) s(u);
        for (u in t) c(n, u) || s(u);
        return e
    }

    function pf(n, t, i) {
        var r, u, f;
        if ("string" == typeof i) return (r = n[t], c(r, i)) ? r[i] : (u = b(i), c(r, u)) ? r[u] : (f = hw(u), c(r, f) ? r[f] : r[i] || r[u] || r[f])
    }

    function wf(n, t, i, r) {
        var f = t[n],
            h = !c(i, n),
            u = i[n],
            o = kh(Boolean, f.type),
            e, s;
        return o > -1 && (h && !c(f, "default") ? u = !1 : ("" === u || u === dt(n)) && (e = kh(String, f.type), (e < 0 || o < e) && (u = !0))), void 0 === u && (u = function(n, t, i) {
            if (c(t, "default")) {
                var r = t.default;
                return n && n.$options.propsData && void 0 === n.$options.propsData[i] && void 0 !== n._props[i] ? n._props[i] : "function" == typeof r && "Function" !== bf(t.type) ? r.call(n) : r
            }
        }(r, f, n), s = wr, vt(!0), ni(u), vt(s)), u
    }

    function bf(n) {
        var t = n && n.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : ""
    }

    function bh(n, t) {
        return bf(n) === bf(t)
    }

    function kh(n, t) {
        if (!Array.isArray(t)) return bh(t, n) ? 0 : -1;
        for (var i = 0, r = t.length; i < r; i++)
            if (bh(t[i], n)) return i;
        return -1
    }

    function ut(n, t, i) {
        var r, u, f;
        yr();
        try {
            if (t)
                for (r = t; r = r.$parent;)
                    if (u = r.$options.errorCaptured, u)
                        for (f = 0; f < u.length; f++) try {
                            if (!1 === u[f].call(r, n, t, i)) return
                        } catch (n) {
                            dh(n, r, "errorCaptured hook")
                        }
                    dh(n, t, i)
        } finally {
            pr()
        }
    }

    function br(n, t, i, r, u) {
        var f;
        try {
            (f = i ? n.apply(t, i) : n.call(t)) && !f._isVue && rf(f) && !f._handled && (f.catch(function(n) {
                return ut(n, r, u + " (Promise/async)")
            }), f._handled = !0)
        } catch (n) {
            ut(n, r, u)
        }
        return f
    }

    function dh(n, t, i) {
        if (y.errorHandler) try {
            return y.errorHandler.call(null, n, t, i)
        } catch (t) {
            t !== n && gh(t, null, "config.errorHandler")
        }
        gh(n, t, i)
    }

    function gh(n) {
        if (!l && !ef || "undefined" == typeof console) throw n;
        console.error(n)
    }

    function dr() {
        var t, n;
        for (gf = !1, t = df.slice(0), df.length = 0, n = 0; n < t.length; n++) t[n]()
    }

    function ne(n, t) {
        var i;
        if (df.push(function() {
                if (n) try {
                    n.call(t)
                } catch (n) {
                    ut(n, t, "nextTick")
                } else i && i(t)
            }), gf || (gf = !0, kr()), !n && "undefined" != typeof Promise) return new Promise(function(n) {
            i = n
        })
    }

    function nu(n) {
        ! function n(t, i) {
            var r, u, e = Array.isArray(t),
                f;
            if ((e || h(t)) && !Object.isFrozen(t) && !(t instanceof a)) {
                if (t.__ob__) {
                    if (f = t.__ob__.dep.id, i.has(f)) return;
                    i.add(f)
                }
                if (e)
                    for (r = t.length; r--;) n(t[r], i);
                else
                    for (u = Object.keys(t), r = u.length; r--;) n(t[u[r]], i)
            }
        }(n, te);
        te.clear()
    }

    function re(n, t) {
        function i() {
            var f = arguments,
                r = i.fns,
                u, n;
            if (!Array.isArray(r)) return br(r, null, arguments, t, "v-on handler");
            for (u = r.slice(), n = 0; n < u.length; n++) br(u[n], null, f, t, "v-on handler")
        }
        return i.fns = n, i
    }

    function ic(n, i, r, f, e, o) {
        var s, h, l, c;
        for (s in n) h = n[s], l = i[s], c = ie(s), t(h) || (t(l) ? (t(h.fns) && (h = n[s] = re(h, o)), u(c.once) && (h = n[s] = e(c.name, h, c.capture)), r(c.name, h, c.capture, c.passive, c.params)) : h !== l && (l.fns = h, n[s] = l));
        for (s in i) t(n[s]) && f((c = ie(s)).name, i[s], c.capture)
    }

    function yt(i, r, f) {
        function s() {
            f.apply(this, arguments);
            rt(e.fns, s)
        }
        var e, o;
        i instanceof a && (i = i.data.hook || (i.data.hook = {}));
        o = i[r];
        t(o) ? e = re([s]) : n(o.fns) && u(o.merged) ? (e = o).fns.push(s) : e = re([o, s]);
        e.merged = !0;
        i[r] = e
    }

    function rc(t, i, r, u, f) {
        if (n(i)) {
            if (c(i, r)) return t[r] = i[r], f || delete i[r], !0;
            if (c(i, u)) return t[r] = i[u], f || delete i[u], !0
        }
        return !1
    }

    function ue(i) {
        return bi(i) ? [ci(i)] : Array.isArray(i) ? function i(r, f) {
            for (var o = [], e, c, s, h = 0; h < r.length; h++) t(e = r[h]) || "boolean" == typeof e || (c = o.length - 1, s = o[c], Array.isArray(e) ? e.length > 0 && (rr((e = i(e, (f || "") + "_" + h))[0]) && rr(s) && (o[c] = ci(s.text + e[0].text), e.shift()), o.push.apply(o, e)) : bi(e) ? rr(s) ? o[c] = ci(s.text + e) : "" !== e && o.push(ci(e)) : rr(e) && rr(s) ? o[c] = ci(s.text + e.text) : (u(r._isVList) && n(e.tag) && t(e.key) && n(f) && (e.key = "__vlist" + f + "_" + h + "__"), o.push(e)));
            return o
        }(i) : void 0
    }

    function rr(t) {
        return n(t) && n(t.text) && !1 === t.isComment
    }

    function uc(n, t) {
        var r, o, i, u;
        if (n) {
            for (var f = Object.create(null), s = gi ? Reflect.ownKeys(n) : Object.keys(n), e = 0; e < s.length; e++)
                if (r = s[e], "__ob__" !== r) {
                    for (o = n[r].from, i = t; i;) {
                        if (i._provided && c(i._provided, o)) {
                            f[r] = i._provided[o];
                            break
                        }
                        i = i.$parent
                    }!i && "default" in n[r] && (u = n[r].default, f[r] = "function" == typeof u ? u.call(t) : u)
                }
            return f
        }
    }

    function fe(n, t) {
        var r, u, o, f, s;
        if (!n || !n.length) return {};
        for (var i = {}, e = 0, h = n.length; e < h; e++) r = n[e], u = r.data, (u && u.attrs && u.attrs.slot && delete u.attrs.slot, (r.context === t || r.fnContext === t) && u && null != u.slot) ? (o = u.slot, f = i[o] || (i[o] = []), "template" === r.tag ? f.push.apply(f, r.children || []) : f.push(r)) : (i.default || (i.default = [])).push(r);
        for (s in i) i[s].every(nb) && delete i[s];
        return i
    }

    function nb(n) {
        return n.isComment && !n.asyncFactory || " " === n.text
    }

    function tu(n, t, i) {
        var r, e = Object.keys(t).length > 0,
            o = n ? !!n.$stable : !e,
            s = n && n.$key,
            u, f;
        if (n) {
            if (n._normalized) return n._normalized;
            if (o && i && i !== w && s === i.$key && !e && !i.$hasNormal) return i;
            for (u in r = {}, n) n[u] && "$" !== u[0] && (r[u] = tb(t, u, n[u]))
        } else r = {};
        for (f in t) f in r || (r[f] = ib(t, f));
        return n && Object.isExtensible(n) && (n._normalized = r), ei(r, "$stable", o), ei(r, "$key", s), ei(r, "$hasNormal", e), r
    }

    function tb(n, t, i) {
        var r = function() {
            var n = arguments.length ? i.apply(null, arguments) : i({});
            if (!(n = n && "object" == typeof n && !Array.isArray(n) ? [n] : ue(n)) || 0 !== n.length && (1 !== n.length || !n[0].isComment)) return n
        };
        return i.proxy && Object.defineProperty(n, t, {
            get: r,
            enumerable: !0,
            configurable: !0
        }), r
    }

    function ib(n, t) {
        return function() {
            return n[t]
        }
    }

    function rb(t, i) {
        var u, r, f, e, s, c, o;
        if (Array.isArray(t) || "string" == typeof t)
            for (u = new Array(t.length), r = 0, f = t.length; r < f; r++) u[r] = i(t[r], r);
        else if ("number" == typeof t)
            for (u = new Array(t), r = 0; r < t; r++) u[r] = i(r + 1, r);
        else if (h(t))
            if (gi && t[Symbol.iterator])
                for (u = [], c = t[Symbol.iterator](), o = c.next(); !o.done;) u.push(i(o.value, u.length)), o = c.next();
            else
                for (e = Object.keys(t), u = new Array(e.length), r = 0, f = e.length; r < f; r++) s = e[r], u[r] = i(t[s], s, r);
        return n(u) || (u = []), u._isVList = !0, u
    }

    function ub(n, t, r, u) {
        var f, o = this.$scopedSlots[n],
            e;
        return o ? (r = r || {}, u && (r = i(i({}, u), r)), f = o(r) || t) : f = this.$slots[n] || t, e = r && r.slot, e ? this.$createElement("template", {
            slot: e
        }, f) : f
    }

    function fb(n) {
        return pf(this.$options, "filters", n) || eh
    }

    function fc(n, t) {
        return Array.isArray(n) ? -1 === n.indexOf(t) : n !== t
    }

    function eb(n, t, i, r, u) {
        var f = y.keyCodes[t] || i;
        return u && r && !y.keyCodes[t] ? fc(u, r) : f ? fc(f, n) : r ? dt(r) !== t : void 0
    }

    function ob(n, t, i, r, u) {
        var f, e, o;
        if (i && h(i)) {
            Array.isArray(i) && (i = fh(i));
            e = function(e) {
                var o, s, h;
                "class" === e || "style" === e || ew(e) ? f = n : (o = n.attrs && n.attrs.type, f = r || y.mustUseProp(t, o, e) ? n.domProps || (n.domProps = {}) : n.attrs || (n.attrs = {}));
                s = b(e);
                h = dt(e);
                s in f || h in f || (f[e] = i[e], u && ((n.on || (n.on = {}))["update:" + e] = function(n) {
                    i[e] = n
                }))
            };
            for (o in i) e(o)
        }
        return n
    }

    function sb(n, t) {
        var r = this._staticTrees || (this._staticTrees = []),
            i = r[n];
        return i && !t ? i : (ec(i = r[n] = this.$options.staticRenderFns[n].call(this._renderProxy, null, this), "__static__" + n, !1), i)
    }

    function hb(n, t, i) {
        return ec(n, "__once__" + t + (i ? "_" + i : ""), !0), n
    }

    function ec(n, t, i) {
        if (Array.isArray(n))
            for (var r = 0; r < n.length; r++) n[r] && "string" != typeof n[r] && oc(n[r], t + "_" + r, i);
        else oc(n, t, i)
    }

    function oc(n, t, i) {
        n.isStatic = !0;
        n.key = t;
        n.isOnce = i
    }

    function cb(n, t) {
        var u, r, f, e;
        if (t && v(t)) {
            u = n.on = n.on ? i({}, n.on) : {};
            for (r in t) f = u[r], e = t[r], u[r] = f ? [].concat(f, e) : e
        }
        return n
    }

    function sc(n, t, i, r) {
        var f, u;
        for (t = t || {
                $stable: !i
            }, f = 0; f < n.length; f++) u = n[f], Array.isArray(u) ? sc(u, t, i) : u && (u.proxy && (u.fn.proxy = !0), t[u.key] = u.fn);
        return r && (t.$key = r), t
    }

    function lb(n, t) {
        for (var r, i = 0; i < t.length; i += 2) r = t[i], "string" == typeof r && r && (n[t[i]] = t[i + 1]);
        return n
    }

    function ab(n, t) {
        return "string" == typeof n ? t + n : n
    }

    function hc(n) {
        n._o = hb;
        n._n = ki;
        n._s = uw;
        n._l = rb;
        n._t = ub;
        n._q = gt;
        n._i = oh;
        n._m = sb;
        n._f = fb;
        n._k = eb;
        n._b = ob;
        n._v = ci;
        n._e = at;
        n._u = sc;
        n._g = cb;
        n._d = lb;
        n._p = ab
    }

    function ee(n, t, i, r, f) {
        var o, s = this,
            e = f.options,
            h, l;
        c(r, "_uid") ? (o = Object.create(r))._original = r : (o = r, r = r._original);
        h = u(e._compiled);
        l = !h;
        this.data = n;
        this.props = t;
        this.children = i;
        this.parent = r;
        this.listeners = n.on || w;
        this.injections = uc(e.inject, r);
        this.slots = function() {
            return s.$slots || tu(n.scopedSlots, s.$slots = fe(i, r)), s.$slots
        };
        Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function() {
                return tu(n.scopedSlots, this.slots())
            }
        });
        h && (this.$options = e, this.$slots = this.slots(), this.$scopedSlots = tu(n.scopedSlots, this.$slots));
        this._c = e._scopeId ? function(n, t, i, u) {
            var f = ru(o, n, t, i, u, l);
            return f && !Array.isArray(f) && (f.fnScopeId = e._scopeId, f.fnContext = r), f
        } : function(n, t, i, r) {
            return ru(o, n, t, i, r, l)
        }
    }

    function cc(n, t, i, r) {
        var u = cf(n);
        return u.fnContext = i, u.fnOptions = r, t.slot && ((u.data || (u.data = {})).slot = t.slot), u
    }

    function lc(n, t) {
        for (var i in t) n[b(i)] = t[i]
    }

    function ac(i, r, f, e, o) {
        var s, c, l, p, v, y;
        if (!t(i) && (s = f.$options._base, h(i) && (i = s.extend(i)), "function" == typeof i)) return t(i.cid) && void 0 === (i = function(i, r) {
            var e;
            if (u(i.error) && n(i.errorComp)) return i.errorComp;
            if (n(i.resolved)) return i.resolved;
            if (e = uu, e && n(i.owners) && -1 === i.owners.indexOf(e) && i.owners.push(e), u(i.loading) && n(i.loadingComp)) return i.loadingComp;
            if (e && !n(i.owners)) {
                var o = i.owners = [e],
                    y = !0,
                    s = null,
                    c = null;
                e.$on("hook:destroyed", function() {
                    return rt(o, e)
                });
                var a = function(n) {
                        for (var t = 0, i = o.length; t < i; t++) o[t].$forceUpdate();
                        n && (o.length = 0, null !== s && (clearTimeout(s), s = null), null !== c && (clearTimeout(c), c = null))
                    },
                    v = lr(function(n) {
                        i.resolved = he(n, r);
                        y ? o.length = 0 : a(!0)
                    }),
                    l = lr(function() {
                        n(i.errorComp) && (i.error = !0, a(!0))
                    }),
                    f = i(v, l);
                return h(f) && (rf(f) ? t(i.resolved) && f.then(v, l) : rf(f.component) && (f.component.then(v, l), n(f.error) && (i.errorComp = he(f.error, r)), n(f.loading) && (i.loadingComp = he(f.loading, r), 0 === f.delay ? i.loading = !0 : s = setTimeout(function() {
                    s = null;
                    t(i.resolved) && t(i.error) && (i.loading = !0, a(!1))
                }, f.delay || 200)), n(f.timeout) && (c = setTimeout(function() {
                    c = null;
                    t(i.resolved) && l(null)
                }, f.timeout)))), y = !1, i.loading ? i.loadingComp : i.resolved
            }
        }(c = i, s)) ? function(n, t, i, r, u) {
            var f = at();
            return f.asyncFactory = n, f.asyncMeta = {
                data: t,
                context: i,
                children: r,
                tag: u
            }, f
        }(c, r, f, e, o) : (r = r || {}, be(i), n(r.model) && function(t, i) {
            var o = t.model && t.model.prop || "value",
                f = t.model && t.model.event || "input";
            (i.attrs || (i.attrs = {}))[o] = i.model.value;
            var e = i.on || (i.on = {}),
                r = e[f],
                u = i.model.callback;
            n(r) ? (Array.isArray(r) ? -1 === r.indexOf(u) : r !== u) && (e[f] = [u].concat(r)) : e[f] = u
        }(i.options, r), l = function(i, r) {
            var o = r.options.props,
                u, e;
            if (!t(o)) {
                var f = {},
                    s = i.attrs,
                    h = i.props;
                if (n(s) || n(h))
                    for (u in o) e = dt(u), rc(f, h, u, e, !0) || rc(f, s, u, e, !1);
                return f
            }
        }(r, i), u(i.options.functional)) ? function(t, i, r, u, f) {
            var s = t.options,
                h = {},
                l = s.props,
                v, e, o;
            if (n(l))
                for (v in l) h[v] = wf(v, l, i || w);
            else n(r.attrs) && lc(h, r.attrs), n(r.props) && lc(h, r.props);
            if (e = new ee(r, h, f, u, t), o = s.render.call(null, e._c, e), o instanceof a) return cc(o, r, e.parent, s);
            if (Array.isArray(o)) {
                for (var y = ue(o) || [], p = new Array(y.length), c = 0; c < y.length; c++) p[c] = cc(y[c], r, e.parent, s);
                return p
            }
        }(i, l, r, f, e) : (p = r.on, (r.on = r.nativeOn, u(i.options.abstract)) && (v = r.slot, r = {}, v && (r.slot = v)), ! function(n) {
            for (var r = n.hook || (n.hook = {}), i = 0; i < oe.length; i++) {
                var u = oe[i],
                    t = r[u],
                    f = iu[u];
                t === f || t && t._merged || (r[u] = t ? vb(f, t) : f)
            }
        }(r), y = i.options.name || o, new a("vue-component-" + i.cid + (y ? "-" + y : ""), r, void 0, void 0, void 0, f, {
            Ctor: i,
            propsData: l,
            listeners: p,
            tag: o,
            children: e
        }, c))
    }

    function vb(n, t) {
        var i = function(i, r) {
            n(i, r);
            t(i, r)
        };
        return i._merged = !0, i
    }

    function ru(i, r, f, e, o, s) {
        return (Array.isArray(f) || bi(f)) && (o = e, e = f, f = void 0), u(s) && (o = se),
            function(i, r, f, e, o) {
                var s, c, l;
                return n(f) && n(f.__ob__) ? at() : (n(f) && n(f.is) && (r = f.is), !r) ? at() : (Array.isArray(e) && "function" == typeof e[0] && ((f = f || {}).scopedSlots = {
                    "default": e[0]
                }, e.length = 0), o === se ? e = ue(e) : o === vc && (e = function(n) {
                    for (var t = 0; t < n.length; t++)
                        if (Array.isArray(n[t])) return Array.prototype.concat.apply([], n);
                    return n
                }(e)), "string" == typeof r ? (c = i.$vnode && i.$vnode.ns || y.getTagNamespace(r), s = y.isReservedTag(r) ? new a(y.parsePlatformTagName(r), f, e, void 0, void 0, i) : f && f.pre || !n(l = pf(i.$options, "components", r)) ? new a(r, f, e, void 0, void 0, i) : ac(l, f, i, e, r)) : s = ac(r, f, i, e), Array.isArray(s) ? s : n(s) ? (n(c) && function i(r, f, e) {
                    var s, h, o;
                    if (r.ns = f, "foreignObject" === r.tag && (f = void 0, e = !0), n(r.children))
                        for (s = 0, h = r.children.length; s < h; s++) o = r.children[s], n(o.tag) && (t(o.ns) || u(e) && "svg" !== o.tag) && i(o, f, e)
                }(s, c), n(f) && function(n) {
                    h(n.style) && nu(n.style);
                    h(n.class) && nu(n.class)
                }(f), s) : at())
            }(i, r, f, e, o)
    }

    function he(n, t) {
        return (n.__esModule || gi && "Module" === n[Symbol.toStringTag]) && (n = n.default), h(n) ? t.extend(n) : n
    }

    function fu(n) {
        return n.isComment && n.asyncFactory
    }

    function yc(t) {
        var r, i;
        if (Array.isArray(t))
            for (r = 0; r < t.length; r++)
                if (i = t[r], n(i) && (n(i.componentOptions) || fu(i))) return i
    }

    function yb(n, t) {
        ur.$on(n, t)
    }

    function pb(n, t) {
        ur.$off(n, t)
    }

    function wb(n, t) {
        var i = ur;
        return function r() {
            null !== t.apply(null, arguments) && i.$off(n, r)
        }
    }

    function pc(n, t, i) {
        ur = n;
        ic(t, i || {}, yb, pb, wb, n);
        ur = void 0
    }

    function wc(n) {
        var t = pt;
        return pt = n,
            function() {
                pt = t
            }
    }

    function bc(n) {
        for (; n && (n = n.$parent);)
            if (n._inactive) return !0;
        return !1
    }

    function ce(n, t) {
        if (t) {
            if (n._directInactive = !1, bc(n)) return
        } else if (n._directInactive) return;
        if (n._inactive || null === n._inactive) {
            n._inactive = !1;
            for (var i = 0; i < n.$children.length; i++) ce(n.$children[i]);
            it(n, "activated")
        }
    }

    function it(n, t) {
        var i, u, r, f;
        if (yr(), i = n.$options[t], u = t + " hook", i)
            for (r = 0, f = i.length; r < f; r++) br(i[r], n, null, n, u);
        n._hasHookEvent && n.$emit("hook:" + t);
        pr()
    }

    function bb() {
        var n, t, i, r;
        for (kc = ye(), ve = !0, ft.sort(function(n, t) {
                return n.id - t.id
            }), li = 0; li < ft.length; li++)(n = ft[li]).before && n.before(), t = n.id, eu[t] = null, n.run();
        i = le.slice();
        r = ft.slice();
        li = ft.length = le.length = 0;
        eu = {};
        ae = ve = !1,
            function(n) {
                for (var t = 0; t < n.length; t++) n[t]._inactive = !0, ce(n[t], !0)
            }(i),
            function(n) {
                for (var r = n.length, i, t; r--;) i = n[r], t = i.vm, t._watcher === i && t._isMounted && !t._isDestroyed && it(t, "updated")
            }(r);
        di && y.devtools && di.emit("flush")
    }

    function pe(n, t, i) {
        et.get = function() {
            return this[t][i]
        };
        et.set = function(n) {
            this[t][i] = n
        };
        Object.defineProperty(n, i, et)
    }

    function kb(n) {
        n._watchers = [];
        var t = n.$options;
        t.props && function(n, t) {
            var u = n.$options.propsData || {},
                f = n._props = {},
                e = n.$options._propKeys = [],
                i, r;
            n.$parent && vt(!1);
            i = function(i) {
                e.push(i);
                var r = wf(i, t, u, n);
                ti(f, i, r);
                i in n || pe(n, "_props", i)
            };
            for (r in t) i(r);
            vt(!0)
        }(n, t.props);
        t.methods && function(n, t) {
            n.$options.props;
            for (var i in t) n[i] = "function" != typeof t[i] ? o : lw(t[i], n)
        }(n, t.methods);
        t.data ? function(n) {
            var t = n.$options.data,
                i, r;
            v(t = n._data = "function" == typeof t ? function(n, t) {
                yr();
                try {
                    return n.call(t, t)
                } catch (n) {
                    return ut(n, t, "data()"), {}
                } finally {
                    pr()
                }
            }(t, n) : t || {}) || (t = {});
            for (var u = Object.keys(t), f = n.$options.props, e = (n.$options.methods, u.length); e--;) i = u[e], f && c(f, i) || (r = void 0, 36 !== (r = (i + "").charCodeAt(0)) && 95 !== r && pe(n, "_data", i));
            ni(t, !0)
        }(n) : ni(n._data = {}, !0);
        t.computed && function(n, t) {
            var f = n._computedWatchers = Object.create(null),
                e = si(),
                i, r, u;
            for (i in t) r = t[i], u = "function" == typeof r ? r : r.get, e || (f[i] = new k(n, u || o, o, gc)), i in n || nl(n, i, r)
        }(n, t.computed);
        t.watch && t.watch !== of && function(n, t) {
            var r, i, u;
            for (r in t)
                if (i = t[r], Array.isArray(i))
                    for (u = 0; u < i.length; u++) we(n, r, i[u]);
                else we(n, r, i)
        }(n, t.watch)
    }

    function nl(n, t, i) {
        var r = !si();
        "function" == typeof i ? (et.get = r ? tl(t) : il(i), et.set = o) : (et.get = i.get ? r && !1 !== i.cache ? tl(t) : il(i.get) : o, et.set = i.set || o);
        Object.defineProperty(n, t, et)
    }

    function tl(n) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[n];
            if (t) return t.dirty && t.evaluate(), p.target && t.depend(), t.value
        }
    }

    function il(n) {
        return function() {
            return n.call(this, this)
        }
    }

    function we(n, t, i, r) {
        return v(i) && (r = i, i = i.handler), "string" == typeof i && (i = n[i]), n.$watch(t, i, r)
    }

    function be(n) {
        var t = n.options,
            r, u;
        return n.super && (r = be(n.super), r !== n.superOptions && (n.superOptions = r, u = function(n) {
            var t, r = n.options,
                u = n.sealedOptions;
            for (var i in r) r[i] !== u[i] && (t || (t = {}), t[i] = r[i]);
            return t
        }(n), u && i(n.extendOptions, u), (t = n.options = ii(r, n.extendOptions)).name && (t.components[t.name] = n))), t
    }

    function r(n) {
        this._init(n)
    }

    function db(n) {
        n.cid = 0;
        var t = 1;
        n.extend = function(n) {
            var o, r;
            n = n || {};
            var u = this,
                f = u.cid,
                e = n._Ctor || (n._Ctor = {});
            return e[f] ? e[f] : (o = n.name || u.options.name, r = function(n) {
                this._init(n)
            }, (r.prototype = Object.create(u.prototype)).constructor = r, r.cid = t++, r.options = ii(u.options, n), r.super = u, r.options.props && function(n) {
                var t = n.options.props;
                for (var i in t) pe(n.prototype, "_props", i)
            }(r), r.options.computed && function(n) {
                var t = n.options.computed;
                for (var i in t) nl(n.prototype, i, t[i])
            }(r), r.extend = u.extend, r.mixin = u.mixin, r.use = u.use, ar.forEach(function(n) {
                r[n] = u[n]
            }), o && (r.options.components[o] = r), r.superOptions = u.options, r.extendOptions = n, r.sealedOptions = i({}, r.options), e[f] = r, r)
        }
    }

    function ul(n) {
        return n && (n.Ctor.options.name || n.tag)
    }

    function su(n, t) {
        return Array.isArray(n) ? n.indexOf(t) > -1 : "string" == typeof n ? n.split(",").indexOf(t) > -1 : (i = n, "[object RegExp]" === tf.call(i) && n.test(t));
        var i
    }

    function fl(n, t) {
        var i = n.cache,
            e = n.keys,
            o = n._vnode,
            r, u, f;
        for (r in i) u = i[r], u && (f = ul(u.componentOptions), f && !t(f) && ke(i, r, e, o))
    }

    function ke(n, t, i, r) {
        var u = n[t];
        !u || r && u.tag === r.tag || u.componentInstance.$destroy();
        n[t] = null;
        rt(i, t)
    }

    function uk(t) {
        for (var i = t.data, r = t, u = t; n(u.componentInstance);)(u = u.componentInstance._vnode) && u.data && (i = cl(u.data, i));
        for (; n(r = r.parent);) r && r.data && (i = cl(i, r.data));
        return function(t, i) {
            return n(t) || n(i) ? to(t, io(i)) : ""
        }(i.staticClass, i.class)
    }

    function cl(t, i) {
        return {
            staticClass: to(t.staticClass, i.staticClass),
            "class": n(t.class) ? [t.class, i.class] : i.class
        }
    }

    function to(n, t) {
        return n ? t ? n + " " + t : n : t || ""
    }

    function io(t) {
        return Array.isArray(t) ? function(t) {
            for (var r, i = "", u = 0, f = t.length; u < f; u++) n(r = io(t[u])) && "" !== r && (i && (i += " "), i += r);
            return i
        }(t) : h(t) ? function(n) {
            var t = "";
            for (var i in n) n[i] && (t && (t += " "), t += i);
            return t
        }(t) : "string" == typeof t ? t : ""
    }

    function ll(n) {
        return ro(n) ? "svg" : "math" === n ? "math" : void 0
    }

    function fo(n) {
        if ("string" == typeof n) {
            var t = document.querySelector(n);
            return t || document.createElement("div")
        }
        return n
    }

    function ai(t, i) {
        var r = t.data.ref;
        if (n(r)) {
            var e = t.context,
                f = t.componentInstance || t.elm,
                u = e.$refs;
            i ? Array.isArray(u[r]) ? rt(u[r], f) : u[r] === f && (u[r] = void 0) : t.data.refInFor ? Array.isArray(u[r]) ? u[r].indexOf(f) < 0 && u[r].push(f) : u[r] = [f] : u[r] = f
        }
    }

    function ri(i, r) {
        return i.key === r.key && (i.tag === r.tag && i.isComment === r.isComment && n(i.data) === n(r.data) && function(t, i) {
            if ("input" !== t.tag) return !0;
            var r, u = n(r = t.data) && n(r = r.attrs) && r.type,
                f = n(r = i.data) && n(r = r.attrs) && r.type;
            return u === f || cu(u) && cu(f)
        }(i, r) || u(i.isAsyncPlaceholder) && i.asyncFactory === r.asyncFactory && t(r.asyncFactory.error))
    }

    function ok(t, i, r) {
        for (var f, e = {}, u = i; u <= r; ++u) n(f = t[u].key) && (e[f] = u);
        return e
    }

    function eo(n, t) {
        (n.data.directives || t.data.directives) && function(n, t) {
            var r, u, i, c = n === wt,
                l = t === wt,
                o = wl(n.data.directives, n.context),
                s = wl(t.data.directives, t.context),
                f = [],
                e = [],
                h;
            for (r in s) u = o[r], i = s[r], u ? (i.oldValue = u.value, i.oldArg = u.arg, er(i, "update", t, n), i.def && i.def.componentUpdated && e.push(i)) : (er(i, "bind", t, n), i.def && i.def.inserted && f.push(i));
            if (f.length && (h = function() {
                    for (var i = 0; i < f.length; i++) er(f[i], "inserted", t, n)
                }, c ? yt(t, "insert", h) : h()), e.length && yt(t, "postpatch", function() {
                    for (var i = 0; i < e.length; i++) er(e[i], "componentUpdated", t, n)
                }), !c)
                for (r in o) s[r] || er(o[r], "unbind", n, n, l)
        }(n, t)
    }

    function wl(n, t) {
        var r, i, u = Object.create(null);
        if (!n) return u;
        for (r = 0; r < n.length; r++)(i = n[r]).modifiers || (i.modifiers = pl), u[sk(i)] = i, i.def = pf(t.$options, "directives", i.name);
        return u
    }

    function sk(n) {
        return n.rawName || n.name + "." + Object.keys(n.modifiers || {}).join(".")
    }

    function er(n, t, i, r, u) {
        var f = n.def && n.def[t];
        if (f) try {
            f(i.elm, n, i, r, u)
        } catch (r) {
            ut(r, i.context, "directive " + n.name + " " + t + " hook")
        }
    }

    function kl(r, u) {
        var c = u.componentOptions;
        if (!(n(c) && !1 === c.Ctor.options.inheritAttrs || t(r.data.attrs) && t(u.data.attrs))) {
            var f, s, o = u.elm,
                h = r.data.attrs || {},
                e = u.data.attrs || {};
            for (f in n(e.__ob__) && (e = u.data.attrs = i({}, e)), e) s = e[f], h[f] !== s && dl(o, f, s);
            for (f in (lt || lh) && e.value !== h.value && dl(o, "value", e.value), h) t(e[f]) && (no(f) ? o.removeAttributeNS(ge, hl(f)) : sl(f) || o.removeAttribute(f))
        }
    }

    function dl(n, t, i) {
        n.tagName.indexOf("-") > -1 ? gl(n, t, i) : rk(t) ? hu(i) ? n.removeAttribute(t) : (i = "allowfullscreen" === t && "EMBED" === n.tagName ? "true" : t, n.setAttribute(t, i)) : sl(t) ? n.setAttribute(t, ik(t, i)) : no(t) ? hu(i) ? n.removeAttributeNS(ge, hl(t)) : n.setAttributeNS(ge, t, i) : gl(n, t, i)
    }

    function gl(n, t, i) {
        if (hu(i)) n.removeAttribute(t);
        else {
            if (lt && !oi && "TEXTAREA" === n.tagName && "placeholder" === t && "" !== i && !n.__ieph) {
                var r = function(t) {
                    t.stopImmediatePropagation();
                    n.removeEventListener("input", r)
                };
                n.addEventListener("input", r);
                n.__ieph = !0
            }
            n.setAttribute(t, i)
        }
    }

    function ta(i, r) {
        var f = r.elm,
            s = r.data,
            e = i.data,
            u, o;
        t(s.staticClass) && t(s.class) && (t(e) || t(e.staticClass) && t(e.class)) || (u = uk(r), o = f._transitionClasses, n(o) && (u = to(u, io(o))), u !== f._prevClass && (f.setAttribute("class", u), f._prevClass = u))
    }

    function ho(n) {
        function w() {
            (f || (f = [])).push(n.slice(e, t).trim());
            e = t + 1
        }
        for (var i, u, r, f, h = !1, c = !1, l = !1, a = !1, v = 0, y = 0, p = 0, e = 0, o, s, t = 0; t < n.length; t++)
            if (u = i, i = n.charCodeAt(t), h) 39 === i && 92 !== u && (h = !1);
            else if (c) 34 === i && 92 !== u && (c = !1);
        else if (l) 96 === i && 92 !== u && (l = !1);
        else if (a) 47 === i && 92 !== u && (a = !1);
        else if (124 !== i || 124 === n.charCodeAt(t + 1) || 124 === n.charCodeAt(t - 1) || v || y || p) {
            switch (i) {
                case 34:
                    c = !0;
                    break;
                case 39:
                    h = !0;
                    break;
                case 96:
                    l = !0;
                    break;
                case 40:
                    p++;
                    break;
                case 41:
                    p--;
                    break;
                case 91:
                    y++;
                    break;
                case 93:
                    y--;
                    break;
                case 123:
                    v++;
                    break;
                case 125:
                    v--
            }
            if (47 === i) {
                for (o = t - 1, s = void 0; o >= 0 && " " === (s = n.charAt(o)); o--);
                s && ua.test(s) || (a = !0)
            }
        } else void 0 === r ? (e = t + 1, r = n.slice(0, t).trim()) : w();
        if (void 0 === r ? r = n.slice(0, t).trim() : 0 !== e && w(), f)
            for (t = 0; t < f.length; t++) r = hk(r, f[t]);
        return r
    }

    function hk(n, t) {
        var r = t.indexOf("("),
            u, i;
        return r < 0 ? '_f("' + t + '")(' + n + ")" : (u = t.slice(0, r), i = t.slice(r + 1), '_f("' + u + '")(' + n + (")" !== i ? "," + i : i))
    }

    function fa(n) {
        console.error("[Vue compiler]: " + n)
    }

    function or(n, t) {
        return n ? n.map(function(n) {
            return n[t]
        }).filter(function(n) {
            return n
        }) : []
    }

    function ui(n, t, i, r, u) {
        (n.props || (n.props = [])).push(sr({
            name: t,
            value: i,
            dynamic: u
        }, r));
        n.plain = !1
    }

    function co(n, t, i, r, u) {
        (u ? n.dynamicAttrs || (n.dynamicAttrs = []) : n.attrs || (n.attrs = [])).push(sr({
            name: t,
            value: i,
            dynamic: u
        }, r));
        n.plain = !1
    }

    function lo(n, t, i, r) {
        n.attrsMap[t] = i;
        n.attrsList.push(sr({
            name: t,
            value: i
        }, r))
    }

    function ck(n, t, i, r, u, f, e, o) {
        (n.directives || (n.directives = [])).push(sr({
            name: t,
            rawName: i,
            value: r,
            arg: u,
            isDynamicArg: f,
            modifiers: e
        }, o));
        n.plain = !1
    }

    function ao(n, t, i) {
        return i ? "_p(" + t + ',"' + n + '")' : n + t
    }

    function ot(n, t, i, r, u, f, e, o) {
        var c, s, h;
        (r = r || w).right ? o ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete r.right) : r.middle && (o ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup"));
        r.capture && (delete r.capture, t = ao("!", t, o));
        r.once && (delete r.once, t = ao("~", t, o));
        r.passive && (delete r.passive, t = ao("&", t, o));
        r.native ? (delete r.native, c = n.nativeEvents || (n.nativeEvents = {})) : c = n.events || (n.events = {});
        s = sr({
            value: i.trim(),
            dynamic: o
        }, e);
        r !== w && (s.modifiers = r);
        h = c[t];
        Array.isArray(h) ? u ? h.unshift(s) : h.push(s) : c[t] = h ? u ? [s, h] : [h, s] : s;
        n.plain = !1
    }

    function d(n, t, i) {
        var u = f(n, ":" + t) || f(n, "v-bind:" + t),
            r;
        return null != u ? ho(u) : !1 !== i && (r = f(n, t), null != r) ? JSON.stringify(r) : void 0
    }

    function f(n, t, i) {
        var f;
        if (null != (f = n.attrsMap[t]))
            for (var u = n.attrsList, r = 0, e = u.length; r < e; r++)
                if (u[r].name === t) {
                    u.splice(r, 1);
                    break
                }
        return i && delete n.attrsMap[t], f
    }

    function ea(n, t) {
        for (var u, r = n.attrsList, i = 0, f = r.length; i < f; i++)
            if (u = r[i], t.test(u.name)) return r.splice(i, 1), u
    }

    function sr(n, t) {
        return t && (null != t.start && (n.start = t.start), null != t.end && (n.end = t.end)), n
    }

    function oa(n, t, i) {
        var u = i || {},
            e = u.number,
            r = "$$v",
            f;
        u.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)");
        e && (r = "_n(" + r + ")");
        f = kt(t, r);
        n.model = {
            value: "(" + t + ")",
            expression: JSON.stringify(t),
            callback: "function ($$v) {" + f + "}"
        }
    }

    function kt(n, t) {
        var i = function(n) {
            if (n = n.trim(), oo = n.length, n.indexOf("[") < 0 || n.lastIndexOf("]") < oo - 1) return (bt = n.lastIndexOf(".")) > -1 ? {
                exp: n.slice(0, bt),
                key: '"' + n.slice(bt + 1) + '"'
            } : {
                exp: n,
                key: null
            };
            for (ia = n, bt = au = so = 0; !yo();) sa(lu = vo()) ? ha(lu) : 91 === lu && lk(lu);
            return {
                exp: n.slice(0, au),
                key: n.slice(au + 1, so)
            }
        }(n);
        return null === i.key ? n + "=" + t : "$set(" + i.exp + ", " + i.key + ", " + t + ")"
    }

    function vo() {
        return ia.charCodeAt(++bt)
    }

    function yo() {
        return bt >= oo
    }

    function sa(n) {
        return 34 === n || 39 === n
    }

    function lk(n) {
        var t = 1;
        for (au = bt; !yo();)
            if (sa(n = vo())) ha(n);
            else if (91 === n && t++, 93 === n && t--, 0 === t) {
            so = bt;
            break
        }
    }

    function ha(n) {
        for (var t = n; !yo() && (n = vo()) !== t;);
    }

    function ak(n, t, i) {
        var r = hr;
        return function u() {
            null !== t.apply(null, arguments) && la(n, u, i, r)
        }
    }

    function vk(n, t, i, r) {
        if (ca) {
            var f = kc,
                u = t;
            t = u._wrapper = function(n) {
                if (n.target === n.currentTarget || n.timeStamp >= f || n.timeStamp <= 0 || n.target.ownerDocument !== document) return u.apply(this, arguments)
            }
        }
        hr.addEventListener(n, t, vh ? {
            capture: i,
            passive: r
        } : i)
    }

    function la(n, t, i, r) {
        (r || hr).removeEventListener(n, t._wrapper || t, i)
    }

    function aa(i, r) {
        if (!t(i.data.on) || !t(r.data.on)) {
            var u = r.data.on || {},
                f = i.data.on || {};
            hr = r.elm,
                function(t) {
                    if (n(t[cr])) {
                        var i = lt ? "change" : "input";
                        t[i] = [].concat(t[cr], t[i] || []);
                        delete t[cr]
                    }
                    n(t[vu]) && (t.change = [].concat(t[vu], t.change || []), delete t[vu])
                }(u);
            ic(u, f, vk, la, ak, r.context);
            hr = void 0
        }
    }

    function ya(r, u) {
        var c, l;
        if (!t(r.data.domProps) || !t(u.data.domProps)) {
            var e, o, f = u.elm,
                h = r.data.domProps || {},
                s = u.data.domProps || {};
            for (e in n(s.__ob__) && (s = u.data.domProps = i({}, s)), h) e in s || (f[e] = "");
            for (e in s) {
                if (o = s[e], "textContent" === e || "innerHTML" === e) {
                    if (u.children && (u.children.length = 0), o === h[e]) continue;
                    1 === f.childNodes.length && f.removeChild(f.childNodes[0])
                }
                if ("value" === e && "PROGRESS" !== f.tagName) f._value = o, c = t(o) ? "" : String(o), yk(f, c) && (f.value = c);
                else if ("innerHTML" === e && ro(f.tagName) && t(f.innerHTML)) {
                    for ((po = po || document.createElement("div")).innerHTML = "<svg>" + o + "<\/svg>", l = po.firstChild; f.firstChild;) f.removeChild(f.firstChild);
                    for (; l.firstChild;) f.appendChild(l.firstChild)
                } else if (o !== h[e]) try {
                    f[e] = o
                } catch (r) {}
            }
        }
    }

    function yk(t, i) {
        return !t.composing && ("OPTION" === t.tagName || function(n, t) {
            var i = !0;
            try {
                i = document.activeElement !== n
            } catch (n) {}
            return i && n.value !== t
        }(t, i) || function(t, i) {
            var r = t.value,
                u = t._vModifiers;
            if (n(u)) {
                if (u.number) return ki(r) !== ki(i);
                if (u.trim) return r.trim() !== i.trim()
            }
            return r !== i
        }(t, i))
    }

    function bo(n) {
        var t = wa(n.style);
        return n.staticStyle ? i(n.staticStyle, t) : t
    }

    function wa(n) {
        return Array.isArray(n) ? fh(n) : "string" == typeof n ? wo(n) : n
    }

    function ga(r, u) {
        var c = u.data,
            e = r.data,
            o;
        if (!(t(c.staticStyle) && t(c.style) && t(e.staticStyle) && t(e.style))) {
            var s, f, l = u.elm,
                v = e.staticStyle,
                y = e.normalizedStyle || e.style || {},
                a = v || y,
                h = wa(u.data.style) || {};
            u.data.normalizedStyle = n(h.__ob__) ? i({}, h) : h;
            o = function(n, t) {
                var r, e = {},
                    u, f;
                if (t)
                    for (u = n; u.componentInstance;)(u = u.componentInstance._vnode) && u.data && (r = bo(u.data)) && i(e, r);
                for ((r = bo(n.data)) && i(e, r), f = n; f = f.parent;) f.data && (r = bo(f.data)) && i(e, r);
                return e
            }(u, !0);
            for (f in a) t(o[f]) && ka(l, f, "");
            for (f in o)(s = o[f]) !== a[f] && ka(l, f, null == s ? "" : s)
        }
    }

    function tv(n, t) {
        if (t && (t = t.trim()))
            if (n.classList) t.indexOf(" ") > -1 ? t.split(ko).forEach(function(t) {
                return n.classList.add(t)
            }) : n.classList.add(t);
            else {
                var i = " " + (n.getAttribute("class") || "") + " ";
                i.indexOf(" " + t + " ") < 0 && n.setAttribute("class", (i + t).trim())
            }
    }

    function iv(n, t) {
        if (t && (t = t.trim()))
            if (n.classList) t.indexOf(" ") > -1 ? t.split(ko).forEach(function(t) {
                return n.classList.remove(t)
            }) : n.classList.remove(t), n.classList.length || n.removeAttribute("class");
            else {
                for (var i = " " + (n.getAttribute("class") || "") + " ", r = " " + t + " "; i.indexOf(r) >= 0;) i = i.replace(r, " ");
                (i = i.trim()) ? n.setAttribute("class", i): n.removeAttribute("class")
            }
    }

    function rv(n) {
        if (n) {
            if ("object" == typeof n) {
                var t = {};
                return !1 !== n.css && i(t, uv(n.name || "v")), i(t, n), t
            }
            return "string" == typeof n ? uv(n) : void 0
        }
    }

    function ov(n) {
        ts(function() {
            ts(n)
        })
    }

    function fi(n, t) {
        var i = n._transitionClasses || (n._transitionClasses = []);
        i.indexOf(t) < 0 && (i.push(t), tv(n, t))
    }

    function st(n, t) {
        n._transitionClasses && rt(n._transitionClasses, t);
        iv(n, t)
    }

    function sv(n, t, i) {
        var r = cv(n, t),
            u = r.type,
            c = r.timeout,
            f = r.propCount;
        if (!u) return i();
        var e = u === yi ? wu : ev,
            o = 0,
            s = function() {
                n.removeEventListener(e, h);
                i()
            },
            h = function(t) {
                t.target === n && ++o >= f && s()
            };
        setTimeout(function() {
            o < f && s()
        }, c + 1);
        n.addEventListener(e, h)
    }

    function cv(n, t) {
        var i, r = window.getComputedStyle(n),
            c = (r[pu + "Delay"] || "").split(", "),
            s = (r[pu + "Duration"] || "").split(", "),
            u = lv(c, s),
            l = (r[ns + "Delay"] || "").split(", "),
            h = (r[ns + "Duration"] || "").split(", "),
            f = lv(l, h),
            e = 0,
            o = 0;
        return t === yi ? u > 0 && (i = yi, e = u, o = s.length) : t === go ? f > 0 && (i = go, e = f, o = h.length) : o = (i = (e = Math.max(u, f)) > 0 ? u > f ? yi : go : null) ? i === yi ? s.length : h.length : 0, {
            type: i,
            timeout: e,
            propCount: o,
            hasTransform: i === yi && hv.test(r[pu + "Property"])
        }
    }

    function lv(n, t) {
        for (; n.length < t.length;) n = n.concat(n);
        return Math.max.apply(null, t.map(function(t, i) {
            return av(t) + av(n[i])
        }))
    }

    function av(n) {
        return 1e3 * Number(n.slice(0, -1).replace(",", "."))
    }

    function is(i, r) {
        var u = i.elm,
            f, e;
        if (n(u._leaveCb) && (u._leaveCb.cancelled = !0, u._leaveCb()), f = rv(i.data.transition), !t(f) && !n(u._enterCb) && 1 === u.nodeType) {
            for (var ft = f.css, et = f.type, ot = f.enterClass, ht = f.enterToClass, ct = f.enterActiveClass, p = f.appearClass, w = f.appearToClass, b = f.appearActiveClass, lt = f.beforeEnter, at = f.enter, vt = f.afterEnter, wt = f.enterCancelled, bt = f.beforeAppear, l = f.appear, kt = f.afterAppear, dt = f.appearCancelled, v = f.duration, k = pt, s = pt.$vnode; s && s.parent;) k = s.context, s = s.parent;
            if (e = !k._isMounted || !i.isRootInsert, !e || l || "" === l) {
                var y = e && p ? p : ot,
                    d = e && b ? b : ct,
                    g = e && w ? w : ht,
                    nt = e && bt || lt,
                    c = e && "function" == typeof l ? l : at,
                    tt = e && kt || vt,
                    it = e && dt || wt,
                    rt = ki(h(v) ? v.enter : v),
                    a = !1 !== ft && !oi,
                    ut = rs(c),
                    o = u._enterCb = lr(function() {
                        a && (st(u, g), st(u, d));
                        o.cancelled ? (a && st(u, y), it && it(u)) : tt && tt(u);
                        u._enterCb = null
                    });
                i.data.show || yt(i, "insert", function() {
                    var t = u.parentNode,
                        n = t && t._pending && t._pending[i.key];
                    n && n.tag === i.tag && n.elm._leaveCb && n.elm._leaveCb();
                    c && c(u, o)
                });
                nt && nt(u);
                a && (fi(u, y), fi(u, d), ov(function() {
                    st(u, y);
                    o.cancelled || (fi(u, g), ut || (yv(rt) ? setTimeout(o, rt) : sv(u, et, o)))
                }));
                i.data.show && (r && r(), c && c(u, o));
                a || ut || o()
            }
        }
    }

    function vv(i, r) {
        function g() {
            e.cancelled || (!i.data.show && u.parentNode && ((u.parentNode._pending || (u.parentNode._pending = {}))[i.key] = i), y && y(u), o && (fi(u, s), fi(u, v), ov(function() {
                st(u, s);
                e.cancelled || (fi(u, a), k || (yv(d) ? setTimeout(e, d) : sv(u, tt, e)))
            })), c && c(u, e), o || k || e())
        }
        var u = i.elm,
            f;
        if (n(u._enterCb) && (u._enterCb.cancelled = !0, u._enterCb()), f = rv(i.data.transition), t(f) || 1 !== u.nodeType) return r();
        if (!n(u._leaveCb)) {
            var nt = f.css,
                tt = f.type,
                s = f.leaveClass,
                a = f.leaveToClass,
                v = f.leaveActiveClass,
                y = f.beforeLeave,
                c = f.leave,
                p = f.afterLeave,
                w = f.leaveCancelled,
                b = f.delayLeave,
                l = f.duration,
                o = !1 !== nt && !oi,
                k = rs(c),
                d = ki(h(l) ? l.leave : l),
                e = u._leaveCb = lr(function() {
                    u.parentNode && u.parentNode._pending && (u.parentNode._pending[i.key] = null);
                    o && (st(u, a), st(u, v));
                    e.cancelled ? (o && st(u, s), w && w(u)) : (r(), p && p(u));
                    u._leaveCb = null
                });
            b ? b(g) : g()
        }
    }

    function yv(n) {
        return "number" == typeof n && !isNaN(n)
    }

    function rs(i) {
        if (t(i)) return !1;
        var r = i.fns;
        return n(r) ? rs(Array.isArray(r) ? r[0] : r) : (i._length || i.length) > 1
    }

    function pv(n, t) {
        !0 !== t.data.show && is(t)
    }

    function bv(n, t, i) {
        kv(n, t, i);
        (lt || lh) && setTimeout(function() {
            kv(n, t, i)
        }, 0)
    }

    function kv(n, t) {
        var u = t.value,
            f = n.multiple,
            e, r, i, o;
        if (!f || Array.isArray(u)) {
            for (i = 0, o = n.options.length; i < o; i++)
                if (r = n.options[i], f) e = oh(u, bu(r)) > -1, r.selected !== e && (r.selected = e);
                else if (gt(bu(r), u)) return void(n.selectedIndex !== i && (n.selectedIndex = i));
            f || (n.selectedIndex = -1)
        }
    }

    function dv(n, t) {
        return t.every(function(t) {
            return !gt(t, n)
        })
    }

    function bu(n) {
        return "_value" in n ? n._value : n.value
    }

    function bk(n) {
        n.target.composing = !0
    }

    function gv(n) {
        n.target.composing && (n.target.composing = !1, fs(n.target, "input"))
    }

    function fs(n, t) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(t, !0, !0);
        n.dispatchEvent(i)
    }

    function es(n) {
        return !n.componentInstance || n.data && n.data.transition ? n : es(n.componentInstance._vnode)
    }

    function ss(n) {
        var t = n && n.componentOptions;
        return t && t.Ctor.options.abstract ? ss(yc(t.children)) : n
    }

    function ty(n) {
        var t = {},
            f = n.$options,
            i, r, u;
        for (i in f.propsData) t[i] = n[i];
        r = f._parentListeners;
        for (u in r) t[b(u)] = r[u];
        return t
    }

    function iy(n, t) {
        if (/\d-keep-alive$/.test(t.tag)) return n("keep-alive", {
            props: t.componentOptions.propsData
        })
    }

    function nd(n) {
        n.elm._moveCb && n.elm._moveCb();
        n.elm._enterCb && n.elm._enterCb()
    }

    function td(n) {
        n.data.newPos = n.elm.getBoundingClientRect()
    }

    function id(n) {
        var i = n.data.pos,
            r = n.data.newPos,
            u = i.left - r.left,
            f = i.top - r.top,
            t;
        (u || f) && (n.data.moved = !0, t = n.elm.style, t.transform = t.WebkitTransform = "translate(" + u + "px," + f + "px)", t.transitionDuration = "0s")
    }

    function dd(n, t) {
        var i = t ? bd : wd;
        return n.replace(i, function(n) {
            return pd[n]
        })
    }

    function bs(n, t, i) {
        return {
            type: 1,
            tag: n,
            attrsList: t,
            attrsMap: og(t),
            rawAttrsMap: {},
            parent: i,
            children: []
        }
    }

    function fg(n, t) {
        function h(n) {
            var l, s, h, f;
            for ((c(n), e || n.processed || (n = gu(n, t)), r.length || n === u || u.if && (n.elseif || n.else) && pi(u, {
                    exp: n.elseif,
                    block: n
                }), i && !n.forbidden) && (n.elseif || n.else ? (s = n, (h = function(n) {
                    for (var t = n.length; t--;) {
                        if (1 === n[t].type) return n[t];
                        n.pop()
                    }
                }(i.children)) && h.if && pi(h, {
                    exp: s.elseif,
                    block: s
                })) : (n.slotScope && (l = n.slotTarget || '"default"', (i.scopedSlots || (i.scopedSlots = {}))[l] = n), i.children.push(n), n.parent = i)), n.children = n.children.filter(function(n) {
                    return !n.slotScope
                }), c(n), n.pre && (e = !1), vs(n.tag) && (o = !1), f = 0; f < as.length; f++) as[f](n, t)
        }

        function c(n) {
            if (!o)
                for (var t;
                    (t = n.children[n.children.length - 1]) && 3 === t.type && " " === t.text;) n.children.pop()
        }
        py = t.warn || fa;
        vs = t.isPreTag || nt;
        ys = t.mustUseProp || nt;
        by = t.getTagNamespace || nt;
        t.isReservedTag;
        cs = or(t.modules, "transformNode");
        ls = or(t.modules, "preTransformNode");
        as = or(t.modules, "postTransformNode");
        wy = t.delimiters;
        var u, i, r = [],
            l = !1 !== t.preserveWhitespace,
            s = t.whitespace,
            e = !1,
            o = !1;
        return function(n, t) {
            function r(t) {
                i += t;
                n = n.substring(t)
            }

            function ft() {
                var e = n.match(sy),
                    f, t, u;
                if (e) {
                    for (u = {
                            tagName: e[1],
                            attrs: [],
                            start: i
                        }, r(e[0].length); !(f = n.match(vd)) && (t = n.match(ad) || n.match(ld));) t.start = i, r(t[0].length), t.end = i, u.attrs.push(t);
                    if (f) return u.unarySlash = f[1], r(f[0].length), u.end = i, u
                }
            }

            function et(n) {
                var i = n.tagName,
                    c = n.unarySlash;
                tt && ("p" === u && cd(i) && l(u), rt(i) && u === i && l(i));
                for (var s = it(i) || !!c, h = n.attrs.length, o = new Array(h), f = 0; f < h; f++) {
                    var r = n.attrs[f],
                        a = r[3] || r[4] || r[5] || "",
                        v = "a" === i && "href" === r[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    o[f] = {
                        name: r[1],
                        value: dd(a, v)
                    }
                }
                s || (e.push({
                    tag: i,
                    lowerCasedTag: i.toLowerCase(),
                    attrs: o,
                    start: n.start,
                    end: n.end
                }), u = i);
                t.start && t.start(i, o, s, n.start, n.end)
            }

            function l(n, r, f) {
                var o, s, h;
                if (null == r && (r = i), null == f && (f = i), n)
                    for (s = n.toLowerCase(), o = e.length - 1; o >= 0 && e[o].lowerCasedTag !== s; o--);
                else o = 0;
                if (o >= 0) {
                    for (h = e.length - 1; h >= o; h--) t.end && t.end(e[h].tag, r, f);
                    e.length = o;
                    u = o && e[o - 1].tag
                } else "br" === s ? t.start && t.start(n, [], !0, r, f) : "p" === s && (t.start && t.start(n, [], !1, r, f), t.end && t.end(n, r, f))
            }
            for (var f, c, y, p, a, d, v, w, u, e = [], tt = t.expectHTML, it = t.isUnaryTag || nt, rt = t.canBeLeftOpenTag || nt, i = 0; n;) {
                if (w = n, u && ay(u)) {
                    var b = 0,
                        o = u.toLowerCase(),
                        ut = vy[o] || (vy[o] = new RegExp("([\\s\\S]*?)(<\/" + o + "[^>]*>)", "i")),
                        k = n.replace(ut, function(n, i, r) {
                            return b = r.length, ay(o) || "noscript" === o || (i = i.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), yy(o, i) && (i = i.slice(1)), t.chars && t.chars(i), ""
                        });
                    i += n.length - k.length;
                    n = k;
                    l(o, i - b, i)
                } else {
                    if (f = n.indexOf("<"), 0 === f) {
                        if (cy.test(n) && (c = n.indexOf("-->"), c >= 0)) {
                            t.shouldKeepComment && t.comment(n.substring(4, c), i, i + c + 3);
                            r(c + 3);
                            continue
                        }
                        if (ly.test(n) && (y = n.indexOf("]>"), y >= 0)) {
                            r(y + 2);
                            continue
                        }
                        if (p = n.match(yd), p) {
                            r(p[0].length);
                            continue
                        }
                        if (a = n.match(hy), a) {
                            d = i;
                            r(a[0].length);
                            l(a[1], d, i);
                            continue
                        }
                        if (v = ft(), v) {
                            et(v);
                            yy(v.tagName, n) && r(1);
                            continue
                        }
                    }
                    var s = void 0,
                        h = void 0,
                        g = void 0;
                    if (f >= 0) {
                        for (h = n.slice(f); !(hy.test(h) || sy.test(h) || cy.test(h) || ly.test(h) || (g = h.indexOf("<", 1)) < 0);) f += g, h = n.slice(f);
                        s = n.substring(0, f)
                    }
                    f < 0 && (s = n);
                    s && r(s.length);
                    t.chars && s && t.chars(s, i - s.length, i)
                }
                if (n === w) {
                    t.chars && t.chars(n);
                    break
                }
            }
            l()
        }(n, {
            warn: py,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function(n, s, c) {
                var y = i && i.ns || by(n),
                    a, l, v;
                for (lt && "svg" === y && (s = function(n) {
                        for (var t, r = [], i = 0; i < n.length; i++) t = n[i], rp.test(t.name) || (t.name = t.name.replace(up, ""), r.push(t));
                        return r
                    }(s)), l = bs(n, s, i), y && (l.ns = y), "style" !== (a = l).tag && ("script" !== a.tag || a.attrsMap.type && "text/javascript" !== a.attrsMap.type) || si() || (l.forbidden = !0), v = 0; v < ls.length; v++) l = ls[v](l, t) || l;
                e || (! function(n) {
                    null != f(n, "v-pre") && (n.pre = !0)
                }(l), l.pre && (e = !0));
                vs(l.tag) && (o = !0);
                e ? function(n) {
                    var i = n.attrsList,
                        u = i.length,
                        r, t;
                    if (u)
                        for (r = n.attrs = new Array(u), t = 0; t < u; t++) r[t] = {
                            name: i[t].name,
                            value: JSON.stringify(i[t].value)
                        }, null != i[t].start && (r[t].start = i[t].start, r[t].end = i[t].end);
                    else n.pre || (n.plain = !0)
                }(l) : l.processed || (tp(l), function(n) {
                    var t = f(n, "v-if"),
                        i;
                    t ? (n.if = t, pi(n, {
                        exp: t,
                        block: n
                    })) : (null != f(n, "v-else") && (n.else = !0), i = f(n, "v-else-if"), i && (n.elseif = i))
                }(l), function(n) {
                    null != f(n, "v-once") && (n.once = !0)
                }(l));
                u || (u = l);
                c ? h(l) : (i = l, r.push(l))
            },
            end: function() {
                var n = r[r.length - 1];
                r.length -= 1;
                i = r[r.length - 1];
                h(n)
            },
            chars: function(n) {
                if (i && (!lt || "textarea" !== i.tag || i.attrsMap.placeholder !== n)) {
                    var f, u, r, t = i.children;
                    (n = o || n.trim() ? "script" === (f = i).tag || "style" === f.tag ? n : ug(n) : t.length ? s ? "condense" === s && ig.test(n) ? "" : " " : l ? " " : "" : "") && (o || "condense" !== s || (n = n.replace(rg, " ")), !e && " " !== n && (u = function(n, t) {
                        var o = t ? ud(t) : rd,
                            h;
                        if (o.test(n)) {
                            for (var r, s, u, f = [], e = [], i = o.lastIndex = 0; r = o.exec(n);)(s = r.index) > i && (e.push(u = n.slice(i, s)), f.push(JSON.stringify(u))), h = ho(r[1].trim()), f.push("_s(" + h + ")"), e.push({
                                "@binding": h
                            }), i = s + r[0].length;
                            return i < n.length && (e.push(u = n.slice(i)), f.push(JSON.stringify(u))), {
                                expression: f.join("+"),
                                tokens: e
                            }
                        }
                    }(n, wy)) ? r = {
                        type: 2,
                        expression: u.expression,
                        tokens: u.tokens,
                        text: n
                    } : " " === n && t.length && " " === t[t.length - 1].text || (r = {
                        type: 3,
                        text: n
                    }), r && t.push(r))
                }
            },
            comment: function(n) {
                if (i) {
                    var t = {
                        type: 3,
                        text: n,
                        isComment: !0
                    };
                    i.children.push(t)
                }
            }
        }), u
    }

    function gu(n, t) {
        var r, u, i;
        for ((u = d(r = n, "key")) && (r.key = u), n.plain = !n.key && !n.scopedSlots && !n.attrsList.length, function(n) {
                var t = d(n, "ref");
                t && (n.ref = t, n.refInFor = function(n) {
                    for (var t = n; t;) {
                        if (void 0 !== t.for) return !0;
                        t = t.parent
                    }
                    return !1
                }(n))
            }(n), function(n) {
                var r, t, u, e;
                if ("template" === n.tag ? (r = f(n, "scope"), n.slotScope = r || f(n, "slot-scope")) : (r = f(n, "slot-scope")) && (n.slotScope = r), t = d(n, "slot"), t && (n.slotTarget = '""' === t ? '"default"' : t, n.slotTargetDynamic = !(!n.attrsMap[":slot"] && !n.attrsMap["v-bind:slot"]), "template" === n.tag || n.slotScope || co(n, "slot", t, function(n, t) {
                        return n.rawAttrsMap[":" + t] || n.rawAttrsMap["v-bind:" + t] || n.rawAttrsMap[t]
                    }(n, "slot"))), "template" === n.tag) {
                    if (u = ea(n, ws), u) {
                        var o = ip(u),
                            c = o.name,
                            l = o.dynamic;
                        n.slotTarget = c;
                        n.slotTargetDynamic = l;
                        n.slotScope = u.value || du
                    }
                } else if (e = ea(n, ws), e) {
                    var a = n.scopedSlots || (n.scopedSlots = {}),
                        s = ip(e),
                        h = s.name,
                        v = s.dynamic,
                        i = a[h] = bs("template", [], n);
                    i.slotTarget = h;
                    i.slotTargetDynamic = v;
                    i.children = n.children.filter(function(n) {
                        if (!n.slotScope) return n.parent = i, !0
                    });
                    i.slotScope = e.value || du;
                    n.children = [];
                    n.plain = !1
                }
            }(n), function(n) {
                "slot" === n.tag && (n.slotName = d(n, "name"))
            }(n), function(n) {
                var t;
                (t = d(n, "is")) && (n.component = t);
                null != f(n, "inline-template") && (n.inlineTemplate = !0)
            }(n), i = 0; i < cs.length; i++) n = cs[i](n, t) || n;
        return function(n) {
            for (var t, l, f, e, s, u, r = n.attrsList, h, o, i = 0, c = r.length; i < c; i++)(t = l = r[i].name, f = r[i].value, ps.test(t)) ? (n.hasBindings = !0, (e = eg(t.replace(ps, ""))) && (t = t.replace(np, "")), gy.test(t)) ? (t = t.replace(gy, ""), f = ho(f), (u = ku.test(t)) && (t = t.slice(1, -1)), e && (e.prop && !u && "innerHtml" === (t = b(t)) && (t = "innerHTML"), e.camel && !u && (t = b(t)), e.sync && (s = kt(f, "$event"), u ? ot(n, '"update:"+(' + t + ")", s, null, !1, 0, r[i], !0) : (ot(n, "update:" + b(t), s, null, !1, 0, r[i]), dt(t) !== b(t) && ot(n, "update:" + dt(t), s, null, !1, 0, r[i])))), e && e.prop || !n.component && ys(n.tag, n.attrsMap.type, t) ? ui(n, t, f, r[i], u) : co(n, t, f, r[i], u)) : ky.test(t) ? (t = t.replace(ky, ""), (u = ku.test(t)) && (t = t.slice(1, -1)), ot(n, t, f, e, !1, 0, r[i], u)) : (h = (t = t.replace(ps, "")).match(tg), o = h && h[1], u = !1, o && (t = t.slice(0, -(o.length + 1)), ku.test(o) && (o = o.slice(1, -1), u = !0)), ck(n, t, l, f, o, u, e, r[i])) : (co(n, t, JSON.stringify(f), r[i]), !n.component && "muted" === t && ys(n.tag, n.attrsMap.type, t) && ui(n, t, "true", r[i]))
        }(n), n
    }

    function tp(n) {
        var r, t;
        (r = f(n, "v-for")) && (t = function(n) {
            var u = n.match(gd),
                t, r, i;
            if (u) return t = {}, t.for = u[2].trim(), r = u[1].trim().replace(ng, ""), i = r.match(dy), i ? (t.alias = r.replace(dy, "").trim(), t.iterator1 = i[1].trim(), i[2] && (t.iterator2 = i[2].trim())) : t.alias = r, t
        }(r), t && i(n, t))
    }

    function pi(n, t) {
        n.ifConditions || (n.ifConditions = []);
        n.ifConditions.push(t)
    }

    function ip(n) {
        var t = n.name.replace(ws, "");
        return t || "#" !== n.name[0] && (t = "default"), ku.test(t) ? {
            name: t.slice(1, -1),
            dynamic: !0
        } : {
            name: '"' + t + '"',
            dynamic: !1
        }
    }

    function eg(n) {
        var i = n.match(np),
            t;
        if (i) return t = {}, i.forEach(function(n) {
            t[n.slice(1)] = !0
        }), t
    }

    function og(n) {
        for (var i = {}, t = 0, r = n.length; t < r; t++) i[n[t].name] = n[t].value;
        return i
    }

    function ks(n) {
        return bs(n.tag, n.attrsList.slice(), n.parent)
    }

    function cg(n, t) {
        n && (ep = hg(t.staticKeys || ""), ds = t.isReservedTag || nt, function n(t) {
            var i, e, u, r, o, f;
            if (t.static = function(n) {
                    return 2 === n.type ? !1 : 3 === n.type ? !0 : !(!n.pre && (n.hasBindings || n.if || n.for || fw(n.tag) || !ds(n.tag) || function(n) {
                        for (; n.parent;) {
                            if ("template" !== (n = n.parent).tag) return !1;
                            if (n.for) return !0
                        }
                        return !1
                    }(n) || !Object.keys(n).every(ep)))
                }(t), 1 === t.type) {
                if (!ds(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                for (i = 0, e = t.children.length; i < e; i++) u = t.children[i], n(u), u.static || (t.static = !1);
                if (t.ifConditions)
                    for (r = 1, o = t.ifConditions.length; r < o; r++) f = t.ifConditions[r].block, n(f), f.static || (t.static = !1)
            }
        }(n), function n(t, i) {
            var r, f, u, e;
            if (1 === t.type) {
                if ((t.static || t.once) && (t.staticInFor = i), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
                if (t.staticRoot = !1, t.children)
                    for (r = 0, f = t.children.length; r < f; r++) n(t.children[r], i || !!t.for);
                if (t.ifConditions)
                    for (u = 1, e = t.ifConditions.length; u < e; u++) n(t.ifConditions[u].block, i)
            }
        }(n, !1))
    }

    function cp(n, t) {
        var e = t ? "nativeOn:" : "on:",
            r = "",
            u = "",
            i, f;
        for (i in n) f = lp(n[i]), n[i] && n[i].dynamic ? u += i + "," + f + "," : r += '"' + i + '":' + f + ",";
        return r = "{" + r.slice(0, -1) + "}", u ? e + "_d(" + r + ",[" + u.slice(0, -1) + "])" : e + r
    }

    function lp(n) {
        var t, s;
        if (!n) return "function(){}";
        if (Array.isArray(n)) return "[" + n.map(function(n) {
            return lp(n)
        }).join(",") + "]";
        var f = op.test(n.value),
            e = lg.test(n.value),
            o = op.test(n.value.replace(ag, ""));
        if (n.modifiers) {
            var u = "",
                i = "",
                r = [];
            for (t in n.modifiers) hp[t] ? (i += hp[t], sp[t] && r.push(t)) : "exact" === t ? (s = n.modifiers, i += ht(["ctrl", "shift", "alt", "meta"].filter(function(n) {
                return !s[n]
            }).map(function(n) {
                return "$event." + n + "Key"
            }).join("||"))) : r.push(t);
            return r.length && (u += function(n) {
                return "if(!$event.type.indexOf('key')&&" + n.map(yg).join("&&") + ")return null;"
            }(r)), i && (u += i), "function($event){" + u + (f ? "return " + n.value + "($event)" : e ? "return (" + n.value + ")($event)" : o ? "return " + n.value : n.value) + "}"
        }
        return f || e ? n.value : "function($event){" + (o ? "return " + n.value : n.value) + "}"
    }

    function yg(n) {
        var t = parseInt(n, 10),
            i, r;
        return t ? "$event.keyCode!==" + t : (i = sp[n], r = vg[n], "_k($event.keyCode," + JSON.stringify(n) + "," + JSON.stringify(i) + ",$event.key," + JSON.stringify(r) + ")")
    }

    function yp(n, t) {
        var i = new vp(t);
        return {
            render: "with(this){return " + (n ? ct(n, i) : '_c("div")') + "}",
            staticRenderFns: i.staticRenderFns
        }
    }

    function ct(n, t) {
        var i, u, f, r;
        if (n.parent && (n.pre = n.pre || n.parent.pre), n.staticRoot && !n.staticProcessed) return pp(n, t);
        if (n.once && !n.onceProcessed) return wp(n, t);
        if (n.for && !n.forProcessed) return bp(n, t);
        if (n.if && !n.ifProcessed) return gs(n, t);
        if ("template" !== n.tag || n.slotTarget || t.pre) {
            if ("slot" === n.tag) return function(n, t) {
                var e = n.slotName || '"default"',
                    u = wi(n, t),
                    i = "_t(" + e + (u ? "," + u : ""),
                    r = n.attrs || n.dynamicAttrs ? nf((n.attrs || []).concat(n.dynamicAttrs || []).map(function(n) {
                        return {
                            name: b(n.name),
                            value: n.value,
                            dynamic: n.dynamic
                        }
                    })) : null,
                    f = n.attrsMap["v-bind"];
                return (r || f) && !u && (i += ",null"), r && (i += "," + r), f && (i += (r ? "" : ",null") + "," + f), i + ")"
            }(n, t);
            for (n.component ? i = function(n, t, i) {
                    var r = t.inlineTemplate ? null : wi(t, i, !0);
                    return "_c(" + n + "," + kp(t, i) + (r ? "," + r : "") + ")"
                }(n.component, n, t) : ((!n.plain || n.pre && t.maybeComponent(n)) && (u = kp(n, t)), f = n.inlineTemplate ? null : wi(n, t, !0), i = "_c('" + n.tag + "'" + (u ? "," + u : "") + (f ? "," + f : "") + ")"), r = 0; r < t.transforms.length; r++) i = t.transforms[r](n, i);
            return i
        }
        return wi(n, t) || "void 0"
    }

    function pp(n, t) {
        n.staticProcessed = !0;
        var i = t.pre;
        return n.pre && (t.pre = n.pre), t.staticRenderFns.push("with(this){return " + ct(n, t) + "}"), t.pre = i, "_m(" + (t.staticRenderFns.length - 1) + (n.staticInFor ? ",true" : "") + ")"
    }

    function wp(n, t) {
        if (n.onceProcessed = !0, n.if && !n.ifProcessed) return gs(n, t);
        if (n.staticInFor) {
            for (var r = "", i = n.parent; i;) {
                if (i.for) {
                    r = i.key;
                    break
                }
                i = i.parent
            }
            return r ? "_o(" + ct(n, t) + "," + t.onceId++ +"," + r + ")" : ct(n, t)
        }
        return pp(n, t)
    }

    function gs(n, t, i, r) {
        return n.ifProcessed = !0,
            function n(t, i, r, u) {
                function e(n) {
                    return r ? r(n, i) : n.once ? wp(n, i) : ct(n, i)
                }
                if (!t.length) return u || "_e()";
                var f = t.shift();
                return f.exp ? "(" + f.exp + ")?" + e(f.block) + ":" + n(t, i, r, u) : "" + e(f.block)
            }(n.ifConditions.slice(), t, i, r)
    }

    function bp(n, t, i, r) {
        var u = n.for,
            f = n.alias,
            e = n.iterator1 ? "," + n.iterator1 : "",
            o = n.iterator2 ? "," + n.iterator2 : "";
        return n.forProcessed = !0, (r || "_l") + "((" + u + "),function(" + f + e + o + "){return " + (i || ct)(n, t) + "})"
    }

    function kp(n, t) {
        var i = "{",
            f = function(n, t) {
                var u = n.directives,
                    r, h, i, f, e, o, s;
                if (u) {
                    for (e = "directives:[", o = !1, r = 0, h = u.length; r < h; r++) i = u[r], f = !0, s = t.directives[i.name], s && (f = !!s(n, i, t.warn)), f && (o = !0, e += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ",arg:" + (i.isDynamicArg ? i.arg : '"' + i.arg + '"') : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},");
                    if (o) return e.slice(0, -1) + "]"
                }
            }(n, t),
            r, u;
        for (f && (i += f + ","), n.key && (i += "key:" + n.key + ","), n.ref && (i += "ref:" + n.ref + ","), n.refInFor && (i += "refInFor:true,"), n.pre && (i += "pre:true,"), n.component && (i += 'tag:"' + n.tag + '",'), r = 0; r < t.dataGenFns.length; r++) i += t.dataGenFns[r](n);
        return (n.attrs && (i += "attrs:" + nf(n.attrs) + ","), n.props && (i += "domProps:" + nf(n.props) + ","), n.events && (i += cp(n.events, !1) + ","), n.nativeEvents && (i += cp(n.nativeEvents, !0) + ","), n.slotTarget && !n.slotScope && (i += "slot:" + n.slotTarget + ","), n.scopedSlots && (i += function(n, t, i) {
            var u = n.for || Object.keys(t).some(function(n) {
                    var i = t[n];
                    return i.slotTargetDynamic || i.if || i.for || dp(i)
                }),
                e = !!n.if,
                r, f;
            if (!u)
                for (r = n.parent; r;) {
                    if (r.slotScope && r.slotScope !== du || r.for) {
                        u = !0;
                        break
                    }
                    r.if && (e = !0);
                    r = r.parent
                }
            return f = Object.keys(t).map(function(n) {
                return nh(t[n], i)
            }).join(","), "scopedSlots:_u([" + f + "]" + (u ? ",null,true" : "") + (!u && e ? ",null,false," + function(n) {
                for (var t = 5381, i = n.length; i;) t = 33 * t ^ n.charCodeAt(--i);
                return t >>> 0
            }(f) : "") + ")"
        }(n, n.scopedSlots, t) + ","), n.model && (i += "model:{value:" + n.model.value + ",callback:" + n.model.callback + ",expression:" + n.model.expression + "},"), n.inlineTemplate) && (u = function(n, t) {
            var i = n.children[0],
                r;
            if (i && 1 === i.type) return r = yp(i, t.options), "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(n) {
                return "function(){" + n + "}"
            }).join(",") + "]}"
        }(n, t), u && (i += u + ",")), i = i.replace(/,$/, "") + "}", n.dynamicAttrs && (i = "_b(" + i + ',"' + n.tag + '",' + nf(n.dynamicAttrs) + ")"), n.wrapData && (i = n.wrapData(i)), n.wrapListeners && (i = n.wrapListeners(i)), i
    }

    function dp(n) {
        return 1 === n.type && ("slot" === n.tag || n.children.some(dp))
    }

    function nh(n, t) {
        var i = n.attrsMap["slot-scope"];
        if (n.if && !n.ifProcessed && !i) return gs(n, t, nh, "null");
        if (n.for && !n.forProcessed) return bp(n, t, nh);
        var r = n.slotScope === du ? "" : String(n.slotScope),
            u = "function(" + r + "){return " + ("template" === n.tag ? n.if && i ? "(" + n.if+")?" + (wi(n, t) || "undefined") + ":undefined" : wi(n, t) || "undefined" : ct(n, t)) + "}",
            f = r ? "" : ",proxy:true";
        return "{key:" + (n.slotTarget || '"default"') + ",fn:" + u + f + "}"
    }

    function wi(n, t, i, r, u) {
        var e = n.children,
            f, s, o, h;
        if (e.length) return (f = e[0], 1 === e.length && f.for && "template" !== f.tag && "slot" !== f.tag) ? (s = i ? t.maybeComponent(f) ? ",1" : ",0" : "", "" + (r || ct)(f, t) + s) : (o = i ? function(n, t) {
            for (var i, r = 0, u = 0; u < n.length; u++)
                if (i = n[u], 1 === i.type) {
                    if (gp(i) || i.ifConditions && i.ifConditions.some(function(n) {
                            return gp(n.block)
                        })) {
                        r = 2;
                        break
                    }(t(i) || i.ifConditions && i.ifConditions.some(function(n) {
                        return t(n.block)
                    })) && (r = 1)
                }
            return r
        }(e, t.maybeComponent) : 0, h = u || pg, "[" + e.map(function(n) {
            return h(n, t)
        }).join(",") + "]" + (o ? "," + o : ""))
    }

    function gp(n) {
        return void 0 !== n.for || "template" === n.tag || "slot" === n.tag
    }

    function pg(n, t) {
        return 1 === n.type ? ct(n, t) : 3 === n.type && n.isComment ? (r = n, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (i = n).type ? i.expression : nw(JSON.stringify(i.text))) + ")";
        var i, r
    }

    function nf(n) {
        for (var i, f, t = "", r = "", u = 0; u < n.length; u++) i = n[u], f = nw(i.value), i.dynamic ? r += i.name + "," + f + "," : t += '"' + i.name + '":' + f + ",";
        return t = "{" + t.slice(0, -1) + "}", r ? "_d(" + t + ",[" + r.slice(0, -1) + "])" : t
    }

    function nw(n) {
        return n.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }

    function tw(n, t) {
        try {
            return new Function(n)
        } catch (i) {
            return t.push({
                err: i,
                code: n
            }), o
        }
    }

    function wg(n) {
        var t = Object.create(null);
        return function(r, u) {
            var f;
            if ((u = i({}, u)).warn, delete u.warn, f = u.delimiters ? String(u.delimiters) + r : r, t[f]) return t[f];
            var o = n(r, u),
                e = {},
                s = [];
            return e.render = tw(o.render, s), e.staticRenderFns = o.staticRenderFns.map(function(n) {
                return tw(n, s)
            }), t[f] = e
        }
    }

    function rw(n) {
        return (th = th || document.createElement("div")).innerHTML = n ? '<a href="\n"/>' : '<div a="\n"/>', th.innerHTML.indexOf("&#10;") > 0
    }
    var w = Object.freeze({}),
        tf = Object.prototype.toString,
        fw = e("slot,component", !0),
        ew = e("key,ref,slot,slot-scope,is"),
        ow = Object.prototype.hasOwnProperty,
        sw = /-(\w)/g,
        b = g(function(n) {
            return n.replace(sw, function(n, t) {
                return t ? t.toUpperCase() : ""
            })
        }),
        hw = g(function(n) {
            return n.charAt(0).toUpperCase() + n.slice(1)
        }),
        cw = /\B([A-Z])/g,
        dt = g(function(n) {
            return n.replace(cw, "-$1").toLowerCase()
        }),
        lw = Function.prototype.bind ? function(n, t) {
            return n.bind(t)
        } : function(n, t) {
            function i(i) {
                var r = arguments.length;
                return r ? r > 1 ? n.apply(t, arguments) : n.call(t, i) : n.call(t)
            }
            return i._length = n.length, i
        },
        nt = function() {
            return !1
        },
        eh = function(n) {
            return n
        },
        sh = "data-server-rendered",
        ar = ["component", "directive", "filter"],
        hh = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        y = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: nt,
            isReservedAttr: nt,
            isUnknownElement: nt,
            getTagNamespace: o,
            parsePlatformTagName: eh,
            mustUseProp: nt,
            async: !0,
            _lifecycleHooks: hh
        },
        ch = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,
        aw = new RegExp("[^" + ch.source + ".$_\\d]"),
        ff, vw = "__proto__" in {},
        l = "undefined" != typeof window,
        ef = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        yw = ef && WXEnvironment.platform.toLowerCase(),
        s = l && window.navigator.userAgent.toLowerCase(),
        lt = s && /msie|trident/.test(s),
        oi = s && s.indexOf("msie 9.0") > 0,
        lh = s && s.indexOf("edge/") > 0,
        pw = (s && s.indexOf("android"), s && /iphone|ipad|ipod|ios/.test(s) || "ios" === yw),
        ah = (s && /chrome\/\d+/.test(s), s && /phantomjs/.test(s), s && s.match(/firefox\/(\d+)/)),
        of = {}.watch,
        vh = !1,
        sf, si, di, vr, gi, nr, a, hf, at, lf, tr, yh, wr, ir, tt, wh, nc, te, ie, iu, oe, vc, se, ur, uu, pt, ou, dc, k, et, gc, rl, de, el, fr, cu, al, vl, wt, vi, yl, pl, bl, na, oo, ia, lu, bt, au, so, ra, ua, hr, cr, vu, ca, po, va, pa, wo, nv, ko, ts, hv, wv, us, ny, os, uy, rp, up, ap, vp, iw, th, ih, rh;
    if (l) try {
        sf = {};
        Object.defineProperty(sf, "passive", {
            get: function() {
                vh = !0
            }
        });
        window.addEventListener("test-passive", null, sf)
    } catch (w) {}
    si = function() {
        return void 0 === ff && (ff = !l && !ef && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), ff
    };
    di = l && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    gi = "undefined" != typeof Symbol && hi(Symbol) && "undefined" != typeof Reflect && hi(Reflect.ownKeys);
    vr = "undefined" != typeof Set && hi(Set) ? Set : function() {
        function n() {
            this.set = Object.create(null)
        }
        return n.prototype.has = function(n) {
            return !0 === this.set[n]
        }, n.prototype.add = function(n) {
            this.set[n] = !0
        }, n.prototype.clear = function() {
            this.set = Object.create(null)
        }, n
    }();
    var ww = o,
        bw = 0,
        p = function() {
            this.id = bw++;
            this.subs = []
        };
    p.prototype.addSub = function(n) {
        this.subs.push(n)
    };
    p.prototype.removeSub = function(n) {
        rt(this.subs, n)
    };
    p.prototype.depend = function() {
        p.target && p.target.addDep(this)
    };
    p.prototype.notify = function() {
        for (var t = this.subs.slice(), n = 0, i = t.length; n < i; n++) t[n].update()
    };
    p.target = null;
    nr = [];
    a = function(n, t, i, r, u, f, e, o) {
        this.tag = n;
        this.data = t;
        this.children = i;
        this.text = r;
        this.elm = u;
        this.ns = void 0;
        this.context = f;
        this.fnContext = void 0;
        this.fnOptions = void 0;
        this.fnScopeId = void 0;
        this.key = t && t.key;
        this.componentOptions = e;
        this.componentInstance = void 0;
        this.parent = void 0;
        this.raw = !1;
        this.isStatic = !1;
        this.isRootInsert = !0;
        this.isComment = !1;
        this.isCloned = !1;
        this.isOnce = !1;
        this.asyncFactory = o;
        this.asyncMeta = void 0;
        this.isAsyncPlaceholder = !1
    };
    hf = {
        child: {
            configurable: !0
        }
    };
    hf.child.get = function() {
        return this.componentInstance
    };
    Object.defineProperties(a.prototype, hf);
    at = function(n) {
        void 0 === n && (n = "");
        var t = new a;
        return t.text = n, t.isComment = !0, t
    };
    lf = Array.prototype;
    tr = Object.create(lf);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(n) {
        var t = lf[n];
        ei(tr, n, function() {
            for (var u, e, f, i = [], r = arguments.length; r--;) i[r] = arguments[r];
            e = t.apply(this, i);
            f = this.__ob__;
            switch (n) {
                case "push":
                case "unshift":
                    u = i;
                    break;
                case "splice":
                    u = i.slice(2)
            }
            return u && f.observeArray(u), f.dep.notify(), e
        })
    });
    yh = Object.getOwnPropertyNames(tr);
    wr = !0;
    ir = function(n) {
        var t;
        this.value = n;
        this.dep = new p;
        this.vmCount = 0;
        ei(n, "__ob__", this);
        Array.isArray(n) ? (vw ? (t = tr, n.__proto__ = t) : function(n, t, i) {
            for (var u, r = 0, f = i.length; r < f; r++) u = i[r], ei(n, u, t[u])
        }(n, tr, yh), this.observeArray(n)) : this.walk(n)
    };
    ir.prototype.walk = function(n) {
        for (var i = Object.keys(n), t = 0; t < i.length; t++) ti(n, i[t])
    };
    ir.prototype.observeArray = function(n) {
        for (var t = 0, i = n.length; t < i; t++) ni(n[t])
    };
    tt = y.optionMergeStrategies;
    tt.data = function(n, t, i) {
        return i ? yf(n, t, i) : t && "function" != typeof t ? n : yf(n, t)
    };
    hh.forEach(function(n) {
        tt[n] = kw
    });
    ar.forEach(function(n) {
        tt[n + "s"] = dw
    });
    tt.watch = function(n, t) {
        var u, e, r, f;
        if (n === of && (n = void 0), t === of && (t = void 0), !t) return Object.create(n || null);
        if (!n) return t;
        u = {};
        for (e in i(u, n), t) r = u[e], f = t[e], r && !Array.isArray(r) && (r = [r]), u[e] = r ? r.concat(f) : Array.isArray(f) ? f : [f];
        return u
    };
    tt.props = tt.methods = tt.inject = tt.computed = function(n, t) {
        if (!n) return t;
        var r = Object.create(null);
        return i(r, n), t && i(r, t), r
    };
    tt.provide = yf;
    wh = function(n, t) {
        return void 0 === t ? n : t
    };
    var kr, kf = !1,
        df = [],
        gf = !1;
    if ("undefined" != typeof Promise && hi(Promise)) nc = Promise.resolve(), kr = function() {
        nc.then(dr);
        pw && setTimeout(o)
    }, kf = !0;
    else if (lt || "undefined" == typeof MutationObserver || !hi(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) kr = "undefined" != typeof setImmediate && hi(setImmediate) ? function() {
        setImmediate(dr)
    } : function() {
        setTimeout(dr, 0)
    };
    else {
        var gr = 1,
            gw = new MutationObserver(dr),
            tc = document.createTextNode(String(gr));
        gw.observe(tc, {
            characterData: !0
        });
        kr = function() {
            gr = (gr + 1) % 2;
            tc.data = String(gr)
        };
        kf = !0
    }
    te = new vr;
    ie = g(function(n) {
        var t = "&" === n.charAt(0),
            i = "~" === (n = t ? n.slice(1) : n).charAt(0),
            r = "!" === (n = i ? n.slice(1) : n).charAt(0);
        return {
            name: n = r ? n.slice(1) : n,
            once: i,
            capture: r,
            passive: t
        }
    });
    hc(ee.prototype);
    iu = {
        init: function(t, i) {
            if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                var r = t;
                iu.prepatch(r, r)
            } else(t.componentInstance = function(t, i) {
                var r = {
                        _isComponent: !0,
                        _parentVnode: t,
                        parent: i
                    },
                    u = t.data.inlineTemplate;
                return n(u) && (r.render = u.render, r.staticRenderFns = u.staticRenderFns), new t.componentOptions.Ctor(r)
            }(t, pt)).$mount(i ? t.elm : void 0, i)
        },
        prepatch: function(n, t) {
            var i = t.componentOptions;
            ! function(n, t, i, r, u) {
                var f = r.data.scopedSlots,
                    s = n.$scopedSlots,
                    a = !!(f && !f.$stable || s !== w && !s.$stable || f && n.$scopedSlots.$key !== f.$key),
                    v = !!(u || n.$options._renderChildren || a),
                    o, c, l;
                if (n.$options._parentVnode = r, n.$vnode = r, n._vnode && (n._vnode.parent = r), n.$options._renderChildren = u, n.$attrs = r.data.attrs || w, n.$listeners = i || w, t && n.$options.props) {
                    vt(!1);
                    for (var y = n._props, h = n.$options._propKeys || [], e = 0; e < h.length; e++) o = h[e], c = n.$options.props, y[o] = wf(o, c, t, n);
                    vt(!0);
                    n.$options.propsData = t
                }
                i = i || w;
                l = n.$options._parentListeners;
                n.$options._parentListeners = i;
                pc(n, i, l);
                v && (n.$slots = fe(u, r.context), n.$forceUpdate())
            }(t.componentInstance = n.componentInstance, i.propsData, i.listeners, t, i.children)
        },
        insert: function(n) {
            var i, r = n.context,
                t = n.componentInstance;
            t._isMounted || (t._isMounted = !0, it(t, "mounted"));
            n.data.keepAlive && (r._isMounted ? ((i = t)._inactive = !1, le.push(i)) : ce(t, !0))
        },
        destroy: function(n) {
            var t = n.componentInstance;
            t._isDestroyed || (n.data.keepAlive ? function n(t, i) {
                if ((!i || (t._directInactive = !0, !bc(t))) && !t._inactive) {
                    t._inactive = !0;
                    for (var r = 0; r < t.$children.length; r++) n(t.$children[r]);
                    it(t, "deactivated")
                }
            }(t, !0) : t.$destroy())
        }
    };
    oe = Object.keys(iu);
    vc = 1;
    se = 2;
    uu = null;
    pt = null;
    var ft = [],
        le = [],
        eu = {},
        ae = !1,
        ve = !1,
        li = 0,
        kc = 0,
        ye = Date.now;
    l && !lt && (ou = window.performance, ou && "function" == typeof ou.now && ye() > document.createEvent("Event").timeStamp && (ye = function() {
        return ou.now()
    }));
    dc = 0;
    k = function(n, t, i, r, u) {
        this.vm = n;
        u && (n._watcher = this);
        n._watchers.push(this);
        r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1;
        this.cb = i;
        this.id = ++dc;
        this.active = !0;
        this.dirty = this.lazy;
        this.deps = [];
        this.newDeps = [];
        this.depIds = new vr;
        this.newDepIds = new vr;
        this.expression = "";
        "function" == typeof t ? this.getter = t : (this.getter = function(n) {
            if (!aw.test(n)) {
                var t = n.split(".");
                return function(n) {
                    for (var i = 0; i < t.length; i++) {
                        if (!n) return;
                        n = n[t[i]]
                    }
                    return n
                }
            }
        }(t), this.getter || (this.getter = o));
        this.value = this.lazy ? void 0 : this.get()
    };
    k.prototype.get = function() {
        var n, t;
        yr(this);
        t = this.vm;
        try {
            n = this.getter.call(t, t)
        } catch (n) {
            if (!this.user) throw n;
            ut(n, t, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && nu(n);
            pr();
            this.cleanupDeps()
        }
        return n
    };
    k.prototype.addDep = function(n) {
        var t = n.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(n), this.depIds.has(t) || n.addSub(this))
    };
    k.prototype.cleanupDeps = function() {
        for (var i, n, t = this.deps.length; t--;) i = this.deps[t], this.newDepIds.has(i.id) || i.removeSub(this);
        n = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = n;
        this.newDepIds.clear();
        n = this.deps;
        this.deps = this.newDeps;
        this.newDeps = n;
        this.newDeps.length = 0
    };
    k.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(n) {
            var i = n.id,
                t;
            if (null == eu[i]) {
                if (eu[i] = !0, ve) {
                    for (t = ft.length - 1; t > li && ft[t].id > n.id;) t--;
                    ft.splice(t + 1, 0, n)
                } else ft.push(n);
                ae || (ae = !0, ne(bb))
            }
        }(this)
    };
    k.prototype.run = function() {
        var n, t;
        if (this.active && (n = this.get(), n !== this.value || h(n) || this.deep))
            if (t = this.value, this.value = n, this.user) try {
                this.cb.call(this.vm, n, t)
            } catch (n) {
                ut(n, this.vm, 'callback for watcher "' + this.expression + '"')
            } else this.cb.call(this.vm, n, t)
    };
    k.prototype.evaluate = function() {
        this.value = this.get();
        this.dirty = !1
    };
    k.prototype.depend = function() {
        for (var n = this.deps.length; n--;) this.deps[n].depend()
    };
    k.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || rt(this.vm._watchers, this);
            for (var n = this.deps.length; n--;) this.deps[n].removeSub(this);
            this.active = !1
        }
    };
    et = {
        enumerable: !0,
        configurable: !0,
        get: o,
        set: o
    };
    gc = {
        lazy: !0
    };
    rl = 0;
    ! function(n) {
        n.prototype._init = function(n) {
            var t = this;
            t._uid = rl++;
            t._isVue = !0;
            n && n._isComponent ? function(n, t) {
                var i = n.$options = Object.create(n.constructor.options),
                    u = t._parentVnode,
                    r;
                i.parent = t.parent;
                i._parentVnode = u;
                r = u.componentOptions;
                i.propsData = r.propsData;
                i._parentListeners = r.listeners;
                i._renderChildren = r.children;
                i._componentTag = r.tag;
                t.render && (i.render = t.render, i.staticRenderFns = t.staticRenderFns)
            }(t, n) : t.$options = ii(be(t.constructor), n || {}, t);
            t._renderProxy = t;
            t._self = t,
                function(n) {
                    var i = n.$options,
                        t = i.parent;
                    if (t && !i.abstract) {
                        for (; t.$options.abstract && t.$parent;) t = t.$parent;
                        t.$children.push(n)
                    }
                    n.$parent = t;
                    n.$root = t ? t.$root : n;
                    n.$children = [];
                    n.$refs = {};
                    n._watcher = null;
                    n._inactive = null;
                    n._directInactive = !1;
                    n._isMounted = !1;
                    n._isDestroyed = !1;
                    n._isBeingDestroyed = !1
                }(t),
                function(n) {
                    n._events = Object.create(null);
                    n._hasHookEvent = !1;
                    var t = n.$options._parentListeners;
                    t && pc(n, t)
                }(t),
                function(n) {
                    var r;
                    n._vnode = null;
                    n._staticTrees = null;
                    var i = n.$options,
                        t = n.$vnode = i._parentVnode,
                        u = t && t.context;
                    n.$slots = fe(i._renderChildren, u);
                    n.$scopedSlots = w;
                    n._c = function(t, i, r, u) {
                        return ru(n, t, i, r, u, !1)
                    };
                    n.$createElement = function(t, i, r, u) {
                        return ru(n, t, i, r, u, !0)
                    };
                    r = t && t.data;
                    ti(n, "$attrs", r && r.attrs || w, null, !0);
                    ti(n, "$listeners", i._parentListeners || w, null, !0)
                }(t);
            it(t, "beforeCreate"),
                function(n) {
                    var t = uc(n.$options.inject, n);
                    t && (vt(!1), Object.keys(t).forEach(function(i) {
                        ti(n, i, t[i])
                    }), vt(!0))
                }(t);
            kb(t),
                function(n) {
                    var t = n.$options.provide;
                    t && (n._provided = "function" == typeof t ? t.call(n) : t)
                }(t);
            it(t, "created");
            t.$options.el && t.$mount(t.$options.el)
        }
    }(r),
    function(n) {
        var t = {
                get: function() {
                    return this._data
                }
            },
            i = {
                get: function() {
                    return this._props
                }
            };
        Object.defineProperty(n.prototype, "$data", t);
        Object.defineProperty(n.prototype, "$props", i);
        n.prototype.$set = af;
        n.prototype.$delete = ph;
        n.prototype.$watch = function(n, t, i) {
            if (v(t)) return we(this, n, t, i);
            (i = i || {}).user = !0;
            var r = new k(this, n, t, i);
            if (i.immediate) try {
                t.call(this, r.value)
            } catch (n) {
                ut(n, this, 'callback for immediate watcher "' + r.expression + '"')
            }
            return function() {
                r.teardown()
            }
        }
    }(r),
    function(n) {
        var t = /^hook:/;
        n.prototype.$on = function(n, i) {
            var r = this,
                u, f;
            if (Array.isArray(n))
                for (u = 0, f = n.length; u < f; u++) r.$on(n[u], i);
            else(r._events[n] || (r._events[n] = [])).push(i), t.test(n) && (r._hasHookEvent = !0);
            return r
        };
        n.prototype.$once = function(n, t) {
            function r() {
                i.$off(n, r);
                t.apply(i, arguments)
            }
            var i = this;
            return r.fn = t, i.$on(n, r), i
        };
        n.prototype.$off = function(n, t) {
            var i = this,
                u, e, o, r, f;
            if (!arguments.length) return i._events = Object.create(null), i;
            if (Array.isArray(n)) {
                for (u = 0, e = n.length; u < e; u++) i.$off(n[u], t);
                return i
            }
            if (r = i._events[n], !r) return i;
            if (!t) return i._events[n] = null, i;
            for (f = r.length; f--;)
                if ((o = r[f]) === t || o.fn === t) {
                    r.splice(f, 1);
                    break
                }
            return i
        };
        n.prototype.$emit = function(n) {
            var t = this._events[n];
            if (t) {
                t = t.length > 1 ? uf(t) : t;
                for (var r = uf(arguments, 1), u = 'event handler for "' + n + '"', i = 0, f = t.length; i < f; i++) br(t[i], this, r, this, u)
            }
            return this
        }
    }(r),
    function(n) {
        n.prototype._update = function(n, t) {
            var i = this,
                r = i.$el,
                u = i._vnode,
                f = wc(i);
            i._vnode = n;
            i.$el = u ? i.__patch__(u, n) : i.__patch__(i.$el, n, t, !1);
            f();
            r && (r.__vue__ = null);
            i.$el && (i.$el.__vue__ = i);
            i.$vnode && i.$parent && i.$vnode === i.$parent._vnode && (i.$parent.$el = i.$el)
        };
        n.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update()
        };
        n.prototype.$destroy = function() {
            var n = this,
                t, i;
            if (!n._isBeingDestroyed) {
                for (it(n, "beforeDestroy"), n._isBeingDestroyed = !0, t = n.$parent, !t || t._isBeingDestroyed || n.$options.abstract || rt(t.$children, n), n._watcher && n._watcher.teardown(), i = n._watchers.length; i--;) n._watchers[i].teardown();
                n._data.__ob__ && n._data.__ob__.vmCount--;
                n._isDestroyed = !0;
                n.__patch__(n._vnode, null);
                it(n, "destroyed");
                n.$off();
                n.$el && (n.$el.__vue__ = null);
                n.$vnode && (n.$vnode.parent = null)
            }
        }
    }(r),
    function(n) {
        hc(n.prototype);
        n.prototype.$nextTick = function(n) {
            return ne(n, this)
        };
        n.prototype._render = function() {
            var n, t = this,
                r = t.$options,
                u = r.render,
                i = r._parentVnode;
            i && (t.$scopedSlots = tu(i.data.scopedSlots, t.$slots, t.$scopedSlots));
            t.$vnode = i;
            try {
                uu = t;
                n = u.call(t._renderProxy, t.$createElement)
            } catch (r) {
                ut(r, t, "render");
                n = t._vnode
            } finally {
                uu = null
            }
            return Array.isArray(n) && 1 === n.length && (n = n[0]), n instanceof a || (n = at()), n.parent = i, n
        }
    }(r);
    de = [String, RegExp, Array];
    el = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: de,
                exclude: de,
                max: [String, Number]
            },
            created: function() {
                this.cache = Object.create(null);
                this.keys = []
            },
            destroyed: function() {
                for (var n in this.cache) ke(this.cache, n, this.keys)
            },
            mounted: function() {
                var n = this;
                this.$watch("include", function(t) {
                    fl(n, function(n) {
                        return su(t, n)
                    })
                });
                this.$watch("exclude", function(t) {
                    fl(n, function(n) {
                        return !su(t, n)
                    })
                })
            },
            render: function() {
                var e = this.$slots.default,
                    n = yc(e),
                    r = n && n.componentOptions;
                if (r) {
                    var u = ul(r),
                        o = this.include,
                        s = this.exclude;
                    if (o && (!u || !su(o, u)) || s && u && su(s, u)) return n;
                    var f = this.cache,
                        t = this.keys,
                        i = null == n.key ? r.Ctor.cid + (r.tag ? "::" + r.tag : "") : n.key;
                    f[i] ? (n.componentInstance = f[i].componentInstance, rt(t, i), t.push(i)) : (f[i] = n, t.push(i), this.max && t.length > parseInt(this.max) && ke(f, t[0], t, this._vnode));
                    n.data.keepAlive = !0
                }
                return n || e && e[0]
            }
        }
    };
    ! function(n) {
        var t = {
            get: function() {
                return y
            }
        };
        Object.defineProperty(n, "config", t);
        n.util = {
            warn: ww,
            extend: i,
            mergeOptions: ii,
            defineReactive: ti
        };
        n.set = af;
        n.delete = ph;
        n.nextTick = ne;
        n.observable = function(n) {
            return ni(n), n
        };
        n.options = Object.create(null);
        ar.forEach(function(t) {
            n.options[t + "s"] = Object.create(null)
        });
        n.options._base = n;
        i(n.options.components, el),
            function(n) {
                n.use = function(n) {
                    var i = this._installedPlugins || (this._installedPlugins = []),
                        t;
                    return i.indexOf(n) > -1 ? this : (t = uf(arguments, 1), t.unshift(this), "function" == typeof n.install ? n.install.apply(n, t) : "function" == typeof n && n.apply(null, t), i.push(n), this)
                }
            }(n),
            function(n) {
                n.mixin = function(n) {
                    return this.options = ii(this.options, n), this
                }
            }(n);
        db(n),
            function(n) {
                ar.forEach(function(t) {
                    n[t] = function(n, i) {
                        return i ? ("component" === t && v(i) && (i.name = i.name || n, i = this.options._base.extend(i)), "directive" === t && "function" == typeof i && (i = {
                            bind: i,
                            update: i
                        }), this.options[t + "s"][n] = i, i) : this.options[t + "s"][n]
                    }
                })
            }(n)
    }(r);
    Object.defineProperty(r.prototype, "$isServer", {
        get: si
    });
    Object.defineProperty(r.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext
        }
    });
    Object.defineProperty(r, "FunctionalRenderContext", {
        value: ee
    });
    r.version = "2.6.10";
    var gb = e("style,class"),
        nk = e("input,textarea,option,select,progress"),
        ol = function(n, t, i) {
            return "value" === i && nk(n) && "button" !== t || "selected" === i && "option" === n || "checked" === i && "input" === n || "muted" === i && "video" === n
        },
        sl = e("contenteditable,draggable,spellcheck"),
        tk = e("events,caret,typing,plaintext-only"),
        ik = function(n, t) {
            return hu(t) || "false" === t ? "false" : "contenteditable" === n && tk(t) ? t : "true"
        },
        rk = e("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        ge = "http://www.w3.org/1999/xlink",
        no = function(n) {
            return ":" === n.charAt(5) && "xlink" === n.slice(0, 5)
        },
        hl = function(n) {
            return no(n) ? n.slice(6, n.length) : ""
        },
        hu = function(n) {
            return null == n || !1 === n
        };
    var fk = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        },
        ek = e("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        ro = e("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        uo = function(n) {
            return ek(n) || ro(n)
        };
    fr = Object.create(null);
    cu = e("text,number,password,search,email,tel,url");
    al = Object.freeze({
        createElement: function(n, t) {
            var i = document.createElement(n);
            return "select" !== n ? i : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && i.setAttribute("multiple", "multiple"), i)
        },
        createElementNS: function(n, t) {
            return document.createElementNS(fk[n], t)
        },
        createTextNode: function(n) {
            return document.createTextNode(n)
        },
        createComment: function(n) {
            return document.createComment(n)
        },
        insertBefore: function(n, t, i) {
            n.insertBefore(t, i)
        },
        removeChild: function(n, t) {
            n.removeChild(t)
        },
        appendChild: function(n, t) {
            n.appendChild(t)
        },
        parentNode: function(n) {
            return n.parentNode
        },
        nextSibling: function(n) {
            return n.nextSibling
        },
        tagName: function(n) {
            return n.tagName
        },
        setTextContent: function(n, t) {
            n.textContent = t
        },
        setStyleScope: function(n, t) {
            n.setAttribute(t, "")
        }
    });
    vl = {
        create: function(n, t) {
            ai(t)
        },
        update: function(n, t) {
            n.data.ref !== t.data.ref && (ai(n, !0), ai(t))
        },
        destroy: function(n) {
            ai(n, !0)
        }
    };
    wt = new a("", {}, []);
    vi = ["create", "activate", "update", "remove", "destroy"];
    yl = {
        create: eo,
        update: eo,
        destroy: function(n) {
            eo(n, wt)
        }
    };
    pl = Object.create(null);
    bl = [vl, yl];
    na = {
        create: kl,
        update: kl
    };
    ra = {
        create: ta,
        update: ta
    };
    ua = /[\w).+\-_$\]]/;
    cr = "__r";
    vu = "__c";
    ca = kf && !(ah && Number(ah[1]) <= 53);
    va = {
        create: aa,
        update: aa
    };
    pa = {
        create: ya,
        update: ya
    };
    wo = g(function(n) {
        var t = {},
            i = /:(.+)/;
        return n.split(/;(?![^(]*\))/g).forEach(function(n) {
            if (n) {
                var r = n.split(i);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
            }
        }), t
    });
    var yu, pk = /^--/,
        ba = /\s*!important$/,
        ka = function(n, t, i) {
            var u, r, f;
            if (pk.test(t)) n.style.setProperty(t, i);
            else if (ba.test(i)) n.style.setProperty(dt(t), i.replace(ba, ""), "important");
            else if (u = wk(t), Array.isArray(i))
                for (r = 0, f = i.length; r < f; r++) n.style[u] = i[r];
            else n.style[u] = i
        },
        da = ["Webkit", "Moz", "ms"],
        wk = g(function(n) {
            var r, t, i;
            if (yu = yu || document.createElement("div").style, "filter" !== (n = b(n)) && n in yu) return n;
            for (r = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < da.length; t++)
                if (i = da[t] + r, i in yu) return i
        });
    nv = {
        create: ga,
        update: ga
    };
    ko = /\s+/;
    var uv = g(function(n) {
            return {
                enterClass: n + "-enter",
                enterToClass: n + "-enter-to",
                enterActiveClass: n + "-enter-active",
                leaveClass: n + "-leave",
                leaveToClass: n + "-leave-to",
                leaveActiveClass: n + "-leave-active"
            }
        }),
        fv = l && !oi,
        yi = "transition",
        go = "animation",
        pu = "transition",
        wu = "transitionend",
        ns = "animation",
        ev = "animationend";
    fv && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (pu = "WebkitTransition", wu = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ns = "WebkitAnimation", ev = "webkitAnimationEnd"));
    ts = l ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(n) {
        return n()
    };
    hv = /\b(transform|all)(,|$)/;
    wv = function(i) {
        function p(t) {
            var i = r.parentNode(t);
            n(i) && r.removeChild(i, t)
        }

        function s(t, i, e, o, s, h, c) {
            if (n(t.elm) && n(h) && (t = h[c] = cf(t)), t.isRootInsert = !s, ! function(t, i, r, e) {
                    var o = t.data,
                        s;
                    if (n(o) && (s = n(t.componentInstance) && o.keepAlive, n(o = o.hook) && n(o = o.init) && o(t, !1), n(t.componentInstance))) return g(t, i), l(r, t.elm, e), u(s) && function(t, i, r, u) {
                        for (var e, o = t; o.componentInstance;)
                            if (o = o.componentInstance._vnode, n(e = o.data) && n(e = e.transition)) {
                                for (e = 0; e < f.activate.length; ++e) f.activate[e](wt, o);
                                i.push(o);
                                break
                            }
                        l(r, t.elm, u)
                    }(t, i, r, e), !0
                }(t, i, e, o)) {
                var v = t.data,
                    y = t.children,
                    a = t.tag;
                n(a) ? (t.elm = t.ns ? r.createElementNS(t.ns, a) : r.createElement(a, t), tt(t), nt(t, y, i), n(v) && b(t, i), l(e, t.elm, o)) : u(t.isComment) ? (t.elm = r.createComment(t.text), l(e, t.elm, o)) : (t.elm = r.createTextNode(t.text), l(e, t.elm, o))
            }
        }

        function g(t, i) {
            n(t.data.pendingInsert) && (i.push.apply(i, t.data.pendingInsert), t.data.pendingInsert = null);
            t.elm = t.componentInstance.$el;
            w(t) ? (b(t, i), tt(t)) : (ai(t), i.push(t))
        }

        function l(t, i, u) {
            n(t) && (n(u) ? r.parentNode(u) === t && r.insertBefore(t, i, u) : r.appendChild(t, i))
        }

        function nt(n, t, i) {
            if (Array.isArray(t))
                for (var u = 0; u < t.length; ++u) s(t[u], i, n.elm, null, !0, t, u);
            else bi(n.text) && r.appendChild(n.elm, r.createTextNode(String(n.text)))
        }

        function w(t) {
            for (; t.componentInstance;) t = t.componentInstance._vnode;
            return n(t.tag)
        }

        function b(t, i) {
            for (var r = 0; r < f.create.length; ++r) f.create[r](wt, t);
            n(o = t.data.hook) && (n(o.create) && o.create(wt, t), n(o.insert) && i.push(t))
        }

        function tt(t) {
            var i, u;
            if (n(i = t.fnScopeId)) r.setStyleScope(t.elm, i);
            else
                for (u = t; u;) n(i = u.context) && n(i = i.$options._scopeId) && r.setStyleScope(t.elm, i), u = u.parent;
            n(i = pt) && i !== t.context && i !== t.fnContext && n(i = i.$options._scopeId) && r.setStyleScope(t.elm, i)
        }

        function it(n, t, i, r, u, f) {
            for (; r <= u; ++r) s(i[r], f, n, t, !1, i, r)
        }

        function v(t) {
            var i, r, u = t.data;
            if (n(u))
                for (n(i = u.hook) && n(i = i.destroy) && i(t), i = 0; i < f.destroy.length; ++i) f.destroy[i](t);
            if (n(i = t.children))
                for (r = 0; r < t.children.length; ++r) v(t.children[r])
        }

        function k(t, i, r, u) {
            for (; r <= u; ++r) {
                var f = i[r];
                n(f) && (n(f.tag) ? (rt(f), v(f)) : p(f.elm))
            }
        }

        function rt(t, i) {
            if (n(i) || n(t.data)) {
                var r, u = f.remove.length + 1;
                for (n(i) ? i.listeners += u : i = function(n, t) {
                        function i() {
                            0 == --i.listeners && p(n)
                        }
                        return i.listeners = t, i
                    }(t.elm, u), n(r = t.componentInstance) && n(r = r._vnode) && n(r.data) && rt(r, i), r = 0; r < f.remove.length; ++r) f.remove[r](t, i);
                n(r = t.data.hook) && n(r = r.remove) ? r(t, i) : i()
            } else p(t.elm)
        }

        function et(t, i, r, u) {
            for (var e, f = r; f < u; f++)
                if (e = i[f], n(e) && ri(t, e)) return f
        }

        function h(i, e, o, c, l, a) {
            var g, v, y, p, b;
            if (i !== e)
                if (n(e.elm) && n(c) && (e = c[l] = cf(e)), g = e.elm = i.elm, u(i.isAsyncPlaceholder)) n(e.asyncFactory.resolved) ? d(i.elm, e, o) : e.isAsyncPlaceholder = !0;
                else if (u(e.isStatic) && u(i.isStatic) && e.key === i.key && (u(e.isCloned) || u(e.isOnce))) e.componentInstance = i.componentInstance;
            else {
                if (y = e.data, n(y) && n(v = y.hook) && n(v = v.prepatch) && v(i, e), p = i.children, b = e.children, n(y) && w(e)) {
                    for (v = 0; v < f.update.length; ++v) f.update[v](i, e);
                    n(v = y.hook) && n(v = v.update) && v(i, e)
                }
                t(e.text) ? n(p) && n(b) ? p !== b && function(i, u, f, e, o) {
                    for (var d, g, nt, w = 0, a = 0, p = u.length - 1, l = u[0], v = u[p], y = f.length - 1, c = f[0], b = f[y], tt = !o; w <= p && a <= y;) t(l) ? l = u[++w] : t(v) ? v = u[--p] : ri(l, c) ? (h(l, c, e, f, a), l = u[++w], c = f[++a]) : ri(v, b) ? (h(v, b, e, f, y), v = u[--p], b = f[--y]) : ri(l, b) ? (h(l, b, e, f, y), tt && r.insertBefore(i, l.elm, r.nextSibling(v.elm)), l = u[++w], b = f[--y]) : ri(v, c) ? (h(v, c, e, f, a), tt && r.insertBefore(i, v.elm, l.elm), v = u[--p], c = f[++a]) : (t(d) && (d = ok(u, w, p)), t(g = n(c.key) ? d[c.key] : et(c, u, w, p)) ? s(c, e, i, l.elm, !1, f, a) : ri(nt = u[g], c) ? (h(nt, c, e, f, a), u[g] = void 0, tt && r.insertBefore(i, nt.elm, l.elm)) : s(c, e, i, l.elm, !1, f, a), c = f[++a]);
                    w > p ? it(i, t(f[y + 1]) ? null : f[y + 1].elm, f, a, y, e) : a > y && k(0, u, w, p)
                }(g, p, b, o, a) : n(b) ? (n(i.text) && r.setTextContent(g, ""), it(g, null, b, 0, b.length - 1, o)) : n(p) ? k(0, p, 0, p.length - 1) : n(i.text) && r.setTextContent(g, "") : i.text !== e.text && r.setTextContent(g, e.text);
                n(y) && n(v = y.hook) && n(v = v.postpatch) && v(i, e)
            }
        }

        function ut(t, i, r) {
            if (u(r) && n(t.parent)) t.parent.data.pendingInsert = i;
            else
                for (var f = 0; f < i.length; ++f) i[f].data.hook.insert(i[f])
        }

        function d(t, i, r, f) {
            var e, y = i.tag,
                o = i.data,
                h = i.children,
                l, v;
            if (f = f || o && o.pre, i.elm = t, u(i.isComment) && n(i.asyncFactory)) return i.isAsyncPlaceholder = !0, !0;
            if (n(o) && (n(e = o.hook) && n(e = e.init) && e(i, !0), n(e = i.componentInstance))) return g(i, r), !0;
            if (n(y)) {
                if (n(h))
                    if (t.hasChildNodes())
                        if (n(e = o) && n(e = e.domProps) && n(e = e.innerHTML)) {
                            if (e !== t.innerHTML) return !1
                        } else {
                            for (var a = !0, s = t.firstChild, c = 0; c < h.length; c++) {
                                if (!s || !d(s, h[c], r, f)) {
                                    a = !1;
                                    break
                                }
                                s = s.nextSibling
                            }
                            if (!a || s) return !1
                        } else nt(i, h, r);
                if (n(o)) {
                    l = !1;
                    for (v in o)
                        if (!ft(v)) {
                            l = !0;
                            b(i, r);
                            break
                        }!l && o.class && nu(o.class)
                }
            } else t.data !== i.text && (t.data = i.text);
            return !0
        }
        for (var c, f = {}, y = i.modules, r = i.nodeOps, ft, o = 0; o < vi.length; ++o)
            for (f[vi[o]] = [], c = 0; c < y.length; ++c) n(y[c][vi[o]]) && f[vi[o]].push(y[c][vi[o]]);
        return ft = e("attrs,class,staticClass,staticStyle,key"),
            function(i, e, o, c) {
                var it, rt, y, ft, p, et, l, ot, b, g, nt, tt;
                if (!t(e)) {
                    if (rt = !1, y = [], t(i)) rt = !0, s(e, y);
                    else if (ft = n(i.nodeType), !ft && ri(i, e)) h(i, e, y, null, null, c);
                    else {
                        if (ft) {
                            if (1 === i.nodeType && i.hasAttribute(sh) && (i.removeAttribute(sh), o = !0), u(o) && d(i, e, y)) return ut(e, y, !0), i;
                            it = i;
                            i = new a(r.tagName(it).toLowerCase(), {}, [], void 0, it)
                        }
                        if (p = i.elm, et = r.parentNode(p), s(e, y, p._leaveCb ? null : et, r.nextSibling(p)), n(e.parent))
                            for (l = e.parent, ot = w(e); l;) {
                                for (b = 0; b < f.destroy.length; ++b) f.destroy[b](l);
                                if (l.elm = e.elm, ot) {
                                    for (g = 0; g < f.create.length; ++g) f.create[g](wt, l);
                                    if (nt = l.data.hook.insert, nt.merged)
                                        for (tt = 1; tt < nt.fns.length; tt++) nt.fns[tt]()
                                } else ai(l);
                                l = l.parent
                            }
                        n(et) ? k(0, [i], 0, 0) : n(i.tag) && v(i)
                    }
                    return ut(e, y, rt), e.elm
                }
                n(i) && v(i)
            }
    }({
        nodeOps: al,
        modules: [na, ra, va, pa, nv, l ? {
            create: pv,
            activate: pv,
            remove: function(n, t) {
                !0 !== n.data.show ? vv(n, t) : t()
            }
        } : {}].concat(bl)
    });
    oi && document.addEventListener("selectionchange", function() {
        var n = document.activeElement;
        n && n.vmodel && fs(n, "input")
    });
    us = {
        inserted: function(n, t, i, r) {
            "select" === i.tag ? (r.elm && !r.elm._vOptions ? yt(i, "postpatch", function() {
                us.componentUpdated(n, t, i)
            }) : bv(n, t, i.context), n._vOptions = [].map.call(n.options, bu)) : ("textarea" === i.tag || cu(n.type)) && (n._vModifiers = t.modifiers, t.modifiers.lazy || (n.addEventListener("compositionstart", bk), n.addEventListener("compositionend", gv), n.addEventListener("change", gv), oi && (n.vmodel = !0)))
        },
        componentUpdated: function(n, t, i) {
            if ("select" === i.tag) {
                bv(n, t, i.context);
                var u = n._vOptions,
                    r = n._vOptions = [].map.call(n.options, bu);
                r.some(function(n, t) {
                    return !gt(n, u[t])
                }) && (n.multiple ? t.value.some(function(n) {
                    return dv(n, r)
                }) : t.value !== t.oldValue && dv(t.value, r)) && fs(n, "change")
            }
        }
    };
    ny = {
        model: us,
        show: {
            bind: function(n, t, i) {
                var r = t.value,
                    f = (i = es(i)).data && i.data.transition,
                    u = n.__vOriginalDisplay = "none" === n.style.display ? "" : n.style.display;
                r && f ? (i.data.show = !0, is(i, function() {
                    n.style.display = u
                })) : n.style.display = r ? u : "none"
            },
            update: function(n, t, i) {
                var r = t.value;
                !r != !t.oldValue && ((i = es(i)).data && i.data.transition ? (i.data.show = !0, r ? is(i, function() {
                    n.style.display = n.__vOriginalDisplay
                }) : vv(i, function() {
                    n.style.display = "none"
                })) : n.style.display = r ? n.__vOriginalDisplay : "none")
            },
            unbind: function(n, t, i, r, u) {
                u || (n.style.display = n.__vOriginalDisplay)
            }
        }
    };
    os = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    };
    var kk = function(n) {
            return n.tag || fu(n)
        },
        dk = function(n) {
            return "show" === n.name
        },
        gk = {
            name: "transition",
            props: os,
            abstract: !0,
            render: function(n) {
                var l = this,
                    e = this.$slots.default,
                    o, u, t, f, h, v, c;
                if (e && (e = e.filter(kk)).length) {
                    if ((o = this.mode, u = e[0], function(n) {
                            for (; n = n.parent;)
                                if (n.data.transition) return !0
                        }(this.$vnode)) || (t = ss(u), !t)) return u;
                    if (this._leaving) return iy(n, u);
                    f = "__transition-" + this._uid + "-";
                    t.key = null == t.key ? t.isComment ? f + "comment" : f + t.tag : bi(t.key) ? 0 === String(t.key).indexOf(f) ? t.key : f + t.key : t.key;
                    var s = (t.data || (t.data = {})).transition = ty(this),
                        a = this._vnode,
                        r = ss(a);
                    if (t.data.directives && t.data.directives.some(dk) && (t.data.show = !0), r && r.data && ! function(n, t) {
                            return t.key === n.key && t.tag === n.tag
                        }(t, r) && !fu(r) && (!r.componentInstance || !r.componentInstance._vnode.isComment)) {
                        if (h = r.data.transition = i({}, s), "out-in" === o) return this._leaving = !0, yt(h, "afterLeave", function() {
                            l._leaving = !1;
                            l.$forceUpdate()
                        }), iy(n, u);
                        if ("in-out" === o) {
                            if (fu(t)) return a;
                            c = function() {
                                v()
                            };
                            yt(s, "afterEnter", c);
                            yt(s, "enterCancelled", c);
                            yt(h, "delayLeave", function(n) {
                                v = n
                            })
                        }
                    }
                    return u
                }
            }
        },
        ry = i({
            tag: String,
            moveClass: String
        }, os);
    delete ry.mode;
    uy = {
        Transition: gk,
        TransitionGroup: {
            props: ry,
            beforeMount: function() {
                var n = this,
                    t = this._update;
                this._update = function(i, r) {
                    var u = wc(n);
                    n.__patch__(n._vnode, n.kept, !1, !0);
                    n._vnode = n.kept;
                    u();
                    t.call(n, i, r)
                }
            },
            render: function(n) {
                for (var t, i, e = this.tag || this.$vnode.data.tag || "span", o = Object.create(null), r = this.prevChildren = this.children, s = this.$slots.default || [], h = this.children = [], c = ty(this), u = 0; u < s.length; u++) t = s[u], t.tag && null != t.key && 0 !== String(t.key).indexOf("__vlist") && (h.push(t), o[t.key] = t, (t.data || (t.data = {})).transition = c);
                if (r) {
                    for (var l = [], a = [], f = 0; f < r.length; f++) i = r[f], i.data.transition = c, i.data.pos = i.elm.getBoundingClientRect(), o[i.key] ? l.push(i) : a.push(i);
                    this.kept = n(e, null, l);
                    this.removed = a
                }
                return n(e, null, h)
            },
            updated: function() {
                var n = this.prevChildren,
                    t = this.moveClass || (this.name || "v") + "-move";
                n.length && this.hasMove(n[0].elm, t) && (n.forEach(nd), n.forEach(td), n.forEach(id), this._reflow = document.body.offsetHeight, n.forEach(function(n) {
                    if (n.data.moved) {
                        var i = n.elm,
                            r = i.style;
                        fi(i, t);
                        r.transform = r.WebkitTransform = r.transitionDuration = "";
                        i.addEventListener(wu, i._moveCb = function n(r) {
                            r && r.target !== i || r && !/transform$/.test(r.propertyName) || (i.removeEventListener(wu, n), i._moveCb = null, st(i, t))
                        })
                    }
                }))
            },
            methods: {
                hasMove: function(n, t) {
                    var i, r;
                    return fv ? this._hasMove ? this._hasMove : (i = n.cloneNode(), n._transitionClasses && n._transitionClasses.forEach(function(n) {
                        iv(i, n)
                    }), tv(i, t), i.style.display = "none", this.$el.appendChild(i), r = cv(i), this.$el.removeChild(i), this._hasMove = r.hasTransform) : !1
                }
            }
        }
    };
    r.config.mustUseProp = ol;
    r.config.isReservedTag = uo;
    r.config.isReservedAttr = gb;
    r.config.getTagNamespace = ll;
    r.config.isUnknownElement = function(n) {
        if (!l) return !0;
        if (uo(n)) return !1;
        if (n = n.toLowerCase(), null != fr[n]) return fr[n];
        var t = document.createElement(n);
        return fr[n] = n.indexOf("-") > -1 ? t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : /HTMLUnknownElement/.test(t.toString())
    };
    i(r.options.directives, ny);
    i(r.options.components, uy);
    r.prototype.__patch__ = l ? wv : o;
    r.prototype.$mount = function(n, t) {
        return function(n, t, i) {
            var r;
            return n.$el = t, n.$options.render || (n.$options.render = at), it(n, "beforeMount"), r = function() {
                n._update(n._render(), i)
            }, new k(n, r, o, {
                before: function() {
                    n._isMounted && !n._isDestroyed && it(n, "beforeUpdate")
                }
            }, !0), i = !1, null == n.$vnode && (n._isMounted = !0, it(n, "mounted")), n
        }(this, n = n && l ? fo(n) : void 0, t)
    };
    l && setTimeout(function() {
        y.devtools && di && di.emit("init", r)
    }, 0);
    var rd = /\{\{((?:.|\r?\n)+?)\}\}/g,
        fy = /[-.*+?^${}()|[\]\/\\]/g,
        ud = g(function(n) {
            var t = n[0].replace(fy, "\\$&"),
                i = n[1].replace(fy, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + i, "g")
        }),
        fd = {
            staticKeys: ["staticClass"],
            transformNode: function(n, t) {
                var i, r;
                t.warn;
                i = f(n, "class");
                i && (n.staticClass = JSON.stringify(i));
                r = d(n, "class", !1);
                r && (n.classBinding = r)
            },
            genData: function(n) {
                var t = "";
                return n.staticClass && (t += "staticClass:" + n.staticClass + ","), n.classBinding && (t += "class:" + n.classBinding + ","), t
            }
        },
        hs, ed = {
            staticKeys: ["staticStyle"],
            transformNode: function(n, t) {
                var i, r;
                t.warn;
                i = f(n, "style");
                i && (n.staticStyle = JSON.stringify(wo(i)));
                r = d(n, "style", !1);
                r && (n.styleBinding = r)
            },
            genData: function(n) {
                var t = "";
                return n.staticStyle && (t += "staticStyle:" + n.staticStyle + ","), n.styleBinding && (t += "style:(" + n.styleBinding + "),"), t
            }
        },
        od = function(n) {
            return (hs = hs || document.createElement("div")).innerHTML = n, hs.textContent
        },
        sd = e("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        hd = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        cd = e("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        ld = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        ad = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        ey = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + ch.source + "]*",
        oy = "((?:" + ey + "\\:)?" + ey + ")",
        sy = new RegExp("^<" + oy),
        vd = /^\s*(\/?)>/,
        hy = new RegExp("^<\\/" + oy + "[^>]*>"),
        yd = /^<!DOCTYPE [^>]+>/i,
        cy = /^<!\--/,
        ly = /^<!\[/,
        ay = e("script,style,textarea", !0),
        vy = {},
        pd = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
            "&#39;": "'"
        },
        wd = /&(?:lt|gt|quot|amp|#39);/g,
        bd = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        kd = e("pre,textarea", !0),
        yy = function(n, t) {
            return n && kd(n) && "\n" === t[0]
        };
    var py, wy, cs, ls, as, vs, ys, by, ky = /^@|^v-on:/,
        ps = /^v-|^@|^:/,
        gd = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        dy = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        ng = /^\(|\)$/g,
        ku = /^\[.*\]$/,
        tg = /:(.*)$/,
        gy = /^:|^\.|^v-bind:/,
        np = /\.[^.\]]+(?=[^\]]*$)/g,
        ws = /^v-slot(:|$)|^#/,
        ig = /[\r\n]/,
        rg = /\s+/g,
        ug = g(od),
        du = "_empty_";
    rp = /^xmlns:NS\d+/;
    up = /^NS\d+:/;
    var fp = [fd, ed, {
            preTransformNode: function(n, t) {
                var r, u, e, o;
                if ("input" === n.tag) {
                    if (u = n.attrsMap, !u["v-model"]) return;
                    if ((u[":type"] || u["v-bind:type"]) && (r = d(n, "type")), u.type || r || !u["v-bind"] || (r = "(" + u["v-bind"] + ").type"), r) {
                        var s = f(n, "v-if", !0),
                            h = s ? "&&(" + s + ")" : "",
                            l = null != f(n, "v-else", !0),
                            c = f(n, "v-else-if", !0),
                            i = ks(n);
                        return tp(i), lo(i, "type", "checkbox"), gu(i, t), i.processed = !0, i.if = "(" + r + ")==='checkbox'" + h, pi(i, {
                            exp: i.if,
                            block: i
                        }), e = ks(n), f(e, "v-for", !0), lo(e, "type", "radio"), gu(e, t), pi(i, {
                            exp: "(" + r + ")==='radio'" + h,
                            block: e
                        }), o = ks(n), f(o, "v-for", !0), lo(o, ":type", r), gu(o, t), pi(i, {
                            exp: s,
                            block: o
                        }), l ? i.else = !0 : c && (i.elseif = c), i
                    }
                }
            }
        }],
        ep, ds, sg = {
            expectHTML: !0,
            modules: fp,
            directives: {
                model: function(n, t) {
                    var i = t.value,
                        r = t.modifiers,
                        u = n.tag,
                        f = n.attrsMap.type;
                    if (n.component) return oa(n, i, r), !1;
                    if ("select" === u) ! function(n, t, i) {
                        var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (i && i.number ? "_n(val)" : "val") + "});";
                        r = r + " " + kt(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]");
                        ot(n, "change", r, null, !0)
                    }(n, i, r);
                    else if ("input" === u && "checkbox" === f) ! function(n, t, i) {
                        var f = i && i.number,
                            r = d(n, "value") || "null",
                            u = d(n, "true-value") || "true",
                            e = d(n, "false-value") || "false";
                        ui(n, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + r + ")>-1" + ("true" === u ? ":(" + t + ")" : ":_q(" + t + "," + u + ")"));
                        ot(n, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + u + "):(" + e + ");if(Array.isArray($$a)){var $$v=" + (f ? "_n(" + r + ")" : r) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + kt(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + kt(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + kt(t, "$$c") + "}", null, !0)
                    }(n, i, r);
                    else if ("input" === u && "radio" === f) ! function(n, t, i) {
                        var u = i && i.number,
                            r = d(n, "value") || "null";
                        ui(n, "checked", "_q(" + t + "," + (r = u ? "_n(" + r + ")" : r) + ")");
                        ot(n, "change", kt(t, r), null, !0)
                    }(n, i, r);
                    else if ("input" === u || "textarea" === u) ! function(n, t, i) {
                        var e = n.attrsMap.type,
                            f = i || {},
                            o = f.lazy,
                            s = f.number,
                            h = f.trim,
                            c = !o && "range" !== e,
                            l = o ? "change" : "range" === e ? cr : "input",
                            r = "$event.target.value",
                            u;
                        h && (r = "$event.target.value.trim()");
                        s && (r = "_n(" + r + ")");
                        u = kt(t, r);
                        c && (u = "if($event.target.composing)return;" + u);
                        ui(n, "value", "(" + t + ")");
                        ot(n, l, u, null, !0);
                        (h || s) && ot(n, "blur", "$forceUpdate()")
                    }(n, i, r);
                    else if (!y.isReservedTag(u)) return oa(n, i, r), !1;
                    return !0
                },
                text: function(n, t) {
                    t.value && ui(n, "textContent", "_s(" + t.value + ")", t)
                },
                html: function(n, t) {
                    t.value && ui(n, "innerHTML", "_s(" + t.value + ")", t)
                }
            },
            isPreTag: function(n) {
                return "pre" === n
            },
            isUnaryTag: sd,
            mustUseProp: ol,
            canBeLeftOpenTag: hd,
            isReservedTag: uo,
            getTagNamespace: ll,
            staticKeys: function(n) {
                return n.reduce(function(n, t) {
                    return n.concat(t.staticKeys || [])
                }, []).join(",")
            }(fp)
        },
        hg = g(function(n) {
            return e("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (n ? "," + n : ""))
        });
    var lg = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,
        ag = /\([^)]*?\);*$/,
        op = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        sp = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            "delete": [8, 46]
        },
        vg = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            "delete": ["Backspace", "Delete", "Del"]
        },
        ht = function(n) {
            return "if(" + n + ")return null;"
        },
        hp = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: ht("$event.target !== $event.currentTarget"),
            ctrl: ht("!$event.ctrlKey"),
            shift: ht("!$event.shiftKey"),
            alt: ht("!$event.altKey"),
            meta: ht("!$event.metaKey"),
            left: ht("'button' in $event && $event.button !== 0"),
            middle: ht("'button' in $event && $event.button !== 1"),
            right: ht("'button' in $event && $event.button !== 2")
        };
    ap = {
        on: function(n, t) {
            n.wrapListeners = function(n) {
                return "_g(" + n + "," + t.value + ")"
            }
        },
        bind: function(n, t) {
            n.wrapData = function(i) {
                return "_b(" + i + ",'" + n.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
            }
        },
        cloak: o
    };
    vp = function(n) {
        this.options = n;
        this.warn = n.warn || fa;
        this.transforms = or(n.modules, "transformCode");
        this.dataGenFns = or(n.modules, "genData");
        this.directives = i(i({}, ap), n.directives);
        var t = n.isReservedTag || nt;
        this.maybeComponent = function(n) {
            return !!n.component || !t(n.tag)
        };
        this.onceId = 0;
        this.staticRenderFns = [];
        this.pre = !1
    };
    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
    ih = (iw = function(n, t) {
        var i = fg(n.trim(), t),
            r;
        return !1 !== t.optimize && cg(i, t), r = yp(i, t), {
            ast: i,
            render: r.render,
            staticRenderFns: r.staticRenderFns
        }
    }, function(n) {
        function t(t, r) {
            var u = Object.create(n),
                o = [],
                s = [],
                f, e;
            if (r)
                for (f in r.modules && (u.modules = (n.modules || []).concat(r.modules)), r.directives && (u.directives = i(Object.create(n.directives || null), r.directives)), r) "modules" !== f && "directives" !== f && (u[f] = r[f]);
            return u.warn = function(n, t, i) {
                (i ? s : o).push(n)
            }, e = iw(t.trim(), u), e.errors = o, e.tips = s, e
        }
        return {
            compile: t,
            compileToFunctions: wg(t)
        }
    })(sg);
    rh = (ih.compile, ih.compileToFunctions);
    var bg = !!l && rw(!1),
        kg = !!l && rw(!0),
        dg = g(function(n) {
            var t = fo(n);
            return t && t.innerHTML
        }),
        gg = r.prototype.$mount;
    return r.prototype.$mount = function(n, t) {
        var r, i;
        if ((n = n && fo(n)) === document.body || n === document.documentElement) return this;
        if (r = this.$options, !r.render) {
            if (i = r.template, i)
                if ("string" == typeof i) "#" === i.charAt(0) && (i = dg(i));
                else {
                    if (!i.nodeType) return this;
                    i = i.innerHTML
                } else n && (i = function(n) {
                if (n.outerHTML) return n.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(n.cloneNode(!0)), t.innerHTML
            }(n));
            if (i) {
                var u = rh(i, {
                        outputSourceRange: !1,
                        shouldDecodeNewlines: bg,
                        shouldDecodeNewlinesForHref: kg,
                        delimiters: r.delimiters,
                        comments: r.comments
                    }, this),
                    f = u.render,
                    e = u.staticRenderFns;
                r.render = f;
                r.staticRenderFns = e
            }
        }
        return gg.call(this, n, t)
    }, r.compile = rh, r
});
/*! jQuery v3.4.0 | (c) JS Foundation and other contributors | jquery.org/license */
! function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function br(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n, t)
            for (r in ee)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function it(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n
    }

    function pi(n) {
        var t = !!n && "length" in n && n.length,
            i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function c(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function bi(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < ii.call(t, n) !== r
        }) : i.filter(t, n, r)
    }

    function uu(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }

    function ut(n) {
        return n
    }

    function fi(n) {
        throw n;
    }

    function fu(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }

    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }

    function ce(n, t) {
        return t.toUpperCase()
    }

    function y(n) {
        return n.replace(se, "ms-").replace(he, ce)
    }

    function pt() {
        this.expando = i.expando + pt.uid++
    }

    function ou(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }

    function hu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && wt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function et(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && kt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = di[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), di[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
        for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
        return n
    }

    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r
    }

    function gi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function vu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) {
            for (o = o || c.appendChild(t.createElement("div")), p = (cu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = c.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = ft(e), o = s(c.appendChild(e), "script"), w && gi(o), r)
            for (v = 0; e = o[v++];) lu.test(e.type || "") && r.push(e);
        return c
    }

    function ot() {
        return !0
    }

    function st() {
        return !1
    }

    function we(n, t) {
        return n === function() {
            try {
                return f.activeElement
            } catch (n) {}
        }() == ("focus" === t)
    }

    function nr(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r, r = void 0), t) nr(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = st;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function hi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = b.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = void 0, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e
                } else f && (r.set(this, t, i.event.trigger(i.extend(f.shift(), i.Event.prototype), f, this)), n.stopImmediatePropagation())
            }
        })) : i.event.add(n, t, ot)
    }

    function pu(n, t) {
        return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }

    function no(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function to(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
    }

    function wu(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), e = s.events))
                for (f in delete h.handle, h.events = {}, e)
                    for (u = 0, c = e[f].length; u < c; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (l = o.access(n), a = i.extend({}, l), o.set(t, a))
        }
    }

    function ht(n, t, f, o) {
        t = yr.apply([], t);
        var a, w, l, v, h, b, c = 0,
            y = n.length,
            d = y - 1,
            p = t[0],
            k = u(p);
        if (k || 1 < y && "string" == typeof p && !e.checkClone && de.test(p)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = p.call(this, i, r.html()));
            ht(r, t, f, o)
        });
        if (y && (w = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = w), w || o)) {
            for (v = (l = i.map(s(a, "script"), no)).length; c < y; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (b = l[l.length - 1].ownerDocument, i.map(l, to), c = 0; c < v; c++) h = l[c], lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                    nonce: h.nonce || h.getAttribute("nonce")
                }) : br(h.textContent.replace(ge, ""), h, b))
        }
        return n
    }

    function bu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && ft(u) && gi(s(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function ni(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || ft(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && tr.test(f) && io.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f
    }

    function ku(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function ir(n) {
        var t = i.cssProps[n] || nf[n];
        return t || (n in gu ? n : nf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = du.length; t--;)
                if ((n = du[t] + i) in gu) return n
        }(n) || n)
    }

    function uf(n, t, i) {
        var r = wt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function rr(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + w[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f), "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function ff(n, t, r) {
        var f = ci(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = ni(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (tr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + rr(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function a(n, t, i, r, u) {
        return new a.prototype.init(n, t, i, r, u)
    }

    function ur() {
        li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ur) : n.setTimeout(ur, i.fx.interval), i.fx.tick())
    }

    function hf() {
        return n.setTimeout(function() {
            ct = void 0
        }), ct = Date.now()
    }

    function ai(n, t) {
        var u, r = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function cf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function v(n, t, r) {
        var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var o = ct || hf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
                return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
            },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ct || hf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(u), u
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (! function(n, t) {
                var r, f, e, u, o;
                for (r in n)
                    if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e
            }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, cf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })), f
    }

    function g(n) {
        return (n.match(l) || []).join(" ")
    }

    function nt(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function fr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || []
    }

    function hr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || fo.test(n) ? u(n, i) : hr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== it(t)) u(n, t);
        else
            for (f in t) hr(n + "[" + f + "]", t[f], r, u)
    }

    function df(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function gf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === cr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ar(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }
    var d = [],
        f = n.document,
        ue = Object.getPrototypeOf,
        b = d.slice,
        yr = d.concat,
        yi = d.push,
        ii = d.indexOf,
        ri = {},
        pr = ri.toString,
        ui = ri.hasOwnProperty,
        wr = ui.toString,
        fe = wr.call(Object),
        e = {},
        u = function(n) {
            return "function" == typeof n && "number" != typeof n.nodeType
        },
        tt = function(n) {
            return null != n && n === n.window
        },
        ee = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        kr = "3.4.0",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        k, wi, nu, tu, iu, ru, l, eu, ei, yt, kt, ki, di, gt, si, au, ct, li, lt, ef, of, sf, lf, at, af, vf, yf, er, or, ne, vt, te, vr, vi, ie, re;
    i.fn = i.prototype = {
        jquery: kr,
        constructor: i,
        length: 0,
        toArray: function() {
            return b.call(this)
        },
        get: function(n) {
            return null == n ? b.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(b.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: yi,
        sort: d.sort,
        splice: d.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== pr.call(n)) && (!(t = ue(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === fe)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        globalEval: function(n, t) {
            br(n, {
                nonce: t && t.nonce
            })
        },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break; return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(oe, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ii.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (pi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return yr.apply([], f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = d[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        ri["[object " + t + "]"] = t.toLowerCase()
    });
    k = function(n) {
        function u(n, t, r, u) {
            var s, p, l, v, w, d, g, y = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (11 !== a && (w = ar.exec(n)))
                    if (s = w[1]) {
                        if (9 === a) {
                            if (!(l = t.getElementById(s))) return r;
                            if (l.id === s) return r.push(l), r
                        } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (g = n, y = t, 1 === a && er.test(n)) {
                        for ((v = t.getAttribute("id")) ? v = v.replace(yi, pi) : t.setAttribute("id", v = f), p = (d = ft(n)).length; p--;) d[p] = "#" + v + " " + pt(d[p]);
                        g = d.join(",");
                        y = ti.test(n) && ri(t.parentNode) || t
                    }
                    try {
                        return k.apply(r, y.querySelectorAll(g)), r
                    } catch (t) {
                        lt(n, !0)
                    } finally {
                        v === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
            }
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function bi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }

        function pr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function ki(n) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function di() {}

        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && "parentNode" === e,
                s = gi++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[f] || (t[f] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if ((l[e] = y)[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function fi(n, t, i, r, e, o) {
            return r && !r[f] && (r = fi(r)), e && !e[f] && (e = fi(e, o)), l(function(f, o, s, h) {
                var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = f || function(n, t, i) {
                        for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                        return i
                    }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !f && t ? d : bt(d, w, n, s, h),
                    c = i ? e || (f ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (f) {
                    if (e || n) {
                        if (e) {
                            for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            e(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(v = c[l]) && -1 < (a = e ? nt(f, v) : w[l]) && (f[a] = !(o[a] = v))
                    }
                } else c = bt(c === o ? c.splice(b, c.length) : c), e ? e(null, o, c, h) : k.apply(o, c)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
                    return n === o
                }, c, !0), a = wt(function(n) {
                    return -1 < nt(o, n)
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [wt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(e), 1 < i && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }
        var rt, e, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            gi = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            nr = {}.hasOwnProperty,
            g = [],
            tr = g.pop,
            ir = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            rr = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            ur = new RegExp("^" + r + "*," + r + "*"),
            fr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + vi),
                PSEUDO: new RegExp("^" + ni),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + gt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r != r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            yi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            pi = function(n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            wi = function() {
                b()
            },
            vr = wt(function(n) {
                return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) {
                    ir.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        for (rt in e = u.support = {}, oi = u.isXML = function(n) {
                var i = n.namespaceURI,
                    t = (n.ownerDocument || n).documentElement;
                return !hr.test(i || t && t.nodeName || "HTML")
            }, b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", wi, !1) : u.attachEvent && u.attachEvent("onunload", wi)), e.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), e.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                    return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
                }), e.getById ? (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }) : (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var r, u, f, i = t.getElementById(n);
                        if (i) {
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                            for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                                if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                        }
                        return []
                    }
                }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                    if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    e.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", ni)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, dt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return bi(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? bi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }), i
            }, u.matches = function(n, t) {
                return u(n, null, null, t)
            }, u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== i && b(n), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
                } catch (n) {
                    lt(t, !0)
                }
                return 0 < u(t, i, null, [n]).length
            }, u.contains = function(n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            }, u.attr = function(n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var f = t.attrHandle[r.toLowerCase()],
                    u = f && nr.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
                return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            }, u.escape = function(n) {
                return (n + "").replace(yi, pi)
            }, u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(dt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            }, st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            }, (t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(rr, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = e && t.nodeName.toLowerCase(),
                                g = !h && !e,
                                l = !1;
                            if (k) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                    for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            d[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                    while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                        if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || l % r == 0 && 0 <= l / r
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[f] ? r(i) : 1 < r.length ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f])
                        }) : function(n) {
                            return r(n, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = kt(n.replace(at, "$1"));
                        return i[f] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return 0 < u(n, t).length
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return -1 < (t.textContent || st(t)).indexOf(n)
                            }
                    }),
                    lang: l(function(n) {
                        return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: ki(!1),
                    disabled: ki(!0),
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return lr.test(n.nodeName)
                    },
                    input: function(n) {
                        return cr.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            }).pseudos.nth = t.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = yr(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = pr(rt);
        return di.prototype = t.filters = t.pseudos, t.setFilters = new di, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                for (o in e && !(f = ur.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = fr.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [],
                d = [],
                e = li[n + " "];
            if (!e) {
                for (r || (r = ft(n)), s = r.length; s--;)(e = ei(r[s]))[f] ? w.push(e) : d.push(e);
                (e = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (ht = r === i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0, r || l.ownerDocument === i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) {
                                    e.push(l);
                                    break
                                }
                            s && (v = ut)
                        }
                        o && ((l = !d && l) && g--, n && tt.push(l))
                    }
                    if (g += p, o && p !== g) {
                        for (nt = 0; d = a[nt++];) d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = tr.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut, ht = it), tt
                }, o ? l(p) : p))).selector = n
            }
            return e
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(dt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), e.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(gt, function(n, t, i) {
            var r;
            if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = k;
    i.expr = k.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = k.uniqueSort;
    i.text = k.getText;
    i.isXMLDoc = k.isXML;
    i.contains = k.contains;
    i.escapeSelector = k.escape;
    var rt = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        dr = function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(bi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(bi(this, n || [], !0))
        },
        is: function(n) {
            return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length
        }
    });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || nu, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return rt(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return rt(n, "parentNode", i)
        },
        next: function(n) {
            return uu(n, "nextSibling")
        },
        prev: function(n) {
            return uu(n, "previousSibling")
        },
        nextAll: function(n) {
            return rt(n, "nextSibling")
        },
        prevAll: function(n) {
            return rt(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return rt(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return rt(n, "previousSibling", i)
        },
        siblings: function(n) {
            return dr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return dr(n.firstChild)
        },
        contents: function(n) {
            return "undefined" != typeof n.contentDocument ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) {
            h[t] = !0
        }), h) : i.extend({}, n);
        var o, r, v, f, t = [],
            s = [],
            e = -1,
            y = function() {
                for (f = f || n.once, v = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            c = {
                add: function() {
                    return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) {
                        i.each(r, function(i, r) {
                            u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r)
                        })
                    }(arguments), r && !o && y()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e--
                    }), this
                },
                has: function(n) {
                    return n ? -1 < i.inArray(n, t) : 0 < t.length
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return f = s = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return f = s = [], r || o || (t = r = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(n, t) {
                    return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!v
                }
            };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return e.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    l = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, ut, e), s(o, r, fi, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    a = e ? l : function() {
                                        try {
                                            l()
                                        } catch (l) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : ut));
                            f[2][3].add(s(0, n, u(r) ? r : fi))
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, e) : e
                    }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = b.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = 1 < arguments.length ? b.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) fu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    ei = i.Deferred();
    i.fn.ready = function(n) {
        return ei.then(n)["catch"](function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi));
    var p = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === it(r))
                for (h in e = !0, r) p(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) {
                    return c.call(i(n), r)
                })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        se = /^-ms-/,
        he = /-([a-z])/g;
    yt = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    pt.uid = 1;
    pt.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, yt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new pt,
        o = new pt,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : p(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() {
                    o.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        bt = f.documentElement,
        ft = function(n) {
            return i.contains(n.ownerDocument, n)
        },
        ve = {
            composed: !0
        };
    bt.attachShadow && (ft = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument
    });
    kt = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && ft(n) && "none" === i.css(n, "display")
    };
    ki = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        for (u in f = i.apply(n, r || []), t) n.style[u] = e[u];
        return f
    };
    di = {};
    i.fn.extend({
        show: function() {
            return et(this, !0)
        },
        hide: function() {
            return et(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dt = /^(?:checkbox|radio)$/i,
        cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        lu = /^$|^module$|\/(?:java|ecma)script/i,
        h = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    au = /<|&#?\w+;/;
    gt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    gt.appendChild(si);
    e.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    gt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue;
    var ye = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, v, k, y, w, h, s, c, o, b, d, a = r.get(n);
            if (a)
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(bt, e), u.guid || (u.guid = i.guid++), (y = a.events) || (y = a.events = {}), (v = a.handle) || (v = a.handle = function(t) {
                        if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                    }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = yu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: b.join(".")
                }, p), (c = y[o]) || ((c = y[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (o = d = (c = yu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, t = i.event.fix(n),
                s = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    }
            return r = this, s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && c(t, "input") && void 0 === r.get(t, "click") && hi(t, "click", ot), !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return dt.test(t.type) && t.click && c(t, "input") && void 0 === r.get(t, "click") && hi(t, "click"), !0
                },
                _default: function(n) {
                    var t = n.target;
                    return dt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ot : st, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ot;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ot;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ot;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return hi(this, n, we), !1
            },
            trigger: function() {
                return hi(this, n), !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return nr(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return nr(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = st), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        de = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(be, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = ft(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && dt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
                else wu(n, h);
            return 0 < (f = s(h, "script")).length && gi(f, !y && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (yt(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return bu(this, n, !0)
        },
        remove: function(n) {
            return bu(this, n)
        },
        text: function(n) {
            return p(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return ht(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return ht(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !ke.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ht(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var tr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
        ci = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        },
        io = new RegExp(w.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                bt.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 12 === u(t.offsetWidth / 3);
                bt.removeChild(o);
                t = null
            }
        }

        function u(n) {
            return Math.round(parseFloat(n))
        }
        var s, h, c, l, a, o = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, {
            boxSizingReliable: function() {
                return r(), h
            },
            pixelBoxStyles: function() {
                return r(), l
            },
            pixelPosition: function() {
                return r(), s
            },
            reliableMarginLeft: function() {
                return r(), a
            },
            scrollboxSize: function() {
                return r(), c
            }
        }))
    }();
    var du = ["Webkit", "Moz", "ms"],
        gu = f.createElement("div").style,
        nf = {};
    var ro = /^(none|table(?!-c[ea]).+)/,
        tf = /^--/,
        uo = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        rf = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = ni(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = tf.test(t),
                    s = n.style;
                if (l || (t = ir(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = wt.exec(r)) && f[1] && (r = hu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return tf.test(t) || (t = ir(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in rf && (f = rf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return !ro.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ff(n, t, u) : ki(n, uo, function() {
                    return ff(n, t, u)
                })
            },
            set: function(n, r, u) {
                var s, f = ci(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? rr(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - rr(n, t, "border", !1, f) - .5)), o && (s = wt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), uf(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = ku(e.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ki(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = uf)
    });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = a.propHooks[this.prop];
            return n && n.get ? n.get(this) : a.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = a.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this
        }
    }).init.prototype = a.prototype;
    (a.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[ir(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = a.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = a.prototype.init;
    i.fx.step = {};
    of = /^(?:toggle|show|hide)$/;
    sf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return hu(i.elem, n, wt.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            u(n) ? (t = n, n = ["*"]) : n = n.match(l);
            for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && kt(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                    c.unqueued || b()
                }), c.unqueued++, v.always(function() {
                    v.always(function() {
                        c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire()
                    })
                })), t)
                if (y = t[f], of.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (et([n], !0), o = n.style.display || o, l = i.css(n, "display"), et([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                        s.display = o
                    }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                        s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2]
                    })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && et([n], !0), v.done(function() {
                    for (f in a || et([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
                })), h = cf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) {
            t ? v.prefilters.unshift(n) : v.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && !1 !== n && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && sf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ai("show"),
        slideUp: ai("hide"),
        slideToggle: ai("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (ct = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ct = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        li || (li = !0, ur())
    };
    i.fx.stop = function() {
        li = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    };
    lt = f.createElement("input");
    ef = f.createElement("select").appendChild(f.createElement("option"));
    lt.type = "checkbox";
    e.checkOn = "" !== lt.value;
    e.optSelected = ef.selected;
    (lt = f.createElement("input")).value = "t";
    lt.type = "radio";
    e.radioValue = "t" === lt.value;
    at = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return p(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? lf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && c(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    lf = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = at[t] || i.find.attr;
        at[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = at[u], at[u] = f, f = null != r(n, t, i) ? u : null, at[u] = e), f
        }
    });
    af = /^(?:input|select|textarea|button)$/i;
    vf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return p(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : af.test(n.nodeName) || vf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, nt(this)))
            });
            if ((o = fr(n)).length)
                while (t = this[c++])
                    if (f = nt(t), r = 1 === t.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, nt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((o = fr(n)).length)
                while (r = this[c++])
                    if (f = nt(r), t = 1 === r.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = fr(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + g(nt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    yf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(yf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : g(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    e.focusin = "onfocusin" in n;
    er = /^(?:focusinfocus|focusoutblur)$/;
    or = function(n) {
        n.stopPropagation()
    };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = ui.call(t, "type") ? t.type : t,
                b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !er.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h, er.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && yt(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !yt(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, or), o[h](), t.isPropagationStopped() && p.removeEventListener(h, or), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var ti = n.location,
        pf = Date.now(),
        sr = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var fo = /\[\]$/,
        wf = /\r?\n/g,
        eo = /^(?:submit|button|image|reset|file)$/i,
        oo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value)
        });
        else
            for (r in n) hr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !dt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(wf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(wf, "\r\n")
                }
            }).get()
        }
    });
    var so = /%20/g,
        ho = /#.*$/,
        co = /([?&])_=[^&]*/,
        lo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ao = /^(?:GET|HEAD)$/,
        vo = /^\/\//,
        bf = {},
        cr = {},
        kf = "*/".concat("*"),
        lr = f.createElement("a");
    return lr.href = ti.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ti.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ar(ar(n, i.ajaxSettings), t) : ar(i.ajaxSettings, n)
        },
        ajaxPrefilter: df(bf),
        ajaxTransport: df(cr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            }
                    if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(u, e, f)), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                    !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try {
                                t = f(t)
                            } catch (n) {
                                return {
                                    state: "parsererror",
                                    error: f ? n : "No conversion from " + e + " to " + u
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = lo.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return null == s && (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return a && a.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(vo, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = lr.protocol + "//" + lr.host != c.protocol + "//" + c.host
                } catch (t) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), gf(bf, u, r, e), s) return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ao.test(u.type), o = u.url.replace(ho, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(so, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (sr.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(co, "$1"), p = (sr.test(o) ? "&" : "?") + "_=" + pf++ +p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + kf + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = gf(cr, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }), i._evalUrl = function(n, t) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t)
            }
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, ne = {
        0: 200,
        1223: 204
    }, vt = i.ajaxSettings.xhr(), e.cors = !!vt && "withCredentials" in vt, e.ajax = vt = !!vt, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || vt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(ne[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                    4 === e.readyState && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (i) throw u;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(u, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                f.head.appendChild(r[0])
            },
            abort: function() {
                t && t()
            }
        }
    }), vr = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = vr.pop() || i.expando + "_" + pf++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (sr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() {
            return s || i.error(e + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = n[e], n[e] = function() {
            s = arguments
        }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, vr.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), e.createHTMLDocument = ((te = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === te.childNodes.length), i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes)));
        var s, o, u
    }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return -1 < o && (f = g(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, l = i.css(n, "position"),
                a = i(n),
                e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using" in t ? t.using.call(n, e) : a.css(e)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, t = this[0];
            if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || bt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = ku(e.pixelPosition, function(n, r) {
            if (r) return r = ni(n, t), tr.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return p(this, function(t, r, f) {
                    var e;
                    return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }), i.proxy = function(n, t) {
        var r, f, e;
        if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = b.call(arguments, 2), (e = function() {
            return n.apply(t || this, f.concat(b.call(arguments)))
        }).guid = n.guid = n.guid || i.guid++, e
    }, i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = tt, i.camelCase = y, i.type = it, i.now = Date.now, i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), ie = n.jQuery, re = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = re), t && n.jQuery === i && (n.jQuery = ie), i
    }, t || (n.jQuery = n.$ = i), i
}),
function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Popper = t()
}(this, function() {
    "use strict";

    function ut(n) {
        return n && "[object Function]" === {}.toString.call(n)
    }

    function u(n, t) {
        if (1 !== n.nodeType) return [];
        var i = getComputedStyle(n, null);
        return t ? i[t] : i
    }

    function p(n) {
        return "HTML" === n.nodeName ? n : n.parentNode || n.host
    }

    function c(n) {
        if (!n) return document.body;
        switch (n.nodeName) {
            case "HTML":
            case "BODY":
                return n.ownerDocument.body;
            case "#document":
                return n.body
        }
        var t = u(n),
            i = t.overflow,
            r = t.overflowX,
            f = t.overflowY;
        return /(auto|scroll|overlay)/.test(i + f + r) ? n : c(p(n))
    }

    function f(n) {
        var r, t, i;
        if (!n) return document.documentElement;
        for (r = s(10) ? document.body : null, t = n.offsetParent; t === r && n.nextElementSibling;) t = (n = n.nextElementSibling).offsetParent;
        return i = t && t.nodeName, i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === u(t, "position") ? f(t) : t : n ? n.ownerDocument.documentElement : document.documentElement
    }

    function fi(n) {
        var t = n.nodeName;
        return "BODY" !== t && ("HTML" === t || f(n.firstElementChild) === n)
    }

    function w(n) {
        return null === n.parentNode ? n : w(n.parentNode)
    }

    function a(n, t) {
        var i, u;
        if (!n || !n.nodeType || !t || !t.nodeType) return document.documentElement;
        var e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = e ? n : t,
            s = e ? t : n,
            r = document.createRange();
        return (r.setStart(o, 0), r.setEnd(s, 0), i = r.commonAncestorContainer, n !== i && t !== i || o.contains(s)) ? fi(i) ? i : f(i) : (u = w(n), u.host ? a(u.host, t) : a(n, w(t).host))
    }

    function e(n) {
        var f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            t = "top" === f ? "scrollTop" : "scrollLeft",
            i = n.nodeName,
            r, u;
        return "BODY" === i || "HTML" === i ? (r = n.ownerDocument.documentElement, u = n.ownerDocument.scrollingElement || r, u[t]) : n[t]
    }

    function ei(n, t) {
        var f = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = e(t, "top"),
            u = e(t, "left"),
            i = f ? -1 : 1;
        return n.top += r * i, n.bottom += r * i, n.left += u * i, n.right += u * i, n
    }

    function ft(n, t) {
        var i = "x" === t ? "Left" : "Top",
            r = "Left" == i ? "Right" : "Bottom";
        return parseFloat(n["border" + i + "Width"], 10) + parseFloat(n["border" + r + "Width"], 10)
    }

    function et(n, t, r, u) {
        return i(t["offset" + n], t["scroll" + n], r["client" + n], r["offset" + n], r["scroll" + n], s(10) ? r["offset" + n] + u["margin" + ("Height" === n ? "Top" : "Left")] + u["margin" + ("Height" === n ? "Bottom" : "Right")] : 0)
    }

    function ot() {
        var t = document.body,
            n = document.documentElement,
            i = s(10) && getComputedStyle(n);
        return {
            height: et("Height", t, n, i),
            width: et("Width", t, n, i)
        }
    }

    function r(t) {
        return n({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function b(n) {
        var t = {},
            f, o, l;
        try {
            s(10) ? (t = n.getBoundingClientRect(), f = e(n, "top"), o = e(n, "left"), t.top += f, t.left += o, t.bottom += f, t.right += o) : t = n.getBoundingClientRect()
        } catch (u) {}
        var i = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            a = "HTML" === n.nodeName ? ot() : {},
            v = a.width || n.clientWidth || i.right - i.left,
            y = a.height || n.clientHeight || i.bottom - i.top,
            h = n.offsetWidth - v,
            c = n.offsetHeight - y;
        return (h || c) && (l = u(n), h -= ft(l, "x"), c -= ft(l, "y"), i.width -= h, i.height -= c), r(i)
    }

    function k(n, t) {
        var w = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            k = s(10),
            d = "HTML" === t.nodeName,
            o = b(n),
            e = b(t),
            v = c(n),
            h = u(t),
            y = parseFloat(h.borderTopWidth, 10),
            p = parseFloat(h.borderLeftWidth, 10),
            f, l, a;
        return w && "HTML" === t.nodeName && (e.top = i(e.top, 0), e.left = i(e.left, 0)), f = r({
            top: o.top - e.top - y,
            left: o.left - e.left - p,
            width: o.width,
            height: o.height
        }), (f.marginTop = 0, f.marginLeft = 0, !k && d) && (l = parseFloat(h.marginTop, 10), a = parseFloat(h.marginLeft, 10), f.top -= y - l, f.bottom -= y - l, f.left -= p - a, f.right -= p - a, f.marginTop = l, f.marginLeft = a), (k && !w ? t.contains(v) : t === v && "BODY" !== v.nodeName) && (f = ei(f, t)), f
    }

    function oi(n) {
        var f = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            t = n.ownerDocument.documentElement,
            u = k(n, t),
            o = i(t.clientWidth, window.innerWidth || 0),
            s = i(t.clientHeight, window.innerHeight || 0),
            h = f ? 0 : e(t),
            c = f ? 0 : e(t, "left"),
            l = {
                top: h - u.top + u.marginTop,
                left: c - u.left + u.marginLeft,
                width: o,
                height: s
            };
        return r(l)
    }

    function st(n) {
        var t = n.nodeName;
        return "BODY" === t || "HTML" === t ? !1 : "fixed" === u(n, "position") || st(p(n))
    }

    function ht(n) {
        if (!n || !n.parentElement || s()) return document.documentElement;
        for (var t = n.parentElement; t && "none" === u(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function d(n, t, i, r) {
        var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            u = {
                top: 0,
                left: 0
            },
            s = o ? ht(n) : a(n, t),
            e, f;
        if ("viewport" === r) u = oi(s, o);
        else if ("scrollParent" === r ? (e = c(p(t)), "BODY" === e.nodeName && (e = n.ownerDocument.documentElement)) : e = "window" === r ? n.ownerDocument.documentElement : r, f = k(e, s, o), "HTML" !== e.nodeName || st(s)) u = f;
        else {
            var h = ot(),
                l = h.height,
                v = h.width;
            u.top += f.top - f.marginTop;
            u.bottom = l + f.top;
            u.left += f.left - f.marginLeft;
            u.right = v + f.left
        }
        return u.left += i, u.top += i, u.right -= i, u.bottom -= i, u
    }

    function si(n) {
        var t = n.width,
            i = n.height;
        return t * i
    }

    function ct(t, i, r, u, f) {
        var l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var e = d(r, u, l, f),
            o = {
                top: {
                    width: e.width,
                    height: i.top - e.top
                },
                right: {
                    width: e.right - i.right,
                    height: e.height
                },
                bottom: {
                    width: e.width,
                    height: e.bottom - i.bottom
                },
                left: {
                    width: i.left - e.left,
                    height: e.height
                }
            },
            s = Object.keys(o).map(function(t) {
                return n({
                    key: t
                }, o[t], {
                    area: si(o[t])
                })
            }).sort(function(n, t) {
                return t.area - n.area
            }),
            h = s.filter(function(n) {
                var t = n.width,
                    i = n.height;
                return t >= r.clientWidth && i >= r.clientHeight
            }),
            a = 0 < h.length ? h[0].key : s[0].key,
            c = t.split("-")[1];
        return a + (c ? "-" + c : "")
    }

    function lt(n, t, i) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            u = r ? ht(t) : a(t, i);
        return k(i, u, r)
    }

    function at(n) {
        var t = getComputedStyle(n),
            i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: n.offsetWidth + r,
            height: n.offsetHeight + i
        }
    }

    function v(n) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return n.replace(/left|right|bottom|top/g, function(n) {
            return t[n]
        })
    }

    function vt(n, t, i) {
        i = i.split("-")[0];
        var r = at(n),
            e = {
                width: r.width,
                height: r.height
            },
            u = -1 !== ["right", "left"].indexOf(i),
            o = u ? "top" : "left",
            f = u ? "left" : "top",
            s = u ? "height" : "width",
            h = u ? "width" : "height";
        return e[o] = t[o] + t[s] / 2 - r[s] / 2, e[f] = i === f ? t[f] - r[h] : t[v(f)], e
    }

    function l(n, t) {
        return Array.prototype.find ? n.find(t) : n.filter(t)[0]
    }

    function hi(n, t, i) {
        if (Array.prototype.findIndex) return n.findIndex(function(n) {
            return n[t] === i
        });
        var r = l(n, function(n) {
            return n[t] === i
        });
        return n.indexOf(r)
    }

    function yt(n, t, i) {
        var u = void 0 === i ? n : n.slice(0, hi(n, "name", i));
        return u.forEach(function(n) {
            n["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = n["function"] || n.fn;
            n.enabled && ut(i) && (t.offsets.popper = r(t.offsets.popper), t.offsets.reference = r(t.offsets.reference), t = i(t, n))
        }), t
    }

    function ci() {
        if (!this.state.isDestroyed) {
            var n = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            n.offsets.reference = lt(this.state, this.popper, this.reference, this.options.positionFixed);
            n.placement = ct(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
            n.originalPlacement = n.placement;
            n.positionFixed = this.options.positionFixed;
            n.offsets.popper = vt(this.popper, n.offsets.reference, n.placement);
            n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
            n = yt(this.modifiers, n);
            this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0, this.options.onCreate(n))
        }
    }

    function pt(n, t) {
        return n.some(function(n) {
            var i = n.name,
                r = n.enabled;
            return r && i === t
        })
    }

    function wt(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length; t++)
            if (i = u[t], r = i ? "" + i + f : n, "undefined" != typeof document.body.style[r]) return r;
        return null
    }

    function li() {
        return this.state.isDestroyed = !0, pt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[wt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function bt(n) {
        var t = n.ownerDocument;
        return t ? t.defaultView : window
    }

    function kt(n, t, i, r) {
        var f = "BODY" === n.nodeName,
            u = f ? n.ownerDocument.defaultView : n;
        u.addEventListener(t, i, {
            passive: !0
        });
        f || kt(c(u.parentNode), t, i, r);
        r.push(u)
    }

    function ai(n, t, i, r) {
        i.updateBound = r;
        bt(n).addEventListener("resize", i.updateBound, {
            passive: !0
        });
        var u = c(n);
        return kt(u, "scroll", i.updateBound, i.scrollParents), i.scrollElement = u, i.eventsEnabled = !0, i
    }

    function vi() {
        this.state.eventsEnabled || (this.state = ai(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function yi(n, t) {
        return bt(n).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(n) {
            n.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function pi() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = yi(this.reference, this.state))
    }

    function g(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
    }

    function nt(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && g(t[i]) && (r = "px");
            n.style[i] = t[i] + r
        })
    }

    function wi(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = t[i];
            !1 === r ? n.removeAttribute(i) : n.setAttribute(i, t[i])
        })
    }

    function dt(n, t, i) {
        var u = l(n, function(n) {
                var i = n.name;
                return i === t
            }),
            f = !!u && n.some(function(n) {
                return n.name === i && n.enabled && n.order < u.order
            }),
            r;
        return f || (r = "`" + t + "`", console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")), f
    }

    function bi(n) {
        return "end" === n ? "start" : "start" === n ? "end" : n
    }

    function gt(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            t = it.indexOf(n),
            i = it.slice(t + 1).concat(it.slice(0, t));
        return r ? i.reverse() : i
    }

    function ki(n, t, u, f) {
        var h = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +h[1],
            e = h[2],
            s, c, l;
        if (!o) return n;
        if (0 === e.indexOf("%")) {
            switch (e) {
                case "%p":
                    s = u;
                    break;
                case "%":
                case "%r":
                default:
                    s = f
            }
            return c = r(s), c[t] / 100 * o
        }
        return "vh" === e || "vw" === e ? (l = "vh" === e ? i(document.documentElement.clientHeight, window.innerHeight || 0) : i(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * o) : o
    }

    function di(n, t, i, r) {
        var s = [0, 0],
            h = -1 !== ["right", "left"].indexOf(r),
            u = n.split(/(\+|\-)/).map(function(n) {
                return n.trim()
            }),
            f = u.indexOf(l(u, function(n) {
                return -1 !== n.search(/,|\s/)
            })),
            o, e;
        return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), o = /\s*,\s*|\s+/, e = -1 === f ? [u] : [u.slice(0, f).concat([u[f].split(o)[0]]), [u[f].split(o)[1]].concat(u.slice(f + 1))], e = e.map(function(n, r) {
            var f = (1 === r ? !h : h) ? "height" : "width",
                u = !1;
            return n.reduce(function(n, t) {
                return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t, u = !0, n) : u ? (n[n.length - 1] += t, u = !1, n) : n.concat(t)
            }, []).map(function(n) {
                return ki(n, f, t, i)
            })
        }), e.forEach(function(n, t) {
            n.forEach(function(i, r) {
                g(i) && (s[t] += i * ("-" === n[r - 1] ? -1 : 1))
            })
        }), s
    }

    function gi(n, t) {
        var r, f = t.offset,
            o = n.placement,
            e = n.offsets,
            i = e.popper,
            s = e.reference,
            u = o.split("-")[0];
        return r = g(+f) ? [+f, 0] : di(f, i, s, u), "left" === u ? (i.top += r[0], i.left -= r[1]) : "right" === u ? (i.top += r[0], i.left += r[1]) : "top" === u ? (i.left += r[0], i.top -= r[1]) : "bottom" === u && (i.left += r[0], i.top += r[1]), n.popper = i, n
    }
    for (var ni = Math.min, o = Math.floor, i = Math.max, ti = "undefined" != typeof window && "undefined" != typeof document, ii = ["Edge", "Trident", "Firefox"], ri = 0, tt = 0; tt < ii.length; tt += 1)
        if (ti && 0 <= navigator.userAgent.indexOf(ii[tt])) {
            ri = 1;
            break
        }
    var nr = ti && window.Promise,
        tr = nr ? function(n) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1;
                    n()
                }))
            }
        } : function(n) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1;
                    n()
                }, ri))
            }
        },
        t = {},
        s = function() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "all";
            return (n = n.toString(), t.hasOwnProperty(n)) ? t[n] : ("11" === n ? t[n] = -1 !== navigator.userAgent.indexOf("Trident") : "10" === n ? t[n] = -1 !== navigator.appVersion.indexOf("MSIE 10") : "all" === n ? t[n] = -1 !== navigator.userAgent.indexOf("Trident") || -1 !== navigator.userAgent.indexOf("MSIE") : void 0, t.all = t.all || Object.keys(t).some(function(n) {
                return t[n]
            }), t[n])
        },
        ir = function(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        rr = function() {
            function n(n, t) {
                for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
            }
            return function(t, i, r) {
                return i && n(t.prototype, i), r && n(t, r), t
            }
        }(),
        h = function(n, t, i) {
            return t in n ? Object.defineProperty(n, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = i, n
        },
        n = Object.assign || function(n) {
            for (var t, r, i = 1; i < arguments.length; i++)
                for (r in t = arguments[i], t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        },
        ui = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        it = ui.slice(3),
        rt = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        y = function() {
            function t(i, r) {
                var u = this,
                    f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    e;
                ir(this, t);
                this.scheduleUpdate = function() {
                    return requestAnimationFrame(u.update)
                };
                this.update = tr(this.update.bind(this));
                this.options = n({}, t.Defaults, f);
                this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                };
                this.reference = i && i.jquery ? i[0] : i;
                this.popper = r && r.jquery ? r[0] : r;
                this.options.modifiers = {};
                Object.keys(n({}, t.Defaults.modifiers, f.modifiers)).forEach(function(i) {
                    u.options.modifiers[i] = n({}, t.Defaults.modifiers[i] || {}, f.modifiers ? f.modifiers[i] : {})
                });
                this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return n({
                        name: t
                    }, u.options.modifiers[t])
                }).sort(function(n, t) {
                    return n.order - t.order
                });
                this.modifiers.forEach(function(n) {
                    n.enabled && ut(n.onLoad) && n.onLoad(u.reference, u.popper, u.options, n, u.state)
                });
                this.update();
                e = this.options.eventsEnabled;
                e && this.enableEventListeners();
                this.state.eventsEnabled = e
            }
            return rr(t, [{
                key: "update",
                value: function() {
                    return ci.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return li.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return vi.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return pi.call(this)
                }
            }]), t
        }();
    return y.Utils = ("undefined" == typeof window ? global : window).PopperUtils, y.placements = ui, y.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var u = t.placement,
                        l = u.split("-")[0],
                        f = u.split("-")[1];
                    if (f) {
                        var e = t.offsets,
                            r = e.reference,
                            o = e.popper,
                            s = -1 !== ["bottom", "top"].indexOf(l),
                            i = s ? "left" : "top",
                            c = s ? "width" : "height",
                            a = {
                                start: h({}, i, r[i]),
                                end: h({}, i, r[i] + r[c] - o[c])
                            };
                        t.offsets.popper = n({}, o, a[f])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: gi,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, r) {
                    var o = r.boundariesElement || f(t.instance.popper),
                        e;
                    t.instance.reference === o && (o = f(o));
                    e = d(t.instance.popper, t.instance.reference, r.padding, o, t.positionFixed);
                    r.boundaries = e;
                    var s = r.priority,
                        u = t.offsets.popper,
                        c = {
                            primary: function(n) {
                                var t = u[n];
                                return u[n] < e[n] && !r.escapeWithReference && (t = i(u[n], e[n])), h({}, n, t)
                            },
                            secondary: function(n) {
                                var t = "right" === n ? "left" : "top",
                                    i = u[t];
                                return u[n] > e[n] && !r.escapeWithReference && (i = ni(u[t], e[n] - ("right" === n ? u.width : u.height))), h({}, t, i)
                            }
                        };
                    return s.forEach(function(t) {
                        var i = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        u = n({}, u, c[i](t))
                    }), t.offsets.popper = u, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(n) {
                    var s = n.offsets,
                        u = s.popper,
                        i = s.reference,
                        h = n.placement.split("-")[0],
                        r = o,
                        f = -1 !== ["top", "bottom"].indexOf(h),
                        e = f ? "right" : "bottom",
                        t = f ? "left" : "top",
                        c = f ? "width" : "height";
                    return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[c]), u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])), n
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(n, t) {
                    var l, e;
                    if (!dt(n.instance.modifiers, "arrow", "keepTogether")) return n;
                    if (e = t.element, "string" == typeof e) {
                        if (e = n.instance.popper.querySelector(e), !e) return n
                    } else if (!n.instance.popper.contains(e)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), n;
                    var d = n.placement.split("-")[0],
                        b = n.offsets,
                        c = b.popper,
                        o = b.reference,
                        a = -1 !== ["left", "right"].indexOf(d),
                        y = a ? "height" : "width",
                        p = a ? "Top" : "Left",
                        f = p.toLowerCase(),
                        g = a ? "left" : "top",
                        v = a ? "bottom" : "right",
                        s = at(e)[y];
                    o[v] - s < c[f] && (n.offsets.popper[f] -= c[f] - (o[v] - s));
                    o[f] + s > c[v] && (n.offsets.popper[f] += o[f] + s - c[v]);
                    n.offsets.popper = r(n.offsets.popper);
                    var nt = o[f] + o[y] / 2 - s / 2,
                        k = u(n.instance.popper),
                        tt = parseFloat(k["margin" + p], 10),
                        it = parseFloat(k["border" + p + "Width"], 10),
                        w = nt - n.offsets.popper[f] - tt - it;
                    return w = i(ni(c[y] - s, w), 0), n.arrowElement = e, n.offsets.arrow = (l = {}, h(l, f, Math.round(w)), h(l, g, ""), l), n
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, i) {
                    if (pt(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement) return t;
                    var e = d(t.instance.popper, t.instance.reference, i.padding, i.boundariesElement, t.positionFixed),
                        r = t.placement.split("-")[0],
                        s = v(r),
                        u = t.placement.split("-")[1] || "",
                        f = [];
                    switch (i.behavior) {
                        case rt.FLIP:
                            f = [r, s];
                            break;
                        case rt.CLOCKWISE:
                            f = gt(r);
                            break;
                        case rt.COUNTERCLOCKWISE:
                            f = gt(r, !0);
                            break;
                        default:
                            f = i.behavior
                    }
                    return f.forEach(function(h, c) {
                        if (r !== h || f.length === c + 1) return t;
                        r = t.placement.split("-")[0];
                        s = v(r);
                        var a = t.offsets.popper,
                            y = t.offsets.reference,
                            l = o,
                            w = "left" === r && l(a.right) > l(y.left) || "right" === r && l(a.left) < l(y.right) || "top" === r && l(a.bottom) > l(y.top) || "bottom" === r && l(a.top) < l(y.bottom),
                            b = l(a.left) < l(e.left),
                            k = l(a.right) > l(e.right),
                            d = l(a.top) < l(e.top),
                            g = l(a.bottom) > l(e.bottom),
                            nt = "left" === r && b || "right" === r && k || "top" === r && d || "bottom" === r && g,
                            p = -1 !== ["top", "bottom"].indexOf(r),
                            tt = !!i.flipVariations && (p && "start" === u && b || p && "end" === u && k || !p && "start" === u && d || !p && "end" === u && g);
                        (w || nt || tt) && (t.flipped = !0, (w || nt) && (r = f[c + 1]), tt && (u = bi(u)), t.placement = r + (u ? "-" + u : ""), t.offsets.popper = n({}, t.offsets.popper, vt(t.instance.popper, t.offsets.reference, t.placement)), t = yt(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(n) {
                    var u = n.placement,
                        t = u.split("-")[0],
                        f = n.offsets,
                        i = f.popper,
                        o = f.reference,
                        e = -1 !== ["left", "right"].indexOf(t),
                        s = -1 === ["top", "left"].indexOf(t);
                    return i[e ? "left" : "top"] = o[t] - (s ? i[e ? "width" : "height"] : 0), n.placement = v(u), n.offsets.popper = r(i), n
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(n) {
                    if (!dt(n.instance.modifiers, "hide", "preventOverflow")) return n;
                    var t = n.offsets.reference,
                        i = l(n.instance.modifiers, function(n) {
                            return "preventOverflow" === n.name
                        }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === n.hide) return n;
                        n.hide = !0;
                        n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide) return n;
                        n.hide = !1;
                        n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, i) {
                    var g = i.x,
                        nt = i.y,
                        u = t.offsets.popper,
                        c = l(t.instance.modifiers, function(n) {
                            return "applyStyle" === n.name
                        }).gpuAcceleration,
                        w, k, d;
                    void 0 !== c && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, v, tt = void 0 === c ? i.gpuAcceleration : c,
                        it = f(t.instance.popper),
                        y = b(it),
                        r = {
                            position: u.position
                        },
                        h = {
                            left: o(u.left),
                            top: o(u.top),
                            bottom: o(u.bottom),
                            right: o(u.right)
                        },
                        e = "bottom" === g ? "top" : "bottom",
                        s = "right" === nt ? "left" : "right",
                        p = wt("transform");
                    return (v = "bottom" == e ? -y.height + h.bottom : h.top, a = "right" == s ? -y.width + h.right : h.left, tt && p) ? (r[p] = "translate3d(" + a + "px, " + v + "px, 0)", r[e] = 0, r[s] = 0, r.willChange = "transform") : (w = "bottom" == e ? -1 : 1, k = "right" == s ? -1 : 1, r[e] = v * w, r[s] = a * k, r.willChange = e + ", " + s), d = {
                        "x-placement": t.placement
                    }, t.attributes = n({}, d, t.attributes), t.styles = n({}, r, t.styles), t.arrowStyles = n({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(n) {
                    return nt(n.instance.popper, n.styles), wi(n.instance.popper, n.attributes), n.arrowElement && Object.keys(n.arrowStyles).length && nt(n.arrowElement, n.arrowStyles), n
                },
                onLoad: function(n, t, i, r, u) {
                    var f = lt(u, t, n, i.positionFixed),
                        e = ct(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", e), nt(t, {
                        position: i.positionFixed ? "fixed" : "absolute"
                    }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, y
});
/*!
 * Bootstrap v4.6.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((n = "undefined" != typeof globalThis ? globalThis : n || self).bootstrap = {}, n.jQuery, n.Popper)
}(this, function(n, t, i) {
    "use strict";

    function st(n) {
        return n && "object" == typeof n && "default" in n ? n : {
            "default": n
        }
    }

    function ht(n, t) {
        for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }

    function e(n, t, i) {
        return t && ht(n.prototype, t), i && ht(n, i), n
    }

    function f() {
        return (f = Object.assign || function(n) {
            for (var i, r, t = 1; t < arguments.length; t++) {
                i = arguments[t];
                for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
            }
            return n
        }).apply(this, arguments)
    }

    function wt(n) {
        var i = this,
            t = !1;
        return r.default(this).one(u.TRANSITION_END, function() {
            t = !0
        }), setTimeout(function() {
            t || u.triggerTransitionEnd(i)
        }, n), this
    }

    function at(n, t, i) {
        if (0 === n.length) return n;
        if (i && "function" == typeof i) return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function(n) {
                var i = f[n],
                    o = i.nodeName.toLowerCase(),
                    r, u;
                if (-1 === e.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                r = [].slice.call(i.attributes);
                u = [].concat(t["*"] || [], t[o] || []);
                r.forEach(function(n) {
                    (function(n, t) {
                        var i = n.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === si.indexOf(i) || Boolean(n.nodeValue.match(hi) || n.nodeValue.match(ci));
                        for (var u = t.filter(function(n) {
                                return n instanceof RegExp
                            }), r = 0, f = u.length; r < f; r++)
                            if (i.match(u[r])) return !0;
                        return !1
                    })(n, u) || i.removeAttribute(n.nodeName)
                })
            }, r = 0, s = f.length; r < s; r++) o(r);
        return u.body.innerHTML
    }
    var r = st(t),
        it = st(i),
        u = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(n) {
                do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
                return n
            },
            getSelectorFromElement: function(n) {
                var t = n.getAttribute("data-target"),
                    i;
                t && "#" !== t || (i = n.getAttribute("href"), t = i && "#" !== i ? i.trim() : "");
                try {
                    return document.querySelector(t) ? t : null
                } catch (n) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(n) {
                if (!n) return 0;
                var t = r.default(n).css("transition-duration"),
                    i = r.default(n).css("transition-delay"),
                    u = parseFloat(t),
                    f = parseFloat(i);
                return u || f ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(i))) : 0
            },
            reflow: function(n) {
                return n.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                r.default(n).trigger("transitionend")
            },
            supportsTransitionEnd: function() {
                return Boolean("transitionend")
            },
            isElement: function(n) {
                return (n[0] || n).nodeType
            },
            typeCheckConfig: function(n, t, i) {
                var r, f;
                for (r in i)
                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                        var o = i[r],
                            e = t[r],
                            s = e && u.isElement(e) ? "element" : null === (f = e) || "undefined" == typeof f ? "" + f : {}.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(o).test(s)) throw new Error(n.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + o + '".');
                    }
            },
            findShadowRoot: function(n) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof n.getRootNode) {
                    var t = n.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return n instanceof ShadowRoot ? n : n.parentNode ? u.findShadowRoot(n.parentNode) : null
            },
            jQueryDetection: function() {
                if ("undefined" == typeof r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var n = r.default.fn.jquery.split(" ")[0].split(".");
                if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || n[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
            }
        },
        ct, a, yt, k;
    u.jQueryDetection();
    r.default.fn.emulateTransitionEnd = wt;
    r.default.event.special[u.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(n) {
            if (r.default(n.target).is(this)) return n.handleObj.handler.apply(this, arguments)
        }
    };
    var d = "alert",
        bt = r.default.fn[d],
        l = function() {
            function n(n) {
                this._element = n
            }
            var t = n.prototype;
            return t.close = function(n) {
                var t = this._element;
                n && (t = this._getRootElement(n));
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                r.default.removeData(this._element, "bs.alert");
                this._element = null
            }, t._getRootElement = function(n) {
                var i = u.getSelectorFromElement(n),
                    t = !1;
                return i && (t = document.querySelector(i)), t || (t = r.default(n).closest(".alert")[0]), t
            }, t._triggerCloseEvent = function(n) {
                var t = r.default.Event("close.bs.alert");
                return r.default(n).trigger(t), t
            }, t._removeElement = function(n) {
                var i = this,
                    t;
                (r.default(n).removeClass("show"), r.default(n).hasClass("fade")) ? (t = u.getTransitionDurationFromElement(n), r.default(n).one(u.TRANSITION_END, function(t) {
                    return i._destroyElement(n, t)
                }).emulateTransitionEnd(t)) : this._destroyElement(n)
            }, t._destroyElement = function(n) {
                r.default(n).detach().trigger("closed.bs.alert").remove()
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var u = r.default(this),
                        i = u.data("bs.alert");
                    i || (i = new n(this), u.data("bs.alert", i));
                    "close" === t && i[t](this)
                })
            }, n._handleDismiss = function(n) {
                return function(t) {
                    t && t.preventDefault();
                    n.close(this)
                }
            }, e(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }]), n
        }();
    r.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l._handleDismiss(new l));
    r.default.fn[d] = l._jQueryInterface;
    r.default.fn[d].Constructor = l;
    r.default.fn[d].noConflict = function() {
        return r.default.fn[d] = bt, l._jQueryInterface
    };
    ct = r.default.fn.button;
    a = function() {
        function n(n) {
            this._element = n;
            this.shouldAvoidTriggerChange = !1
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0,
                u = !0,
                f = r.default(this._element).closest('[data-toggle="buttons"]')[0],
                n, i;
            f && (n = this._element.querySelector('input:not([type="hidden"])'), n && ("radio" === n.type && (n.checked && this._element.classList.contains("active") ? t = !1 : (i = f.querySelector(".active"), i && r.default(i).removeClass("active"))), t && ("checkbox" !== n.type && "radio" !== n.type || (n.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || r.default(n).trigger("change")), n.focus(), u = !1));
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (u && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && r.default(this._element).toggleClass("active"))
        }, t.dispose = function() {
            r.default.removeData(this._element, "bs.button");
            this._element = null
        }, n._jQueryInterface = function(t, i) {
            return this.each(function() {
                var f = r.default(this),
                    u = f.data("bs.button");
                u || (u = new n(this), f.data("bs.button", u));
                u.shouldAvoidTriggerChange = i;
                "toggle" === t && u[t]()
            })
        }, e(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }]), n
    }();
    r.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var t = n.target,
            u = t,
            i;
        if (r.default(t).hasClass("btn") || (t = r.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) n.preventDefault();
        else {
            if (i = t.querySelector('input:not([type="hidden"])'), i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void n.preventDefault();
            "INPUT" !== u.tagName && "LABEL" === t.tagName || a._jQueryInterface.call(r.default(t), "toggle", "INPUT" === u.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var t = r.default(n.target).closest(".btn")[0];
        r.default(t).toggleClass("focus", /^focus(in)?$/.test(n.type))
    });
    r.default(window).on("load.bs.button.data-api", function() {
        for (var t, f, i, e, r, n = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), u = 0, o = n.length; u < o; u++) t = n[u], f = t.querySelector('input:not([type="hidden"])'), f.checked || f.hasAttribute("checked") ? t.classList.add("active") : t.classList.remove("active");
        for (i = 0, e = (n = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; i < e; i++) r = n[i], "true" === r.getAttribute("aria-pressed") ? r.classList.add("active") : r.classList.remove("active")
    });
    r.default.fn.button = a._jQueryInterface;
    r.default.fn.button.Constructor = a;
    r.default.fn.button.noConflict = function() {
        return r.default.fn.button = ct, a._jQueryInterface
    };
    var v = "carousel",
        kt = ".bs.carousel",
        dt = r.default.fn[v],
        ft = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        gt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        lt = {
            TOUCH: "touch",
            PEN: "pen"
        },
        y = function() {
            function t(n, t) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = !1;
                this._isSliding = !1;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(t);
                this._element = n;
                this._indicatorsElement = this._element.querySelector(".carousel-indicators");
                this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                this._addEventListeners()
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide("next")
            }, n.nextWhenVisible = function() {
                var n = r.default(this._element);
                !document.hidden && n.is(":visible") && "hidden" !== n.css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide("prev")
            }, n.pause = function(n) {
                n || (this._isPaused = !0);
                this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (u.triggerTransitionEnd(this._element), this.cycle(!0));
                clearInterval(this._interval);
                this._interval = null
            }, n.cycle = function(n) {
                n || (this._isPaused = !1);
                this._interval && (clearInterval(this._interval), this._interval = null);
                this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(n) {
                var u = this,
                    t, i;
                if (this._activeElement = this._element.querySelector(".active.carousel-item"), t = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0))
                    if (this._isSliding) r.default(this._element).one("slid.bs.carousel", function() {
                        return u.to(n)
                    });
                    else {
                        if (t === n) return this.pause(), void this.cycle();
                        i = n > t ? "next" : "prev";
                        this._slide(i, this._items[n])
                    }
            }, n.dispose = function() {
                r.default(this._element).off(kt);
                r.default.removeData(this._element, "bs.carousel");
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            }, n._getConfig = function(n) {
                return n = f({}, ft, n), u.typeCheckConfig(v, n, gt), n
            }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX),
                    n;
                t <= 40 || (n = t / this.touchDeltaX, this.touchDeltaX = 0, n > 0 && this.prev(), n < 0 && this.next())
            }, n._addEventListeners = function() {
                var n = this;
                this._config.keyboard && r.default(this._element).on("keydown.bs.carousel", function(t) {
                    return n._keydown(t)
                });
                "hover" === this._config.pause && r.default(this._element).on("mouseenter.bs.carousel", function(t) {
                    return n.pause(t)
                }).on("mouseleave.bs.carousel", function(t) {
                    return n.cycle(t)
                });
                this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var n = this,
                    t, i;
                this._touchSupported && (t = function(t) {
                    n._pointerEvent && lt[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }, i = function(t) {
                    n._pointerEvent && lt[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                    n._handleSwipe();
                    "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                }, r.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(n) {
                    return n.preventDefault()
                }), this._pointerEvent ? (r.default(this._element).on("pointerdown.bs.carousel", function(n) {
                    return t(n)
                }), r.default(this._element).on("pointerup.bs.carousel", function(n) {
                    return i(n)
                }), this._element.classList.add("pointer-event")) : (r.default(this._element).on("touchstart.bs.carousel", function(n) {
                    return t(n)
                }), r.default(this._element).on("touchmove.bs.carousel", function(t) {
                    return function(t) {
                        n.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - n.touchStartX
                    }(t)
                }), r.default(this._element).on("touchend.bs.carousel", function(n) {
                    return i(n)
                })))
            }, n._keydown = function(n) {
                if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
                    case 37:
                        n.preventDefault();
                        this.prev();
                        break;
                    case 39:
                        n.preventDefault();
                        this.next()
                }
            }, n._getItemIndex = function(n) {
                return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(n)
            }, n._getItemByDirection = function(n, t) {
                var u = "next" === n,
                    f = "prev" === n,
                    i = this._getItemIndex(t),
                    e = this._items.length - 1,
                    r;
                return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + ("prev" === n ? -1 : 1)) % this._items.length, -1 === r ? this._items[this._items.length - 1] : this._items[r])
            }, n._triggerSlideEvent = function(n, t) {
                var u = this._getItemIndex(n),
                    f = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    i = r.default.Event("slide.bs.carousel", {
                        relatedTarget: n,
                        direction: t,
                        from: f,
                        to: u
                    });
                return r.default(this._element).trigger(i), i
            }, n._setActiveIndicatorElement = function(n) {
                var i, t;
                this._indicatorsElement && (i = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), r.default(i).removeClass("active"), t = this._indicatorsElement.children[this._getItemIndex(n)], t && r.default(t).addClass("active"))
            }, n._updateInterval = function() {
                var t = this._activeElement || this._element.querySelector(".active.carousel-item"),
                    n;
                t && (n = parseInt(t.getAttribute("data-interval"), 10), n ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = n) : this._config.interval = this._config.defaultInterval || this._config.interval)
            }, n._slide = function(n, t) {
                var e, o, s, c = this,
                    f = this._element.querySelector(".active.carousel-item"),
                    v = this._getItemIndex(f),
                    i = t || f && this._getItemByDirection(n, f),
                    y = this._getItemIndex(i),
                    l = Boolean(this._interval),
                    h, a;
                ("next" === n ? (e = "carousel-item-left", o = "carousel-item-next", s = "left") : (e = "carousel-item-right", o = "carousel-item-prev", s = "right"), i && r.default(i).hasClass("active")) ? this._isSliding = !1: !this._triggerSlideEvent(i, s).isDefaultPrevented() && f && i && (this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(i), this._activeElement = i, h = r.default.Event("slid.bs.carousel", {
                    relatedTarget: i,
                    direction: s,
                    from: v,
                    to: y
                }), r.default(this._element).hasClass("slide") ? (r.default(i).addClass(o), u.reflow(i), r.default(f).addClass(e), r.default(i).addClass(e), a = u.getTransitionDurationFromElement(f), r.default(f).one(u.TRANSITION_END, function() {
                    r.default(i).removeClass(e + " " + o).addClass("active");
                    r.default(f).removeClass("active " + o + " " + e);
                    c._isSliding = !1;
                    setTimeout(function() {
                        return r.default(c._element).trigger(h)
                    }, 0)
                }).emulateTransitionEnd(a)) : (r.default(f).removeClass("active"), r.default(i).addClass("active"), this._isSliding = !1, r.default(this._element).trigger(h)), l && this.cycle())
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = r.default(this).data("bs.carousel"),
                        u = f({}, ft, r.default(this).data()),
                        e;
                    if ("object" == typeof n && (u = f({}, u, n)), e = "string" == typeof n ? n : u.slide, i || (i = new t(this, u), r.default(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof e) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    } else u.interval && u.ride && (i.pause(), i.cycle())
                })
            }, t._dataApiClickHandler = function(n) {
                var s = u.getSelectorFromElement(this),
                    i, o, e;
                s && (i = r.default(s)[0], i && r.default(i).hasClass("carousel") && (o = f({}, r.default(i).data(), r.default(this).data()), e = this.getAttribute("data-slide-to"), e && (o.interval = !1), t._jQueryInterface.call(r.default(i), o), e && r.default(i).data("bs.carousel").to(e), n.preventDefault()))
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ft
                }
            }]), t
        }();
    r.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler);
    r.default(window).on("load.bs.carousel.data-api", function() {
        for (var t, i = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, u = i.length; n < u; n++) t = r.default(i[n]), y._jQueryInterface.call(t, t.data())
    });
    r.default.fn[v] = y._jQueryInterface;
    r.default.fn[v].Constructor = y;
    r.default.fn[v].noConflict = function() {
        return r.default.fn[v] = dt, y._jQueryInterface
    };
    var p = "collapse",
        ni = r.default.fn[p],
        et = {
            toggle: !0,
            parent: ""
        },
        ti = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        g = function() {
            function t(n, t) {
                this._isTransitioning = !1;
                this._element = n;
                this._config = this._getConfig(t);
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
                for (var f = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = f.length; i < o; i++) {
                    var e = f[i],
                        r = u.getSelectorFromElement(e),
                        s = [].slice.call(document.querySelectorAll(r)).filter(function(t) {
                            return t === n
                        });
                    null !== r && s.length > 0 && (this._selector = r, this._triggerArray.push(e))
                }
                this._parent = this._config.parent ? this._getParent() : null;
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                this._config.toggle && this.toggle()
            }
            var n = t.prototype;
            return n.toggle = function() {
                r.default(this._element).hasClass("show") ? this.hide() : this.show()
            }, n.show = function() {
                var n, e, i = this,
                    o, f, s, h;
                this._isTransitioning || r.default(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(n) {
                    return "string" == typeof i._config.parent ? n.getAttribute("data-parent") === i._config.parent : n.classList.contains("collapse")
                })).length && (n = null), n && (e = r.default(n).not(this._selector).data("bs.collapse")) && e._isTransitioning) || (o = r.default.Event("show.bs.collapse"), (r.default(this._element).trigger(o), o.isDefaultPrevented()) || (n && (t._jQueryInterface.call(r.default(n).not(this._selector), "hide"), e || r.default(n).data("bs.collapse", null)), f = this._getDimension(), r.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[f] = 0, this._triggerArray.length && r.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0), s = "scroll" + (f[0].toUpperCase() + f.slice(1)), h = u.getTransitionDurationFromElement(this._element), r.default(this._element).one(u.TRANSITION_END, function() {
                    r.default(i._element).removeClass("collapsing").addClass("collapse show");
                    i._element.style[f] = "";
                    i.setTransitioning(!1);
                    r.default(i._element).trigger("shown.bs.collapse")
                }).emulateTransitionEnd(h), this._element.style[f] = this._element[s] + "px"))
            }, n.hide = function() {
                var s = this,
                    i, n, f, t, e, o, h;
                if (!this._isTransitioning && r.default(this._element).hasClass("show") && (i = r.default.Event("hide.bs.collapse"), r.default(this._element).trigger(i), !i.isDefaultPrevented())) {
                    if (n = this._getDimension(), this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", u.reflow(this._element), r.default(this._element).addClass("collapsing").removeClass("collapse show"), f = this._triggerArray.length, f > 0)
                        for (t = 0; t < f; t++) e = this._triggerArray[t], o = u.getSelectorFromElement(e), null !== o && (r.default([].slice.call(document.querySelectorAll(o))).hasClass("show") || r.default(e).addClass("collapsed").attr("aria-expanded", !1));
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    h = u.getTransitionDurationFromElement(this._element);
                    r.default(this._element).one(u.TRANSITION_END, function() {
                        s.setTransitioning(!1);
                        r.default(s._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    }).emulateTransitionEnd(h)
                }
            }, n.setTransitioning = function(n) {
                this._isTransitioning = n
            }, n.dispose = function() {
                r.default.removeData(this._element, "bs.collapse");
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }, n._getConfig = function(n) {
                return (n = f({}, et, n)).toggle = Boolean(n.toggle), u.typeCheckConfig(p, n, ti), n
            }, n._getDimension = function() {
                return r.default(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, e = this,
                    i, f;
                return u.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent), i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', f = [].slice.call(n.querySelectorAll(i)), r.default(f).each(function(n, i) {
                    e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
                }), n
            }, n._addAriaAndCollapsedClass = function(n, t) {
                var i = r.default(n).hasClass("show");
                t.length && r.default(t).toggleClass("collapsed", !i).attr("aria-expanded", i)
            }, t._getTargetFromElement = function(n) {
                var t = u.getSelectorFromElement(n);
                return t ? document.querySelector(t) : null
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = r.default(this),
                        i = u.data("bs.collapse"),
                        e = f({}, et, u.data(), "object" == typeof n && n ? n : {});
                    if (!i && e.toggle && "string" == typeof n && /show|hide/.test(n) && (e.toggle = !1), i || (i = new t(this, e), u.data("bs.collapse", i)), "string" == typeof n) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return et
                }
            }]), t
        }();
    r.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var t = r.default(this),
            i = u.getSelectorFromElement(this),
            f = [].slice.call(document.querySelectorAll(i));
        r.default(f).each(function() {
            var n = r.default(this),
                i = n.data("bs.collapse") ? "toggle" : t.data();
            g._jQueryInterface.call(n, i)
        })
    });
    r.default.fn[p] = g._jQueryInterface;
    r.default.fn[p].Constructor = g;
    r.default.fn[p].noConflict = function() {
        return r.default.fn[p] = ni, g._jQueryInterface
    };
    var w = "dropdown",
        ii = r.default.fn[w],
        ri = new RegExp("38|40|27"),
        ui = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        fi = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        o = function() {
            function n(n, t) {
                this._element = n;
                this._popper = null;
                this._config = this._getConfig(t);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }
            var t = n.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !r.default(this._element).hasClass("disabled")) {
                    var t = r.default(this._menu).hasClass("show");
                    n._clearMenus();
                    t || this.show(!0)
                }
            }, t.show = function(t) {
                var f;
                if (void 0 === t && (t = !1), !(this._element.disabled || r.default(this._element).hasClass("disabled") || r.default(this._menu).hasClass("show"))) {
                    var e = {
                            relatedTarget: this._element
                        },
                        o = r.default.Event("show.bs.dropdown", e),
                        i = n._getParentFromElement(this._element);
                    if (r.default(i).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if ("undefined" == typeof it.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            f = this._element;
                            "parent" === this._config.reference ? f = i : u.isElement(this._config.reference) && (f = this._config.reference, "undefined" != typeof this._config.reference.jquery && (f = this._config.reference[0]));
                            "scrollParent" !== this._config.boundary && r.default(i).addClass("position-static");
                            this._popper = new it.default(f, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === r.default(i).closest(".navbar-nav").length && r.default(document.body).children().on("mouseover", null, r.default.noop);
                        this._element.focus();
                        this._element.setAttribute("aria-expanded", !0);
                        r.default(this._menu).toggleClass("show");
                        r.default(i).toggleClass("show").trigger(r.default.Event("shown.bs.dropdown", e))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !r.default(this._element).hasClass("disabled") && r.default(this._menu).hasClass("show")) {
                    var t = {
                            relatedTarget: this._element
                        },
                        i = r.default.Event("hide.bs.dropdown", t),
                        u = n._getParentFromElement(this._element);
                    r.default(u).trigger(i);
                    i.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass("show"), r.default(u).toggleClass("show").trigger(r.default.Event("hidden.bs.dropdown", t)))
                }
            }, t.dispose = function() {
                r.default.removeData(this._element, "bs.dropdown");
                r.default(this._element).off(".bs.dropdown");
                this._element = null;
                this._menu = null;
                null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar();
                null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var n = this;
                r.default(this._element).on("click.bs.dropdown", function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    n.toggle()
                })
            }, t._getConfig = function(n) {
                return n = f({}, this.constructor.Default, r.default(this._element).data(), n), u.typeCheckConfig(w, n, this.constructor.DefaultType), n
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = n._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = r.default(this._element.parentNode),
                    n = "bottom-start";
                return t.hasClass("dropup") ? n = r.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : r.default(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
            }, t._detectNavbar = function() {
                return r.default(this._element).closest(".navbar").length > 0
            }, t._getOffset = function() {
                var t = this,
                    n = {};
                return "function" == typeof this._config.offset ? n.fn = function(n) {
                    return n.offsets = f({}, n.offsets, t._config.offset(n.offsets, t._element) || {}), n
                } : n.offset = this._config.offset, n
            }, t._getPopperConfig = function() {
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), f({}, n, this._config.popperConfig)
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = r.default(this).data("bs.dropdown");
                    if (i || (i = new n(this, "object" == typeof t ? t : null), r.default(this).data("bs.dropdown", i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, n._clearMenus = function(t) {
                var h, s;
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var u = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, c = u.length; i < c; i++) {
                        var f = n._getParentFromElement(u[i]),
                            e = r.default(u[i]).data("bs.dropdown"),
                            o = {
                                relatedTarget: u[i]
                            };
                        (t && "click" === t.type && (o.clickEvent = t), e) && (h = e._menu, !r.default(f).hasClass("show") || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && r.default.contains(f, t.target) || (s = r.default.Event("hide.bs.dropdown", o), r.default(f).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), u[i].setAttribute("aria-expanded", "false"), e._popper && e._popper.destroy(), r.default(h).removeClass("show"), r.default(f).removeClass("show").trigger(r.default.Event("hidden.bs.dropdown", o)))))
                    }
            }, n._getParentFromElement = function(n) {
                var t, i = u.getSelectorFromElement(n);
                return i && (t = document.querySelector(i)), t || n.parentNode
            }, n._dataApiKeydownHandler = function(t) {
                var f, e, u, i;
                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || r.default(t.target).closest(".dropdown-menu").length) : !ri.test(t.which)) && !this.disabled && !r.default(this).hasClass("disabled") && (f = n._getParentFromElement(this), e = r.default(f).hasClass("show"), e || 27 !== t.which)) {
                    if (t.preventDefault(), t.stopPropagation(), !e || 27 === t.which || 32 === t.which) return 27 === t.which && r.default(f.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void r.default(this).trigger("click");
                    u = [].slice.call(f.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(n) {
                        return r.default(n).is(":visible")
                    });
                    0 !== u.length && (i = u.indexOf(t.target), 38 === t.which && i > 0 && i--, 40 === t.which && i < u.length - 1 && i++, i < 0 && (i = 0), u[i].focus())
                }
            }, e(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ui
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return fi
                }
            }]), n
        }();
    r.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', o._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", o._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(n) {
        n.preventDefault();
        n.stopPropagation();
        o._jQueryInterface.call(r.default(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    });
    r.default.fn[w] = o._jQueryInterface;
    r.default.fn[w].Constructor = o;
    r.default.fn[w].noConflict = function() {
        return r.default.fn[w] = ii, o._jQueryInterface
    };
    var ei = r.default.fn.modal,
        ot = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        oi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        nt = function() {
            function t(n, t) {
                this._config = this._getConfig(t);
                this._element = n;
                this._dialog = n.querySelector(".modal-dialog");
                this._backdrop = null;
                this._isShown = !1;
                this._isBodyOverflowing = !1;
                this._ignoreBackdropClick = !1;
                this._isTransitioning = !1;
                this._scrollbarWidth = 0
            }
            var n = t.prototype;
            return n.toggle = function(n) {
                return this._isShown ? this.hide() : this.show(n)
            }, n.show = function(n) {
                var t = this,
                    i;
                this._isShown || this._isTransitioning || (r.default(this._element).hasClass("fade") && (this._isTransitioning = !0), i = r.default.Event("show.bs.modal", {
                    relatedTarget: n
                }), r.default(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(n) {
                    return t.hide(n)
                }), r.default(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                    r.default(t._element).one("mouseup.dismiss.bs.modal", function(n) {
                        r.default(n.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(n)
                })))
            }, n.hide = function(n) {
                var e = this,
                    t, i, f;
                (n && n.preventDefault(), this._isShown && !this._isTransitioning) && (t = r.default.Event("hide.bs.modal"), (r.default(this._element).trigger(t), this._isShown && !t.isDefaultPrevented()) && (this._isShown = !1, i = r.default(this._element).hasClass("fade"), (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r.default(document).off("focusin.bs.modal"), r.default(this._element).removeClass("show"), r.default(this._element).off("click.dismiss.bs.modal"), r.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) ? (f = u.getTransitionDurationFromElement(this._element), r.default(this._element).one(u.TRANSITION_END, function(n) {
                    return e._hideModal(n)
                }).emulateTransitionEnd(f)) : this._hideModal()))
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(n) {
                    return r.default(n).off(".bs.modal")
                });
                r.default(document).off("focusin.bs.modal");
                r.default.removeData(this._element, "bs.modal");
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._isTransitioning = null;
                this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(n) {
                return n = f({}, ot, n), u.typeCheckConfig("modal", n, oi), n
            }, n._triggerBackdropTransition = function() {
                var n = this,
                    f = r.default.Event("hidePrevented.bs.modal"),
                    t, i;
                (r.default(this._element).trigger(f), f.isDefaultPrevented()) || (t = this._element.scrollHeight > document.documentElement.clientHeight, t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"), i = u.getTransitionDurationFromElement(this._dialog), r.default(this._element).off(u.TRANSITION_END), r.default(this._element).one(u.TRANSITION_END, function() {
                    n._element.classList.remove("modal-static");
                    t || r.default(n._element).one(u.TRANSITION_END, function() {
                        n._element.style.overflowY = ""
                    }).emulateTransitionEnd(n._element, i)
                }).emulateTransitionEnd(i), this._element.focus())
            }, n._showElement = function(n) {
                var t = this,
                    f = r.default(this._element).hasClass("fade"),
                    e = this._dialog ? this._dialog.querySelector(".modal-body") : null,
                    o, i, s;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", !0);
                this._element.setAttribute("role", "dialog");
                r.default(this._dialog).hasClass("modal-dialog-scrollable") && e ? e.scrollTop = 0 : this._element.scrollTop = 0;
                f && u.reflow(this._element);
                r.default(this._element).addClass("show");
                this._config.focus && this._enforceFocus();
                o = r.default.Event("shown.bs.modal", {
                    relatedTarget: n
                });
                i = function() {
                    t._config.focus && t._element.focus();
                    t._isTransitioning = !1;
                    r.default(t._element).trigger(o)
                };
                f ? (s = u.getTransitionDurationFromElement(this._dialog), r.default(this._dialog).one(u.TRANSITION_END, i).emulateTransitionEnd(s)) : i()
            }, n._enforceFocus = function() {
                var n = this;
                r.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function(t) {
                    document !== t.target && n._element !== t.target && 0 === r.default(n._element).has(t.target).length && n._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var n = this;
                this._isShown ? r.default(this._element).on("keydown.dismiss.bs.modal", function(t) {
                    n._config.keyboard && 27 === t.which ? (t.preventDefault(), n.hide()) : n._config.keyboard || 27 !== t.which || n._triggerBackdropTransition()
                }) : this._isShown || r.default(this._element).off("keydown.dismiss.bs.modal")
            }, n._setResizeEvent = function() {
                var n = this;
                this._isShown ? r.default(window).on("resize.bs.modal", function(t) {
                    return n.handleUpdate(t)
                }) : r.default(window).off("resize.bs.modal")
            }, n._hideModal = function() {
                var n = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", !0);
                this._element.removeAttribute("aria-modal");
                this._element.removeAttribute("role");
                this._isTransitioning = !1;
                this._showBackdrop(function() {
                    r.default(document.body).removeClass("modal-open");
                    n._resetAdjustments();
                    n._resetScrollbar();
                    r.default(n._element).trigger("hidden.bs.modal")
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (r.default(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(n) {
                var t = this,
                    i = r.default(this._element).hasClass("fade") ? "fade" : "",
                    e, f, o;
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), r.default(this._backdrop).appendTo(document.body), r.default(this._element).on("click.dismiss.bs.modal", function(n) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                        }), i && u.reflow(this._backdrop), r.default(this._backdrop).addClass("show"), !n) return;
                    if (!i) return void n();
                    e = u.getTransitionDurationFromElement(this._backdrop);
                    r.default(this._backdrop).one(u.TRANSITION_END, n).emulateTransitionEnd(e)
                } else !this._isShown && this._backdrop ? (r.default(this._backdrop).removeClass("show"), f = function() {
                    t._removeBackdrop();
                    n && n()
                }, r.default(this._element).hasClass("fade") ? (o = u.getTransitionDurationFromElement(this._backdrop), r.default(this._backdrop).one(u.TRANSITION_END, f).emulateTransitionEnd(o)) : f()) : n && n()
            }, n._adjustDialog = function() {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
                this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var n = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(n.left + n.right) < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var n = this,
                    t, i, u, f;
                this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), i = [].slice.call(document.querySelectorAll(".sticky-top")), r.default(t).each(function(t, i) {
                    var u = i.style.paddingRight,
                        f = r.default(i).css("padding-right");
                    r.default(i).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
                }), r.default(i).each(function(t, i) {
                    var u = i.style.marginRight,
                        f = r.default(i).css("margin-right");
                    r.default(i).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
                }), u = document.body.style.paddingRight, f = r.default(document.body).css("padding-right"), r.default(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
                r.default(document.body).addClass("modal-open")
            }, n._resetScrollbar = function() {
                var i = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                    n, t;
                r.default(i).each(function(n, t) {
                    var i = r.default(t).data("padding-right");
                    r.default(t).removeData("padding-right");
                    t.style.paddingRight = i || ""
                });
                n = [].slice.call(document.querySelectorAll(".sticky-top"));
                r.default(n).each(function(n, t) {
                    var i = r.default(t).data("margin-right");
                    "undefined" != typeof i && r.default(t).css("margin-right", i).removeData("margin-right")
                });
                t = r.default(document.body).data("padding-right");
                r.default(document.body).removeData("padding-right");
                document.body.style.paddingRight = t || ""
            }, n._getScrollbarWidth = function() {
                var n = document.createElement("div"),
                    t;
                return n.className = "modal-scrollbar-measure", document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
            }, t._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var u = r.default(this).data("bs.modal"),
                        e = f({}, ot, r.default(this).data(), "object" == typeof n && n ? n : {});
                    if (u || (u = new t(this, e), r.default(this).data("bs.modal", u)), "string" == typeof n) {
                        if ("undefined" == typeof u[n]) throw new TypeError('No method named "' + n + '"');
                        u[n](i)
                    } else e.show && u.show(i)
                })
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ot
                }
            }]), t
        }();
    r.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var t, i = this,
            e = u.getSelectorFromElement(this),
            o, s;
        e && (t = document.querySelector(e));
        o = r.default(t).data("bs.modal") ? "toggle" : f({}, r.default(t).data(), r.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        s = r.default(t).one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                r.default(i).is(":visible") && i.focus()
            })
        });
        nt._jQueryInterface.call(r.default(t), o, this)
    });
    r.default.fn.modal = nt._jQueryInterface;
    r.default.fn.modal.Constructor = nt;
    r.default.fn.modal.noConflict = function() {
        return r.default.fn.modal = ei, nt._jQueryInterface
    };
    var si = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        hi = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        ci = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    var s = "tooltip",
        li = r.default.fn[s],
        ai = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        vi = ["sanitize", "whiteList", "sanitizeFn"],
        yi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        pi = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        wi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        bi = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        h = function() {
            function t(n, t) {
                if ("undefined" == typeof it.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = n;
                this.config = this._getConfig(t);
                this.tip = null;
                this._setListeners()
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(n) {
                if (this._isEnabled)
                    if (n) {
                        var i = this.constructor.DATA_KEY,
                            t = r.default(n.currentTarget).data(i);
                        t || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), r.default(n.currentTarget).data(i, t));
                        t._activeTrigger.click = !t._activeTrigger.click;
                        t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                    } else {
                        if (r.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout);
                r.default.removeData(this.element, this.constructor.DATA_KEY);
                r.default(this.element).off(this.constructor.EVENT_KEY);
                r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
                this.tip && r.default(this.tip).remove();
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                this._popper && this._popper.destroy();
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            }, n.show = function() {
                var t = this,
                    i, f, h, n, e, c, o, l, s, a;
                if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                if (i = r.default.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
                    if (r.default(this.element).trigger(i), f = u.findShadowRoot(this.element), h = r.default.contains(null !== f ? f : this.element.ownerDocument.documentElement, this.element), i.isDefaultPrevented() || !h) return;
                    n = this.getTipElement();
                    e = u.getUID(this.constructor.NAME);
                    n.setAttribute("id", e);
                    this.element.setAttribute("aria-describedby", e);
                    this.setContent();
                    this.config.animation && r.default(n).addClass("fade");
                    c = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement;
                    o = this._getAttachment(c);
                    this.addAttachmentClass(o);
                    l = this._getContainer();
                    r.default(n).data(this.constructor.DATA_KEY, this);
                    r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(n).appendTo(l);
                    r.default(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new it.default(this.element, n, this._getPopperConfig(o));
                    r.default(n).addClass("show");
                    r.default(n).addClass(this.config.customClass);
                    "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                    s = function() {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null;
                        r.default(t.element).trigger(t.constructor.Event.SHOWN);
                        "out" === n && t._leave(null, t)
                    };
                    r.default(this.tip).hasClass("fade") ? (a = u.getTransitionDurationFromElement(this.tip), r.default(this.tip).one(u.TRANSITION_END, s).emulateTransitionEnd(a)) : s()
                }
            }, n.hide = function(n) {
                var t = this,
                    i = this.getTipElement(),
                    f = r.default.Event(this.constructor.Event.HIDE),
                    e = function() {
                        "show" !== t._hoverState && i.parentNode && i.parentNode.removeChild(i);
                        t._cleanTipClass();
                        t.element.removeAttribute("aria-describedby");
                        r.default(t.element).trigger(t.constructor.Event.HIDDEN);
                        null !== t._popper && t._popper.destroy();
                        n && n()
                    },
                    o;
                (r.default(this.element).trigger(f), f.isDefaultPrevented()) || ((r.default(i).removeClass("show"), "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, r.default(this.tip).hasClass("fade")) ? (o = u.getTransitionDurationFromElement(i), r.default(i).one(u.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(n) {
                r.default(this.getTipElement()).addClass("bs-tooltip-" + n)
            }, n.getTipElement = function() {
                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var n = this.getTipElement();
                this.setElementContent(r.default(n.querySelectorAll(".tooltip-inner")), this.getTitle());
                r.default(n).removeClass("fade show")
            }, n.setElementContent = function(n, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = at(t, this.config.whiteList, this.config.sanitizeFn)), n.html(t)) : n.text(t) : this.config.html ? r.default(t).parent().is(n) || n.empty().append(t) : n.text(r.default(t).text())
            }, n.getTitle = function() {
                var n = this.element.getAttribute("data-original-title");
                return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), n
            }, n._getPopperConfig = function(n) {
                var t = this;
                return f({}, {
                    placement: n,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(n) {
                        n.originalPlacement !== n.placement && t._handlePopperPlacementChange(n)
                    },
                    onUpdate: function(n) {
                        return t._handlePopperPlacementChange(n)
                    }
                }, this.config.popperConfig)
            }, n._getOffset = function() {
                var t = this,
                    n = {};
                return "function" == typeof this.config.offset ? n.fn = function(n) {
                    return n.offsets = f({}, n.offsets, t.config.offset(n.offsets, t.element) || {}), n
                } : n.offset = this.config.offset, n
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container)
            }, n._getAttachment = function(n) {
                return pi[n.toUpperCase()]
            }, n._setListeners = function() {
                var n = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) r.default(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                        return n.toggle(t)
                    });
                    else if ("manual" !== t) {
                        var i = "hover" === t ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                            u = "hover" === t ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                        r.default(n.element).on(i, n.config.selector, function(t) {
                            return n._enter(t)
                        }).on(u, n.config.selector, function(t) {
                            return n._leave(t)
                        })
                    }
                });
                this._hideModalHandler = function() {
                    n.element && n.hide()
                };
                r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
                this.config.selector ? this.config = f({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var n = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(n, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || r.default(n.currentTarget).data(i)) || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), r.default(n.currentTarget).data(i, t));
                n && (t._activeTrigger["focusin" === n.type ? "focus" : "hover"] = !0);
                r.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    "show" === t._hoverState && t.show()
                }, t.config.delay.show) : t.show())
            }, n._leave = function(n, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || r.default(n.currentTarget).data(i)) || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), r.default(n.currentTarget).data(i, t));
                n && (t._activeTrigger["focusout" === n.type ? "focus" : "hover"] = !1);
                t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, n._isWithActiveTrigger = function() {
                for (var n in this._activeTrigger)
                    if (this._activeTrigger[n]) return !0;
                return !1
            }, n._getConfig = function(n) {
                var t = r.default(this.element).data();
                return Object.keys(t).forEach(function(n) {
                    -1 !== vi.indexOf(n) && delete t[n]
                }), "number" == typeof(n = f({}, this.constructor.Default, t, "object" == typeof n && n ? n : {})).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), u.typeCheckConfig(s, n, this.constructor.DefaultType), n.sanitize && (n.template = at(n.template, n.whiteList, n.sanitizeFn)), n
            }, n._getDelegateConfig = function() {
                var t = {},
                    n;
                if (this.config)
                    for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
                return t
            }, n._cleanTipClass = function() {
                var t = r.default(this.getTipElement()),
                    n = t.attr("class").match(ai);
                null !== n && n.length && t.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(n) {
                this.tip = n.instance.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(n.placement))
            }, n._fixTransition = function() {
                var n = this.getTipElement(),
                    t = this.config.animation;
                null === n.getAttribute("x-placement") && (r.default(n).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = r.default(this),
                        i = u.data("bs.tooltip"),
                        f = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, f), u.data("bs.tooltip", i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return wi
                }
            }, {
                key: "NAME",
                get: function() {
                    return s
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return bi
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return yi
                }
            }]), t
        }();
    r.default.fn[s] = h._jQueryInterface;
    r.default.fn[s].Constructor = h;
    r.default.fn[s].noConflict = function() {
        return r.default.fn[s] = li, h._jQueryInterface
    };
    var b = "popover",
        ki = r.default.fn[b],
        di = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        gi = f({}, h.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
        }),
        nr = f({}, h.DefaultType, {
            content: "(string|element|function)"
        }),
        tr = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        rt = function(n) {
            function i() {
                return n.apply(this, arguments) || this
            }
            var u, f, t;
            return f = n, (u = i).prototype = Object.create(f.prototype), u.prototype.constructor = u, u.__proto__ = f, t = i.prototype, t.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, t.addAttachmentClass = function(n) {
                r.default(this.getTipElement()).addClass("bs-popover-" + n)
            }, t.getTipElement = function() {
                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = r.default(this.getTipElement()),
                    n;
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                n = this._getContent();
                "function" == typeof n && (n = n.call(this.element));
                this.setElementContent(t.find(".popover-body"), n);
                t.removeClass("fade show")
            }, t._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, t._cleanTipClass = function() {
                var t = r.default(this.getTipElement()),
                    n = t.attr("class").match(di);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = r.default(this).data("bs.popover"),
                        u = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, u), r.default(this).data("bs.popover", t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, e(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return gi
                }
            }, {
                key: "NAME",
                get: function() {
                    return b
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return tr
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return nr
                }
            }]), i
        }(h);
    r.default.fn[b] = rt._jQueryInterface;
    r.default.fn[b].Constructor = rt;
    r.default.fn[b].noConflict = function() {
        return r.default.fn[b] = ki, rt._jQueryInterface
    };
    var c = "scrollspy",
        ir = r.default.fn[c],
        vt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        rr = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        tt = function() {
            function t(n, t) {
                var i = this;
                this._element = n;
                this._scrollElement = "BODY" === n.tagName ? window : n;
                this._config = this._getConfig(t);
                this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item";
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                r.default(this._scrollElement).on("scroll.bs.scrollspy", function(n) {
                    return i._process(n)
                });
                this.refresh();
                this._process()
            }
            var n = t.prototype;
            return n.refresh = function() {
                var n = this,
                    i = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    t = "auto" === this._config.method ? i : this._config.method,
                    f = "position" === t ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                    var i, e = u.getSelectorFromElement(n),
                        o;
                    return (e && (i = document.querySelector(e)), i) && (o = i.getBoundingClientRect(), o.width || o.height) ? [r.default(i)[t]().top + f, e] : null
                }).filter(function(n) {
                    return n
                }).sort(function(n, t) {
                    return n[0] - t[0]
                }).forEach(function(t) {
                    n._offsets.push(t[0]);
                    n._targets.push(t[1])
                })
            }, n.dispose = function() {
                r.default.removeData(this._element, "bs.scrollspy");
                r.default(this._scrollElement).off(".bs.scrollspy");
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            }, n._getConfig = function(n) {
                if ("string" != typeof(n = f({}, vt, "object" == typeof n && n ? n : {})).target && u.isElement(n.target)) {
                    var t = r.default(n.target).attr("id");
                    t || (t = u.getUID(c), r.default(n.target).attr("id", t));
                    n.target = "#" + t
                }
                return u.typeCheckConfig(c, n, rr), n
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    r = this._getScrollHeight(),
                    u = this._config.offset + r - this._getOffsetHeight(),
                    i, n;
                if (this._scrollHeight !== r && this.refresh(), t >= u) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i);
                else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
                }
            }, n._activate = function(n) {
                this._activeTarget = n;
                this._clear();
                var i = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
                    }),
                    t = r.default([].slice.call(document.querySelectorAll(i.join(","))));
                t.hasClass("dropdown-item") ? (t.closest(".dropdown").find(".dropdown-toggle").addClass("active"), t.addClass("active")) : (t.addClass("active"), t.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), t.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active"));
                r.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: n
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(n) {
                    return n.classList.contains("active")
                }).forEach(function(n) {
                    return n.classList.remove("active")
                })
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = r.default(this).data("bs.scrollspy");
                    if (i || (i = new t(this, "object" == typeof n && n), r.default(this).data("bs.scrollspy", i)), "string" == typeof n) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return vt
                }
            }]), t
        }();
    r.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var i, n = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = n.length; t--;) i = r.default(n[t]), tt._jQueryInterface.call(i, i.data())
    });
    r.default.fn[c] = tt._jQueryInterface;
    r.default.fn[c].Constructor = tt;
    r.default.fn[c].noConflict = function() {
        return r.default.fn[c] = ir, tt._jQueryInterface
    };
    yt = r.default.fn.tab;
    k = function() {
        function n(n) {
            this._element = n
        }
        var t = n.prototype;
        return t.show = function() {
            var h = this,
                i, n, t, f, c, e, o, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass("active") || r.default(this._element).hasClass("disabled") || (t = r.default(this._element).closest(".nav, .list-group")[0], f = u.getSelectorFromElement(this._element), t && (c = "UL" === t.nodeName || "OL" === t.nodeName ? "> li > .active" : ".active", n = (n = r.default.makeArray(r.default(t).find(c)))[n.length - 1]), e = r.default.Event("hide.bs.tab", {
                relatedTarget: this._element
            }), o = r.default.Event("show.bs.tab", {
                relatedTarget: n
            }), (n && r.default(n).trigger(e), r.default(this._element).trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (i = document.querySelector(f)), this._activate(this._element, t), s = function() {
                var t = r.default.Event("hidden.bs.tab", {
                        relatedTarget: h._element
                    }),
                    i = r.default.Event("shown.bs.tab", {
                        relatedTarget: n
                    });
                r.default(n).trigger(t);
                r.default(h._element).trigger(i)
            }, i ? this._activate(i, i.parentNode, s) : s()))
        }, t.dispose = function() {
            r.default.removeData(this._element, "bs.tab");
            this._element = null
        }, t._activate = function(n, t, i) {
            var s = this,
                f = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? r.default(t).children(".active") : r.default(t).find("> li > .active"))[0],
                h = i && f && r.default(f).hasClass("fade"),
                e = function() {
                    return s._transitionComplete(n, f, i)
                },
                o;
            f && h ? (o = u.getTransitionDurationFromElement(f), r.default(f).removeClass("show").one(u.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
        }, t._transitionComplete = function(n, t, i) {
            var f, e, o;
            t && (r.default(t).removeClass("active"), f = r.default(t.parentNode).find("> .dropdown-menu .active")[0], f && r.default(f).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1));
            (r.default(n).addClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), u.reflow(n), n.classList.contains("fade") && n.classList.add("show"), n.parentNode && r.default(n.parentNode).hasClass("dropdown-menu")) && (e = r.default(n).closest(".dropdown")[0], e && (o = [].slice.call(e.querySelectorAll(".dropdown-toggle")), r.default(o).addClass("active")), n.setAttribute("aria-expanded", !0));
            i && i()
        }, n._jQueryInterface = function(t) {
            return this.each(function() {
                var u = r.default(this),
                    i = u.data("bs.tab");
                if (i || (i = new n(this), u.data("bs.tab", i)), "string" == typeof t) {
                    if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                    i[t]()
                }
            })
        }, e(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.0"
            }
        }]), n
    }();
    r.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(n) {
        n.preventDefault();
        k._jQueryInterface.call(r.default(this), "show")
    });
    r.default.fn.tab = k._jQueryInterface;
    r.default.fn.tab.Constructor = k;
    r.default.fn.tab.noConflict = function() {
        return r.default.fn.tab = yt, k._jQueryInterface
    };
    var ur = r.default.fn.toast,
        fr = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        pt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ut = function() {
            function t(n, t) {
                this._element = n;
                this._config = this._getConfig(t);
                this._timeout = null;
                this._setListeners()
            }
            var n = t.prototype;
            return n.show = function() {
                var n = this,
                    i = r.default.Event("show.bs.toast"),
                    t, f;
                (r.default(this._element).trigger(i), i.isDefaultPrevented()) || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), t = function() {
                    n._element.classList.remove("showing");
                    n._element.classList.add("show");
                    r.default(n._element).trigger("shown.bs.toast");
                    n._config.autohide && (n._timeout = setTimeout(function() {
                        n.hide()
                    }, n._config.delay))
                }, (this._element.classList.remove("hide"), u.reflow(this._element), this._element.classList.add("showing"), this._config.animation) ? (f = u.getTransitionDurationFromElement(this._element), r.default(this._element).one(u.TRANSITION_END, t).emulateTransitionEnd(f)) : t())
            }, n.hide = function() {
                if (this._element.classList.contains("show")) {
                    var n = r.default.Event("hide.bs.toast");
                    r.default(this._element).trigger(n);
                    n.isDefaultPrevented() || this._close()
                }
            }, n.dispose = function() {
                this._clearTimeout();
                this._element.classList.contains("show") && this._element.classList.remove("show");
                r.default(this._element).off("click.dismiss.bs.toast");
                r.default.removeData(this._element, "bs.toast");
                this._element = null;
                this._config = null
            }, n._getConfig = function(n) {
                return n = f({}, pt, r.default(this._element).data(), "object" == typeof n && n ? n : {}), u.typeCheckConfig("toast", n, this.constructor.DefaultType), n
            }, n._setListeners = function() {
                var n = this;
                r.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                    return n.hide()
                })
            }, n._close = function() {
                var n = this,
                    t = function() {
                        n._element.classList.add("hide");
                        r.default(n._element).trigger("hidden.bs.toast")
                    },
                    i;
                (this._element.classList.remove("show"), this._config.animation) ? (i = u.getTransitionDurationFromElement(this._element), r.default(this._element).one(u.TRANSITION_END, t).emulateTransitionEnd(i)) : t()
            }, n._clearTimeout = function() {
                clearTimeout(this._timeout);
                this._timeout = null
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = r.default(this),
                        i = u.data("bs.toast");
                    if (i || (i = new t(this, "object" == typeof n && n), u.data("bs.toast", i)), "string" == typeof n) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n](this)
                    }
                })
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.6.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return fr
                }
            }, {
                key: "Default",
                get: function() {
                    return pt
                }
            }]), t
        }();
    r.default.fn.toast = ut._jQueryInterface;
    r.default.fn.toast.Constructor = ut;
    r.default.fn.toast.noConflict = function() {
        return r.default.fn.toast = ur, ut._jQueryInterface
    };
    n.Alert = l;
    n.Button = a;
    n.Carousel = y;
    n.Collapse = g;
    n.Dropdown = o;
    n.Modal = nt;
    n.Popover = rt;
    n.Scrollspy = tt;
    n.Tab = k;
    n.Toast = ut;
    n.Tooltip = h;
    n.Util = u;
    Object.defineProperty(n, "__esModule", {
        value: !0
    })
});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function n(r) {
        if (!r) throw new Error("No options passed to Waypoint constructor");
        if (!r.element) throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + i;
        this.options = n.Adapter.extend({}, n.defaults, r);
        this.element = this.options.element;
        this.adapter = new n.Adapter(this.element);
        this.callback = r.handler;
        this.axis = this.options.horizontal ? "horizontal" : "vertical";
        this.enabled = this.options.enabled;
        this.triggerPoint = null;
        this.group = n.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        });
        this.context = n.Context.findOrCreateByElement(this.options.context);
        n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]);
        this.group.add(this);
        this.context.add(this);
        t[this.key] = this;
        i += 1
    }
    var i = 0,
        t = {};
    n.prototype.queueTrigger = function(n) {
        this.group.queueTrigger(this, n)
    };
    n.prototype.trigger = function(n) {
        this.enabled && this.callback && this.callback.apply(this, n)
    };
    n.prototype.destroy = function() {
        this.context.remove(this);
        this.group.remove(this);
        delete t[this.key]
    };
    n.prototype.disable = function() {
        return this.enabled = !1, this
    };
    n.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    };
    n.prototype.next = function() {
        return this.group.next(this)
    };
    n.prototype.previous = function() {
        return this.group.previous(this)
    };
    n.invokeAll = function(n) {
        var r = [],
            u, i, f;
        for (u in t) r.push(t[u]);
        for (i = 0, f = r.length; f > i; i++) r[i][n]()
    };
    n.destroyAll = function() {
        n.invokeAll("destroy")
    };
    n.disableAll = function() {
        n.invokeAll("disable")
    };
    n.enableAll = function() {
        n.Context.refreshAll();
        for (var i in t) t[i].enabled = !0;
        return this
    };
    n.refreshAll = function() {
        n.Context.refreshAll()
    };
    n.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    };
    n.viewportWidth = function() {
        return document.documentElement.clientWidth
    };
    n.adapters = [];
    n.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    };
    n.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    };
    window.Waypoint = n
}(),
function() {
    "use strict";

    function f(n) {
        window.setTimeout(n, 1e3 / 60)
    }

    function n(u) {
        this.element = u;
        this.Adapter = t.Adapter;
        this.adapter = new this.Adapter(u);
        this.key = "waypoint-context-" + r;
        this.didScroll = !1;
        this.didResize = !1;
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        };
        this.waypoints = {
            vertical: {},
            horizontal: {}
        };
        u.waypointContextKey = this.key;
        i[u.waypointContextKey] = this;
        r += 1;
        t.windowContext || (t.windowContext = !0, t.windowContext = new n(window));
        this.createThrottledScrollHandler();
        this.createThrottledResizeHandler()
    }
    var r = 0,
        i = {},
        t = window.Waypoint,
        u = window.onload;
    n.prototype.add = function(n) {
        var t = n.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][n.key] = n;
        this.refresh()
    };
    n.prototype.checkEmpty = function() {
        var n = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical),
            r = this.element == this.element.window;
        n && t && !r && (this.adapter.off(".waypoints"), delete i[this.key])
    };
    n.prototype.createThrottledResizeHandler = function() {
        function i() {
            n.handleResize();
            n.didResize = !1
        }
        var n = this;
        this.adapter.on("resize.waypoints", function() {
            n.didResize || (n.didResize = !0, t.requestAnimationFrame(i))
        })
    };
    n.prototype.createThrottledScrollHandler = function() {
        function i() {
            n.handleScroll();
            n.didScroll = !1
        }
        var n = this;
        this.adapter.on("scroll.waypoints", function() {
            (!n.didScroll || t.isTouch) && (n.didScroll = !0, t.requestAnimationFrame(i))
        })
    };
    n.prototype.handleResize = function() {
        t.Context.refreshAll()
    };
    n.prototype.handleScroll = function() {
        var u = {},
            i = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            },
            r, f, n, s;
        for (r in i) {
            var t = i[r],
                h = t.newScroll > t.oldScroll,
                c = h ? t.forward : t.backward;
            for (f in this.waypoints[r])
                if (n = this.waypoints[r][f], null !== n.triggerPoint) {
                    var e = t.oldScroll < n.triggerPoint,
                        o = t.newScroll >= n.triggerPoint,
                        l = e && o,
                        a = !e && !o;
                    (l || a) && (n.queueTrigger(c), u[n.group.id] = n.group)
                }
        }
        for (s in u) u[s].flushTriggers();
        this.oldScroll = {
            x: i.horizontal.newScroll,
            y: i.vertical.newScroll
        }
    };
    n.prototype.innerHeight = function() {
        return this.element == this.element.window ? t.viewportHeight() : this.adapter.innerHeight()
    };
    n.prototype.remove = function(n) {
        delete this.waypoints[n.axis][n.key];
        this.checkEmpty()
    };
    n.prototype.innerWidth = function() {
        return this.element == this.element.window ? t.viewportWidth() : this.adapter.innerWidth()
    };
    n.prototype.destroy = function() {
        var t = [],
            i, r, n, u;
        for (i in this.waypoints)
            for (r in this.waypoints[i]) t.push(this.waypoints[i][r]);
        for (n = 0, u = t.length; u > n; n++) t[n].destroy()
    };
    n.prototype.refresh = function() {
        var o, u = this.element == this.element.window,
            l = u ? void 0 : this.adapter.offset(),
            f = {},
            e, i, a;
        this.handleScroll();
        o = {
            horizontal: {
                contextOffset: u ? 0 : l.left,
                contextScroll: u ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: u ? 0 : l.top,
                contextScroll: u ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (e in o) {
            i = o[e];
            for (a in this.waypoints[e]) {
                var v, s, h, y, p, n = this.waypoints[e][a],
                    r = n.options.offset,
                    w = n.triggerPoint,
                    b = 0,
                    c = null == w;
                n.element !== n.element.window && (b = n.adapter.offset()[i.offsetProp]);
                "function" == typeof r ? r = r.apply(n) : "string" == typeof r && (r = parseFloat(r), n.options.offset.indexOf("%") > -1 && (r = Math.ceil(i.contextDimension * r / 100)));
                v = i.contextScroll - i.contextOffset;
                n.triggerPoint = Math.floor(b + v - r);
                s = w < i.oldScroll;
                h = n.triggerPoint >= i.oldScroll;
                y = s && h;
                p = !s && !h;
                !c && y ? (n.queueTrigger(i.backward), f[n.group.id] = n.group) : !c && p ? (n.queueTrigger(i.forward), f[n.group.id] = n.group) : c && i.oldScroll >= n.triggerPoint && (n.queueTrigger(i.forward), f[n.group.id] = n.group)
            }
        }
        return t.requestAnimationFrame(function() {
            for (var n in f) f[n].flushTriggers()
        }), this
    };
    n.findOrCreateByElement = function(t) {
        return n.findByElement(t) || new n(t)
    };
    n.refreshAll = function() {
        for (var n in i) i[n].refresh()
    };
    n.findByElement = function(n) {
        return i[n.waypointContextKey]
    };
    window.onload = function() {
        u && u();
        n.refreshAll()
    };
    t.requestAnimationFrame = function(n) {
        var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || f;
        t.call(window, n)
    };
    t.Context = n
}(),
function() {
    "use strict";

    function i(n, t) {
        return n.triggerPoint - t.triggerPoint
    }

    function u(n, t) {
        return t.triggerPoint - n.triggerPoint
    }

    function n(n) {
        this.name = n.name;
        this.axis = n.axis;
        this.id = this.name + "-" + this.axis;
        this.waypoints = [];
        this.clearTriggerQueues();
        r[this.axis][this.name] = this
    }
    var r = {
            vertical: {},
            horizontal: {}
        },
        t = window.Waypoint;
    n.prototype.add = function(n) {
        this.waypoints.push(n)
    };
    n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    };
    n.prototype.flushTriggers = function() {
        var n, t, e, r, o, f;
        for (n in this.triggerQueues)
            for (t = this.triggerQueues[n], e = "up" === n || "left" === n, t.sort(e ? u : i), r = 0, o = t.length; o > r; r += 1) f = t[r], (f.options.continuous || r === t.length - 1) && f.trigger([n]);
        this.clearTriggerQueues()
    };
    n.prototype.next = function(n) {
        this.waypoints.sort(i);
        var r = t.Adapter.inArray(n, this.waypoints),
            u = r === this.waypoints.length - 1;
        return u ? null : this.waypoints[r + 1]
    };
    n.prototype.previous = function(n) {
        this.waypoints.sort(i);
        var r = t.Adapter.inArray(n, this.waypoints);
        return r ? this.waypoints[r - 1] : null
    };
    n.prototype.queueTrigger = function(n, t) {
        this.triggerQueues[t].push(n)
    };
    n.prototype.remove = function(n) {
        var i = t.Adapter.inArray(n, this.waypoints);
        i > -1 && this.waypoints.splice(i, 1)
    };
    n.prototype.first = function() {
        return this.waypoints[0]
    };
    n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    };
    n.findOrCreate = function(t) {
        return r[t.axis][t.name] || new n(t)
    };
    t.Group = n
}(),
function() {
    "use strict";

    function n(n) {
        this.$element = t(n)
    }
    var t = window.jQuery,
        i = window.Waypoint;
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
        n.prototype[i] = function() {
            var n = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, n)
        }
    });
    t.each(["extend", "inArray", "isEmptyObject"], function(i, r) {
        n[r] = t[r]
    });
    i.adapters.push({
        name: "jquery",
        Adapter: n
    });
    i.Adapter = n
}(),
function() {
    "use strict";

    function n(n) {
        return function() {
            var r = [],
                i = arguments[0];
            return n.isFunction(arguments[0]) && (i = n.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                var u = n.extend({}, i, {
                    element: this
                });
                "string" == typeof u.context && (u.context = n(this).closest(u.context)[0]);
                r.push(new t(u))
            }), r
        }
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = n(window.jQuery));
    window.Zepto && (window.Zepto.fn.waypoint = n(window.Zepto))
}(),
function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("os-Animation");
            u || r.data("os-Animation", u = new t(r, i))
        })
    }
    var t = function(t, i) {
        var f = {},
            r = t;
        f = n.extend({}, f, i);
        var o = r.attr("data-os-animation"),
            u = r.attr("data-os-animation-delay"),
            s = r.attr("data-os-animation-offset"),
            e = r.attr("data-os-animation-duration");
        r.css({
            "-webkit-animation-delay": u,
            "-moz-animation-delay": u,
            "animation-delay": u,
            "-webkit-animation-duration": e,
            "animation-duration": e
        });
        r.waypoint(function() {
            r.addClass("animated").addClass(o)
        }, {
            triggerOnce: !0,
            offset: s
        })
    };
    n.fn.osAnimation = i;
    n.fn.osAnimation.Constructor = t
}(jQuery, window, document);
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.7.0
*/
(function() {
    function n(t, i, r) {
        function u(f, o) {
            var h, c, s;
            if (!i[f]) {
                if (!t[f]) {
                    if (h = "function" == typeof require && require, !o && h) return h(f, !0);
                    if (e) return e(f, !0);
                    c = new Error("Cannot find module '" + f + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                s = i[f] = {
                    exports: {}
                };
                t[f][0].call(s.exports, function(n) {
                    var i = t[f][1][n];
                    return u(i || n)
                }, s, s.exports, n, t, i, r)
            }
            return i[f].exports
        }
        for (var e = "function" == typeof require && require, f = 0; f < r.length; f++) u(r[f]);
        return u
    }
    return n
})()({
    1: [function(n) {
        "use strict";
        n("./simple-lightbox"),
            function(n) {
                n.fn.simpleLightbox = function(n) {
                    return this.length ? new SimpleLightbox(this.get(), n) : null
                }
            }(jQuery, window, document)
    }, {
        "./simple-lightbox": 2
    }],
    2: [function(n, t, i) {
        (function(n) {
            (function() {
                "use strict";

                function r(n, t) {
                    var i, r, u, f, e, s;
                    if (typeof Symbol == "undefined" || n[Symbol.iterator] == null) {
                        if (Array.isArray(n) || (i = o(n)) || t && n && typeof n.length == "number") return i && (n = i), r = 0, u = function() {}, {
                            s: u,
                            n: function() {
                                return r >= n.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: n[r++]
                                }
                            },
                            e: function(n) {
                                throw n;
                            },
                            f: u
                        };
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    return f = !0, e = !1, {
                        s: function() {
                            i = n[Symbol.iterator]()
                        },
                        n: function() {
                            var n = i.next();
                            return f = n.done, n
                        },
                        e: function(n) {
                            e = !0;
                            s = n
                        },
                        f: function() {
                            try {
                                f || i["return"] == null || i["return"]()
                            } finally {
                                if (e) throw s;
                            }
                        }
                    }
                }

                function o(n, t) {
                    if (n) {
                        if (typeof n == "string") return u(n, t);
                        var i = Object.prototype.toString.call(n).slice(8, -1);
                        return (i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set") ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(n, t) : void 0
                    }
                }

                function u(n, t) {
                    (t == null || t > n.length) && (t = n.length);
                    for (var i = 0, r = new Array(t); i < t; i++) r[i] = n[i];
                    return r
                }

                function s(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                }

                function f(n, t) {
                    for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
                }

                function h(n, t, i) {
                    return t && f(n.prototype, t), i && f(n, i), n
                }

                function t(n, t, i) {
                    return t in n ? Object.defineProperty(n, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = i, n
                }
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                i["default"] = void 0;
                var e = function() {
                        function n(i, r) {
                            var u = this,
                                f;
                            s(this, n);
                            t(this, "defaultOptions", {
                                sourceAttr: "href",
                                overlay: !0,
                                spinner: !0,
                                nav: !0,
                                navText: ["&lsaquo;", "&rsaquo;"],
                                captions: !0,
                                captionDelay: 0,
                                captionSelector: "img",
                                captionType: "attr",
                                captionsData: "title",
                                captionPosition: "bottom",
                                captionClass: "",
                                close: !0,
                                closeText: "&times;",
                                swipeClose: !0,
                                showCounter: !0,
                                fileExt: "png|jpg|jpeg|gif|webp",
                                animationSlide: !0,
                                animationSpeed: 250,
                                preloading: !0,
                                enableKeyboard: !0,
                                loop: !0,
                                rel: !1,
                                docClose: !0,
                                swipeTolerance: 50,
                                className: "simple-lightbox",
                                widthRatio: .8,
                                heightRatio: .9,
                                scaleImageToRatio: !1,
                                disableRightClick: !1,
                                disableScroll: !0,
                                alertError: !0,
                                alertErrorMessage: "Image not found, next image will be loaded",
                                additionalHtml: !1,
                                history: !0,
                                throttleInterval: 0,
                                doubleTapZoom: 2,
                                maxZoom: 10,
                                htmlClass: "has-lightbox",
                                rtl: !1,
                                fixedClass: "sl-fixed",
                                fadeSpeed: 300,
                                uniqueImages: !0,
                                focus: !0
                            });
                            t(this, "transitionPrefix", void 0);
                            t(this, "transitionCapable", !1);
                            t(this, "isTouchDevice", "ontouchstart" in window);
                            t(this, "initialLocationHash", void 0);
                            t(this, "pushStateSupport", "pushState" in history);
                            t(this, "isOpen", !1);
                            t(this, "isAnimating", !1);
                            t(this, "isClosing", !1);
                            t(this, "isFadeIn", !1);
                            t(this, "urlChangedOnce", !1);
                            t(this, "hashReseted", !1);
                            t(this, "historyHasChanges", !1);
                            t(this, "historyUpdateTimeout", null);
                            t(this, "currentImage", void 0);
                            t(this, "eventNamespace", "simplelightbox");
                            t(this, "domNodes", {});
                            t(this, "loadedImages", []);
                            t(this, "initialImageIndex", 0);
                            t(this, "currentImageIndex", 0);
                            t(this, "initialSelector", null);
                            t(this, "globalScrollbarWidth", 0);
                            t(this, "controlCoordinates", {
                                swipeDiff: 0,
                                swipeYDiff: 0,
                                swipeStart: 0,
                                swipeEnd: 0,
                                swipeYStart: 0,
                                swipeYEnd: 0,
                                mousedown: !1,
                                imageLeft: 0,
                                zoomed: !1,
                                containerHeight: 0,
                                containerWidth: 0,
                                containerOffsetX: 0,
                                containerOffsetY: 0,
                                imgHeight: 0,
                                imgWidth: 0,
                                capture: !1,
                                initialOffsetX: 0,
                                initialOffsetY: 0,
                                initialPointerOffsetX: 0,
                                initialPointerOffsetY: 0,
                                initialPointerOffsetX2: 0,
                                initialPointerOffsetY2: 0,
                                initialScale: 1,
                                initialPinchDistance: 0,
                                pointerOffsetX: 0,
                                pointerOffsetY: 0,
                                pointerOffsetX2: 0,
                                pointerOffsetY2: 0,
                                targetOffsetX: 0,
                                targetOffsetY: 0,
                                targetScale: 0,
                                pinchOffsetX: 0,
                                pinchOffsetY: 0,
                                limitOffsetX: 0,
                                limitOffsetY: 0,
                                scaleDifference: 0,
                                targetPinchDistance: 0,
                                touchCount: 0,
                                doubleTapped: !1,
                                touchmoveCount: 0
                            });
                            this.options = Object.assign(this.defaultOptions, r);
                            typeof i == "string" ? (this.initialSelector = i, this.elements = Array.from(document.querySelectorAll(i))) : this.elements = typeof i.length != "undefined" && i.length > 0 ? Array.from(i) : [i];
                            this.relatedElements = [];
                            this.transitionPrefix = this.calculateTransitionPrefix();
                            this.transitionCapable = this.transitionPrefix !== !1;
                            this.initialLocationHash = this.hash;
                            this.options.rel && (this.elements = this.getRelated(this.options.rel));
                            this.options.uniqueImages && (f = [], this.elements = Array.from(this.elements).filter(function(n) {
                                var t = n.getAttribute(u.options.sourceAttr);
                                return f.indexOf(t) === -1 ? (f.push(t), !0) : !1
                            }));
                            this.createDomNodes();
                            this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
                            this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation);
                            this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner);
                            this.addEventListener(this.elements, "click." + this.eventNamespace, function(n) {
                                if (u.isValidLink(n.currentTarget)) {
                                    if (n.preventDefault(), u.isAnimating) return !1;
                                    u.initialImageIndex = u.elements.indexOf(n.currentTarget);
                                    u.openImage(n.currentTarget)
                                }
                            });
                            this.options.docClose && this.addEventListener(this.domNodes.wrapper, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], function(n) {
                                u.isOpen && n.target === n.currentTarget && u.close()
                            });
                            this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(n) {
                                n.target.classList.contains("sl-overlay") && n.preventDefault()
                            });
                            this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(n) {
                                if (u.controlCoordinates.swipeDiff = 0, u.isAnimating && n.key === "Escape") return u.currentImage.setAttribute("src", ""), u.isAnimating = !1, u.close();
                                u.isOpen && (n.preventDefault(), n.key === "Escape" && u.close(), !u.isAnimating && ["ArrowLeft", "ArrowRight"].indexOf(n.key) > -1 && u.loadImage(n.key === "ArrowRight" ? 1 : -1))
                            }, this.options.throttleInterval));
                            this.addEvents()
                        }
                        return h(n, [{
                            key: "createDomNodes",
                            value: function() {
                                this.domNodes.overlay = document.createElement("div");
                                this.domNodes.overlay.classList.add("sl-overlay");
                                this.domNodes.overlay.dataset.opacityTarget = ".7";
                                this.domNodes.closeButton = document.createElement("button");
                                this.domNodes.closeButton.classList.add("sl-close");
                                this.domNodes.closeButton.innerHTML = this.options.closeText;
                                this.domNodes.spinner = document.createElement("div");
                                this.domNodes.spinner.classList.add("sl-spinner");
                                this.domNodes.spinner.innerHTML = "<div><\/div>";
                                this.domNodes.navigation = document.createElement("div");
                                this.domNodes.navigation.classList.add("sl-navigation");
                                this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '<\/button><button class="sl-next">').concat(this.options.navText[1], "<\/button>");
                                this.domNodes.counter = document.createElement("div");
                                this.domNodes.counter.classList.add("sl-counter");
                                this.domNodes.counter.innerHTML = '<span class="sl-current"><\/span>/<span class="sl-total"><\/span>';
                                this.domNodes.caption = document.createElement("div");
                                this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition);
                                this.options.captionClass && this.domNodes.caption.classList.add(this.options.captionClass);
                                this.domNodes.image = document.createElement("div");
                                this.domNodes.image.classList.add("sl-image");
                                this.domNodes.wrapper = document.createElement("div");
                                this.domNodes.wrapper.classList.add("sl-wrapper");
                                this.domNodes.wrapper.setAttribute("tabindex", -1);
                                this.domNodes.wrapper.setAttribute("role", "dialog");
                                this.domNodes.wrapper.setAttribute("aria-hidden", !1);
                                this.options.className && this.domNodes.wrapper.classList.add(this.options.className);
                                this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl")
                            }
                        }, {
                            key: "throttle",
                            value: function(n, t) {
                                var i;
                                return function() {
                                    i || (n.apply(this, arguments), i = !0, setTimeout(function() {
                                        return i = !1
                                    }, t))
                                }
                            }
                        }, {
                            key: "isValidLink",
                            value: function(n) {
                                return !this.options.fileExt || "pathname" in n && new RegExp("(" + this.options.fileExt + ")$", "i").test(n.pathname)
                            }
                        }, {
                            key: "calculateTransitionPrefix",
                            value: function() {
                                var n = (document.body || document.documentElement).style;
                                return "transition" in n ? "" : "WebkitTransition" in n ? "-webkit-" : "MozTransition" in n ? "-moz-" : "OTransition" in n ? "-o" : !1
                            }
                        }, {
                            key: "toggleScrollbar",
                            value: function(n) {
                                var i = 0,
                                    e = [].slice.call(document.querySelectorAll("." + this.options.fixedClass)),
                                    r, u, t, f;
                                return n === "hide" ? (r = window.innerWidth, r || (u = document.documentElement.getBoundingClientRect(), r = u.right - Math.abs(u.left)), document.body.clientWidth < r && (t = document.createElement("div"), f = parseInt(document.body.style.paddingRight || 0, 10), t.classList.add("sl-scrollbar-measure"), document.body.appendChild(t), i = t.offsetWidth - t.clientWidth, document.body.removeChild(t), document.body.dataset.originalPaddingRight = f, i > 0 && (document.body.classList.add("hidden-scroll"), document.body.style.paddingRight = f + i + "px", e.forEach(function(n) {
                                    var t = n.style.paddingRight,
                                        r = window.getComputedStyle(n)["padding-right"];
                                    n.dataset.originalPaddingRight = t;
                                    n.style.paddingRight = "".concat(parseFloat(r) + i, "px")
                                })))) : (document.body.classList.remove("hidden-scroll"), document.body.style.paddingRight = document.body.dataset.originalPaddingRight, e.forEach(function(n) {
                                    var t = n.dataset.originalPaddingRight;
                                    typeof t != "undefined" && (n.style.paddingRight = t)
                                })), i
                            }
                        }, {
                            key: "close",
                            value: function() {
                                var n = this,
                                    t, i;
                                if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
                                this.isClosing = !0;
                                t = this.relatedElements[this.currentImageIndex];
                                t.dispatchEvent(new Event("close.simplelightbox"));
                                this.options.history && (this.historyHasChanges = !1, this.hashReseted || this.resetHash());
                                this.removeEventListener(document, "focusin." + this.eventNamespace);
                                this.fadeOut(document.querySelectorAll(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                                    n.options.disableScroll && n.toggleScrollbar("show");
                                    n.options.htmlClass && n.options.htmlClass !== "" && document.querySelector("html").classList.remove(n.options.htmlClass);
                                    document.body.removeChild(n.domNodes.wrapper);
                                    document.body.removeChild(n.domNodes.overlay);
                                    n.domNodes.additionalHtml = null;
                                    t.dispatchEvent(new Event("closed.simplelightbox"));
                                    n.isClosing = !1
                                });
                                this.currentImage = null;
                                this.isOpen = !1;
                                this.isAnimating = !1;
                                for (i in this.controlCoordinates) this.controlCoordinates[i] = 0;
                                this.controlCoordinates.mousedown = !1;
                                this.controlCoordinates.zoomed = !1;
                                this.controlCoordinates.capture = !1;
                                this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
                                this.controlCoordinates.doubleTapped = !1
                            }
                        }, {
                            key: "preload",
                            value: function() {
                                var n = this,
                                    t = this.currentImageIndex,
                                    i = this.relatedElements.length,
                                    f = t + 1 < 0 ? i - 1 : t + 1 >= i - 1 ? 0 : t + 1,
                                    e = t - 1 < 0 ? i - 1 : t - 1 >= i - 1 ? 0 : t - 1,
                                    r = new Image,
                                    u = new Image;
                                r.addEventListener("load", function(i) {
                                    var r = i.target.getAttribute("src");
                                    n.loadedImages.indexOf(r) === -1 && n.loadedImages.push(r);
                                    n.relatedElements[t].dispatchEvent(new Event("nextImageLoaded." + n.eventNamespace))
                                });
                                r.setAttribute("src", this.relatedElements[f].getAttribute(this.options.sourceAttr));
                                u.addEventListener("load", function(i) {
                                    var r = i.target.getAttribute("src");
                                    n.loadedImages.indexOf(r) === -1 && n.loadedImages.push(r);
                                    n.relatedElements[t].dispatchEvent(new Event("prevImageLoaded." + n.eventNamespace))
                                });
                                u.setAttribute("src", this.relatedElements[e].getAttribute(this.options.sourceAttr))
                            }
                        }, {
                            key: "loadImage",
                            value: function(n) {
                                var t = this,
                                    r = n,
                                    i;
                                if (this.options.rtl && (n = -n), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((n === 1 ? "next" : "prev") + "." + this.eventNamespace)), i = this.currentImageIndex + n, this.isAnimating || (i < 0 || i >= this.relatedElements.length) && this.options.loop === !1) return !1;
                                this.currentImageIndex = i < 0 ? this.relatedElements.length - 1 : i > this.relatedElements.length - 1 ? 0 : i;
                                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1;
                                this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * r - this.controlCoordinates.swipeDiff + "px");
                                this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                                    t.isAnimating = !0;
                                    t.isClosing ? t.isAnimating = !1 : setTimeout(function() {
                                        var n = t.relatedElements[t.currentImageIndex];
                                        t.currentImage.setAttribute("src", n.getAttribute(t.options.sourceAttr));
                                        t.loadedImages.indexOf(n.getAttribute(t.options.sourceAttr)) === -1 && t.show(t.domNodes.spinner);
                                        t.domNodes.image.contains(t.domNodes.caption) && t.domNodes.image.removeChild(t.domNodes.caption);
                                        t.adjustImage(r);
                                        t.options.preloading && t.preload()
                                    }, 100)
                                })
                            }
                        }, {
                            key: "adjustImage",
                            value: function(n) {
                                var t = this;
                                if (!this.currentImage) return !1;
                                var i = new Image,
                                    r = window.innerWidth * this.options.widthRatio,
                                    u = window.innerHeight * this.options.heightRatio;
                                i.setAttribute("src", this.currentImage.getAttribute("src"));
                                this.currentImage.dataset.scale = 1;
                                this.currentImage.dataset.translateX = 0;
                                this.currentImage.dataset.translateY = 0;
                                this.zoomPanElement(0, 0, 1);
                                i.addEventListener("error", function() {
                                    t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("error." + t.eventNamespace));
                                    t.isAnimating = !1;
                                    t.isOpen = !1;
                                    t.domNodes.spinner.style.display = "none";
                                    var i = n === 1 || n === -1;
                                    if (t.initialImageIndex === t.currentImageIndex && i) return t.close();
                                    t.options.alertError && alert(t.options.alertErrorMessage);
                                    t.loadImage(i ? n : 1)
                                });
                                i.addEventListener("load", function(i) {
                                    var f, e, s, o, h;
                                    typeof n != "undefined" && (t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("changed." + t.eventNamespace)), t.relatedElements[t.currentImageIndex].dispatchEvent(new Event((n === 1 ? "nextDone" : "prevDone") + "." + t.eventNamespace)));
                                    t.options.history && t.updateURL();
                                    t.loadedImages.indexOf(t.currentImage.getAttribute("src")) === -1 && t.loadedImages.push(t.currentImage.getAttribute("src"));
                                    f = i.target.width;
                                    e = i.target.height;
                                    (t.options.scaleImageToRatio || f > r || e > u) && (s = f / e > r / u ? f / r : e / u, f /= s, e /= s);
                                    t.domNodes.image.style.top = (window.innerHeight - e) / 2 + "px";
                                    t.domNodes.image.style.left = (window.innerWidth - f - t.globalScrollbarWidth) / 2 + "px";
                                    t.domNodes.image.style.width = f + "px";
                                    t.domNodes.image.style.height = e + "px";
                                    t.domNodes.spinner.style.display = "none";
                                    t.options.focus && t.forceFocus();
                                    t.fadeIn(t.currentImage, t.options.fadeSpeed, function() {
                                        t.options.focus && t.domNodes.wrapper.focus()
                                    });
                                    t.isOpen = !0;
                                    typeof t.options.captionSelector == "string" ? o = t.options.captionSelector === "self" ? t.relatedElements[t.currentImageIndex] : t.relatedElements[t.currentImageIndex].querySelector(t.options.captionSelector) : typeof t.options.captionSelector == "function" && (o = t.options.captionSelector(t.relatedElements[t.currentImageIndex]));
                                    t.options.captions && o && (h = t.options.captionType === "data" ? o.dataset[t.options.captionsData] : t.options.captionType === "text" ? o.innerHTML : o.getAttribute(t.options.captionsData));
                                    t.options.loop || (t.currentImageIndex === 0 && t.hide(t.domNodes.navigation.querySelector(".sl-prev")), t.currentImageIndex >= t.relatedElements.length - 1 && t.hide(t.domNodes.navigation.querySelector(".sl-next")), t.currentImageIndex > 0 && t.show(t.domNodes.navigation.querySelector(".sl-prev")), t.currentImageIndex < t.relatedElements.length - 1 && t.show(t.domNodes.navigation.querySelector(".sl-next")));
                                    t.relatedElements.length === 1 ? t.hide(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : t.show(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next"));
                                    n === 1 || n === -1 ? (t.options.animationSlide && (t.slide(0, 100 * n + "px"), setTimeout(function() {
                                        t.slide(t.options.animationSpeed / 1e3, "0px")
                                    }, 50)), t.fadeIn(t.domNodes.image, t.options.fadeSpeed, function() {
                                        t.isAnimating = !1;
                                        t.setCaption(h, f)
                                    })) : (t.isAnimating = !1, t.setCaption(h, f));
                                    t.options.additionalHtml && !t.domNodes.additionalHtml && (t.domNodes.additionalHtml = document.createElement("div"), t.domNodes.additionalHtml.classList.add("sl-additional-html"), t.domNodes.additionalHtml.innerHTML = t.options.additionalHtml, t.domNodes.image.appendChild(t.domNodes.additionalHtml))
                                })
                            }
                        }, {
                            key: "zoomPanElement",
                            value: function(n, t, i) {
                                this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + n + "," + t + ") scale(" + i + ")"
                            }
                        }, {
                            key: "minMax",
                            value: function(n, t, i) {
                                return n < t ? t : n > i ? i : n
                            }
                        }, {
                            key: "setZoomData",
                            value: function(n, t, i) {
                                this.currentImage.dataset.scale = n;
                                this.currentImage.dataset.translateX = t;
                                this.currentImage.dataset.translateY = i
                            }
                        }, {
                            key: "hashchangeHandler",
                            value: function() {
                                this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = !0, this.close())
                            }
                        }, {
                            key: "addEvents",
                            value: function() {
                                var n = this;
                                this.addEventListener(window, "resize." + this.eventNamespace, function() {
                                    n.isOpen && n.adjustImage()
                                });
                                this.addEventListener(this.domNodes.closeButton, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], this.close.bind(this));
                                this.options.history && setTimeout(function() {
                                    n.addEventListener(window, "hashchange." + n.eventNamespace, function() {
                                        n.isOpen && n.hashchangeHandler()
                                    })
                                }, 40);
                                this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(t) {
                                    if (!t.currentTarget.tagName.match(/button/i)) return !0;
                                    t.preventDefault();
                                    n.controlCoordinates.swipeDiff = 0;
                                    n.loadImage(t.currentTarget.classList.contains("sl-next") ? 1 : -1)
                                });
                                this.addEventListener(this.domNodes.image, ["touchstart." + this.eventNamespace, "mousedown." + this.eventNamespace], function(t) {
                                    if (t.target.tagName === "A" && t.type === "touchstart") return !0;
                                    if (t.type === "mousedown") n.controlCoordinates.initialPointerOffsetX = t.clientX, n.controlCoordinates.initialPointerOffsetY = t.clientY, n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX), n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY), n.controlCoordinates.capture = !0;
                                    else {
                                        if (n.controlCoordinates.touchCount = t.touches.length, n.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX, n.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY, n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, n.controlCoordinates.touchCount === 1) {
                                            if (n.controlCoordinates.doubleTapped) return n.currentImage.classList.add("sl-transition"), n.controlCoordinates.zoomed ? (n.controlCoordinates.initialScale = 1, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), n.controlCoordinates.zoomed = !1) : (n.controlCoordinates.initialScale = n.options.doubleTapZoom, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), n.domNodes.caption.style.opacity || n.domNodes.caption.style.display === "none" || n.fadeOut(n.domNodes.caption, n.options.fadeSpeed), n.controlCoordinates.zoomed = !0), setTimeout(function() {
                                                n.currentImage && n.currentImage.classList.remove("sl-transition")
                                            }, 200), !1;
                                            n.controlCoordinates.doubleTapped = !0;
                                            setTimeout(function() {
                                                n.controlCoordinates.doubleTapped = !1
                                            }, 300);
                                            n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX);
                                            n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY)
                                        } else n.controlCoordinates.touchCount === 2 && (n.controlCoordinates.initialPointerOffsetX2 = t.touches[1].clientX, n.controlCoordinates.initialPointerOffsetY2 = t.touches[1].clientY, n.controlCoordinates.initialOffsetX = parseFloat(n.currentImage.dataset.translateX), n.controlCoordinates.initialOffsetY = parseFloat(n.currentImage.dataset.translateY), n.controlCoordinates.pinchOffsetX = (n.controlCoordinates.initialPointerOffsetX + n.controlCoordinates.initialPointerOffsetX2) / 2, n.controlCoordinates.pinchOffsetY = (n.controlCoordinates.initialPointerOffsetY + n.controlCoordinates.initialPointerOffsetY2) / 2, n.controlCoordinates.initialPinchDistance = Math.sqrt((n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialPointerOffsetX2) * (n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialPointerOffsetX2) + (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialPointerOffsetY2) * (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialPointerOffsetY2)));
                                        n.controlCoordinates.capture = !0
                                    }
                                    return n.controlCoordinates.mousedown ? !0 : (n.transitionCapable && (n.controlCoordinates.imageLeft = parseInt(n.domNodes.image.style.left, 10)), n.controlCoordinates.mousedown = !0, n.controlCoordinates.swipeDiff = 0, n.controlCoordinates.swipeYDiff = 0, n.controlCoordinates.swipeStart = t.pageX || t.touches[0].pageX, n.controlCoordinates.swipeYStart = t.pageY || t.touches[0].pageY, !1)
                                });
                                this.addEventListener(this.domNodes.image, ["touchmove." + this.eventNamespace, "mousemove." + this.eventNamespace, "MSPointerMove"], function(t) {
                                    if (!n.controlCoordinates.mousedown) return !0;
                                    if (t.preventDefault(), t.type === "touchmove") {
                                        if (n.controlCoordinates.capture === !1) return !1;
                                        n.controlCoordinates.pointerOffsetX = t.touches[0].clientX;
                                        n.controlCoordinates.pointerOffsetY = t.touches[0].clientY;
                                        n.controlCoordinates.touchCount = t.touches.length;
                                        n.controlCoordinates.touchmoveCount++;
                                        n.controlCoordinates.touchCount > 1 ? (n.controlCoordinates.pointerOffsetX2 = t.touches[1].clientX, n.controlCoordinates.pointerOffsetY2 = t.touches[1].clientY, n.controlCoordinates.targetPinchDistance = Math.sqrt((n.controlCoordinates.pointerOffsetX - n.controlCoordinates.pointerOffsetX2) * (n.controlCoordinates.pointerOffsetX - n.controlCoordinates.pointerOffsetX2) + (n.controlCoordinates.pointerOffsetY - n.controlCoordinates.pointerOffsetY2) * (n.controlCoordinates.pointerOffsetY - n.controlCoordinates.pointerOffsetY2)), n.controlCoordinates.initialPinchDistance === null && (n.controlCoordinates.initialPinchDistance = n.controlCoordinates.targetPinchDistance), Math.abs(n.controlCoordinates.initialPinchDistance - n.controlCoordinates.targetPinchDistance) >= 1 && (n.controlCoordinates.targetScale = n.minMax(n.controlCoordinates.targetPinchDistance / n.controlCoordinates.initialPinchDistance * n.controlCoordinates.initialScale, 1, n.options.maxZoom), n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2, n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2, n.controlCoordinates.scaleDifference = n.controlCoordinates.targetScale - n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.initialOffsetX - (n.controlCoordinates.pinchOffsetX - n.controlCoordinates.containerOffsetX - n.controlCoordinates.containerWidth / 2 - n.controlCoordinates.initialOffsetX) / (n.controlCoordinates.targetScale - n.controlCoordinates.scaleDifference) * n.controlCoordinates.scaleDifference, n.controlCoordinates.limitOffsetX * -1, n.controlCoordinates.limitOffsetX), n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.initialOffsetY - (n.controlCoordinates.pinchOffsetY - n.controlCoordinates.containerOffsetY - n.controlCoordinates.containerHeight / 2 - n.controlCoordinates.initialOffsetY) / (n.controlCoordinates.targetScale - n.controlCoordinates.scaleDifference) * n.controlCoordinates.scaleDifference, n.controlCoordinates.limitOffsetY * -1, n.controlCoordinates.limitOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale), n.controlCoordinates.targetScale > 1 && (n.controlCoordinates.zoomed = !0, n.domNodes.caption.style.opacity || n.domNodes.caption.style.display === "none" || n.fadeOut(n.domNodes.caption, n.options.fadeSpeed)), n.controlCoordinates.initialPinchDistance = n.controlCoordinates.targetPinchDistance, n.controlCoordinates.initialScale = n.controlCoordinates.targetScale, n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY)) : (n.controlCoordinates.targetScale = n.controlCoordinates.initialScale, n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2, n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2, n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.pointerOffsetX - (n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialOffsetX), n.controlCoordinates.limitOffsetX * -1, n.controlCoordinates.limitOffsetX), n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.pointerOffsetY - (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialOffsetY), n.controlCoordinates.limitOffsetY * -1, n.controlCoordinates.limitOffsetY), Math.abs(n.controlCoordinates.targetOffsetX) === Math.abs(n.controlCoordinates.limitOffsetX) && (n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialPointerOffsetX = n.controlCoordinates.pointerOffsetX), Math.abs(n.controlCoordinates.targetOffsetY) === Math.abs(n.controlCoordinates.limitOffsetY) && (n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY, n.controlCoordinates.initialPointerOffsetY = n.controlCoordinates.pointerOffsetY), n.setZoomData(n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY), n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale))
                                    }
                                    if (t.type === "mousemove" && n.controlCoordinates.mousedown) {
                                        if (t.type == "touchmove") return !0;
                                        if (n.controlCoordinates.capture === !1) return !1;
                                        n.controlCoordinates.pointerOffsetX = t.clientX;
                                        n.controlCoordinates.pointerOffsetY = t.clientY;
                                        n.controlCoordinates.targetScale = n.controlCoordinates.initialScale;
                                        n.controlCoordinates.limitOffsetX = (n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale - n.controlCoordinates.containerWidth) / 2;
                                        n.controlCoordinates.limitOffsetY = (n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale - n.controlCoordinates.containerHeight) / 2;
                                        n.controlCoordinates.targetOffsetX = n.controlCoordinates.imgWidth * n.controlCoordinates.targetScale <= n.controlCoordinates.containerWidth ? 0 : n.minMax(n.controlCoordinates.pointerOffsetX - (n.controlCoordinates.initialPointerOffsetX - n.controlCoordinates.initialOffsetX), n.controlCoordinates.limitOffsetX * -1, n.controlCoordinates.limitOffsetX);
                                        n.controlCoordinates.targetOffsetY = n.controlCoordinates.imgHeight * n.controlCoordinates.targetScale <= n.controlCoordinates.containerHeight ? 0 : n.minMax(n.controlCoordinates.pointerOffsetY - (n.controlCoordinates.initialPointerOffsetY - n.controlCoordinates.initialOffsetY), n.controlCoordinates.limitOffsetY * -1, n.controlCoordinates.limitOffsetY);
                                        Math.abs(n.controlCoordinates.targetOffsetX) === Math.abs(n.controlCoordinates.limitOffsetX) && (n.controlCoordinates.initialOffsetX = n.controlCoordinates.targetOffsetX, n.controlCoordinates.initialPointerOffsetX = n.controlCoordinates.pointerOffsetX);
                                        Math.abs(n.controlCoordinates.targetOffsetY) === Math.abs(n.controlCoordinates.limitOffsetY) && (n.controlCoordinates.initialOffsetY = n.controlCoordinates.targetOffsetY, n.controlCoordinates.initialPointerOffsetY = n.controlCoordinates.pointerOffsetY);
                                        n.setZoomData(n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY);
                                        n.zoomPanElement(n.controlCoordinates.targetOffsetX + "px", n.controlCoordinates.targetOffsetY + "px", n.controlCoordinates.targetScale)
                                    }
                                    n.controlCoordinates.zoomed || (n.controlCoordinates.swipeEnd = t.pageX || t.touches[0].pageX, n.controlCoordinates.swipeYEnd = t.pageY || t.touches[0].pageY, n.controlCoordinates.swipeDiff = n.controlCoordinates.swipeStart - n.controlCoordinates.swipeEnd, n.controlCoordinates.swipeYDiff = n.controlCoordinates.swipeYStart - n.controlCoordinates.swipeYEnd, n.options.animationSlide && n.slide(0, -n.controlCoordinates.swipeDiff + "px"))
                                });
                                this.addEventListener(this.domNodes.image, ["touchend." + this.eventNamespace, "mouseup." + this.eventNamespace, "touchcancel." + this.eventNamespace, "mouseleave." + this.eventNamespace, "pointerup", "pointercancel", "MSPointerUp", "MSPointerCancel"], function(t) {
                                    if (n.isTouchDevice && t.type === "touchend" && (n.controlCoordinates.touchCount = t.touches.length, n.controlCoordinates.touchCount === 0 ? (n.currentImage && n.setZoomData(n.controlCoordinates.initialScale, n.controlCoordinates.targetOffsetX, n.controlCoordinates.targetOffsetY), n.controlCoordinates.initialScale === 1 && (n.controlCoordinates.zoomed = !1, n.domNodes.caption.style.display === "none" && n.fadeIn(n.domNodes.caption, n.options.fadeSpeed)), n.controlCoordinates.initialPinchDistance = null, n.controlCoordinates.capture = !1) : n.controlCoordinates.touchCount === 1 ? (n.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX, n.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY) : n.controlCoordinates.touchCount > 1 && (n.controlCoordinates.initialPinchDistance = null)), n.controlCoordinates.mousedown) {
                                        n.controlCoordinates.mousedown = !1;
                                        var i = !0;
                                        n.options.loop || (n.currentImageIndex === 0 && n.controlCoordinates.swipeDiff < 0 && (i = !1), n.currentImageIndex >= n.relatedElements.length - 1 && n.controlCoordinates.swipeDiff > 0 && (i = !1));
                                        Math.abs(n.controlCoordinates.swipeDiff) > n.options.swipeTolerance && i ? n.loadImage(n.controlCoordinates.swipeDiff > 0 ? 1 : -1) : n.options.animationSlide && n.slide(n.options.animationSpeed / 1e3, "0px");
                                        n.options.swipeClose && Math.abs(n.controlCoordinates.swipeYDiff) > 50 && Math.abs(n.controlCoordinates.swipeDiff) < n.options.swipeTolerance && n.close()
                                    }
                                });
                                this.addEventListener(this.domNodes.image, ["dblclick"], function(t) {
                                    if (!n.isTouchDevice) return n.controlCoordinates.initialPointerOffsetX = t.clientX, n.controlCoordinates.initialPointerOffsetY = t.clientY, n.controlCoordinates.containerHeight = n.getDimensions(n.domNodes.image).height, n.controlCoordinates.containerWidth = n.getDimensions(n.domNodes.image).width, n.controlCoordinates.imgHeight = n.getDimensions(n.currentImage).height, n.controlCoordinates.imgWidth = n.getDimensions(n.currentImage).width, n.controlCoordinates.containerOffsetX = n.domNodes.image.offsetLeft, n.controlCoordinates.containerOffsetY = n.domNodes.image.offsetTop, n.currentImage.classList.add("sl-transition"), n.controlCoordinates.zoomed ? (n.controlCoordinates.initialScale = 1, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), n.controlCoordinates.zoomed = !1, n.domNodes.caption.style.display === "none" && n.fadeIn(n.domNodes.caption, n.options.fadeSpeed)) : (n.controlCoordinates.initialScale = n.options.doubleTapZoom, n.setZoomData(n.controlCoordinates.initialScale, 0, 0), n.zoomPanElement("0px", "0px", n.controlCoordinates.initialScale), n.domNodes.caption.style.opacity || n.domNodes.caption.style.display === "none" || n.fadeOut(n.domNodes.caption, n.options.fadeSpeed), n.controlCoordinates.zoomed = !0), setTimeout(function() {
                                        n.currentImage && n.currentImage.classList.remove("sl-transition")
                                    }, 200), n.controlCoordinates.capture = !0, !1
                                })
                            }
                        }, {
                            key: "getDimensions",
                            value: function(n) {
                                var t = window.getComputedStyle(n),
                                    i = n.offsetHeight,
                                    r = n.offsetWidth,
                                    u = parseFloat(t.borderTopWidth),
                                    f = parseFloat(t.borderBottomWidth),
                                    e = parseFloat(t.paddingTop),
                                    o = parseFloat(t.paddingBottom),
                                    s = parseFloat(t.borderLeftWidth),
                                    h = parseFloat(t.borderRightWidth),
                                    c = parseFloat(t.paddingLeft),
                                    l = parseFloat(t.paddingRight);
                                return {
                                    height: i - f - u - e - o,
                                    width: r - s - h - c - l
                                }
                            }
                        }, {
                            key: "updateHash",
                            value: function() {
                                var n = "pid=" + (this.currentImageIndex + 1),
                                    t = window.location.href.split("#")[0] + "#" + n;
                                this.hashReseted = !1;
                                this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, t) : this.historyHasChanges ? window.location.replace(t) : window.location.hash = n;
                                this.historyHasChanges || (this.urlChangedOnce = !0);
                                this.historyHasChanges = !0
                            }
                        }, {
                            key: "resetHash",
                            value: function() {
                                this.hashReseted = !0;
                                this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "";
                                clearTimeout(this.historyUpdateTimeout)
                            }
                        }, {
                            key: "updateURL",
                            value: function() {
                                clearTimeout(this.historyUpdateTimeout);
                                this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash()
                            }
                        }, {
                            key: "setCaption",
                            value: function(n, t) {
                                var i = this;
                                this.options.captions && n && n !== "" && typeof n != "undefined" && (this.hide(this.domNodes.caption), this.domNodes.caption.style.width = t + "px", this.domNodes.caption.innerHTML = n, this.domNodes.image.appendChild(this.domNodes.caption), setTimeout(function() {
                                    i.fadeIn(i.domNodes.caption, i.options.fadeSpeed)
                                }, this.options.captionDelay))
                            }
                        }, {
                            key: "slide",
                            value: function(n, t) {
                                if (!this.transitionCapable) return this.domNodes.image.style.left = t;
                                this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + t + ")";
                                this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + n + "s linear"
                            }
                        }, {
                            key: "getRelated",
                            value: function(n) {
                                return n && n !== !1 && n !== "nofollow" ? Array.from(this.elements).filter(function(t) {
                                    return t.getAttribute("rel") === n
                                }) : this.elements
                            }
                        }, {
                            key: "openImage",
                            value: function(n) {
                                var i = this,
                                    t;
                                n.dispatchEvent(new Event("show." + this.eventNamespace));
                                this.options.disableScroll && (this.globalScrollbarWidth = this.toggleScrollbar("hide"));
                                this.options.htmlClass && this.options.htmlClass !== "" && document.querySelector("html").classList.add(this.options.htmlClass);
                                document.body.appendChild(this.domNodes.wrapper);
                                this.domNodes.wrapper.appendChild(this.domNodes.image);
                                this.options.overlay && document.body.appendChild(this.domNodes.overlay);
                                this.relatedElements = this.getRelated(n.rel);
                                this.options.showCounter && (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter));
                                this.isAnimating = !0;
                                this.currentImageIndex = this.relatedElements.indexOf(n);
                                t = n.getAttribute(this.options.sourceAttr);
                                this.currentImage = document.createElement("img");
                                this.currentImage.style.display = "none";
                                this.currentImage.setAttribute("src", t);
                                this.currentImage.dataset.scale = 1;
                                this.currentImage.dataset.translateX = 0;
                                this.currentImage.dataset.translateY = 0;
                                this.loadedImages.indexOf(t) === -1 && this.loadedImages.push(t);
                                this.domNodes.image.innerHTML = "";
                                this.domNodes.image.setAttribute("style", "");
                                this.domNodes.image.appendChild(this.currentImage);
                                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
                                this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed);
                                this.show(this.domNodes.spinner);
                                this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1;
                                this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length;
                                this.adjustImage();
                                this.options.preloading && this.preload();
                                setTimeout(function() {
                                    n.dispatchEvent(new Event("shown." + i.eventNamespace))
                                }, this.options.animationSpeed)
                            }
                        }, {
                            key: "forceFocus",
                            value: function() {
                                var n = this;
                                this.removeEventListener(document, "focusin." + this.eventNamespace);
                                this.addEventListener(document, "focusin." + this.eventNamespace, function(t) {
                                    document === t.target || n.domNodes.wrapper === t.target || n.domNodes.wrapper.contains(t.target) || n.domNodes.wrapper.focus()
                                })
                            }
                        }, {
                            key: "addEventListener",
                            value: function(n, t, i, u) {
                                var f, h, e, o, c, s, l;
                                n = this.wrap(n);
                                t = this.wrap(t);
                                f = r(n);
                                try {
                                    for (f.s(); !(h = f.n()).done;) {
                                        e = h.value;
                                        e.namespaces || (e.namespaces = {});
                                        o = r(t);
                                        try {
                                            for (o.s(); !(c = o.n()).done;) s = c.value, l = u || !1, e.namespaces[s] = i, e.addEventListener(s.split(".")[0], i, l)
                                        } catch (a) {
                                            o.e(a)
                                        } finally {
                                            o.f()
                                        }
                                    }
                                } catch (a) {
                                    f.e(a)
                                } finally {
                                    f.f()
                                }
                            }
                        }, {
                            key: "removeEventListener",
                            value: function(n, t) {
                                var u, o, i, f, s, e;
                                n = this.wrap(n);
                                t = this.wrap(t);
                                u = r(n);
                                try {
                                    for (u.s(); !(o = u.n()).done;) {
                                        i = o.value;
                                        f = r(t);
                                        try {
                                            for (f.s(); !(s = f.n()).done;) e = s.value, i.namespaces && i.namespaces[e] && (i.removeEventListener(e.split(".")[0], i.namespaces[e]), delete i.namespaces[e])
                                        } catch (h) {
                                            f.e(h)
                                        } finally {
                                            f.f()
                                        }
                                    }
                                } catch (h) {
                                    u.e(h)
                                } finally {
                                    u.f()
                                }
                            }
                        }, {
                            key: "fadeOut",
                            value: function(n, t, i) {
                                var h = this,
                                    u, e, o, s, f;
                                n = this.wrap(n);
                                u = r(n);
                                try {
                                    for (u.s(); !(e = u.n()).done;) o = e.value, o.style.opacity = 1
                                } catch (c) {
                                    u.e(c)
                                } finally {
                                    u.f()
                                }
                                this.isFadeIn = !1;
                                s = 16.66666 / (t || this.options.fadeSpeed);
                                f = function f() {
                                    var o = parseFloat(n[0].style.opacity),
                                        t, c, e, u, a, v;
                                    if ((o -= s) < 0) {
                                        t = r(n);
                                        try {
                                            for (t.s(); !(c = t.n()).done;) e = c.value, e.style.display = "none", e.style.opacity = ""
                                        } catch (l) {
                                            t.e(l)
                                        } finally {
                                            t.f()
                                        }
                                        i && i.call(h, n)
                                    } else {
                                        u = r(n);
                                        try {
                                            for (u.s(); !(a = u.n()).done;) v = a.value, v.style.opacity = o
                                        } catch (l) {
                                            u.e(l)
                                        } finally {
                                            u.f()
                                        }
                                        requestAnimationFrame(f)
                                    }
                                };
                                f()
                            }
                        }, {
                            key: "fadeIn",
                            value: function(n, t, i, u) {
                                var o = this,
                                    f, s, e;
                                n = this.wrap(n);
                                f = r(n);
                                try {
                                    for (f.s(); !(s = f.n()).done;) e = s.value, e.style.opacity = 0, e.style.display = u || "block"
                                } catch (l) {
                                    f.e(l)
                                } finally {
                                    f.f()
                                }
                                this.isFadeIn = !0;
                                var h = parseFloat(n[0].dataset.opacityTarget || 1),
                                    a = 16.66666 * h / (t || this.options.fadeSpeed),
                                    c = function c() {
                                        var f = parseFloat(n[0].style.opacity),
                                            t, e, s, u, v, y;
                                        if ((f += a) > h) {
                                            u = r(n);
                                            try {
                                                for (u.s(); !(v = u.n()).done;) y = v.value, y.style.opacity = ""
                                            } catch (l) {
                                                u.e(l)
                                            } finally {
                                                u.f()
                                            }
                                            i && i.call(o, n)
                                        } else {
                                            t = r(n);
                                            try {
                                                for (t.s(); !(e = t.n()).done;) s = e.value, s.style.opacity = f
                                            } catch (l) {
                                                t.e(l)
                                            } finally {
                                                t.f()
                                            }
                                            if (!o.isFadeIn) return;
                                            requestAnimationFrame(c)
                                        }
                                    };
                                c()
                            }
                        }, {
                            key: "hide",
                            value: function(n) {
                                var t, u, i;
                                n = this.wrap(n);
                                t = r(n);
                                try {
                                    for (t.s(); !(u = t.n()).done;) i = u.value, i.dataset.initialDisplay = i.style.display, i.style.display = "none"
                                } catch (f) {
                                    t.e(f)
                                } finally {
                                    t.f()
                                }
                            }
                        }, {
                            key: "show",
                            value: function(n, t) {
                                var i, f, u;
                                n = this.wrap(n);
                                i = r(n);
                                try {
                                    for (i.s(); !(f = i.n()).done;) u = f.value, u.style.display = u.dataset.initialDisplay || t || "block"
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                        }, {
                            key: "wrap",
                            value: function(n) {
                                return typeof n[Symbol.iterator] == "function" && typeof n != "string" ? n : [n]
                            }
                        }, {
                            key: "on",
                            value: function(n, t) {
                                var i, o, u, f, s, e;
                                n = this.wrap(n);
                                i = r(this.elements);
                                try {
                                    for (i.s(); !(o = i.n()).done;) {
                                        u = o.value;
                                        u.fullyNamespacedEvents || (u.fullyNamespacedEvents = {});
                                        f = r(n);
                                        try {
                                            for (f.s(); !(s = f.n()).done;) e = s.value, u.fullyNamespacedEvents[e] = t, u.addEventListener(e, t)
                                        } catch (h) {
                                            f.e(h)
                                        } finally {
                                            f.f()
                                        }
                                    }
                                } catch (h) {
                                    i.e(h)
                                } finally {
                                    i.f()
                                }
                                return this
                            }
                        }, {
                            key: "off",
                            value: function(n) {
                                var t, e, i, u, o, f;
                                n = this.wrap(n);
                                t = r(this.elements);
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        i = e.value;
                                        u = r(n);
                                        try {
                                            for (u.s(); !(o = u.n()).done;) f = o.value, typeof i.fullyNamespacedEvents != "undefined" && f in i.fullyNamespacedEvents && i.removeEventListener(f, i.fullyNamespacedEvents[f])
                                        } catch (s) {
                                            u.e(s)
                                        } finally {
                                            u.f()
                                        }
                                    }
                                } catch (s) {
                                    t.e(s)
                                } finally {
                                    t.f()
                                }
                                return this
                            }
                        }, {
                            key: "open",
                            value: function(n) {
                                n = n || this.elements[0];
                                typeof jQuery != "undefined" && n instanceof jQuery && (n = n.get(0));
                                this.initialImageIndex = this.elements.indexOf(n);
                                this.initialImageIndex > -1 && this.openImage(n)
                            }
                        }, {
                            key: "next",
                            value: function() {
                                this.loadImage(1)
                            }
                        }, {
                            key: "prev",
                            value: function() {
                                this.loadImage(-1)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.off(["close." + this.eventNamespace, "closed." + this.eventNamespace, "nextImageLoaded." + this.eventNamespace, "prevImageLoaded." + this.eventNamespace, "change." + this.eventNamespace, "nextDone." + this.eventNamespace, "prevDone." + this.eventNamespace, "error." + this.eventNamespace, "changed." + this.eventNamespace, "next." + this.eventNamespace, "prev." + this.eventNamespace, "show." + this.eventNamespace, "shown." + this.eventNamespace]);
                                this.removeEventListener(this.elements, "click." + this.eventNamespace);
                                this.removeEventListener(document, "focusin." + this.eventNamespace);
                                this.removeEventListener(document.body, "contextmenu." + this.eventNamespace);
                                this.removeEventListener(document.body, "keyup." + this.eventNamespace);
                                this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace);
                                this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace);
                                this.removeEventListener(window, "resize." + this.eventNamespace);
                                this.removeEventListener(window, "hashchange." + this.eventNamespace);
                                this.close();
                                this.isOpen && (document.body.removeChild(this.domNodes.wrapper), document.body.removeChild(this.domNodes.overlay));
                                this.elements = null
                            }
                        }, {
                            key: "refresh",
                            value: function() {
                                if (!this.initialSelector) throw "refreshing only works when you initialize using a selector!";
                                var n = this.options,
                                    t = this.initialSelector;
                                return this.destroy(), this.constructor(t, n), this
                            }
                        }, {
                            key: "hash",
                            get: function() {
                                return window.location.hash.substring(1)
                            }
                        }]), n
                    }(),
                    c = e;
                i["default"] = c;
                n.SimpleLightbox = e
            }).call(this)
        }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}]
}, {}, [1]);
/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
! function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n("object" == typeof exports ? require("jquery") : jQuery)
}(function(n, t) {
    function f() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function s() {
        var n = new Date;
        return f(n.getFullYear(), n.getMonth(), n.getDate())
    }

    function l(n, t) {
        return n.getUTCFullYear() === t.getUTCFullYear() && n.getUTCMonth() === t.getUTCMonth() && n.getUTCDate() === t.getUTCDate()
    }

    function h(i, r) {
        return function() {
            return r !== t && n.fn.datepicker.deprecated(r), this[i].apply(this, arguments)
        }
    }

    function p(n) {
        return n && !isNaN(n.getTime())
    }

    function w(t, i) {
        function o(n, t) {
            return t.toLowerCase()
        }
        var u, f = n(t).data(),
            e = {},
            s = new RegExp("^" + i.toLowerCase() + "([A-Z])"),
            r;
        i = new RegExp("^" + i.toLowerCase());
        for (r in f) i.test(r) && (u = r.replace(s, o), e[u] = f[r]);
        return e
    }

    function b(t) {
        var u = {},
            i;
        if (r[t] || (t = t.split("-")[0], r[t])) return i = r[t], n.each(y, function(n, t) {
            t in i && (u[t] = i[t])
        }), u
    }
    var a = function() {
            var t = {
                get: function(n) {
                    return this.slice(n)[0]
                },
                contains: function(n) {
                    for (var i = n && n.valueOf(), t = 0, r = this.length; t < r; t++)
                        if (0 <= this[t].valueOf() - i && this[t].valueOf() - i < 864e5) return t;
                    return -1
                },
                remove: function(n) {
                    this.splice(n, 1)
                },
                replace: function(t) {
                    t && (n.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var n = new a;
                    return n.replace(this), n
                }
            };
            return function() {
                var i = [];
                return i.push.apply(i, arguments), n.extend(i, t), i
            }
        }(),
        u = function(t, r) {
            n.data(t, "datepicker", this);
            this._process_options(r);
            this.dates = new a;
            this.viewDate = this.o.defaultViewDate;
            this.focusDate = null;
            this.element = n(t);
            this.isInput = this.element.is("input");
            this.inputField = this.isInput ? this.element : this.element.find("input");
            this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn");
            this.component && 0 === this.component.length && (this.component = !1);
            this.isInline = !this.component && this.element.is("div");
            this.picker = n(i.template);
            this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow);
            this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow);
            this._buildEvents();
            this._attachEvents();
            this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu");
            this.o.rtl && this.picker.addClass("datepicker-rtl");
            this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(n, t) {
                return Number(t) + 1
            });
            this._process_options({
                startDate: this._o.startDate,
                endDate: this._o.endDate,
                daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                datesDisabled: this.o.datesDisabled
            });
            this._allow_update = !1;
            this.setViewMode(this.o.startView);
            this._allow_update = !0;
            this.fillDow();
            this.fillMonths();
            this.update();
            this.isInline && this.show()
        },
        c, v, o, e, y, r, i;
    u.prototype = {
        constructor: u,
        _resolveViewName: function(t) {
            return n.each(i.viewModes, function(i, r) {
                if (t === i || n.inArray(t, r.names) !== -1) return t = i, !1
            }), t
        },
        _resolveDaysOfWeek: function(t) {
            return n.isArray(t) || (t = t.split(/[,\s]*/)), n.map(t, Number)
        },
        _check_template: function(i) {
            try {
                if (i === t || "" === i) return !1;
                if ((i.match(/[<>]/g) || []).length <= 0) return !0;
                var r = n(i);
                return r.length > 0
            } catch (n) {
                return !1
            }
        },
        _process_options: function(t) {
            var u, h, l, o, c;
            if (this._o = n.extend({}, this._o, t), u = this.o = n.extend({}, this._o), h = u.language, r[h] || (h = h.split("-")[0], r[h] || (h = e.language)), u.language = h, u.startView = this._resolveViewName(u.startView), u.minViewMode = this._resolveViewName(u.minViewMode), u.maxViewMode = this._resolveViewName(u.maxViewMode), u.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, u.startView)), u.multidate !== !0 && (u.multidate = Number(u.multidate) || !1, u.multidate !== !1 && (u.multidate = Math.max(0, u.multidate))), u.multidateSeparator = String(u.multidateSeparator), u.weekStart %= 7, u.weekEnd = (u.weekStart + 6) % 7, l = i.parseFormat(u.format), u.startDate !== -(1 / 0) && (u.startDate = u.startDate ? u.startDate instanceof Date ? this._local_to_utc(this._zero_time(u.startDate)) : i.parseDate(u.startDate, l, u.language, u.assumeNearbyYear) : -(1 / 0)), u.endDate !== 1 / 0 && (u.endDate = u.endDate ? u.endDate instanceof Date ? this._local_to_utc(this._zero_time(u.endDate)) : i.parseDate(u.endDate, l, u.language, u.assumeNearbyYear) : 1 / 0), u.daysOfWeekDisabled = this._resolveDaysOfWeek(u.daysOfWeekDisabled || []), u.daysOfWeekHighlighted = this._resolveDaysOfWeek(u.daysOfWeekHighlighted || []), u.datesDisabled = u.datesDisabled || [], n.isArray(u.datesDisabled) || (u.datesDisabled = u.datesDisabled.split(",")), u.datesDisabled = n.map(u.datesDisabled, function(n) {
                    return i.parseDate(n, l, u.language, u.assumeNearbyYear)
                }), o = String(u.orientation).toLowerCase().split(/\s+/g), c = u.orientation.toLowerCase(), o = n.grep(o, function(n) {
                    return /^auto|left|right|top|bottom$/.test(n)
                }), u.orientation = {
                    x: "auto",
                    y: "auto"
                }, c && "auto" !== c)
                if (1 === o.length) switch (o[0]) {
                    case "top":
                    case "bottom":
                        u.orientation.y = o[0];
                        break;
                    case "left":
                    case "right":
                        u.orientation.x = o[0]
                } else c = n.grep(o, function(n) {
                    return /^left|right$/.test(n)
                }), u.orientation.x = c[0] || "auto", c = n.grep(o, function(n) {
                    return /^top|bottom$/.test(n)
                }), u.orientation.y = c[0] || "auto";
            if (u.defaultViewDate instanceof Date || "string" == typeof u.defaultViewDate) u.defaultViewDate = i.parseDate(u.defaultViewDate, l, u.language, u.assumeNearbyYear);
            else if (u.defaultViewDate) {
                var a = u.defaultViewDate.year || (new Date).getFullYear(),
                    v = u.defaultViewDate.month || 0,
                    y = u.defaultViewDate.day || 1;
                u.defaultViewDate = f(a, v, y)
            } else u.defaultViewDate = s()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(n) {
            for (var f, r, u, i = 0; i < n.length; i++) f = n[i][0], 2 === n[i].length ? (r = t, u = n[i][1]) : 3 === n[i].length && (r = n[i][1], u = n[i][2]), f.on(u, r)
        },
        _unapplyEvents: function(n) {
            for (var f, r, u, i = 0; i < n.length; i++) f = n[i][0], 2 === n[i].length ? (u = t, r = n[i][1]) : 3 === n[i].length && (u = n[i][1], r = n[i][2]), f.off(r, u)
        },
        _buildEvents: function() {
            var t = {
                keyup: n.proxy(function(t) {
                    n.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this),
                keydown: n.proxy(this.keydown, this),
                paste: n.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (t.focus = n.proxy(this.show, this));
            this._events = this.isInput ? [
                [this.element, t]
            ] : this.component && this.inputField.length ? [
                [this.inputField, t],
                [this.component, {
                    click: n.proxy(this.show, this)
                }]
            ] : [
                [this.element, {
                    click: n.proxy(this.show, this),
                    keydown: n.proxy(this.keydown, this)
                }]
            ];
            this._events.push([this.element, "*", {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }], [this.element, {
                blur: n.proxy(function(n) {
                    this._focused_from = n.target
                }, this)
            }]);
            this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": n.proxy(function(n) {
                    this.update(n.date)
                }, this)
            }]);
            this._secondaryEvents = [
                [this.picker, {
                    click: n.proxy(this.click, this)
                }],
                [this.picker, ".prev, .next", {
                    click: n.proxy(this.navArrowsClick, this)
                }],
                [this.picker, ".day:not(.disabled)", {
                    click: n.proxy(this.dayCellClick, this)
                }],
                [n(window), {
                    resize: n.proxy(this.place, this)
                }],
                [n(document), {
                    "mousedown touchstart": n.proxy(function(n) {
                        this.element.is(n.target) || this.element.find(n.target).length || this.picker.is(n.target) || this.picker.find(n.target).length || this.isInline || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents();
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents();
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(t, r) {
            var u = r || this.dates.get(-1),
                f = this._utc_to_local(u);
            this.element.trigger({
                type: t,
                date: f,
                viewMode: this.viewMode,
                dates: n.map(this.dates, this._utc_to_local),
                format: n.proxy(function(n, t) {
                    0 === arguments.length ? (n = this.dates.length - 1, t = this.o.format) : "string" == typeof n && (t = n, n = this.dates.length - 1);
                    t = t || this.o.format;
                    var r = this.dates.get(n);
                    return i.formatDate(r, t, this.o.language)
                }, this)
            })
        },
        show: function() {
            if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && n(this.element).blur(), this
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        },
        destroy: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function(t) {
            var i;
            if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && n.inArray("text/plain", t.originalEvent.clipboardData.types) !== -1) i = t.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData) return;
                i = window.clipboardData.getData("Text")
            }
            this.setDate(i);
            this.update();
            t.preventDefault()
        },
        _utc_to_local: function(n) {
            if (!n) return n;
            var t = new Date(n.getTime() + 6e4 * n.getTimezoneOffset());
            return t.getTimezoneOffset() !== n.getTimezoneOffset() && (t = new Date(n.getTime() + 6e4 * t.getTimezoneOffset())), t
        },
        _local_to_utc: function(n) {
            return n && new Date(n.getTime() - 6e4 * n.getTimezoneOffset())
        },
        _zero_time: function(n) {
            return n && new Date(n.getFullYear(), n.getMonth(), n.getDate())
        },
        _zero_utc_time: function(n) {
            return n && f(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())
        },
        getDates: function() {
            return n.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return n.map(this.dates, function(n) {
                return new Date(n)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var n = this.dates.get(-1);
            return n !== t ? new Date(n) : null
        },
        clearDates: function() {
            this.inputField.val("");
            this.update();
            this._trigger("changeDate");
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var t = n.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, n.map(t, this._utc_to_local)), this
        },
        setDate: h("setDates"),
        setUTCDate: h("setUTCDates"),
        remove: h("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function() {
            var n = this.getFormattedDate();
            return this.inputField.val(n), this
        },
        getFormattedDate: function(r) {
            r === t && (r = this.o.format);
            var u = this.o.language;
            return n.map(this.dates, function(n) {
                return i.formatDate(n, r, u)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function() {
            return this.o.startDate
        },
        setStartDate: function(n) {
            return this._process_options({
                startDate: n
            }), this.update(), this.updateNavArrows(), this
        },
        getEndDate: function() {
            return this.o.endDate
        },
        setEndDate: function(n) {
            return this._process_options({
                endDate: n
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(n) {
            return this._process_options({
                daysOfWeekDisabled: n
            }), this.update(), this
        },
        setDaysOfWeekHighlighted: function(n) {
            return this._process_options({
                daysOfWeekHighlighted: n
            }), this.update(), this
        },
        setDatesDisabled: function(n) {
            return this._process_options({
                datesDisabled: n
            }), this.update(), this
        },
        place: function() {
            var y, r, p;
            if (this.isInline) return this;
            var f = this.picker.outerWidth(),
                s = this.picker.outerHeight(),
                e = n(this.o.container),
                h = e.width(),
                c = "body" === this.o.container ? n(document).scrollTop() : e.scrollTop(),
                l = e.offset(),
                a = [0];
            this.element.parents().each(function() {
                var t = n(this).css("z-index");
                "auto" !== t && 0 !== Number(t) && a.push(Number(t))
            });
            var v = Math.max.apply(Math, a) + this.o.zIndexOffset,
                u = this.component ? this.component.parent().offset() : this.element.offset(),
                w = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                o = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                t = u.left - l.left,
                i = u.top - l.top;
            return "body" !== this.o.container && (i += c), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (t -= f - o)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"), t -= u.left - 10) : t + f > h ? (this.picker.addClass("datepicker-orient-right"), t += o - f) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left"), r = this.o.orientation.y, ("auto" === r && (y = -c + i - s, r = y < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + r), "top" === r ? i -= s + parseInt(this.picker.css("padding-top")) : i += w, this.o.rtl) ? (p = h - (t + o), this.picker.css({
                top: i,
                right: p,
                zIndex: v
            })) : this.picker.css({
                top: i,
                left: t,
                zIndex: v
            }), this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var u = this.dates.copy(),
                t = [],
                r = !1;
            return arguments.length ? (n.each(arguments, n.proxy(function(n, i) {
                i instanceof Date && (i = this._local_to_utc(i));
                t.push(i)
            }, this)), r = !0) : (t = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), t = t && this.o.multidate ? t.split(this.o.multidateSeparator) : [t], delete this.element.data().date), t = n.map(t, n.proxy(function(n) {
                return i.parseDate(n, this.o.format, this.o.language, this.o.assumeNearbyYear)
            }, this)), t = n.grep(t, n.proxy(function(n) {
                return !this.dateWithinRange(n) || !n
            }, this), !0), this.dates.replace(t), this.o.updateViewDate && (this.viewDate = this.dates.length ? new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? new Date(this.o.startDate) : this.viewDate > this.o.endDate ? new Date(this.o.endDate) : this.o.defaultViewDate), r ? (this.setValue(), this.element.change()) : this.dates.length && String(u) !== String(this.dates) && r && (this._trigger("changeDate"), this.element.change()), !this.dates.length && u.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
        },
        fillDow: function() {
            if (this.o.showWeekDays) {
                var i = this.o.weekStart,
                    t = "<tr>";
                for (this.o.calendarWeeks && (t += '<th class="cw">&#160;<\/th>'); i < this.o.weekStart + 7;) t += '<th class="dow', n.inArray(i, this.o.daysOfWeekDisabled) !== -1 && (t += " disabled"), t += '">' + r[this.o.language].daysMin[i++ % 7] + "<\/th>";
                t += "<\/tr>";
                this.picker.find(".datepicker-days thead").append(t)
            }
        },
        fillMonths: function() {
            for (var t, i = this._utc_to_local(this.viewDate), u = "", n = 0; n < 12; n++) t = i && i.getMonth() === n ? " focused" : "", u += '<span class="month' + t + '">' + r[this.o.language].monthsShort[n] + "<\/span>";
            this.picker.find(".datepicker-months td").html(u)
        },
        setRange: function(t) {
            t && t.length ? this.range = n.map(t, function(n) {
                return n.valueOf()
            }) : delete this.range;
            this.fill()
        },
        getClassNames: function(t) {
            var i = [],
                r = this.viewDate.getUTCFullYear(),
                u = this.viewDate.getUTCMonth(),
                f = s();
            return t.getUTCFullYear() < r || t.getUTCFullYear() === r && t.getUTCMonth() < u ? i.push("old") : (t.getUTCFullYear() > r || t.getUTCFullYear() === r && t.getUTCMonth() > u) && i.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && l(t, f) && i.push("today"), this.dates.contains(t) !== -1 && i.push("active"), this.dateWithinRange(t) || i.push("disabled"), this.dateIsDisabled(t) && i.push("disabled", "disabled-date"), n.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && i.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && i.push("range"), n.inArray(t.valueOf(), this.range) !== -1 && i.push("selected"), t.valueOf() === this.range[0] && i.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
        },
        _fill_yearsView: function(i, r, u, f, e, o, s) {
            for (var c, v, h, w = "", l = u / 10, b = this.picker.find(i), y = Math.floor(f / u) * u, p = y + 9 * l, k = Math.floor(this.viewDate.getFullYear() / l) * l, d = n.map(this.dates, function(n) {
                    return Math.floor(n.getUTCFullYear() / l) * l
                }), a = y - l; a <= p + l; a += l) c = [r], v = null, a === y - l ? c.push("old") : a === p + l && c.push("new"), n.inArray(a, d) !== -1 && c.push("active"), (a < e || a > o) && c.push("disabled"), a === k && c.push("focused"), s !== n.noop && (h = s(new Date(a, 0, 1)), h === t ? h = {} : "boolean" == typeof h ? h = {
                enabled: h
            } : "string" == typeof h && (h = {
                classes: h
            }), h.enabled === !1 && c.push("disabled"), h.classes && (c = c.concat(h.classes.split(/\s+/))), h.tooltip && (v = h.tooltip)), w += '<span class="' + c.join(" ") + '"' + (v ? ' title="' + v + '"' : "") + ">" + a + "<\/span>";
            b.find(".datepicker-switch").text(y + "-" + p);
            b.find("td").html(w)
        },
        fill: function() {
            var y, u, w = new Date(this.viewDate),
                o = w.getUTCFullYear(),
                d = w.getUTCMonth(),
                a = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                ut = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                v = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                ft = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                et = r[this.o.language].today || r.en.today || "",
                ot = r[this.o.language].clear || r.en.clear || "",
                st = r[this.o.language].titleFormat || r.en.titleFormat,
                e, g, h, p, s, c, k, it, l, rt;
            if (!isNaN(o) && !isNaN(d)) {
                for (this.picker.find(".datepicker-days .datepicker-switch").text(i.formatDate(w, st, this.o.language)), this.picker.find("tfoot .today").text(et).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(ot).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths(), e = f(o, d, 0), g = e.getUTCDate(), e.setUTCDate(g - (e.getUTCDay() - this.o.weekStart + 7) % 7), h = new Date(e), e.getUTCFullYear() < 100 && h.setUTCFullYear(e.getUTCFullYear()), h.setUTCDate(h.getUTCDate() + 42), h = h.valueOf(), c = []; e.valueOf() < h;) {
                    if (p = e.getUTCDay(), p === this.o.weekStart && (c.push("<tr>"), this.o.calendarWeeks)) {
                        var nt = new Date(+e + (this.o.weekStart - p - 7) % 7 * 864e5),
                            tt = new Date(Number(nt) + (11 - nt.getUTCDay()) % 7 * 864e5),
                            b = new Date(Number(b = f(tt.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 864e5),
                            ht = (tt - b) / 6048e5 + 1;
                        c.push('<td class="cw">' + ht + "<\/td>")
                    }
                    s = this.getClassNames(e);
                    s.push("day");
                    k = e.getUTCDate();
                    this.o.beforeShowDay !== n.noop && (u = this.o.beforeShowDay(this._utc_to_local(e)), u === t ? u = {} : "boolean" == typeof u ? u = {
                        enabled: u
                    } : "string" == typeof u && (u = {
                        classes: u
                    }), u.enabled === !1 && s.push("disabled"), u.classes && (s = s.concat(u.classes.split(/\s+/))), u.tooltip && (y = u.tooltip), u.content && (k = u.content));
                    s = n.isFunction(n.uniqueSort) ? n.uniqueSort(s) : n.unique(s);
                    c.push('<td class="' + s.join(" ") + '"' + (y ? ' title="' + y + '"' : "") + ' data-date="' + e.getTime().toString() + '">' + k + "<\/td>");
                    y = null;
                    p === this.o.weekEnd && c.push("<\/tr>");
                    e.setUTCDate(e.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").html(c.join(""));
                it = r[this.o.language].monthsTitle || r.en.monthsTitle || "Months";
                l = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? it : o).end().find("tbody span").removeClass("active");
                (n.each(this.dates, function(n, t) {
                    t.getUTCFullYear() === o && l.eq(t.getUTCMonth()).addClass("active")
                }), (o < a || o > v) && l.addClass("disabled"), o === a && l.slice(0, ut).addClass("disabled"), o === v && l.slice(ft + 1).addClass("disabled"), this.o.beforeShowMonth !== n.noop) && (rt = this, n.each(l, function(i, r) {
                    var f = new Date(o, i, 1),
                        u = rt.o.beforeShowMonth(f);
                    u === t ? u = {} : "boolean" == typeof u ? u = {
                        enabled: u
                    } : "string" == typeof u && (u = {
                        classes: u
                    });
                    u.enabled !== !1 || n(r).hasClass("disabled") || n(r).addClass("disabled");
                    u.classes && n(r).addClass(u.classes);
                    u.tooltip && n(r).prop("title", u.tooltip)
                }));
                this._fill_yearsView(".datepicker-years", "year", 10, o, a, v, this.o.beforeShowYear);
                this._fill_yearsView(".datepicker-decades", "decade", 100, o, a, v, this.o.beforeShowDecade);
                this._fill_yearsView(".datepicker-centuries", "century", 1e3, o, a, v, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var i, r, u = new Date(this.viewDate),
                    t = u.getUTCFullYear(),
                    f = u.getUTCMonth(),
                    e = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                    s = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                    o = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    n = 1;
                switch (this.viewMode) {
                    case 4:
                        n *= 10;
                    case 3:
                        n *= 10;
                    case 2:
                        n *= 10;
                    case 1:
                        i = Math.floor(t / n) * n < e;
                        r = Math.floor(t / n) * n + n > o;
                        break;
                    case 0:
                        i = t <= e && f < s;
                        r = t >= o && f > h
                }
                this.picker.find(".prev").toggleClass("disabled", i);
                this.picker.find(".next").toggleClass("disabled", r)
            }
        },
        click: function(t) {
            t.preventDefault();
            t.stopPropagation();
            var r, o, u, e;
            r = n(t.target);
            r.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1);
            r.hasClass("today") && !r.hasClass("day") && (this.setViewMode(0), this._setDate(s(), "linked" === this.o.todayBtn ? null : "view"));
            r.hasClass("clear") && this.clearDates();
            r.hasClass("disabled") || (r.hasClass("month") || r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1), o = 1, 1 === this.viewMode ? (e = r.parent().find("span").index(r), u = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(e)) : (e = 0, u = Number(r.text()), this.viewDate.setUTCFullYear(u)), this._trigger(i.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(f(u, e, o)) : (this.setViewMode(this.viewMode - 1), this.fill()));
            this.picker.is(":visible") && this._focused_from && this._focused_from.focus();
            delete this._focused_from
        },
        dayCellClick: function(t) {
            var r = n(t.currentTarget),
                u = r.data("date"),
                i = new Date(u);
            this.o.updateViewDate && (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), i.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate));
            this._setDate(i)
        },
        navArrowsClick: function(t) {
            var u = n(t.currentTarget),
                r = u.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (r *= 12 * i.viewModes[this.viewMode].navStep);
            this.viewDate = this.moveMonth(this.viewDate, r);
            this._trigger(i.viewModes[this.viewMode].e, this.viewDate);
            this.fill()
        },
        _toggle_multidate: function(n) {
            var t = this.dates.contains(n);
            if (n || this.dates.clear(), t !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(n)) : this.dates.push(n), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(n, t) {
            t && "date" !== t || this._toggle_multidate(n && new Date(n));
            (!t && this.o.updateViewDate || "view" === t) && (this.viewDate = n && new Date(n));
            this.fill();
            this.setValue();
            t && "view" === t || this._trigger("changeDate");
            this.inputField.trigger("change");
            !this.o.autoclose || t && "date" !== t || this.hide()
        },
        moveDay: function(n, t) {
            var i = new Date(n);
            return i.setUTCDate(n.getUTCDate() + t), i
        },
        moveWeek: function(n, t) {
            return this.moveDay(n, 7 * t)
        },
        moveMonth: function(n, t) {
            var f;
            if (!p(n)) return this.o.defaultViewDate;
            if (!t) return n;
            var r, u, i = new Date(n.valueOf()),
                e = i.getUTCDate(),
                o = i.getUTCMonth(),
                s = Math.abs(t);
            if (t = t > 0 ? 1 : -1, 1 === s) u = t === -1 ? function() {
                return i.getUTCMonth() === o
            } : function() {
                return i.getUTCMonth() !== r
            }, r = o + t, i.setUTCMonth(r), r = (r + 12) % 12;
            else {
                for (f = 0; f < s; f++) i = this.moveMonth(i, t);
                r = i.getUTCMonth();
                i.setUTCDate(e);
                u = function() {
                    return r !== i.getUTCMonth()
                }
            }
            for (; u();) i.setUTCDate(--e), i.setUTCMonth(r);
            return i
        },
        moveYear: function(n, t) {
            return this.moveMonth(n, 12 * t)
        },
        moveAvailableDate: function(n, t, i) {
            do {
                if (n = this[i](n, t), !this.dateWithinRange(n)) return !1;
                i = "moveDay"
            } while (this.dateIsDisabled(n));
            return n
        },
        weekOfDateIsDisabled: function(t) {
            return n.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        },
        dateIsDisabled: function(t) {
            return this.weekOfDateIsDisabled(t) || n.grep(this.o.datesDisabled, function(n) {
                return l(t, n)
            }).length > 0
        },
        dateWithinRange: function(n) {
            return n >= this.o.startDate && n <= this.o.endDate
        },
        keydown: function(n) {
            if (!this.picker.is(":visible")) return void(40 !== n.keyCode && 27 !== n.keyCode || (this.show(), n.stopPropagation()));
            var i, t, u = !1,
                r = this.focusDate || this.viewDate;
            switch (n.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide();
                    n.preventDefault();
                    n.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    i = 37 === n.keyCode || 38 === n.keyCode ? -1 : 1;
                    0 === this.viewMode ? n.ctrlKey ? (t = this.moveAvailableDate(r, i, "moveYear"), t && this._trigger("changeYear", this.viewDate)) : n.shiftKey ? (t = this.moveAvailableDate(r, i, "moveMonth"), t && this._trigger("changeMonth", this.viewDate)) : 37 === n.keyCode || 39 === n.keyCode ? t = this.moveAvailableDate(r, i, "moveDay") : this.weekOfDateIsDisabled(r) || (t = this.moveAvailableDate(r, i, "moveWeek")) : 1 === this.viewMode ? (38 !== n.keyCode && 40 !== n.keyCode || (i *= 4), t = this.moveAvailableDate(r, i, "moveMonth")) : 2 === this.viewMode && (38 !== n.keyCode && 40 !== n.keyCode || (i *= 4), t = this.moveAvailableDate(r, i, "moveYear"));
                    t && (this.focusDate = this.viewDate = t, this.setValue(), this.fill(), n.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    r = this.focusDate || this.dates.get(-1) || this.viewDate;
                    this.o.keyboardNavigation && (this._toggle_multidate(r), u = !0);
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    this.picker.is(":visible") && (n.preventDefault(), n.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide()
            }
            u && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
        },
        setViewMode: function(n) {
            this.viewMode = n;
            this.picker.children("div").hide().filter(".datepicker-" + i.viewModes[this.viewMode].clsName).show();
            this.updateNavArrows();
            this._trigger("changeViewMode", new Date(this.viewDate))
        }
    };
    c = function(t, i) {
        n.data(t, "datepicker", this);
        this.element = n(t);
        this.inputs = n.map(i.inputs, function(n) {
            return n.jquery ? n[0] : n
        });
        delete i.inputs;
        this.keepEmptyValues = i.keepEmptyValues;
        delete i.keepEmptyValues;
        o.call(n(this.inputs), i).on("changeDate", n.proxy(this.dateUpdated, this));
        this.pickers = n.map(this.inputs, function(t) {
            return n.data(t, "datepicker")
        });
        this.updateDates()
    };
    c.prototype = {
        updateDates: function() {
            this.dates = n.map(this.pickers, function(n) {
                return n.getUTCDate()
            });
            this.updateRanges()
        },
        updateRanges: function() {
            var t = n.map(this.dates, function(n) {
                return n.valueOf()
            });
            n.each(this.pickers, function(n, i) {
                i.setRange(t)
            })
        },
        clearDates: function() {
            n.each(this.pickers, function(n, t) {
                t.clearDates()
            })
        },
        dateUpdated: function(i) {
            var u;
            if (!this.updating && (this.updating = !0, u = n.data(i.target, "datepicker"), u !== t)) {
                var r = u.getUTCDate(),
                    s = this.keepEmptyValues,
                    o = n.inArray(i.target, this.inputs),
                    f = o - 1,
                    e = o + 1,
                    h = this.inputs.length;
                if (o !== -1) {
                    if (n.each(this.pickers, function(n, t) {
                            t.getUTCDate() || t !== u && s || t.setUTCDate(r)
                        }), r < this.dates[f])
                        for (; f >= 0 && r < this.dates[f];) this.pickers[f--].setUTCDate(r);
                    else if (r > this.dates[e])
                        for (; e < h && r > this.dates[e];) this.pickers[e++].setUTCDate(r);
                    this.updateDates();
                    delete this.updating
                }
            }
        },
        destroy: function() {
            n.map(this.pickers, function(n) {
                n.destroy()
            });
            n(this.inputs).off("changeDate", this.dateUpdated);
            delete this.element.data().datepicker
        },
        remove: h("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    v = n.fn.datepicker;
    o = function(i) {
        var f = Array.apply(null, arguments),
            r;
        if (f.shift(), this.each(function() {
                var s = n(this),
                    t = s.data("datepicker"),
                    h = "object" == typeof i && i;
                if (!t) {
                    var l = w(this, "date"),
                        a = n.extend({}, e, l, h),
                        v = b(a.language),
                        o = n.extend({}, e, v, l, h);
                    s.hasClass("input-daterange") || o.inputs ? (n.extend(o, {
                        inputs: o.inputs || s.find("input").toArray()
                    }), t = new c(this, o)) : t = new u(this, o);
                    s.data("datepicker", t)
                }
                "string" == typeof i && "function" == typeof t[i] && (r = t[i].apply(t, f))
            }), r === t || r instanceof u || r instanceof c) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
        return r
    };
    n.fn.datepicker = o;
    e = n.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: n.noop,
        beforeShowMonth: n.noop,
        beforeShowYear: n.noop,
        beforeShowDecade: n.noop,
        beforeShowCentury: n.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        },
        showWeekDays: !0
    };
    y = n.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    n.fn.datepicker.Constructor = u;
    r = n.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    };
    i = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(n) {
            if ("function" == typeof n.toValue && "function" == typeof n.toDisplay) return n;
            var t = n.replace(this.validParts, "\0").split("\0"),
                i = n.match(this.validParts);
            if (!t || !t.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {
                separators: t,
                parts: i
            }
        },
        parseDate: function(f, e, o, h) {
            function et(n, t) {
                return t === !0 && (t = 10), n < 100 && (n += 2e3, n > (new Date).getFullYear() + t && (n -= 100)), n
            }

            function tt() {
                var n = this.slice(0, l[c].length),
                    t = l[c].slice(0, n.length);
                return n.toLowerCase() === t.toLowerCase()
            }
            var l, y, it, c, rt, ut, g, v, ft, d, w;
            if (!f) return t;
            if (f instanceof Date) return f;
            if ("string" == typeof e && (e = i.parseFormat(e)), e.toValue) return e.toValue(f, e, o);
            if (ut = {
                    d: "moveDay",
                    m: "moveMonth",
                    w: "moveWeek",
                    y: "moveYear"
                }, g = {
                    yesterday: "-1d",
                    today: "+0d",
                    tomorrow: "+1d"
                }, f in g && (f = g[f]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(f)) {
                for (l = f.match(/([\-+]\d+)([dmwy])/gi), f = new Date, c = 0; c < l.length; c++) y = l[c].match(/([\-+]\d+)([dmwy])/i), it = Number(y[1]), rt = ut[y[2].toLowerCase()], f = u.prototype[rt](f, it);
                return u.prototype._zero_utc_time(f)
            }
            l = f && f.match(this.nonpunctuation) || [];
            var p, b, k = {},
                nt = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                a = {
                    yyyy: function(n, t) {
                        return n.setUTCFullYear(h ? et(t, h) : t)
                    },
                    m: function(n, t) {
                        if (isNaN(n)) return n;
                        for (t -= 1; t < 0;) t += 12;
                        for (t %= 12, n.setUTCMonth(t); n.getUTCMonth() !== t;) n.setUTCDate(n.getUTCDate() - 1);
                        return n
                    },
                    d: function(n, t) {
                        return n.setUTCDate(t)
                    }
                };
            if (a.yy = a.yyyy, a.M = a.MM = a.mm = a.m, a.dd = a.d, f = s(), v = e.parts.slice(), l.length !== v.length && (v = n(v).filter(function(t, i) {
                    return n.inArray(i, nt) !== -1
                }).toArray()), l.length === v.length) {
                for (c = 0, ft = v.length; c < ft; c++) {
                    if (p = parseInt(l[c], 10), y = v[c], isNaN(p)) switch (y) {
                        case "MM":
                            b = n(r[o].months).filter(tt);
                            p = n.inArray(b[0], r[o].months) + 1;
                            break;
                        case "M":
                            b = n(r[o].monthsShort).filter(tt);
                            p = n.inArray(b[0], r[o].monthsShort) + 1
                    }
                    k[y] = p
                }
                for (c = 0; c < nt.length; c++) w = nt[c], w in k && !isNaN(k[w]) && (d = new Date(f), a[w](d, k[w]), isNaN(d) || (f = d))
            }
            return f
        },
        formatDate: function(t, u, f) {
            var e;
            if (!t) return "";
            if ("string" == typeof u && (u = i.parseFormat(u)), u.toDisplay) return u.toDisplay(t, u, f);
            e = {
                d: t.getUTCDate(),
                D: r[f].daysShort[t.getUTCDay()],
                DD: r[f].days[t.getUTCDay()],
                m: t.getUTCMonth() + 1,
                M: r[f].monthsShort[t.getUTCMonth()],
                MM: r[f].months[t.getUTCMonth()],
                yy: t.getUTCFullYear().toString().substring(2),
                yyyy: t.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d;
            e.mm = (e.m < 10 ? "0" : "") + e.m;
            t = [];
            for (var s = n.extend([], u.separators), o = 0, h = u.parts.length; o <= h; o++) s.length && t.push(s.shift()), t.push(e[u.parts[o]]);
            return t.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"><\/th><\/tr><tr><th class="prev">' + e.templates.leftArrow + '<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">' + e.templates.rightArrow + "<\/th><\/tr><\/thead>",
        contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'
    };
    i.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + i.headTemplate + "<tbody><\/tbody>" + i.footTemplate + '<\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-decades"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + '<\/table><\/div><div class="datepicker-centuries"><table class="table-condensed">' + i.headTemplate + i.contTemplate + i.footTemplate + "<\/table><\/div><\/div>";
    n.fn.datepicker.DPGlobal = i;
    n.fn.datepicker.noConflict = function() {
        return n.fn.datepicker = v, this
    };
    n.fn.datepicker.version = "1.8.0";
    n.fn.datepicker.deprecated = function(n) {
        var t = window.console;
        t && t.warn && t.warn("DEPRECATED: " + n)
    };
    n(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
        var i = n(this);
        i.data("datepicker") || (t.preventDefault(), o.call(i, "show"))
    });
    n(function() {
        o.call(n('[data-provide="datepicker-inline"]'))
    })
});
! function(n) {
    n.fn.datepicker.dates.pt = {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        monthsTitle: "Meses",
        clear: "Limpar",
        format: "dd/mm/yyyy"
    }
}(jQuery);
/*! =======================================================
                      VERSION  10.6.2              
========================================================= */
_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
};
windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));
! function(n) {
    if ("function" == typeof define && define.amd) define(["jquery"], n);
    else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
        var t;
        try {
            t = require("jquery")
        } catch (i) {
            t = null
        }
        module.exports = n(t)
    } else window && (window.Slider = n(window.jQuery))
}(function(n) {
    var i = "slider",
        r = "bootstrapSlider",
        t;
    return windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function() {}), windowIsDefined && !window.console.warn && (window.console.warn = function() {}),
        function(n) {
            function t() {}

            function i(n) {
                function u(t) {
                    t.prototype.option || (t.prototype.option = function(t) {
                        n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
                    })
                }

                function f(t, u) {
                    n.fn[t] = function(f) {
                        var c, e, o, s;
                        if ("string" == typeof f) {
                            for (var l = r.call(arguments, 1), h = 0, a = this.length; a > h; h++)
                                if (c = this[h], e = n.data(c, t), e)
                                    if (n.isFunction(e[f]) && "_" !== f.charAt(0)) {
                                        if (o = e[f].apply(e, l), void 0 !== o && o !== e) return o
                                    } else i("no such method '" + f + "' for " + t + " instance");
                            else i("cannot call methods on " + t + " prior to initialization; attempted to call '" + f + "'");
                            return this
                        }
                        return s = this.map(function() {
                            var i = n.data(this, t);
                            return i ? (i.option(f), i._init()) : (i = new u(this, f), n.data(this, t, i)), n(this)
                        }), 1 === s.length ? s[0] : s
                    }
                }
                if (n) {
                    var i = "undefined" == typeof console ? t : function(n) {
                        console.error(n)
                    };
                    return n.bridget = function(n, t) {
                        u(t);
                        f(n, t)
                    }, n.bridget
                }
            }
            var r = Array.prototype.slice;
            i(n)
        }(n),
        function(n) {
            function e(t, i) {
                function at(n, t) {
                    var r = "data-slider-" + t.replace(/_/g, "-"),
                        i = n.getAttribute(r);
                    try {
                        return JSON.parse(i)
                    } catch (u) {
                        return i
                    }
                }
                var c, o, rt, s, a, k, d, st, g, h, tt, v, y, p, ct, lt;
                this._state = {
                    value: null,
                    enabled: null,
                    offset: null,
                    size: null,
                    percentage: null,
                    inDrag: !1,
                    over: !1,
                    tickIndex: null
                };
                this.ticksCallbackMap = {};
                this.handleCallbackMap = {};
                "string" == typeof t ? this.element = document.querySelector(t) : t instanceof HTMLElement && (this.element = t);
                i = i ? i : {};
                for (var ot = Object.keys(this.defaultOptions), vt = i.hasOwnProperty("min"), yt = i.hasOwnProperty("max"), r = 0; r < ot.length; r++) c = ot[r], o = i[c], o = "undefined" != typeof o ? o : at(this.element, c), o = null !== o ? o : this.defaultOptions[c], this.options || (this.options = {}), this.options[c] = o;
                (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), "auto" === this.options.rtl) && (rt = window.getComputedStyle(this.element), this.options.rtl = null != rt ? "rtl" === rt.direction : "rtl" === this.element.style.direction);
                "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.tooltip_position = this.options.rtl ? "left" : "right";
                var l, w, b, u, e, pt = this.element.style.width,
                    ut = !1,
                    wt = this.element.parentNode;
                if (this.sliderElem) ut = !0;
                else {
                    if (this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider", s = document.createElement("div"), s.className = "slider-track", w = document.createElement("div"), w.className = "slider-track-low", l = document.createElement("div"), l.className = "slider-selection", b = document.createElement("div"), b.className = "slider-track-high", u = document.createElement("div"), u.className = "slider-handle min-slider-handle", u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", this.options.min), u.setAttribute("aria-valuemax", this.options.max), e = document.createElement("div"), e.className = "slider-handle max-slider-handle", e.setAttribute("role", "slider"), e.setAttribute("aria-valuemin", this.options.min), e.setAttribute("aria-valuemax", this.options.max), s.appendChild(w), s.appendChild(l), s.appendChild(b), this.rangeHighlightElements = [], a = this.options.rangeHighlights, Array.isArray(a) && a.length > 0)
                        for (k = 0; k < a.length; k++) d = document.createElement("div"), st = a[k]["class"] || "", d.className = "slider-rangeHighlight slider-selection " + st, this.rangeHighlightElements.push(d), s.appendChild(d);
                    if (g = Array.isArray(this.options.labelledby), g && this.options.labelledby[0] && u.setAttribute("aria-labelledby", this.options.labelledby[0]), g && this.options.labelledby[1] && e.setAttribute("aria-labelledby", this.options.labelledby[1]), !g && this.options.labelledby && (u.setAttribute("aria-labelledby", this.options.labelledby), e.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                        for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", r = 0; r < this.options.ticks.length; r++) {
                            if (h = document.createElement("div"), h.className = "slider-tick", this.options.ticks_tooltip) {
                                var ht = this._addTickListener(),
                                    bt = ht.addMouseEnter(this, h, r),
                                    kt = ht.addMouseLeave(this, h);
                                this.ticksCallbackMap[r] = {
                                    mouseEnter: bt,
                                    mouseLeave: kt
                                }
                            }
                            this.ticks.push(h);
                            this.ticksContainer.appendChild(h)
                        }
                        l.className += " tick-slider-selection"
                    }
                    if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0)
                        for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", r = 0; r < this.options.ticks_labels.length; r++) {
                            var nt = document.createElement("div"),
                                dt = 0 === this.options.ticks_positions.length,
                                gt = this.options.reversed && dt ? this.options.ticks_labels.length - (r + 1) : r;
                            nt.className = "slider-tick-label";
                            nt.innerHTML = this.options.ticks_labels[gt];
                            this.tickLabels.push(nt);
                            this.tickLabelContainer.appendChild(nt)
                        }
                    tt = function(n) {
                        var i = document.createElement("div"),
                            t;
                        i.className = "tooltip-arrow";
                        t = document.createElement("div");
                        t.className = "tooltip-inner";
                        n.appendChild(i);
                        n.appendChild(t)
                    };
                    v = document.createElement("div");
                    v.className = "tooltip tooltip-main";
                    v.setAttribute("role", "presentation");
                    tt(v);
                    y = document.createElement("div");
                    y.className = "tooltip tooltip-min";
                    y.setAttribute("role", "presentation");
                    tt(y);
                    p = document.createElement("div");
                    p.className = "tooltip tooltip-max";
                    p.setAttribute("role", "presentation");
                    tt(p);
                    this.sliderElem.appendChild(s);
                    this.sliderElem.appendChild(v);
                    this.sliderElem.appendChild(y);
                    this.sliderElem.appendChild(p);
                    this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer);
                    this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer);
                    this.sliderElem.appendChild(u);
                    this.sliderElem.appendChild(e);
                    wt.insertBefore(this.sliderElem, this.element);
                    this.element.style.display = "none"
                }
                if (n && (this.$element = n(this.element), this.$sliderElem = n(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), f[this.options.scale] && (this.options.scale = f[this.options.scale]), ut === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function(n) {
                        this._removeProperty(this.trackLow, n);
                        this._removeProperty(this.trackSelection, n);
                        this._removeProperty(this.trackHigh, n)
                    }, this), [this.handle1, this.handle2].forEach(function(n) {
                        this._removeProperty(n, "left");
                        this._removeProperty(n, "right");
                        this._removeProperty(n, "top")
                    }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(n) {
                        this._removeProperty(n, "left");
                        this._removeProperty(n, "right");
                        this._removeProperty(n, "top");
                        this._removeClass(n, "right");
                        this._removeClass(n, "left");
                        this._removeClass(n, "top")
                    }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = pt, this.options.orientation = "horizontal", this.stylePos = this.options.rtl ? "right" : "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (yt || (this.options.max = Math.max.apply(Math, this.options.ticks)), vt || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this._state.value = this.options.range ? [this.options.value, this.options.max] : this.options.value, this.trackLow = w || this.trackLow, this.trackSelection = l || this.trackSelection, this.trackHigh = b || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = u || this.handle1, this.handle2 = e || this.handle2, ut === !0)
                    for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), r = 0; r < this.ticks.length; r++) this._removeClass(this.ticks[r], "round triangle hide");
                if (ct = ["round", "triangle", "custom"], lt = -1 !== ct.indexOf(this.options.handle), lt)
                    for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), r = 0; r < this.ticks.length; r++) this._addClass(this.ticks[r], this.options.handle);
                if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");
                else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0;
                else {
                    if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
                        var it = this._addTickListener(),
                            ft = it.addMouseEnter(this, this.handle1),
                            et = it.addMouseLeave(this, this.handle1);
                        this.handleCallbackMap.handle1 = {
                            mouseEnter: ft,
                            mouseLeave: et
                        };
                        ft = it.addMouseEnter(this, this.handle2);
                        et = it.addMouseLeave(this, this.handle2);
                        this.handleCallbackMap.handle2 = {
                            mouseEnter: ft,
                            mouseLeave: et
                        }
                    } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1));
                    this.handle1.addEventListener("focus", this.showTooltip, !1);
                    this.handle1.addEventListener("blur", this.hideTooltip, !1);
                    this.handle2.addEventListener("focus", this.showTooltip, !1);
                    this.handle2.addEventListener("blur", this.hideTooltip, !1);
                    this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1))
                }
                this.options.enabled ? this.enable() : this.disable()
            }
            var u = void 0,
                o = {
                    formatInvalidInputErrorMsg: function(n) {
                        return "Invalid input value '" + n + "' passed in"
                    },
                    callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
                },
                f = {
                    linear: {
                        getValue: function(n, t) {
                            return n < t.min ? t.min : n > t.max ? t.max : n
                        },
                        toValue: function(n) {
                            var e = n / 100 * (this.options.max - this.options.min),
                                o = !0,
                                i, s, r, u, t, h, c, l;
                            if (this.options.ticks_positions.length > 0) {
                                for (u = 0, t = 1; t < this.options.ticks_positions.length; t++)
                                    if (n <= this.options.ticks_positions[t]) {
                                        i = this.options.ticks[t - 1];
                                        r = this.options.ticks_positions[t - 1];
                                        s = this.options.ticks[t];
                                        u = this.options.ticks_positions[t];
                                        break
                                    }
                                h = (n - r) / (u - r);
                                e = i + h * (s - i);
                                o = !1
                            }
                            return c = o ? this.options.min : 0, l = c + Math.round(e / this.options.step) * this.options.step, f.linear.getValue(l, this.options)
                        },
                        toPercentage: function(n) {
                            var i, f, r, u, t, e;
                            if (this.options.max === this.options.min) return 0;
                            if (this.options.ticks_positions.length > 0) {
                                for (u = 0, t = 0; t < this.options.ticks.length; t++)
                                    if (n <= this.options.ticks[t]) {
                                        i = t > 0 ? this.options.ticks[t - 1] : 0;
                                        r = t > 0 ? this.options.ticks_positions[t - 1] : 0;
                                        f = this.options.ticks[t];
                                        u = this.options.ticks_positions[t];
                                        break
                                    }
                                if (t > 0) return e = (n - i) / (f - i), r + e * (u - r)
                            }
                            return 100 * (n - this.options.min) / (this.options.max - this.options.min)
                        }
                    },
                    logarithmic: {
                        toValue: function(n) {
                            var i = 1 - this.options.min,
                                u = Math.log(this.options.min + i),
                                r = Math.log(this.options.max + i),
                                t = Math.exp(u + (r - u) * n / 100) - i;
                            return Math.round(t) === r ? r : (t = this.options.min + Math.round((t - this.options.min) / this.options.step) * this.options.step, f.linear.getValue(t, this.options))
                        },
                        toPercentage: function(n) {
                            if (this.options.max === this.options.min) return 0;
                            var t = 1 - this.options.min,
                                r = Math.log(this.options.max + t),
                                i = Math.log(this.options.min + t),
                                u = Math.log(n + t);
                            return 100 * (u - i) / (r - i)
                        }
                    }
                };
            t = function(n, t) {
                return e.call(this, n, t), this
            };
            t.prototype = {
                _init: function() {},
                constructor: t,
                defaultOptions: {
                    id: "",
                    min: 0,
                    max: 10,
                    step: 1,
                    precision: 0,
                    orientation: "horizontal",
                    value: 5,
                    range: !1,
                    selection: "before",
                    tooltip: "show",
                    tooltip_split: !1,
                    lock_to_ticks: !1,
                    handle: "round",
                    reversed: !1,
                    rtl: "auto",
                    enabled: !0,
                    formatter: function(n) {
                        return Array.isArray(n) ? n[0] + " : " + n[1] : n
                    },
                    natural_arrow_keys: !1,
                    ticks: [],
                    ticks_positions: [],
                    ticks_labels: [],
                    ticks_snap_bounds: 0,
                    ticks_tooltip: !1,
                    scale: "linear",
                    focus: !1,
                    tooltip_position: null,
                    labelledby: null,
                    rangeHighlights: []
                },
                getElement: function() {
                    return this.sliderElem
                },
                getValue: function() {
                    return this.options.range ? this._state.value : this._state.value[0]
                },
                setValue: function(n, t, i) {
                    var u, f, r, e;
                    return n || (n = 0), u = this.getValue(), this._state.value = this._validateInputValue(n), f = this._applyPrecision.bind(this), this.options.range ? (this._state.value[0] = f(this._state.value[0]), this._state.value[1] = f(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = f(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), this._state.value[1] = "after" === this.options.selection ? this.options.max : this.options.min), this._setTickIndex(), this._state.percentage = this.options.max > this.options.min ? [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : [0, 0, 100], this._layout(), r = this.options.range ? this._state.value : this._state.value[0], this._setDataVal(r), t === !0 && this._trigger("slide", r), e = !1, e = Array.isArray(r) ? u[0] !== r[0] || u[1] !== r[1] : u !== r, e && i === !0 && this._trigger("change", {
                        oldValue: u,
                        newValue: r
                    }), this
                },
                destroy: function() {
                    this._removeSliderEventHandlers();
                    this.sliderElem.parentNode.removeChild(this.sliderElem);
                    this.element.style.display = "";
                    this._cleanUpEventCallbacksMap();
                    this.element.removeAttribute("data");
                    n && (this._unbindJQueryEventHandlers(), u === i && this.$element.removeData(u), this.$element.removeData(r))
                },
                disable: function() {
                    return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
                },
                enable: function() {
                    return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
                },
                toggle: function() {
                    return this._state.enabled ? this.disable() : this.enable(), this
                },
                isEnabled: function() {
                    return this._state.enabled
                },
                on: function(n, t) {
                    return this._bindNonQueryEventHandler(n, t), this
                },
                off: function(t, i) {
                    n ? (this.$element.off(t, i), this.$sliderElem.off(t, i)) : this._unbindNonQueryEventHandler(t, i)
                },
                getAttribute: function(n) {
                    return n ? this.options[n] : this.options
                },
                setAttribute: function(n, t) {
                    return this.options[n] = t, this
                },
                refresh: function(t) {
                    var f = this.getValue();
                    return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), t && t.useCurrentValue === !0 && this.setValue(f), n && (u === i ? (n.data(this.element, i, this), n.data(this.element, r, this)) : n.data(this.element, r, this)), this
                },
                relayout: function() {
                    return this._resize(), this
                },
                _removeTooltipListener: function(n, t) {
                    this.handle1.removeEventListener(n, t, !1);
                    this.handle2.removeEventListener(n, t, !1)
                },
                _removeSliderEventHandlers: function() {
                    if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
                        for (var t = this.ticksContainer.getElementsByClassName("slider-tick"), n = 0; n < t.length; n++) t[n].removeEventListener("mouseenter", this.ticksCallbackMap[n].mouseEnter, !1), t[n].removeEventListener("mouseleave", this.ticksCallbackMap[n].mouseLeave, !1);
                        this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1))
                    }
                    this.handleCallbackMap = null;
                    this.ticksCallbackMap = null;
                    this.showTooltip && this._removeTooltipListener("focus", this.showTooltip);
                    this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip);
                    this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1);
                    this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1);
                    this.sliderElem.removeEventListener("mousedown", this.mousedown, !1);
                    this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1));
                    window.removeEventListener("resize", this.resize, !1)
                },
                _bindNonQueryEventHandler: function(n, t) {
                    void 0 === this.eventToCallbackMap[n] && (this.eventToCallbackMap[n] = []);
                    this.eventToCallbackMap[n].push(t)
                },
                _unbindNonQueryEventHandler: function(n, t) {
                    var r = this.eventToCallbackMap[n],
                        i;
                    if (void 0 !== r)
                        for (i = 0; i < r.length; i++)
                            if (r[i] === t) {
                                r.splice(i, 1);
                                break
                            }
                },
                _cleanUpEventCallbacksMap: function() {
                    for (var i, t = Object.keys(this.eventToCallbackMap), n = 0; n < t.length; n++) i = t[n], delete this.eventToCallbackMap[i]
                },
                _showTooltip: function() {
                    this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none");
                    this._state.over = !0
                },
                _hideTooltip: function() {
                    this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in"));
                    this._state.over = !1
                },
                _setToolTipOnMouseOver: function(n) {
                    function t(n, t) {
                        return t ? [100 - n.percentage[0], i.options.range ? 100 - n.percentage[1] : n.percentage[1]] : [n.percentage[0], n.percentage[1]]
                    }
                    var i = this,
                        r = this.options.formatter(n ? n.value[0] : this._state.value[0]),
                        u = n ? t(n, this.options.reversed) : t(this._state, this.options.reversed);
                    this._setText(this.tooltipInner, r);
                    this.tooltip.style[this.stylePos] = u[0] + "%"
                },
                _copyState: function() {
                    return {
                        value: [this._state.value[0], this._state.value[1]],
                        enabled: this._state.enabled,
                        offset: this._state.offset,
                        size: this._state.size,
                        percentage: [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2]],
                        inDrag: this._state.inDrag,
                        over: this._state.over,
                        dragged: this._state.dragged,
                        keyCtrl: this._state.keyCtrl
                    }
                },
                _addTickListener: function() {
                    return {
                        addMouseEnter: function(n, t, i) {
                            var r = function() {
                                var r = n._copyState(),
                                    u = t === n.handle1 ? r.value[0] : r.value[1],
                                    f = void 0;
                                void 0 !== i ? (u = n.options.ticks[i], f = n.options.ticks_positions.length > 0 && n.options.ticks_positions[i] || n._toPercentage(n.options.ticks[i])) : f = n._toPercentage(u);
                                r.value[0] = u;
                                r.percentage[0] = f;
                                n._setToolTipOnMouseOver(r);
                                n._showTooltip()
                            };
                            return t.addEventListener("mouseenter", r, !1), r
                        },
                        addMouseLeave: function(n, t) {
                            var i = function() {
                                n._hideTooltip()
                            };
                            return t.addEventListener("mouseleave", i, !1), i
                        }
                    }
                },
                _layout: function() {
                    var n, f, r, o, s, y, u, h, p, c, e, t, i, l, w, b, a, v;
                    if (n = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = n[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), f = this.options.formatter(this._state.value[0]), isNaN(f) ? this.handle1.setAttribute("aria-valuetext", f) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = n[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), f = this.options.formatter(this._state.value[1]), isNaN(f) ? this.handle2.setAttribute("aria-valuetext", f) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0)
                        for (r = 0; r < this.options.rangeHighlights.length; r++) o = this._toPercentage(this.options.rangeHighlights[r].start), s = this._toPercentage(this.options.rangeHighlights[r].end), this.options.reversed && (y = 100 - s, s = 100 - o, o = y), u = this._createHighlightRange(o, s), u ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[r].style.top = u.start + "%", this.rangeHighlightElements[r].style.height = u.size + "%") : (this.options.rtl ? this.rangeHighlightElements[r].style.right = u.start + "%" : this.rangeHighlightElements[r].style.left = u.start + "%", this.rangeHighlightElements[r].style.width = u.size + "%") : this.rangeHighlightElements[r].style.display = "none";
                    if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                        if (p = "vertical" === this.options.orientation ? "height" : "width", h = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft", c = this._state.size / (this.options.ticks.length - 1), this.tickLabelContainer) {
                            if (e = 0, 0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[h] = -c / 2 + "px"), e = this.tickLabelContainer.offsetHeight;
                            else
                                for (t = 0; t < this.tickLabelContainer.childNodes.length; t++) this.tickLabelContainer.childNodes[t].offsetHeight > e && (e = this.tickLabelContainer.childNodes[t].offsetHeight);
                            "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = e + "px")
                        }
                        for (t = 0; t < this.options.ticks.length; t++) i = this.options.ticks_positions[t] || this._toPercentage(this.options.ticks[t]), this.options.reversed && (i = 100 - i), this.ticks[t].style[this.stylePos] = i + "%", this._removeClass(this.ticks[t], "in-selection"), this.options.range ? i >= n[0] && i <= n[1] && this._addClass(this.ticks[t], "in-selection") : "after" === this.options.selection && i >= n[0] ? this._addClass(this.ticks[t], "in-selection") : "before" === this.options.selection && i <= n[0] && this._addClass(this.ticks[t], "in-selection"), this.tickLabels[t] && (this.tickLabels[t].style[p] = c + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[t] ? (this.tickLabels[t].style.position = "absolute", this.tickLabels[t].style[this.stylePos] = i + "%", this.tickLabels[t].style[h] = -c / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[t].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[t].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[h] = this.sliderElem.offsetWidth / -2 + "px"), this._removeClass(this.tickLabels[t], "label-in-selection label-is-selection"), this.options.range ? i >= n[0] && i <= n[1] && (this._addClass(this.tickLabels[t], "label-in-selection"), (i === n[0] || n[1]) && this._addClass(this.tickLabels[t], "label-is-selection")) : ("after" === this.options.selection && i >= n[0] ? this._addClass(this.tickLabels[t], "label-in-selection") : "before" === this.options.selection && i <= n[0] && this._addClass(this.tickLabels[t], "label-in-selection"), i === n[0] && this._addClass(this.tickLabels[t], "label-is-selection")))
                    }
                    this.options.range ? (l = this.options.formatter(this._state.value), this._setText(this.tooltipInner, l), this.tooltip.style[this.stylePos] = (n[1] + n[0]) / 2 + "%", w = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner_min, w), b = this.options.formatter(this._state.value[1]), this._setText(this.tooltipInner_max, b), this.tooltip_min.style[this.stylePos] = n[0] + "%", this.tooltip_max.style[this.stylePos] = n[1] + "%") : (l = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, l), this.tooltip.style[this.stylePos] = n[0] + "%");
                    "vertical" === this.options.orientation ? (this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(n[0], n[1]) + "%", this.trackSelection.style.top = Math.min(n[0], n[1]) + "%", this.trackSelection.style.height = Math.abs(n[0] - n[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(n[0], n[1]) - Math.abs(n[0] - n[1]) + "%") : ("right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(n[0], n[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(n[0], n[1]) + "%" : this.trackSelection.style.left = Math.min(n[0], n[1]) + "%", this.trackSelection.style.width = Math.abs(n[0] - n[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(n[0], n[1]) - Math.abs(n[0] - n[1]) + "%", a = this.tooltip_min.getBoundingClientRect(), v = this.tooltip_max.getBoundingClientRect(), "bottom" === this.options.tooltip_position ? a.right > v.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : a.right > v.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top))
                },
                _createHighlightRange: function(n, t) {
                    return this._isHighlightRange(n, t) ? n > t ? {
                        start: t,
                        size: n - t
                    } : {
                        start: n,
                        size: t - n
                    } : null
                },
                _isHighlightRange: function(n, t) {
                    return n >= 0 && 100 >= n && t >= 0 && 100 >= t ? !0 : !1
                },
                _resize: function() {
                    this._state.offset = this._offset(this.sliderElem);
                    this._state.size = this.sliderElem[this.sizePos];
                    this._layout()
                },
                _removeProperty: function(n, t) {
                    n.style.removeProperty ? n.style.removeProperty(t) : n.style.removeAttribute(t)
                },
                _mousedown: function(n) {
                    var t, r, u, i;
                    return this._state.enabled ? (n.preventDefault && n.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], t = this._getPercentage(n), this.options.range ? (r = Math.abs(this._state.percentage[0] - t), u = Math.abs(this._state.percentage[1] - t), this._state.dragged = u > r ? 0 : 1, this._adjustPercentageForRangeSliders(t)) : this._state.dragged = 0, this._state.percentage[this._state.dragged] = t, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0, i = this._calculateValue(), this._trigger("slideStart", i), this.setValue(i, !1, !0), n.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0) : !1
                },
                _touchstart: function(n) {
                    this._mousedown(n)
                },
                _triggerFocusOnHandle: function(n) {
                    0 === n && this.handle1.focus();
                    1 === n && this.handle2.focus()
                },
                _keydown: function(n, t) {
                    var i, r, u, e, o, s;
                    if (!this._state.enabled) return !1;
                    switch (t.keyCode) {
                        case 37:
                        case 40:
                            i = -1;
                            break;
                        case 39:
                        case 38:
                            i = 1
                    }
                    if (i) {
                        if (this.options.natural_arrow_keys) {
                            var h = "horizontal" === this.options.orientation,
                                c = "vertical" === this.options.orientation,
                                l = this.options.rtl,
                                f = this.options.reversed;
                            h ? l ? f || (i = -i) : f && (i = -i) : c && (f || (i = -i))
                        }
                        return this.ticksAreValid && this.options.lock_to_ticks ? (u = void 0, u = this.options.ticks.indexOf(this._state.value[n]), -1 === u && (u = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), u += i, u = Math.max(0, Math.min(this.options.ticks.length - 1, u)), r = this.options.ticks[u]) : r = this._state.value[n] + i * this.options.step, e = this._toPercentage(r), (this._state.keyCtrl = n, this.options.range) ? (this._adjustPercentageForRangeSliders(e), o = this._state.keyCtrl ? this._state.value[0] : r, s = this._state.keyCtrl ? r : this._state.value[1], r = [Math.max(this.options.min, Math.min(this.options.max, o)), Math.max(this.options.min, Math.min(this.options.max, s))]) : r = Math.max(this.options.min, Math.min(this.options.max, r)), this._trigger("slideStart", r), this.setValue(r, !0, !0), this._trigger("slideStop", r), this._pauseEvent(t), delete this._state.keyCtrl, !1
                    }
                },
                _pauseEvent: function(n) {
                    n.stopPropagation && n.stopPropagation();
                    n.preventDefault && n.preventDefault();
                    n.cancelBubble = !0;
                    n.returnValue = !1
                },
                _mousemove: function(n) {
                    var t, i;
                    return this._state.enabled ? (t = this._getPercentage(n), this._adjustPercentageForRangeSliders(t), this._state.percentage[this._state.dragged] = t, i = this._calculateValue(!0), this.setValue(i, !0, !0), !1) : !1
                },
                _touchmove: function(n) {
                    void 0 !== n.changedTouches && n.preventDefault && n.preventDefault()
                },
                _adjustPercentageForRangeSliders: function(n) {
                    var t, i;
                    this.options.range && (t = this._getNumDigitsAfterDecimalPlace(n), t = t ? t - 1 : 0, i = this._applyToFixedAndParseFloat(n, t), 0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], t) < i ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], t) > i ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._toPercentage(this._state.value[1]) < n ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._toPercentage(this._state.value[0]) > n && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus()))
                },
                _mouseup: function(n) {
                    var t, i;
                    return this._state.enabled ? (t = this._getPercentage(n), this._adjustPercentageForRangeSliders(t), this._state.percentage[this._state.dragged] = t, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip(), i = this._calculateValue(!0), this.setValue(i, !1, !0), this._trigger("slideStop", i), this._state.dragged = null, !1) : !1
                },
                _setValues: function(n, t) {
                    var i = 0 === n ? 0 : 100;
                    this._state.percentage[n] !== i && (t.data[n] = this._toValue(this._state.percentage[n]), t.data[n] = this._applyPrecision(t.data[n]))
                },
                _calculateValue: function(n) {
                    var t = {};
                    return this.options.range ? (t.data = [this.options.min, this.options.max], this._setValues(0, t), this._setValues(1, t), n && (t.data[0] = this._snapToClosestTick(t.data[0]), t.data[1] = this._snapToClosestTick(t.data[1]))) : (t.data = this._toValue(this._state.percentage[0]), t.data = parseFloat(t.data), t.data = this._applyPrecision(t.data), n && (t.data = this._snapToClosestTick(t.data))), t.data
                },
                _snapToClosestTick: function(n) {
                    for (var r, t = [n, 1 / 0], i = 0; i < this.options.ticks.length; i++) r = Math.abs(this.options.ticks[i] - n), r <= t[1] && (t = [this.options.ticks[i], r]);
                    return t[1] <= this.options.ticks_snap_bounds ? t[0] : n
                },
                _applyPrecision: function(n) {
                    var t = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                    return this._applyToFixedAndParseFloat(n, t)
                },
                _getNumDigitsAfterDecimalPlace: function(n) {
                    var t = ("" + n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                },
                _applyToFixedAndParseFloat: function(n, t) {
                    var i = n.toFixed(t);
                    return parseFloat(i)
                },
                _getPercentage: function(n) {
                    var t;
                    this.touchCapable && ("touchstart" === n.type || "touchmove" === n.type || "touchend" === n.type) && (n = n.changedTouches[0]);
                    var r = n[this.mousePos],
                        u = this._state.offset[this.stylePos],
                        i = r - u;
                    return "right" === this.stylePos && (i = -i), t = i / this._state.size * 100, t = Math.round(t / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (t = 100 - t), Math.max(0, Math.min(100, t))
                },
                _validateInputValue: function(n) {
                    if (isNaN(+n)) {
                        if (Array.isArray(n)) return this._validateArray(n), n;
                        throw new Error(o.formatInvalidInputErrorMsg(n));
                    }
                    return +n
                },
                _validateArray: function(n) {
                    for (var i, t = 0; t < n.length; t++)
                        if (i = n[t], "number" != typeof i) throw new Error(o.formatInvalidInputErrorMsg(i));
                },
                _setDataVal: function(n) {
                    this.element.setAttribute("data-value", n);
                    this.element.setAttribute("value", n);
                    this.element.value = n
                },
                _trigger: function(t, i) {
                    var r, u, f;
                    if (i = i || 0 === i ? i : void 0, r = this.eventToCallbackMap[t], r && r.length)
                        for (u = 0; u < r.length; u++) f = r[u], f(i);
                    n && this._triggerJQueryEvent(t, i)
                },
                _triggerJQueryEvent: function(n, t) {
                    var i = {
                        type: n,
                        value: t
                    };
                    this.$element.trigger(i);
                    this.$sliderElem.trigger(i)
                },
                _unbindJQueryEventHandlers: function() {
                    this.$element.off();
                    this.$sliderElem.off()
                },
                _setText: function(n, t) {
                    "undefined" != typeof n.textContent ? n.textContent = t : "undefined" != typeof n.innerText && (n.innerText = t)
                },
                _removeClass: function(n, t) {
                    for (var f, e, u = t.split(" "), i = n.className, r = 0; r < u.length; r++) f = u[r], e = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"), i = i.replace(e, " ");
                    n.className = i.trim()
                },
                _addClass: function(n, t) {
                    for (var u = t.split(" "), i = n.className, r = 0; r < u.length; r++) {
                        var f = u[r],
                            e = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
                            o = e.test(i);
                        o || (i += " " + f)
                    }
                    n.className = i.trim()
                },
                _offsetLeft: function(n) {
                    return n.getBoundingClientRect().left
                },
                _offsetRight: function(n) {
                    return n.getBoundingClientRect().right
                },
                _offsetTop: function(n) {
                    for (var t = n.offsetTop;
                        (n = n.offsetParent) && !isNaN(n.offsetTop);) t += n.offsetTop, "BODY" !== n.tagName && (t -= n.scrollTop);
                    return t
                },
                _offset: function(n) {
                    return {
                        left: this._offsetLeft(n),
                        right: this._offsetRight(n),
                        top: this._offsetTop(n)
                    }
                },
                _css: function(t, i, r) {
                    if (n) n.style(t, i, r);
                    else {
                        var u = i.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(n, t) {
                            return t.toUpperCase()
                        });
                        t.style[u] = r
                    }
                },
                _toValue: function(n) {
                    return this.options.scale.toValue.apply(this, [n])
                },
                _toPercentage: function(n) {
                    return this.options.scale.toPercentage.apply(this, [n])
                },
                _setTooltipPosition: function() {
                    var n = [this.tooltip, this.tooltip_min, this.tooltip_max],
                        t, i;
                    "vertical" === this.options.orientation ? (t = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right", i = "left" === t ? "right" : "left", n.forEach(function(n) {
                        this._addClass(n, t);
                        n.style[i] = "100%"
                    }.bind(this))) : "bottom" === this.options.tooltip_position ? n.forEach(function(n) {
                        this._addClass(n, "bottom");
                        n.style.top = "22px"
                    }.bind(this)) : n.forEach(function(n) {
                        this._addClass(n, "top");
                        n.style.top = -this.tooltip.outerHeight - 14 + "px"
                    }.bind(this))
                },
                _getClosestTickIndex: function(n) {
                    for (var i, r = Math.abs(n - this.options.ticks[0]), u = 0, t = 0; t < this.options.ticks.length; ++t) i = Math.abs(n - this.options.ticks[t]), r > i && (r = i, u = t);
                    return u
                },
                _setTickIndex: function() {
                    this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])])
                }
            };
            n && n.fn && (n.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), u = r) : (n.bridget(i, t), u = i), n.bridget(r, t), n(function() {
                n("input[data-provide=slider]")[u]()
            }))
        }(n), t
}),
function() {
    var n;
    n = jQuery;
    n.bootstrapGrowl = function(t, i) {
        var r, f, u;
        i = n.extend({}, n.bootstrapGrowl.default_options, i);
        r = n("<div>");
        r.attr("class", "bootstrap-growl alert");
        i.type && r.addClass("alert-" + i.type);
        i.allow_dismiss && r.append('<a class="close" data-dismiss="alert" href="#">&times;<\/a>');
        r.append(t);
        i.top_offset && (i.offset = {
            from: "top",
            amount: i.top_offset
        });
        u = i.offset.amount;
        n(".bootstrap-growl").each(function() {
            return u = Math.max(u, parseInt(n(this).css(i.offset.from)) + n(this).outerHeight() + i.stackup_spacing)
        });
        f = {
            position: i.ele === "body" ? "fixed" : "absolute",
            margin: 0,
            "z-index": "9999",
            display: "none"
        };
        f[i.offset.from] = u + "px";
        r.css(f);
        i.width !== "auto" && r.css("width", i.width + "px");
        n(i.ele).append(r);
        switch (i.align) {
            case "center":
                r.css({
                    left: "50%",
                    "margin-left": "-" + r.outerWidth() / 2 + "px"
                });
                break;
            case "left":
                r.css("left", "20px");
                break;
            default:
                r.css("right", "20px")
        }
        return r.fadeIn(), i.delay > 0 ? r.delay(i.delay).fadeOut(function() {
            return n(this).remove()
        }) : void 0
    };
    n.bootstrapGrowl.default_options = {
        ele: "body",
        type: null,
        offset: {
            from: "top",
            amount: 20
        },
        align: "right",
        width: 250,
        delay: 4e3,
        allow_dismiss: !0,
        stackup_spacing: 10
    }
}.call(this),
    function(n, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : n.anime = t()
    }(this, function() {
        var v = {
                duration: 1e3,
                delay: 0,
                loop: !1,
                autoplay: !0,
                direction: "normal",
                easing: "easeOutElastic",
                elasticity: 400,
                round: !1,
                begin: void 0,
                update: void 0,
                complete: void 0
            },
            ot = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
            s, n = {
                arr: function(n) {
                    return Array.isArray(n)
                },
                obj: function(n) {
                    return -1 < Object.prototype.toString.call(n).indexOf("Object")
                },
                svg: function(n) {
                    return n instanceof SVGElement
                },
                dom: function(t) {
                    return t.nodeType || n.svg(t)
                },
                num: function(n) {
                    return !isNaN(parseInt(n))
                },
                str: function(n) {
                    return "string" == typeof n
                },
                fnc: function(n) {
                    return "function" == typeof n
                },
                und: function(n) {
                    return "undefined" == typeof n
                },
                nul: function(n) {
                    return "null" == typeof n
                },
                hex: function(n) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
                },
                rgb: function(n) {
                    return /^rgb/.test(n)
                },
                hsl: function(n) {
                    return /^hsl/.test(n)
                },
                col: function(t) {
                    return n.hex(t) || n.rgb(t) || n.hsl(t)
                }
            },
            y = function() {
                var n = {},
                    t = {
                        Sine: function(n) {
                            return 1 - Math.cos(n * Math.PI / 2)
                        },
                        Circ: function(n) {
                            return 1 - Math.sqrt(1 - n * n)
                        },
                        Elastic: function(n, t) {
                            if (0 === n || 1 === n) return n;
                            var i = 1 - Math.min(t, 998) / 1e3,
                                r = n / 1 - 1;
                            return -(Math.pow(2, 10 * r) * Math.sin(2 * (r - i / (2 * Math.PI) * Math.asin(1)) * Math.PI / i))
                        },
                        Back: function(n) {
                            return n * n * (3 * n - 2)
                        },
                        Bounce: function(n) {
                            for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2)
                        }
                    };
                return ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function(n, i) {
                    t[n] = function(n) {
                        return Math.pow(n, i + 2)
                    }
                }), Object.keys(t).forEach(function(i) {
                    var r = t[i];
                    n["easeIn" + i] = r;
                    n["easeOut" + i] = function(n, t) {
                        return 1 - r(1 - n, t)
                    };
                    n["easeInOut" + i] = function(n, t) {
                        return .5 > n ? r(2 * n, t) / 2 : 1 - r(-2 * n + 2, t) / 2
                    };
                    n["easeOutIn" + i] = function(n, t) {
                        return .5 > n ? (1 - r(1 - 2 * n, t)) / 2 : (r(2 * n - 1, t) + 1) / 2
                    }
                }), n.linear = function(n) {
                    return n
                }, n
            }(),
            h = function(t) {
                return n.str(t) ? t : t + ""
            },
            p = function(n) {
                return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            },
            w = function(t) {
                if (n.col(t)) return !1;
                try {
                    return document.querySelectorAll(t)
                } catch (i) {
                    return !1
                }
            },
            c = function(t) {
                return t.reduce(function(t, i) {
                    return t.concat(n.arr(i) ? c(i) : i)
                }, [])
            },
            u = function(t) {
                return n.arr(t) ? t : (n.str(t) && (t = w(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
            },
            b = function(n, t) {
                return n.some(function(n) {
                    return n === t
                })
            },
            st = function(n, t) {
                var i = {};
                return n.forEach(function(n) {
                    var r = JSON.stringify(t.map(function(t) {
                        return n[t]
                    }));
                    i[r] = i[r] || [];
                    i[r].push(n)
                }), Object.keys(i).map(function(n) {
                    return i[n]
                })
            },
            k = function(n) {
                return n.filter(function(n, t, i) {
                    return i.indexOf(n) === t
                })
            },
            l = function(n) {
                var t = {};
                for (var i in n) t[i] = n[i];
                return t
            },
            f = function(t, i) {
                for (var r in i) t[r] = n.und(t[r]) ? i[r] : t[r];
                return t
            },
            ht = function(n) {
                var i, t;
                return n = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, t, i, r) {
                    return t + t + i + i + r + r
                }), t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), n = parseInt(t[1], 16), i = parseInt(t[2], 16), t = parseInt(t[3], 16), "rgb(" + n + "," + i + "," + t + ")"
            },
            ct = function(n) {
                n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n);
                var r = parseInt(n[1]) / 360,
                    i = parseInt(n[2]) / 100,
                    t = parseInt(n[3]) / 100;
                if (n = function(n, t, i) {
                        return 0 > i && (i += 1), 1 < i && --i, i < 1 / 6 ? n + 6 * (t - n) * i : .5 > i ? t : i < 2 / 3 ? n + (t - n) * (2 / 3 - i) * 6 : n
                    }, 0 == i) i = t = r = t;
                else var u = .5 > t ? t * (1 + i) : t + i - t * i,
                    f = 2 * t - u,
                    i = n(f, u, r + 1 / 3),
                    t = n(f, u, r),
                    r = n(f, u, r - 1 / 3);
                return "rgb(" + 255 * i + "," + 255 * t + "," + 255 * r + ")"
            },
            r = function(n) {
                return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(n)[2]
            },
            d = function(n, t, i) {
                return r(t) ? t : -1 < n.indexOf("translate") ? r(i) ? t + r(i) : t + "px" : -1 < n.indexOf("rotate") || -1 < n.indexOf("skew") ? t + "deg" : t
            },
            e = function(n, t) {
                if (t in n.style) return getComputedStyle(n).getPropertyValue(p(t)) || "0"
            },
            lt = function(n, t) {
                var u = -1 < t.indexOf("scale") ? 1 : 0,
                    i = n.style.transform;
                if (!i) return u;
                for (var o = /(\w+)\((.+?)\)/g, r = [], f = [], e = []; r = o.exec(i);) f.push(r[1]), e.push(r[2]);
                return i = e.filter(function(n, i) {
                    return f[i] === t
                }), i.length ? i[0] : u
            },
            g = function(t, i) {
                return n.dom(t) && b(ot, i) ? "transform" : n.dom(t) && (t.getAttribute(i) || n.svg(t) && t[i]) ? "attribute" : n.dom(t) && "transform" !== i && e(t, i) ? "css" : !n.nul(t[i]) && !n.und(t[i]) ? "object" : void 0
            },
            nt = function(n, t) {
                switch (g(n, t)) {
                    case "transform":
                        return lt(n, t);
                    case "css":
                        return e(n, t);
                    case "attribute":
                        return n.getAttribute(t)
                }
                return n[t] || 0
            },
            tt = function(t, i, u) {
                return n.col(i) ? (i = n.rgb(i) ? i : n.hex(i) ? ht(i) : n.hsl(i) ? ct(i) : void 0, i) : r(i) ? i : (t = r(t.to) ? r(t.to) : r(t.from), !t && u && (t = r(u)), t ? i + t : i)
            },
            it = function(n) {
                var t = /-?\d*\.?\d+/g;
                return {
                    original: n,
                    numbers: h(n).match(t) ? h(n).match(t).map(Number) : [0],
                    strings: h(n).split(t)
                }
            },
            at = function(n, t, i) {
                return t.reduce(function(t, r, u) {
                    return r = r ? r : i[u - 1], t + n[u - 1] + r
                })
            },
            vt = function(t) {
                return t = t ? c(n.arr(t) ? t.map(u) : u(t)) : [], t.map(function(n, t) {
                    return {
                        target: n,
                        id: t
                    }
                })
            },
            rt = function(n, t, i, r) {
                return "transform" === i ? (i = n + "(" + d(n, t.from, t.to) + ")", t = n + "(" + d(n, t.to) + ")") : (n = "css" === i ? e(r, n) : void 0, i = tt(t, t.from, n), t = tt(t, t.to, n)), {
                    from: it(i),
                    to: it(t)
                }
            },
            yt = function(i, r) {
                var f = [];
                return i.forEach(function(e, o) {
                    var s = e.target;
                    return r.forEach(function(r) {
                        var a = g(s, r.name),
                            c, h;
                        a && (c = r.name, h = r.value, h = u(n.fnc(h) ? h(s, o) : h), c = {
                            from: 1 < h.length ? h[0] : nt(s, c),
                            to: 1 < h.length ? h[1] : h[0]
                        }, h = l(r), h.animatables = e, h.type = a, h.from = rt(r.name, c, h.type, s).from, h.to = rt(r.name, c, h.type, s).to, h.round = n.col(c.from) || h.round ? 1 : 0, h.delay = (n.fnc(h.delay) ? h.delay(s, o, i.length) : h.delay) / t.speed, h.duration = (n.fnc(h.duration) ? h.duration(s, o, i.length) : h.duration) / t.speed, f.push(h))
                    })
                }), f
            },
            pt = function(n, t) {
                var i = yt(n, t);
                return st(i, ["name", "from", "to", "delay", "duration"]).map(function(n) {
                    var t = l(n[0]);
                    return t.animatables = n.map(function(n) {
                        return n.animatables
                    }), t.totalDuration = t.delay + t.duration, t
                })
            },
            a = function(n, t) {
                n.tweens.forEach(function(i) {
                    var r = i.from,
                        u = n.duration - (i.delay + i.duration);
                    i.from = i.to;
                    i.to = r;
                    t && (i.delay = u)
                });
                n.reversed = n.reversed ? !1 : !0
            },
            wt = function(n) {
                if (n.length) return Math.max.apply(Math, n.map(function(n) {
                    return n.totalDuration
                }))
            },
            ut = function(n) {
                var t = [],
                    i = [];
                return n.tweens.forEach(function(n) {
                    ("css" === n.type || "transform" === n.type) && (t.push("css" === n.type ? p(n.name) : "transform"), n.animatables.forEach(function(n) {
                        i.push(n.target)
                    }))
                }), {
                    properties: k(t).join(", "),
                    elements: k(i)
                }
            },
            bt = function(n) {
                var t = ut(n);
                t.elements.forEach(function(n) {
                    n.style.willChange = t.properties
                })
            },
            kt = function(n) {
                ut(n).elements.forEach(function(n) {
                    n.style.removeProperty("will-change")
                })
            },
            dt = function(n, t) {
                var f = n.path,
                    e = n.value * t,
                    i = function(i) {
                        return i = i || 0, f.getPointAtLength(1 < t ? n.value + i : e + i)
                    },
                    r = i(),
                    u = i(-1),
                    i = i(1);
                switch (n.name) {
                    case "translateX":
                        return r.x;
                    case "translateY":
                        return r.y;
                    case "rotate":
                        return 180 * Math.atan2(i.y - u.y, i.x - u.x) / Math.PI
                }
            },
            gt = function(n, t) {
                var i = Math.min(Math.max(t - n.delay, 0), n.duration) / n.duration,
                    r = n.to.numbers.map(function(t, r) {
                        var u = n.from.numbers[r],
                            f = y[n.easing](i, n.elasticity),
                            u = n.path ? dt(n, f) : u + f * (t - u);
                        return n.round ? Math.round(u * n.round) / n.round : u
                    });
                return at(r, n.to.strings, n.from.strings)
            },
            ft = function(n, t) {
                var i, u, r, f, h;
                for (n.currentTime = t, n.progress = t / n.duration * 100, u = 0; u < n.tweens.length; u++)
                    for (r = n.tweens[u], r.currentValue = gt(r, t), f = r.currentValue, h = 0; h < r.animatables.length; h++) {
                        var o = r.animatables[h],
                            c = o.id,
                            o = o.target,
                            l = r.name;
                        switch (r.type) {
                            case "css":
                                o.style[l] = f;
                                break;
                            case "attribute":
                                o.setAttribute(l, f);
                                break;
                            case "object":
                                o[l] = f;
                                break;
                            case "transform":
                                i || (i = {});
                                i[c] || (i[c] = []);
                                i[c].push(f)
                        }
                    }
                if (i)
                    for (u in s || (s = (e(document.body, "transform") ? "" : "-webkit-") + "transform"), i) n.animatables[u].target.style[s] = i[u].join(" ");
                n.settings.update && n.settings.update(n)
            },
            et = function(t) {
                var i = {},
                    o, u, r, e;
                i.animatables = vt(t.targets);
                i.settings = f(t, v);
                o = i.settings;
                u = [];
                for (r in t) v.hasOwnProperty(r) || "targets" === r || (e = n.obj(t[r]) ? l(t[r]) : {
                    value: t[r]
                }, e.name = r, u.push(f(e, o)));
                return i.properties = u, i.tweens = pt(i.animatables, i.properties), i.duration = wt(i.tweens) || t.duration, i.currentTime = 0, i.progress = 0, i.ended = !1, i
            },
            i = [],
            o = 0,
            ni = function() {
                var n = function() {
                        o = requestAnimationFrame(t)
                    },
                    t = function(t) {
                        if (i.length) {
                            for (var r = 0; r < i.length; r++) i[r].tick(t);
                            n()
                        } else cancelAnimationFrame(o), o = 0
                    };
                return n
            }(),
            t = function(t) {
                var r = et(t),
                    u = {};
                return r.tick = function(t) {
                    r.ended = !1;
                    u.start || (u.start = t);
                    u.current = Math.min(Math.max(u.last + t - u.start, 0), r.duration);
                    ft(r, u.current);
                    var i = r.settings;
                    i.begin && u.current >= i.delay && (i.begin(r), i.begin = void 0);
                    u.current >= r.duration && (i.loop ? (u.start = t, "alternate" === i.direction && a(r, !0), n.num(i.loop) && i.loop--) : (r.ended = !0, r.pause(), i.complete && i.complete(r)), u.last = 0)
                }, r.seek = function(n) {
                    ft(r, n / 100 * r.duration)
                }, r.pause = function() {
                    kt(r);
                    var n = i.indexOf(r); - 1 < n && i.splice(n, 1)
                }, r.play = function(n) {
                    r.pause();
                    n && (r = f(et(f(n, r.settings)), r));
                    u.start = 0;
                    u.last = r.ended ? 0 : r.currentTime;
                    n = r.settings;
                    "reverse" === n.direction && a(r);
                    "alternate" !== n.direction || n.loop || (n.loop = 1);
                    bt(r);
                    i.push(r);
                    o || ni()
                }, r.restart = function() {
                    r.reversed && a(r);
                    r.pause();
                    r.seek(0);
                    r.play()
                }, r.settings.autoplay && r.play(), r
            };
        return t.version = "1.1.1", t.speed = 1, t.list = i, t.remove = function(t) {
            var e, r, f;
            for (t = c(n.arr(t) ? t.map(u) : u(t)), e = i.length - 1; 0 <= e; e--)
                for (var h = i[e], o = h.tweens, s = o.length - 1; 0 <= s; s--)
                    for (r = o[s].animatables, f = r.length - 1; 0 <= f; f--) b(t, r[f].target) && (r.splice(f, 1), r.length || o.splice(s, 1), o.length || h.pause())
        }, t.easings = y, t.getValue = nt, t.path = function(t) {
            return t = n.str(t) ? w(t)[0] : t, {
                path: t,
                value: t.getTotalLength()
            }
        }, t.random = function(n, t) {
            return Math.floor(Math.random() * (t - n + 1)) + n
        }, t
    });
! function(n, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("scrollMonitor", [], t) : "object" == typeof exports ? exports.scrollMonitor = t() : n.scrollMonitor = t()
}(this, function() {
    return function(n) {
        function t(r) {
            if (i[r]) return i[r].exports;
            var u = i[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return n[r].call(u.exports, u, u.exports, t), u.loaded = !0, u.exports
        }
        var i = {};
        return t.m = n, t.c = i, t.p = "", t(0)
    }([function(n, t, i) {
        "use strict";
        var f = i(1),
            u = f.isInBrowser,
            e = i(2),
            r = new e(u ? document.body : null);
        r.setStateFromDOM(null);
        r.listenToDOM();
        u && (window.scrollMonitor = r);
        n.exports = r
    }, function(n, t) {
        "use strict";
        t.VISIBILITYCHANGE = "visibilityChange";
        t.ENTERVIEWPORT = "enterViewport";
        t.FULLYENTERVIEWPORT = "fullyEnterViewport";
        t.EXITVIEWPORT = "exitViewport";
        t.PARTIALLYEXITVIEWPORT = "partiallyExitViewport";
        t.LOCATIONCHANGE = "locationChange";
        t.STATECHANGE = "stateChange";
        t.eventTypes = [t.VISIBILITYCHANGE, t.ENTERVIEWPORT, t.FULLYENTERVIEWPORT, t.EXITVIEWPORT, t.PARTIALLYEXITVIEWPORT, t.LOCATIONCHANGE, t.STATECHANGE];
        t.isOnServer = "undefined" == typeof window;
        t.isInBrowser = !t.isOnServer;
        t.defaultOffsets = {
            top: 0,
            bottom: 0
        }
    }, function(n, t, i) {
        "use strict";

        function s(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        }

        function e(n) {
            return f ? 0 : n === document.body ? window.innerHeight || document.documentElement.clientHeight : n.clientHeight
        }

        function r(n) {
            return f ? 0 : n === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : n.scrollHeight
        }

        function o(n) {
            return f ? 0 : n === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : n.scrollTop
        }
        var u = i(1),
            f = u.isOnServer,
            h = u.isInBrowser,
            c = u.eventTypes,
            l = i(3),
            a = function() {
                function n(t, i) {
                    function a() {
                        if (u.viewportTop = o(t), u.viewportBottom = u.viewportTop + u.viewportHeight, u.documentHeight = r(t), u.documentHeight !== l) {
                            for (h = u.watchers.length; h--;) u.watchers[h].recalculateLocation();
                            l = u.documentHeight
                        }
                    }

                    function v() {
                        for (f = u.watchers.length; f--;) u.watchers[f].update();
                        for (f = u.watchers.length; f--;) u.watchers[f].triggerCallbacks()
                    }
                    var u, l, h, f;
                    s(this, n);
                    u = this;
                    this.item = t;
                    this.watchers = [];
                    this.viewportTop = null;
                    this.viewportBottom = null;
                    this.documentHeight = r(t);
                    this.viewportHeight = e(t);
                    this.DOMListener = function() {
                        n.prototype.DOMListener.apply(u, arguments)
                    };
                    this.eventTypes = c;
                    i && (this.containerWatcher = i.create(t));
                    this.update = function() {
                        a();
                        v()
                    };
                    this.recalculateLocations = function() {
                        this.documentHeight = 0;
                        this.update()
                    }
                }
                return n.prototype.listenToDOM = function() {
                    h && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener) : this.item.addEventListener("scroll", this.DOMListener), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function() {
                        window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener))
                    })
                }, n.prototype.destroy = function() {}, n.prototype.DOMListener = function(n) {
                    this.setStateFromDOM(n);
                    this.updateAndTriggerWatchers(n)
                }, n.prototype.setStateFromDOM = function(n) {
                    var t = o(this.item),
                        i = e(this.item),
                        u = r(this.item);
                    this.setState(t, i, u, n)
                }, n.prototype.setState = function(n, t, i, r) {
                    var f = t !== this.viewportHeight || i !== this.contentHeight,
                        u;
                    if (this.latestEvent = r, this.viewportTop = n, this.viewportHeight = t, this.viewportBottom = n + t, this.contentHeight = i, f)
                        for (u = this.watchers.length; u--;) this.watchers[u].recalculateLocation();
                    this.updateAndTriggerWatchers(r)
                }, n.prototype.updateAndTriggerWatchers = function(n) {
                    for (var t = this.watchers.length; t--;) this.watchers[t].update();
                    for (t = this.watchers.length; t--;) this.watchers[t].triggerCallbacks(n)
                }, n.prototype.createCustomContainer = function() {
                    return new n
                }, n.prototype.createContainer = function(t) {
                    "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);
                    var i = new n(t, this);
                    return i.setStateFromDOM(), i.listenToDOM(), i
                }, n.prototype.create = function(n, t) {
                    "string" == typeof n ? n = document.querySelector(n) : n && n.length > 0 && (n = n[0]);
                    var i = new l(this, n, t);
                    return this.watchers.push(i), i
                }, n.prototype.beget = function(n, t) {
                    return this.create(n, t)
                }, n
            }();
        n.exports = a
    }, function(n, t, i) {
        "use strict";

        function f(n, t, i) {
            function r(n, t) {
                if (0 !== n.length)
                    for (k = n.length; k--;) g = n[k], g.callback.call(d, t, d), g.isOne && n.splice(k, 1)
            }
            var d = this,
                v, nt, f, a, w, b, k, g;
            for (this.watchItem = t, this.container = n, this.offsets = i ? i === +i ? {
                    top: i,
                    bottom: i
                } : {
                    top: i.top || l.top,
                    bottom: i.bottom || l.bottom
                } : l, this.callbacks = {}, v = 0, nt = u.length; v < nt; v++) d.callbacks[u[v]] = [];
            this.locked = !1;
            this.triggerCallbacks = function(n) {
                switch (this.isInViewport && !f && r(this.callbacks[o], n), this.isFullyInViewport && !a && r(this.callbacks[s], n), this.isAboveViewport !== w && this.isBelowViewport !== b && (r(this.callbacks[e], n), a || this.isFullyInViewport || (r(this.callbacks[s], n), r(this.callbacks[c], n)), f || this.isInViewport || (r(this.callbacks[o], n), r(this.callbacks[h], n))), !this.isFullyInViewport && a && r(this.callbacks[c], n), !this.isInViewport && f && r(this.callbacks[h], n), this.isInViewport !== f && r(this.callbacks[e], n), !0) {
                    case f !== this.isInViewport:
                    case a !== this.isFullyInViewport:
                    case w !== this.isAboveViewport:
                    case b !== this.isBelowViewport:
                        r(this.callbacks[p], n)
                }
                f = this.isInViewport;
                a = this.isFullyInViewport;
                w = this.isAboveViewport;
                b = this.isBelowViewport
            };
            this.recalculateLocation = function() {
                var u, f, t, i, n, e;
                if (!this.locked) {
                    if (u = this.top, f = this.bottom, this.watchItem.nodeName) {
                        for (t = this.watchItem.style.display, "none" === t && (this.watchItem.style.display = ""), i = 0, n = this.container; n.containerWatcher;) i += n.containerWatcher.top - n.containerWatcher.container.viewportTop, n = n.containerWatcher.container;
                        e = this.watchItem.getBoundingClientRect();
                        this.top = e.top + this.container.viewportTop - i;
                        this.bottom = e.bottom + this.container.viewportTop - i;
                        "none" === t && (this.watchItem.style.display = t)
                    } else this.watchItem === +this.watchItem ? this.top = this.watchItem > 0 ? this.bottom = this.watchItem : this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                    this.top -= this.offsets.top;
                    this.bottom += this.offsets.bottom;
                    this.height = this.bottom - this.top;
                    void 0 === u && void 0 === f || this.top === u && this.bottom === f || r(this.callbacks[y], null)
                }
            };
            this.recalculateLocation();
            this.update();
            f = this.isInViewport;
            a = this.isFullyInViewport;
            w = this.isAboveViewport;
            b = this.isBelowViewport
        }
        var r = i(1),
            e = r.VISIBILITYCHANGE,
            o = r.ENTERVIEWPORT,
            s = r.FULLYENTERVIEWPORT,
            h = r.EXITVIEWPORT,
            c = r.PARTIALLYEXITVIEWPORT,
            y = r.LOCATIONCHANGE,
            p = r.STATECHANGE,
            u = r.eventTypes,
            l = r.defaultOffsets,
            v;
        f.prototype = {
            on: function(n, t, i) {
                switch (!0) {
                    case n === e && !this.isInViewport && this.isAboveViewport:
                    case n === o && this.isInViewport:
                    case n === s && this.isFullyInViewport:
                    case n === h && this.isAboveViewport && !this.isInViewport:
                    case n === c && this.isAboveViewport:
                        if (t.call(this, this.container.latestEvent, this), i) return
                }
                if (!this.callbacks[n]) throw new Error("Tried to add a scroll monitor listener of type " + n + ". Your options are: " + u.join(", "));
                this.callbacks[n].push({
                    callback: t,
                    isOne: i || !1
                })
            },
            off: function(n, t) {
                if (!this.callbacks[n]) throw new Error("Tried to remove a scroll monitor listener of type " + n + ". Your options are: " + u.join(", "));
                for (var r, i = 0; r = this.callbacks[n][i]; i++)
                    if (r.callback === t) {
                        this.callbacks[n].splice(i, 1);
                        break
                    }
            },
            one: function(n, t) {
                this.on(n, t, !0)
            },
            recalculateSize: function() {
                this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom;
                this.bottom = this.top + this.height
            },
            update: function() {
                this.isAboveViewport = this.top < this.container.viewportTop;
                this.isBelowViewport = this.bottom > this.container.viewportBottom;
                this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop;
                this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport
            },
            destroy: function() {
                var i = this.container.watchers.indexOf(this),
                    r = this,
                    n, t;
                for (this.container.watchers.splice(i, 1), n = 0, t = u.length; n < t; n++) r.callbacks[u[n]].length = 0
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        };
        for (var w = function(n) {
                return function(t, i) {
                    this.on.call(this, n, t, i)
                }
            }, a = 0, b = u.length; a < b; a++) v = u[a], f.prototype[v] = w(v);
        n.exports = f
    }])
}),
function(n) {
    "use strict";

    function i(n, t) {
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        return n
    }

    function r(n, t, i) {
        var r = document.createElement(n);
        return r.className = t || "", r.innerHTML = i || "", r
    }

    function t(n, t) {
        this.el = n;
        this.options = i({}, this.options);
        i(this.options, t);
        this._init()
    }
    t.prototype.options = {
        isContentHidden: !0,
        revealSettings: {
            direction: "lr",
            bgcolor: "#f0f0f0",
            duration: 500,
            easing: "easeInOutQuint",
            coverArea: 0,
            onCover: function() {
                return !1
            },
            onStart: function() {
                return !1
            },
            onComplete: function() {
                return !1
            }
        }
    };
    t.prototype._init = function() {
        this._layout()
    };
    t.prototype._layout = function() {
        var n = getComputedStyle(this.el).position;
        n !== "fixed" && n !== "absolute" && n !== "relative" && (this.el.style.position = "relative");
        this.content = r("div", "block-revealer__content", this.el.innerHTML);
        this.options.isContentHidden && (this.content.style.opacity = 0);
        this.revealer = r("div", "block-revealer__element");
        this.el.classList.add("block-revealer");
        this.el.innerHTML = "";
        this.el.appendChild(this.content);
        this.el.appendChild(this.revealer)
    };
    t.prototype._getTransformSettings = function(n) {
        var t, i, r;
        switch (n) {
            case "lr":
                t = "scale3d(0,1,1)";
                i = "0 50%";
                r = "100% 50%";
                break;
            case "rl":
                t = "scale3d(0,1,1)";
                i = "100% 50%";
                r = "0 50%";
                break;
            case "tb":
                t = "scale3d(1,0,1)";
                i = "50% 0";
                r = "50% 100%";
                break;
            case "bt":
                t = "scale3d(1,0,1)";
                i = "50% 100%";
                r = "50% 0";
                break;
            default:
                t = "scale3d(0,1,1)";
                i = "0 50%";
                r = "100% 50%"
        }
        return {
            val: t,
            origin: {
                initial: i,
                halfway: r
            }
        }
    };
    t.prototype.reveal = function(n) {
        var o;
        if (this.isAnimating) return !1;
        this.isAnimating = !0;
        var i = {
                duration: 500,
                easing: "easeInOutQuint",
                delay: 0,
                bgcolor: "#f0f0f0",
                direction: "lr",
                coverArea: 0
            },
            n = n || this.options.revealSettings,
            f = n.direction || i.direction,
            e = this._getTransformSettings(f);
        this.revealer.style.WebkitTransform = this.revealer.style.transform = e.val;
        this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = e.origin.initial;
        this.revealer.style.backgroundColor = n.bgcolor || i.bgcolor;
        this.revealer.style.opacity = 1;
        var t = this,
            r = {
                complete: function() {
                    if (t.isAnimating = !1, typeof n.onComplete == "function") n.onComplete(t.content, t.revealer)
                }
            },
            u = {
                delay: n.delay || i.delay,
                complete: function() {
                    if (t.revealer.style.WebkitTransformOrigin = t.revealer.style.transformOrigin = e.origin.halfway, typeof n.onCover == "function") n.onCover(t.content, t.revealer);
                    anime(r)
                }
            };
        if (u.targets = r.targets = this.revealer, u.duration = r.duration = n.duration || i.duration, u.easing = r.easing = n.easing || i.easing, o = n.coverArea || i.coverArea, f === "lr" || f === "rl" ? (u.scaleX = [0, 1], r.scaleX = [1, o / 100]) : (u.scaleY = [0, 1], r.scaleY = [1, o / 100]), typeof n.onStart == "function") n.onStart(t.content, t.revealer);
        anime(u)
    };
    n.RevealFx = t
}(window);
$(document).ready(function() {
        $(".is-arrow-down a").on("click", function(n) {
            return $(this).parents(".is-section").nextAll("div:not(.is-hidden)").html() && $("html,body").animate({
                scrollTop: $(this).parents(".is-section").nextAll("div:not(.is-hidden)").offset().top - parseInt($(".is-wrapper").css("padding-top"))
            }, 800), n.preventDefault(), n.stopImmediatePropagation(), !1
        });
        $(".is-wrapper > div:first-child").find(".is-scale-animated").addClass("is-appeared");
        $(".is-scale-animated").appear();
        $(".is-scale-animated").on("appear", function() {
            $(this).addClass("is-appeared")
        });
        $(".is-scale-animated").on("disappear", function() {
            $(this).removeClass("is-appeared")
        });
        $(".is-animated").each(function() {
            $(this).addClass("animated");
            $(this).addClass("fadeOut")
        });
        $(".is-section").appear();
        $(".is-section").each(function() {
            $(this).is(":appeared") && applyAnimationSection($(this))
        });
        $(window).scrollTop() == 0 && setTimeout(applyAnimationSection($(".is-section").first()), 2e3);
        $(".is-section").on("appear", function() {
            applyAnimationSection($(this))
        });
        $(".is-section").on("disappear", function() {
            removeAnimationSection($(this))
        });
        $(".is-container").appear();
        $(".is-container").each(function() {
            $(this).is(":appeared") && applyAnimation($(this))
        });
        $(window).scrollTop() == 0 && $(".is-section").first().find(".is-container").each(function() {
            setTimeout(applyAnimation($(this)), 2e3)
        });
        $(".is-container").on("appear", function() {
            applyAnimation($(this))
        });
        $(".is-container").on("disappear", function() {
            removeAnimation($(this))
        })
    }),
    function(n) {
        function e() {
            var t, o, u, e;
            for (f = !1, t = 0, o = r.length; t < o; t++) u = n(r[t]).filter(function() {
                return n(this).is(":appeared")
            }), u.trigger("appear", [u]), i[t] && (e = i[t].not(u), e.trigger("disappear", [e])), i[t] = u
        }

        function s(n) {
            r.push(n);
            i.push()
        }
        var r = [],
            u = !1,
            f = !1,
            o = {
                interval: 250,
                force_process: !1
            },
            t = n(window),
            i = [];
        n.expr.pseudos.appeared = function(i) {
            var r = n(i);
            if (!r.is(":visible")) return !1;
            var u = t.scrollLeft(),
                f = t.scrollTop(),
                e = r.offset(),
                o = e.left,
                s = e.top;
            return s + r.height() >= f && s - (r.data("appear-top-offset") || 0) <= f + t.height() - 200 && o + r.width() >= u && o - (r.data("appear-left-offset") || 0) <= u + t.width() ? !0 : !1
        };
        n.fn.extend({
            appear: function(t) {
                var i = n.extend({}, o, t || {}),
                    h = this.selector || this,
                    r;
                if (!u) {
                    r = function() {
                        f || (f = !0, setTimeout(e, i.interval))
                    };
                    n(window).on("scroll", r).on("resize", r);
                    u = !0
                }
                return i.force_process && setTimeout(e, i.interval), s(h), n(h)
            }
        });
        n.extend({
            force_appear: function() {
                return u ? (e(), !0) : !1
            }
        })
    }(function() {
        return typeof module != "undefined" ? require("jquery") : jQuery
    }());
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var f, u = this;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(t),
                appendDots: n(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<\/button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(n, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "<\/button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !1,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.hidden = "hidden";
            u.paused = !1;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(t);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(t).data("slick") || {};
            u.options = n.extend({}, u.defaults, f, r);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            "undefined" != typeof document.mozHidden ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange");
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.instanceUid = i++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0);
            u.checkResponsive(!0)
        }
        var i = 0;
        return t
    }();
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var u = this;
        if ("boolean" == typeof i) r = i, i = null;
        else if (0 > i || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({
            height: t
        }, n.options.speed))
    };
    t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this;
        r.animateHeight();
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                n = Math.ceil(n);
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.asNavFor = function(t) {
        var r = this,
            i = r.options.asNavFor;
        i && null !== i && (i = n(i).not(r.$slider));
        null !== i && "object" == typeof i && i.each(function() {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    };
    t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
        n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function() {
        var n = this;
        n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (n.currentSlide - 1 == 0 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
    };
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    };
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
            r += "<\/ul>";
            t.$dots = n(r).appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    };
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    };
    t.prototype.buildRows = function() {
        var t, i, r, f, c, u, e, n = this,
            o, s, h;
        if (f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 1) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; c > t; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.html(f);
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    };
    t.prototype.checkResponsive = function(t, i) {
        var f, u, e, r = this,
            o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if ("window" === r.respondTo ? e = h : "slider" === r.respondTo ? e = s : "min" === r.respondTo && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            null !== u ? null !== r.activeBreakpoint ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = u);
            t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    };
    t.prototype.changeSlide = function(t, i) {
        var f, e, o, r = this,
            u = n(t.target),
            s;
        switch (u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = 0 === f ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return
        }
    };
    t.prototype.checkNavigable = function(n) {
        var t, i, u = this,
            r;
        if (t = u.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break
                }
                i = t[r]
            }
        return n
    };
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (n("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).off("mouseenter.slick", n.proxy(t.setPaused, t, !0)).off("mouseleave.slick", n.proxy(t.setPaused, t, !1)));
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.$list.off("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.cleanUpRows = function() {
        var n, t = this;
        t.options.rows > 1 && (n = t.$slides.children().children(), n.removeAttr("style"), t.$slider.html(n))
    };
    t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            n(this).attr("style", n(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i])
    };
    t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function(n, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(n).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(n);
            t.call()
        }, i.options.speed))
    };
    t.prototype.fadeSlideOut = function(n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
        var t = this;
        null !== n && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var n = this;
        return n.currentSlide
    };
    t.prototype.getDotCount = function() {
        var n = this,
            t = 0,
            i = 0,
            r = 0;
        if (n.options.infinite === !0)
            for (; t < n.slideCount;) ++r, t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else if (n.options.centerMode === !0) r = n.slideCount;
        else
            for (; t < n.slideCount;) ++r, t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return r - 1
    };
    t.prototype.getLeft = function(n) {
        var f, r, i, t = this,
            u = 0;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(!0), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, u = r * t.options.slidesToShow * -1), t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1, u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, u = t.slideCount % t.options.slidesToScroll * r * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getOption = t.prototype.slickGetOption = function(n) {
        var t = this;
        return t.options[n]
    };
    t.prototype.getNavigableIndexes = function() {
        var i, n = this,
            t = 0,
            r = 0,
            u = [];
        for (n.options.infinite === !1 ? i = n.slideCount : (t = -1 * n.options.slidesToScroll, r = -1 * n.options.slidesToScroll, i = 2 * n.slideCount); i > t;) u.push(t), t = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    };
    t.prototype.getSlick = function() {
        return this
    };
    t.prototype.getSlideCount = function() {
        var u, i, r, t = this;
        return r = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(u, f) {
            if (f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft) return (i = f, !1)
        }), u = Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    };
    t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(n)
            }
        }, t)
    };
    t.prototype.init = function(t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots());
        t && i.$slider.trigger("init", [i]);
        i.options.accessibility === !0 && i.initADA()
    };
    t.prototype.initArrowEvents = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
            message: "previous"
        }, n.changeSlide), n.$nextArrow.on("click.slick", {
            message: "next"
        }, n.changeSlide))
    };
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide);
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.setPaused, t, !0)).on("mouseleave.slick", n.proxy(t.setPaused, t, !1))
    };
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        t.$list.on("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.on("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
        n.options.autoplay === !0 && n.autoPlay()
    };
    t.prototype.keyHandler = function(n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    };
    t.prototype.lazyLoad = function() {
        function f(t) {
            n("img[data-lazy]", t).each(function() {
                var t = n(this),
                    i = n(this).attr("data-lazy"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                };
                r.src = i
            })
        }
        var e, r, i, u, t = this;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
    };
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    };
    t.prototype.next = t.prototype.slickNext = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    t.prototype.orientationChange = function() {
        var n = this;
        n.checkResponsive();
        n.setPosition()
    };
    t.prototype.pause = t.prototype.slickPause = function() {
        var n = this;
        n.autoPlayClear();
        n.paused = !0
    };
    t.prototype.play = t.prototype.slickPlay = function() {
        var n = this;
        n.paused = !1;
        n.autoPlay()
    };
    t.prototype.postSlide = function(n) {
        var t = this;
        t.$slider.trigger("afterChange", [t, n]);
        t.animating = !1;
        t.setPosition();
        t.swipeLeft = null;
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay();
        t.options.accessibility === !0 && t.initADA()
    };
    t.prototype.prev = t.prototype.slickPrev = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "previous"
            }
        })
    };
    t.prototype.preventDefault = function(n) {
        n.preventDefault()
    };
    t.prototype.progressiveLazyLoad = function() {
        var r, t, i = this;
        r = n("img[data-lazy]", i.$slider).length;
        r > 0 && (t = n("img[data-lazy]", i.$slider).first(), t.attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad();
            i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }))
    };
    t.prototype.refresh = function(t) {
        var r, u, i = this;
        u = i.slideCount - i.options.slidesToShow;
        i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > u && (i.currentSlide = u));
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, {
            currentSlide: r
        });
        i.init();
        t || i.changeSlide({
            data: {
                message: "index",
                index: r
            }
        }, !1)
    };
    t.prototype.registerBreakpoints = function() {
        var u, f, i, t = this,
            r = t.options.responsive || null;
        if ("array" === n.type(r) && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (i = t.breakpoints.length - 1, f = r[u].breakpoint, r.hasOwnProperty(u)) {
                    for (; i >= 0;) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings
                }
            t.breakpoints.sort(function(n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    };
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.registerBreakpoints();
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.checkResponsive(!1, !0);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(0);
        t.setPosition();
        t.$slider.trigger("reInit", [t]);
        t.options.autoplay === !0 && t.focusHandler()
    };
    t.prototype.resize = function() {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = n(window).width();
            t.checkResponsive();
            t.unslicked || t.setPosition()
        }, 50))
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
        var r = this;
        return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, void r.reinit())
    };
    t.prototype.setCSS = function(n) {
        var r, u, t = this,
            i = {};
        t.options.rtl === !0 && (n = -n);
        r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function() {
        var n = this,
            t;
        n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({
            padding: "0px " + n.options.centerPadding
        }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), n.options.centerMode === !0 && n.$list.css({
            padding: n.options.centerPadding + " 0px"
        }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    };
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = t.slideWidth * r * -1;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    };
    t.prototype.setHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setOption = t.prototype.slickSetOption = function(t, i, r) {
        var f, e, u = this;
        if ("responsive" === t && "array" === n.type(i))
            for (e in i)
                if ("array" !== n.type(u.options.responsive)) u.options.responsive = [i[e]];
                else {
                    for (f = u.options.responsive.length - 1; f >= 0;) u.options.responsive[f].breakpoint === i[e].breakpoint && u.options.responsive.splice(f, 1), f--;
                    u.options.responsive.push(i[e])
                } else u.options[t] = i;
        r === !0 && (u.unload(), u.reinit())
    };
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n])
    };
    t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        n.options.fade && ("number" == typeof n.options.zIndex ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex);
        void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = n.options.useTransform && null !== n.animType && n.animType !== !1
    };
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        t.$slides.eq(n).addClass("slick-current");
        t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" === t.options.lazyLoad && t.lazyLoad()
    };
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.setPaused = function(n) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = n, n ? t.autoPlayClear() : t.autoPlay())
    };
    t.prototype.selectHandler = function(t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
    };
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, o, e, s = null,
            r = this;
        return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, s = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? void(r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? void(r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), o = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? (r.fadeSlideOut(o), r.fadeSlide(f, function() {
            r.postSlide(f)
        })) : r.postSlide(f), void r.animateHeight()) : void(i !== !0 ? r.animateSlide(s, function() {
            r.postSlide(f)
        }) : r.postSlide(f))))
    };
    t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    };
    t.prototype.swipeEnd = function() {
        var t, n = this;
        if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
            case "left":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 0;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "left"]);
                break;
            case "right":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 1;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "right"])
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
        }
    };
    t.prototype.swipeMove = function(n) {
        var f, e, r, u, i, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (f = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))), e = t.swipeDirection(), "vertical" !== e ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, t.options.infinite === !1 && (0 === t.currentSlide && "right" === e || t.currentSlide >= t.getDotCount() && "left" === e) && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u), t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : void t.setCSS(t.swipeLeft)) : void 0)
    };
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, void(t.dragging = !0))
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    t.prototype.unslick = function(n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy()
    };
    t.prototype.updateArrows = function() {
        var t, n = this;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    };
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    };
    t.prototype.visibility = function() {
        var n = this;
        document[n.hidden] ? (n.paused = !0, n.autoPlayClear()) : n.options.autoplay === !0 && (n.paused = !1, n.autoPlay())
    };
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        t.$slideTrack.attr("role", "listbox");
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            n(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        });
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            n(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar");
        t.activateADA()
    };
    t.prototype.activateADA = function() {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    };
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function() {
                t.isPlay && (r.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    };
    n.fn.slick = function() {
        for (var u, i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, n = 0; e > n; n++)
            if ("object" == typeof r || "undefined" == typeof r ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), "undefined" != typeof u) return u;
        return i
    }
});
/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
! function(n, t, i) {
    "use strict";

    function c(i) {
        var u, e;
        if (f = t.documentElement, y = t.body, nu(), r = this, i = i || {}, ct = i.constants || {}, i.easing)
            for (u in i.easing) st[u] = i.easing[u];
        return ui = i.edgeStrategy || "set", p = {
                beforerender: i.beforerender,
                render: i.render,
                keyframe: i.keyframe
            }, it = i.forceHeight !== !1, it && (fi = i.scale || 1), lt = i.mobileDeceleration || vr, ri = i.smoothScrolling !== !1, at = i.smoothScrollingDuration || pr, k = {
                targetTop: r.getScrollTop()
            }, a = (i.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || n.opera)
            })(), a ? (l = t.getElementById(i.skrollrBody || yr), l && lu(), ru(), w(f, [nt, pi], [ti])) : w(f, [nt, yi], [ti]), r.refresh(), sr(n, "resize orientationchange", function() {
                var n = f.clientWidth,
                    t = f.clientHeight;
                (t !== si || n !== oi) && (si = t, oi = n, pt = !0)
            }), e = tu(),
            function o() {
                eu();
                or = e(o)
            }(), r
    }
    var f, y, v = {
            get: function() {
                return r
            },
            init: function(n) {
                return r || new c(n)
            },
            VERSION: "0.6.29"
        },
        bt = Object.prototype.hasOwnProperty,
        e = n.Math,
        kt = n.getComputedStyle,
        ci = "touchstart",
        li = "touchmove",
        ai = "touchcancel",
        vi = "touchend",
        ft = "skrollable",
        dt = ft + "-before",
        gt = ft + "-between",
        ni = ft + "-after",
        nt = "skrollr",
        ti = "no-" + nt,
        yi = nt + "-desktop",
        pi = nt + "-mobile",
        wi = "linear",
        ar = 1e3,
        vr = .004,
        yr = "skrollr-body",
        pr = 200,
        wr = "start",
        bi = "end",
        ki = "center",
        di = "bottom",
        g = "___skrollable_id",
        ii = /^(?:input|textarea|button|select)$/i,
        br = /^\s+|\s+$/g,
        kr = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        dr = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        gr = /^(@?[a-z\-]+)\[(\w+)\]$/,
        gi = /-([a-z0-9_])/g,
        nr = function(n, t) {
            return t.toUpperCase()
        },
        tr = /[\-+]?[\d]*\.?[\d]+/g,
        ir = /\{\?\}/g,
        rr = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        ur = /[a-z\-]+-gradient/g,
        s = "",
        tt = "",
        nu = function() {
            var i = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/,
                t, n;
            if (kt) {
                t = kt(y, null);
                for (n in t)
                    if (s = n.match(i) || +n == n && t[n].match(i)) break;
                if (!s) return void(s = tt = "");
                s = s[0];
                "-" === s.slice(0, 1) ? (tt = s, s = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[s]) : tt = "-" + s.toLowerCase() + "-"
            }
        },
        tu = function() {
            var t = n.requestAnimationFrame || n[s.toLowerCase() + "RequestAnimationFrame"],
                i = ut();
            return (a || !t) && (t = function(t) {
                var r = ut() - i,
                    u = e.max(0, 1e3 / 60 - r);
                return n.setTimeout(function() {
                    i = ut();
                    t()
                }, u)
            }), t
        },
        iu = function() {
            var t = n.cancelAnimationFrame || n[s.toLowerCase() + "CancelAnimationFrame"];
            return (a || !t) && (t = function(t) {
                return n.clearTimeout(t)
            }), t
        },
        st = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(n) {
                return n
            },
            quadratic: function(n) {
                return n * n
            },
            cubic: function(n) {
                return n * n * n
            },
            swing: function(n) {
                return -e.cos(n * e.PI) / 2 + .5
            },
            sqrt: function(n) {
                return e.sqrt(n)
            },
            outCubic: function(n) {
                return e.pow(n - 1, 3) + 1
            },
            bounce: function(n) {
                var t;
                if (.5083 >= n) t = 3;
                else if (.8489 >= n) t = 9;
                else if (.96208 >= n) t = 27;
                else {
                    if (!(.99981 >= n)) return 1;
                    t = 91
                }
                return 1 - e.abs(3 * e.cos(n * t * 1.028) / t)
            }
        };
    c.prototype.refresh = function(n) {
        var o, a, b = !1,
            v, ot, e, c, f, nt, y, s, st, tt, it, l, p;
        for (n === i ? (b = !0, h = [], hi = 0, n = t.getElementsByTagName("*")) : n.length === i && (n = [n]), o = 0, a = n.length; a > o; o++) {
            var u = n[o],
                k = u,
                d = [],
                rt = ri,
                ut = ui,
                et = !1;
            if (b && g in u && delete u[g], u.attributes) {
                for (v = 0, ot = u.attributes.length; ot > v; v++)
                    if (e = u.attributes[v], "data-anchor-target" !== e.name) "data-smooth-scrolling" !== e.name ? "data-edge-strategy" !== e.name ? "data-emit-events" !== e.name ? (c = e.name.match(kr), null !== c && (f = {
                        props: e.value,
                        element: u,
                        eventType: e.name.replace(gi, nr)
                    }, d.push(f), nt = c[1], nt && (f.constant = nt.substr(1)), y = c[2], /p$/.test(y) ? (f.isPercentage = !0, f.offset = (0 | y.slice(0, -1)) / 100) : f.offset = 0 | y, s = c[3], st = c[4] || s, s && s !== wr && s !== bi ? (f.mode = "relative", f.anchors = [s, st]) : (f.mode = "absolute", s === bi ? f.isEnd = !0 : f.isPercentage || (f.offset = f.offset * fi)))) : et = !0 : ut = e.value : rt = "off" !== e.value;
                    else if (k = t.querySelector(e.value), null === k) throw 'Unable to find anchor target "' + e.value + '"';
                d.length && (!b && g in u ? (l = u[g], tt = h[l].styleAttr, it = h[l].classAttr) : (l = u[g] = hi++, tt = u.style.cssText, it = cr(u)), h[l] = {
                    element: u,
                    styleAttr: tt,
                    classAttr: it,
                    anchorTarget: k,
                    keyFrames: d,
                    smoothScrolling: rt,
                    edgeStrategy: ut,
                    emitEvents: et,
                    lastFrameIndex: -1
                }, w(u, [ft], []))
            }
        }
        for (hr(), o = 0, a = n.length; a > o; o++) p = h[n[o][g]], p !== i && (ou(p), hu(p));
        return r
    };
    c.prototype.relativeToAbsolute = function(n, t, i) {
        var o = f.clientHeight,
            e = n.getBoundingClientRect(),
            u = e.top,
            s = e.bottom - e.top;
        return t === di ? u -= o : t === ki && (u -= o / 2), i === di ? u += s : i === ki && (u += s / 2), u += r.getScrollTop(), u + .5 | 0
    };
    c.prototype.animateTo = function(n, t) {
        t = t || {};
        var f = ut(),
            e = r.getScrollTop(),
            o = t.duration === i ? ar : t.duration;
        return u = {
            startTop: e,
            topDiff: n - e,
            targetTop: n,
            duration: o,
            startTime: f,
            endTime: f + o,
            easing: st[t.easing || wi],
            done: t.done
        }, u.topDiff || (u.done && u.done.call(r, !1), u = i), r
    };
    c.prototype.stopAnimateTo = function() {
        u && u.done && u.done.call(r, !0);
        u = i
    };
    c.prototype.isAnimatingTo = function() {
        return !!u
    };
    c.prototype.isMobile = function() {
        return a
    };
    c.prototype.setScrollTop = function(t, i) {
        return rt = i === !0, a ? ot = e.min(e.max(t, 0), o) : n.scrollTo(0, t), r
    };
    c.prototype.getScrollTop = function() {
        return a ? ot : n.pageYOffset || f.scrollTop || y.scrollTop || 0
    };
    c.prototype.getMaxScrollTop = function() {
        return o
    };
    c.prototype.on = function(n, t) {
        return p[n] = t, r
    };
    c.prototype.off = function(n) {
        return delete p[n], r
    };
    c.prototype.destroy = function() {
        var e = iu(),
            n, t;
        for (e(or), vu(), w(f, [ti], [nt, yi, pi]), n = 0, t = h.length; t > n; n++) ht(h[n].element);
        f.style.overflow = y.style.overflow = "";
        f.style.height = y.style.height = "";
        l && v.setStyle(l, "transform", "none");
        r = i;
        l = i;
        p = i;
        it = i;
        o = 0;
        fi = 1;
        ct = i;
        lt = i;
        b = "down";
        d = -1;
        oi = 0;
        si = 0;
        pt = !1;
        u = i;
        ri = i;
        at = i;
        k = i;
        rt = i;
        hi = 0;
        ui = i;
        a = !1;
        ot = 0;
        et = i
    };
    var ru = function() {
            var s, p, w, u, h, l, a, v, d, c, b, k;
            sr(f, [ci, li, ai, vi].join(" "), function(n) {
                var y = n.changedTouches[0],
                    tt, g;
                for (u = n.target; 3 === u.nodeType;) u = u.parentNode;
                switch (h = y.clientY, l = y.clientX, c = n.timeStamp, ii.test(u.tagName) || n.preventDefault(), n.type) {
                    case ci:
                        s && s.blur();
                        r.stopAnimateTo();
                        s = u;
                        p = a = h;
                        w = l;
                        d = c;
                        break;
                    case li:
                        ii.test(u.tagName) && t.activeElement !== u && n.preventDefault();
                        v = h - a;
                        k = c - b;
                        r.setScrollTop(ot - v, !0);
                        a = h;
                        b = c;
                        break;
                    default:
                    case ai:
                    case vi:
                        var ut = p - h,
                            ft = w - l,
                            et = ft * ft + ut * ut;
                        if (49 > et) {
                            ii.test(s.tagName) || (s.focus(), tt = t.createEvent("MouseEvents"), tt.initMouseEvent("click", !0, !0, n.view, 1, y.screenX, y.screenY, y.clientX, y.clientY, n.ctrlKey, n.altKey, n.shiftKey, n.metaKey, 0, null), s.dispatchEvent(tt));
                            return
                        }
                        s = i;
                        g = v / k;
                        g = e.max(e.min(g, 3), -3);
                        var nt = e.abs(g / lt),
                            it = g * nt + .5 * lt * nt * nt,
                            f = r.getScrollTop() - it,
                            rt = 0;
                        f > o ? (rt = (o - f) / it, f = o) : 0 > f && (rt = -f / it, f = 0);
                        nt *= 1 - rt;
                        r.animateTo(f + .5 | 0, {
                            easing: "outCubic",
                            duration: nt
                        })
                }
            });
            n.scrollTo(0, 0);
            f.style.overflow = y.style.overflow = "hidden"
        },
        uu = function() {
            for (var u, y, p, s, t, l, n, c, v, b = f.clientHeight, w = yu(), i = 0, a = h.length; a > i; i++)
                for (u = h[i], y = u.element, p = u.anchorTarget, s = u.keyFrames, t = 0, l = s.length; l > t; t++) n = s[t], c = n.offset, v = w[n.constant] || 0, n.frame = c, n.isPercentage && (c *= b, n.frame = c), "relative" === n.mode && (ht(y), n.frame = r.relativeToAbsolute(p, n.anchors[0], n.anchors[1]) - c, ht(y, !0)), n.frame += v, it && !n.isEnd && n.frame > o && (o = n.frame);
            for (o = e.max(o, pu()), i = 0, a = h.length; a > i; i++) {
                for (u = h[i], s = u.keyFrames, t = 0, l = s.length; l > t; t++) n = s[t], v = w[n.constant] || 0, n.isEnd && (n.frame = o - n.offset + v);
                u.keyFrames.sort(wu)
            }
        },
        fu = function(n, t) {
            for (var y, f, s, p, k, a = 0, rt = h.length; rt > a; a++) {
                var i, e, r = h[a],
                    u = r.element,
                    c = r.smoothScrolling ? n : t,
                    o = r.keyFrames,
                    d = o.length,
                    g = o[0],
                    nt = o[o.length - 1],
                    l = c < g.frame,
                    ut = c > nt.frame,
                    et = l ? g : nt,
                    tt = r.emitEvents,
                    it = r.lastFrameIndex;
                if (l || ut) {
                    if (l && -1 === r.edge || ut && 1 === r.edge) continue;
                    switch (l ? (w(u, [dt], [ni, gt]), tt && it > -1 && (vt(u, g.eventType, b), r.lastFrameIndex = -1)) : (w(u, [ni], [dt, gt]), tt && d > it && (vt(u, nt.eventType, b), r.lastFrameIndex = d)), r.edge = l ? -1 : 1, r.edgeStrategy) {
                        case "reset":
                            ht(u);
                            continue;
                        case "ease":
                            c = et.frame;
                            break;
                        default:
                        case "set":
                            y = et.props;
                            for (i in y) bt.call(y, i) && (e = er(y[i].value), 0 === i.indexOf("@") ? u.setAttribute(i.substr(1), e) : v.setStyle(u, i, e));
                            continue
                    }
                } else 0 !== r.edge && (w(u, [ft, gt], [dt, ni]), r.edge = 0);
                for (f = 0; d - 1 > f; f++)
                    if (c >= o[f].frame && c <= o[f + 1].frame) {
                        s = o[f];
                        p = o[f + 1];
                        for (i in s.props) bt.call(s.props, i) && (k = (c - s.frame) / (p.frame - s.frame), k = s.props[i].easing(k), e = cu(s.props[i].value, p.props[i].value, k), e = er(e), 0 === i.indexOf("@") ? u.setAttribute(i.substr(1), e) : v.setStyle(u, i, e));
                        tt && it !== f && ("down" === b ? vt(u, s.eventType, b) : vt(u, p.eventType, b), r.lastFrameIndex = f);
                        break
                    }
            }
        },
        eu = function() {
            var e, f, n, t, h, s, c;
            pt && (pt = !1, hr());
            n = r.getScrollTop();
            t = ut();
            u ? (t >= u.endTime ? (n = u.targetTop, e = u.done, u = i) : (f = u.easing((t - u.startTime) / u.duration), n = u.startTop + f * u.topDiff | 0), r.setScrollTop(n, !0)) : rt || (h = k.targetTop - n, h && (k = {
                startTop: d,
                topDiff: n - d,
                targetTop: n,
                startTime: ei,
                endTime: ei + at
            }), t <= k.endTime && (f = st.sqrt((t - k.startTime) / at), n = k.startTop + f * k.topDiff | 0));
            (rt || d !== n) && (b = n > d ? "down" : d > n ? "up" : b, rt = !1, s = {
                curTop: n,
                lastTop: d,
                maxTop: o,
                direction: b
            }, c = p.beforerender && p.beforerender.call(r, s), c !== !1 && (fu(n, r.getScrollTop()), a && l && v.setStyle(l, "transform", "translate(0, " + -ot + "px) " + et), d = n, p.render && p.render.call(r, s)), e && e.call(r, !1));
            ei = t
        },
        ou = function(n) {
            for (var t, i, u, f, e, o, r = 0, s = n.keyFrames.length; s > r; r++) {
                for (e = n.keyFrames[r], o = {}; null !== (f = dr.exec(e.props));) u = f[1], i = f[2], t = u.match(gr), null !== t ? (u = t[1], t = t[2]) : t = wi, i = i.indexOf("!") ? su(i) : [i.slice(1)], o[u] = {
                    value: i,
                    easing: st[t]
                };
                e.props = o
            }
        },
        su = function(n) {
            var t = [];
            return rr.lastIndex = 0, n = n.replace(rr, function(n) {
                return n.replace(tr, function(n) {
                    return n / 255 * 100 + "%"
                })
            }), tt && (ur.lastIndex = 0, n = n.replace(ur, function(n) {
                return tt + n
            })), n = n.replace(tr, function(n) {
                return t.push(+n), "{?}"
            }), t.unshift(n), t
        },
        hu = function(n) {
            for (var i = {}, t = 0, r = n.keyFrames.length; r > t; t++) fr(n.keyFrames[t], i);
            for (i = {}, t = n.keyFrames.length - 1; t >= 0; t--) fr(n.keyFrames[t], i)
        },
        fr = function(n, t) {
            for (var i in t) bt.call(n.props, i) || (n.props[i] = t[i]);
            for (i in n.props) t[i] = n.props[i]
        },
        cu = function(n, t, i) {
            var r, f = n.length,
                u;
            if (f !== t.length) throw "Can't interpolate between \"" + n[0] + '" and "' + t[0] + '"';
            for (u = [n[0]], r = 1; f > r; r++) u[r] = n[r] + (t[r] - n[r]) * i;
            return u
        },
        er = function(n) {
            var t = 1;
            return ir.lastIndex = 0, n[0].replace(ir, function() {
                return n[t++]
            })
        },
        ht = function(n, t) {
            n = [].concat(n);
            for (var i, r, u = 0, f = n.length; f > u; u++) r = n[u], i = h[r[g]], i && (t ? (r.style.cssText = i.dirtyStyleAttr, w(r, i.dirtyClassAttr)) : (i.dirtyStyleAttr = r.style.cssText, i.dirtyClassAttr = cr(r), r.style.cssText = i.styleAttr, w(r, i.classAttr)))
        },
        lu = function() {
            et = "translateZ(0)";
            v.setStyle(l, "transform", et);
            var n = kt(l),
                t = n.getPropertyValue("transform"),
                i = n.getPropertyValue(tt + "transform"),
                r = t && "none" !== t || i && "none" !== i;
            r || (et = "")
        };
    v.setStyle = function(n, t, i) {
        var r = n.style;
        if (t = t.replace(gi, nr).replace("-", ""), "zIndex" === t) r[t] = isNaN(i) ? i : "" + (0 | i);
        else if ("float" === t) r.styleFloat = r.cssFloat = i;
        else try {
            s && (r[s + t.slice(0, 1).toUpperCase() + t.slice(1)] = i);
            r[t] = i
        } catch (u) {}
    };
    var r, h, l, p, it, ct, lt, u, ri, at, k, rt, ui, et, or, sr = v.addEvent = function(t, i, r) {
            var o = function(t) {
                    return t = t || n.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                        t.returnValue = !1;
                        t.defaultPrevented = !0
                    }), r.call(this, t)
                },
                u, f, e;
            for (i = i.split(" "), f = 0, e = i.length; e > f; f++) u = i[f], t.addEventListener ? t.addEventListener(u, r, !1) : t.attachEvent("on" + u, o), wt.push({
                element: t,
                name: u,
                listener: r
            })
        },
        au = v.removeEvent = function(n, t, i) {
            t = t.split(" ");
            for (var r = 0, u = t.length; u > r; r++) n.removeEventListener ? n.removeEventListener(t[r], i, !1) : n.detachEvent("on" + t[r], i)
        },
        vu = function() {
            for (var n, t = 0, i = wt.length; i > t; t++) n = wt[t], au(n.element, n.name, n.listener);
            wt = []
        },
        vt = function(n, t, i) {
            p.keyframe && p.keyframe.call(r, n, t, i)
        },
        hr = function() {
            var n = r.getScrollTop();
            o = 0;
            it && !a && (y.style.height = "");
            uu();
            it && !a && (y.style.height = o + f.clientHeight + "px");
            a ? r.setScrollTop(e.min(r.getScrollTop(), o)) : r.setScrollTop(n, !0);
            rt = !0
        },
        yu = function() {
            var t, n, u = f.clientHeight,
                i = {};
            for (t in ct) n = ct[t], "function" == typeof n ? n = n.call(r) : /p$/.test(n) && (n = n.slice(0, -1) / 100 * u), i[t] = n;
            return i
        },
        pu = function() {
            var n, t = 0;
            return l && (t = e.max(l.offsetHeight, l.scrollHeight)), n = e.max(t, y.scrollHeight, y.offsetHeight, f.scrollHeight, f.offsetHeight, f.clientHeight), n - f.clientHeight
        },
        cr = function(t) {
            var i = "className";
            return n.SVGElement && t instanceof n.SVGElement && (t = t[i], i = "baseVal"), t[i]
        },
        w = function(t, r, u) {
            var e = "className",
                o, h;
            if (n.SVGElement && t instanceof n.SVGElement && (t = t[e], e = "baseVal"), u === i) return void(t[e] = r);
            for (var f = t[e], s = 0, c = u.length; c > s; s++) f = yt(f).replace(yt(u[s]), " ");
            for (f = lr(f), o = 0, h = r.length; h > o; o++) - 1 === yt(f).indexOf(yt(r[o])) && (f += " " + r[o]);
            t[e] = lr(f)
        },
        lr = function(n) {
            return n.replace(br, "")
        },
        yt = function(n) {
            return " " + n + " "
        },
        ut = Date.now || function() {
            return +new Date
        },
        wu = function(n, t) {
            return n.frame - t.frame
        },
        o = 0,
        fi = 1,
        b = "down",
        d = -1,
        ei = ut(),
        oi = 0,
        si = 0,
        pt = !1,
        hi = 0,
        a = !1,
        ot = 0,
        wt = [];
    "function" == typeof define && define.amd ? define([], function() {
        return v
    }) : "undefined" != typeof module && module.exports ? module.exports = v : n.skrollr = v
}(window, document);
setTimeout(function() {
    skrollr.init({
        forceHeight: !1,
        mobileCheck: function() {
            return !1
        },
        smoothScrolling: !0,
        smoothScrollingDuration: 1500
    }).refresh()
}, 100);
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.AOS = t()
}(this, function() {
    "use strict";

    function gt(n, t, i) {
        function b(t) {
            var i = e,
                r = o;
            return e = o = void 0, c = t, h = n.apply(r, i)
        }

        function g(n) {
            var i = n - u;
            return void 0 === u || i >= t || i < 0 || y && n - c >= a
        }

        function p() {
            var n = s();
            if (g(n)) return nt(n);
            r = setTimeout(p, function(n) {
                var i = t - (n - u);
                return y ? dt(i, a - (n - c)) : i
            }(n))
        }

        function nt(n) {
            return r = void 0, w && e ? b(n) : (e = o = void 0, h)
        }

        function k() {
            var n = s(),
                i = g(n);
            if (e = arguments, o = this, u = n, i) {
                if (void 0 === r) return function(n) {
                    return c = n, r = setTimeout(p, t), d ? b(n) : h
                }(u);
                if (y) return r = setTimeout(p, t), b(u)
            }
            return void 0 === r && (r = setTimeout(p, t)), h
        }
        var e, o, a, h, r, u, c = 0,
            d = !1,
            y = !1,
            w = !0;
        if ("function" != typeof n) throw new TypeError(l);
        return t = v(t) || 0, f(i) && (d = !!i.leading, a = (y = "maxWait" in i) ? kt(v(i.maxWait) || 0, t) : a, w = "trailing" in i ? !!i.trailing : w), k.cancel = function() {
            void 0 !== r && clearTimeout(r);
            c = 0;
            e = u = o = r = void 0
        }, k.flush = function() {
            return void 0 === r ? h : nt(s())
        }, k
    }

    function f(n) {
        var t = typeof n;
        return !!n && ("object" == t || "function" == t)
    }

    function v(n) {
        var t, i;
        return "number" == typeof n ? n : function(n) {
            return "symbol" == typeof n || function(n) {
                return !!n && "object" == typeof n
            }(n) && bt.call(n) == st
        }(n) ? a : (f(n) && (t = "function" == typeof n.valueOf ? n.valueOf() : n, n = f(t) ? t + "" : t), "string" != typeof n) ? 0 === n ? n : +n : (n = n.replace(ht, ""), i = lt.test(n), i || at.test(n) ? vt(n.slice(2), i ? 2 : 8) : ct.test(n) ? a : +n)
    }

    function c(n) {
        var t = typeof n;
        return !!n && ("object" == t || "function" == t)
    }

    function p(n) {
        var t, i;
        return "number" == typeof n ? n : function(n) {
            return "symbol" == typeof n || function(n) {
                return !!n && "object" == typeof n
            }(n) && li.call(n) == ii
        }(n) ? y : (c(n) && (t = "function" == typeof n.valueOf ? n.valueOf() : n, n = c(t) ? t + "" : t), "string" != typeof n) ? 0 === n ? n : +n : (n = n.replace(ri, ""), i = fi.test(n), i || ei.test(n) ? oi(n.slice(2), i ? 2 : 8) : ui.test(n) ? y : +n)
    }

    function yi(n) {
        n && n.forEach(function(n) {
            var t = Array.prototype.slice.call(n.addedNodes),
                i = Array.prototype.slice.call(n.removedNodes);
            if (function n(t) {
                    for (var i = void 0, r = void 0, i = 0; i < t.length; i += 1)
                        if ((r = t[i]).dataset && r.dataset.aos || r.children && n(r.children)) return !0;
                    return !1
                }(t.concat(i))) return b()
        })
    }

    function k() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    }

    function g() {
        return navigator.userAgent || navigator.vendor || window.opera || ""
    }
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        l = "Expected a function",
        a = NaN,
        st = "[object Symbol]",
        ht = /^\s+|\s+$/g,
        ct = /^[-+]0x[0-9a-f]+$/i,
        lt = /^0b[01]+$/i,
        at = /^0o[0-7]+$/i,
        vt = parseInt,
        yt = "object" == typeof t && t && t.Object === Object && t,
        pt = "object" == typeof self && self && self.Object === Object && self,
        wt = yt || pt || Function("return this")(),
        bt = Object.prototype.toString,
        kt = Math.max,
        dt = Math.min,
        s = function() {
            return wt.Date.now()
        },
        ni = function(n, t, i) {
            var r = !0,
                u = !0;
            if ("function" != typeof n) throw new TypeError(l);
            return f(i) && (r = "leading" in i ? !!i.leading : r, u = "trailing" in i ? !!i.trailing : u), gt(n, t, {
                leading: r,
                maxWait: t,
                trailing: u
            })
        },
        ti = "Expected a function",
        y = NaN,
        ii = "[object Symbol]",
        ri = /^\s+|\s+$/g,
        ui = /^[-+]0x[0-9a-f]+$/i,
        fi = /^0b[01]+$/i,
        ei = /^0o[0-7]+$/i,
        oi = parseInt,
        si = "object" == typeof t && t && t.Object === Object && t,
        hi = "object" == typeof self && self && self.Object === Object && self,
        ci = si || hi || Function("return this")(),
        li = Object.prototype.toString,
        ai = Math.max,
        vi = Math.min,
        h = function() {
            return ci.Date.now()
        },
        w = function(n, t, i) {
            function w(t) {
                var i = f,
                    r = e;
                return f = e = void 0, s = t, o = n.apply(r, i)
            }

            function d(n) {
                var i = n - u;
                return void 0 === u || i >= t || i < 0 || a && n - s >= l
            }

            function v() {
                var n = h();
                if (d(n)) return g(n);
                r = setTimeout(v, function(n) {
                    var i = t - (n - u);
                    return a ? vi(i, l - (n - s)) : i
                }(n))
            }

            function g(n) {
                return r = void 0, y && f ? w(n) : (f = e = void 0, o)
            }

            function b() {
                var n = h(),
                    i = d(n);
                if (f = arguments, e = this, u = n, i) {
                    if (void 0 === r) return function(n) {
                        return s = n, r = setTimeout(v, t), k ? w(n) : o
                    }(u);
                    if (a) return r = setTimeout(v, t), w(u)
                }
                return void 0 === r && (r = setTimeout(v, t)), o
            }
            var f, e, l, o, r, u, s = 0,
                k = !1,
                a = !1,
                y = !0;
            if ("function" != typeof n) throw new TypeError(ti);
            return t = p(t) || 0, c(i) && (k = !!i.leading, l = (a = "maxWait" in i) ? ai(p(i.maxWait) || 0, t) : l, y = "trailing" in i ? !!i.trailing : y), b.cancel = function() {
                void 0 !== r && clearTimeout(r);
                s = 0;
                f = u = e = r = void 0
            }, b.flush = function() {
                return void 0 === r ? o : g(h())
            }, b
        },
        b = function() {},
        d = {
            isSupported: function() {
                return !!k()
            },
            ready: function(n, t) {
                var i = window.document,
                    r = new(k())(yi);
                b = t;
                r.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        },
        pi = function(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        wi = function() {
            function n(n, t) {
                for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
            }
            return function(t, i, r) {
                return i && n(t.prototype, i), r && n(t, r), t
            }
        }(),
        bi = Object.assign || function(n) {
            for (var i, r, t = 1; t < arguments.length; t++) {
                i = arguments[t];
                for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
            }
            return n
        },
        ki = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        di = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        gi = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        nr = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        e = new(function() {
            function n() {
                pi(this, n)
            }
            return wi(n, [{
                key: "phone",
                value: function() {
                    var n = g();
                    return !(!ki.test(n) && !di.test(n.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var n = g();
                    return !(!gi.test(n) && !nr.test(n.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }, {
                key: "ie11",
                value: function() {
                    return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
                }
            }]), n
        }()),
        o = function(n, t) {
            var i = void 0;
            return e.ie11() ? (i = document.createEvent("CustomEvent")).initCustomEvent(n, !0, !0, {
                detail: t
            }) : i = new CustomEvent(n, {
                detail: t
            }), document.dispatchEvent(i)
        },
        nt = function(n) {
            return n.forEach(function(n) {
                return function(n, t) {
                    var r = n.options,
                        u = n.position,
                        i = n.node,
                        f = (n.data, function() {
                            n.animated && (function(n, t) {
                                t && t.forEach(function(t) {
                                    return n.classList.remove(t)
                                })
                            }(i, r.animatedClassNames), o("aos:out", i), n.options.id && o("aos:in:" + n.options.id, i), n.animated = !1)
                        });
                    r.mirror && t >= u.out && !r.once ? f() : t >= u.in ? n.animated || (function(n, t) {
                        t && t.forEach(function(t) {
                            return n.classList.add(t)
                        })
                    }(i, r.animatedClassNames), o("aos:in", i), n.options.id && o("aos:in:" + n.options.id, i), n.animated = !0) : n.animated && !r.once && f()
                }(n, window.pageYOffset)
            })
        },
        tt = function(n) {
            for (var t = 0, i = 0; n && !isNaN(n.offsetLeft) && !isNaN(n.offsetTop);) t += n.offsetLeft - ("BODY" != n.tagName ? n.scrollLeft : 0), i += n.offsetTop - ("BODY" != n.tagName ? n.scrollTop : 0), n = n.offsetParent;
            return {
                top: i,
                left: t
            }
        },
        i = function(n, t, i) {
            var r = n.getAttribute("data-aos-" + t);
            if (void 0 !== r) {
                if ("true" === r) return !0;
                if ("false" === r) return !1
            }
            return r || i
        },
        tr = function(n, t) {
            return n.forEach(function(n) {
                var r = i(n.node, "mirror", t.mirror),
                    f = i(n.node, "once", t.once),
                    e = i(n.node, "id"),
                    u = t.useClassNames && n.node.getAttribute("data-aos"),
                    o = [t.animatedClassName].concat(u ? u.split(" ") : []).filter(function(n) {
                        return "string" == typeof n
                    });
                t.initClassName && n.node.classList.add(t.initClassName);
                n.position = {
                    "in": function(n, t, r) {
                        var e = window.innerHeight,
                            o = i(n, "anchor"),
                            s = i(n, "anchor-placement"),
                            h = Number(i(n, "offset", s ? 0 : t)),
                            c = s || r,
                            f = n,
                            u;
                        o && document.querySelectorAll(o) && (f = document.querySelectorAll(o)[0]);
                        u = tt(f).top - e;
                        switch (c) {
                            case "center-bottom":
                                u += f.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                u += f.offsetHeight;
                                break;
                            case "top-center":
                                u += e / 2;
                                break;
                            case "center-center":
                                u += e / 2 + f.offsetHeight / 2;
                                break;
                            case "bottom-center":
                                u += e / 2 + f.offsetHeight;
                                break;
                            case "top-top":
                                u += e;
                                break;
                            case "bottom-top":
                                u += e + f.offsetHeight;
                                break;
                            case "center-top":
                                u += e + f.offsetHeight / 2
                        }
                        return u + h
                    }(n.node, t.offset, t.anchorPlacement),
                    out: r && function(n, t) {
                        window.innerHeight;
                        var r = i(n, "anchor"),
                            f = i(n, "offset", t),
                            u = n;
                        return r && document.querySelectorAll(r) && (u = document.querySelectorAll(r)[0]), tt(u).top + u.offsetHeight - f
                    }(n.node, t.offset)
                };
                n.options = {
                    once: f,
                    mirror: r,
                    animatedClassNames: o,
                    id: e
                }
            }), n
        },
        it = function() {
            var n = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(n, function(n) {
                return {
                    node: n
                }
            })
        },
        r = [],
        rt = !1,
        n = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50
        },
        ut = function() {
            return document.all && !window.atob
        },
        u = function() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (rt = !0);
            rt && (r = tr(r, n), nt(r), window.addEventListener("scroll", ni(function() {
                nt(r, n.once)
            }, n.throttleDelay)))
        },
        ft = function() {
            if (r = it(), ot(n.disable) || ut()) return et();
            u()
        },
        et = function() {
            r.forEach(function(t) {
                t.node.removeAttribute("data-aos");
                t.node.removeAttribute("data-aos-easing");
                t.node.removeAttribute("data-aos-duration");
                t.node.removeAttribute("data-aos-delay");
                n.initClassName && t.node.classList.remove(n.initClassName);
                n.animatedClassName && t.node.classList.remove(n.animatedClassName)
            })
        },
        ot = function(n) {
            return !0 === n || "mobile" === n && e.mobile() || "phone" === n && e.phone() || "tablet" === n && e.tablet() || "function" == typeof n && !0 === n()
        };
    return {
        init: function(t) {
            return n = bi(n, t), r = it(), n.disableMutationObserver || d.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), n.disableMutationObserver = !0), n.disableMutationObserver || d.ready("[data-aos]", ft), ot(n.disable) || ut() ? et() : (document.querySelector("body").setAttribute("data-aos-easing", n.easing), document.querySelector("body").setAttribute("data-aos-duration", n.duration), document.querySelector("body").setAttribute("data-aos-delay", n.delay), -1 === ["DOMContentLoaded", "load"].indexOf(n.startEvent) ? document.addEventListener(n.startEvent, function() {
                u(!0)
            }) : window.addEventListener("load", function() {
                u(!0)
            }), "DOMContentLoaded" === n.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && u(!0), window.addEventListener("resize", w(u, n.debounceDelay, !0)), window.addEventListener("orientationchange", w(u, n.debounceDelay, !0)), r)
        },
        refresh: u,
        refreshHard: ft
    }
});
AOS.init({
    duration: 1200
});
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(i, r) {
            var f, u = this;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(i),
                appendDots: n(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous<\/button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return n('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.focussed = !1;
            u.interrupted = !1;
            u.hidden = "hidden";
            u.paused = !0;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(i);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(i).data("slick") || {};
            u.options = n.extend({}, u.defaults, r, f);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            void 0 !== document.mozHidden ? (u.hidden = "mozHidden", u.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (u.hidden = "webkitHidden", u.visibilityChange = "webkitvisibilitychange");
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.instanceUid = t++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    };
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var u = this;
        if ("boolean" == typeof i) r = i, i = null;
        else if (i < 0 || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : !0 === r ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && !0 === n.options.adaptiveHeight && !1 === n.options.vertical && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.animate({
            height: t
        }, n.options.speed))
    };
    t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this;
        r.animateHeight();
        !0 === r.options.rtl && !1 === r.options.vertical && (t = -t);
        !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                n = Math.ceil(n);
                !1 === r.options.vertical ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(), t = Math.ceil(t), u[r.animType] = !1 === r.options.vertical ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.getNavTarget = function() {
        var i = this,
            t = i.options.asNavFor;
        return t && null !== t && (t = n(t).not(i.$slider)), t
    };
    t.prototype.asNavFor = function(t) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    };
    t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = !1 === t.options.fade ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayClear();
        n.slideCount > n.options.slidesToShow && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function() {
        var n = this,
            t = n.currentSlide + n.options.slidesToScroll;
        n.paused || n.interrupted || n.focussed || (!1 === n.options.infinite && (1 === n.direction && n.currentSlide + 1 === n.slideCount - 1 ? n.direction = 0 : 0 === n.direction && (t = n.currentSlide - n.options.slidesToScroll, n.currentSlide - 1 == 0 && (n.direction = 1))), n.slideHandler(t))
    };
    t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    };
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if (!0 === t.options.dots) {
            for (t.$slider.addClass("slick-dotted"), r = n("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) r.append(n("<li />").append(t.options.customPaging.call(this, t, i)));
            t.$dots = r.appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active")
        }
    };
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        !0 === t.options.draggable && t.$list.addClass("draggable")
    };
    t.prototype.buildRows = function() {
        var t, i, r, f, c, u, e, n = this,
            o, s, h;
        if (f = document.createDocumentFragment(), u = n.$slider.children(), n.options.rows > 1) {
            for (e = n.options.slidesPerRow * n.options.rows, c = Math.ceil(u.length / e), t = 0; t < c; t++) {
                for (o = document.createElement("div"), i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"), r = 0; r < n.options.slidesPerRow; r++) h = t * e + (i * n.options.slidesPerRow + r), u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.empty().append(f);
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    };
    t.prototype.checkResponsive = function(t, i) {
        var f, u, e, r = this,
            o = !1,
            s = r.$slider.width(),
            h = window.innerWidth || n(window).width();
        if ("window" === r.respondTo ? e = h : "slider" === r.respondTo ? e = s : "min" === r.respondTo && (e = Math.min(h, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            u = null;
            for (f in r.breakpoints) r.breakpoints.hasOwnProperty(f) && (!1 === r.originalSettings.mobileFirst ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            null !== u ? null !== r.activeBreakpoint ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : (r.activeBreakpoint = u, "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = u) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = u);
            t || !1 === o || r.$slider.trigger("breakpoint", [r, o])
        }
    };
    t.prototype.changeSlide = function(t, i) {
        var f, e, o, r = this,
            u = n(t.currentTarget),
            s;
        switch (u.is("a") && t.preventDefault(), u.is("li") || (u = u.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
                break;
            case "next":
                e = 0 === f ? r.options.slidesToScroll : f;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
                break;
            case "index":
                s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(s), !1, i);
                u.children().trigger("focus");
                break;
            default:
                return
        }
    };
    t.prototype.checkNavigable = function(n) {
        var t, i, r;
        if (t = this.getNavigableIndexes(), i = 0, n > t[t.length - 1]) n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break
                }
                i = t[r]
            }
        return n
    };
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (n("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", n.proxy(t.interrupt, t, !0)).off("mouseleave.slick", n.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler));
        t.$slider.off("focus.slick blur.slick");
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler)));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.cleanUpSlideEvents();
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler);
        !0 === t.options.focusOnSelect && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", n.proxy(t.interrupt, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.interrupt, t, !1))
    };
    t.prototype.cleanUpRows = function() {
        var t, n = this;
        n.options.rows > 1 && ((t = n.$slides.children().children()).removeAttr("style"), n.$slider.empty().append(t))
    };
    t.prototype.clickHandler = function(n) {
        !1 === this.shouldClick && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            n(this).attr("style", n(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.$slider.removeClass("slick-dotted");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i])
    };
    t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function(n, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(n).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n), i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(n);
            t.call()
        }, i.options.speed))
    };
    t.prototype.fadeSlideOut = function(n) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n), t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    };
    t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
        var t = this;
        null !== n && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = r.is(":focus"), t.autoPlay())
            }, 0)
        })
    };
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    };
    t.prototype.getDotCount = function() {
        var n = this,
            i = 0,
            r = 0,
            t = 0;
        if (!0 === n.options.infinite)
            if (n.slideCount <= n.options.slidesToShow) ++t;
            else
                for (; i < n.slideCount;) ++t, i = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else if (!0 === n.options.centerMode) t = n.slideCount;
        else if (n.options.asNavFor)
            for (; i < n.slideCount;) ++t, i = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else t = 1 + Math.ceil((n.slideCount - n.options.slidesToShow) / n.options.slidesToScroll);
        return t - 1
    };
    t.prototype.getLeft = function(n) {
        var f, r, i, e, t = this,
            u = 0;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(!0), !0 === t.options.infinite ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, e = -1, !0 === t.options.vertical && !0 === t.options.centerMode && (2 === t.options.slidesToShow ? e = -1.5 : 1 === t.options.slidesToShow && (e = -2)), u = r * t.options.slidesToShow * e), t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1, u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, u = t.slideCount % t.options.slidesToScroll * r * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), !0 === t.options.centerMode && t.slideCount <= t.options.slidesToShow ? t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2 : !0 === t.options.centerMode && !0 === t.options.infinite ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : !0 === t.options.centerMode && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = !1 === t.options.vertical ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u, !0 === t.options.variableWidth && (i = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = !0 === t.options.rtl ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === t.options.centerMode && (i = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = !0 === t.options.rtl ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getOption = t.prototype.slickGetOption = function(n) {
        return this.options[n]
    };
    t.prototype.getNavigableIndexes = function() {
        var i, n = this,
            t = 0,
            r = 0,
            u = [];
        for (!1 === n.options.infinite ? i = n.slideCount : (t = -1 * n.options.slidesToScroll, r = -1 * n.options.slidesToScroll, i = 2 * n.slideCount); t < i;) u.push(t), t = r + n.options.slidesToScroll, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    };
    t.prototype.getSlick = function() {
        return this
    };
    t.prototype.getSlideCount = function() {
        var i, r, t = this;
        return r = !0 === t.options.centerMode ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0, !0 === t.options.swipeToSlide ? (t.$slideTrack.find(".slick-slide").each(function(u, f) {
            if (f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft) return i = f, !1
        }), Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    };
    t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(n)
            }
        }, t)
    };
    t.prototype.init = function(t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler());
        t && i.$slider.trigger("init", [i]);
        !0 === i.options.accessibility && i.initADA();
        i.options.autoplay && (i.paused = !1, i.autoPlay())
    };
    t.prototype.initADA = function() {
        var t = this,
            f = Math.ceil(t.slideCount / t.options.slidesToShow),
            r = t.getNavigableIndexes().filter(function(n) {
                return n >= 0 && n < t.slideCount
            }),
            i, u;
        for (t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                var u = r.indexOf(i);
                n(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + i,
                    tabindex: -1
                }); - 1 !== u && n(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + u
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(i) {
                var u = r[i];
                n(this).attr({
                    role: "presentation"
                });
                n(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + i,
                    "aria-controls": "slick-slide" + t.instanceUid + u,
                    "aria-label": i + 1 + " of " + f,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end()), i = t.currentSlide, u = i + t.options.slidesToShow; i < u; i++) t.$slides.eq(i).attr("tabindex", 0);
        t.activateADA()
    };
    t.prototype.initArrowEvents = function() {
        var n = this;
        !0 === n.options.arrows && n.slideCount > n.options.slidesToShow && (n.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, n.changeSlide), n.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, n.changeSlide), !0 === n.options.accessibility && (n.$prevArrow.on("keydown.slick", n.keyHandler), n.$nextArrow.on("keydown.slick", n.keyHandler)))
    };
    t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler));
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.interrupt, t, !0)).on("mouseleave.slick", n.proxy(t.interrupt, t, !1))
    };
    t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", n.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", n.proxy(t.interrupt, t, !1)))
    };
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.initSlideEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler);
        !0 === t.options.focusOnSelect && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(t.setPosition)
    };
    t.prototype.initUI = function() {
        var n = this;
        !0 === n.options.arrows && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        !0 === n.options.dots && n.slideCount > n.options.slidesToShow && n.$dots.show()
    };
    t.prototype.keyHandler = function(n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === n.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === n.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    };
    t.prototype.lazyLoad = function() {
        function f(i) {
            n("img[data-lazy]", i).each(function() {
                var i = n(this),
                    r = n(this).attr("data-lazy"),
                    f = n(this).attr("data-srcset"),
                    e = n(this).attr("data-sizes") || t.$slider.attr("data-sizes"),
                    u = document.createElement("img");
                u.onload = function() {
                    i.animate({
                        opacity: 0
                    }, 100, function() {
                        f && (i.attr("srcset", f), e && i.attr("sizes", e));
                        i.attr("src", r).animate({
                            opacity: 1
                        }, 200, function() {
                            i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        });
                        t.$slider.trigger("lazyLoaded", [t, i, r])
                    })
                };
                u.onerror = function() {
                    i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                    t.$slider.trigger("lazyLoadError", [t, i, r])
                };
                u.src = r
            })
        }
        var u, i, r, t = this;
        if (!0 === t.options.centerMode ? !0 === t.options.infinite ? r = (i = t.currentSlide + (t.options.slidesToShow / 2 + 1)) + t.options.slidesToShow + 2 : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), r = t.options.slidesToShow / 2 + 1 + 2 + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, r = Math.ceil(i + t.options.slidesToShow), !0 === t.options.fade && (i > 0 && i--, r <= t.slideCount && r++)), u = t.$slider.find(".slick-slide").slice(i, r), "anticipated" === t.options.lazyLoad)
            for (var e = i - 1, o = r, s = t.$slider.find(".slick-slide"), h = 0; h < t.options.slidesToScroll; h++) e < 0 && (e = t.slideCount - 1), u = (u = u.add(s.eq(e))).add(s.eq(o)), e--, o++;
        f(u);
        t.slideCount <= t.options.slidesToShow ? f(t.$slider.find(".slick-slide")) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? f(t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow)) : 0 === t.currentSlide && f(t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow))
    };
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    };
    t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    t.prototype.orientationChange = function() {
        var n = this;
        n.checkResponsive();
        n.setPosition()
    };
    t.prototype.pause = t.prototype.slickPause = function() {
        var n = this;
        n.autoPlayClear();
        n.paused = !0
    };
    t.prototype.play = t.prototype.slickPlay = function() {
        var n = this;
        n.autoPlay();
        n.options.autoplay = !0;
        n.paused = !1;
        n.focussed = !1;
        n.interrupted = !1
    };
    t.prototype.postSlide = function(t) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && n(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    };
    t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    };
    t.prototype.preventDefault = function(n) {
        n.preventDefault()
    };
    t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var r, u, f, e, o, i = this,
            s = n("img[data-lazy]", i.$slider);
        s.length ? (r = s.first(), u = r.attr("data-lazy"), f = r.attr("data-srcset"), e = r.attr("data-sizes") || i.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() {
            f && (r.attr("srcset", f), e && r.attr("sizes", e));
            r.attr("src", u).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            !0 === i.options.adaptiveHeight && i.setPosition();
            i.$slider.trigger("lazyLoaded", [i, r, u]);
            i.progressiveLazyLoad()
        }, o.onerror = function() {
            t < 3 ? setTimeout(function() {
                i.progressiveLazyLoad(t + 1)
            }, 500) : (r.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, r, u]), i.progressiveLazyLoad())
        }, o.src = u) : i.$slider.trigger("allImagesLoaded", [i])
    };
    t.prototype.refresh = function(t) {
        var r, u, i = this;
        u = i.slideCount - i.options.slidesToShow;
        !i.options.infinite && i.currentSlide > u && (i.currentSlide = u);
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0);
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, {
            currentSlide: r
        });
        i.init();
        t || i.changeSlide({
            data: {
                message: "index",
                index: r
            }
        }, !1)
    };
    t.prototype.registerBreakpoints = function() {
        var u, f, i, t = this,
            r = t.options.responsive || null;
        if ("array" === n.type(r) && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (i = t.breakpoints.length - 1, r.hasOwnProperty(u)) {
                    for (f = r[u].breakpoint; i >= 0;) t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1), i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings
                }
            t.breakpoints.sort(function(n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    };
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.registerBreakpoints();
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.cleanUpSlideEvents();
        t.initSlideEvents();
        t.checkResponsive(!1, !0);
        !0 === t.options.focusOnSelect && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        t.setPosition();
        t.focusHandler();
        t.paused = !t.options.autoplay;
        t.autoPlay();
        t.$slider.trigger("reInit", [t])
    };
    t.prototype.resize = function() {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = n(window).width();
            t.checkResponsive();
            t.unslicked || t.setPosition()
        }, 50))
    };
    t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
        var r = this;
        if (n = "boolean" == typeof n ? !0 === (t = n) ? 0 : r.slideCount - 1 : !0 === t ? --n : n, r.slideCount < 1 || n < 0 || n > r.slideCount - 1) return !1;
        r.unload();
        !0 === i ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove();
        r.$slides = r.$slideTrack.children(this.options.slide);
        r.$slideTrack.children(this.options.slide).detach();
        r.$slideTrack.append(r.$slides);
        r.$slidesCache = r.$slides;
        r.reinit()
    };
    t.prototype.setCSS = function(n) {
        var r, u, t = this,
            i = {};
        !0 === t.options.rtl && (n = -n);
        r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        !1 === t.transformsEnabled ? t.$slideTrack.css(i) : (i = {}, !1 === t.cssTransitions ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function() {
        var n = this,
            t;
        !1 === n.options.vertical ? !0 === n.options.centerMode && n.$list.css({
            padding: "0px " + n.options.centerPadding
        }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow), !0 === n.options.centerMode && n.$list.css({
            padding: n.options.centerPadding + " 0px"
        }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        !1 === n.options.vertical && !1 === n.options.variableWidth ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow), n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : !0 === n.options.variableWidth ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth), n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        !1 === n.options.variableWidth && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    };
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = t.slideWidth * r * -1;
            !0 === t.options.rtl ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    };
    t.prototype.setHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && !0 === n.options.adaptiveHeight && !1 === n.options.vertical && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setOption = t.prototype.slickSetOption = function() {
        var u, f, e, i, r, t = this,
            o = !1;
        if ("object" === n.type(arguments[0]) ? (e = arguments[0], o = arguments[1], r = "multiple") : "string" === n.type(arguments[0]) && (e = arguments[0], i = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === n.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) t.options[e] = i;
        else if ("multiple" === r) n.each(e, function(n, i) {
            t.options[n] = i
        });
        else if ("responsive" === r)
            for (f in i)
                if ("array" !== n.type(t.options.responsive)) t.options.responsive = [i[f]];
                else {
                    for (u = t.options.responsive.length - 1; u >= 0;) t.options.responsive[u].breakpoint === i[f].breakpoint && t.options.responsive.splice(u, 1), u--;
                    t.options.responsive.push(i[f])
                }
        o && (t.unload(), t.reinit())
    };
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        !1 === n.options.fade ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n])
    };
    t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = !0 === n.options.vertical ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === n.options.useCSS && (n.cssTransitions = !0);
        n.options.fade && ("number" == typeof n.options.zIndex ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex);
        void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && !1 !== n.animType && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = n.options.useTransform && null !== n.animType && !1 !== n.animType
    };
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this,
            e;
        (i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), t.$slides.eq(n).addClass("slick-current"), !0 === t.options.centerMode) ? (e = t.options.slidesToShow % 2 == 0 ? 1 : 0, u = Math.floor(t.options.slidesToShow / 2), !0 === t.options.infinite && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u + e, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n, i.slice(r - u + 1 + e, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow, r = !0 === t.options.infinite ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== t.options.lazyLoad && "anticipated" !== t.options.lazyLoad || t.lazyLoad()
    };
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if (!0 === t.options.fade && (t.options.centerMode = !1), !0 === t.options.infinite && !1 === t.options.fade && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = !0 === t.options.centerMode ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; i < u + t.slideCount; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.interrupt = function(n) {
        var t = this;
        n || t.autoPlay();
        t.interrupted = n
    };
    t.prototype.selectHandler = function(t) {
        var i = this,
            u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide"),
            r = parseInt(u.attr("data-slick-index"));
        r || (r = 0);
        i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r)
    };
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, s, e, o, h = null,
            r = this;
        if (t = t || !1, !(!0 === r.animating && !0 === r.options.waitForAnimate || !0 === r.options.fade && r.currentSlide === n))
            if (!1 === t && r.asNavFor(n), u = n, h = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, !1 === r.options.infinite && !1 === r.options.centerMode && (n < 0 || n > r.getDotCount() * r.options.slidesToScroll)) !1 === r.options.fade && (u = r.currentSlide, !0 !== i ? r.animateSlide(e, function() {
                r.postSlide(u)
            }) : r.postSlide(u));
            else if (!1 === r.options.infinite && !0 === r.options.centerMode && (n < 0 || n > r.slideCount - r.options.slidesToScroll)) !1 === r.options.fade && (u = r.currentSlide, !0 !== i ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u));
        else {
            if (r.options.autoplay && clearInterval(r.autoPlayTimer), f = u < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u, r.animating = !0, r.$slider.trigger("beforeChange", [r, r.currentSlide, f]), s = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.options.asNavFor && (o = (o = r.getNavTarget()).slick("getSlick")).slideCount <= o.options.slidesToShow && o.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), !0 === r.options.fade) return !0 !== i ? (r.fadeSlideOut(s), r.fadeSlide(f, function() {
                r.postSlide(f)
            })) : r.postSlide(f), void r.animateHeight();
            !0 !== i ? r.animateSlide(h, function() {
                r.postSlide(f)
            }) : r.postSlide(f)
        }
    };
    t.prototype.startLoad = function() {
        var n = this;
        !0 === n.options.arrows && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        !0 === n.options.dots && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), (n = Math.round(180 * u / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === t.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === t.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === t.options.rtl ? "right" : "left" : !0 === t.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    };
    t.prototype.swipeEnd = function() {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
        if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                    n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                    n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
        }
    };
    t.prototype.swipeMove = function(n) {
        var f, e, r, u, i, o, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !(!t.dragging || t.scrolling || i && 1 !== i.length) && (f = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))), !t.options.verticalSwiping && !t.swiping && o > 4 ? (t.scrolling = !0, !1) : (!0 === t.options.verticalSwiping && (t.touchObject.swipeLength = o), e = t.swipeDirection(), void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && (t.swiping = !0, n.preventDefault()), u = (!1 === t.options.rtl ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), !0 === t.options.verticalSwiping && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1), r = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, !1 === t.options.infinite && (0 === t.currentSlide && "right" === e || t.currentSlide >= t.getDotCount() && "left" === e) && (r = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), t.swipeLeft = !1 === t.options.vertical ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u, !0 === t.options.verticalSwiping && (t.swipeLeft = f + r * u), !0 !== t.options.fade && !1 !== t.options.touchMove && (!0 === t.animating ? (t.swipeLeft = null, !1) : void t.setCSS(t.swipeLeft))))
    };
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]);
        t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX;
        t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY;
        t.dragging = !0
    };
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    t.prototype.unslick = function(n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy()
    };
    t.prototype.updateArrows = function() {
        var n = this;
        Math.floor(n.options.slidesToShow / 2);
        !0 === n.options.arrows && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && !1 === n.options.centerMode ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && !0 === n.options.centerMode && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    };
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active").end(), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active"))
    };
    t.prototype.visibility = function() {
        var n = this;
        n.options.autoplay && (n.interrupted = document[n.hidden] ? !0 : !1)
    };
    n.fn.slick = function() {
        for (var u, i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, n = 0; n < e; n++)
            if ("object" == typeof r || void 0 === r ? i[n].slick = new t(i[n], r) : u = i[n].slick[r].apply(i[n].slick, f), void 0 !== u) return u;
        return i
    }
});
window.yall = function(n) {
        var r = {
                intersectionObserverSupport: "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype,
                mutationObserverSupport: "MutationObserver" in window,
                idleCallbackSupport: "requestIdleCallback" in window,
                eventsToBind: [
                    [document, "scroll"],
                    [document, "touchmove"],
                    [window, "resize"],
                    [window, "orientationchange"]
                ]
            },
            t = _extends({
                lazyClass: "lazy",
                lazyBackgroundClass: "lazy-bg",
                lazyBackgroundLoaded: "lazy-bg-loaded",
                throttleTime: 200,
                idlyLoad: !1,
                idleLoadTimeout: 100,
                threshold: 200,
                observeChanges: !1,
                observeRootSelector: "body",
                mutationObserverOptions: {
                    childList: !0,
                    subtree: !0
                }
            }, n),
            h = "img." + t.lazyClass + ",video." + t.lazyClass + ",iframe." + t.lazyClass + ",." + t.lazyBackgroundClass,
            c = {
                timeout: t.idleLoadTimeout
            },
            f = function(n) {
                return [].slice.call(n)
            },
            e = function(n) {
                if ("IMG" === n.tagName) {
                    var i = n.parentNode;
                    "PICTURE" === i.tagName && f(i.querySelectorAll("source")).forEach(function(n) {
                        return u(n)
                    });
                    u(n)
                }
                "VIDEO" === n.tagName && (f(n.querySelectorAll("source")).forEach(function(n) {
                    return u(n)
                }), u(n), !0 === n.autoplay && n.load());
                "IFRAME" === n.tagName && u(n);
                n.classList.contains(t.lazyBackgroundClass) && (n.classList.remove(t.lazyBackgroundClass), n.classList.add(t.lazyBackgroundLoaded))
            },
            u = function(n) {
                null !== n.getAttribute("data-srcset") && n.setAttribute("srcset", n.getAttribute("data-srcset"));
                null !== n.getAttribute("data-src") && n.setAttribute("src", n.getAttribute("data-src"));
                null !== n.getAttribute("data-poster") && n.setAttribute("poster", n.getAttribute("data-poster"))
            },
            o = function l() {
                var n = !1;
                !1 === n && 0 < i.length && (n = !0, setTimeout(function() {
                    i.forEach(function(n) {
                        n.getBoundingClientRect().top <= window.innerHeight + t.threshold && n.getBoundingClientRect().bottom >= -t.threshold && "none" !== getComputedStyle(n).display && (!0 === t.idlyLoad && !0 === r.idleCallbackSupport ? requestIdleCallback(function() {
                            e(n)
                        }, c) : e(n), n.classList.remove(t.lazyClass), i = i.filter(function(t) {
                            return t !== n
                        }))
                    });
                    n = !1;
                    0 === i.length && !1 === t.observeChanges && r.eventsToBind.forEach(function(n) {
                        return n[0].removeEventListener(n[1], l)
                    })
                }, t.throttleTime))
            },
            i = f(document.querySelectorAll(h)),
            s;
        !0 === r.intersectionObserverSupport ? (s = new IntersectionObserver(function(n, u) {
            n.forEach(function(n) {
                if (!0 === n.isIntersecting || 0 < n.intersectionRatio) {
                    var f = n.target;
                    !0 === t.idlyLoad && !0 === r.idleCallbackSupport ? requestIdleCallback(function() {
                        return e(f)
                    }, c) : e(f);
                    f.classList.remove(t.lazyClass);
                    u.unobserve(f);
                    i = i.filter(function(n) {
                        return n !== f
                    })
                }
            })
        }, {
            rootMargin: t.threshold + "px 0%"
        }), i.forEach(function(n) {
            return s.observe(n)
        })) : (r.eventsToBind.forEach(function(n) {
            return n[0].addEventListener(n[1], o)
        }), o());
        !0 === r.mutationObserverSupport && !0 === t.observeChanges && new MutationObserver(function(n) {
            return n.forEach(function() {
                f(document.querySelectorAll(h)).forEach(function(n) {
                    -1 === i.indexOf(n) && (i.push(n), !0 === r.intersectionObserverSupport ? s.observe(n) : o())
                })
            })
        }).observe(document.querySelector(t.observeRootSelector), t.mutationObserverOptions)
    },
    function() {}.call("object" == typeof window && window || "object" == typeof self && self || "object" == typeof global && global || {});
/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */
! function(n, t) {
    "function" == typeof define && define.amd ? define("sifter", t) : "object" == typeof exports ? module.exports = t() : n.Sifter = t()
}(this, function() {
    var n = function(n, t) {
        this.items = n;
        this.settings = t || {
            diacritics: !0
        }
    };
    n.prototype.tokenize = function(n) {
        if (n = o(String(n || "").toLowerCase()), !n || !n.length) return [];
        for (var r, u, h = [], f = n.split(/ +/), i = 0, e = f.length; i < e; i++) {
            if (r = s(f[i]), this.settings.diacritics)
                for (u in t) t.hasOwnProperty(u) && (r = r.replace(new RegExp(u, "g"), t[u]));
            h.push({
                string: f[i],
                regex: new RegExp(r, "i")
            })
        }
        return h
    };
    n.prototype.iterator = function(n, t) {
        var r;
        r = i(n) ? Array.prototype.forEach || function(n) {
            for (var t = 0, i = this.length; t < i; t++) n(this[t], t, this)
        } : function(n) {
            for (var t in this) this.hasOwnProperty(t) && n(this[t], t, this)
        };
        r.apply(n, [t])
    };
    n.prototype.getScoreFunction = function(n, t) {
        var h, f, u, i, o, s, e;
        return h = this, n = h.prepareSearch(n, t), u = n.tokens, f = n.options.fields, i = u.length, o = n.options.nesting, s = function(n, t) {
            var i, r;
            return n ? (n = String(n || ""), r = n.search(t.regex), r === -1 ? 0 : (i = t.string.length / n.length, 0 === r && (i += .5), i)) : 0
        }, e = function() {
            var n = f.length;
            return n ? 1 === n ? function(n, t) {
                return s(r(t, f[0], o), n)
            } : function(t, i) {
                for (var u = 0, e = 0; u < n; u++) e += s(r(i, f[u], o), t);
                return e / n
            } : function() {
                return 0
            }
        }(), i ? 1 === i ? function(n) {
            return e(u[0], n)
        } : "and" === n.options.conjunction ? function(n) {
            for (var t, r = 0, f = 0; r < i; r++) {
                if (t = e(u[r], n), t <= 0) return 0;
                f += t
            }
            return f / i
        } : function(n) {
            for (var t = 0, r = 0; t < i; t++) r += e(u[t], n);
            return r / i
        } : function() {
            return 0
        }
    };
    n.prototype.getSortFunction = function(n, t) {
        var i, e, l, a, f, h, y, c, o, v, s;
        if (l = this, n = l.prepareSearch(n, t), s = !n.query && t.sort_empty || t.sort, o = function(n, i) {
                return "$score" === n ? i.score : r(l.items[i.id], n, t.nesting)
            }, f = [], s)
            for (i = 0, e = s.length; i < e; i++)(n.query || "$score" !== s[i].field) && f.push(s[i]);
        if (n.query) {
            for (v = !0, i = 0, e = f.length; i < e; i++)
                if ("$score" === f[i].field) {
                    v = !1;
                    break
                }
            v && f.unshift({
                field: "$score",
                direction: "desc"
            })
        } else
            for (i = 0, e = f.length; i < e; i++)
                if ("$score" === f[i].field) {
                    f.splice(i, 1);
                    break
                } for (c = [], i = 0, e = f.length; i < e; i++) c.push("desc" === f[i].direction ? -1 : 1);
        return h = f.length, h ? 1 === h ? (a = f[0].field, y = c[0], function(n, t) {
            return y * u(o(a, n), o(a, t))
        }) : function(n, t) {
            for (var e, r, i = 0; i < h; i++)
                if (r = f[i].field, e = c[i] * u(o(r, n), o(r, t))) return e;
            return 0
        } : null
    };
    n.prototype.prepareSearch = function(n, t) {
        if ("object" == typeof n) return n;
        t = e({}, t);
        var r = t.fields,
            u = t.sort,
            f = t.sort_empty;
        return r && !i(r) && (t.fields = [r]), u && !i(u) && (t.sort = [u]), f && !i(f) && (t.sort_empty = [f]), {
            options: t,
            query: String(n || "").toLowerCase(),
            tokens: this.tokenize(n),
            total: 0,
            items: []
        }
    };
    n.prototype.search = function(n, t) {
        var u, i, f, e, r = this;
        return i = this.prepareSearch(n, t), t = i.options, n = i.query, e = t.score || r.getScoreFunction(i), n.length ? r.iterator(r.items, function(n, r) {
            u = e(n);
            (t.filter === !1 || u > 0) && i.items.push({
                score: u,
                id: r
            })
        }) : r.iterator(r.items, function(n, t) {
            i.items.push({
                score: 1,
                id: t
            })
        }), f = r.getSortFunction(i, t), f && i.items.sort(f), i.total = i.items.length, "number" == typeof t.limit && (i.items = i.items.slice(0, t.limit)), i
    };
    var u = function(n, t) {
            return "number" == typeof n && "number" == typeof t ? n > t ? 1 : n < t ? -1 : 0 : (n = f(String(n || "")), t = f(String(t || "")), n > t ? 1 : t > n ? -1 : 0)
        },
        e = function(n) {
            for (var i, r, t = 1, u = arguments.length; t < u; t++)
                if (r = arguments[t])
                    for (i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
            return n
        },
        r = function(n, t, i) {
            if (n && t) {
                if (!i) return n[t];
                for (var r = t.split("."); r.length && (n = n[r.shift()]););
                return n
            }
        },
        o = function(n) {
            return (n + "").replace(/^\s+|\s+$|/g, "")
        },
        s = function(n) {
            return (n + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        },
        i = Array.isArray || "undefined" != typeof $ && $.isArray || function(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        },
        t = {
            a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
            b: "[b␢βΒB฿𐌁ᛒ]",
            c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
            d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
            e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
            f: "[fƑƒḞḟ]",
            g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
            h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
            i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
            j: "[jȷĴĵɈɉʝɟʲ]",
            k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
            l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
            n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
            o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
            p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
            q: "[qꝖꝗʠɊɋꝘꝙq̃]",
            r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
            s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
            t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
            u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
            v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
            w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
            x: "[xẌẍẊẋχ]",
            y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
            z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
        },
        f = function() {
            var i, u, n, r, f = "",
                e = {},
                o;
            for (n in t)
                if (t.hasOwnProperty(n))
                    for (r = t[n].substring(2, t[n].length - 1), f += r, i = 0, u = r.length; i < u; i++) e[r.charAt(i)] = n;
            return o = new RegExp("[" + f + "]", "g"),
                function(n) {
                    return n.replace(o, function(n) {
                        return e[n]
                    }).toLowerCase()
                }
        }();
    return n
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("microplugin", t) : "object" == typeof exports ? module.exports = t() : n.MicroPlugin = t()
}(this, function() {
    var n = {},
        t;
    return n.mixin = function(n) {
        n.plugins = {};
        n.prototype.initializePlugins = function(n) {
            var i, e, r, f = this,
                u = [];
            if (f.plugins = {
                    names: [],
                    settings: {},
                    requested: {},
                    loaded: {}
                }, t.isArray(n))
                for (i = 0, e = n.length; i < e; i++) "string" == typeof n[i] ? u.push(n[i]) : (f.plugins.settings[n[i].name] = n[i].options, u.push(n[i].name));
            else if (n)
                for (r in n) n.hasOwnProperty(r) && (f.plugins.settings[r] = n[r], u.push(r));
            for (; u.length;) f.require(u.shift())
        };
        n.prototype.loadPlugin = function(t) {
            var i = this,
                r = i.plugins,
                u = n.plugins[t];
            if (!n.plugins.hasOwnProperty(t)) throw new Error('Unable to find "' + t + '" plugin');
            r.requested[t] = !0;
            r.loaded[t] = u.fn.apply(i, [i.plugins.settings[t] || {}]);
            r.names.push(t)
        };
        n.prototype.require = function(n) {
            var t = this,
                i = t.plugins;
            if (!t.plugins.loaded.hasOwnProperty(n)) {
                if (i.requested[n]) throw new Error('Plugin has circular dependency ("' + n + '")');
                t.loadPlugin(n)
            }
            return i.loaded[n]
        };
        n.define = function(t, i) {
            n.plugins[t] = {
                name: t,
                fn: i
            }
        }
    }, t = {
        isArray: Array.isArray || function(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        }
    }, n
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : n.Selectize = t(n.jQuery, n.Sifter, n.MicroPlugin)
}(this, function(n, t, i) {
    "use strict";
    var d = function(n, t) {
            if ("string" != typeof t || t.length) {
                var i = "string" == typeof t ? new RegExp(t, "i") : t,
                    r = function(n) {
                        var o = 0,
                            e, s, f, t, h, u;
                        if (3 === n.nodeType) e = n.data.search(i), e >= 0 && n.data.length > 0 && (s = n.data.match(i), f = document.createElement("span"), f.className = "highlight", t = n.splitText(e), h = (t.splitText(s[0].length), t.cloneNode(!0)), f.appendChild(h), t.parentNode.replaceChild(f, t), o = 1);
                        else if (1 === n.nodeType && n.childNodes && !/(script|style)/i.test(n.tagName))
                            for (u = 0; u < n.childNodes.length; ++u) u += r(n.childNodes[u]);
                        return o
                    };
                return n.each(function() {
                    r(this)
                })
            }
        },
        f;
    n.fn.removeHighlight = function() {
        return this.find("span.highlight").each(function() {
            this.parentNode.firstChild.nodeName;
            var n = this.parentNode;
            n.replaceChild(this.firstChild, this);
            n.normalize()
        }).end()
    };
    f = function() {};
    f.prototype = {
        on: function(n, t) {
            this._events = this._events || {};
            this._events[n] = this._events[n] || [];
            this._events[n].push(t)
        },
        off: function(n, t) {
            var i = arguments.length;
            return 0 === i ? delete this._events : 1 === i ? delete this._events[n] : (this._events = this._events || {}, void(n in this._events != !1 && this._events[n].splice(this._events[n].indexOf(t), 1)))
        },
        trigger: function(n) {
            if (this._events = this._events || {}, n in this._events != !1)
                for (var t = 0; t < this._events[n].length; t++) this._events[n][t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    f.mixin = function(n) {
        for (var i = ["on", "off", "trigger"], t = 0; t < i.length; t++) n.prototype[i[t]] = f.prototype[i[t]]
    };
    var e = /Mac/.test(navigator.userAgent),
        g = 65,
        nt = 13,
        tt = 27,
        l = 37,
        it = 38,
        rt = 80,
        y = 39,
        ut = 40,
        ft = 78,
        o = 8,
        a = 46,
        et = 16,
        ot = e ? 91 : 17,
        st = e ? 18 : 17,
        p = 9,
        h = 1,
        ht = 2,
        w = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
        b = function(n) {
            return "undefined" != typeof n
        },
        u = function(n) {
            return "undefined" == typeof n || null === n ? null : "boolean" == typeof n ? n ? "1" : "0" : n + ""
        },
        s = function(n) {
            return (n + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        c = {};
    c.before = function(n, t, i) {
        var r = n[t];
        n[t] = function() {
            return i.apply(n, arguments), r.apply(n, arguments)
        }
    };
    c.after = function(n, t, i) {
        var r = n[t];
        n[t] = function() {
            var t = r.apply(n, arguments);
            return i.apply(n, arguments), t
        }
    };
    var ct = function(n) {
            var t = !1;
            return function() {
                t || (t = !0, n.apply(this, arguments))
            }
        },
        lt = function(n, t) {
            var i;
            return function() {
                var r = this,
                    u = arguments;
                window.clearTimeout(i);
                i = window.setTimeout(function() {
                    n.apply(r, u)
                }, t)
            }
        },
        k = function(n, t, i) {
            var u, f = n.trigger,
                r = {};
            n.trigger = function() {
                var i = arguments[0];
                return t.indexOf(i) === -1 ? f.apply(n, arguments) : void(r[i] = arguments)
            };
            i.apply(n, []);
            n.trigger = f;
            for (u in r) r.hasOwnProperty(u) && f.apply(n, r[u])
        },
        at = function(n, t, i, r) {
            n.on(t, i, function(t) {
                for (var i = t.target; i && i.parentNode !== n[0];) i = i.parentNode;
                return t.currentTarget = i, r.apply(this, [t])
            })
        },
        v = function(n) {
            var t = {},
                i, r;
            return "selectionStart" in n ? (t.start = n.selectionStart, t.length = n.selectionEnd - t.start) : document.selection && (n.focus(), i = document.selection.createRange(), r = document.selection.createRange().text.length, i.moveStart("character", -n.value.length), t.start = i.text.length - r, t.length = r), t
        },
        vt = function(n, t, i) {
            var r, f, u = {};
            if (i)
                for (r = 0, f = i.length; r < f; r++) u[i[r]] = n.css(i[r]);
            else u = n.css();
            t.css(u)
        },
        yt = function(t, i) {
            var r, u;
            return t ? (r = n("<test>").css({
                position: "absolute",
                top: -99999,
                left: -99999,
                width: "auto",
                padding: 0,
                whiteSpace: "pre"
            }).text(t).appendTo("body"), vt(i, r, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]), u = r.width(), r.remove(), u) : 0
        },
        pt = function(n) {
            var t = null,
                i = function(i, r) {
                    var u, f, l, c, h, y, s, e;
                    i = i || window.event || {};
                    r = r || {};
                    i.metaKey || i.altKey || (r.force || n.data("grow") !== !1) && (u = n.val(), i.type && "keydown" === i.type.toLowerCase() && (f = i.keyCode, l = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === a || f === o ? (e = v(n[0]), e.length ? u = u.substring(0, e.start) + u.substring(e.start + e.length) : f === o && e.start ? u = u.substring(0, e.start - 1) + u.substring(e.start + 1) : f === a && "undefined" != typeof e.start && (u = u.substring(0, e.start) + u.substring(e.start + 1))) : l && (y = i.shiftKey, s = String.fromCharCode(i.keyCode), s = y ? s.toUpperCase() : s.toLowerCase(), u += s)), c = n.attr("placeholder"), !u && c && (u = c), h = yt(u, n) + 4, h !== t && (t = h, n.width(h), n.triggerHandler("resize")))
                };
            n.on("keydown keyup update blur", i);
            i()
        },
        wt = function(n) {
            var t = document.createElement("div");
            return t.appendChild(n.cloneNode(!0)), t.innerHTML
        },
        bt = function(n, t) {
            t || (t = {});
            console.error("Selectize: " + n);
            t.explanation && (console.group && console.group(), console.error(t.explanation), console.group && console.groupEnd())
        },
        r = function(i, u) {
            var e, s, c, o, f = this,
                l;
            if (o = i[0], o.selectize = f, l = window.getComputedStyle && window.getComputedStyle(o, null), c = l ? l.getPropertyValue("direction") : o.currentStyle && o.currentStyle.direction, c = c || i.parents("[dir]:first").attr("dir") || "", n.extend(f, {
                    order: 0,
                    settings: u,
                    $input: i,
                    tabIndex: i.attr("tabindex") || "",
                    tagType: "select" === o.tagName.toLowerCase() ? h : ht,
                    rtl: /rtl/i.test(c),
                    eventNS: ".selectize" + ++r.count,
                    highlightedValue: null,
                    isOpen: !1,
                    isDisabled: !1,
                    isRequired: i.is("[required]"),
                    isInvalid: !1,
                    isLocked: !1,
                    isFocused: !1,
                    isInputHidden: !1,
                    isSetup: !1,
                    isShiftDown: !1,
                    isCmdDown: !1,
                    isCtrlDown: !1,
                    ignoreFocus: !1,
                    ignoreBlur: !1,
                    ignoreHover: !1,
                    hasOptions: !1,
                    currentResults: null,
                    lastValue: "",
                    caretPos: 0,
                    loading: 0,
                    loadedSearches: {},
                    $activeOption: null,
                    $activeItems: [],
                    optgroups: {},
                    options: {},
                    userOptions: {},
                    items: [],
                    renderCache: {},
                    onSearchChange: null === u.loadThrottle ? f.onSearchChange : lt(f.onSearchChange, u.loadThrottle)
                }), f.sifter = new t(this.options, {
                    diacritics: u.diacritics
                }), f.settings.options) {
                for (e = 0, s = f.settings.options.length; e < s; e++) f.registerOption(f.settings.options[e]);
                delete f.settings.options
            }
            if (f.settings.optgroups) {
                for (e = 0, s = f.settings.optgroups.length; e < s; e++) f.registerOptionGroup(f.settings.optgroups[e]);
                delete f.settings.optgroups
            }
            f.settings.mode = f.settings.mode || (1 === f.settings.maxItems ? "single" : "multi");
            "boolean" != typeof f.settings.hideSelected && (f.settings.hideSelected = "multi" === f.settings.mode);
            f.initializePlugins(f.settings.plugins);
            f.setupCallbacks();
            f.setupTemplates();
            f.setup()
        };
    return f.mixin(r), "undefined" != typeof i ? i.mixin(r) : bt("Dependency MicroPlugin is missing", {
        explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
    }), n.extend(r.prototype, {
        setup: function() {
            var s, c, u, f, b, k, a, v, y, l, t = this,
                r = t.settings,
                o = t.eventNS,
                d = n(window),
                p = n(document),
                i = t.$input,
                g;
            (a = t.settings.mode, v = i.attr("class") || "", s = n("<div>").addClass(r.wrapperClass).addClass(v).addClass(a), c = n("<div>").addClass(r.inputClass).addClass("items").appendTo(s), u = n('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", i.is(":disabled") ? "-1" : t.tabIndex), k = n(r.dropdownParent || s), f = n("<div>").addClass(r.dropdownClass).addClass(a).hide().appendTo(k), b = n("<div>").addClass(r.dropdownContentClass).appendTo(f), (l = i.attr("id")) && (u.attr("id", l + "-selectized"), n("label[for='" + l + "']").attr("for", l + "-selectized")), t.settings.copyClassesToDropdown && f.addClass(v), s.css({
                width: i[0].style.width
            }), t.plugins.names.length && (y = "plugin-" + t.plugins.names.join(" plugin-"), s.addClass(y), f.addClass(y)), (null === r.maxItems || r.maxItems > 1) && t.tagType === h && i.attr("multiple", "multiple"), t.settings.placeholder && u.attr("placeholder", r.placeholder), !t.settings.splitOn && t.settings.delimiter) && (g = t.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), t.settings.splitOn = new RegExp("\\s*" + g + "+\\s*"));
            i.attr("autocorrect") && u.attr("autocorrect", i.attr("autocorrect"));
            i.attr("autocapitalize") && u.attr("autocapitalize", i.attr("autocapitalize"));
            t.$wrapper = s;
            t.$control = c;
            t.$control_input = u;
            t.$dropdown = f;
            t.$dropdown_content = b;
            f.on("mouseenter", "[data-selectable]", function() {
                return t.onOptionHover.apply(t, arguments)
            });
            f.on("mousedown click", "[data-selectable]", function() {
                return t.onOptionSelect.apply(t, arguments)
            });
            at(c, "mousedown", "*:not(input)", function() {
                return t.onItemSelect.apply(t, arguments)
            });
            pt(u);
            c.on({
                mousedown: function() {
                    return t.onMouseDown.apply(t, arguments)
                },
                click: function() {
                    return t.onClick.apply(t, arguments)
                }
            });
            u.on({
                mousedown: function(n) {
                    n.stopPropagation()
                },
                keydown: function() {
                    return t.onKeyDown.apply(t, arguments)
                },
                keyup: function() {
                    return t.onKeyUp.apply(t, arguments)
                },
                keypress: function() {
                    return t.onKeyPress.apply(t, arguments)
                },
                resize: function() {
                    t.positionDropdown.apply(t, [])
                },
                blur: function() {
                    return t.onBlur.apply(t, arguments)
                },
                focus: function() {
                    return t.ignoreBlur = !1, t.onFocus.apply(t, arguments)
                },
                paste: function() {
                    return t.onPaste.apply(t, arguments)
                }
            });
            p.on("keydown" + o, function(n) {
                t.isCmdDown = n[e ? "metaKey" : "ctrlKey"];
                t.isCtrlDown = n[e ? "altKey" : "ctrlKey"];
                t.isShiftDown = n.shiftKey
            });
            p.on("keyup" + o, function(n) {
                n.keyCode === st && (t.isCtrlDown = !1);
                n.keyCode === et && (t.isShiftDown = !1);
                n.keyCode === ot && (t.isCmdDown = !1)
            });
            p.on("mousedown" + o, function(n) {
                if (t.isFocused) {
                    if (n.target === t.$dropdown[0] || n.target.parentNode === t.$dropdown[0]) return !1;
                    t.$control.has(n.target).length || n.target === t.$control[0] || t.blur(n.target)
                }
            });
            d.on(["scroll" + o, "resize" + o].join(" "), function() {
                t.isOpen && t.positionDropdown.apply(t, arguments)
            });
            d.on("mousemove" + o, function() {
                t.ignoreHover = !1
            });
            this.revertSettings = {
                $children: i.children().detach(),
                tabindex: i.attr("tabindex")
            };
            i.attr("tabindex", -1).hide().after(t.$wrapper);
            n.isArray(r.items) && (t.setValue(r.items), delete r.items);
            w && i.on("invalid" + o, function(n) {
                n.preventDefault();
                t.isInvalid = !0;
                t.refreshState()
            });
            t.updateOriginalInput();
            t.refreshItems();
            t.refreshState();
            t.updatePlaceholder();
            t.isSetup = !0;
            i.is(":disabled") && t.disable();
            t.on("change", this.onChange);
            i.data("selectize", t);
            i.addClass("selectized");
            t.trigger("initialize");
            r.preload === !0 && t.onSearchChange("")
        },
        setupTemplates: function() {
            var t = this,
                i = t.settings.labelField,
                r = t.settings.optgroupLabelField,
                u = {
                    optgroup: function(n) {
                        return '<div class="optgroup">' + n.html + "<\/div>"
                    },
                    optgroup_header: function(n, t) {
                        return '<div class="optgroup-header">' + t(n[r]) + "<\/div>"
                    },
                    option: function(n, t) {
                        return '<div class="option">' + t(n[i]) + "<\/div>"
                    },
                    item: function(n, t) {
                        return '<div class="item">' + t(n[i]) + "<\/div>"
                    },
                    option_create: function(n, t) {
                        return '<div class="create">Add <strong>' + t(n.input) + "<\/strong>&hellip;<\/div>"
                    }
                };
            t.settings.render = n.extend({}, u, t.settings.render)
        },
        setupCallbacks: function() {
            var n, t, i = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                optgroup_add: "onOptionGroupAdd",
                optgroup_remove: "onOptionGroupRemove",
                optgroup_clear: "onOptionGroupClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType",
                load: "onLoad",
                focus: "onFocus",
                blur: "onBlur"
            };
            for (n in i) i.hasOwnProperty(n) && (t = this.settings[i[n]], t && this.on(n, t))
        },
        onClick: function(n) {
            var t = this;
            t.isFocused || (t.focus(), n.preventDefault())
        },
        onMouseDown: function(t) {
            var i = this,
                r = t.isDefaultPrevented();
            if (n(t.target), i.isFocused) {
                if (t.target !== i.$control_input[0]) return "single" === i.settings.mode ? i.isOpen ? i.close() : i.open() : r || i.setActiveItem(null), !1
            } else r || window.setTimeout(function() {
                i.focus()
            }, 0)
        },
        onChange: function() {
            this.$input.trigger("change")
        },
        onPaste: function(t) {
            var i = this;
            return i.isFull() || i.isInputHidden || i.isLocked ? void t.preventDefault() : void(i.settings.splitOn && setTimeout(function() {
                var r = i.$control_input.val();
                if (r.match(i.settings.splitOn))
                    for (var u = n.trim(r).split(i.settings.splitOn), t = 0, f = u.length; t < f; t++) i.createItem(u[t])
            }, 0))
        },
        onKeyPress: function(n) {
            if (this.isLocked) return n && n.preventDefault();
            var t = String.fromCharCode(n.keyCode || n.which);
            if (this.settings.create && "multi" === this.settings.mode && t === this.settings.delimiter) return (this.createItem(), n.preventDefault(), !1)
        },
        onKeyDown: function(n) {
            var t = (n.target === this.$control_input[0], this),
                i, r;
            if (t.isLocked) return void(n.keyCode !== p && n.preventDefault());
            switch (n.keyCode) {
                case g:
                    if (t.isCmdDown) return void t.selectAll();
                    break;
                case tt:
                    return void(t.isOpen && (n.preventDefault(), n.stopPropagation(), t.close()));
                case ft:
                    if (!n.ctrlKey || n.altKey) break;
                case ut:
                    return !t.isOpen && t.hasOptions ? t.open() : t.$activeOption && (t.ignoreHover = !0, i = t.getAdjacentOption(t.$activeOption, 1), i.length && t.setActiveOption(i, !0, !0)), void n.preventDefault();
                case rt:
                    if (!n.ctrlKey || n.altKey) break;
                case it:
                    return t.$activeOption && (t.ignoreHover = !0, r = t.getAdjacentOption(t.$activeOption, -1), r.length && t.setActiveOption(r, !0, !0)), void n.preventDefault();
                case nt:
                    return void(t.isOpen && t.$activeOption && (t.onOptionSelect({
                        currentTarget: t.$activeOption
                    }), n.preventDefault()));
                case l:
                    return void t.advanceSelection(-1, n);
                case y:
                    return void t.advanceSelection(1, n);
                case p:
                    return t.settings.selectOnTab && t.isOpen && t.$activeOption && (t.onOptionSelect({
                        currentTarget: t.$activeOption
                    }), t.isFull() || n.preventDefault()), void(t.settings.create && t.createItem() && n.preventDefault());
                case o:
                case a:
                    return void t.deleteSelection(n)
            }
            if ((t.isFull() || t.isInputHidden) && !(e ? n.metaKey : n.ctrlKey)) return void n.preventDefault()
        },
        onKeyUp: function(n) {
            var t = this,
                i;
            if (t.isLocked) return n && n.preventDefault();
            i = t.$control_input.val() || "";
            t.lastValue !== i && (t.lastValue = i, t.onSearchChange(i), t.refreshOptions(), t.trigger("type", i))
        },
        onSearchChange: function(n) {
            var t = this,
                i = t.settings.load;
            i && (t.loadedSearches.hasOwnProperty(n) || (t.loadedSearches[n] = !0, t.load(function(r) {
                i.apply(t, [n, r])
            })))
        },
        onFocus: function(n) {
            var t = this,
                i = t.isFocused;
            return t.isDisabled ? (t.blur(), n && n.preventDefault(), !1) : void(t.ignoreFocus || (t.isFocused = !0, "focus" === t.settings.preload && t.onSearchChange(""), i || t.trigger("focus"), t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions(!!t.settings.openOnFocus)), t.refreshState()))
        },
        onBlur: function(n, t) {
            var i = this,
                r;
            if (i.isFocused && (i.isFocused = !1, !i.ignoreFocus)) {
                if (!i.ignoreBlur && document.activeElement === i.$dropdown_content[0]) return i.ignoreBlur = !0, void i.onFocus(n);
                r = function() {
                    i.close();
                    i.setTextboxValue("");
                    i.setActiveItem(null);
                    i.setActiveOption(null);
                    i.setCaret(i.items.length);
                    i.refreshState();
                    t && t.focus && t.focus();
                    i.ignoreFocus = !1;
                    i.trigger("blur")
                };
                i.ignoreFocus = !0;
                i.settings.create && i.settings.createOnBlur ? i.createItem(null, !1, r) : r()
            }
        },
        onOptionHover: function(n) {
            this.ignoreHover || this.setActiveOption(n.currentTarget, !1)
        },
        onOptionSelect: function(t) {
            var r, u, i = this;
            t.preventDefault && (t.preventDefault(), t.stopPropagation());
            u = n(t.currentTarget);
            u.hasClass("create") ? i.createItem(null, function() {
                i.settings.closeAfterSelect && i.close()
            }) : (r = u.attr("data-value"), "undefined" != typeof r && (i.lastQuery = null, i.setTextboxValue(""), i.addItem(r), i.settings.closeAfterSelect ? i.close() : !i.settings.hideSelected && t.type && /mouse/.test(t.type) && i.setActiveOption(i.getOption(r))))
        },
        onItemSelect: function(n) {
            var t = this;
            t.isLocked || "multi" === t.settings.mode && (n.preventDefault(), t.setActiveItem(n.currentTarget, n))
        },
        load: function(n) {
            var t = this,
                i = t.$wrapper.addClass(t.settings.loadingClass);
            t.loading++;
            n.apply(t, [function(n) {
                t.loading = Math.max(t.loading - 1, 0);
                n && n.length && (t.addOption(n), t.refreshOptions(t.isFocused && !t.isInputHidden));
                t.loading || i.removeClass(t.settings.loadingClass);
                t.trigger("load", n)
            }])
        },
        setTextboxValue: function(n) {
            var t = this.$control_input,
                i = t.val() !== n;
            i && (t.val(n).triggerHandler("update"), this.lastValue = n)
        },
        getValue: function() {
            return this.tagType === h && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
        },
        setValue: function(n, t) {
            var i = t ? [] : ["change"];
            k(this, i, function() {
                this.clear(t);
                this.addItems(n, t)
            })
        },
        setActiveItem: function(t, i) {
            var e, o, h, u, f, s, c, l, r = this;
            if ("single" !== r.settings.mode) {
                if (t = n(t), !t.length) return n(r.$activeItems).removeClass("active"), r.$activeItems = [], void(r.isFocused && r.showInput());
                if (e = i && i.type.toLowerCase(), "mousedown" === e && r.isShiftDown && r.$activeItems.length) {
                    for (l = r.$control.children(".active:last"), u = Array.prototype.indexOf.apply(r.$control[0].childNodes, [l[0]]), f = Array.prototype.indexOf.apply(r.$control[0].childNodes, [t[0]]), u > f && (c = u, u = f, f = c), o = u; o <= f; o++) s = r.$control[0].childNodes[o], r.$activeItems.indexOf(s) === -1 && (n(s).addClass("active"), r.$activeItems.push(s));
                    i.preventDefault()
                } else "mousedown" === e && r.isCtrlDown || "keydown" === e && this.isShiftDown ? t.hasClass("active") ? (h = r.$activeItems.indexOf(t[0]), r.$activeItems.splice(h, 1), t.removeClass("active")) : r.$activeItems.push(t.addClass("active")[0]) : (n(r.$activeItems).removeClass("active"), r.$activeItems = [t.addClass("active")[0]]);
                r.hideInput();
                this.isFocused || r.focus()
            }
        },
        setActiveOption: function(t, i, r) {
            var e, o, f, s, h, u = this;
            u.$activeOption && u.$activeOption.removeClass("active");
            u.$activeOption = null;
            t = n(t);
            t.length && (u.$activeOption = t.addClass("active"), !i && b(i) || (e = u.$dropdown_content.height(), o = u.$activeOption.outerHeight(!0), i = u.$dropdown_content.scrollTop() || 0, f = u.$activeOption.offset().top - u.$dropdown_content.offset().top + i, s = f, h = f - e + o, f + o > e + i ? u.$dropdown_content.stop().animate({
                scrollTop: h
            }, r ? u.settings.scrollDuration : 0) : f < i && u.$dropdown_content.stop().animate({
                scrollTop: s
            }, r ? u.settings.scrollDuration : 0)))
        },
        selectAll: function() {
            var n = this;
            "single" !== n.settings.mode && (n.$activeItems = Array.prototype.slice.apply(n.$control.children(":not(input)").addClass("active")), n.$activeItems.length && (n.hideInput(), n.close()), n.focus())
        },
        hideInput: function() {
            var n = this;
            n.setTextboxValue("");
            n.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: n.rtl ? 1e4 : -1e4
            });
            n.isInputHidden = !0
        },
        showInput: function() {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            });
            this.isInputHidden = !1
        },
        focus: function() {
            var n = this;
            n.isDisabled || (n.ignoreFocus = !0, n.$control_input[0].focus(), window.setTimeout(function() {
                n.ignoreFocus = !1;
                n.onFocus()
            }, 0))
        },
        blur: function(n) {
            this.$control_input[0].blur();
            this.onBlur(null, n)
        },
        getScoreFunction: function(n) {
            return this.sifter.getScoreFunction(n, this.getSearchOptions())
        },
        getSearchOptions: function() {
            var t = this.settings,
                n = t.sortField;
            return "string" == typeof n && (n = [{
                field: n
            }]), {
                fields: t.searchField,
                conjunction: t.searchConjunction,
                sort: n
            }
        },
        search: function(t) {
            var f, r, e, i = this,
                o = i.settings,
                s = this.getSearchOptions();
            if (o.score && (e = i.settings.score.apply(this, [t]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (t !== i.lastQuery ? (i.lastQuery = t, r = i.sifter.search(t, n.extend(s, {
                    score: e
                })), i.currentResults = r) : r = n.extend(!0, {}, i.currentResults), o.hideSelected)
                for (f = r.items.length - 1; f >= 0; f--) i.items.indexOf(u(r.items[f].id)) !== -1 && r.items.splice(f, 1);
            return r
        },
        refreshOptions: function(t) {
            var f, v, tt, e, s, l, k, it, r, y, p, a, g, h, w, b;
            "undefined" == typeof t && (t = !0);
            var i = this,
                nt = n.trim(i.$control_input.val()),
                o = i.search(nt),
                c = i.$dropdown_content,
                rt = i.$activeOption && u(i.$activeOption.attr("data-value"));
            for (e = o.items.length, "number" == typeof i.settings.maxOptions && (e = Math.min(e, i.settings.maxOptions)), s = {}, l = [], f = 0; f < e; f++)
                for (k = i.options[o.items[f].id], it = i.render("option", k), r = k[i.settings.optgroupField] || "", y = n.isArray(r) ? r : [r], v = 0, tt = y && y.length; v < tt; v++) r = y[v], i.optgroups.hasOwnProperty(r) || (r = ""), s.hasOwnProperty(r) || (s[r] = document.createDocumentFragment(), l.push(r)), s[r].appendChild(it);
            for (this.settings.lockOptgroupOrder && l.sort(function(n, t) {
                    var r = i.optgroups[n].$order || 0,
                        u = i.optgroups[t].$order || 0;
                    return r - u
                }), p = document.createDocumentFragment(), f = 0, e = l.length; f < e; f++) r = l[f], i.optgroups.hasOwnProperty(r) && s[r].childNodes.length ? (a = document.createDocumentFragment(), a.appendChild(i.render("optgroup_header", i.optgroups[r])), a.appendChild(s[r]), p.appendChild(i.render("optgroup", n.extend({}, i.optgroups[r], {
                html: wt(a),
                dom: a
            })))) : p.appendChild(s[r]);
            if (c.html(p), i.settings.highlight && o.query.length && o.tokens.length)
                for (c.removeHighlight(), f = 0, e = o.tokens.length; f < e; f++) d(c, o.tokens[f].regex);
            if (!i.settings.hideSelected)
                for (f = 0, e = i.items.length; f < e; f++) i.getOption(i.items[f]).addClass("selected");
            g = i.canCreate(nt);
            g && (c.prepend(i.render("option_create", {
                input: nt
            })), b = n(c[0].childNodes[0]));
            i.hasOptions = o.items.length > 0 || g;
            i.hasOptions ? (o.items.length > 0 ? (w = rt && i.getOption(rt), w && w.length ? h = w : "single" === i.settings.mode && i.items.length && (h = i.getOption(i.items[0])), h && h.length || (h = b && !i.settings.addPrecedence ? i.getAdjacentOption(b, 1) : c.find("[data-selectable]:first"))) : h = b, i.setActiveOption(h), t && !i.isOpen && i.open()) : (i.setActiveOption(null), t && i.isOpen && i.close())
        },
        addOption: function(t) {
            var r, f, u, i = this;
            if (n.isArray(t))
                for (r = 0, f = t.length; r < f; r++) i.addOption(t[r]);
            else(u = i.registerOption(t)) && (i.userOptions[u] = !0, i.lastQuery = null, i.trigger("option_add", u, t))
        },
        registerOption: function(n) {
            var t = u(n[this.settings.valueField]);
            return "undefined" != typeof t && null !== t && !this.options.hasOwnProperty(t) && (n.$order = n.$order || ++this.order, this.options[t] = n, t)
        },
        registerOptionGroup: function(n) {
            var t = u(n[this.settings.optgroupValueField]);
            return !!t && (n.$order = n.$order || ++this.order, this.optgroups[t] = n, t)
        },
        addOptionGroup: function(n, t) {
            t[this.settings.optgroupValueField] = n;
            (n = this.registerOptionGroup(t)) && this.trigger("optgroup_add", n, t)
        },
        removeOptionGroup: function(n) {
            this.optgroups.hasOwnProperty(n) && (delete this.optgroups[n], this.renderCache = {}, this.trigger("optgroup_remove", n))
        },
        clearOptionGroups: function() {
            this.optgroups = {};
            this.renderCache = {};
            this.trigger("optgroup_clear")
        },
        updateOption: function(t, i) {
            var s, h, f, c, e, o, l, r = this;
            if (t = u(t), f = u(i[r.settings.valueField]), null !== t && r.options.hasOwnProperty(t)) {
                if ("string" != typeof f) throw new Error("Value must be set in option data");
                l = r.options[t].$order;
                f !== t && (delete r.options[t], c = r.items.indexOf(t), c !== -1 && r.items.splice(c, 1, f));
                i.$order = i.$order || l;
                r.options[f] = i;
                e = r.renderCache.item;
                o = r.renderCache.option;
                e && (delete e[t], delete e[f]);
                o && (delete o[t], delete o[f]);
                r.items.indexOf(f) !== -1 && (s = r.getItem(t), h = n(r.render("item", i)), s.hasClass("active") && h.addClass("active"), s.replaceWith(h));
                r.lastQuery = null;
                r.isOpen && r.refreshOptions(!1)
            }
        },
        removeOption: function(n, t) {
            var i = this,
                r, f;
            n = u(n);
            r = i.renderCache.item;
            f = i.renderCache.option;
            r && delete r[n];
            f && delete f[n];
            delete i.userOptions[n];
            delete i.options[n];
            i.lastQuery = null;
            i.trigger("option_remove", n);
            i.removeItem(n, t)
        },
        clearOptions: function() {
            var n = this;
            n.loadedSearches = {};
            n.userOptions = {};
            n.renderCache = {};
            n.options = n.sifter.items = {};
            n.lastQuery = null;
            n.trigger("option_clear");
            n.clear()
        },
        getOption: function(n) {
            return this.getElementWithValue(n, this.$dropdown_content.find("[data-selectable]"))
        },
        getAdjacentOption: function(t, i) {
            var r = this.$dropdown.find("[data-selectable]"),
                u = r.index(t) + i;
            return u >= 0 && u < r.length ? r.eq(u) : n()
        },
        getElementWithValue: function(t, i) {
            if (t = u(t), "undefined" != typeof t && null !== t)
                for (var r = 0, f = i.length; r < f; r++)
                    if (i[r].getAttribute("data-value") === t) return n(i[r]);
            return n()
        },
        getItem: function(n) {
            return this.getElementWithValue(n, this.$control.children())
        },
        addItems: function(t, i) {
            for (var u = n.isArray(t) ? t : [t], r = 0, f = u.length; r < f; r++) this.isPending = r < f - 1, this.addItem(u[r], i)
        },
        addItem: function(t, i) {
            var r = i ? [] : ["change"];
            k(this, r, function() {
                var e, s, h, o, c, r = this,
                    f = r.settings.mode;
                return t = u(t), r.items.indexOf(t) !== -1 ? void("single" === f && r.close()) : void(r.options.hasOwnProperty(t) && ("single" === f && r.clear(i), "multi" === f && r.isFull() || (e = n(r.render("item", r.options[t])), c = r.isFull(), r.items.splice(r.caretPos, 0, t), r.insertAtCaret(e), (!r.isPending || !c && r.isFull()) && r.refreshState(), r.isSetup && (h = r.$dropdown_content.find("[data-selectable]"), r.isPending || (s = r.getOption(t), o = r.getAdjacentOption(s, 1).attr("data-value"), r.refreshOptions(r.isFocused && "single" !== f), o && r.setActiveOption(r.getOption(o))), !h.length || r.isFull() ? r.close() : r.positionDropdown(), r.updatePlaceholder(), r.trigger("item_add", t, e), r.updateOriginalInput({
                    silent: i
                })))))
            })
        },
        removeItem: function(t, i) {
            var f, e, o, r = this;
            f = t instanceof n ? t : r.getItem(t);
            t = u(f.attr("data-value"));
            e = r.items.indexOf(t);
            e !== -1 && (f.remove(), f.hasClass("active") && (o = r.$activeItems.indexOf(f[0]), r.$activeItems.splice(o, 1)), r.items.splice(e, 1), r.lastQuery = null, !r.settings.persist && r.userOptions.hasOwnProperty(t) && r.removeOption(t, i), e < r.caretPos && r.setCaret(r.caretPos - 1), r.refreshState(), r.updatePlaceholder(), r.updateOriginalInput({
                silent: i
            }), r.positionDropdown(), r.trigger("item_remove", t, f))
        },
        createItem: function(t, i) {
            var r = this,
                s = r.caretPos,
                f;
            if (t = t || n.trim(r.$control_input.val() || ""), f = arguments[arguments.length - 1], "function" != typeof f && (f = function() {}), "boolean" != typeof i && (i = !0), !r.canCreate(t)) return f(), !1;
            r.lock();
            var h = "function" == typeof r.settings.create ? this.settings.create : function(n) {
                    var t = {};
                    return t[r.settings.labelField] = n, t[r.settings.valueField] = n, t
                },
                e = ct(function(n) {
                    if (r.unlock(), !n || "object" != typeof n) return f();
                    var t = u(n[r.settings.valueField]);
                    return "string" != typeof t ? f() : (r.setTextboxValue(""), r.addOption(n), r.setCaret(s), r.addItem(t), r.refreshOptions(i && "single" !== r.settings.mode), void f(n))
                }),
                o = h.apply(this, [t, e]);
            return "undefined" != typeof o && e(o), !0
        },
        refreshItems: function() {
            this.lastQuery = null;
            this.isSetup && this.addItem(this.items);
            this.refreshState();
            this.updateOriginalInput()
        },
        refreshState: function() {
            this.refreshValidityState();
            this.refreshClasses()
        },
        refreshValidityState: function() {
            if (!this.isRequired) return !1;
            var n = !this.items.length;
            this.isInvalid = n;
            this.$control_input.prop("required", n);
            this.$input.prop("required", !n)
        },
        refreshClasses: function() {
            var t = this,
                i = t.isFull(),
                r = t.isLocked;
            t.$wrapper.toggleClass("rtl", t.rtl);
            t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", r).toggleClass("full", i).toggleClass("not-full", !i).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !n.isEmptyObject(t.options)).toggleClass("has-items", t.items.length > 0);
            t.$control_input.data("grow", !i && !r)
        },
        isFull: function() {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
        },
        updateOriginalInput: function(n) {
            var i, u, r, f, t = this;
            if (n = n || {}, t.tagType === h) {
                for (r = [], i = 0, u = t.items.length; i < u; i++) f = t.options[t.items[i]][t.settings.labelField] || "", r.push('<option value="' + s(t.items[i]) + '" selected="selected">' + s(f) + "<\/option>");
                r.length || this.$input.attr("multiple") || r.push('<option value="" selected="selected"><\/option>');
                t.$input.html(r.join(""))
            } else t.$input.val(t.getValue()), t.$input.attr("value", t.$input.val());
            t.isSetup && (n.silent || t.trigger("change", t.$input.val()))
        },
        updatePlaceholder: function() {
            if (this.settings.placeholder) {
                var n = this.$control_input;
                this.items.length ? n.removeAttr("placeholder") : n.attr("placeholder", this.settings.placeholder);
                n.triggerHandler("update", {
                    force: !0
                })
            }
        },
        open: function() {
            var n = this;
            n.isLocked || n.isOpen || "multi" === n.settings.mode && n.isFull() || (n.focus(), n.isOpen = !0, n.refreshState(), n.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }), n.positionDropdown(), n.$dropdown.css({
                visibility: "visible"
            }), n.trigger("dropdown_open", n.$dropdown))
        },
        close: function() {
            var n = this,
                t = n.isOpen;
            "single" === n.settings.mode && n.items.length && (n.hideInput(), n.$control_input.blur());
            n.isOpen = !1;
            n.$dropdown.hide();
            n.setActiveOption(null);
            n.refreshState();
            t && n.trigger("dropdown_close", n.$dropdown)
        },
        positionDropdown: function() {
            var n = this.$control,
                t = "body" === this.settings.dropdownParent ? n.offset() : n.position();
            t.top += n.outerHeight(!0);
            this.$dropdown.css({
                width: n.outerWidth(),
                top: t.top,
                left: t.left
            })
        },
        clear: function(n) {
            var t = this;
            t.items.length && (t.$control.children(":not(input)").remove(), t.items = [], t.lastQuery = null, t.setCaret(0), t.setActiveItem(null), t.updatePlaceholder(), t.updateOriginalInput({
                silent: n
            }), t.refreshState(), t.showInput(), t.trigger("clear"))
        },
        insertAtCaret: function(t) {
            var i = Math.min(this.caretPos, this.items.length);
            0 === i ? this.$control.prepend(t) : n(this.$control[0].childNodes[i]).before(t);
            this.setCaret(i + 1)
        },
        deleteSelection: function(t) {
            var f, l, u, e, r, s, h, c, a, i = this;
            if (u = t && t.keyCode === o ? -1 : 1, e = v(i.$control_input[0]), i.$activeOption && !i.settings.hideSelected && (h = i.getAdjacentOption(i.$activeOption, -1).attr("data-value")), r = [], i.$activeItems.length) {
                for (a = i.$control.children(".active:" + (u > 0 ? "last" : "first")), s = i.$control.children(":not(input)").index(a), u > 0 && s++, f = 0, l = i.$activeItems.length; f < l; f++) r.push(n(i.$activeItems[f]).attr("data-value"));
                t && (t.preventDefault(), t.stopPropagation())
            } else(i.isFocused || "single" === i.settings.mode) && i.items.length && (u < 0 && 0 === e.start && 0 === e.length ? r.push(i.items[i.caretPos - 1]) : u > 0 && e.start === i.$control_input.val().length && r.push(i.items[i.caretPos]));
            if (!r.length || "function" == typeof i.settings.onDelete && i.settings.onDelete.apply(i, [r]) === !1) return !1;
            for ("undefined" != typeof s && i.setCaret(s); r.length;) i.removeItem(r.pop());
            return i.showInput(), i.positionDropdown(), i.refreshOptions(!0), h && (c = i.getOption(h), c.length && i.setActiveOption(c)), !0
        },
        advanceSelection: function(n, t) {
            var o, r, u, f, s, e, i = this;
            0 !== n && (i.rtl && (n *= -1), o = n > 0 ? "last" : "first", r = v(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, s = n < 0 ? 0 === r.start && 0 === r.length : r.start === f, s && !f && i.advanceCaret(n, t)) : (e = i.$control.children(".active:" + o), e.length && (u = i.$control.children(":not(input)").index(e), i.setActiveItem(null), i.setCaret(n > 0 ? u + 1 : u))))
        },
        advanceCaret: function(n, t) {
            var u, r, i = this;
            0 !== n && (u = n > 0 ? "next" : "prev", i.isShiftDown ? (r = i.$control_input[u](), r.length && (i.hideInput(), i.setActiveItem(r), t && t.preventDefault())) : i.setCaret(i.caretPos + n))
        },
        setCaret: function(t) {
            var i = this,
                r, e, u, f;
            if (t = "single" === i.settings.mode ? i.items.length : Math.max(0, Math.min(i.items.length, t)), !i.isPending)
                for (u = i.$control.children(":not(input)"), r = 0, e = u.length; r < e; r++) f = n(u[r]).detach(), r < t ? i.$control_input.before(f) : i.$control.append(f);
            i.caretPos = t
        },
        lock: function() {
            this.close();
            this.isLocked = !0;
            this.refreshState()
        },
        unlock: function() {
            this.isLocked = !1;
            this.refreshState()
        },
        disable: function() {
            var n = this;
            n.$input.prop("disabled", !0);
            n.$control_input.prop("disabled", !0).prop("tabindex", -1);
            n.isDisabled = !0;
            n.lock()
        },
        enable: function() {
            var n = this;
            n.$input.prop("disabled", !1);
            n.$control_input.prop("disabled", !1).prop("tabindex", n.tabIndex);
            n.isDisabled = !1;
            n.unlock()
        },
        destroy: function() {
            var t = this,
                i = t.eventNS,
                r = t.revertSettings;
            t.trigger("destroy");
            t.off();
            t.$wrapper.remove();
            t.$dropdown.remove();
            t.$input.html("").append(r.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: r.tabindex
            }).show();
            t.$control_input.removeData("grow");
            t.$input.removeData("selectize");
            n(window).off(i);
            n(document).off(i);
            n(document.body).off(i);
            delete t.$input[0].selectize
        },
        render: function(t, i) {
            var f, h, e = "",
                o = !1,
                r = this;
            return "option" !== t && "item" !== t || (f = u(i[r.settings.valueField]), o = !!f), o && (b(r.renderCache[t]) || (r.renderCache[t] = {}), r.renderCache[t].hasOwnProperty(f)) ? r.renderCache[t][f] : (e = n(r.settings.render[t].apply(this, [i, s])), "option" === t || "option_create" === t ? e.attr("data-selectable", "") : "optgroup" === t && (h = i[r.settings.optgroupValueField] || "", e.attr("data-group", h)), "option" !== t && "item" !== t || e.attr("data-value", f || ""), o && (r.renderCache[t][f] = e[0]), e[0])
        },
        clearCache: function(n) {
            var t = this;
            "undefined" == typeof n ? t.renderCache = {} : delete t.renderCache[n]
        },
        canCreate: function(n) {
            var i = this,
                t;
            return i.settings.create ? (t = i.settings.createFilter, n.length && ("function" != typeof t || t.apply(i, [n])) && ("string" != typeof t || new RegExp(t).test(n)) && (!(t instanceof RegExp) || t.test(n))) : !1
        }
    }), r.count = 0, r.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
    }, n.fn.selectize = function(t) {
        var h = n.fn.selectize.defaults,
            i = n.extend({}, h, t),
            o = i.dataAttr,
            s = i.labelField,
            e = i.valueField,
            f = i.optgroupField,
            c = i.optgroupLabelField,
            l = i.optgroupValueField,
            a = function(t, r) {
                var u, h, f, c, a = t.attr(o),
                    l;
                if (a)
                    for (r.options = JSON.parse(a), u = 0, h = r.options.length; u < h; u++) r.items.push(r.options[u][e]);
                else {
                    if (l = n.trim(t.val() || ""), !i.allowEmptyOption && !l.length) return;
                    for (f = l.split(i.delimiter), u = 0, h = f.length; u < h; u++) c = {}, c[s] = f[u], c[e] = f[u], r.options.push(c);
                    r.items = f
                }
            },
            v = function(t, r) {
                var h, p, y, a, k = r.options,
                    v = {},
                    w = function(n) {
                        var t = o && n.attr(o);
                        return "string" == typeof t && t.length ? JSON.parse(t) : null
                    },
                    b = function(t, o) {
                        var h, l, c;
                        t = n(t);
                        h = u(t.val());
                        (h || i.allowEmptyOption) && (v.hasOwnProperty(h) ? o && (l = v[h][f], l ? n.isArray(l) ? l.push(o) : v[h][f] = [l, o] : v[h][f] = o) : (c = w(t) || {}, c[s] = c[s] || t.text(), c[e] = c[e] || h, c[f] = c[f] || o, v[h] = c, k.push(c), t.is(":selected") && r.items.push(h)))
                    },
                    d = function(t) {
                        var u, o, i, f, e;
                        for (t = n(t), i = t.attr("label"), i && (f = w(t) || {}, f[c] = i, f[l] = i, r.optgroups.push(f)), e = n("option", t), u = 0, o = e.length; u < o; u++) b(e[u], i)
                    };
                for (r.maxItems = t.attr("multiple") ? null : 1, a = t.children(), h = 0, p = a.length; h < p; h++) y = a[h].tagName.toLowerCase(), "optgroup" === y ? d(a[h]) : "option" === y && b(a[h])
            };
        return this.each(function() {
            var f;
            if (!this.selectize) {
                var o, u = n(this),
                    s = this.tagName.toLowerCase(),
                    e = u.attr("placeholder") || u.attr("data-placeholder");
                e || i.allowEmptyOption || (e = u.children('option[value=""]').text());
                f = {
                    placeholder: e,
                    options: [],
                    optgroups: [],
                    items: []
                };
                "select" === s ? v(u, f) : a(u, f);
                o = new r(u, n.extend(!0, {}, h, f, t))
            }
        })
    }, n.fn.selectize.defaults = r.defaults, n.fn.selectize.support = {
        validity: w
    }, r.define("drag_drop", function() {
        if (!n.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var t = this;
            t.lock = function() {
                var n = t.lock;
                return function() {
                    var i = t.$control.data("sortable");
                    return i && i.disable(), n.apply(t, arguments)
                }
            }();
            t.unlock = function() {
                var n = t.unlock;
                return function() {
                    var i = t.$control.data("sortable");
                    return i && i.enable(), n.apply(t, arguments)
                }
            }();
            t.setup = function() {
                var i = t.setup;
                return function() {
                    i.apply(this, arguments);
                    var r = t.$control.sortable({
                        items: "[data-value]",
                        forcePlaceholderSize: !0,
                        disabled: t.isLocked,
                        start: function(n, t) {
                            t.placeholder.css("width", t.helper.css("width"));
                            r.css({
                                overflow: "visible"
                            })
                        },
                        stop: function() {
                            r.css({
                                overflow: "hidden"
                            });
                            var u = t.$activeItems ? t.$activeItems.slice() : null,
                                i = [];
                            r.children("[data-value]").each(function() {
                                i.push(n(this).attr("data-value"))
                            });
                            t.setValue(i);
                            t.setActiveItem(u)
                        }
                    })
                }
            }()
        }
    }), r.define("dropdown_header", function(t) {
        var i = this;
        t = n.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function(n) {
                return '<div class="' + n.headerClass + '"><div class="' + n.titleRowClass + '"><span class="' + n.labelClass + '">' + n.title + '<\/span><a href="javascript:void(0)" class="' + n.closeClass + '">&times;<\/a><\/div><\/div>'
            }
        }, t);
        i.setup = function() {
            var r = i.setup;
            return function() {
                r.apply(i, arguments);
                i.$dropdown_header = n(t.html(t));
                i.$dropdown.prepend(i.$dropdown_header)
            }
        }()
    }), r.define("optgroup_columns", function(t) {
        var i = this,
            r, u;
        t = n.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, t);
        this.getAdjacentOption = function(t, i) {
            var r = t.closest("[data-group]").find("[data-selectable]"),
                u = r.index(t) + i;
            return u >= 0 && u < r.length ? r.eq(u) : n()
        };
        this.onKeyDown = function() {
            var n = i.onKeyDown;
            return function(t) {
                var e, u, f, r;
                return !this.isOpen || t.keyCode !== l && t.keyCode !== y ? n.apply(this, arguments) : (i.ignoreHover = !0, r = this.$activeOption.closest("[data-group]"), e = r.find("[data-selectable]").index(this.$activeOption), r = t.keyCode === l ? r.prev("[data-group]") : r.next("[data-group]"), f = r.find("[data-selectable]"), u = f.eq(Math.min(f.length - 1, e)), void(u.length && this.setActiveOption(u)))
            }
        }();
        r = function() {
            var n, t = r.width,
                i = document;
            return "undefined" == typeof t && (n = i.createElement("div"), n.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"><\/div><\/div>', n = n.firstChild, i.body.appendChild(n), t = r.width = n.offsetWidth - n.clientWidth, i.body.removeChild(n)), t
        };
        u = function() {
            var e, u, o, s, c, h, f;
            if (f = n("[data-group]", i.$dropdown_content), u = f.length, u && i.$dropdown_content.width()) {
                if (t.equalizeHeight) {
                    for (o = 0, e = 0; e < u; e++) o = Math.max(o, f.eq(e).height());
                    f.css({
                        height: o
                    })
                }
                t.equalizeWidth && (h = i.$dropdown_content.innerWidth() - r(), s = Math.round(h / u), f.css({
                    width: s
                }), u > 1 && (c = h - s * (u - 1), f.eq(u - 1).css({
                    width: c
                })))
            }
        };
        (t.equalizeHeight || t.equalizeWidth) && (c.after(this, "positionDropdown", u), c.after(this, "refreshOptions", u))
    }), r.define("remove_button", function(t) {
        t = n.extend({
            label: "&times;",
            title: "Remove",
            className: "remove",
            append: !0
        }, t);
        var i = function(t, i) {
                i.className = "remove-single";
                var r = t,
                    u = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + s(i.title) + '">' + i.label + "<\/a>",
                    f = function(n, t) {
                        return n + t
                    };
                t.setup = function() {
                    var e = r.setup;
                    return function() {
                        if (i.append) {
                            var o = n(r.$input.context).attr("id"),
                                s = (n("#" + o), r.settings.render.item);
                            r.settings.render.item = function() {
                                return f(s.apply(t, arguments), u)
                            }
                        }
                        e.apply(t, arguments);
                        t.$control.on("click", "." + i.className, function(n) {
                            n.preventDefault();
                            r.isLocked || r.clear()
                        })
                    }
                }()
            },
            r = function(t, i) {
                var r = t,
                    u = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + s(i.title) + '">' + i.label + "<\/a>",
                    f = function(n, t) {
                        var i = n.search(/(<\/[^>]+>\s*)$/);
                        return n.substring(0, i) + t + n.substring(i)
                    };
                t.setup = function() {
                    var e = r.setup;
                    return function() {
                        if (i.append) {
                            var o = r.settings.render.item;
                            r.settings.render.item = function() {
                                return f(o.apply(t, arguments), u)
                            }
                        }
                        e.apply(t, arguments);
                        t.$control.on("click", "." + i.className, function(t) {
                            if (t.preventDefault(), !r.isLocked) {
                                var i = n(t.currentTarget).parent();
                                r.setActiveItem(i);
                                r.deleteSelection() && r.setCaret(r.items.length)
                            }
                        })
                    }
                }()
            };
        return "single" === this.settings.mode ? void i(this, t) : void r(this, t)
    }), r.define("restore_on_backspace", function(n) {
        var t = this;
        n.text = n.text || function(n) {
            return n[this.settings.labelField]
        };
        this.onKeyDown = function() {
            var i = t.onKeyDown;
            return function(t) {
                var r, u;
                return t.keyCode === o && "" === this.$control_input.val() && !this.$activeItems.length && (r = this.caretPos - 1, r >= 0 && r < this.items.length) ? (u = this.options[this.items[r]], this.deleteSelection(t) && (this.setTextboxValue(n.text.apply(this, [u])), this.refreshOptions(!0)), void t.preventDefault()) : i.apply(this, arguments)
            }
        }()
    }), r
});
var GoogleMaps = function() {
        var t = this,
            i = [],
            n = {
                Height: 430,
                Zoom: 12,
                Styles: [{
                    featureType: "all",
                    elementType: "all",
                    stylers: [{
                        hue: "#ff6800"
                    }, {
                        saturation: "20"
                    }, {
                        lightness: "-8"
                    }, {
                        gamma: "1.00"
                    }, {
                        weight: "1.12"
                    }]
                }],
                ShowInfoBox: !1,
                Icon: {
                    url: "/Content/imgs/marker.png",
                    size: [30, 40],
                    origin: [0, 0],
                    anchor: [30, 40]
                }
            };
        return t.Configure = function(t) {
            n = $.extend(n, t)
        }, t.Init = function(r, u, f) {
            var e, h, s, o;
            if (typeof google == typeof undefined || typeof google.maps == typeof undefined) {
                console.error("GoogleMaps is undefined");
                return
            }
            if (e = $("#" + r), !e.length) {
                console.error('GoogleMaps container with id #"' + r + '" not found');
                return
            }
            for (e.height() === 0 && e.height(n.Height), h = {
                    center: new google.maps.LatLng(f.lat, f.lng),
                    zoom: n.Zoom,
                    styles: n.Styles,
                    scrollwheel: !1
                }, s = new google.maps.Map(e[0], h), o = 0; o < u.length; o++) t.AddMarker(s, u[o]);
            i[r] = s
        }, t.AddMarker = function(t, i) {
            var u;
            if (t && i) {
                var f = new google.maps.LatLng(i.lat, i.lng),
                    e = {
                        url: n.Icon.url,
                        size: new google.maps.Size(n.Icon.size[0], n.Icon.size[1]),
                        origin: new google.maps.Point(n.Icon.origin[0], n.Icon.origin[1]),
                        anchor: new google.maps.Point(n.Icon.anchor[0], n.Icon.anchor[1])
                    },
                    r = new google.maps.Marker({
                        position: f,
                        map: t,
                        icon: e,
                        title: i.title,
                        draggable: !1
                    });
                i.title && n.ShowInfoBox && (u = new google.maps.InfoWindow({
                    content: "<strong>" + i.title + "<\/strong>"
                }), r.addListener("click", function() {
                    u.open(this.map.instance, r)
                }))
            }
        }, t.CenterMap = function(n, t) {
            var r = i[n];
            if (typeof r == typeof undefined) {
                console.error("GoogleMap #" + n + " is not initialized");
                return
            }
            r.setCenter(new google.maps.LatLng(t[0], t[1]))
        }, t
    }(),
    GoogleMapsUtils = new function() {
        var n = this;
        return n.ParseLocations = function(n) {
            var u, t;
            if (!n || !n.length) return [];
            for (n = n.split("#"), u = [], t = 0; t < n.length; t++) {
                var i = {
                        lat: "0",
                        lng: "0",
                        title: ""
                    },
                    r = n[t].split("|"),
                    f = r.length;
                f > 0 && (i.lat = r[0]);
                f > 1 && (i.lng = r[1]);
                f > 2 && (i.title = r[2]);
                u.push(i)
            }
            return u
        }, n.ParseCenter = function(n) {
            if (!n || !n.length) return {
                lat: "0",
                lng: "0"
            };
            var t = {
                    lat: "0",
                    lng: "0"
                },
                i = n.split(","),
                r = i.length;
            return r > 0 && (t.lat = i[0]), r > 1 && (t.lng = i[1]), t
        }, n
    },
    reCAPTCHAHelper = new function() {
        var n = this,
            t = "__CaptchaVerificationToken";
        n.GetKey = function() {
            return $("script[data-recaptcha]").attr("data-recaptcha")
        };
        n.Init = function(i) {
            $(i).find('[data-plugin="grecaptchav3"]').each(function() {
                try {
                    var r = $(this),
                        i = r.closest("form");
                    grecaptcha.execute(n.GetKey(), {
                        action: i.attr("data-action") || "form"
                    }).then(function(n) {
                        var r = i.find('input[type="hidden"][name="' + t + '"]');
                        r.length === 0 && (r = $('<input type="hidden" name="' + t + '" value=""/>'), i.append(r));
                        r.val(n);
                        i.find("button[disabled]").removeAttr("disabled")
                    })
                } catch (u) {}
            });
            $(i).find('form[data-plugin="captcha"]').each(function() {
                try {
                    var i = $(this);
                    grecaptcha.execute(n.GetKey(), {
                        action: i.attr("data-action") || "form"
                    }).then(function(n) {
                        var r = i.find('input[type="hidden"][name="' + t + '"]');
                        r.length === 0 && (r = $('<input type="hidden" name="' + t + '" value=""/>'), i.append(r));
                        r.val(n);
                        i.find("button[disabled]").removeAttr("disabled")
                    })
                } catch (r) {}
            })
        };
        n.Reset = function(i) {
            try {
                var r = $(i);
                grecaptcha.execute(n.GetKey(), {
                    action: $(i).attr("data-action") || "form"
                }).then(function(n) {
                    var i = r.find('input[type="hidden"][name="' + t + '"]');
                    i.length === 0 && (i = $('<input type="hidden" name="' + t + '" value=""/>'), r.append(i));
                    i.val(n)
                })
            } catch (u) {}
        };
        n.Reload = function(i) {
            try {
                $(i).find('[name="' + t + '"]').each(function() {
                    var t = $(this),
                        i = $(this).closest("form");
                    grecaptcha.execute(n.GetKey(), {
                        action: i.attr("data-action") || "form"
                    }).then(function(n) {
                        t.val(n)
                    })
                })
            } catch (r) {}
        }
    };
onReCAPTCHALoaded = function() {
    reCAPTCHAHelper.Init("body");
    window.setInterval(function() {
        reCAPTCHAHelper.Reload("body")
    }, 6e4)
};
zForms = new function() {
    var n = this,
        t = {
            successFunction: function(n) {
                App.ShowSuccessMessage(n)
            },
            errorFunction: function(n) {
                App.ShowErrorMessage(n)
            }
        };
    n.SetSuccessMessage = function(n) {
        t.successFunction = n
    };
    n.SetErrorMessage = function(n) {
        t.errorFunction = n
    };
    n.Init = function(t) {
        n.BindFileInputs(t);
        n.BindCheckboxes(t);
        n.BindForms(t)
    };
    n.BindFileInputs = function(n) {
        $(n).find('.custom-file > input[type="file"]').change(function(n) {
            if (n.target.files.length > 0) {
                var t = n.target.files[0].name;
                $(this).parent().find("label").html(t)
            }
        })
    };
    n.BindCheckboxes = function(n) {
        $(n).find("[checkbox-required]").each(function() {
            var n = $(this),
                t = n.find('input[type="checkbox"]').first();
            n.find('input[type="checkbox"]').change(function() {
                n.find("input:checked").val() ? t.removeAttr("required") : t.attr("required", "required")
            })
        })
    };
    n.BindForms = function(t) {
        var i = 0;
        $(t).find(".zForm").each(function() {
            var t = $(this).attr("id");
            t && t.length || (t = "__" + $(this).attr("data-id-form") + "_" + i, i++, $(this).attr("id", t));
            n.HandleForm(this)
        })
    };
    n.HandleForm = function(n) {
        var i = $(n);
        i.unbind("submit").submit(function(r) {
            r.preventDefault();
            i.addClass("loading");
            var u = new FormData(document.getElementById(i.attr("id")));
            return $.ajax({
                url: i.attr("action"),
                type: "POST",
                data: u,
                cache: !1,
                dataType: "json",
                processData: !1,
                contentType: !1,
                success: function(n) {
                    n.Error ? t.errorFunction(n.Message) : (t.successFunction(n.Message), i.trigger("reset"), i.find(".custom-file > label").each(function() {
                        $(this).html($(this).attr("data-name"))
                    }))
                },
                error: function(n, i, r) {
                    t.errorFunction(r)
                },
                complete: function() {
                    try {
                        var t = i.attr("data-plugin");
                        t && t === "captcha" && reCAPTCHAHelper.Reset(n)
                    } catch (r) {}
                    i.removeClass("loading")
                }
            }), !1
        })
    }
};
zPopups = new function() {
    var t = this,
        i = null,
        n = {
            successFunction: function(n) {
                App.ShowSuccessMessage(n)
            },
            errorFunction: function(n) {
                App.ShowErrorMessage(n)
            },
            storage: {},
            element: "_PopupModal"
        },
        r = function(i) {
            t.OpenModal(n.storage[i])
        },
        u = function(t) {
            $.ajax({
                url: "/Popup/m-" + t + "?IdPage=" + (zManagerData && zManagerData.IdPage ? zManagerData.IdPage : ""),
                type: "GET",
                success: function(i) {
                    n.storage[t] = i;
                    r(t)
                },
                error: function() {
                    n.errorFunction(window.Language.PopupNotFound)
                }
            })
        };
    t.SetSuccessMessage = function(t) {
        n.successFunction = t
    };
    t.SetErrorMessage = function(t) {
        n.errorFunction = t
    };
    t.Init = function() {
        $("body").prepend('<div class="modal fade zPopup" id="' + n.element + '" tabindex="-1" role="dialog" aria-labelledby="' + n.element + 'Label" aria-hidden="true"><\/div>');
        i = $("#" + n.element);
        App.IsEditMode() || $("#_PopupModalEdit").length > 0 && ($("body").addClass("popup-editing"), zManager.EditPopup($("#_PopupModalEdit").attr("data-id")))
    };
    t.BindElements = function(t) {
        if ($(t).find("[data-popup]").click(function(t) {
                if (t.preventDefault(), !App.IsEditMode()) {
                    var i = parseInt($(this).attr("data-popup"));
                    n.storage[i] ? r(i) : u(i)
                }
            }), $(t).find("a[href^=m-]").click(function(t) {
                if (t.preventDefault(), !App.IsEditMode()) {
                    var i = parseInt($(this).attr("href").substring(2));
                    n.storage[i] ? r(i) : u(i)
                }
            }), !App.IsEditMode()) {
            if ($(t).find('[data-autopopup="permanent"]').length) {
                $(t).find('[data-autopopup="permanent"]').modal({
                    show: !0,
                    keyboard: !0,
                    focus: !0
                });
                $(t).find('[data-autopopup="permanent"]').on("hidden.bs.modal", function() {
                    $(t).find('[data-autopopup="permanent"]').remove()
                })
            }
            if ($(t).find('[data-autopopup="cookie"]').length) {
                $(t).find('[data-autopopup="cookie"]').modal({
                    backdrop: "static",
                    show: !0,
                    keyboard: !1,
                    focus: !0
                });
                $(t).find('[data-autopopup="cookie"]').on("hidden.bs.modal", function() {
                    App.SetCookie($(this).attr("id"), "1", (new Date).getDate() + 30);
                    $(t).find('[data-autopopup="cookie"]').remove()
                })
            }
        }
    };
    t.OpenModal = function(n) {
        $("body").addClass("modal-open").attr("style", "display:block;");
        i.addClass("show").attr("style", "padding-right:17px; display:block;");
        setTimeout(function() {
            i.html(n);
            i.find(".slick-slider").length > 0 && i.find(".slick-slider").slick("slickGoTo", 0)
        }, 10);
        setTimeout(function() {
            i.find(".slick-slider").length > 0 && i.find(".slick-slider").slick("slickGoTo", 0);
            i.find('[data-dismiss="modal"]').click(function(n) {
                n.preventDefault();
                t.CloseModal()
            })
        }, 50)
    };
    t.CloseModal = function() {
        $("body").removeClass("modal-open").attr("style", "");
        i.removeClass("show").attr("style", "")
    };
    t.SavePopup = function() {
        var n = $("#_PopupModalEdit .modal-header button");
        if (!n.hasClass("loading")) return n.addClass("loading"), zManager.SavePopup(function() {
            n.removeClass("loading");
            App.ShowSuccessMessage("Editado com sucesso")
        }, function() {
            n.removeClass("loading");
            App.ShowErrorMessage("Não foi possível editar o conteúdo")
        }), !1
    }
};
$(function() {
    zPopups.Init()
});
var BasketHandlers = new function() {
        var t = this,
            n;
        t.InitForms = function(t) {
            $(t).find("form[data-basket-handler]").each(function() {
                n($(this), parseInt($(this).attr("data-basket-handler")))
            })
        };
        n = function(n, t) {
            var r = n.find('button[type="submit"]'),
                i = n.find('[name="Quantity"]'),
                y = n.find('[name="AdditionalInfo"]'),
                h = n.find('[data-basket-action="presenter"]'),
                c = n.find('[data-basket-action="decrement"]'),
                l = n.find('[data-basket-action="increment"]'),
                u = n.find('[data-basket="button"]'),
                f = n.find('[data-basket="loader"]'),
                o = !1,
                a = parseInt(i.attr("min")),
                e = parseInt(i.attr("step")),
                v, s;
            c && c.unbind("click").click(function(n) {
                n.preventDefault();
                var t = parseInt(i.val());
                if (t - e < a) {
                    App.ShowErrorMessage(window.Language.ErrorMinQuantity.replace("{quantity}", a));
                    return
                }
                t -= e;
                i.val(t);
                h.html(t)
            });
            l && l.unbind("click").click(function(n) {
                var t, r, u;
                if (n.preventDefault(), t = parseInt(i.val()), r = i.attr("max"), typeof r != typeof undefined && r !== !1 && (u = parseInt(r), t + e > u)) {
                    App.ShowErrorMessage(window.Language.ErrorMaxQuantity.replace("{quantity}", u));
                    return
                }
                t += e;
                i.val(t);
                h.html(t)
            });
            v = function() {
                o = !0;
                r && r.attr("disabled", "disabled");
                u && u.hide();
                f && f.removeClass("d-none")
            };
            s = function() {
                o = !1;
                r && r.removeAttr("disabled");
                u && u.show();
                f && f.addClass("d-none")
            };
            n.unbind("submit").submit(function(n) {
                if (n.preventDefault(), !o) {
                    v();
                    var r = parseInt(i.val());
                    BasketService.AddProduct(t, r, y.val() || null, function() {
                        BasketService.ShowModalDetailsWithCallback(t, r, function() {
                            s()
                        })
                    }, function(n) {
                        App.ShowErrorMessage(n || window.Language.ArticleNotFound);
                        s()
                    })
                }
            })
        }
    },
    BasketService = new function() {
        var n = this,
            t = {
                lang: $("body").attr("data-lang"),
                position: "right"
            },
            i = $("#BasketModal"),
            r;
        i.length || ($("body").prepend('<div id="BasketModal" class="modal fade basket-position-' + t.position + '" data-backdrop="false"><\/div>'), i = $("#BasketModal"));
        r = {
            Ok: 0,
            Error: 1,
            NotFound: 2,
            StockRestriction: 3
        };
        n.ShowModalDetails = function(n) {
            var r = "?Language=" + t.lang;
            n && (r += "&IdProductVersion=" + n);
            $.ajax({
                url: "/Checkout/Info" + r,
                type: "GET",
                cache: !1,
                success: function(n) {
                    try {
                        i.html(n);
                        i.modal("show")
                    } catch (t) {
                        window.location = "/Checkout"
                    }
                }
            })
        };
        n.ShowModalDetailsWithCallback = function(n, r, u) {
            var f = "?Language=" + t.lang;
            n && (f += "&IdProductVersion=" + n + "&Quantity=" + r);
            $.ajax({
                url: "/Checkout/Info" + f,
                type: "GET",
                cache: !1,
                success: function(n) {
                    try {
                        i.html(n);
                        i.modal("show");
                        u && u()
                    } catch (t) {
                        window.location = "/Checkout"
                    }
                }
            })
        };
        n.AddProduct = function(t, i, r, u, f) {
            return n.AddProductWithFile(t, i, r, null, u, f)
        };
        n.AddProductWithFile = function(n, i, r, u, f, e) {
            return $.ajax({
                url: "/api/basket?Language=" + t.lang,
                type: "POST",
                data: JSON.stringify({
                    IdProductVersion: n,
                    Quantity: i,
                    AdditionalInfo: r,
                    File: u
                }),
                contentType: "application/json",
                cache: !1,
                success: function(n) {
                    f(n)
                },
                error: function(n, t, i) {
                    e(i || n.responseText)
                }
            })
        };
        n.UpdateLineQuantity = function(n, i, r, u) {
            return $.ajax({
                url: "/api/basket/line/" + n + "?Language=" + t.lang,
                type: "PUT",
                data: JSON.stringify(i),
                contentType: "application/json",
                cache: !1,
                success: function(n) {
                    r(n)
                },
                error: function(n, t, i) {
                    u(i || n.responseText)
                }
            })
        };
        n.IncrementQuantity = function(n, i, r, u) {
            return $.ajax({
                url: "/api/basket/line/" + n + "/increment?Language=" + t.lang,
                type: "PUT",
                data: JSON.stringify(i),
                contentType: "application/json",
                cache: !1,
                success: function(n) {
                    r(n)
                },
                error: function(n, t, i) {
                    u(i || n.responseText)
                }
            })
        };
        n.DecrementQuantity = function(n, i, r, u) {
            return $.ajax({
                url: "/api/basket/line/" + n + "/decrement?Language=" + t.lang,
                type: "PUT",
                data: JSON.stringify(i),
                contentType: "application/json",
                cache: !1,
                success: function(n) {
                    r(n)
                },
                error: function(n, t, i) {
                    u(i || n.responseText)
                }
            })
        };
        n.GetDetails = function(n, i) {
            return $.ajax({
                url: "/api/basket/details?Language=" + t.lang,
                type: "GET",
                contentType: "application/json",
                cache: !1,
                success: function(t) {
                    n(t)
                },
                error: function(n, t, r) {
                    i(r || n.responseText)
                }
            })
        };
        n.RemoveLine = function(n, i, r) {
            return $.ajax({
                url: "/api/basket/line/" + n + "?Language=" + t.lang,
                type: "DELETE",
                contentType: "application/json",
                cache: !1,
                success: function(n) {
                    i(n)
                },
                error: function(n, t, i) {
                    r(i || n.responseText)
                }
            })
        };
        n.RemoveCoupon = function(n, i, r) {
            return $.ajax({
                url: "/api/basket/coupon/" + n + "?Language=" + t.lang,
                type: "DELETE",
                contentType: "application/json",
                cache: !1,
                success: function(n) {
                    i(n)
                },
                error: function(n, t, i) {
                    r(i || n.responseText)
                }
            })
        }
    },
    DataLayerHelper = new function() {
        var n = this;
        return n.IsAvailable = function() {
            return typeof dataLayer != "undefined"
        }, n.GenerateProduct = function(n, t, i, r, u, f) {
            return {
                id: n,
                name: t,
                price: i,
                brand: r,
                category: u,
                variant: f
            }
        }, n.User = function(n) {
            try {
                dataLayer.push({
                    Email: n
                })
            } catch (t) {}
        }, n.PageType = function(n) {
            try {
                dataLayer.push({
                    PageType: n
                })
            } catch (t) {}
        }, n.AddToBasket = function(n, t) {
            try {
                var i = n;
                i.quantity = t;
                dataLayer.push({
                    event: "addToCart",
                    ecommerce: {
                        currencyCode: "EUR",
                        add: {
                            products: [i]
                        }
                    }
                })
            } catch (r) {}
        }, n.RemoveFromBasket = function(n, t) {
            try {
                var i = n;
                i.quantity = t;
                dataLayer.push({
                    event: "removeFromCart",
                    ecommerce: {
                        remove: {
                            products: [i]
                        }
                    }
                })
            } catch (r) {}
        }, n.ProductView = function(n) {
            try {
                dataLayer.push({
                    event: "z.detail",
                    ecommerce: {
                        detail: {
                            actionField: {
                                list: "Listagem"
                            },
                            products: [n]
                        }
                    }
                })
            } catch (t) {}
        }, n.OrderCreated = function(n, t, i, r, u) {
            try {
                dataLayer.push({
                    event: "z.purchase",
                    ecommerce: {
                        purchase: {
                            actionField: {
                                id: n,
                                revenue: r.toFixed(2),
                                tax: i.toFixed(2),
                                shipping: t.toFixed(2)
                            },
                            products: u
                        }
                    }
                })
            } catch (f) {}
        }, n.BasketStep = function(n, t, i) {
            try {
                dataLayer.push({
                    event: "checkout",
                    ecommerce: {
                        checkout: {
                            actionField: {
                                step: n,
                                option: t
                            },
                            products: i
                        }
                    }
                })
            } catch (r) {}
        }, n.BasketStepWithoutProducts = function(n, t) {
            try {
                dataLayer.push({
                    event: "checkout",
                    ecommerce: {
                        checkout: {
                            actionField: {
                                step: n,
                                option: t
                            }
                        }
                    }
                })
            } catch (i) {}
        }, n
    },
    App = new function() {
        var n = this,
            t;
        n.IsEditMode = function() {
            return location.pathname.startsWith("/edit/")
        };
        t = "h1,h2,h3,h4,h5,h6,p,span,a";
        n.BlockRevealers = function(n) {
            var r = $(window).scrollTop(),
                i = $(n).find('[data-plugin="reveal"]');
            i.each(function(n) {
                var u = $(this);
                if (r > u.offset().top) {
                    u.addClass("block-revealer").addClass("revealed");
                    return
                }
                var e = u.data("reveal-offset"),
                    o = u.data("reveal-delay"),
                    s = (u.data("reveal-direction") || "LR").toLowerCase(),
                    h = u.data("color") || (u.is(t) ? u.css("color") : u.css("background-color")),
                    f = scrollMonitor.create(i[n], e),
                    c = new RevealFx(i[n], {
                        revealSettings: {
                            bgcolor: h,
                            delay: o,
                            direction: s,
                            duration: 675,
                            onCover: function(n) {
                                $(n).parent().addClass("revealed");
                                n.style.opacity = 1
                            }
                        }
                    });
                f.enterViewport(function() {
                    c.reveal();
                    f.destroy()
                })
            })
        };
        n.Language = function() {
            return $("body").attr("data-lang")
        };
        n.IsMobile = function() {
            return $(window).width() <= 600
        };
        n.NewGuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                var t = Math.random() * 16 | 0,
                    i = n === "x" ? t : t & 3 | 8;
                return i.toString(16)
            })
        };
        n.SetCookie = function(n, t, i) {
            var r = "expires=" + i;
            document.cookie = n + "=" + t + ";" + r + ";path=/"
        };
        n.GetCookie = function(n) {
            for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
                for (t = u[i]; t.charAt(0) === " ";) t = t.substring(1);
                if (t.indexOf(r) === 0) return t.substring(r.length, t.length)
            }
            return ""
        };
        n.FormatDate = function(n) {
            var r = n,
                t = r.getDate(),
                i = r.getMonth() + 1,
                u = r.getFullYear();
            return t < 10 && (t = "0" + t), i < 10 && (i = "0" + i), t + "/" + i + "/" + u
        };
        n.Lightbox = function(n) {
            n.find("a.is-lightbox").simpleLightbox({
                nav: !0,
                enableKeyboard: !0,
                captions: !0,
                captionPosition: "top"
            })
        };
        n.HandleForms = function(t) {
            t.find("form:not(.zForm,[data-non-ajax],.needs-validation)").unbind("submit").submit(function(t) {
                t.preventDefault();
                var i = $(this);
                return $.ajax({
                    url: i.attr("action"),
                    method: "POST",
                    data: i.serialize(),
                    success: function(t) {
                        t.Error ? n.ShowErrorMessage(t.Message) : (n.ShowSuccessMessage(t.Message), i.trigger("reset"), $("html, body").animate({
                            scrollTop: 0
                        }, "slow"))
                    },
                    error: function() {
                        n.ShowErrorMessage("Erro inesperado!")
                    }
                }), !1
            });
            zForms.Init(t)
        };
        n.PopUps = function(n) {
            zPopups.BindElements(n)
        };
        n.Selectors = function(n) {
            n.find('[data-plugin*="selector"]').length && n.find('[data-plugin*="selector"]').selectize()
        };
        n.Popover = function(n) {
            n.find('[data-toggle="popover"]').popover()
        };
        n.Tooltip = function(n) {
            n.find('[data-toggle="tooltip"]').tooltip()
        };
        n.OsAnimation = function(n) {
            n.find('[data-plugin="os-animation"]').osAnimation({})
        };
        n.DatePickers = function(t) {
            t.find('[data-plugin="datepicker"],[data-type="date"]').datepicker({
                autoclose: !0,
                language: "pt",
                format: "dd/mm/yyyy"
            });
            t.find('[data-plugin="datepicker-now"]').datepicker({
                autoclose: !0,
                language: "pt",
                format: "dd/mm/yyyy",
                startDate: n.FormatDate(new Date)
            })
        };
        n.RangePickers = function(n) {
            n.find('[data-plugin="rangeslider"]').each(function() {
                var n = $(this).find('[name="PriceMin"]'),
                    i = $(this).find("[data-min]"),
                    t = $(this).find('[name="PriceMax"]'),
                    r = $(this).find("[data-max]"),
                    u = function() {
                        var u = f.getValue();
                        n.val(u[0]);
                        t.val(u[1]);
                        i.html(u[0] + " €");
                        r.html(u[1] + " €")
                    },
                    f = $(this).find('[data-input="slider"]').slider({
                        min: 0,
                        max: parseInt($(this).attr("data-limit")),
                        step: 5,
                        value: [parseInt(n.val()), parseInt(t.val())]
                    }).on("slide", u).data("slider")
            })
        };
        n.ShowErrorMessage = function(t) {
            n.ShowMessage(t, "danger")
        };
        n.ShowSuccessMessage = function(t) {
            n.ShowMessage(t, "success")
        };
        n.ShowMessage = function(n, t) {
            $.bootstrapGrowl(n, {
                ele: "body",
                type: t,
                offset: {
                    from: "top",
                    amount: 20
                },
                align: "center",
                width: 350,
                delay: 1e4,
                allow_dismiss: !0,
                stackup_spacing: 10
            })
        };
        n.Init = function(n) {
            App.Tooltip(n);
            App.Selectors(n);
            App.Popover(n);
            App.DatePickers(n);
            App.RangePickers(n);
            App.PopUps(n);
            App.HandleForms(n);
            App.IsEditMode() || (App.Lightbox(n), App.OsAnimation(n), App.BlockRevealers(n), window.__$blocks && window.__$blocks.map(function(n) {
                n()
            }), window.__$components && window.__$components.map(function(n) {
                n.fn()
            }));
            App.IsEditMode() && $("[data-plugin=os-animation]").css("opacity", "1")
        }
    };
window.InitLoginModal = function() {
    function f(n, t) {
        const i = '[{"EntityID":"' + t[0] + '", "FiscalId":"' + t[1] + '", "Entity":"' + t[2] + '", "Email":"' + t[3] + '", "Marketing":"' + t[4] + '"}]';
        $.ajax({
            type: "POST",
            url: n,
            contentType: "application/json",
            data: i,
            success: function() {},
            error: function() {}
        })
    }
    var r = typeof reCAPTCHAHelper != "undefined",
        i = $("#LoginForm"),
        n, u, t;
    i.unbind("submit").submit(function(n) {
        var t = this;
        return (i.addClass("was-validated"), t.checkValidity() === !1) ? (n.preventDefault(), n.stopPropagation(), !1) : ($.ajax({
            method: "POST",
            url: i.attr("action"),
            data: i.serialize(),
            success: function(n) {
                n.Error ? App.ShowErrorMessage(n.Message) : (App.ShowSuccessMessage(window.Language.LoginCompleted), $("#LoginModal").modal("hide"), window.location = "/" + App.Language() + "/Account")
            },
            error: function() {
                App.ShowErrorMessage(window.Language.InvalidData)
            },
            complete: function() {
                r && reCAPTCHAHelper.Reset("#" + i.attr("id"))
            }
        }), !1)
    });
    n = $("#RegisterForm");
    n.unbind("submit").submit(function(t) {
        var i = this;
        return (n.addClass("was-validated"), i.checkValidity() === !1) ? (t.preventDefault(), t.stopPropagation(), !1) : ($.ajax({
            method: "POST",
            url: n.attr("action"),
            data: n.serialize(),
            success: function(t) {
                if (t.Error) App.ShowErrorMessage(t.Message);
                else {
                    if (App.ShowSuccessMessage(t.Message), $("#LoginModal").modal("hide"), n.find('input[name="UrlWebhook"]').length) {
                        var i = n.find('input[name="UrlWebhook"]').val();
                        f(i, t.Data)
                    }
                    window.location = "/" + App.Language() + "/Account"
                }
            },
            error: function() {
                App.ShowErrorMessage(window.Language.InvalidData)
            },
            complete: function() {
                r && reCAPTCHAHelper.Reset("#" + n.attr("id"))
            }
        }), !1)
    });
    $("#VIES").length > 0 && $("#VIES").unbind("click").click(function(n) {
        n.preventDefault();
        var i = $("[Name=RelatedFiscalIdNumber]")[0].value,
            r = $("[Name=IdAppCountry]").val(),
            t = $("[Name=IdAppCountry]").find("option[value=" + r + "]").data("iso");
        t === "00" && (t = "PT");
        $.ajax({
            type: "POST",
            url: "/api/entities/vies",
            data: {
                vatNumber: i,
                countryCode: t
            },
            success: function(n) {
                $("[name=validMessage]")[0].classList.contains("d-none") || $("[name=validMessage]").addClass("d-none");
                $("[name=errorMessage]")[0].classList.contains("d-none") || $("[name=errorMessage]").addClass("d-none");
                n ? $("[name=validMessage]").removeClass("d-none") : $("[name=errorMessage]").removeClass("d-none");
                $("[name=HasCustomCheck]").val(n && t !== "PT" ? "1" : "0")
            },
            error: function() {
                $("[name=errorMessage]").removeClass("d-none")
            }
        })
    });
    $("#CompanySwitch").unbind("change").change(function() {
        var t = $(this).is(":checked") ? "company" : "personal";
        $("#RegisterForm").attr("data-type", t);
        n.removeClass("was-validated");
        $('#RegisterForm [data-type="' + t + '"] input').prop("required", !0);
        t === "company" && $("#RegisterForm [data-type='companyaddress']") !== null && $('#RegisterForm [data-type="companyaddress"] input').prop("required", !1);
        $('#RegisterForm [data-type="' + (t === "company" ? "personal" : "company") + '"] input').prop("required", !1);
        t === "personal" && ($('#RegisterForm [name="Company"]').val(""), $('#RegisterForm [name="RelatedFiscalIdNumber"]').val(""))
    });
    u = $("#CompanyInfo");
    $('[name="RelatedFiscalIdNumber"]').change(function() {
        u.html("");
        $.ajax({
            method: "GET",
            url: "/api/entities/check/" + $(this).val(),
            success: function() {
                u.html('<div class="alert alert-info">' + window.Language.FicalIdAlreadyTaken + "<\/div>")
            }
        })
    });
    $("#RecoverAccountBtn").unbind("click").click(function(n) {
        n.preventDefault();
        $('#login-pills-tab a[href="#login-pills-recover"]').tab("show")
    });
    t = $("#RecoverForm");
    t.unbind("submit").submit(function(n) {
        var i = this;
        return (t.addClass("was-validated"), i.checkValidity() === !1) ? (n.preventDefault(), n.stopPropagation(), !1) : ($.ajax({
            method: "POST",
            url: t.attr("action"),
            data: t.serialize(),
            success: function(n) {
                n.Error ? App.ShowErrorMessage(n.Message) : ($("#LoginModal").modal("hide"), App.ShowSuccessMessage(n.Message))
            },
            error: function() {
                App.ShowErrorMessage(window.Language.InvalidData)
            },
            complete: function() {
                r && reCAPTCHAHelper.Reset("#" + t.attr("id"))
            }
        }), !1)
    })
};
Vue.component("search-product", {
    data: function() {
        return {
            adding: !1,
            quantity: 1
        }
    },
    props: ["product"],
    computed: {},
    methods: {},
    filters: {}
});
$(function() {
    new Vue({
        el: "#FullSearch",
        data: function() {
            return {
                loading: !1,
                query: "",
                lang: null,
                results: []
            }
        },
        watch: {
            query: function() {
                this.query.length >= 3 && this.getSearchResults()
            }
        },
        methods: {
            getSearchResults: function() {
                var n = this;
                n.loading || this.query.length < 3 || $.ajax({
                    url: "/api/versions/search?q=" + n.query + "&IdLanguage=" + lang,
                    method: "GET",
                    cache: !1,
                    success: function(t) {
                        n.results = t
                    },
                    error: function() {
                        App.ShowErrorMessage(window.Language.ErrorUnexpected)
                    },
                    complete: function() {
                        n.loading = !1
                    }
                })
            }
        },
        mounted: function() {
            lang = $("#FullSearch").attr("data-language")
        }
    })
});
$(function() {
    function u() {
        return window.pageYOffset || document.documentElement.scrollTop
    }
    var n;
    App.Init($("body"));
    window.InitLoginModal();
    $("#Header .btn-menu").click(function(n) {
        n.preventDefault();
        $("body").addClass("no-scroll");
        $("#FullMenu").addClass("open")
    });
    $("#Header .btn-search").click(function(n) {
        n.preventDefault();
        $("body").addClass("no-scroll");
        $("#FullSearch").addClass("open")
    });
    $("#FullMenu .btn-close").click(function(n) {
        n.preventDefault();
        $("body").removeClass("no-scroll");
        $("#FullMenu").removeClass("open")
    });
    $("#FullSearch .btn-close").click(function(n) {
        n.preventDefault();
        $("body").removeClass("no-scroll");
        $("#FullSearch").removeClass("open")
    });
    $("#Footer .js-push-to-top").click(function(n) {
        n.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, "slow")
    });
    n = 150;
    $(window).scroll(function() {
        var t = u();
        t >= n ? $("#Header").addClass("isFixed") : $("#Header").removeClass("isFixed")
    });
    var t = document.getElementById("viewport-meta"),
        i = {
            "default": "width=1280, maximum-scale=1",
            mobile: "width=device-width, initial-scale=1, shrink-to-fit=no"
        },
        r = function() {
            screen.width < 600 ? t.setAttribute("content", i.mobile) : t.setAttribute("content", i.default)
        };
    r();
    window.onresize = function() {
        r()
    }

    // cancela o carregamento do vídeo intitucional se fechar o popup

    $("#videoModal").on('click','fechaPopup',function(){
        document.getElementById('popupVideo').src = '';
    })
});