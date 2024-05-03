import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/userupload/12832282/file/original-a850507d3e7070c65cf72a3e894658b5.jpg" />
    </div>
  );
}
