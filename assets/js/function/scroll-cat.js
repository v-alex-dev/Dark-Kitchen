const divCard = document.getElementById('list-card');
const div = document.getElementById('list-cat');

const handleScroll = () => {
  const scrollY = divCard.scrollTop;
  const opacity = 1 - (scrollY / 200); 
  // Limitez la valeur d'opacité entre 0 et 1
  const clampedOpacity = Math.min(Math.max(opacity, 0), 1);
  // Applique l'opacité à la div
  div.style.opacity = clampedOpacity;
  if (scrollY > 150) {
    div.style.display = 'none';
  }else{
    div.style.display = 'flex';
  }
};

const scrollCat = () => {
  // Ajoutez un écouteur d'événement de défilement
 divCard.addEventListener('scroll', handleScroll);
};

export { scrollCat };