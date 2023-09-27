const darkMode = () => {

const switchButton = document.getElementById("switch-dark");
const body = document.body;



switchButton.addEventListener("click", function(){

    let logo1 = document.getElementsByClassName("logo-footer1");
    let logo2 = document.getElementsByClassName("logo-footer2");
    let newLogo1 = "./img/logo/logo-1-white.svg";
    let newLogo2 = "./img/logo/logo-2-white.svg";

    logo1.src = newLogo1;
    logo2.src = newLogo2;
});

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