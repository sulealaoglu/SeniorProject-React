import React, { useState } from "react";
import axios from "axios";

const InputComponent = ({ onTextReceived, onSentimentResultReceived }) => {
  const [dailyText, setDailyText] = useState("");

  const handleInputChange = (event) => {
    setDailyText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/sentiment",
        dailyText,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
    } catch (error) {
      console.error("Error sending the POST request", error);
    }
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
