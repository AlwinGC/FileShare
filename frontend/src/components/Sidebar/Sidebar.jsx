"use client";
import styles from "./sidebar.module.css";
import { useRef } from "react";
import { MdUpload, MdOutlinePhotoAlbum, MdVideoFile } from "react-icons/md";
import { PiFiles } from "react-icons/pi";
import { HiOutlineDocument } from "react-icons/hi2";

function Sidebar() {

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <aside className={styles.sidebar}>
        <button className={styles.btnUpload} onClick={handleClick}> <MdUpload className={styles.icon}/> UPLOAD</button>
        <input type="file" style={{ display: 'none' }} ref={hiddenFileInput}/>
        <div className={styles.structure}>
          <h3 className={styles.heading}><PiFiles className={styles.icon} />Files</h3>
          <ul className={styles.fileStructure}>
            <li className={styles.subHeading}><HiOutlineDocument />Documents</li>
            <li className={styles.subHeading}><MdOutlinePhotoAlbum /> Photos</li>
            <li className={styles.subHeading}><MdVideoFile /> Videos</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;