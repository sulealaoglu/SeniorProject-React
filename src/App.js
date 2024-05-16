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
import SecondBlog from "./pages/SecondBlog.js";
import ThirdBlog from "./pages/ThirdBlog.js";
import FourthBlog from "./pages/FourthBlog.js";
import FifthBlog from "./pages/FifthBLog";
import SixthBlog from "./pages/SixthBlog.js";
import Admin from "./pages/Admin.js";
import Navbar from "./Components/NavBar.jsx";
const NotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
};
function App() {
  return (
    <>
      <Routes>
        {<Route path="/register" element={<Register />} />}
        <Route path="/" element={<Login />} />
        <Route path="/kpso" element={<KpsoForm />} />
        <Route path="/daso" element={<DasoForm />} />
        <Route path="/tsgo" element={<TsgoForm />} />
        <Route path="/pndo" element={<PndoForm />} />
        <Route path="/Takvim" element={<MoodCalendar />} />
        <Route path="/DDVP" element={<DDVP />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/FirstBlog" element={<FirstBlog />} />
        <Route path="/SecondBlog" element={<SecondBlog />} />
        <Route path="/ThirdBlog" element={<ThirdBlog />} />
        <Route path="/FourthBlog" element={<FourthBlog />} />
        <Route path="/FifthBlog" element={<FifthBlog />} />
        <Route path="/SixthBlog" element={<SixthBlog />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
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
