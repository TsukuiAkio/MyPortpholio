let swiper = new Swiper('.swiper', {
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView:2,
    loop: true,
    spaceBetween: 30,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
});