import HomeDashboard from '@/components/home/home-dashboard/home-dashboard';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import styles from './home.module.css';

export default async function Home() {
  const token = (await cookies()).get('auth-token')?.value;
  const username = token?.split(':')[0];

  return (
    <main className={styles.home}>
      <p className={styles.welcome}>
        Bem vindo(a), <span className={styles.username}>{username}!</span>
      </p>
      <Suspense fallback={<div>Carregando...</div>}>
        <HomeDashboard />
      </Suspense>
    </main>
  );
}
