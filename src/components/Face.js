
import styles from "../styles/Face.module.css";
import { Yours } from "../components/Yours";
import { Simple } from "../components/Simple";
import { Actually } from "../components/Actually";
import { Footer } from "../components/Footer";
import { What } from "../components/What";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Face = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.gol}>
          <div className={styles.text}>
            <p className={styles.p}>Instant collaborations for remote teams</p>
            <p className={styles.smallP}>
              All in one for your remote team chats, collaborations and
              trackprojects
            </p>
            <div className={styles.butin}>
              <input placeholder="Email"></input>
              <button>get access already</button>
            </div>
          </div>
        </div>
      </div>
      <Yours />
      <Simple />
      <Actually />
      <What />
      <Footer />
    </>
  );
};
