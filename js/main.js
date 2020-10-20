$(document).ready(function(){
    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    $('.project-area .button.group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled: true}
    });

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    // Sticky Nav Menu
    let nav_offset_top = $('.headerArea').height();

    function navbarfixed() {
        if ($('.headerArea').length){
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.headerArea .main-menu').addClass('navbar_fixed');
                } else {
                    $('.headerArea .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarfixed();
});