$(function () {
    $('#ProductsDetail .slider__gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                }
            }
        ],

    });
    //$('#ProductsDetail .slider__gallery').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //    $(currentSlide).find('a.lightbox').simpleLightbox({ nav: true, enableKeyboard: true, captions: true, captionPosition: 'top', rel:true  })
    //});


});
