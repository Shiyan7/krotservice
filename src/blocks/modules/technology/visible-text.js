document.addEventListener("DOMContentLoaded", () => {

    const moreText = document.querySelectorAll(".more-text");

    if (moreText) {
        moreText.forEach(el => {
            el.addEventListener("click", (e) => {
                //this
                let th = e.currentTarget;

                const dots = th.closest(".more-desc").querySelector(".dots");
                const more = th.closest(".more-desc").querySelector(".more");
                const text = th.dataset.text;

                if (dots.style.display === "none") {
                    dots.style.display = "inline";
                    th.innerHTML = text;
                    more.style.display = "none";
                } else {
                    dots.style.display = "none";
                    th.innerHTML = "скрыть";
                    more.style.display = "inline";
                }
            });
        });
    }
});