import React from "react";
import styles from "./Login.module.css";
export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTop}>
          <h3 className={styles.loginLogo}>Holla!!</h3>
          <span className={styles.loginDesc}>
            Connect with friends on Holla!!
          </span>
        </div>
        <div className={styles.loginBottom}>
          <div className={styles.loginBox}>
            <input
              className={styles.loginInput}
              placeholder="Email"
              type="text"
            />
            <input
              className={styles.loginInput}
              placeholder="Password"
              type="password"
            />
            <button className={styles.loginButton}>Login</button>
            <span  className={styles.loginForgot}> Forgot Password?</span>
            <button className={styles.loginRegisterButton}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
