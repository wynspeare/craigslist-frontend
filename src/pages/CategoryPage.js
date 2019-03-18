import React, { Component } from 'react';
import CraigslistAPI from '../api/CraigslistAPI.js'

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.categoryID;
    console.log(id)
    
    CraigslistAPI.fetchCategoryByID(id)
      .then((category) => this.setState({
        category: category
      }));
    }
    
    render() {
      // console.log(this.state.category.category_name)
      return (
      <div>
        <h2> Category: {this.state.category.category_name}</h2>
      </div>
    );
  }
}

export default CategoryPage;