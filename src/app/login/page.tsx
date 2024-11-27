import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.loginContainer}>
      <article className={styles.loginContent}>
        <h1 className={styles.title}>CRUD OPERATIONS</h1>

        <h2 className={styles.sign}>SIGN IN</h2>
        <p>Enter your credentials to access your account</p>

        <form className={styles.loginForm} action="">
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your passeword"
            />
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
