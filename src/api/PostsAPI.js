const fetchPostByID = (categoryID, postID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}/posts/${postID}`)
    .then((response) => response.json());
}

const fetchPosts = (categoryID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}/posts/`)
    .then((response) => response.json());
}

// const addPost = (postObject) => {
//   return fetch('https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(postObject)
//   })
// }


export default {
  fetchPostByID: fetchPostByID,
  fetchPosts: fetchPosts,
  // addPost: addPost
}