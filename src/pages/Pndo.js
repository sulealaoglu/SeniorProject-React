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
  let negative = 0;
  let pozitive = 0;

  const handleSubmit = () => {
    pozitive = answers [0]+ answers [2]+ answers [4]+ answers [8]+ answers [9]+ answers [11]+ answers [13]+ answers [15]+ answers [16]+ answers [18];
    negative = answers [1]+ answers [3]+ answers [5]+ answers [6]+ answers [7]+ answers [10]+ answers [12]+ answers [14]+ answers [17]+ answers [19];
    console.log(answers);
    console.log ("pozitif"+pozitive);
    console.log ("negatif"+negative);
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
