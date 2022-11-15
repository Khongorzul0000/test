import styles from "../styles/Footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";
export const Footer = () => {

  // const {data, setData} = useState(null)
  // useEffect(() => {
  //   axios
  //     .get(baseUrl + "user", {
  //       headers: {
         // "app-id": "636f2fc4e8d0ff042c3fc557",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.deed} style={isDark ? { background: "#2d2f30", color: "#fff" } : {}}></div>
      <div className={styles.footer}>
        <div className={styles.border}>
          <p className={styles.p}>team.</p>
          <div className={styles.flex}>
            <AiFillInstagram />
            <p className={styles.margin}>instagram</p>
          </div>
          <div className={styles.flex}>
            <AiFillFacebook />
            <p className={styles.margin}>facebook</p>
          </div>
          <div className={styles.flex}>
            <AiFillTwitterSquare />
            <p className={styles.margin}>twitter</p>
          </div>
          <div className={styles.flex}>
            <AiFillInstagram />
            <p className={styles.margin}>instagram</p>
          </div>
          <div className={styles.flex}>
            <AiFillFacebook />
            <p className={styles.margin}>facebook</p>
          </div>
          <div className={styles.flex}>
            <AiFillTwitterSquare />
            <p className={styles.margin}>twitter</p>
          </div>
        </div>
        <div className={styles.border}>
          <p className={styles.tom}>Use cases</p>
          <p>UI desing</p>
          <p>UX desing</p>
          <p>prototyping</p>
          <p>UI desing</p>
          <p>UX desing</p>
          <p>prototyping</p>
        </div>
        <div className={styles.border}>
          <p className={styles.tom}>Explore</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why i love figma</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why i love figma</p>
        </div>
        <div className={styles.border}>
          <p className={styles.tom}>Resources</p>
          <p>Community Resources hub</p>
          <p>Support</p>
          <p>Education</p>
          <p>Community Resources hub</p>
          <p>Support</p>
          <p>Education</p>
        </div>
        <div className={styles.imput}>
          <p className={styles.sub}>Subscribe to our newsletter</p>
          <input className={styles.input} placeholder="Email"></input>
        </div>
      </div>
    </>
  );
};
