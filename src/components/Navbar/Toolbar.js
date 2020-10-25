import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import NavigationItems from './NavigationItems'
import DrawerToggle from './DrawerToggle'

const Toolbar = ({ drawerToggleClicked }) => (
  <header className='toolbar'>
    <DrawerToggle clicked={drawerToggleClicked} />
    <div className='logoToolbar'>
      <Logo />
    </div>
    <nav className='desktopOnly'>
      <NavigationItems />
    </nav>
  </header>
)

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func
}

Toolbar.defaultProps = {
  drawerToggleClicked: () => {}
}

export default Toolbar
