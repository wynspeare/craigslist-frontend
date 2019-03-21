import React, { Component } from 'react';
import PostsAPI from '../../api/PostsAPI';
import { Link } from 'react-router-dom';

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  createPostList() {
    let posts = Object.values(this.state.posts)
    return posts.map(( post, index ) =>
      <div key={index} className="post">
        <Link 
          style={{ textDecoration: "none"}} 
          className="post-title" 
          to={`/categories/${post.category}/posts/${post.id}`} > 
            { post.post_title } - ${ post.price } | { post.post_city } 
        </Link>
        <p> { post.post_body }</p>
        { post.image ? <img style={{maxHeight: "150px", paddingBottom: "10px"}} src={post.image} alt="post"></img> : null }
        <hr/>
      </div>
      )
    }

  componentDidMount() {
    PostsAPI.fetchAllPosts()
      .then((posts) => this.setState({
        posts: posts
      }));
    }

  render() {
    return (
      <div>
        { this.state.posts ? this.createPostList() : null }
      </div>
    );
  }
}

export default AllPosts;