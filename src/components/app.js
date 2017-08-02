import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

// Import pages
import Main from './main';
import NewsFeed from './newsfeed';

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
        <Main>
          <Route exact path="/" component={NewsFeed} />
        </Main>

        <Redirect to="/" />
      </Switch>
    );
  }
}
