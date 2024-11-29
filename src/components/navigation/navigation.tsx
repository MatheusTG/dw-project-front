'use client';

import { logout } from '@/actions/login';
import { Bookmark, GraduationCap, Home, LogOut, Settings, WalletMinimal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';
import UserModal from './user/user-modal';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className={styles.navigation}>
      <UserModal />
      <div className={styles.separator}></div>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/students" className={`${styles.link} ${pathname.includes('students') ? styles.active : ''}`}>
          <GraduationCap size={20} />
          <span>Students</span>
        </Link>
        <Link href="/" className={`${styles.link} ${pathname.includes('/course') ? styles.active : ''}`}>
          <Bookmark size={20} />
          <span>Course</span>
        </Link>
        <Link href="/" className={`${styles.link} ${pathname.includes('/payment') ? styles.active : ''}`}>
          <WalletMinimal size={20} />
          <span>Payment</span>
        </Link>
        <Link href="/" className={`${styles.link} ${pathname.includes('/settings') ? styles.active : ''}`}>
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
      <div className={`${styles.logout} ${styles.link}`} onClick={logout}>
        <LogOut size={20} />
        <span>Logout</span>
      </div>
    </aside>
  );
}
