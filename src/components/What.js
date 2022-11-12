import styles from "../styles/What.module.css";
import { Review } from "../components/Review";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const baseUrl = "https://dummyapi.io/data/v1/";

export const What = () => {
  // useEffect(() => {
  //   axios
  //     .get(baseUrl + "user", {
  //       headers: {
  //         "app-id": "636f2fc4e8d0ff042c3fc557",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const [index, setIndex] = useState(0);

  const goright = () => setIndex((prev) => prev + 1);
   const goleft = () => setIndex((prev) => prev - 1);
  return (
    <>
      <div className={styles.what}>
        <div className={styles.jiji}>
          <p className={styles.p}>What people say about us</p>
        </div>
        <div className={styles.hajuu} style={{transform: `translateX(${-10 * index}%)`,
           transition: "300ms",}}>
            {new Array(10).fill(0).map((_,index)=>(
              <Review index={index}/>
            ))}
           </div>
           <div className={styles.but}>
           <button className={styles.button} onClick={goright}>left</button>
           <button className={styles.button}  onClick={goleft}>right</button>
           </div>
      </div>
    </>
  );
};
