import React, { Component } from 'react';
import PostList from '../components/PostList/PostList.js';
import { Link } from 'react-router-dom';

import CraigslistAPI from '../api/CraigslistAPI.js'
// import PostsAPI from '../api/PostsAPI.js';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      // posts: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.categoryID;
    
    CraigslistAPI.fetchCategoryByID(id)
      .then((category) => this.setState({
        category: category
      }));

    }
    
    render() {
      // console.log(this.state.category.category_name)
      // console.log(typeof(this.state.posts))

      return (
      <div>
        <h2> Category: { this.state.category.category_name } </h2>

        { this.state.category ?  <h2> <PostList id={this.props.match.params.categoryID} /> </h2>: null }
        <Link to={`/categories/${this.state.category.id}/edit`}>Edit Category Name</Link>
        
      </div>
    );
  }
}

export default CategoryPage;