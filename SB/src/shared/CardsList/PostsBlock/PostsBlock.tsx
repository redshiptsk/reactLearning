import React, { useContext } from 'react';
import styles from './postsblock.css';
import { postsContext } from '../../context/PostsContext';

interface IPostData {
  data: {
    title?: string;
    author?: string;
    id?: string;
  }
}

export function PostBlock() {
  const { posts } = useContext(postsContext);

  return (
    <ul>
      {posts?.map((item: IPostData) => (<li key={item.data.id}>Author: {item.data.author} title: {item.data.title}</li>))}
    </ul>
  );
}