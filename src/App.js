import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import CategoryFormPage from './pages/CategoryFormPage';
import PostForm from './components/PostForm/PostForm';
import Page404 from './pages/Page404';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link className="nav" to={`/`}>Caroline's Craigslist</Link>

            <Switch>

              <Route exact path="/" component={HomePage} />

              <Route exact path="/categories/:categoryID" component={CategoryPage} />
              <Route exact path="/add-category/" component={CategoryFormPage} />
              <Route exact path="/categories/:categoryID/edit" component={CategoryFormPage} />

              <Route exact path="/categories/:categoryID/add-post" component={PostForm} />
              <Route exact path="/categories/:categoryID/posts/:postID" component={PostPage} />
              <Route exact path="/categories/:categoryID/posts/:postID/edit" component={PostForm} />

              <Route exact path="/add-post/" component={PostForm} />
              <Route path="*" component={Page404} />
            </Switch>

            
            
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;