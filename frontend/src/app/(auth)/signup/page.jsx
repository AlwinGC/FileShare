import styles from "./signup.module.css";
import SignupForm from "@/components/SignupForm/SignupForm";

function Signup() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.topContainer}>
            <div className={styles.backDrop} />
            <div className={styles.headContainer}>
              <h2 className={styles.headText}>Create</h2>
              <h2 className={styles.headText}>Account</h2>
              <h5 className={styles.smallText}>Please register to continue</h5>
            </div>
          </div>
          <p className={styles.logo}>FILE SHARE</p>
          <SignupForm />
        </div>
      </div>
    </>
  );
}

export default Signup;
