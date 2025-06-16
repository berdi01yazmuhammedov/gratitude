import React, { useState } from 'react';
import "./styles/gallery.scss";
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Modal from './components/Modal.jsx';

function App() {
  const [modalImg, setModalImg] = useState(null);

  const images = [
    { src: '/images/photo1.jpg', caption: 'Счастливые моменты', wish: 'Спасибо за всё!' },
    { src: '/images/photo2.jpg', caption: 'Забавный кадр', wish: 'Вы лучшие преподаватели!' },
    { src: '/images/photo3.jpg', caption: 'Наша команда', wish: 'Ваша поддержка бесценна!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/photo4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    // ...другие фото
  ];

  return (
    <div className="app">
      <Header title="Наша группа с любовью" />
      <main>
        <Gallery items={images} onImageClick={setModalImg} />
        {modalImg && <Modal image={modalImg} onClose={() => setModalImg(null)} />}
      </main>
    </div>
  );
}

export default App;