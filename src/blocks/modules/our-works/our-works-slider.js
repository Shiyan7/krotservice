import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {

    new Swiper(".our-works-slider", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            prevEl: ".our-works-slider__btn--prev",
            nextEl: ".our-works-slider__btn--next",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            577: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 3,
            }
        }
    });
});