import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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
      this.props.addPost(this.state.content, this.props.user._id);
    };
  }

  render() {
    const { user } = this.props;

    return (
      <div className="ibox">
        <div className="ibox-title">
          <h5><i className="fa fa-pencil"></i> Create a Post</h5>
        </div>
        <div>
          <div className="ibox-content">
            <div className="post-avatar">
              <Link className="pull-left" to="/profile">
                <img alt="image" src={user.profileImageURL}/>
              </Link>
              <div className="media-body">
                <textarea
                  className="form-control"
                  placeholder="What's on your mind?"
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

export default PostInput;
