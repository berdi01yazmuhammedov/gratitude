// File: src/components/Modal.jsx
import React from 'react';

export default function Modal({ image: { src, caption, wish }, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={src} alt={caption} />
        <div className="modal-info">
          <h3>{caption}</h3>
          <p>{wish}</p>
        </div>
      </div>
    </div>
  );
}