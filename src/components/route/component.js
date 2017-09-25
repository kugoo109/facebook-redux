import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

function TemplateComponent(Template, Component, requireAuth) {
  class Authentication extends React.Component {
    componentWillMount() {
      if (requireAuth && !this.props.auth.user) {
        const returnPath = this.props.location.pathname;
        this.props.checkme(returnPath);
        this.context.router.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (requireAuth && !nextProps.auth.user) {
        this.context.router.history.push('/login');
      }
    }

    render() {
      if (requireAuth && !this.props.auth.user) {
        return (<div/>);
      }

      return (
        <Template>
          <Component {...this.props}/>
        </Template>
      );
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  function mapDispatchToProps(dispatch) {
    return {
      checkme: bindActionCreators(actions.checkme, dispatch),
    };
  }
  
  Authentication.contextTypes = {
    router: PropTypes.object,
    checkme: PropTypes.func,
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}

export default TemplateComponent;
