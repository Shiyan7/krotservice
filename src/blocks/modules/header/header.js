const menu = document.querySelector(".nav"),
    burger = document.querySelector(".burger"),
    nav = document.querySelector(".menu"),
    body = document.body;
    
const lockScroll = () => {
    body.classList.add("lock");
};

const unlockScroll = () => {
    body.classList.remove("lock");
};

const initialMenu = () => {
    document.querySelector(".nav__list--dropdown").classList.remove("transformation");
    document.querySelector(".nav").querySelector(".nav__list").classList.remove("transformation");
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
    lockScroll();
    initialMenu();
});

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link--drop")) {
        e.preventDefault();
        e.target.closest(".nav__list").classList.add("transformation");
        e.target.closest(".nav__item").querySelector(".nav__list--dropdown").classList.add("transformation");
        scrollTop();
    }

    if (e.target.classList.contains("mobile-back__link")) {
        e.preventDefault();
        e.target.closest(".nav__list--dropdown").classList.remove("transformation");
        e.target.closest(".nav").querySelector(".nav__list").classList.remove("transformation");
        scrollTop();
    }

    if (e.target.classList.contains("nav__link") && !e.target.classList.contains("nav__link--drop")) {
        e.preventDefault();
        menu.classList.remove("open");
        unlockScroll();
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