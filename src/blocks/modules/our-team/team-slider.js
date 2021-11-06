import Swiper, { Thumbs} from "swiper";

document.addEventListener("DOMContentLoaded", () => {

    const teamSliderNav = new Swiper(".team-slider__nav", {
        slidesPerView: 3,
        spaceBetween: 4,
        freeMode: true,
        watchSlidesProgress: true,
        
        breakpoints: {
            577: {
                spaceBetween: 10,
            },
            769: {
                spaceBetween: 20,
            }
        }
    });

    
    new Swiper(".team-slider__main", {
        modules: [Thumbs],
        spaceBetween: 4,
        thumbs: {
            swiper: teamSliderNav,
        },
        breakpoints: {
            577: {
                spaceBetween: 10,
            },
            769: {
                spaceBetween: 20,
            }
        }
    });
});