import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import CraigslistAPI from '../api/CraigslistAPI.js'
import { Redirect } from 'react-router';
class AddCategoryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const categoryObject = {
      category_name: event.target.elements[0].value,
    }
    CraigslistAPI.addCategory(categoryObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="category_name">
            <Form.Label>Category Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          {/* <Form.Group controlId="price">
            <Form.Label>Wine Price</Form.Label>
            <Form.Control/>
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddCategoryPage;