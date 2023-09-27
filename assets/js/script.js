import { burgerMenu } from "./function/burger-menu.js";
import { categoryFilter } from "./components/filter/category-filter/categoryFilter.js";
import { darkMode } from "./function/dark-mode.js";
import { scrollCat } from "./function/scroll-cat.js";
import { listShop } from "./components/shopping/list-shopping.js";
import { DishesList } from "./data/Dishes-list.js";
import { cardList } from "./components/card/card-list.js";

DishesList.forEach(element => {
	cardList(element);
})


burgerMenu();	
categoryFilter();
darkMode ();
scrollCat();
listShop();
