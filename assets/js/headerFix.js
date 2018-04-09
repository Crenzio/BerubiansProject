// pins the LINKS div to the top of the screen after the user scrolls down a certain distance
// un-pins it if they scroll back above the scroll limit
$(window).scroll(function () {
    const sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});