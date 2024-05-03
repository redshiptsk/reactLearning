import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export function Title() {

  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href='#postLink' className={styles.postLink} onClick={() => { setIsModalOpened(true) }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam</a>

      {isModalOpened && (
        <>          
          <Post />
          
        </>
      )}

    </h2>
  );
}
