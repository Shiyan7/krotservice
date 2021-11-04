document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelectorAll(".nav__list");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        body.classList.toggle("lock");
        e.currentTarget.classList.toggle("isOpen");

        navLists.forEach(el => el.classList.remove("animation"));
        
    });
});