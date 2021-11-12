document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        if(e.target.closest(".accordion")) {
            let self = e.target.closest(".accordion");
            const control = self.querySelector(".accordion__control");
            const content = self.querySelector(".accordion__content");

            if(e.target.closest(".accordion__control")) {
                self.classList.toggle("open");
            }

            const watchHeight = () => {
                content.style.maxHeight = content.scrollHeight + "px";
            };

            window.addEventListener("resize", () => {
                watchHeight();
            });

            // если открыт аккордеон
            if (self.classList.contains("open")) {
                control.setAttribute("aria-expanded", true);
                content.setAttribute("aria-hidden", false);
                watchHeight();
            } else {
                control.setAttribute("aria-expanded", false);
                content.setAttribute("aria-hidden", true);
                content.style.maxHeight = null;
            }
        }
    });
});





/* document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(el => {
        el.addEventListener("click", (e) => {
            const self = e.currentTarget;
            const control = self.querySelector(".accordion__control");
            const content = self.querySelector(".accordion__content");

            self.classList.toggle("open");

            const watchHeight = () => {
                content.style.maxHeight = content.scrollHeight + "px";
            };

            window.addEventListener("resize", () => {
                watchHeight();
            });

            // если открыт аккордеон
            if (self.classList.contains("open")) {
                control.setAttribute("aria-expanded", true);
                content.setAttribute("aria-hidden", false);
                watchHeight();
            } else {
                control.setAttribute("aria-expanded", false);
                content.setAttribute("aria-hidden", true);
                content.style.maxHeight = null;
            }
        });
    });
}); */