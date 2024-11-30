'use client';

import { StudentType } from '@/@types/data/student-type';
import { UserCircle2 } from 'lucide-react';
import StudentNavigation from './student-navigation/student-navigation';
import styles from './student.module.css';

export default function Student({ student }: { student: StudentType }) {
  return (
    <div className={styles.student} onClick={() => (location.href += `/${student.id}`)}>
      <span>
        <UserCircle2 size="100%" strokeWidth={1} />
      </span>
      <span>{student.id}</span>
      <span>{student.nome}</span>
      <span>{student.email}</span>
      <span>{student.celular}</span>
      {/* Trigger */}
      <StudentNavigation />
    </div>
  );
}
