"use client";
import { useState } from "react";
import styles from "./contact.module.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <div className={styles.container}>
      <h3 className={styles.contactTitle}>Contact Us</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <textarea cols="30" rows="10" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit" className={styles.formBtn}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
