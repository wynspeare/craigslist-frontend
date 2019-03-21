import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryList extends Component {

  createCategoryList() {
    return this.props.categories.map(( category, index ) =>
      <div key={index}>
        <p>
        <Link to={`/categories/${category.id}`}>
          <button className="category-button">
            {category.category_name}
          </button>
        </Link>
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