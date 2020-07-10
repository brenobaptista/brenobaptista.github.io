import React from 'react';
import PropTypes from 'prop-types';

const backdrop = (props) => {
  const { show, clicked } = props;

  return (
    show ? (
      <div
        className="backdrop"
        onClick={clicked}
        onKeyPress={clicked}
        role="button"
        tabIndex="0"
        aria-label="backdrop"
      />
    ) : null
  );
};

backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

backdrop.defaultProps = {
  show: false,
  clicked: () => {},
};

export default backdrop;
