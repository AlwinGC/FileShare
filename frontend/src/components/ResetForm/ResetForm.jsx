import styles from "./resetForm.module.css";
import Link from "next/link";

function ResetForm() {
  return (
    <>
      <form className={styles.formContainer}>
        <input type="email" placeholder="Email" className={styles.inputData}/>
        <button type="button" className={styles.btnSubmit}>
          RESET
        </button>
        <p className={styles.innerText}>
          <Link href="/signup" className={styles.boldLink}>
            Sign Up
          </Link>
          |
          <Link href="/login" className={styles.boldLink}>
            Log In
          </Link>
        </p>
      </form>
    </>
  );
};

export default ResetForm;
