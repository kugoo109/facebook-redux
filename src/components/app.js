import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Import authentication related pages
import Register from './Register';
import Login from './Login';

// Import pages
import Main from './Main';
import NewsFeed from './NewsFeed';
import Profile from './Profile';

// Import higher order components
import TemplateRoute from './TemplateRoute';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAppClose = this.onAppClose.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onAppClose);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onAppClose);
  }

  onAppClose() {
  }

  render() {
    return (
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <TemplateRoute exact path="/" component={NewsFeed} template={Main} requireAuth />
        <TemplateRoute exact path="/profile" component={Profile} template={Main} requireAuth />
        <Redirect to="/" />
      </Switch>
    );
  }
}
