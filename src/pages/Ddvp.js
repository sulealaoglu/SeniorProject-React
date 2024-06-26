import InputComponent from "../Components/InputComponent";
import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import videoBg from "../Components/Assests/summer.mp4";

export default function Ddvp() {
  const [receivedText, setReceivedText] = useState("");
  const [sentimentResult, setSentimentResult] = useState("");
  const [sentimentWords, setSentimentWords] = useState([]);

  const receiveText = (text) => {
    setReceivedText(text);
  };

  const handleSentimentResultReceived = (result) => {
    const wordListItems = result.words.map((wordObj, index) => (
      <li key={index}>
        <p>Word: {wordObj.word}</p>
        <p>Positive: {wordObj.pos}</p>
        <p>Negative: {wordObj.neg}</p>
      </li>
    ));
    setSentimentResult(result.result);
    setSentimentWords(wordListItems);
  };

  return (
    <>
      <Navbar />
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <InputComponent
          onTextReceived={receiveText}
          onSentimentResultReceived={handleSentimentResultReceived}
        />
        {/* <p>Girilen Metin: {receivedText}</p>
      <p>Sentiment Sonucu: {sentimentResult}</p> */}
        <ul>{sentimentWords}</ul>
      </div>
    </>
  );
}
