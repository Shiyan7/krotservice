import Swiper, { Navigation } from "swiper";

new Swiper(".our-team-slider", {
    modules: [Navigation],
    slidesPerView: "auto",
    allowTouchMove: false,
    navigation: {
        prevEl: ".our-team-slider__btn--prev",
        nextEl: ".our-team-slider__btn--next",
    },
});