'use client';
import { useState } from 'react';
import styles from './Dropdown.module.css';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Category ');

  const options = ['Web Development', 'Mobile Apps', 'AI Solutions', 'Consulting'];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        {selected} <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
