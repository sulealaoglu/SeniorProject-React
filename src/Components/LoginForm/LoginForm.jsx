import React from "react";
import "./LoginForm.css";
//import { FaUser } from "react-icons/fa6";
//import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <div>
          <h1>Login Form</h1>
          <div className="input-box">
            {/* <FaUser className="icon" /> */}
            <input type="text" placeholder="username" required></input>
          </div>
          <div className="input-box">
            {/* <FaLock className="icon" /> */}
            <input type="password" placeholder="password" required></input>
          </div>

          <div className="remember-forgot">
            <a href="">Forgot Password?</a>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
