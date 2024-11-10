// src/components/Hero.tsx
import React from "react";
import styles from "./Hero.module.css"; // Import custom CSS

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <video
        className={styles.videoBackground}
        src="/Charity-children.mp4" // Replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default Hero;
