import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import PostsAPI from '../../api/PostsAPI.js'
import CategoryAPI from '../../api/CategoryAPI.js'
import { Redirect } from 'react-router';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      categories: {},
      categoryID : this.props.match.params.categoryID,
      editPostID: this.props.match.params.postID,
      isNew: true,
      editPostData: {}
    }
  }

  componentDidMount() {
    this.loadCategories()
    if (this.state.editPostID) {
      PostsAPI.fetchPostByID(this.state.categoryID, this.state.editPostID)
        .then((apiResponseJSON) => {
        this.setState({
          editPostData: apiResponseJSON,
          isNew: false
    })})}
  }

  loadCategories() {
    CategoryAPI.fetchCategories()
      .then((apiResponseJSON) => {
        this.setState({
          categories: apiResponseJSON
    })})
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
    if (this.state.isNew) {
      this.addNewPost(postObject)
    } else {
      this.editPost(postObject)
    }
  }

  addNewPost(postObject) {
    PostsAPI.addPost(postObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  editPost(postObject) {
    PostsAPI.editPost(postObject, this.state.categoryID, this.state.editPostID)
      .then((response) => { this.setState({ redirect: true }) })
  }

  createCategoryDropDown() {
    let categories = Object.values(this.state.categories)

    return categories.map(( category, index ) =>
        <option key={category.id} value={category.id} style={{ padding: "20px"}}>
            {category.category_name}
        </option>
      )
    }

  render() {
    const { redirect } = this.state;
      if (redirect) {
        return <Redirect to = "/" />
      }
    let post = this.state.editPostData

    return (
      <div>
        <Container>
        <h3> { this.state.isNew ? "Add New" : "Edit" } Post</h3>
        <Form  onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="post_title">
            <Form.Label>Title</Form.Label>
            <Form.Control defaultValue={ post.post_title ? post.post_title : null }/>
          </Form.Group>

          <Form.Group controlId="post_body">
            <Form.Label>Body</Form.Label>
            <Form.Control style={{ padding: "5px 5px 20px 5px"}} defaultValue={ post.post_body ? post.post_body : null }/>
          </Form.Group>

          <Form.Group controlId="post_city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text"  defaultValue={ post.post_city ? post.post_city : null }/>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control defaultValue={ post.price ? post.price : null }/>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label >Image </Form.Label>
            <Form.Control defaultValue={ post.image ? post.image : null }/>
            <Form.Text className="text-muted">
              Please paste a url of an image, 800x600 or smaller. 
            </Form.Text>
          </Form.Group>

          { this.state.isNew ?

          <Form.Group controlId="category" style={{ padding: "10px 0px"}}>
            <Form.Label>Category</Form.Label>
            <Form.Control style={{ display: "block", width: "61%", padding: "20px"}} as="select">
            { this.state.categories ? this.createCategoryDropDown() : null }
            </Form.Control>
          </Form.Group> : <Form.Group controlId="category" >
            <Form.Label style={{color: "#c1c1c1"}}>Category</Form.Label>
            <Form.Control 
              style={{ width: "3%", backgroundColor: "#d6d6d6", color: "#c1c1c1"}} 
              disabled 
              defaultValue={this.props.match.params.categoryID} />
          </Form.Group>
          }

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Container>
      </div>
    );
  }
}

export default PostForm;