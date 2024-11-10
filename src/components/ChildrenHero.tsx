// src/components/ChildrenHero.tsx
import React from "react";
import styles from "./ChildrenHero.module.css";

const ChildrenHero: React.FC = () => {
  return (
    <section className={styles.childrenHeroSection}>
      <div className={styles.container}>
        {/* Left Side - Images with Animation */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src="/unplash2.png" alt="Children 1" className={styles.image} />
          </div>
          <div className={styles.imageWrapper}>
            <img src="/unplash3.png" alt="Children 2" className={styles.image} />
          </div>
          <div className={styles.imageWrapper}>
            <img src="/unplash4.png" alt="Children 3" className={styles.image} />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Hospitals</h2>
          <p className={styles.description}>
            By giving a child a book, you are not only giving them a smile but
            also helping improve their literacy...
          </p>
          <ul className={styles.list}>
            <li>Harbor UCLA County Hospital</li>
            <li>Los Angeles General Medical Center</li>
            <li>Olive View County Hospital</li>
            <li>Riverside University County Hospital</li>
            <li>Arrowhead Regional Medical Center</li>
          </ul>

          <h2 className={styles.title}>Foster Care</h2>
          <p className={styles.quote}>
            “Gifts like this are definitely important and special to our youth...”
          </p>
          <ul className={styles.list}>
            <li>Oak Grove Center</li>
            <li>Olive Crest</li>
            <li>Luilini Foster Care Foundation</li>
          </ul>

          <h2 className={styles.title}>Other Communities</h2>
          <ul className={styles.list}>
            <li>Camp Pendleton Marine Families</li>
            <li>Parents of Watts</li>
            <li>Mychal’s Learning Place</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChildrenHero;
