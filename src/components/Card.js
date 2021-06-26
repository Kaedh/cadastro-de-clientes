import React from 'react';

import avatar from '../assets/avatar1.svg';

function Card() {
  return (
    <button type="button">
      <img src={avatar} alt="" />

      <div className="text-wrapper">
        <span>Leonardo</span>
        <span>Martins de Sousa</span>
      </div>
    </button>
  );
}

export default Card;
