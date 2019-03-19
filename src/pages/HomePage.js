import React, { Component } from 'react';
import CategoryList from '../components/CategoryList/CategoryList.js';
import { Link } from 'react-router-dom';


import CraigslistAPI from '../api/CraigslistAPI.js';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    CraigslistAPI.fetchCategories()
      .then((apiResponseJSON) => {
        this.setState({
          categories: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> Caroline's Craigslist </h1>
        <CategoryList categories={this.state.categories} />
        <Link to={`/add-category`}>Add new category</Link>
        
        <br/>

        <Link to={`/posts/new`}>Add new post</Link>

      </div>
    );
  }
}

export default HomePage;