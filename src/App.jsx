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
import img37 from "./images/37.jpg";
import img38 from "./images/38.jpg";
import video1 from "./images/1.MOV";
import video2 from "./images/2.MOV";
import "./styles/gallery.scss";
import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const images = [
    {
      src: img1,
      caption: "Тот случай, когда пришли не учиться, а посидеть вместе",
    },
    { src: img2, caption: "Группа профессионалов" },
    { src: img3, caption: "Илин жжёт" },
    { src: img4, caption: "Тёплый вечер" },
    { src: img5, caption: "В любую погоду на ваши пары" },
    { src: img6, caption: "Показываем силу" },
    { src: img7, caption: "Всегда 🤘🤘🤘" },
    { src: img8, caption: "Оптимисты" },
    { src: img9, caption: "Пессимисты" },
    { src: img10, caption: "Те самые в 8 утра" },
    { src: img11, caption: "Ужас (английский) 1" },
    { src: img12, caption: "захотелось..." },
    { src: img13, caption: "жду историю языка" },
    { src: img14, caption: "Ужас (английский) 2" },
    { src: img15, caption: "Мы на других парах" },
    { src: img16, caption: "Мы на других парах2" },
    { src: img17, caption: "Мы на других парах3" },
    { src: img18, caption: "Мы на других парах4" },
    { src: img19, caption: "Наши мемы " },
    { src: img20, caption: "очень жизненно" },
    { src: img21, caption: "мои любимые карточки, всегда вывозят урок" },
    { src: img22, caption: "хихис" },
    { src: img23, caption: "креативники наши" },
    { src: img24, caption: "мы соревновались у кого лучше финальный слайд" },
    { src: img25, caption: "это мы пока культурные" },
    { src: img26, caption: "многие приходили только ради последнего слайда)" },
    { src: img27, caption: "бурное обсуждение ужаса (английского)" },
    { src: img28, caption: "жалко иностранцев🤧" },
    { src: img29, caption: "мы на других парах5" },
    { src: img30, caption: "что делает лекции с людьми в 8 утра" },
    { src: img31, caption: "мы жалуемся" },
    { src: img32, caption: "ох уж эти слайды" },
    { src: img33, caption: "любимая карточка" },
    { src: img34, caption: `"учимся"` },
    { src: img35, caption: "это Вы❤️" },
    { src: img37, caption: "ради этого мы и ходим" },
    { src: img38, caption: "ждем экзамен" },
  ];
  // static layout classes per image (no randomness on re-render)
  const [layout] = useState(
    images.map((_, i) => (i % 2 === 0 ? "wide" : "tall"))
  );

  // modal index, null means closed
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  return (
    <div className="app">
      <Header title="Наша группа с любовью" />
      <section className="letter-block">
        <h2>Александра Вячеславовна!</h2>
        <p>
          Присоединяюсь ко всем тёплым словам в документе и хочу добавить от
          себя ещё немного искренности. <br />
          <br />
          Мне действительно очень грустно осознавать, что не будет больше пар,
          какие были у Вас — запоминающихся, интересных, где было жутко весело
          от самого присутствия.
        </p>
        <p>
          Вы излучали несравнимый позитив и это оказывало хорошее влияние на
          всех студентов, и каждый студент, даже самый уставший, оживал и
          включался в процесс (мы до сих пор не имеем и малейшего понятия как
          вам это удается), вы не боялись шутить, подбадривать, порой - с лёгкой
          иронией - подводить нас к самому важному. Одним словом - дар.
        </p>
        <p>
          Когда мне при выборе речевых стратегий дали выбор русский или
          английский, первой моей мыслью было, "а пойду-ка я на русский и не
          буду на него ходить, я же знаю язык", но стоило посетить ваши занятия
          - и всё встало на свои места...
        </p>
        <p>
          Именно вы показали мне, насколько глубока и тонка методика РКИ, сколь
          многогранен сам процесс преподавания и как важно для студента увидеть
          преподавателя не только как носителя знаний, но и как друга, который
          идёт рядом.
        </p>
        <p>
          С каждым проведённым уроком я задавался вопросом: «Как Вы это делаете?
          как удаётся находить подход к каждому, удерживать на плаву всю
          интернациональную аудиторию, где каждый занят чем-то своим, но всё
          равно вовлечён в процесс?» Это меня шокировало и одновременно
          вдохновляло - оказывается, так возможно.
        </p>
        <p>
          Вы всегда показываете наивысшую степень профессионализма, и мы это
          ценим. Хочу сказать спасибо за ваш неиссякаемый энтузиазм, за то, что
          вы не просто «читали лекцию», а создавали живой диалог, и Ваша
          способность помогать, поддерживать, дорогого стоит, те слова которые
          вы сказали (и позже написали лично) мне сильно были нужны.
        </p>
        <p>
          Огромное туркменское человеческое спасибо! Благодаря Вам и Вашей вере
          в меня, я сам начал в себя верить, это действительно правда. Не знаю
          где бы я оказался выбери я другое направление. могу с уверенностью
          сказать что именно Вы пробудили во мне неимоверное любопытство не
          только к РКИ, но и к методике в целом, и это чувство останется со мной
          на всю жизнь.
        </p>
        <p>
          Пусть впереди вас ждут ещё более яркие проекты, интересные студенты.
          Желаю вам крепкого здоровья, лёгкости в сердце и бесконечной теплоты в
          душе - ведь именно этой теплотой вы согреваете нас все эти месяцы.
        </p>
        <p>
          А в завершение - ребята хотели поделиться воспоминаниями и
          фотографиями... 🤧
        </p>
      </section>

      <main>
        <Gallery items={images} layout={layout} onImageClick={openModal} />
        {currentIndex !== null && (
          <Modal
            currentIndex={currentIndex}
            images={images}
            onChangeIndex={setCurrentIndex}
            onClose={closeModal}
          />
        )}
        <section className="video-gallery">
          <div className="video-card">
            <video controls>
              <source src={video1} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
          <div className="video-card">
            <video controls>
              <source src={video2} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
