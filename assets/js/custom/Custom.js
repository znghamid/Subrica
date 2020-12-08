// Start Preloader page
function loader(){
    document.getElementById('preloader').classList.add('d-none');
}
// End Preloader page

$(document).ready(function(){
    
    // Start Open and close mobile menu
    $('#menu-icon').click(function(){
        $('body').toggleClass('hide-overflow');
        $(this).toggleClass('open');
        $('.menu').toggleClass('menu-open');
    });
    // End Open and close mobile menu

    
    // Start Open search page
    $('#search-icon').click(function(){
        $('#SearchPage').addClass('search-page-open');
    });
    // End Open search page

    
    // Start Close search page
    $('#CloseSearhPage').click(function(){
        $('#SearchPage').removeClass('search-page-open');
    });
    // End Close search page

    
    // Start Custom scrollbar
    $(window).on('load',function(){
        $(".menu").mCustomScrollbar({
            axis:"y",
            theme:"dark",
        });
        $(".scrollbar").mCustomScrollbar();
    });
    // End Custom scrollbar

    
    // Start Minimize text length
    jQuery(function(){
        var minimized_elements = $('p.minimize');
        var minimize_character_count = 110;    

        minimized_elements.each(function(){    
            var t = $(this).text();        
            if(t.length < minimize_character_count ) return;

            $(this).html(
                t.slice(0,minimize_character_count )+'<a>...</a>'
            );
        }); 
    });
    // End Minimize text length


    // Start Scroll to top button
    var BackToTopButton = $('#BackToTopButton');
    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        BackToTopButton.addClass('show');
    } else {
        BackToTopButton.removeClass('show');
    }
    });
    BackToTopButton.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
    // End Scroll to top button


    // Lazyload Start
    const myLazyLoad = new LazyLoad({
        elements_selector: "img"
    })
    // Lazyload End


    // Aos Start
    AOS.init();
    // Aos End

    
    // Swiper sliders Start
    var swiper = new Swiper('.first-suggestion', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            540: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
    });
    var swiper = new Swiper('.second-suggestion', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    });
    var swiper = new Swiper('.vip-post-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.vip-post-left',
            prevEl: '.vip-post-right',
        }
    });
    var swiper = new Swiper('.english-learn-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.english-learn-left',
            prevEl: '.english-learn-right',
        }
    });
    var swiper = new Swiper('.most-view-video-content', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        },
        navigation: {
            nextEl: '.most-view-video-left',
            prevEl: '.most-view-video-right',
        }
    });
    var swiper = new Swiper('.archive-content', {
        slidesPerView: 1,
        spaceBetween: 100,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    // Swiper sliders End

    // Load more function Start
    $(function () {
        $(".main-content-card").slice(0, 6).show();
        $("#loadMoreBtn").on('click', function (e) {
            e.preventDefault();
            $(".main-content-card:hidden").slice(0, 3).slideDown();
            if ($(".main-content-card:hidden").length == 0) {
                $("#loadMoreBtn").text("چیزی برای نمایش وجود ندارد");
                $("#loadMoreBtn").addClass("disable");
            }
        });
    });
    // Load more function End
});