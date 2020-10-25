import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer'

const Header = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  return (
    <>
      <Toolbar drawerToggleClicked={() => setShowSideDrawer(!showSideDrawer)} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => setShowSideDrawer(false)}
      />
      <main className='content'>
        {children}
      </main>
    </>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

Header.defaultProps = {
  children: ''
}

export default Header
