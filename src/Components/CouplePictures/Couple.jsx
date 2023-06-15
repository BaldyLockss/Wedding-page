import { Link } from "react-router-dom";
import styles from "./Couple.module.css";
import couple1 from "../../Images/Couple/couple1.jpg";

const Couple = () => {
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
        <div className={styles.container__images}>
          <div className={styles.container__image}>
            <img
              className={styles.container__image__img}
              src={couple1}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
