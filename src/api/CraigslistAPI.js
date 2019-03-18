const fetchCategoryByID = (categoryID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}`)
    .then((response) => response.json());
}

const fetchCategories = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/`)
    .then((response) => response.json());
}

const addCategory = (categoryObject) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(categoryObject)
  })
}


export default {
  fetchCategoryByID: fetchCategoryByID,
  fetchCategories: fetchCategories,
  addCategory: addCategory
}