import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "../Components/NavBar";
import firstPhoto from "../Components/Assests/blogs/header/guven.png";
import secPhoto from "../Components/Assests/blogs/header/basarisizlik.png";
import thirdPhoto from "../Components/Assests/blogs/header/caresizlik.png";
import fourthPhoto from "../Components/Assests/blogs/header/melankoli.png";
import fifthPhoto from "../Components/Assests/blogs/header/mukemmelliyetci.png";
import sixthPhoto from "../Components/Assests/blogs/header/mukemmelliyetci.png";
export default function Blog() {
  const boxes = [
    {
      id: 1,
      image: firstPhoto,
      text: "Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?",
      link: "/FirstBlog",
    },
    {
      id: 2,
      image: secPhoto,
      text: "Başarısızlık Korkusu (Atikifobi): İçsel Engelleri Aşma ve Kişisel Gelişimde Güçlenme Yolları",
      link: "/SecondBlog",
    },
    {
      id: 3,
      image: thirdPhoto,
      text: "Öğrenilmiş Çaresizlik Nedir? Hayatınızı Nasıl Etkiler?",
      link: "/ThirdBlog",
    },
    {
      id: 4,
      image: fourthPhoto,
      text: "Melankoli ile Yüzleşmek: Mutsuzluk Hissinin Kökenleri ve Pozitif Değişim İçin Adımlar",
      link: "/FourthBlog",
    },
    {
      id: 5,
      image: fifthPhoto,
      text: "Kusursuza Ulaşma Çabası: Mükemmeliyetçilik Nedir? Altında Yatan Sebepler ve Etkileri",
      link: "/FifthBlog",
    },
    {
      id: 6,
      image: sixthPhoto,
      text: "Neden Yetersiz Hissederiz? Yetersizlik Hissini Nasıl Yenebiliriz?",
      link: "/SixthBlog",
    },
  ];

  return (
    <div className="white-background">
      <Navbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {boxes.map((box) => (
          <div
            key={box.id}
            style={{ textAlign: "center" }}
            className="grid-item"
          >
            <img
              src={box.image}
              alt={box.text}
              style={{ width: "150px", height: "150px" }}
            />
            <div>
              <Link to={box.link}>{box.text}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
