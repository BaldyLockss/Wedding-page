import styles from "./imageHolder.module.css";

const ImageHolder = ({ img }) => {
  return (
    <ImageHolder className={styles.ImageHolder}>
      <div className="image">{img}</div>
    </ImageHolder>
  );
};
export default ImageHolder;
