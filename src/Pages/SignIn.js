import styles from "./signin.module.css";
import logo from "./assets/logo.png";
import { signupUser } from "../Services/signupService";
import { useState } from "react";
import { Redirect, redirect, Route } from "react-router-dom";
import { notification } from "antd";
const openNotificationAdd = (success) => {
  notification.config({
    duration: 1,
    rtl: true,
  });
  notification[success]({
    message: "ثبت نام شما انجام شد",
  });
};

export function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handlerChangeInputName(e) {
    setName(e.target.value);
  }
  function handlerChangePassword(e) {
    setPassword(e.target.value);
  }
  function handlerChangeInputEmail(e) {
    setEmail(e.target.value);
  }
  function handlerChangeInputPhone(e) {
    setPhoneNumber(e.target.value);
  }

  const [error, setError] = useState(null);
  async function handlerSubmit() {
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };

    try {
      const { data } = await signupUser(userData);
      console.log(data);
      openNotificationAdd("success");
      setName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setError("");
      // return <Redirect to="/" />;
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  }
  return (
    <div className={styles.parent}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <img src={logo} />
          {/* <p>شماره موبایلتان را برای ورود یا ثبت‌نام وارد کنید</p> */}
          <input
            value={name}
            onChange={handlerChangeInputName}
            type="text"
            placeholder="نام کاربری"
            required
          />
          <input
            value={phoneNumber}
            onChange={handlerChangeInputPhone}
            type="text"
            placeholder="شماره موبایل"
            required
          />
          <input
            value={email}
            onChange={handlerChangeInputEmail}
            type="email"
            placeholder="ایمیل"
            required
          />
          <input
            value={password}
            onChange={handlerChangePassword}
            type="password"
            placeholder="رمزعبور"
            required
          />
          {error && <h5 style={{ color: "red" }}>{error}</h5>}
        </div>

        <div className={styles.footer}>
          <button type="submit" onClick={handlerSubmit}>
            ثبت نام
          </button>

          <h6>ثبت‌نام شما به معنای پذیرش قوانین و مقررات است</h6>
        </div>
      </div>
    </div>
  );
}
