// PopupModal.jsx
import React from 'react';
import './PopupModal.css';

const PopupModal = ({ title, content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
        <div>{content}</div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
