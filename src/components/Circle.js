import styles from "../styles/Card.module.css";
import team from "../assets/Ellipse.png";
export const Circle = () => {
  return (
    <div className={styles.mur}>
      <img className={styles.img3} src={team}></img>
      <p className={styles.p2}>jane cooper </p>
      <p className={styles.p1}>1st of november</p>
    </div>
  );
};
