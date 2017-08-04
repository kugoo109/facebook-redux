import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div>
        <Link to="https://github.com/kugoo109">
          <i className="fa fa-github" aria-hidden="true"></i> kugoo109
        </Link> &copy; 2017
      </div>
    </div>
  );
}

export default Footer;
