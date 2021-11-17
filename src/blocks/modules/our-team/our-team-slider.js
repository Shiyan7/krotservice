import Swiper, { Autoplay, Navigation } from "swiper";

new Swiper(".our-team-slider", {
    modules: [Navigation, Autoplay],
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
    },
    navigation: {
        prevEl: ".our-team-slider__btn--prev",
        nextEl: ".our-team-slider__btn--next",
    },
});