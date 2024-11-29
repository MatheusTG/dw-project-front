'use client';

import { StudentType } from '@/@types/data/student-type';

export default function Student({ student }: { student: StudentType }) {
  return (
    <div>
      <span>{student.nome}</span>
    </div>
  );
}
