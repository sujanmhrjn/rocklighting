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