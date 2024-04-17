import styles from "./api.module.css"
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

function Api() {
    return (
      <div className={styles.container}>
        <h3 className={styles.headText}>Visit Github Project to know more</h3>
        <div className={styles.boxContainer}>
          <div>
            <VscGithub className={styles.githubLogo}/>
          </div>          
          <Link href="/" className={styles.link}>Click Here To Visit</Link>
        </div>
      </div>
    )
  }
  
  export default Api;