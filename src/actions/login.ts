'use server';

import { ReturnType } from '@/@types/return-type';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type LoginReturnType = ReturnType<{ user: string }>;

export async function login(state: LoginReturnType, formData: FormData): Promise<LoginReturnType> {
  const login = formData.get('login') as string | null;
  const password = formData.get('password');

  if (!login) return { ok: false, data: null, message: 'O campo Login precisa ser Preenchido!' };

  if ((login === 'amanda' || login === 'matheus' || login === 'valmir' || login === 'admin') && password === '123') {
    (await cookies()).set('auth-token', `${login}:${password}`, {
      httpOnly: true,
    });

    return { ok: true, data: { user: login }, message: 'Login realizado com sucesso!' };
  }

  return { ok: false, data: null, message: 'Login e/ou senha incorretos. Tente novamente.' };
}

export async function logout() {
  (await cookies()).delete('auth-token');
  redirect('/login');
}
