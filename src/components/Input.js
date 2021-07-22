import React from 'react';
import PropTypes from 'prop-types';

import '../styles/input.css';

function Input({
  width, placeholder, register, error, disabled, format,
}) {
  const inputWidth = width === 'fit' ? '100%' : `${width}px`;

  const { onChange, onBlur, ref } = register;

  return (
    <div className="input-wrapper" style={{ width: inputWidth }}>
      <input
        style={{ width: inputWidth }}
        className={`${error === '' ? '' : 'error'} ${disabled ? 'disabled-input' : ''}`}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref}
        onChange={format || onChange}
        onBlur={onBlur}
      />

      { error && <span>{error}</span> }

    </div>
  );
}

Input.propTypes = {
  width: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.func,

  register: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    ref: PropTypes.func.isRequired,
  }).isRequired,
};

Input.defaultProps = {
  error: '',
  disabled: false,
  format: () => {},
};

export default Input;
