/* banner slider */
$(document).ready(function () {
    $(".banner-left-side").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<h3 class='slider-left-arroa'><i class='fa fa-arrow-left-long'></i></h3>", "<h3 class='right'><i class='fa fa-arrow-right-long'></i></h3>"],
        dots: false,
        autoplay: false,
        slideBy: 1,
        autoplaySpeed: 300,
        smartSpeed: 4000,
        autoplayHoverPause: true,
    });
});
/* Our services sliderr */
$(document).ready(function () {
    $(".our-services-inner-main").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        margin: 30,
        navText: ["<h3 class='slider-left-arroa'><i class='fa fa-arrow-left-long'></i></h3>", "<h3 class='right'><i class='fa fa-arrow-right-long'></i></h3>"],
        dots: false,
        autoplay: false,
        slideBy: 1,
        autoplaySpeed: 300,
        smartSpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });
});
/* our Tesimonial slider */
$(document).ready(function () {
    $(".our-testimonial-mainn").owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        margin: 30,
        // navText: ["<h3 class='slider-left-arroa'><i class='fa fa-arrow-left-long'></i></h3>", "<h3 class='right'><i class='fa fa-arrow-right-long'></i></h3>"],
        dots: false,
        autoplay: true,
        slideBy: 1,
        autoplaySpeed: 300,
        smartSpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
});

$(window).on('load', function() {
    $('#gifPreloader').fadeOut('slow', function() {
        $(this).remove();
    });
});

