$(function() {
    $(window).scroll(function() {
        {
            var scoll = $(this).scrollTop()
            if (scoll > 200) {
                $('.scoll-nav').slideDown();


            } else {
                $('.scoll-nav').slideUp();;
            }


        }

    })
    $(".header li a").click(function(e) {
        e.preventDefault()
        $("html , body").animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1500);
    })
})