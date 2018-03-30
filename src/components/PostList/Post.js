import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';
import map from '../../services/map';
import CommentList from './CommentList';

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  deletePost: bindActionCreators(actions.deletePost, dispatch),
});

function ContextMenu({ items, calls }) {
  return (
    <div className="pull-right social-action dropdown">
      <button data-toggle="dropdown" className="dropdown-toggle btn-white">
        <i className="fa fa-angle-down"></i>
      </button>
      <ul className="dropdown-menu m-t-xs">
        {map((item, index) => {
          return <li key={index} ><a onClick={calls[index]}>{item}</a></li>;
        }, items)}
      </ul>
    </div>
  );
}

function Post(props) {
  const { post } = props;
  const postAtName = post.postAt.displayName;
  const userName = post.user.displayName;

  const handleDelete = () => {
    props.deletePost(post);
  };

  return (
    <div className="social-feed-box">
      <ContextMenu items={['Delete']} calls={[handleDelete]} />
      <div className="social-avatar">
        <Link className="pull-left" to={'/profile/' + post.user.username}>
          <img alt="" src={ post.user.profileImageURL }/>
        </Link>
        <div className="media-body">
          <div>
            <Link to={'/profile/' + post.user.username}>
              { post.user.displayName }
            </Link>
            <span className={postAtName && postAtName !== userName ? '' : 'hidden'}>
              <span>&nbsp;</span>
              <i className="fa fa-caret-right"></i>
                <span>&nbsp;</span>
                <Link to={'/profile/' + post.postAt.username}>
                  { post.postAt.displayName }
                </Link>
            </span>
          </div>
          <small className="text-muted">
            <time title="__todo">{ post.created }</time>
          </small>
        </div>
      </div>
      <div className="social-body">
        <p>{ post.content }</p>
        <div className="btn-group">
          <button className="btn btn-xs btn-white">
            <i className="fa fa-thumbs-up"></i> { post.likes.length } Like
          </button>
          <button className="btn btn-white btn-xs">
            <i className="fa fa-comments"></i> Comment
          </button>
        </div>
      </div>
      <CommentList post={post} comments={post.comments} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
