document.addEventListener("DOMContentLoaded", () => {
    const benefits = document.querySelector(".benefits__list");
    const counters = document.querySelectorAll(".benefits__number");
    const about = document.querySelector(".about-section");

    if (benefits) {
        const counterAnim = (el, start = 0, end) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / 1000, 1);
                el.innerText = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        let flag = 0;

        const watchScroll = () => {

            if (about.classList.contains("active")) {
                flag++;
                if (flag == 1) {
                    setTimeout(function () {
                        counters.forEach(el => {
                            counterAnim(el, 0, el.dataset.number);
                        });
                    }, 1500);
                }
            }
        };

        watchScroll();

        window.addEventListener("scroll", () => {
            watchScroll();
        });
    }

});