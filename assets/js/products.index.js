$(function () {
  setTimeout(function () {
    $("#ProductsIndex .products .spinner-grow").css({
      opacity: 0,
      visibility: "hidden",
      "z-index": -1,
    });
    $("#ProductsIndex .slider__products").slick({
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 3,

      infinite: true,
      speed: 900,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            infinite: true,
            speed: 900,
            focusOnSelect: true,
            centerPadding: "0px",
            slidesToShow: 2,
          },
        },
      ],
    });

    $("#ProductsIndex .slider__products").on("wheel", function (e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        $(this).slick("slickNext");
      } else {
        $(this).slick("slickPrev");
      }
    });
    $("#ProductsIndex .slider__products").css({
      opacity: 1,
      visibility: "visible",
    });
    $("#ProductsIndex .products .spinner-grow").hide();
  }, 1000);
});
