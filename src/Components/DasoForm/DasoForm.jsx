
import React, { useState } from 'react';

const DasoTest = () => {
  // State tanımlamaları
  const [answers, setAnswers] = useState(Array(21).fill(0));

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
    "21.Hayatın anlamsız olduğu hissine kapıldım."
  ];

  return (
    <div className="container">
      <table className="pndo-table">
        <thead>
          <tr>
            <th>Soru</th>
            <th>Hiçbir zaman</th>
            <th>Bazen ve ara sıra</th>
            <th>Oldukça sık</th>
            <th>Her zaman</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question}</td>
              {[...Array(4)].map((_, value) => (
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

export default DasoTest;

