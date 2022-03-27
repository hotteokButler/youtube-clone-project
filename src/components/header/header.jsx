import React from 'react';
import HeaderInput from '../header_input/header_input';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <a href="">YouTube</a>
      </h1>
      <HeaderInput />
      <ul className={styles.menuIcon}>
        <li>
          <a href="">
            <i className={`fa-solid fa-video ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className={`fa-solid fa-table-cells ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className={`fa-regular fa-bell ${styles.icon}`}></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className={`fa-solid fa-circle-user ${styles.icon}`}></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
