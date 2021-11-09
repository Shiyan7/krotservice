const tabsBtn = document.querySelectorAll(".g-tabs__btn");
const tabs = document.querySelector(".g-tabs");
const tabsDropdownValue = document.querySelector(".g-tabs-dropdown__value");

if(tabsDropdownValue) {
    document.addEventListener("click", (e) => {
        if(e.target.closest(".g-tabs-dropdown__btn")) {
            tabs.classList.toggle("open");
        } else {
            tabs.classList.remove("open");
        }
    });
    
    tabsBtn.forEach(el => {
        el.addEventListener("click", () => {
    
            const tabsPath = el.getAttribute("data-tabs-path");
            const tabsValue = el.innerHTML;
    
            tabsDropdownValue.innerHTML = tabsValue;
            tabs.classList.remove("open");
    
    
            el.closest(".tabs").querySelector(".g-tabs__btn--active").classList.remove("g-tabs__btn--active");
            
            el.closest(".tabs").querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add("g-tabs__btn--active");
    
    
            let tabsContent = el.closest(".tabs").querySelectorAll(".tabs__content");
    
            const switchContent = (path, element) => {
                for(let i = 0; i < tabsContent.length; i++) {
                    let el = tabsContent[i];
                    el.classList.remove("active");
                }
                element.closest(".tabs").querySelector(`[data-tabs-target="${path}"]`).classList.add("active");
                
            };
    
    
            switchContent(tabsPath, el);
        });
    });
}