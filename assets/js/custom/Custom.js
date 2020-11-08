$(document).ready(function(){

    $('#menu-icon').click(function(){
        $('body').toggleClass('hide-overflow');
        $(this).toggleClass('open');
        $('.menu').toggleClass('menu-open');
    });
    
    $('#search-icon').click(function(){
        $('#SearchPage').addClass('search-page-open');
    });
    
    $('#CloseSearhPage').click(function(){
        $('#SearchPage').removeClass('search-page-open');
    });
    
    $(window).on('load',function(){
        $(".menu").mCustomScrollbar({
            axis:"y",
            theme:"dark",
        });
    });
    
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

});