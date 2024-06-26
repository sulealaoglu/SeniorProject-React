import React, { useState } from "react";
import RadioTable from "../Components/RadioTable";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(20).fill(-1));
  const itemsPerPage = 10;
  let negative = 0;
  let pozitive = 0;
  const [totalScore, setTotalScore] = useState(0);
  const [testName, setTestName] = useState("PNDO");

  const calculate = () => {
    pozitive =
      answers[0] +
      answers[2] +
      answers[4] +
      answers[8] +
      answers[9] +
      answers[11] +
      answers[13] +
      answers[15] +
      answers[16] +
      answers[18];
    negative =
      answers[1] +
      answers[3] +
      answers[5] +
      answers[6] +
      answers[7] +
      answers[10] +
      answers[12] +
      answers[14] +
      answers[17] +
      answers[19];
  };

  // const handleSubmit = () => {
  //   pozitive =
  //     answers[0] +
  //     answers[2] +
  //     answers[4] +
  //     answers[8] +
  //     answers[9] +
  //     answers[11] +
  //     answers[13] +
  //     answers[15] +
  //     answers[16] +
  //     answers[18];
  //   negative =
  //     answers[1] +
  //     answers[3] +
  //     answers[5] +
  //     answers[6] +
  //     answers[7] +
  //     answers[10] +
  //     answers[12] +
  //     answers[14] +
  //     answers[17] +
  //     answers[19];
  //   const answersJson = JSON.stringify(answers);
  //   console.log(answersJson);
  //   console.log("pozitif" + pozitive);
  //   console.log("negatif" + negative);

  //   navigate("/daso");
  // };

  return (
    <div className="wrapper-scale">
      <RadioTable
        headers={headers} // Tablo başlıkları
        questions={questions} // Sorular
        answers={answers} // Cevaplar
        setAnswers={setAnswers} // Cevapları güncelleme işlevi
        itemPerPage={itemsPerPage} // Her sayfada gösterilecek soru sayısı
        calculateScore={calculate}
        navigatePage="/daso"
        totalScore={totalScore}
        testName={testName}
      />
    </div>
  );
}
