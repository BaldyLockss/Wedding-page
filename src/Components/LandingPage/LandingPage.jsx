import { Link } from "react-router-dom";

//CSS and Image imports

import styles from "./LandingPage.module.css";
import hearts from "../../Assets/LandingPage/heart-529607_1280.jpg";
import bride from "../../Assets/LandingPage/bride.jpg";
import groom from "../../Assets/LandingPage/groom.webp";
import bridesmaids from "../../Assets/LandingPage/bridesmades.jpg";
import groomsmen from "../../Assets/LandingPage/groomsmen.jpg";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <div>
            <h1>Your Big Day</h1>
          </div>
        </div>
        <div className={styles.container__intro}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, dolore ipsum consequuntur optio rerum ducimus nostrum
            aperiam, doloremque autem officia consequatur deserunt. Id, vero
            nisi. Magnam ex dignissimos illo in.
          </p>
        </div>
      </div>
      <div className={styles.container__images}>
        <div className={styles.container__image}>
          <Link to="Bridesmaids">
            <img
              className={styles.container__image__img}
              src={bridesmaids}
              alt="pic"
            />
          </Link>
        </div>
        <div className={styles.container__image}>
          <Link to="Bride">
            <img
              className={styles.container__image__img}
              src={bride}
              alt="pic"
            />
          </Link>
        </div>
        <div className={styles.container__image}>
          <Link to="Couple">
            <img
              className={styles.container__image__img}
              src={hearts}
              alt="pic"
            />
          </Link>
        </div>
        <div className={styles.container__image}>
          <Link to="Groom">
            <img
              className={styles.container__image__img}
              src={groom}
              alt="pic"
            />
          </Link>
        </div>
        <div className={styles.container__image}>
          <Link to="Groomsman">
            <img
              className={styles.container__image__img}
              src={groomsmen}
              alt="pic"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
