import styles from "./navbar.module.css";
import Link from "next/link";
import Links from "@/components/navbar/links/Links";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.navbarLogo}>
          FILE SHARE
        </Link>
        <Links />
      </nav>
    </>
  );
}

export default Navbar;
