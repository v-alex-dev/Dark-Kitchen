import { DishesList } from "../data/Dishes-list.js";

const shoppingCard = () => {
  const btnAdd = document.getElementById("btn-add");
  let order = [];

  const pricePerIndex = (index) => {
    if (index >= 0 && index < DishesList.length) {
      return DishesList[index].price;
    } else {
      return "Index invalide";
    }
  };

  btnAdd.addEventListener("click", () => {
    console.log("test");
    const indexProduit = 5;
    const prix = pricePerIndex(indexProduit);
    console.log("Prix récupéré : " + prix);
    order.push(prix);

    console.log(order);
  });
};

export { shoppingCard };
