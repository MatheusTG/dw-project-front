'use server';

import { StudentType } from '@/@types/data/student-type';
import { ReturnType } from '@/@types/return-type';

const studentsMock: StudentType[] = [
  {
    id: '1',
    nome: 'Valmir Paiva Stachin',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '2',
    nome: 'Amanda Soares Vieira',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '3',
    nome: 'Matheus Teodoro',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
  {
    id: '4',
    nome: 'Teste',
    email: 'teste@gmail.com',
    celular: '(44) 99999-9999',
  },
];

export async function getStudents(id?: string): Promise<ReturnType<StudentType[]>> {
  console.log(id);
  try {
    if (id) {
      const found = studentsMock.find(s => s.id === id);
      if (found) return { ok: studentsMock.some(s => s.id === id), data: [found], message: null };
      return { ok: false, data: null, message: `Nenhum aluno com o id ${id} encontrado` };
    }
    return { ok: true, data: studentsMock, message: null };

    // const res = await fetch(`https://dw-project-api.onrender.com/students${id ? `/${id}` : ''}`);
    // const students: StudentType[] = await res.json();

    // return { ok: true, data: students, message: null };
  } catch (err) {
    console.error(err);
    return { ok: false, data: null, message: 'Erro ao buscar alunos.' };
  }
}
