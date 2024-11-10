// src/components/Story.tsx
import React from "react";
import styles from "./Story.module.css"; // Import custom CSS

const Story: React.FC = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleHighlight}></span>OUR STORY
        </h2>
        <p className={styles.paragraph}>
          Smiles By Angels Foundation is a non-profit organization founded on June 11, 2019, with a mission to bring joy and hope to underserved children in hospitals, foster care, and other communities through the gift of books. Our organization primarily operates in Southern California, serving Los Angeles, Riverside, Orange, and San Bernardino counties.
        </p>
        <p className={styles.paragraph}>
          The inception of Smiles By Angels Foundation can be traced back to a deeply personal and emotional event in the lives of our founders, Luis Peralta, and Corine Peralta. On May 23rd, 2018, they experienced the profound loss of their beloved son, AJ, who was born as an angel (stillborn). On this day, their unwavering commitment to positively impact the lives of children was born. Turning their grief into a source of inspiration, Luis and Corine honored their son’s memory by spreading smiles and joy to other children facing challenging circumstances.
        </p>
        <p className={styles.paragraph}>
          The couple embarked on their mission with determination, setting a goal to begin their work of changing children’s lives by AJ’s original due date. Their initial efforts involved remodeling an orphanage in Mexico and distributing 60 backpacks filled with school supplies to three different orphanages. Soon after, they collaborated with Parents of Watts for a back-to-school backpack event in Watts, CA, where they distributed 600 sweatshirts annually from 2019-2022.
        </p>
        <p className={styles.paragraph}>
          The journey of Smiles By Angels Foundation continued to evolve, and in 2019, it officially became a non-profit organization...
        </p>
      </div>
    </section>
  );
};

export default Story;
