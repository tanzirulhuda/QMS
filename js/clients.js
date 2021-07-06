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
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });
// $('.owl-carousel').owlCarousel({
//     rtl:true,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })