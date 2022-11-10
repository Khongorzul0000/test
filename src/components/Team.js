import styles from "../styles/Team.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../components/Home";
import { Card } from "../components/";
import { ThemeContext } from "./ThemeProvider";

import { useContext } from "react";

// export const ThemeContext = createContext({});
// export const ThemeProvider = (props) => {
//   const [theme, setTheme] = useState({
//     palette: {
//       dark: false,
//     },
//   });
// };

export const Team = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  console.log(isDark);

  return (
    <>
      <div className={styles.flex}>
        <div
          className={styles.border}
         
        >
          <div className={styles.team}>
            <div className={styles.taem}>team.</div>
            <div className={styles.two}>
              <ThemeContext.Provider>
                <BrowserRouter>
                  <button className={styles.tod} onClick={toggleTheme}>
                    change mode
                  </button>
                  <Link className={styles.link} to="Products">
                    Products
                  </Link>
                  <Link className={styles.link} to="Services">
                    Services
                  </Link>
                  <Link className={styles.link} to="Contact" >
                    Contact
                  </Link>
                  <button className={styles.button}  style={isDark ? { background: "#000", color: "#fff" } : {}}>Get access</button>
                  <Routes>
                    <Route index element={<Home />} />
                    <Route element={<Card />} />
                  </Routes>
                </BrowserRouter>
              </ThemeContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
