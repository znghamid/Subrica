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
        navigation: {
            nextEl: '.swiper-first-suggestion-next',
            prevEl: '.swiper-first-suggestion-prev',
        }
    });
    var swiper = new Swiper('.second-suggestion', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.second-suggestion-left',
            prevEl: '.second-suggestion-right',
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
    var swiper = new Swiper('.post-suggestion', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 9000,
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
                slidesPerView: 5,
                spaceBetween: 20,
            }
        },
    });
    var swiper = new Swiper('.more-swiper-4-slide', {
        slidesPerView: 1,
        spaceBetween: 20,
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
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        },
    });
    var swiper = new Swiper('.translator-suggestion', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 7000,
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
                slidesPerView: 5,
                spaceBetween: 20,
            }
        },
    });
    // Swiper sliders End

    // Load more function Start
    $(function () {
        $(".main-content-card").slice(0, 6).show();
        if ($(".main-content-card:hidden").length == 0) {
            $("#loadMoreBtn").text("چیزی برای نمایش وجود ندارد");
            $("#loadMoreBtn").addClass("disable");
        }
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

    // Auto height textaria
    try {
        var textarea = document.querySelector('textarea');

        textarea.addEventListener('keydown', autosize);
                    
        function autosize(){
            var el = this;
            setTimeout(function(){
                el.style.cssText = 'height:auto; padding:20px';
                // for box-sizing other than "content-box" use:
                // el.style.cssText = '-moz-box-sizing:content-box';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            },0);
        }
    } catch (error) {
        // 
    }
});


// Modals
$(document).ready(function () {
    // Open reply comments modal
    $('#CommentsModalReply').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var id = button.data('id');
        var name = button.data('name');
        var modal = $(this);
        modal.find('#exampleModalLabel').text('پاسخ به ' + name);
    })
    
    $('#DownloadDescriptionModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var description = button.data('description');
        var modal = $(this);
        modal.find('#DownloadDescriptionModalLabel').text(description);
    })

    $('#ShowImageADS').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var imgUrl = button.data('img');
        var modal = $(this);
        modal.find('#ShowImageADSImg').attr('src',imgUrl);
    })

    $('#SubmitADS').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var plan = button.data('plan');
        var modal = $(this);
        modal.find('#SubmitADSPlan').text('سفارش پلن ' + plan);
    })


    $('#share-to').on('click', function() {
        $("#copyToClipboard").text("کپی آدرس صفحه");
    })

    var $temp = $("<input>");
    var $url = $(location).attr('href');

    $('#copyToClipboard').on('click', function() {
        $("body").append($temp);
        $temp.val($url).focus().select();
        document.execCommand("copy");
        $temp.remove();
        $("#copyToClipboard").text("آدرس صفحه کپی شد");
    })
});

// slide down show more button in menu
$(document).ready(function(){
    $("#ToggleSlideMenu").click(function(){
    $("#slieMenu").slideToggle("slow");
    $('#ToggleSlideMenu').toggleClass('flip-icon');
    $('#ToggleSlideMenu .text').toggleClass('active');
    });
});
