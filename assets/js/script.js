import { cardList } from "./components/card/card-list.js";
import { DishesList } from "./data/Dishes-list.js";



DishesList.forEach(element => {
	cardList(element);
});