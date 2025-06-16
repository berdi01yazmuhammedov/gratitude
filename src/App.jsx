import React, { useState } from 'react';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
// import img4 from "./images/4.jpg";
// import img5 from "./images/5.jpg";
// import img6 from "./images/6.jpg";
// import img7 from "./images/7.jpg";
// import img8 from "./images/8.jpg";
import "./styles/gallery.scss";
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Modal from './components/Modal.jsx';

function App() {
  const [modalImg, setModalImg] = useState(null);

  const images = [
    { src: img1, caption: 'Счастливые моменты', wish: 'Спасибо за всё!' },
    { src: img2, caption: 'Забавный кадр', wish: 'Вы лучшие преподаватели!' },
    { src: img3, caption: 'Наша команда', wish: 'Ваша поддержка бесценна!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    { src: '/images/4.jpg', caption: 'Тёплый вечер', wish: 'С наилучшими пожеланиями!' },
    // ...другие фото
  ];

  return (
    <div className="app">
      <Header title="Наша группа с любовью" />
      <main>
        <h2>СКОРО ВСЁ БУДЕТ, НЕМНОЖЕЧКО ПОДОЖДИТЕ ПОЖАЛУЙСТА, А ЛУЧШЕ ГДЕ ТО ЗАВТРА)))</h2>
        <Gallery items={images} onImageClick={setModalImg} />
        {modalImg && <Modal image={modalImg} onClose={() => setModalImg(null)} />}
      </main>
    </div>
  );
}

export default App;