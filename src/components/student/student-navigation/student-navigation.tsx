'use client';

import { StudentType } from '@/@types/data/student-type';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import UpdateStudent from '../update-student/update-student';
import styles from './student-navigation.module.css';

export default function StudentNavigation({ student }: { student: StudentType }) {
  const [opened, setOpened] = useState(false);
  const [updateModalOpened, setUpdateModalOpened] = useState(false);

  return (
    <>
      <div className={styles.student_navigation} onClick={e => e.stopPropagation()}>
        {opened && (
          <div
            className="modal_bg"
            onClick={e => {
              e.stopPropagation();
              setOpened(false);
            }}
          />
        )}
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
        <div className={styles.student_navigation_content}>
          {opened && (
            <div className={styles.content}>
              <ul>
                <li className={`${styles.item} ${styles.delete}`}>
                  <Trash size={16} />
                  <span>Excluir</span>
                </li>
                <li
                  className={styles.item}
                  onClick={() => {
                    setUpdateModalOpened(true);
                    setOpened(false);
                  }}
                >
                  <Pencil size={16} />
                  <span>Editar</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {updateModalOpened && <UpdateStudent student={student} setOpened={setUpdateModalOpened} />}
    </>
  );
}
