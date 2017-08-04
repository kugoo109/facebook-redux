import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Import authentication related pages
import Register from './auth/register';
import Login from './auth/login';

// Import pages
import Main from './template/main';
import NewsFeed from './newsfeed';

// Import higher order components
import TemplateRoute from './route';

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
        <Redirect to="/" />
      </Switch>
    );
  }
}
