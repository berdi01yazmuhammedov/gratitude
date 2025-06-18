
// File: src/components/ImageCard.jsx
import React from 'react';

export default function ImageCard({ image: { src, caption }, onClick }) {
  const spanClass = Math.random() > 0.5 ? 'tall' : 'wide';
  return (
    <div className={`image-card ${spanClass}`} onClick={onClick}>
      <div className="thumb">
        <img src={src} alt={caption} />
      </div>
      <div className="info">
        <p className="caption">{caption}</p>
      </div>
    </div>
  );
}