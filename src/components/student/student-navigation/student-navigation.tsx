'use client';

import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import styles from './student-navigation.module.css';

export default function StudentNavigation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.student_navigation} onClick={e => e.stopPropagation()}>
      {opened && (
        <div
          className={styles.bg}
          onClick={e => {
            e.stopPropagation();
            setOpened(false);
          }}
        />
      )}
      <div className={styles.student_navigation_content}>
        <button
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            setOpened(!opened);
          }}
          className={styles.trigger}
        >
          <EllipsisVertical size="100%" />
        </button>
        {opened && (
          <div className={styles.content}>
            <ul>
              <li className={`${styles.item} ${styles.delete}`}>
                <Trash size={16} />
                <span>Excluir</span>
              </li>
              <li className={styles.item}>
                <Pencil size={16} />
                <span>Editar</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
