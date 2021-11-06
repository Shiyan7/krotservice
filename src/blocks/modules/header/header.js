const menu = document.querySelector(".nav"),
    burger = document.querySelector(".burger"),
    nav = document.querySelector(".menu");

const initialMenu = () => {
    document.querySelector(".nav__list--dropdown").classList.remove("animation");
    document.querySelector(".nav").querySelector(".nav__list").classList.remove("animation");
    scrollTop();
};

const scrollTop = () => {
    menu.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    initialMenu();
});

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link--drop")) {
        e.preventDefault();
        e.target.closest(".nav__list").classList.add("animation");
        e.target.closest(".nav__item").querySelector(".nav__list--dropdown").classList.add("animation");
        scrollTop();
    }

    if (e.target.closest(". mobile-back__link")) {
        e.preventDefault();
        e.target.closest(".nav__list--dropdown").classList.remove("animation");
        e.target.closest(".nav").querySelector(".nav__list").classList.remove("animation");
        scrollTop();
    }

    if (e.target.classList.contains("nav__link") && !e.target.classList.contains("nav__link--drop")) {
        menu.classList.remove("open");
    }
});

const changeHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

changeHeight();


window.addEventListener("resize", () => {
    changeHeight();
});