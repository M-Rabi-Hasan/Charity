import React from "react";
import styles from "./Quote.module.css"; // Import custom CSS

const Quote: React.FC = () => {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.overlay}>
        <div className={styles.quoteContent}>
          <h2 className={styles.title}>Why we stand up for literacy</h2>
          <p className={styles.quote}>
            “No child should be underserved when it comes to literacy. It’s the bridge from misery to hope, from poverty to possibility.” – Original quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
