'use server';

import { cookies } from 'next/headers';

export async function getUser() {
  const token = (await cookies()).get('auth-token')?.value;
  const user = token?.split(':')[0];
  return user;
}
