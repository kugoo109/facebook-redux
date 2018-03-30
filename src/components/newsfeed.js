import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import PostList from './PostList';
import PostInput from './PostList/PostInput';

const mapStateToProps = state => ({
  posts: state.postlist.posts,
  currentUser: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  getPosts: bindActionCreators(actions.getPosts, dispatch),
  addPost: bindActionCreators(actions.addPost, dispatch),
});

class NewsFeed extends React.Component {
  componentWillMount() {
    if (this.props.posts.length === 0) {
      this.props.getPosts();
    }
  }

  render() {
    const { currentUser, posts } = this.props;
    return (
      <div className="row">
        <div className="col-lg-7">
          <PostInput postAt={currentUser} />
          <PostList posts={posts}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
