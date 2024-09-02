import React, { useState } from "react";
import "./App.css";

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          <p>Your account will be marked for deletion. It will be permanently deleted within 3 days.</p>
        </div>
        <div className="modal-actions">
          <button className="confirm-btn">Confirm</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
