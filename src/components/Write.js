import write from "../assets/Ellipse.png";
import styles from "../styles/Pageh.module.css";
export const Write = () =>{
    return(
        <div className={styles.bish}>
        <img src={write} className={styles.circle}></img>
       <div>
       <p className={styles.by}>writen by</p>
       <p className={styles.name}>Shedrack Eze</p>
       <p className={styles.app}>CEO team app</p>
       </div>
        </div>
    )
}