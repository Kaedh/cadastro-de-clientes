import React from 'react';
import PropTypes from 'prop-types';

import '../styles/button.css';

function Button({ icon, onClick }) {
  return (
    <button className="icon-button" type="button" aria-label="button" onClick={onClick}>
      <img src={icon} alt="" />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
