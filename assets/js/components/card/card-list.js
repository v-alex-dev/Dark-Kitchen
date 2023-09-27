// import { shoppingCard } from "../../function/shoppingCard.js";

const cardList = (item) => {
  const section = document.getElementById("list-card");
  const card = document.createElement("article");
  const img = document.createElement("img");
  const titleCard = document.createElement("h3");
  const price = document.createElement("p");
  const btnShop = document.createElement("button");

  img.className = "dishes-img";
  titleCard.className = "title-card";
  price.className = "price";
  btnShop.className = "btn btn-shop";
  btnShop.id = `btn-add`;
  btnShop.name = `${item.name}`

  btnShop.innerHTML = "add";

  //create header to card with card-header className
  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  //create body to card with card-body className
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  //create footer to card with card-footer className
  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  section.appendChild(card);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  cardHeader.appendChild(img);
  cardBody.appendChild(titleCard);
  cardBody.appendChild(price);
  cardFooter.appendChild(btnShop);

  img.src = item.url;
  img.alt = item.name;
  titleCard.innerHTML = item.name;
  price.innerHTML = `${item.price.toFixed(2)} &euro;`;
};

export { cardList };
