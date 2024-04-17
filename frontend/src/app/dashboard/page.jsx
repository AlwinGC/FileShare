import styles from "./dashboard.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { MdDownload, MdDelete } from "react-icons/md";

function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div className={styles.fileListing}>
          <div className={styles.files}>
            <span className={styles.fileName}>
              File Name
            </span>
            <span className={styles.fileSize}>File Size</span>
            <span className={styles.fileDate}>Upload Date</span>
            <button className={styles.deleteBtn}>
              <MdDelete className={styles.icons} /> DELETE
            </button>
            <button className={styles.downloadBtn}>
              <MdDownload className={styles.icons} /> DOWNLOAD
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
