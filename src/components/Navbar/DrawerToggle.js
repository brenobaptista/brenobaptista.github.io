import React from 'react'
import PropTypes from 'prop-types'

const DrawerToggle = ({ clicked }) => (
  <div
    className='drawerToggle'
    onClick={clicked}
    onKeyPress={clicked}
    role='button'
    tabIndex='0'
    aria-label='toggle sidedrawer'
  >
    <div />
    <div />
    <div />
  </div>
)

DrawerToggle.propTypes = {
  clicked: PropTypes.func,
}

DrawerToggle.defaultProps = {
  clicked: () => {},
}

export default DrawerToggle
