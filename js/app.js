/**
 * Cabsystems - Main JavaScript
 */

$(document).ready(function() {

    // =====================================================
    // Services Swiper
    // =====================================================

    var servicesSwiper = new Swiper('.services-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 500,
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        }
    });

    // =====================================================
    // Fade In Animations
    // =====================================================

    function checkFadeIn() {
        $('.fade-in').each(function() {
            var $el = $(this);
            if ($(window).scrollTop() + $(window).height() > $el.offset().top + 100) {
                $el.addClass('visible');
            }
        });
    }

    $('.advantage-block, .blog-card, .process-step').addClass('fade-in');
    $(window).on('scroll', checkFadeIn);
    checkFadeIn();


    // =====================================================
    // Smooth Scroll
    // =====================================================

    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
        }
    });

});
