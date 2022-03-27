import React, { useRef } from 'react';
import styles from './header-input.module.css';

const HeaderInput = ({ onSearch }) => {
  const inputRef = useRef();

  const onSubmitEvent = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = '';
  };

  return (
    <form className={styles.inputForm} onSubmit={onSubmitEvent}>
      <input type="text" name="" id="" placeholder="검색" className={styles.input} ref={inputRef} />
      <button className={styles.inputButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default HeaderInput;
