(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);


// HIDE ITEMS

// GETTING ELEMENTS
let containerEle = document.querySelector('.show-all-button');
let showTextEle = document.querySelector(".show-text");
let arrowDown = document.querySelector('.ar-down');
let arrowUp = document.querySelector('.ar-up');
let displayContainer = document.querySelector(".show-all");
let setToFalse = false;

// SETTING TARGET

arrowUp.classList.add('call-to-hide')
displayContainer.classList.add('call-to-hide')

// CONDITIONAL MANIPULATIONS
containerEle.addEventListener('click', () => {
    if (!setToFalse) {
        arrowUp.classList.remove('call-to-hide');
        arrowDown.classList.add('call-to-hide');
        displayContainer.classList.remove('call-to-hide');
        showTextEle.innerHTML = "Show Less";
        setToFalse = true;
    } else {
        arrowUp.classList.add('call-to-hide');
        arrowDown.classList.remove('call-to-hide');
        displayContainer.classList.add('call-to-hide');
        showTextEle.innerHTML = "Show More";
        setToFalse = false;

    }
})

document.querySelector(".assign").addEventListener('click', () => {
    document.location.assign('../contact.html')
});
 

document.querySelector('.date').innerHTML = new Date().getFullYear()

