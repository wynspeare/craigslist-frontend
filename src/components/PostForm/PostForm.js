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
      // category : {},
      isNew: true,
      editPostData: {}
    }
  }


  componentDidMount() {
    this.loadCategories()
    if (this.state.editPostID) {
      PostsAPI.fetchPostByID(this.state.categoryID, this.state.editPostID)
        .then((apiResponseJSON) => {
        // console.log(apiResponseJSON)
        this.setState({
          editPostData: apiResponseJSON,
          isNew: false
        });
      });

    // if (this.props) {
    //   let id = this.props.match.params.categoryID;
    }
  }
  //   CategoryAPI.fetchCategoryByID(id)
  //     .then((category) => this.setState({
  //       category: category,
  //     }));
  // }

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
            
            {/* <Form.Control as="textarea" rows="4"  placeholder={ post.post_body ? post.post_body : null }/> */}
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
            <Form.Label>Image</Form.Label>
            <Form.Control defaultValue={ post.image ? post.image : null }/>
          </Form.Group>

          <Form.Group controlId="category" >
            <Form.Label>Category Number</Form.Label>
            <Form.Control defaultValue={this.props.match.params.categoryID} />
          </Form.Group>

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