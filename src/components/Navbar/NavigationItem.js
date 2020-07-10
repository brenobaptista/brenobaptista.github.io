import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const navigationItem = (props) => {
  const { link, clicked, children } = props;

  return (
    <li className="navigationItem">
      <Link
        to={link}
        activeClassName="active"
        onClick={clicked}
      >
        {children}
      </Link>
    </li>
  );
};

navigationItem.propTypes = {
  link: PropTypes.string,
  clicked: PropTypes.func,
  children: PropTypes.node,
};

navigationItem.defaultProps = {
  link: '',
  clicked: () => {},
  children: '',
};

export default navigationItem;
