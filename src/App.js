import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import CategoryPage from './pages/CategoryPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/categories/:categoryID" component={CategoryPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;