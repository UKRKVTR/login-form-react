import React, { useState } from "react";
import styles from "./style.module.scss";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";

const REG_EXP = {
  login: /^[a-zA-Z][a-zA-Z0-9]{5,19}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_=+]{8,}$/,
};

function LoginForm() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passType, setPassType] = useState(true);
  function setHandlerUname({ target: { value } }) {
    setUname(value);
  }
  function changeView() {
    setPassType(!passType);
  }
  function setHandlerPassword({ target: { value } }) {
    setPassword(value);
  }
  function setHandlerConfPassword({ target: { value } }) {
    setConfirmPassword(value);
  }
  const regExpUname = `${
    REG_EXP.login.test(uname) ? styles.valid : styles.invalid
  }`;
  const regExpPassword = `${
    REG_EXP.password.test(password) ? styles.valid : styles.invalid
  }`;
  const regExpConfPassword = `${
    confirmPassword !== "" && confirmPassword === password
      ? styles.valid
      : styles.invalid
  }`;
  return (
    <article>
      <h1>Log in</h1>
      <form action="">
        <label htmlFor="uname">Username</label>
        <input
          type="text"
          value={uname}
          onChange={setHandlerUname}
          name="uname"
          required
          className={regExpUname}
        />

        <label htmlFor="password">Password</label>
        <div className={styles.passwordField}>
          <input
            type={passType ? "password" : "text"}
            value={password}
            onChange={setHandlerPassword}
            name="password"
            required
            className={regExpPassword}
          />
          <PiEyeBold
            onClick={changeView}
            className={`${styles.icon} ${
              passType ? styles.passwordIcon : styles.passwordIconHidden
            }`}
          />
          <PiEyeClosedBold
            onClick={changeView}
            className={` ${styles.icon} ${
              !passType ? styles.passwordIcon : styles.passwordIconHidden
            }`}
          />
        </div>
        <label htmlFor="confPassword">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={setHandlerConfPassword}
          name="confirmPassword"
          required
          className={regExpConfPassword}
        />

        <div className={styles.userAgree}>
          <input type="checkbox" required />
          <p>
            By clicking the 'Register' button, you agree to the terms of use and
            privacy policy of our website.
          </p>
        </div>
        <button>SignUp</button>
      </form>
    </article>
  );
}

export default LoginForm;
