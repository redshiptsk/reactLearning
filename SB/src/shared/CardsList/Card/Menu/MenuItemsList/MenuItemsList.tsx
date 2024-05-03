import React from 'react';
import styles from './menuitemslist.css';
import { BlockIcon, WarningIcon } from '../../../../Icons';
import { EColor, Text } from '../../../../Text';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li  className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon/>
        <Text mobileSize={12} size={12} color={EColor.grey99}>Скрыть</Text>
      </li>
      <div className={styles.divider}/>
      <li  className={styles.menuItem}>
        <WarningIcon/>
        <Text mobileSize={12} size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>

    </ul>
    

  );
}
