const switchDark = document.getElementById("switch-dark");
const body = document.body;

darkMode.addEventListener('click', () => {
    let currentBody = body.className;

    if (body.className === "light") {
        body.className ="dark";
    } else if (currentBody === "dark"){
        body.className = "light"
    }
});