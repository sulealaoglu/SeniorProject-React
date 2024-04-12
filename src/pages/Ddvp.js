import InputComponent from "../Components/InputComponent";
import React, { useState } from "react";

export default function Ddvp() {
  const [receivedText, setReceivedText] = useState("");
  const [sentimentResult, setSentimentResult] = useState("");

  const receiveText = (text) => {
    setReceivedText(text);
  };

  const receiveSentimentResult = (result) => {
    setSentimentResult(result);
  };

  return (
    <div>
      <InputComponent
        onTextReceived={receiveText}
        onSentimentResultReceived={receiveSentimentResult}
      />{" "}
      {/* Input bileşenini dahil ediyoruz ve onTextReceived prop'unu kullanıyoruz */}
      <p>Girilen Metin: {receivedText}</p>
      <p>Sentiment Sonucu: {sentimentResult}</p>
    </div>
  );
}
