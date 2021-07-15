import React from 'react';
import PropTypes from 'prop-types';

import '../styles/card.css';
import avatar from '../assets/avatar1.svg';

function Card({
  firstName, lastName, isSelected, onClick, id,
}) {
  const selected = isSelected ? 'selected' : '';

  return (
    <button className={`customer-btn ${selected}`} type="button" onClick={onClick} id={id}>
      <img id={id} className="customer-avatar" src={avatar} alt="" />

      <div id={id} className="text-wrapper">
        <span id={id}>{firstName}</span>
        <span id={id}>{lastName}</span>
      </div>
    </button>
  );
}

Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  isSelected: false,
};

export default Card;
