'use client';
import { login } from '@/actions/login';
import { LogIn } from 'lucide-react';
import { useActionState, useRef } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, { ok: false, data: null, message: null });

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function handleAutoLogin() {
    if (loginRef.current && passwordRef.current) {
      loginRef.current.value = 'admin';
      passwordRef.current.value = '123';
    }
  }

  if (state.ok) {
    location.href = '/';
  }

  return (
    <main className={styles.loginContainer}>
      <article className={styles.loginContent}>
        <h2 className={styles.title}>CRUD OPERATIONS</h2>

        <h3 className={styles.sign}>SIGN IN</h3>
        <p className={styles.subtitle}>Enter your credentials to access your account</p>

        <form className={styles.loginForm} action={action}>
          <div className={styles.inputContainer}>
            <label htmlFor="login">Login</label>
            <input ref={loginRef} type="text" id="login" name="login" placeholder="Enter your login" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <p className={styles.login_message}>{!state.ok && state.message}</p>
          <button className={styles.loginButton} type="submit">
            {pending ? 'Signing in...' : 'SIGN IN'}
          </button>
          <button onClick={handleAutoLogin} type="button" className={styles.showPasswords}>
            <span>Auto Login</span>
            <LogIn size={17} strokeWidth={1.5} />
          </button>

          <div className={styles.helpers}>
            <p className={styles.handlePassword}>
              <span>Forgot your password?</span> <a href="#">Reset Password</a>
            </p>
          </div>
        </form>
      </article>
    </main>
  );
}
