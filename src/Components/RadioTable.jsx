import React, { useState } from "react";
import "../pages/style.css";

const RadioTable = ({
  headers,
  questions,
  answers,
  setAnswers,
  itemPerPage,
  onSubmit,
}) => {
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const startQuestionIndex = currentPage * itemPerPage;
  const endQuestionIndex = Math.min(
    startQuestionIndex + itemPerPage,
    questions.length
  );

  const onNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const onPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(questions.length / itemPerPage);

  // Tek sayfaya sığacak kadar soru var mı?
  const isSinglePage = totalPages === 1;
  console.log(totalPages);
  console.log(isSinglePage);
  // Mevcut sayfadaki soruların başlangıç ve bitiş indeksleri
  const startIndex = currentPage * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, questions.length);

  // Mevcut sayfadaki soruları al
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="header">
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentQuestions.map((question, index) => (
            <tr key={index} className="row">
              <td className="question">{question}</td>
              {headers.slice(1).map((_, headerIndex) => (
                <td key={headerIndex}>
                  <input
                    type="radio"
                    value={headerIndex + 1}
                    checked={answers[startIndex + index] === headerIndex + 1}
                    onChange={() =>
                      handleAnswerChange(startIndex + index, headerIndex + 1)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={onPrevPage} disabled={isSinglePage}>
          Geri
        </button>
        <button onClick={onSubmit}>Tamamla</button>
        <button
          onClick={onNextPage}
          disabled={
            endIndex >= questions.length || endIndex === 0 || isSinglePage
          }
        >
          İleri
        </button>
      </div>
    </div>
  );
};

export default RadioTable;
