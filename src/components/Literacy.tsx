// src/components/Literacy.tsx
import React from "react";
import styles from "./Literacy.module.css"; // Import custom CSS

const Literacy: React.FC = () => {
  return (
    <section className={styles.literacySection}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          To empower communities and organizations to inspire hope, strength,
          and joy in disadvantaged and underserved children through literacy.
        </h2>
        <p className={styles.subtext}>
          100% of your donations bring books and literacy tools to children in
          need.
        </p>
        <button className={styles.contactButton}>Contact Us</button>
      </div>
    </section>
  );
};

export default Literacy;
