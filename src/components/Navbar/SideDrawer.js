import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import NavigationItems from './NavigationItems'
import Backdrop from './Backdrop'

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = ['sideDrawer', 'close']

  if (open) {
    attachedClasses = ['sideDrawer', 'open']
  }

  return (
    <>
      <Backdrop
        show={open}
        clicked={closed}
      />
      <div className={attachedClasses.join(' ')}>
        <div className='logoSideDrawer'>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

SideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func
}

SideDrawer.defaultProps = {
  open: false,
  closed: () => {}
}

export default SideDrawer
