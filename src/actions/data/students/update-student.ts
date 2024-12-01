'use server';

import { StudentType } from '@/@types/data/student-type';
import { ReturnType } from '@/@types/return-type';
import { revalidatePath } from 'next/cache';

type AddStudentType = ReturnType<StudentType>;

export async function updateStudent(state: AddStudentType, formData: FormData): Promise<AddStudentType> {
  try {
    const id = formData.get('id');
    const name = formData.get('name');
    const email = formData.get('email');
    const phoneNumber = formData.get('phone_number');

    if (!name || !email || !phoneNumber)
      return { ok: false, data: null, message: 'Todos os campos precisam ser preenchidos.' };

    const res = await fetch(`http://localhost:3333/usuarios/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ nome: name, email: email, celular: phoneNumber }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(res.statusText);

    revalidatePath('/');

    return { ok: true, data: null, message: null };
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) return { ok: false, data: null, message: `Erro ao atualizar aluno: ${err.message}.` };
    return { ok: false, data: null, message: `Erro ao atualizar aluno.` };
  }
}
