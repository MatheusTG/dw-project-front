'use client';
import { login } from '@/actions/login';
import { useActionState } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, { ok: false, data: null, message: null });
  console.log(state, pending);

  if (state.ok) {
    location.href = '/';
  }

  return (
    <main className={styles.loginContainer}>
      <article className={styles.loginContent}>
        <h1 className={styles.title}>CRUD OPERATIONS</h1>

        <h2 className={styles.sign}>SIGN IN</h2>
        <p>Enter your credentials to access your account</p>

        <form className={styles.loginForm} action={action}>
          <div className={styles.inputContainer}>
            <label htmlFor="login">Login</label>
            <input type="text" id="login" name="login" placeholder="Enter your login" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your passeword" />
          </div>
          <button type="submit">SIGN IN</button>

          <p>
            Forgot your password? <a>Reset Password</a>
          </p>
        </form>
      </article>
    </main>
  );
}
