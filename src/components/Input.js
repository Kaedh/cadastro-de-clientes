import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import '../styles/input.css';

function Input({
  width, placeholder, register, error, disabled, mask,
}) {
  if (mask) {
    return (
      <div className="input-wrapper">
        <InputMask
          style={{ width: `${width}px` }}
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
    <div className="input-wrapper">
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
  width: PropTypes.number.isRequired,
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
