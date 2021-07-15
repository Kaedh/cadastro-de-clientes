import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import '../styles/input.css';

function Input({
  width, placeholder, register, error, disabled, mask,
}) {
  const inputWidth = width === 'fit' ? '100%' : `${width}px`;

  if (mask) {
    return (
      <div className="input-wrapper" style={{ width: inputWidth }}>
        <InputMask
          style={{ width: inputWidth }}
          className={`${error === '' ? '' : 'error'} ${disabled ? 'disabled-input' : ''}`}
          disabled={disabled}
          placeholder={placeholder}
          {...register()}
          mask={mask}
        />
        { error && <span>{error}</span> }

      </div>
    );
  }
  return (
    <div className="input-wrapper" style={{ width: inputWidth }}>
      <input
        style={{ width: `${width}px` }}
        className={`${error === '' ? '' : 'error'} ${disabled ? 'disabled-input' : ''}`}
        disabled={disabled}
        placeholder={placeholder}
        {...register()}
      />
      { error && <span>{error}</span> }

    </div>
  );
}

Input.propTypes = {
  width: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  mask: PropTypes.string,
};

Input.defaultProps = {
  error: '',
  disabled: false,
  mask: '',
};

export default Input;
