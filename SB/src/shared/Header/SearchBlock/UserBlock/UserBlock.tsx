import React from 'react';
import styles from './userblock.css';
import { IconAnon } from '../../../Icons';
import { Text, EColor } from '../../../Text';
import { generateRandomString } from '../../../../utils/react/generateRRandomIndex';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}
const randomString = generateRandomString()
export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=3JiIECYiumd7kyk561FaKA&response_type=code&state=${randomString}&redirect_uri=http://127.0.0.1:3000/auth&duration=permanent&scope=read,submit,identity`}
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} />
          : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        <Text size={12} color={username ? EColor.black : EColor.grey99}>{username || 'аноним'}</Text>
      </div>
    </a>
  );
}
