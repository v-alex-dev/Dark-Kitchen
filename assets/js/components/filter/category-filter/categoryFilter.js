import { categories } from "../../../data/category.js";
import { DishesList } from "../../../data/Dishes-list.js";
import { filter } from "../../../function/filter.js";
import { removeArticle } from "../../../function/removeChild.js";
import { cardList } from "../../card/card-list.js";
import { addClickHandlers } from "../../shopping/list-shopping.js";


const categoryFilter = () => {

  const divCategories = document.getElementById('list-cat');
  const listCard = document.getElementById('list-card');
  
  
  
  for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    const btnList = document.createElement('button');

    divCategories.appendChild(btnList);

    btnList.className = 'btn btn-list-cat';
    btnList.id = 'btn-effect'
    btnList.innerHTML = element;

    btnList.addEventListener('click', (e) => {
      const item = e.target.innerHTML;
      const newList = filter(item);
      

      removeArticle(listCard);

      newList.forEach(list => {
        cardList(list);
      });

      addClickHandlers();
    });
  }
}

export { categoryFilter };