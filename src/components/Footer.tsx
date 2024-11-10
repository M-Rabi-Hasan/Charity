import React from "react";
import styles from "./Footer.module.css"; // Import custom CSS

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Logo and Description */}
        <div className={styles.leftSection}>
          <img
            src="/unplash5.png" // Replace with the actual path to your logo
            alt="Logo"
            className={styles.logo}
          />
          <p className={styles.description}>
            Smiles by Angels Foundation is working to empower communities and organizations to inspire hope, strength, and joy in disadvantaged and underserved children through literacy.
          </p>
          <p className={styles.website}>smilesbyangels.org</p>
        </div>

        {/* Middle Section - Links */}
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h4 className={styles.heading}>TAKE ACTION</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Children we support</a></li>
              <li><a href="#">Why literacy</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>QUICK LINKS</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Our story</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className={styles.formSection}>
          <p className={styles.formText}>
            Sign up to learn how you can help support Smiles by Angels and receive the latest updates on our work.
          </p>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="First Name" className={styles.input} />
            <input type="text" placeholder="Last Name" className={styles.input} />
          </div>
          <input type="email" placeholder="Email" className={styles.input} />
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © Smiles by rabi Foundation 2023. All rights reserved
        </p>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.icon}><i className="fab fa-facebook"></i></a>
          <a href="#" className={styles.icon}><i className="fab fa-twitter"></i></a>
          <a href="#" className={styles.icon}><i className="fab fa-linkedin"></i></a>
          <a href="#" className={styles.icon}><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
