// src/components/Children.tsx
import React from "react";
import styles from "./Children.module.css"; // Import custom CSS

const Children: React.FC = () => {
  // Array of images
  const images = [
    "/unplash1.png",
    "/unplash2.png",
    "/unplash3.png",
    "/unplash4.png",
    "/unplash5.png",
  ];

  return (
    <section className={styles.childrenSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>CHILDREN WE SERVE</h2>
        <p className={styles.description}>
          Five county hospitals with pediatric floors and clinics serving
          underprivileged children, foster care and homeless shelters, our armed
          forces, and veterans’ groups.
          <br />
          <a href="#" className={styles.link}>
            Click here
          </a>{" "}
          for more information about the children and communities we serve.
        </p>
        <div className={styles.imageGrid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={src} alt={`Child ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Children;
