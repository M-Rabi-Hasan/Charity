// src/components/OurStoryHero.tsx
import React from "react";
import styles from "./OurStoryHero.module.css"; // Import custom CSS

const OurStoryHero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <img
          src="/unplash4.png" // Replace with your image path
          alt="Our Story"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default OurStoryHero;
