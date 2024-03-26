import React, { useState } from "react";

const InputComponent = ({ onTextReceived }) => {
  const [dailyText, setDailyText] = useState("");

  const handleInputChange = (event) => {
    setDailyText(event.target.value);
  };

  const handleSubmit = () => {
    console.log(dailyText);
    onTextReceived(dailyText); // Girilen metni ana bileşene iletiyoruz
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
