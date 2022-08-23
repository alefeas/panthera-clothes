let swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 37.5,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
