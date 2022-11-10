import styles from "../styles/What.module.css";
import { Review } from "../components/Review";
export const What = () => {
  return (
    <>
      <div className={styles.what}>
        <div className={styles.jiji}>
          <p className={styles.p}>What people say about us</p>
        </div>
        <div className={styles.margin}>
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
};
