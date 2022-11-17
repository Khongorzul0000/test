import styles from "../styles/What.module.css";
import { Review } from "../components/Review";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";
import axios from "axios";

const baseUrl = "https://dummyapi.io/data/v1/";

export const What = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [item, setItem]  = useState(0)

  const {data, setData} = useState(null)
  useEffect(() => {
    axios
      .get(baseUrl + "user", {
        headers: {
          "app-id": "636f2fc4e8d0ff042c3fc557",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [index, setIndex] = useState(0);

  const goright = () => setIndex((prev) => prev + 1);
  const goleft = () => setIndex((prev) => prev - 1 );
  if(index < 0){
    setIndex(index+1)
  }
  if(index >7){
    setIndex(index-1)
  }


  return (
    <>
      <div
        className={styles.what}
        style={isDark ? { background: "#2d2f30", color: "#81827E" } : {}}
      >
        <div className={styles.jiji}>
          <p className={styles.p}>What people say about us</p>
        </div>
        <div
          className={styles.hajuu}
          style={{
            transform: `translateX(${-10 * index}%)`,
            transition: "300ms",
          }}
        >
          {new Array(10).fill(0).map((_, index) => (
            <Review index={index} />
          ))}
        </div>
        <div className={styles.but}>
          <div></div>
          <button className={styles.button} onClick={goright}>
            left
          </button>
          <button className={styles.button} onClick={goleft}>
            right
          </button>
        </div>
      </div>
    </>
  );
};
