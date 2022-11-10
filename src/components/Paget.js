import styles from "../styles/Paget.module.css";
import { Team } from "../components/Team";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
export const Paget = () => {
  return (
    <>
      <div className={styles.paget}>
        <Team />
      </div>
      <div className={styles.blog}>Blog postes</div>
      <p className={styles.p}>
        Our latest updates and blogs about managing your team
      </p>
      <div className={styles.flex}>
        <div className={styles.border}>
          <div className={styles.grid}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={styles.flex}>
            <button className={styles.but}> Next</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
