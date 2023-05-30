$(function () {

    window.onscroll = function showHeader() {
        let header = document.querySelector('.header');
        let inner = document.querySelector('.header__inner');

        if (window.pageYOffset > 75) {
            inner.classList.add('header__inner--fixed');
            header.classList.add('header--fixed');
        } else {
            inner.classList.remove('header__inner--fixed');
            header.classList.remove('header--fixed');
        }
    }

    $('.menu__link, .header__link').click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);

        if (this.className == 'menu__link') {
            $('.menu__list').toggleClass('menu__list--active');
            $('body').toggleClass('lock');
            $('.burger-menu').toggleClass('burger-menu--close');
        };
    });

    $('.burger-menu').click(function () {
        $('.menu__list').toggleClass('menu__list--active');
        $(this).toggleClass('burger-menu--close');
        $('body').toggleClass('lock');
    });


    $('.slider').slick({
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                fade: true,
                autoplay: true
            }
        }]
    });

    var mixer = mixitup('.my-works__content', {
        animation: {
            easing: 'ease-in-out',
            duration: 1000,
        }
    });
})