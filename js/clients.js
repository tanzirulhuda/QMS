var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:50,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        animateOut: 'fadeOut',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });