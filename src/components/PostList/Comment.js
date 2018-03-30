import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  deleteComment: bindActionCreators(actions.deleteComment, dispatch),
});

function Comment(props) {
  const { comment } = props;
  const handleClick = () => {
    props.deleteComment(comment);
  };

  return (
    <div className="social-comment box-hover">
      <Link className="pull-left" to={'/profile/' + comment.user.username}>
        <img alt="" src={ comment.user.profileImageURL }/>
      </Link>
      <div className="pull-right btn-hover">
        <a onClick={handleClick}><i className="fa fa-times"></i></a>
      </div>
      <div className="media-body">
        <Link to={'/profile/' + comment.user.username}>
          { comment.user.displayName }
        </Link>&nbsp;
        { comment.content }
        <br/>
        <small className="text-muted">
          <time title="__todo">{ comment.created }</time>
        </small>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
