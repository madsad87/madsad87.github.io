$(document).ready(function () {
    
    $(window).scroll(function () {
        
        var verticalScroll = $(this).scrollTop();
        
        if (verticalScroll >= 1000) {
            
            $('.in-left').addClass('animated zoomInLeft');
        
        
            $('.in-right').addClass('animated zoomInRight');
        }
        
    });
});

$(function(){
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 1000) { 
            $(".gw2imgs:hidden").css('visibility','visible');   
            $(".gw2imgs:hidden").fadeIn('slow');  
        } 
        else {     
            $(".gw2imgs:visible").fadeOut("slow"); 
        }  
    });
});