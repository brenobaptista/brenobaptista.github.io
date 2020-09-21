import React from 'react'
import NavigationItem from './NavigationItem'

const NavigationItems = () => (
  <ul className='navigationItems'>
    <NavigationItem link='/'>
      HOME
    </NavigationItem>
    <NavigationItem link='/projects'>
      PROJECTS
    </NavigationItem>
    <NavigationItem link='/blog'>
      BLOG
    </NavigationItem>
  </ul>
)

export default NavigationItems
