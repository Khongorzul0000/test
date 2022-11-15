import styles from "../styles/Simple.module.css";
import brooke from "../assets/brooke-cagle-JBwcenOuRCg-unsplash (1) 1-1.png";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
export const Simple = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.flex} style={isDark ? { background: "#2d2f30", color: "#81827E" } : {}}>
        <img className={styles.img} src={brooke}></img>
        <div className={styles.border}>
          <p className={styles.p}>Simple tast management</p>
          <p className={styles.text}>
            Give everyone you work with inside and outside your company a more
            productive way to stay in gygy.Respond faster whit emoji, keeps
            conversations focused in channels, and simpfuly all your
            communincation into one place
          </p>
          <a>learn more</a>
        </div>
      </div>
    </>
  );
};
