document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.querySelector(".g-input-file input");

    fileInput.addEventListener("change", (e) => {
        let th = e.currentTarget;
        let uploadedFileName = th.files[0].name;

        th.closest(".g-input-file").querySelector("span").textContent = uploadedFileName;
    });
});