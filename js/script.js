var $ = jQuery;

if($(".js-banner-carousel").length > 0){
    $(".js-banner-carousel").slick({
        arrows:true,
        prevArrow: `<div class='arrow arrow-left'>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.48248 10.5546L3.3151 6.37816L7.48248 2.20167L6.19951 0.918701L0.740051 6.37816L6.19951 11.8376L7.48248 10.5546Z" fill="#C3C6CE"/>
                        </svg>
                    </div>`,
        nextArrow: `<div class='arrow arrow-right'>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.417725 1.63787L4.39257 5.62139L0.417725 9.60492L1.64142 10.8286L6.84864 5.62139L1.64142 0.414172L0.417725 1.63787Z" fill="#C3C6CE"/>
                        </svg>
                    </div>`,
    })
}

if($(".banner-pattern").length > 0){
    function bannerPatternFunction(){
        if($(window).width() > 992){
         
            const $container = $('.container');
            var totalWidth = $(window).width();
            var containerWidth = $container.width();
            var remainingWidth = totalWidth - containerWidth;
            var singlePadding = remainingWidth / 2;
            const boxPosition = $(".banner-pattern").width();
            const targetWidth = $('.image-container').offset().left -  $('.image-container').width() / 2
            
            $(".banner-pattern").css({'object-position': `${targetWidth}px 0`});

        }else{
            $(".banner-pattern").css('object-position', 'bottom')
        }
    }
    bannerPatternFunction();
    $(window).on("resize", function(){
        bannerPatternFunction();
    })
}

if($(".js-brands").length > 0){
   function loadBrandsSlick(){
        $(".js-brands").not('.slick-initialized').slick({
            slidesToShow: 6,
            slideToScroll:0,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            responsive: [
                {
                    breakpoint: 920,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
        
    }
    loadBrandsSlick();
   
}

if($(".js-products").length > 0){

    $(".js-products").slick({
        slidesToShow:1,
        slideToScroll:1,
        arrows:true,
        dots:true,
        prevArrow: `<div class='arrow arrow-left'>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.48248 10.5546L3.3151 6.37816L7.48248 2.20167L6.19951 0.918701L0.740051 6.37816L6.19951 11.8376L7.48248 10.5546Z" fill="#C3C6CE"/>
                        </svg>
                    </div>`,
        nextArrow: `<div class='arrow arrow-right'>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.417725 1.63787L4.39257 5.62139L0.417725 9.60492L1.64142 10.8286L6.84864 5.62139L1.64142 0.414172L0.417725 1.63787Z" fill="#C3C6CE"/>
                        </svg>
                    </div>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })
}

if($(".js-product-items").length > 0){    $(".js-product-items").slick({
        slidesToShow:4,
        slideToScroll:1,
        arrows:true,
        dots:true,
        prevArrow: `<div class='arrow arrow-left'>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.48248 10.5546L3.3151 6.37816L7.48248 2.20167L6.19951 0.918701L0.740051 6.37816L6.19951 11.8376L7.48248 10.5546Z" fill="#C3C6CE"/>
                        </svg>
                    </div>`,
        nextArrow: `<div class='arrow arrow-right'>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.417725 1.63787L4.39257 5.62139L0.417725 9.60492L1.64142 10.8286L6.84864 5.62139L1.64142 0.414172L0.417725 1.63787Z" fill="#C3C6CE"/>
                        </svg>
                    </div>`,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2
                }
            },
        
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
}

if($(".js-testimonials").length > 0){
    $(".js-testimonials").slick({
        slidesToShow:1,
        slideToScroll:1,
        arrows: true,
        prevArrow: $(".testimonial-arrow .arrow-left"),
        nextArrow: $(".testimonial-arrow .arrow-right"),
    })
}

if($(".js-testimonial-block").length > 0){
   
    function calculatePadding(){
        if($(window).width() > 1200){
            var $target = $(".js-testimonial-block .banner-image");
            var $target2 =$(".js-testimonial-block .text");
            var $container = $(".container");
            var totalWidth = $(window).width();
            var containerWidth = $container.width();
            var remainingWidth = totalWidth - containerWidth;
            var singlePadding = remainingWidth / 2;
            $target.css("max-width", containerWidth+'px');
            $target2.css('padding-left', singlePadding+'px' )
        }else{
            
            $(".js-testimonial-block .text").css('padding-right', '0px');
            $(".js-testimonial-block .banner-image").css("max-width", '100%');
        }
    }
    calculatePadding();
    $(window).on("resize",function(){
        calculatePadding();
    })
}


if($(".js-mission-block").length > 0){
  
    function calculatePadding(){
        if($(window).width() > 1200){
            var $target = $(".js-mission-block .banner-image");
            var $target2 =$(".js-mission-block .text");
            var $container = $(".container");
            var totalWidth = $(window).width();
            var containerWidth = $container.width();
            var remainingWidth = totalWidth - containerWidth;
            var singlePadding = remainingWidth / 2;
            $target.css("max-width", containerWidth+'px');
            $target2.css('padding-right', singlePadding+'px' )
        }else{
            $(".js-mission-block .text").css('padding-right', '0px');
            $(".js-mission-block .banner-image").css("max-width", '100%');
        }
    }
    calculatePadding();
    $(window).on("resize",function(){
        calculatePadding();
    })
}


//matchHeight
if($(".js-match-height-excerpt").length > 0){
    $(".js-match-height-excerpt").matchHeight({
        byRow:true,
        property: 'min-height'
    })
}

if($(".js-social-match-height").length > 0){
    $(".js-social-match-height").matchHeight({
        byRow: true,
        property: 'min-height'
    })
}

if($(".js-match-height-description").length > 0){
    $(".js-match-height-description").matchHeight({
        byRow:true,
        property:'min-height'
    })
}


if($(".js-quote").length > 0){
  

   
    function calculatePadding(){
        if($(window).width() > 991){
            var $target = $(".js-quote");
            var $container = $(".container");
            var totalWidth = $(window).width();
            var containerWidth = $container.width();
            var remainingWidth = totalWidth - containerWidth;
            var singlePadding = remainingWidth / 2;

            $target.css("padding-right", singlePadding+'px');
        }else{
            $(".js-quote").css("padding-right", '0px');
        }
    }
    calculatePadding();
    $(window).bind('resize', function(){
        calculatePadding();
    })
}

//navmenu
$(".m-nav .trigger-menu").on("click", function(){
    $(".nav-menu").addClass('active');
    $(".nav-menu-overlay").addClass('active');
    $("body").css("overflow", 'hidden');
})

$(document).on("click", '.nav-close, .nav-menu-overlay', function(){
    $(".nav-menu").removeClass('active');
    $(".nav-menu-overlay").removeClass('active');
    $("body").css("overflow", 'visible');
})