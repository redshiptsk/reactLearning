import React from 'react';
import styles from './card.css';
import { CardContent } from './CardContent';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { UserLink } from './TextContent/UserLink';
import { Title } from './TextContent/Title';
import { Preview } from './Preview';

export function Card() {
  return (
    <li className={styles.card}>
      <Preview/>
      
      <UserLink/>      
      <Menu/>
      <Controls/>

    </li>
  );
}
