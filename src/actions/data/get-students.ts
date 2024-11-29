'use server';

import { StudentType } from '@/@types/data/student-type';
import { ReturnType } from '@/@types/return-type';

const studentsMock: StudentType[] = [
  {
    id: '0',
    nome: 'Valmir',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '1',
    nome: 'Valmir',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '2',
    nome: 'Valmir',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '3',
    nome: 'Valmir',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '4',
    nome: 'Valmir',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
];

export async function getStudents(id?: string): Promise<ReturnType<StudentType[]>> {
  console.log(id);
  try {
    return { ok: true, data: studentsMock, message: null };
    // const res = await fetch(`https://dw-project-api.onrender.com/students${id ? `/${id}` : ''}`);
    // const students: StudentType[] = await res.json();

    // return { ok: true, data: students, message: null };
  } catch (err) {
    console.error(err);
    return { ok: false, data: null, message: 'Erro ao buscar alunos.' };
  }
}
