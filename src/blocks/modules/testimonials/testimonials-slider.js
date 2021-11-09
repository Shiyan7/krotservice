import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {

    new Swiper(".testimonials-slider", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: ".testimonials-slider__btn--prev",
            nextEl: ".testimonials-slider__btn--next",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1025: {
                spaceBetween: 40,
                slidesPerView: 2,
            }
        }
    });
});