import { DishesList } from "../data/Dishes-list.js";

const shoppingCard = () => {
  const btnAdd = document.querySelectorAll("btn-add");
  let order = [];

  const pricePerIndex = (index) => {
    if (index >= 0 && index < DishesList.length) {
      return DishesList[index].price;
    } else {
      return "Index invalide";
    }
  };
  for (const item of btnAdd) {
    
  }

  btnAdd.addEventListener("click", (e) => {
    console.log(e.target.name);
    const indexProduit = 5;
    const prix = pricePerIndex(indexProduit);
    console.log("Prix récupéré : " + prix);
    order.push(prix);

    console.log(order);
  });
};

export { shoppingCard };
