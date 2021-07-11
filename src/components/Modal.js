import React from 'react';
import PropTypes from 'prop-types';

import '../styles/modal.css';

const Modal = ({
  isOpen, leftOption, rightOption, alertMessage,
}) => {
  const openModal = !isOpen ? 'closed' : '';

  return (
    <div className={`modal-container ${openModal}`}>
      <div className="message-container">
        <p>{alertMessage}</p>

        <div className="buttons-wrapper">
          <button className="green " type="button" onClick={leftOption}>Sim</button>
          <button className="red" type="button" onClick={rightOption}>Não</button>
        </div>

      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  leftOption: PropTypes.func.isRequired,
  rightOption: PropTypes.func.isRequired,
  alertMessage: PropTypes.string.isRequired,
};

export default Modal;
