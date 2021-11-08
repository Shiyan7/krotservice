import Swiper, {
    Grid
} from "swiper";

document.addEventListener("DOMContentLoaded", () => {
    const servicesSlider = document.querySelector(".services-slider");

    if (servicesSlider) {
        let mySwiper;

        const initializeSlider = () => {


            mySwiper = new Swiper(servicesSlider, {
                slidesPerView: 1,
                modules: [Grid],
                grid: {
                    rows: 2,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    769: {
                        slidesPerView: 2,
                    }
                }
            });

        };

        if (window.innerWidth <= 768) {
            initializeSlider();
            servicesSlider.dataset.mobile = "true";
        }

        const mobileSlider = () => {
            if (window.innerWidth <= 1024 && servicesSlider.dataset.mobile == "false") {
                initializeSlider();
                servicesSlider.dataset.mobile = "true";
            }

            if (window.innerWidth > 1024) {
                servicesSlider.dataset.mobile = "false";
                if (servicesSlider.classList.contains("swiper-initialized")) {
                    mySwiper.destroy();
                }
            }
        };
        mobileSlider();

        window.addEventListener("resize", () => {
            mobileSlider();
        });
    }
});