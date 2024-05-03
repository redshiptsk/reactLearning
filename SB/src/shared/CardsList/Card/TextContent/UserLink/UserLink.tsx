import React from 'react';
import styles from './userlink.css';
import { Title } from '../Title';

export function UserLink() {
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src='https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png' alt='avatar' />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано</span>4 часа назад
          </span>
        </div>
        <Title />
      </div>
    
  );
}
