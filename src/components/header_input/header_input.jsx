import React from 'react';
import styles from './header-input.module.css';

const HeaderInput = () => {
  return (
    <form className={styles.inputForm}>
      <input type="text" name="" id="" placeholder="검색" className={styles.input} />
      <button className={styles.inputButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default HeaderInput;
