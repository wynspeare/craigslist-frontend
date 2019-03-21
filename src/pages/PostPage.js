import React, { Component } from 'react';
import PostsAPI from '../api/PostsAPI';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class PostPage extends Component {
  state = {
    postFromAPI: [],
    dataLoaded: false,
    redirect404: false
  }

  componentDidMount() {
    PostsAPI.fetchPostByID(this.props.match.params.categoryID, this.props.match.params.postID)
      .then((apiResponseJSON) => {

        if (apiResponseJSON.detail === "Not found.") {
          this.setState({
            redirect404: true
          })
        } else {
        this.setState({
          postFromAPI: apiResponseJSON,
          dataLoaded: true
        });
    }});
  }

  handleDeleteButton(event) {
    event.preventDefault();
    PostsAPI.deletePost(this.props.match.params.categoryID,this.state.postFromAPI.id)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    if (this.state.redirect404) {
      return <Redirect to={`/posts/${this.props.match.params.postID}/`} />
    }

    const { redirect } = this.state;
    if (redirect) {
    return <Redirect to = "/" />
    }

    let post = this.state.postFromAPI
    return (
      <div>
        <div>
        <h3>{ post.post_title } - $
        { post.price }</h3>
        <h4>
        { post.post_city }
        </h4>
        <p>
        { post.post_body }
        </p>
        { post.image ? <img src={post.image} style={{width: "60%"}} alt="post"></img> : null }
        </div>
        <br></br>

        <Link to={`/categories/${this.props.match.params.categoryID}/posts/${this.props.match.params.postID}/edit`} >
          <button>
            EDIT POST
          </button>
        </Link>

          <button variant="primary" type="submit" onClick={this.handleDeleteButton.bind(this)}>
            DELETE POST
          </button>
      </div>
    );
  }
}

export default PostPage;
