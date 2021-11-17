document.addEventListener("DOMContentLoaded", () => {
    const serviceItem = document.querySelector(".service-item");

    if (serviceItem) {
        const openServiceBack = () => {
            if (window.innerWidth <= 1024) {
                document.addEventListener("click", (e) => {
                    if (e.target.closest(".service-item")) {
                        document.querySelectorAll(".service-item").forEach(el => el.classList.remove("open"));
                        e.target.classList.add("open");
                    } else {
                        document.querySelectorAll(".service-item").forEach(el => el.classList.remove("open"));
                    }
                });
            }
        };

        openServiceBack();

        window.addEventListener("resize", () => {
            openServiceBack();
        });
    }
});