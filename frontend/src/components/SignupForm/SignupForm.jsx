"use client";
import { useState } from "react";
import styles from "./signupForm.module.css";
import Link from "next/link";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          minLength="5"
          maxLength="20"
          required
          className={styles.inputData}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={styles.inputData}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          minLength="8"
          maxLength="128"
          required
          className={styles.inputData}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          minLength="8"
          maxLength="128"
          required
          className={styles.inputData}
        />
        <button type="submit" className={styles.btnSubmit}>
          SIGN UP
        </button>
        <p className={styles.innerText}>
          Already have an account ?
          <Link href="/login" className={styles.boldLink}>
            Log In
          </Link>
        </p>
      </form>
    </>
  );
}

export default SignupForm;
