'use client';

import { getUser } from '@/lib/get-user';
import { UserCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './user-modal.module.css';

export default function UserModal() {
  const [isOpened, setIsOpened] = useState(false);
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    (async () => setUsername(await getUser()))();
  }, []);

  return (
    <>
      <div onClick={() => setIsOpened(!isOpened)} className={styles.user}>
        <UserCircle2 className={styles.user_icon} size={28} strokeWidth={1.5} />
        {isOpened && (
          <div className={styles.modal}>
            <span className={styles.username}>{username}</span>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
}
