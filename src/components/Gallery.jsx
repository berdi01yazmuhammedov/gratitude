import React from 'react';
import ImageCard from './ImageCard';

export default function Gallery({ items, layout, onImageClick }) {
  return (
    <section className="gallery">
      {items.map((item, i) => (
        <ImageCard
          key={i}
          image={item}
          spanClass={layout[i]}
          onClick={() => onImageClick(i)}
        />
      ))}
    </section>
  );
}