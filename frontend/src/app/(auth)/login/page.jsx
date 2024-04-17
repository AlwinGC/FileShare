import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";

function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxContainer}>
          <div className={styles.topContainer}>
            <div className={styles.backDrop} />
            <div className={styles.headContainer}>
              <h2 className={styles.headText}>Welcome</h2>
              <h2 className={styles.headText}>Back</h2>
              <h5 className={styles.smallText}>Please log-in to continue</h5>
            </div>
          </div>
          <p className={styles.logo}>FILE SHARE</p>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
