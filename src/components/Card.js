import styles from "../styles/Card.module.css";
import team from "../assets/Ellipse.png";
export const Card = () => {
  return (
    <div className={styles.help}>
      <div className={styles.review2}>
      <img
        className={styles.img2}
        src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000"
      ></img>
      <h2 className={styles.h2}>Data-Driven desing is killing our instincts</h2>
      <p className={styles.p}>
        our lastest updates and blogs about managing your team our lastest
        updates and blogs about managing your team
      </p>
      <div className={styles.foot}>
        <img className={styles.img3} src={team}></img>
        <p className={styles.p2}>jane cooper </p>
        <p className={styles.p1}>1st of november</p>
      </div>
    </div>
    </div>
  );
};
export default Card;
