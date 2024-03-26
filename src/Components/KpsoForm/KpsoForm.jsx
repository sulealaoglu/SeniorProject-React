import React, { useState } from "react";
import "../../pages/style.css";
import RadioTable from "../RadioTable";

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

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  // Sorular listesi
  const questions = [
    "Sıkıntılı Zamanlardan sonra kendimi çabucak toparlayabilirim.",
    "Stresli olayların üstesinden gelmekte güçlük çekerim.",
    "Stresli durumlardan sonra kendime gelmem uzun zaman almaz.",
    "Kötü bir şeyler olduğunda bunu atlatmak benim için zordur.",
    "Zor zamanları çok az sıkıntıyla atlatırım.",
    "Hayatımdaki olumsuzlukların etkisinden kurtulmam uzun zaman alır.",
  ];
  const headers = [
    "Soru",
    "Hiç uygun değil",
    "Uygun değil",
    "Biraz uygun",
    "Uygun",
    "Tamamen uygun",
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

export default KpsoTest;
