import React, { useState } from "react";
import "./App.css";

const InfoModal = ({ isOpen, onClose , message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* <button className="modal-close" onClick={onClose}> */}
          {/* &times; */}
        {/* </button> */}
        <div className="modal-content">
          <p>{message}</p>
        </div>
        <div className="modal-actions">
        {/* <button onClick={() => window.location.reload()} className="confirm-btn">Confirm</button> */}
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
