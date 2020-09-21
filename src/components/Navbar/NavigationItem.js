import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const NavigationItem = ({ link, clicked, children }) => (
  <li className='navigationItem'>
    <Link
      to={link}
      activeClassName='active'
      onClick={clicked}
    >
      {children}
    </Link>
  </li>
)

NavigationItem.propTypes = {
  link: PropTypes.string,
  clicked: PropTypes.func,
  children: PropTypes.node,
}

NavigationItem.defaultProps = {
  link: '',
  clicked: () => {},
  children: '',
}

export default NavigationItem
