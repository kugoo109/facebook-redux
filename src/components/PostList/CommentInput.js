import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  addComment: bindActionCreators(actions.addComment, dispatch)
});

class CommentInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.handleEnter = (e) => {
      if (e.which === 13) {
        e.preventDefault();
        const comment = {
          content: this.state.content,
          post: this.props.post._id
        };
        this.props.addComment(comment, this.props.post);
        this.setState({ content: '' });
      }
    };
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="social-comment">
        <Link className="pull-left" to={'/profile/' + currentUser.username}>
          <img alt="" src={currentUser.profileImageURL}/>
        </Link>
        <div className="media-body">
          <textarea
            className="form-control"
            placeholder="Write comment..."
            value={this.state.content}
            onChange={this.updateState('content')}
            onKeyDown={this.handleEnter}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
