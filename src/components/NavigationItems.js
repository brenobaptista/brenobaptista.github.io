import React from 'react';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
  <ul className="navigationItems">
    <NavigationItem link="/">HOME</NavigationItem>
    <NavigationItem link="/projects">PROJECTS</NavigationItem>
    <NavigationItem link="/stack">STACK</NavigationItem>
    <NavigationItem link="/downloads">DOWNLOADS</NavigationItem>
  </ul>
);

export default navigationItems;
