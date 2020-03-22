import React from 'react';
import PropTypes from 'prop-types';

const drawerToggle = (props) => {
  const { clicked } = props;

  return (
    <div
      className="drawerToggle"
      onClick={clicked}
      onKeyPress={clicked}
      role="button"
      tabIndex="0"
    >
      <div />
      <div />
      <div />
    </div>
  );
};

drawerToggle.propTypes = {
  clicked: PropTypes.func,
};

drawerToggle.defaultProps = {
  clicked: () => {},
};

export default drawerToggle;
