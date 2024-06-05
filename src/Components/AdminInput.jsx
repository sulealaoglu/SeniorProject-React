import React, { useState } from "react";
import axios from "axios";


const AdminInput = ({ onTextReceived, onSentimentResultReceived }) => {
  const [activeDay, setActiveDay] = useState(1);

  const [texts, setTexts] = useState({
    1: "Sınav stresi beni mahvediyor. Her defasında sanki dünyanın en kötü şeyini yapmam gerekiyormuş gibi hissediyorum. Uykusuz kalıyor, sürekli endişe ve panik içinde yaşıyorum. Bu stres beni motive etmiyor, aksine tam tersi, ders çalışma isteğimi bile elimden alıyor. Her sınav yaklaştığında içimdeki kaygı ve korku artıyor, bu durumun beni nasıl etkileyeceğini düşündükçe içim daralıyor.",
    2: "Sürekli endişe içinde ve motivasyonsuz hissediyorum. Bu stres beni boğuyor, ders çalışma isteğimi bile elimden alıyor. Başa çıkmak gerçekten zor.",
    3: "Sınav stresi bana işkence gibi geliyor. Başlamadan önce midem bulanıyor, soruları görünce beynim donup kalıyor. Sonuç? Fiasko."
  });
 

  const handleNextDay = () => {
    if (activeDay < 3) {
      setActiveDay(activeDay + 1);
    }
  };

  const handlePrevDay = () => {
    if (activeDay > 1) {
      setActiveDay(activeDay - 1);
    }
  };

  return (
    <div className="wrapper-ddvp">
      <h3>{`Gün ${activeDay}: Sınav stresi hakkındaki düşüncelerinizi yazınız.`}</h3>
      <h5>Negative</h5>
      <br />
      <input
        type="text"
        style={{ width: "550px", height: "250px" }}
        value={texts[activeDay]}
    
      />
      <br />
      <button onClick={handlePrevDay} disabled={activeDay === 1}>Geri</button>
      <button onClick={handleNextDay} disabled={activeDay === 3}>İleri</button>
    </div>
  );
};

export default AdminInput;