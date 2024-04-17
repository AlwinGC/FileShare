import styles from "./about.module.css";

function About() {
    return (
      <div className={styles.container}>
      <h3 className={styles.headText}>About</h3>
      <div className={styles.boxContainer}>
        <p className={styles.innerText}>
          This a file sharing API application, Users can upload a file and it
          creates a random URL which they can share. It will allow anyone with
          this URL to download the uploaded file. Easy free
          file sharing service. 
        </p>
        <p className={styles.innerText}>The current version supports file upload up to
          3GB.
        </p>
      </div>
      <h3 className={styles.subHead}>Share Files Privately</h3>
      <div className={styles.boxContainer}>
        <p className={styles.innerText}>
          The person who needs to download
          the file should also sign up in order to access the file. Share Files
          Privately through the API provides users the capability to specify
          file expiry time.
        </p>
      </div>
    </div>
    )
  }
  
  export default About;