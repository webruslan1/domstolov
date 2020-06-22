$slickGreen = false;
        function greenSlider() {
            if ($(window).width() < 767) {
                if (!$slickGreen) {
                    $(".about-images").slick({
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                    $slickGreen = true;
                }
            } else if ($(window).width() > 767) {
                if ($slickGreen) {
                    $('.about-images').slick('unslick');
                    $slickGreen = false;
                }
            }
        };

        $(document).ready(function () {
                greenSlider();
    });
        $(window).on('resize', function () {
                greenSlider();
    });

$(".js-range-slider1").ionRangeSlider({
    min: 0,
    max: 1500000,
    from: 0,
    step:50000
});

$(".js-range-slider2").ionRangeSlider({
    min: 20,
    max: 300,
    from: 0,
    step: 5
});

// shop-value
$('#range1').on('change',function () {
    var range1 = $('#range1').val();
    var range2 = $('#range2').val();
    
    if(range1 >= 50000 && range1 <= 400000){
        $('#shop-value').html(1);
    }else if(range1 >= 400001 && range1 <= 600000){
        $('#shop-value').html(2);
    }else if(range1 >= 600001 && range1 <= 800000){
        $('#shop-value').html(3);
    }else if(range1 >= 800001 && range1 <= 1000000){
        $('#shop-value').html(4);
    }else if(range1 >= 1000001 && range1 <= 1200000){
        $('#shop-value').html(5);
    }else if(range1 >= 1200001 && range1 <= 1500000){
        $('#shop-value').html(6);
    }


    var summcalc = $('#shop-value').html() * range2 * 2000;

    $('#calc-value').html(summcalc
    );
    

});

$('#range2').on('change',function(){
    var range1 = $('#range1').val();
    var range2 = $('#range2').val();
    
    if(range1 >= 50000 && range1 <= 400000){
        $('#shop-value').html(1);
    }else if(range1 >= 400001 && range1 <= 600000){
        $('#shop-value').html(2);
    }else if(range1 >= 600001 && range1 <= 800000){
        $('#shop-value').html(3);
    }else if(range1 >= 800001 && range1 <= 1000000){
        $('#shop-value').html(4);
    }else if(range1 >= 1000001 && range1 <= 1200000){
        $('#shop-value').html(5);
    }else if(range1 >= 1200001 && range1 <= 1500000){
        $('#shop-value').html(6);
    }


    var summcalc = $('#shop-value').html() * range2 * 2000;

    $('#calc-value').html(summcalc
    );
}); 

$('.btn-modal').on('click',function(){
    $('.modal').css('display','flex');
});

$('.close').on('click',function(){
    $('.modal').hide();
});

