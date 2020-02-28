import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerClass = isMenuOpen ? 'is-active' : '';

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-5">
          {siteTitle}
        </Link>
        <button
          className={`navbar-burger burger ${burgerClass}`}
          type="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="myNavbar"
          onClick={() => setIsMenuOpen((state) => !state)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div id="myNavbar" className={`navbar-menu ${burgerClass}`}>
        <div className="navbar-end">
          <Link
            to="/"
            className="navbar-item is-size-5"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/projects/"
            className="navbar-item is-size-5"
            onClick={() => setIsMenuOpen(false)}
          >
            PROJECTS
          </Link>
          <Link
            to="/stack/"
            className="navbar-item is-size-5"
            onClick={() => setIsMenuOpen(false)}
          >
            STACK
          </Link>
          <Link
            to="/downloads/"
            className="navbar-item is-size-5"
            onClick={() => setIsMenuOpen(false)}
          >
            DOWNLOADS
          </Link>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
