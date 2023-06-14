import { Link } from "react-router-dom";
import styles from "./BridesmaidsPictures.module.css";

const Bridesmaids = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>hello</h1>
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    </div>
  );
};
export default Bridesmaids;
