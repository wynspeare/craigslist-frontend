import React, { Component } from 'react';
import CategoryList from '../components/CategoryList/CategoryList.js';
import { Link } from 'react-router-dom';


import CategoryAPI from '../api/CategoryAPI.js';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    CategoryAPI.fetchCategories()
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

        <Link to={`/add-category`}>
          <button>
            Add new category
          </button>
        </Link>
        <Link to={`/add-post/`}>
          <button>
            Add new post
          </button>
        </Link>
        <CategoryList categories={this.state.categories} />
        <br/>
      </div>
    );
  }
}

export default HomePage;