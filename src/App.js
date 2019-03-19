import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';

import AddCategory from './components/AddCategory/AddCategory';
import AddPost from './components/AddPost/AddPost';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/categories/:categoryID" component={CategoryPage} />
            <Route exact path="/add-category/" component={AddCategory} />
            <Route exact path="/categories/:categoryID/posts/:postID" component={PostPage} />
            <Route exact path="/posts/new" component={AddPost} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;