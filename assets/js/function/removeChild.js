const removeArticle = (children) => {
  while (children.firstChild) {
    children.removeChild(children.firstChild)
  }
}

export {removeArticle};