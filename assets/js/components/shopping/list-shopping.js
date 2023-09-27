import { getDashiesByName } from "../../function/getDishesByName.js";

// Add un element sur l'évenement click un élément li contenant le name + le prix.
const addClickHandlers = () => {
  const btnAdd = document.querySelectorAll("#btn-add");

  for (const item of btnAdd) {
    item.addEventListener("click", (e) => {
      const listItem = document.createElement("li");
      const btnDelete = document.createElement("button");

      btnDelete.className = "btn-delete";
      btnDelete.innerHTML = "X";

      const dishe = getDashiesByName(e.target.name);
      const list = document.querySelector("#list-shop");

      listItem.innerHTML = `${dishe.name}  ${dishe.price.toFixed(2)} &euro;`;
      list.appendChild(listItem);
    });
  }
};

const deleteClickHandlers = () => {};

const addClickHandlersPrice = () => {
  const btnAdd = document.querySelectorAll("#btn-add");
  const title = document.createElement("h5");
  const list = document.querySelector(".shopping-total");
  let total = 0;
  list.appendChild(title);

  for (const item of btnAdd) {
    item.addEventListener("click", (e) => {
      const dishe = getDashiesByName(e.target.name);
      total += parseFloat(dishe.price);
      title.innerHTML = `${total.toFixed(2)} &euro;`;
    });
  }
};

const listShop = () => {
  const shoppingList = document.querySelector(".shopping-list");
  const list = document.createElement("ul");

  list.id = "list-shop";
  shoppingList.appendChild(list);
  addClickHandlers(); // Appel de la fonction pour ajouter les gestionnaires d'événements
  addClickHandlersPrice();
};

export { listShop, addClickHandlers };
