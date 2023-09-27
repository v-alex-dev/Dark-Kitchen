import { getDashiesByName } from "./getDishesByName.js";

const shoppingCard = () => {
  const btnAdd = document.querySelectorAll("#btn-add");


  // On itère sur chaque btn et on écoute l'évenement click pour ajouter l'objet correspondant à la card dans un tableau
  for (const item of btnAdd) {
    item.addEventListener("click", (e) => {
      const list = document.createElement('li')
      const dishe = getDashiesByName(e.target.name)   
      list.innerHTML = dishe.name
      return list
    });
  }
 
};

export { shoppingCard };
