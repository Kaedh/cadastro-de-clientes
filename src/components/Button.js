/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/button.css';

function Button({
  icon, onClick, type, form,
}) {
  return (
    <button className="icon-button" type={type || 'button'} aria-label="button" onClick={onClick} form={form}>
      <img src={icon} alt="" />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  form: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  form: '',
};

export default Button;
