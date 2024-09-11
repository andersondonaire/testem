console.log("S");
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = "compiled";

$(function () {
  // Slider 1
  if (typeof RS_MODULES.modules.revslider321 === "undefined") {
    RS_MODULES.modules.revslider321 = {
      once:
        RS_MODULES.modules.revslider321 !== undefined
          ? RS_MODULES.modules.revslider321.once
          : undefined,
      init: function () {
        if (
          typeof revapi32 === "undefined" ||
          revapi32 === null ||
          revapi32.length === 0
        ) {
          revapi32 = document.getElementById("rev_slider_32_1");
        }
        if (
          revapi32 === null ||
          revapi32 === undefined ||
          revapi32.length === 0
        ) {
          window.revapi32initTry =
            window.revapi32initTry === undefined
              ? 0
              : window.revapi32initTry + 1;
          if (window.revapi32initTry < 20) {
            requestAnimationFrame(function () {
              RS_MODULES.modules.revslider321.init();
            });
          }
          return;
        }
        revapi32 = $(revapi32);
        if (typeof revapi32.revolution === "undefined") {
          revslider_showDoubleJqueryError("rev_slider_32_1");
          return;
        }
        revapi32.revolutionInit({
          revapi: "revapi32",
          sliderLayout: "fullscreen",
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1920, 1024, 777, 480],
          gridheight: [1067, 569, 432, 267],
          spinner: "spinner3",
          perspective: "0px",
          perspectiveType: "local",
          responsiveLevels: [1240, 1024, 778, 480],
          progressBar: {
            disableProgressBar: true,
          },
          navigation: {
            wheelCallDelay: 1000,
            onHoverStop: false,
            touch: {
              touchenabled: true,
              touchOnDesktop: true,
            },
            bullets: {
              enable: true,
              style: "white_bars",
              hide_onmobile: true,
              hide_under: 600,
              anim: "bottom",
              h_align: "left",
              h_offset: 0,
              v_offset: 80,
            },
          },
          scrolleffect: {
            set: true,
            multiplicator: 1.3,
            multiplicator_layers: 1.3,
          },
          viewPort: {
            enable: false,
            visible_area: "20%",
          },
          fallbacks: {
            nextSlideOnWindowFocus: true,
            disableFocusListener: true,
          },
        });
      },
    };
  }
  RS_MODULES.modules.revslider321.init();

  // Slider 2
  if (typeof RS_MODULES.modules.revslider341 === "undefined") {
    RS_MODULES.modules.revslider341 = {
      once:
        RS_MODULES.modules.revslider341 !== undefined
          ? RS_MODULES.modules.revslider341.once
          : undefined,
      init: function () {
        if (
          typeof revapi34 === "undefined" ||
          revapi34 === null ||
          revapi34.length === 0
        ) {
          revapi34 = document.getElementById("rev_slider_34_1");
        }
        if (
          revapi34 === null ||
          revapi34 === undefined ||
          revapi34.length === 0
        ) {
          window.revapi34initTry =
            window.revapi34initTry === undefined
              ? 0
              : window.revapi34initTry + 1;
          if (window.revapi34initTry < 20) {
            requestAnimationFrame(function () {
              RS_MODULES.modules.revslider341.init();
            });
          }
          return;
        }
        revapi34 = $(revapi34);
        if (typeof revapi34.revolution === "undefined") {
          revslider_showDoubleJqueryError("rev_slider_34_1");
          return;
        }
        revapi34.revolutionInit({
          revapi: "revapi34",
          sliderLayout: "auto",
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [550, 550, 550, 400],
          gridheight: [489, 489, 489, 356],
          spinner: "spinner14",
          perspective: 600,
          perspectiveType: "local",
          spinnerclr: "#f15d26",
          responsiveLevels: [1240, 1024, 778, 480],
          progressBar: {
            bgcolor: "rgba(255,255,255,0.3)",
            color: "#ffffff",
            vertical: "top",
            size: 5,
            x: 0,
            y: 0,
          },
          navigation: {
            mouseScrollNavigation: false,
            wheelCallDelay: 1000,
            onHoverStop: false,
            touch: {
              touchenabled: true,
            },
            thumbnails: {
              enable: true,
              tmp: '<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span><span class="tp-thumb-more"></span>',
              style: "erinyen_copy108",
              anim: "bottom",
              animSpeed: "800ms",
              animDelay: "500ms",
              v_offset: 0,
              space: 25,
              width: 250,
              height: 150,
              wrapper_padding: 20,
              wrapper_color: "rgba(241, 241, 241, 0)",
              visibleAmount: 3,
              span: true,
              position: "outer-horizontal",
            },
          },
          viewPort: {
            enable: false,
            visible_area: "20%",
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid: true,
          },
        });
      },
    };
  }
  RS_MODULES.modules.revslider341.init();
});

window.RS_MODULES.checkMinimal !== undefined &&
  window.RS_MODULES.checkMinimal();
