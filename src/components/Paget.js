import styles from "../styles/Paget.module.css";

import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { ThemeContext } from "./ThemeProvider";
import { Spinner, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
export const Paget = () => {
  const baseUrl = "https://dummyapi.io/data/v1/";

  const [pos, setPos] = useState(0);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);

  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  const nextPage = () => {
    setData(null);
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setData(null);
    setPage((prev) => {
      if (prev > 0) return prev - 1;
    });
  };

  useEffect(() => {
    axios
      .get(baseUrl + `user?limit=${limit}&page=${page}`, {
        headers: {
          "app-id": "636f2f24e8d0ffd9c83fc52f",
        },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);

  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={isDark ? { background: "#2d2f30", color: "#81827E" } : {}}>
      <div className={styles.paget}></div>
      <div className={styles.blog}>Blog postes</div>
      <p className={styles.p}>
        Our latest updates and blogs about managing your team
      </p>
      <div className={styles.flex}>
        <div className={styles.border}>
          <div className={styles.grid}>
            {!data && <Spinner />}
            {data &&
              data.map(({ picture, firstName, id }) => (
                <div className={styles.dataB}>
                  <img className={styles.randomP} src={picture}></img>
                  <p className={styles.dataN}>{firstName}</p>
                  <p className={styles.randomT}>Lorem Ipsum when an unknown printer took a remaining essentially unchanged. and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <img className={styles.randomI} src={picture}></img>
                  <div>{id}</div>
                </div>
              ))}
          </div>
          <div className={styles.flex}>
            <button className={styles.but}> Next</button>
          </div>
          <Button onClick={prevPage}>prev</Button>
          <Button onClick={nextPage}>next</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
