import React, { Component } from 'react';
import PostsAPI from '../../api/PostsAPI';
import { Link } from 'react-router-dom';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  createpostList() {
    let posts = Object.values(this.state.posts)
    return posts.map(( post, index ) =>
      <div key={index} className="post">
        <Link style={{ textDecoration: "none"}} className="post-title" to={`${this.props.id}/posts/${post.id}`} > { post.post_title } - ${ post.price } | { post.post_city } </Link>
        <p> { post.post_body }</p>
        <hr/>
      </div>
      )
    }
  

  componentDidMount() {
    let id = this.props.id;
    PostsAPI.fetchPosts(id)
      .then((posts) => this.setState({
        posts: posts
      }));
    }

  render() {
    return (
      <div>
        { this.state.posts ? this.createpostList() : null }
      </div>
    );
  }
}

export default PostList;