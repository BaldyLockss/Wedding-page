import { Link } from "react-router-dom";
import styles from "./BridesmaidsPictures.module.css";
//image imports
import Bridesmaids1 from "../..//Assets/Bridesmaids/bridesmaid6.webp";
import Bridesmaids2 from "../../Assets/Bridesmaids/bridesmaids2.jpg";
import Bridesmaids3 from "../../Assets/Bridesmaids/bridesmaids3.jpg";
import Bridesmaids4 from "../../Assets/Bridesmaids/bridesmaids4.jpg";
import Bridesmaids5 from "../../Assets/Bridesmaids/bridesmaids7.webp";

const Bridesmaids = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <Link to="/">
            <h1>Bridesmaids</h1>
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
            src={Bridesmaids1}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Bridesmaids2}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Bridesmaids3}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Bridesmaids4}
            alt="pic"
          />
        </div>
        <div className={styles.container__image}>
          <img
            className={styles.container__image__img}
            src={Bridesmaids5}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};
export default Bridesmaids;
