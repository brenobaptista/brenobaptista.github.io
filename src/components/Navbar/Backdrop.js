import React from 'react'
import PropTypes from 'prop-types'

const Backdrop = ({ show, clicked }) => (
  show ? (
    <div
      className='backdrop'
      onClick={clicked}
      onKeyPress={clicked}
      role='button'
      tabIndex='0'
      aria-label='backdrop'
    />
  ) : null
)

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
}

Backdrop.defaultProps = {
  show: false,
  clicked: () => {},
}

export default Backdrop
