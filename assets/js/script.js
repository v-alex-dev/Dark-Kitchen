import { cardList } from "./components/card/card-list.js";
import { DishesList } from "./data/Dishes-list.js";
import { burgerMenu } from "./function/burger-menu.js";

DishesList.forEach((element) => {
  cardList(element);
});

burgerMenu();

