import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer'

const Layout = ({ children }) => {
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

Layout.propTypes = {
  children: PropTypes.node
}

Layout.defaultProps = {
  children: ''
}

export default Layout
