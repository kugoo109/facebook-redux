import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './template/header';
import Footer from './template/footer';
import Navbar from './template/navbar';
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
      <div id="wrapper">
        <Navbar />
        <div id="page-wrapper" className="gray-bg">
          <Header />
          <div className="wrapper wrapper-content">
            <Switch>
              <Route exact path="/" component={NewsFeed} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
