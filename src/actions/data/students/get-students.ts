'use server';

import { StudentType } from '@/@types/data/student-type';
import { ReturnType } from '@/@types/return-type';

export async function getStudents(id?: string): Promise<ReturnType<StudentType[]>> {
  try {
    const res = await fetch(`${process.env.API_URL}/usuarios${id ? `/${id}` : ''}`, { cache: 'no-store' });
    const students: StudentType[] = await res.json();

    return { ok: true, data: students, message: null };
  } catch (err) {
    console.error(err);
    return { ok: false, data: null, message: 'Erro ao buscar alunos.' };
  }
}
