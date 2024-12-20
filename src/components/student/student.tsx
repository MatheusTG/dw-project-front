'use client';

import { StudentType } from '@/@types/data/student-type';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';
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
      <span>{formatPhoneNumber(student.celular)}</span>
      <div className='eye'><img src="./eye-3.svg" alt="" /></div>

      <StudentNavigation student={student} />
    </div>
  );
}
