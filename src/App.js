import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import CategoryFormPage from './pages/CategoryFormPage';
import PostForm from './components/PostForm/PostForm';
import AllPosts from './components/AllPosts/AllPosts';
import Page404 from './pages/Page404';
import logo from './logo.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div> 

            <Link style={{ float: "right", paddingTop: "10px", marginRight: "-5px"}} to={`/all-posts/`}>
              <button>View All Posts</button>
            </Link>
            <Link className="nav" to={`/`}>
              <img src={logo} alt="CC Logo" style={{maxHeight: "23px", padding: "0px 8px 0px 0px"}} ></img>
              Caroline's Craigslist
            </Link>

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/categories/:categoryID" component={CategoryPage} />
              <Route exact path="/add-category/" component={CategoryFormPage} />
              <Route exact path="/categories/:categoryID/edit" component={CategoryFormPage} />
              <Route exact path="/categories/:categoryID/add-post" component={PostForm} />
              <Route exact path="/categories/:categoryID/posts/:postID" component={PostPage} />
              <Route exact path="/categories/:categoryID/posts/:postID/edit" component={PostForm} />
              <Route exact path="/add-post/" component={PostForm} />
              <Route exact path="/all-posts/" component={AllPosts} />
              <Route path="*" component={Page404} />
            </Switch>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;