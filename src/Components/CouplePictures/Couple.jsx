import { Link } from "react-router-dom";
import styles from "./Couple.module.css";
// import couple1 from "../../Images/Couple/couple1.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { slides } from "../../Assets/CarouselData/CarouselData";

const Couple = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const PrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <Link to="/">
            <h1>The Happy Couple</h1>
          </Link>
        </div>
        <div className={styles.container__intro}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {/* <div className={styles.container__images}> */}
      <div className={styles.container__slider}>
        <FaArrowAltCircleLeft
          className={`${styles.arrow} ${styles.arrow__left}`}
          onClick={PrevSlide}
        />
        <FaArrowAltCircleRight
          className={`${styles.arrow} ${styles.arrow__right}`}
          onClick={NextSlide}
        />
        {slides.map((slide, i) => {
          return (
            <div
              className={
                i === current ? `${styles.slide__active}` : `${styles.slide}`
              }
              key={i}
            >
              {i === current && (
                <img
                  className={styles.container__slider__img}
                  src={require(`../../Assets/Couple/Images/${slide.src}`)}
                  alt={slide.alt}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Couple;
