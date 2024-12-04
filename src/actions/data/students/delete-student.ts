'use server';

import { StudentType } from '@/@types/data/student-type';
import { ReturnType } from '@/@types/return-type';
import { revalidatePath } from 'next/cache';

type AddStudentType = ReturnType<StudentType>;

export async function deleteStudent(state: AddStudentType, formData: FormData): Promise<AddStudentType> {
  try {
    const id = formData.get('id');

    const res = await fetch(`http://localhost:3333/usuarios/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(res.statusText);

    revalidatePath('/');

    return { ok: true, data: null, message: null };
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) return { ok: false, data: null, message: `Erro ao excluir aluno: ${err.message}.` };
    return { ok: false, data: null, message: `Erro ao excluir aluno.` };
  }
}
