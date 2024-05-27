import "./style.css";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import Popup from "react-popup";
import ReactDom from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useContext } from "react";
import videoBg from "../Components/Assests/login.mp4";

export default function Login() {
  // ReactDom.render(<Popup />, document.getElementById("popupContainer"));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiUrl, setApiUrl] = useState("http://localhost:5285/api/account");
  const { user, setUser } = useAuth;

  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    cellPhone: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
    major: "",
    studyYear: "",
    city: "",
    income: 0,
    hasSickness: "",
    isUsingMedicine: "",
    progressLevel: "",
  });
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("butona bastın");
    // Save username and password to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // // başarılı girişten sonra yönlendirme yap (api ile kontrol edilecek)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${apiUrl}/login`, false); // true => asenkron istek
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setUserData(data);
          localStorage.setItem("userData", userData);
          console.log(userData);
          if (userData.progressLevel === 1 || userData.progressLevel === 4)
            navigate("/pndoform");
          else navigate("/ddvp");
        } else {
          console.error("Error fetching user data:", xhr.statusText);
        }
      }
    };

    const requestBody = JSON.stringify({
      userMail: username,
      password: password,
    });

    xhr.send(requestBody);
  };

  return (
    <>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div>
              <h1>{user}</h1>
              <h1>Giriş Yap</h1>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  required
                  value={username}
                  onChange={handleUsernameChange}
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Şifre"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <FaLock className="icon" />
              </div>

              <div className="remember-forgot">
                <a href="#">Şifremi Unuttum</a>
              </div>

              <button type="submit">Giriş Yap</button>

              <div className="register-link">
                <p>
                  Hesabınız yok mu?{" "}
                  <NavLink className="nav-link" to="/register">
                    Kayıt Ol
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
