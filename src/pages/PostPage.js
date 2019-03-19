import React, { Component } from 'react';
// import Article from '../components/Article/Article.js'
import PostsAPI from '../api/PostsAPI';


class PostPage extends Component {
  state = {
    postFromAPI: []
  }

componentDidMount() {
  PostsAPI.fetchPostByID(this.props.match.params.categoryID, this.props.match.params.postID).then((apiResponseJSON) => {
    console.log(apiResponseJSON)
    this.setState({
      postFromAPI: apiResponseJSON
    });
  });
}

  render() {
    // console.log(this.state.postFromAPI)
    return (
      <div>
        <h3>{ this.state.postFromAPI.post_title } - $
        { this.state.postFromAPI.price }</h3>
        <h4>
        { this.state.postFromAPI.post_city }
        </h4>
        <p>
        { this.state.postFromAPI.post_body }
        </p>
        <img src={this.state.postFromAPI.image}></img>

        {/* { this.state.postFromAPI ? <Article article={ this.state.postFromAPI } /> : null } */}
      </div>
    );
  }
}

export default PostPage;