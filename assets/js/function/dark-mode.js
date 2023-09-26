const switchButton = document.getElementById("switch-dark");
const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

darkMode = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
};

switchButton.addEventListener('click', darkMode);


export { darkMode };