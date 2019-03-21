const fetchPostByID = (categoryID, postID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}/posts/${postID}`)
    .then((response) => response.json());
}

const fetchPosts = (categoryID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}/posts/`)
    .then((response) => response.json());
}

const fetchAllPosts = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/posts/`)
    .then((response) => response.json());
}

const addPost = (postObject) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/posts/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(postObject)
  })
}

const editPost = (postObject, categoryID, postID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}/posts/${postID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(postObject)
  })
}

const deletePost = (categoryID, postID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://craigslist-backend.herokuapp.com/categories/${categoryID}/posts/${postID}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
}


export default {
  fetchPostByID: fetchPostByID,
  fetchPosts: fetchPosts,
  addPost: addPost,
  editPost: editPost,
  deletePost: deletePost,
  fetchAllPosts: fetchAllPosts
}