$(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() <= 1000) {

            $(".top").hide(400)
        } else{
            $(".top").show(400)
        }
    
    
        $(".top").on("click", function(e) {
            e.preventDefault()
    
            $("html, body").animate({
                scrollTop: 0
            }, 1000)
        })
    })



})


