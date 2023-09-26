import { cardList } from "./components/card/card-list.js";
import { DishesList } from "./data/Dishes-list.js";
import { burgerMenu } from "./function/burger-menu.js";
const search = document.getElementById("input-filter");

const filterDishes = () => {
  const inputValue = search.value.toLowerCase(); // Récupérer la valeur de l'input en minuscules
  
  const filteredDishes = DishesList.filter((dish) => {
    // Comparer la valeur de l'input avec les catégories de chaque plat (en minuscules)
    return dish.category.some((category) => category.toLowerCase().includes(inputValue));
  });
  
  DishesList.forEach((element) => {
    cardList(element);
  }); 
}



search.addEventListener("input", filterDishes);



burgerMenu();
