import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
}

export function Dropdown({ children }: IDropdownProps) {
  // const[isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  
  // useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  // useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  // const handleOpen = () => {
  //   if (isOpen === undefined) {
  //     setIsDropdownOpen(!isDropdownOpen)
  //   }
  // }
  const node = document.querySelector('#dropdown_root');

  if (!node) return null;

  return ReactDOM.createPortal((    
    <div className={styles.container}>
      
        <div className={styles.listContainer}>
          <div className={styles.list} >
            {children}
          </div>
        </div>
    </div>
  ), node);
}
