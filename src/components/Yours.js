import styles from "../styles/Yours.module.css";
import oto from "../assets/ooto Meetings 1.png";
export const Yours = () => {
  return (
    <>
      <div className={styles.araas}>
        <div className={styles.flex}>
          <div className={styles.border}>
            <p className={styles.p}>Your hub for teamwork</p>
            <p className={styles.test}>
              Give everyone you work with inside and outside your company a more
              productive way to stay in gygy.Respond faster whit emoji, keeps
              conversations focused in channels, and simpfuly all your
              communincation into one place
            </p>
            <a>learn more</a>
          </div>
        </div>
        <img src={oto} className={styles.oto}></img>
      </div>
    </>
  );
};
