import React from "react";
import styles from "./Education.module.css"; // Import custom CSS

const Education: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <div className={styles.container}>
        {/* Left Side - Quote */}
        <div className={styles.quoteSection}>
          <h3 className={styles.quoteText}>
            Education is the most powerful weapon we can use to change the world, and literacy is its cornerstone.
          </h3>
          <p className={styles.author}>Nelson Mandela</p>
          <p className={styles.description}>
            Sign up to learn how you can help support Smiles by Angels and receive the latest updates on our work.
          </p>
        </div>

        {/* Right Side - Email Form */}
        <div className={styles.formSection}>
          <input
            type="email"
            placeholder="Your Email"
            className={styles.emailInput}
          />
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Education;
