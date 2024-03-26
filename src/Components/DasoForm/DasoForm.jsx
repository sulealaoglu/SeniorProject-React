import React, { useState } from "react";
import RadioTable from "../RadioTable";

const DasoTest = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(21).fill(0));
  const itemsPerPage = 7;

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

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
    "21.Hayatın anlamsız olduğu hissine kapıldım.",
  ];

  const totalPages = Math.ceil(questions.length / itemsPerPage);

  const startQuestionIndex = currentPage * itemsPerPage;
  const endQuestionIndex = Math.min(
    startQuestionIndex + itemsPerPage,
    questions.length
  );
  const currentQuestions = questions.slice(
    startQuestionIndex,
    endQuestionIndex
  );
  const headers = [
    "Soru",
    "Hiçbir zaman",
    "Bazen ve ara sıra",
    "Oldukça sık",
    "Her zaman",
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="wrapper-scale">
      <RadioTable
        headers={headers} // Tablo başlıkları
        questions={questions} // Sorular
        answers={answers} // Cevaplar
        setAnswers={setAnswers} // Cevapları güncelleme işlevi
        currentPage={currentPage} // Mevcut sayfa indeksi
        itemPerPage={itemsPerPage} // Her sayfada gösterilecek soru sayısı
        onNextPage={handleNextPage} // Bir sonraki sayfaya gitme işlevi
        onPrevPage={handlePrevPage} // Bir önceki sayfaya gitme işlevi
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default DasoTest;
