// File: src/components/Gallery.jsx
import React from 'react';
import ImageCard from './ImageCard';

export default function Gallery({ items, onImageClick }) {
  return (
    <section className="gallery">
      {items.map((item, i) => (
        <ImageCard
          key={i}
          image={item}
          onClick={() => onImageClick(item)}
        />
      ))}
    </section>
  );
}