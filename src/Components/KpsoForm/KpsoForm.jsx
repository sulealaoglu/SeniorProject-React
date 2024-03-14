
import React, { useState } from 'react';

const KpsoTest = () => {
  // State tanımlamaları
  const [answers, setAnswers] = useState(Array(6).fill(0));

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
    "Sıkıntılı Zamanlardan sonra kendimi çabucak toparlayabilirim.",
    "Stresli olayların üstesinden gelmekte güçlük çekerim.",
    "Stresli durumlardan sonra kendime gelmem uzun zaman almaz.",
    "Kötü bir şeyler olduğunda bunu atlatmak benim için zordur.",
    "Zor zamanları çok az sıkıntıyla atlatırım.",
    "Hayatımdaki olumsuzlukların etkisinden kurtulmam uzun zaman alır."
  ];

  return (
    <div className="container">
      <table className="pndo-table">
        <thead>
          <tr>
            <th>Soru</th>
            <th>Hiç uygun değil</th>
            <th>Uygun değil</th>
            <th>Biraz uygun</th>
            <th>Uygun</th>
            <th>Tamamen uygun</th>
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

export default KpsoTest;

