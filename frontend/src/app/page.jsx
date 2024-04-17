import styles from "./page.module.css";
import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdUploadFile } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.sectionHome}>
          <div className={styles.sectionContent}>
            <div>
              <MdUploadFile className={styles.upload} />
            </div>
            <div className={styles.uploadCol}>
              <h4 className={styles.headingText}>
                Share files quickly and easily with Fileshare
              </h4>
              <h4 className={styles.subHeading}>
                Share with anyone around the world. Upload files upto 3 GB
              </h4>
              <Link href="/dashboard" className={styles.btnHome}>
                UPLOAD
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.sectionHome}>
          <div className={styles.sectionContent}>
            <div>
              <MdOutlineAccountCircle className={styles.account} />
            </div>
            <div className={styles.signupCol}>
              <h4 className={styles.headingText}>Create a free account</h4>
              <h4 className={styles.subHeading}>
                Upload your files and store it privately
              </h4>
              <Link href="/signup" className={styles.btnHome}>
                SIGNUP
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
