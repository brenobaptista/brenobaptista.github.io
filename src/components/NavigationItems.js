import React from 'react';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
  <ul className="navigationItems">
    <NavigationItem link="/">HOME</NavigationItem>
    <NavigationItem link="/projects">PROJECTS</NavigationItem>
    <NavigationItem link="/guides">GUIDES</NavigationItem>
  </ul>
);

export default navigationItems;
