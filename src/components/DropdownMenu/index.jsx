import React, { useState } from 'react';
import styles from './style.module.css';

export function DropdownMenu({ label, options, selectedValue, onSelectedValueChange }) {
  const handleValueChange = (e) => {
    onSelectedValueChange(e.target.value);
  };

  return (
    <div className={styles.menu}>
      <label htmlFor="dropdown"></label>
      <select id="dropdown" value={selectedValue} onChange={handleValueChange} className={styles.select}>
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}


