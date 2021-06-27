import React from 'react';
import PropTypes from 'prop-types';

import '../styles/card.css';
import avatar from '../assets/avatar1.svg';

function Card({
  firstName, lastName, isSelected, onClick,
}) {
  const selected = isSelected ? 'selected' : '';

  return (
    <button className={`customer-btn ${selected}`} type="button" onClick={onClick}>
      <img className="customer-avatar" src={avatar} alt="" />

      <div className="text-wrapper">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
    </button>
  );
}

Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  isSelected: false,
};

export default Card;
