import React, { Component } from 'react';
import PostList from '../components/PostList/PostList.js';
import { Link } from 'react-router-dom';

import CategoryAPI from '../api/CategoryAPI.js'
import { Redirect } from 'react-router';


class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      category: {},
      dataLoaded: false
    };
  }

  componentDidMount() {
    let id = this.props.match.params.categoryID;
    
    CategoryAPI.fetchCategoryByID(id)
      .then((category) => this.setState({
        category: category,
        dataLoaded: true
      }));
  }

    handleDeleteButton(event) {
      event.preventDefault();
      CategoryAPI.deleteCategory(this.state.category.id)
        .then((response) => { this.setState({ redirect: true }) })
    }
    
    render() {
      let name = this.state.category.category_name

      const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = "/" />
    }
      return (
      <div>
        <h3> Category: { name } </h3>
        <hr/>
        { this.state.dataLoaded ?  <h2> <PostList id={this.props.match.params.categoryID} /> </h2>: null }
        <Link to={`/categories/${this.state.category.id}/edit`} >
          <button>
            EDIT CATEGORY NAME
          </button>
        </Link>

          <button variant="primary" type="submit" onClick={this.handleDeleteButton.bind(this)}>
            DELETE CATEGORY
          </button>

        <Link to={`/categories/${this.state.category.id}/add-post`} id={name}>
          <button >
            NEW { this.state.dataLoaded ? name.toUpperCase() : null } POST
          </button>
        </Link>



      </div>
    );
  }
}

export default CategoryPage;