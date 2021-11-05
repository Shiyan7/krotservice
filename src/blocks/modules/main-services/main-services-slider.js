import Swiper, {Pagination } from "swiper";

Swiper.use(Pagination);

const mainServicesSlider = document.querySelector(".main-services-slider");

let mySwiper;

const initializeSlider = () => {
    mySwiper = new Swiper(mainServicesSlider, {
        slidesPerView: 1,
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 50,
            }
        },
        pagination: {
            el: ".main-services-slider__pagination",
            type: "bullets",
            clickable: true,
        }
    });
};

if (window.innerWidth <= 768) {
    initializeSlider();
    mainServicesSlider.dataset.mobile = "true";
}

const mobileSlider = () => {
    if (window.innerWidth <= 1024 && mainServicesSlider.dataset.mobile == "false") {
        initializeSlider();
        mainServicesSlider.dataset.mobile = "true";
    }

    if (window.innerWidth > 1024) {
        mainServicesSlider.dataset.mobile = "false";
        if (mainServicesSlider.classList.contains("swiper-initialized")) {
            mySwiper.destroy();
        }
    }
};
mobileSlider();

window.addEventListener("resize", () => {
    mobileSlider();
});