import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import CategoryPage from './pages/CategoryPage';
import AddCategoryPage from './pages/AddCategoryPage';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/categories/:categoryID" component={CategoryPage} />
            <Route exact path="/categories/new" component={AddCategoryPage} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;