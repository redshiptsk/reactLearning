import React, { useEffect, useState } from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import {EColor, Text} from '../../../Text'
import { MenuIcon } from '../../../Icons';
import { MenuItemsList } from './MenuItemsList';

// const list = [
//   {text:'12313', className: `${styles.list}`, As: "li" as "li", href: "#", onclick: {}},
//   {text:'23421532sdgfsdgf4', className: `${styles.list}`, As: "li" as "li", href: "#"},
//   {text:'332414', className: `${styles.list}`, As: "li" as "li", href: "#"},
//   {text:'431423', className: `${styles.list}`, As: "li" as "li", href: "#"},
//   {text:'12313', className: `${styles.list}`, As: "li" as "li", href: "#", onclick: {}},
//   {text:'234215324', className: `${styles.list}`, As: "li" as "li", href: "#"},
//   {text:'332414', className: `${styles.list}`, As: "li" as "li", href: "#"},
//   {text:'431423', className: `${styles.list}`, As: "li" as "li", href: "#"}
// ].map(generateId)

export function Menu() {
  
const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <div className={styles.menu} >
      <button className={styles.menuButton} onClick={() => {setIsDropdownOpened(!isDropdownOpened)}}>
              <MenuIcon/>
            </button>
    {isDropdownOpened && (
          <Dropdown          >
            <div className={styles.dropdown}>
               <MenuItemsList postId='1234'/>
              <button className={styles.closeButton} onClick={() => {setIsDropdownOpened(false)}}>
                <Text mobileSize={12} size={14} color={EColor.grey66}>
                  Закрыть
                </Text>
              </button>
            </div>
        </Dropdown>
        )}
    
    </div>

  );
}
