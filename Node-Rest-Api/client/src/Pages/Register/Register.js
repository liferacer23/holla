import React from "react";
import styles from "./Register.module.css";
export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <div className={styles.registerTop}>
          <h3 className={styles.registerLogo}>Holla!!</h3>
          <span className={styles.registerDesc}>
            Connect with friends on Holla!!
          </span>
        </div>
        <div className={styles.registerBottom}>
          <div className={styles.registerBox}>
            <input
              className={styles.registerInput}
              placeholder="User Name"
              type="text"
            />
            <input
              className={styles.registerInput}
              placeholder="Email"
              type="text"
            />
            <input
              className={styles.registerInput}
              placeholder="Password"
              type="password"
            />
            <input
              className={styles.registerInput}
              placeholder="Confirm Email"
              type="password"
            />
            <button className={styles.registerButton}>Sign Up</button>
            <span  className={styles.registerForgot}> Or</span>
            <button className={styles.registerRegisterButton}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
