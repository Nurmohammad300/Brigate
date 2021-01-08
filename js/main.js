$(document).ready(function(){
    $(".navbar .nav-link").click(function(){
        $(".navbar").find(".nav-item.active").removeClass("active");
        $(this).parents(".navbar .nav-item").addClass("active")
    });

    // Toggler Icon
    $(".inner-wrap").click(function(){
        $(this).toggleClass("active")
    });

    AOS.init({
        duration: 1000,
        once: true
    });

    // Counter up plugin

    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 5000
        });
    });
});
    
// Carousel slider
$(".carousel").carousel({
    pause:false
})

