import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle';

const toolbar = (props) => {
  const { drawerToggleClicked } = props;

  return (
    <header className="toolbar">
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className="logoToolbar">
        <Logo />
      </div>
      <nav className="desktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func,
};

toolbar.defaultProps = {
  drawerToggleClicked: () => {},
};

export default toolbar;
