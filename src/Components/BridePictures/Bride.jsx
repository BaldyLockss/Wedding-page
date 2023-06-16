import { Link } from "react-router-dom";
import styles from "./Bride.module.css";
import Bride1 from "../../Assets/Bride/bride image1.webp";
import Bride2 from "../../Assets/Bride/bride image2.jpg";
import Bride3 from "../../Assets/Bride/bride image3.jpg";

const Bride = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <Link to="/">
            <h1>Bride</h1>
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
            src={Bride1}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Bride2}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Bride3}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};
export default Bride;
