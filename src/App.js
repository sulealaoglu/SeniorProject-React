<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Route, Routes, Pri } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  return (
    <>
      <Routes>
        {<Route path="/register" element={<Register />} />}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
=======
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";
import PndoForm from "./Components/PnoForm/PndoForm";
import KpsoForm from "./Components/KpsoForm/KpsoForm";
import TsgoForm from "./Components/TsgoForm/TsgoForm";
import DasoForm from "./Components/DasoForm/DasoForm";
function App() {
  return (
    <div className="App">
      <DasoForm />
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
