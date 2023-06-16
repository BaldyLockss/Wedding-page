import { Link } from "react-router-dom";
import styles from "./Groom.module.css";
import Groom1 from "../../Assets/Groom/groom1.jpg";
import Groom2 from "../../Assets/Groom/groom2.jpg";
import Groom3 from "../../Assets/Groom/groom3.webp";

const Groom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <Link to="/">
            <h1>Groom</h1>
          </Link>
        </div>
        <div className={styles.container__intro}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          </p>
        </div>
      </div>
      <div className={styles.container__images}>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groom1}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groom2}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groom3}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};
export default Groom;
