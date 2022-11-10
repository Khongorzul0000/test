import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import styles from "../styles/Header.module.css";

export const Header = () => {
  const data = useContext(ThemeContext);
 
  return (
    <img
      className={styles.header}
      src="https://upload.wikimedia.org/wikipedia/commons/a/a3/R%C3%B6e_g%C3%A5rd_caf%C3%A9_2.jpg"
    ></img>
  );
};
