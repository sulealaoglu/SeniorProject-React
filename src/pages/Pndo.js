import React, { useState } from "react";
import RadioTable from "../Components/RadioTable";
export default function Pndo() {
  const questions = [
    "İlgili",
    "Sıkıntılı",
    "Heyecanlı",
    "Mutsuz",
    "Güçlü",
    "Suçlu",
    "Ürkmüş",
    "Düşmanca",
    "Hevesli",
    "Gururlu",
    "Asabi",
    "Uyanık",
    "Utanmış",
    "İlhamlı",
    "Sinirli",
    "Kararlı",
    "Dikkatli",
    "Tedirgin",
    "Aktif",
    "Korkmuş",
  ];

  const headers = ["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"];

  const [answers, setAnswers] = useState(Array(21).fill(0));
  const itemsPerPage = 10;

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
