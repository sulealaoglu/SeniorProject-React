// import React from 'react';
// import './style.css';
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// export default function Blog() {
//     // Sample data for the boxes
//     const boxes = [
//         { id: 1, image: '../Components/Assests/guvenblog.jpg', text: 'Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?' },
//         { id: 2, image: '/path/to/image2.jpg', text: 'Text 2' },
//         { id: 3, image: '/path/to/image3.jpg', text: 'Text 3' },
//         { id: 4, image: '/path/to/image4.jpg', text: 'Text 4' },
//         { id: 5, image: '/path/to/image5.jpg', text: 'Text 5' },
//         { id: 6, image: '/path/to/image6.jpg', text: 'Text 6' }
//     ];

//     return (
//         <div className="grid-container">
//         {boxes.map(box => (
//             <NavLink to="/firstBlog" key={1}>
//             </NavLink>
//         ))}
//     </div>

//     );
// }
import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/NavBar";

export default function Blog() {
  // Sample data for the boxes
  const boxes = [
    {
      id: 1,
      image: "../Components/Assests/guvenblog.jpg",
      text: "Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?",
    },
    { id: 2, image: "/path/to/image2.jpg", text: "Text 2" },
    { id: 3, image: "/path/to/image3.jpg", text: "Text 3" },
    { id: 4, image: "/path/to/image4.jpg", text: "Text 4" },
    { id: 5, image: "/path/to/image5.jpg", text: "Text 5" },
    { id: 6, image: "/path/to/image6.jpg", text: "Text 6" },
  ];

  return (
    <div>
      <Navbar />
      <div className="grid-container">
        {boxes.map((box) => (
          <NavLink to="/firstBlog" key={box.id} className="grid-item">
            <img src={box.image} alt={`Image ${box.id}`} />
            <p>{box.text}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
