import React from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';

export function Post() {
  const node = document.querySelector('#modal_root');
  if (!node) return null
  return ReactDOM.createPortal((
    <div className={styles.modal}>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia autem voluptate amet, iusto veniam eveniet suscipit repellendus magni consequatur dolorem voluptatem optio, vitae officiis atque molestiae. Voluptatibus optio vitae dolorem?</h2>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quis voluptatem. Nisi rem odit, nostrum praesentium, reiciendis omnis facere fugit, veniam sint non sunt ipsam corporis nulla ea sapiente perferendis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quis voluptatem. Nisi rem odit, nostrum praesentium, reiciendis omnis facere fugit, veniam sint non sunt ipsam corporis nulla ea sapiente perferendis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quis voluptatem. Nisi rem odit, nostrum praesentium, reiciendis omnis facere fugit, veniam sint non sunt ipsam corporis nulla ea sapiente perferendis?</p>
      
      </div>
    
    </div>
  ), node);
}
