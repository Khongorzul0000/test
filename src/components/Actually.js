import styles from "../styles/Actually.module.css";
import mask from "../assets/Mask group (3).png";
export const Actually = () => {
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.border}>
          <p className={styles.p}>Scheduling that actually works</p>
          <p className={styles.text}>
            Give everyone you work with inside and outside your company a more
            productive way to stay in gygy.Respond faster whit emoji, keeps
            conversations focused in channels, and simpfuly all your
            communincation into one place
          </p>
          <a>Learn more</a>
        </div>
        <img src={mask} className={styles.mask}></img>
      </div>
    </>
  );
};
