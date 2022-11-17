import styles from "../styles/Team.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Face } from "../components/";
import { Pageh } from "../components/";
import { Paget } from "../components/";
import { ThemeContext } from "../components/";
import { Spinner, Button } from "react-bootstrap";
import { useContext } from "react";


export const Team = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={styles.darraa}>
        <div className={styles.taem}>team.</div>
        <div className={styles.style}>
          <Button className={styles.tod} onClick={toggleTheme}>
            change mode
          </Button>
          <div>
          <Link className={styles.link} to="Home">
            Home
          </Link>
          <Link className={styles.link} to="Post">
            Post
          </Link>
          <Link className={styles.link} to="Blog">
            Blog
          </Link>
          </div>
          <Button className={styles.button} variant="outlined ">Get access</Button>
        </div>
      </div>
      <div>
        <Routes>
          <Route index element={<Face />} />
          <Route path="Home" element={<Face />} />
          <Route path="Post" element={<Pageh />} />
          <Route path="Blog" element={<Paget />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
