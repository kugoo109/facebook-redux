import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  addPost: bindActionCreators(actions.addPost, dispatch)
});

class PostInput extends React.Component {
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

    this.handleClick = () => {
      const post = {
        content: this.state.content,
        postAt: this.props.postAt._id
      };
      this.props.addPost(post);
      this.setState({ content: '' });
    };
  }

  render() {
    const { title, currentUser } = this.props;
    return (
      <div className="ibox">
        <div className="ibox-title">
          <h5><i className="fa fa-pencil"></i> {title}</h5>
        </div>
        <div>
          <div className="ibox-content">
            <div className="post-avatar">
              <Link className="pull-left" to={'/profile/' + currentUser.username}>
                <img alt="" src={currentUser.profileImageURL}/>
              </Link>
              <div className="media-body">
                <textarea
                  className="form-control"
                  placeholder="What's on your mind?"
                  value={this.state.content}
                  onChange={this.updateState('content')}
                ></textarea>
                <div className="m-t-sm pull-right">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={this.handleClick}
                  >Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInput);
