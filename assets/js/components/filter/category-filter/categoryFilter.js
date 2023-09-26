import { categories } from "../../../data/category.js";
import { DishesList } from "../../../data/Dishes-list.js";
import { filter } from "../../../function/filter.js";
import { removeArticle } from "../../../function/removeChild.js";
import { cardList } from "../../card/card-list.js";



const categoryFilter = () => {

  const divCategories = document.getElementById('list-cat');
  const listCard = document.getElementById('list-card');
  
  DishesList.forEach(element => {
    cardList(element);
  })
  
  for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    const btnList = document.createElement('button');
    divCategories.appendChild(btnList);
    btnList.id = 'btn btn-list-cat';
    btnList.innerHTML = element;


    btnList.addEventListener('click', (e) => {
      const item = e.target.innerHTML;
      const newList = filter(item);
      

      removeArticle(listCard);

      newList.forEach(list => {
        cardList(list);
      })
    });
  }
}

export { categoryFilter };