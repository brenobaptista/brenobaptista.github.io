import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import NavigationItems from './NavigationItems';
import Backdrop from './Backdrop';

const sideDrawer = (props) => {
  const { open, closed } = props;

  let attachedClasses = ['sideDrawer', 'close'];

  if (open) {
    attachedClasses = ['sideDrawer', 'open'];
  }

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className="logoSideDrawer">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

sideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func,
};

sideDrawer.defaultProps = {
  open: false,
  closed: () => { },
};

export default sideDrawer;
