import { getDashiesByName } from "./getDishesByName.js";

const shoppingCard = () => {
  const btnAdd = document.querySelectorAll("#btn-add");
  let order = [];

  // On itère sur chaque btn et on écoute l'évenement click pour ajouter l'objet correspondant à la card dans un tableau
  for (const item of btnAdd) {
    item.addEventListener("click", (e) => {
      console.log(e.target.name)
      const dishe = getDashiesByName(e.target.name)
      order.push(dishe);
    });

  }

  return order;
};

export { shoppingCard };
