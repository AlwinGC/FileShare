import styles from "./reset.module.css";
import ResetForm from "@/components/ResetForm/ResetForm";

function ResetPassword() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.topContainer}>
            <div className={styles.backDrop} />
            <div className={styles.headContainer}>
              <h2 className={styles.headText}>Reset</h2>
              <h2 className={styles.headText}>Password</h2>
              <h5 className={styles.smallText}>Please enter your email to continue</h5>
            </div>
          </div>
          <p className={styles.logo}>FILE SHARE</p>
          <ResetForm />
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
