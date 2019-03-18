import React, { Component } from 'react';
import PostsAPI from '../../api/PostsAPI';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import CraigslistAPI from '../api/CraigslistAPI.js'



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
        { this.createpostList() }
      </div>
    );
  }
}

export default PostList;