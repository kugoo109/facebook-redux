import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';

import PostList from './PostList';

class NewsFeed extends React.Component {
  componentWillMount() {
    if (this.props.posts.length === 0) {
      this.props.getPosts();
    }
  }

  render() {
    const { currentUser, posts, addPost } = this.props;
    return (
      <div className="row">
        <div className="col-lg-7">
          <PostList user={currentUser} posts={posts} addPost={addPost}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postlist.posts,
    currentUser: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: bindActionCreators(actions.getPosts, dispatch),
    addPost: bindActionCreators(actions.addPost, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
