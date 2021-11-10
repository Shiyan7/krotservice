document.addEventListener("DOMContentLoaded", () => {

    const moreText = document.querySelectorAll(".technology__more-text");

    if (moreText) {
        moreText.forEach(el => {
            el.addEventListener("click", (e) => {
                //this
                let th = e.currentTarget;

                const dots = th.closest(".technology-item__desc").querySelector(".dots");
                const more = th.closest(".technology-item__desc").querySelector(".more");

                if (dots.style.display === "none") {
                    dots.style.display = "inline";
                    th.innerHTML = "далее";
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