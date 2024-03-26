import React from "react";
import { BrowserRouter as Router, Route, Routes, Pri } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./Components/RegisterForm/RegisterForm.jsx";
import Profile from "./pages/Profile";
import DDVP from "./pages/Ddvp.js";
import PrivateRoute from "./Components/PrivateRoute";
import DasoForm from "./Components/DasoForm/DasoForm.jsx";
import KpsoForm from "./Components/KpsoForm/KpsoForm.jsx";
import TsgoForm from "./Components/TsgoForm/TsgoForm.jsx";
import PndoForm from "./Components/PnoForm/PndoForm.jsx";
function App() {
  return (
    <>
      <Routes>
        {<Route path="/register" element={<Register />} />}
        <Route path="/" element={<Login />} />
        <Route path="/kpsoform" element={<KpsoForm />} />
        <Route path="/dasoform" element={<DasoForm />} />
        <Route path="/tsgoform" element={<TsgoForm />} />
        <Route path="/pndoform" element={<PndoForm />} />
        <Route path="/DDVP" element={<DDVP />} />
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
  );
}

export default App;
