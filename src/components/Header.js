import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';

const layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const { children } = props;

  return (
    <>
      <Toolbar drawerToggleClicked={() => setShowSideDrawer(!showSideDrawer)} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => setShowSideDrawer(false)}
      />
      <main className="content">
        {children}
      </main>
    </>
  );
};

layout.propTypes = {
  children: PropTypes.node,
};

layout.defaultProps = {
  children: '',
};

export default layout;
