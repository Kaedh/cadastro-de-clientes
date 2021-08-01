/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import '../styles/select.css';
import arrowIcon from '../assets/arrow.svg';

const Select = ({
  customGender, setCustomGender, disabled, error, selectRules, control, trigger,
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleDropDown = () => {
    if (isShow) setIsShow(false);
    if (!isShow) setIsShow(true);
  };

  const handleOption = (e) => {
    setCustomGender('gender', e.target.textContent);
    trigger('gender');
    setIsShow(false);
  };

  return (
    <Controller
      name="gender"
      control={control}
      render={({ field }) => (
        <div className="select-wrapper">
          <button type="button" disabled={disabled} {...field} className={`selector-wrapper ${disabled ? 'disabled-btn' : ''} ${error ? 'error' : ''}`} onClick={handleDropDown}>
            <span className={error ? 'text-red' : ''}>{customGender || 'Gênero'}</span>
            <img src={arrowIcon} alt="" />
          </button>
          <div className={`options-wrapper ${isShow ? 'is-open' : 'is-close'}`}>
            <li><button onClick={handleOption} type="button">Feminino </button></li>
            <li><button onClick={handleOption} type="button">Masculino </button></li>
          </div>
          { error && <span className="error-alert">{error}</span> }
        </div>
      )}
      defaultValue="Gênero"
      rules={selectRules}
    />

  );
};

export default Select;
