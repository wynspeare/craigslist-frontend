import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryList extends Component {

  createCategoryList() {
    return this.props.categories.map(( category, index ) =>
      <div key={index}>
        <hr/>
        <p>
        <Link to={`/categories/${category.id}`}>{category.id} - {category.category_name}</Link>
        </p>
      </div>
      )
    }

  render() {
    return (
      <div>
        { this.createCategoryList() }
      </div>
    );
  }
}

export default CategoryList;