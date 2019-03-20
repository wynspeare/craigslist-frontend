import React, { Component } from 'react';
import PostsAPI from '../../api/PostsAPI';
import { Link } from 'react-router-dom';

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import CategoryAPI from '../api/CategoryAPI.js'

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
      <div key={index} className="post-text">
        <hr/>
        <p> { post.post_title } - ${ post.price } | { post.post_city } </p>
        <p> { post.post_body }</p>
        <Link to={`${this.props.id}/posts/${post.id}`}> View More </Link>

      </div>
      )
    }
  
  // createpostTeasers() {
  //   let posts = Object.values(this.state.posts)
  //   return posts.map(( post, index ) =>
  //     <div key={index} className="post-text">
  //     <PostTeaser post_title={post.post_title} />
  //       {/* <hr/>
  //       <p> { post.post_title } - ${ post.price } | { post.post_city } </p>
  //       <p> { post.post_body }</p> */}
  //     </div>
  //     )
  //   }

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
        {/* <PostTeaser post_title={this.state.posts}/>  */}
      </div>
    );
  }
}

export default PostList;