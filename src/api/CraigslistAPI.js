const fetchCategoryByID = (categoryID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}`)
    .then((response) => response.json());
}

const fetchCategories = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/`)
    .then((response) => response.json());
}

// const addWine = (wineObject) => {
//   return fetch('https://cors-anywhere.herokuapp.com/https://django-wine-api.herokuapp.com/wines/', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(wineObject)
//   })
// }


export default {
  fetchCategoryByID: fetchCategoryByID,
  fetchCategories: fetchCategories,
  // addWine: addWine
}