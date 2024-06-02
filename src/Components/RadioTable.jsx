import React, { useState, useEffect } from "react";
import videoBg from "../Components/Assests/2.jpg";
import backgroundImage from "../Components/Assests/3.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const RadioTable = ({
  headers,
  questions,
  answers,
  setAnswers,
  itemPerPage,
  calculateScore,
  totalScore,
  navigatePage,
  testName,
}) => {
  useEffect = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.progressLevel > 1) {
      testName = testName + "_2";
    }
    axios
      .post(
        "http://localhost:5285/api/test/create",
        {
          name: testName,
          mail: localStorage.getItem("username"),
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigate = useNavigate();
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    const flag = newAnswers.every(
      (answer) => answer !== undefined && answer !== null && answer !== -1
    );

    setAllQuestionsAnswered(flag);
    if (allQuestionsAnswered) calculateScore();
  };

  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const onNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const onPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const answersAsJson = () => {
    let answersJson = {
      name: testName,
      mail: localStorage.getItem("username"),
      answers: [],
    };
    answers.forEach((answer, index) => {
      answersJson.answers.push({
        question: (index + 1).toString(),
        answer: answer.toString(),
      });
    });
    answersJson = JSON.stringify(answersJson);
    return answersJson;
  };

  const handleSubmit = () => {
    const body = answersAsJson();
    console.log(body);
    axios
      .post(
        "http://localhost:5285/api/test/solve",
        {
          body,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        // onSentimentResultReceived(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    navigate(navigatePage);
  };

  const totalPages = Math.ceil(questions.length / itemPerPage);

  const isSinglePage = totalPages === 1;

  const startIndex = currentPage * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, questions.length);

  const currentQuestions = questions.slice(startIndex, endIndex);

  // const allQuestionsAnswered = answers.every(
  //   (answer) => answer !== undefined && answer !== null && answer !== ""
  // );

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
        <button
          onClick={onNextPage}
          disabled={
            endIndex >= questions.length || endIndex === 0 || isSinglePage
          }
        >
          İleri
        </button>
        {allQuestionsAnswered && (
          <button onClick={handleSubmit}>Tamamla</button>
        )}
      </div>
    </div>
  );
};

export default RadioTable;
