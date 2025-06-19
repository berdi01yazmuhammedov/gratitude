import React from 'react';

export default function ImageCard({ image: { src, caption }, spanClass, onClick }) {
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