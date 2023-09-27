const darkMode = () => {

const switchButton = document.getElementById("switch-dark");
const body = document.body;

switchButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        switchButton.textContent = "Désactiver le mode sombre";
    } else {
        switchButton.textContent = "Activer le mode sombre";
    }
});
};

export { darkMode };