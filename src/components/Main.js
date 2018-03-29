import React from 'react';

import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

function Main({ children }) {
  return (
    <div id="wrapper">
      <Navbar />
      <div id="page-wrapper" className="gray-bg">
        <Header />
        <div className="wrapper wrapper-content">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
