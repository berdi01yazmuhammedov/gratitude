// File: src/components/Modal.jsx
import React from 'react';

export default function Modal({ currentIndex, images, onChangeIndex, onClose }) {
  const total = images.length;
  const { src, caption, wish } = images[currentIndex];

  const prevIdx = (currentIndex - 1 + total) % total;
  const nextIdx = (currentIndex + 1) % total;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <button className="nav prev" onClick={() => onChangeIndex(prevIdx)}>&lsaquo;</button>
        <img src={src} alt={caption} />
        <button className="nav next" onClick={() => onChangeIndex(nextIdx)}>&rsaquo;</button>
        <div className="modal-info">
          <h3>{caption}</h3>
          {wish && <p className="wish">{wish}</p>}
        </div>
      </div>
    </div>
  );
}