import styles from "./footer.module.css";
import Link from "next/link";

function Footer() {
    return (
      <div className={styles.container}>
      <footer className={styles.fBasic}>
        <div className={styles.fRow}>
          <Link href="/" className={styles.fLogo}>FILE SHARE</Link>
          <p className={styles.fText}>Share files easily</p>
          <ul className={styles.fMenu}>
              <li className={styles.fListItem}><Link href="/" className={styles.fLinks}>HOME</Link></li>
              <li className={styles.fListItem}><Link href="/about" className={styles.fLinks}>ABOUT</Link></li>
              <li className={styles.fListItem}><Link href="/api" className={styles.fLinks}>API</Link></li>
              <li className={styles.fListItem}><Link href="/contact" className={styles.fLinks}>CONTACT</Link></li>
          </ul>
        </div>
        <p className={styles.copyright}>File Share © 2024</p>
      </footer>
    </div>
    )
  }
  
export default Footer;