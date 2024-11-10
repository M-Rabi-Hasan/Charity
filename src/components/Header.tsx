'use client'
// src/components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6"; // Import the icon
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.emailInfo}>
          
          <nav className={styles.emailInfo}>
          <Link href="/" onClick={closeMenu} className={styles.emailInfo}>HOME</Link>
          <Link href="/our-story" onClick={closeMenu} className={styles.emailInfo}>STORY</Link>
          <Link href="/children-we-support" onClick={closeMenu} className={styles.emailInfo}>SUPPORT</Link>
        </nav>
        </div>
        <div className={styles.bookInfo}>
        Foundation
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <h1>Rabi Foundation</h1>
        </div>


        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
          <Link href="/" onClick={closeMenu}>HOME</Link>
          <Link href="/our-story" onClick={closeMenu}>OUR STORY</Link>
          <Link href="/children-we-support" onClick={closeMenu}>CHILDREN WE SUPPORT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
