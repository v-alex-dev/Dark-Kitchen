import { getDashiesByName } from "../../function/getDishesByName.js";
const shopping = [];

// Add un element sur l'évenement click un élément li contenant le name + le prix.
const addClickHandlers = () => {
	const btnAdd = document.querySelectorAll("#btn-add");

	for (const item of btnAdd) {
		item.addEventListener("click", (e) => {
			const listItem = document.createElement('li');
			const btnDelete = document.createElement('button');
			const parag = document.createElement('p');
			const span = document.createElement('span')
			btnDelete.classList = 'btn btn-delete';
			
			const dishe = getDashiesByName(e.target.name);
			const list = document.querySelector('#list-shop');
			shopping.push(dishe)
			btnDelete.innerHTML = 'X';
			parag.innerHTML = `${dishe.name}`;
			span.innerHTML = `${dishe.price.toFixed(2)} &euro;`
			list.appendChild(listItem);
			listItem.appendChild(btnDelete);
			listItem.appendChild(parag);
			listItem.appendChild(span)

			calculateTotal();

		});
	}
};
const calculateTotal = () => {
	const total = shopping.reduce((acc, dishe) => acc + dishe.price, 0);
	const title = document.querySelector('.shopping-total h5');
	title.innerHTML = `${total.toFixed(2)} &euro;`;
};

const deleteClickHandlers = () => {
	const list = document.querySelector('#list-shop');

	list.addEventListener("click", (e) => {
		if (e.target.classList.contains("btn-delete")) {
			const listItem = e.target.parentNode;
			list.removeChild(listItem);
			const disheName = listItem.querySelector('p').textContent;
			const disheIndex = shopping.findIndex(dishe => dishe.name === disheName);
			if (disheIndex !== -1) {
				shopping.splice(disheIndex, 1);
			}
			calculateTotal();
		}
	});
}



const listShop = () => {
	const shoppingList = document.querySelector('.shopping-list');
	const list = document.createElement('ul');


	list.id = 'list-shop'
  shoppingList.appendChild(list);
  addClickHandlers(); // Appel de la fonction pour ajouter les gestionnaires d'événements
	deleteClickHandlers();
	
};

export { listShop, addClickHandlers };