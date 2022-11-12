import styles from "../styles/Team.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Face } from "../components/";
import { Pageh } from "../components/";
import { Paget } from "../components/";

export const Team = () => {
  return (
    <BrowserRouter>
      <div className={styles.darraa}>
        <div className={styles.taem}>team.</div>
        <div>
          <button className={styles.tod}>change mode</button>
          <Link className={styles.link} to="Home">
            Home
          </Link>
          <Link className={styles.link} to="Post">
            Post
          </Link>
          <Link className={styles.link} to="Blog">
            Blog
          </Link>
          <button className={styles.button}>Get access</button>
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
