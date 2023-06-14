import styles from "./LandingPage.module.css";
import hearts from "../../Images/heart-529607_1280.jpg";
import bride from "../../Images/bride.jpg";
import groom from "../../Images/groom.webp";
import bridesmaids from "../../Images/bridesmades.jpg";
import groomsmen from "../../Images/groomsmen.jpg";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__title}>
          <div>
            <h1>Your Big Day.</h1>
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
          <img src={bridesmaids} alt="pic" />
        </div>
        <div className={styles.container__image}>
          <img src={bride} alt="pic" />
        </div>
        <div className={styles.container__image}>
          <img src={hearts} alt="pic" />
        </div>
        <div className={styles.container__image}>
          <img src={groom} alt="pic" />
        </div>
        <div className={styles.container__image}>
          <img src={groomsmen} alt="pic" />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
