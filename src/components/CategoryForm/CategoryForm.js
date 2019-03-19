import React, { Component } from 'react';
import CraigslistAPI from '../../api/CraigslistAPI.js'
import { Redirect } from 'react-router';

class CategoryForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      inputValue : this.props.formFields,
      category : {},
      isNew: true
    }
  }

  componentDidMount() {
    if (this.props.formFields) {
      console.log(this.props.formFields)
      let id = this.props.formFields;
    
      CraigslistAPI.fetchCategoryByID(id)
        .then((category) => this.setState({
          category: category,
          isNew: false
        }));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryObject = {
      category_name: event.target.elements[0].value,
    }
    if (this.state.isNew) {
      this.addNewCategory(categoryObject)
    } else {
      this.editCategory(categoryObject)
    }
  }

  addNewCategory(categoryObject) {
    CraigslistAPI.addCategory(categoryObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  editCategory(categoryObject) {
    CraigslistAPI.editCategory(categoryObject, this.state.category.id)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    console.log(this.state.isNew)
    const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = "/" />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Category Name</label>
          <input id="category_name" ref="inputValue" defaultValue={ this.state.category ? this.state.category.category_name : null }>
          </input>
            <br/>
          <button variant="primary" type="submit">
          { this.state.inputValue ? "EDIT" : "SUBMIT" }
          </button>
        </form>
      </div>
    );
  }
}

export default CategoryForm;