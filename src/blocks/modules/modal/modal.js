export class GraphModal {
    constructor(t) {
        this.options = Object.assign({
            isOpen: () => {},
            isClose: () => {}
        }, t), this.modal = document.querySelector(".modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", "[tabindex]:not([tabindex^=\"-\"])"], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events();
    }
    events() {
        this.modal && (document.addEventListener("click", function (t) {
            const e = t.target.closest("[data-graph-path]");
            if (e) {
                let t = e.dataset.graphPath,
                    s = e.dataset.graphAnimation,
                    i = e.dataset.graphSpeed;
                return this.animation = s || "fade", this.speed = i ? parseInt(i) : 300, this._nextContainer = document.querySelector(`[data-graph-target="${t}"]`), void this.open();
            }
            t.target.closest(".modal__close") && this.close();
        }.bind(this)), window.addEventListener("keydown", function (t) {
            27 == t.keyCode && this.isOpen && this.close(), 9 == t.which && this.isOpen && this.focusCatch(t);
        }.bind(this)), this.modal.addEventListener("click", function (t) {
            t.target.classList.contains("modal__container") || t.target.closest(".modal__container") || !this.isOpen || this.close();
        }.bind(this)));
    }
    open(t) {
        if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
        this.modalContainer = this._nextContainer, t && (this.modalContainer = document.querySelector(`[data-graph-target="${t}"]`)), this.modal.style.setProperty("--transition-time", `${this.speed/1e3}s`), this.modal.classList.add("is-open"), this.disableScroll(), this.modalContainer.classList.add("modal-open"), this.modalContainer.classList.add(this.animation), setTimeout(() => {
            this.options.isOpen(this), this.modalContainer.classList.add("animate-open"), this.isOpen = !0, this.focusTrap();
        }, this.speed);
    }
    close() {
        this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("modal-open"), this.enableScroll(), this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()));
    }
    focusCatch(t) {
        const e = this.modalContainer.querySelectorAll(this._focusElements),
            s = Array.prototype.slice.call(e),
            i = s.indexOf(document.activeElement);
        t.shiftKey && 0 === i && (s[s.length - 1].focus(), t.preventDefault()), t.shiftKey || i !== s.length - 1 || (s[0].focus(), t.preventDefault());
    }
    focusTrap() {
        const t = this.modalContainer.querySelectorAll(this._focusElements);
        this.isOpen ? t.length && t[0].focus() : this.previousActiveElement.focus();
    }
    disableScroll() {
        document.body.classList.add("lock");
    }
    enableScroll() {
        if(!document.querySelector(".menu").classList.contains("open")) document.body.classList.remove("lock");
    }
}

/* Setup */

new GraphModal();