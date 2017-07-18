import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import NewsFeed from '../../components/NewsFeed';

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
