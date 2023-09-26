import { DishesList } from "../data/Dishes-list.js";


const filter = (category) => {
  // Récupérez toutes les cartes
  const newList = DishesList.filter(dish => {
    for (const item of dish.category) {
      if (item === category) {
        return dish;
      }
    }
  })
   
  return newList
};

export { filter };