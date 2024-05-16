import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/NavBar";
import blogPhoto from '../Components/Assests/blogs/guvenblog.jpg'; // Fotoğrafınızın yolu

export default function Blog() {
  // Sample data for the boxes with specific links for each blog
  const boxes = [
    {
      id: 1,
      image: "../Components/Assests/guvenblog.jpg",
      text: "Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?",
      link: "/FirstBlog"
    },
    { id: 2, image: "/path/to/image2.jpg", text: "Text 2", link: "/SecondBlog" },
    { id: 3, image: "/path/to/image3.jpg", text: "Text 3", link: "/ThirdBlog" },
    { id: 4, image: "/path/to/image4.jpg", text: "Text 4", link: "/FourthBlog" },
    { id: 5, image: "/path/to/image5.jpg", text: "Text 5", link: "/FifthBlog" },
    { id: 6, image: "/path/to/image6.jpg", text: "Text 6", link: "/SixthBlog" },
  ];

  return (
    <div>
      <Navbar />
      <div className="grid-container">
        {boxes.map((box) => (
          <NavLink to={box.link} key={box.id} className="grid-item">
            <img src={box.image} alt={`Image ${box.id}`} />
            <p>{box.text}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
