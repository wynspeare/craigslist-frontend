import React, { Component } from 'react';
import CategoryForm from '../components/CategoryForm/CategoryForm.js';

class CategoryFormPage extends Component {

  render() {
    return (
      <div>
        { this.props.match.params.categoryID ?         <CategoryForm 
          formFields={ this.props.match.params.categoryID }
        /> :         
        <CategoryForm />}
      </div>
    );
  }
}

export default CategoryFormPage;