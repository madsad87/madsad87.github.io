$(document).ready(function () {
    
    $(window).scroll(function () {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll >= 2900) {
            
            $('.in-left').addClass('animated zoomInLeft infinite');
        }
        
        if(verticalScroll >= 2900) {
            
            $('.in-right').addClass('animated zoomInLeft infinite');
        }
        
    });
});

