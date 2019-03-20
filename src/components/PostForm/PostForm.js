import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import PostsAPI from '../../api/PostsAPI.js'
import { Redirect } from 'react-router';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const postObject = {
      post_title: event.target.elements[0].value,
      post_body: event.target.elements[1].value,
      post_city: event.target.elements[2].value,
      price: event.target.elements[3].value,
      image: event.target.elements[4].value,
      category: event.target.elements[5].value,
    }
    PostsAPI.addPost(postObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {

    console.log(this.props.match.params.categoryID)

    const { redirect } = this.state;
      if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="post_title">
            <Form.Label>Title</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="post_body">
            <Form.Label>Body</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="post_city">
            <Form.Label>City</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="category" >
            <Form.Label>Category Number</Form.Label>
            <Form.Control defaultValue={this.props.match.params.categoryID} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default PostForm;