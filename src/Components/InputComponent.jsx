import React, { useState } from "react";
import axios from "axios";

const InputComponent = ({ onTextReceived, onSentimentResultReceived }) => {
  const [dailyText, setDailyText] = useState("");

  const handleInputChange = (event) => {
    setDailyText(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:5285/api/paradigm",
        {
          title: "Sınav Stresi",
          content: dailyText,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        onSentimentResultReceived(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    onTextReceived(dailyText);
  };

  return (
    <div className="wrapper-ddvp">
      <h3>Sınav stresi hakkındaki düşüncelerinizi yazınız.</h3>
      <br />
      <input
        type="text"
        style={{ width: "550px", height: "250px" }}
        placeholder="Buraya düşüncelerinizi yazınız."
        value={dailyText}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleSubmit}>Gönder</button>
    </div>
  );
};

export default InputComponent;
