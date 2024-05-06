import React, { useState } from "react";
import RadioTable from "../Components/RadioTable";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import videoBg from "../Components/Assests/login.mp4";
export default function Daso() {
  const questions = [
    "1.Gevşeyip rahatlamakta zorluk çektim.",
    "2.Ağzımda kuruluk olduğunu fark ettim.",
    "3.Hiç olumlu duygu yaşayamadığımı fark ettim.",
    "4.Soluk almakta zorluk çektim(örneğin fiziksel egzersiz yapmadığım halde aşırı hızlı nefes alma,nefessiz kalma gibi).",
    "5.Bir iş yapmak için gerekli olan ilk adımı atmakta zorlandım.",
    "6.Olaylara aşırı tepki vermeye meyilliyim.",
    "7.Vücudumda (örneğin ellerimde) terlemeler oldu.",
    "8.Sinirsel enerjimi çok fazla kullandığımı hissettim.",
    "9.Panikleeyip kendimi aptal durumuna düşüreceğim durumlar nedeniyle endişelendim.",
    "10.Hiçbir beklentimin olmadığı hissine kapıldım.",
    "11.Kışkırtılmakta olduğumu hissettim.",
    "12.Kendimi gevşetip salıvermek zor geldi.",
    "13.Kendimi perişan ve üzgün hissettim.",
    "14.Beni yaptığım işten alıkoyan şeylere dayanamıyordum.",
    "15.Panik haline yakın olduğumu hissettim.",
    "16.Hiçbir şey bende heyecan uyandırmıyordu",
    "17.Birey olarak değersiz olduğumu hissettim.",
    "18.Alıngan olduğumu hissettim.",
    "19.Fiziksel egzersiz söz konusu olmadığı halde kalbimin hareketlerini hissettim(kalp atışlarımın hızlandığını veya düzensizleştiğini hissettim).",
    "20.Geçerli bir neden olmadığı halde korktuğumu hissettim.",
    "21.Hayatın anlamsız olduğu hissine kapıldım.",
  ];

  const headers = [
    "Son 10 gündeki durumunuz (özellikle son 1 hafta)",
    "Hiçbir zaman",
    "Bazen ve ara sıra",
    "Oldukça sık",
    "Her zaman",
  ];
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(21).fill(0));
  const itemsPerPage = 7;
 let stres;
 let depression;
 let anxiety;
  const handleSubmit = () => {
    stres = answers [0]+ answers [5]+ answers [7]+ answers [10]+ answers [11]+ answers [13]+ answers [17];
    depression = answers [2]+ answers [4]+ answers [9]+ answers [12]+ answers [15]+ answers [16]+ answers [20];
    anxiety = answers [1]+ answers [3]+ answers [6]+ answers [8]+ answers [14]+ answers [18]+ answers [19];
    console.log(answers);
    const answersJson = JSON.stringify(answers);
    console.log("stres"+ stres);
    console.log("depresyon"+ depression);
    console.log("anksiyete"+ anxiety);
    console.log(answersJson);
    navigate("/kpsoform");
  };

  return (
 
    <div className="wrapper-scale">
      <RadioTable
        headers={headers} // Tablo başlıkları
        questions={questions} // Sorular
        answers={answers} // Cevaplar
        setAnswers={setAnswers} // Cevapları güncelleme işlevi
        itemPerPage={itemsPerPage} // Her sayfada gösterilecek soru sayısı
        onSubmit={handleSubmit}
      />
    </div>

  );
}
