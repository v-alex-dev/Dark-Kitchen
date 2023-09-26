import { DishesList } from "../data/Dishes-list.js";

const btnAdd = document.getElementById("btn-add");
let order = [];

const pricePerIndex = (index) => {
  if (index >= 0 && index < DishesList.length) {
    return DishesList[index].prix;
  } else {
    return "Index invalide";
  }
};

const shoppingCard = () => {
  btnAdd.addEventListener("click", () => {
    console.log("test");
    const indexProduit = 5; // Remplacez par l'index de l'objet que vous souhaitez récupérer
    const prix = pricePerIndex(indexProduit);
    console.log("Prix récupéré : " + prix);
    order.push(prix);
  });
};
console.log(order);
export { shoppingCard };
