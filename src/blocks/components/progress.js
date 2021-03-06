document.addEventListener("DOMContentLoaded", () => {
    const line = document.querySelector(".progress__line");

    if(line) {
        const progressAnimation = () => {
            let scrollTop = window.scrollY;
            let windowHeight = window.innerHeight;
            let siteHeight = document.documentElement.scrollHeight;
            let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
            line.style.width = `${percentageProgress}%`;
        };
    
        progressAnimation();
    
        window.addEventListener("scroll", () => {
            progressAnimation();
        });
    }
});