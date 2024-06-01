import React from "react";

// Örnek resim yollarının doğru olduğundan emin olun
import image1 from "../Components/Assests/blogs/guven.png"; // Resim dosyasının doğru yolu
import image2 from "../Components/Assests/blogs/guven.png"; // Diğer resim yolları
import image3 from "../Components/Assests/blogs/guven.png";
import image4 from "../Components/Assests/blogs/guven.png";
import image5 from "../Components/Assests/blogs/guven.png";
import image6 from "../Components/Assests/blogs/guven.png";

const boxes = [
  {
    id: 1,
    image: image1,
    text: "Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?",
    link: "/FirstBlog",
  },
  {
    id: 2,
    image: image2,
    text: "Başarısızlık Korkusu (Atikifobi): İçsel Engelleri Aşma ve Kişisel Gelişimde Güçlenme Yolları",
    link: "/SecondBlog",
  },
  {
    id: 3,
    image: image3,
    text: "Öğrenilmiş Çaresizlik Nedir? Hayatınızı Nasıl Etkiler?",
    link: "/ThirdBlog",
  },
  {
    id: 4,
    image: image4,
    text: "Melankoli ile Yüzleşmek: Mutsuzluk Hissinin Kökenleri ve Pozitif Değişim İçin Adımlar",
    link: "/FourthBlog",
  },
  {
    id: 5,
    image: image5,
    text: "Kusursuza Ulaşma Çabası: Mükemmeliyetçilik Nedir? Altında Yatan Sebepler ve Etkileri",
    link: "/FifthBlog",
  },
  {
    id: 6,
    image: image6,
    text: "Neden Yetersiz Hissederiz? Yetersizlik Hissini Nasıl Yenebiliriz?",
    link: "/SixthBlog",
  },
];

const BlogBoxes = () => {
  return (
    <div className="blog-boxes">
      {boxes.map((box) => (
        <div key={box.id} className="blog-box">
          <a href={box.link}>
            <img src={box.image} alt={box.text} />
            <p>{box.text}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogBoxes;
