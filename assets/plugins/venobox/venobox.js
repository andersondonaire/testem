!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).VenoBox =
        t());
})(this, function () {
  "use strict";
  /**
   * VenoBox 2.1.8
   * Copyright 2013-2024 Nicola Franchini
   * @license: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
   */ let e,
    t,
    o,
    n,
    s,
    i,
    a,
    r,
    l,
    d,
    c,
    v,
    u,
    b,
    p,
    g,
    f,
    m,
    y,
    x,
    h,
    L,
    w,
    k,
    S,
    C,
    A,
    E,
    q,
    P,
    M,
    T,
    j,
    H,
    O,
    z,
    I,
    V;
  let B,
    N = 0,
    D = 0,
    Q = 0,
    X = !1,
    Y = !1,
    R = !1,
    F = !1;
  const K = {
      bounce: ["sk-bounce", "sk-bounce-dot", 2],
      chase: ["sk-chase", "sk-chase-dot", 6],
      circle: ["sk-circle", "sk-circle-dot", 12],
      "circle-fade": ["sk-circle-fade", "sk-circle-fade-dot", 12],
      flow: ["sk-flow", "sk-flow-dot", 3],
      fold: ["sk-fold", "sk-fold-cube", 4],
      grid: ["sk-grid", "sk-grid-cube", 9],
      plane: ["sk-plane", "", 0],
      pulse: ["sk-pulse", "", 5],
      swing: ["sk-swing", "sk-swing-dot", 2],
      wander: ["sk-wander", "sk-wander-cube", 3],
      wave: ["sk-wave", "sk-wave-rect", 5],
    },
    U = {
      selector: ".venobox",
      autoplay: !1,
      bgcolor: "#fff",
      border: "0",
      customClass: !1,
      infinigall: !1,
      maxWidth: "100%",
      navigation: !0,
      navKeyboard: !0,
      navTouch: !0,
      navSpeed: 300,
      numeration: !1,
      overlayClose: !0,
      overlayColor: "rgba(23,23,23,0.95)",
      popup: !1,
      ratio: "16x9",
      share: !1,
      shareStyle: "pill",
      spinner: "bounce",
      spinColor: "#d2d2d2",
      titleattr: "title",
      titlePosition: "top",
      titleStyle: "bar",
      toolsBackground: "#1C1C1C",
      toolsColor: "#d2d2d2",
      onPreOpen: function () {
        return !0;
      },
      onPostOpen: function () {},
      onPreClose: function () {
        return !0;
      },
      onNavComplete: function () {},
      onContentLoaded: function () {},
      onInit: function () {},
      jQuerySelectors: !1,
      focusItem: !1,
      fitView: !1,
      initialScale: 0.9,
      transitionSpeed: 200,
    };
  function W(e, t, o) {
    if ("[object Object]" === Object.prototype.toString.call(e)) {
      let n;
      for (n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(o, e[n], n, e);
    } else {
      let n = 0,
        s = e.length;
      for (n = 0; n < s; n++) t.call(o, e[n], n, e);
    }
  }
  function Z(e) {
    return e;
  }
  function _({ timing: e, draw: t, duration: o }) {
    let n = performance.now();
    requestAnimationFrame(function s(i) {
      let a = (i - n) / o;
      a > 1 && (a = 1);
      let r = e(a);
      t(r), a < 1 && requestAnimationFrame(s);
    });
  }
  function G(e) {
    if (!e) return !1;
    (y = !0),
      (r = e),
      (L = !1),
      (w = !1),
      (S = e.getAttribute("data-maxwidth") || e.settings.maxWidth),
      (C = e.getAttribute("data-overlay") || e.settings.overlayColor),
      (A = e.getAttribute("data-ratio") || e.settings.ratio),
      (E = e.hasAttribute("data-autoplay") || e.settings.autoplay),
      (q = e.getAttribute("data-href") || e.getAttribute("href")),
      (P = e.getAttribute("data-customclass") || e.settings.customClass),
      (I = e.getAttribute(e.settings.titleattr) || ""),
      (O = e.getAttribute("data-border") || e.settings.border),
      (M = e.hasAttribute("data-fitview") || e.settings.fitView);
  }
  function J() {
    return (
      !(!r || !document.body.classList.contains("vbox-open")) &&
      (!r.settings.onPreClose ||
        "function" != typeof r.settings.onPreClose ||
        !1 !== r.settings.onPreClose(r, p, j, H)) &&
      (document.body.removeEventListener("keydown", te),
      document.body.classList.remove("vbox-open"),
      r.settings.focusItem && r.focus(),
      void _({
        duration: 200,
        timing: Z,
        draw: function (e) {
          (k.style.opacity = 1 - e), 1 === e && k.remove();
        },
      }))
    );
  }
  function $() {
    ue(j);
  }
  function ee() {
    ue(H);
  }
  function te(e) {
    27 === e.keyCode && J(),
      V ||
        (37 == e.keyCode && !0 === w && ue(H),
        39 == e.keyCode && !0 === L && ue(j),
        (V = setTimeout(() => {
          V = null;
        }, 100)));
  }
  function oe() {
    (y = !1),
      (a.style.opacity = 0),
      (a.innerHTML = x),
      F
        ? (a.classList.add("vbox-grab"),
          a.addEventListener("touchstart", ae, !1),
          a.addEventListener("touchend", re, !1),
          a.addEventListener("touchmove", le, !1),
          a.addEventListener("mousedown", ae, !1),
          a.addEventListener("mouseup", re, !1),
          a.addEventListener("mouseout", re, !1),
          a.addEventListener("mousemove", le, !1))
        : (a.classList.remove("vbox-grab"),
          a.removeEventListener("touchstart", ae, !1),
          a.removeEventListener("touchend", re, !1),
          a.removeEventListener("touchmove", le, !1),
          a.removeEventListener("mousedown", ae, !1),
          a.removeEventListener("mouseup", re, !1),
          a.removeEventListener("mouseout", re, !1),
          a.removeEventListener("mousemove", le, !1));
    let e = a.querySelector(":first-child");
    e.classList.add("vbox-child"),
      (e.style.backgroundColor = r.settings.bgcolor),
      (e.style.transform = "scale(" + r.settings.initialScale + ")"),
      (e.style.transition = "transform " + r.settings.transitionSpeed + "ms");
    let t = a.querySelector(".vbox-child img");
    t &&
      t.addEventListener("dragstart", function (e) {
        e.preventDefault();
      }),
      i.scrollTo(0, 0),
      (e.style.transform = "scale(1)"),
      k.style.setProperty("--vbox-padding", O),
      k.style.setProperty("--vbox-max-width", S),
      W(k.classList, function (e) {
        "vbox-overlay" !== e && k.classList.remove(e);
      }),
      P && k.classList.add(P),
      M ? a.classList.add("vbox-fit") : a.classList.remove("vbox-fit"),
      _({
        duration: r.settings.transitionSpeed,
        timing: Z,
        draw: function (e) {
          (a.style.opacity = e), 1 === e && u.classList.add("vbox-hidden");
        },
      }),
      r.settings.onContentLoaded &&
        "function" == typeof r.settings.onContentLoaded &&
        r.settings.onContentLoaded(x);
  }
  function ne(e) {
    a.classList.contains("vbox-" + e) || oe();
  }
  function se(e, t, o) {
    let n;
    a.classList.add("vbox-loading");
    let s = (function (e) {
      let t, o, n;
      if (
        ((o = e.match(
          /(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i
        )),
        o && o[7])
      )
        (t = "youtube"), (n = o[7]);
      else {
        let s =
          /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
        (o = e.match(s)), o && o[5] && ((t = "vimeo"), (n = o[5]));
      }
      return { type: t, id: n };
    })(e);
    if ("vimeo" == s.type || "youtube" == s.type) {
      let i;
      n = o ? "?rel=0&autoplay=1" : "?rel=0";
      let a =
        n +
        (function (e) {
          let t = "",
            o = decodeURIComponent(e).split("?");
          if (void 0 !== o[1]) {
            let e,
              n,
              s = o[1].split("&");
            for (n = 0; n < s.length; n++)
              (e = s[n].split("=")), (t = t + "&" + e[0] + "=" + e[1]);
          }
          return encodeURI(t);
        })(e);
      "vimeo" == s.type
        ? (i = "https://player.vimeo.com/video/")
        : "youtube" == s.type &&
          (i = "https://www.youtube-nocookie.com/embed/"),
        (x =
          '<div class="venoratio venoratio-' +
          t +
          '"><iframe webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' +
          i +
          s.id +
          a +
          '"></iframe></div>');
    } else (n = o ? " autoplay" : ""), (x = '<div class="venoratio venoratio-' + t + '"><video src="' + e + '"' + n + " controls>Your browser does not support the video tag.</video></div>");
    a.classList.remove("vbox-loading"), ne("animated");
  }
  function ie() {
    var e;
    if (
      ((e = x), (Y.innerHTML = e), (g = Y.querySelectorAll("img")), g.length)
    ) {
      let e = 0;
      W(g, function (t) {
        let o = t.src;
        const n = new Image();
        (n.onload = function () {
          e++,
            e == g.length &&
              (a.classList.remove("vbox-loading"), ne("animated"));
        }),
          (n.onerror = function () {
            e++,
              e == g.length &&
                (a.classList.remove("vbox-loading"), ne("animated"));
          }),
          (n.src = o);
      });
    } else a.classList.remove("vbox-loading"), ne("animated");
  }
  function ae(e) {
    if (!y) {
      let t = 0.84 * r.settings.navSpeed;
      (a.style.transition =
        "margin " + t + "ms ease-out, opacity " + t + "ms ease-out"),
        (N = D = "touchstart" === e.type ? e.touches[0].pageX : e.pageX),
        (T = v = "touchstart" === e.type ? e.touches[0].pageY : e.pageY),
        (X = !0);
    }
  }
  function re(e) {
    if (X) {
      X = !1;
      let e = r,
        t = !1;
      (Q = D - N),
        Q < 0 && L && ((e = j), (t = !0)),
        Q > 0 && w && ((e = H), (t = !0)),
        Math.abs(Q) >= 50 && t
          ? ue(e)
          : ((a.style.marginLeft = 0), (a.style.opacity = 1));
    }
  }
  function le(e) {
    if (X && !y) {
      (D = "touchmove" === e.type ? e.touches[0].pageX : e.pageX),
        (v = "touchmove" === e.type ? e.touches[0].pageY : e.pageY),
        (d = D - N),
        (c = v - T);
      let t = Math.abs(d);
      if (t > Math.abs(c) && t <= 180) {
        let o = 1.5 * (1 - t / 180);
        e.preventDefault(),
          (a.style.marginLeft = d + "px"),
          (a.style.opacity = o);
      }
    }
  }
  function de(e) {
    if (!e) return !1;
    (z = e.dataset.gall),
      (h = e.settings.numeration),
      (f = e.settings.infinigall),
      (o.innerHTML = "");
    let s = e.dataset.vbtype;
    e.settings.share &&
      "iframe" !== s &&
      "inline" !== s &&
      "ajax" !== s &&
      (function (e) {
        if (navigator.canShare) {
          const t = { url: e };
          o.insertAdjacentHTML(
            "beforeend",
            '<div class="vbox-link-btn vbox-share-mobile"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/></svg></div>'
          ),
            o
              .querySelector(".vbox-share-mobile")
              .addEventListener("click", function (e) {
                e.preventDefault(), navigator.share(t);
              });
        }
        o.insertAdjacentHTML(
          "beforeend",
          '<a target="_blank" href="' +
            e +
            '" download><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg></a>'
        ),
          o.insertAdjacentHTML(
            "beforeend",
            '<div class="vbox-tooltip"><div class="vbox-link-btn vbox-share-copy"><span class="vbox-tooltip-text" id="myTooltip"></span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg></div ></div>'
          ),
          o
            .querySelector(".vbox-share-copy")
            .addEventListener("click", function (t) {
              t.preventDefault();
              let o = document.getElementById("myTooltip");
              navigator.clipboard.writeText(e).then(
                function () {
                  o.innerHTML = '<div class="vbox-tooltip-inner">Copied</div>';
                },
                function () {
                  console.log("copy failed");
                }
              );
            });
      })(e.href),
      (m = document.querySelectorAll('.vbox-item[data-gall="' + z + '"]')),
      (l = Array.prototype.indexOf.call(m, e)),
      m.length < 2 && (h = !1),
      m.length < 3 && (f = !1),
      (j = m[l + 1]),
      (H = m[l - 1]),
      !j && f && (j = m[0]),
      !H && f && (H = m[m.length - 1]),
      m.length >= 1
        ? ((p = l + 1), (t.innerHTML = p + " / " + m.length))
        : (p = 1),
      h ? t.classList.remove("vbox-hidden") : t.classList.add("vbox-hidden"),
      "" !== I
        ? n.classList.remove("vbox-hidden")
        : n.classList.add("vbox-hidden"),
      (n.innerHTML = I),
      (w = !1),
      (L = !1),
      (j || f) && (L = !0),
      (l > 0 || f) && (w = !0),
      (F = (w || L) && e.settings.navTouch);
    let i = k.querySelector(".vbox-next"),
      a = k.querySelector(".vbox-prev");
    w ? a.classList.remove("vbox-hidden") : a.classList.add("vbox-hidden"),
      L ? i.classList.remove("vbox-hidden") : i.classList.add("vbox-hidden"),
      e.settings.navigation ||
        (i.classList.add("vbox-hidden"), a.classList.add("vbox-hidden"));
  }
  function ce(t) {
    if (!t) return !1;
    (e.style.backgroundColor = C),
      (b.innerHTML = (function (e) {
        if (!e) return "Loading...";
        let t = '<div class="sk-center ' + e[0] + '">',
          o = 0;
        for (o = 0; o < e[2]; o++) t += '<div class="' + e[1] + '"></div>';
        return (t += "</div>"), t;
      })(K[t.settings.spinner])),
      k.style.setProperty("--sk-color", t.settings.spinColor),
      u.classList.remove("vbox-hidden"),
      o.classList.remove("vbox-top", "vbox-bottom"),
      n.classList.remove("vbox-top", "vbox-bottom"),
      "top" == t.settings.titlePosition
        ? (n.classList.add("vbox-top"), o.classList.add("vbox-bottom"))
        : (n.classList.add("vbox-bottom"), o.classList.add("vbox-top"));
    let s = "bar" === t.settings.titleStyle ? "100%" : "auto",
      i = "pill" === t.settings.titleStyle ? "5em" : "0",
      a = "bar" === t.settings.shareStyle ? "100%" : "auto",
      r = "pill" === t.settings.shareStyle ? "5em" : "0",
      l =
        "transparent" === t.settings.titleStyle
          ? "transparent"
          : t.settings.toolsBackground,
      d =
        "transparent" === t.settings.shareStyle
          ? "transparent"
          : t.settings.toolsBackground;
    k.style.setProperty("--vbox-title-width", s),
      k.style.setProperty("--vbox-title-radius", i),
      k.style.setProperty("--vbox-share-width", a),
      k.style.setProperty("--vbox-share-radius", r),
      k.style.setProperty("--vbox-tools-color", t.settings.toolsColor),
      k.style.setProperty("--vbox-title-background", l),
      k.style.setProperty("--vbox-share-background", d);
  }
  function ve() {
    if (!r) return !1;
    switch (r.dataset.vbtype) {
      case "iframe":
        (e = q),
          (t = A),
          a.classList.add("vbox-loading"),
          (x =
            '<div class="venoratio venoratio-' +
            t +
            '"><iframe src="' +
            e +
            '"></iframe></div>'),
          a.classList.remove("vbox-loading"),
          ne("animated");
        break;
      case "inline":
        !(function (e) {
          let t = document.querySelector(e);
          t &&
            (a.classList.add("vbox-loading"),
            (x = '<div class="vbox-inline">' + t.innerHTML + "</div>"),
            a.classList.remove("vbox-loading"),
            ne("animated"));
        })(q);
        break;
      case "ajax":
        !(function (e) {
          a.classList.add("vbox-loading");
          let t = new XMLHttpRequest();
          t.open("GET", e, !0),
            (t.onload = function () {
              (x = '<div class="vbox-inline">' + t.response + "</div>"), ie();
            }),
            (t.onerror = function () {
              (x = '<div class="vbox-inline"></div>'),
                a.classList.remove("vbox-loading"),
                ne("animated");
            }),
            t.send();
        })(q);
        break;
      case "video":
        se(q, A, E);
        break;
      default:
        !(function (e) {
          (R.onload = function () {
            (x = '<div class="vbox-child"><img src="' + e + '"></div>'),
              a.classList.remove("vbox-loading"),
              ne("animated");
          }),
            (R.src = e);
        })(q);
    }
    var e, t;
  }
  function ue(e) {
    if (!e || y || !document.body.classList.contains("vbox-open")) return !1;
    G(e), ce(e);
    const t = 0.84 * r.settings.navSpeed;
    (a.style.transition =
      "margin " + t + "ms ease-out, opacity " + t + "ms ease-out"),
      e === H && a.classList.add("swipe-right"),
      e === j && a.classList.add("swipe-left"),
      u.classList.remove("vbox-hidden");
    const o = a.style.opacity;
    a.classList.add("vbox-animated", "vbox-loading"),
      (B = a.cloneNode(!1)),
      B.classList.add("cloned"),
      B.classList.remove("swipe-left", "swipe-right"),
      (B.style.opacity = 0),
      (B.style.marginLeft = "0"),
      (B.style.marginRight = "0");
    const n = a;
    i.append(B),
      (a = B),
      a.classList.remove("cloned"),
      de(e),
      _({
        duration: r.settings.navSpeed,
        timing: Z,
        draw: function (e) {
          (n.style.opacity = o - e / o),
            1 === e &&
              (n.remove(),
              a.classList.remove("vbox-animated"),
              ne("loading"),
              (y = !1),
              r.settings.onNavComplete &&
                "function" == typeof r.settings.onNavComplete &&
                r.settings.onNavComplete(r, p, j, H));
        },
      }),
      ve();
  }
  function be(l) {
    return (
      !(document.body.classList.contains("vbox-open") || !l) &&
      (!l.settings.onPreOpen ||
        "function" != typeof l.settings.onPreOpen ||
        !1 !== l.settings.onPreOpen(l)) &&
      (G(l),
      document.body.insertAdjacentHTML("beforeend", s),
      document.body.classList.add("vbox-open"),
      (k = document.querySelector(".vbox-overlay")),
      (e = k.querySelector(".vbox-backdrop")),
      (i = k.querySelector(".vbox-container")),
      (a = i.querySelector(".vbox-content")),
      (t = k.querySelector(".vbox-num")),
      (o = k.querySelector(".vbox-share")),
      (n = k.querySelector(".vbox-title")),
      (u = k.querySelector(".vbox-preloader")),
      (b = u.querySelector(".vbox-preloader-inner")),
      (k.style.opacity = 0),
      ce(l),
      de(l),
      a.classList.add("vbox-animated", "vbox-loading"),
      _({
        duration: 200,
        timing: Z,
        draw: function (e) {
          (k.style.opacity = e),
            1 === e &&
              (a.classList.remove("vbox-animated"),
              (y = !1),
              ne("loading"),
              r.settings.onPostOpen &&
                "function" == typeof r.settings.onPostOpen &&
                r.settings.onPostOpen(r, p, j, H));
        },
      }),
      ve(),
      l.settings.navKeyboard &&
        (document.body.addEventListener("keydown", te),
        document.body.addEventListener("keyup", () => {
          V && (clearTimeout(V), (V = null));
        })),
      document
        .querySelector(".vbox-prev")
        .addEventListener("click", function () {
          ue(H);
        }),
      document
        .querySelector(".vbox-next")
        .addEventListener("click", function () {
          ue(j);
        }),
      void k.addEventListener("click", function (e) {
        let t = document.querySelector(".vbox-close");
        t &&
          (t.contains(e.target) ||
            t === e.target ||
            (r.settings.overlayClose &&
              (e.target.classList.contains("vbox-overlay") ||
                e.target.classList.contains("vbox-content") ||
                e.target.classList.contains("vbox-backdrop") ||
                e.target.classList.contains("vbox-close") ||
                e.target.classList.contains("vbox-preloader") ||
                e.target.classList.contains("vbox-container")))) &&
          J();
      }))
    );
  }
  const pe = function (e) {
    const t = {};
    let o = (function (e, t) {
      let o = {};
      return (
        W(e, function (t, n) {
          o[n] = e[n];
        }),
        W(t, function (e, n) {
          o[n] = t[n];
        }),
        o
      );
    })(U, e || {});
    return (
      (t.close = J),
      (t.next = $),
      (t.prev = ee),
      (t.open = be),
      (t.settings = o),
      (function (e, t) {
        t.onInit && "function" == typeof t.onInit && t.onInit(e);
        let o = t.jQuerySelectors || document.querySelectorAll(t.selector);
        if (
          ((s =
            '<div class="vbox-overlay"><div class="vbox-backdrop"></div><div class="vbox-preloader"><div class="vbox-preloader-inner"></div></div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-left-corner"><div class="vbox-num">0/0</div></div><div class="vbox-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="vbox-close-icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></div><a class="vbox-next"><span>Next</span></a><a class="vbox-prev"><span>Prev</span></a><div class="vbox-share"></div></div>'),
          (Y = Y || document.createElement("div")),
          (R = R || new Image()),
          W(o, function (e) {
            if (e instanceof Element) {
              if (e.classList.contains("vbox-item")) return !0;
              (e.settings = t),
                e.classList.add("vbox-item"),
                e.addEventListener("click", function (t) {
                  return t.preventDefault(), e.blur(), be(e), !1;
                });
            }
          }),
          t.popup)
        ) {
          let e = document.querySelector(t.popup);
          (e.settings = t), be(e);
        }
      })(t, o),
      t
    );
  };
  return (
    "function" == typeof jQuery &&
      jQuery.fn.extend({
        venobox: function (e) {
          const t = e || {};
          (t.jQuerySelectors = this), new pe(t);
        },
      }),
    pe
  );
});
//# sourceMappingURL=venobox.min.js.map
