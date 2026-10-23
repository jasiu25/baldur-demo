const menuBtn = document.getElementById("hamburgerMenuBtn");
const controls = document.getElementById("controls-wrapper");

menuBtn.addEventListener("click", () => {
    controls.classList.toggle("open");
})

controls.addEventListener("click", () => {
    controls.classList.toggle("open");
})