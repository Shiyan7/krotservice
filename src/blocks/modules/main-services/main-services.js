document.addEventListener("DOMContentLoaded", () => {
    const mainServiceBg = document.querySelector(".main-service__bg");
    const mainServices = document.querySelectorAll(".main-service");

    if (mainServiceBg) {
        mainServiceBg.style.width = `${mainServices[0].offsetWidth}px`;

        mainServices.forEach(el => {

            const watchWidth = () => {
                mainServiceBg.style.width = `${el.offsetWidth}px`;
            };
            
            el.addEventListener("mouseenter", (e) => {
                mainServiceBg.style.left = `${e.currentTarget.offsetLeft}px`;
            });
            watchWidth();

            window.addEventListener("resize", () => {
                watchWidth();
            });
        });
    }
});