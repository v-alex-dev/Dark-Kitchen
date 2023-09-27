import { DishesList } from "../data/Dishes-list.js"
/* 
	Compare le nom reçu avec ceux de la database.
	Return l'objet correspondant à la recherche.

	Vérification et retour d'erreur à faire si on a le temps.
*/
const getDashiesByName = (name) => {
	return  DishesList.filter((dishe) => name === dishe.name);

}

export {getDashiesByName};