import "./style.css";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useAuth;
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("butona bastın");
    // // başarılı girişten sonra yönlendirme yap (api ile kontrol edilecek)
    // setUser(username); //sisteme giriş yapılan kullanıcıyı tanımla
    // //navigate("/home"); // ana sayfaya yönlendirme
    navigate("/home");
  };

  return (
    <>
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
    </>
  );
}
