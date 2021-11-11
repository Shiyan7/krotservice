import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {

    new Swiper(".testimonials-section-slider", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            prevEl: ".testimonials-section-slider__btn--prev",
            nextEl: ".testimonials-section-slider__btn--next",
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