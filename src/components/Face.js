import face from "../assets/brooke-cagle-cb4Dv50LN1Y-unsplash 1.jpg";
import styles from "../styles/Face.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Team } from "../components/Team";
import { Yours } from "../components/Yours";
import { Simple } from "../components/Simple";
import { Actually } from "../components/Actually";
import { Footer } from "../components/Footer";
import { Button } from "bootstrap";
import { What } from "./What";
export const Face = () => {
  return (
    <>
    <div className={styles.back}>
      <Team />
      <div className={styles.door}>
        <p className={styles.test}>Instant collaborations for remote teams</p>
        <p className={styles.text}>
          All in one for your remote team chats, collaborations and track
          projects
        </p>
        <div>
          <input className={styles.input} placeholder="Email"></input>
          <button className={styles.button}>get already access</button>
        </div>
      </div>
    </div>
    <Yours/>
    <Simple/>
    <Actually/>
    <What/>
    <Footer/>

    </>
  );
};
