import React, { useState, useEffect } from "react";
import videoBg from "../Components/Assests/2.jpg";
import backgroundImage from "../Components/Assests/3.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AdminTable = ({
  headers,
  questions,
  answers,
  itemPerPage,
  testName,
}) => {
 
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const onNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const onPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const totalPages = Math.ceil(questions.length / itemPerPage);

  const isSinglePage = totalPages === 1;

  const startIndex = currentPage * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, questions.length);

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
                
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={onPrevPage} disabled={isSinglePage} >
          Geri
        </button>
        <button
          onClick={onNextPage}
          disabled={
            endIndex >= questions.length || endIndex === 0 || isSinglePage }  
        >İleri </button>
        
      </div>
    </div>
  );
};

export default AdminTable;
