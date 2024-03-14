
import React, { useState } from 'react';

const PndoTest = () => {
  // State tanımlamaları
  const [answers, setAnswers] = useState(Array(20).fill(0));

  // Cevapları işleme fonksiyonu
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  // Cevapları gönderme işlevi
  const handleSubmit = () => {
    console.log(answers);
  };

  // Sorular listesi
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
    "Korkmuş"
  ];

  return (
    <div className="container">
      <table className="pndo-table">
        <thead>
          <tr>
            <th>Soru</th>
            <th>Hiç</th>
            <th>Çok az</th>
            <th>Orta düzeyde</th>
            <th>Sıklıkla</th>
            <th>Çok</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question}</td>
              {[...Array(5)].map((_, value) => (
                <td key={value}>
                  <input
                    type="radio"
                    value={value + 1}
                    checked={answers[index] === value + 1}
                    onChange={() => handleAnswerChange(index, value + 1)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Cevapları Gönder</button>
    </div>
  );
};

export default PndoTest;

