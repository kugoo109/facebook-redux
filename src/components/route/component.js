import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function TemplateComponent(Template, Component, requireAuth) {
  class Authentication extends React.Component {
    componentWillMount() {
      if (requireAuth && !this.props.auth.user) {
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

  Authentication.contextTypes = {
    router: PropTypes.object,
  };

  return connect(mapStateToProps)(Authentication);
}

export default TemplateComponent;
