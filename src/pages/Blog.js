import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/NavBar";


export default function Blog() {
  const boxes = [
    {
      id: 1,
      image: "3/Components/Assests/Blog/guvenblog.jpg",
      text: "Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?",
      link: "/FirstBlog"
    },
    { id: 2, image: "/path/to/image2.jpg", 
    text: "Başarısızlık Korkusu (Atikifobi): İçsel Engelleri Aşma ve Kişisel Gelişimde Güçlenme Yolları", 
    link: "/SecondBlog" },
    { id: 3, image: "/path/to/image3.jpg", 
    text: "Öğrenilmiş Çaresizlik Nedir? Hayatınızı Nasıl Etkiler?", 
    link: "/ThirdBlog" },
    { id: 4, image: "/path/to/image4.jpg", 
    text: "Melankoli ile Yüzleşmek: Mutsuzluk Hissinin Kökenleri ve Pozitif Değişim İçin Adımlar", 
    link: "/FourthBlog" },
    { id: 5, image: "/path/to/image5.jpg", text: "Kusursuza Ulaşma Çabası: Mükemmeliyetçilik Nedir? Altında Yatan Sebepler ve Etkileri", link: "/FifthBlog" },
    { id: 6, image: "/path/to/image6.jpg", text: "Neden Yetersiz Hissederiz? Yetersizlik Hissini Nasıl Yenebiliriz?", link: "/SixthBlog" },
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
