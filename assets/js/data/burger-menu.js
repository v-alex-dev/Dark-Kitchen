const burgerMenu = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navigate = document.querySelector(".navigate");

    burgerMenu.addEventListener("click", () => {
      navigate.classList.toggle("active");
      console.log("test");
    });
  });
};
export { burgerMenu };
