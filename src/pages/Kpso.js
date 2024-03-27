import React, { useState } from "react";
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

  const [answers, setAnswers] = useState(Array(21).fill(0));
  const itemsPerPage = 6;

  const handleSubmit = () => {
    console.log(answers);
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
