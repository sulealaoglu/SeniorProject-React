import InputComponent from "../Components/InputComponent";
import React, { useState } from "react";
export default function Ddvp() {
  const [receivedText, setReceivedText] = useState("");

  const receiveText = (text) => {
    setReceivedText(text);
  };
  return (
    <div>
      <InputComponent onTextReceived={receiveText} />{" "}
      {/* Input bileşenini dahil ediyoruz ve onTextReceived prop'unu kullanıyoruz */}
      {/*<p>Girilen Metin: {receivedText}</p>} {/* Girilen metni görüntülüyoruz */}
    </div>
  );
}
