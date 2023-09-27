const darkMode = () => {
    const switchButton = document.getElementById("switch-dark");
    const body = document.body;
    let logo1 = document.querySelector(".logo-footer1");
    let logo2 = document.querySelector(".logo-footer2");
    let facebook = document.querySelector(".facebook");
    let instagram = document.querySelector(".instagram");
    let takeaway = document.querySelector('.takeaway');
    let ubereats = document.querySelector('.ubereats');
    let card = document.querySelector("#list-card");
    let cat = document.querySelector("#list-cat");
    let shop = document.querySelector("#shopping");

    switchButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        switchButton.textContent = isDarkMode ? "Disable Darkmode" : "Enable Darkmode";
        logo1.srcset = isDarkMode ? "./assets/img/logo/logo-1-white.svg" : "./assets/img/logo/logo-1.svg";
        logo2.srcset = isDarkMode ? "./assets/img/logo/logo-2-white.svg" : "./assets/img/logo/logo-2.svg";
        facebook.srcset = isDarkMode ? "./assets/img/social-logo/facebook-red.svg" : "./assets/img/social-logo/facebook-black.svg";
        instagram.srcset = isDarkMode ? "./assets/img/social-logo/instagram-red.svg" : "./assets/img/social-logo/instagram-black.svg";
        takeaway.srcset = isDarkMode ? "./assets/img/social-logo/takeaway-red.svg" : "./assets/img/social-logo/takeaway-black.svg";
        ubereats.srcset = isDarkMode ? "./assets/img/social-logo/ubereats-red.svg" : "./assets/img/social-logo/ubereats-black.svg";
        card.style.backgroundColor = isDarkMode ? "#3C2A21" : "#E5E5CB";
        cat.style.backgroundColor = isDarkMode ? "#1A120B":  "#E5E5CB";
        shop.style.backgroundColor = isDarkMode ? "black" : "#8D7B68";
    });
};

export { darkMode };
