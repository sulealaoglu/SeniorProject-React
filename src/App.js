import React from "react";
import { BrowserRouter as Router, Route, Routes, Pri } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register.js";
import Profile from "./pages/Profile.js";
import DDVP from "./pages/Ddvp.js";
import PrivateRoute from "./Components/PrivateRoute";
import DasoForm from "./pages/Daso.js";
import KpsoForm from "./pages/Kpso.js";
import TsgoForm from "./pages/Tsgo.js";
import PndoForm from "./pages/Pndo.js";
import MoodCalendar from "./pages/MoodCalendar.js";
import Blog from "./pages/Blog.js";
import FirstBlog from "./pages/FirstBlog.js";
import Admin from "./pages/Admin.js";
import Navbar from "./Components/NavBar.jsx";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {<Route path="/register" element={<Register />} />}
        <Route path="/" element={<Login />} />
        <Route path="/kpsoform" element={<KpsoForm />} />
        <Route path="/dasoform" element={<DasoForm />} />
        <Route path="/tsgoform" element={<TsgoForm />} />
        <Route path="/pndoform" element={<PndoForm />} />
        <Route path="/Takvim" element={<MoodCalendar />} />
        <Route path="/DDVP" element={<DDVP />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FirstBlog" element={<FirstBlog />} />
        <Route path="/Admin" element={<Admin />} />
        {/* <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />  */}
      </Routes>
    </>
  );
}

export default App;
