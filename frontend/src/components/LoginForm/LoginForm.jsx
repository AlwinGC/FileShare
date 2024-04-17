"use client";
import { useState } from "react";
import styles from "./loginForm.module.css";
import Link from "next/link";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
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
          maxLength="128"
          required
          className={styles.inputData}
        />
        <Link href="/reset" className={styles.mutedLink}>
          Forgot Password ?
        </Link>
        <button type="submit" className={styles.btnSubmit}>
          LOGIN
        </button>
        <p className={styles.innerText}>
          Don't have an account ?
          <Link href="/signup" className={styles.boldLink}>
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
