import React, { useState } from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";
import img16 from "./images/16.jpg";
import img17 from "./images/17.jpg";
import img18 from "./images/18.jpg";
import img19 from "./images/19.jpg";
import img20 from "./images/20.jpg";
import img21 from "./images/21.jpg";
import img22 from "./images/22.jpg";
import img23 from "./images/23.jpg";
import img24 from "./images/24.jpg";
import img25 from "./images/25.jpg";
import img26 from "./images/26.jpg";
import img27 from "./images/27.jpg";
import img28 from "./images/28.jpg";
import img29 from "./images/29.jpg";
import img30 from "./images/30.jpg";
import img31 from "./images/31.jpg";
import img32 from "./images/32.jpg";
import img33 from "./images/33.jpg";
import img34 from "./images/34.jpg";
import img35 from "./images/35.jpg";
import img36 from "./images/36.jpg";
import img37 from "./images/37.jpg";
import img38 from "./images/38.jpg";
import "./styles/gallery.scss";
import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const [modalImg, setModalImg] = useState(null);

  const images = [
    { src: img1, caption: "Счастливые моменты", },
    { src: img2, caption: "Забавный кадр" },
    { src: img3, caption: "Наша команда" },
    { src: img4, caption: "Тёплый вечер", },
    { src: img5, caption: "Тёплый вечер", },
    { src: img6, caption: "Тёплый вечер", },
    { src: img7, caption: "Тёплый вечер", },
    { src: img8, caption: "Тёплый вечер", },
    { src: img9, caption: "Тёплый вечер", },
    { src: img10, caption: "Тёплый вечер", },
    { src: img11, caption: "Тёплый вечер", },
    { src: img12, caption: "Тёплый вечер", },
    { src: img13, caption: "Тёплый вечер", },
    { src: img14, caption: "Тёплый вечер", },
    { src: img15, caption: "Тёплый вечер", },
    { src: img16, caption: "Тёплый вечер", },
    { src: img17, caption: "Тёплый вечер", },
    { src: img18, caption: "Тёплый вечер", },
    { src: img19, caption: "Тёплый вечер", },
    { src: img20, caption: "Тёплый вечер", },
    { src: img21, caption: "Тёплый вечер", },
    { src: img22, caption: "Тёплый вечер", },
    { src: img23, caption: "Тёплый вечер", },
    { src: img24, caption: "Тёплый вечер", },
    { src: img25, caption: "Тёплый вечер", },
    { src: img26, caption: "Тёплый вечер", },
    { src: img27, caption: "Тёплый вечер", },
    { src: img28, caption: "Тёплый вечер", },
    { src: img29, caption: "Тёплый вечер", },
    { src: img30, caption: "Тёплый вечер", },
    { src: img31, caption: "Тёплый вечер", },
    { src: img32, caption: "Тёплый вечер", },
    { src: img33, caption: "Тёплый вечер", },
    { src: img34, caption: "Тёплый вечер", },
    { src: img35, caption: "Тёплый вечер", },
    { src: img36, caption: "Тёплый вечер", },
    { src: img37, caption: "Тёплый вечер", },
    { src: img38, caption: "Тёплый вечер", },
  ];

  return (
    <div className="app">
      <Header title="Наша группа с любовью" />
      <main>
     
        <Gallery items={images} onImageClick={setModalImg} />
        {modalImg && (
          <Modal image={modalImg} onClose={() => setModalImg(null)} />
        )}
      </main>
    </div>
  );
}

export default App;
