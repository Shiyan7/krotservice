import Swiper, {
    Grid,
    Navigation
} from "swiper";

new Swiper(".certificates-slider", {
    modules: [Grid, Navigation],
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    grid: {
        rows: 2,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".certificates-slider__btn--prev",
        nextEl: ".certificates-slider__btn--next",
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
            grid: {
                rows: 1,
            },
        },

        1025: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
            grid: {
                rows: 1,
            },
        }
    }
});