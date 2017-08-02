import React from 'react';

import Header from './template/header';
import Footer from './template/footer';
import Navbar from './template/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <div id="page-wrapper" className="gray-bg">
          <Header />
          <div className="wrapper wrapper-content">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
