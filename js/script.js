
$(document).ready(function () {
    $('.slider-1').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        fade: false,
        adaptiveHeight: true,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});
$(document).ready(function () {
    $('.slider-2').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: false,
        adaptiveHeight: true,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});
$(document).ready(function () {
    $('.top-head-slideshow').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        fade: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});

// $('.grid').masonry ({
//   itemSelector: '.item',
//   columnWidth: 160
// });
//     //scroll top
//     //Check to see if the window is top if not then display button
//    $('#scrollUp').hide();
//     $(window).scroll(function () {
//         height = $(this).height();
//         if ($(this).scrollTop() > height) {
//             $('#scrollUp').show();
//         } else {
//             $('#scrollUp').slideUp();
//         }
//     });
//     //Click event to scroll to top
//     height1 = 0;
//     $('#scrollUp').click(function (event) {
//         event.preventDefault();
//         $('html, body').animate({scrollTop: height1}, 500);
//         return false;
//     });

    //hide and show
// $(document).ready(function(){
//     $(".search-input").hide();
//     $(".search").click(function(){
//         $(".search-input").toggle();
//     });
// });
// $(document).ready(function() {
//     $('.input-wrapper')
//         .click(function() {
//             $(this).toggleClass('active');
//             $('input', this).focus();
//         })
//         .focusout(function() {
//             $(this).removeClass('active');
//         });
// });


//hide menu
jQuery(document).ready(function($) {
    $('.bar-icon').click(function(e) {
        $(this).toggleClass('m-active');
        $('.site-nav').toggleClass('active');

        e.preventDefault();
    });
});
