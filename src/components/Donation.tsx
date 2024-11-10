// src/components/Donation.tsx
'use client'

import React, { useState } from "react";
import styles from "./Donation.module.css";
import Link from "next/link";

const Donation: React.FC = () => {
  const [amount, setAmount] = useState<number>(100);

  const handleAmountClick = (value: number) => {
    setAmount(value);
  };

  return (
    <section className={styles.donationSection}>
      <div className={styles.container}>
        {/* Left Side - Videos */}
        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video
              controls
              className={styles.videoPlayer}
              src="/Charity-children.mp4"
            ></video>
          </div>
          <p className={styles.videoText}>
            Your donation is worth more than a book. Teaching literacy to the
            underserved isn’t just about books. It’s about offering the power to
            navigate the world, make informed decisions, and rise above
            circumstances.
          </p>
          <div className={styles.videoWrapper}>
            <video
              controls
              className={styles.videoPlayer}
              src="/baby-3.mp4"
            ></video>
          </div>
        </div>

        {/* Right Side - Donation Form */}
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Donate Today</h3>
          <p className={styles.formDescription}>
            1 in 4 children in the U.S. grows up without learning how to read.
            Donate today to help hospitalized and underserved children improve
            their lives by having access to literacy.
          </p>
          <input
            type="number"
            className={styles.donationInput}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <div className={styles.amountButtons}>
            {[10, 25, 50, 100, 250].map((value) => (
              <button
                key={value}
                className={`${styles.amountButton} ${
                  amount === value ? styles.active : ""
                }`}
                onClick={() => handleAmountClick(value)}
              >
                ${value}
              </button>
            ))}
            <button className={styles.customAmountButton}>For a custom amount, please contact us</button>
          </div>
          <Link href="/">
          <button className={styles.continueButton}>rabihasanshaikh3@gmail.com &gt;</button>
          </Link>
          <div className={styles.note}>Please note that this project was built for practice.<br />This is not a genuine charity website.</div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
