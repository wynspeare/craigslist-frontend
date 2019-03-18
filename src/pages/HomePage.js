import React, { Component } from 'react';
import CategoryList from '../components/CategoryList/CategoryList.js';
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
        <h1> All Categories </h1>
        <CategoryList categories={this.state.categories} />
      </div>
    );
  }
}

export default HomePage;