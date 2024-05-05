import React from "react";
import Navbar from "../Components/NavBar.jsx";
import BlogSlider from "../Components/BlogSlider.jsx";
import MotivationalSentence from "../Components/MotivationalSentence.jsx";
import { format } from "date-fns";
import "./style.css";

const Home = () => {
  const currentDate = format(new Date(), "PPPP");

  return (
    <div className="home-app">
      <Navbar />
      <div className="home-content">
        <MotivationalSentence text="You are stronger than you think!" />
        <div className="date">{currentDate.toUpperCase()}</div>
        <BlogSlider />
      </div>
    </div>
  );
};

export default Home;
