import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RadioTable from "../Components/RadioTable";
export default function Kpso() {
  const questions = [
    "Sıkıntılı Zamanlardan sonra kendimi çabucak toparlayabilirim.",
    "Stresli olayların üstesinden gelmekte güçlük çekerim.",
    "Stresli durumlardan sonra kendime gelmem uzun zaman almaz.",
    "Kötü bir şeyler olduğunda bunu atlatmak benim için zordur.",
    "Zor zamanları çok az sıkıntıyla atlatırım.",
    "Hayatımdaki olumsuzlukların etkisinden kurtulmam uzun zaman alır.",
  ];
  const headers = ["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"];
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(6).fill(-1));
  const itemsPerPage = 6;
  let totalscore = 0;

  const handleSubmit = () => {
    totalscore =
      answers[0] -
      answers[1] +
      answers[2] -
      answers[3] +
      answers[4] -
      answers[5];
    const answersJson = JSON.stringify(answers);
    console.log(answersJson);
    console.log("total score" + totalscore);
    navigate("/tsgoform");
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
