import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RadioTable from "../Components/RadioTable";
import axios from "axios";
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
  const [answers, setAnswers] = useState(Array(6).fill(-1));
  const itemsPerPage = 6;
  const [totalScore, setTotalScore] = useState(0);
  const [testName, setTestName] = useState("KPSO");

  // const answersAsJson = () => {
  //   let answersJson = {
  //     name: "KPSO",
  //     mail: localStorage.getItem("username"),
  //     answers: [],
  //   };
  //   answers.forEach((answer, index) => {
  //     answersJson.answers.push({
  //       question: [index + 1],
  //       answer: answer.toString(),
  //     });
  //   });
  //   answersJson = JSON.stringify(answersJson);
  //   return answersJson;
  // };
  const calculate = () => {
    let totalscore =
      answers[0] -
      answers[1] +
      answers[2] -
      answers[3] +
      answers[4] -
      answers[5];
    setTotalScore(totalscore);
  };

  // const handleSubmit = () => {
  //   totalscore =
  //     answers[0] -
  //     answers[1] +
  //     answers[2] -
  //     answers[3] +
  //     answers[4] -
  //     answers[5];

  //   const body = console.log(answersAsJson());
  //   console.log("total score" + totalscore);
  //   axios
  //     .post(
  //       "http://localhost:5285/api/test/solve",
  //       {
  //         body,
  //       },
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //     .then((response) => {
  //       // onSentimentResultReceived(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   navigate("/tsgo");
  // };

  return (
    <div className="bg-test">
      <div className="wrapper-scale">
        <RadioTable
          headers={headers} // Tablo başlıkları
          questions={questions} // Sorular
          answers={answers} // Cevaplar
          setAnswers={setAnswers} // Cevapları güncelleme işlevi
          itemPerPage={itemsPerPage} // Her sayfada gösterilecek soru sayısı
          calculateScore={calculate}
          navigatePage="/tsgo"
          totalScore={totalScore}
          testName={testName}
        />
      </div>
    </div>
  );
}
