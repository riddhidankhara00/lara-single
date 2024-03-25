/* Header Script */
$(document).ready(function () {
    $(".navigation-bar").addClass("inner-navigation");
    $(window).scroll(function () {
        if ($(this).scrollTop() < 70) {
            $(".navigation-bar").addClass("inner-navigation");
        } else {
            $(".navigation-bar").removeClass("inner-navigation");
        }
    });
});
