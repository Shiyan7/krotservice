import Swiper, {
    Grid,
    Navigation
} from "swiper";

new Swiper(".clients-slider", {
    modules: [Grid, Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    grid: {
        rows: 2,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".clients-slider__btn--prev",
        nextEl: ".clients-slider__btn--next",
    },
    breakpoints: {
        769: {
            loop: true,
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 25,
            slidesPerGroup: 1,
            grid: {
                rows: 1,
            },
        }
    }
});