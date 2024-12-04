'use client';
import { login } from '@/actions/login';
import { Eye } from 'lucide-react';
import { useActionState } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, { ok: false, data: null, message: null });

  if (state.ok) {
    location.href = '/';
  }

  return (
    <main className={styles.loginContainer}>
      <article className={styles.loginContent}>
        <h1 className={styles.title}>CRUD OPERATIONS</h1>

        <h2 className={styles.sign}>SIGN IN</h2>
        <p className={styles.subtitle}>Enter your credentials to access your account</p>

        <form className={styles.loginForm} action={action}>
          <div className={styles.inputContainer}>
            <label htmlFor="login">Login</label>
            <input type="text" id="login" name="login" placeholder="Enter your login" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your passeword" />
          </div>
          <button className={styles.loginButton} type="submit">
            {pending ? 'Signing in...' : 'SIGN IN'}
          </button>
          <button type="button" className={styles.showPasswords}>
            <span>Mostrar senha para Login</span>
            <Eye size={18} strokeWidth={1.5} />
          </button>

          <div className={styles.helpers}>
            <p className={styles.handlePassword}>
              <span>Forgot your password?</span> <a href="#">Reset Password</a>
            </p>
          </div>
          <p className={styles.login_message}>{!state.ok && state.message}</p>
        </form>
      </article>
    </main>
  );
}
