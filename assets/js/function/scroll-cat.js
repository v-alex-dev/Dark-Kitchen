const body = document.getElementById('list-card');
const div = document.getElementById('list-cat')
const scrollCat = () => {

  body.addEventListener('scroll', (e) => {
    if (body.scrollTop > 0) {
      div.style.display = 'none';
    }
    else{
      div.style.display =  'flex'
    }
  })
}

export {scrollCat};