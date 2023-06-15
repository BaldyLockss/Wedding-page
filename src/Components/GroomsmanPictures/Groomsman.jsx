import { Link } from "react-router-dom";
import styles from "./Groomsman.module.css";
//image imports
import Groomsman1 from "../../Images/Groomsman/groomsman1.jpg";
import Groomsman2 from "../../Images/Groomsman/groomsman2.jpg";
import Groomsman3 from "../../Images/Groomsman/groomsman3.jpg";
import Groomsman4 from "../../Images/Groomsman/groomsman4.jpeg";
import Groomsman5 from "../../Images/Groomsman/groomsman5.webp";

const Groomsman = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <Link to="/">
            <h1>Groomsman</h1>
          </Link>
        </div>
        <div className={styles.container__intro}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            consequatur officia iure tempora,
          </p>
        </div>
      </div>
      <div className={styles.container__images}>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groomsman1}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groomsman2}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groomsman3}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groomsman4}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Groomsman5}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};
export default Groomsman;
